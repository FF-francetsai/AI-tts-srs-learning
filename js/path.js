/**
 * path.js — 學習路徑 Schema
 *
 * 定義四個學習階段，以及各 subject 標記對應的 Stage 歸屬。
 * 呈現順序原則：Stage 0（入門）→ 1（初級）→ 2（中級技術）→ 3（中級數據ML）
 * 每 Stage 內部依概念難易排列（由淺至深）。
 *
 * 規則：
 * - 跨科目術語（如 "初科一  中科一"）以「最低 Stage」為主歸屬，並於較高 Stage 複習
 * - Stage 0 術語以 stage0_ids 白名單手動指定（從現有 data.js 挑選最核心 20 個）
 */

// ── Stage 定義 ─────────────────────────────────────────────────────────────
const STAGES = [
  {
    id: 0,
    label: "AI 是什麼",
    sublabel: "完全入門",
    icon: "🌱",
    difficulty: 1,
    description: "從零開始，看懂 AI 是什麼、能做什麼、怎麼用。約 20 個核心術語，適合完全沒有 AI 背景的新手。",
    exam_target: null,
    star: "⭐",
  },
  {
    id: 1,
    label: "iPas 初級",
    sublabel: "基礎概念 + 生成式 AI",
    icon: "📗",
    difficulty: 2,
    description: "對應 iPas AI 應用規劃師（初級）科目一（人工智慧基礎概論）與科目二（生成式 AI 應用與規劃）。",
    exam_target: "iPas AI 應用規劃師（初級）",
    star: "⭐⭐",
  },
  {
    id: 2,
    label: "iPas 中級・技術規劃",
    sublabel: "AI 技術應用規劃",
    icon: "📘",
    difficulty: 3,
    description: "對應 iPas AI 應用規劃師（中級）科目一（人工智慧技術應用規劃）。約 231 個術語，涵蓋 AI 系統設計、治理、落地應用。",
    exam_target: "iPas AI 應用規劃師（中級）科目一",
    star: "⭐⭐⭐",
  },
  {
    id: 3,
    label: "iPas 中級・數據與 ML",
    sublabel: "大數據 × 機器學習",
    icon: "📙",
    difficulty: 4,
    description: "對應 iPas AI 應用規劃師（中級）科目二（大數據處理分析與應用）與科目三（機器學習技術與應用）。約 250 個術語，進入專業規劃師核心技術。",
    exam_target: "iPas AI 應用規劃師（中級）科目二、三",
    star: "⭐⭐⭐⭐～⭐⭐⭐⭐⭐",
  },
];

// ── Subject → Stage 對照表 ──────────────────────────────────────────────────
// 跨科目術語以「最低 Stage」為主歸屬
const SUBJECT_TO_STAGE = {
  // Stage 1：初級
  "初科一":           1,
  "初科二":           1,
  "初科一  初科二":   1,

  // Stage 2：中級・技術規劃（中科一為主）
  "中科一":           2,
  "初科一  中科一":   2,   // 跨初/中，以初入門，中複習
  "初科二  中科一":   2,
  "中科一  初科二":   2,

  // Stage 3：中級・數據與 ML（中科二、中科三）
  "中科二":           3,
  "中科三":           3,
  "中科一  中科二":   3,
  "中科一  中科三":   3,
  "中科二  中科三":   3,
  "初科一  中科二":   3,
  "初科一  中科三":   3,
  "初科二  中科三":   3,
};

// ── Stage 0 白名單（從現有 data.js 挑選最核心入門術語 id）─────────────────
// 這 20 個術語是新手第一週應學的核心概念
// 待 Step 4 由 Claude Code 根據 data.js 實際內容確認並補齊
const STAGE0_IDS = [
  "1",   // 人工智慧 AI
  "6",   // 符號AI（對比用）
  // 以下 id 待 Step 4 補齊（需從 data.js 挑選：ML、DL、NN、NLP、CV、GenAI、LLM、
  // Prompt Engineering、ChatGPT/GPT、API、資料集、監督學習、神經網路、影像辨識、
  // 自然語言處理、大型語言模型、生成式AI、AI 倫理、AI 應用場景 等核心術語）
];

// ── 工具函式：取得術語的 Stage ─────────────────────────────────────────────
/**
 * getTopicStage(topic) → 0 | 1 | 2 | 3
 * topic: data.js 中的單一術語物件
 */
function getTopicStage(topic) {
  if (STAGE0_IDS.includes(String(topic.id))) return 0;
  return SUBJECT_TO_STAGE[topic.subject] ?? 2;  // 無法辨識預設 Stage 2
}

/**
 * getSortedTopics(topics) → 按 Stage 排序後的術語陣列
 * 同 Stage 內部維持原 data.js 順序（原本已依概念由淺至深編排）
 */
function getSortedTopics(topics) {
  return [...topics].sort((a, b) => {
    const sa = getTopicStage(a);
    const sb = getTopicStage(b);
    if (sa !== sb) return sa - sb;
    return Number(a.id) - Number(b.id);
  });
}

/**
 * getTopicsByStage(topics, stageId) → 指定 Stage 的術語陣列
 */
function getTopicsByStage(topics, stageId) {
  return topics.filter(t => getTopicStage(t) === stageId)
               .sort((a, b) => Number(a.id) - Number(b.id));
}

// ── 統計（供 UI 顯示進度用）────────────────────────────────────────────────
function getStageStats(topics) {
  return STAGES.map(s => ({
    ...s,
    total: topics.filter(t => getTopicStage(t) === s.id).length,
  }));
}
