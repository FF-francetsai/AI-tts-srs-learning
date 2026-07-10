# 秘笈道具系統 — 定稿設計（指揮官整編版）

> 2026-07-10。流程：兩主腦出草稿 → 指揮官驗收整編 → 實作上線。
> 草稿驗收記錄：HermesAgent 側（MiniMax 代筆）的稀有度五級、解鎖框架、FAB＋翻閱 UI **採用**；
> 其守護者名稱與章節/塔層數為幻覺（寂靜觀測者、80 層塔等不存在）**駁回**，以真實世界觀重編。
> OpenClaw 側 DeepSeek 產出失效（思考過程外洩進檔案）；資料分級與 schema 由指揮官依實際題庫重設計。

## 一、體系

- **14 本秘笈**：10 星域各 1 本（對應 10 守護者）＋蟒月秘傳 4 卷（Python 試煉塔 P0-P3）。
- **稀有度五級**（對應知識深度）：凡品灰白→靈品青綠→寶品寶藍→仙品紫晶→聖品鎏金。
- **內容由題庫自動編纂**：`tools/build_grimoires.js` 讀 `data.js`（952 術語，stage 0-3 由淺至深）
  與 `python_quizzes.js`（P0-P3），每本 ≤60 頁，頁內容＝術語＋定義＋🎯目標＋詳解（Python 卷附例題＋答案＋解析）。
  已掛入每日 04:10 `rebuild_webapp_data.sh`：題庫長、秘笈自動跟著長。
- **補充題材（extraFilter）**：只影響秘笈編頁、不動遊戲出題 catFilter——解決 DISC/UL/RL/ADV 命中過少問題。

## 二、解鎖規則

| 秘笈 | 解鎖條件 |
|---|---|
| 星域書 | 該星域可進入（前置星域通關）即解鎖 |
| 蟒月四卷 | 試煉塔到達第 1／4／7／10 層各解一卷 |

進度來源：`localStorage` 的 `rpg_ai_league_progress`（cleared）與 `python_tower_v1`（floor）。

## 三、UI（rpg-grimoire.js）

- 📖 FAB 左下角（z 8400）→ 書架（稀有度色框；未解鎖灰階🔒＋解鎖提示）→ 翻閱器（上/下頁、進度記憶 `grimoire_read_marks`）。
- 手機優先；深色星際風與 rpg.css 一致；NpcChat（z 9000）可疊在其上。

## 四、檔案清單

| 檔案 | 角色 |
|---|---|
| `tools/build_grimoires.js` | 編譯器（正本邏輯） |
| `grimoires.js` | 產出資料（勿手改） |
| `rpg-grimoire.js` | 背包＋翻閱 UI |
| `rpg.html` | 載入點（grimoires.js → rpg-grimoire.js） |
| `scheduled_tasks/rebuild_webapp_data.sh` | 每日 04:10 自動重編＋推送 |
