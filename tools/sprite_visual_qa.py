#!/usr/bin/env python3
"""sprite_visual_qa.py — 主腦視覺化 QA（兩階段）：
① 視覺通道：CF Worker /vision（Workers AI llava-1.5-7b）客觀描述每張 sprite
② 判定：HermesAgent 主腦親自比對「設計規格 vs 實際看到的內容」，逐張給 {score,verdict,reason}
產出 content/sprite_qa_report.json（含通道與模型完整揭示）。"""
import base64, json, re, sys, time, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SPEC = json.loads((ROOT / "content" / "sprite_design_spec.json").read_text(encoding="utf-8"))["assets"]
BATCH = ROOT / "assets" / "sprites" / "batch1"
OUT = ROOT / "content" / "sprite_qa_report.json"
DIRECT_OUT = Path("/home/francis/AI_Project/Commander/direct_output")
VISION = "https://ai-tts-srs-proxy.ai-tts-srs-learning.workers.dev/vision"
UA = "Mozilla/5.0 (X11; Linux x86_64) SpriteQA/1.0"


def http_json(url, payload, timeout=90):
    req = urllib.request.Request(url, data=json.dumps(payload).encode(),
                                 headers={"Content-Type": "application/json", "User-Agent": UA})
    return json.loads(urllib.request.urlopen(req, timeout=timeout).read().decode())


def describe(img_path):
    b64 = base64.b64encode(img_path.read_bytes()).decode()
    d = http_json(VISION, {"image_b64": b64, "max_tokens": 150, "prompt":
        "Describe this pixel art game sprite objectively: subject, colors, clothing/shape, pose, style. One or two sentences."})
    return d.get("text", "").strip(), d.get("model", "?")


def main():
    files = sorted(BATCH.glob("*.png"))
    seen, vmodel = [], "?"
    for i, a in enumerate(SPEC):
        img = next((f for f in files if f.name.startswith(f"{i:02d}_")), None)
        if not img:
            seen.append({"i": i, "zh_name": a["zh_name"], "seen": "（缺圖）"})
            continue
        try:
            desc, vmodel = describe(img)
        except Exception as e:
            desc = f"（視覺通道失敗：{str(e)[:60]}）"
        seen.append({"i": i, "zh_name": a["zh_name"], "file": img.name, "seen": desc})
        print(f"[看圖 {i+1}/{len(SPEC)}] {a['zh_name']}: {desc[:60]}", flush=True)
        time.sleep(0.5)

    # ② 主腦親自判定（一次 direct_task 批次比對）
    rows = "\n".join(
        f'{s["i"]}|{s["zh_name"]}|設計:{SPEC[s["i"]]["design_note"]}|實際看到:{s["seen"]}'
        for s in seen)
    prompt = f"""【視覺 QA 判定任務 — 你（HermesAgent 主腦）親自比對自己的設計規格與產圖結果】
⚠️ 輸出紀律：禁止思考過程，直接輸出一個 ```json 圍欄區塊，不要其他文字。

以下 29 列（格式 編號|資產名|設計:設計理念|實際看到:視覺模型對成品圖的客觀描述）：
{rows}

逐列判定成品是否符合設計（主體對不對、配色風格是否接近、可否辨識），寬鬆標準（像素圖描述粗糙屬正常，主體對就給過）：
```json
{{"results":[{{"i":0,"score":1到5,"verdict":"通過"或"重製","reason":"繁中一句話"}}, ...共29個]}}
```"""
    mark = time.time()
    print(http_json("http://127.0.0.1:4099/direct_task",
                    {"brain": "hermes", "prompt": prompt,
                     "requester": "ClaudeCode sprite 視覺 QA（主腦親自判定）"}, timeout=60), flush=True)

    verdicts = None
    for _ in range(40):
        time.sleep(15)
        for f in sorted(DIRECT_OUT.glob("*.md"), key=lambda p: p.stat().st_mtime, reverse=True):
            if f.stat().st_mtime <= mark:
                break
            m = re.search(r"```json\s*(\{.*?\})\s*```", f.read_text(encoding="utf-8"), re.S)
            if m:
                try:
                    verdicts = json.loads(m.group(1))["results"]
                except Exception:
                    continue
        if verdicts:
            break
    if not verdicts:
        sys.exit("FAIL: 主腦判定未回收")

    vmap = {v["i"]: v for v in verdicts}
    report = []
    for s in seen:
        v = vmap.get(s["i"], {})
        report.append({"zh_name": s["zh_name"], "file": s.get("file"), "seen": s["seen"],
                       "score": v.get("score", 0), "verdict": v.get("verdict", "未判定"),
                       "reason": v.get("reason", "")})
    ok = sum(1 for r in report if r["verdict"] == "通過")
    OUT.write_text(json.dumps({
        "pipeline": {"設計": "HermesAgent 主腦親自（direct_task）",
                     "產圖": "本地 sd_bridge（SD1.5 dreamshaper-8 / Z-Image Turbo，RTX 3060）",
                     "視覺通道": f"CF Workers AI {vmodel}",
                     "判定": "HermesAgent 主腦親自（direct_task 批次比對）"},
        "date": time.strftime("%F %T"), "pass": ok, "total": len(report), "results": report},
        ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"\nQA 完成：{ok}/{len(report)} 通過 → {OUT}", flush=True)


if __name__ == "__main__":
    main()
