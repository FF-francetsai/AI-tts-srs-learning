#!/usr/bin/env python3
"""build_sprite_preview.py — 重建 sprite-batch1-preview.html：
含產圖工具揭示（引擎/模型/風格/種子）＋設計者＋HermesAgent 主腦視覺 QA 判定。"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SPEC = json.loads((ROOT / "content" / "sprite_design_spec.json").read_text(encoding="utf-8"))["assets"]
QA_P = ROOT / "content" / "sprite_qa_report.json"
QA = {r["zh_name"]: r for r in json.loads(QA_P.read_text(encoding="utf-8"))["results"]} if QA_P.exists() else {}
BATCH = ROOT / "assets" / "sprites" / "batch1"
OUT = ROOT / "sprite-batch1-preview.html"

ENGINE_OF = {"pipoya_character": "SD 1.5（dreamshaper-8）", "pipoya_monster": "SD 1.5（dreamshaper-8）",
             "icon_item": "SD 1.5（dreamshaper-8）", "rpg_tile_topdown": "SD 1.5（dreamshaper-8）",
             "concept_art": "Z-Image Turbo"}

files = sorted(BATCH.glob("*.png"))
cards = []
for i, a in enumerate(SPEC):
    img = next((f.name for f in files if f.name.startswith(f"{i:02d}_")), None)
    if not img:
        continue
    q = QA.get(a["zh_name"], {})
    badge = ("✅ 主腦QA通過" if q.get("verdict") == "通過"
             else f"⚠️ {q.get('verdict','未QA')}") + (f"（{q['score']}分）" if q.get("score") else "")
    cards.append(
        f'<div style="border:1px solid #334;border-radius:10px;padding:10px;width:230px;">'
        f'<img src="assets/sprites/batch1/{img}" style="image-rendering:pixelated;max-width:100%;background:#223;">'
        f'<div style="font-weight:700;margin-top:6px;">{a["zh_name"]} <span style="font-size:11px;">{badge}</span></div>'
        f'<div style="font-size:12px;opacity:.85;margin:4px 0;">{a["design_note"]}</div>'
        + (f'<div style="font-size:11px;color:#93c5fd;">主腦QA：{q.get("reason","")}</div>' if q.get("reason") else '')
        + f'<div style="font-size:11px;opacity:.6;margin-top:4px;">🛠 {ENGINE_OF.get(a["style_preset"],"sd_bridge")}'
          f'｜風格 {a["style_preset"]}｜{a["size"]}｜seed {1000+i}</div></div>')

OUT.write_text(
    '<!doctype html><meta charset="utf-8"><title>Sprite Batch1 目檢</title>'
    '<body style="background:#0b1020;color:#e2e8f0;font-family:sans-serif;padding:20px;">'
    '<h2>首批 RPG 造型目檢（29 資產）</h2>'
    '<p style="opacity:.85;font-size:14px;">設計：<b>HermesAgent 主腦（Gemini 3.5 Flash）親自</b>（規格 content/sprite_design_spec.json）｜'
    '產圖：本地 <b>sd_bridge</b>（RTX 3060，引擎與種子逐張標示）｜'
    '視覺 QA：<b>HermesAgent 主腦親自看圖判定</b>（content/sprite_qa_report.json）</p>'
    f'<div style="display:flex;flex-wrap:wrap;gap:12px;">{"".join(cards)}</div>', encoding="utf-8")
print(f"OK: {len(cards)} 卡片 → {OUT}")
