#!/usr/bin/env python3
"""validate_pool.py <stage> <candidate_json_path> — 機械驗證精選池產物，過了就複製到網站 content/"""
import json, sys, re
from pathlib import Path

stage = int(sys.argv[1])
src = Path(sys.argv[2])
SCRATCH = Path(__file__).parent
DEST = Path("/home/francis/AI_Project/Work/AI-tts-srs-learning/content") / f"daily_pool_stage{stage}.json"

valid_ids = {l.split("|")[0] for l in (SCRATCH / f"stage{stage}_titles.txt").read_text().splitlines() if l.strip()}

raw = src.read_text(encoding="utf-8").strip()
# 容錯：剝 markdown 圍欄
raw = re.sub(r"^```[a-z]*\s*|\s*```$", "", raw)
# 容錯：抽出第一個 [...] 區塊
m = re.search(r"\[.*\]", raw, re.S)
if not m:
    sys.exit(f"FAIL: 找不到 JSON 陣列（前100字：{raw[:100]!r}）")
try:
    data = json.loads(m.group(0))
except Exception as e:
    sys.exit(f"FAIL: JSON 解析失敗 {e}")
if not isinstance(data, list) or not (25 <= len(data) <= 35):
    sys.exit(f"FAIL: 元素數 {len(data) if isinstance(data,list) else 'N/A'}（要求 30±5）")
errs = []
for i, t in enumerate(data):
    if not isinstance(t, dict) or not {"id", "zh", "en", "def"} <= set(t):
        errs.append(f"#{i} 欄位缺漏"); continue
    if str(t["id"]) not in valid_ids:
        errs.append(f"#{i} id={t['id']} 不在候選清單")
    if len(str(t["def"])) > 50:
        errs.append(f"#{i} def 過長({len(str(t['def']))}字)")
    t["id"] = str(t["id"]); t["stage"] = stage
if errs:
    sys.exit("FAIL: " + "；".join(errs[:8]))
DEST.parent.mkdir(exist_ok=True)
DEST.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
print(f"PASS: {len(data)} 元素 → {DEST}")
