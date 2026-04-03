# 🔄 模型交接記錄 - AI SRS 智慧學習平台

> **交接時間**：2026-04-03 11:40（台灣時間）
> **專案路徑**：`d:\雲端(tsaifrancis657)\AG\HTML考題小舖\`
> **核心檔案**：`app.js`、`style.css`、`index.html`、`data.js`
> **開發伺服器**：`npx serve` 執行於 `http://localhost:5500`

---

## ✅ 本次對話已完成事項

### 項目 2A — AI 知識地圖主頁（已完成 ✅）
- 新增 `App.renderHomeScreen()`，平台啟動時自動渲染 AI ⊃ ML ⊃ NN ⊃ DL 巢狀知識地圖
- 採用玻璃擬態 + 層疊發光效果，4 層顏色區域：AI（天藍）、ML（紫）、NN（翡翠綠）、DL（琥珀橘）
- 分類邏輯由模糊關鍵字匹配改為 **category 白名單精確匹配**（`DL_CATS`、`NN_CATS`、`ML_CATS` 三個 Set）
- 修正 UI 統計欄位錯字「已抓潏」→「已掌握」
- Logo 點擊可返回知識地圖主頁
- 驗證：589 個術語渲染正確，Console 無 JS 錯誤

### 項目 2C — TTS 語音系統重構（部分完成 ⚠️）
**已做：**
- 新增 `_pickVoice(langPrefix, gender)` 函數，四層 fallback 語音選擇邏輯
- 新增 `_getTTSRate()` 統一語速來源（讀取 slider 即時值）
- 新增 `_getTTSGender()` 讀取性別下拉選單
- `speakEng()` 與 `speakZh()` 重構，整合性別 + 語速
- 修正 `app.js` 物件閉合語法錯誤（`speakZh` 末尾少一層 `}`）

**⚠️ 測試發現仍有問題（待修正）：**

---

## 🐛 TTS 待解問題清單（優先處理）

### 問題 1：男聲切換無效
- **現象**：點擊「♂ 男聲」後，發音仍然是女聲
- **根因推測**：`_pickVoice()` 中的男聲關鍵字清單（`daniel`, `alex`, `fred`, `thomas`, `男` 等）與 Windows/Chrome 的實際語音名稱不匹配
- **建議做法**：
  1. 先用 `console.log(speechSynthesis.getVoices())` 列出所有可用語音名稱
  2. 根據實際名稱調整 `maleKw` 陣列
  3. Windows 上 Edge 語音名稱格式是 `Microsoft Yating - Chinese (Taiwan)` 等，不含 male/female 字眼，需靠聲音名稱判斷

### 問題 2：切換引擎後聲音無差異
- **現象**：瀏覽器系統 vs Google 真人，都只有一種（女）聲
- **根因推測**：
  - 舊版 `_speakGoogle()` 已被移除，但新版 `speakEng/speakZh` 未繼承引擎分支邏輯
  - `_getTTSEngine()` 函數存在，但 `speakEng/speakZh` 重構後完全沒調用它
  - 換言之：**目前引擎切換功能實際上沒有接上**
- **建議做法**：在 `speakEng` / `speakZh` 裡加回引擎判斷分支
  - `browser` 引擎 → 用 Web Speech API（`window.speechSynthesis`）
  - `google` 引擎 → 仍用 Web Speech API（因為 Chrome 的 Google 語音本來就在語音列表裡），但語音選擇偏好 `name.includes('Google')` 的語音

### 問題 3：語速預設值需改為 0.5
- **現象**：目前 slider 預設是 0.9x
- **修正位置**：`index.html` 第 40 行
  ```html
  <!-- 改前 -->
  <input type="range" id="ttsRateSlider" ... value="0.9" ...>
  <span id="ttsRateLabel">0.9x</span>
  <!-- 改後 -->
  <input type="range" id="ttsRateSlider" ... value="0.5" ...>
  <span id="ttsRateLabel">0.5x</span>
  ```
- **注意**：`app.js` 中 `initTTS()` 的語速 label 在 `oninput` 事件時才更新，預設顯示要在 HTML 同步改

### 問題 4：瀏覽器系統引擎應新增「語調（pitch）」設定
- **現象**：Web Speech API 的 `SpeechSynthesisUtterance` 支援 `pitch` 屬性（0.0 ～ 2.0，預設 1.0），但目前介面沒有提供
- **建議做法**：
  1. 在 `index.html` 的 TTS 面板（第 40-42 行附近）新增 pitch slider
  2. 新增 `id="ttsPitchSlider"` 與 `id="ttsPitchLabel"`
  3. 在 `app.js` 的 `_getTTSRate()` 旁邊新增 `_getTTSPitch()`
  4. 在 `speakEng()` 和 `speakZh()` 中加上 `utter.pitch = App._getTTSPitch();`
  5. **注意**：語調設定僅在「瀏覽器系統」引擎有效，Google 語音通常忽略 pitch（固定為 1.0）

---

## 🔧 TTS 修正建議實作順序

1. **先診斷**：在 browser console 執行 `speechSynthesis.getVoices().map(v => v.name + ' | ' + v.lang)` 取得所有可用語音清單，根據實際名稱調整 `maleKw/femaleKw`
2. **修正語速預設值**：`index.html` value 改 `0.5`，label 改 `0.5x`
3. **新增 pitch slider**：`index.html` TTS 面板加入語調控制
4. **新增 `_getTTSPitch()`**：`app.js` 讀取 pitch slider 值
5. **修正引擎切換邏輯**：在 `speakEng/speakZh` 內加回 `_getTTSEngine()` 判斷，`google` 模式下語音選擇改為強制偏好含 `Google` 的語音
6. **驗證**：男聲切換 → 中英文朗讀 → 語速語調調整 → 引擎切換全部測試

---

## 📋 接下來的執行選項（請新模型選擇繼續）

### 選項 A（優先建議）：完整修正 TTS 問題
修正上述 4 個 TTS 問題後，2C 才算真正完成。

### 選項 B：項目 3 — 巨量題庫同步機制
- 評估 631 個主題 × 10 題 = 6310 題的自動化同步方案
- 目前 `data.js` 手動維護，需要規劃更新機制

### 選項 C：項目 1 — 課程結構分析
- 登入 `https://exam.kt.idv.tw` 分析 iPAS AI 應用規畫師（初中級）的課程結構
- 帳號：`ktest`，密碼：`Ktest2025!`
- 反推學習路徑，優化平台內容與分類

---

## 🗒️ 技術環境備忘

| 項目 | 值 |
|---|---|
| 開發伺服器 | `npx serve` @ `http://localhost:5500` |
| 資料筆數 | 589 個術語（顯示），631 為預計總數 |
| `data.js` 結構 | `lessonData[]` → `sub_units[]` → `topics[]` |
| TTS 引擎切換 DOM | `#ttsEngineSelect`（值：`browser` / `google`） |
| 性別選單 DOM | `#ttsGenderSelect`（值：`male` / `female`） |
| 語速 slider DOM | `#ttsRateSlider`（`app.js` 中 `_getTTSRate()` 讀取） |
| 語調 slider DOM | `#ttsPitchSlider`（尚未實作，待新增） |
| SRS 資料儲存 | `localStorage`（key：`srsData`） |

---

## 💬 給下一個模型的提醒

1. **不要破壞現有 API routes 或資料結構**（`lessonData` schema 固定）
2. **白名單分類邏輯**在 `renderHomeScreen()` 的 `DL_CATS / NN_CATS / ML_CATS` 三個 Set 中，更新主題時記得同步
3. TTS 的 `_pickVoice()` 邏輯在 `app.js` 第 508 行附近
4. 執行完成後請更新 `PROGRESS.md`

---
> 「TTS 這塊比想像中複雜，瀏覽器各家語音列表格式不一樣...這就是跨平台的日常。等模型接棒繼續挑戰吧，加油！」
