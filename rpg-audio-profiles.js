// ── 11 守護者語音差異化設定（指揮官修正版 2026-07-29）──────────────────
// 取代音效會議 GLM51（佔位殘檔）與 DeepSeek（en-US/ja-JP/pt-BR 錯語系）兩份產出。
//
// 現實約束（以 cloudflare/worker.js 實測為準，勿照 Google Cloud TTS 文件想像）：
// 1. CF /tts 走 translate.google.com translate_tts，zh-TW 單一女聲，
//    伺服器端無 voice/pitch/rate 參數 → 只能靠前端 playbackRate 差異化，
//    並以 preservesPitch=false 讓速度連動音高（唯一可用的變調手段）。
// 2. 瀏覽器 speechSynthesis 路徑支援 rate(0.1~10)/pitch(0~2)，zh-TW 音色
//    依裝置 1~3 種（Windows 美玲/志偉、iOS 美嘉），用 genderPref 挑聲。
// 3. 故每位守護者提供兩組參數：syn = speechSynthesis 用，cf = CF 音檔播放用。
//    數值刻意拉開檔距（±0.1 以上），11 位靠「快慢×高低×性別」三軸區隔。
const RPG_AUDIO_PROFILES = {
  //            speechSynthesis 路徑            CF /tts 路徑
  //            rate  pitch genderPref          playbackRate preservesPitch
  isabel:  { syn: { rate: 0.92, pitch: 1.15, gender: 'female' }, cf: { rate: 0.92, keepPitch: true  } }, // 溫暖啟蒙導師：稍慢、柔亮
  dada:    { syn: { rate: 1.20, pitch: 0.80, gender: 'male'   }, cf: { rate: 1.15, keepPitch: false } }, // 豪爽礦場工頭：快、低沉
  kael:    { syn: { rate: 1.00, pitch: 0.95, gender: 'male'   }, cf: { rate: 1.00, keepPitch: true  } }, // 一絲不苟祭司：標準基準聲
  sara:    { syn: { rate: 1.15, pitch: 1.25, gender: 'female' }, cf: { rate: 1.12, keepPitch: true  } }, // 俐落機庫技師：快、偏高
  rova:    { syn: { rate: 1.08, pitch: 0.70, gender: 'male'   }, cf: { rate: 0.96, keepPitch: false } }, // 野性荒野嚮導：厚實低音
  moon:    { syn: { rate: 0.85, pitch: 0.85, gender: 'male'   }, cf: { rate: 0.85, keepPitch: false } }, // 沉穩鍛造大師：慢、沉
  aura:    { syn: { rate: 1.05, pitch: 1.40, gender: 'female' }, cf: { rate: 1.06, keepPitch: true  } }, // 靈感創界藝術家：空靈高音
  liyang:  { syn: { rate: 1.25, pitch: 1.05, gender: 'male'   }, cf: { rate: 1.22, keepPitch: true  } }, // 熱血競技教練：最快、有勁
  council: { syn: { rate: 0.88, pitch: 0.75, gender: 'male'   }, cf: { rate: 0.88, keepPitch: false } }, // 長老合議制：緩慢威嚴
  atlas:   { syn: { rate: 0.95, pitch: 0.90, gender: 'male'   }, cf: { rate: 0.95, keepPitch: true  } }, // 議長縱觀星圖：從容中低
  mangyue: { syn: { rate: 0.90, pitch: 0.65, gender: 'male'   }, cf: { rate: 0.90, keepPitch: false } }, // 機械巨蟒塔主：最低、盤旋感
};

// 取設定（未知 persona 回 kael 基準聲，保證永遠有值）
function getAudioProfile(personaId) {
  return RPG_AUDIO_PROFILES[personaId] || RPG_AUDIO_PROFILES.kael;
}

if (typeof module !== 'undefined') module.exports = { RPG_AUDIO_PROFILES, getAudioProfile };
