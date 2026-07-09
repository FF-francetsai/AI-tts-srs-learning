#!/usr/bin/env python3
"""validate_guides.py <json_path> — 驗證章節導讀，過了複製到網站 content/"""
import json, re, sys
from pathlib import Path

src = Path(sys.argv[1])
DEST = Path("/home/francis/AI_Project/Work/AI-tts-srs-learning/content/stage_chapter_guides.json")

raw = src.read_text(encoding="utf-8").strip()
raw = re.sub(r"^```[a-z]*\s*|\s*```$", "", raw)
m = re.search(r"\{.*\}", raw, re.S)
if not m:
    sys.exit(f"FAIL: 找不到 JSON 物件（前100字：{raw[:100]!r}）")
try:
    data = json.loads(m.group(0))
except Exception as e:
    sys.exit(f"FAIL: JSON 解析失敗 {e}")
for s in ("stage1", "stage2", "stage3"):
    ch = data.get(s)
    if not isinstance(ch, list) or not (4 <= len(ch) <= 8):
        sys.exit(f"FAIL: {s} 章數異常（{len(ch) if isinstance(ch, list) else 'N/A'}）")
    for i, c in enumerate(ch):
        if not {"chapter", "categories", "intro"} <= set(c):
            sys.exit(f"FAIL: {s}#{i} 欄位缺漏")
        if len(str(c["intro"])) < 20:
            sys.exit(f"FAIL: {s}#{i} intro 過短")
DEST.parent.mkdir(exist_ok=True)
DEST.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
print(f"PASS: 3 stages → {DEST}")
