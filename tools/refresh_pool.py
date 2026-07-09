#!/usr/bin/env python3
"""refresh_pool.py <stage 1|2|3|guides> — 單一內容產物的「派工→撿回→驗證→入庫」閉環。
可被人工或 cron（website_content_refresh）呼叫；成功 exit 0。"""
import json, subprocess, sys, time, urllib.request
from pathlib import Path

TOOLS = Path(__file__).resolve().parent
WS = Path("/home/francis/AI_Project/workspace")
CONTENT = TOOLS.parent / "content"

STAGE_NAME = {
    "1": "iPAS 初級（初科一/初科二）",
    "2": "iPAS 中級・技術規劃（中科一）",
    "3": "iPAS 中級・數據與機器學習（中科二/中科三）",
}


def dispatch(prompt, requester):
    body = json.dumps({"brain": "hermes", "prompt": prompt, "single_model": "MiniMax",
                       "requester": requester}).encode()
    req = urllib.request.Request("http://127.0.0.1:4099/dispatch", data=body,
                                 headers={"Content-Type": "application/json"})
    print(urllib.request.urlopen(req, timeout=60).read().decode(), flush=True)


def pool_prompt(stage: str) -> str:
    titles = (TOOLS / f"stage{stage}_titles.txt").read_text()
    n = len(titles.splitlines())
    return f"""【內容策展任務：撰寫 Python 腳本，產出 Stage {stage}（{STAGE_NAME[stage]}）精選術語 JSON 檔】【輸出語言=Python】
目標：教學課程精選詞彙更新，你負責 Stage {stage}。
從以下 {n} 個術語（格式 id|中文名|英文名）中挑 30 個「最重要、最具代表性、該階段學習者最該認識」的術語，主題要分散不要集中同類。

{titles}

任務：撰寫一支 Python 腳本，腳本內容為：
TERMS = [ 30 個 dict，每個 {{"id":"<原id字串>","zh":"<中文名>","en":"<英文名>","def":"<你撰寫的白話一句定義，繁體中文，嚴格40字以內>","stage":{stage}}} ]
main 區塊：import json 後將 TERMS 寫入 /workspace/workspace/stage{stage}_terms.json（json.dump，ensure_ascii=False）並 print 筆數。
驗收條件：腳本執行 Exit 0、JSON 檔 30 元素、id 全部來自上面清單、def≤40字。host 管線會機械驗證。
TERMS 必須是你真實挑選與撰寫的內容，不可用佔位文字。不需要去重、不需要讀任何檔案、不需要做其他任何事。"""


def guides_prompt() -> str:
    cats = json.loads((TOOLS / "stage_categories.json").read_text())
    lines = []
    for s in ("1", "2", "3"):
        top = sorted(cats[s].items(), key=lambda x: -x[1])[:25]
        lines.append(f"Stage {s}：" + "、".join(f"{k}({v})" for k, v in top))
    catstr = "\n".join(lines)
    return f"""【內容撰寫任務：撰寫 Python 腳本，產出 Stage 1~3 課程章節導讀 JSON 檔】【輸出語言=Python】
目標：教學課程路線圖的「章節分組＋導讀」更新。
各 Stage 的主要知識類別（格式 類別名(術語數)，已按數量排序）：

{catstr}

任務：為每個 Stage 將類別歸納成 5~6 個「學習章節」（依學習順序由淺入深），每章給章名與 2~3 句導讀（這章學什麼、為何重要、與前章的關係）。
撰寫一支 Python 腳本，腳本內容為：
GUIDES = {{"stage1":[{{"chapter":"<章名>","categories":["<類別名>"],"intro":"<2~3句導讀，繁體中文>"}}, ...5~6章], "stage2":[...], "stage3":[...]}}
main 區塊：import json 後將 GUIDES 寫入 /workspace/workspace/stage_guides.json（json.dump，ensure_ascii=False）並 print 章數。
驗收條件：腳本執行 Exit 0、三個 stage 各 5~6 章、categories 只用上面列出的類別名、intro 每章至少 20 字。
GUIDES 必須是你真實撰寫的內容，不可用佔位文字。不需要讀任何檔案、不需要做其他任何事。"""


def wait_and_validate(validator: list, mark_time: float, timeout_min: int = 15) -> bool:
    tried = set()
    for _ in range(timeout_min * 4):
        time.sleep(15)
        for f in sorted(WS.glob("*.json"), key=lambda p: p.stat().st_mtime, reverse=True):
            if f.stat().st_mtime <= mark_time or f in tried:
                continue
            tried.add(f)
            r = subprocess.run([sys.executable, *validator, str(f)],
                               capture_output=True, text=True)
            print(f"[驗證] {f.name}: {r.stdout.strip() or r.stderr.strip()}", flush=True)
            if r.returncode == 0:
                return True
    return False


def main():
    what = sys.argv[1]
    mark = time.time()
    if what in ("1", "2", "3"):
        dispatch(pool_prompt(what), f"content_refresh Stage{what} 精選池")
        ok = wait_and_validate([str(TOOLS / "validate_pool.py"), what], mark)
    elif what == "guides":
        dispatch(guides_prompt(), "content_refresh 章節導讀")
        ok = wait_and_validate([str(TOOLS / "validate_guides.py")], mark)
    else:
        sys.exit("usage: refresh_pool.py 1|2|3|guides")
    print("PASS" if ok else "FAIL", flush=True)
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
