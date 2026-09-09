# Day2 三管線盲測樣本索引

> 執行者：ClaudeCode 指揮官親自跑（本機 sd_bridge，RTX 3060）
> 原因：Day2 需要真的呼叫生圖引擎，OpenClaw 文字副模型無此工具，改指揮官直接執行
> 測試角色：伊莎貝爾（Isabel）— 溫柔引導守護者，取自 `design/defect_matrix.json` 第4類「角色配色/服裝與陣營配件錯誤」（10張中最具代表性，主體型態對但配色配件跑掉，換管線最容易看出差異）
> Prompt 來源：`design/character_specs.md` 第1節原始 prompt，逐字沿用，三管線只換 style_preset/engine，其餘變因固定（seed=1001）

## 樣本清單

| 樣本編號 | 管線 | engine | style_preset | 檔案 | 原始輸出路徑 |
|---|---|---|---|---|---|
| A | SD1.5 舊管線對照組（Day1既有失敗管線） | sd15 (dreamshaper-8) | pipoya_character | A_sd15_pipoya.png | assets/generated/pipoya_character_20260815_152318_1001_b5e6bc.png |
| B | SDXL 角色專用 | sdxl | sdxl_character | B_sdxl_character.png | assets/generated/sdxl_character_20260815_152339_1001_d71f0b.png |
| C | SDXL 肖像專用 | sdxl | sdxl_portrait | C_sdxl_portrait.png | assets/generated/sdxl_portrait_20260815_152342_1001_5ff7a8.png |

## 指揮官初步觀察（非正式盲評，Day3 才是正式盲評）

- **A（舊管線）**：重現 defect_matrix 記錄的失敗模式——生成一個「戴皇冠的公主/女王」小圖示，完全偏離「溫柔中年女導師、鵝黃長袍、星燈」的設定。32×32 pixoya 尺寸規格套在需要細節辨識度的角色肖像上本身也不合適，坐實視覺聖經改走「精緻插畫」路線的判斷。
- **B（sdxl_character）**：配色（暖黃/乳白/淺金）、星燈道具、星點背景元素都準確命中；但外觀偏年輕，與「中年女性導師」設定有落差。
- **C（sdxl_portrait）**：配色、星燈、星點都對，且更貼近 bust shot 肖像構圖與「neutral dark starfield background」（背景是深灰紫星空，A/B 都是近白背景，C 最符合原 prompt 要求）；年齡感也比 B 稍成熟，但仍偏年輕。

## 待辦（Day3 正式盲評前）

1. 依 `design/blind_test_scoring_template.md` 隱藏管線名稱、重新編號，交至少2位評分者獨立評分。
3. A 純為對照組不進 Day3 決選候選，僅作為「為什麼淘汰舊管線」的教材保留。
4. 本輪未包含「三姿勢」（正面/側面/動作），先以肖像 bust shot 驗證管線本身可用性；若 B 或 C 入選，姿勢變化樣本待 Day3 主線鎖定後再補。

## 二輪：sdxl_portrait 定案為生產管線＋年齡修正驗證（2026-08-15 補測）

使用者指示以 C（sdxl_portrait）為主，並要求細緻化人物設計。先查證 SDXL Turbo 引擎特性（`sd_bridge.py` 的 sdxl 分支 guidance_scale=0，**不吃 negative_prompt**，故年齡只能用正向詞修正，查證來源見下方 Sources），對 Isabel prompt 加入明確數字年齡＋皺紋/笑紋細節詞後重跑：

| 樣本 | Prompt 版本 | 檔案 | 結果 |
|---|---|---|---|
| D（seed1） | v2 年齡修正版 | refine/D_v2_seed1.png | 明顯銀髮、成熟臉部細節，年齡感修正成功 |
| D（seed2） | v2 年齡修正版 | refine/D_v2_seed2.png | 同上，背景更貼近深灰中性、構圖最乾淨，**建議採為 Isabel 正式參考圖** |

修正法與已知限制已寫入 `design/character_specs.md` 開頭說明區，並同步套用到其餘3位「中年/年長」角色（達達、穆恩、亞特拉斯）的 prompt（v2，**尚未生圖驗證**，正式量產前需各跑一輪確認）。其餘7位年輕角色不受此問題影響，維持原 prompt。

Sources:
- [20 Best Stable Diffusion Prompts For Age - Weam](https://weam.ai/blog/guide/stable-diffusion-prompts-for-age/)
- [Using prompts to modify face and body in Stable Diffusion XL](https://dav.one/using-prompts-to-modify-face-and-body-in-stable-diffusion-xl/)

## 三輪：中國風＋年輕化＋見習士補位（2026-08-15 同日續測）

使用者反饋 v3 偏歐美風格、要求帶中國風且再年輕化，另要求補上原本沒做的00/01玩家見習士參考圖。

- 見習士男：v1 太像成年士兵盔甲 → v2 改學院西裝制服＋年輕化，定案（`refine/F_cadet_male_v2.png`）。
- 見習士女：v1 即符合設計（馬尾/水晶杖/學院制服），定案（`refine/G_cadet_female.png`）。
- 伊莎貝爾：v4（guofeng/xianxia風，東亞五官，30初）方向對但配色偏綠、無星燈 → v5 加強金/乳白色系＋星燈＋星空夜背景，定案（`refine/I_isabel_v5_seed2.png`，查證關鍵詞來源見下方 Sources）。

> **重要備註（使用者 2026-08-15 08:35 澄清）**：以上全部只是「方向草稿」，用來確認畫風/年齡/中西風格大方向是否正確，不是最終生產品質。正式進生產階段時每張都需要再細修（構圖、細節密度、與視覺聖經逐項比對），不能直接拿草稿當成品。

Sources（中國風查證）：
- [AI Image Prompts for Hanfu - Arthub.ai](https://arthub.ai/tags/hanfu)
- [Best 50+ Traditional Chinese Hanfu AI Prompts - a1.art](https://a1.art/prompts/traditional-chinese-hanfu)
