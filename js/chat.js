// js/chat.js — AI 對話：雲端優先(Pollinations.ai) + 本地備援(mllm_app)
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
    }

    async ask(message, context) {
      this.abortController = new AbortController();
      const messages = [...(context || []), { role: 'user', content: message }];

      // Try cloud first (always available, no key required)
      try {
        await this._streamCloud(messages, this.abortController.signal);
        return;
      } catch (e) {
        if (e.name === 'AbortError') return;
      }

      // Fallback: local mllm_app (only when PC is running)
      try {
        await this._streamLocal(messages, this.abortController.signal);
      } catch (e) {
        if (e.name === 'AbortError') return;
        throw new Error('AI_UNAVAILABLE');
      }
    }

    async _streamCloud(messages, signal) {
      // Use non-stream to avoid reasoning/content field confusion, then drip-feed tokens
      const resp = await fetch(CLOUD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: CLOUD_MODEL, messages, stream: false, max_tokens: 512 }),
        signal
      });
      if (!resp.ok) throw new Error('Cloud ' + resp.status);
      const data = await resp.json();
      const fullText = data?.choices?.[0]?.message?.content || '';
      if (!fullText) throw new Error('Cloud empty');

      // Drip-feed characters in groups of 3 to simulate streaming effect
      for (let i = 0; i < fullText.length; i += 3) {
        if (signal?.aborted) return;
        const chunk = fullText.slice(i, i + 3);
        if (this._onStream) this._onStream({ text: chunk });
        await new Promise(r => setTimeout(r, 20));
      }
    }

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
          try {
            const p = JSON.parse(raw);
            if (this._onStream) this._onStream(p);
          } catch {}
        }
      }
    }

    async summarize(history) {
      const prompt = '請用3-5點條列摘要以下對話的學習重點：\n' +
        history.map(m => `${m.role}: ${m.content}`).join('\n');
      const messages = [{ role: 'user', content: prompt }];

      // Try cloud first
      try {
        const resp = await fetch(CLOUD_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: CLOUD_MODEL, messages, stream: false, max_tokens: 256 })
        });
        if (resp.ok) {
          const data = await resp.json();
          return data?.choices?.[0]?.message?.content || JSON.stringify(data);
        }
      } catch {}

      // Fallback local
      try {
        const resp = await fetch(LOCAL_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages, stream: false, max_tokens: 256 })
        });
        if (!resp.ok) throw new Error('local');
        const data = await resp.json();
        return data.text || data.content || JSON.stringify(data);
      } catch {
        throw new Error('AI_UNAVAILABLE');
      }
    }

    onStream(cb) { this._onStream = cb; }
    abort() { this.abortController?.abort(); }
  }

  global.AIChat = AIChat;
})(window);
