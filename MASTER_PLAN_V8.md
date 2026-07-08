# MASTER_PLAN_V8 — iPAS AI 教學網站總體開發規畫

> 2026-07-08 由 Claude Code 整合以下正本文件撰寫：
> SPRITE-RPG（README／TASK_SPRITE_PIPOYA_RPG v2.0／WORKFLOW_SPRITE_PRODUCTION）、
> `ObsidianVault/AI_Project_Execution_Blueprint.md`、`ObsidianVault/SecondBrain/排程任務總表.md`、
> repo 內 ROADMAP／REDESIGN_PLAN_V7／HERMES_CONTENT_PLAN_V3／PROGRESS／HANDOFF_NOTE。
> 本檔為 V7 之後的**總綱**：整合內容、遊戲、美術、自動維運四條線與三主模型分工。

## 0. 不可違背原則（承襲藍圖與 ROADMAP）

1. **現有 AI 功能全數保留**（見第 2 節清單）；只增不刪，改版先進 STAGING、人工確認才 push。
2. **三主模型異步循序執行，嚴禁並行**（本地資源互搶）。
3. Google Sheets「AI 名詞結構化規範表＋QuizBank」（`1HxfWzkc…`）是唯一真實來源；前端資料一律由管線重建，不手改 `data.js`／`quizzes.js`。
4. NotebookLM 自訂筆記摘要只有三主模型可寫；副模型遇術語不明須回報。
5. API key 只存 CF Worker Secret，前端永不接觸。

## 1. 現況整合分析（一頁看懂）

**內容線**：每週一 09:30 `ai_terms_pipeline`（OpenClaw 搜新詞→去重→NLM 20 欄→Google Doc/NLM 來源→QuizBank 出題+品保+排序→TG 回報）已上線且有開機補跑保護；每日 04:10 `rebuild_webapp_data.sh`（Sheets→`data.js`→git push→GitHub Pages）已上線。
**網站線**：V7 品牌「iPAS AI 應用規劃師智策網學院」；index／learn／vocab／atlas／chat／rpg 六大頁面運作中；四階段學習路徑（Stage 0 入門 20 詞→Stage 3 中科二三）。
**遊戲線**：`rpg.html` 可玩（地圖、戰鬥答題、NPC）；生成式 NPC（Reflection/Planning）已有程式但 endpoint 契約不符（見 P0-2）。
**美術線**：SPRITE-RPG 產線（283 素材／約 21,157 幀、Z-Image Turbo＋LoRA＋AnimateDiff→RIFE→rembg）仍在設計/準備期，`rpg.html` 現用舊素材。

### 已確認的缺口（修復優先序）

| 級別 | 缺口 | 說明 |
|---|---|---|
| P0-1 | **quizzes.js 未納入每日重建** | 週鏈持續往 QuizBank 出題（現 27,048 列），但無腳本把 QuizBank→`quizzes.js` 上線；檔案停在 6/18。題庫更新沒有反映到網站 |
| P0-2 | **NPC endpoint 契約不符** | `rpg-npc-agent.js` 送 `{prompt,maxTokens}` 讀 `data.response`；`worker.js /chat` 期望 `{messages}` 回 `choices[]`。生成式 NPC 實際只落回模板 |
| P1-1 | **chat 後端優先序分歧** | `js/chat.js` v8.0 同時保有 CF Worker／Pollinations／OpenAI／NVIDIA／HF 多條路徑，與 worker.js 嘗試鏈重疊，需統一為「CF Worker 為主、Pollinations 免費備援」 |
| P1-2 | **CF Worker 真身待確認** | 藍圖指 `cloudflare_workers/ai-tts-srs/`，repo 內另有 `cloudflare/worker.js`，需比對部署版本後留一份正本 |
| P2 | **術語數量口徑不一** | Stage 2 標 231 vs 278、總數 631 vs 646；一律以 Sheets 實際列數為準，前端動態顯示 |

## 2. 現有 AI 功能保留清單（驗收時逐項回歸）

1. AI 對話助理（chat.html／js/chat.js，CF Worker /chat：HF Qwen3-8B→CF Workers AI llama-3.3-70b→NVIDIA）
2. 生成式 NPC（rpg-npc-agent.js，Reflection／Planning，模板回退）
3. TTS 中英朗讀（CF Worker /tts＋Web Speech API；app.js／vocab／learn）
4. 語音轉文字（CF Worker /transcribe，Whisper-large-v3-turbo）
5. 知識圖譜／星圖（atlas.js D3 v7／starmap.js）
6. 後端內容 AI：ai_terms_pipeline（NLM 查詢＋OpenClaw 網搜）
7. SRS 核心（app.js：SRSManager／QuizManager／錯題補救／3D 翻卡）

## 3. 目標藍圖（四大交付面）

### 3-A 專業內文與題庫（Hermes 主導）
- Stage 0～3 每階段「教學卡＋課程表」補齊（HERMES_CONTENT_PLAN_V3 為基底；Stage 0 已有 20 術語課表）。
- 每日精選術語（確定性日期輪換，40 詞池擴至各 Stage）。
- 題庫品質：QuizBank 品保掃描（quiz_batch_patch --scan）納入每週鏈後段既有流程，缺解析／壞選項自動回修。
- 新手引導 3 題推薦邏輯上線（V7 規畫已有腳本）。

### 3-B 遊戲模式（OpenClaw 主導 UI／Claude 主導架構）
- 修復生成式 NPC（P0-2）：worker.js 新增 `POST /npc`（`{prompt,maxTokens}`→`{response}`），沿用既有供應商鏈；rpg.js `RPG_CF_WORKER` 指向之。
- RPG 課程整合：rpg_curriculum.js 對齊四階段路徑，戰鬥出題直接抽 quizzes.js 對應 Stage 題目（錯題進 SRS 補救）。
- 新玩法（依 V7 視覺主題色分區）：每日 Boss（當日精選術語出題）、成就徽章、學習連勝。

### 3-C 視覺與美術（SPRITE-RPG 產線，OpenClaw 批次生成）
- 依 TASK_SPRITE_PIPOYA_RPG v2.0 分階段：先 Stage 0 地圖所需角色/怪物子集（非一次 283 種），Z-Image Turbo 主力＋sd_bridge 升級。
- 產出經 rembg→96×128 RGBA→`assets/sprites/`，`rpg-preview.html` 人工目檢後才進正式地圖。
- 網站視覺：index 每日精選卡配圖、各 Stage 主題插圖（同產線批次生成靜態圖）。

### 3-D 每日自動維運（Claude 主導，沿用既有 cron 基建）
| 排程 | 現況 | 新增/調整 |
|---|---|---|
| 每週一 09:30 ai_terms_pipeline | ✅ 已上線＋補跑保護 | 不動 |
| 每日 04:10 rebuild_webapp_data | ✅ 已上線 | **擴充：加 QuizBank→quizzes.js 重建**（P0-1），並納入 boot_catchup 登錄表（lookback 1） |
| 每日 00:30 quiz_batch_resume | ✅ 已上線 | 不動 |
| 每日新知規畫（新） | ❌ | 併入每週鏈即可（週更足夠、避免 NLM 配額耗損）；若日後要日更，複用 ai_terms_weekly.sh 降低批量 |

## 4. 三方分工與執行順序（異步循序，一次只跑一線）

| 順序 | 負責 | 工作包 | 驗收 |
|---|---|---|---|
| ① | **Claude Code** | P0-1 quizzes.js 重建腳本併入 rebuild_webapp_data；P0-2 worker.js `/npc` 端點＋rpg.js 接線；P1-2 確認 Worker 正本 | quizzes.js 日期更新且網站可抽新題；NPC 回應非模板；回歸第 2 節清單 |
| ② | **HermesAgent** | 3-A 內容包：Stage 1~3 教學卡、每日精選池擴充、新手引導文案（產出 md/json 交 Claude 合入，不直接改前端） | 內容檔齊、術語 ID 對得上 data.js |
| ③ | **OpenClaw** | 3-B UI（每日 Boss／徽章／連勝介面）＋ 3-C 首批 sprite 批次生成（Stage 0 子集） | STAGING 預覽頁人工確認；sprite 過 rpg-preview 目檢 |
| ④ | **Claude Code** | 整合②③成果、回歸測試、STAGING→正式 push、更新排程任務總表 | GitHub Pages 上線、TG 回報 |

每包完成即 TG 回報（@AiHOClaudeCodebot），使用者確認後才進下一包。

## 5. 里程碑

- **M1（本週）**：P0 兩項修復上線；quizzes.js 自動化進 cron。
- **M2（下週）**：Hermes 內容包合入；每日精選/新手引導全 Stage 可用。
- **M3（兩週內）**：RPG 新玩法＋首批新 sprite 上線。
- **M4（持續）**：SPRITE 產線分批擴充素材；每週內容鏈自動滾動。
