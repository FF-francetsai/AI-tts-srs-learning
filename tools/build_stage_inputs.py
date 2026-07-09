#!/usr/bin/env python3
"""build_stage_inputs.py — 從最新 data.js 重建各 Stage 候選清單與類別統計（策展任務的確定性輸入）。
每次 content refresh 前先跑，讓每週新進術語（ai_terms_pipeline 產出）自動納入策展範圍。"""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOOLS = Path(__file__).resolve().parent

src = (ROOT / "data.js").read_text(encoding="utf-8")
src = src[src.index("=") + 1:]
data = json.loads(src[:src.rindex("]") + 1])


def stage_of(subject: str) -> int:
    s = subject or ""
    if "初科" in s:
        return 1
    if "中科一" in s:
        return 2
    if "中科二" in s or "中科三" in s:
        return 3
    return 0


titles = {1: [], 2: [], 3: []}
cats = {1: {}, 2: {}, 3: {}}
for t in data:
    st = stage_of(t.get("subject"))
    if st not in titles:
        continue
    titles[st].append(f"{t['id']}|{t['title']}|{t.get('eng_name','')}")
    c = t.get("category") or "未分類"
    cats[st][c] = cats[st].get(c, 0) + 1

counts = {}
for s in (1, 2, 3):
    (TOOLS / f"stage{s}_titles.txt").write_text("\n".join(titles[s]), encoding="utf-8")
    counts[str(s)] = len(titles[s])
(TOOLS / "stage_categories.json").write_text(
    json.dumps({str(k): v for k, v in cats.items()}, ensure_ascii=False, indent=1), encoding="utf-8")
print(json.dumps({"total": len(data), "per_stage": counts}, ensure_ascii=False))
