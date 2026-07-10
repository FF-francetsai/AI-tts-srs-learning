// rpg-governance.js — ⚖️ 治理法庭（工作包⑥：法規治理學習線）
// 資料：gov_quizzes.js（GOV_QUIZ_POOL，每日 04:10 自動擴充）；NPC：大法官・司律。
// 四條審判線（GOV 法規／TAL 人才／IND 產業／PM 專案），答對累積晉階，
// 晉階解鎖對應《星律寶典》卷（rpg-grimoire.js unlock.type === 'gov'）。
(function (global) {
  'use strict';
  if (global.GovCourt) return;

  const SAVE_KEY = 'gov_court_v1';
  const LINES = [
    { key: 'GOV', zh: '法規治理', emoji: '📜', desc: 'AI 基本法與核心原則' },
    { key: 'TAL', zh: '人才職能', emoji: '🎓', desc: '職能基準與人才治理' },
    { key: 'IND', zh: '產業案例', emoji: '🏭', desc: '產業落地情境判斷' },
    { key: 'PM',  zh: '專案規劃', emoji: '🗂️', desc: 'AI 專案治理實務' },
  ];
  const RANK_TITLES = ['見習書記', '正式書記官', '陪審員', '檢察官', '大法官助理', '首席大法官'];
  const PER_RANK = 3;   // 每答對 3 題晉 1 階
  const MAX_RANK = RANK_TITLES.length - 1;

  const JUDGE = '大法官・司律';
  const SAY_RIGHT = ['判決成立。你看見了律法背後的道理。', '正是如此。律法如星軌，一條一條看清楚。', '很好，這一案你判得公允。'];
  const SAY_WRONG = ['判決有誤。回頭看看詳解，律法不容含糊。', '差之毫釐，失之千里。看清楚原則再判。', '這一案再想想——重點在原則的適用。'];

  function pool() { return Array.isArray(global.GOV_QUIZ_POOL) ? global.GOV_QUIZ_POOL : []; }

  function loadState() {
    let s;
    try { s = JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (e) { s = null; }
    if (!s || typeof s !== 'object') s = {};
    s.correct = s.correct || {};
    s.used = s.used || {};
    s.ranks = s.ranks || {};
    for (const l of LINES) {
      s.correct[l.key] = s.correct[l.key] || 0;
      s.used[l.key] = s.used[l.key] || [];
      s.ranks[l.key] = Math.min(Math.floor(s.correct[l.key] / PER_RANK), MAX_RANK);
    }
    return s;
  }
  function save(s) { try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); } catch (e) {} }

  let _wrap = null, _state = null, _line = null, _q = null;

  function close() { if (_wrap) { _wrap.remove(); _wrap = null; } }

  function open() {
    close();
    _state = loadState();
    _wrap = document.createElement('div');
    _wrap.id = 'gov-court';
    _wrap.style.cssText = 'position:fixed;inset:0;z-index:8700;background:rgba(2,6,23,.94);display:flex;align-items:center;justify-content:center;padding:10px';
    _wrap.innerHTML =
      '<div style="width:min(520px,96vw);max-height:88vh;display:flex;flex-direction:column;background:#0f172a;border:1.5px solid #f2c84b;border-radius:14px;overflow:hidden">' +
      '<div style="display:flex;align-items:center;gap:8px;padding:10px 14px;background:#1e293b">' +
      '<span style="font-size:18px">⚖️</span>' +
      '<div style="flex:1;color:#f2c84b;font-weight:700;font-size:14px">治理法庭</div>' +
      '<button id="gc-close" style="background:none;border:none;color:#94a3b8;font-size:20px;cursor:pointer">✕</button></div>' +
      '<div id="gc-body" style="flex:1;overflow-y:auto;padding:14px"></div></div>';
    document.body.appendChild(_wrap);
    _wrap.querySelector('#gc-close').onclick = close;
    _wrap.addEventListener('click', e => { if (e.target === _wrap) close(); });
    renderLobby();
  }

  // ── 大廳：選審判線 ──────────────────────────────────────────────────────
  function renderLobby() {
    _line = null;
    const body = _wrap.querySelector('#gc-body');
    const P = pool();
    let cards = '';
    for (const l of LINES) {
      const n = P.filter(q => q.line === l.key).length;
      const rank = _state.ranks[l.key];
      const cor = _state.correct[l.key];
      const openable = n > 0;
      cards +=
        `<div data-line="${openable ? l.key : ''}" style="cursor:${openable ? 'pointer' : 'default'};background:#1e293b;` +
        `border:1px solid ${openable ? '#f2c84b66' : '#334155'};border-radius:10px;padding:12px;margin-bottom:8px;${openable ? '' : 'opacity:.5'}">` +
        `<div style="display:flex;align-items:center;gap:8px">` +
        `<span style="font-size:20px">${l.emoji}</span>` +
        `<div style="flex:1"><div style="color:#e2e8f0;font-weight:700;font-size:14px">${l.zh}線</div>` +
        `<div style="color:#94a3b8;font-size:11px">${l.desc}</div></div>` +
        `<div style="text-align:right"><div style="color:#f2c84b;font-size:12px;font-weight:700">${RANK_TITLES[rank]}</div>` +
        `<div style="color:#64748b;font-size:11px">${openable ? `判例 ${n} 件・答對 ${cor}` : '判例整理中（每日擴充）'}</div></div>` +
        `</div></div>`;
    }
    body.innerHTML =
      '<div style="color:#94a3b8;font-size:12px;line-height:1.6;margin-bottom:12px">' +
      `${JUDGE}：「見習士，這裡審理的是 AI 治理的真實情境。選一條線，用原則判案。` +
      `每答對 ${PER_RANK} 題晉升一階，晉階可解鎖《星律寶典》。」</div>` + cards +
      '<div style="color:#475569;font-size:11px;text-align:center;margin-top:10px">判例由治理出題管線每日凌晨自動擴充</div>';
    body.querySelectorAll('[data-line]').forEach(el => {
      const k = el.getAttribute('data-line');
      if (k) el.onclick = () => { _line = k; nextCase(); };
    });
  }

  // ── 開庭：抽題與作答 ────────────────────────────────────────────────────
  function nextCase() {
    const P = pool().filter(q => q.line === _line);
    let avail = P.filter(q => !_state.used[_line].includes(q.no));
    if (!avail.length && P.length) { _state.used[_line] = []; avail = P; save(_state); }  // 審完一輪重新開放
    if (!avail.length) { renderLobby(); return; }
    _q = avail[Math.floor(Math.random() * avail.length)];
    const l = LINES.find(x => x.key === _line);
    const body = _wrap.querySelector('#gc-body');
    body.innerHTML =
      `<div style="display:flex;align-items:center;gap:6px;margin-bottom:10px">` +
      `<span style="color:#f2c84b;font-size:12px;font-weight:700">${l.emoji} ${l.zh}線</span>` +
      `<span style="color:#64748b;font-size:11px;flex:1">${RANK_TITLES[_state.ranks[_line]]}・答對 ${_state.correct[_line]}</span>` +
      `<button id="gc-back" style="background:none;border:1px solid #334155;border-radius:6px;color:#94a3b8;font-size:11px;padding:3px 8px;cursor:pointer">回大廳</button></div>` +
      (_q.scenario ? `<div style="background:#0b1020;border-left:3px solid #f2c84b;border-radius:6px;padding:10px;color:#cbd5e1;font-size:13px;line-height:1.7;margin-bottom:10px">📋 案情：${_q.scenario}</div>` : '') +
      `<div style="color:#e2e8f0;font-size:14px;line-height:1.7;font-weight:600;margin-bottom:10px">${_q.question}</div>` +
      `<div id="gc-opts"></div>` +
      `<div id="gc-verdict" style="margin-top:10px;font-size:13px;line-height:1.6;min-height:1.2em"></div>`;
    body.querySelector('#gc-back').onclick = renderLobby;
    const opts = body.querySelector('#gc-opts');
    for (const k of ['a', 'b', 'c', 'd']) {
      const btn = document.createElement('button');
      btn.style.cssText = 'display:block;width:100%;text-align:left;margin-bottom:6px;padding:9px 12px;border:1px solid #334155;border-radius:8px;background:#1e293b;color:#e2e8f0;font-size:13px;line-height:1.5;cursor:pointer';
      btn.textContent = k.toUpperCase() + '. ' + (_q['opt_' + k] || '');
      btn.onclick = () => verdict(k, btn);
      opts.appendChild(btn);
    }
  }

  function verdict(picked, btn) {
    const right = picked === _q.answer;
    const body = _wrap.querySelector('#gc-body');
    body.querySelectorAll('#gc-opts button').forEach(b => {
      b.disabled = true; b.style.cursor = 'default';
      if (b.textContent.toLowerCase().startsWith(_q.answer + '.')) { b.style.borderColor = '#4ade80'; b.style.color = '#4ade80'; }
    });
    if (!right) { btn.style.borderColor = '#f87171'; btn.style.color = '#f87171'; }
    if (right) {
      _state.correct[_line]++;
      if (!_state.used[_line].includes(_q.no)) _state.used[_line].push(_q.no);
      const newRank = Math.min(Math.floor(_state.correct[_line] / PER_RANK), MAX_RANK);
      const promoted = newRank > _state.ranks[_line];
      _state.ranks[_line] = newRank;
      save(_state);
      const say = SAY_RIGHT[Math.floor(Math.random() * SAY_RIGHT.length)];
      body.querySelector('#gc-verdict').innerHTML =
        `<div style="color:#4ade80">✅ ${JUDGE}：「${say}」</div>` +
        `<div style="color:#94a3b8;margin-top:6px">${_q.explanation || ''}</div>` +
        (promoted ? `<div style="color:#f2c84b;font-weight:700;margin-top:8px">🎖 晉升「${RANK_TITLES[newRank]}」！《星律寶典》對應卷已解鎖，去 📖 隨身秘笈看看。</div>` : '') +
        `<button id="gc-next" style="margin-top:10px;width:100%;padding:9px;border:none;border-radius:8px;background:#f2c84b;color:#0f172a;font-weight:700;cursor:pointer">下一案 →</button>`;
    } else {
      save(_state);
      const say = SAY_WRONG[Math.floor(Math.random() * SAY_WRONG.length)];
      body.querySelector('#gc-verdict').innerHTML =
        `<div style="color:#f87171">❌ ${JUDGE}：「${say}」</div>` +
        `<div style="color:#94a3b8;margin-top:6px">${_q.explanation || ''}</div>` +
        `<button id="gc-next" style="margin-top:10px;width:100%;padding:9px;border:1px solid #334155;border-radius:8px;background:#1e293b;color:#e2e8f0;cursor:pointer">下一案 →</button>`;
    }
    body.querySelector('#gc-next').onclick = nextCase;
  }

  global.GovCourt = { open, close };
})(typeof window !== 'undefined' ? window : globalThis);
