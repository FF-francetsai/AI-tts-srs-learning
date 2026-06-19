// js/chat.js v8.0
// ─────────────────────────────────────────────────────────────────────────────
// 供應商優先順序（零硬碼 API Key）：
//   1. 🔑 使用者 BYOK (localStorage) — Gemini / GPT / Claude / NVIDIA / HF
//   2. ☁️ CF Worker proxy → HF → CF AI → NVIDIA NIM (key 存 Worker secret)
//   3. 🌸 Pollinations.ai (匿名備援，無需任何 key)
// ─────────────────────────────────────────────────────────────────────────────
(function (global) {
  'use strict';
  if (global.AIChat) return;

  const _P = global.AI_PROVIDERS || {};
  const CF_WORKER_URL = _P.cf_worker_url || '';
  const POLL_URL      = 'https://text.pollinations.ai/openai';

  const SYS_ZH_TW =
    '你是 AI 學習助理，專門協助學習 AI 相關術語與概念。' +
    '請務必使用繁體中文回答，禁止使用任何簡體字。' +
    '回答簡潔清晰，適合學習者理解。/no_think';

  // ── 模型目錄 ──────────────────────────────────────────────────────────────
  // nvidia / cf / hf / poll 為各平台對應的 model ID；null = 此平台無此 model
  const MODEL_CATALOG = [
    // ── 三方共有 ──
    { key: 'llama-3.3-70b',    group: '三方共有',
      label: '★ Meta Llama 3.3 70B',
      nvidia: 'meta/llama-3.3-70b-instruct',
      cf:    '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
      hf:    'meta-llama/Llama-3.3-70B-Instruct' },
    { key: 'llama-3.1-70b',    group: '三方共有',
      label: 'Meta Llama 3.1 70B',
      nvidia: 'meta/llama-3.1-70b-instruct',
      cf:    '@cf/meta/llama-3.1-70b-instruct',
      hf:    'meta-llama/Llama-3.1-70B-Instruct' },
    { key: 'llama-3.1-8b',     group: '三方共有',
      label: 'Meta Llama 3.1 8B',
      nvidia: 'meta/llama-3.1-8b-instruct',
      cf:    '@cf/meta/llama-3.1-8b-instruct',
      hf:    'meta-llama/Llama-3.1-8B-Instruct' },
    { key: 'llama-3.2-3b',     group: '三方共有',
      label: 'Meta Llama 3.2 3B',
      nvidia: 'meta/llama-3.2-3b-instruct',
      cf:    '@cf/meta/llama-3.2-3b-instruct',
      hf:    'meta-llama/Llama-3.2-3B-Instruct' },
    { key: 'llama-3.2-1b',     group: '三方共有',
      label: 'Meta Llama 3.2 1B',
      nvidia: 'meta/llama-3.2-1b-instruct',
      cf:    '@cf/meta/llama-3.2-1b-instruct',
      hf:    'meta-llama/Llama-3.2-1B-Instruct' },
    { key: 'gemma-3-12b',      group: '三方共有',
      label: 'Google Gemma 3 12B',
      nvidia: 'google/gemma-3-12b-it',
      cf:    '@cf/google/gemma-3-12b-it',
      hf:    'google/gemma-3-12b-it' },
    { key: 'gpt-oss-120b',     group: '三方共有',
      label: 'OpenAI GPT-OSS 120B',
      nvidia: 'openai/gpt-oss-120b',
      cf:    '@cf/openai/gpt-oss-120b',
      hf:    'openai/gpt-oss-120b' },
    { key: 'gpt-oss-20b',      group: '三方共有',
      label: 'OpenAI GPT-OSS 20B',
      nvidia: 'openai/gpt-oss-20b',
      cf:    '@cf/openai/gpt-oss-20b',
      hf:    'openai/gpt-oss-20b' },
    { key: 'kimi-k2.6',        group: '三方共有',
      label: 'Moonshot Kimi K2.6',
      nvidia: 'moonshotai/kimi-k2.6',
      cf:    '@cf/moonshotai/kimi-k2.6',
      hf:    'moonshotai/Kimi-K2' },
    { key: 'mistral-7b',       group: '三方共有',
      label: 'Mistral 7B',
      nvidia: 'mistralai/mistral-7b-instruct-v0.3',
      cf:    '@cf/mistralai/mistral-7b-instruct-v0.2',
      hf:    'mistralai/Mistral-7B-Instruct-v0.3' },

    // ── NVIDIA + CF（variant 名稱不同）──
    { key: 'llama-4-17b',      group: 'NVIDIA + CF',
      label: 'Meta Llama 4 17B',
      nvidia: 'meta/llama-4-maverick-17b-128e-instruct',
      cf:    '@cf/meta/llama-4-scout-17b-16e-instruct',
      hf:    'meta-llama/Llama-4-Scout-17B-16E-Instruct' },
    { key: 'gemma-4-26b',      group: 'NVIDIA + CF',
      label: 'Google Gemma 4 26B (MoE)',
      nvidia: 'google/diffusiongemma-26b-a4b-it',
      cf:    '@cf/google/gemma-4-26b-a4b-it',
      hf:    'google/gemma-4-26b-a4b-it' },
    { key: 'llama-3.2-11b-v',  group: 'NVIDIA + CF',
      label: 'Meta Llama 3.2 11B Vision',
      nvidia: 'meta/llama-3.2-11b-vision-instruct',
      cf:    '@cf/meta/llama-3.2-11b-vision-instruct',
      hf:    'meta-llama/Llama-3.2-11B-Vision-Instruct' },

    // ── NVIDIA NIM 專有 ──
    { key: 'gemma-4-31b',      group: 'NVIDIA NIM 專有',
      label: 'Google Gemma 4 31B',
      nvidia: 'google/gemma-4-31b-it',
      cf: null, hf: null },
    { key: 'gemma-3n-e4b',     group: 'NVIDIA NIM 專有',
      label: 'Google Gemma 3n E4B',
      nvidia: 'google/gemma-3n-e4b-it',
      cf: null, hf: null },
    { key: 'gemma-3n-e2b',     group: 'NVIDIA NIM 專有',
      label: 'Google Gemma 3n E2B',
      nvidia: 'google/gemma-3n-e2b-it',
      cf: null, hf: null },
    { key: 'phi-4-mini',       group: 'NVIDIA NIM 專有',
      label: 'Microsoft Phi-4 Mini',
      nvidia: 'microsoft/phi-4-mini-instruct',
      cf: null, hf: 'microsoft/Phi-4-mini-instruct' },
    { key: 'phi-4-multimodal', group: 'NVIDIA NIM 專有',
      label: 'Microsoft Phi-4 Multimodal',
      nvidia: 'microsoft/phi-4-multimodal-instruct',
      cf: null, hf: null },
    { key: 'deepseek-v4-pro',  group: 'NVIDIA NIM 專有',
      label: 'DeepSeek V4 Pro',
      nvidia: 'deepseek-ai/deepseek-v4-pro',
      cf: null, hf: 'deepseek-ai/DeepSeek-V3' },
    { key: 'deepseek-v4-flash',group: 'NVIDIA NIM 專有',
      label: 'DeepSeek V4 Flash',
      nvidia: 'deepseek-ai/deepseek-v4-flash',
      cf: null, hf: null },
    { key: 'minimax-m2.7',     group: 'NVIDIA NIM 專有',
      label: 'MiniMax M2.7',
      nvidia: 'minimaxai/minimax-m2.7',
      cf: null, hf: 'MiniMaxAI/MiniMax-M2.7' },
    { key: 'minimax-m3',       group: 'NVIDIA NIM 專有',
      label: 'MiniMax M3',
      nvidia: 'minimaxai/minimax-m3',
      cf: null, hf: 'MiniMaxAI/MiniMax-M3' },
    { key: 'glm-5.1',          group: 'NVIDIA NIM 專有',
      label: 'Z.AI GLM-5.1',
      nvidia: 'z-ai/glm-5.1',
      cf: null, hf: 'zai-org/GLM-5.1' },
    { key: 'qwen3.5-122b',     group: 'NVIDIA NIM 專有',
      label: 'Qwen3.5 122B A10B (MoE)',
      nvidia: 'qwen/qwen3.5-122b-a10b',
      cf: null, hf: null },
    { key: 'mistral-large-3',  group: 'NVIDIA NIM 專有',
      label: 'Mistral Large 3 675B',
      nvidia: 'mistralai/mistral-large-3-675b-instruct-2512',
      cf: null, hf: 'mistralai/Mistral-Large-Instruct-2411' },
    { key: 'kimi-k2.6-nv',     group: 'NVIDIA NIM 專有',
      label: 'Moonshot Kimi K2.6 (NV)',
      nvidia: 'moonshotai/kimi-k2.6',
      cf: null, hf: null },

    // ── CF Workers AI 專有 ──
    { key: 'deepseek-r1-32b',  group: 'CF Workers AI 專有',
      label: 'DeepSeek R1 Distill 32B',
      cf:    '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
      nvidia: null, hf: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B' },
    { key: 'qwq-32b',          group: 'CF Workers AI 專有',
      label: 'Qwen QwQ 32B 推理',
      cf:    '@cf/qwen/qwq-32b',
      nvidia: null, hf: 'Qwen/QwQ-32B' },
    { key: 'qwen3-30b-a3b',    group: 'CF Workers AI 專有',
      label: 'Qwen3 30B A3B (MoE)',
      cf:    '@cf/qwen/qwen3-30b-a3b-fp8',
      nvidia: null, hf: 'Qwen/Qwen3-30B-A3B' },
    { key: 'qwen25-coder-32b', group: 'CF Workers AI 專有',
      label: 'Qwen2.5 Coder 32B',
      cf:    '@cf/qwen/qwen2.5-coder-32b-instruct',
      nvidia: null, hf: 'Qwen/Qwen2.5-Coder-32B-Instruct' },
    { key: 'glm-4.7-flash',    group: 'CF Workers AI 專有',
      label: 'Zhipu GLM-4.7 Flash',
      cf:    '@cf/zhipuai/glm-4.7-flash',
      nvidia: null, hf: null },
    { key: 'glm-5.2-cf',       group: 'CF Workers AI 專有',
      label: 'Zhipu GLM-5.2',
      cf:    '@cf/zhipuai/glm-5.2',
      nvidia: null, hf: null },
    { key: 'kimi-k2.5',        group: 'CF Workers AI 專有',
      label: 'Moonshot Kimi K2.5',
      cf:    '@cf/moonshotai/kimi-k2.5',
      nvidia: null, hf: null },
    { key: 'kimi-k2.7-code',   group: 'CF Workers AI 專有',
      label: 'Moonshot Kimi K2.7 Code',
      cf:    '@cf/moonshotai/kimi-k2.7-code',
      nvidia: null, hf: null },
    { key: 'mistral-small-24b',group: 'CF Workers AI 專有',
      label: 'Mistral Small 3.1 24B VLM',
      cf:    '@cf/mistralai/mistral-small-3.1-24b-instruct',
      nvidia: null, hf: 'mistralai/Mistral-Small-3.1-24B-Instruct-2503' },
    { key: 'nemotron-120b',    group: 'CF Workers AI 專有',
      label: 'NVIDIA Nemotron 3 120B',
      cf:    '@cf/nvidia/nemotron-3-120b-a12b',
      nvidia: null, hf: null },

    // ── HF Router 特有 ──
    { key: 'qwen3-8b',         group: 'HF Router 特有',
      label: '★ Qwen3-8B (目前HF預設)',
      hf:    'Qwen/Qwen3-8B',
      nvidia: null, cf: null },
    { key: 'deepseek-r1',      group: 'HF Router 特有',
      label: 'DeepSeek R1 完整版',
      hf:    'deepseek-ai/DeepSeek-R1',
      nvidia: null, cf: null },
    { key: 'deepseek-v3',      group: 'HF Router 特有',
      label: 'DeepSeek V3',
      hf:    'deepseek-ai/DeepSeek-V3',
      nvidia: null, cf: null },
    { key: 'qwen3-235b',       group: 'HF Router 特有',
      label: 'Qwen3 235B A22B (MoE)',
      hf:    'Qwen/Qwen3-235B-A22B',
      nvidia: null, cf: null },

    // ── Pollinations 備援 ──
    { key: 'poll-fast',        group: 'Pollinations 備援',
      label: 'GPT-OSS 20B (openai-fast)',
      poll:  'openai-fast',
      nvidia: null, cf: null, hf: null },
  ];

  const DEFAULT_MODEL_KEY = 'llama-3.3-70b';
  const MODEL_STORAGE_KEY = 'ai_model_key';

  function _getModelEntry() {
    const k = localStorage.getItem(MODEL_STORAGE_KEY) || DEFAULT_MODEL_KEY;
    return MODEL_CATALOG.find(m => m.key === k) || MODEL_CATALOG[0];
  }

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

      const ttsEndpoints = [
        CF_WORKER_URL ? CF_WORKER_URL.replace(/\/?$/, '/tts') : null,
        'http://localhost:8501/api/tts',
      ].filter(Boolean);

      for (const endpoint of ttsEndpoints) {
        try {
          const ctrl = new AbortController();
          const tid  = setTimeout(() => ctrl.abort(), 10000);
          const res  = await fetch(endpoint, {
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
        } catch(_) { /* 此端點失敗，試下一個 */ }
      }

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
        (userKey && userProvider)
          ? () => this._askBYOK(userProvider, userKey, messages, sig)
          : null,
        CF_WORKER_URL
          ? () => this._askCFWorker(messages, sig)
          : null,
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

    // ── NVIDIA NIM Build（BYOK）──────────────────────────────────────
    async _askNVIDIA(key, messages, sig) {
      const m   = _getModelEntry();
      // 若所選模型無 NVIDIA ID，fallback 到預設三方共有模型
      const mid = m.nvidia || 'meta/llama-3.3-70b-instruct';
      const r = await _tf('https://integrate.api.nvidia.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
        body: JSON.stringify({ model: mid, messages, max_tokens: 600, stream: false }),
        signal: sig,
      }, 30000);
      if (!r.ok) throw new Error(`NVIDIA HTTP ${r.status}`);
      return _clean((await r.json())?.choices?.[0]?.message?.content);
    }

    // ── Hugging Face 直連（BYOK）─────────────────────────────────────
    async _askHFDirect(key, messages, sig) {
      const m   = _getModelEntry();
      const mid = m.hf || 'Qwen/Qwen3-8B';
      const r = await _tf('https://router.huggingface.co/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
        body: JSON.stringify({ model: mid, messages, max_tokens: 600 }),
        signal: sig,
      }, 30000);
      if (!r.ok) throw new Error(`HF HTTP ${r.status}`);
      const d = await r.json();
      if (d?.error) throw new Error(d.error);
      return _clean(d?.choices?.[0]?.message?.content);
    }

    // ── CF Worker（系統供應商，API key 存 Worker secret）──────────────
    async _askCFWorker(messages, sig) {
      const m    = _getModelEntry();
      const body = { messages, max_tokens: 600 };
      // 傳遞模型偏好給 Worker，Worker 會在驗證後採用
      if (m.hf)     body.model_hf = m.hf;
      if (m.cf)     body.model_cf = m.cf;
      if (m.nvidia) body.model_nv = m.nvidia;
      const r = await _tf(CF_WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: sig,
      }, 35000);
      if (!r.ok) throw new Error(`CF Worker HTTP ${r.status}`);
      const d = await r.json();
      if (d?.error) throw new Error(d.error);
      return _clean(d?.choices?.[0]?.message?.content);
    }

    // ── Pollinations.ai 備援（匿名，無 key）──────────────────────────
    async _askPollinations(messages, sig) {
      const m    = _getModelEntry();
      // Pollinations 匿名只有 openai-fast；若所選 model 有 poll ID 則使用，否則 fallback
      const mid  = m.poll || 'openai-fast';
      let lastErr;
      for (let i = 0; i < 3; i++) {
        if (sig?.aborted) throw new DOMException('Aborted', 'AbortError');
        try {
          const r = await _tf(POLL_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: mid, messages, stream: false, max_tokens: 500 }),
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

    getProviderInfo() {
      const key   = localStorage.getItem('ai_personal_key') || '';
      const p     = _detectProvider(key);
      const model = _getModelEntry();
      if (key && p) return { ...BYOK_PROVIDERS[p], model: model.label };
      if (CF_WORKER_URL) return { name: 'HF/CF AI', icon: '☁️', model: model.label };
      return { name: 'Pollinations', icon: '🌸', model: 'GPT-OSS 20B' };
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
  global.AI_MODEL_CATALOG  = MODEL_CATALOG;
  global.getModelKey       = () => localStorage.getItem(MODEL_STORAGE_KEY) || DEFAULT_MODEL_KEY;
  global.setModelKey       = (k) => {
    if (MODEL_CATALOG.find(m => m.key === k)) localStorage.setItem(MODEL_STORAGE_KEY, k);
  };
})(window);
