// rpg-scene-music.js — 場景配樂管理（2026-10-11，ACE-Step 產出 20 首原創純音樂；素材登記見 assets/music_scene/manifest.json）
// 不改 rpg.js 既有邏輯：只包裝 RPG_UI 方法與觀察 overlay 顯示狀態。故障或使用者關閉時完全不影響遊戲。
// 停用：window.RPG_MUSIC_OFF=true 或 localStorage.rpgMusicOff='1'。
(function () {
  const BASE = 'assets/music_scene/';
  function off() { try { return window.RPG_MUSIC_OFF === true || localStorage.getItem('rpgMusicOff') === '1'; } catch (e) { return window.RPG_MUSIC_OFF === true; } }
  const useOgg = (function () { try { const a = document.createElement('audio'); return !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"')); } catch (e) { return false; } })();
  const VOL = 0.3;
  let audio = null, cur = null, wanted = null, base = null; // base＝回到哪一首（星域／地圖）
  function fade(a, to, ms, done) {
    const from = a.volume, t0 = performance.now();
    (function step() { const k = Math.min(1, (performance.now() - t0) / ms); try { a.volume = from + (to - from) * k; } catch (e) {} if (k < 1) requestAnimationFrame(step); else if (done) done(); })();
  }
  function stop() {
    wanted = null;
    if (audio) { const a = audio; audio = null; cur = null; fade(a, 0, 500, () => { try { a.pause(); } catch (e) {} }); }
  }
  function play(name, opt) {
    opt = opt || {};
    if (off() || !name) return;
    wanted = name;
    if (cur === name && audio) return;
    if (audio) { const old = audio; audio = null; fade(old, 0, 400, () => { try { old.pause(); } catch (e) {} }); }
    try {
      const a = new Audio(BASE + name + (useOgg ? '.ogg' : '.mp3'));
      a.loop = !opt.once; a.volume = 0; audio = a; cur = name;
      if (opt.once) a.addEventListener('ended', () => { if (audio === a && base) { audio = null; cur = null; play(base); } });
      const p = a.play();
      if (p && p.catch) p.catch(() => { const retry = () => { if (wanted === name && audio === a) a.play().then(() => fade(a, VOL, 800)).catch(() => {}); }; document.addEventListener('pointerdown', retry, { once: true }); });
      fade(a, VOL, 800);
    } catch (e) {}
  }
  function ccVisible() { const cc = document.getElementById('character-creation-screen'); return !!(cc && cc.isConnected && getComputedStyle(cc).display !== 'none'); }
  function setBase(name) { base = name; if (ccVisible()) return; play(name); }
  window.RPG_MUSIC = { play, stop, setBase, off };

  function install() {
    if (!window.RPG_UI || RPG_UI._musicWrapped) return false;
    const wrap = (k, fn) => { const o = RPG_UI[k]; if (typeof o !== 'function') return; RPG_UI[k] = function () { try { fn.apply(this, arguments); } catch (e) {} return o.apply(this, arguments); }; };
    wrap('showMap', () => setBase('MAP'));
    wrap('showDialogue', () => { const d = window._rpgCurDomain; if (d && d.key) setBase(d.key); });
    wrap('showQuiz', () => play('QUIZ'));
    wrap('showQuizResult', r => {
      const d = window._rpgCurDomain;
      if (r && r.pass) play(d && d.key === 'CORE' ? 'FINALE' : 'VICTORY', { once: true });
      else play('DEFEAT', { once: true });
    });
    RPG_UI._musicWrapped = true;
    // overlay：每日 Boss／Python 塔顯示時換曲，關閉後回到原曲；角色創建畫面用主選單曲
    const watch = (id, track) => {
      const el = document.getElementById(id); if (!el) return;
      let on = false;
      new MutationObserver(() => {
        const vis = el.style.display === 'flex' || el.style.display === 'block';
        if (vis && !on) { on = true; play(track); }
        else if (!vis && on) { on = false; if (base) play(base); else stop(); }
      }).observe(el, { attributes: true, attributeFilter: ['style'] });
    };
    watch('boss-overlay', 'BOSS'); watch('pytower-overlay', 'PYTOWER');
    const cc = document.getElementById('character-creation-screen');
    if (cc) {
      const vis = () => cc.isConnected && getComputedStyle(cc).display !== 'none' && !cc.classList.contains('hidden');
      let on = vis(); if (on) play('MENU');
      new MutationObserver(() => { const v = vis(); if (v && !on) { on = true; play('MENU'); } else if (!v && on) { on = false; if (base) play(base); } }).observe(cc, { attributes: true });
    }
    // 離開頁面時停止
    document.addEventListener('visibilitychange', () => { if (document.hidden && audio) { try { audio.pause(); } catch (e) {} } else if (audio) { audio.play().catch(() => {}); } });
    return true;
  }
  if (!install()) window.addEventListener('load', install);
})();
