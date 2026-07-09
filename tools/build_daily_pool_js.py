#!/usr/bin/env python3
"""build_daily_pool_js.py — 把 content/daily_pool_stage*.json 合併成前端用 daily_pool.js。
index.html 以 <script src="daily_pool.js"> 載入，取代原寫死 5 詞的 TERM_POOL。"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
OUT = ROOT / "daily_pool.js"

# Stage 0 保底 5 詞（原 index.html 寫死清單，永遠保留在池頭）
BASE = [
    {"zh": "人工智慧", "en": "Artificial Intelligence", "def": "賦予機器學習、推理與決策能力的技術總稱", "stage": 0},
    {"zh": "機器學習", "en": "Machine Learning", "def": "AI 的分支，強調不需顯式編程，而是透過經驗改進表現", "stage": 0},
    {"zh": "大型語言模型", "en": "Large Language Model", "def": "基於海量文本訓練，具備自然語言理解與生成能力的大型模型", "stage": 0},
    {"zh": "變壓器架構", "en": "Transformer", "def": "基於注意力機制拋棄循環結構，可並行處理序列數據的現代架構", "stage": 0},
    {"zh": "提示工程", "en": "Prompt Engineering", "def": "透過精確設計輸入提示來引導 LLM 產生高品質輸出的過程", "stage": 0},
]

pool = list(BASE)
seen = {t["en"].lower() for t in pool}
for f in sorted(CONTENT.glob("daily_pool_stage*.json")):
    for t in json.loads(f.read_text(encoding="utf-8")):
        if t["en"].lower() in seen:
            continue
        seen.add(t["en"].lower())
        pool.append({"zh": t["zh"], "en": t["en"], "def": t["def"], "stage": t.get("stage")})

OUT.write_text(
    "// daily_pool.js — 自動產生（tools/build_daily_pool_js.py），勿手改；來源 content/daily_pool_stage*.json\n"
    "window.DAILY_TERM_POOL = " + json.dumps(pool, ensure_ascii=False, indent=1) + ";\n",
    encoding="utf-8")
print(f"OK: {len(pool)} 詞 → {OUT}")
