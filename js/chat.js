// MODULE: chat
// js/chat.js — 本地 AI 即時對話（streaming SSE + 摘要）
(function(global) {
  if (!global.AIChat) {
    class AIChat {
      constructor() {
        this.abortController = null;
        this._onStream = null;
        this.offline = false;
      }
      async ask(message, context) {
        if (this.offline) throw new Error('LOCAL_AI_OFFLINE');
        this.abortController = new AbortController();
        const payload = {
          messages: [...(context || []), {role:'user', content: message}],
          stream: true,
          max_tokens: 512
        };
        try {
          const resp = await fetch('http://localhost:8765/generate', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(payload),
            signal: this.abortController.signal
          });
          if (!resp.ok) throw new Error('Server error ' + resp.status);
          const reader = resp.body.getReader();
          const decoder = new TextDecoder();
          let buffer = '';
          while (true) {
            const {done, value} = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, {stream:true});
            const parts = buffer.split('\n');
            buffer = parts.pop();
            for (let line of parts) {
              if (!line.startsWith('data:')) continue;
              const data = line.slice(5).trim();
              if (data === '[DONE]') return;
              try {
                const parsed = JSON.parse(data);
                if (this._onStream) this._onStream(parsed);
              } catch {}
            }
          }
        } catch(e) {
          if (e.name === 'AbortError') return;
          this.offline = true;
          throw new Error('LOCAL_AI_OFFLINE');
        }
      }
      async summarize(history) {
        if (this.offline) throw new Error('LOCAL_AI_OFFLINE');
        const summaryPrompt = '請用3-5點條列摘要以下對話的學習重點：\n' +
          history.map(m => `${m.role}: ${m.content}`).join('\n');
        try {
          const resp = await fetch('http://localhost:8765/generate', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
              messages: [{role:'user', content: summaryPrompt}],
              stream: false,
              max_tokens: 256
            })
          });
          if (!resp.ok) throw new Error('Server error');
          const data = await resp.json();
          return data.text || data.content || (typeof data === 'string' ? data : JSON.stringify(data));
        } catch(e) {
          this.offline = true;
          throw new Error('LOCAL_AI_OFFLINE');
        }
      }
      onStream(cb) { this._onStream = cb; }
      abort() { if (this.abortController) this.abortController.abort(); }
    }
    global.AIChat = AIChat;
  }
})(window);
