# 核心函式設計與偽代碼

> 本文件由 DeepSeek V4 助理以玩法程式角色產出，與 GLM51 設計的數值規則相容。

## 概述

以下函式涵蓋角色、地圖、道具、任務四大系統，每項包含輸入/輸出/主要邏輯步驟。

---

## move_character
**描述**：角色移動函式

- **輸入**：character_id, target_tile (x, y), map_id
- **輸出**：移動成功/失敗狀態，更新角色位置
- **偽代碼邏輯步驟**：
    1. 取得當前地圖格線數據
    2. 檢查目標格是否可通行（障礙物、邊界、事件觸發格）
    3. 若可通行，更新角色坐標到目標格
    4. 觸發目標格事件（如NPC對話、道具拾取）
    5. 更新視口顯示
    6. 返回移動結果狀態碼

## attack_enemy
**描述**：攻擊敵人或對目標造成傷害

- **輸入**：attacker_id, target_id, skill_id (optional)
- **輸出**：傷害值，目標剩餘HP，戰鬥狀態
- **偽代碼邏輯步驟**：
    1. 取得攻擊方基礎攻擊力與目標防禦力
    2. 計算傷害公式：damage = max(1, attacker_atk - target_def * 0.5 + random(-2,2))
    3. 若有技能，疊加技能加成
    4. 扣除目標HP
    5. 檢查目標是否死亡，觸發死亡事件
    6. 返回傷害數值與目標狀態

## use_item
**描述**：道具使用函式

- **輸入**：character_id, item_id, target_character_id (optional)
- **輸出**：使用結果（成功/失敗），效果描述
- **偽代碼邏輯步驟**：
    1. 檢查角色背包中是否存在該道具且數量>0
    2. 依道具類型執行效果：
       - 恢復型：增加HP/MP/SP，不超過上限
       - 攻擊型：對目標造成傷害
       - 解鎖型：解鎖對應能力或地圖區域
       - 收集型：累計收集進度
    3. 消耗道具（數量減1）
    4. 若數量歸零，從背包移除
    5. 觸發道具使用後事件
    6. 返回使用結果

## task_state_machine
**描述**：任務狀態機，管理主線/支線任務的狀態轉換

- **輸入**：task_id, character_id, trigger_event
- **輸出**：更新後的任務狀態（未接取/進行中/已完成/已放棄）
- **偽代碼邏輯步驟**：
    1. 依 task_id 查找任務定義（前置條件、目標、獎勵）
    2. 檢查前置任務是否完成
    3. 若 trigger_event 符合任務觸發條件：任務從 '未接取' → '進行中'
    4. 若 trigger_event 符合任務完成條件：調用 reward_handler 發放獎勵，任務狀態 → '已完成'
    5. 更新角色任務日誌
    6. 觸發連鎖任務（後續任務解鎖）
    7. 返回新狀態

## load_map
**描述**：地圖載入與渲染

- **輸入**：map_id, character_position (optional)
- **輸出**：地圖數據（tile grid, NPCs, events），渲染到遊戲畫面
- **偽代碼邏輯步驟**：
    1. 從地圖配置中讀取 map_id 對應的 tile 數據
    2. 載入該地圖的 NPC 列表與事件腳本
    3. 依據角色當前 Stage/章節過濾不可見元素
    4. 計算攝影機視口偏移（以角色為中心）
    5. 繪製 tile 層 → 裝飾層 → NPC層 → 角色層
    6. 載入完成後觸發 on_map_loaded 事件
    7. 返回地圖數據物件

## reward_handler
**描述**：任務獎勵發放處理器

- **輸入**：character_id, reward_list (exp, items, unlock_flags)
- **輸出**：獎勵發放結果
- **偽代碼邏輯步驟**：
    1. 遍歷 reward_list，依類型處理
    2. EXP → 調用 add_experience(character_id, exp)
    3. items → 調用 add_item_to_bag(character_id, item_id, quantity)
    4. unlock_flags → 設置角色對應解鎖標記
    5. 記錄獎勵發放日誌
    6. 返回發放成功/部分成功狀態

---

*相容性註記*：以上數值公式（傷害計算、效果係數）應對齊 GLM51 的機制表格。

建議在 integration 階段匯入統一常數表。
