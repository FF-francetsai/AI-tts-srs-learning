import csv
import json
import os

def process_csv():
    # 檔案路徑
    enriched_path = "Google_Sheets_TTS_Guide_enriched.csv"
    pro_quiz_path = "Google_Sheets_TTS_Guide_pro_quiz.csv"
    quiz_bank_path = "Google_Sheets_TTS_Guide_Quiz_Bank.csv"
    
    # 預期輸出
    data_js_path = "data.js"
    quizzes_js_path = "quizzes.js"

    # 1. 讀取主架構 (enriched + pro_quiz)
    topics = {}
    with open(pro_quiz_path, mode='r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        reader.fieldnames = [name.strip() for name in reader.fieldnames]
        for row in reader:
            no = row.get('編號')
            if not no: continue
            
            topics[no] = {
                "id": no,
                "subject": row.get('科目', '').replace('\n', ' '),
                "category": row.get('主題', ''),
                "principle": row.get('七大原則', ''),
                "title": row.get('繁體中文', ''),
                "eng_name": row.get('英文全名', ''),
                "eng_abbr": row.get('英文縮寫', ''),
                "def": row.get('定義', ''),
                "key_goal": row.get('核心目標', ''),
                "key_principle": row.get('核心原理', ''),
                "key_purpose": row.get('用途', ''),
                "common_apps": row.get('應用場景', ''),
                "scenarios": {
                    "weather": row.get('氣象與防災', ''),
                    "agri": row.get('農業漁業與畜牧', ''),
                    "traffic": row.get('交通與物流', ''),
                    "industry": row.get('生產與製造（工業4.0）', ''),
                    "finance": row.get('科技金融與醫學', ''),
                    "life": row.get('客服零售與生活', ''),
                    "fire": row.get('消防與公共安全', '')
                },
                "detail_explain": row.get('詳細解析', '')
            }

    # 2. 讀取巨量題庫 (Quiz Bank)
    quizzes = {}
    with open(quiz_bank_path, mode='r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        reader.fieldnames = [name.strip() for name in reader.fieldnames]
        for row in reader:
            no = row.get('no')
            if not no: continue
            
            if no not in quizzes:
                quizzes[no] = []
            
            quizzes[no].append({
                "q_id": row.get('q_id', ''),
                "diff": row.get('difficulty', ''),
                "style": row.get('style', ''),
                "q": row.get('question', ''),
                "opts": [row.get('optA', ''), row.get('optB', ''), row.get('optC', ''), row.get('optD', '')],
                "ans": row.get('correctAns', ''),
                "explain": row.get('explanation', '')
            })

    # 3. 轉化為 JS 檔案
    unit_map = {}
    for no, t in topics.items():
        sub = t['subject']
        cat = t['category']
        if sub not in unit_map: unit_map[sub] = {}
        if cat not in unit_map[sub]: unit_map[sub][cat] = []
        unit_map[sub][cat].append(t)

    final_data = []
    for sub, cats in unit_map.items():
        sub_units = []
        for cat, ts in cats.items():
            sub_units.append({
                "title": cat,
                "topics": ts
            })
        final_data.append({
            "title": sub,
            "sub_units": sub_units
        })

    with open(data_js_path, 'w', encoding='utf-8') as f:
        f.write("const lessonData = " + json.dumps(final_data, ensure_ascii=False, indent=2) + ";")

    with open(quizzes_js_path, 'w', encoding='utf-8') as f:
        f.write("const quizBank = " + json.dumps(quizzes, ensure_ascii=False, indent=2) + ";")

    print(f"成功轉換 {len(topics)} 個主題與 {sum(len(v) for v in quizzes.values())} 個測驗題目。")

if __name__ == "__main__":
    process_csv()
