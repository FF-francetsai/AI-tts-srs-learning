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

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return jsonResp({ error: 'Method Not Allowed' }, 405, origin);
    }

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
