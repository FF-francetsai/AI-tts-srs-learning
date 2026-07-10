// rpg-grimoire.js — 秘笈背包＋隨身翻閱介面（v2：新增 ☰ 目錄＋🔍 即時搜尋）
// 資料：grimoires.js（tools/build_grimoires.js 自動編譯）；解鎖依 RPG 進度與試煉塔層數。
(function (global) {
  'use strict';
  if (global.Grimoire) return;

  const SAVE_KEY_RPG   = 'rpg_ai_league_progress';
  const SAVE_KEY_TOWER = 'python_tower_v1';
  const READ_KEY       = 'grimoire_read_marks';   // { bookId: lastPageIdx }

  function _progress() {
    let cleared = [], floor = 1;
    try { cleared = (JSON.parse(localStorage.getItem(SAVE_KEY_RPG)) || {}).cleared || []; } catch (e) {}
    try { floor = (JSON.parse(localStorage.getItem(SAVE_KEY_TOWER)) || {}).floor || 1; } catch (e) {}
    return { cleared, floor };
  }

  function _domains() { return (typeof DOMAINS !== 'undefined') ? DOMAINS : []; }

  function _unlocked(book, prog) {
    if (book.unlock.type === 'tower') return prog.floor >= book.unlock.floor;
    if (book.unlock.type === 'gov') {
      let gc = {};
      try { gc = JSON.parse(localStorage.getItem('gov_court_v1')) || {}; } catch (e) {}
      return ((gc.ranks || {})[book.unlock.line] || 0) >= book.unlock.rank;
    }
    const d = _domains().find(x => x.key === book.unlock.key);
    if (!d) return true;
    return !d.unlockAfter || prog.cleared.includes(d.unlockAfter);
  }

  function _marks() { try { return JSON.parse(localStorage.getItem(READ_KEY)) || {}; } catch (e) { return {}; } }
  function _saveMark(bookId, idx) {
    const m = _marks(); m[bookId] = idx;
    try { localStorage.setItem(READ_KEY, JSON.stringify(m)); } catch (e) {}
  }

  // 搜尋用：去 HTML 標籤取純文字／插回 HTML 前跳脫
  function _plain(s) { return String(s || '').replace(/<[^>]*>/g, ' '); }
  function _esc(s)   { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  // ── 書架 ────────────────────────────────────────────────────────────────
  let _shelf = null, _reader = null;

  function openShelf() {
    if (!global.GRIMOIRES) return;
    closeShelf(); closeReader();
    const prog = _progress();
    const wrap = document.createElement('div');
    wrap.id = 'grimoire-shelf';
    wrap.style.cssText = 'position:fixed;inset:0;z-index:8500;background:rgba(2,6,23,.9);backdrop-filter:blur(3px);overflow-y:auto;padding:20px 12px 40px';
    let cells = '';
    for (const b of global.GRIMOIRES.books) {
      const ok = _unlocked(b, prog);
      cells +=
        `<div data-book="${ok ? b.id : ''}" style="cursor:${ok ? 'pointer' : 'default'};background:#0f172a;` +
        `border:1.5px solid ${ok ? b.color : '#334155'};border-radius:12px;padding:12px;` +
        `${ok ? '' : 'opacity:.45;filter:grayscale(.8);'}">` +
        `<div style="font-size:22px">${ok ? (b.emoji || '📖') : '🔒'}</div>` +
        `<div style="color:${ok ? b.color : '#64748b'};font-weight:700;font-size:13px;margin:4px 0">${b.name}</div>` +
        `<div style="color:#94a3b8;font-size:11px">${b.rarityName}・${b.pages.length} 頁・${b.guardian}</div>` +
        (ok ? '' : `<div style="color:#64748b;font-size:11px;margin-top:4px">${b.unlock.hint}</div>`) +
        `</div>`;
    }
    wrap.innerHTML =
      `<div style="max-width:640px;margin:0 auto">` +
      `<div style="display:flex;align-items:center;margin-bottom:14px">` +
      `<div style="flex:1;color:#f0e6ff;font-weight:700;font-size:17px">📖 隨身秘笈</div>` +
      `<button id="grimoire-shelf-close" style="background:none;border:none;color:#94a3b8;font-size:22px;cursor:pointer">✕</button></div>` +
      `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px">${cells}</div>` +
      `<div style="color:#475569;font-size:11px;margin-top:16px;text-align:center">秘笈內容由題庫每日自動編纂・由淺至深排列・可反覆翻閱</div></div>`;
    document.body.appendChild(wrap);
    _shelf = wrap;
    wrap.querySelector('#grimoire-shelf-close').onclick = closeShelf;
    wrap.querySelectorAll('[data-book]').forEach(el => {
      const id = el.getAttribute('data-book');
      if (id) el.onclick = () => openReader(id);
    });
  }
  function closeShelf() { if (_shelf) { _shelf.remove(); _shelf = null; } }

  // ── 翻閱器 ──────────────────────────────────────────────────────────────
  function openReader(bookId) {
    const b = (global.GRIMOIRES.books || []).find(x => x.id === bookId);
    if (!b) return;
    closeReader();
    let idx = Math.min(_marks()[bookId] || 0, b.pages.length - 1);
    const wrap = document.createElement('div');
    wrap.id = 'grimoire-reader';
    wrap.style.cssText = 'position:fixed;inset:0;z-index:8600;background:rgba(2,6,23,.94);display:flex;align-items:center;justify-content:center;padding:10px';
    wrap.innerHTML =
      `<div style="width:min(520px,96vw);max-height:88vh;display:flex;flex-direction:column;background:#0f172a;border:1.5px solid ${b.color};border-radius:14px;overflow:hidden;position:relative">` +
      `<div style="display:flex;align-items:center;gap:8px;padding:10px 14px;background:#1e293b">` +
      `<span style="font-size:18px">${b.emoji || '📖'}</span>` +
      `<div style="flex:1;color:${b.color};font-weight:700;font-size:14px">${b.name}</div>` +
      `<button id="gr-toc" title="目錄／搜尋" style="background:none;border:none;color:#94a3b8;font-size:19px;cursor:pointer;padding:0 4px">☰</button>` +
      `<button id="gr-close" style="background:none;border:none;color:#94a3b8;font-size:20px;cursor:pointer">✕</button></div>` +
      `<div id="gr-page" style="flex:1;overflow-y:auto;padding:16px;min-height:220px"></div>` +
      `<div style="display:flex;align-items:center;gap:8px;padding:10px;background:#1e293b">` +
      `<button id="gr-prev" style="padding:8px 16px;border:1px solid #334155;border-radius:8px;background:#0f172a;color:#e2e8f0;cursor:pointer">← 上頁</button>` +
      `<div id="gr-no" style="flex:1;text-align:center;color:#94a3b8;font-size:12px"></div>` +
      `<button id="gr-next" style="padding:8px 16px;border:1px solid #334155;border-radius:8px;background:#0f172a;color:#e2e8f0;cursor:pointer">下頁 →</button>` +
      `</div>` +
      // ── v2：目錄＋搜尋面板（蓋在頁面區上方，同一面板：無關鍵字＝目錄，有關鍵字＝搜尋結果）──
      `<div id="gr-panel" style="position:absolute;inset:0;display:none;flex-direction:column;background:rgba(15,23,42,.97);z-index:5">` +
      `<div style="display:flex;align-items:center;gap:8px;padding:10px 12px;background:#1e293b">` +
      `<input id="gr-q" type="search" placeholder="🔍 搜尋本卷（標題／內文／程式碼）" ` +
      `style="flex:1;padding:8px 10px;border:1px solid #334155;border-radius:8px;background:#0b1020;color:#e2e8f0;font-size:13px;outline:none">` +
      `<button id="gr-panel-close" style="background:none;border:none;color:#94a3b8;font-size:19px;cursor:pointer">✕</button></div>` +
      `<div id="gr-list" style="flex:1;overflow-y:auto;padding:8px 10px"></div></div>` +
      `</div>`;
    document.body.appendChild(wrap);
    _reader = wrap;

    const render = () => {
      const p = b.pages[idx];
      const page = wrap.querySelector('#gr-page');
      page.innerHTML =
        `<div style="color:${b.color};font-weight:700;font-size:16px">${p.t || ''}</div>` +
        (p.e ? `<div style="color:#64748b;font-size:12px;margin-top:2px">${p.e}</div>` : '') +
        (p.def ? `<div style="color:#e2e8f0;font-size:14px;line-height:1.7;margin-top:10px">${p.def}</div>` : '') +
        (p.code ? `<pre style="background:#0b1020;border:1px solid #1e293b;border-radius:8px;padding:10px;font-size:12px;overflow-x:auto;white-space:pre-wrap;margin-top:10px;color:#a5f3fc">${p.code}</pre>` : '') +
        (p.ans ? `<div style="color:#4ade80;font-size:13px;margin-top:8px">${p.ans}</div>` : '') +
        (p.goal ? `<div style="color:#fbbf24;font-size:13px;margin-top:10px">🎯 ${p.goal}</div>` : '') +
        (p.deep ? `<div style="color:#94a3b8;font-size:13px;line-height:1.6;margin-top:10px;border-top:1px dashed #334155;padding-top:8px">${p.deep}</div>` : '');
      page.scrollTop = 0;
      wrap.querySelector('#gr-no').textContent = `第 ${idx + 1} / ${b.pages.length} 頁`;
      _saveMark(bookId, idx);
    };

    // ── v2：目錄＋搜尋 ──
    const panel = wrap.querySelector('#gr-panel');
    const input = wrap.querySelector('#gr-q');
    const listEl = wrap.querySelector('#gr-list');

    const hidePanel = () => { panel.style.display = 'none'; };
    const renderList = q => {
      q = (q || '').trim().toLowerCase();
      let html = '', hits = 0;
      b.pages.forEach((p, i) => {
        let snippet = '';
        if (q) {
          const hay = _plain([p.t, p.e, p.def, p.code, p.ans, p.goal, p.deep].join(' '));
          const pos = hay.toLowerCase().indexOf(q);
          if (pos < 0) return;
          const s = Math.max(0, pos - 18);
          snippet = (s > 0 ? '…' : '') + hay.slice(s, pos + q.length + 42).trim() + '…';
        }
        hits++;
        const cur = i === idx;
        html +=
          `<div data-p="${i}"${cur ? ' data-cur="1"' : ''} style="cursor:pointer;padding:8px 10px;border-radius:8px;margin-bottom:2px;` +
          `${cur ? `background:#1e293b;border-left:3px solid ${b.color}` : 'border-left:3px solid transparent'}">` +
          `<div style="color:${cur ? b.color : '#e2e8f0'};font-size:13px;font-weight:${cur ? 700 : 400}">${i + 1}. ${_esc(_plain(p.t)) || '（無標題）'}${cur ? '　◀ 目前' : ''}</div>` +
          (snippet ? `<div style="color:#94a3b8;font-size:11px;margin-top:2px;line-height:1.5">${_esc(snippet)}</div>` : '') +
          `</div>`;
      });
      listEl.innerHTML = (q && !hits)
        ? '<div style="color:#64748b;text-align:center;padding:28px 0;font-size:13px">找不到符合「' + _esc(q) + '」的內容</div>'
        : html;
      listEl.querySelectorAll('[data-p]').forEach(el => {
        el.onclick = () => { idx = +el.getAttribute('data-p'); render(); hidePanel(); };
      });
    };
    const showPanel = () => {
      panel.style.display = 'flex';
      renderList(input.value);
      const cur = listEl.querySelector('[data-cur]');
      if (cur && !input.value.trim()) cur.scrollIntoView({ block: 'center' });
    };
    wrap.querySelector('#gr-toc').onclick = showPanel;
    wrap.querySelector('#gr-panel-close').onclick = hidePanel;
    input.oninput = () => renderList(input.value);

    wrap.querySelector('#gr-close').onclick = closeReader;
    wrap.querySelector('#gr-prev').onclick = () => { if (idx > 0) { idx--; render(); } };
    wrap.querySelector('#gr-next').onclick = () => { if (idx < b.pages.length - 1) { idx++; render(); } };
    wrap.addEventListener('click', e => { if (e.target === wrap) closeReader(); });
    render();
  }
  function closeReader() { if (_reader) { _reader.remove(); _reader = null; } }

  // ── FAB 入口（📖 左下角浮動按鈕）────────────────────────────────────────
  function _injectFab() {
    if (document.getElementById('grimoire-fab')) return;
    const fab = document.createElement('button');
    fab.id = 'grimoire-fab';
    fab.textContent = '📖';
    fab.title = '隨身秘笈';
    fab.style.cssText = 'position:fixed;left:14px;bottom:14px;z-index:8400;width:48px;height:48px;border-radius:50%;' +
      'border:1.5px solid #f2c84b88;background:#0f172acc;font-size:22px;cursor:pointer;backdrop-filter:blur(4px);' +
      'box-shadow:0 2px 10px rgba(0,0,0,.5)';
    fab.onclick = openShelf;
    document.body.appendChild(fab);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _injectFab);
  else _injectFab();

  global.Grimoire = { openShelf, openReader, close: () => { closeShelf(); closeReader(); } };
})(typeof window !== 'undefined' ? window : globalThis);
