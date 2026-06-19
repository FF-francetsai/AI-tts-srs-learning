// js/chat.js v7.0
// ─────────────────────────────────────────────────────────────────────────────
// 供應商優先順序（零硬碼 API Key）：
//   1. 🔑 使用者 BYOK (localStorage) — Gemini / GPT / Claude / NVIDIA / HF
//   2. ☁️ CF Worker proxy → HF Qwen3-8B → CF AI → NVIDIA NIM (key 存 Worker secret)
//   3. 🌸 Pollinations.ai (匿名備援，無需任何 key)
// ─────────────────────────────────────────────────────────────────────────────
(function (global) {
  'use strict';
  if (global.AIChat) return;

  // ── 供應商 URL（由 providers.js 設定，無敏感資料）──────────────────────
  const _P = global.AI_PROVIDERS || {};

  // CF Worker URL：部署後由 providers.js 填入（不含任何 API key）
  const CF_WORKER_URL = _P.cf_worker_url || '';

  // Pollinations 備援（匿名，無 key）
  const POLL_URL   = 'https://text.pollinations.ai/openai';
  const POLL_MODEL = 'openai-fast';

  // 繁體中文系統提示（統一格式）
  const SYS_ZH_TW =
    '你是 AI 學習助理，專門協助學習 AI 相關術語與概念。' +
    '請務必使用繁體中文回答，禁止使用任何簡體字。' +
    '回答簡潔清晰，適合學習者理解。/no_think';

  // ── BYOK 供應商偵測 ────────────────────────────────────────────────────
  const BYOK_PROVIDERS = {
    claude:      { prefix: 'sk-ant-', name: 'Anthropic Claude',  icon: '🤖' },
    openai:      { prefix: 'sk-',     name: 'OpenAI ChatGPT',    icon: '🟢' },
    gemini:      { prefix: 'AIzaSy',  name: 'Google Gemini',     icon: '🔷' },
    nvidia:      { prefix: 'nvapi-',  name: 'NVIDIA NIM Build',  icon: '🟩' },
    huggingface: { prefix: 'hf_',     name: 'Hugging Face',      icon: '🤗' },
  };

  function _detectProvider(key) {
    if (!key) return null;
    // claude 必須在 openai 之前（兩者都以 sk- 開頭）
    for (const [id, info] of Object.entries(BYOK_PROVIDERS)) {
      if (key.startsWith(info.prefix)) return id;
    }
    return null;
  }

  // ── AIChat 主類 ────────────────────────────────────────────────────────
  class AIChat {
    constructor() {
      this.abortController = null;
      this._onStream       = null;
      this.ttsEnabled      = true;
    }

    // ── TTS ──────────────────────────────────────────────────────────────
    _ttsClean(text) {
      return text
        .replace(/https?:\/\/([^\s/]+)[^\s]*/g, (_, d) => `網址 ${d}`)
        .replace(/```[\s\S]*?```/g, '程式碼區塊')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/#+\s/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/[【】《》「」『』〔〕]/g, '')
        .replace(/[-—–]{2,}/g, '，')
        .replace(/[•·→←↑↓⬆⬇]/g, '')
        .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
        .replace(/[*_~#]/g, '')
        .replace(/ {2,}/g, ' ')
        .trim();
    }

    async ttsSpeak(text) {
      if (!this.ttsEnabled || !text) return;
      this.ttsStop();
      const clean = this._ttsClean(text);
      if (!clean) return;

      // ① 優先：mllm_app 本地 edge-tts（zh-TW-HsiaoChenNeural 神經擬真女聲）
      try {
        const ctrl = new AbortController();
        const tid  = setTimeout(() => ctrl.abort(), 6000);
        const res  = await fetch('http://localhost:8501/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: clean }),
          signal: ctrl.signal
        });
        clearTimeout(tid);
        if (res.ok) {
          const blob  = await res.blob();
          const url   = URL.createObjectURL(blob);
          const audio = new Audio(url);
          this._ttsAudio = audio;
          audio.onended = () => { URL.revokeObjectURL(url); this._ttsAudio = null; };
          audio.onerror = () => { URL.revokeObjectURL(url); this._ttsAudio = null; };
          await audio.play();
          return;
        }
      } catch(_) { /* 本地服務未啟動，降級 Web Speech */ }

      // ② 備援：瀏覽器 Web Speech API（Microsoft HsiaoChen 優先）
      if (!('speechSynthesis' in window)) return;
      const utt    = new SpeechSynthesisUtterance(clean);
      utt.lang     = 'zh-TW';
      utt.rate     = 1.05;
      const voices = speechSynthesis.getVoices();
      utt.voice    = voices.find(v => /Microsoft.*HsiaoChen/i.test(v.name))
                  || voices.find(v => /Microsoft/i.test(v.name) && v.lang === 'zh-TW')
                  || voices.find(v => /Microsoft/i.test(v.name) && v.lang.startsWith('zh'))
                  || voices.find(v => v.lang === 'zh-TW')
                  || voices.find(v => v.lang.startsWith('zh'))
                  || null;
      speechSynthesis.speak(utt);
    }

    ttsStop() {
      if (this._ttsAudio) { this._ttsAudio.pause(); this._ttsAudio = null; }
      window.speechSynthesis?.cancel();
    }

    // ── 主要對話 ──────────────────────────────────────────────────────────
    async ask(message, context) {
      this.abortController = new AbortController();
      const sig = this.abortController.signal;
      const messages = [
        { role: 'system', content: SYS_ZH_TW },
        ...(context || []),
        { role: 'user', content: message }
      ];

      const userKey      = localStorage.getItem('ai_personal_key') || '';
      const userProvider = _detectProvider(userKey);

      const chain = [
        // 1. 使用者自帶 Key（BYOK）→ 直接呼叫各家 API
        (userKey && userProvider)
          ? () => this._askBYOK(userProvider, userKey, messages, sig)
          : null,
        // 2. CF Worker（系統供應商，key 存 Worker secret，不暴露在前端）
        CF_WORKER_URL
          ? () => this._askCFWorker(messages, sig)
          : null,
        // 3. Pollinations 匿名備援
        () => this._askPollinations(messages, sig),
      ].filter(Boolean);

      for (const fn of chain) {
        try {
          const text = await fn();
          if (text) { await this._drip(text, sig); return text; }
        } catch (e) {
          if (e.name === 'AbortError') return '';
          console.warn('[AIChat]', e.message);
        }
      }
      throw new Error('AI_UNAVAILABLE');
    }

    // ── BYOK 分派 ──────────────────────────────────────────────────────
    _askBYOK(provider, key, messages, sig) {
      switch (provider) {
        case 'openai':      return this._askOpenAI(key, messages, sig);
        case 'gemini':      return this._askGemini(key, messages, sig);
        case 'claude':      return this._askClaude(key, messages, sig);
        case 'nvidia':      return this._askNVIDIA(key, messages, sig);
        case 'huggingface': return this._askHFDirect(key, messages, sig);
      }
    }

    // ── OpenAI ChatGPT ─────────────────────────────────────────────────
    async _askOpenAI(key, messages, sig) {
      const r = await _tf('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
        body: JSON.stringify({ model: 'gpt-4o-mini', messages, max_tokens: 600 }),
        signal: sig,
      }, 30000);
      if (!r.ok) throw new Error(`OpenAI HTTP ${r.status}`);
      return _clean((await r.json())?.choices?.[0]?.message?.content);
    }

    // ── Google Gemini ──────────────────────────────────────────────────
    async _askGemini(key, messages, sig) {
      const sys  = messages.find(m => m.role === 'system');
      const chat = messages.filter(m => m.role !== 'system');
      const body = {
        contents: chat.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        })),
        generationConfig: { maxOutputTokens: 600 },
      };
      if (sys) body.system_instruction = { parts: [{ text: sys.content }] };
      const r = await _tf(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: sig },
        30000
      );
      if (!r.ok) throw new Error(`Gemini HTTP ${r.status}`);
      return _clean((await r.json())?.candidates?.[0]?.content?.parts?.[0]?.text);
    }

    // ── Anthropic Claude ───────────────────────────────────────────────
    async _askClaude(key, messages, sig) {
      const sys  = messages.find(m => m.role === 'system')?.content || SYS_ZH_TW;
      const chat = messages.filter(m => m.role !== 'system');
      const r = await _tf('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': key,
          'anthropic-version': '2023-06-01',
          // Anthropic 要求明確授權直接從瀏覽器呼叫
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 600,
          system: sys,
          messages: chat,
        }),
        signal: sig,
      }, 30000);
      if (!r.ok) throw new Error(`Claude HTTP ${r.status}`);
      return _clean((await r.json())?.content?.[0]?.text);
    }

    // ── NVIDIA NIM Build（BYOK：使用者自己的 nvapi- key）──────────────
    async _askNVIDIA(key, messages, sig) {
      const r = await _tf('https://integrate.api.nvidia.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
        body: JSON.stringify({
          model: 'meta/llama-3.3-70b-instruct',
          messages,
          max_tokens: 600,
          stream: false,
        }),
        signal: sig,
      }, 30000);
      if (!r.ok) throw new Error(`NVIDIA HTTP ${r.status}`);
      return _clean((await r.json())?.choices?.[0]?.message?.content);
    }

    // ── Hugging Face 直連（BYOK：使用者自己的 hf_ key）───────────────
    async _askHFDirect(key, messages, sig) {
      const r = await _tf('https://router.huggingface.co/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
        body: JSON.stringify({ model: 'Qwen/Qwen3-8B', messages, max_tokens: 600 }),
        signal: sig,
      }, 30000);
      if (!r.ok) throw new Error(`HF HTTP ${r.status}`);
      const d = await r.json();
      if (d?.error) throw new Error(d.error);
      return _clean(d?.choices?.[0]?.message?.content);
    }

    // ── CF Worker（系統供應商，API key 存 Worker secret）──────────────
    // Worker 內部輪流嘗試：HF Qwen3-8B → CF Workers AI → NVIDIA NIM
    async _askCFWorker(messages, sig) {
      const r = await _tf(CF_WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, max_tokens: 600 }),
        signal: sig,
      }, 35000);
      if (!r.ok) throw new Error(`CF Worker HTTP ${r.status}`);
      const d = await r.json();
      if (d?.error) throw new Error(d.error);
      return _clean(d?.choices?.[0]?.message?.content);
    }

    // ── Pollinations.ai 備援（匿名，無 key）──────────────────────────
    async _askPollinations(messages, sig) {
      let lastErr;
      for (let i = 0; i < 3; i++) {
        if (sig?.aborted) throw new DOMException('Aborted', 'AbortError');
        try {
          const r = await _tf(POLL_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: POLL_MODEL, messages, stream: false, max_tokens: 500 }),
            signal: sig,
          }, 22000);
          if (r.status === 429) throw new Error('rate_limit');
          if (!r.ok) throw new Error(`Pollinations HTTP ${r.status}`);
          const d = await r.json();
          const t  = _clean(d?.choices?.[0]?.message?.content);
          if (t) return t;
        } catch (e) {
          if (e.name === 'AbortError') throw e;
          lastErr = e;
        }
        if (i < 2) await _sleep([2000, 4000][i], sig);
      }
      throw lastErr || new Error('Pollinations failed');
    }

    // ── 打字機動畫 ────────────────────────────────────────────────────
    async _drip(text, sig) {
      for (let i = 0; i < text.length; i += 3) {
        if (sig?.aborted) return;
        if (this._onStream) this._onStream({ text: text.slice(i, i + 3) });
        await new Promise(r => setTimeout(r, 18));
      }
    }

    // ── 對話摘要 ──────────────────────────────────────────────────────
    async summarize(history) {
      const msgs = [
        { role: 'system', content: SYS_ZH_TW },
        {
          role: 'user',
          content: '請用繁體中文條列3-5點摘要以下對話學習重點，每點15字以內：\n' +
            history.map(m => `${m.role}: ${m.content}`).join('\n'),
        },
      ];
      const userKey      = localStorage.getItem('ai_personal_key') || '';
      const userProvider = _detectProvider(userKey);
      const chain = [
        (userKey && userProvider) ? () => this._askBYOK(userProvider, userKey, msgs, null) : null,
        CF_WORKER_URL             ? () => this._askCFWorker(msgs, null) : null,
        () => this._askPollinations(msgs, null),
      ].filter(Boolean);
      for (const fn of chain) {
        try { const t = await fn(); if (t) return t; } catch (_) {}
      }
      throw new Error('AI_UNAVAILABLE');
    }

    onStream(cb) { this._onStream = cb; }
    abort()      { this.abortController?.abort(); this.ttsStop(); }

    // UI 顯示用
    getProviderInfo() {
      const key = localStorage.getItem('ai_personal_key') || '';
      const p   = _detectProvider(key);
      if (key && p)    return BYOK_PROVIDERS[p];
      if (CF_WORKER_URL) return { name: 'HF Qwen3/CF AI', icon: '☁️' };
      return { name: 'Pollinations', icon: '🌸' };
    }
  }

  // ── 工具函式 ──────────────────────────────────────────────────────────
  function _tf(url, opts, timeout) {
    const ctrl = new AbortController();
    opts.signal?.addEventListener('abort', () => ctrl.abort());
    const { signal: _s, ...rest } = opts;
    const t = setTimeout(() => ctrl.abort(), timeout);
    return fetch(url, { ...rest, signal: ctrl.signal }).finally(() => clearTimeout(t));
  }

  function _clean(text) {
    return (text || '').replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  }

  function _sleep(ms, signal) {
    return new Promise((res, rej) => {
      const t = setTimeout(res, ms);
      signal?.addEventListener('abort', () => {
        clearTimeout(t);
        rej(new DOMException('Aborted', 'AbortError'));
      });
    });
  }

  // ── 對外暴露 ──────────────────────────────────────────────────────────
  global.AIChat            = AIChat;
  global.AI_BYOK_PROVIDERS = BYOK_PROVIDERS;
  global.detectAIProvider  = _detectProvider;
})(window);
