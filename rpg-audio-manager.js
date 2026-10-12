// rpg-audio-manager.js
// 星際聯盟 RPG 音效管理器：內建 SFX 合成 + BGM 掛載點
(function (global) {
  'use strict';

  class AudioManager {
    constructor() {
      this.ctx = null;
      this.masterGain = null;
      this.bgmGain = null;
      this.sfxGain = null;
      this.bgmVolume = 0.7;
      this.sfxVolume = 0.8;
      this.noiseBuffer = null;
      this.currentBGMNode = null;
      this.currentBGMUrl = null;
      this.bgmFadeDuration = 0.8; // 800ms cross-fade
      this.init();
    }

    init() {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) {
        console.warn('[AudioManager] 瀏覽器不支援 Web Audio API');
        return;
      }
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.bgmGain = this.ctx.createGain();
      this.sfxGain = this.ctx.createGain();
      this.bgmGain.gain.value = this.bgmVolume;
      this.sfxGain.gain.value = this.sfxVolume;
      this.bgmGain.connect(this.masterGain);
      this.sfxGain.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
      this._createNoiseBuffer();
      this._bindUserGesture();
      console.log('[AudioManager] 初始化完成');
    }

    _createNoiseBuffer() {
      const len = this.ctx.sampleRate * 2; // 2 秒白噪緩衝
      const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < len; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      this.noiseBuffer = buffer;
    }

    _bindUserGesture() {
      const resume = () => {
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume().then(() => console.log('[AudioManager] AudioContext 已恢復'));
        }
      };
      ['click', 'touchstart', 'keydown'].forEach(evt => {
        document.addEventListener(evt, resume, { once: true, passive: true });
      });
    }

    async resume() {
      if (this.ctx && this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }
    }

    setBGMVolume(v) {
      this.bgmVolume = Math.max(0, Math.min(1, v));
      if (this.bgmGain) this.bgmGain.gain.value = this.bgmVolume;
    }

    setSFXVolume(v) {
      this.sfxVolume = Math.max(0, Math.min(1, v));
      if (this.sfxGain) this.sfxGain.gain.value = this.sfxVolume;
    }

    setMasterVolume(v) {
      const val = Math.max(0, Math.min(1, v));
      if (this.masterGain) this.masterGain.gain.value = val;
    }

    // BGM 掛載點：外部素材請放於 bgm/ 目錄
    async switchBGM(url) {
      if (!this.ctx) return;
      await this.resume();
      if (this.currentBGMUrl === url) return;
      this.currentBGMUrl = url;
      if (!url) {
        this._stopBGM();
        return;
      }
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.ctx.decodeAudioData(arrayBuffer);
        this._crossFadeTo(audioBuffer);
      } catch (err) {
        console.warn('[AudioManager] BGM 載入失敗（待外部素材）:', url, err.message);
      }
    }

    _stopBGM() {
      const t = this.ctx.currentTime;
      if (this.currentBGMNode) {
        try {
          const gain = this.currentBGMNode.gainNode;
          gain.gain.cancelScheduledValues(t);
          gain.gain.setValueAtTime(gain.gain.value, t);
          gain.gain.linearRampToValueAtTime(0, t + this.bgmFadeDuration);
          this.currentBGMNode.stop(t + this.bgmFadeDuration);
        } catch (e) { /* ignore */ }
        this.currentBGMNode = null;
      }
    }

    _crossFadeTo(audioBuffer) {
      const t = this.ctx.currentTime;
      const fade = this.bgmFadeDuration;
      // 舊 BGM 淡出
      if (this.currentBGMNode) {
        const oldGain = this.currentBGMNode.gainNode;
        oldGain.gain.cancelScheduledValues(t);
        oldGain.gain.setValueAtTime(oldGain.gain.value, t);
        oldGain.gain.linearRampToValueAtTime(0, t + fade);
        this.currentBGMNode.stop(t + fade);
      }
      // 新 BGM 淡入
      const src = this.ctx.createBufferSource();
      src.buffer = audioBuffer;
      src.loop = true;
      const gain = this.ctx.createGain();
      gain.gain.value = 0;
      src.connect(gain);
      gain.connect(this.bgmGain);
      src.start(t);
      gain.gain.linearRampToValueAtTime(1, t + fade);
      this.currentBGMNode = src;
      this.currentBGMNode.gainNode = gain;
    }

    // SFX 合成方法
    playAttack() {
      if (!this.ctx) return;
      this.resume();
      const t = this.ctx.currentTime;
      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1200;
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(this.sfxVolume * 0.6, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.18);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxGain);
      src.start(t, 0, 0.2);
    }

    playItem() {
      if (!this.ctx) return;
      this.resume();
      const t = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C-E-G-C 上升
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        const gain = this.ctx.createGain();
        const start = t + i * 0.08;
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(this.sfxVolume * 0.25, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.25);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(start);
        osc.stop(start + 0.28);
      });
    }

    playLevelUp() {
      if (!this.ctx) return;
      this.resume();
      const t = this.ctx.currentTime;
      const freqs = [261.63, 329.63, 392.00, 523.25]; // C major 和弦
      freqs.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        osc.type = i === 3 ? 'sine' : 'triangle';
        osc.frequency.value = freq;
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(this.sfxVolume * 0.2, t + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 1.2);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(t);
        osc.stop(t + 1.3);
      });
      // 加上一點光彩
      this._playSparkle(t);
    }

    _playSparkle(baseTime) {
      const t = baseTime;
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1046.50, t);
      osc.frequency.exponentialRampToValueAtTime(2093.00, t + 0.6);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(this.sfxVolume * 0.15, t + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.8);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(t);
      osc.stop(t + 0.9);
    }

    playStarSwitch() {
      if (!this.ctx) return;
      this.resume();
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, t);
      osc.frequency.exponentialRampToValueAtTime(1760, t + 0.25);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(this.sfxVolume * 0.35, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.5);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(t);
      osc.stop(t + 0.55);
    }
  }

  // 建立全域實例
  const audioManager = new AudioManager();

  // 掛載到 rpg.js 事件的輔助函式
  function bindToRPG(rpg) {
    if (!rpg) {
      console.warn('[AudioManager] 未提供 rpg 物件，無法掛載事件');
      return;
    }
    // 星域切換時切換 BGM
    if (typeof rpg.onStarRegionChange === 'function') {
      const original = rpg.onStarRegionChange.bind(rpg);
      rpg.onStarRegionChange = (regionId) => {
        audioManager.playStarSwitch();
        audioManager.switchBGM(`bgm/${regionId}.mp3`);
        return original(regionId);
      };
    } else if (rpg.addEventListener) {
      rpg.addEventListener('starRegionChange', (e) => {
        audioManager.playStarSwitch();
        audioManager.switchBGM(`bgm/${e.detail?.regionId || e.regionId}.mp3`);
      });
    }
    // 戰鬥相關事件
    if (rpg.addEventListener) {
      rpg.addEventListener('combat', () => audioManager.playAttack());
    }
    if (typeof rpg.onCombat === 'function') {
      const orig = rpg.onCombat.bind(rpg);
      rpg.onCombat = (...args) => {
        audioManager.playAttack();
        return orig(...args);
      };
    }
    // 道具使用
    if (rpg.addEventListener) {
      rpg.addEventListener('useItem', () => audioManager.playItem());
    }
    if (typeof rpg.onUseItem === 'function') {
      const orig = rpg.onUseItem.bind(rpg);
      rpg.onUseItem = (...args) => {
        audioManager.playItem();
        return orig(...args);
      };
    }
    // 升級
    if (rpg.addEventListener) {
      rpg.addEventListener('levelUp', () => audioManager.playLevelUp());
    }
    if (typeof rpg.onLevelUp === 'function') {
      const orig = rpg.onLevelUp.bind(rpg);
      rpg.onLevelUp = (...args) => {
        audioManager.playLevelUp();
        return orig(...args);
      };
    }
    console.log('[AudioManager] 已掛載到 rpg 事件');
  }

  // 若全域已有 RPG 物件，自動掛載
  if (global.RPG && typeof global.RPG === 'object') {
    bindToRPG(global.RPG);
  }

  // 暴露到全域
  global.AudioManager = AudioManager;
  global.audioManager = audioManager;
  global.bindAudioManagerToRPG = bindToRPG;

})(typeof window !== 'undefined' ? window : this);
