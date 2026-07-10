// rpg-npc-chat.js — 守護者自由對話面板（文字＋語音輸入）
// 每位守護者只依「自己的人設（rpg-npc-personas.js）＋自己星域的知識（catFilter 術語池）」回覆；
// 超出範圍的問題會用人設口吻婉拒並指路。多輪上下文保留在記憶體（每星域獨立）。
(function (global) {
  'use strict';
  if (global.NpcChat) return;

  const WORKER = (global.AI_PROVIDERS && global.AI_PROVIDERS.cf_worker_url) ||
                 'https://ai-tts-srs-proxy.ai-tts-srs-learning.workers.dev';
  const MAX_CTX = 8;          // 帶入模型的歷史訊息數上限
  const _hist = {};           // domainKey → [{role, content}]

  // ── system prompt：人設 ＋ 星域知識範圍 ＋ 越界婉拒規則 ─────────────────
  function _sysPrompt(domain) {
    const persona = (typeof global.buildNpcPersonaPrompt === 'function' &&
                     global.buildNpcPersonaPrompt(domain.guardianChar)) ||
      `你是「${domain.guardian}」，${domain.name}的守護者，用親切口吻幫助見習士學習 AI。`;
    const terms = Array.isArray(domain.termsOverride)
      ? domain.termsOverride.join('、')
      : ((typeof global.getTermPool === 'function') ? global.getTermPool(domain) : [])
          .slice(0, 24).map(t => t.title).filter(Boolean).join('、');
    return persona +
      `\n你的知識範圍【僅限】你守護的「${domain.name}」星域，本星域術語包含：${terms || '本星域的 AI 概念'}。` +
      '\n範圍規則：只回答與你的人設背景、你星域知識相關的問題。' +
      '若玩家的問題屬於其他星域的主題或與 AI 學習無關，' +
      '不要硬答——用你的口吻婉拒，並建議玩家去對應的星域請教該星域的守護者。' +
      '\n每次回覆 120 字以內，可用你的口頭禪但不要每句都用。';
  }

  async function _llm(domain, messages) {
    const body = { messages, max_tokens: 300 };
    const m = domain.npcModel || {};
    if (m.nvidia) body.model_nv = m.nvidia;
    if (m.cf)     body.model_cf = m.cf;
    if (m.hf)     body.model_hf = m.hf;
    const r = await fetch(WORKER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(25000)
    });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const d = await r.json();
    return d?.choices?.[0]?.message?.content?.trim() || null;
  }

  // ── UI ────────────────────────────────────────────────────────────────
  let _el = null, _busy = false, _voice = null, _domain = null;

  function _css(c) {
    return 'position:fixed;inset:0;z-index:9000;display:flex;align-items:flex-end;justify-content:center;' +
      'background:rgba(0,0,0,.55);backdrop-filter:blur(2px);font-family:inherit;';
  }

  function _render(domain) {
    _domain = domain;
    const c = domain.color || '#22d3ee';
    const wrap = document.createElement('div');
    wrap.id = 'npc-chat-overlay';
    wrap.style.cssText = _css(c);
    wrap.innerHTML =
      `<div style="width:min(560px,96vw);max-height:82vh;display:flex;flex-direction:column;` +
      `background:#0f172a;border:1px solid ${c};border-radius:14px 14px 0 0;overflow:hidden">` +
      `<div style="display:flex;align-items:center;gap:8px;padding:10px 14px;background:#1e293b;border-bottom:1px solid ${c}55">` +
      `<span style="font-size:20px">${domain.emoji || '🛰️'}</span>` +
      `<div style="flex:1"><div style="color:${c};font-weight:700">${domain.guardian}</div>` +
      `<div style="color:#94a3b8;font-size:12px">${domain.name}・只聊本星域的知識</div></div>` +
      `<button id="npc-chat-close" style="background:none;border:none;color:#94a3b8;font-size:20px;cursor:pointer">✕</button></div>` +
      `<div id="npc-chat-msgs" style="flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:8px;min-height:180px"></div>` +
      `<div style="display:flex;gap:6px;padding:10px;background:#1e293b;border-top:1px solid #33415555">` +
      `<textarea id="npc-chat-input" rows="1" placeholder="輸入想問${domain.guardian}的問題…" ` +
      `style="flex:1;resize:none;background:#0f172a;color:#e2e8f0;border:1px solid #334155;border-radius:8px;padding:8px 10px;font-size:14px"></textarea>` +
      `<button id="npc-chat-mic" data-voice-status title="語音輸入" ` +
      `style="width:40px;border:1px solid #334155;border-radius:8px;background:#0f172a;color:#e2e8f0;cursor:pointer;font-size:16px">🎤</button>` +
      `<button id="npc-chat-send" style="padding:0 14px;border:none;border-radius:8px;background:${c};color:#0f172a;font-weight:700;cursor:pointer">送出</button>` +
      `</div></div>`;
    document.body.appendChild(wrap);
    _el = wrap;

    const input = wrap.querySelector('#npc-chat-input');
    const mic   = wrap.querySelector('#npc-chat-mic');

    wrap.querySelector('#npc-chat-close').onclick = close;
    wrap.addEventListener('click', e => { if (e.target === wrap) close(); });
    wrap.querySelector('#npc-chat-send').onclick = () => _submit(input);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); _submit(input); }
    });

    // 語音輸入（js/voice.js：Breeze-ASR → Web Speech fallback；不支援則隱藏按鈕）
    if (typeof global.VoiceInput === 'function') {
      _voice = new global.VoiceInput();
      _voice.onResult(r => {
        if (r && r.text) { input.value = (input.value ? input.value + ' ' : '') + r.text; }
        mic.textContent = '🎤'; mic.style.color = '#e2e8f0';
      });
      _voice.onError(msg => { mic.textContent = '🎤'; mic.style.color = '#e2e8f0'; _sysMsg('🎙️ ' + msg); });
      mic.onclick = () => {
        if (_voice.recording) { _voice.stop(); mic.textContent = '🎤'; mic.style.color = '#e2e8f0'; }
        else { _voice.start(); mic.textContent = '⏺'; mic.style.color = '#f87171'; }
      };
    } else { mic.style.display = 'none'; }

    // 回放本星域歷史；首次進場由守護者開場
    const h = _hist[domain.key] || [];
    if (h.length === 0) {
      _bubble('npc', `${domain.guardian}在此。想問${domain.name}的什麼呢？儘管說！`);
    } else {
      h.forEach(m => _bubble(m.role === 'assistant' ? 'npc' : 'user', m.content));
    }
    input.focus();
  }

  function _bubble(who, text) {
    const box = _el && _el.querySelector('#npc-chat-msgs');
    if (!box) return null;
    const c = _domain.color || '#22d3ee';
    const div = document.createElement('div');
    if (who === 'user') {
      div.style.cssText = 'align-self:flex-end;max-width:85%;background:#334155;color:#e2e8f0;padding:8px 12px;border-radius:12px 12px 2px 12px;font-size:14px;white-space:pre-wrap';
    } else if (who === 'npc') {
      div.style.cssText = `align-self:flex-start;max-width:85%;background:#1e293b;color:#e2e8f0;border-left:3px solid ${c};padding:8px 12px;border-radius:2px 12px 12px 12px;font-size:14px;white-space:pre-wrap`;
    } else {
      div.style.cssText = 'align-self:center;color:#64748b;font-size:12px';
    }
    div.textContent = text;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
    return div;
  }
  function _sysMsg(t) { _bubble('sys', t); }

  async function _submit(input) {
    const text = input.value.trim();
    if (!text || _busy) return;
    input.value = '';
    await _ask(text);
  }

  async function _ask(text) {
    _busy = true;
    const key = _domain.key;
    _hist[key] = _hist[key] || [];
    _hist[key].push({ role: 'user', content: text });
    _bubble('user', text);
    const thinking = _bubble('npc', '…（思考中）');
    try {
      const messages = [
        { role: 'system', content: _sysPrompt(_domain) },
        ..._hist[key].slice(-MAX_CTX)
      ];
      const reply = await _llm(_domain, messages) || '（星際通訊不穩，請再問一次）';
      _hist[key].push({ role: 'assistant', content: reply });
      if (thinking) thinking.textContent = reply;
    } catch (e) {
      if (thinking) thinking.textContent = '（星際通訊不穩，請稍後再試）';
    } finally {
      _busy = false;
    }
  }

  function open(domain, seedQuestion) {
    if (_el) close();
    _render(domain);
    if (seedQuestion) _ask(seedQuestion);
  }

  function close() {
    if (_voice && _voice.recording) { try { _voice.stop(); } catch (e) {} }
    if (_el) { _el.remove(); _el = null; }
  }

  global.NpcChat = { open, close };
})(typeof window !== 'undefined' ? window : globalThis);
