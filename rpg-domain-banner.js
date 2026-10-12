// rpg-domain-banner.js — 星域簡報橫幅＋星域配樂（2026-10-11，Colab SD1.5 / ACE-Step 產出；素材來源與授權註記見 assets/backgrounds/_pending_colab_20261011/manifest.json）
// 不改 rpg.js／rpg.html 既有邏輯：只包裝 RPGEngine.prototype.enterDomain，進入星域前顯示簡報卡；音樂僅在使用者點擊後播放，離開星域（回地圖）停止。
(function () {
  const BANNERS = {
    INTRO: { img: 'assets/domain_banners/INTRO.webp?v=5', tip: '石造聚落與發光拱門——每位見習士降落 AI 宇宙的第一站。', music: 'explore' },
    DATA:  { img: 'assets/domain_banners/DATA.webp?v=5',  tip: '山壁中的巨型石門礦場，水晶與軌道通往待淘洗的資料。', music: 'explore' },
    SL:    { img: 'assets/domain_banners/SL.webp?v=5',    tip: '紫白石殿與符文光幕，守護者在此監督每一次學習。', music: 'explore' },
    DISC:  { img: 'assets/domain_banners/DISC.webp?v=5',  tip: '寬敞機庫裡停著銀色星艦，掃描光束正在辨別真偽。', music: 'explore' },
    UL:    { img: 'assets/domain_banners/UL.webp?v=5',    tip: '霧中高地上的古城塞——沒有標籤、沒有答案，只有等待你發現的結構。', music: 'explore' },
    DL:    { img: 'assets/domain_banners/DL.webp?v=5',    tip: '高煙囪與熔爐巨門，深度網路在此鍛造成形。', music: 'explore' },
    GEN:   { img: 'assets/domain_banners/GEN.webp?v=5',   tip: '漂浮島上的水晶樹與涼亭，新的創造從這裡誕生。', music: 'explore' },
    RL:    { img: 'assets/domain_banners/RL.webp?v=5',    tip: '圓形競技場與藍色能量環，在試煉中強化你的策略。', music: 'battle' },
    ADV:   { img: 'assets/domain_banners/ADV.webp?v=5',   tip: '黃昏下的塔樓議事堂，中級議會正在等你。', music: null },
    CORE:  { img: 'assets/domain_banners/CORE.webp?v=5',  tip: '金色巨型水晶之下的星盟核心，最終的考驗在此。', music: 'explore' }
  };

  const MUSIC = { explore: 'assets/music_colab/explore', battle: 'assets/music_colab/battle' };
  // 停用旗標：window.RPG_DOMAIN_BANNER_OFF=true 或 localStorage.rpgBannerOff='1'（避免故障時影響進關）
  function disabled() { try { return window.RPG_DOMAIN_BANNER_OFF === true || localStorage.getItem('rpgBannerOff') === '1'; } catch (e) { return window.RPG_DOMAIN_BANNER_OFF === true; } }
  function musicSrc(base) { const a = document.createElement('audio'); return (a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"')) ? base + '.ogg' : base + '.mp3'; }
  let audio = null, curKey = null;
  function stopMusic() { if (audio) { try { audio.pause(); } catch (e) {} audio = null; curKey = null; } }
  function playMusic(name) {
    if (window.RPG_MUSIC) return; // 配樂改由 rpg-scene-music.js 統一管理
    if (!name || !MUSIC[name]) return;
    if (curKey === name && audio) return;
    stopMusic();
    try { audio = new Audio(musicSrc(MUSIC[name])); audio.loop = true; audio.volume = 0.25; audio.play().catch(() => {}); curKey = name; } catch (e) {}
  }
  function showBanner(domain, cfg, go) {
    const ov = document.createElement('div');
    ov.setAttribute('role', 'dialog');
    ov.style.cssText = 'position:fixed;inset:0;z-index:300;display:flex;align-items:flex-end;justify-content:center;background:#0a0a1a center/cover no-repeat;background-image:linear-gradient(to top,rgba(10,10,26,.92) 0%,rgba(10,10,26,.15) 55%),url("' + cfg.img + '");padding:0 0 max(24px,env(safe-area-inset-bottom));';
    const box = document.createElement('div');
    box.style.cssText = 'width:min(560px,92vw);text-align:center;color:#e8e8f8;font-family:"Segoe UI","Noto Sans TC",sans-serif;';
    const h = document.createElement('div'); h.style.cssText = 'font-size:1.6rem;font-weight:700;margin-bottom:6px;color:' + (domain.color || '#a78bfa');
    h.textContent = (domain.emoji || '') + ' ' + domain.name;
    const p = document.createElement('div'); p.style.cssText = 'font-size:.95rem;line-height:1.6;color:#cbd5e1;margin-bottom:6px;'; p.textContent = cfg.tip;
    const g = document.createElement('div'); g.style.cssText = 'font-size:.8rem;color:#94a3b8;margin-bottom:14px;'; g.textContent = '守護者：' + (domain.guardian || '');
    const b = document.createElement('button'); b.textContent = '進入星域 ▶';
    b.style.cssText = 'padding:12px 28px;border:1px solid rgba(167,139,250,.6);border-radius:12px;background:rgba(167,139,250,.18);color:#e8e8f8;font-size:1rem;cursor:pointer;';
    const c = document.createElement('button'); c.textContent = '返回';
    c.style.cssText = 'margin-left:10px;padding:12px 18px;border:1px solid rgba(255,255,255,.2);border-radius:12px;background:transparent;color:#94a3b8;font-size:1rem;cursor:pointer;';
    b.onclick = () => { ov.remove(); playMusic(cfg.music); go(); };
    c.onclick = () => ov.remove();
    const gk = domain.guardianChar; let im = null;
    if (gk && gk !== 'mangyue') {
      im = document.createElement('img'); im.src = 'assets/guardians/' + gk + '.webp?v=1'; im.alt = domain.guardian || '';
      im.style.cssText = 'display:block;margin:0 auto 6px;height:min(44vh,400px);max-width:100%;object-fit:contain;-webkit-mask-image:radial-gradient(ellipse 62% 70% at 50% 46%,#000 52%,transparent 100%);mask-image:radial-gradient(ellipse 62% 70% at 50% 46%,#000 52%,transparent 100%);';
      im.onerror = () => im.remove();
    }
    box.append(...(im ? [im] : []), h, p, g, b, c); ov.appendChild(box); document.body.appendChild(ov);
  }
  function install() {
    if (!window.RPGEngine || RPGEngine.prototype._bannerWrapped) return false;
    const orig = RPGEngine.prototype.enterDomain;
    RPGEngine.prototype.enterDomain = function (key) {
      if (disabled()) return orig.call(this, key);
      const cfg = BANNERS[key];
      const domain = (typeof DOMAINS !== 'undefined') ? DOMAINS.find(d => d.key === key) : null;
      const locked = domain && domain.unlockAfter && !(this._state && this._state.cleared || []).includes(domain.unlockAfter);
      if (!cfg || !domain || locked) return orig.call(this, key);
      if (!cfg.img) { playMusic(cfg.music); return orig.call(this, key); }
      try { showBanner(domain, cfg, () => orig.call(this, key)); } catch (e) { return orig.call(this, key); }
    };
    RPGEngine.prototype._bannerWrapped = true;
    if (window.RPG_UI && !RPG_UI._bannerWrapped) { const sm = RPG_UI.showMap; RPG_UI.showMap = function () { stopMusic(); return sm.apply(this, arguments); }; RPG_UI._bannerWrapped = true; }
    return true;
  }
  if (!install()) window.addEventListener('load', install);
})();
