// MODULE: voice
// js/voice.js — ASR 語音輸入雙引擎（Web Speech API + 本地 Breeze-ASR）
(function(global) {
  if (!global.VoiceInput) {
    class VoiceInput {
      constructor() {
        this.recording = false;
        this.mediaRecorder = null;
        this.audioChunks = [];
        this._onResult = null;
        this._onError = null;
        this.currentEngine = 'breeze';
      }
      async start() {
        this.recording = true;
        this.setStatus('voice-recording');
        try {
          const health = await _fetchWithTimeout('http://localhost:8765/health', {}, 800);
          if (health.ok) {
            this.currentEngine = 'breeze';
            const stream = await navigator.mediaDevices.getUserMedia({audio:true});
            this.mediaRecorder = new MediaRecorder(stream);
            this.audioChunks = [];
            this.mediaRecorder.ondataavailable = (e) => this.audioChunks.push(e.data);
            this.mediaRecorder.onstop = async () => {
              this.setStatus('voice-processing');
              const blob = new Blob(this.audioChunks, {type:'audio/webm'});
              const form = new FormData();
              form.append('audio', blob);
              form.append('engine', 'breeze-26');
              try {
                const resp = await fetch('http://localhost:8765/asr', {method:'POST', body:form});
                if (resp.ok) {
                  const data = await resp.json();
                  this.setStatus('voice-done');
                  if (this._onResult) this._onResult({text: data.text, engine:'breeze'});
                } else {
                  throw new Error('ASR request failed');
                }
              } catch(e) {
                this.setStatus('voice-done');
                if (this._onError) this._onError(e);
              }
              stream.getTracks().forEach(t => t.stop());
            };
            this.mediaRecorder.start();
            return;
          }
        } catch(e) { /* fall through to Web Speech */ }

        // Fallback: Web Speech API
        this.currentEngine = 'web-speech';
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) {
          this.setStatus('voice-done');
          if (this._onError) this._onError(new Error('No speech engine available'));
          return;
        }
        const recog = new SR();
        recog.lang = 'zh-TW';
        recog.continuous = false;
        recog.interimResults = false;
        recog.onresult = (event) => {
          const text = event.results[0][0].transcript;
          this.setStatus('voice-done');
          if (this._onResult) this._onResult({text, engine:'web-speech'});
        };
        recog.onerror = (err) => {
          this.setStatus('voice-done');
          if (this._onError) this._onError(err);
        };
        recog.start();
      }
      stop() {
        this.recording = false;
        if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
          this.mediaRecorder.stop();
        } else {
          this.setStatus('voice-done');
        }
      }
      onResult(cb) { this._onResult = cb; }
      onError(cb)  { this._onError  = cb; }
      setStatus(cls) {
        document.querySelectorAll('[data-voice-status]').forEach(el => {
          el.className = el.className.replace(/voice-\w+/g, '').trim();
          el.classList.add(cls);
        });
      }
    }

    function _fetchWithTimeout(url, opts, timeout) {
      return Promise.race([
        fetch(url, opts),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
      ]);
    }

    global.VoiceInput = VoiceInput;
  }
})(window);
