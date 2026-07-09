#!/usr/bin/env python3
"""工作包② 循序執行器：Stage2 → Stage3 → 章節導讀。派工→等產物→驗證→下一個。"""
import json, re, subprocess, sys, time, urllib.request
from pathlib import Path

SCRATCH = Path(__file__).parent
WS = Path("/home/francis/AI_Project/workspace")
CONTENT = Path("/home/francis/AI_Project/Work/AI-tts-srs-learning/content")

def dispatch(prompt, requester):
    body = json.dumps({"brain": "hermes", "prompt": prompt, "single_model": "MiniMax",
                       "requester": requester}).encode()
    req = urllib.request.Request("http://127.0.0.1:4099/dispatch", data=body,
                                 headers={"Content-Type": "application/json"})
    print(urllib.request.urlopen(req, timeout=60).read().decode(), flush=True)

def pool_prompt(stage):
    titles = (SCRATCH / f"stage{stage}_titles.txt").read_text()
    n = len(titles.splitlines())
    name = {2: "iPAS 中級・技術規劃（中科一）", 3: "iPAS 中級・數據與機器學習（中科二/中科三）"}[stage]
    return f"""【內容策展任務：Stage {stage}（{name}）每日精選術語池——純 JSON 資料產出，不要任何說明文字】
目標：教學網站首頁「今日精選術語」要擴充為分 Stage 精選池，你負責 Stage {stage}。
從以下 {n} 個術語（格式 id|中文名|英文名）中挑 30 個「最重要、最具代表性、該階段學習者最該認識」的術語，主題要分散不要集中同類：

{titles}

你的輸出檔案內容必須是**單一合法 JSON 陣列**（不能有 markdown 圍欄、不能有註解、不能有佔位文字），30 個元素，每個元素：
{{"id":"<原id字串>","zh":"<中文名>","en":"<英文名>","def":"<白話一句定義，繁體中文，嚴格40字以內>","stage":{stage}}}
驗收條件：合法 JSON、恰 30 元素、id 全部來自上面清單、def≤40字。host 管線會機械驗證，驗不過整包退回。
只產出這一個 JSON，不需要去重、不需要動試算表、不需要做其他任何事。"""

def guides_prompt():
    cats = json.loads((SCRATCH / "stage_categories.json").read_text())
    lines = []
    for s in ("1", "2", "3"):
        top = sorted(cats[s].items(), key=lambda x: -x[1])[:25]
        lines.append(f"Stage {s}：" + "、".join(f"{k}({v})" for k, v in top))
    catstr = "\n".join(lines)
    return f"""【內容撰寫任務：Stage 1~3 課程章節導讀——純 JSON 資料產出，不要任何說明文字】
目標：教學網站的階段路線圖要為每個 Stage 提供「章節分組＋導讀」，幫學習者知道先學什麼後學什麼。
各 Stage 的主要知識類別（格式 類別名(術語數)，已按數量排序）：

{catstr}

任務：為每個 Stage 將類別歸納成 5~6 個「學習章節」（依學習順序由淺入深），每章給章名與 2~3 句導讀（這章學什麼、為何重要、與前章的關係）。
輸出必須是**單一合法 JSON 物件**：
{{"stage1":[{{"chapter":"<章名>","categories":["<類別名>"],"intro":"<2~3句導讀，繁體中文>"}}],"stage2":[...],"stage3":[...]}}
驗收條件：合法 JSON、三個 stage 各 5~6 章、categories 只用上面列出的類別名。host 管線會機械驗證。
只產出這一個 JSON，不需要做其他任何事。"""

def wait_and_validate(validator_args, mark_time, timeout_min=15):
    """輪詢 workspace 新 json，逐一丟驗證器直到 PASS。"""
    tried = set()
    for _ in range(timeout_min * 4):
        time.sleep(15)
        for f in sorted(WS.glob("*.json"), key=lambda p: p.stat().st_mtime, reverse=True):
            if f.stat().st_mtime <= mark_time or f in tried:
                continue
            tried.add(f)
            r = subprocess.run([sys.executable, str(SCRATCH / validator_args[0]), *validator_args[1:], str(f)],
                               capture_output=True, text=True)
            print(f"[驗證] {f.name}: {r.stdout.strip() or r.stderr.strip()}", flush=True)
            if r.returncode == 0:
                return True
    return False

def main():
    # Stage 2 與 3 精選池
    for stage in (2, 3):
        mark = time.time()
        print(f"\n=== 派工 Stage {stage} 精選池（MiniMax）===", flush=True)
        dispatch(pool_prompt(stage), f"ClaudeCode 工作包② Stage{stage} 精選池")
        if not wait_and_validate(["validate_pool.py", str(stage)], mark):
            sys.exit(f"ABORT: Stage {stage} 精選池 15 分鐘內無合格產物")
        print(f"=== Stage {stage} PASS ===", flush=True)

    # 章節導讀
    mark = time.time()
    print("\n=== 派工 章節導讀（MiniMax）===", flush=True)
    dispatch(guides_prompt(), "ClaudeCode 工作包② 章節導讀")
    if not wait_and_validate(["validate_guides.py"], mark):
        sys.exit("ABORT: 章節導讀 15 分鐘內無合格產物")
    print("=== 章節導讀 PASS ===", flush=True)
    print("\nALL_DONE", flush=True)

if __name__ == "__main__":
    main()
