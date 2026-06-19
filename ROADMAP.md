# iPas AI SRS 智慧學習平台 — 三方協作路線圖

> 最後更新：2026-06-19  
> 協作成員：Claude Code（架構/程式）、OpenClaw（內容分析/協調）、HermesAgent（搜尋/NLM）  
> 核心原則：**逐步執行，不並行；主腦用於決策，副模型用於量產**

---

## 一、長期目標

打造「完全新手 → iPas 初級 → iPas 中級應用規劃師」養成平台，具備：
- 結構化學習路徑（四個階段，有明確入口與進度感）
- 每日 AI 新知自動補充入題庫
- NotebookLM 知識萃取 → 題庫自動生成管線

---

## 二、Token 資源分配原則

| 執行者 | 適合的任務 | 不適合（太貴/浪費）|
|--------|-----------|----------------|
| **副模型群**（GLM-5.1 / DeepSeek 等）| 批量生成 data.js 術語 JSON、生成題庫、比對缺漏術語清單、網搜摘要 | 架構決策、程式碼審查、UI 設計 |
| **OpenClaw** | 任務分拆與派遣副模型、審核副模型產出格式、回報 STAGING 結果 | 直接寫全部資料、搜尋每一篇文章 |
| **HermesAgent** | 觸發 NotebookLM MCP 查詢、每日排程協調、整理副模型輸出入 STAGING | 手動逐篇爬文、處理程式碼 |
| **Claude Code（我）** | 架構設計、前端程式、schema 定義、git 操作、最終整合審核 | 批量生成大量術語資料 |

---

## 三、學習路徑四階段定義

```
Stage 0 ── AI 是什麼（完全入門，約 20 個核心術語）
  適合：從未接觸 AI 的新手
  科目標記：stage0（特別標記）
  目標：能說出「AI 是什麼、能做什麼、怎麼用」
  難度：⭐

Stage 1 ── iPas 初級（初科一 + 初科二）
  適合：有基礎概念，備考初級認證
  科目標記：含 初科一 / 初科二 的術語
  目標：通過 iPas AI 應用規劃師（初級）
  難度：⭐⭐

Stage 2 ── iPas 中級·技術規劃（中科一）
  適合：初級通過，擴展技術廣度
  科目標記：含 中科一 的術語（約 231 個）
  目標：掌握 AI 技術應用規劃能力
  難度：⭐⭐⭐

Stage 3 ── iPas 中級·數據與機器學習（中科二 + 中科三）
  適合：中級科一完成，深入數據與 ML
  科目標記：含 中科二 / 中科三 的術語（約 250 個）
  目標：通過 iPas AI 應用規劃師（中級）全科
  難度：⭐⭐⭐⭐ 至 ⭐⭐⭐⭐⭐
```

---

## 四、現行進度追蹤

| Step | 負責 | 狀態 | 交付物 |
|------|------|------|--------|
| Step 1：定義 schema + 任務書 | Claude Code | ✅ 完成（2026-06-19）| ROADMAP.md、js/path.js、TASK_OPENCLAW_V3.md |
| Step 2：iPas PDF 比對 + 缺漏清單 | OpenClaw → 副模型 | ⬜ 待執行 | STAGING_GAPS.json |
| Step 3：NotebookLM 補充定義 | HermesAgent → 副模型 | ⬜ 待執行 | STAGING_DATA.json |
| Step 4：UI 學習路徑 + 資料合入 | Claude Code | ⬜ 待執行 | path.html、data.js 更新 |
| Step 5：每日新知排程 | HermesAgent（排程）+ 副模型（內容）| ⬜ 設計中 | cron 任務 |

---

## 五、任務交接格式規範

OpenClaw / HermesAgent 完成後，在本 repo 根目錄放置：

**STAGING_GAPS.json**（Step 2 交付）
```json
{
  "generated_at": "2026-06-XX",
  "source": "iPas PDF 比對 data.js",
  "missing_topics": [
    {
      "subject": "初科一",
      "category": "AI 基礎",
      "title": "術語名稱",
      "eng_name": "English Name",
      "reason_missing": "PDF 有但 data.js 無"
    }
  ]
}
```

**STAGING_DATA.json**（Step 3 交付，完整 data.js 格式）
```json
{
  "generated_at": "2026-06-XX",
  "source": "NotebookLM + web search",
  "topics": [
    {
      "id": "632",
      "subject": "初科一",
      "category": "AI 基礎",
      "title": "術語名稱",
      "eng_name": "English",
      "eng_abbr": "-",
      "def": "定義",
      "key_goal": "核心目標",
      "key_principle": "核心原則",
      "key_purpose": "核心用途",
      "common_apps": "常見應用",
      "scenarios": {
        "weather": "", "agri": "", "traffic": "",
        "industry": "", "finance": "", "life": "", "fire": ""
      },
      "detail_explain": "解析說明",
      "stage": 1
    }
  ]
}
```

---

## 六、作業準則

- ✅ 現有 data.js / quizzes.js 只能**新增**內容或**調整呈現順序**（依難易度由淺至深重新排列），不得刪除任何既有內容
- ✅ 呈現順序原則：Stage 0（入門）→ Stage 1（初級）→ Stage 2（中級技術）→ Stage 3（中級數據ML），每個 Stage 內部亦依概念難易排列
- ❌ 不得兩個 Step 同時執行（避免資源互搶）
- ❌ STAGING 資料未經人工確認不得直接 push 進 main
- ❌ 主腦不做副模型的工作（批量生成術語交給副模型）
