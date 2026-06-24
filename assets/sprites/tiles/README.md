# Tile 素材場景對應

AI 星際聯盟學習 RPG — sceneTile 對照表。每個 PNG 為 256×256 tileset（8×8 格，每格 32×32 px）。

| 檔名 | 場景名稱 | 星域 key | 色調 |
|------|---------|----------|------|
| Grass_pipo.png | 草地（原版） | INTRO | 綠色 |
| BaseChip_pipo.png | 基礎地板（共用） | 全場景 | 灰色 |
| cave_pipo.png | 資料礦場 | DATA | 深褐 |
| stone_temple.png | 監督神殿 | SL | 藍灰 |
| metal_floor.png | 鑑別機庫 | DISC | 鋼藍 |
| wasteland_pipo.png | 非監督荒野 | UL | 黃褐 |
| lava_floor.png | 深度熔爐 | DL | 橘紅 |
| magic_floor.png | 生成創界 | GEN | 深紫 |
| arena_floor.png | 強化競技場 | RL | 金棕 |
| marble_floor.png | 中級議會 | ADV | 紫白 |
| star_floor.png | 星盟核心星 | CORE | 深藍星空 |

生成腳本：`/home/francis/AI_Project/workspace/gen_tiles_commander.py`（Pillow，256×256 RGBA）
