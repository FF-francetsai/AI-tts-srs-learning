// Cloudflare Worker: AI-tts-srs 安全 AI Proxy
// ─────────────────────────────────────────────────────────────────────────────
// 功能：作為瀏覽器與各 AI 供應商之間的後端代理
//   - 系統 API key (HF_TOKEN, NVIDIA_KEY) 存為 Worker Secret，永不暴露至前端
//   - 對外僅提供一個 POST /chat 端點，瀏覽器不需知道任何 API key
//   - CORS 鎖定 GitHub Pages 網域
//
// 內部供應商優先順序：
//   1. Hugging Face Router (Qwen3-8B) — HF_TOKEN 存 Worker Secret
//   2. Cloudflare Workers AI           — 使用 AI binding，無額外 key
//   3. NVIDIA NIM Build               — NVIDIA_KEY 存 Worker Secret（選配）
// ─────────────────────────────────────────────────────────────────────────────

const ALLOWED_ORIGINS = [
  'https://ff-francetsai.github.io',
  'http://localhost:5500',
  'http://localhost:3000',
  'http://127.0.0.1:5500',
];

const HF_URL   = 'https://router.huggingface.co/v1/chat/completions';
const HF_MODEL = 'Qwen/Qwen3-8B';

const NV_URL   = 'https://integrate.api.nvidia.com/v1/chat/completions';
const NV_MODEL = 'meta/llama-3.3-70b-instruct';

const CF_AI_MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';

// 繁體中文系統提示（強制覆蓋/補充）
const SYS_ZH = '你是 AI 學習助理，專門協助學習 AI 相關術語與概念。' +
               '請務必使用繁體中文回答，禁止使用任何簡體字。' +
               '回答簡潔清晰，適合學習者理解。/no_think';

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin':  allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age':       '86400',
  };
}

function jsonResp(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
  });
}

// 確保 messages 包含繁體中文 system prompt
function withSysTW(messages) {
  const has = messages.some(m => m.role === 'system');
  return has ? messages : [{ role: 'system', content: SYS_ZH }, ...messages];
}

// ── Edge TTS（Microsoft zh-TW-HsiaoChenNeural）────────────────────────────
// 透過 Microsoft Edge Read Aloud WebSocket 協定取得 MP3，不需任何 API key
const EDGE_TTS_WS  = 'wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1';
const EDGE_TOKEN   = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
const EDGE_VOICE   = 'zh-TW-HsiaoChenNeural';
const EDGE_FORMAT  = 'audio-24khz-48kbitrate-mono-mp3';

async function handleEdgeTTS(text, origin) {
  const connId = crypto.randomUUID().replace(/-/g, '');
  const wsUrl  = `${EDGE_TTS_WS}?TrustedClientToken=${EDGE_TOKEN}&ConnectionId=${connId}`;

  const wsResp = await fetch(wsUrl, {
    headers: {
      'Upgrade':          'websocket',
      'Connection':       'Upgrade',
      'Origin':           'chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold',
      'User-Agent':       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept-Language':  'zh-TW,zh;q=0.9',
      'Cache-Control':    'no-cache',
    },
  });

  const ws = wsResp.webSocket;
  if (!ws) throw new Error('WebSocket upgrade failed');
  ws.accept();

  const ts = new Date().toISOString();

  // 1. 傳送 speech.config
  ws.send(
    `X-Timestamp:${ts}\r\n` +
    `Content-Type:application/json; charset=utf-8\r\n` +
    `Path:speech.config\r\n\r\n` +
    JSON.stringify({ context: { synthesis: { audio: {
      metadataoptions: { sentenceBoundaryEnabled: 'false', wordBoundaryEnabled: 'false' },
      outputFormat: EDGE_FORMAT
    }}}})
  );

  // 2. 傳送 SSML（特殊字元轉義）
  const safe = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='zh-TW'>` +
               `<voice name='${EDGE_VOICE}'><prosody rate='+0%'>${safe}</prosody></voice></speak>`;
  ws.send(
    `X-RequestId:${connId}\r\n` +
    `Content-Type:application/ssml+xml\r\n` +
    `X-Timestamp:${ts}Z\r\n` +
    `Path:ssml\r\n\r\n` +
    ssml
  );

  // 3. 收集二進位音訊片段，直到 turn.end
  return new Promise((resolve, reject) => {
    const chunks = [];
    const timer  = setTimeout(() => { ws.close(); reject(new Error('TTS timeout')); }, 18000);

    ws.addEventListener('message', ev => {
      if (typeof ev.data === 'string') {
        if (ev.data.includes('Path:turn.end')) {
          clearTimeout(timer);
          ws.close();
          // 合併所有 MP3 片段
          const total = chunks.reduce((s, c) => s + c.byteLength, 0);
          const out   = new Uint8Array(total);
          let off = 0;
          chunks.forEach(c => { out.set(new Uint8Array(c), off); off += c.byteLength; });
          resolve(new Response(out, {
            headers: {
              ...corsHeaders(origin),
              'Content-Type':  'audio/mpeg',
              'Cache-Control': 'no-store',
            },
          }));
        }
      } else {
        // Binary：前 2 byte 是 header 長度，header 後才是 MP3 資料
        const ab     = ev.data instanceof ArrayBuffer ? ev.data : ev.data.buffer;
        if (ab.byteLength < 2) return;
        const hdrLen = new DataView(ab).getUint16(0);
        const hdr    = new TextDecoder().decode(new Uint8Array(ab, 2, hdrLen));
        if (hdr.includes('Path:audio')) {
          const audio = ab.slice(2 + hdrLen);
          if (audio.byteLength > 0) chunks.push(audio);
        }
      }
    });

    ws.addEventListener('error', e => { clearTimeout(timer); reject(e); });
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const path   = new URL(request.url).pathname;

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return jsonResp({ error: 'Method Not Allowed' }, 405, origin);
    }

    // ── /tts 端點：Edge TTS 雲端代理 ──────────────────────────────────
    if (path === '/tts') {
      let body;
      try { body = await request.json(); } catch {
        return jsonResp({ error: 'Invalid JSON' }, 400, origin);
      }
      const text = (body.text || '').trim().slice(0, 2000);
      if (!text) return jsonResp({ error: 'no text' }, 400, origin);
      try {
        return await handleEdgeTTS(text, origin);
      } catch (e) {
        return jsonResp({ error: 'TTS failed', detail: e.message }, 500, origin);
      }
    }

    // ── /chat 端點（原有邏輯）─────────────────────────────────────────
    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResp({ error: 'Invalid JSON' }, 400, origin);
    }

    const messages  = withSysTW(body.messages || []);
    const maxTokens = Math.min(Number(body.max_tokens) || 600, 1024);

    // ── 供應商嘗試鏈 ────────────────────────────────────────────────
    const errors = [];

    // 1. Hugging Face Router (Qwen3-8B)
    //    HF_TOKEN 由 `wrangler secret put HF_TOKEN` 設定，不存在程式碼中
    if (env.HF_TOKEN) {
      try {
        const r = await fetch(HF_URL, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${env.HF_TOKEN}` },
          body:    JSON.stringify({ model: HF_MODEL, messages, max_tokens: maxTokens }),
          signal:  AbortSignal.timeout(28000),
        });
        if (r.ok) {
          const d       = await r.json();
          const content = _clean(d?.choices?.[0]?.message?.content || '');
          if (content) return jsonResp({ choices: [{ message: { role: 'assistant', content } }], provider: 'hf' }, 200, origin);
        }
        errors.push(`HF:${r.status}`);
      } catch (e) { errors.push(`HF:${e.message}`); }
    }

    // 2. Cloudflare Workers AI (AI binding，無額外 key)
    if (env.AI) {
      try {
        const result = await env.AI.run(CF_AI_MODEL, { messages, max_tokens: maxTokens });
        const content = _clean(result?.response || result?.choices?.[0]?.message?.content || '');
        if (content) return jsonResp({ choices: [{ message: { role: 'assistant', content } }], provider: 'cf-ai' }, 200, origin);
        errors.push('CF-AI:empty');
      } catch (e) { errors.push(`CF-AI:${e.message}`); }
    }

    // 3. NVIDIA NIM Build（選配）
    //    NVIDIA_KEY 由 `wrangler secret put NVIDIA_KEY` 設定
    if (env.NVIDIA_KEY) {
      try {
        const r = await fetch(NV_URL, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${env.NVIDIA_KEY}` },
          body:    JSON.stringify({ model: NV_MODEL, messages, max_tokens: maxTokens, stream: false }),
          signal:  AbortSignal.timeout(28000),
        });
        if (r.ok) {
          const d       = await r.json();
          const content = _clean(d?.choices?.[0]?.message?.content || '');
          if (content) return jsonResp({ choices: [{ message: { role: 'assistant', content } }], provider: 'nvidia' }, 200, origin);
        }
        errors.push(`NVIDIA:${r.status}`);
      } catch (e) { errors.push(`NVIDIA:${e.message}`); }
    }

    return jsonResp({ error: 'All providers failed', details: errors }, 503, origin);
  },
};

function _clean(text) {
  return (text || '').replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
}
