#!/usr/bin/env python3
"""batch_sprite_gen.py — 依 content/sprite_design_spec.json 循序批次產圖（sd_bridge:4101）。
產物複製到 assets/sprites/batch1/<序號>_<英文安全名>.png，並產生 preview 對照頁。
可重跑：已存在的序號自動跳過。"""
import json, re, shutil, sys, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SPEC = ROOT / "content" / "sprite_design_spec.json"
DEST = ROOT / "assets" / "sprites" / "batch1"
PREVIEW = ROOT / "sprite-batch1-preview.html"
BRIDGE = "http://127.0.0.1:4101/generate"

def gen(asset, seed):
    body = json.dumps({"prompt": asset["gen_prompt"], "style_preset": asset["style_preset"],
                       "seed": seed}).encode()
    req = urllib.request.Request(BRIDGE, data=body, headers={"Content-Type": "application/json"})
    d = json.loads(urllib.request.urlopen(req, timeout=600).read().decode())
    if d.get("status") != "ok" or not d.get("images"):
        raise RuntimeError(d.get("message", "no image"))
    return d["images"][0]

def main():
    spec = json.loads(SPEC.read_text(encoding="utf-8"))["assets"]
    DEST.mkdir(parents=True, exist_ok=True)
    rows, fail = [], []
    for i, a in enumerate(spec):
        safe = re.sub(r"[^A-Za-z0-9]+", "_", a["gen_prompt"][:24]).strip("_") or "asset"
        out = DEST / f"{i:02d}_{a['style_preset']}_{safe}.png"
        if out.exists():
            print(f"[{i+1}/{len(spec)}] 已存在，跳過：{out.name}", flush=True)
        else:
            try:
                src = gen(a, seed=1000 + i)
                shutil.copy(src, out)
                print(f"[{i+1}/{len(spec)}] ✅ {a['zh_name']} → {out.name}", flush=True)
            except Exception as e:
                print(f"[{i+1}/{len(spec)}] ❌ {a['zh_name']}：{e}", flush=True)
                fail.append(a["zh_name"])
                continue
        rows.append((out.name, a))
    # 對照預覽頁
    cells = "".join(
        f'<div style="border:1px solid #334;border-radius:10px;padding:10px;width:220px;">'
        f'<img src="assets/sprites/batch1/{fn}" style="image-rendering:pixelated;max-width:100%;background:#223;">'
        f'<div style="font-weight:700;margin-top:6px;">{a["zh_name"]}</div>'
        f'<div style="font-size:12px;opacity:.8;">{a["design_note"]}</div></div>'
        for fn, a in rows)
    PREVIEW.write_text(
        '<!doctype html><meta charset="utf-8"><title>Sprite Batch1 目檢</title>'
        '<body style="background:#0b1020;color:#e2e8f0;font-family:sans-serif;padding:20px;">'
        f'<h2>首批造型目檢（{len(rows)}/{len(spec)}，Hermes 主腦設計 × sd_bridge 產圖）</h2>'
        f'<div style="display:flex;flex-wrap:wrap;gap:12px;">{cells}</div>', encoding="utf-8")
    print(f"\n完成 {len(rows)}/{len(spec)}，失敗：{fail or '無'}\n預覽：{PREVIEW}", flush=True)
    sys.exit(1 if fail else 0)

if __name__ == "__main__":
    main()
