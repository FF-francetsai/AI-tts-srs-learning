// js/chat.js v6.4
// Pollinations.ai 限制: 匿名每IP同時只能1個請求，目前唯一模型 openai-fast (推理模型)
// 策略: 單一請求 + 最多3次重試 + 過濾 <think> 推理token + 本機備援
(function(global) {
  if (global.AIChat) return;

  const POLL_URL   = 'https://text.pollinations.ai/openai';
  const POLL_MODEL = 'openai-fast'; // 2026-06 唯一匿名模型，alias: openai
  const LOCAL_URL  = 'http://localhost:8765/generate';
  const MAX_RETRY  = 3;
  const RETRY_WAIT = [2000, 4000, 7000]; // 退避等待 ms

  class AIChat {
    constructor() {
      this.abortController = null;
      this._onStream = null;
      this.ttsEnabled = true;
    }

    // ── TTS ──────────────────────────────────────────────
    ttsSpeak(text) {
      if (!this.ttsEnabled || !('speechSynthesis' in window) || !text) return;
      speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'zh-TW'; utt.rate = 1.05;
      const v = speechSynthesis.getVoices()
        .find(v => v.lang.startsWith('zh') && v.name.includes('Female'))
        || speechSynthesis.getVoices().find(v => v.lang.startsWith('zh'));
      if (v) utt.voice = v;
      speechSynthesis.speak(utt);
    }
    ttsStop() { speechSynthesis.cancel(); }

    // ── 主要對話 ─────────────────────────────────────────
    async ask(message, context) {
      this.abortController = new AbortController();
      const sig = this.abortController.signal;
      const messages = [
        { role: 'system', content: '你是 AI 學習助理，用繁體中文簡潔回答，避免過長推理。' },
        ...(context || []),
        { role: 'user', content: message }
      ];

      // ① 雲端（Pollinations，單一請求重試）
      try {
        const text = await this._fetchWithRetry(messages, sig);
        await this._drip(text, sig);
        return text;
      } catch(e) {
        if (e.name === 'AbortError') return '';
      }

      // ② 本機備援
      try {
        await this._streamLocal(messages, sig);
        return '';
      } catch(e) {
        if (e.name === 'AbortError') return '';
        throw new Error('AI_UNAVAILABLE');
      }
    }

    // 單一請求 + 指數退避重試
    async _fetchWithRetry(messages, signal) {
      let lastErr;
      for (let i = 0; i < MAX_RETRY; i++) {
        if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
        try {
          const text = await this._fetchOnce(messages, signal);
          if (text) return text;
        } catch(e) {
          if (e.name === 'AbortError') throw e;
          lastErr = e;
        }
        // 等待後重試（最後一次不等）
        if (i < MAX_RETRY - 1) {
          await _sleep(RETRY_WAIT[i], signal);
        }
      }
      throw lastErr || new Error('Cloud failed');
    }

    async _fetchOnce(messages, signal) {
      const ctrl = new AbortController();
      signal?.addEventListener('abort', () => ctrl.abort());
      const timer = setTimeout(() => ctrl.abort(), 22000); // 22s per attempt

      try {
        const resp = await fetch(POLL_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: POLL_MODEL,
            messages,
            stream: false,
            max_tokens: 500
          }),
          signal: ctrl.signal
        });
        if (resp.status === 429) throw new Error('rate_limit');
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        const data = await resp.json();
        const raw = data?.choices?.[0]?.message?.content || '';
        return _stripThinking(raw); // 過濾推理模型的 <think> 標籤
      } finally {
        clearTimeout(timer);
      }
    }

    // 打字機逐字效果
    async _drip(text, signal) {
      for (let i = 0; i < text.length; i += 3) {
        if (signal?.aborted) return;
        if (this._onStream) this._onStream({ text: text.slice(i, i + 3) });
        await new Promise(r => setTimeout(r, 20));
      }
    }

    // 本機串流備援
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
        const lines = buf.split('\n'); buf = lines.pop();
        for (const line of lines) {
          if (!line.startsWith('data:')) continue;
          const raw = line.slice(5).trim();
          if (raw === '[DONE]') return;
          try { const p = JSON.parse(raw); if (this._onStream) this._onStream(p); } catch {}
        }
      }
    }

    // 摘要
    async summarize(history) {
      const msgs = [
        { role: 'system', content: '請用繁體中文條列摘要，每點15字以內。' },
        { role: 'user', content: '條列3-5點摘要以下對話學習重點：\n' +
          history.map(m => `${m.role}: ${m.content}`).join('\n') }
      ];
      const text = await this._fetchWithRetry(msgs, null);
      if (text) return text;
      throw new Error('AI_UNAVAILABLE');
    }

    onStream(cb) { this._onStream = cb; }
    abort() { this.abortController?.abort(); this.ttsStop(); }
  }

  // 過濾推理模型 <think>...</think> 標籤
  function _stripThinking(text) {
    return text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  }

  // 可中斷的 sleep
  function _sleep(ms, signal) {
    return new Promise((res, rej) => {
      const t = setTimeout(res, ms);
      signal?.addEventListener('abort', () => { clearTimeout(t); rej(new DOMException('Aborted', 'AbortError')); });
    });
  }

  global.AIChat = AIChat;
})(window);
