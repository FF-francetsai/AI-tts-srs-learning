// js/chat.js — AI 對話：雲端優先(Pollinations.ai) + 本地備援(mllm_app) + TTS 語音播報
// Cloud: POST https://text.pollinations.ai/openai (free, no key, CORS OK)
// Local: POST http://localhost:8765/generate (mllm_app, available when PC is on)
(function(global) {
  if (global.AIChat) return;

  const CLOUD_URL = 'https://text.pollinations.ai/openai';
  const LOCAL_URL = 'http://localhost:8765/generate';
  const CLOUD_MODEL = 'openai'; // 'openai-large' deprecated 2026-06

  class AIChat {
    constructor() {
      this.abortController = null;
      this._onStream = null;
      this.ttsEnabled = true;
      this._utterance = null;
    }

    // ── TTS 語音播報 ─────────────────────────────────────────
    ttsSpeak(text) {
      if (!this.ttsEnabled || !('speechSynthesis' in window) || !text) return;
      speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'zh-TW';
      utt.rate = 1.05;
      utt.pitch = 1.0;
      // 偏好中文女聲（若有）
      const voices = speechSynthesis.getVoices();
      const zhVoice = voices.find(v => v.lang.startsWith('zh') && v.name.includes('Female'))
                   || voices.find(v => v.lang.startsWith('zh'));
      if (zhVoice) utt.voice = zhVoice;
      this._utterance = utt;
      speechSynthesis.speak(utt);
    }

    ttsStop() { speechSynthesis.cancel(); }

    // ── 主要對話 ─────────────────────────────────────────────
    async ask(message, context) {
      this.abortController = new AbortController();
      const messages = [...(context || []), { role: 'user', content: message }];

      // 試雲端（含 retry）
      try {
        const fullText = await this._fetchCloud(messages, this.abortController.signal);
        await this._drip(fullText, this.abortController.signal);
        return fullText;
      } catch(e) {
        if (e.name === 'AbortError') return '';
      }

      // Fallback: 本機 mllm_app
      try {
        await this._streamLocal(messages, this.abortController.signal);
        return '';
      } catch(e) {
        if (e.name === 'AbortError') return '';
        throw new Error('AI_UNAVAILABLE');
      }
    }

    // 雲端取全文（retry 2 次）
    async _fetchCloud(messages, signal) {
      const MAX = 2;
      for (let i = 0; i <= MAX; i++) {
        if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
        try {
          const resp = await fetch(CLOUD_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: CLOUD_MODEL, messages, stream: false, max_tokens: 600 }),
            signal
          });
          if (!resp.ok) throw new Error('Cloud ' + resp.status);
          const data = await resp.json();
          const text = data?.choices?.[0]?.message?.content || '';
          if (text) return text;
          // empty → retry
        } catch(e) {
          if (e.name === 'AbortError') throw e;
          if (i === MAX) throw e;
        }
        await new Promise(r => setTimeout(r, 1200 * (i + 1)));
      }
      throw new Error('Cloud empty');
    }

    // 逐字 drip-feed（打字機效果）
    async _drip(text, signal) {
      for (let i = 0; i < text.length; i += 3) {
        if (signal?.aborted) return;
        if (this._onStream) this._onStream({ text: text.slice(i, i + 3) });
        await new Promise(r => setTimeout(r, 22));
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
        return await this._fetchCloud(msgs, null);
      } catch {}

      try {
        const resp = await fetch(LOCAL_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: msgs, stream: false, max_tokens: 256 })
        });
        if (!resp.ok) throw new Error('local');
        const data = await resp.json();
        return data.text || data.content || JSON.stringify(data);
      } catch {
        throw new Error('AI_UNAVAILABLE');
      }
    }

    onStream(cb) { this._onStream = cb; }
    abort() { this.abortController?.abort(); this.ttsStop(); }
  }

  global.AIChat = AIChat;
})(window);
