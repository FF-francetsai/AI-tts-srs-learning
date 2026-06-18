// js/providers.js — 安全設定檔（無任何 API key，可安全提交 git）
// ─────────────────────────────────────────────────────────────────────────────
// 所有 API key 存放在 Cloudflare Worker Secret，不在此檔案內。
// 部署 CF Worker 後，將 Worker URL 填入 cf_worker_url。
// ─────────────────────────────────────────────────────────────────────────────
window.AI_PROVIDERS = {
  // Cloudflare Worker URL（部署後填入，格式：https://ai-tts-srs-proxy.xxx.workers.dev）
  // Worker 內部持有 HF_TOKEN、NVIDIA_KEY，瀏覽器永遠看不到這些 key。
  cf_worker_url: 'https://ai-tts-srs-proxy.ai-tts-srs-learning.workers.dev',
};
