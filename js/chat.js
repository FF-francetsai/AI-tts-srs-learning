// js/chat.js v6.3 — AI 對話引擎
// 雲端策略：Pollinations GET(快速) + POST race → 本地 mllm_app 備援
// CORS 全開，零 API Key
(function(global) {
  if (global.AIChat) return;

  // ── Pollinations GET endpoint（單條請求，比 POST 通常快）──
  const POLL_GET  = 'https://text.pollinations.ai/';
  // ── Pollinations POST endpoint（支援多 model 競速）──
  const POLL_POST = 'https://text.pollinations.ai/openai';
  // ── 本機備援 ──
  const LOCAL_URL = 'http://localhost:8765/generate';

  // 依速度排序的模型列表（openai 最慢放最後）
  const RACE_MODELS = ['mistral', 'llama', 'openai'];

  class AIChat {
    constructor() {
      this.abortController = null;
      this._onStream = null;
      this.ttsEnabled = true;
      this._utterance = null;
    }

    // ── TTS ─────────────────────────────────────────────────
    ttsSpeak(text) {
      if (!this.ttsEnabled || !('speechSynthesis' in window) || !text) return;
      speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'zh-TW'; utt.rate = 1.05; utt.pitch = 1.0;
      const voices = speechSynthesis.getVoices();
      const v = voices.find(v => v.lang.startsWith('zh') && v.name.includes('Female'))
             || voices.find(v => v.lang.startsWith('zh'));
      if (v) utt.voice = v;
      this._utterance = utt;
      speechSynthesis.speak(utt);
    }
    ttsStop() { speechSynthesis.cancel(); }

    // ── 主要對話 ────────────────────────────────────────────
    async ask(message, context) {
      this.abortController = new AbortController();
      const sig = this.abortController.signal;
      const messages = [...(context || []), { role: 'user', content: message }];

      // ① 第一波：Pollinations GET（最快通道）vs 三模型 POST 競速
      try {
        const fullText = await this._cloudRace(message, messages, sig);
        await this._drip(fullText, sig);
        return fullText;
      } catch(e) {
        if (e.name === 'AbortError') return '';
      }

      // ② Fallback：本地 mllm_app
      try {
        await this._streamLocal(messages, sig);
        return '';
      } catch(e) {
        if (e.name === 'AbortError') return '';
        throw new Error('AI_UNAVAILABLE');
      }
    }

    // ── 雲端競速（GET + POST 同時跑，取最快成功者）───────────
    async _cloudRace(message, messages, signal) {
      const candidates = [
        this._fetchGet(message, signal),
        ...RACE_MODELS.map(m => this._fetchPost(m, messages, signal))
      ];
      return Promise.any(candidates);
    }

    // Pollinations GET：最輕量，通常最快
    async _fetchGet(message, signal) {
      const prompt = encodeURIComponent(
        `你是 AI 學習助理，用繁體中文簡潔回答：${message}`
      );
      const url = `${POLL_GET}${prompt}?model=mistral&seed=-1&json=false`;
      const resp = await _fetchTimeout(url, { signal }, 10000);
      if (!resp.ok) throw new Error('GET ' + resp.status);
      const text = await resp.text();
      if (!text || text.length < 5) throw new Error('GET empty');
      return text;
    }

    // Pollinations POST（每個 model 各自嘗試）
    async _fetchPost(model, messages, signal) {
      const resp = await _fetchTimeout(POLL_POST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, messages, stream: false, max_tokens: 600 }),
        signal
      }, 14000);
      if (!resp.ok) throw new Error('POST ' + resp.status);
      const data = await resp.json();
      const text = data?.choices?.[0]?.message?.content || '';
      if (!text) throw new Error('POST empty ' + model);
      return text;
    }

    // 逐字打字機效果
    async _drip(text, signal) {
      for (let i = 0; i < text.length; i += 3) {
        if (signal?.aborted) return;
        if (this._onStream) this._onStream({ text: text.slice(i, i + 3) });
        await new Promise(r => setTimeout(r, 20));
      }
    }

    // 本地串流備援
    async _streamLocal(messages, signal) {
      const resp = await fetch(LOCAL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, stream: true, max_tokens: 512 }),
        signal
      });
      if (!resp.ok) throw new Error('Local ' + resp.status);
      const reader = resp.body.getReader();
      const dec = new TextDecoder();
      let buf = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        const parts = buf.split('\n');
        buf = parts.pop();
        for (const line of parts) {
          if (!line.startsWith('data:')) continue;
          const raw = line.slice(5).trim();
          if (raw === '[DONE]') return;
          try { const p = JSON.parse(raw); if (this._onStream) this._onStream(p); } catch {}
        }
      }
    }

    // 生成摘要
    async summarize(history) {
      const prompt = '請用3-5點條列摘要以下對話的學習重點：\n' +
        history.map(m => `${m.role}: ${m.content}`).join('\n');
      const msgs = [{ role: 'user', content: prompt }];
      try {
        return await Promise.any([
          this._fetchGet(prompt, null),
          ...RACE_MODELS.map(m => this._fetchPost(m, msgs, null))
        ]);
      } catch {
        throw new Error('AI_UNAVAILABLE');
      }
    }

    onStream(cb) { this._onStream = cb; }
    abort() { this.abortController?.abort(); this.ttsStop(); }
  }

  // fetch 帶逾時（避免一個慢 model 卡住整體）
  function _fetchTimeout(url, opts, ms) {
    const ac = new AbortController();
    // 若外層已有 signal，同步 abort
    opts.signal?.addEventListener('abort', () => ac.abort());
    const timer = setTimeout(() => ac.abort(), ms);
    return fetch(url, { ...opts, signal: ac.signal })
      .finally(() => clearTimeout(timer));
  }

  global.AIChat = AIChat;
})(window);
