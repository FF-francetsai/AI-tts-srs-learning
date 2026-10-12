// rpg-scene-bg.js — 場景背景圖（2026-10-12，OpenAI image_gen 產出 9 張；使用者已確認）
// 不改 rpg.js：包裝 RPG_UI 方法，於 #rpg-bg 之上、畫面之下鋪一層背景。故障或 window.RPG_SCENEBG_OFF=true 時不影響遊戲。
(function () {
  const BASE = 'assets/scene_bg/';
  const V = '?v=1';
  let layer = null, cur = null, base = 'MAP';
  function ensure() {
    if (layer) return layer;
    layer = document.createElement('div');
    layer.id = 'rpg-scene-bg';
    layer.style.cssText = 'position:fixed;inset:0;z-index:1;pointer-events:none;background:#060b13 center/cover no-repeat;transition:opacity .5s;opacity:0';
    document.body.appendChild(layer);
    const st = document.createElement('style');
    st.textContent = 'body.has-scene-bg #screen-map,body.has-scene-bg #screen-quiz{background:linear-gradient(rgba(6,11,19,.55),rgba(6,11,19,.72))!important}body.has-scene-bg .result-overlay,body.has-scene-bg .creation-overlay{background:rgba(3,5,16,.35)!important;backdrop-filter:blur(2px)!important}body.scene-result #screen-quiz{background:transparent!important}body.has-scene-bg #boss-overlay,body.has-scene-bg #pytower-overlay{background:rgba(2,6,23,.4)!important}';
    document.head.appendChild(st);
    return layer;
  }
  function set(name, dim) {
    if (window.RPG_SCENEBG_OFF) return;
    const l = ensure();
    if (cur === name) return;
    cur = name;
    l.style.opacity = '0';
    setTimeout(() => {
      l.style.backgroundImage = 'linear-gradient(rgba(6,11,19,' + (dim || 0.25) + '),rgba(6,11,19,' + (dim || 0.25) + ')),url(' + BASE + name + '.webp' + V + ')';
      l.style.opacity = '1';
      document.body.classList.add('has-scene-bg');
    }, 120);
  }
  function install() {
    if (!window.RPG_UI || RPG_UI._bgWrapped) return false;
    const wrap = (k, fn) => { const o = RPG_UI[k]; if (typeof o !== 'function') return; RPG_UI[k] = function () { try { fn.apply(this, arguments); } catch (e) {} return o.apply(this, arguments); }; };
    const clr = () => document.body.classList.remove('scene-result');
    wrap('showMap', () => { clr(); base = 'MAP'; set('MAP'); });
    wrap('showDialogue', () => { clr(); base = 'STORY'; set('STORY'); });
    wrap('showQuiz', () => { clr(); set('QUIZ'); });
    wrap('showQuizResult', r => {
      document.body.classList.add('scene-result');
      const d = window._rpgCurDomain;
      set(r && r.pass ? (d && d.key === 'CORE' ? 'FINALE' : 'VICTORY') : 'DEFEAT', 0.35);
    });
    RPG_UI._bgWrapped = true;
    const watch = (id, name) => {
      const el = document.getElementById(id); if (!el) return;
      let on = false;
      new MutationObserver(() => {
        const vis = el.style.display === 'flex' || el.style.display === 'block';
        if (vis && !on) { on = true; set(name, 0.3); } else if (!vis && on) { on = false; set(base); }
      }).observe(el, { attributes: true, attributeFilter: ['style'] });
    };
    watch('boss-overlay', 'BOSS'); watch('pytower-overlay', 'PYTOWER');
    const cc = document.getElementById('character-creation-screen');
    if (cc) {
      const vis = () => cc.isConnected && getComputedStyle(cc).display !== 'none' && !cc.classList.contains('hidden');
      let on = vis(); if (on) set('MENU', 0.2);
      new MutationObserver(() => { const v = vis(); if (v && !on) { on = true; set('MENU', 0.2); } else if (!v && on) { on = false; set(base); } }).observe(cc, { attributes: true });
    }
    if (!cc || !(cc.isConnected && getComputedStyle(cc).display !== 'none' && !cc.classList.contains('hidden'))) set(base);
    return true;
  }
  if (!install()) window.addEventListener('load', install);
})();
