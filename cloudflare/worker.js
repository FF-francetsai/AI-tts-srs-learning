// Cloudflare Worker: AI-tts-srs 安全 AI Proxy
// ─────────────────────────────────────────────────────────────────────────────
// 端點：
//   POST /chat       — AI 對話代理（HF / CF-AI / NVIDIA）
//   POST /tts        — Google TTS 雲端代理（zh-TW，HTTP GET，無需 key）
//   POST /npc        — RPG 生成式 NPC（{prompt,maxTokens} → {response}，P0-2）
//   POST /transcribe — CF Workers AI Whisper 語音轉文字（無需 key）
// API key 全部存 Worker Secret，永不暴露前端
// ─────────────────────────────────────────────────────────────────────────────

const ALLOWED_ORIGINS = [
  'https://ff-francetsai.github.io',
  'http://localhost:5500',
  'http://localhost:3000',
  'http://127.0.0.1:5500',
  'http://localhost:8501',   // mllm_app 本地前端
  'http://127.0.0.1:8501',
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

// ── Google Translate TTS（HTTP GET，zh-TW，無需 API key）─────────────────
// Edge TTS 需要 WebSocket 連外，CF Workers 不支援；改用 Google Translate TTS
async function handleGoogleTTS(text, origin) {
  const params = new URLSearchParams({
    ie: 'UTF-8',
    q:  text.slice(0, 200),   // Google TTS 單次字元限制約 200
    tl: 'zh-TW',
    client: 'gtx',
  });
  const r = await fetch(`https://translate.google.com/translate_tts?${params}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
    signal: AbortSignal.timeout(12000),
  });
  if (!r.ok) throw new Error(`Google TTS: ${r.status}`);
  const audio = await r.arrayBuffer();
  if (audio.byteLength < 100) throw new Error('Google TTS: empty audio');
  return new Response(audio, {
    headers: {
      ...corsHeaders(origin),
      'Content-Type':  'audio/mpeg',
      'Cache-Control': 'no-store',
    },
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

    // ── /transcribe 端點：CF Workers AI Whisper 語音轉文字 ────────────
    // 情境A：手機/平板/無GPU設備 → 走這裡（雲端 Whisper Large V3 Turbo）
    // 情境B：本地 mllm_app 的 whisper-small 引擎 fallback → 也走這裡
    // Breeze-ASR 25/26（台語/繁中專用）無雲端替代，仍走 localhost:8501
    if (path === '/transcribe') {
      let body;
      try { body = await request.json(); } catch {
        return jsonResp({ error: 'Invalid JSON' }, 400, origin);
      }
      const audio_b64 = (body.audio_b64 || '').trim();
      if (!audio_b64) return jsonResp({ error: 'no audio_b64' }, 400, origin);
      if (!env.AI)    return jsonResp({ error: 'AI binding not available' }, 503, origin);
      try {
        // base64 → Uint8Array
        const bin   = atob(audio_b64);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const result = await env.AI.run('@cf/openai/whisper-large-v3-turbo', {
          audio: [...bytes]
        });
        return jsonResp({
          text:     result.text     || '',
          language: result.language || 'zh',
          source:   'cf-whisper-large-v3-turbo',
        }, 200, origin);
      } catch (e) {
        return jsonResp({ error: 'Whisper failed: ' + e.message }, 500, origin);
      }
    }

    // ── /vision 端點：CF Workers AI 視覺理解（sprite QA 等）─────────────
    // 契約：{image_b64, prompt, max_tokens?} → {text, model}
    if (path === '/vision') {
      let body;
      try { body = await request.json(); } catch {
        return jsonResp({ error: 'Invalid JSON' }, 400, origin);
      }
      const image_b64 = (body.image_b64 || '').trim();
      const vprompt   = String(body.prompt || 'Describe this image.').slice(0, 2000);
      if (!image_b64) return jsonResp({ error: 'no image_b64' }, 400, origin);
      if (!env.AI)    return jsonResp({ error: 'AI binding not available' }, 503, origin);
      try {
        const bin   = atob(image_b64);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const VMODEL = '@cf/llava-hf/llava-1.5-7b-hf';
        const result = await env.AI.run(VMODEL, {
          image: [...bytes],
          prompt: vprompt,
          max_tokens: Math.min(Number(body.max_tokens) || 256, 512),
        });
        return jsonResp({ text: result.description || result.text || '', model: VMODEL }, 200, origin);
      } catch (e) {
        return jsonResp({ error: 'Vision failed: ' + e.message }, 500, origin);
      }
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
        return await handleGoogleTTS(text, origin);
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

    // ── /npc 端點（P0-2，RPG 生成式 NPC）──────────────────────────
    // 契約：{prompt, maxTokens} → {response}；沿用下方供應商嘗試鏈
    const npcMode = (path === '/npc');
    if (npcMode) {
      const p = String(body.prompt || '').trim().slice(0, 2000);
      if (!p) return jsonResp({ error: 'no prompt' }, 400, origin);
      body.messages   = [{ role: 'user', content: p }];
      body.max_tokens = Math.min(Number(body.maxTokens) || 120, 300);
    }

    const messages  = withSysTW(body.messages || []);
    const maxTokens = Math.min(Number(body.max_tokens) || 1200, 2000);

    // 接受前端傳入的 model 偏好（基本格式驗證防注入）
    const HF_ID = /^[A-Za-z0-9_\-./]+\/[A-Za-z0-9_\-./]+$/.test(body.model_hf || '')
      ? body.model_hf : HF_MODEL;
    const CF_ID = (body.model_cf || '').startsWith('@cf/')
      ? body.model_cf : CF_AI_MODEL;
    const NV_ID = /^[a-z0-9_\-.]+\/[a-z0-9_\-.]+$/.test(body.model_nv || '')
      ? body.model_nv : NV_MODEL;

    // ── 供應商嘗試鏈 ────────────────────────────────────────────────
    const errors = [];

    // 1. Hugging Face Router
    if (env.HF_TOKEN) {
      try {
        const r = await fetch(HF_URL, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${env.HF_TOKEN}` },
          body:    JSON.stringify({ model: HF_ID, messages, max_tokens: maxTokens }),
          signal:  AbortSignal.timeout(28000),
        });
        if (r.ok) {
          const d       = await r.json();
          const content = _clean(d?.choices?.[0]?.message?.content || '');
          if (content) return jsonResp(npcMode ? { response: content, provider: 'hf', model: HF_ID } : { choices: [{ message: { role: 'assistant', content } }], provider: 'hf', model: HF_ID }, 200, origin);
        }
        errors.push(`HF:${r.status}`);
      } catch (e) { errors.push(`HF:${e.message}`); }
    }

    // 2. Cloudflare Workers AI (AI binding，無額外 key)
    if (env.AI) {
      try {
        const result = await env.AI.run(CF_ID, { messages, max_tokens: maxTokens });
        const content = _clean(result?.response || result?.choices?.[0]?.message?.content || '');
        if (content) return jsonResp(npcMode ? { response: content, provider: 'cf-ai', model: CF_ID } : { choices: [{ message: { role: 'assistant', content } }], provider: 'cf-ai', model: CF_ID }, 200, origin);
        errors.push('CF-AI:empty');
      } catch (e) { errors.push(`CF-AI:${e.message}`); }
    }

    // 3. NVIDIA NIM Build（選配）
    if (env.NVIDIA_KEY) {
      try {
        const r = await fetch(NV_URL, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${env.NVIDIA_KEY}` },
          body:    JSON.stringify({ model: NV_ID, messages, max_tokens: maxTokens, stream: false }),
          signal:  AbortSignal.timeout(28000),
        });
        if (r.ok) {
          const d       = await r.json();
          const content = _clean(d?.choices?.[0]?.message?.content || '');
          if (content) return jsonResp(npcMode ? { response: content, provider: 'nvidia', model: NV_ID } : { choices: [{ message: { role: 'assistant', content } }], provider: 'nvidia', model: NV_ID }, 200, origin);
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
