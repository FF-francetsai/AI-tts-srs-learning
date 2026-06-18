// js/voice.js — ASR 語音輸入雙引擎（Breeze-ASR local → Web Speech API fallback）
(function(global) {
  if (global.VoiceInput) return;

  const ASR_ERROR_MSG = {
    'not-allowed':        '未授予麥克風權限，請在瀏覽器設定中允許麥克風存取',
    'audio-capture':      '未偵測到麥克風裝置（WSL/虛擬機環境需額外設定音訊）',
    'no-speech':          '未偵測到語音，請靠近麥克風再說一次',
    'network':            '語音辨識服務無法連線，請檢查網路',
    'aborted':            '語音辨識已中止',
    'service-not-allowed':'瀏覽器不允許此頁面使用語音辨識服務',
    'language-not-supported': '不支援所選語言'
  };

  class VoiceInput {
    constructor() {
      this.recording = false;
      this.mediaRecorder = null;
      this.audioChunks = [];
      this._onResult = null;
      this._onError = null;
      this.currentEngine = 'web-speech';
    }

    async start() {
      this.recording = true;
      this.setStatus('voice-recording');

      // Try local Breeze-ASR first (only if localhost:8765 is available)
      try {
        const health = await _fetchWithTimeout('http://localhost:8765/health', {}, 800);
        if (health.ok) {
          this.currentEngine = 'breeze';
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          this.mediaRecorder = new MediaRecorder(stream);
          this.audioChunks = [];
          this.mediaRecorder.ondataavailable = e => this.audioChunks.push(e.data);
          this.mediaRecorder.onstop = async () => {
            this.setStatus('voice-processing');
            const blob = new Blob(this.audioChunks, { type: 'audio/webm' });
            const form = new FormData();
            form.append('audio', blob);
            form.append('engine', 'breeze-26');
            try {
              const resp = await fetch('http://localhost:8765/asr', { method: 'POST', body: form });
              if (resp.ok) {
                const data = await resp.json();
                this.setStatus('voice-done');
                if (this._onResult) this._onResult({ text: data.text, engine: 'breeze' });
              } else throw new Error('ASR failed');
            } catch(e) {
              this.setStatus('voice-done');
              if (this._onError) this._onError(new Error('本地語音辨識失敗，請重試'));
            }
            stream.getTracks().forEach(t => t.stop());
          };
          this.mediaRecorder.start();
          return;
        }
      } catch(e) { /* fallthrough to Web Speech */ }

      // Web Speech API fallback
      this.currentEngine = 'web-speech';
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) {
        this.recording = false;
        this.setStatus('voice-done');
        if (this._onError) this._onError(new Error('此瀏覽器不支援語音辨識'));
        return;
      }
      const recog = new SR();
      recog.lang = 'zh-TW';
      recog.continuous = false;
      recog.interimResults = false;
      recog.onresult = ev => {
        const text = ev.results[0][0].transcript;
        this.recording = false;
        this.setStatus('voice-done');
        if (this._onResult) this._onResult({ text, engine: 'web-speech' });
      };
      recog.onerror = ev => {
        this.recording = false;
        this.setStatus('voice-done');
        const code = ev.error || 'unknown';
        const msg = ASR_ERROR_MSG[code] || `語音辨識失敗（${code}）`;
        if (this._onError) this._onError(new Error(msg));
      };
      recog.onend = () => { this.recording = false; };
      try { recog.start(); }
      catch(e) {
        this.recording = false;
        this.setStatus('voice-done');
        if (this._onError) this._onError(new Error('語音辨識無法啟動：' + e.message));
      }
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
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), timeout))
    ]);
  }

  global.VoiceInput = VoiceInput;
})(window);
