const lessonData = [
  {
    "title": "初科一  中科一",
    "sub_units": [
      {
        "title": "AI 基礎",
        "topics": [
          {
            "id": "1",
            "subject": "初科一  中科一",
            "category": "AI 基礎",
            "principle": "永續發展與福祉",
            "title": "人工智慧",
            "eng_name": "Artificial Intelligence",
            "eng_abbr": "AI",
            "def": "賦予機器學習、推理與決策能力的技術總稱 。",
            "key_goal": "模擬人類智慧",
            "key_principle": "機器學習與推理",
            "key_purpose": "執行需人類智慧的任務",
            "common_apps": "醫療輔助診斷、自動駕駛 。",
            "scenarios": {
              "weather": "氣象預報：自駕系統結合即時路面積水/能見度警示",
              "agri": "智慧耕作：農場自駕拖拉機自動施肥/犁田",
              "traffic": "自駕與輔助：自駕公車測試、ADAS駕駛輔助、疲勞駕駛偵測（核心場景）",
              "industry": "製程優化：工廠內自駕AGV物料搬運",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。關鍵字是「自主規劃」與「動態調整」。雖然 LLM (B) 是其大腦，但只有整合了規劃能力與工具呼叫的 Agent 才能展現這種自主執行力。(D) 為假設性概念，目前尚未實現。"
          }
        ]
      },
      {
        "title": "AI 範式",
        "topics": [
          {
            "id": "6",
            "subject": "初科一  中科一",
            "category": "AI 範式",
            "principle": "透明與可解釋",
            "title": "符號人工智慧",
            "eng_name": "Symbolic AI",
            "eng_abbr": "-",
            "def": "透過人工定義的邏輯規則進行推理的早期 AI 範式 。",
            "key_goal": "基於邏輯與規則",
            "key_principle": "規則引擎(GOFAI)",
            "key_purpose": "邏輯推論與專家系統",
            "common_apps": "法律諮詢系統、早期的醫療診斷 。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 法律諮詢系統、早期的醫療診斷 。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "電腦視覺",
        "topics": [
          {
            "id": "83",
            "subject": "初科一  中科一",
            "category": "電腦視覺",
            "principle": "永續發展與福祉",
            "title": "影像分類",
            "eng_name": "Image Classification",
            "eng_abbr": "-",
            "def": "給定一張圖片，判定其屬於哪一個預定義的類別（如「貓」）。",
            "key_goal": "判定影像主題",
            "key_principle": "特徵提取與分類",
            "key_purpose": "快速自動標籤",
            "common_apps": "手機相簿自動分類、工業瑕疵檢測。",
            "scenarios": {
              "weather": "氣象預報：衛星雲型分類（颱風眼/積雨雲）；空污：AQI等級影像分級",
              "agri": "智慧耕作：作物品種/生長階段自動分類；精準養殖：魚種健康狀態分級",
              "traffic": "智慧物流：快遞包裹損壞等級分類；交通違規類型自動歸類",
              "industry": "品質檢測：瑕疵類型（裂紋/刮傷/色差）分類統計",
              "finance": "智慧醫療：皮膚病變/眼底影像疾病分類；X光異常篩選",
              "life": "智慧零售：商品類別自動辨識上架；人臉年齡層分類個人化服務",
              "fire": "公共安全：監視器可疑物品類型辨識；消防：燃料類型判斷"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 手機相簿自動分類、工業瑕疵檢測。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "85",
            "subject": "初科一  中科一",
            "category": "電腦視覺",
            "principle": "隱私保護",
            "title": "人臉辨識",
            "eng_name": "Face Recognition",
            "eng_abbr": "-",
            "def": "透過分析臉部特徵向量來識別或驗證個人身份的技術。",
            "key_goal": "身份身分驗證",
            "key_principle": "生物特徵向量對比",
            "key_purpose": "安全與考勤管理",
            "common_apps": "手機解鎖、海關快速過關。",
            "scenarios": {
              "weather": "",
              "agri": "畜牧管理：牛隻個體臉部識別追蹤（乳牛個體健康管理）",
              "traffic": "自駕與輔助：疲勞駕駛臉部特徵偵測（眼皮閉合角度）",
              "industry": "製程優化：廠區人員身份核驗，防止未授權進入",
              "finance": "金融科技：ATM/網銀人臉身份核實；健康管家：情緒健康狀態辨識",
              "life": "智慧零售：販賣機顧客年齡/性別分析精準推薦",
              "fire": "公共安全：協尋失蹤/通緝人員特徵比對；刑事案件追查"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 手機解鎖、海關快速過關。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "NLP",
        "topics": [
          {
            "id": "95",
            "subject": "初科一  中科一",
            "category": "NLP",
            "principle": "永續發展與福祉",
            "title": "機器翻譯",
            "eng_name": "Machine Translation",
            "eng_abbr": "MT",
            "def": "利用 AI 自動將一種語言的文本或語音轉換為另一種語言。",
            "key_goal": "跨語言自動轉換",
            "key_principle": "神經機器翻譯 (NMT)",
            "key_purpose": "跨國溝通",
            "common_apps": "即時口譯 App、網頁全文翻譯。",
            "scenarios": {
              "weather": "環境監控：跨國氣象報告即時翻譯",
              "agri": "農業技術：國際農業研究文獻自動翻譯",
              "traffic": "智慧物流：跨國運輸文件多語翻譯",
              "industry": "製程優化：國際設備維修手冊即時翻譯",
              "finance": "智慧醫療：國際醫學文獻快速翻譯輔助研究",
              "life": "智能客服：多語言24H客服機器人翻譯支援",
              "fire": "公共安全：外籍人士緊急求救語言即時翻譯"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 即時口譯 App、網頁全文翻譯。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數位轉型",
        "topics": [
          {
            "id": "109",
            "subject": "初科一  中科一",
            "category": "數位轉型",
            "principle": "永續發展與福祉",
            "title": "數位轉型",
            "eng_name": "Digital Transformation",
            "eng_abbr": "DX",
            "def": "利用數位技術全面重塑業務流程、文化與客戶體驗的策略過程。",
            "key_goal": "組織轉型與創新",
            "key_principle": "數位技術驅動流程重組",
            "key_purpose": "提升競爭力",
            "common_apps": "銀行全面數位化分行流程。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 銀行全面數位化分行流程。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "AI 概念\n\nNLP進階應用",
        "topics": [
          {
            "id": "468",
            "subject": "初科一  中科一",
            "category": "AI 概念\n\nNLP進階應用",
            "principle": "透明與可解釋",
            "title": "常識推理",
            "eng_name": "Common Sense Reasoning",
            "eng_abbr": "-",
            "def": "使 AI 具備處理日常生活邏輯、因果關係與物理常識的能力 。",
            "key_goal": "賦予模型類人邏輯",
            "key_principle": "利用外部知識庫或大規模預訓練獲得對現實世界的基礎理解。",
            "key_purpose": "提升模型在模糊指令下的判斷正確性。",
            "common_apps": "AI 助理理解「把水杯放進冰箱」是為了降溫而非儲存玻璃。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 助理理解「把水杯放進冰箱」是為了降溫而非儲存玻璃。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      }
    ]
  },
  {
    "title": "初科一",
    "sub_units": [
      {
        "title": "AI 分類",
        "topics": [
          {
            "id": "2",
            "subject": "初科一",
            "category": "AI 分類",
            "principle": "永續發展與福祉",
            "title": "狹義人工智慧",
            "eng_name": "Narrow AI",
            "eng_abbr": "ANI",
            "def": "專門執行單一特定任務（如翻譯、辨識）的 AI 。",
            "key_goal": "特定任務優化",
            "key_principle": "弱人工智慧範式",
            "key_purpose": "解決特定領域問題",
            "common_apps": "語音助手、人臉辨識系統。",
            "scenarios": {
              "weather": "",
              "agri": "畜牧管理：牛隻個體臉部識別追蹤（乳牛個體健康管理）",
              "traffic": "自駕與輔助：疲勞駕駛臉部特徵偵測（眼皮閉合角度）",
              "industry": "製程優化：廠區人員身份核驗，防止未授權進入",
              "finance": "金融科技：ATM/網銀人臉身份核實；健康管家：情緒健康狀態辨識",
              "life": "智慧零售：販賣機顧客年齡/性別分析精準推薦",
              "fire": "公共安全：協尋失蹤/通緝人員特徵比對；刑事案件追查"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 語音助手、人臉辨識系統。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "3",
            "subject": "初科一",
            "category": "AI 分類",
            "principle": "永續發展與福祉",
            "title": "通用人工智慧",
            "eng_name": "Artificial General Intelligence",
            "eng_abbr": "AGI",
            "def": "具備與人類相當、能解決多樣問題的假設性智慧系統 。",
            "key_goal": "跨領域認知能力",
            "key_principle": "全能智慧模擬",
            "key_purpose": "實現全方位人類智慧",
            "common_apps": "未來具備自主思考能力的機器人。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 未來具備自主思考能力的機器人。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "4",
            "subject": "初科一",
            "category": "AI 分類",
            "principle": "永續發展與福祉",
            "title": "超級人工智慧",
            "eng_name": "Artificial Super Intelligence",
            "eng_abbr": "ASI",
            "def": "在所有領域都遠超人類智慧的假設性 AI 。",
            "key_goal": "超越人類智能",
            "key_principle": "智慧爆發",
            "key_purpose": "科幻與理論研究",
            "common_apps": "目前僅存在於理論探討中。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 目前僅存在於理論探討中。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "AI 評測",
        "topics": [
          {
            "id": "5",
            "subject": "初科一",
            "category": "AI 評測",
            "principle": "透明與可解釋",
            "title": "圖靈測試",
            "eng_name": "Turing Test",
            "eng_abbr": "-",
            "def": "衡量機器是否具有智慧，若人類分不出對手是人或機器則通過 。",
            "key_goal": "行為模仿辨識",
            "key_principle": "模仿遊戲",
            "key_purpose": "判定機器是否具備智慧表現",
            "common_apps": "聊天機器人的人性化程度測試。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 聊天機器人的人性化程度測試。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "AI 範式",
        "topics": [
          {
            "id": "7",
            "subject": "初科一",
            "category": "AI 範式",
            "principle": "透明與可解釋",
            "title": "專家系統",
            "eng_name": "Expert System",
            "eng_abbr": "-",
            "def": "利用專家經驗建構的規則庫（IF-THEN）來解決專業問題 。",
            "key_goal": "知識推理",
            "key_principle": "知識庫+推理引擎",
            "key_purpose": "模擬專家決策過程",
            "common_apps": "專業醫療診斷、財務審計系統 。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 專業醫療診斷、財務審計系統 。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數位轉型",
        "topics": [
          {
            "id": "8",
            "subject": "初科一",
            "category": "數位轉型",
            "principle": "永續發展與福祉",
            "title": "數位分身",
            "eng_name": "Digital Twin",
            "eng_abbr": "-",
            "def": "建立實體資產的數位模型，進行即時監測與預測 。",
            "key_goal": "實體虛擬同步",
            "key_principle": "即時監測與模擬",
            "key_purpose": "預測性維護與優化",
            "common_apps": "智慧工廠設備監測、都市規劃模擬。",
            "scenarios": {
              "weather": "環境監控：城市洪水數位分身（模擬不同降雨量下的淹水範圍）",
              "agri": "精準養殖：魚塭水體數位分身（模擬投料/換水對水質影響）",
              "traffic": "智慧交通：城市交通數位分身（模擬路網改建後的車流影響）",
              "industry": "製程優化：工廠設備數位分身（模擬不同排程的產能與能耗）；預測性維護",
              "finance": "半導體：晶圓廠製程數位分身（模擬蝕刻參數對良率影響）",
              "life": "智慧生活：供應鏈數位分身（模擬缺貨衝擊）",
              "fire": "智慧消防：建築物數位分身（模擬火災蔓延路徑與逃生規劃）"
            },
            "detail_explain": "正確答案是 (A)。關鍵在於「數據流動」。數位分身不僅是「畫得像」，更要「數據連動」，機器動一下，數位模型就同步反應，這樣才能用 AI 去模擬未來 10 小時會不會壞掉。"
          }
        ]
      },
      {
        "title": "AI 哲學",
        "topics": [
          {
            "id": "231",
            "subject": "初科一",
            "category": "AI 哲學",
            "principle": "永續發展與福祉",
            "title": "共生智能",
            "eng_name": "Symbiotic Intelligence",
            "eng_abbr": "-",
            "def": "人類與 AI 相互依存、共同學習與進化的新型智慧形態。",
            "key_goal": "人機協作終極目標",
            "key_principle": "互補式智慧進化",
            "key_purpose": "提升全人類創造力",
            "common_apps": "AI 擴展人類感官與思維界限。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 擴展人類感官與思維界限。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "機器學習概念",
        "topics": [
          {
            "id": "591",
            "subject": "初科一",
            "category": "機器學習概念",
            "principle": "可解釋性\n\n公平性",
            "title": "鑑別式 AI",
            "eng_name": "Discriminative Artificial Intelligence",
            "eng_abbr": "Discriminative AI",
            "def": "透過已標記資料學習分類規則，用於預測輸入樣本所屬類別的模型 。",
            "key_goal": "學習資料間的決策邊界以進行分類",
            "key_principle": "學習條件概率 P(y|x)，專注於區分不同類別的特徵差異 。",
            "key_purpose": "圖像分類、垃圾郵件偵測、疾病診斷預測 。",
            "common_apps": "醫學影像腫瘤良惡性判定 \n\n\n\n金融貸款違約機率預測",
            "scenarios": {
              "weather": "氣象預報：判別衛星雲圖中颱風與一般低氣壓的分類邊界",
              "agri": "智慧耕作：分類農作物病蟲害影像（健康/輕微/嚴重）",
              "traffic": "交通管理：車牌影像辨識分類車輛類型（轎車/貨車/機車）",
              "industry": "品質檢測：產線產品瑕疵分類（合格/不合格/待複檢）",
              "finance": "智慧醫療：醫學影像腫瘤良惡性判定分類",
              "life": "智慧零售：顧客消費行為分類（高/中/低消費族群）",
              "fire": "公共安全：監視器影像分類可疑行為（正常/異常/緊急）"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在醫學影像腫瘤良惡性判定、金融貸款違約機率預測下，傳統方案難以處理變數過多的情境，而鑑別式 AI 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "數據處理與分析",
        "topics": [
          {
            "id": "606",
            "subject": "初科一",
            "category": "數據處理與分析",
            "principle": "透明度\n\n尊重智慧財產權",
            "title": "-",
            "eng_name": "Modified National Institute of Standards and Technology",
            "eng_abbr": "MNIST",
            "def": "一個包含 70,000 個手寫數字 (0-9) 圖片的大型資料庫，是電腦視覺與機器學習入門最常用的標準資料集。",
            "key_goal": "提供標準化的手寫數字識別基準",
            "key_principle": "28x28 像素的灰階手寫數字影像集",
            "key_purpose": "演算法驗證、初學者教學、模型基準測試 (Benchmarking)",
            "common_apps": "郵政編碼自動識別\n\n支票金額手寫辨識訓練",
            "scenarios": {
              "weather": "氣象預報：以標準化手寫氣象觀測記錄數位化為基準",
              "agri": "智慧耕作：農產品標籤手寫文字辨識標準化",
              "traffic": "交通管理：郵政編碼自動識別與手寫地址辨識",
              "industry": "製程優化：手寫品檢記錄數位化與辨識標準化",
              "finance": "智慧醫療：醫師手寫處方箋辨識數位化",
              "life": "智慧生活：支票金額手寫辨識訓練與表單自動處理",
              "fire": "公共安全：手寫報案筆錄辨識數位化存檔"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在郵政編碼自動識別等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      }
    ]
  },
  {
    "title": "初科二  中科一",
    "sub_units": [
      {
        "title": "生成式 AI",
        "topics": [
          {
            "id": "9",
            "subject": "初科二  中科一",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "大型語言模型",
            "eng_name": "Large Language Model",
            "eng_abbr": "LLM",
            "def": "基於海量文本訓練，具備自然語言理解與生成能力的大型模型。",
            "key_goal": "文本理解與生成",
            "key_principle": "變壓器架構(Transformer)",
            "key_purpose": "對話、摘要、創意寫作",
            "common_apps": "客服機器人、程式碼自動補全。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。幻覺本質上是模型「一本正經胡說八道」的概率預測。雖然 RLHF (D) 能讓模型更有禮貌、減少有害內容，但唯有 RAG (A) 能像開卷考試一樣，讓模型根據事實證據回答，真正減少事實性錯誤。"
          },
          {
            "id": "75",
            "subject": "初科二  中科一",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "變壓器架構",
            "eng_name": "Transformer",
            "eng_abbr": "-",
            "def": "基於注意力機制拋棄循環結構，可並行處理序列數據的現代架構。",
            "key_goal": "全域關係處理",
            "key_principle": "自注意力機制",
            "key_purpose": "NLP 與生成式 AI 基礎",
            "common_apps": "LLM (如 GPT) 的核心底層架構。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 LLM (如 GPT) 的核心底層架構。 下，傳統方案難以處理變數過多的情境，而 變壓器架構 則能透過多維數據提取深層規律。"
          },
          {
            "id": "76",
            "subject": "初科二  中科一",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "自注意力機制",
            "eng_name": "Self-Attention",
            "eng_abbr": "-",
            "def": "計算序列內各元素間的相互關係權重，自動對焦於重點。",
            "key_goal": "評估詞間關聯",
            "key_principle": "加權關聯權重",
            "key_purpose": "捕捉上下文語意",
            "common_apps": "辨別「他在吃飯」中「他」與「飯」的關係。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 辨別「他在吃飯」中「他」與「飯」的關係。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "78",
            "subject": "初科二  中科一",
            "category": "生成式 AI",
            "principle": "公平性",
            "title": "生成對抗網絡",
            "eng_name": "Generative Adversarial Net",
            "eng_abbr": "GAN",
            "def": "由生成器與鑑別器相互競爭，生成足以亂真的虛擬數據。",
            "key_goal": "模擬真實分布",
            "key_principle": "雙模型博弈",
            "key_purpose": "數據增強與修補",
            "common_apps": "深偽技術、合成醫學影像訓練。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。這是深度學習經典考題。GAN 兩端必須抗衡，如果生成器學會了某個「能騙過鑑別器」的特定技巧（例如只產出一種超像的貓），它就會不斷重複，這就是「模式崩潰」。"
          },
          {
            "id": "132",
            "subject": "初科二  中科一",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "基座模型",
            "eng_name": "Foundation Model",
            "eng_abbr": "-",
            "def": "在廣泛數據上訓練，可微調以適應各種下游任務的大型預訓練模型（如 GPT-4）。",
            "key_goal": "多任務泛化能力",
            "key_principle": "大規模預訓練",
            "key_purpose": "作為 AI 應用基石",
            "common_apps": "開發醫療專用的生成式問答系統。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 開發醫療專用的生成式問答系統。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "147",
            "subject": "初科二  中科一",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "檢索增強生成",
            "eng_name": "Retrieval-Augmented Generation",
            "eng_abbr": "RAG",
            "def": "先從私有庫檢索相關知識，再交由 LLM 根據該資訊生成回答。",
            "key_goal": "減少幻覺/引用事實",
            "key_principle": "檢索 + 生成 結合",
            "key_purpose": "結合企業內部知識庫",
            "common_apps": "建立企業內部的產品說明書問答系統。",
            "scenarios": {
              "weather": "環境監控：氣象法規/標準文件RAG問答系統",
              "agri": "智慧耕作：農業技術資料庫RAG問答助理（查詢防治方法）",
              "traffic": "智慧物流：運輸法規/路線資料庫AI查詢",
              "industry": "預測性維護：設備維修手冊RAG問答（快速查詢故障碼）",
              "finance": "智慧醫療：醫學文獻RAG輔助診斷；金融：法規合規即時查詢",
              "life": "智能客服：企業內部產品知識庫RAG問答（減少幻覺）",
              "fire": "公共安全：消防法規/救災程序RAG查詢助理"
            },
            "detail_explain": "正確答案是 (A)。這是在考 RAG 的真實痛點。向量搜尋有時會因為「關鍵字接近」而誤導，加一個 Reranking (A) 模組，改用交叉編碼器 (Cross-Encoder) 重新評分，是解決「檢索不準」的高階必殺技。"
          }
        ]
      },
      {
        "title": "深度學習",
        "topics": [
          {
            "id": "65",
            "subject": "初科二  中科一",
            "category": "深度學習",
            "principle": "永續發展與福祉",
            "title": "遷移學習",
            "eng_name": "Transfer Learning",
            "eng_abbr": "-",
            "def": "將在大型任務中學到的知識應用於新但相關的小型任務。",
            "key_goal": "知識二次利用",
            "key_principle": "預訓練模型微調",
            "key_purpose": "減少訓練資源需求",
            "common_apps": "使用 ImageNet 預訓練模型來診斷特種疾病。",
            "scenarios": {
              "weather": "氣象預報：用大規模氣候模型預訓練後微調至區域降雨預測",
              "agri": "智慧耕作：ImageNet預訓練模型微調用於特定作物病害識別",
              "traffic": "自駕與輔助：大規模道路場景預訓練模型快速遷移至特定城市場景",
              "industry": "品質檢測：通用瑕疵檢測模型快速遷移至新產品線，降低標注成本",
              "finance": "智慧醫療：ImageNet預訓練CNN微調用於罕見疾病影像識別",
              "life": "智慧零售：通用商品識別模型快速遷移至自家商品目錄",
              "fire": "智慧消防：通用目標偵測模型遷移至火場人員定位場景"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 使用 ImageNet 預訓練模型來診斷特種疾病。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "70",
            "subject": "初科二  中科一",
            "category": "深度學習",
            "principle": "透明與可解釋",
            "title": "卷積神經網路",
            "eng_name": "Convolutional Neural Network",
            "eng_abbr": "CNN",
            "def": "透過卷積運算提取圖像的局部空間特徵（如線條、紋理）。",
            "key_goal": "空間特徵特徵提取",
            "key_principle": "卷積核/濾波器",
            "key_purpose": "視覺處理",
            "common_apps": "影像辨識、醫學影像分析。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。考官在考「底層邏輯」。權重共享讓同個卷積核在整張圖移動，這不僅大幅減少參數，更讓相同特徵不論出現在圖中何處都能被識別（初步平移不變性）。(B) 的非線性主要靠 ReLU，而 (C) 是 ResNet 跳躍連接主要解決的問題。"
          }
        ]
      },
      {
        "title": "NLP",
        "topics": [
          {
            "id": "87",
            "subject": "初科二  中科一",
            "category": "NLP",
            "principle": "永續發展與福祉",
            "title": "自然語言理解",
            "eng_name": "Natural Language Understanding",
            "eng_abbr": "NLU",
            "def": "使機器能理解人類語言背後的意圖、實體及上下文語境。",
            "key_goal": "解析語言意圖",
            "key_principle": "語意與語法分析",
            "key_purpose": "溝通意圖識別",
            "common_apps": "智慧音箱指令解析（如「幫我設定鬧鐘」）。",
            "scenarios": {
              "weather": "環境監控：社群媒體災情通報文字意圖解析",
              "agri": "智慧耕作：農民語音/文字諮詢問題理解",
              "traffic": "智慧交通：客服語音指令解析（查詢班次/報修）",
              "industry": "製程優化：操作員語音設備指令識別",
              "finance": "智慧醫療：問診意圖識別；金融：核貸申請書意圖分析",
              "life": "智能客服：24H語音機器人指令理解核心技術",
              "fire": "公共安全：110/119緊急求救語音意圖快速解析"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 智慧音箱指令解析（如「幫我設定鬧鐘」）。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "88",
            "subject": "初科二  中科一",
            "category": "NLP",
            "principle": "永續發展與福祉",
            "title": "自然語言生成",
            "eng_name": "Natural Language Generation",
            "eng_abbr": "NLG",
            "def": "將結構化數據或思想轉換為自然語言文本的技術。",
            "key_goal": "生成流暢文本",
            "key_principle": "統計語言模型/Transformer",
            "key_purpose": "自動撰寫報告",
            "common_apps": "AI 寫作助手、新聞簡報自動生成。",
            "scenarios": {
              "weather": "氣象預報：數值預報結果自動轉換為人讀氣象公報",
              "agri": "智慧耕作：農業異常感測自動生成告警簡訊",
              "traffic": "智慧物流：配送狀態自動生成通知訊息",
              "industry": "品質檢測：瑕疵報告自動文字生成",
              "finance": "智慧醫療：影像判讀結果自動生成醫師報告草稿；金融：理財建議書自動產出",
              "life": "智能客服：AI郵件/聊天訊息自動回覆生成",
              "fire": "公共安全：災情通報自動生成廣播稿"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 寫作助手、新聞簡報自動生成。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "94",
            "subject": "初科二  中科一",
            "category": "NLP",
            "principle": "永續發展與福祉",
            "title": "情感分析",
            "eng_name": "Sentiment Analysis",
            "eng_abbr": "-",
            "def": "分析文本中所表達的情緒極性（正向、負向、中立）。",
            "key_goal": "判定心理傾向",
            "key_principle": "分類演算法",
            "key_purpose": "輿情監測",
            "common_apps": "社群媒體口碑分析、客服品質評估。",
            "scenarios": {
              "weather": "環境監控：民眾對空污/水質不滿情緒輿情監測",
              "agri": "",
              "traffic": "智慧交通：乘客對大眾運輸服務滿意度分析",
              "industry": "",
              "finance": "金融科技：財經新聞正負面情緒影響股市預測",
              "life": "智慧零售：商品評論情緒分析（正/負/中立）；客服品質評估",
              "fire": "公共安全：社群媒體恐慌輿情即時監測"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 社群媒體口碑分析、客服品質評估。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "專案規劃",
        "topics": [
          {
            "id": "110",
            "subject": "初科二  中科一",
            "category": "專案規劃",
            "principle": "永續發展與福祉",
            "title": "價值主張",
            "eng_name": "Value Proposition",
            "eng_abbr": "-",
            "def": "說明 AI 專案能為客戶或組織帶來的具體價值與獨特優勢。",
            "key_goal": "明確核心收益",
            "key_principle": "客戶痛點與增益分析",
            "key_purpose": "爭取專案支持",
            "common_apps": "提案時說明導入 AI 可節省 30% 人口成本。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 提案時說明導入 AI 可節省 30% 人口成本。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "財務評估",
        "topics": [
          {
            "id": "112",
            "subject": "初科二  中科一",
            "category": "財務評估",
            "principle": "永續發展與福祉",
            "title": "投資報酬率",
            "eng_name": "Return on Investment",
            "eng_abbr": "ROI",
            "def": "衡量專案獲利能力與投入成本比例的指標。",
            "key_goal": "衡量經濟效益",
            "key_principle": "(收益-成本)/成本",
            "key_purpose": "專案績效考核",
            "common_apps": "計算 AI 檢測系統上線後的成本節約。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 計算 AI 檢測系統上線後的成本節約。 下，傳統方案難以處理變數過多的情境，而 投資報酬率 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "專案開發",
        "topics": [
          {
            "id": "113",
            "subject": "初科二  中科一",
            "category": "專案開發",
            "principle": "永續發展與福祉",
            "title": "最小可行性產品",
            "eng_name": "Minimum Viable Product",
            "eng_abbr": "MVP",
            "def": "具備足夠功能以吸引早期用戶，並從中獲取反饋進行迭代的產品版本。",
            "key_goal": "快速市場驗證",
            "key_principle": "核心功能小規模實作",
            "key_purpose": "降低開發成本與風險",
            "common_apps": "先推出具備基礎聊天功能的機器人。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 先推出具備基礎聊天功能的機器人。 下，傳統方案難以處理變數過多的情境，而 最小可行性產品 則能透過多維數據提取深層規律。"
          },
          {
            "id": "114",
            "subject": "初科二  中科一",
            "category": "專案開發",
            "principle": "問責",
            "title": "關鍵績效指標",
            "eng_name": "Key Performance Indicators",
            "eng_abbr": "KPI",
            "def": "用於衡量專案是否達成預定目標的具體量化標準。",
            "key_goal": "追蹤進度與成果",
            "key_principle": "質化與量化目標設定",
            "key_purpose": "績效管理",
            "common_apps": "模型準確率需達 95%、處理時間減半。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 模型準確率需達 95%、處理時間減半。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "120",
            "subject": "初科二  中科一",
            "category": "專案開發",
            "principle": "問責",
            "title": "概念驗證",
            "eng_name": "Proof of Concept",
            "eng_abbr": "POC",
            "def": "為了證實某個技術概念或假設在實作上是可行的而進行的實驗。",
            "key_goal": "技術可行性測試",
            "key_principle": "原型開發與小規模實驗",
            "key_purpose": "降低技術風險",
            "common_apps": "在正式部署前，先在小範圍數據集測試模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在正式部署前，先在小範圍數據集測試模型。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "AI 生態",
        "topics": [
          {
            "id": "166",
            "subject": "初科二  中科一",
            "category": "AI 生態",
            "principle": "永續發展與福祉",
            "title": "開源模型",
            "eng_name": "Open-source Models",
            "eng_abbr": "-",
            "def": "源碼或權重對外開放的模型（如 Llama, Mistral），允許自由部署與微調。",
            "key_goal": "促進技術普及",
            "key_principle": "程式碼與權重公開",
            "key_purpose": "降低技術壟斷",
            "common_apps": "企業自建私有化在地 AI 系統。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 企業自建私有化在地 AI 系統。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "167",
            "subject": "初科二  中科一",
            "category": "AI 生態",
            "principle": "隱私保護",
            "title": "閉源/專有模型",
            "eng_name": "Proprietary Models",
            "eng_abbr": "-",
            "def": "由特定公司開發且不公開原始碼，僅透過 API 服務（如 GPT-4, Gemini）。",
            "key_goal": "提供高效能服務",
            "key_principle": "專利技術與 API 存取",
            "key_purpose": "獲得最先進 AI 能力",
            "common_apps": "使用 OpenAI API 構建應用程式。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 使用 OpenAI API 構建應用程式。 下，傳統方案難以處理變數過多的情境，而 閉源/專有模型 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "生成式AI應用\n\n提示工程",
        "topics": [
          {
            "id": "456",
            "subject": "初科二  中科一",
            "category": "生成式AI應用\n\n提示工程",
            "principle": "透明與可解釋",
            "title": "基於提示的",
            "eng_name": "Prompt-based",
            "eng_abbr": "-",
            "def": "一種不改動模型參數，僅透過輸入指令來調整行為的方法 。",
            "key_goal": "引導模型輸出特定結果",
            "key_principle": "透過設計特定的輸入模板，觸發預訓練模型中的相關知識。",
            "key_purpose": "降低模型微調成本，快速適應不同的下游任務。",
            "common_apps": "撰寫廣告文案時，指定口吻為「專業」或「幽默」。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 撰寫廣告文案時，指定口吻為「專業」或「幽默」。 下，傳統方案難以處理變數過多的情境，而 基於提示的 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "資料處理與分析\n\nNLP任務",
        "topics": [
          {
            "id": "458",
            "subject": "初科二  中科一",
            "category": "資料處理與分析\n\nNLP任務",
            "principle": "透明與可解釋",
            "title": "文本分類",
            "eng_name": "Text Classification",
            "eng_abbr": "-",
            "def": "將非結構化文字數據分配到一個或多個特定類別的過程 。",
            "key_goal": "自動化標籤歸納",
            "key_principle": "利用特徵提取技術將文本映射至預定義的類別。",
            "key_purpose": "實現資訊過濾、情緒分析與自動化派案。",
            "common_apps": "電商平台的產品評論自動分類（正面/負面/中性）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 電商平台的產品評論自動分類（正面/負面/中性）。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "生成式AI風險\n\nAI 導入規劃",
        "topics": [
          {
            "id": "469",
            "subject": "初科二  中科一",
            "category": "生成式AI風險\n\nAI 導入規劃",
            "principle": "透明與可解釋",
            "title": "模型幻覺",
            "eng_name": "Model Hallucination",
            "eng_abbr": "-",
            "def": "生成式模型產出看似合理但實際上不正確或不存在之資訊的現象 。",
            "key_goal": "提升輸出事實準確率",
            "key_principle": "模型在缺乏資訊或機率預測誤導下產出虛假事實。",
            "key_purpose": "識別 AI 輸出的潛在風險，建立人工複核機制。",
            "common_apps": "律師使用 AI 寫訴狀時，AI 編造了不存在的法律判例。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 律師使用 AI 寫訴狀時，AI 編造了不存在的法律判例。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "生成式 AI 應用\n\n代理人架構",
        "topics": [
          {
            "id": "613",
            "subject": "初科二  中科一",
            "category": "生成式 AI 應用\n\n代理人架構",
            "principle": "永續發展與福祉",
            "title": "客戶端代理人",
            "eng_name": "Client Agent",
            "eng_abbr": "-",
            "def": "代表使用者執行任務、與伺服器端代理人通訊並處理在地化資訊的輕量化 Agent。",
            "key_goal": "提升終端使用者與 AI 系統的互動效率。",
            "key_principle": "部署於使用者終端（如瀏覽器、App），負責接收輸入、初步過濾並將請求導向後端。",
            "key_purpose": "減少延遲，提供個人化的即時交互介面與初步數據隱私過濾。",
            "common_apps": "個人助理 App 在本機端先行判斷語意，再決定是否呼叫雲端大型模型。\n\n\n不同公司的 AI 助理自動對接排程\n\n供應鏈中多個採購代理的自動議價",
            "scenarios": {
              "weather": "災害監測：終端使用者透過手機 APP 與防災 AI 即時互動",
              "agri": "智慧耕作：農民透過手機 APP 與農業 AI 助手即時互動",
              "traffic": "交通管理：駕駛人透過車載系統與交通 AI 助手即時互動",
              "industry": "製程優化：產線人員透過平板與產線 AI 助手即時互動",
              "finance": "智慧醫療：病患透過 APP 與健康管理 AI 助手即時互動",
              "life": "智慧生活：使用者透過智慧音箱與 AI 助手搜尋資訊下單",
              "fire": "公共安全：民眾透過 APP 與公共安全 AI 即時回報通報"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在提升終端使用者與 AI 系統的互動效率下，傳統方案難以處理變數過多的情境，而客戶端代理人則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "AI 治理與規範\n\n模型說明性",
        "topics": [
          {
            "id": "615",
            "subject": "初科二  中科一",
            "category": "AI 治理與規範\n\n模型說明性",
            "principle": "透明與可解釋",
            "title": "代理人名片",
            "eng_name": "Agent Card",
            "eng_abbr": "-",
            "def": "類似 Model Card，專為 Agent 設計的技術說明文件，揭露其功能、版本與合規資訊。",
            "key_goal": "建立 AI 代理人的透明度與信任基礎。",
            "key_principle": "結構化文檔化技術，記錄 Agent 的訓練資料、能力邊界、限制與道德準則。",
            "key_purpose": "讓使用者或管理員快速了解 Agent 的可信度與適用範圍，符合審計需求。",
            "common_apps": "企業內部導入 AI 秘書時，透過 Agent Card 確認其是否有權限讀取薪資個資。\n\n\n雲端 AI 程式碼生成伺服器\n\n部署在遠端工廠的自動化維修代理",
            "scenarios": {
              "weather": "災害監測：透過 Agent Card 確認防災 AI 的能力範圍與限制",
              "agri": "智慧耕作：透過 Agent Card 確認農業 AI 助手的功能說明",
              "traffic": "交通管理：透過 Agent Card 確認交通 AI 的權限與資料存取範圍",
              "industry": "製程優化：透過 Agent Card 確認產線 AI 的決策邊界與責任歸屬",
              "finance": "智慧醫療：透過 Agent Card 確認醫療 AI 的認證與適用範圍",
              "life": "智慧生活：透過 Agent Card 確認 AI 秘書的權限與隱私政策",
              "fire": "公共安全：透過 Agent Card 確認安防 AI 的監控範圍與合規性"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 透明度與信任建立等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "大型語言模型\n\n開源生態",
        "topics": [
          {
            "id": "617",
            "subject": "初科二  中科一",
            "category": "大型語言模型\n\n開源生態",
            "principle": "永續發展與福祉",
            "title": "大語言模型後設 AI",
            "eng_name": "Large Language Model Meta AI",
            "eng_abbr": "Llama",
            "def": "Meta 公司開發的一系列開源大語言模型，是目前學術與產業應用最廣的基礎模型。",
            "key_goal": "提供高效能的開源基礎模型。",
            "key_principle": "基於 Transformer 架構，透過海量數據預訓練而成，具備強大的文字生成與理解力。",
            "key_purpose": "作為企業開發自有模型、進行微調或 RAG 應用的核心引擎。",
            "common_apps": "台灣國科會以 Llama 為基礎開發 TAIDE 模型，確保繁體中文在地化應用。",
            "scenarios": {
              "weather": "災害監測：使用開源 LLaMA 模型建構本地化防災知識庫",
              "agri": "智慧耕作：使用開源 LLaMA 模型建構農業專業知識庫",
              "traffic": "交通管理：使用開源 LLaMA 模型建構交通法規知識庫",
              "industry": "製程優化：使用開源 LLaMA 模型建構製程最佳化知識庫",
              "finance": "智慧醫療：使用開源 LLaMA 模型建構醫學文獻知識庫",
              "life": "智慧生活：使用開源 LLaMA 模型建構生活百科知識庫",
              "fire": "公共安全：使用開源 LLaMA 模型建構法律法規知識庫"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在開源基礎模型應用等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "AI 技術供應商",
        "topics": [
          {
            "id": "618",
            "subject": "初科二  中科一",
            "category": "AI 技術供應商",
            "principle": "安全與可靠",
            "title": "後設人工智慧",
            "eng_name": "Meta Artificial Intelligence",
            "eng_abbr": "Meta AI",
            "def": "Meta 公司的 AI 研究部門及面向消費者的 AI 品牌，提供對話式 AI 助手服務。",
            "key_goal": "整合 AI 技術至大眾社交生態系。",
            "key_principle": "結合 Llama 模型與實時搜索技術，提供跨平台的生成式 AI 服務。",
            "key_purpose": "提供一般用戶日常生活、工作輔助或創意生成。",
            "common_apps": "在 WhatsApp 或 Instagram 中直接透過 AI 助手搜尋資訊或生成圖像。",
            "scenarios": {
              "weather": "災害監測：Meta AI 整合社群媒體即時災情回報分析",
              "agri": "智慧耕作：Meta AI 農業社群知識分享與自動翻譯",
              "traffic": "交通管理：Meta AI 社群平台即時路況回報整合",
              "industry": "製程優化：Meta AI 企業內部知識管理與協作平台",
              "finance": "智慧醫療：Meta AI 健康社群資訊篩選與查核",
              "life": "智慧生活：Meta AI 社交平台智慧推薦與內容生成",
              "fire": "公共安全：Meta AI 社群平台不實訊息偵測與標記"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在社交生態系 AI 整合等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      }
    ]
  },
  {
    "title": "中科一",
    "sub_units": [
      {
        "title": "AI 相關技術",
        "topics": [
          {
            "id": "10",
            "subject": "中科一",
            "category": "AI 相關技術",
            "principle": "永續發展與福祉",
            "title": "多模態人工智慧",
            "eng_name": "Multimodal AI",
            "eng_abbr": "-",
            "def": "能同時處理並整合文字、圖像、音訊等多種感官數據的 AI。",
            "key_goal": "跨媒介資料融合",
            "key_principle": "影像、文字、語音聯結",
            "key_purpose": "提升環境感知能力",
            "common_apps": "自動駕駛融合雷達與視覺、影片內容自動標註 。",
            "scenarios": {
              "weather": "氣象預報：自駕系統結合即時路面積水/能見度警示",
              "agri": "智慧耕作：農場自駕拖拉機自動施肥/犁田",
              "traffic": "自駕與輔助：自駕公車測試、ADAS駕駛輔助、疲勞駕駛偵測（核心場景）",
              "industry": "製程優化：工廠內自駕AGV物料搬運",
              "finance": "半導體：自駕晶片研發驗證場景",
              "life": "智慧生活：配送無人車/電動輪椅自駕輔助",
              "fire": "智慧消防：救災自駕機器人進入火場偵測"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 自動駕駛融合雷達與視覺、影片內容自動標註 。 下，傳統方案難以處理變數過多的情境，而 多模態人工智慧 則能透過多維數據提取深層規律。"
          },
          {
            "id": "108",
            "subject": "中科一",
            "category": "AI 相關技術",
            "principle": "透明與可解釋",
            "title": "知識圖譜",
            "eng_name": "Knowledge Graph",
            "eng_abbr": "-",
            "def": "以圖形結構表達知識，連結不同實體及其間的複雜關係。",
            "key_goal": "建構語意網絡",
            "key_principle": "實體-關係-實體 (Triplet)",
            "key_purpose": "複雜查詢與推理",
            "common_apps": "智慧搜尋引擎（如 Google 知識面板）、藥物關聯分析。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 智慧搜尋引擎（如 Google 知識面板）、藥物關聯分析。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "590",
            "subject": "中科一",
            "category": "AI 相關技術",
            "principle": "安全性與韌性\n\n可解釋性",
            "title": "物理人工智慧",
            "eng_name": "Physical Artificial Intelligence",
            "eng_abbr": "Physical AI",
            "def": "探討 AI 如何在實體世界中感知、學習並執行物理任務的技術領域。",
            "key_goal": "賦予機器實體感知與環境互動能力",
            "key_principle": "結合感測器、致動器與物理定律模型，使 AI 具備「具身化」能力。",
            "key_purpose": "機器人控制、精密工業、自動駕駛等需與物理環境互動之場景。",
            "common_apps": "智慧工廠協作機器人\n\n自駕車避障路徑規劃",
            "scenarios": {
              "weather": "災害監測：救災機器人感知倒塌建物結構與受困者位置",
              "agri": "智慧耕作：農業機器人自主採摘水果感知成熟度與力道",
              "traffic": "自駕與輔助：自駕車感知路面坑洞與障礙物進行閃避",
              "industry": "製程優化：工廠協作機器人感知工件位置與夾取力道",
              "finance": "智慧醫療：手術機器人感知組織硬度精準控制切割深度",
              "life": "智慧生活：居家照護機器人感知老人跌倒並自動攙扶",
              "fire": "智慧消防：消防機器人感知火場溫度與結構安全性"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在智慧工廠協作機器人、自駕車避障路徑規劃下，傳統方案難以處理變數過多的情境，而物理人工智慧則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "治理實務",
        "topics": [
          {
            "id": "18",
            "subject": "中科一",
            "category": "治理實務",
            "principle": "永續發展與福祉",
            "title": "監理沙盒",
            "eng_name": "Regulatory Sandbox",
            "eng_abbr": "-",
            "def": "在可控環境下允許業者測試創新技術，暫時豁免特定法規。",
            "key_goal": "促進創新與合規",
            "key_principle": "安全測試環境",
            "key_purpose": "縮短產品上市時間",
            "common_apps": "金融科技 AI 應用初步測試。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 金融科技 AI 應用初步測試。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "深度學習",
        "topics": [
          {
            "id": "71",
            "subject": "中科一",
            "category": "深度學習",
            "principle": "透明與可解釋",
            "title": "池化層",
            "eng_name": "Pooling Layer",
            "eng_abbr": "-",
            "def": "減少數據空間維度，保留重要特徵並防止過度擬合。",
            "key_goal": "降低維度/特徵壓縮",
            "key_principle": "下採樣 (Sub-sampling)",
            "key_purpose": "減少計算量",
            "common_apps": "提取圖像中最強烈的信號 (Max Pooling)。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 提取圖像中最強烈的信號 (Max Pooling)。 下，傳統方案難以處理變數過多的情境，而 池化層 則能透過多維數據提取深層規律。"
          },
          {
            "id": "72",
            "subject": "中科一",
            "category": "深度學習",
            "principle": "透明與可解釋",
            "title": "遞歸神經網路",
            "eng_name": "Recurrent Neural Network",
            "eng_abbr": "RNN",
            "def": "具備循環結構，能處理具備時間序列或上下文關係的資料。",
            "key_goal": "處理序列資訊",
            "key_principle": "時間遞歸鏈結",
            "key_purpose": "序列數據預測",
            "common_apps": "自然語言處理、語音辨識。",
            "scenarios": {
              "weather": "氣象預報：強降雨量時序預測；ConvLSTM用於雷達回波短期降雨預報",
              "agri": "智慧耕作：作物生長週期預測；精準養殖：水質時間序列異常偵測",
              "traffic": "智慧交通：車流量小時/日週期預測；智慧物流：配送時程預估",
              "industry": "預測性維護：機台振動/溫度時序感測，預測故障",
              "finance": "金融科技：股票/匯率時序預測；智慧醫療：生理訊號（ECG/腦波）分析",
              "life": "智慧零售：商品銷售時序預測（庫存自動補貨）",
              "fire": "智慧消防：火災蔓延時序預測；設備溫度異常趨勢告警"
            },
            "detail_explain": "正確答案是 (A)。梯度消失代表後面的誤差傳不回前面，所以前面學不到東西（遺忘）。LSTM 的「遺忘門」決定哪些資訊要丟棄、哪些要流向未來，這才是解決長程依賴的關鍵。"
          },
          {
            "id": "74",
            "subject": "中科一",
            "category": "深度學習",
            "principle": "透明與可解釋",
            "title": "長短期記憶網路",
            "eng_name": "Long Short-Term Memory",
            "eng_abbr": "LSTM",
            "def": "透過遺忘門、輸入門、輸出門解決 RNN 梯度消失與長期記憶問題。",
            "key_goal": "捕捉長程依賴",
            "key_principle": "門控機制 (Gate)",
            "key_purpose": "長序列分析",
            "common_apps": "文本生成、長週期股市預測。",
            "scenarios": {
              "weather": "氣象預報：強降雨量時序預測；ConvLSTM用於雷達回波短期降雨預報",
              "agri": "智慧耕作：作物生長週期預測；精準養殖：水質時間序列異常偵測",
              "traffic": "智慧交通：車流量小時/日週期預測；智慧物流：配送時程預估",
              "industry": "預測性維護：機台振動/溫度時序感測，預測故障",
              "finance": "金融科技：股票/匯率時序預測；智慧醫療：生理訊號（ECG/腦波）分析",
              "life": "智慧零售：商品銷售時序預測（庫存自動補貨）",
              "fire": "智慧消防：火災蔓延時序預測；設備溫度異常趨勢告警"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 文本生成、長週期股市預測。 下，傳統方案難以處理變數過多的情境，而 長短期記憶網路 則能透過多維數據提取深層規律。"
          },
          {
            "id": "77",
            "subject": "中科一",
            "category": "深度學習",
            "principle": "透明與可解釋",
            "title": "編碼器-解碼器",
            "eng_name": "Encoder-Decoder",
            "eng_abbr": "-",
            "def": "一端將輸入壓縮為向量，另一端根據向量還原生成輸出。",
            "key_goal": "序列到序列轉換",
            "key_principle": "特徵壓縮與還原",
            "key_purpose": "翻譯與摘要",
            "common_apps": "機器翻譯、圖像標註生成。",
            "scenarios": {
              "weather": "環境監控：跨國氣象報告即時翻譯",
              "agri": "農業技術：國際農業研究文獻自動翻譯",
              "traffic": "智慧物流：跨國運輸文件多語翻譯",
              "industry": "製程優化：國際設備維修手冊即時翻譯",
              "finance": "智慧醫療：國際醫學文獻快速翻譯輔助研究",
              "life": "智能客服：多語言24H客服機器人翻譯支援",
              "fire": "公共安全：外籍人士緊急求救語言即時翻譯"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 機器翻譯、圖像標註生成。 下，傳統方案難以處理變數過多的情境，而 編碼器-解碼器 則能透過多維數據提取深層規律。"
          },
          {
            "id": "139",
            "subject": "中科一",
            "category": "深度學習",
            "principle": "永續發展與福祉",
            "title": "參數",
            "eng_name": "Parameters",
            "eng_abbr": "-",
            "def": "模型在訓練過程中學習到的數值（如 7B 代表 70 億參數），決定模型能力。",
            "key_goal": "衡量模型規模",
            "key_principle": "模型內部的權重值",
            "key_purpose": "評估資源消耗",
            "common_apps": "比較不同尺寸模型（Llama-7B vs 70B）的效能。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 比較不同尺寸模型（Llama-7B vs 70B）的效能。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "電腦視覺",
        "topics": [
          {
            "id": "80",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展與福祉",
            "title": "物件偵測",
            "eng_name": "Object Detection",
            "eng_abbr": "-",
            "def": "識別影像中的物體位置並標示出類別名稱（如「車：0.9」）。",
            "key_goal": "定位與分類",
            "key_principle": "邊界框預測",
            "key_purpose": "環境感知",
            "common_apps": "自動駕駛障礙物識別、安防監控。",
            "scenarios": {
              "weather": "災害監測：無人機掃描洪水/土石流邊界；環境監控：衛星圖自動圈出受災範圍",
              "agri": "智慧耕作：無人機識別農田病蟲害感染區；精準養殖：魚塭漂浮異物即時偵測",
              "traffic": "智慧交通：違規停車自動拍照舉牌；智慧物流：AGV機器人障礙物即時閃避",
              "industry": "品質檢測：AOI光學系統標記瑕疵座標；預測性維護：零件磨損位置辨識",
              "finance": "智慧醫療：CT/MRI影像腫瘤候選框定輔助；半導體：晶圓表面缺陷自動標記",
              "life": "智慧零售：無人商店商品掃描自動結帳；貨架缺貨狀態即時偵測",
              "fire": "智慧消防：熱像儀畫面定位受困人員；公共安全：監視器異常聚集告警"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動駕駛障礙物識別、安防監控。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "81",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展與福祉",
            "title": "語義分割",
            "eng_name": "Semantic Segmentation",
            "eng_abbr": "-",
            "def": "將影像中每個像素分配到特定類別，但不區分同類別的不同個體。",
            "key_goal": "像素級類別標記",
            "key_principle": "逐像素分類",
            "key_purpose": "精確環境感知",
            "common_apps": "自動駕駛道路邊界識別、衛星影像地物分類。",
            "scenarios": {
              "weather": "災害監測：衛星圖像素級洪水範圍標定；PM2.5高污染區域熱點圖",
              "agri": "智慧耕作：農田土地利用類型分割（作物/雜草/裸地）；病害感染面積測量",
              "traffic": "自駕與輔助：道路/人行道/標線語義標記供ADAS感知",
              "industry": "品質檢測：PCB電路板佈線缺陷範圍精確分割",
              "finance": "智慧醫療：腫瘤/器官邊界勾勒輔助手術規劃",
              "life": "智慧生活：AR虛擬試穿人體輪廓分割",
              "fire": "智慧消防：火場煙霧/火焰像素範圍分割；逃生路徑辨識"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動駕駛道路邊界識別、衛星影像地物分類。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "82",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展與福祉",
            "title": "實例分割",
            "eng_name": "Instance Segmentation",
            "eng_abbr": "-",
            "def": "不僅標記類別，還能將同一類別中的不同個體（如兩個人）區分開來。",
            "key_goal": "區分同類個體",
            "key_principle": "偵測 + 分割結合",
            "key_purpose": "複雜場景解析",
            "common_apps": "醫學影像中多個腫瘤的獨立計數與量測。",
            "scenarios": {
              "weather": "災害監測：無人機掃描洪水/土石流邊界；環境監控：衛星圖自動圈出受災範圍",
              "agri": "智慧耕作：無人機識別農田病蟲害感染區；精準養殖：魚塭漂浮異物即時偵測",
              "traffic": "智慧交通：違規停車自動拍照舉牌；智慧物流：AGV機器人障礙物即時閃避",
              "industry": "品質檢測：AOI光學系統標記瑕疵座標；預測性維護：零件磨損位置辨識",
              "finance": "智慧醫療：CT/MRI影像腫瘤候選框定輔助；半導體：晶圓表面缺陷自動標記",
              "life": "智慧零售：無人商店商品掃描自動結帳；貨架缺貨狀態即時偵測",
              "fire": "智慧消防：熱像儀畫面定位受困人員；公共安全：監視器異常聚集告警"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫學影像中多個腫瘤的獨立計數與量測。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "84",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展與福祉",
            "title": "光學字元辨識",
            "eng_name": "Optical Character Recognition",
            "eng_abbr": "OCR",
            "def": "將影像中的手寫或列印文字轉換為機器編碼文字的技術。",
            "key_goal": "文字數位化",
            "key_principle": "圖像預處理與字元匹配",
            "key_purpose": "數位文件轉檔",
            "common_apps": "銀行自動辨識支票、自動辨識車牌。",
            "scenarios": {
              "weather": "環境監控：氣象站儀表板數字自動讀取數位化",
              "agri": "精準養殖：水質感測器讀值自動記錄",
              "traffic": "智慧交通：車牌自動辨識（停車計費/違規舉牌）；物流：包裹條碼讀取",
              "industry": "品質檢測：產品序號/批號自動讀取紀錄",
              "finance": "金融科技：票據/合約文字自動擷取；智慧醫療：病歷表格數位化",
              "life": "智慧零售：電子發票/收據文字辨識",
              "fire": "公共安全：車牌辨識輔助警方追蹤"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 銀行自動辨識支票、自動辨識車牌。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "244",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展與福祉",
            "title": "池化層",
            "eng_name": "Pooling",
            "eng_abbr": "-",
            "def": "在 CNN 中縮小特徵圖尺寸的層，能減少參數並防止過擬合。",
            "key_goal": "降維與特徵不變性",
            "key_principle": "空間下採樣 (Max/Avg)",
            "key_purpose": "提升運算效率",
            "common_apps": "影像辨識中提取最顯著的邊緣特徵。",
            "scenarios": {
              "weather": "環境監控：感測器端即時PM2.5分析（不上傳雲端）；邊緣站即時地震預警運算",
              "agri": "智慧耕作：田埂感測器本地即時土壤分析決策；畜牧：牲畜項圈端健康監測",
              "traffic": "自駕與輔助：車內ADAS即時障礙物偵測（低延遲）；路側單元即時車流分析",
              "industry": "品質檢測：產線攝影機端即時瑕疵判斷；預測性維護：感測器端即時異常偵測",
              "finance": "智慧醫療：手術室設備端即時生命徵象分析；穿戴裝置端健康偵測",
              "life": "智慧生活：智慧家電本地語音處理（保護隱私）；收銀端即時商品識別",
              "fire": "智慧消防：煙霧感測器端即時火災判斷（斷網也能動）；監控攝影機端人臉比對"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 影像辨識中提取最顯著的邊緣特徵。 下，傳統方案難以處理變數過多的情境，而 池化層 則能透過多維數據提取深層規律。"
          },
          {
            "id": "473",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "透明可解釋",
            "title": "手動特徵提取",
            "eng_name": "Handcrafted Features",
            "eng_abbr": "-",
            "def": "研發人員根據領域知識設計的特徵（如顏色、形狀）。",
            "key_goal": "物理特徵提取",
            "key_principle": "傳統演算法設計",
            "key_purpose": "提供明確物理意義的特徵。",
            "common_apps": "工業零件尺寸量測。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 工業零件尺寸量測。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "476",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "安全與問責",
            "title": "區域卷積網路",
            "eng_name": "Region-based Convolutional Neural Network",
            "eng_abbr": "RCNN",
            "def": "透過選取候選區域後再利用 CNN 進行特徵提取與分類。",
            "key_goal": "物體偵測",
            "key_principle": "區域建議與分類",
            "key_purpose": "識別影像中物體位置與類別。",
            "common_apps": "交通監控車輛偵測。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 交通監控車輛偵測。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "477",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展",
            "title": "視覺變換器",
            "eng_name": "Vision Transformer",
            "eng_abbr": "ViT",
            "def": "將影像切成 Patch 並套用 Transformer 架構處理。",
            "key_goal": "捕捉長程相關性",
            "key_principle": "自注意力機制",
            "key_purpose": "大規模影像分類與預訓練。",
            "common_apps": "高解析衛星影像分析。",
            "scenarios": {
              "weather": "氣象預報：衛星雲型分類（颱風眼/積雨雲）；空污：AQI等級影像分級",
              "agri": "智慧耕作：作物品種/生長階段自動分類；精準養殖：魚種健康狀態分級",
              "traffic": "智慧物流：快遞包裹損壞等級分類；交通違規類型自動歸類",
              "industry": "品質檢測：瑕疵類型（裂紋/刮傷/色差）分類統計",
              "finance": "智慧醫療：皮膚病變/眼底影像疾病分類；X光異常篩選",
              "life": "智慧零售：商品類別自動辨識上架；人臉年齡層分類個人化服務",
              "fire": "公共安全：監視器可疑物品類型辨識；消防：燃料類型判斷"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 高解析衛星影像分析。 下，傳統方案難以處理變數過多的情境，而 視覺變換器 則能透過多維數據提取深層規律。"
          },
          {
            "id": "479",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "隱私保護",
            "title": "影像處理",
            "eng_name": "Image Processing",
            "eng_abbr": "-",
            "def": "對影像進行去噪、增強、縮放等基礎轉換處理。",
            "key_goal": "提升影像品質",
            "key_principle": "信號處理運算法",
            "key_purpose": "提升後續 AI 辨識的準確率。",
            "common_apps": "醫學影像對比度增強。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫學影像對比度增強。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "480",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "透明可解釋",
            "title": "模式識別",
            "eng_name": "Pattern Recognition",
            "eng_abbr": "-",
            "def": "研究如何讓機器自動發現數據中規律並進行分類。",
            "key_goal": "自動化特徵匹配",
            "key_principle": "統計或結構化分類",
            "key_purpose": "將數據歸類為特定模式。",
            "common_apps": "手寫數字辨識系統。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 手寫數字辨識系統。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "484",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "透明可解釋",
            "title": "邊緣檢測算子",
            "eng_name": "Canny Edge Detection",
            "eng_abbr": "Canny",
            "def": "一種經典的多階邊緣檢測演算法。",
            "key_goal": "提取物理輪廓",
            "key_principle": "梯度運算與過濾",
            "key_purpose": "提取物體邊界特徵。",
            "common_apps": "自動駕駛車道線識別。",
            "scenarios": {
              "weather": "環境監控：感測器端即時PM2.5分析（不上傳雲端）；邊緣站即時地震預警運算",
              "agri": "智慧耕作：田埂感測器本地即時土壤分析決策；畜牧：牲畜項圈端健康監測",
              "traffic": "自駕與輔助：車內ADAS即時障礙物偵測（低延遲）；路側單元即時車流分析",
              "industry": "品質檢測：產線攝影機端即時瑕疵判斷；預測性維護：感測器端即時異常偵測",
              "finance": "智慧醫療：手術室設備端即時生命徵象分析；穿戴裝置端健康偵測",
              "life": "智慧生活：智慧家電本地語音處理（保護隱私）；收銀端即時商品識別",
              "fire": "智慧消防：煙霧感測器端即時火災判斷（斷網也能動）；監控攝影機端人臉比對"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動駕駛車道線識別。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "485",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "透明可解釋",
            "title": "尺度不變特徵轉換",
            "eng_name": "Scale-Invariant Feature Transform",
            "eng_abbr": "SIFT",
            "def": "具備旋轉、尺度不變性的關鍵點描述演算法。",
            "key_goal": "局部特徵描述",
            "key_principle": "尺度空間極值檢測",
            "key_purpose": "影像拼接與物體辨識。",
            "common_apps": "全景照片自動對齊。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 全景照片自動對齊。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "486",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "透明可解釋",
            "title": "加速穩健特徵",
            "eng_name": "Speeded Up Robust Features",
            "eng_abbr": "SURF",
            "def": "SIFT 的加速版本，運算更具效率。",
            "key_goal": "快速特徵提取",
            "key_principle": "積分圖像與海森矩陣",
            "key_purpose": "即時物體追蹤。",
            "common_apps": "行動裝置擴增實境 (AR)。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 行動裝置擴增實境 (AR)。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "487",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "透明可解釋",
            "title": "定向快速旋轉特徵",
            "eng_name": "Oriented FAST and Rotated BRIEF",
            "eng_abbr": "ORB",
            "def": "SIFT/SURF 的開源高效替代方案。",
            "key_goal": "高速特徵提取",
            "key_principle": "FAST+BRIEF 優化",
            "key_purpose": "機器人定位與導航。",
            "common_apps": "無人機即時環境建圖。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 無人機即時環境建圖。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "489",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展",
            "title": "卷積神經網路",
            "eng_name": "Visual Geometry Group Network",
            "eng_abbr": "VGGNet",
            "def": "由牛津大學研發，證明深度能提升識別力。",
            "key_goal": "深層特徵學習",
            "key_principle": "堆疊 3x3 小卷積核",
            "key_purpose": "通用影像特徵提取器。",
            "common_apps": "圖像風格遷移應用。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。考官在考「底層邏輯」。權重共享讓同個卷積核在整張圖移動，這不僅大幅減少參數，更讓相同特徵不論出現在圖中何處都能被識別（初步平移不變性）。(B) 的非線性主要靠 ReLU，而 (C) 是 ResNet 跳躍連接主要解決的問題。"
          },
          {
            "id": "490",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展",
            "title": "谷歌網路",
            "eng_name": "GoogLeNet (Inception)",
            "eng_abbr": "-",
            "def": "透過並列不同大小卷積核減少參數並提升效能。",
            "key_goal": "優化算力效率",
            "key_principle": "Inception 模塊",
            "key_purpose": "移動端影像辨識。",
            "common_apps": "手機端物體偵測。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 手機端物體偵測。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "491",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展",
            "title": "殘差網路",
            "eng_name": "Residual Network",
            "eng_abbr": "ResNet",
            "def": "引入殘差學習，使訓練超深層網路變為可能。",
            "key_goal": "解決梯度消失",
            "key_principle": "跳躍連接 (Skip)",
            "key_purpose": "各類視覺任務的骨幹模型。",
            "common_apps": "複雜場景臉部辨識。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 複雜場景臉部辨識。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "492",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展",
            "title": "密集連接網路",
            "eng_name": "Densely Connected Network",
            "eng_abbr": "DenseNet",
            "def": "每層皆與前續所有層連接，極大化利用特徵。",
            "key_goal": "特徵重用",
            "key_principle": "密集連接結構",
            "key_purpose": "減少參數量的深度訓練。",
            "common_apps": "醫學影像精細病灶分析。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫學影像精細病灶分析。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "493",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "安全與問責",
            "title": "更快區域卷積網路",
            "eng_name": "Faster R-CNN",
            "eng_abbr": "-",
            "def": "將區域建議整合進網路中，大幅提升偵測速度。",
            "key_goal": "即時物體偵測",
            "key_principle": "區域建議網路 (RPN)",
            "key_purpose": "高精度物體檢測。",
            "common_apps": "生產線缺陷即時監控。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 生產線缺陷即時監控。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "494",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "安全與問責",
            "title": "全卷積網路",
            "eng_name": "Fully Convolutional Network",
            "eng_abbr": "FCN",
            "def": "捨棄全連接層，實現端對端的影像語義分割。",
            "key_goal": "像素級分類",
            "key_principle": "卷積轉置 (Up-sampling)",
            "key_purpose": "影像中精確邊界劃分。",
            "common_apps": "衛星圖資土地用途分析。",
            "scenarios": {
              "weather": "災害監測：衛星圖像素級洪水範圍標定；PM2.5高污染區域熱點圖",
              "agri": "智慧耕作：農田土地利用類型分割（作物/雜草/裸地）；病害感染面積測量",
              "traffic": "自駕與輔助：道路/人行道/標線語義標記供ADAS感知",
              "industry": "品質檢測：PCB電路板佈線缺陷範圍精確分割",
              "finance": "智慧醫療：腫瘤/器官邊界勾勒輔助手術規劃",
              "life": "智慧生活：AR虛擬試穿人體輪廓分割",
              "fire": "智慧消防：火場煙霧/火焰像素範圍分割；逃生路徑辨識"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 衛星圖資土地用途分析。 下，傳統方案難以處理變數過多的情境，而 全卷積網路 則能透過多維數據提取深層規律。"
          },
          {
            "id": "495",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "安全與問責",
            "title": "U型網路",
            "eng_name": "U-Net",
            "eng_abbr": "-",
            "def": "透過 Skip Connection 保留空間資訊，適合小樣本。",
            "key_goal": "醫學影像分割",
            "key_principle": "對稱編碼與解碼結構",
            "key_purpose": "醫學影像病灶分割。",
            "common_apps": "腫瘤輪廓自動描繪。",
            "scenarios": {
              "weather": "災害監測：衛星圖像素級洪水範圍標定；PM2.5高污染區域熱點圖",
              "agri": "智慧耕作：農田土地利用類型分割（作物/雜草/裸地）；病害感染面積測量",
              "traffic": "自駕與輔助：道路/人行道/標線語義標記供ADAS感知",
              "industry": "品質檢測：PCB電路板佈線缺陷範圍精確分割",
              "finance": "智慧醫療：腫瘤/器官邊界勾勒輔助手術規劃",
              "life": "智慧生活：AR虛擬試穿人體輪廓分割",
              "fire": "智慧消防：火場煙霧/火焰像素範圍分割；逃生路徑辨識"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 腫瘤輪廓自動描繪。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "496",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "隱私保護",
            "title": "臉部辨識網路",
            "eng_name": "FaceNet",
            "eng_abbr": "-",
            "def": "將人臉映射至歐式空間，直接計算臉部相似度。",
            "key_goal": "臉部特徵對齊",
            "key_principle": "三元組損失 (Triplet)",
            "key_purpose": "人臉身份驗證與識別。",
            "common_apps": "機場快速通關系統。",
            "scenarios": {
              "weather": "",
              "agri": "畜牧管理：牛隻個體臉部識別追蹤（乳牛個體健康管理）",
              "traffic": "自駕與輔助：疲勞駕駛臉部特徵偵測（眼皮閉合角度）",
              "industry": "製程優化：廠區人員身份核驗，防止未授權進入",
              "finance": "金融科技：ATM/網銀人臉身份核實；健康管家：情緒健康狀態辨識",
              "life": "智慧零售：販賣機顧客年齡/性別分析精準推薦",
              "fire": "公共安全：協尋失蹤/通緝人員特徵比對；刑事案件追查"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 機場快速通關系統。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "497",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "安全與問責",
            "title": "萬物分割模型",
            "eng_name": "Segment Anything Model",
            "eng_abbr": "SAM",
            "def": "Meta 研發的通用分割模型，不需針對新目標微調。",
            "key_goal": "通用分割能力",
            "key_principle": "提示工程與遮罩生成",
            "key_purpose": "零樣本影像分割。",
            "common_apps": "影視特效自動摳圖。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 影視特效自動摳圖。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "499",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "透明可解釋",
            "title": "影像標註",
            "eng_name": "Image Annotation",
            "eng_abbr": "-",
            "def": "為影像中的物體加上框、類別或輪廓的過程。",
            "key_goal": "建立訓練標籤",
            "key_principle": "人工或半自動標記",
            "key_purpose": "準備監督式學習所需數據。",
            "common_apps": "自駕車訓練數據集製作。",
            "scenarios": {
              "weather": "氣象預報：有標記歷史氣象數據訓練降雨預測模型",
              "agri": "智慧耕作：標記病害影像訓練的辨識模型；畜牧：有標記生理數據訓練健康預測",
              "traffic": "智慧交通：標記交通違規影像訓練偵測模型",
              "industry": "品質檢測：標記瑕疵影像訓練AOI分類器",
              "finance": "金融科技：標記詐欺交易訓練風險模型；智慧醫療：標記病理影像訓練診斷模型",
              "life": "智慧零售：標記商品影像訓練識別模型；客服：意圖分類模型訓練",
              "fire": "智慧消防：標記火焰/煙霧影像訓練偵測模型"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自駕車訓練數據集製作。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "502",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "問責性",
            "title": "影像標註工具",
            "eng_name": "LabelImg",
            "eng_abbr": "-",
            "def": "專門用於繪製物體偵測標籤框的開源工具。",
            "key_goal": "效率工具化",
            "key_principle": "圖形介面操作",
            "key_purpose": "製作 VOC/YOLO 格式數據。",
            "common_apps": "瑕疵檢測系統初期標註。",
            "scenarios": {
              "weather": "災害監測：無人機掃描洪水/土石流邊界；環境監控：衛星圖自動圈出受災範圍",
              "agri": "智慧耕作：無人機識別農田病蟲害感染區；精準養殖：魚塭漂浮異物即時偵測",
              "traffic": "智慧交通：違規停車自動拍照舉牌；智慧物流：AGV機器人障礙物即時閃避",
              "industry": "品質檢測：AOI光學系統標記瑕疵座標；預測性維護：零件磨損位置辨識",
              "finance": "智慧醫療：CT/MRI影像腫瘤候選框定輔助；半導體：晶圓表面缺陷自動標記",
              "life": "智慧零售：無人商店商品掃描自動結帳；貨架缺貨狀態即時偵測",
              "fire": "智慧消防：熱像儀畫面定位受困人員；公共安全：監視器異常聚集告警"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 瑕疵檢測系統初期標註。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "527",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "透明可解釋",
            "title": "色調",
            "eng_name": "Hue",
            "eng_abbr": "-",
            "def": "描述色彩的基本屬性（如紅、綠、藍），在圓柱模型中以角度位置定義。",
            "key_goal": "區分顏色類別",
            "key_principle": "角度表示 (0-360°)",
            "key_purpose": "鎖定特定顏色範圍進行影像遮罩 (Masking)。",
            "common_apps": "農業 AI 辨識果實是否成熟（由綠轉紅）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 農業 AI 辨識果實是否成熟（由綠轉紅）。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "541",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展",
            "title": "LeNet 網路",
            "eng_name": "LeNet",
            "eng_abbr": "-",
            "def": "深度學習始祖模型，由 Yann LeCun 提出，專為字元辨識設計。",
            "key_goal": "基礎視覺模型",
            "key_principle": "卷積與子採樣交替",
            "key_purpose": "學習卷積神經網路的基礎結構。",
            "common_apps": "銀行支票上的數字辨識。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 銀行支票上的數字辨識。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "542",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展",
            "title": "AlexNet 網路",
            "eng_name": "AlexNet",
            "eng_abbr": "-",
            "def": "2012 年 ImageNet 大賽冠軍，證明深度網路的優越性。",
            "key_goal": "開啟深度學習時代",
            "key_principle": "GPU 加速與 Dropout",
            "key_purpose": "大規模影像分類。",
            "common_apps": "早期影像辨識系統架構。",
            "scenarios": {
              "weather": "氣象預報：衛星雲型分類（颱風眼/積雨雲）；空污：AQI等級影像分級",
              "agri": "智慧耕作：作物品種/生長階段自動分類；精準養殖：魚種健康狀態分級",
              "traffic": "智慧物流：快遞包裹損壞等級分類；交通違規類型自動歸類",
              "industry": "品質檢測：瑕疵類型（裂紋/刮傷/色差）分類統計",
              "finance": "智慧醫療：皮膚病變/眼底影像疾病分類；X光異常篩選",
              "life": "智慧零售：商品類別自動辨識上架；人臉年齡層分類個人化服務",
              "fire": "公共安全：監視器可疑物品類型辨識；消防：燃料類型判斷"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 早期影像辨識系統架構。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "543",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "永續發展",
            "title": "VGG 網路",
            "eng_name": "VGG",
            "eng_abbr": "-",
            "def": "強調使用更深、更簡單的 3x3 卷積核來提升效能。",
            "key_goal": "深度結構標準化",
            "key_principle": "重複 3x3 卷積模組",
            "key_purpose": "作為影像特徵提取的骨幹。",
            "common_apps": "遷移學習中的預訓練模型。",
            "scenarios": {
              "weather": "氣象預報：用大規模氣候模型預訓練後微調至區域降雨預測",
              "agri": "智慧耕作：ImageNet預訓練模型微調用於特定作物病害識別",
              "traffic": "自駕與輔助：大規模道路場景預訓練模型快速遷移至特定城市場景",
              "industry": "品質檢測：通用瑕疵檢測模型快速遷移至新產品線，降低標注成本",
              "finance": "智慧醫療：ImageNet預訓練CNN微調用於罕見疾病影像識別",
              "life": "智慧零售：通用商品識別模型快速遷移至自家商品目錄",
              "fire": "智慧消防：通用目標偵測模型遷移至火場人員定位場景"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 遷移學習中的預訓練模型。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "580",
            "subject": "中科一",
            "category": "電腦視覺",
            "principle": "安全與問責",
            "title": "車道線偵測",
            "eng_name": "Lane Detection",
            "eng_abbr": "-",
            "def": "識別影像中車道線的邊界，確保車輛行駛在正確路徑。",
            "key_goal": "輔助行車定位",
            "key_principle": "邊緣檢測與哈夫變換",
            "key_purpose": "車道偏移警示系統的核心。",
            "common_apps": "自駕車導航與偏離校正。",
            "scenarios": {
              "weather": "氣象預報：自駕系統結合即時路面積水/能見度警示",
              "agri": "智慧耕作：農場自駕拖拉機自動施肥/犁田",
              "traffic": "自駕與輔助：自駕公車測試、ADAS駕駛輔助、疲勞駕駛偵測（核心場景）",
              "industry": "製程優化：工廠內自駕AGV物料搬運",
              "finance": "半導體：自駕晶片研發驗證場景",
              "life": "智慧生活：配送無人車/電動輪椅自駕輔助",
              "fire": "智慧消防：救災自駕機器人進入火場偵測"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 自駕車導航與偏離校正。 下，傳統方案難以處理變數過多的情境，而 車道線偵測 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "物件偵測",
        "topics": [
          {
            "id": "86",
            "subject": "中科一",
            "category": "物件偵測",
            "principle": "永續發展與福祉",
            "title": "YOLO 演算法",
            "eng_name": "You Only Look Only",
            "eng_abbr": "YOLO",
            "def": "將偵測視為迴歸問題，僅需一次掃描即可完成定位與分類，速度極快。",
            "key_goal": "即時物件偵測",
            "key_principle": "單階段偵測架構",
            "key_purpose": "實時監控與反應",
            "common_apps": "無人機即時目標追蹤、產線即時異物偵測。",
            "scenarios": {
              "weather": "災害監測：無人機掃描洪水/土石流邊界；環境監控：衛星圖自動圈出受災範圍",
              "agri": "智慧耕作：無人機識別農田病蟲害感染區；精準養殖：魚塭漂浮異物即時偵測",
              "traffic": "智慧交通：違規停車自動拍照舉牌；智慧物流：AGV機器人障礙物即時閃避",
              "industry": "品質檢測：AOI光學系統標記瑕疵座標；預測性維護：零件磨損位置辨識",
              "finance": "智慧醫療：CT/MRI影像腫瘤候選框定輔助；半導體：晶圓表面缺陷自動標記",
              "life": "智慧零售：無人商店商品掃描自動結帳；貨架缺貨狀態即時偵測",
              "fire": "智慧消防：熱像儀畫面定位受困人員；公共安全：監視器異常聚集告警"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 無人機即時目標追蹤、產線即時異物偵測。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "NLP",
        "topics": [
          {
            "id": "92",
            "subject": "中科一",
            "category": "NLP",
            "principle": "透明與可解釋",
            "title": "詞性標註",
            "eng_name": "Part-of-Speech Tagging",
            "eng_abbr": "POS",
            "def": "自動識別文本中每個詞的語法功能（如動詞、名詞、形容詞）。",
            "key_goal": "標註文法角色",
            "key_principle": "隱藏馬可夫模型/RNN",
            "key_purpose": "句法分析",
            "common_apps": "輔助機器翻譯語法結構調整。",
            "scenarios": {
              "weather": "環境監控：跨國氣象報告即時翻譯",
              "agri": "農業技術：國際農業研究文獻自動翻譯",
              "traffic": "智慧物流：跨國運輸文件多語翻譯",
              "industry": "製程優化：國際設備維修手冊即時翻譯",
              "finance": "智慧醫療：國際醫學文獻快速翻譯輔助研究",
              "life": "智能客服：多語言24H客服機器人翻譯支援",
              "fire": "公共安全：外籍人士緊急求救語言即時翻譯"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 輔助機器翻譯語法結構調整。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "93",
            "subject": "中科一",
            "category": "NLP",
            "principle": "隱私保護",
            "title": "命名實體識別",
            "eng_name": "Named Entity Recognition",
            "eng_abbr": "NER",
            "def": "從文本中識別出特定類別的實體（如人名、地名、組織名、日期）。",
            "key_goal": "識別關鍵資訊",
            "key_principle": "序列標註技術",
            "key_purpose": "資訊檢索與去識別化",
            "common_apps": "合約關鍵資訊提取、個資自動遮蔽。",
            "scenarios": {
              "weather": "環境監控：新聞中災害地點/時間/規模資訊自動擷取",
              "agri": "農業報告：病蟲害名稱/地區/日期關鍵實體提取",
              "traffic": "智慧物流：訂單文字中收件人/地址/日期自動識別",
              "industry": "品質管理：設備故障日誌中零件名稱/時間提取",
              "finance": "智慧醫療：病歷中藥物名稱/症狀/檢查項目識別；合約關鍵條款提取",
              "life": "智能客服：訂單查詢中商品名/編號自動識別",
              "fire": "公共安全：失蹤者特徵描述中姓名/特徵提取"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 合約關鍵資訊提取、個資自動遮蔽。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "基礎設施",
        "topics": [
          {
            "id": "107",
            "subject": "中科一",
            "category": "基礎設施",
            "principle": "安全性",
            "title": "邊緣人工智慧",
            "eng_name": "Edge AI",
            "eng_abbr": "-",
            "def": "在靠近數據源的設備端（如手機、感測器）直接運行 AI 推論。",
            "key_goal": "近端數據處理",
            "key_principle": "分散式本地運算",
            "key_purpose": "即時反應與隱私保護",
            "common_apps": "監視器即時人臉分析（不回傳雲端）。",
            "scenarios": {
              "weather": "環境監控：感測器端即時PM2.5分析（不上傳雲端）；邊緣站即時地震預警運算",
              "agri": "畜牧管理：牛隻個體臉部識別追蹤（乳牛個體健康管理）",
              "traffic": "自駕與輔助：疲勞駕駛臉部特徵偵測（眼皮閉合角度）",
              "industry": "製程優化：廠區人員身份核驗，防止未授權進入",
              "finance": "金融科技：ATM/網銀人臉身份核實；健康管家：情緒健康狀態辨識",
              "life": "智慧零售：販賣機顧客年齡/性別分析精準推薦",
              "fire": "公共安全：協尋失蹤/通緝人員特徵比對；刑事案件追查"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 監視器即時人臉分析（不回傳雲端）。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "149",
            "subject": "中科一",
            "category": "基礎設施",
            "principle": "安全性",
            "title": "向量資料庫",
            "eng_name": "Vector Database",
            "eng_abbr": "-",
            "def": "專門存儲與查詢高維向量的數據庫，支援快速的語義相似度比對。",
            "key_goal": "高效向量檢索",
            "key_principle": "索引與相似度檢索",
            "key_purpose": "RAG 的核心組件",
            "common_apps": "存儲數百萬筆產品規格書的向量值。",
            "scenarios": {
              "weather": "環境監控：氣象法規/標準文件RAG問答系統",
              "agri": "智慧耕作：農業技術資料庫RAG問答助理（查詢防治方法）",
              "traffic": "智慧物流：運輸法規/路線資料庫AI查詢",
              "industry": "預測性維護：設備維修手冊RAG問答（快速查詢故障碼）",
              "finance": "智慧醫療：醫學文獻RAG輔助診斷；金融：法規合規即時查詢",
              "life": "智能客服：企業內部產品知識庫RAG問答（減少幻覺）",
              "fire": "公共安全：消防法規/救災程序RAG查詢助理"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 存儲數百萬筆產品規格書的向量值。 下，傳統方案難以處理變數過多的情境，而 向量資料庫 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "專案規劃",
        "topics": [
          {
            "id": "111",
            "subject": "中科一",
            "category": "專案規劃",
            "principle": "問責",
            "title": "可行性評估",
            "eng_name": "Feasibility Study",
            "eng_abbr": "-",
            "def": "在啟動前針對技術、資源、預算與法規進行的全面評估。",
            "key_goal": "降低專案風險",
            "key_principle": "技術/經濟/法律分析",
            "key_purpose": "決定是否啟動專案",
            "common_apps": "評估現有數據是否足以支撐模型訓練。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 評估現有數據是否足以支撐模型訓練。 下，傳統方案難以處理變數過多的情境，而 可行性評估 則能透過多維數據提取深層規律。"
          },
          {
            "id": "117",
            "subject": "中科一",
            "category": "專案規劃",
            "principle": "問責",
            "title": "範圍定義",
            "eng_name": "Scope Definition",
            "eng_abbr": "-",
            "def": "明確界定專案要做什麼（與不作什麼），設定明確邊界。",
            "key_goal": "防止需求蔓延",
            "key_principle": "需求劃界與產出明確化",
            "key_purpose": "避免專案延宕",
            "common_apps": "確定機器人僅回答產品售後問題。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 確定機器人僅回答產品售後問題。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "118",
            "subject": "中科一",
            "category": "專案規劃",
            "principle": "透明與可解釋",
            "title": "利害關係人分析",
            "eng_name": "Stakeholder Analysis",
            "eng_abbr": "-",
            "def": "識別並分析受專案影響或能影響專案的所有個人、團體或組織。",
            "key_goal": "識別利益相關者",
            "key_principle": "影響力與利益矩陣",
            "key_purpose": "策略性溝通",
            "common_apps": "確保隱私官、用戶、投資者需求被納入。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 確保隱私官、用戶、投資者需求被納入。 下，傳統方案難以處理變數過多的情境，而 利害關係人分析 則能透過多維數據提取深層規律。"
          },
          {
            "id": "119",
            "subject": "中科一",
            "category": "專案規劃",
            "principle": "問責",
            "title": "差異分析/差距分析",
            "eng_name": "Gap Analysis",
            "eng_abbr": "-",
            "def": "比較組織當前能力與達成目標所需能力之間的差距，以制定計畫。",
            "key_goal": "識別現狀與目標差距",
            "key_principle": "現狀與理想態對照",
            "key_purpose": "資源規劃",
            "common_apps": "發現現有數據品質不足以訓練高精度模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 發現現有數據品質不足以訓練高精度模型。 下，傳統方案難以處理變數過多的情境，而 差異分析/差距分析 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "組織治理",
        "topics": [
          {
            "id": "115",
            "subject": "中科一",
            "category": "組織治理",
            "principle": "永續發展與福祉",
            "title": "變革管理",
            "eng_name": "Change Management",
            "eng_abbr": "-",
            "def": "幫助員工適應數位轉型帶來的技術與工作流程變動的策略。",
            "key_goal": "降低轉型阻力",
            "key_principle": "心理/流程/文化調適",
            "key_purpose": "確保 AI 落地成功",
            "common_apps": "舉辦員工 AI 應用培訓講座。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 舉辦員工 AI 應用培訓講座。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "230",
            "subject": "中科一",
            "category": "組織治理",
            "principle": "安全性",
            "title": "影子人工智慧",
            "eng_name": "Shadow AI",
            "eng_abbr": "-",
            "def": "員工在未經 IT 授權下私下使用外部 AI 工具，可能導致個資洩露。",
            "key_goal": "防範未授權 AI 使用",
            "key_principle": "非官方 AI 應用",
            "key_purpose": "資訊安全管控",
            "common_apps": "企業規範 ChatGPT 的使用範圍。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 企業規範 ChatGPT 的使用範圍。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "259",
            "subject": "中科一",
            "category": "組織治理",
            "principle": "問責",
            "title": "人工智慧治理",
            "eng_name": "AI Governance",
            "eng_abbr": "-",
            "def": "確保 AI 系統開發與使用符合法律、倫理與安全標準的框架與制度。",
            "key_goal": "降低技術風險",
            "key_principle": "政策與框架制定",
            "key_purpose": "企業合規化管理",
            "common_apps": "成立 AI 倫理委員會制定內部開發準則。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 成立 AI 倫理委員會制定內部開發準則。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "專案角色",
        "topics": [
          {
            "id": "116",
            "subject": "中科一",
            "category": "專案角色",
            "principle": "問責",
            "title": "AI 專案經理",
            "eng_name": "AI Project Manager",
            "eng_abbr": "-",
            "def": "負責協調數據科學家、工程師與商務部門，確保 AI 專案落地的經理。",
            "key_goal": "跨領域溝通協調",
            "key_principle": "敏捷開發與資源分配",
            "key_purpose": "專案全生命週期管理",
            "common_apps": "協調模型訓練與部署時程。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 協調模型訓練與部署時程。 下，傳統方案難以處理變數過多的情境，而 AI 專案經理 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "系統架構",
        "topics": [
          {
            "id": "121",
            "subject": "中科一",
            "category": "系統架構",
            "principle": "永續發展與福祉",
            "title": "容器化",
            "eng_name": "Containerization",
            "eng_abbr": "-",
            "def": "將應用程式及其依賴環境封裝在輕量級容器（如 Docker）中運行。",
            "key_goal": "環境一致性",
            "key_principle": "作業系統級虛擬化",
            "key_purpose": "簡化 AI 部署流程",
            "common_apps": "跨雲端平台遷移模型服務。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 跨雲端平台遷移模型服務。 下，傳統方案難以處理變數過多的情境，而 容器化 則能透過多維數據提取深層規律。"
          },
          {
            "id": "122",
            "subject": "中科一",
            "category": "系統架構",
            "principle": "永續發展與福祉",
            "title": "微服務",
            "eng_name": "Microservices",
            "eng_abbr": "-",
            "def": "將複雜應用拆分為多個獨立運行、透過 API 通訊的小型服務。",
            "key_goal": "系統解構與擴充",
            "key_principle": "模組化服務架構",
            "key_purpose": "提升系統穩定性",
            "common_apps": "將「影像辨識」與「報表生成」拆為獨立服務。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 將「影像辨識」與「報表生成」拆為獨立服務。 下，傳統方案難以處理變數過多的情境，而 微服務 則能透過多維數據提取深層規律。"
          },
          {
            "id": "180",
            "subject": "中科一",
            "category": "系統架構",
            "principle": "永續發展與福祉",
            "title": "LM Studio",
            "eng_name": "LM Studio",
            "eng_abbr": "-",
            "def": "讓一般用戶能在電腦上輕鬆下載並運行開源模型（GGUF 格式）的工具。",
            "key_goal": "本地模型運行",
            "key_principle": "圖形化模型加載器",
            "key_purpose": "隱私化離線 AI",
            "common_apps": "在無網路環境下使用 AI 助手。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在無網路環境下使用 AI 助手。 下，傳統方案難以處理變數過多的情境，而 LM Studio 則能透過多維數據提取深層規律。"
          },
          {
            "id": "236",
            "subject": "中科一",
            "category": "系統架構",
            "principle": "永續發展與福祉",
            "title": "模組化人工智慧",
            "eng_name": "Modular AI",
            "eng_abbr": "-",
            "def": "將 AI 系統拆分為不同功能的獨立模組，可視需求動態組合與更新。",
            "key_goal": "提升系統靈活性",
            "key_principle": "插件化與層次化架構",
            "key_purpose": "快速更新特定功能",
            "common_apps": "僅升級模型的「翻譯模組」而不影響其他部分。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 僅升級模型的「翻譯模組」而不影響其他部分。 下，傳統方案難以處理變數過多的情境，而 模組化人工智慧 則能透過多維數據提取深層規律。"
          },
          {
            "id": "344",
            "subject": "中科一",
            "category": "系統架構",
            "principle": "問責",
            "title": "去中心化代理人註冊表",
            "eng_name": "Decentralized Agent Registry",
            "eng_abbr": "-",
            "def": "記錄所有 AI 代理人身分、能力與信譽的分散式清單，確保代理人行為可追蹤。",
            "key_goal": "防止單點控制",
            "key_principle": "區塊鏈或分散式帳本",
            "key_purpose": "建立安全且開放的 Agent 生態。",
            "common_apps": "不同公司的 AI 代理人透過註冊表進行身分驗證與協作。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 不同公司的 AI 代理人透過註冊表進行身分驗證與協作。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "368",
            "subject": "中科一",
            "category": "系統架構",
            "principle": "永續發展與福祉",
            "title": "動態模型路由",
            "eng_name": "Dynamic Model Routing",
            "eng_abbr": "-",
            "def": "根據輸入請求的特徵，即時將任務指派給最合適的模型節點執行的技術。",
            "key_goal": "實現負載與精度平衡",
            "key_principle": "條件判斷分流器",
            "key_purpose": "提升系統整體的資源利用率。",
            "common_apps": "企業網關自動將英文請求送往 GPT，中文請求送往 TAIDE。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 企業網關自動將英文請求送往 GPT，中文請求送往 TAIDE。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "370",
            "subject": "中科一",
            "category": "系統架構",
            "principle": "透明與可解釋",
            "title": "基於意圖的調度",
            "eng_name": "Intent-based Dispatching",
            "eng_abbr": "-",
            "def": "先識別使用者的真實意圖（Intent），再將其分發給具備該領域專長之代理人的機制。",
            "key_goal": "提升任務執行精準度",
            "key_principle": "語意分析導向調度",
            "key_purpose": "實現精準的專家模型調度。",
            "common_apps": "使用者問財報，調度器自動將任務指派給「財務專長 Agent」。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 使用者問財報，調度器自動將任務指派給「財務專長 Agent」。 下，傳統方案難以處理變數過多的情境，而 基於意圖的調度 則能透過多維數據提取深層規律。"
          },
          {
            "id": "389",
            "subject": "中科一",
            "category": "系統架構",
            "principle": "永續發展與福祉",
            "title": "路徑架構",
            "eng_name": "Pathways",
            "eng_abbr": "-",
            "def": "Google 的下一代 AI 架構，允許單一模型在數千個加速器上跨任務學習，且僅激活必要路徑。",
            "key_goal": "統一異構任務訓練",
            "key_principle": "稀疏激發與高效調度",
            "key_purpose": "提升巨型模型的訓練與推論效率。",
            "common_apps": "同一個系統同時處理視覺、聽覺與文字任務。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 同一個系統同時處理視覺、聽覺與文字任務。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "系統效能",
        "topics": [
          {
            "id": "124",
            "subject": "中科一",
            "category": "系統效能",
            "principle": "永續發展與福祉",
            "title": "延遲 / 遲滯",
            "eng_name": "Latency",
            "eng_abbr": "-",
            "def": "從發出請求（輸入）到接收回饋（輸出）之間經過的時間。",
            "key_goal": "縮短響應時間",
            "key_principle": "端到端耗時計算",
            "key_purpose": "衡量系統即時性與效率",
            "common_apps": "自動駕駛系統偵測障礙物至煞車動作的反應時間。",
            "scenarios": {
              "weather": "氣象預報：自駕系統結合即時路面積水/能見度警示",
              "agri": "智慧耕作：農場自駕拖拉機自動施肥/犁田",
              "traffic": "自駕與輔助：自駕公車測試、ADAS駕駛輔助、疲勞駕駛偵測（核心場景）",
              "industry": "製程優化：工廠內自駕AGV物料搬運",
              "finance": "半導體：自駕晶片研發驗證場景",
              "life": "智慧生活：配送無人車/電動輪椅自駕輔助",
              "fire": "智慧消防：救災自駕機器人進入火場偵測"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 自動駕駛系統偵測障礙物至煞車動作的反應時間。 下，傳統方案難以處理變數過多的情境，而 延遲 / 遲滯 則能透過多維數據提取深層規律。"
          },
          {
            "id": "257",
            "subject": "中科一",
            "category": "系統效能",
            "principle": "永續發展與福祉",
            "title": "上下文切換",
            "eng_name": "Context Switching",
            "eng_abbr": "-",
            "def": "在多個對話或任務間切換時，模型重新加載相關上下文的過程。",
            "key_goal": "處理多任務流轉",
            "key_principle": "狀態儲存與加載",
            "key_purpose": "多人協作 AI 系統",
            "common_apps": "智慧客服在多位客戶間快速切換服務。",
            "scenarios": {
              "weather": "",
              "agri": "智慧耕作：農民用藥/種植問題語音客服機器人",
              "traffic": "智慧交通：大眾運輸24H AI客服（班次/票務查詢）",
              "industry": "製程優化：設備操作問題AI即時回覆",
              "finance": "金融科技：24H智能理財/帳務客服；智慧醫療：預約/衛教問答機器人",
              "life": "智能客服：24H語音機器人、生成式AI郵件回覆（核心場景）",
              "fire": "公共安全：非緊急情況AI問答分流（釋放人工接線員）"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 智慧客服在多位客戶間快速切換服務。 下，傳統方案難以處理變數過多的情境，而 上下文切換 則能透過多維數據提取深層規律。"
          },
          {
            "id": "349",
            "subject": "中科一",
            "category": "系統效能",
            "principle": "永續發展與福祉",
            "title": "低延遲反饋環",
            "eng_name": "Low-latency Feedback Loop",
            "eng_abbr": "-",
            "def": "系統以極短時間處理感知、決策與行動的反饋循環。",
            "key_goal": "提升反應即時性",
            "key_principle": "高頻狀態監控與修正",
            "key_purpose": "用於即時控制場景。",
            "common_apps": "AI 機器人在偵測到碰撞風險時即時停止動作。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 機器人在偵測到碰撞風險時即時停止動作。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "369",
            "subject": "中科一",
            "category": "系統效能",
            "principle": "永續發展與福祉",
            "title": "任務負載平衡",
            "eng_name": "Task Load Balancing",
            "eng_abbr": "-",
            "def": "將大量併發的 AI 任務平均分配到多個運算節點或模型實例上的過程。",
            "key_goal": "防止單點過載",
            "key_principle": "輪詢或加權分發算法",
            "key_purpose": "確保 AI 服務的高可用性與穩定性。",
            "common_apps": "雙 11 期間將客服 AI 請求分散到 100 台 GPU 伺服器。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 雙 11 期間將客服 AI 請求分散到 100 台 GPU 伺服器。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型效能",
        "topics": [
          {
            "id": "125",
            "subject": "中科一",
            "category": "模型效能",
            "principle": "永續發展與福祉",
            "title": "推論延遲",
            "eng_name": "Inference Latency",
            "eng_abbr": "-",
            "def": "從輸入數據到 AI 模型輸出結果所需的時間（通常以毫秒計）。",
            "key_goal": "提升反應速度",
            "key_principle": "回應時間度量",
            "key_purpose": "優化用戶體驗",
            "common_apps": "即時翻譯系統的流暢度評估。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 即時翻譯系統的流暢度評估。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "126",
            "subject": "中科一",
            "category": "模型效能",
            "principle": "永續發展與福祉",
            "title": "吞吐量",
            "eng_name": "Throughput",
            "eng_abbr": "-",
            "def": "系統在單位時間內能處理的請求總數或數據量。",
            "key_goal": "提升處理容量",
            "key_principle": "單位時間處理量",
            "key_purpose": "評估系統負載能力",
            "common_apps": "伺服器每秒可處理的對話請求數 (QPS)。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 伺服器每秒可處理的對話請求數 (QPS)。 下，傳統方案難以處理變數過多的情境，而 吞吐量 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "模型治理",
        "topics": [
          {
            "id": "127",
            "subject": "中科一",
            "category": "模型治理",
            "principle": "問責",
            "title": "機器學習營運",
            "eng_name": "Machine Learning Operations",
            "eng_abbr": "MLOps",
            "def": "結合開發、測試與維運，實現 AI 模型自動化訓練、部署與監控的流程。",
            "key_goal": "持續交付與維運",
            "key_principle": "DevOps 於 ML 的延伸",
            "key_purpose": "縮短模型上線週期",
            "common_apps": "企業級 AI 模型的全生命週期管理。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 企業級 AI 模型的全生命週期管理。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "253",
            "subject": "中科一",
            "category": "模型治理",
            "principle": "問責",
            "title": "對齊",
            "eng_name": "Alignment",
            "eng_abbr": "-",
            "def": "使 AI 的目標與行為符合人類意圖、倫理標準與法律規範的過程。",
            "key_goal": "確保 AI 行為安全",
            "key_principle": "價值觀對齊 (RLHF)",
            "key_purpose": "減少有害輸出",
            "common_apps": "確保模型拒絕回答如何製造危險物品。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 確保模型拒絕回答如何製造危險物品。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "329",
            "subject": "中科一",
            "category": "模型治理",
            "principle": "問責",
            "title": "意圖對齊監測",
            "eng_name": "Intent Alignment Monitoring",
            "eng_abbr": "-",
            "def": "持續追蹤 AI 生成內容是否偏離人類預設的價值觀、法律框架或任務目標的技術。",
            "key_goal": "確保 AI 行為合規",
            "key_principle": "實時語意衝突檢測",
            "key_purpose": "預防 AI 產生有害指令",
            "common_apps": "監控企業客服 AI 是否開始推薦競爭對手的產品。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 監控企業客服 AI 是否開始推薦競爭對手的產品。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "專案驗證",
        "topics": [
          {
            "id": "129",
            "subject": "中科一",
            "category": "專案驗證",
            "principle": "問責",
            "title": "A/B 測試",
            "eng_name": "A/B Testing",
            "eng_abbr": "-",
            "def": "同時上線兩個版本（A 與 B），觀察用戶反饋以決定最優方案。",
            "key_goal": "數據驅動決策",
            "key_principle": "對照實驗設計",
            "key_purpose": "驗證新模型效果",
            "common_apps": "測試新版推薦演算法是否提升點擊率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 測試新版推薦演算法是否提升點擊率。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型優化",
        "topics": [
          {
            "id": "130",
            "subject": "中科一",
            "category": "模型優化",
            "principle": "永續發展與福祉",
            "title": "模型壓縮",
            "eng_name": "Model Compression",
            "eng_abbr": "-",
            "def": "透過減少參數冗餘（如量化為 4-bit）使模型變小變快，且效能損失極小。",
            "key_goal": "減少算力需求",
            "key_principle": "剪枝/量化/蒸餾",
            "key_purpose": "部署至邊緣設備",
            "common_apps": "在手機端運行輕量化 LLM。",
            "scenarios": {
              "weather": "環境監控：感測器端即時PM2.5分析（不上傳雲端）；邊緣站即時地震預警運算",
              "agri": "智慧耕作：田埂感測器本地即時土壤分析決策；畜牧：牲畜項圈端健康監測",
              "traffic": "自駕與輔助：車內ADAS即時障礙物偵測（低延遲）；路側單元即時車流分析",
              "industry": "品質檢測：產線攝影機端即時瑕疵判斷；預測性維護：感測器端即時異常偵測",
              "finance": "智慧醫療：手術室設備端即時生命徵象分析；穿戴裝置端健康偵測",
              "life": "智慧生活：智慧家電本地語音處理（保護隱私）；收銀端即時商品識別",
              "fire": "智慧消防：煙霧感測器端即時火災判斷（斷網也能動）；監控攝影機端人臉比對"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在手機端運行輕量化 LLM。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "系統接口",
        "topics": [
          {
            "id": "131",
            "subject": "中科一",
            "category": "系統接口",
            "principle": "安全性",
            "title": "API 閘道",
            "eng_name": "API Gateway",
            "eng_abbr": "-",
            "def": "作為所有客戶端請求的單一入口，負責路由、認證、限流與安全過濾。",
            "key_goal": "統一存取控管",
            "key_principle": "請求轉發與過濾",
            "key_purpose": "保護後端模型服務",
            "common_apps": "防範過量請求導致 AI 服務崩潰。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 防範過量請求導致 AI 服務崩潰。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "157",
            "subject": "中科一",
            "category": "系統接口",
            "principle": "透明與可解釋",
            "title": "模型上下文協定",
            "eng_name": "Model Context Protocol",
            "eng_abbr": "MCP",
            "def": "由 Anthropic 發起的開放標準，讓模型能安全、統一地連接各種數據源與工具。",
            "key_goal": "統一生態標準",
            "key_principle": "標準化數據交換協議",
            "key_purpose": "跨平台 AI 整合",
            "common_apps": "讓不同 AI 客戶端共用同一套資料存取邏輯。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 讓不同 AI 客戶端共用同一套資料存取邏輯。 下，傳統方案難以處理變數過多的情境，而 模型上下文協定 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "生成式 AI",
        "topics": [
          {
            "id": "146",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "自我一致性",
            "eng_name": "Self-Consistency",
            "eng_abbr": "-",
            "def": "對同一問題進行多次推理，取出現次數最多的結果作為最終答案。",
            "key_goal": "提升回答正確性",
            "key_principle": "多路推理投票",
            "key_purpose": "降低隨機錯誤",
            "common_apps": "增加數學證明題的準確率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 增加數學證明題的準確率。 下，傳統方案難以處理變數過多的情境，而 自我一致性 則能透過多維數據提取深層規律。"
          },
          {
            "id": "160",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "思維圖",
            "eng_name": "Graph of Thoughts",
            "eng_abbr": "GoT",
            "def": "將推理過程建模為圖形，允許回溯、分岔與路徑聚合，超越線性 CoT。",
            "key_goal": "複雜問題建模",
            "key_principle": "圖形結構推理",
            "key_purpose": "解決科學發現難題",
            "common_apps": "用於複雜的化學分子結構預測推理。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 用於複雜的化學分子結構預測推理。 下，傳統方案難以處理變數過多的情境，而 思維圖 則能透過多維數據提取深層規律。"
          },
          {
            "id": "177",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "LangChain",
            "eng_name": "LangChain",
            "eng_abbr": "-",
            "def": "用於建立由 LLM 驅動之應用程式的框架，專長在於串接數據源。",
            "key_goal": "鏈接 AI 各種工具",
            "key_principle": "鏈式開發框架",
            "key_purpose": "複雜 AI 應用開發",
            "common_apps": "建立能聯網並搜尋特定資料的 Agent。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 建立能聯網並搜尋特定資料的 Agent。 下，傳統方案難以處理變數過多的情境，而 LangChain 則能透過多維數據提取深層規律。"
          },
          {
            "id": "232",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "長期記憶",
            "eng_name": "Long-term Memory",
            "eng_abbr": "-",
            "def": "讓 AI 代理人能記住幾天前甚至幾個月前的對話內容與使用者偏好。",
            "key_goal": "維持對話一致性",
            "key_principle": "外部向量庫/資料持久化",
            "key_purpose": "客製化數位助理",
            "common_apps": "AI 記得你的飲食禁忌與旅遊規劃。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 記得你的飲食禁忌與旅遊規劃。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "250",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "自適應提示",
            "eng_name": "Adaptive Prompting",
            "eng_abbr": "-",
            "def": "根據使用者歷史行為或上下文自動調整提示詞結構的技術。",
            "key_goal": "自動優化互動",
            "key_principle": "內容感知動態調整",
            "key_purpose": "提升用戶體驗",
            "common_apps": "根據學生程度自動調整解題提示的難度。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 根據學生程度自動調整解題提示的難度。 下，傳統方案難以處理變數過多的情境，而 自適應提示 則能透過多維數據提取深層規律。"
          },
          {
            "id": "263",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "混合檢索增強生成",
            "eng_name": "Hybrid RAG",
            "eng_abbr": "-",
            "def": "結合語義向量檢索與傳統關鍵字檢索（如 BM25）的進階 RAG 技術。",
            "key_goal": "提升檢索精準度",
            "key_principle": "向量搜尋 + 關鍵字搜尋",
            "key_purpose": "處理專業術語搜尋",
            "common_apps": "既能理解語義，又能精確定位特定的零件編號。",
            "scenarios": {
              "weather": "環境監控：氣象法規/標準文件RAG問答系統",
              "agri": "智慧耕作：農業技術資料庫RAG問答助理（查詢防治方法）",
              "traffic": "智慧物流：運輸法規/路線資料庫AI查詢",
              "industry": "預測性維護：設備維修手冊RAG問答（快速查詢故障碼）",
              "finance": "智慧醫療：醫學文獻RAG輔助診斷；金融：法規合規即時查詢",
              "life": "智能客服：企業內部產品知識庫RAG問答（減少幻覺）",
              "fire": "公共安全：消防法規/救災程序RAG查詢助理"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 既能理解語義，又能精確定位特定的零件編號。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "274",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "長上下文處理",
            "eng_name": "Long Context Handling",
            "eng_abbr": "-",
            "def": "讓模型能一次性理解並分析極長文本（如整本書或萬行代碼）的能力 。",
            "key_goal": "處理海量輸入資訊",
            "key_principle": "窗口擴展與壓縮技術",
            "key_purpose": "法律文件分析",
            "common_apps": "將 50 份相關合約一次丟給 AI 進行共通條款對比。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將 50 份相關合約一次丟給 AI 進行共通條款對比。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "276",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "世界模型",
            "eng_name": "World Models",
            "eng_abbr": "-",
            "def": "AI 內部構建的對現實世界的模擬，能預測環境對特定行為的反應。",
            "key_goal": "模擬物理規律",
            "key_principle": "環境動力學預測",
            "key_purpose": "自動駕駛、強化學習",
            "common_apps": "自動駕駛 AI 在虛擬環境中預測如果轉向，前方路況會如何變化。",
            "scenarios": {
              "weather": "環境監控：氣象感測站最優部署策略學習",
              "agri": "智慧耕作：無人機施肥/灌溉最優決策學習",
              "traffic": "智慧交通：動態紅綠燈排程最優化；自駕公車路徑決策學習；配送路徑實時優化",
              "industry": "製程優化：排程任務分配強化學習；機械手臂操作策略自動優化",
              "finance": "金融科技：量化交易策略強化學習優化",
              "life": "智慧生活：個人化推薦動態策略強化學習",
              "fire": "智慧消防：救災機器人路徑規劃強化學習"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動駕駛 AI 在虛擬環境中預測如果轉向，前方路況會如何變化。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "335",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "上下文視窗縮放",
            "eng_name": "Context Window Scaling",
            "eng_abbr": "-",
            "def": "透過調整位置編碼技術，讓原本支援 4k 的模型能理解 128k 甚至更長文本的能力。",
            "key_goal": "處理超長輸入",
            "key_principle": "位置編碼插值 (RoPE)",
            "key_purpose": "進行跨年度財務報表對比",
            "common_apps": "讓 AI 一次性讀取並總結過去十年的會議紀錄。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 讓 AI 一次性讀取並總結過去十年的會議紀錄。 下，傳統方案難以處理變數過多的情境，而 上下文視窗縮放 則能透過多維數據提取深層規律。"
          },
          {
            "id": "592",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "透明度與可解釋性",
            "title": "變分自編碼器",
            "eng_name": "Variational Autoencoder",
            "eng_abbr": "VAE",
            "def": "一種生成模型，透過編碼器提取特徵概率分佈，並由解碼器重構資料。",
            "key_goal": "學習資料的潛在分佈並生成新樣本",
            "key_principle": "基於貝氏推論，將輸入映射到潛在空間的概率分佈，再從中取樣解碼 。",
            "key_purpose": "影像合成、資料擴增、異常檢測、特徵降維 。",
            "common_apps": "產生手寫數字合成影像\n\n工業產品瑕疵異常檢測",
            "scenarios": {
              "weather": "氣象預報：生成合成氣象雷達影像用於極端天氣模擬訓練",
              "agri": "智慧耕作：生成合成病蟲害影像擴充稀少樣本訓練集",
              "traffic": "交通管理：生成合成交通場景影像用於自駕模擬訓練",
              "industry": "製程優化：生成合成瑕疵影像擴充產線品檢訓練資料",
              "finance": "智慧醫療：生成合成醫學影像保護病患隱私同時訓練模型",
              "life": "智慧零售：生成虛擬商品展示圖用於電商平台",
              "fire": "智慧消防：生成合成火場影像用於消防訓練模擬"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在產生手寫數字合成影像、補全損壞的影像下，傳統方案難以處理變數過多的情境，而變分自編碼器則能透過多維數據提取深層規律。"
          },
          {
            "id": "629",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "安全性與\n\n可控性",
            "title": "大規模生成對抗網路",
            "eng_name": "Big Large-scale GAN",
            "eng_abbr": "BigGAN",
            "def": "由 Google DeepMind 提出的 GAN 進化版，透過極大規模參數與批次訓練實現高品質影像生成。",
            "key_goal": "提升生成影像的\n\n解析度與多樣性",
            "key_principle": "正交正則化與\n\n截斷技巧 (Truncation Trick)",
            "key_purpose": "解決 GAN 在生成複雜背景或高解析影像時的不穩定問題。",
            "common_apps": "數位藝術創作\n\n高品質合成影像數據增強",
            "scenarios": {
              "weather": "災害監測：生成高解析度合成衛星影像用於災損評估訓練",
              "agri": "智慧耕作：生成高解析度合成農田影像用於精準農業",
              "traffic": "交通管理：生成高解析度合成道路影像用於自駕訓練",
              "industry": "製程優化：生成高解析度合成瑕疵影像用於品檢訓練",
              "finance": "智慧醫療：生成高解析度合成醫學影像用於研究訓練",
              "life": "智慧生活：數位藝術創作與高品質合成影像數據增強",
              "fire": "智慧消防：生成高解析度合成火場影像用於消防模擬"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在數位藝術創作、高品質合成影像數據增強下，傳統方案難以處理變數過多的情境，而大規模生成對抗網路則能透過多維數據提取深層規律。"
          },
          {
            "id": "630",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "安全性與\n\n可控性",
            "title": "控制網網路",
            "eng_name": "ControlNet",
            "eng_abbr": "-",
            "def": "一種神經網絡結構，透過加入額外的控制條件（如邊緣檢測、姿態估計），精確引導擴散模型生成影像。",
            "key_goal": "實現對擴散模型\n\n生成內容的精確控制",
            "key_principle": "複製穩定擴散模型的\n\n編碼器層並進行微調",
            "key_purpose": "解決純文字提示詞（Prompt）難以精確描述構圖與細節的問題。",
            "common_apps": "室內設計草圖轉實景\n\n人物骨架精確控圖",
            "scenarios": {
              "weather": "災害監測：精確控制合成災區影像的建物損壞程度與角度",
              "agri": "智慧耕作：精確控制合成農田影像的作物排列與生長階段",
              "traffic": "交通管理：精確控制合成道路影像的車流密度與天氣條件",
              "industry": "製程優化：精確控制合成產品影像的瑕疵位置與大小",
              "finance": "智慧醫療：精確控制合成醫學影像的病灶位置與嚴重程度",
              "life": "智慧生活：室內設計草圖轉實景與人物骨架精確控圖",
              "fire": "智慧消防：精確控制合成火場影像的火勢範圍與煙霧密度"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在室內設計草圖轉實景、人物骨架精確控圖下，傳統方案難以處理變數過多的情境，而控制網網路則能透過多維數據提取深層規律。"
          },
          {
            "id": "631",
            "subject": "中科一",
            "category": "生成式 AI",
            "principle": "透明性與\n\n可解釋性",
            "title": "指令式影像編輯",
            "eng_name": "InstructPix2Pix",
            "eng_abbr": "-",
            "def": "一種讓使用者只需輸入簡單的動詞指令（如「把背景換成冬天」），即可對現有影像進行語意化編輯的模型。",
            "key_goal": "透過自然語言指令\n\n直接修改影像",
            "key_principle": "結合 GPT-3 指令\n\n與 Stable Diffusion",
            "key_purpose": "簡化傳統影像編輯流程，實現直覺且具備語境理解的修圖。",
            "common_apps": "照片風格轉換\n\n電商產品背景替換",
            "scenarios": {
              "weather": "災害監測：以自然語言指令修改災區影像中的損壞程度標記",
              "agri": "智慧耕作：以自然語言指令修改農田影像中的作物標註",
              "traffic": "交通管理：以自然語言指令修改道路影像中的標線顏色",
              "industry": "製程優化：以自然語言指令修改產品影像中的標籤與背景",
              "finance": "智慧醫療：以自然語言指令修改醫學影像中的標註與對比度",
              "life": "智慧生活：照片風格轉換與電商產品背景替換",
              "fire": "智慧消防：以自然語言指令修改消防訓練影像中的火場條件"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在照片風格轉換、電商產品背景替換下，傳統方案難以處理變數過多的情境，而指令式影像編輯則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "檢索技術",
        "topics": [
          {
            "id": "152",
            "subject": "中科一",
            "category": "檢索技術",
            "principle": "透明與可解釋",
            "title": "重新排名",
            "eng_name": "Reranking",
            "eng_abbr": "-",
            "def": "對初步檢索出的候選片段進行更精確的相關性排序，選出最優解答。",
            "key_goal": "精化檢索結果",
            "key_principle": "二次評分過濾",
            "key_purpose": "提升 RAG 準確度",
            "common_apps": "從前 20 個片段選出最相關的 3 個。",
            "scenarios": {
              "weather": "環境監控：氣象法規/標準文件RAG問答系統",
              "agri": "智慧耕作：農業技術資料庫RAG問答助理（查詢防治方法）",
              "traffic": "智慧物流：運輸法規/路線資料庫AI查詢",
              "industry": "預測性維護：設備維修手冊RAG問答（快速查詢故障碼）",
              "finance": "智慧醫療：醫學文獻RAG輔助診斷；金融：法規合規即時查詢",
              "life": "智能客服：企業內部產品知識庫RAG問答（減少幻覺）",
              "fire": "公共安全：消防法規/救災程序RAG查詢助理"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 從前 20 個片段選出最相關的 3 個。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "AI 代理人",
        "topics": [
          {
            "id": "155",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "問責",
            "title": "代理人人工智慧",
            "eng_name": "Agentic AI",
            "eng_abbr": "-",
            "def": "具備規劃、推理並能自主調度外部工具完成複雜任務的 AI 系統。",
            "key_goal": "提升自主執行力",
            "key_principle": "目標驅動與工具調度",
            "key_purpose": "自動化辦公流程",
            "common_apps": "指令 AI「訂一張下週去東京的便宜機票」。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 指令 AI「訂一張下週去東京的便宜機票」。 下，傳統方案難以處理變數過多的情境，而 代理人人工智慧 則能透過多維數據提取深層規律。"
          },
          {
            "id": "156",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "公平性",
            "title": "多代理人系統",
            "eng_name": "Multi-Agent System",
            "eng_abbr": "MAS",
            "def": "由多個分工明確的 AI 代理人共同協作完成任務（如：開發者+測試者）。",
            "key_goal": "團隊協作解決問題",
            "key_principle": "分工與對話博弈",
            "key_purpose": "複雜軟體工程",
            "common_apps": "自動化撰寫、測試並修復程式碼。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動化撰寫、測試並修復程式碼。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "158",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "永續發展與福祉",
            "title": "函式調用",
            "eng_name": "Function Calling",
            "eng_abbr": "-",
            "def": "模型能判斷何時需調用外部程式碼（函數），並生成正確的參數格式。",
            "key_goal": "連結外部現實世界",
            "key_principle": "API 結構化映射",
            "key_purpose": "查詢實時數據",
            "common_apps": "AI 自動調用氣象 API 獲取今日天氣。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 自動調用氣象 API 獲取今日天氣。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "223",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "永續發展與福祉",
            "title": "Auto-GPT",
            "eng_name": "Auto-GPT",
            "eng_abbr": "-",
            "def": "一個能自主將目標分解成任務、聯網搜尋並執行，直到達成目標的代理人。",
            "key_goal": "自主任務拆解",
            "key_principle": "循環思考鏈",
            "key_purpose": "複雜自動化任務",
            "common_apps": "「幫我研究這 5 間競品並寫成分析報告」。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 「幫我研究這 5 間競品並寫成分析報告」。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "224",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "永續發展與福祉",
            "title": "CrewAI",
            "eng_name": "CrewAI",
            "eng_abbr": "-",
            "def": "專注於讓多個 AI 代理人扮演不同角色（如：主編、作家、研究員）協作。",
            "key_goal": "多代理人協作框架",
            "key_principle": "角色驅動型 Agent",
            "key_purpose": "專業內容生產線",
            "common_apps": "自動生成包含插圖、研究與校對的部落格文章。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動生成包含插圖、研究與校對的部落格文章。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "254",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "永續發展與福祉",
            "title": "自主工作流",
            "eng_name": "Autonomous Workflow",
            "eng_abbr": "-",
            "def": "AI 代理人能自主分解、執行並驗證一系列複雜任務的流程。",
            "key_goal": "實現無人值守自動化",
            "key_principle": "任務規劃與循環執行",
            "key_purpose": "提升企業自動化程度",
            "common_apps": "AI 自動抓取訂單、核對庫存並發送出貨通知。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 AI 自動抓取訂單、核對庫存並發送出貨通知。 下，傳統方案難以處理變數過多的情境，而 自主工作流 則能透過多維數據提取深層規律。"
          },
          {
            "id": "339",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "Replit Agent",
            "eng_abbr": "-",
            "def": "Replit 內建的 AI 代理，能自主理解需求、撰寫代碼、除錯並完成應用程序部署。",
            "key_goal": "自動化全棧開發",
            "key_principle": "具身開發代理人",
            "key_purpose": "端到端自動化應用構建",
            "common_apps": "對代理說「幫我做一個記帳 App 並上線」，代理人自動完成所有流程。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 對代理說「幫我做一個記帳 App 並上線」，代理人自動完成所有流程。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          },
          {
            "id": "342",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "永續發展與福祉",
            "title": "動作空間",
            "eng_name": "Action Space",
            "eng_abbr": "-",
            "def": "AI 代理人（Agent）在特定環境中所有可執行動作的總集合。",
            "key_goal": "定義 Agent 能力邊界",
            "key_principle": "離散或連續動作集合",
            "key_purpose": "限制代理人的操作範圍。",
            "common_apps": "自動駕駛 AI 的動作空間包含加速、減速、左轉、右轉。",
            "scenarios": {
              "weather": "氣象預報：自駕系統結合即時路面積水/能見度警示",
              "agri": "智慧耕作：農場自駕拖拉機自動施肥/犁田",
              "traffic": "自駕與輔助：自駕公車測試、ADAS駕駛輔助、疲勞駕駛偵測（核心場景）",
              "industry": "製程優化：工廠內自駕AGV物料搬運",
              "finance": "半導體：自駕晶片研發驗證場景",
              "life": "智慧生活：配送無人車/電動輪椅自駕輔助",
              "fire": "智慧消防：救災自駕機器人進入火場偵測"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動駕駛 AI 的動作空間包含加速、減速、左轉、右轉。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "343",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "透明與可解釋",
            "title": "透明指令集",
            "eng_name": "Transparent Instruction Set",
            "eng_abbr": "-",
            "def": "一套人類可讀且邏輯透明的指令集合，用於規範 Agent 的執行步驟。",
            "key_goal": "提升指令可審計性",
            "key_principle": "結構化白箱指令",
            "key_purpose": "避免 AI 執行黑箱或有害操作。",
            "common_apps": "企業定義 AI 撥款 Agent 只能執行預設的透明指令集。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 企業定義 AI 撥款 Agent 只能執行預設的透明指令集。 下，傳統方案難以處理變數過多的情境，而 透明指令集 則能透過多維數據提取深層規律。"
          },
          {
            "id": "345",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "永續發展與福祉",
            "title": "系統級代理人",
            "eng_name": "System-level Agent",
            "eng_abbr": "-",
            "def": "具備作業系統層級權限的 AI，能跨軟體讀取螢幕、操作檔案與配置系統。",
            "key_goal": "跨應用全局操控",
            "key_principle": "作業系統權限整合",
            "key_purpose": "實現真正的數位助理。",
            "common_apps": "指令 AI「幫我整理電腦裡所有關於 AI 的 PDF 並歸檔」。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 指令 AI「幫我整理電腦裡所有關於 AI 的 PDF 並歸檔」。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "346",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "永續發展與福祉",
            "title": "螢幕解析與點擊",
            "eng_name": "Screen Parsing & Clicking",
            "eng_abbr": "-",
            "def": "AI 透過解析螢幕影像找出按鈕位置，並模擬滑鼠點擊動作的技術。",
            "key_goal": "模擬人類視覺操作",
            "key_principle": "視覺定位與 UI 元素辨識",
            "key_purpose": "自動化操作無 API 的舊軟體。",
            "common_apps": "AI 代理人登入老舊的 ERP 系統進行資料輸入。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 AI 代理人登入老舊的 ERP 系統進行資料輸入。 下，傳統方案難以處理變數過多的情境，而 螢幕解析與點擊 則能透過多維數據提取深層規律。"
          },
          {
            "id": "347",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "問責",
            "title": "動作鏈審計",
            "eng_name": "Action Chain Auditing",
            "eng_abbr": "-",
            "def": "對 AI 代理人執行的一連串動作進行紀錄與事後審查，確保無違規行為。",
            "key_goal": "追蹤 AI 決策路徑",
            "key_principle": "執行序列日誌分析",
            "key_purpose": "滿足合規與資安要求。",
            "common_apps": "檢查 AI 金融代理人為何在昨日執行了大量的異常交易。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 檢查 AI 金融代理人為何在昨日執行了大量的異常交易。 下，傳統方案難以處理變數過多的情境，而 動作鏈審計 則能透過多維數據提取深層規律。"
          },
          {
            "id": "348",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "永續發展與福祉",
            "title": "跨視窗上下文",
            "eng_name": "Cross-window Context",
            "eng_abbr": "-",
            "def": "AI 能同時理解並關聯多個不同軟體視窗中內容的能力。",
            "key_goal": "整合多工資訊",
            "key_principle": "共享狀態管理",
            "key_purpose": "實現複雜的跨軟體任務。",
            "common_apps": "AI 同時讀取 Excel 數據並在瀏覽器填寫表單。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 同時讀取 Excel 數據並在瀏覽器填寫表單。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "352",
            "subject": "中科一",
            "category": "AI 代理人",
            "principle": "永續發展與福祉",
            "title": "自癒腳本",
            "eng_name": "Self-healing Scripts",
            "eng_abbr": "-",
            "def": "當自動化流程因網頁結構改變而失敗時，AI 能自主修復代碼重新運行的技術。",
            "key_goal": "提升自動化穩定性",
            "key_principle": "自動除錯與路徑重構",
            "key_purpose": "減少自動化流程的維護成本。",
            "common_apps": "網頁改版導致點擊失效時，AI 自動識別新按鈕並修正腳本。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 網頁改版導致點擊失效時，AI 自動識別新按鈕並修正腳本。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型訓練",
        "topics": [
          {
            "id": "164",
            "subject": "中科一",
            "category": "模型訓練",
            "principle": "透明與可解釋",
            "title": "指令微調",
            "eng_name": "Instruction Fine-tuning",
            "eng_abbr": "-",
            "def": "使用「指令-回答」對數據進行微調，使模型能理解並精確遵循人類意圖。",
            "key_goal": "強化任務執行力",
            "key_principle": "結構化指令對練",
            "key_purpose": "提升模型可用性",
            "common_apps": "將基座模型轉化為對話式助手。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將基座模型轉化為對話式助手。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "197",
            "subject": "中科一",
            "category": "模型訓練",
            "principle": "永續發展與福祉",
            "title": "預訓練",
            "eng_name": "Pre-training",
            "eng_abbr": "-",
            "def": "在海量、多樣的原始數據上進行初步訓練，學習語言或視覺的通用規律。",
            "key_goal": "獲取基礎知識",
            "key_principle": "大規模無監督學習",
            "key_purpose": "建立基座模型能力",
            "common_apps": "讓模型學會寫程式和說各種語言。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 讓模型學會寫程式和說各種語言。 下，傳統方案難以處理變數過多的情境，而 預訓練 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "應用工具",
        "topics": [
          {
            "id": "182",
            "subject": "中科一",
            "category": "應用工具",
            "principle": "永續發展與福祉",
            "title": "Flowise",
            "eng_name": "Flowise",
            "eng_abbr": "-",
            "def": "基於 LangChain 的視覺化開發工具，透過拖拉組件建構 AI 流程。",
            "key_goal": "拖拉式 AI 邏輯設計",
            "key_principle": "視覺化流程編排",
            "key_purpose": "快速原型設計",
            "common_apps": "3 分鐘內建構 RAG 對話框。",
            "scenarios": {
              "weather": "環境監控：氣象法規/標準文件RAG問答系統",
              "agri": "智慧耕作：農業技術資料庫RAG問答助理（查詢防治方法）",
              "traffic": "智慧物流：運輸法規/路線資料庫AI查詢",
              "industry": "預測性維護：設備維修手冊RAG問答（快速查詢故障碼）",
              "finance": "智慧醫療：醫學文獻RAG輔助診斷；金融：法規合規即時查詢",
              "life": "智能客服：企業內部產品知識庫RAG問答（減少幻覺）",
              "fire": "公共安全：消防法規/救災程序RAG查詢助理"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 3 分鐘內建構 RAG 對話框。 下，傳統方案難以處理變數過多的情境，而 Flowise 則能透過多維數據提取深層規律。"
          },
          {
            "id": "225",
            "subject": "中科一",
            "category": "應用工具",
            "principle": "隱私保護",
            "title": "Ollama",
            "eng_name": "Ollama",
            "eng_abbr": "-",
            "def": "專為本地運行大型語言模型設計的輕量工具，支持 Mac/Windows/Linux。",
            "key_goal": "輕量化本地運行",
            "key_principle": "模型封裝與加載",
            "key_purpose": "離線 AI 使用",
            "common_apps": "隱私性極高的個人助理。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 隱私性極高的個人助理。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "226",
            "subject": "中科一",
            "category": "應用工具",
            "principle": "隱私保護",
            "title": "AnythingLLM",
            "eng_name": "AnythingLLM",
            "eng_abbr": "-",
            "def": "內建向量資料庫與模型連動，讓非工程師也能建立私有文件對話機器人。",
            "key_goal": "本地全能 RAG 應用",
            "key_principle": "一體化 AI 界面",
            "key_purpose": "個人知識庫管理",
            "common_apps": "搜尋並詢問個人數百份筆記內容。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 搜尋並詢問個人數百份筆記內容。 下，傳統方案難以處理變數過多的情境，而 AnythingLLM 則能透過多維數據提取深層規律。"
          },
          {
            "id": "227",
            "subject": "中科一",
            "category": "應用工具",
            "principle": "隱私保護",
            "title": "Open WebUI",
            "eng_name": "Open WebUI",
            "eng_abbr": "-",
            "def": "提供類似 ChatGPT 的網頁介面，用於操作本地運行的各種開源模型。",
            "key_goal": "提升操作便利性",
            "key_principle": "介面化模型管理",
            "key_purpose": "自建 AI 使用介面",
            "common_apps": "團隊內部分享本地 AI 服務。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 團隊內部分享本地 AI 服務。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "應用場景",
        "topics": [
          {
            "id": "183",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "永續發展與福祉",
            "title": "數位員工",
            "eng_name": "Digital Employee",
            "eng_abbr": "-",
            "def": "結合 AI 決策與自動化流程，能自主執行業務操作的虛擬員工。",
            "key_goal": "替代重複性工作",
            "key_principle": "RPA + AI 結合",
            "key_purpose": "企業降本增效",
            "common_apps": "自動化處理報銷單據與審核。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動化處理報銷單據與審核。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "184",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "永續發展與福祉",
            "title": "智慧客服",
            "eng_name": "Intelligent Customer Service",
            "eng_abbr": "-",
            "def": "利用 AI 自動回答客戶諮詢，減少人工客服負擔。",
            "key_goal": "全天候客戶服務",
            "key_principle": "NLP + 知識庫",
            "key_purpose": "提升客戶滿意度",
            "common_apps": "電商平台的 24 小時售前諮詢。",
            "scenarios": {
              "weather": "",
              "agri": "智慧耕作：農民用藥/種植問題語音客服機器人",
              "traffic": "智慧交通：大眾運輸24H AI客服（班次/票務查詢）",
              "industry": "製程優化：設備操作問題AI即時回覆",
              "finance": "金融科技：24H智能理財/帳務客服；智慧醫療：預約/衛教問答機器人",
              "life": "智能客服：24H語音機器人、生成式AI郵件回覆（核心場景）",
              "fire": "公共安全：非緊急情況AI問答分流（釋放人工接線員）"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 電商平台的 24 小時售前諮詢。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "185",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "永續發展與福祉",
            "title": "程式碼自動補全",
            "eng_name": "Code Autocomplete",
            "eng_abbr": "-",
            "def": "在編輯器中預測並填寫下一行程式碼的技術。",
            "key_goal": "輔助程式開發",
            "key_principle": "序列預測模型",
            "key_purpose": "提升開發速度",
            "common_apps": "寫 Python 時自動補全函數定義。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 寫 Python 時自動補全函數定義。 下，傳統方案難以處理變數過多的情境，而 程式碼自動補全 則能透過多維數據提取深層規律。"
          },
          {
            "id": "186",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "永續發展與福祉",
            "title": "自動會議記錄",
            "eng_name": "Automated Meeting Minutes",
            "eng_abbr": "-",
            "def": "將會議語音轉為文字並自動產出重點摘要與待辦清單。",
            "key_goal": "提升溝通效率",
            "key_principle": "ASR + 文本摘要",
            "key_purpose": "節省行政時間",
            "common_apps": "自動生成每週進度會議摘要。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動生成每週進度會議摘要。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "187",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "永續發展與福祉",
            "title": "內容行銷生成",
            "eng_name": "Content Marketing Generation",
            "eng_abbr": "-",
            "def": "利用 AI 產生社群貼文、廣告文案與行銷腳本。",
            "key_goal": "創意內容產出",
            "key_principle": "生成式寫作",
            "key_purpose": "降低行銷成本",
            "common_apps": "快速產出 10 種不同風格的廣告文。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 快速產出 10 種不同風格的廣告文。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "188",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "公平性",
            "title": "個性化學習助手",
            "eng_name": "Personalized Learning Assistant",
            "eng_abbr": "-",
            "def": "根據學生的進度與弱點，提供量身定制的教學內容與練習。",
            "key_goal": "適性化教育",
            "key_principle": "學習行為建模",
            "key_purpose": "提升學習成效",
            "common_apps": "AI 根據英文程度自動調整單字難度。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 AI 根據英文程度自動調整單字難度。 下，傳統方案難以處理變數過多的情境，而 個性化學習助手 則能透過多維數據提取深層規律。"
          },
          {
            "id": "189",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "隱私保護",
            "title": "法律合約審閱",
            "eng_name": "Legal Contract Review",
            "eng_abbr": "-",
            "def": "自動識別合約中的不平等條款、缺失項目及法律風險。",
            "key_goal": "法律風險辨識",
            "key_principle": "實體提取與合規比對",
            "key_purpose": "加速法務流程",
            "common_apps": "快速審查數百份供應商保密協議。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 快速審查數百份供應商保密協議。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "190",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "隱私保護",
            "title": "醫療病歷分析",
            "eng_name": "Medical Record Analysis",
            "eng_abbr": "-",
            "def": "從非結構化病歷中提取關鍵病徵與用藥史。",
            "key_goal": "輔助醫學決策",
            "key_principle": "NLP + 醫學本體論",
            "key_purpose": "提升醫療品質",
            "common_apps": "輔助醫師快速掌握患者病史。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 輔助醫師快速掌握患者病史。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "191",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "安全性",
            "title": "金融詐欺偵測",
            "eng_name": "Financial Fraud Detection",
            "eng_abbr": "-",
            "def": "分析交易行為模式，即時識別並阻斷可疑的盜刷或洗錢行為。",
            "key_goal": "減少經濟損失",
            "key_principle": "異常檢測與模式辨識",
            "key_purpose": "保障金融安全",
            "common_apps": "信用卡異常海外交易攔阻。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "金融科技：信用卡盜刷風險即時偵測、異常交易攔截（核心場景）",
              "life": "智慧零售：電商平台異常退款/刷卡詐欺偵測",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 信用卡異常海外交易攔阻。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "192",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "永續發展與福祉",
            "title": "虛擬試穿",
            "eng_name": "Virtual Try-on",
            "eng_abbr": "-",
            "def": "使用者上傳照片即可預覽服飾穿在身上的效果。",
            "key_goal": "提升電商體驗",
            "key_principle": "圖像融合與人體建模",
            "key_purpose": "降低退貨率",
            "common_apps": "在網購衣服前先看模擬穿著效果。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在網購衣服前先看模擬穿著效果。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "262",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "永續發展與福祉",
            "title": "情感 AI",
            "eng_name": "Affective AI / EQ AI",
            "eng_abbr": "-",
            "def": "旨在識別、理解、模擬人類情緒與情感反應的 AI 技術。",
            "key_goal": "模擬人類情感",
            "key_principle": "語調與微表情辨識",
            "key_purpose": "心理健康與服務業",
            "common_apps": "智慧座艙偵測駕駛疲勞與情緒狀態。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 智慧座艙偵測駕駛疲勞與情緒狀態。 下，傳統方案難以處理變數過多的情境，而 情感 AI 則能透過多維數據提取深層規律。"
          },
          {
            "id": "311",
            "subject": "中科一",
            "category": "應用場景",
            "principle": "永續發展與福祉",
            "title": "預測性維護",
            "eng_name": "Predictive Maintenance",
            "eng_abbr": "PdM",
            "def": "透過感測器數據預測設備何時可能發生故障，提前進行保養。",
            "key_goal": "降低停機損失",
            "key_principle": "異常檢測與餘壽預測",
            "key_purpose": "工業智慧化",
            "common_apps": "在工廠機台皮帶斷裂前兩週發出維修警告。",
            "scenarios": {
              "weather": "環境監控：水壩/氣象設備健康預測，防止關鍵設施故障",
              "agri": "精準養殖：漁場水泵/增氧機設備壽命預測；畜牧：自動飼料機故障預警",
              "traffic": "智慧交通：交通號誌/鐵路設備健康預測；物流：倉儲AGV電池壽命管理",
              "industry": "預測性維護：機台零件壽命預測、設備故障早期告警（工業4.0核心場景）",
              "finance": "半導體：晶圓機台零件更換時機預測（避免突發停機",
              "life": "智慧生活：智慧家電元件壽命預測（冷氣壓縮機）",
              "fire": "智慧消防：消防幫浦/偵測器設備健康預測"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在工廠機台皮帶斷裂前兩週發出維修警告。 下，傳統方案難以處理變數過多的情境，而 預測性維護 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "雲端平台",
        "topics": [
          {
            "id": "193",
            "subject": "中科一",
            "category": "雲端平台",
            "principle": "永續發展與福祉",
            "title": "Vertex AI",
            "eng_name": "Vertex AI",
            "eng_abbr": "-",
            "def": "Google Cloud 提供的企業級機器學習平台，整合了開發與維運工具。",
            "key_goal": "統一 AI 開發平台",
            "key_principle": "Google 雲端 AI 套件",
            "key_purpose": "企業模型規模化部署",
            "common_apps": "在 Google 雲端管理多個 AI 模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在 Google 雲端管理多個 AI 模型。 下，傳統方案難以處理變數過多的情境，而 Vertex AI 則能透過多維數據提取深層規律。"
          },
          {
            "id": "194",
            "subject": "中科一",
            "category": "雲端平台",
            "principle": "永續發展與福祉",
            "title": "Azure AI",
            "eng_name": "Azure AI",
            "eng_abbr": "-",
            "def": "提供包含 OpenAI 服務在內的雲端 AI 工具，強調安全性與穩定性。",
            "key_goal": "企業級 AI 服務",
            "key_principle": "Microsoft 雲端 AI 套件",
            "key_purpose": "企業 AI 應用開發",
            "common_apps": "整合 Office 資料的企業專用 LLM。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 整合 Office 資料的企業專用 LLM。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "195",
            "subject": "中科一",
            "category": "雲端平台",
            "principle": "永續發展與福祉",
            "title": "Bedrock",
            "eng_name": "Bedrock",
            "eng_abbr": "-",
            "def": "Amazon 提供的全代管服務，可透過 API 存取多種頂尖模型。",
            "key_goal": "靈活模型調度",
            "key_principle": "AWS 雲端 AI 套件",
            "key_purpose": "多模型選擇與整合",
            "common_apps": "視需求切換不同的基座模型服務。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 視需求切換不同的基座模型服務。 下，傳統方案難以處理變數過多的情境，而 Bedrock 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "資訊安全",
        "topics": [
          {
            "id": "219",
            "subject": "中科一",
            "category": "資訊安全",
            "principle": "安全性",
            "title": "多因子驗證",
            "eng_name": "Multi-Factor Authentication",
            "eng_abbr": "MFA",
            "def": "要求使用者提供兩種以上的證據（密碼 + 手機驗證碼）才能進入系統。",
            "key_goal": "防止非法存取",
            "key_principle": "多重驗證機制",
            "key_purpose": "強化帳戶安全",
            "common_apps": "保護企業 AI 數據平台不被盜取。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 保護企業 AI 數據平台不被盜取。 下，傳統方案難以處理變數過多的情境，而 多因子驗證 則能透過多維數據提取深層規律。"
          },
          {
            "id": "252",
            "subject": "中科一",
            "category": "資訊安全",
            "principle": "隱私保護",
            "title": "隱私計算",
            "eng_name": "Privacy Computing",
            "eng_abbr": "-",
            "def": "在保護數據隱私的前提下進行數據分析與計算的技術集合。",
            "key_goal": "數據可用不可見",
            "key_principle": "聯邦學習/同態加密",
            "key_purpose": "跨機構數據協作",
            "common_apps": "銀行間不交換明文數據進行聯合風控建模。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 銀行間不交換明文數據進行聯合風控建模。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型監控",
        "topics": [
          {
            "id": "220",
            "subject": "中科一",
            "category": "模型監控",
            "principle": "問責",
            "title": "模型退化",
            "eng_name": "Model Degradation",
            "eng_abbr": "-",
            "def": "由於環境改變或數據污染，導致模型預測效能隨著時間逐漸惡化的現象。",
            "key_goal": "預防系統崩潰",
            "key_principle": "效能指標持續下降",
            "key_purpose": "維護策略調整",
            "common_apps": "監控預測準確率是否掉出 KPI。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 監控預測準確率是否掉出 KPI。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "治理政策",
        "topics": [
          {
            "id": "228",
            "subject": "中科一",
            "category": "治理政策",
            "principle": "永續發展與福祉",
            "title": "主權人工智慧",
            "eng_name": "Sovereign AI",
            "eng_abbr": "-",
            "def": "強調一個國家應擁有自己的算力、數據及符合其文化價值觀的模型。",
            "key_goal": "保障文化與數據主權",
            "key_principle": "本地化模型與算力",
            "key_purpose": "國家安全與文化傳承",
            "common_apps": "台灣 TAIDE 模型計畫。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 台灣 TAIDE 模型計畫。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "234",
            "subject": "中科一",
            "category": "治理政策",
            "principle": "問責",
            "title": "合規人工智慧",
            "eng_name": "Compliant AI",
            "eng_abbr": "-",
            "def": "確保 AI 系統從研發到部署全程符合個資法、資安法等法律要求的技術。",
            "key_goal": "符合法律規範",
            "key_principle": "合規自動化檢核",
            "key_purpose": "降低法律訴訟風險",
            "common_apps": "金融業 AI 模型必須符合金管會規範。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 金融業 AI 模型必須符合金管會規範。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "303",
            "subject": "中科一",
            "category": "治理政策",
            "principle": "永續發展與福祉",
            "title": "數據主權",
            "eng_name": "Data Sovereignty",
            "eng_abbr": "-",
            "def": "指數據受其收集地國家法律管轄與保護的權利。",
            "key_goal": "掌握數據控制權",
            "key_principle": "地緣政治與資料在地化",
            "key_purpose": "防止敏感資料外流",
            "common_apps": "醫療個資必須儲存在該國境內的伺服器。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫療個資必須儲存在該國境內的伺服器。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "財務評估",
        "topics": [
          {
            "id": "241",
            "subject": "中科一",
            "category": "財務評估",
            "principle": "永續發展與福祉",
            "title": "推論成本",
            "eng_name": "Inference Cost",
            "eng_abbr": "-",
            "def": "每執行一次 AI 預測所需支付的算力、電費或 API 授權費用。",
            "key_goal": "降低運行預算",
            "key_principle": "單次請求運算成本",
            "key_purpose": "評估專案商業可行性",
            "common_apps": "決定使用 GPT-4 或是更便宜的 Llama 3。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 決定使用 GPT-4 或是更便宜的 Llama 3。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "NLP/搜尋",
        "topics": [
          {
            "id": "249",
            "subject": "中科一",
            "category": "NLP/搜尋",
            "principle": "透明與可解釋",
            "title": "嵌入 / 向量化",
            "eng_name": "Embedding",
            "eng_abbr": "-",
            "def": "將離散變數（如單字）轉換為連續向量，捕捉語義相似性。",
            "key_goal": "語義數值表示",
            "key_principle": "高維空間映射",
            "key_purpose": "語義搜尋與 RAG",
            "common_apps": "將文件轉換為向量存入資料庫。",
            "scenarios": {
              "weather": "環境監控：氣象法規/標準文件RAG問答系統",
              "agri": "智慧耕作：農業技術資料庫RAG問答助理（查詢防治方法）",
              "traffic": "智慧物流：運輸法規/路線資料庫AI查詢",
              "industry": "預測性維護：設備維修手冊RAG問答（快速查詢故障碼）",
              "finance": "智慧醫療：醫學文獻RAG輔助診斷；金融：法規合規即時查詢",
              "life": "智能客服：企業內部產品知識庫RAG問答（減少幻覺）",
              "fire": "公共安全：消防法規/救災程序RAG查詢助理"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將文件轉換為向量存入資料庫。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "內容治理",
        "topics": [
          {
            "id": "251",
            "subject": "中科一",
            "category": "內容治理",
            "principle": "透明與可解釋",
            "title": "幻覺偵測器",
            "eng_name": "Hallucination Detector",
            "eng_abbr": "-",
            "def": "專門用於識別 AI 生成內容中事實錯誤或邏輯矛盾的檢測工具。",
            "key_goal": "提升資訊可信度",
            "key_principle": "事實一致性比對",
            "key_purpose": "輔助人工審核",
            "common_apps": "法律 AI 輸出後自動標註可能虛構的條文。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 法律 AI 輸出後自動標註可能虛構的條文。 下，傳統方案難以處理變數過多的情境，而 幻覺偵測器 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "環境保護",
        "topics": [
          {
            "id": "261",
            "subject": "中科一",
            "category": "環境保護",
            "principle": "永續發展與福祉",
            "title": "永續人工智慧",
            "eng_name": "Sustainable AI",
            "eng_abbr": "-",
            "def": "專注於降低 AI 運算對資源（電、水、碳）消耗的技術與開發模式。",
            "key_goal": "減少碳足跡",
            "key_principle": "綠色算力與高能效模型",
            "key_purpose": "企業 ESG 實踐",
            "common_apps": "採用量化技術減少伺服器耗電。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 採用量化技術減少伺服器耗電。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "推論優化",
        "topics": [
          {
            "id": "264",
            "subject": "中科一",
            "category": "推論優化",
            "principle": "永續發展與福祉",
            "title": "閃電注意力",
            "eng_name": "Flash Attention",
            "eng_abbr": "-",
            "def": "一種加速 Transformer 注意力機制運算的演算法，透過減少 GPU 顯存讀寫次數提升速度 。",
            "key_goal": "減少記憶體讀寫",
            "key_principle": "分塊計算與算子融合",
            "key_purpose": "提升長文本處理速度",
            "common_apps": "在 128k 超長上下文模型中維持運算效率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在 128k 超長上下文模型中維持運算效率。 下，傳統方案難以處理變數過多的情境，而 閃電注意力 則能透過多維數據提取深層規律。"
          },
          {
            "id": "265",
            "subject": "中科一",
            "category": "推論優化",
            "principle": "永續發展與福祉",
            "title": "KV 快取",
            "eng_name": "KV Cache",
            "eng_abbr": "-",
            "def": "在生成式 AI 推論時，將先前 Token 的 Key 與 Value 向量存入顯存，避免重複計算。",
            "key_goal": "降低重複運算",
            "key_principle": "儲存已計算的鍵值向量",
            "key_purpose": "加速文字生成速度",
            "common_apps": "讓 ChatGPT 輸出時不必每次都重算前面的對話。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 讓 ChatGPT 輸出時不必每次都重算前面的對話。 下，傳統方案難以處理變數過多的情境，而 KV 快取 則能透過多維數據提取深層規律。"
          },
          {
            "id": "312",
            "subject": "中科一",
            "category": "推論優化",
            "principle": "永續發展與福祉",
            "title": "水母 (解碼優化)",
            "eng_name": "Medusa",
            "eng_abbr": "-",
            "def": "透過在模型頂端添加多個預測頭，一次生成多個 Token，大幅提升解碼速度。",
            "key_goal": "加速 LLM 推論",
            "key_principle": "多解碼頭並行預測",
            "key_purpose": "即時對話加速",
            "common_apps": "讓 Llama 3 的文字輸出速度提升 2 倍以上。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 讓 Llama 3 的文字輸出速度提升 2 倍以上。 下，傳統方案難以處理變數過多的情境，而 水母 (解碼優化) 則能透過多維數據提取深層規律。"
          },
          {
            "id": "313",
            "subject": "中科一",
            "category": "推論優化",
            "principle": "永續發展與福祉",
            "title": "投機性解碼",
            "eng_name": "Speculative Decoding",
            "eng_abbr": "-",
            "def": "先用小型模型快速生成草稿，再由大型模型一次性驗證對錯，大幅節省算力。",
            "key_goal": "以小博大加速推論",
            "key_principle": "大小模型協同工作",
            "key_purpose": "提升 API 回應效率",
            "common_apps": "在端側運行小模型輔助雲端大模型加速。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在端側運行小模型輔助雲端大模型加速。 下，傳統方案難以處理變數過多的情境，而 投機性解碼 則能透過多維數據提取深層規律。"
          },
          {
            "id": "314",
            "subject": "中科一",
            "category": "推論優化",
            "principle": "永續發展與福祉",
            "title": "樹狀注意力",
            "eng_name": "Tree-based Attention",
            "eng_abbr": "-",
            "def": "允許模型同時評估多個推理分支，適合處理像 Medusa 這種一次生成多個路徑的解碼。",
            "key_goal": "處理非線性推理",
            "key_principle": "樹結構並行計算",
            "key_purpose": "複雜邏輯推理加速",
            "common_apps": "強化思維鏈 (CoT) 的生成速度。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 強化思維鏈 (CoT) 的生成速度。 下，傳統方案難以處理變數過多的情境，而 樹狀注意力 則能透過多維數據提取深層規律。"
          },
          {
            "id": "315",
            "subject": "中科一",
            "category": "推論優化",
            "principle": "永續發展與福祉",
            "title": "分頁注意力",
            "eng_name": "PagedAttention",
            "eng_abbr": "-",
            "def": "由 vLLM 提出，將 KV 快取分塊存儲，減少顯存碎片化，提升併發處理能力。",
            "key_goal": "優化顯存管理",
            "key_principle": "虛擬記憶體分頁機制",
            "key_purpose": "提升服務吞吐量",
            "common_apps": "讓單張 GPU 能同時服務更多位使用者。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 讓單張 GPU 能同時服務更多位使用者。 下，傳統方案難以處理變數過多的情境，而 分頁注意力 則能透過多維數據提取深層規律。"
          },
          {
            "id": "318",
            "subject": "中科一",
            "category": "推論優化",
            "principle": "永續發展與福祉",
            "title": "龍蝦架構 / 脫殼機器人",
            "eng_name": "Lobster / Moltbot",
            "eng_abbr": "",
            "def": "由 DeepMind 或相關研究提出的推論加速架構，透過「草稿-驗證」機制優化 Token 生成效率。",
            "key_goal": "極致提升推論速度",
            "key_principle": "動態投機解碼 (Dynamic Speculative Decoding)",
            "key_purpose": "降低大型模型推論時的等待時間與運算能耗。",
            "common_apps": "在資源受限的邊緣設備上運行高性能 LLM。",
            "scenarios": {
              "weather": "環境監控：感測器端即時PM2.5分析（不上傳雲端）；邊緣站即時地震預警運算",
              "agri": "智慧耕作：田埂感測器本地即時土壤分析決策；畜牧：牲畜項圈端健康監測",
              "traffic": "自駕與輔助：車內ADAS即時障礙物偵測（低延遲）；路側單元即時車流分析",
              "industry": "品質檢測：產線攝影機端即時瑕疵判斷；預測性維護：感測器端即時異常偵測",
              "finance": "智慧醫療：手術室設備端即時生命徵象分析；穿戴裝置端健康偵測",
              "life": "智慧生活：智慧家電本地語音處理（保護隱私）；收銀端即時商品識別",
              "fire": "智慧消防：煙霧感測器端即時火災判斷（斷網也能動）；監控攝影機端人臉比對"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在資源受限的邊緣設備上運行高性能 LLM。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "330",
            "subject": "中科一",
            "category": "推論優化",
            "principle": "永續發展與福祉",
            "title": "提示詞快取",
            "eng_name": "Prompt Caching",
            "eng_abbr": "-",
            "def": "儲存長提示詞（如整本書）的運算中間狀態，下次輸入相同前綴時可跳過運算。",
            "key_goal": "降低重複輸入成本",
            "key_principle": "前綴 KV 快取重用",
            "key_purpose": "減少長文本處理延遲",
            "common_apps": "頻繁對同一份法律卷宗提問時，大幅降低每次的 Token 費用。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 頻繁對同一份法律卷宗提問時，大幅降低每次的 Token 費用。 下，傳統方案難以處理變數過多的情境，而 提示詞快取 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "應用開發",
        "topics": [
          {
            "id": "270",
            "subject": "中科一",
            "category": "應用開發",
            "principle": "永續發展與福祉",
            "title": "基於感測器的決策",
            "eng_name": "Sensor-based Decision",
            "eng_abbr": "-",
            "def": "系統依據感測器採集的物理數據（如溫壓、影像）自動觸發特定動作的流程。",
            "key_goal": "實現環境感知自動化",
            "key_principle": "多感測器數據融合",
            "key_purpose": "工業 4.0 智慧製造",
            "common_apps": "偵測到設備溫度過高時，AI 自動下達降速或停機指令 。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 偵測到設備溫度過高時，AI 自動下達降速或停機指令 。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "323",
            "subject": "中科一",
            "category": "應用開發",
            "principle": "永續發展與福祉",
            "title": "超完備自動補全",
            "eng_name": "Supercomplete",
            "eng_abbr": "",
            "def": "一種進階的程式碼或文字補全技術，能根據極少數輸入一次性生成數十行結構完整的程式碼。",
            "key_goal": "實現「意圖先行」開發",
            "key_principle": "高機率序列預測",
            "key_purpose": "極大化提升開發者的撰寫效率。",
            "common_apps": "剛輸入 def login():，AI 就自動補全了驗證、加密與資料庫寫入的所有邏輯。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 剛輸入 def login():，AI 就自動補全了驗證、加密與資料庫寫入的所有邏輯。 下，傳統方案難以處理變數過多的情境，而 超完備自動補全 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "系統部署",
        "topics": [
          {
            "id": "272",
            "subject": "中科一",
            "category": "系統部署",
            "principle": "永續發展與福祉",
            "title": "具身智能",
            "eng_name": "Embodied AI",
            "eng_abbr": "-",
            "def": "賦予 AI 物理身體（如機器人、無人機），使其能在真實世界中感知並行動。",
            "key_goal": "物理世界互動",
            "key_principle": "智能體與環境閉環",
            "key_purpose": "智慧物流、家用機器人",
            "common_apps": "AI 機器人能自主在倉庫中避開障礙物並搬運貨物。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 機器人能自主在倉庫中避開障礙物並搬運貨物。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "273",
            "subject": "中科一",
            "category": "系統部署",
            "principle": "隱私保護",
            "title": "裝置端推論",
            "eng_name": "On-device Inference",
            "eng_abbr": "-",
            "def": "直接在手機或邊緣設備上運行 AI 推論，不需上傳數據到雲端 。",
            "key_goal": "降低延遲與保護隱私",
            "key_principle": "本地端運算晶片",
            "key_purpose": "即時翻譯、人臉解鎖",
            "common_apps": "在無網路環境下進行手機語音辨識。",
            "scenarios": {
              "weather": "",
              "agri": "畜牧管理：牛隻個體臉部識別追蹤（乳牛個體健康管理）",
              "traffic": "自駕與輔助：疲勞駕駛臉部特徵偵測（眼皮閉合角度）",
              "industry": "製程優化：廠區人員身份核驗，防止未授權進入",
              "finance": "金融科技：ATM/網銀人臉身份核實；健康管家：情緒健康狀態辨識",
              "life": "智慧零售：販賣機顧客年齡/性別分析精準推薦",
              "fire": "公共安全：協尋失蹤/通緝人員特徵比對；刑事案件追查"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在無網路環境下進行手機語音辨識。 下，傳統方案難以處理變數過多的情境，而 裝置端推論 則能透過多維數據提取深層規律。"
          },
          {
            "id": "340",
            "subject": "中科一",
            "category": "系統部署",
            "principle": "永續發展與福祉",
            "title": "藍綠部署",
            "eng_name": "Blue-Green Deployment",
            "eng_abbr": "-",
            "def": "同時維護兩個相同的生產環境（藍/綠），新版本上線至其中一個，驗證無誤後再將流量導向。",
            "key_goal": "實現零停機更新",
            "key_principle": "雙環境切換機制",
            "key_purpose": "關鍵任務 AI 服務更新",
            "common_apps": "確保銀行 AI 客服在升級過程中，使用者完全感受不到中斷。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 確保銀行 AI 客服在升級過程中，使用者完全感受不到中斷。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "568",
            "subject": "中科一",
            "category": "系統部署",
            "principle": "安全與問責",
            "title": "即時推論",
            "eng_name": "Real-time Inference",
            "eng_abbr": "-",
            "def": "AI 模型接收輸入數據後，在極短時間內（通常為毫秒級）完成運算並輸出結果的過程。",
            "key_goal": "極低延遲決策",
            "key_principle": "串流數據處理與硬體加速",
            "key_purpose": "用於需要立即回饋的關鍵任務。",
            "common_apps": "手術機器人即時避障、急診病灶自動偵測。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 手術機器人即時避障、急診病灶自動偵測。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "系統優化",
        "topics": [
          {
            "id": "277",
            "subject": "中科一",
            "category": "系統優化",
            "principle": "永續發展與福祉",
            "title": "Groq 處理器",
            "eng_name": "Groq",
            "eng_abbr": "-",
            "def": "專為 LLM 推論設計的新型處理器，強調極低延遲與極高吞吐量。",
            "key_goal": "突破推論速度極限",
            "key_principle": "LPU 線性處理器架構",
            "key_purpose": "即時語音互動",
            "common_apps": "實現無延遲的 AI 真人語音對話服務。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 實現無延遲的 AI 真人語音對話服務。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "392",
            "subject": "中科一",
            "category": "系統優化",
            "principle": "永續發展與福祉",
            "title": "模型尺度擴展 (壁虎至獨角獸)",
            "eng_name": "Model Scaling (Gecko to Unicorn)",
            "eng_abbr": "-",
            "def": "PaLM 2 提出的四種尺寸規格，Gecko 極小可跑在手機，Unicorn 最大用於雲端重任務。",
            "key_goal": "針對不同裝置優化效能",
            "key_principle": "參數規模分級策略",
            "key_purpose": "滿足從邊緣端到雲端的多元部署需求。",
            "common_apps": "在手機本地運行 Gecko 進行私密簡訊摘要。",
            "scenarios": {
              "weather": "環境監控：感測器端即時PM2.5分析（不上傳雲端）；邊緣站即時地震預警運算",
              "agri": "智慧耕作：田埂感測器本地即時土壤分析決策；畜牧：牲畜項圈端健康監測",
              "traffic": "自駕與輔助：車內ADAS即時障礙物偵測（低延遲）；路側單元即時車流分析",
              "industry": "品質檢測：產線攝影機端即時瑕疵判斷；預測性維護：感測器端即時異常偵測",
              "finance": "智慧醫療：手術室設備端即時生命徵象分析；穿戴裝置端健康偵測",
              "life": "智慧生活：智慧家電本地語音處理（保護隱私）；收銀端即時商品識別",
              "fire": "智慧消防：煙霧感測器端即時火災判斷（斷網也能動）；監控攝影機端人臉比對"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在手機本地運行 Gecko 進行私密簡訊摘要。 下，傳統方案難以處理變數過多的情境，而 模型尺度擴展 (壁虎至獨角獸) 則能透過多維數據提取深層規律。"
          },
          {
            "id": "446",
            "subject": "中科一",
            "category": "系統優化",
            "principle": "永續發展與福祉",
            "title": "算力成本優化",
            "eng_name": "Compute Cost Optimization",
            "eng_abbr": "-",
            "def": "透過模型壓縮與調度策略，在不犧牲精度的前提下減少運算資源消耗的過程。",
            "key_goal": "提升投報率 (ROI)",
            "key_principle": "量化、剪枝與架構優化",
            "key_purpose": "降低企業 AI 落地門檻。",
            "common_apps": "使用量化技術將 FP16 轉為 INT8 以節省一半顯存。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 使用量化技術將 FP16 轉為 INT8 以節省一半顯存。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "應用平台",
        "topics": [
          {
            "id": "278",
            "subject": "中科一",
            "category": "應用平台",
            "principle": "永續發展與福祉",
            "title": "空間 / 畫布模式",
            "eng_name": "Spaces",
            "eng_abbr": "-",
            "def": "提供一個可自由配置 AI 代理人、數據與工具的視覺化工作環境。",
            "key_goal": "提升協作體驗",
            "key_principle": "視覺化操作介面",
            "key_purpose": "專案團隊協作",
            "common_apps": "多人共同在一個 AI 畫布上進行腦力激盪與生成報告。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 多人共同在一個 AI 畫布上進行腦力激盪與生成報告。 下，傳統方案難以處理變數過多的情境，而 空間 / 畫布模式 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "雲端架構",
        "topics": [
          {
            "id": "308",
            "subject": "中科一",
            "category": "雲端架構",
            "principle": "永續發展與福祉",
            "title": "無伺服器運算",
            "eng_name": "Serverless Computing",
            "eng_abbr": "-",
            "def": "開發者只需編寫代碼，無需管理伺服器，系統根據請求量自動擴縮容。",
            "key_goal": "降低維運成本",
            "key_principle": "事件驅動與按需分配",
            "key_purpose": "輕量化 AI API 調用",
            "common_apps": "只有當使用者上傳照片時，才啟動影像辨識代碼。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 只有當使用者上傳照片時，才啟動影像辨識代碼。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "310",
            "subject": "中科一",
            "category": "雲端架構",
            "principle": "永續發展與福祉",
            "title": "彈性負載平衡",
            "eng_name": "Elastic Load Balancing",
            "eng_abbr": "ELB",
            "def": "自動將進入的網路流量分配到多台後端伺服器，防止單點崩潰。",
            "key_goal": "提高系統穩定性",
            "key_principle": "流量分發與健康檢查",
            "key_purpose": "高可用 AI 服務",
            "common_apps": "確保當一台模型伺服器當機時，請求能自動轉向其他伺服器。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 確保當一台模型伺服器當機時，請求能自動轉向其他伺服器。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數據遷移",
        "topics": [
          {
            "id": "309",
            "subject": "中科一",
            "category": "數據遷移",
            "principle": "永續發展與福祉",
            "title": "數據庫遷移服務",
            "eng_name": "Database Migration Service",
            "eng_abbr": "DMS",
            "def": "協助企業將在地資料庫安全、快速地遷移至雲端環境的工具。",
            "key_goal": "簡化上雲流程",
            "key_principle": "自動化架構轉換與數據同步",
            "key_purpose": "企業數位轉型上雲",
            "common_apps": "將舊有的 SQL Server 遷移至雲端的 RDS。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 將舊有的 SQL Server 遷移至雲端的 RDS。 下，傳統方案難以處理變數過多的情境，而 數據庫遷移服務 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "應用介面",
        "topics": [
          {
            "id": "317",
            "subject": "中科一",
            "category": "應用介面",
            "principle": "永續發展與福祉",
            "title": "計算機使用 (代理人能力)",
            "eng_name": "Computer Use",
            "eng_abbr": "-",
            "def": "AI 代理人能像人一樣看螢幕、移動游標、點擊按鈕與輸入文字。",
            "key_goal": "實現真正數位員工",
            "key_principle": "螢幕感知與模擬操作",
            "key_purpose": "自動化跨軟體操作",
            "common_apps": "指令 AI「去 Excel 抓數據後，打開瀏覽器幫我填寫報稅表單」。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 指令 AI「去 Excel 抓數據後，打開瀏覽器幫我填寫報稅表單」。 下，傳統方案難以處理變數過多的情境，而 計算機使用 (代理人能力) 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "具身智能",
        "topics": [
          {
            "id": "319",
            "subject": "中科一",
            "category": "具身智能",
            "principle": "永續發展與福祉",
            "title": "開放爪協議",
            "eng_name": "Open Claw Protocol",
            "eng_abbr": "Open Claw",
            "def": "一種開源標準，旨在定義機器手臂末端夾爪的通訊協議、受力反饋與運動邏輯，使不同品牌的 AI 大腦能控制不同品牌的物理夾爪。",
            "key_goal": "統一終端執行器標準",
            "key_principle": "硬體抽象化層 (HAL)",
            "key_purpose": "降低機器人開發門檻與硬體更換成本。",
            "common_apps": "研發人員更換不同尺寸的夾爪時，無需重寫底層控制代碼。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 研發人員更換不同尺寸的夾爪時，無需重寫底層控制代碼。 下，傳統方案難以處理變數過多的情境，而 開放爪協議 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "AI 應用",
        "topics": [
          {
            "id": "322",
            "subject": "中科一",
            "category": "AI 應用",
            "principle": "永續發展與福祉",
            "title": "管理員視角",
            "eng_name": "Manager View",
            "eng_abbr": "",
            "def": "在企業級 AI 平台（如 Dify 或企業版 ChatGPT）中，供主管監看 AI 代理人執行進度與 Token 消耗的儀表板。",
            "key_goal": "提升專案管控力",
            "key_principle": "權限分層與追蹤架構",
            "key_purpose": "確保企業 AI 應用的經濟效益與合規。",
            "common_apps": "部門主管檢視「數位員工」今日處理了多少份請假單。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 部門主管檢視「數位員工」今日處理了多少份請假單。 下，傳統方案難以處理變數過多的情境，而 管理員視角 則能透過多維數據提取深層規律。"
          },
          {
            "id": "451",
            "subject": "中科一",
            "category": "AI 應用",
            "principle": "永續發展與福祉",
            "title": "工業級部署",
            "eng_name": "Industrial Deployment",
            "eng_abbr": "-",
            "def": "將 AI 模型轉化為具備高可用性、穩定性且符合企業資安規範的正式服務。",
            "key_goal": "實現商業產線落地",
            "key_principle": "高可靠性系統整合",
            "key_purpose": "實現 AI 的商業價值。",
            "common_apps": "在晶圓廠產線上部署 AI 瑕疵檢測系統。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在晶圓廠產線上部署 AI 瑕疵檢測系統。 下，傳統方案難以處理變數過多的情境，而 工業級部署 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "AI 技能",
        "topics": [
          {
            "id": "324",
            "subject": "中科一",
            "category": "AI 技能",
            "principle": "永續發展與福祉",
            "title": "技能庫",
            "eng_name": "Skills",
            "eng_abbr": "",
            "def": "預先定義好的功能模組（如計算機、聯網搜尋、繪圖），AI 代理人可根據任務需求自主調用。",
            "key_goal": "擴展 AI 功能邊界",
            "key_principle": "外掛插件與工具調用 (Tool Use)",
            "key_purpose": "讓模型具備處理特定任務的硬實力。",
            "common_apps": "AI 發現需要匯率轉換時，自動調用「匯率 Skills」獲取最新數據。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 AI 發現需要匯率轉換時，自動調用「匯率 Skills」獲取最新數據。 下，傳統方案難以處理變數過多的情境，而 技能庫 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "本土模型",
        "topics": [
          {
            "id": "326",
            "subject": "中科一",
            "category": "本土模型",
            "principle": "永續發展與福祉",
            "title": "開源中文語言福利 / 優化",
            "eng_name": "Open Chinese Language Welfare",
            "eng_abbr": "OpenCLaW",
            "def": "專注於收集高品質、開源的繁體與簡體中文數據集，用以改善全球開源模型對中文的理解與生成能力。",
            "key_goal": "提升中文模型表現",
            "key_principle": "數據集清洗與對齊",
            "key_purpose": "解決開源模型中文能力弱的問題。",
            "common_apps": "作為 TAIDE 或 Llama 中文微調的基礎語料庫。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 作為 TAIDE 或 Llama 中文微調的基礎語料庫。 下，傳統方案難以處理變數過多的情境，而 開源中文語言福利 / 優化 則能透過多維數據提取深層規律。"
          },
          {
            "id": "440",
            "subject": "中科一",
            "category": "本土模型",
            "principle": "永續發展與福祉",
            "title": "台版大型語言模型",
            "eng_name": "Trustworthy AI Dialogue Engine",
            "eng_abbr": "TAIDE",
            "def": "國科會主導，以 Llama 為基礎並使用台灣在地資料（新聞、法律、公文）微調的模型。",
            "key_goal": "解決本土語法謬誤",
            "key_principle": "繁體中文語境強化",
            "key_purpose": "處理具台灣文化背景的文本。",
            "common_apps": "公務員利用 TAIDE 撰寫符合政府規範的公文草稿。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 公務員利用 TAIDE 撰寫符合政府規範的公文草稿。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "447",
            "subject": "中科一",
            "category": "本土模型",
            "principle": "永續發展與福祉",
            "title": "醫學大模型計畫",
            "eng_name": "Project TAME",
            "eng_abbr": "TAME",
            "def": "由台大、台榮總等多家醫學中心聯合發起的醫療專用大語言模型計畫。",
            "key_goal": "打造世界級醫療 AI",
            "key_principle": "跨院所醫療數據融合",
            "key_purpose": "提升臨床輔助診斷效能。",
            "common_apps": "AI 協助判讀病歷並給予醫師符合台灣醫療規範的建議。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 AI 協助判讀病歷並給予醫師符合台灣醫療規範的建議。 下，傳統方案難以處理變數過多的情境，而 醫學大模型計畫 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "AI 安全",
        "topics": [
          {
            "id": "328",
            "subject": "中科一",
            "category": "AI 安全",
            "principle": "隱私保護",
            "title": "沙盒執行",
            "eng_name": "Sandbox Execution",
            "eng_abbr": "-",
            "def": "在與主系統隔離的受限環境中執行程式碼，防止惡意指令損害伺服器或竊取資料。",
            "key_goal": "隔離惡劣影響",
            "key_principle": "受限環境運行",
            "key_purpose": "執行 AI 生成的不可信代碼",
            "common_apps": "Claude 的 \"Computer Use\" 在沙盒中模擬點擊以保護用戶主機。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 Claude 的 \"Computer Use\" 在沙盒中模擬點擊以保護用戶主機。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "350",
            "subject": "中科一",
            "category": "AI 安全",
            "principle": "隱私保護",
            "title": "沙盒化權限",
            "eng_name": "Sandboxed Permissions",
            "eng_abbr": "-",
            "def": "僅授予 AI 在特定沙盒環境中運行的最小必要權限，防止干預主系統。",
            "key_goal": "限制破壞範圍",
            "key_principle": "資源隔離與權限最小化",
            "key_purpose": "保護使用者敏感資料安全。",
            "common_apps": "讓 AI 在沙盒中執行一段下載自網路的腳本。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 讓 AI 在沙盒中執行一段下載自網路的腳本。 下，傳統方案難以處理變數過多的情境，而 沙盒化權限 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "知名平台",
        "topics": [
          {
            "id": "337",
            "subject": "中科一",
            "category": "知名平台",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "Lovable",
            "eng_abbr": "-",
            "def": "一款主打「只需描述、即可生成」的開發平台，能自動產出高品質的前後端代碼。",
            "key_goal": "全棧應用生成",
            "key_principle": "AI 代碼寫作與部署整合",
            "key_purpose": "非技術人員開發應用",
            "common_apps": "行銷人員自行開發一個內部的活動報名系統。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 行銷人員自行開發一個內部的活動報名系統。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "開發工具",
        "topics": [
          {
            "id": "338",
            "subject": "中科一",
            "category": "開發工具",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "Replit",
            "eng_abbr": "-",
            "def": "一個基於雲端的代碼開發平台，提供即時的協作環境、託管服務與 AI 助手。",
            "key_goal": "雲端協作編程",
            "key_principle": "瀏覽器內的 IDE 環境",
            "key_purpose": "跨團隊遠端開發 AI 專案",
            "common_apps": "學生不需要安裝任何軟體即可開始練習 Python AI 編程。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 學生不需要安裝任何軟體即可開始練習 Python AI 編程。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "自動化工具",
        "topics": [
          {
            "id": "351",
            "subject": "中科一",
            "category": "自動化工具",
            "principle": "永續發展與福祉",
            "title": "無頭瀏覽器控制",
            "eng_name": "Headless Browser Control",
            "eng_abbr": "-",
            "def": "在沒有圖形介面的情況下，由程式控制瀏覽器進行網頁抓取或自動化操作。",
            "key_goal": "自動化網頁任務",
            "key_principle": "無介面瀏覽器驅動",
            "key_purpose": "進行大規模數據採集。",
            "common_apps": "AI 代理人自動在背景掃描數百個徵才網頁。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 AI 代理人自動在背景掃描數百個徵才網頁。 下，傳統方案難以處理變數過多的情境，而 無頭瀏覽器控制 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "AI 範式",
        "topics": [
          {
            "id": "359",
            "subject": "中科一",
            "category": "AI 範式",
            "principle": "透明與可解釋",
            "title": "基於規則的系統",
            "eng_name": "Rule-based Systems",
            "eng_abbr": "-",
            "def": "透過人工定義的一系列邏輯規則進行決策的系統，不具備自主學習能力。",
            "key_goal": "確保 100% 可預測性",
            "key_principle": "IF-THEN 邏輯庫",
            "key_purpose": "處理邏輯極端嚴謹的任務。",
            "common_apps": "銀行自動化核貸的基礎硬性條件審核。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 銀行自動化核貸的基礎硬性條件審核。 下，傳統方案難以處理變數過多的情境，而 基於規則的系統 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "知名工具",
        "topics": [
          {
            "id": "367",
            "subject": "中科一",
            "category": "知名工具",
            "principle": "永續發展與福祉",
            "title": "克勞德調度器",
            "eng_name": "Claude Dispatch",
            "eng_abbr": "-",
            "def": "Anthropic 提供的調度機制，根據任務難易度自動選擇使用 Haiku、Sonnet 或 Opus 模型。",
            "key_goal": "優化模型調度成本",
            "key_principle": "任務複雜度感知分流",
            "key_purpose": "平衡 API 回應速度與使用成本。",
            "common_apps": "簡單摘要由 Haiku 處理，複雜邏輯推理自動轉給 Opus。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 簡單摘要由 Haiku 處理，複雜邏輯推理自動轉給 Opus。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "系統管理",
        "topics": [
          {
            "id": "371",
            "subject": "中科一",
            "category": "系統管理",
            "principle": "問責",
            "title": "調度審計日誌",
            "eng_name": "Dispatch Audit Logs",
            "eng_abbr": "-",
            "def": "詳盡記錄每一個任務被派發給哪個模型、原因為何、執行結果及成本的日誌。",
            "key_goal": "確保決策可追溯",
            "key_principle": "軌跡紀錄與存證",
            "key_purpose": "滿足法律合規與內部稽核需求。",
            "common_apps": "檢查為何某次醫療 AI 諮詢被指派給了低精度的輕量模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 檢查為何某次醫療 AI 諮詢被指派給了低精度的輕量模型。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "知名模型",
        "topics": [
          {
            "id": "386",
            "subject": "中科一",
            "category": "知名模型",
            "principle": "永續發展與福祉",
            "title": "路徑語言模型",
            "eng_name": "Pathways Language Model",
            "eng_abbr": "PaLM",
            "def": "Google 開發的 540B 參數大模型，首次展示了在數千個 TPU 晶片上高效並行訓練的能力。",
            "key_goal": "實現高效大規模訓練",
            "key_principle": "Pathways 異構運算架構",
            "key_purpose": "展現大規模參數帶來的湧現能力。",
            "common_apps": "進行複雜的數學推理與代碼編寫。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 進行複雜的數學推理與代碼編寫。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "387",
            "subject": "中科一",
            "category": "知名模型",
            "principle": "永續發展與福祉",
            "title": "路徑語言模型 2",
            "eng_name": "Pathways Language Model 2",
            "eng_abbr": "PaLM 2",
            "def": "PaLM 的進化版（Gemini 的前身），在推理、編碼及多語言理解上大幅超越前作。",
            "key_goal": "提升推理與多語言能力",
            "key_principle": "混合架構與多樣化語料",
            "key_purpose": "作為 Google 多項 AI 服務的底層大腦。",
            "common_apps": "驅動早期版本的 Google Bard (現 Gemini)。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 驅動早期版本的 Google Bard (現 Gemini)。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "432",
            "subject": "中科一",
            "category": "知名模型",
            "principle": "永續發展與福祉",
            "title": "生成式預訓練變換器",
            "eng_name": "Generative Pre-trained Transformer",
            "eng_abbr": "GPT",
            "def": "OpenAI 開發的自回歸模型(即單向Transformer Decoder)，透過預測下一個 Token 學習大規模語言規律。",
            "key_goal": "實現高品質文本生成",
            "key_principle": "Decoder-only 預訓練",
            "key_purpose": "對話 AI、代碼編寫、摘要。",
            "common_apps": "驅動 ChatGPT 進行流暢的人機對話。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 驅動 ChatGPT 進行流暢的人機對話。 下，傳統方案難以處理變數過多的情境，而 生成式預訓練變換器 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "領域模型",
        "topics": [
          {
            "id": "393",
            "subject": "中科一",
            "category": "領域模型",
            "principle": "永續發展與福祉",
            "title": "醫療 / 安全專用 PaLM",
            "eng_name": "Med-PaLM 2 / Sec-PaLM",
            "eng_abbr": "-",
            "def": "以 PaLM 2 為基礎，針對醫療醫學或資安領域進行深度微調的專家模型。",
            "key_goal": "專業領域精準化",
            "key_principle": "領域知識微調與對齊",
            "key_purpose": "提供專業醫療諮詢或偵測網路攻擊代碼。",
            "common_apps": "輔助醫生閱讀檢查報告或分析病毒行為。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 輔助醫生閱讀檢查報告或分析病毒行為。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "台灣組織",
        "topics": [
          {
            "id": "437",
            "subject": "中科一",
            "category": "台灣組織",
            "principle": "問責",
            "title": "人工智慧評測中心",
            "eng_name": "Artificial Intelligence Evaluation Center",
            "eng_abbr": "AIEC",
            "def": "台灣成立的國家級機構，負責建立 AI 模型的安全性、準確性與倫理評測標準。",
            "key_goal": "確保 AI 安全與合規",
            "key_principle": "標準化測試與驗證",
            "key_purpose": "提供第三方 AI 認證標章。",
            "common_apps": "企業將其 AI 系統送測以確保無資安與偏見風險。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 企業將其 AI 系統送測以確保無資安與偏見風險。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "438",
            "subject": "中科一",
            "category": "台灣組織",
            "principle": "永續發展與福祉",
            "title": "台灣 AI 雲",
            "eng_name": "Taiwan AI Cloud",
            "eng_abbr": "TWCC",
            "def": "由國研院國網中心打造，提供大规模 GPU 運算資源供學術與產業進行 AI 開發。",
            "key_goal": "提供國家級算力",
            "key_principle": "超級電腦 (Taiwania 2)",
            "key_purpose": "支撐 TAIDE 等本土模型訓練。",
            "common_apps": "台灣新創公司租用 TWCC 算力微調其專用模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 台灣新創公司租用 TWCC 算力微調其專用模型。 下，傳統方案難以處理變數過多的情境，而 台灣 AI 雲 則能透過多維數據提取深層規律。"
          },
          {
            "id": "439",
            "subject": "中科一",
            "category": "台灣組織",
            "principle": "永續發展與福祉",
            "title": "國家科學及技術委員會",
            "eng_name": "National Science and Technology Council",
            "eng_abbr": "NSTC",
            "def": "台灣政府科技事務的最高主管機關，負責推動台灣 AI 行動計畫與預算編列。",
            "key_goal": "引領科技政策",
            "key_principle": "跨部會資源整合",
            "key_purpose": "制定國家 AI 發展綱領。",
            "common_apps": "簡稱「國科會」，主導 TAIDE 專案。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 簡稱「國科會」，主導 TAIDE 專案。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "本土優化",
        "topics": [
          {
            "id": "449",
            "subject": "中科一",
            "category": "本土優化",
            "principle": "永續發展與福祉",
            "title": "繁體中文優化",
            "eng_name": "Traditional Chinese Optimization",
            "eng_abbr": "-",
            "def": "針對繁體中文語法、用詞（如：品質 vs 質量）進行特定的模型優化。",
            "key_goal": "解決語法與轉碼問題",
            "key_principle": "Tokenizer 擴充與校對",
            "key_purpose": "提升台灣使用者的體驗。",
            "common_apps": "避免 AI 在回答時出現大量簡體字或對岸用語。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 避免 AI 在回答時出現大量簡體字或對岸用語。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "多模態人工智慧",
        "topics": [
          {
            "id": "453",
            "subject": "中科一",
            "category": "多模態人工智慧",
            "principle": "永續發展與福祉",
            "title": "視覺語言模型",
            "eng_name": "Vision-Language Model",
            "eng_abbr": "VLM",
            "def": "一種能同時處理並理解圖像與文本資訊的人工智慧模型 。",
            "key_goal": "實現跨模態的語義對齊",
            "key_principle": "整合電腦視覺 (CV) 與自然語言處理 (NLP) 的聯合嵌入空間。",
            "key_purpose": "讓機器具備「看圖說故事」或根據指令修改圖像的能力。",
            "common_apps": "醫療影像自動報告生成，或視障人士的智慧環境描述導覽。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫療影像自動報告生成，或視障人士的智慧環境描述導覽。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "自然語言處理",
        "topics": [
          {
            "id": "455",
            "subject": "中科一",
            "category": "自然語言處理",
            "principle": "透明與可解釋",
            "title": "人類語言模型",
            "eng_name": "Human Language Model",
            "eng_abbr": "-",
            "def": "廣義指稱旨在理解與生成人類自然語言的模型系統 。",
            "key_goal": "模擬人類語言認知過程",
            "key_principle": "基於大規模語料庫學習語言的機率分佈與社會文化邏輯。",
            "key_purpose": "作為人機協作的基礎介面，提供具備常識感與情緒共鳴的互動。",
            "common_apps": "智慧客服系統、心理諮商輔助對話機器人。",
            "scenarios": {
              "weather": "",
              "agri": "智慧耕作：農民用藥/種植問題語音客服機器人",
              "traffic": "智慧交通：大眾運輸24H AI客服（班次/票務查詢）",
              "industry": "製程優化：設備操作問題AI即時回覆",
              "finance": "金融科技：24H智能理財/帳務客服；智慧醫療：預約/衛教問答機器人",
              "life": "智能客服：24H語音機器人、生成式AI郵件回覆（核心場景）",
              "fire": "公共安全：非緊急情況AI問答分流（釋放人工接線員）"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 智慧客服系統、心理諮商輔助對話機器人。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "460",
            "subject": "中科一",
            "category": "自然語言處理",
            "principle": "永續發展與福祉",
            "title": "文本生成與摘要",
            "eng_name": "Text Generation & Summarization",
            "eng_abbr": "-",
            "def": "利用生成模型產出新文本或將長篇文章轉化為精簡版本的技術 。",
            "key_goal": "資訊高度濃縮與產出",
            "key_principle": "提取關鍵語義並重新組合為簡練、連貫的短文。",
            "key_purpose": "幫助使用者快速掌握大量資訊的核心重點。",
            "common_apps": "新聞 App 的每日要聞自動摘要功能。",
            "scenarios": {
              "weather": "氣象預報：數值預報結果自動轉換為人讀氣象公報",
              "agri": "智慧耕作：農業異常感測自動生成告警簡訊",
              "traffic": "智慧物流：配送狀態自動生成通知訊息",
              "industry": "品質檢測：瑕疵報告自動文字生成",
              "finance": "智慧醫療：影像判讀結果自動生成醫師報告草稿；金融：理財建議書自動產出",
              "life": "智能客服：AI郵件/聊天訊息自動回覆生成",
              "fire": "公共安全：災情通報自動生成廣播稿"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 新聞 App 的每日要聞自動摘要功能。 下，傳統方案難以處理變數過多的情境，而 文本生成與摘要 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "生成式AI技術",
        "topics": [
          {
            "id": "457",
            "subject": "中科一",
            "category": "生成式AI技術",
            "principle": "永續發展與福祉",
            "title": "提示學習",
            "eng_name": "Prompt-based Learning",
            "eng_abbr": "-",
            "def": "現代 NLP 的新範式，強調「Pre-train, Prompt, and Predict」。",
            "key_goal": "轉化下游任務為預訓練任務",
            "key_principle": "將分類或生成任務重構為填空題形式，利用模型的補全能力。",
            "key_purpose": "解決少樣本 (Few-shot) 情境下的模型效能挑戰。",
            "common_apps": "在少量標註資料下，快速開發特定產業的意圖識別模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在少量標註資料下，快速開發特定產業的意圖識別模型。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "多模態",
        "topics": [
          {
            "id": "474",
            "subject": "中科一",
            "category": "多模態",
            "principle": "永續發展",
            "title": "多模態學習",
            "eng_name": "Multimodal Learning",
            "eng_abbr": "-",
            "def": "同時處理文字、影像、聲音等多種感官數據的技術。",
            "key_goal": "跨媒介資訊整合",
            "key_principle": "特徵融合與對齊",
            "key_purpose": "提升模型對複雜環境的理解。",
            "common_apps": "視障人士智慧影像導覽。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 視障人士智慧影像導覽。 下，傳統方案難以處理變數過多的情境，而 多模態學習 則能透過多維數據提取深層規律。"
          },
          {
            "id": "482",
            "subject": "中科一",
            "category": "多模態",
            "principle": "永續發展",
            "title": "語言-影像預訓練",
            "eng_name": "Contrastive Language-Image Pre-Training",
            "eng_abbr": "CLIP",
            "def": "透過大規模對齊影像與描述，實現跨模態檢索。",
            "key_goal": "語義空間對齊",
            "key_principle": "對比學習",
            "key_purpose": "零樣本影像分類。",
            "common_apps": "以文字搜尋雲端相簿。",
            "scenarios": {
              "weather": "氣象預報：衛星雲型分類（颱風眼/積雨雲）；空污：AQI等級影像分級",
              "agri": "智慧耕作：作物品種/生長階段自動分類；精準養殖：魚種健康狀態分級",
              "traffic": "智慧物流：快遞包裹損壞等級分類；交通違規類型自動歸類",
              "industry": "品質檢測：瑕疵類型（裂紋/刮傷/色差）分類統計",
              "finance": "智慧醫療：皮膚病變/眼底影像疾病分類；X光異常篩選",
              "life": "智慧零售：商品類別自動辨識上架；人臉年齡層分類個人化服務",
              "fire": "公共安全：監視器可疑物品類型辨識；消防：燃料類型判斷"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 以文字搜尋雲端相簿。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "483",
            "subject": "中科一",
            "category": "多模態",
            "principle": "永續發展",
            "title": "雙向語言-影像預訓練",
            "eng_name": "Bootstrapping Language-Image Pre-training",
            "eng_abbr": "BLIP",
            "def": "結合影像理解與生成的統一多模態框架。",
            "key_goal": "高品質標註生成",
            "key_principle": "多模型聯合訓練",
            "key_purpose": "提升視覺問答與標註品質。",
            "common_apps": "智慧電商產品描述生成。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 智慧電商產品描述生成。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "532",
            "subject": "中科一",
            "category": "多模態",
            "principle": "永續發展",
            "title": "CLIP 嵌入向量",
            "eng_name": "CLIP embeddings",
            "eng_abbr": "-",
            "def": "影像或文字經 CLIP 模型處理後生成的特徵向量，位於同一語義空間。",
            "key_goal": "跨模態語義對齊",
            "key_principle": "向量空間映射",
            "key_purpose": "實現以圖搜圖或以文搜圖。",
            "common_apps": "智慧相簿語義檢索。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 智慧相簿語義檢索。 下，傳統方案難以處理變數過多的情境，而 CLIP 嵌入向量 則能透過多維數據提取深層規律。"
          },
          {
            "id": "581",
            "subject": "中科一",
            "category": "多模態",
            "principle": "永續發展",
            "title": "多模態融合",
            "eng_name": "Multimodal Fusion",
            "eng_abbr": "-",
            "def": "將來自不同感測器（如相機、光達、超音波）的資訊整合判斷。",
            "key_goal": "提升決策可靠度",
            "key_principle": "特徵級或決策級融合",
            "key_purpose": "補足單一感測器的限制。",
            "common_apps": "自駕車在大雨環境下的障礙物辨識。",
            "scenarios": {
              "weather": "氣象預報：自駕系統結合即時路面積水/能見度警示",
              "agri": "智慧耕作：農場自駕拖拉機自動施肥/犁田",
              "traffic": "自駕與輔助：自駕公車測試、ADAS駕駛輔助、疲勞駕駛偵測（核心場景）",
              "industry": "製程優化：工廠內自駕AGV物料搬運",
              "finance": "半導體：自駕晶片研發驗證場景",
              "life": "智慧生活：配送無人車/電動輪椅自駕輔助",
              "fire": "智慧消防：救災自駕機器人進入火場偵測"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 自駕車在大雨環境下的障礙物辨識。 下，傳統方案難以處理變數過多的情境，而 多模態融合 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "AI 治理",
        "topics": [
          {
            "id": "498",
            "subject": "中科一",
            "category": "AI 治理",
            "principle": "社會共融",
            "title": "普遍性",
            "eng_name": "Universality",
            "eng_abbr": "-",
            "def": "確保 AI 技術能服務不同族群，具備廣泛適用性。",
            "key_goal": "技術可及性",
            "key_principle": "多樣化需求適應",
            "key_purpose": "降低數位落差與不平等。",
            "common_apps": "支援多國語言的即時翻譯。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 支援多國語言的即時翻譯。 下，傳統方案難以處理變數過多的情境，而 普遍性 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "數據準備",
        "topics": [
          {
            "id": "500",
            "subject": "中科一",
            "category": "數據準備",
            "principle": "隱私保護",
            "title": "資料前處理",
            "eng_name": "Data Preprocessing",
            "eng_abbr": "-",
            "def": "在訓練前對數據進行清洗與格式化處理。",
            "key_goal": "提升數據品質",
            "key_principle": "清理、轉換、歸一化",
            "key_purpose": "提升模型訓練穩定性。",
            "common_apps": "雜訊過多的感測數據處理。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 雜訊過多的感測數據處理。 下，傳統方案難以處理變數過多的情境，而 資料前處理 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "機器學習",
        "topics": [
          {
            "id": "501",
            "subject": "中科一",
            "category": "機器學習",
            "principle": "問責性",
            "title": "基本事實",
            "eng_name": "Ground Truth",
            "eng_abbr": "-",
            "def": "指資料集中經專家認可、絕對正確的真實標籤。",
            "key_goal": "效能評估指標",
            "key_principle": "標記的正確答案",
            "key_purpose": "計算模型誤差與驗證精確度。",
            "common_apps": "驗證診斷 AI 的精準率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 驗證診斷 AI 的精準率。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "影像標註",
        "topics": [
          {
            "id": "504",
            "subject": "中科一",
            "category": "影像標註",
            "principle": "安全與問責",
            "title": "電腦視覺標註工具",
            "eng_name": "Computer Vision Annotation Tool",
            "eng_abbr": "CVAT",
            "def": "由 Intel 開源，專為電腦視覺設計的標註平台，支援點、線、面標註。",
            "key_goal": "高效影片與影像標註",
            "key_principle": "互動式分割與追蹤演算法",
            "key_purpose": "用於物體偵測與語義分割任務。",
            "common_apps": "自動駕駛連續影格中的車輛追蹤。",
            "scenarios": {
              "weather": "災害監測：衛星圖像素級洪水範圍標定；PM2.5高污染區域熱點圖",
              "agri": "智慧耕作：農田土地利用類型分割（作物/雜草/裸地）；病害感染面積測量",
              "traffic": "自駕與輔助：道路/人行道/標線語義標記供ADAS感知",
              "industry": "品質檢測：PCB電路板佈線缺陷範圍精確分割",
              "finance": "智慧醫療：腫瘤/器官邊界勾勒輔助手術規劃",
              "life": "智慧生活：AR虛擬試穿人體輪廓分割",
              "fire": "智慧消防：火場煙霧/火焰像素範圍分割；逃生路徑辨識"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動駕駛連續影格中的車輛追蹤。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "506",
            "subject": "中科一",
            "category": "影像標註",
            "principle": "透明可解釋",
            "title": "影像標註工具",
            "eng_name": "LabelMe",
            "eng_abbr": "-",
            "def": "由 MIT 開發，主要用於手動標繪多邊形，適合語義分割任務。",
            "key_goal": "多邊形標註",
            "key_principle": "網頁版影像標註框架",
            "key_purpose": "建立細粒度的影像物體輪廓標籤。",
            "common_apps": "室內場景物體語義分割。",
            "scenarios": {
              "weather": "災害監測：衛星圖像素級洪水範圍標定；PM2.5高污染區域熱點圖",
              "agri": "智慧耕作：農田土地利用類型分割（作物/雜草/裸地）；病害感染面積測量",
              "traffic": "自駕與輔助：道路/人行道/標線語義標記供ADAS感知",
              "industry": "品質檢測：PCB電路板佈線缺陷範圍精確分割",
              "finance": "智慧醫療：腫瘤/器官邊界勾勒輔助手術規劃",
              "life": "智慧生活：AR虛擬試穿人體輪廓分割",
              "fire": "智慧消防：火場煙霧/火焰像素範圍分割；逃生路徑辨識"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 室內場景物體語義分割。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "508",
            "subject": "中科一",
            "category": "影像標註",
            "principle": "永續發展",
            "title": "VGG 影像標註器",
            "eng_name": "VGG Image Annotator",
            "eng_abbr": "VIA",
            "def": "由牛津大學開發，簡單、獨立且無需安裝的影像標註工具。",
            "key_goal": "輕量化標註",
            "key_principle": "瀏覽器端無外掛運行",
            "key_purpose": "快速進行點、區域與形狀標註。",
            "common_apps": "學術研究中的小規模影像標記。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 學術研究中的小規模影像標記。 下，傳統方案難以處理變數過多的情境，而 VGG 影像標註器 則能透過多維數據提取深層規律。"
          },
          {
            "id": "509",
            "subject": "中科一",
            "category": "影像標註",
            "principle": "透明可解釋",
            "title": "COCO 格式標註器",
            "eng_name": "COCO Annotator",
            "eng_abbr": "-",
            "def": "專為生成 COCO 數據集格式所設計的開源影像標註工具。",
            "key_goal": "標準化數據格式輸出",
            "key_principle": "Web 界面標註系統",
            "key_purpose": "建立具備實例分割屬性的資料集。",
            "common_apps": "公開數據集基準測試準備。",
            "scenarios": {
              "weather": "災害監測：無人機掃描洪水/土石流邊界；環境監控：衛星圖自動圈出受災範圍",
              "agri": "智慧耕作：無人機識別農田病蟲害感染區；精準養殖：魚塭漂浮異物即時偵測",
              "traffic": "智慧交通：違規停車自動拍照舉牌；智慧物流：AGV機器人障礙物即時閃避",
              "industry": "品質檢測：AOI光學系統標記瑕疵座標；預測性維護：零件磨損位置辨識",
              "finance": "智慧醫療：CT/MRI影像腫瘤候選框定輔助；半導體：晶圓表面缺陷自動標記",
              "life": "智慧零售：無人商店商品掃描自動結帳；貨架缺貨狀態即時偵測",
              "fire": "智慧消防：熱像儀畫面定位受困人員；公共安全：監視器異常聚集告警"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 公開數據集基準測試準備。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "512",
            "subject": "中科一",
            "category": "影像標註",
            "principle": "問責性",
            "title": "邊界框",
            "eng_name": "Bounding Box",
            "eng_abbr": "BBox",
            "def": "在影像中使用最小外接矩形包圍目標物，定義其在空間中的位置。",
            "key_goal": "物體位置界定",
            "key_principle": "座標點定義區域",
            "key_purpose": "物體偵測模型中最基礎的標註形式。",
            "common_apps": "監控影像中行人位置標定。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 監控影像中行人位置標定。 下，傳統方案難以處理變數過多的情境，而 邊界框 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "文字辨識",
        "topics": [
          {
            "id": "510",
            "subject": "中科一",
            "category": "文字辨識",
            "principle": "透明可解釋",
            "title": "文字辨識訓練器",
            "eng_name": "Tesseract Trainer",
            "eng_abbr": "-",
            "def": "用於訓練與微調 Tesseract OCR 引擎以辨識特定字體或語系的工具。",
            "key_goal": "OCR 模型優化",
            "key_principle": "光學字元辨識微調",
            "key_purpose": "提升特定格式文件的文字辨識率。",
            "common_apps": "銀行自動化處理手寫傳票。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 銀行自動化處理手寫傳票。 下，傳統方案難以處理變數過多的情境，而 文字辨識訓練器 則能透過多維數據提取深層規律。"
          },
          {
            "id": "511",
            "subject": "中科一",
            "category": "文字辨識",
            "principle": "透明可解釋",
            "title": "標註影像文字辨識",
            "eng_name": "LabelImg OCR",
            "eng_abbr": "-",
            "def": "將 LabelImg 標註功能與光學字元辨識結合，同時標定位置與內容。",
            "key_goal": "文字檢測與辨識整合",
            "key_principle": "邊界框與文字內容映射",
            "key_purpose": "同時標註文字位置與文字類別。",
            "common_apps": "街道招牌辨識數據集製作。",
            "scenarios": {
              "weather": "環境監控：氣象站儀表板數字自動讀取數位化",
              "agri": "精準養殖：水質感測器讀值自動記錄",
              "traffic": "智慧交通：車牌自動辨識（停車計費/違規舉牌）；物流：包裹條碼讀取",
              "industry": "品質檢測：產品序號/批號自動讀取紀錄",
              "finance": "金融科技：票據/合約文字自動擷取；智慧醫療：病歷表格數位化",
              "life": "智慧零售：電子發票/收據文字辨識",
              "fire": "公共安全：車牌辨識輔助警方追蹤"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 街道招牌辨識數據集製作。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "560",
            "subject": "中科一",
            "category": "文字辨識",
            "principle": "透明可解釋",
            "title": "字元切割",
            "eng_name": "Character Segmentation",
            "eng_abbr": "-",
            "def": "將辨識出的文字區域切分為單個字元的過程。",
            "key_goal": "孤立單個文字",
            "key_principle": "投影法或連通域分析",
            "key_purpose": "準備給分類模型進行單字辨識。",
            "common_apps": "辨識手寫地址時的字元拆解。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 辨識手寫地址時的字元拆解。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "561",
            "subject": "中科一",
            "category": "文字辨識",
            "principle": "透明可解釋",
            "title": "字元辨識",
            "eng_name": "Character Recognition",
            "eng_abbr": "-",
            "def": "將切分後的影像字元轉化為對應的數位編碼（如 ASCII）。",
            "key_goal": "文字內容轉換",
            "key_principle": "模板匹配或神經網路",
            "key_purpose": "提取影像中的資訊內容。",
            "common_apps": "掃描文件轉為 Word 檔。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 掃描文件轉為 Word 檔。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "影像處理",
        "topics": [
          {
            "id": "520",
            "subject": "中科一",
            "category": "影像處理",
            "principle": "透明可解釋",
            "title": "直方圖均衡化",
            "eng_name": "Histogram Equalization",
            "eng_abbr": "-",
            "def": "透過調整影像的灰階直方圖分佈，使其呈現均勻分佈，藉此擴大亮度範圍。",
            "key_goal": "增強影像對比度",
            "key_principle": "概率分佈重新映射",
            "key_purpose": "修正曝光不足或過度的影像，強化視覺細節。",
            "common_apps": "X光或 CT 醫學影像的對比度增強。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 X光或 CT 醫學影像的對比度增強。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "521",
            "subject": "中科一",
            "category": "影像處理",
            "principle": "永續發展",
            "title": "平滑濾波",
            "eng_name": "Smoothing Filtering",
            "eng_abbr": "-",
            "def": "透過鄰域像素加權平均（如高斯濾波、均值濾波），模糊細節以抑制高頻雜訊。",
            "key_goal": "消除影像雜訊",
            "key_principle": "低通濾波 (Low-pass)",
            "key_purpose": "在特徵提取前降低隨機雜訊干擾。",
            "common_apps": "監視器畫面在低光照下的去噪處理。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 監視器畫面在低光照下的去噪處理。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "522",
            "subject": "中科一",
            "category": "影像處理",
            "principle": "透明可解釋",
            "title": "邊緣保留濾波",
            "eng_name": "Edge-Preserving Filtering",
            "eng_abbr": "-",
            "def": "一種非線性濾波技術，在平滑雜訊的同時，透過考慮像素空間距離與色彩差異來保留邊緣。",
            "key_goal": "去噪並保留輪廓",
            "key_principle": "雙邊濾波 (Bilateral)",
            "key_purpose": "解決傳統平滑濾波導致物體邊界模糊的問題。",
            "common_apps": "人臉美肌演算法（磨皮但保留五官輪廓）。",
            "scenarios": {
              "weather": "環境監控：感測器端即時PM2.5分析（不上傳雲端）；邊緣站即時地震預警運算",
              "agri": "畜牧管理：牛隻個體臉部識別追蹤（乳牛個體健康管理）",
              "traffic": "自駕與輔助：疲勞駕駛臉部特徵偵測（眼皮閉合角度）",
              "industry": "製程優化：廠區人員身份核驗，防止未授權進入",
              "finance": "金融科技：ATM/網銀人臉身份核實；健康管家：情緒健康狀態辨識",
              "life": "智慧零售：販賣機顧客年齡/性別分析精準推薦",
              "fire": "公共安全：協尋失蹤/通緝人員特徵比對；刑事案件追查"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 人臉美肌演算法（磨皮但保留五官輪廓）。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "524",
            "subject": "中科一",
            "category": "影像處理",
            "principle": "透明可解釋",
            "title": "彩色空間",
            "eng_name": "Red-Green-Blue",
            "eng_abbr": "RGB",
            "def": "由紅、綠、藍三種原色光按不同比例相加而成的色彩模式。",
            "key_goal": "定義色彩特徵",
            "key_principle": "加法混色 (Additive Color)",
            "key_purpose": "記錄與顯示影像最原始的色彩資訊。",
            "common_apps": "數位廣告看板、醫療內視鏡影像。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 數位廣告看板、醫療內視鏡影像。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "526",
            "subject": "中科一",
            "category": "影像處理",
            "principle": "透明可解釋",
            "title": "色彩模型",
            "eng_name": "Hue, Saturation, Value",
            "eng_abbr": "HSV",
            "def": "一種將色彩分解為色調 (H)、飽和度 (S) 與明度 (V) 的表示方式。",
            "key_goal": "模擬人類視覺感知",
            "key_principle": "圓柱座標系統",
            "key_purpose": "用於顏色過濾與陰影環境下的物體辨識。",
            "common_apps": "工業自動化中根據顏色分揀零件。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 工業自動化中根據顏色分揀零件。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "528",
            "subject": "中科一",
            "category": "影像處理",
            "principle": "永續發展",
            "title": "飽和度與明度",
            "eng_name": "Saturation & Value",
            "eng_abbr": "-",
            "def": "S 代表色彩純度，V 代表亮度。兩者分離可降低光影變化對辨識的干擾。",
            "key_goal": "強化影像結構資訊",
            "key_principle": "強度與純度分離",
            "key_purpose": "提升模型在不同光照條件下的穩定性。",
            "common_apps": "戶外交通號誌辨識（克服陽光與陰影）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 戶外交通號誌辨識（克服陽光與陰影）。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "572",
            "subject": "中科一",
            "category": "影像處理",
            "principle": "透明可解釋",
            "title": "多序列影像",
            "eng_name": "Multi-sequence Imaging",
            "eng_abbr": "-",
            "def": "MRI 可透過調整參數獲得 T1 權重（解剖結構）或 T2 權重（病理變化）等多種影像。",
            "key_goal": "多維度診斷資訊",
            "key_principle": "不同脈衝序列 (T1, T2)",
            "key_purpose": "讓 AI 模型能從不同物理屬性中綜合判斷病灶。",
            "common_apps": "前列腺癌的多參數 AI 輔助診斷。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 前列腺癌的多參數 AI 輔助診斷。 下，傳統方案難以處理變數過多的情境，而 多序列影像 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "數據集",
        "topics": [
          {
            "id": "545",
            "subject": "中科一",
            "category": "數據集",
            "principle": "問責性",
            "title": "影像網路",
            "eng_name": "ImageNet",
            "eng_abbr": "-",
            "def": "擁有超過 1400 萬張手動標註影像的龐大資料庫。",
            "key_goal": "提供大標註數據集",
            "key_principle": "大規模層級式分類",
            "key_purpose": "訓練通用視覺模型的基準。",
            "common_apps": "AI 視覺演算法的性能指標。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 視覺演算法的性能指標。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "目標偵測",
        "topics": [
          {
            "id": "546",
            "subject": "中科一",
            "category": "目標偵測",
            "principle": "安全與問責",
            "title": "區域建議網路",
            "eng_name": "Region Proposal Network",
            "eng_abbr": "RPN",
            "def": "快速生成可能包含目標物之區域（Proposals）的子網路。",
            "key_goal": "自動選取目標區域",
            "key_principle": "滑動視窗與錨點",
            "key_purpose": "取代傳統低效的選取演算法。",
            "common_apps": "Faster R-CNN 中的核心組件。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 Faster R-CNN 中的核心組件。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "547",
            "subject": "中科一",
            "category": "目標偵測",
            "principle": "永續發展",
            "title": "單次偵測器",
            "eng_name": "Single Shot Multibox Detector",
            "eng_abbr": "SSD",
            "def": "僅需掃描一次影像即可同時預測類別與位置，速度極快。",
            "key_goal": "即時目標偵測",
            "key_principle": "多尺度特徵圖檢測",
            "key_purpose": "應用於移動端或嵌入式設備。",
            "common_apps": "智慧手機端即時路牌辨識。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 智慧手機端即時路牌辨識。 下，傳統方案難以處理變數過多的情境，而 單次偵測器 則能透過多維數據提取深層規律。"
          },
          {
            "id": "553",
            "subject": "中科一",
            "category": "目標偵測",
            "principle": "透明可解釋",
            "title": "預測框",
            "eng_name": "Predicted Box",
            "eng_abbr": "-",
            "def": "模型輸出的矩形框，代表預期目標物所在的位置與大小。",
            "key_goal": "目標位置視覺化",
            "key_principle": "座標值輸出 (x, y, w, h)",
            "key_purpose": "顯示偵測結果。",
            "common_apps": "商店人流統計系統。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 商店人流統計系統。 下，傳統方案難以處理變數過多的情境，而 預測框 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "影像分割",
        "topics": [
          {
            "id": "548",
            "subject": "中科一",
            "category": "影像分割",
            "principle": "安全與問責",
            "title": "全卷積網路",
            "eng_name": "Fully Convolutional Network",
            "eng_abbr": "FCN",
            "def": "將 CNN 末端改為卷積層，輸出與原圖等大的分類圖。",
            "key_goal": "像素級語義分割",
            "key_principle": "捨棄全連接層",
            "key_purpose": "將影像中每個像素歸類。",
            "common_apps": "衛星圖資自動土地分類。",
            "scenarios": {
              "weather": "災害監測：衛星圖像素級洪水範圍標定；PM2.5高污染區域熱點圖",
              "agri": "智慧耕作：農田土地利用類型分割（作物/雜草/裸地）；病害感染面積測量",
              "traffic": "自駕與輔助：道路/人行道/標線語義標記供ADAS感知",
              "industry": "品質檢測：PCB電路板佈線缺陷範圍精確分割",
              "finance": "智慧醫療：腫瘤/器官邊界勾勒輔助手術規劃",
              "life": "智慧生活：AR虛擬試穿人體輪廓分割",
              "fire": "智慧消防：火場煙霧/火焰像素範圍分割；逃生路徑辨識"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 衛星圖資自動土地分類。 下，傳統方案難以處理變數過多的情境，而 全卷積網路 則能透過多維數據提取深層規律。"
          },
          {
            "id": "551",
            "subject": "中科一",
            "category": "影像分割",
            "principle": "安全與問責",
            "title": "遮罩區域卷積網路",
            "eng_name": "Mask R-CNN",
            "eng_abbr": "-",
            "def": "在 Faster R-CNN 基礎上增加一個分支來生成精確的像素遮罩。",
            "key_goal": "實例分割",
            "key_principle": "邊框檢測+像素遮罩",
            "key_purpose": "同時識別物體類別與精確邊界。",
            "common_apps": "自駕車精準識別行人與障礙物。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自駕車精準識別行人與障礙物。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "神經網路",
        "topics": [
          {
            "id": "549",
            "subject": "中科一",
            "category": "神經網路",
            "principle": "透明可解釋",
            "title": "上採樣層",
            "eng_name": "Upsampling Layer",
            "eng_abbr": "-",
            "def": "將縮小後的特徵圖放大還原至原始影像大小的過程。",
            "key_goal": "恢復影像解析度",
            "key_principle": "插值或轉置卷積",
            "key_purpose": "用於影像分割或生成。",
            "common_apps": "模糊影像的超解析度重建。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 模糊影像的超解析度重建。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "安防實務",
        "topics": [
          {
            "id": "556",
            "subject": "中科一",
            "category": "安防實務",
            "principle": "隱私保護",
            "title": "監控與安防",
            "eng_name": "Surveillance & Security",
            "eng_abbr": "-",
            "def": "利用 AI 技術進行即時影像監控與異常行為分析。",
            "key_goal": "維護公共安全",
            "key_principle": "影像分析與預警系統",
            "key_purpose": "預防犯罪與即時事故響應。",
            "common_apps": "機場與車站的安全管理系統。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 機場與車站的安全管理系統。 下，傳統方案難以處理變數過多的情境，而 監控與安防 則能透過多維數據提取深層規律。"
          },
          {
            "id": "557",
            "subject": "中科一",
            "category": "安防實務",
            "principle": "隱私保護",
            "title": "監控",
            "eng_name": "Surveillance",
            "eng_abbr": "-",
            "def": "對特定區域或對象進行持續性的視覺觀測與數據採集。",
            "key_goal": "狀態觀測與記錄",
            "key_principle": "長期影像錄製與追蹤",
            "key_purpose": "追蹤歷史事件或行為模式。",
            "common_apps": "城市交通流量長期觀察。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 城市交通流量長期觀察。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "558",
            "subject": "中科一",
            "category": "安防實務",
            "principle": "安全與問責",
            "title": "安全",
            "eng_name": "Security",
            "eng_abbr": "-",
            "def": "側重於保護資產、資料及人身免受惡意攻擊。",
            "key_goal": "防止非法侵入",
            "key_principle": "身份驗證與門禁",
            "key_purpose": "執行權限管控與威脅偵測。",
            "common_apps": "企業園區人臉辨識門禁。",
            "scenarios": {
              "weather": "",
              "agri": "畜牧管理：牛隻個體臉部識別追蹤（乳牛個體健康管理）",
              "traffic": "自駕與輔助：疲勞駕駛臉部特徵偵測（眼皮閉合角度）",
              "industry": "製程優化：廠區人員身份核驗，防止未授權進入",
              "finance": "金融科技：ATM/網銀人臉身份核實；健康管家：情緒健康狀態辨識",
              "life": "智慧零售：販賣機顧客年齡/性別分析精準推薦",
              "fire": "公共安全：協尋失蹤/通緝人員特徵比對；刑事案件追查"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 企業園區人臉辨識門禁。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "559",
            "subject": "中科一",
            "category": "安防實務",
            "principle": "問責性",
            "title": "自動化車牌辨識",
            "eng_name": "Automatic Number Plate Recognition",
            "eng_abbr": "ANPR",
            "def": "結合車牌定位與文字辨識，自動讀取車牌號碼的技術。",
            "key_goal": "車輛自動化管理",
            "key_principle": "影像辨識與 OCR",
            "key_purpose": "自動扣費、黑名單追蹤。",
            "common_apps": "停車場自動收費系統。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 停車場自動收費系統。 下，傳統方案難以處理變數過多的情境，而 自動化車牌辨識 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "車牌辨識",
        "topics": [
          {
            "id": "562",
            "subject": "中科一",
            "category": "車牌辨識",
            "principle": "透明可解釋",
            "title": "車牌定位",
            "eng_name": "License Plate Localization",
            "eng_abbr": "-",
            "def": "在複雜背景的車輛影像中精確尋找車牌所在矩形區域。",
            "key_goal": "鎖定車牌區域",
            "key_principle": "邊緣檢測與顏色過濾",
            "key_purpose": "作為車牌辨識的第一步。",
            "common_apps": "公路超速自動取締。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 公路超速自動取締。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "視覺任務",
        "topics": [
          {
            "id": "564",
            "subject": "中科一",
            "category": "視覺任務",
            "principle": "安全與問責",
            "title": "檢測",
            "eng_name": "Detection",
            "eng_abbr": "-",
            "def": "識別影像中「有什麼」以及「在哪裡」的過程。",
            "key_goal": "確定物體存在與位置",
            "key_principle": "分類+定位",
            "key_purpose": "標記目標物。",
            "common_apps": "找出監視器中的可疑包裹。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 找出監視器中的可疑包裹。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "565",
            "subject": "中科一",
            "category": "視覺任務",
            "principle": "問責性",
            "title": "辨識",
            "eng_name": "Recognition",
            "eng_abbr": "-",
            "def": "進一步確認目標物「具體是誰」或「什麼型號」。",
            "key_goal": "確定具體身份",
            "key_principle": "特徵比對與分類",
            "key_purpose": "身份比對與分類。",
            "common_apps": "透過車牌辨識確認車主身份。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 透過車牌辨識確認車主身份。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "應用領域",
        "topics": [
          {
            "id": "569",
            "subject": "中科一",
            "category": "應用領域",
            "principle": "隱私保護",
            "title": "醫學影像",
            "eng_name": "Medical Imaging",
            "eng_abbr": "-",
            "def": "透過非侵入性技術獲取人體內部組織圖像，用於臨床分析與醫療干預。",
            "key_goal": "身體內部結構視覺化",
            "key_principle": "光學、聲學與放射學成像",
            "key_purpose": "提供 AI 訓練所需的視覺大數據。",
            "common_apps": "AI 輔助放射科醫師篩檢肺結節。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 輔助放射科醫師篩檢肺結節。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "醫學影像",
        "topics": [
          {
            "id": "570",
            "subject": "中科一",
            "category": "醫學影像",
            "principle": "透明可解釋",
            "title": "電腦斷層掃描",
            "eng_name": "Computed Tomography Scan",
            "eng_abbr": "CT Scan",
            "def": "利用旋轉 X 光束穿透人體，經電腦運算重建出人體部位的橫斷面影像。",
            "key_goal": "獲取斷面結構資訊",
            "key_principle": "X 光穿透與數位重建",
            "key_purpose": "提供比傳統 X 光更精確的組織結構數據。",
            "common_apps": "腦中風急性期出血區域辨識。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 腦中風急性期出血區域辨識。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "571",
            "subject": "中科一",
            "category": "醫學影像",
            "principle": "安全與問責\n\n隱私保護",
            "title": "磁振造影",
            "eng_name": "Magnetic Resonance Imaging",
            "eng_abbr": "MRI",
            "def": "利用強力磁場與無線電波，使人體內的氫原子產生共振並釋放訊號，經電腦重建影像。",
            "key_goal": "高對比軟組織成像",
            "key_principle": "核磁共振物理現象",
            "key_purpose": "提供極佳的軟組織（如腦、肌肉、神經）對比度，無電離輻射。",
            "common_apps": "腦部腫瘤精準分割、脊椎神經病變偵測。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 腦部腫瘤精準分割、脊椎神經病變偵測。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "實務應用",
        "topics": [
          {
            "id": "573",
            "subject": "中科一",
            "category": "實務應用",
            "principle": "永續發展",
            "title": "工業瑕疵檢測",
            "eng_name": "Industrial Defect Detection",
            "eng_abbr": "-",
            "def": "利用電腦視覺技術自動辨識產品表面的裂痕、髒汙或形狀異常。",
            "key_goal": "自動化品質控管",
            "key_principle": "特徵提取與異常檢測",
            "key_purpose": "取代人工目檢，提高生產良率與效率。",
            "common_apps": "半導體晶圓表面刮痕偵測。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 半導體晶圓表面刮痕偵測。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "579",
            "subject": "中科一",
            "category": "實務應用",
            "principle": "安全與問責",
            "title": "自動駕駛",
            "eng_name": "Autonomous Driving",
            "eng_abbr": "-",
            "def": "整合視覺、雷達與 AI 決策系統，使車輛具備自動行駛與避障能力。",
            "key_goal": "無人化運輸安全",
            "key_principle": "多感測器融合與路徑規劃",
            "key_purpose": "降低人為事故，優化交通效率。",
            "common_apps": "無人物流車配送。",
            "scenarios": {
              "weather": "氣象預報：自駕系統結合即時路面積水/能見度警示",
              "agri": "智慧耕作：農場自駕拖拉機自動施肥/犁田",
              "traffic": "自駕與輔助：自駕公車測試、ADAS駕駛輔助、疲勞駕駛偵測（核心場景）",
              "industry": "製程優化：工廠內自駕AGV物料搬運",
              "finance": "半導體：自駕晶片研發驗證場景",
              "life": "智慧生活：配送無人車/電動輪椅自駕輔助",
              "fire": "智慧消防：救災自駕機器人進入火場偵測"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 無人物流車配送。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數據視覺化",
        "topics": [
          {
            "id": "576",
            "subject": "中科一",
            "category": "數據視覺化",
            "principle": "透明可解釋",
            "title": "熱點圖",
            "eng_name": "Heatmap",
            "eng_abbr": "-",
            "def": "以色彩深淺代表數值高低或關注度分佈的圖表。",
            "key_goal": "視覺化分佈強度",
            "key_principle": "色彩編碼與密度統計",
            "key_purpose": "識別影像中的關鍵區域或網頁點擊熱區。",
            "common_apps": "顯示 AI 判斷瑕疵的關注位置。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 顯示 AI 判斷瑕疵的關注位置。 下，傳統方案難以處理變數過多的情境，而 熱點圖 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "互動技術",
        "topics": [
          {
            "id": "577",
            "subject": "中科一",
            "category": "互動技術",
            "principle": "永續發展",
            "title": "擴增實境",
            "eng_name": "Augmented Reality",
            "eng_abbr": "AR",
            "def": "在真實世界的影像上疊加虛擬數位資訊的技術。",
            "key_goal": "虛實資訊整合",
            "key_principle": "即時渲染與空間定位",
            "key_purpose": "強化即時資訊獲取能力。",
            "common_apps": "遠端工業維修導引。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 遠端工業維修導引。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "578",
            "subject": "中科一",
            "category": "互動技術",
            "principle": "永續發展",
            "title": "虛擬實境",
            "eng_name": "Virtual Reality",
            "eng_abbr": "VR",
            "def": "透過電腦生成三維虛擬環境，讓使用者完全沉浸於數位世界。",
            "key_goal": "沉浸式體驗",
            "key_principle": "全景渲染與頭戴顯示",
            "key_purpose": "模擬高危險或高成本的場景訓練。",
            "common_apps": "醫學手術模擬演練。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫學手術模擬演練。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "AI 技術應用",
        "topics": [
          {
            "id": "600",
            "subject": "中科一",
            "category": "AI 技術應用",
            "principle": "透明度\n\n可解釋性",
            "title": "多模態生成",
            "eng_name": "Multimodal Generation",
            "eng_abbr": "-",
            "def": "指 AI 系統能處理並整合兩種以上不同類型的輸入（如文字、圖像、音訊），並生成對應內容的技術。",
            "key_goal": "實現跨越不同資料型態的內容產出",
            "key_principle": "建立共同表徵空間 (Joint Embedding Space) 對齊不同模態特徵",
            "key_purpose": "文本轉圖像、影像描述生成、音訊驅動口型",
            "common_apps": "虛擬直播主 (VTuber) 自動對嘴\n\n根據醫學報告生成模擬病灶圖",
            "scenarios": {
              "weather": "災害監測：整合衛星影像、感測器數據與文字報告的跨模態災情分析",
              "agri": "智慧耕作：整合影像、氣象與土壤數據的跨模態農業決策",
              "traffic": "交通管理：整合影像、雷達與 GPS 的跨模態交通分析",
              "industry": "製程優化：整合視覺、聲音與振動的跨模態設備故障診斷",
              "finance": "智慧醫療：整合影像、基因與病歷的跨模態輔助診斷",
              "life": "智慧零售：整合文字、影像與語音的跨模態客服體驗",
              "fire": "智慧消防：整合熱影像、煙霧感測與語音的跨模態火場分析"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在跨越不同資料型態的內容產出下，傳統方案難以處理變數過多的情境，而多模態生成則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "電腦視覺技術",
        "topics": [
          {
            "id": "607",
            "subject": "中科一",
            "category": "電腦視覺技術",
            "principle": "安全性\n\n可解釋性",
            "title": "去噪",
            "eng_name": "Denoising",
            "eng_abbr": "-",
            "def": "指透過數學濾波或深度學習模型，消除影像、語音或資料中不必要的干擾（雜訊），以提升品質的技術。",
            "key_goal": "從受損或含雜訊的訊號中還原真實資訊",
            "key_principle": "過濾高頻隨機干擾，保留低頻結構資訊",
            "key_purpose": "影像增強、特徵提取預處理、通訊品質提升",
            "common_apps": "夜間監控影像優化\n\n老舊相片修復\n\n醫療超音波影像清晰化",
            "scenarios": {
              "weather": "災害監測：去除衛星影像中的雲層雜訊還原地表資訊",
              "agri": "智慧耕作：去除農田空拍影像中的霧氣雜訊",
              "traffic": "交通管理：夜間監控影像雜訊去除提升車牌辨識率",
              "industry": "製程優化：去除產線 X 光檢測影像中的散射雜訊",
              "finance": "智慧醫療：去除醫學影像中的設備雜訊還原病灶細節",
              "life": "智慧生活：手機照片降噪提升畫質",
              "fire": "智慧消防：夜間火場監控影像去噪提升辨識度"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在夜間監控影像優化、醫學影像去噪下，傳統方案難以處理變數過多的情境，而去噪則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "多模態 AI",
        "topics": [
          {
            "id": "609",
            "subject": "中科一",
            "category": "多模態 AI",
            "principle": "責任與問責\n\n公平性",
            "title": "-",
            "eng_name": "Flamingo",
            "eng_abbr": "-",
            "def": "由 DeepMind 開發的視覺語言模型，能透過少量的圖文範例快速學會描述影像或回答複雜的視覺問題。",
            "key_goal": "實現強大的少樣本 (Few-shot) 多模態學習能力",
            "key_principle": "視覺編碼器與語言模型透過 Perceiver Resampler 連結",
            "key_purpose": "影像描述生成、視覺問答 (VQA)、多模態對話",
            "common_apps": "自動生成新聞圖片說明\n\n視障人士的環境視覺描述助理",
            "scenarios": {
              "weather": "災害監測：少樣本條件下辨識罕見災害類型的多模態分析",
              "agri": "智慧耕作：少樣本條件下辨識稀有病蟲害的多模態學習",
              "traffic": "交通管理：少樣本條件下辨識罕見交通事故類型",
              "industry": "製程優化：少樣本條件下辨識新型產品瑕疵的多模態分析",
              "finance": "智慧醫療：少樣本條件下辨識罕見疾病的多模態輔助診斷",
              "life": "智慧生活：少樣本條件下理解新類別商品的多模態推薦",
              "fire": "公共安全：少樣本條件下辨識新型犯罪模式的多模態分析"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在罕見疾病輔助診斷等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "NLP 評估",
        "topics": [
          {
            "id": "628",
            "subject": "中科一",
            "category": "NLP 評估",
            "principle": "透明性與\n\n可解釋性",
            "title": "流暢度",
            "eng_name": "Fluency",
            "eng_abbr": "-",
            "def": "指大型語言模型（LLM）輸出的內容是否符合人類語言習慣、語法正確且無明顯斷裂感。",
            "key_goal": "衡量生成文本的\n\n語言自然程度",
            "key_principle": "語法結構與\n\n語意連貫性分析",
            "key_purpose": "作為模型性能評鑑的指標，確保 AI 生成內容可讀性。",
            "common_apps": "智慧客服自動回覆\n\n新聞稿自動生成",
            "scenarios": {
              "weather": "氣象預報：衡量 AI 氣象預報文本的語言自然流暢程度",
              "agri": "智慧耕作：衡量 AI 農業建議文本的語言自然流暢度",
              "traffic": "交通管理：衡量 AI 交通播報文本的語言自然流暢度",
              "industry": "製程優化：衡量 AI 品檢報告文本的語言自然流暢度",
              "finance": "智慧醫療：衡量 AI 病歷摘要文本的語言自然流暢度",
              "life": "智慧生活：衡量智慧客服自動回覆文本的語言自然流暢度",
              "fire": "公共安全：衡量 AI 安全通報文本的語言自然流暢度"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在智慧客服自動回覆等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      }
    ]
  },
  {
    "title": "初科二",
    "sub_units": [
      {
        "title": "生成式 AI",
        "topics": [
          {
            "id": "11",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "問責",
            "title": "推理模型",
            "eng_name": "Reasoning Models",
            "eng_abbr": "-",
            "def": "專注於複雜邏輯推演與分步規劃，減少幻覺並提升準確度的模型。",
            "key_goal": "提升決策邏輯性",
            "key_principle": "強化學習與思維鏈",
            "key_purpose": "解決數理與程式難題",
            "common_apps": "高難度科學運算、邏輯證明輔助。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 高難度科學運算、邏輯證明輔助。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "79",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "擴散模型",
            "eng_name": "Diffusion Model",
            "eng_abbr": "-",
            "def": "透過在數據中加入雜訊並學習如何逆向還原，生成高品質圖像。",
            "key_goal": "逐步去噪生成",
            "key_principle": "逆向去噪過程",
            "key_purpose": "圖像生成",
            "common_apps": "Midjourney、Stable Diffusion 核心技術。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 Midjourney、Stable Diffusion 核心技術。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "133",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "幻覺",
            "eng_name": "Hallucination",
            "eng_abbr": "-",
            "def": "AI 生成看似合理但事實錯誤或無意義資訊的現象。",
            "key_goal": "減少錯誤輸出",
            "key_principle": "機率性錯誤生成",
            "key_purpose": "提醒用戶查證",
            "common_apps": "LLM 虛構不存在的法律條文。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 LLM 虛構不存在的法律條文。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "134",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "-",
            "title": "標記",
            "eng_name": "Token",
            "eng_abbr": "-",
            "def": "模型處理文本的基本單位（可以是字、詞或字元的一部分）。",
            "key_goal": "語義處理單位",
            "key_principle": "文本切分片斷",
            "key_purpose": "計算成本與長度限制",
            "common_apps": "根據 Token 數量進行 API 計費。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 根據 Token 數量進行 API 計費。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "135",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "溫度參數",
            "eng_name": "Temperature",
            "eng_abbr": "-",
            "def": "調整預測詞彙機率分佈的參數；越高越有創意，越低越穩定嚴謹。",
            "key_goal": "控制輸出隨機性",
            "key_principle": "輸出機率分佈縮放",
            "key_purpose": "調整創意程度",
            "common_apps": "寫詩時調高溫度，寫公文時調低溫度。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 寫詩時調高溫度，寫公文時調低溫度。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "136",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "-",
            "title": "Top-K 採樣",
            "eng_name": "Top-K Sampling",
            "eng_abbr": "-",
            "def": "從預測機率最高的 K 個標記中隨機採樣，排除機率過低的干擾項。",
            "key_goal": "限制候選範圍",
            "key_principle": "機率排序篩選",
            "key_purpose": "提升文本品質",
            "common_apps": "避免模型輸出完全不相關的詞。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 避免模型輸出完全不相關的詞。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "137",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "-",
            "title": "核採樣",
            "eng_name": "Top-P / Nucleus Sampling",
            "eng_abbr": "-",
            "def": "根據累積機率達到 P 值（如 0.9）來動態選擇候選詞集。",
            "key_goal": "動態調整候選範圍",
            "key_principle": "累積機率門檻",
            "key_purpose": "提升生成自然度",
            "common_apps": "使對話更具多樣性且邏輯一致。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 使對話更具多樣性且邏輯一致。 下，傳統方案難以處理變數過多的情境，而 核採樣 則能透過多維數據提取深層規律。"
          },
          {
            "id": "138",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "上下文視窗",
            "eng_name": "Context Window",
            "eng_abbr": "-",
            "def": "模型一次能處理的最大 Token 數量，決定了其「短期記憶」範圍。",
            "key_goal": "提升記憶容量",
            "key_principle": "序列處理長度限制",
            "key_purpose": "處理長文本",
            "common_apps": "讀入一整份長達百頁的合約並摘要。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 讀入一整份長達百頁的合約並摘要。 下，傳統方案難以處理變數過多的情境，而 上下文視窗 則能透過多維數據提取深層規律。"
          },
          {
            "id": "140",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "提示工程",
            "eng_name": "Prompt Engineering",
            "eng_abbr": "-",
            "def": "透過精確設計輸入提示（Prompts）來引導 LLM 產生高品質輸出的過程。",
            "key_goal": "優化輸入指令",
            "key_principle": "指令優化技術",
            "key_purpose": "提升 AI 回應品質",
            "common_apps": "使用「你現在是專家...」來提升專業度。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 使用「你現在是專家...」來提升專業度。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "141",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "思維鏈",
            "eng_name": "Chain-of-Thought",
            "eng_abbr": "CoT",
            "def": "引導模型在回答前輸出中間推理步驟（如「讓我們一步步思考」）。",
            "key_goal": "提升推理能力",
            "key_principle": "分步思考引導",
            "key_purpose": "解決複雜邏輯難題",
            "common_apps": "數學運算、邏輯推理解析。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 數學運算、邏輯推理解析。 下，傳統方案難以處理變數過多的情境，而 思維鏈 則能透過多維數據提取深層規律。"
          },
          {
            "id": "142",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "零樣本學習",
            "eng_name": "Zero-shot Learning",
            "eng_abbr": "-",
            "def": "不提供任何範例，直接要求模型執行從未見過的特定任務。",
            "key_goal": "測試泛化邊界",
            "key_principle": "直接推理無示例",
            "key_purpose": "快速任務執行",
            "common_apps": "直接要求模型將法文翻譯成中文。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 直接要求模型將法文翻譯成中文。 下，傳統方案難以處理變數過多的情境，而 零樣本學習 則能透過多維數據提取深層規律。"
          },
          {
            "id": "143",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "少樣本學習",
            "eng_name": "Few-shot Learning",
            "eng_abbr": "-",
            "def": "在提示中提供 2-5 個範例，幫助模型理解輸出格式或特定風格。",
            "key_goal": "引導模型學習",
            "key_principle": "給予少量參考範例",
            "key_purpose": "精確格式控制",
            "common_apps": "提供幾個「輸入:輸出」對來教模型分類。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 提供幾個「輸入:輸出」對來教模型分類。 下，傳統方案難以處理變數過多的情境，而 少樣本學習 則能透過多維數據提取深層規律。"
          },
          {
            "id": "144",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "-",
            "title": "少樣本提示",
            "eng_name": "Few-shot Prompting",
            "eng_abbr": "-",
            "def": "實作「少樣本學習」的具體提示方法，將範例直接寫入指令。",
            "key_goal": "格式引導技術",
            "key_principle": "範例注入提示詞",
            "key_purpose": "穩定輸出格式",
            "common_apps": "確保模型總是回傳 JSON 格式。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 確保模型總是回傳 JSON 格式。 下，傳統方案難以處理變數過多的情境，而 少樣本提示 則能透過多維數據提取深層規律。"
          },
          {
            "id": "145",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "人格/角色提示",
            "eng_name": "Persona Prompting",
            "eng_abbr": "-",
            "def": "賦予模型特定身份（如律師、工程師）以獲得符合該領域風格的回答。",
            "key_goal": "設定回饋風格",
            "key_principle": "身份模擬定義",
            "key_purpose": "專業諮詢模擬",
            "common_apps": "模擬面試官進行模擬面試。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 模擬面試官進行模擬面試。 下，傳統方案難以處理變數過多的情境，而 人格/角色提示 則能透過多維數據提取深層規律。"
          },
          {
            "id": "159",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "外掛程式",
            "eng_name": "Plugins",
            "eng_abbr": "-",
            "def": "為 LLM 增加特定功能的擴充模組（如：聯網搜尋、執行計算）。",
            "key_goal": "功能擴充元件",
            "key_principle": "第三方服務介面",
            "key_purpose": "賦予模型新能力",
            "common_apps": "讓 ChatGPT 具備計算 WolframAlpha 複雜數學的能力。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 讓 ChatGPT 具備計算 WolframAlpha 複雜數學的能力。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "162",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "安全性",
            "title": "提示注入攻擊",
            "eng_name": "Prompt Injection",
            "eng_abbr": "-",
            "def": "在提示詞中夾帶指令，誘使 AI 忽略原設定並執行惡意操作（如惡意越獄）。",
            "key_goal": "繞過模型限制",
            "key_principle": "惡意指令嵌入",
            "key_purpose": "安全漏洞測試",
            "common_apps": "防範對話機器人被誘導洩露後端資料。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 防範對話機器人被誘導洩露後端資料。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "163",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "安全性",
            "title": "內容安全過濾",
            "eng_name": "Content Safety Filtering",
            "eng_abbr": "-",
            "def": "在模型輸出前進行自動掃描，過濾暴力、仇恨或色情等違規內容。",
            "key_goal": "屏蔽有害資訊",
            "key_principle": "關鍵字與語義審核",
            "key_purpose": "確保 AI 輸出合規",
            "common_apps": "客服機器人自動過濾冒犯性言論。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 客服機器人自動過濾冒犯性言論。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "168",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "ChatGPT",
            "eng_name": "ChatGPT",
            "eng_abbr": "-",
            "def": "OpenAI 開發的對話式 AI 產品，開啟了生成式 AI 的大眾應用。",
            "key_goal": "對話式生成服務",
            "key_principle": "GPT 架構實作",
            "key_purpose": "通用任務協助",
            "common_apps": "撰寫郵件、程式碼除錯。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 撰寫郵件、程式碼除錯。 下，傳統方案難以處理變數過多的情境，而 ChatGPT 則能透過多維數據提取深層規律。"
          },
          {
            "id": "169",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "Claude",
            "eng_name": "Claude",
            "eng_abbr": "-",
            "def": "Anthropic 開發的模型，強調安全性與長文本處理能力。",
            "key_goal": "高安全性對話服務",
            "key_principle": "憲法 AI (Constitutional AI)",
            "key_purpose": "高度合規之商務應用",
            "common_apps": "處理長篇法律文件摘要。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 處理長篇法律文件摘要。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "170",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "Gemini",
            "eng_name": "Gemini",
            "eng_abbr": "-",
            "def": "Google 開發的強大多模態模型，能同時流暢處理圖、文、影、音。",
            "key_goal": "原生多模態處理",
            "key_principle": "多模態融合架構",
            "key_purpose": "跨媒體資訊整合",
            "common_apps": "從影片中搜尋特定片段並說明內容。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 從影片中搜尋特定片段並說明內容。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "171",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "Llama",
            "eng_name": "Llama",
            "eng_abbr": "-",
            "def": "Meta 開發的領先開源大語言模型，支撐了全球開源 AI 的發展。",
            "key_goal": "建立開源生態系統",
            "key_principle": "高效率權重架構",
            "key_purpose": "模型微調研究基礎",
            "common_apps": "訓練具備特定學術知識的小模型。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 訓練具備特定學術知識的小模型。 下，傳統方案難以處理變數過多的情境，而 Llama 則能透過多維數據提取深層規律。"
          },
          {
            "id": "172",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "Stable Diffusion",
            "eng_name": "Stable Diffusion",
            "eng_abbr": "SD",
            "def": "領先的開源圖像生成模型，允許使用者精細控制圖像風格。",
            "key_goal": "圖像生成",
            "key_principle": "潛在擴充模型",
            "key_purpose": "創意設計與行銷",
            "common_apps": "根據文字生成商業廣告配圖。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 根據文字生成商業廣告配圖。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "173",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "Midjourney",
            "eng_name": "Midjourney",
            "eng_abbr": "MJ",
            "def": "專注於藝術性與美感的圖像生成平台，以高品質輸出著稱。",
            "key_goal": "高品質藝術創作",
            "key_principle": "封閉式擴散模型",
            "key_purpose": "概念設計與插畫",
            "common_apps": "遊戲角色概念圖設計。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 遊戲角色概念圖設計。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "174",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "DALL-E",
            "eng_name": "DALL-E",
            "eng_abbr": "-",
            "def": "OpenAI 研發的圖像生成系統，能精確理解複雜的提示詞指令。",
            "key_goal": "文字轉圖像",
            "key_principle": "多模態連結模型",
            "key_purpose": "快速圖像概念呈現",
            "common_apps": "為簡報自動生成示意圖。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 為簡報自動生成示意圖。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "175",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "Copilot",
            "eng_name": "Copilot",
            "eng_abbr": "-",
            "def": "將 AI 功能直接整合進辦公或開發軟體中（如 GitHub, Microsoft 365）。",
            "key_goal": "提升工作生產力",
            "key_principle": "嵌入式 AI 助手",
            "key_purpose": "輔助工作流",
            "common_apps": "自動撰寫程式碼片段、PPT 摘要。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 自動撰寫程式碼片段、PPT 摘要。 下，傳統方案難以處理變數過多的情境，而 Copilot 則能透過多維數據提取深層規律。"
          },
          {
            "id": "176",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "Dify",
            "eng_name": "Dify",
            "eng_abbr": "-",
            "def": "協助開發者快速建構 RAG、Agent 的開源應用開發平台。",
            "key_goal": "低代碼 LLM 平台",
            "key_principle": "視覺化 Agent 工作流",
            "key_purpose": "加速 AI 落地",
            "common_apps": "企業內部的知識庫對話機器人建置。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 企業內部的知識庫對話機器人建置。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "255",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "知識截止點",
            "eng_name": "Knowledge Cutoff",
            "eng_abbr": "-",
            "def": "模型訓練數據所涵蓋的最晚時間點，決定了其對時事了解的界限。",
            "key_goal": "標示時效邊界",
            "key_principle": "預訓練數據時間限制",
            "key_purpose": "提醒資訊時效性",
            "common_apps": "ChatGPT 告知其知識僅更新至 2023 年 10 月。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 ChatGPT 告知其知識僅更新至 2023 年 10 月。 下，傳統方案難以處理變數過多的情境，而 知識截止點 則能透過多維數據提取深層規律。"
          },
          {
            "id": "258",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "原生多模態",
            "eng_name": "Native Multimodal",
            "eng_abbr": "-",
            "def": "模型在設計初期就同時學習圖、文、音等數據，而非透過外掛拼接。",
            "key_goal": "統一特徵理解",
            "key_principle": "跨模態聯合訓練",
            "key_purpose": "提升跨媒體推理能力",
            "common_apps": "GPT-4o 能夠直接「看懂」並「聽懂」外界環境。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 GPT-4o 能夠直接「看懂」並「聽懂」外界環境。 下，傳統方案難以處理變數過多的情境，而 原生多模態 則能透過多維數據提取深層規律。"
          },
          {
            "id": "271",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "氣氛程式碼",
            "eng_name": "Vibe Coding",
            "eng_abbr": "-",
            "def": "描述對程式「感覺」或功能的抽象需求，由 AI 自動生成底層程式碼的開發模式。",
            "key_goal": "降低編程門檻",
            "key_principle": "自然語言描述邏輯",
            "key_purpose": "快速原型開發",
            "common_apps": "使用者描述「我要一個看起來很專業的理財 App」，AI 生成前端框架。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 使用者描述「我要一個看起來很專業的理財 App」，AI 生成前端框架。 下，傳統方案難以處理變數過多的情境，而 氣氛程式碼 則能透過多維數據提取深層規律。"
          },
          {
            "id": "316",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "生成物 / 工件",
            "eng_name": "Artifacts",
            "eng_abbr": "-",
            "def": "AI 平台（如 Claude）側邊顯示的代碼、網頁或文檔預覽區，方便即時編輯。",
            "key_goal": "提升協作效率",
            "key_principle": "持久化預覽視窗",
            "key_purpose": "程式碼開發輔助",
            "common_apps": "AI 寫出 React 代碼後，右側直接顯示運作效果。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 寫出 React 代碼後，右側直接顯示運作效果。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "320",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "反重力機制",
            "eng_name": "Google Antigravity",
            "eng_abbr": "",
            "def": "Google 推出的 AI 原生 IDE，讓 AI Agent 能自主規劃、執行程式並操作瀏覽器，不只是補全代碼。\nGoogle Gemini 實驗性介面技術，讓使用者在長對話中能輕鬆導航回關鍵節點，不被捲動條束縛。",
            "key_goal": "消除對話長度的視覺負擔",
            "key_principle": "動態 UI 佈局優化",
            "key_purpose": "解決長上下文對話的導航痛點。",
            "common_apps": "在分析萬字報告時，快速跳回最上層的初始設定。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在分析萬字報告時，快速跳回最上層的初始設定。 下，傳統方案難以處理變數過多的情境，而 反重力機制 則能透過多維數據提取深層規律。"
          },
          {
            "id": "321",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "產出物管理視窗",
            "eng_name": "Artifacts",
            "eng_abbr": "",
            "def": "Claude 推出的一種 UI 模式，將 AI 生成的代碼、網頁或文件獨立顯示在側邊欄，而非淹沒在對話流中。",
            "key_goal": "提升內容協作效率",
            "key_principle": "側邊欄持久化渲染",
            "key_purpose": "實現即時預覽與跨版本編輯。",
            "common_apps": "讓 AI 寫一個 React 網頁，右側直接顯示運行結果，左側繼續討論。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 讓 AI 寫一個 React 網頁，右側直接顯示運行結果，左側繼續討論。 下，傳統方案難以處理變數過多的情境，而 產出物管理視窗 則能透過多維數據提取深層規律。"
          },
          {
            "id": "325",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "克勞德反重力",
            "eng_name": "Claude Antigravity",
            "eng_abbr": "",
            "def": "Anthropic 專為 Claude 打造的代理開發平台，強調「憲法 AI」原則，確保 Agent 執行自動化任務時符合安全邊界。\n與 Google 類似，指 Anthropic 在處理超長文本 (Long Context) 時，優化 UI 使其不因資訊過載而導致使用者迷失。",
            "key_goal": "優化資訊呈現密度",
            "key_principle": "智能窗口佈局調度",
            "key_purpose": "強化長文處理時的使用者專注度。",
            "common_apps": "閱讀 200 頁法規手冊時，關鍵術語自動浮動在視窗頂部。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 閱讀 200 頁法規手冊時，關鍵術語自動浮動在視窗頂部。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "327",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "開源 Claude 接口",
            "eng_name": "Open Claude (非官方)",
            "eng_abbr": "-",
            "def": "指社群開發的開源項目，旨在透過逆向或 API 封裝，讓開發者在開源框架（如 Dify）中更方便地調用 Claude 模型。",
            "key_goal": "降低存取門檻",
            "key_principle": "API 轉發與封裝",
            "key_purpose": "在開源工具中整合頂尖模型。",
            "common_apps": "在本地端介面直接使用 Claude 3.5 Sonnet 進行寫作。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在本地端介面直接使用 Claude 3.5 Sonnet 進行寫作。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "336",
            "subject": "初科二",
            "category": "生成式 AI",
            "principle": "永續發展與福祉",
            "title": "氣氛部署",
            "eng_name": "Vibe Deploying",
            "eng_abbr": "-",
            "def": "僅憑對功能的口語描述，由 AI 自動完成伺服器配置、資料庫建立與代碼上線的流程。",
            "key_goal": "降低工程負擔",
            "key_principle": "自然語言描述驅動部署",
            "key_purpose": "快速驗證商業 Idea",
            "common_apps": "創業者描述完構思後，AI 直接產出可運行的測試網址。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 創業者描述完構思後，AI 直接產出可運行的測試網址。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "資訊安全",
        "topics": [
          {
            "id": "22",
            "subject": "初科二",
            "category": "資訊安全",
            "principle": "安全性",
            "title": "深偽技術",
            "eng_name": "Deepfake",
            "eng_abbr": "-",
            "def": "利用生成式 AI 偽造出極其擬真的圖像、音訊或影片的技術 。",
            "key_goal": "防範數位詐欺",
            "key_principle": "生成對抗網絡(GAN)",
            "key_purpose": "內容創作與欺詐防範",
            "common_apps": "電影特效製作、防範視訊詐騙 。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 電影特效製作、防範視訊詐騙 。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "161",
            "subject": "初科二",
            "category": "資訊安全",
            "principle": "安全性",
            "title": "越獄",
            "eng_name": "Jailbreaking",
            "eng_abbr": "-",
            "def": "透過特殊設計的提示詞繞過 AI 的安全護欄，誘使其輸出受限內容。",
            "key_goal": "惡意指令防護",
            "key_principle": "提示詞注入攻擊",
            "key_purpose": "安全測試與防禦",
            "common_apps": "測試模型是否會輸出製作危險物品的教學。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 測試模型是否會輸出製作危險物品的教學。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "AI 生態",
        "topics": [
          {
            "id": "178",
            "subject": "初科二",
            "category": "AI 生態",
            "principle": "永續發展與福祉",
            "title": "Hugging Face",
            "eng_name": "Hugging Face",
            "eng_abbr": "-",
            "def": "全球最大的 AI 社群平台，提供豐富的預訓練模型、數據集與評測。",
            "key_goal": "AI 資源共享",
            "key_principle": "模型與數據託管平台",
            "key_purpose": "模型獲取與測試",
            "common_apps": "下載 Llama 權重進行本地測試。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 下載 Llama 權重進行本地測試。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數位轉型",
        "topics": [
          {
            "id": "229",
            "subject": "初科二",
            "category": "數位轉型",
            "principle": "永續發展與福祉",
            "title": "數位轉型 2.0",
            "eng_name": "DX 2.0 / AI-First",
            "eng_abbr": "-",
            "def": "數位轉型進階版，將 AI 視為核心動力而非僅是輔助，全面重塑組織。",
            "key_goal": "全面智慧化轉型",
            "key_principle": "AI 核心驅動",
            "key_purpose": "企業競爭力重塑",
            "common_apps": "從傳統服務轉向全 AI 自動化服務。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 從傳統服務轉向全 AI 自動化服務。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "生成式 AI 應用",
        "topics": [
          {
            "id": "594",
            "subject": "初科二",
            "category": "生成式 AI 應用",
            "principle": "安全性\n\n透明度與可解釋性",
            "title": "音訊生成",
            "eng_name": "Audio Generation",
            "eng_abbr": "-",
            "def": "利用 AI 技術自動合成語音、音樂或環境音效的過程。",
            "key_goal": "從文本或參數轉換為擬真人聲或音樂",
            "key_principle": "透過神經網路模型 (如 GANs, Diffusion, Transformers) 模擬聲波或頻譜",
            "key_purpose": "語音合成 (TTS)、音樂創作、音效製作",
            "common_apps": "遊戲角色配音\n\n視障人士語音輔助",
            "scenarios": {
              "weather": "災害監測：AI 語音即時播報颱風警報與疏散指引",
              "agri": "智慧耕作：農業氣象語音播報系統提醒農民灌溉時機",
              "traffic": "交通管理：車站/機場 AI 語音廣播即時到站與延誤資訊",
              "industry": "製程優化：工廠異常警報語音通知產線人員",
              "finance": "智慧醫療：AI 語音助手朗讀病歷摘要輔助醫師看診",
              "life": "智慧生活：智慧音箱語音回覆與有聲書生成",
              "fire": "智慧消防：消防語音指揮系統自動播報火場狀態更新"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在遊戲角色配音、播客自動配音下，傳統方案難以處理變數過多的情境，而音訊生成則能透過多維數據提取深層規律。"
          },
          {
            "id": "596",
            "subject": "初科二",
            "category": "生成式 AI 應用",
            "principle": "透明度\n\n尊重智慧財產權",
            "title": "-",
            "eng_name": "MusicLM",
            "eng_abbr": "-",
            "def": "由 Google Research 開發的模型，能根據文字敘述（如風格、情緒、樂器）生成長達數分鐘的音樂。",
            "key_goal": "將文本描述精準轉化為高品質音樂",
            "key_principle": "基於 Transformer 與音訊標記 (Audio Tokens) 的層次化建模",
            "key_purpose": "自動配樂、創意作曲、情緒氛圍營造",
            "common_apps": "電玩遊戲動態配樂\n\n廣告影片背景音樂生成",
            "scenarios": {
              "weather": "災害監測：AI 生成防災宣導影片背景音樂",
              "agri": "智慧耕作：農業展覽活動 AI 自動生成主題配樂",
              "traffic": "交通管理：交通安全宣導影片 AI 自動配樂",
              "industry": "製程優化：工廠品牌形象影片 AI 音樂生成",
              "finance": "科技金融：FinTech 產品廣告 AI 自動配樂生成",
              "life": "智慧生活：電玩遊戲動態配樂與廣告影片背景音樂生成",
              "fire": "智慧消防：消防宣導影片 AI 自動生成配樂"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在電玩遊戲動態配樂等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "597",
            "subject": "初科二",
            "category": "生成式 AI 應用",
            "principle": "安全性與實體風險\n\n責任與問責",
            "title": "影片生成",
            "eng_name": "Video Generation",
            "eng_abbr": "-",
            "def": "利用 AI 根據文本 (T2V) 或圖像 (I2V) 提示詞，自動合成具備連貫動態效果的影片技術。",
            "key_goal": "自動產出具備時空連續性的動態影像",
            "key_principle": "結合擴散模型 (Diffusion) 與時空注意力機制 (Spatiotemporal Attention)",
            "key_purpose": "短影音創作、影視預演 (Previz)、教育模擬",
            "common_apps": "品牌行銷短片製作\n\n歷史事件模擬還原",
            "scenarios": {
              "weather": "災害監測：AI 生成颱風路徑動態模擬影片輔助決策",
              "agri": "智慧耕作：作物生長縮時影片自動生成用於農業教育",
              "traffic": "交通管理：交通事故重建動態模擬影片輔助鑑定",
              "industry": "製程優化：產線製程模擬動態影片用於員工訓練",
              "finance": "智慧醫療：手術流程動態影片模擬用於醫學教育",
              "life": "智慧生活：品牌行銷短片與社交媒體動態內容生成",
              "fire": "智慧消防：火災擴散模擬動態影片輔助消防部署"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在品牌行銷短片製作、歷史事件模擬還原下，傳統方案難以處理變數過多的情境，而影片生成則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "知名工具與平台",
        "topics": [
          {
            "id": "595",
            "subject": "初科二",
            "category": "知名工具與平台",
            "principle": "隱私保護\n\n責任與問責",
            "title": "-",
            "eng_name": "ElevenLabs",
            "eng_abbr": "-",
            "def": "一家專注於開發自然語音合成與語音複製技術的 AI 研究公司與平台。",
            "key_goal": "提供高品質、具情感表現力的 AI 語音",
            "key_principle": "基於深度學習的語音複製 (Cloning) 與文本轉語音技術",
            "key_purpose": "語音複製、多語種翻譯配音",
            "common_apps": "播客 (Podcast) 自動配音\n\n個性化虛擬助理語音",
            "scenarios": {
              "weather": "災害監測：AI 擬真語音即時播報地震速報與海嘯預警",
              "agri": "智慧耕作：具情感語音播報農產品市場行情分析",
              "traffic": "交通管理：高鐵/捷運站具情感表現力的 AI 語音導覽",
              "industry": "製程優化：工廠安全教育訓練 AI 語音教材生成",
              "finance": "智慧醫療：心理諮商輔助 AI 以溫暖語調與患者互動",
              "life": "智慧生活：播客自動配音與有聲書情感語音生成",
              "fire": "智慧消防：緊急廣播系統以沉穩語調引導群眾疏散"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在播客自動配音等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "598",
            "subject": "初科二",
            "category": "知名工具與平台",
            "principle": "透明度\n\n尊重智慧財產權",
            "title": "-",
            "eng_name": "Runway",
            "eng_abbr": "-",
            "def": "一家領先的 AI 影片技術公司，開發了 Gen-1、Gen-2、Gen-3 等知名的影片生成模型與工具。",
            "key_goal": "提供直覺化的 AI 影片編輯與生成服務",
            "key_principle": "擴散模型 (Diffusion) 與多模態對齊技術",
            "key_purpose": "影片生成、風格遷移、物件擦除",
            "common_apps": "電影預告片快速打樣\n\n社交媒體動態視覺設計",
            "scenarios": {
              "weather": "災害監測：AI 快速剪輯彙整災區空拍影像成簡報影片",
              "agri": "智慧耕作：農場監控影像自動剪輯成日報影片",
              "traffic": "交通管理：交通違規影像自動剪輯輔助執法",
              "industry": "製程優化：產線異常事件影像自動剪輯成事故報告",
              "finance": "智慧醫療：手術過程影像自動剪輯成教學素材",
              "life": "智慧生活：電影預告片快速打樣與社交媒體動態視覺設計",
              "fire": "智慧消防：火場救援影像自動剪輯成檢討教材"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在電影預告片快速打樣等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "599",
            "subject": "初科二",
            "category": "知名工具與平台",
            "principle": "安全性\n\n責任與問責",
            "title": "-",
            "eng_name": "Sora",
            "eng_abbr": "-",
            "def": "由 OpenAI 開發的大型影片生成模型，能根據文字指令產出極具真實感與時空連貫性的影像。",
            "key_goal": "生成長達一分鐘且符合物理規律的高畫質影片",
            "key_principle": "影片壓縮網路 (Visual Patches) 與 Diffusion Transformer",
            "key_purpose": "長秒數影片生成、物理環境模擬",
            "common_apps": "數位內容創作\n\n虛擬環境原型開發",
            "scenarios": {
              "weather": "災害監測：生成符合物理規律的海嘯/洪水模擬長影片",
              "agri": "智慧耕作：生成一分鐘農業氣象預報動態影片",
              "traffic": "交通管理：生成符合物理規律的交通流量模擬長影片",
              "industry": "製程優化：生成工廠產線流程模擬長影片用於規劃",
              "finance": "智慧醫療：生成人體器官運作模擬長影片用於教學",
              "life": "智慧生活：數位內容創作與影視特效長影片生成",
              "fire": "智慧消防：生成符合物理規律的火災擴散模擬長影片"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在數位內容創作等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      }
    ]
  },
  {
    "title": "中科一  中科三",
    "sub_units": [
      {
        "title": "法律規管",
        "topics": [
          {
            "id": "12",
            "subject": "中科一  中科三",
            "category": "法律規管",
            "principle": "問責",
            "title": "歐盟人工智慧法案",
            "eng_name": "EU AI Act",
            "eng_abbr": "-",
            "def": "全球首部綜合性 AI 法律，依風險高低（如不可接受、高風險）分級。",
            "key_goal": "風險分類管理",
            "key_principle": "基於風險的分級監管",
            "key_purpose": "建立全球 AI 監管標竿",
            "common_apps": "高風險領域（如金融）的 AI 審查。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 高風險領域（如金融）的 AI 審查。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "13",
            "subject": "中科一  中科三",
            "category": "法律規管",
            "principle": "問責",
            "title": "人工智慧基本法",
            "eng_name": "AI Basic Act",
            "eng_abbr": "-",
            "def": "台灣擬定之 AI 指南，強調隱私、安全與倫理，推動產業合規。",
            "key_goal": "國家級治理架構",
            "key_principle": "台灣 AI 發展指引",
            "key_purpose": "引導國內 AI 合規發展",
            "common_apps": "國內公部門 AI 系統建置指引。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 國內公部門 AI 系統建置指引。 下，傳統方案難以處理變數過多的情境，而 人工智慧基本法 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "模型部署",
        "topics": [
          {
            "id": "123",
            "subject": "中科一  中科三",
            "category": "模型部署",
            "principle": "永續發展與福祉",
            "title": "推論",
            "eng_name": "Inference",
            "eng_abbr": "-",
            "def": "模型完成訓練後，將新數據輸入模型以獲得預測或生成結果的過程。",
            "key_goal": "產出預測結果",
            "key_principle": "權重前向運算",
            "key_purpose": "將 AI 能力轉化為實際服務",
            "common_apps": "醫院輸入 X 光片後由模型自動標註病灶。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫院輸入 X 光片後由模型自動標註病灶。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數據處理",
        "topics": [
          {
            "id": "148",
            "subject": "中科一  中科三",
            "category": "數據處理",
            "principle": "透明與可解釋",
            "title": "向量嵌入",
            "eng_name": "Vector Embedding",
            "eng_abbr": "-",
            "def": "將文字或圖像轉換為高維數值向量，使語意相近的項目在空間中靠攏。",
            "key_goal": "語義數值化",
            "key_principle": "語義空間坐標",
            "key_purpose": "實現語義搜尋",
            "common_apps": "透過概念而非關鍵字搜尋文件。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 透過概念而非關鍵字搜尋文件。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "自然語言處理\n\n深度學習架構",
        "topics": [
          {
            "id": "452",
            "subject": "中科一  中科三",
            "category": "自然語言處理\n\n深度學習架構",
            "principle": "透明與可解釋",
            "title": "遮罩自注意力機制",
            "eng_name": "Masked Self-Attention",
            "eng_abbr": "-",
            "def": "Transformer 解碼器中的核心組件，限制模型僅能關注當前位置之前的訊息 。",
            "key_goal": "確保序列生成的因果性",
            "key_principle": "在計算注意力權重時，利用遮罩矩陣屏蔽未來資訊。",
            "key_purpose": "防止模型在訓練過程中「偷看」答案，確保推論時的自迴歸特性。",
            "common_apps": "生成式 AI（如 ChatGPT）在逐字產生回覆時，確保邏輯連貫且符合語境。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 生成式 AI（如 ChatGPT）在逐字產生回覆時，確保邏輯連貫且符合語境。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "AI 風險管理\n\n機器學習治理",
        "topics": [
          {
            "id": "466",
            "subject": "中科一  中科三",
            "category": "AI 風險管理\n\n機器學習治理",
            "principle": "公平性",
            "title": "模型偏見",
            "eng_name": "Model Bias",
            "eng_abbr": "-",
            "def": "模型在預測時產生的偏誤，可能源於模型假設錯誤或訓練不足 。",
            "key_goal": "修正決策偏差",
            "key_principle": "演算法結構或權重更新過程產生的系統性誤差。",
            "key_purpose": "確保 AI 決策的公正性與客體性。",
            "common_apps": "人臉辨識系統對不同膚色的辨識準確率存在顯著差異。",
            "scenarios": {
              "weather": "",
              "agri": "畜牧管理：牛隻個體臉部識別追蹤（乳牛個體健康管理）",
              "traffic": "自駕與輔助：疲勞駕駛臉部特徵偵測（眼皮閉合角度）",
              "industry": "製程優化：廠區人員身份核驗，防止未授權進入",
              "finance": "金融科技：ATM/網銀人臉身份核實；健康管家：情緒健康狀態辨識",
              "life": "智慧零售：販賣機顧客年齡/性別分析精準推薦",
              "fire": "公共安全：協尋失蹤/通緝人員特徵比對；刑事案件追查"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 人臉辨識系統對不同膚色的辨識準確率存在顯著差異。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "AI 系統架構\n\n代理人技術",
        "topics": [
          {
            "id": "612",
            "subject": "中科一  中科三",
            "category": "AI 系統架構\n\n代理人技術",
            "principle": "問責\n\n安全與可靠",
            "title": "代理人間通訊協定",
            "eng_name": "Agent-to-Agent Protocol",
            "eng_abbr": "-",
            "def": "一套允許不同 AI 代理人（Agents）之間交換資訊、任務授權與協作的通訊規範。",
            "key_goal": "建立標準化的跨代理人溝通機制。",
            "key_principle": "基於標準化消息傳遞格式（如 JSON-RPC 或自定義語法），定義請求、回應與錯誤處理規範。",
            "key_purpose": "確保多代理人系統（MAS）中的資訊一致性與任務接力順暢。",
            "common_apps": "供應鏈管理中，採購 Agent 與物流 Agent 自動對接庫存與遞送狀態。",
            "scenarios": {
              "weather": "災害監測：標準化通訊協定讓不同縣市氣象 AI 互通資訊",
              "agri": "智慧耕作：標準化通訊協定讓農場各系統 AI 互通資訊",
              "traffic": "交通管理：標準化通訊協定讓不同城市交通 AI 互通資訊",
              "industry": "製程優化：標準化通訊協定讓不同廠區 AI 互通資訊",
              "finance": "智慧醫療：標準化通訊協定讓不同醫院 AI 互通會診",
              "life": "智慧零售：標準化通訊協定讓不同品牌零售 AI 互通資訊",
              "fire": "公共安全：標準化通訊協定讓不同機關安全 AI 互通資訊"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在跨系統 AI 互通等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "邊緣運算\n\n代理人部署",
        "topics": [
          {
            "id": "614",
            "subject": "中科一  中科三",
            "category": "邊緣運算\n\n代理人部署",
            "principle": "隱私保護\n\n透明與可解釋",
            "title": "遠端代理人",
            "eng_name": "Remote Agent",
            "eng_abbr": "-",
            "def": "運行於遠端伺服器，負責處理複雜運算、大規模數據檢索或跨系統整合的 AI 代理人。",
            "key_goal": "在雲端或伺服器端執行高算力任務。",
            "key_principle": "接收來自 Client 的加密指令，在高效能環境執行模型推論，並將結果回傳。",
            "key_purpose": "提供強大的算力支援，同時透過 API 接口與終端維持隔離。",
            "common_apps": "智慧工廠中，各機台收集數據後傳至遠端 Agent 進行大數據故障預測分析。\n\n手機上的個人 AI 助理\n\n瀏覽器中的自動化操作代理",
            "scenarios": {
              "weather": "災害監測：雲端 AI 彙整各地氣象站數據進行大規模運算",
              "agri": "智慧耕作：雲端 AI 彙整各農場數據進行產量預測運算",
              "traffic": "交通管理：雲端 AI 彙整各路口數據進行全域交通優化",
              "industry": "製程優化：雲端 AI 彙整各機台數據進行大規模製程分析",
              "finance": "智慧醫療：雲端 AI 彙整各醫院數據進行流行病學分析",
              "life": "智慧零售：雲端 AI 彙整各分店數據進行全域庫存優化",
              "fire": "智慧消防：雲端 AI 彙整各消防局數據進行全域資源調度"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在雲端高算力任務執行等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      }
    ]
  },
  {
    "title": "中科三",
    "sub_units": [
      {
        "title": "AI 治理",
        "topics": [
          {
            "id": "14",
            "subject": "中科三",
            "category": "AI 治理",
            "principle": "問責",
            "title": "負責任的人工智慧",
            "eng_name": "Responsible AI",
            "eng_abbr": "-",
            "def": "確保 AI 開發符合倫理、公平且可被究責的開發框架與實務。",
            "key_goal": "道德與法律合規",
            "key_principle": "伦理框架實作",
            "key_purpose": "降低社會與信譽風險",
            "common_apps": "企業內部的 AI 開發行為準則。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 企業內部的 AI 開發行為準則。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "15",
            "subject": "中科三",
            "category": "AI 治理",
            "principle": "透明與可解釋",
            "title": "可解釋人工智慧",
            "eng_name": "Explainable AI",
            "eng_abbr": "XAI",
            "def": "旨在使 AI 的決策過程對人類具備可理解性與透明度的技術。",
            "key_goal": "消除黑盒問題",
            "key_principle": "模型解釋技術",
            "key_purpose": "提升使用者信任度",
            "common_apps": "醫療診斷解釋、信用審查說明 。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 醫療診斷解釋、信用審查說明 。 下，傳統方案難以處理變數過多的情境，而 可解釋人工智慧 則能透過多維數據提取深層規律。"
          },
          {
            "id": "21",
            "subject": "中科三",
            "category": "AI 治理",
            "principle": "公平性",
            "title": "演算法偏見",
            "eng_name": "Algorithmic Bias",
            "eng_abbr": "-",
            "def": "因訓練資料不均或設計瑕疵導致模型對特定群體產生歧視 。",
            "key_goal": "減少歧視",
            "key_principle": "資料或模型偏誤修正",
            "key_purpose": "確保決策公平性",
            "common_apps": "招聘系統排除性別偏見 。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 招聘系統排除性別偏見 。 下，傳統方案難以處理變數過多的情境，而 演算法偏見 則能透過多維數據提取深層規律。"
          },
          {
            "id": "584",
            "subject": "中科三",
            "category": "AI 治理",
            "principle": "隱私保護",
            "title": "K-匿名化",
            "eng_name": "K-Anonymity",
            "eng_abbr": "-",
            "def": "確保資料集中每筆紀錄與至少 K-1 筆紀錄具備相同特徵，使個體無法被唯一辨識。",
            "key_goal": "防止個人身份識別",
            "key_principle": "數據群組化處理",
            "key_purpose": "在共享敏感數據前進行去識別化。",
            "common_apps": "發布醫療統計數據供學術研究。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 發布醫療統計數據供學術研究。 下，傳統方案難以處理變數過多的情境，而 K-匿名化 則能透過多維數據提取深層規律。"
          },
          {
            "id": "585",
            "subject": "中科三",
            "category": "AI 治理",
            "principle": "公平性",
            "title": "偏誤",
            "eng_name": "Bias",
            "eng_abbr": "-",
            "def": "指模型預測結果偏離真實分佈，或對特定群體存在歧視。",
            "key_goal": "確保預測不偏不倚",
            "key_principle": "數據或演算法不平衡",
            "key_purpose": "識別並修正 AI 決策的不公平性。",
            "common_apps": "應徵篩選 AI 對性別的偏好問題。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 應徵篩選 AI 對性別的偏好問題。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "588",
            "subject": "中科三",
            "category": "AI 治理",
            "principle": "問責性",
            "title": "偏誤稽核",
            "eng_name": "Bias Audit",
            "eng_abbr": "-",
            "def": "針對 AI 系統的開發與產出進行定期審查，確認有無演算法歧視。",
            "key_goal": "確保合規與公平",
            "key_principle": "系統性測試與評估",
            "key_purpose": "降低法律與道德風險。",
            "common_apps": "銀行評估貸款 AI 是否符合社會公平。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 銀行評估貸款 AI 是否符合社會公平。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "XAI 技術",
        "topics": [
          {
            "id": "16",
            "subject": "中科三",
            "category": "XAI 技術",
            "principle": "透明與可解釋",
            "title": "局部可解釋模型",
            "eng_name": "Local Interpretable Model-agnostic Explanations",
            "eng_abbr": "LIME",
            "def": "透過在特定預測周圍取樣來解釋個別預測結果的與模型無關技術。",
            "key_goal": "解釋單一決策",
            "key_principle": "局部代理模型",
            "key_purpose": "釐清特定預測的原因",
            "common_apps": "解釋為何某筆信用卡交易被判定為詐騙。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "金融科技：信用卡盜刷風險即時偵測、異常交易攔截（核心場景）",
              "life": "智慧零售：電商平台異常退款/刷卡詐欺偵測",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 解釋為何某筆信用卡交易被判定為詐騙。 下，傳統方案難以處理變數過多的情境，而 局部可解釋模型 則能透過多維數據提取深層規律。"
          },
          {
            "id": "17",
            "subject": "中科三",
            "category": "XAI 技術",
            "principle": "透明與可解釋",
            "title": "反事實說明",
            "eng_name": "Counterfactual Explanation",
            "eng_abbr": "-",
            "def": "說明「若特徵如何改變，則結果會變好」的解釋方式。",
            "key_goal": "提供決策建議",
            "key_principle": "最小特徵變更分析",
            "key_purpose": "輔助決策與改善",
            "common_apps": "告知客戶「若收入增加 5k，則貸款可通過」。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 告知客戶「若收入增加 5k，則貸款可通過」。 下，傳統方案難以處理變數過多的情境，而 反事實說明 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "治理實務",
        "topics": [
          {
            "id": "19",
            "subject": "中科三",
            "category": "治理實務",
            "principle": "問責",
            "title": "人類監督模式",
            "eng_name": "Human-over-the-loop",
            "eng_abbr": "HOTL",
            "def": "人類在宏觀層級監測系統，僅在系統偏離時介入。",
            "key_goal": "人類宏觀控制",
            "key_principle": "系統級別監控",
            "key_purpose": "提升自動化效率",
            "common_apps": "大型自動化工廠的中央監控。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 大型自動化工廠的中央監控。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "20",
            "subject": "中科三",
            "category": "治理實務",
            "principle": "問責",
            "title": "人機共作",
            "eng_name": "Human-in-the-loop",
            "eng_abbr": "HITL",
            "def": "強調在 AI 決策流程中，關鍵節點必須由人類進行最後審核 。",
            "key_goal": "決策最終審核",
            "key_principle": "關鍵節點介入",
            "key_purpose": "確保安全與人類價值",
            "common_apps": "醫療手術輔助、軍事決策審核 。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫療手術輔助、軍事決策審核 。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "隱私技術",
        "topics": [
          {
            "id": "27",
            "subject": "中科三",
            "category": "隱私技術",
            "principle": "隱私保護",
            "title": "聯邦學習",
            "eng_name": "Federated Learning",
            "eng_abbr": "FL",
            "def": "數據保留在本地裝置，僅交換模型更新參數的分散式學習技術。",
            "key_goal": "數據不動模型動",
            "key_principle": "分散式本地訓練",
            "key_purpose": "保護機敏數據隱私",
            "common_apps": "跨醫院聯合同盟訓練、手機注音建議。",
            "scenarios": {
              "weather": "環境監控：跨縣市空氣品質站數據聯合訓練（各站數據不離站）",
              "agri": "智慧耕作：跨農場病害模型協同訓練（農場資料不外傳）",
              "traffic": "自駕與輔助：跨車廠自駕數據聯合訓練（車輛感測資料隱私保護）",
              "industry": "品質檢測：跨廠區瑕疵模型協同訓練（各廠製程機密保護）",
              "finance": "金融科技：跨銀行聯合風控建模（客戶資料不離行）；智慧醫療：跨醫院疾病模型訓練",
              "life": "智慧零售：跨門市顧客行為聯合分析",
              "fire": "公共安全：跨地方政府監控數據聯合異常偵測（資料在地保存）"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 跨醫院聯合同盟訓練、手機注音建議。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "29",
            "subject": "中科三",
            "category": "隱私技術",
            "principle": "隱私保護",
            "title": "同態加密",
            "eng_name": "Homomorphic Encryption",
            "eng_abbr": "HE",
            "def": "允許在加密狀態下直接對資料進行運算，結果解密後仍正確。",
            "key_goal": "密文運算",
            "key_principle": "數學同態特性",
            "key_purpose": "雲端外包運算安全",
            "common_apps": "銀行將加密數據委託雲端執行分析。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 銀行將加密數據委託雲端執行分析。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "30",
            "subject": "中科三",
            "category": "隱私技術",
            "principle": "隱私保護",
            "title": "零知識證明",
            "eng_name": "Zero-Knowledge Proof",
            "eng_abbr": "ZKP",
            "def": "證明者能向驗證者證明某命題正確，而不需提供命題以外資訊。",
            "key_goal": "證明而不洩密",
            "key_principle": "密碼學協議",
            "key_purpose": "身份驗證與區塊鏈",
            "common_apps": "證明已滿 18 歲而不提供具體生日。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 證明已滿 18 歲而不提供具體生日。 下，傳統方案難以處理變數過多的情境，而 零知識證明 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "資訊安全",
        "topics": [
          {
            "id": "28",
            "subject": "中科三",
            "category": "資訊安全",
            "principle": "安全性",
            "title": "零信任架構",
            "eng_name": "Zero Trust Architecture",
            "eng_abbr": "ZTA",
            "def": "預設不信任內部外任何存取，必須經過持續驗證的資安框架。",
            "key_goal": "永不信任始終驗證",
            "key_principle": "動態身分驗證",
            "key_purpose": "防止內部威脅與攻擊",
            "common_apps": "企業遠端辦公資安防護。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 企業遠端辦公資安防護。 下，傳統方案難以處理變數過多的情境，而 零信任架構 則能透過多維數據提取深層規律。"
          },
          {
            "id": "217",
            "subject": "中科三",
            "category": "資訊安全",
            "principle": "安全性",
            "title": "對稱加密",
            "eng_name": "Symmetric Encryption",
            "eng_abbr": "-",
            "def": "加密與解密使用相同金鑰，速度快，但金鑰傳遞風險高。",
            "key_goal": "快速數據保護",
            "key_principle": "單一密鑰傳輸",
            "key_purpose": "資料傳輸安全",
            "common_apps": "數據在內部網路的快速加解密。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 數據在內部網路的快速加解密。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "218",
            "subject": "中科三",
            "category": "資訊安全",
            "principle": "安全性",
            "title": "非對稱加密",
            "eng_name": "Asymmetric Encryption",
            "eng_abbr": "-",
            "def": "使用一對密鑰（公鑰加密、私鑰解密），保障了開放環境下的安全。",
            "key_goal": "高安全性密鑰交換",
            "key_principle": "公鑰與私鑰對",
            "key_purpose": "數位簽章與身份認證",
            "common_apps": "安全登入 AI 管理後台。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 安全登入 AI 管理後台。 下，傳統方案難以處理變數過多的情境，而 非對稱加密 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "資料工程",
        "topics": [
          {
            "id": "37",
            "subject": "中科三",
            "category": "資料工程",
            "principle": "隱私保護",
            "title": "插補法",
            "eng_name": "Imputation",
            "eng_abbr": "-",
            "def": "處理資料缺失值時，利用統計方法填補預測值的技術。",
            "key_goal": "補全缺失數據",
            "key_principle": "統計填補(均值/回歸)",
            "key_purpose": "維持資料集完整性",
            "common_apps": "用平均薪資填補未填寫的欄位。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 用平均薪資填補未填寫的欄位。 下，傳統方案難以處理變數過多的情境，而 插補法 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "特徵工程",
        "topics": [
          {
            "id": "38",
            "subject": "中科三",
            "category": "特徵工程",
            "principle": "透明與可解釋",
            "title": "特徵工程",
            "eng_name": "Feature Engineering",
            "eng_abbr": "-",
            "def": "從原始數據中創造新特徵或篩選重要特徵以強化模型的過程 。",
            "key_goal": "提升模型效能",
            "key_principle": "特徵選取與轉換",
            "key_purpose": "簡化模型複雜度",
            "common_apps": "根據生日計算「年齡」作為特徵。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 根據生日計算「年齡」作為特徵。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "40",
            "subject": "中科三",
            "category": "特徵工程",
            "principle": "公平性",
            "title": "標準化",
            "eng_name": "Standardization",
            "eng_abbr": "-",
            "def": "將特徵縮放至均值 0、標準差 1 的分佈，消除量綱影響 。",
            "key_goal": "統一特徵尺度",
            "key_principle": "均值歸零/標準差歸一",
            "key_purpose": "提升模型收斂速度",
            "common_apps": "使身高(cm)與體重(kg)具可比性。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 使身高(cm)與體重(kg)具可比性。 下，傳統方案難以處理變數過多的情境，而 標準化 則能透過多維數據提取深層規律。"
          },
          {
            "id": "41",
            "subject": "中科三",
            "category": "特徵工程",
            "principle": "透明與可解釋",
            "title": "正規化",
            "eng_name": "Normalization",
            "eng_abbr": "-",
            "def": "將數據按比例縮放至特定範圍（通常是 0 到 1）的過程。",
            "key_goal": "統一特徵區間",
            "key_principle": "最小-最大縮放",
            "key_purpose": "消除量綱差異",
            "common_apps": "影像處理中將像素值 (0-255) 轉為 (0-1)。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 影像處理中將像素值 (0-255) 轉為 (0-1)。 下，傳統方案難以處理變數過多的情境，而 正規化 則能透過多維數據提取深層規律。"
          },
          {
            "id": "105",
            "subject": "中科三",
            "category": "特徵工程",
            "principle": "透明與可解釋",
            "title": "特徵選擇",
            "eng_name": "Feature Selection",
            "eng_abbr": "-",
            "def": "從原始特徵中選出對預測最有幫助的子集，降低模型複雜度。",
            "key_goal": "篩選核心變數",
            "key_principle": "相關性分析/封裝法",
            "key_purpose": "提升泛化能力",
            "common_apps": "去除不相關的個人資訊以優化模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 去除不相關的個人資訊以優化模型。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "機器學習",
        "topics": [
          {
            "id": "45",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "永續發展與福祉",
            "title": "半監督式學習",
            "eng_name": "Semi-supervised Learning",
            "eng_abbr": "-",
            "def": "結合少量標籤資料與大量無標籤資料進行訓練，降低標註成本。",
            "key_goal": "利用少量標籤資料",
            "key_principle": "標籤擴展技術",
            "key_purpose": "標註資源匱乏場景",
            "common_apps": "醫療影像標記輔助。",
            "scenarios": {
              "weather": "氣象預報：有標記歷史氣象數據訓練降雨預測模型",
              "agri": "智慧耕作：標記病害影像訓練的辨識模型；畜牧：有標記生理數據訓練健康預測",
              "traffic": "智慧交通：標記交通違規影像訓練偵測模型",
              "industry": "品質檢測：標記瑕疵影像訓練AOI分類器",
              "finance": "金融科技：標記詐欺交易訓練風險模型；智慧醫療：標記病理影像訓練診斷模型",
              "life": "智慧零售：標記商品影像訓練識別模型；客服：意圖分類模型訓練",
              "fire": "智慧消防：標記火焰/煙霧影像訓練偵測模型"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫療影像標記輔助。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "106",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "永續發展與福祉",
            "title": "自動化機器學習",
            "eng_name": "Automated Machine Learning",
            "eng_abbr": "AutoML",
            "def": "自動化處理資料預處理、特徵工程、模型選型與參數調優的技術。",
            "key_goal": "訓練自動化",
            "key_principle": "工作流管道自動化",
            "key_purpose": "降低 AI 門檻",
            "common_apps": "企業內部快速建模工具。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 企業內部快速建模工具。 下，傳統方案難以處理變數過多的情境，而 自動化機器學習 則能透過多維數據提取深層規律。"
          },
          {
            "id": "216",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "永續發展與福祉",
            "title": "神經架構搜索",
            "eng_name": "Neural Architecture Search",
            "eng_abbr": "NAS",
            "def": "利用演算法自動搜索最優的神經網路架構，無需人工手動調整層數。",
            "key_goal": "自動設計模型",
            "key_principle": "自動化 ML 延伸",
            "key_purpose": "研發高效能模型",
            "common_apps": "尋找適合特定硬體的視覺模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 尋找適合特定硬體的視覺模型。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "260",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "公平性",
            "title": "偏見緩解",
            "eng_name": "Bias Mitigation",
            "eng_abbr": "-",
            "def": "透過調整訓練數據或損失函數，減少模型對特定族群歧視的技術。",
            "key_goal": "提升決策公平",
            "key_principle": "數據再平衡與演算法修正",
            "key_purpose": "招聘/貸款模型優化",
            "common_apps": "確保貸款模型不會因性別而影響評分。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 確保貸款模型不會因性別而影響評分。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "267",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "-",
            "title": "結構化預測",
            "eng_name": "Structured Prediction",
            "eng_abbr": "-",
            "def": "輸出不再是單一類別，而是具有內部結構的對象（如樹狀圖、序列）。",
            "key_goal": "處理具依賴性的輸出",
            "key_principle": "標籤間空間/時間關聯",
            "key_purpose": "語法解析、影像分割",
            "common_apps": "將句子解析為語法結構樹，或識別影像中物件的邊界 。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 將句子解析為語法結構樹，或識別影像中物件的邊界 。 下，傳統方案難以處理變數過多的情境，而 結構化預測 則能透過多維數據提取深層規律。"
          },
          {
            "id": "372",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "-",
            "title": "隱馬可夫模型",
            "eng_name": "Hidden Markov Model",
            "eng_abbr": "HMM",
            "def": "一種統計模型，用來描述一個含有隱含參數的馬可夫過程，包含隱藏狀態與觀察序列。",
            "key_goal": "建模序列數據",
            "key_principle": "概率狀態轉換",
            "key_purpose": "語音辨識與詞性標註。",
            "common_apps": "根據天氣（隱狀態）推測路人的穿著（觀察序列）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 根據天氣（隱狀態）推測路人的穿著（觀察序列）。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "373",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "-",
            "title": "隱藏狀態",
            "eng_name": "Hidden States",
            "eng_abbr": "-",
            "def": "模型中不直接被觀察到，但決定了輸出觀察值的內在變數或狀態。",
            "key_goal": "捕捉系統內在邏輯",
            "key_principle": "模型內部變數",
            "key_purpose": "代表系統的內在演化規律。",
            "common_apps": "在 NLP 中代表單字在句子中的潛在語義特徵。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在 NLP 中代表單字在句子中的潛在語義特徵。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "375",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "-",
            "title": "轉移機率",
            "eng_name": "Transition Probability",
            "eng_abbr": "-",
            "def": "指系統從一個狀態轉移到另一個狀態的機率（如詞性「動詞」後接「受詞」的機率）。",
            "key_goal": "描述狀態演變",
            "key_principle": "狀態遷移矩陣",
            "key_purpose": "構建序列演化的邏輯框架。",
            "common_apps": "氣象模型中從「晴天」變為「陰天」的機率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 氣象模型中從「晴天」變為「陰天」的機率。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "376",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "-",
            "title": "發射機率",
            "eng_name": "Emission Probability",
            "eng_abbr": "-",
            "def": "指在特定隱藏狀態下，產生某個特定觀察值的機率（如狀態是「晴天」時，觀察到「防曬油」的機率）。",
            "key_goal": "關聯狀態與觀測值",
            "key_principle": "條件機率分佈",
            "key_purpose": "建立內在狀態與外在數據的聯繫。",
            "common_apps": "語音模型中，發出「A」音時對應到頻譜特徵的機率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 語音模型中，發出「A」音時對應到頻譜特徵的機率。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "377",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "透明與可解釋",
            "title": "條件隨機場",
            "eng_name": "Conditional Random Field",
            "eng_abbr": "CRF",
            "def": "一種判別式機率模型，考慮全體標籤的依賴關係，在標註任務中常優於 HMM。",
            "key_goal": "優化序列標註精準度",
            "key_principle": "判別式無向圖模型",
            "key_purpose": "命名實體辨識 (NER)。",
            "common_apps": "從合約中精準標記出人名、地點與公司名稱。",
            "scenarios": {
              "weather": "環境監控：新聞中災害地點/時間/規模資訊自動擷取",
              "agri": "農業報告：病蟲害名稱/地區/日期關鍵實體提取",
              "traffic": "智慧物流：訂單文字中收件人/地址/日期自動識別",
              "industry": "品質管理：設備故障日誌中零件名稱/時間提取",
              "finance": "智慧醫療：病歷中藥物名稱/症狀/檢查項目識別；合約關鍵條款提取",
              "life": "智能客服：訂單查詢中商品名/編號自動識別",
              "fire": "公共安全：失蹤者特徵描述中姓名/特徵提取"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 從合約中精準標記出人名、地點與公司名稱。 下，傳統方案難以處理變數過多的情境，而 條件隨機場 則能透過多維數據提取深層規律。"
          },
          {
            "id": "378",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "-",
            "title": "判別式模型",
            "eng_name": "Discriminative Model",
            "eng_abbr": "-",
            "def": "專注於學習不同類別之間的差異，直接判斷輸入屬於哪一類的模型（如 SVM, CNN）。",
            "key_goal": "學習分類邊界",
            "key_principle": "建模條件機率 P(y|x)",
            "key_purpose": "分類、迴歸與影像辨識。",
            "common_apps": "判斷一封郵件是否為垃圾郵件。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 判斷一封郵件是否為垃圾郵件。 下，傳統方案難以處理變數過多的情境，而 判別式模型 則能透過多維數據提取深層規律。"
          },
          {
            "id": "379",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "-",
            "title": "生成式模型",
            "eng_name": "Generative Model",
            "eng_abbr": "-",
            "def": "學習數據是如何產生的，能模擬並生成出與訓練集相似的新數據（如 GAN, VAE）。",
            "key_goal": "學習數據分佈",
            "key_principle": "建模聯合機率 P(x, y)",
            "key_purpose": "數據增強、圖像生成。",
            "common_apps": "根據一段文字描述生成一張貓的照片。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 根據一段文字描述生成一張貓的照片。 下，傳統方案難以處理變數過多的情境，而 生成式模型 則能透過多維數據提取深層規律。"
          },
          {
            "id": "417",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "-",
            "title": "判別式加權",
            "eng_name": "Discriminative Weighting",
            "eng_abbr": "-",
            "def": "在訓練過程中為不同特徵分配權重，以最大化類別間邊界的技術。",
            "key_goal": "提升類別區分度",
            "key_principle": "權重特徵分配",
            "key_purpose": "優化分類器性能。",
            "common_apps": "在垃圾郵件過濾中，給予「中獎」一詞更高的判別權重。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在垃圾郵件過濾中，給予「中獎」一詞更高的判別權重。 下，傳統方案難以處理變數過多的情境，而 判別式加權 則能透過多維數據提取深層規律。"
          },
          {
            "id": "426",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "-",
            "title": "TF-IDF 加權",
            "eng_name": "TF-IDF Weighting",
            "eng_abbr": "-",
            "def": "結合單字的局部頻率與全局稀有度，計算其在特定文件中的權重。",
            "key_goal": "綜合評估詞彙權重",
            "key_principle": "TF 乘以 IDF",
            "key_purpose": "文字特徵提取。",
            "common_apps": "從新聞稿中自動抓取出最重要的主旨詞。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 從新聞稿中自動抓取出最重要的主旨詞。 下，傳統方案難以處理變數過多的情境，而 TF-IDF 加權 則能透過多維數據提取深層規律。"
          },
          {
            "id": "431",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "-",
            "title": "語意相似度空間",
            "eng_name": "Semantic Similarity Space",
            "eng_abbr": "-",
            "def": "向量空間中，距離越近代表語意越相近的虛擬幾何空間。",
            "key_goal": "實現概念搜尋",
            "key_principle": "流形學習與歐幾里得距離",
            "key_purpose": "向量資料庫檢索與推薦系統。",
            "common_apps": "找出與「電動車」在語意空間中最近的詞（如「特斯拉」）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 找出與「電動車」在語意空間中最近的詞（如「特斯拉」）。 下，傳統方案難以處理變數過多的情境，而 語意相似度空間 則能透過多維數據提取深層規律。"
          },
          {
            "id": "604",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "透明度\n\n可解釋性",
            "title": "潛在分布",
            "eng_name": "Latent Distribution",
            "eng_abbr": "-",
            "def": "指無法直接觀測到，但能解釋觀察數據生成規律的隨機變數所遵循的機率分布。",
            "key_goal": "描述資料背後不可見的結構特徵",
            "key_principle": "將高維觀測資料映射至低維機率空間",
            "key_purpose": "特徵解耦、降維、數據生成",
            "common_apps": "語音合成中的音色特徵建模\n\n推薦系統中的用戶隱性偏好",
            "scenarios": {
              "weather": "氣象預報：描述大氣環流背後不可見的潛在動力結構",
              "agri": "智慧耕作：描述作物基因表現背後的潛在生長因子",
              "traffic": "交通管理：描述交通流量背後的潛在出行模式",
              "industry": "製程優化：描述產品品質背後不可見的潛在製程參數",
              "finance": "智慧醫療：語音合成中的音色特徵建模與基因潛在風險因子",
              "life": "智慧生活：推薦系統中使用者偏好的潛在特徵建模",
              "fire": "公共安全：描述犯罪模式背後不可見的潛在社會因子"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在語音合成中的音色特徵建模下，傳統方案難以處理變數過多的情境，而潛在分布則能透過多維數據提取深層規律。"
          },
          {
            "id": "605",
            "subject": "中科三",
            "category": "機器學習",
            "principle": "技術自主",
            "title": "變分推斷",
            "eng_name": "Variational Inference",
            "eng_abbr": "VI",
            "def": "一種統計學方法，利用較簡單的分布去逼近極其複雜的真實後驗分布，以解決貝氏推斷中的計算瓶頸。",
            "key_goal": "快速估計複雜且難以計算的後驗分布",
            "key_principle": "將推斷問題轉化為函數優化問題 (KL 散度最小化)",
            "key_purpose": "隱變量模型求解、大規模資料貝氏推斷",
            "common_apps": "VAE 模型訓練\n\n主題模型 (LDA) 的參數估計",
            "scenarios": {
              "weather": "氣象預報：快速估計極端天氣事件的後驗機率分布",
              "agri": "智慧耕作：快速估計作物產量的後驗機率分布",
              "traffic": "交通管理：快速估計交通延遲時間的後驗分布",
              "industry": "製程優化：快速估計產品良率的後驗機率分布",
              "finance": "智慧醫療：VAE 模型訓練與主題模型推斷",
              "life": "智慧生活：推薦系統中快速估計使用者偏好後驗分布",
              "fire": "公共安全：快速估計犯罪熱點的後驗機率分布"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 VAE 模型訓練、主題模型推斷下，傳統方案難以處理變數過多的情境，而變分推斷則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "傳統 ML",
        "topics": [
          {
            "id": "49",
            "subject": "中科三",
            "category": "傳統 ML",
            "principle": "透明與可解釋",
            "title": "決策樹",
            "eng_name": "Decision Tree",
            "eng_abbr": "DT",
            "def": "模仿人類決策流程，透過樹狀結構進行特徵判斷與分類。",
            "key_goal": "生成可讀規則",
            "key_principle": "遞迴式特徵分裂",
            "key_purpose": "簡單決策分析",
            "common_apps": "貸款准駁流程、初診分流。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 貸款准駁流程、初診分流。 下，傳統方案難以處理變數過多的情境，而 決策樹 則能透過多維數據提取深層規律。"
          },
          {
            "id": "50",
            "subject": "中科三",
            "category": "傳統 ML",
            "principle": "透明與可解釋",
            "title": "隨機森林",
            "eng_name": "Random Forest",
            "eng_abbr": "RF",
            "def": "由多棵決策樹組成，透過多數決來提升預測準確度與穩定性。",
            "key_goal": "降低預測變異",
            "key_principle": "集成學習(Bagging)",
            "key_purpose": "高穩定性分類",
            "common_apps": "顧客流失預測、遙測影像分類。",
            "scenarios": {
              "weather": "氣象預報：衛星雲型分類（颱風眼/積雨雲）；空污：AQI等級影像分級",
              "agri": "智慧耕作：作物品種/生長階段自動分類；精準養殖：魚種健康狀態分級",
              "traffic": "智慧物流：快遞包裹損壞等級分類；交通違規類型自動歸類",
              "industry": "品質檢測：瑕疵類型（裂紋/刮傷/色差）分類統計",
              "finance": "智慧醫療：皮膚病變/眼底影像疾病分類；X光異常篩選",
              "life": "智慧零售：商品類別自動辨識上架；人臉年齡層分類個人化服務",
              "fire": "公共安全：監視器可疑物品類型辨識；消防：燃料類型判斷"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 顧客流失預測、遙測影像分類。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "51",
            "subject": "中科三",
            "category": "傳統 ML",
            "principle": "安全性",
            "title": "支持向量機",
            "eng_name": "Support Vector Machine",
            "eng_abbr": "SVM",
            "def": "在高維空間尋找一個能將兩類資料完美分開的最優超平面。",
            "key_goal": "尋找最大間距",
            "key_principle": "超平面分割",
            "key_purpose": "強健的二分類",
            "common_apps": "手寫文字辨識、基因序列分析。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 手寫文字辨識、基因序列分析。 下，傳統方案難以處理變數過多的情境，而 支持向量機 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "模型訓練",
        "topics": [
          {
            "id": "52",
            "subject": "中科三",
            "category": "模型訓練",
            "principle": "透明與可解釋",
            "title": "損失函數",
            "eng_name": "Loss Function",
            "eng_abbr": "-",
            "def": "計算模型預測值與真實值之間差距的函數，指導模型優化。",
            "key_goal": "衡量模型誤差",
            "key_principle": "誤差計算公式",
            "key_purpose": "模型優化指標",
            "common_apps": "均方誤差 (MSE)、交叉熵 (Cross-entropy)。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 均方誤差 (MSE)、交叉熵 (Cross-entropy)。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "55",
            "subject": "中科三",
            "category": "模型訓練",
            "principle": "透明與可解釋",
            "title": "正則化",
            "eng_name": "Regularization",
            "eng_abbr": "-",
            "def": "在損失函數中加入處罰機制（如 L1, L2），限制模型複雜度。",
            "key_goal": "防止過度擬合",
            "key_principle": "加入參數懲罰項",
            "key_purpose": "提升泛化效能",
            "common_apps": "避免權重值過大導致的震盪。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 避免權重值過大導致的震盪。 下，傳統方案難以處理變數過多的情境，而 正則化 則能透過多維數據提取深層規律。"
          },
          {
            "id": "56",
            "subject": "中科三",
            "category": "模型訓練",
            "principle": "透明與可解釋",
            "title": "超參數",
            "eng_name": "Hyperparameter",
            "eng_abbr": "-",
            "def": "訓練前需手動設定的參數（如學習率、樹深度），非自動學習。",
            "key_goal": "人為設定參數",
            "key_principle": "外部配置參數",
            "key_purpose": "調整模型訓練過程",
            "common_apps": "設定隨機森林的樹木數量。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 設定隨機森林的樹木數量。 下，傳統方案難以處理變數過多的情境，而 超參數 則能透過多維數據提取深層規律。"
          },
          {
            "id": "165",
            "subject": "中科三",
            "category": "模型訓練",
            "principle": "問責",
            "title": "人類回饋強化學習",
            "eng_name": "Reinforcement Learning from Human Feedback",
            "eng_abbr": "RLHF",
            "def": "透過人類對模型輸出的評分來訓練獎勵模型，再以此優化 AI 的行為。",
            "key_goal": "對齊人類價值觀",
            "key_principle": "獎勵模型與近端策略優化",
            "key_purpose": "減少模型幻覺與偏見",
            "common_apps": "使 ChatGPT 的回答更符合人類社交規範。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 使 ChatGPT 的回答更符合人類社交規範。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "246",
            "subject": "中科三",
            "category": "模型訓練",
            "principle": "永續發展與福祉",
            "title": "批次大小",
            "eng_name": "Batch Size",
            "eng_abbr": "-",
            "def": "每次參數更新前所處理的訓練樣本數量。",
            "key_goal": "平衡訓練速度與穩定性",
            "key_principle": "梯度下降更新頻率",
            "key_purpose": "控制記憶體消耗",
            "common_apps": "顯存有限時調小 Batch Size。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 顯存有限時調小 Batch Size。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "248",
            "subject": "中科三",
            "category": "模型訓練",
            "principle": "永續發展與福祉",
            "title": "早停法",
            "eng_name": "Early Stopping",
            "eng_abbr": "-",
            "def": "當驗證集效能停止提升或開始惡化時，提早結束訓練的技術。",
            "key_goal": "防止過擬合",
            "key_principle": "性能指標門檻監控",
            "key_purpose": "節省算力並優化泛化能力",
            "common_apps": "防止模型過度擬合訓練數據中的雜訊。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 防止模型過度擬合訓練數據中的雜訊。 下，傳統方案難以處理變數過多的情境，而 早停法 則能透過多維數據提取深層規律。"
          },
          {
            "id": "362",
            "subject": "中科三",
            "category": "模型訓練",
            "principle": "-",
            "title": "遮罩語言模型",
            "eng_name": "Masked Language Model",
            "eng_abbr": "MLM",
            "def": "訓練 BERT 的核心任務，隨機挖掉句子中的字讓模型根據上下文猜出來。",
            "key_goal": "學習雙向語意",
            "key_principle": "隨機遮蔽 Token 並預測",
            "key_purpose": "讓模型學會單字的深層含義。",
            "common_apps": "填空練習讓 AI 理解「我[ ]蘋果」中應填入動詞。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 填空練習讓 AI 理解「我[ ]蘋果」中應填入動詞。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "363",
            "subject": "中科三",
            "category": "模型訓練",
            "principle": "-",
            "title": "下一句預測",
            "eng_name": "Next Sentence Prediction",
            "eng_abbr": "NSP",
            "def": "訓練 BERT 的另一任務，讓模型判斷句子 B 是否為句子 A 的下一句。",
            "key_goal": "學習句子間關係",
            "key_principle": "判斷兩句是否連貫",
            "key_purpose": "提升問答與推理能力。",
            "common_apps": "讓 AI 理解段落的邏輯結構。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 讓 AI 理解段落的邏輯結構。 下，傳統方案難以處理變數過多的情境，而 下一句預測 則能透過多維數據提取深層規律。"
          },
          {
            "id": "391",
            "subject": "中科三",
            "category": "模型訓練",
            "principle": "永續發展與福祉",
            "title": "多語言預訓練",
            "eng_name": "Multilingual Pre-training",
            "eng_abbr": "-",
            "def": "在訓練過程中使用數百種語言的數據，讓模型學會跨語言的通用語義表徵。",
            "key_goal": "實現跨語言遷移",
            "key_principle": "多語種混合語料訓練",
            "key_purpose": "讓模型具備翻譯與跨語言理解能力。",
            "common_apps": "使用英文訓練的模型能聽懂並回答中文問題。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 使用英文訓練的模型能聽懂並回答中文問題。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "433",
            "subject": "中科三",
            "category": "模型訓練",
            "principle": "-",
            "title": "自回歸預測",
            "eng_name": "Autoregressive Prediction",
            "eng_abbr": "-",
            "def": "基於過去生成的內容來預測當前輸出，並將當前輸出作為下一次輸入。",
            "key_goal": "生成連貫序列",
            "key_principle": "遞迴依賴預測",
            "key_purpose": "實現長文本生成。",
            "common_apps": "GPT 逐字輸出句子的過程。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 GPT 逐字輸出句子的過程。 下，傳統方案難以處理變數過多的情境，而 自回歸預測 則能透過多維數據提取深層規律。"
          },
          {
            "id": "450",
            "subject": "中科三",
            "category": "模型訓練",
            "principle": "永續發展與福祉",
            "title": "持續預訓練",
            "eng_name": "Continual Pre-training",
            "eng_abbr": "-",
            "def": "在已有的預訓練模型基礎上，加入新領域數據繼續訓練，而不遺忘舊知識。",
            "key_goal": "注入新知識",
            "key_principle": "在現有權重上繼續增量訓練",
            "key_purpose": "更新模型對最新時事的了解。",
            "common_apps": "讓去年訓練的模型學會今年新通過的法律條文。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 讓去年訓練的模型學會今年新通過的法律條文。 下，傳統方案難以處理變數過多的情境，而 持續預訓練 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "模型評估",
        "topics": [
          {
            "id": "53",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "安全性",
            "title": "過度擬合",
            "eng_name": "Overfitting",
            "eng_abbr": "-",
            "def": "模型在訓練集表現極佳，但在測試集或新數據上表現極差。",
            "key_goal": "提升泛化能力",
            "key_principle": "模型過於複雜",
            "key_purpose": "診斷模型品質",
            "common_apps": "發現模型只記住雜訊而非規律。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 發現模型只記住雜訊而非規律。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "54",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "安全性",
            "title": "擬合不足",
            "eng_name": "Underfitting",
            "eng_abbr": "-",
            "def": "模型無法在訓練集上捕捉到數據的基本規律，導致效能低下。",
            "key_goal": "強化學習能力",
            "key_principle": "模型過於簡單",
            "key_purpose": "診斷模型品質",
            "common_apps": "模型無法區分數據的基本特徵。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 模型無法區分數據的基本特徵。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "57",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "問責",
            "title": "交叉驗證",
            "eng_name": "Cross-Validation",
            "eng_abbr": "-",
            "def": "將數據分成多份輪流作為驗證集，確保模型效能評估客觀。",
            "key_goal": "評估模型穩定性",
            "key_principle": "循環劃分數據集",
            "key_purpose": "避免數據切分偏差",
            "common_apps": "k-fold 交叉驗證。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 k-fold 交叉驗證。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "237",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "透明與可解釋",
            "title": "困惑度",
            "eng_name": "Perplexity",
            "eng_abbr": "PPL",
            "def": "評估語言模型預測下一個詞的能力，數值越低代表模型越強、預測越準。",
            "key_goal": "衡量語言模型預測力",
            "key_principle": "機率分布的測不準度",
            "key_purpose": "比較模型流暢度",
            "common_apps": "評斷不同版本 LLM 的生成品質。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 評斷不同版本 LLM 的生成品質。 下，傳統方案難以處理變數過多的情境，而 困惑度 則能透過多維數據提取深層規律。"
          },
          {
            "id": "247",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "透明與可解釋",
            "title": "學習曲線",
            "eng_name": "Learning Curve",
            "eng_abbr": "-",
            "def": "顯示模型效能隨訓練時間或樣本量變化的圖表，用於判斷過擬合或欠擬合。",
            "key_goal": "診斷模型狀態",
            "key_principle": "訓練/驗證誤差趨勢圖",
            "key_purpose": "訓練進程監控",
            "common_apps": "觀察驗證集誤差是否開始上升。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 觀察驗證集誤差是否開始上升。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "269",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "透明與可解釋",
            "title": "夏普利加性解釋",
            "eng_name": "Shapley Additive Explanations",
            "eng_abbr": "SHAP",
            "def": "基於博弈論方法，計算每個特徵對模型預測結果的邊際貢獻度。",
            "key_goal": "解釋單一特徵貢獻",
            "key_principle": "博弈論分配價值",
            "key_purpose": "產出特徵重要性排名",
            "common_apps": "解釋為何某筆貸款申請被 AI 拒絕，列出各項權重因素。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 解釋為何某筆貸款申請被 AI 拒絕，列出各項權重因素。 下，傳統方案難以處理變數過多的情境，而 夏普利加性解釋 則能透過多維數據提取深層規律。"
          },
          {
            "id": "299",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "透明與可解釋",
            "title": "均方誤差",
            "eng_name": "Mean Squared Error",
            "eng_abbr": "MSE",
            "def": "預測值與真實值之差的平方和的平均值。",
            "key_goal": "衡量預測準確度",
            "key_principle": "誤差平方的平均值",
            "key_purpose": "迴歸問題的損失函數",
            "common_apps": "房價預測模型中衡量估值與實際成交價的偏差。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 房價預測模型中衡量估值與實際成交價的偏差。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "300",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "透明與可解釋",
            "title": "受試者工作特徵曲線",
            "eng_name": "Receiver Operating Characteristic",
            "eng_abbr": "ROC",
            "def": "描述在不同門檻下，模型分類能力的曲線，曲線下面積（AUC）越大越好。",
            "key_goal": "評估分類器性能",
            "key_principle": "真陽率與偽陽率的權衡",
            "key_purpose": "比較不同分類模型優劣",
            "common_apps": "選擇一個對違禁品偵測最敏感的模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 選擇一個對違禁品偵測最敏感的模型。 下，傳統方案難以處理變數過多的情境，而 受試者工作特徵曲線 則能透過多維數據提取深層規律。"
          },
          {
            "id": "533",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "問責性",
            "title": "前五名錯誤率",
            "eng_name": "Top-5 Error",
            "eng_abbr": "-",
            "def": "指模型預測機率最高的前 5 個類別中，都不包含正確答案的機率。",
            "key_goal": "評估分類精確度",
            "key_principle": "候選類別驗證",
            "key_purpose": "衡量在大規模類別下的模型表現。",
            "common_apps": "ImageNet 競賽主要評比指標。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 ImageNet 競賽主要評比指標。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "586",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "問責性",
            "title": "偽陽性 (誤報)",
            "eng_name": "False Positive",
            "eng_abbr": "FP",
            "def": "模型錯誤地將負樣本（正常）判定為正樣本（異常）。",
            "key_goal": "衡量錯誤警報",
            "key_principle": "第一型錯誤 (Type I)",
            "key_purpose": "評估系統是否過於敏感。",
            "common_apps": "門禁系統誤將路人當成員工。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 門禁系統誤將路人當成員工。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "587",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "問責性",
            "title": "偽陰性 (漏報)",
            "eng_name": "False Negative",
            "eng_abbr": "FN",
            "def": "模型錯誤地將正樣本（異常）判定為負樣本（正常）。",
            "key_goal": "衡量漏檢風險",
            "key_principle": "第二型錯誤 (Type II)",
            "key_purpose": "評估系統是否存在安全隱患。",
            "common_apps": "機場安檢漏檢危險品。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 機場安檢漏檢危險品。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "589",
            "subject": "中科三",
            "category": "模型評估",
            "principle": "問責性",
            "title": "線下面積",
            "eng_name": "Area Under Curve",
            "eng_abbr": "AUC",
            "def": "衡量模型在所有可能的分類門檻下，區分正負樣本的能力。",
            "key_goal": "衡量分類器效能",
            "key_principle": "ROC 曲線積分值",
            "key_purpose": "選擇最佳的二分類模型。",
            "common_apps": "判斷癌症篩檢 AI 的整體穩定度。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 判斷癌症篩檢 AI 的整體穩定度。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型指標",
        "topics": [
          {
            "id": "62",
            "subject": "中科三",
            "category": "模型指標",
            "principle": "透明與可解釋",
            "title": "混淆矩陣",
            "eng_name": "Confusion Matrix",
            "eng_abbr": "-",
            "def": "展示模型預測的正/負類與實際情況交叉分布的矩陣。",
            "key_goal": "分析預測誤區",
            "key_principle": "分類結果對照表",
            "key_purpose": "診斷模型偏誤原因",
            "common_apps": "分析模型是否容易將 B 誤認成 A。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 分析模型是否容易將 B 誤認成 A。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型優化",
        "topics": [
          {
            "id": "63",
            "subject": "中科三",
            "category": "模型優化",
            "principle": "透明與可解釋",
            "title": "梯度下降",
            "eng_name": "Gradient Descent",
            "eng_abbr": "-",
            "def": "透過不斷朝著梯度相反方向調整參數，使損失函數最小化。",
            "key_goal": "尋找參數最優解",
            "key_principle": "沿著坡度尋找極值",
            "key_purpose": "核心訓練演算法",
            "common_apps": "模型權重更新。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 模型權重更新。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "64",
            "subject": "中科三",
            "category": "模型優化",
            "principle": "透明與可解釋",
            "title": "學習率",
            "eng_name": "Learning Rate",
            "eng_abbr": "-",
            "def": "控制梯度下降時參數更新的步長，太高會震盪，太低會太慢。",
            "key_goal": "調整更新步長",
            "key_principle": "步伐大小權重",
            "key_purpose": "優化訓練效率",
            "common_apps": "調教模型訓練速度與收斂穩定性。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 調教模型訓練速度與收斂穩定性。 下，傳統方案難以處理變數過多的情境，而 學習率 則能透過多維數據提取深層規律。"
          },
          {
            "id": "154",
            "subject": "中科三",
            "category": "模型優化",
            "principle": "永續發展與福祉",
            "title": "低秩適配",
            "eng_name": "Low-Rank Adaptation",
            "eng_abbr": "LoRA",
            "def": "僅微調極少量的額外參數矩陣，而不改動原模型，大幅降低硬體需求。",
            "key_goal": "高效參數訓練",
            "key_principle": "旁路矩陣微調",
            "key_purpose": "快速訓練專屬模型",
            "common_apps": "在消費級顯卡上微調 7B 模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在消費級顯卡上微調 7B 模型。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "213",
            "subject": "中科三",
            "category": "模型優化",
            "principle": "永續發展與福祉",
            "title": "知識蒸餾",
            "eng_name": "Knowledge Distillation",
            "eng_abbr": "-",
            "def": "將大型模型（教師）的知識轉移給小型模型（學生）的訓練技術。",
            "key_goal": "模型輕量化",
            "key_principle": "教師-學生模型架構",
            "key_purpose": "提升推論速度",
            "common_apps": "在手機上運行具有 GPT 實力的輕量模型。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在手機上運行具有 GPT 實力的輕量模型。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "214",
            "subject": "中科三",
            "category": "模型優化",
            "principle": "永續發展與福祉",
            "title": "剪枝",
            "eng_name": "Pruning",
            "eng_abbr": "-",
            "def": "移除神經網路中對預測影響極小的權重，以減少計算量與記憶體。",
            "key_goal": "移除無用參數",
            "key_principle": "權重稀疏化",
            "key_purpose": "優化硬體部署",
            "common_apps": "去除模型中 30% 的多餘神經元。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 去除模型中 30% 的多餘神經元。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "215",
            "subject": "中科三",
            "category": "模型優化",
            "principle": "永續發展與福祉",
            "title": "量化",
            "eng_name": "Quantization",
            "eng_abbr": "-",
            "def": "將 32 位元浮點數轉為 8 位元或 4 位元整數，大幅縮減模型體積。",
            "key_goal": "降低精確度換效能",
            "key_principle": "位元精度轉換",
            "key_purpose": "降低儲存需求",
            "common_apps": "使模型在筆電上流暢運行。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 使模型在筆電上流暢運行。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "神經網路",
        "topics": [
          {
            "id": "66",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "永續發展與福祉",
            "title": "神經元",
            "eng_name": "Neuron",
            "eng_abbr": "-",
            "def": "模仿生物神經元的計算單元，接收輸入、加權求和並轉化輸出。",
            "key_goal": "資訊處理單元",
            "key_principle": "權重加總與變換",
            "key_purpose": "模型運算基礎",
            "common_apps": "神經網路中的節點。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 神經網路中的節點。 下，傳統方案難以處理變數過多的情境，而 神經元 則能透過多維數據提取深層規律。"
          },
          {
            "id": "67",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "透明與可解釋",
            "title": "激活函數",
            "eng_name": "Activation Function",
            "eng_abbr": "-",
            "def": "決定神經元是否發射信號，為網路引入非線性（如 ReLU, Sigmoid）。",
            "key_goal": "引進非線性特徵",
            "key_principle": "門檻判定邏輯",
            "key_purpose": "處理複雜邊界",
            "common_apps": "網路層間的非線性轉換。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 網路層間的非線性轉換。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "68",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "透明與可解釋",
            "title": "反向傳播",
            "eng_name": "Backpropagation",
            "eng_abbr": "BP",
            "def": "根據預測誤差，由後向前計算各層梯度並更新權重的演算法。",
            "key_goal": "誤差信號回傳",
            "key_principle": "鏈式法則求導",
            "key_purpose": "模型學習機制",
            "common_apps": "神經網路權重自動調整。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 神經網路權重自動調整。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "69",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "透明與可解釋",
            "title": "多層感知器",
            "eng_name": "Multi-Layer Perceptron",
            "eng_abbr": "MLP",
            "def": "由輸入層、隱藏層及輸出層組成的基礎前饋神經網路。",
            "key_goal": "特徵非線性映射",
            "key_principle": "全連接層堆疊",
            "key_purpose": "基本數值分類",
            "common_apps": "簡易回歸與分類任務。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 簡易回歸與分類任務。 下，傳統方案難以處理變數過多的情境，而 多層感知器 則能透過多維數據提取深層規律。"
          },
          {
            "id": "534",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "永續發展",
            "title": "卷積層",
            "eng_name": "Convolutional Layer",
            "eng_abbr": "-",
            "def": "神經網路的核心單元，透過濾波器提取影像的空間特徵。",
            "key_goal": "提取局部特徵",
            "key_principle": "卷積核滑動運算",
            "key_purpose": "自動學習影像中的邊緣與紋理。",
            "common_apps": "辨識貓的耳朵或毛皮特徵。",
            "scenarios": {
              "weather": "環境監控：感測器端即時PM2.5分析（不上傳雲端）；邊緣站即時地震預警運算",
              "agri": "智慧耕作：田埂感測器本地即時土壤分析決策；畜牧：牲畜項圈端健康監測",
              "traffic": "自駕與輔助：車內ADAS即時障礙物偵測（低延遲）；路側單元即時車流分析",
              "industry": "品質檢測：產線攝影機端即時瑕疵判斷；預測性維護：感測器端即時異常偵測",
              "finance": "智慧醫療：手術室設備端即時生命徵象分析；穿戴裝置端健康偵測",
              "life": "智慧生活：智慧家電本地語音處理（保護隱私）；收銀端即時商品識別",
              "fire": "智慧消防：煙霧感測器端即時火災判斷（斷網也能動）；監控攝影機端人臉比對"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 辨識貓的耳朵或毛皮特徵。 下，傳統方案難以處理變數過多的情境，而 卷積層 則能透過多維數據提取深層規律。"
          },
          {
            "id": "535",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "透明可解釋",
            "title": "特徵圖",
            "eng_name": "Feature Map",
            "eng_abbr": "-",
            "def": "卷積層輸出後的矩陣，代表特定特徵在影像中的分佈情況。",
            "key_goal": "空間特徵可視化",
            "key_principle": "濾波器輸出結果",
            "key_purpose": "理解模型學習到了哪些視覺特徵。",
            "common_apps": "分析模型是否鎖定在瑕疵位置。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 分析模型是否鎖定在瑕疵位置。 下，傳統方案難以處理變數過多的情境，而 特徵圖 則能透過多維數據提取深層規律。"
          },
          {
            "id": "536",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "永續發展",
            "title": "最大池化",
            "eng_name": "Max Pooling",
            "eng_abbr": "-",
            "def": "在指定區域內僅保留最大值，以減少運算量並增加位移不變性。",
            "key_goal": "降低特徵維度",
            "key_principle": "取區域最大值",
            "key_purpose": "壓縮特徵，防止過擬合。",
            "common_apps": "減少影像處理時的計算耗損。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 減少影像處理時的計算耗損。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "537",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "透明可解釋",
            "title": "激活層",
            "eng_name": "Activation Layer",
            "eng_abbr": "-",
            "def": "用於決定神經元是否激發的層，能讓網路學習複雜的非線性關係。",
            "key_goal": "導入非線性變換",
            "key_principle": "門檻函數運算",
            "key_purpose": "使模型具備解決非線性問題的能力。",
            "common_apps": "各類深度學習模型必備層。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 各類深度學習模型必備層。 下，傳統方案難以處理變數過多的情境，而 激活層 則能透過多維數據提取深層規律。"
          },
          {
            "id": "538",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "永續發展",
            "title": "線性整流單元",
            "eng_name": "Rectified Linear Unit",
            "eng_abbr": "ReLU",
            "def": "目前最常用的激活函數，將負值歸零，保持正值。",
            "key_goal": "解決梯度消失",
            "key_principle": "max(0, x)",
            "key_purpose": "加速模型收斂速度。",
            "common_apps": "深度 CNN 網路的主流配置。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 深度 CNN 網路的主流配置。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "539",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "透明可解釋",
            "title": "S 型函數",
            "eng_name": "Sigmoid",
            "eng_abbr": "-",
            "def": "將輸入映射到 0 與 1 之間，常用於二分類任務的輸出層。",
            "key_goal": "機率映射",
            "key_principle": "壓縮值域至 0~1",
            "key_purpose": "表示預測為某類別的機率值。",
            "common_apps": "判斷影像是否有瑕疵（是/否）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 判斷影像是否有瑕疵（是/否）。 下，傳統方案難以處理變數過多的情境，而 S 型函數 則能透過多維數據提取深層規律。"
          },
          {
            "id": "540",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "透明可解釋",
            "title": "歸一化指數函數",
            "eng_name": "Softmax",
            "eng_abbr": "-",
            "def": "將多個輸出值轉換為總和為 1 的機率分佈。",
            "key_goal": "多分類機率分佈",
            "key_principle": "指數正規化",
            "key_purpose": "用於多類別分類任務的最後一層。",
            "common_apps": "辨識手寫數字 0-9 的機率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 辨識手寫數字 0-9 的機率。 下，傳統方案難以處理變數過多的情境，而 歸一化指數函數 則能透過多維數據提取深層規律。"
          },
          {
            "id": "544",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "永續發展",
            "title": "殘差連接",
            "eng_name": "Residual Connection",
            "eng_abbr": "-",
            "def": "允許信號繞過一層或多層直接傳遞，解決梯度退化問題。",
            "key_goal": "訓練超深層網路",
            "key_principle": "跳躍連接 (Skip)",
            "key_purpose": "提升深層網路的穩定性。",
            "common_apps": "ResNet 等現代模型的基礎。",
            "scenarios": {
              "weather": "氣象預報：衛星雲圖特徵提取（颱風強度分類）；空污：PM2.5影像分布分析",
              "agri": "智慧耕作：病蟲害影像特徵提取；精準養殖：魚群行為影像分析",
              "traffic": "智慧交通：車流影像特徵分析；自駕：道路場景理解",
              "industry": "品質檢測：產線瑕疵影像特徵萃取；AOI光學檢查核心",
              "finance": "智慧醫療：X光/病理切片影像特徵學習；半導體：晶圓圖案識別",
              "life": "智慧零售：商品影像特徵作為推薦依據",
              "fire": "智慧消防：火焰/煙霧影像特徵提取分類"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 ResNet 等現代模型的基礎。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "550",
            "subject": "中科三",
            "category": "神經網路",
            "principle": "永續發展",
            "title": "跳躍連接",
            "eng_name": "Skip Connections",
            "eng_abbr": "-",
            "def": "在編碼器與解碼器間直接傳遞特徵，保留位置資訊。",
            "key_goal": "保留空間細節",
            "key_principle": "跨層特徵融合",
            "key_purpose": "解決影像分割中的邊緣模糊問題。",
            "common_apps": "U-Net 醫學影像精準分割。",
            "scenarios": {
              "weather": "災害監測：衛星圖像素級洪水範圍標定；PM2.5高污染區域熱點圖",
              "agri": "智慧耕作：農田土地利用類型分割（作物/雜草/裸地）；病害感染面積測量",
              "traffic": "自駕與輔助：道路/人行道/標線語義標記供ADAS感知",
              "industry": "品質檢測：PCB電路板佈線缺陷範圍精確分割",
              "finance": "智慧醫療：腫瘤/器官邊界勾勒輔助手術規劃",
              "life": "智慧生活：AR虛擬試穿人體輪廓分割",
              "fire": "智慧消防：火場煙霧/火焰像素範圍分割；逃生路徑辨識"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 U-Net 醫學影像精準分割。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "深度學習",
        "topics": [
          {
            "id": "73",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "安全性",
            "title": "梯度消失",
            "eng_name": "Gradient Vanishing",
            "eng_abbr": "-",
            "def": "在深層網路訓練中，梯度傳遞至前端時變得極小，導致無法學習。",
            "key_goal": "模型學習失效",
            "key_principle": "梯度連乘趨近於零",
            "key_purpose": "模型診斷",
            "common_apps": "分析深層網路無法收斂的原因。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 分析深層網路無法收斂的原因。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "243",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "-",
            "title": "人工神經網路",
            "eng_name": "Artificial Neural Network",
            "eng_abbr": "ANN",
            "def": "模仿大腦神經元結構，由輸入層、隱藏層與輸出層組成的計算模型。",
            "key_goal": "模擬生物智能",
            "key_principle": "權重連接與激活函數",
            "key_purpose": "複雜非線性模式識別",
            "common_apps": "早期手寫數字辨識 (MNIST)。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 早期手寫數字辨識 (MNIST)。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "245",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "-",
            "title": "全連接層",
            "eng_name": "Fully Connected Layer",
            "eng_abbr": "FC",
            "def": "每一層的所有神經元都與前一層的所有神經元相連，通常用於網路末端進行分類。",
            "key_goal": "整合全局資訊",
            "key_principle": "矩陣乘法運算",
            "key_purpose": "產出最終分類結果",
            "common_apps": "將提取出的影像特徵轉換為「貓」或「狗」的機率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將提取出的影像特徵轉換為「貓」或「狗」的機率。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "355",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "-",
            "title": "閘道循環單元",
            "eng_name": "Gated Recurrent Unit",
            "eng_abbr": "GRU",
            "def": "一種 RNN 變體，結構較 LSTM 簡單，能有效捕捉長序列數據。",
            "key_goal": "解決梯度消失問題",
            "key_principle": "閘道機制 (重置/更新門)",
            "key_purpose": "語音辨識與時間序列預測。",
            "common_apps": "預測股票價格或分析音頻訊號。",
            "scenarios": {
              "weather": "氣象預報：強降雨量時序預測；ConvLSTM用於雷達回波短期降雨預報",
              "agri": "智慧耕作：作物生長週期預測；精準養殖：水質時間序列異常偵測",
              "traffic": "智慧交通：車流量小時/日週期預測；智慧物流：配送時程預估",
              "industry": "預測性維護：機台振動/溫度時序感測，預測故障",
              "finance": "金融科技：股票/匯率時序預測；智慧醫療：生理訊號（ECG/腦波）分析",
              "life": "智慧零售：商品銷售時序預測（庫存自動補貨）",
              "fire": "智慧消防：火災蔓延時序預測；設備溫度異常趨勢告警"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 預測股票價格或分析音頻訊號。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "381",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "永續發展與福祉",
            "title": "卷積循環神經網路",
            "eng_name": "Convolutional Recurrent Neural Network",
            "eng_abbr": "CRNN",
            "def": "結合 CNN 與 RNN，先用 CNN 提取圖像空間特徵，再用 RNN 處理序列關係。",
            "key_goal": "處理序列影像數據",
            "key_principle": "CNN 提取特徵 + RNN 處理序列",
            "key_purpose": "文字辨識 (OCR) 與語音識別。",
            "common_apps": "掃描並讀取身份證上的連續文字。",
            "scenarios": {
              "weather": "環境監控：氣象站儀表板數字自動讀取數位化",
              "agri": "精準養殖：水質感測器讀值自動記錄",
              "traffic": "智慧交通：車牌自動辨識（停車計費/違規舉牌）；物流：包裹條碼讀取",
              "industry": "品質檢測：產品序號/批號自動讀取紀錄",
              "finance": "金融科技：票據/合約文字自動擷取；智慧醫療：病歷表格數位化",
              "life": "智慧零售：電子發票/收據文字辨識",
              "fire": "公共安全：車牌辨識輔助警方追蹤"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 掃描並讀取身份證上的連續文字。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "382",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "永續發展與福祉",
            "title": "卷積長短期記憶網路",
            "eng_name": "Convolutional LSTM",
            "eng_abbr": "ConvLSTM",
            "def": "在 LSTM 的狀態轉換中使用卷積而非矩陣乘法，能同時捕捉空間與時間信息。",
            "key_goal": "捕捉時空特徵",
            "key_principle": "將卷積運算引入 LSTM 單元",
            "key_purpose": "降雨預報與視訊分析。",
            "common_apps": "根據過去 1 小時的雷達圖預測接下來 15 分鐘的降雨位置。",
            "scenarios": {
              "weather": "氣象預報：強降雨量時序預測；ConvLSTM用於雷達回波短期降雨預報",
              "agri": "智慧耕作：作物生長週期預測；精準養殖：水質時間序列異常偵測",
              "traffic": "智慧交通：車流量小時/日週期預測；智慧物流：配送時程預估",
              "industry": "預測性維護：機台振動/溫度時序感測，預測故障",
              "finance": "金融科技：股票/匯率時序預測；智慧醫療：生理訊號（ECG/腦波）分析",
              "life": "智慧零售：商品銷售時序預測（庫存自動補貨）",
              "fire": "智慧消防：火災蔓延時序預測；設備溫度異常趨勢告警"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 根據過去 1 小時的雷達圖預測接下來 15 分鐘的降雨位置。 下，傳統方案難以處理變數過多的情境，而 卷積長短期記憶網路 則能透過多維數據提取深層規律。"
          },
          {
            "id": "383",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "-",
            "title": "聯結主義時間分類",
            "eng_name": "Connectionist Temporal Classification",
            "eng_abbr": "CTC",
            "def": "允許神經網路在不知道輸入與輸出具體對齊位置的情況下進行序列訓練的損失函數。",
            "key_goal": "處理未對齊序列",
            "key_principle": "引入空白字元與去重機制",
            "key_purpose": "語音辨識與手寫辨識。",
            "common_apps": "將一段長短不一的語音波形轉錄為對應的文字。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將一段長短不一的語音波形轉錄為對應的文字。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "385",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "-",
            "title": "時間依賴建模",
            "eng_name": "Temporal Dependency Modeling",
            "eng_abbr": "-",
            "def": "在序列數據（如文字、語音）中，建立當前狀態與過去（或未來）時間點數據之間關聯性的過程。",
            "key_goal": "捕捉序列長程關係",
            "key_principle": "循環連接或注意力機制",
            "key_purpose": "提升模型對長文本或長音頻的理解力。",
            "common_apps": "在長文中理解「他」是指代前三段提到的某人。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在長文中理解「他」是指代前三段提到的某人。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "401",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "-",
            "title": "表徵學習",
            "eng_name": "Representation Learning",
            "eng_abbr": "-",
            "def": "讓模型自動從原始數據中學習出有效、低維度且具區別性的特徵表示。",
            "key_goal": "自動提取特徵",
            "key_principle": "隱層特徵映射",
            "key_purpose": "取代人工特徵工程。",
            "common_apps": "神經網路自動學會辨識影像中的邊緣而非手動定義。",
            "scenarios": {
              "weather": "環境監控：感測器端即時PM2.5分析（不上傳雲端）；邊緣站即時地震預警運算",
              "agri": "智慧耕作：田埂感測器本地即時土壤分析決策；畜牧：牲畜項圈端健康監測",
              "traffic": "自駕與輔助：車內ADAS即時障礙物偵測（低延遲）；路側單元即時車流分析",
              "industry": "品質檢測：產線攝影機端即時瑕疵判斷；預測性維護：感測器端即時異常偵測",
              "finance": "智慧醫療：手術室設備端即時生命徵象分析；穿戴裝置端健康偵測",
              "life": "智慧生活：智慧家電本地語音處理（保護隱私）；收銀端即時商品識別",
              "fire": "智慧消防：煙霧感測器端即時火災判斷（斷網也能動）；監控攝影機端人臉比對"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 神經網路自動學會辨識影像中的邊緣而非手動定義。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "428",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "永續發展與福祉",
            "title": "分散式詞嵌入",
            "eng_name": "Distributed Word Embedding",
            "eng_abbr": "-",
            "def": "利用神經網路將詞彙映射到低維稠密空間的技術（如 Word2Vec）。",
            "key_goal": "提供稠密語意表示",
            "key_principle": "神經網路映射",
            "key_purpose": "取代稀疏向量以提升效率。",
            "common_apps": "所有現代深度學習 NLP 模型的底層輸入。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 所有現代深度學習 NLP 模型的底層輸入。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "601",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "安全性\n\n責任與問責",
            "title": "深度卷積生成對抗網路",
            "eng_name": "Deep Convolutional Generative Adversarial Networks",
            "eng_abbr": "DCGAN",
            "def": "一種改進型的生成對抗網路，利用卷積層提取空間特徵，使生成的影像更具結構化與真實感。",
            "key_goal": "提升 GAN 生成圖像的品質與訓練穩定性",
            "key_principle": "將卷積神經網路 (CNN) 引入 GAN 架構，捨棄全連接層",
            "key_purpose": "高品質影像合成、特徵空間算術、數據增強",
            "common_apps": "自動生成手寫數字或人臉樣本\n\n補全損壞的歷史照片存檔",
            "scenarios": {
              "weather": "災害監測：生成高品質合成衛星影像擴充罕見災害訓練集",
              "agri": "智慧耕作：生成合成農作物病害影像擴充訓練資料",
              "traffic": "交通管理：生成合成交通標誌影像用於辨識模型訓練",
              "industry": "製程優化：生成合成瑕疵影像擴充品檢訓練資料",
              "finance": "智慧醫療：生成合成醫學影像保護病患隱私",
              "life": "智慧零售：自動生成手寫數字或人臉用於身分驗證訓練",
              "fire": "智慧消防：生成合成火場影像擴充消防 AI 訓練資料"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在自動生成手寫數字或人臉、高品質合成影像數據增強下，傳統方案難以處理變數過多的情境，而深度卷積生成對抗網路則能透過多維數據提取深層規律。"
          },
          {
            "id": "602",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "透明度\n\n安全性",
            "title": "-",
            "eng_name": "StyleGAN",
            "eng_abbr": "-",
            "def": "由 NVIDIA 開發，透過將潛在向量對齊到中間風格空間，實現對影像粗糙到細微特徵的層次化控制。",
            "key_goal": "實現對生成影像特徵（風格）的精細解耦控制",
            "key_principle": "映射網路 (Mapping Network) 與 風格調節 (AdaIN)",
            "key_purpose": "超寫真人臉生成、屬性編輯 (如換髮型、變老)",
            "common_apps": "虛擬模特兒生成\n\n影視特效中的面部重塑",
            "scenarios": {
              "weather": "災害監測：控制合成衛星影像的特定天氣風格特徵",
              "agri": "智慧耕作：控制生成農作物影像的品種與生長階段風格",
              "traffic": "交通管理：控制生成車輛影像的車型與顏色風格特徵",
              "industry": "製程優化：控制生成產品影像的材質與表面風格",
              "finance": "智慧醫療：控制生成虛擬病理切片的組織風格特徵",
              "life": "智慧零售：虛擬模特兒生成與時尚風格精細控制",
              "fire": "智慧消防：控制生成訓練影像的火場煙霧密度風格"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在虛擬模特兒生成等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "603",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "尊重智慧財產權",
            "title": "-",
            "eng_name": "CycleGAN",
            "eng_abbr": "-",
            "def": "一種不需要成對範例 (Unpaired) 即可進行影像轉譯的技術，確保影像轉過去再轉回來能保持內容一致。",
            "key_goal": "在無成對資料的情況下實現跨域風格轉換",
            "key_principle": "循環一致性損失 (Cycle Consistency Loss)",
            "key_purpose": "風格遷移、季節變換、草圖轉實景",
            "common_apps": "衛星圖轉地圖\n\n藝術畫作風格化 (如將照片轉為梵谷風)",
            "scenarios": {
              "weather": "災害監測：無成對資料下將衛星日間影像轉為夜間紅外風格",
              "agri": "智慧耕作：無成對資料下將健康作物影像轉為病害模擬影像",
              "traffic": "交通管理：無成對資料下將晴天道路影像轉為雨天/霧天風格",
              "industry": "製程優化：無成對資料下將正常品影像轉為瑕疵品模擬影像",
              "finance": "智慧醫療：無成對資料下將 CT 影像轉為 MRI 風格輔助跨模態診斷",
              "life": "智慧生活：照片風格轉換（如寫實轉動漫風格）",
              "fire": "智慧消防：無成對資料下將正常建物影像轉為火災損毀模擬影像"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在照片風格轉換等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "608",
            "subject": "中科三",
            "category": "深度學習",
            "principle": "安全性\n\n透明度",
            "title": "去噪擴散機率模型",
            "eng_name": "Denoising Diffusion Probabilistic Models",
            "eng_abbr": "DDPM",
            "def": "一種生成模型，透過逐步向資料加入高斯雜訊，再學習如何逆轉此過程以從雜訊中合成出原始分布的數據。",
            "key_goal": "從純雜訊中逐步還原並生成高品質數據",
            "key_principle": "馬可夫鏈 (Markov Chain) 的正向加噪與反向去噪",
            "key_purpose": "圖像生成 (T2I)、影像修復、音訊合成",
            "common_apps": "Midjourney 底層架構\n\n醫學影像超解析度還原",
            "scenarios": {
              "weather": "災害監測：從純雜訊逐步生成高品質合成氣象雷達圖",
              "agri": "智慧耕作：從純雜訊生成合成作物病害影像擴充訓練集",
              "traffic": "交通管理：從純雜訊生成合成交通場景影像",
              "industry": "製程優化：從純雜訊生成合成瑕疵影像擴充品檢訓練集",
              "finance": "智慧醫療：從純雜訊逐步生成合成醫學影像用於研究",
              "life": "智慧生活：AI 藝術創作與高品質人像生成",
              "fire": "智慧消防：從純雜訊生成合成火場影像用於消防模擬"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 AI 藝術創作、高品質影像生成下，傳統方案難以處理變數過多的情境，而去噪擴散機率模型則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "NLP",
        "topics": [
          {
            "id": "89",
            "subject": "中科三",
            "category": "NLP",
            "principle": "透明與可解釋",
            "title": "詞嵌入",
            "eng_name": "Word Embedding",
            "eng_abbr": "-",
            "def": "將詞語映射至高維向量空間，使語意相近的詞在空間中距離較近。",
            "key_goal": "詞語向量化",
            "key_principle": "語意空間映射 (Word2Vec)",
            "key_purpose": "語意特徵表示",
            "common_apps": "搜尋引擎相關性推算、情緒分析。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 搜尋引擎相關性推算、情緒分析。 下，傳統方案難以處理變數過多的情境，而 詞嵌入 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "模型監控",
        "topics": [
          {
            "id": "128",
            "subject": "中科三",
            "category": "模型監控",
            "principle": "透明與可解釋",
            "title": "模型漂移",
            "eng_name": "Model Drift",
            "eng_abbr": "-",
            "def": "隨時間推移，生產環境數據與訓練數據分佈不一致導致模型準確率下降。",
            "key_goal": "偵測效能衰退",
            "key_principle": "數據分佈偏移分析",
            "key_purpose": "觸發重新訓練機制",
            "common_apps": "貸款審核模型因經濟環境改變而失效。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 貸款審核模型因經濟環境改變而失效。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "256",
            "subject": "中科三",
            "category": "模型監控",
            "principle": "問責",
            "title": "幻覺率",
            "eng_name": "Hallucination Rate",
            "eng_abbr": "-",
            "def": "在特定測試集上，AI 生成事實錯誤內容的百分比。",
            "key_goal": "衡量生成品質",
            "key_principle": "錯誤事實占比統計",
            "key_purpose": "模型效能評比",
            "common_apps": "比較不同版本基座模型的可靠性。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 比較不同版本基座模型的可靠性。 下，傳統方案難以處理變數過多的情境，而 幻覺率 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "數學基礎",
        "topics": [
          {
            "id": "203",
            "subject": "中科三",
            "category": "數學基礎",
            "principle": "-",
            "title": "純量",
            "eng_name": "Scalar",
            "eng_abbr": "-",
            "def": "只有大小、沒有方向的數值（如：溫度 25 度）。",
            "key_goal": "單一數值表示",
            "key_principle": "零階張量",
            "key_purpose": "描述單一屬性",
            "common_apps": "損失函數的最終得分。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 損失函數的最終得分。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "204",
            "subject": "中科三",
            "category": "數學基礎",
            "principle": "-",
            "title": "向量",
            "eng_name": "Vector",
            "eng_abbr": "-",
            "def": "由一組有序數值組成，代表空間中的點或方向（如：詞嵌入）。",
            "key_goal": "方向與強度表示",
            "key_principle": "一階張量",
            "key_purpose": "語義表示",
            "common_apps": "將「蘋果」轉化為數值數組。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將「蘋果」轉化為數值數組。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "205",
            "subject": "中科三",
            "category": "數學基礎",
            "principle": "-",
            "title": "矩陣",
            "eng_name": "Matrix",
            "eng_abbr": "-",
            "def": "由列與行組成的矩形數組，是線性變換與權重存儲的核心。",
            "key_goal": "二維數據結構",
            "key_principle": "二階張量",
            "key_purpose": "網路權重儲存",
            "common_apps": "神經網路層與層間的計算。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 神經網路層與層間的計算。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "206",
            "subject": "中科三",
            "category": "數學基礎",
            "principle": "-",
            "title": "張量",
            "eng_name": "Tensor",
            "eng_abbr": "-",
            "def": "矩陣在高維空間的推廣（0階為純量，1階為向量，2階為矩陣）。",
            "key_goal": "多維數據容器",
            "key_principle": "多維數組",
            "key_purpose": "深度學習核心架構",
            "common_apps": "處理彩色圖像（長 x 寬 x 色彩通道）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 處理彩色圖像（長 x 寬 x 色彩通道）。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "207",
            "subject": "中科三",
            "category": "數學基礎",
            "principle": "-",
            "title": "線性代數",
            "eng_name": "Linear Algebra",
            "eng_abbr": "-",
            "def": "研究向量空間與線性映射的數學分支，是 AI 計算的物理基礎。",
            "key_goal": "空間變換計算",
            "key_principle": "矩陣與向量運算",
            "key_purpose": "神經網路底層計算",
            "common_apps": "執行矩陣相乘來更新神經元。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 執行矩陣相乘來更新神經元。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "208",
            "subject": "中科三",
            "category": "數學基礎",
            "principle": "透明與可解釋",
            "title": "微積分",
            "eng_name": "Calculus",
            "eng_abbr": "-",
            "def": "研究函數變化率的數學，是優化演算法（梯度下降）的理論支柱。",
            "key_goal": "變化率建模",
            "key_principle": "導數與積分",
            "key_purpose": "模型參數優化",
            "common_apps": "計算誤差對權重的影響。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 計算誤差對權重的影響。 下，傳統方案難以處理變數過多的情境，而 微積分 則能透過多維數據提取深層規律。"
          },
          {
            "id": "209",
            "subject": "中科三",
            "category": "數學基礎",
            "principle": "透明與可解釋",
            "title": "鏈式法則",
            "eng_name": "Chain Rule",
            "eng_abbr": "-",
            "def": "計算複合函數導數的公式，是「反向傳播」演算法的核心邏輯。",
            "key_goal": "複合函數求導",
            "key_principle": "偏微分傳遞",
            "key_purpose": "權重梯度更新",
            "common_apps": "將輸出誤差回傳至輸入層。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將輸出誤差回傳至輸入層。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "210",
            "subject": "中科三",
            "category": "數學基礎",
            "principle": "透明與可解釋",
            "title": "貝氏定理",
            "eng_name": "Bayes' Theorem",
            "eng_abbr": "-",
            "def": "描述在已知某些條件下，事件發生機率的數學公式，用於不確定性推理。",
            "key_goal": "條件機率推論",
            "key_principle": "先驗與後驗機率更新",
            "key_purpose": "分類與不確定性評估",
            "common_apps": "判定郵件在包含某些字眼時為垃圾信的機率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 判定郵件在包含某些字眼時為垃圾信的機率。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "環境保護",
        "topics": [
          {
            "id": "235",
            "subject": "中科三",
            "category": "環境保護",
            "principle": "永續發展與福祉",
            "title": "綠色人工智慧",
            "eng_name": "Green AI",
            "eng_abbr": "-",
            "def": "專注於開發低耗能、高效益的 AI 系統，以減少訓練與推論的碳足跡。",
            "key_goal": "降低環境成本",
            "key_principle": "高能效演算法開發",
            "key_purpose": "ESG 企業責任",
            "common_apps": "採用輕量化模型以節省伺服器電力。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 採用輕量化模型以節省伺服器電力。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "240",
            "subject": "中科三",
            "category": "環境保護",
            "principle": "永續發展與福祉",
            "title": "碳足跡",
            "eng_name": "Carbon Footprint",
            "eng_abbr": "-",
            "def": "衡量 AI 模型在全生命週期（特別是訓練階段）所產生的溫室氣體總量。",
            "key_goal": "監測環境影響",
            "key_principle": "二氧化碳排放量度量",
            "key_purpose": "環境永續報告書",
            "common_apps": "計算預訓練一個大模型所需的耗電與排碳。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 計算預訓練一個大模型所需的耗電與排碳。 下，傳統方案難以處理變數過多的情境，而 碳足跡 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "模型規模",
        "topics": [
          {
            "id": "242",
            "subject": "中科三",
            "category": "模型規模",
            "principle": "永續發展與福祉",
            "title": "參數量",
            "eng_name": "Parameter Count",
            "eng_abbr": "-",
            "def": "指神經網絡中權重和偏置的總量（如 70B 表示 700 億），代表學習能力。",
            "key_goal": "衡量模型容量",
            "key_principle": "模型內部變數總數",
            "key_purpose": "評估硬體門檻",
            "common_apps": "決定運行模型需要多少顯存（VRAM）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 決定運行模型需要多少顯存（VRAM）。 下，傳統方案難以處理變數過多的情境，而 參數量 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "電腦視覺",
        "topics": [
          {
            "id": "266",
            "subject": "中科三",
            "category": "電腦視覺",
            "principle": "透明與可解釋",
            "title": "顯著圖",
            "eng_name": "Saliency Map",
            "eng_abbr": "-",
            "def": "標示出影像中對模型決策影響最大的像素區域，用於解釋 AI「看到了什麼」。",
            "key_goal": "視覺化模型關注點",
            "key_principle": "像素梯度熱圖繪製",
            "key_purpose": "診斷模型錯誤原因",
            "common_apps": "確認醫療影像 AI 是否真的在看病灶而非背景雜訊。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 確認醫療影像 AI 是否真的在看病灶而非背景雜訊。 下，傳統方案難以處理變數過多的情境，而 顯著圖 則能透過多維數據提取深層規律。"
          },
          {
            "id": "384",
            "subject": "中科三",
            "category": "電腦視覺",
            "principle": "永續發展與福祉",
            "title": "空間特徵提取",
            "eng_name": "Spatial Feature Extraction",
            "eng_abbr": "-",
            "def": "透過濾波器（卷積核）從影像中自動識別邊緣、紋理及形狀等空間資訊的過程。",
            "key_goal": "辨識圖像局部結構",
            "key_principle": "卷積核滑動窗口",
            "key_purpose": "影像識別與目標檢測的基礎。",
            "common_apps": "在自駕車影像中辨識出「停止」標誌的八角形特徵。",
            "scenarios": {
              "weather": "氣象預報：自駕系統結合即時路面積水/能見度警示",
              "agri": "智慧耕作：農場自駕拖拉機自動施肥/犁田",
              "traffic": "自駕與輔助：自駕公車測試、ADAS駕駛輔助、疲勞駕駛偵測（核心場景）",
              "industry": "製程優化：工廠內自駕AGV物料搬運",
              "finance": "半導體：自駕晶片研發驗證場景",
              "life": "智慧生活：配送無人車/電動輪椅自駕輔助",
              "fire": "智慧消防：救災自駕機器人進入火場偵測"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在自駕車影像中辨識出「停止」標誌的八角形特徵。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數據準備",
        "topics": [
          {
            "id": "268",
            "subject": "中科三",
            "category": "數據準備",
            "principle": "公平性",
            "title": "合成少數類過採樣技術",
            "eng_name": "Synthetic Minority Over-sampling Technique",
            "eng_abbr": "SMOTE",
            "def": "在特徵空間中，透過現有少數類樣本間的連線插值產生新樣本的技術 。",
            "key_goal": "解決資料不平衡",
            "key_principle": "內插法生成新樣本",
            "key_purpose": "提升少數類別辨識率",
            "common_apps": "信用卡盜刷檢測中，生成虛構的盜刷樣本以平衡數據。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "金融科技：信用卡盜刷風險即時偵測、異常交易攔截（核心場景）",
              "life": "智慧零售：電商平台異常退款/刷卡詐欺偵測",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 信用卡盜刷檢測中，生成虛構的盜刷樣本以平衡數據。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "275",
            "subject": "中科三",
            "category": "數據準備",
            "principle": "公平性",
            "title": "資料不平衡",
            "eng_name": "Data Imbalance",
            "eng_abbr": "-",
            "def": "訓練數據中某一類別（如正常件）遠多於另一類（如瑕疵件）的現象 。",
            "key_goal": "診斷樣本偏差",
            "key_principle": "類別比例嚴重失調",
            "key_purpose": "模型效能診斷",
            "common_apps": "發現 AI 總是預測「沒病」，是因為訓練集 99% 都是健康者。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 發現 AI 總是預測「沒病」，是因為訓練集 99% 都是健康者。 下，傳統方案難以處理變數過多的情境，而 資料不平衡 則能透過多維數據提取深層規律。"
          },
          {
            "id": "296",
            "subject": "中科三",
            "category": "數據準備",
            "principle": "永續發展與福祉",
            "title": "特徵縮放",
            "eng_name": "Feature Scaling",
            "eng_abbr": "-",
            "def": "將不同範圍的特徵數值調整到統一區間，避免特定特徵主導模型訓練。",
            "key_goal": "消除量綱影響",
            "key_principle": "歸一化或標準化 (0-1 / Z-score)",
            "key_purpose": "加速梯度下降收斂",
            "common_apps": "將「年收(萬元)」與「年齡(歲)」調整到相同數值級別。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將「年收(萬元)」與「年齡(歲)」調整到相同數值級別。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "297",
            "subject": "中科三",
            "category": "數據準備",
            "principle": "-",
            "title": "獨熱編碼",
            "eng_name": "One-Hot Encoding",
            "eng_abbr": "-",
            "def": "將類別特徵轉換為二進制向量，避免模型誤認類別間有大小順序關係。",
            "key_goal": "處理類別型數據",
            "key_principle": "N 位狀態寄存器編碼",
            "key_purpose": "讓機器理解文字標籤",
            "common_apps": "將「紅、藍、綠」轉化為 [1,0,0]、[0,1,0]、[0,0,1]。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將「紅、藍、綠」轉化為 [1,0,0]、[0,1,0]、[0,0,1]。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "298",
            "subject": "中科三",
            "category": "數據準備",
            "principle": "-",
            "title": "標籤編碼",
            "eng_name": "Label Encoding",
            "eng_abbr": "-",
            "def": "將類別轉換為整數（如 0, 1, 2）。",
            "key_goal": "處理有序類別數據",
            "key_principle": "數值映射賦值",
            "key_purpose": "節省空間並保留順序感",
            "common_apps": "將「小、中、大」編碼為 1, 2, 3。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將「小、中、大」編碼為 1, 2, 3。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "529",
            "subject": "中科三",
            "category": "數據準備",
            "principle": "永續發展",
            "title": "數據增強",
            "eng_name": "Data Augmentation",
            "eng_abbr": "-",
            "def": "透過旋轉、翻轉、縮放或色彩抖動，由現有數據生成新樣本。",
            "key_goal": "增加數據多樣性",
            "key_principle": "幾何與顏色變換",
            "key_purpose": "防止過擬合，提升模型泛化能力。",
            "common_apps": "在醫學影像不足時生成合成樣本。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在醫學影像不足時生成合成樣本。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型量化",
        "topics": [
          {
            "id": "331",
            "subject": "中科三",
            "category": "模型量化",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "TurboQuant",
            "eng_abbr": "-",
            "def": "針對特定硬體架構優化的量化庫，旨在極大化提升低精度運算下的吞吐量。",
            "key_goal": "極速推論",
            "key_principle": "4-bit 權重激發優化",
            "key_purpose": "降低 GPU 顯存消耗",
            "common_apps": "在單張 4090 顯卡上運行超大參數模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在單張 4090 顯卡上運行超大參數模型。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          },
          {
            "id": "332",
            "subject": "中科三",
            "category": "模型量化",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "PolarQuant",
            "eng_abbr": "-",
            "def": "採用極坐標系統而非直角座標對權重進行量化，能更精準捕捉權重的方向性特徵。",
            "key_goal": "減少量化損失",
            "key_principle": "極坐標量化分布",
            "key_purpose": "提升低位元模型的精度",
            "common_apps": "在 2-bit 量化下仍能保持接近原模型的準確度。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在 2-bit 量化下仍能保持接近原模型的準確度。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "數據科學",
        "topics": [
          {
            "id": "333",
            "subject": "中科三",
            "category": "數據科學",
            "principle": "-",
            "title": "量化 JL 轉換",
            "eng_name": "Quantized Johnson-Lindenstrauss",
            "eng_abbr": "QJL",
            "def": "結合 JL 引理的降維特性與量化技術，將高維向量壓縮至極短的位元序列。",
            "key_goal": "高維數據降維",
            "key_principle": "隨機投影與位元壓縮",
            "key_purpose": "加速大規模向量檢索",
            "common_apps": "讓數十億筆的向量索引佔用更小的記憶體空間。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 讓數十億筆的向量索引佔用更小的記憶體空間。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "430",
            "subject": "中科三",
            "category": "數據科學",
            "principle": "永續發展與福祉",
            "title": "降維技術",
            "eng_name": "Dimensionality Reduction",
            "eng_abbr": "-",
            "def": "將高維數據壓縮至低維，同時保留重要特徵或結構的過程。",
            "key_goal": "減少運算開銷",
            "key_principle": "PCA, t-SNE, UMAP",
            "key_purpose": "數據可視化與加速運算。",
            "common_apps": "將 512 維的詞向量降至 2 維，以便在螢幕上觀察聚類。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將 512 維的詞向量降至 2 維，以便在螢幕上觀察聚類。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型壓縮",
        "topics": [
          {
            "id": "334",
            "subject": "中科三",
            "category": "模型壓縮",
            "principle": "永續發展與福祉",
            "title": "無損量化",
            "eng_name": "Lossless Quantization",
            "eng_abbr": "-",
            "def": "透過特殊的編碼算法（如卷積補償），在縮小模型體積的同時，確保數值精度完全不降。",
            "key_goal": "零性能損失壓縮",
            "key_principle": "權重編碼與誤差補償",
            "key_purpose": "追求極致精度的工業 AI",
            "common_apps": "確保瑕疵檢測 AI 量化後不會產生任何漏判。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 確保瑕疵檢測 AI 量化後不會產生任何漏判。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "366",
            "subject": "中科三",
            "category": "模型壓縮",
            "principle": "永續發展與福祉",
            "title": "蒸餾版 BERT",
            "eng_name": "Distilled BERT",
            "eng_abbr": "DistilBERT",
            "def": "透過教師-學生模型架構，由大 BERT 教導小模型，保留 97% 效能但體積減少 40%。",
            "key_goal": "縮小模型並保持效能",
            "key_principle": "知識蒸餾 (Knowledge Distillation)",
            "key_purpose": "提升邊緣裝置上的 NLP 推論速度。",
            "common_apps": "在手機端實現快速的情感分析服務。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在手機端實現快速的情感分析服務。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型微調",
        "topics": [
          {
            "id": "341",
            "subject": "中科三",
            "category": "模型微調",
            "principle": "永續發展與福祉",
            "title": "適配器層",
            "eng_name": "Adapter Layer",
            "eng_abbr": "-",
            "def": "在預訓練模型層間插入小型可訓練模組，僅更新這些少量參數而非全模型。",
            "key_goal": "降低微調成本",
            "key_principle": "模組化參數插入",
            "key_purpose": "實現高效參數微調 (PEFT)。",
            "common_apps": "在資源有限情況下，讓 Llama 3 學會法律術語。",
            "scenarios": {
              "weather": "氣象預報：氣象報告文字自動生成；環境：民眾災害問答AI助理",
              "agri": "智慧耕作：農民農業技術問答機器人；農業政策法規文件摘要",
              "traffic": "智慧物流：貨運文件智動摘要；客服：運輸問題AI即時回覆",
              "industry": "製程優化：設備操作手冊問答系統；品質報告自動撰寫",
              "finance": "金融科技：Robo-advisor個人化理財建議；智慧醫療：病歷摘要/醫療問答AI",
              "life": "智能客服：24H生成式AI郵件/聊天回覆；個人化購物推薦文案生成",
              "fire": "公共安全：緊急應變知識問答機器人；消防法規自動查詢"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在資源有限情況下，讓 Llama 3 學會法律術語。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "364",
            "subject": "中科三",
            "category": "模型微調",
            "principle": "永續發展與福祉",
            "title": "下游任務微調",
            "eng_name": "Fine-tuning for Downstream Tasks",
            "eng_abbr": "-",
            "def": "將預訓練模型應用到特定任務（如翻譯、命名實體辨識）並調整參數的過程。",
            "key_goal": "實現特定領域應用",
            "key_principle": "遷移學習 (Transfer Learning)",
            "key_purpose": "產出專用化的 AI 模型。",
            "common_apps": "拿 BERT 微調成一個專門判斷金融新聞利多利空的工具。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 拿 BERT 微調成一個專門判斷金融新聞利多利空的工具。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "445",
            "subject": "中科三",
            "category": "模型微調",
            "principle": "永續發展與福祉",
            "title": "領域專家微調",
            "eng_name": "Domain-specific Expert Fine-tuning",
            "eng_abbr": "-",
            "def": "針對特定行業（如半導體、醫療）進行深度的參數調整，使 AI 具備專家級知識。",
            "key_goal": "建立專業垂直領域 AI",
            "key_principle": "專業語料對齊",
            "key_purpose": "垂直領域轉型應用。",
            "common_apps": "讓 TAIDE 學會精準的法律條文解釋。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 讓 TAIDE 學會精準的法律條文解釋。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "NLP 歷史",
        "topics": [
          {
            "id": "353",
            "subject": "中科三",
            "category": "NLP 歷史",
            "principle": "-",
            "title": "伊莉莎",
            "eng_name": "ELIZA",
            "eng_abbr": "-",
            "def": "1966 年開發的首個對話機器人，模擬心理醫生與人交流。",
            "key_goal": "模擬對話行為",
            "key_principle": "關鍵字匹配與模板替換",
            "key_purpose": "展示早期 AI 的可能性。",
            "common_apps": "經典的「Rogerian」對話模擬。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 經典的「Rogerian」對話模擬。 下，傳統方案難以處理變數過多的情境，而 伊莉莎 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "NLP 基礎",
        "topics": [
          {
            "id": "354",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "N 元語法",
            "eng_name": "N-gram",
            "eng_abbr": "-",
            "def": "基於前 n-1 個詞預測下一個詞出現機率的統計模型。",
            "key_goal": "預測下一個字詞",
            "key_principle": "統計概率序列模型",
            "key_purpose": "拼寫檢查與簡單文字生成。",
            "common_apps": "手機鍵盤的下一個字預測功能。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 手機鍵盤的下一個字預測功能。 下，傳統方案難以處理變數過多的情境，而 N 元語法 則能透過多維數據提取深層規律。"
          },
          {
            "id": "360",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "統計語言模型",
            "eng_name": "Statistical Language Models",
            "eng_abbr": "SLM",
            "def": "透過統計方法（如 N-gram）計算單詞序列出現機率的模型。",
            "key_goal": "建模語言規律",
            "key_principle": "概率分佈計算",
            "key_purpose": "機器翻譯與語音辨識。",
            "common_apps": "早期的 Google 翻譯系統。",
            "scenarios": {
              "weather": "環境監控：跨國氣象報告即時翻譯",
              "agri": "農業技術：國際農業研究文獻自動翻譯",
              "traffic": "智慧物流：跨國運輸文件多語翻譯",
              "industry": "製程優化：國際設備維修手冊即時翻譯",
              "finance": "智慧醫療：國際醫學文獻快速翻譯輔助研究",
              "life": "智能客服：多語言24H客服機器人翻譯支援",
              "fire": "公共安全：外籍人士緊急求救語言即時翻譯"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 早期的 Google 翻譯系統。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "395",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "字幹提取",
            "eng_name": "Stemming",
            "eng_abbr": "-",
            "def": "透過簡單的規則切除單字的後綴（如 \"running\" 變 \"run\"），不考慮詞彙學意義。",
            "key_goal": "減少語彙維度",
            "key_principle": "規則暴力去尾",
            "key_purpose": "基礎文本清洗與檢索優化。",
            "common_apps": "在搜尋引擎中將「跑步」與「跑了」關聯在一起。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在搜尋引擎中將「跑步」與「跑了」關聯在一起。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "396",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "詞形還原",
            "eng_name": "Lemmatization",
            "eng_abbr": "-",
            "def": "考慮上下文與詞性，將變體字還原為標準字典形式（如 \"better\" 還原為 \"good\"）。",
            "key_goal": "精準還原字源",
            "key_principle": "基於詞典與語法分析",
            "key_purpose": "高品質的語意分析前處理。",
            "common_apps": "在法律文件分析中精確統計核心詞彙頻率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在法律文件分析中精確統計核心詞彙頻率。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "397",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "永續發展與福祉",
            "title": "停用詞移除",
            "eng_name": "Stopword Removal",
            "eng_abbr": "-",
            "def": "移除文本中出現頻率極高但對語意貢獻極小的詞（如 \"the\", \"is\", \"的\", \"了\"）。",
            "key_goal": "過濾無意義資訊",
            "key_principle": "基於詞頻過濾表",
            "key_purpose": "減少計算開銷，專注於關鍵詞。",
            "common_apps": "關鍵詞提取前先過濾掉常見助詞。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 關鍵詞提取前先過濾掉常見助詞。 下，傳統方案難以處理變數過多的情境，而 停用詞移除 則能透過多維數據提取深層規律。"
          },
          {
            "id": "398",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "文本正規化",
            "eng_name": "Text Normalization",
            "eng_abbr": "-",
            "def": "將文字轉換為統一標準格式（如全半形轉換、大小寫統一、日期格式統一）的過程。",
            "key_goal": "統一口徑與格式",
            "key_principle": "字符串標準化處理",
            "key_purpose": "提升後續模型處理的一致性。",
            "common_apps": "將 \"AI\", \"a.i.\", \"Ai\" 全部統一為 \"AI\"。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 將 \"AI\", \"a.i.\", \"Ai\" 全部統一為 \"AI\"。 下，傳統方案難以處理變數過多的情境，而 文本正規化 則能透過多維數據提取深層規律。"
          },
          {
            "id": "399",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "詞袋模型",
            "eng_name": "Bag of Words",
            "eng_abbr": "BoW",
            "def": "忽略語法與順序，僅記錄文本中各個詞彙出現次數的表示法。",
            "key_goal": "將文本數值化",
            "key_principle": "統計詞頻而不計順序",
            "key_purpose": "簡單的文本分類或垃圾郵件過濾。",
            "common_apps": "計算郵件中「中獎」出現的次數來判定詐騙。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 計算郵件中「中獎」出現的次數來判定詐騙。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "400",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "詞向量化",
            "eng_name": "Word Vectorization",
            "eng_abbr": "-",
            "def": "將離散的字詞轉換為連續空間中數值向量的過程，以便數學運算。",
            "key_goal": "讓機器理解語意空間",
            "key_principle": "將符號轉為數值向量",
            "key_purpose": "所有深度學習 NLP 任務的起點。",
            "common_apps": "將「貓」轉換為 [0.12, -0.54, ...] 的數組。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將「貓」轉換為 [0.12, -0.54, ...] 的數組。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "404",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "靜態嵌入",
            "eng_name": "Static Embeddings",
            "eng_abbr": "-",
            "def": "無論上下文為何，同一個字永遠對應同一個向量（如 Word2Vec, GloVe）。",
            "key_goal": "提供固定詞義表徵",
            "key_principle": "一詞一向量 (固定 Lookup)",
            "key_purpose": "快速語意搜尋。",
            "common_apps": "缺點是無法區分「蘋果手機」和「吃蘋果」中的蘋果。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 缺點是無法區分「蘋果手機」和「吃蘋果」中的蘋果。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "406",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "上下文相關嵌入",
            "eng_name": "Contextualized Embeddings",
            "eng_abbr": "-",
            "def": "向量隨環境變化，同一個字在不同句子中會有不同向量（如 ELMo, BERT）。",
            "key_goal": "解決一詞多義問題",
            "key_principle": "動態計算向量",
            "key_purpose": "提升語意理解的精準度。",
            "common_apps": "精確區分「銀行」是金融機構還是河岸。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 精確區分「銀行」是金融機構還是河岸。 下，傳統方案難以處理變數過多的情境，而 上下文相關嵌入 則能透過多維數據提取深層規律。"
          },
          {
            "id": "408",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "N 元組",
            "eng_name": "N-grams",
            "eng_abbr": "-",
            "def": "將文本切分為連續的 N 個單元（如 Bigram 為兩兩一組）。",
            "key_goal": "捕捉短程關聯",
            "key_principle": "滑動窗口切分",
            "key_purpose": "拼寫檢查與語言模型。",
            "common_apps": "統計「今天」之後出現「天氣」的機率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 統計「今天」之後出現「天氣」的機率。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "409",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "詞頻-逆文件頻率",
            "eng_name": "Term Frequency-Inverse Document Frequency",
            "eng_abbr": "TF-IDF",
            "def": "一種統計方法，評估一個詞對一份文件的重要性（越在該篇常見且在別篇罕見則分數越高）。",
            "key_goal": "衡量單字重要性",
            "key_principle": "局部詞頻與全局稀有度乘積",
            "key_purpose": "提取文件關鍵詞與信息檢索。",
            "common_apps": "從 100 篇新聞中找出最能代表「AI」這篇的特徵詞。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 從 100 篇新聞中找出最能代表「AI」這篇的特徵詞。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "416",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "共現矩陣",
            "eng_name": "Co-occurrence Matrix",
            "eng_abbr": "-",
            "def": "紀錄詞彙在文本中共同出現次數的矩陣，是 GloVe 等模型的理論基礎。",
            "key_goal": "捕捉詞彙統計關係",
            "key_principle": "鄰近詞頻度統計",
            "key_purpose": "計算詞彙相關性。",
            "common_apps": "發現「咖啡」與「拿鐵」常一起出現，故語意接近。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 發現「咖啡」與「拿鐵」常一起出現，故語意接近。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "418",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "永續發展與福祉",
            "title": "上下文表徵",
            "eng_name": "Contextual Representation",
            "eng_abbr": "-",
            "def": "根據單字所在環境動態生成的向量（如 BERT 輸出）。",
            "key_goal": "解決一詞多義",
            "key_principle": "動態向量計算",
            "key_purpose": "提升語意理解精準度。",
            "common_apps": "精確區分「蘋果」是指水果還是手機公司。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 精確區分「蘋果」是指水果還是手機公司。 下，傳統方案難以處理變數過多的情境，而 上下文表徵 則能透過多維數據提取深層規律。"
          },
          {
            "id": "419",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "非上下文表徵",
            "eng_name": "Non-contextual Representation",
            "eng_abbr": "-",
            "def": "無論在哪個句子，同一個字的向量永遠固定（如 Word2Vec）。",
            "key_goal": "提供固定基礎語意",
            "key_principle": "靜態 Lookup 表",
            "key_purpose": "快速計算與節省資源。",
            "common_apps": "傳統的關鍵字相似度比對。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 傳統的關鍵字相似度比對。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "422",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "-",
            "title": "向量空間模型",
            "eng_name": "Vector Space Model",
            "eng_abbr": "VSM",
            "def": "將文件表示為空間中的向量，利用幾何距離衡量文本間的相似性。",
            "key_goal": "實現文本相似度計算",
            "key_principle": "代數運算與餘弦相似度",
            "key_purpose": "信息檢索與文件分類。",
            "common_apps": "搜尋引擎計算使用者查詢與網頁內容的相似度。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 搜尋引擎計算使用者查詢與網頁內容的相似度。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "425",
            "subject": "中科三",
            "category": "NLP 基礎",
            "principle": "永續發展與福祉",
            "title": "常用詞抑制",
            "eng_name": "Common Word Suppression",
            "eng_abbr": "-",
            "def": "降低高頻但低資訊量詞彙（如 stopwords）對模型影響的技術。",
            "key_goal": "減少雜訊干擾",
            "key_principle": "停用詞過濾與權重調減",
            "key_purpose": "提升檢索與摘要質量。",
            "common_apps": "去除「而且」、「所以」等詞後再進行主題建模。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 去除「而且」、「所以」等詞後再進行主題建模。 下，傳統方案難以處理變數過多的情境，而 常用詞抑制 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "NLP 模型",
        "topics": [
          {
            "id": "356",
            "subject": "中科三",
            "category": "NLP 模型",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "Robustly Optimized BERT Approach",
            "eng_abbr": "RoBERTa",
            "def": "Meta 開發的 BERT 變體，移除 NSP 任務並增加訓練數據與時間。",
            "key_goal": "提升 BERT 性能",
            "key_principle": "改進訓練策略與大數據",
            "key_purpose": "提供更強的文本表徵。",
            "common_apps": "複雜的情緒分析或語意推斷。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 複雜的情緒分析或語意推斷。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          },
          {
            "id": "357",
            "subject": "中科三",
            "category": "NLP 模型",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "Text-to-Text Transfer Transformer",
            "eng_abbr": "T5",
            "def": "將所有 NLP 任務（翻譯、摘要、分類）都視為「文字進、文字出」的模型。",
            "key_goal": "統一 NLP 任務架構",
            "key_principle": "萬物皆可 Text-to-Text",
            "key_purpose": "簡化多任務訓練流程。",
            "common_apps": "使用同一個模型進行英翻中與文本摘要。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 使用同一個模型進行英翻中與文本摘要。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          },
          {
            "id": "358",
            "subject": "中科三",
            "category": "NLP 模型",
            "principle": "永續發展與福祉",
            "title": "來自變換器的雙向編碼器表徵",
            "eng_name": "Bidirectional Encoder Representations from Transformers",
            "eng_abbr": "BERT",
            "def": "Google 開發的預訓練模型(即雙向 Transformer Encoder)，能同時看前後文來理解單字意義。",
            "key_goal": "捕捉深層語意",
            "key_principle": "雙向上下文編碼",
            "key_purpose": "各類 NLP 下游任務的基礎。",
            "common_apps": "搜尋引擎精準理解使用者的搜尋意圖。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 搜尋引擎精準理解使用者的搜尋意圖。 下，傳統方案難以處理變數過多的情境，而 來自變換器的雙向編碼器表徵 則能透過多維數據提取深層規律。"
          },
          {
            "id": "361",
            "subject": "中科三",
            "category": "NLP 模型",
            "principle": "永續發展與福祉",
            "title": "預訓練語言模型",
            "eng_name": "Pre-trained Language Models",
            "eng_abbr": "PLM",
            "def": "在海量文本上預先訓練的模型，可作為下游任務的起點。",
            "key_goal": "獲取通用語言知識",
            "key_principle": "大規模無監督學習",
            "key_purpose": "縮短特定 AI 應用的開發時間。",
            "common_apps": "GPT、BERT 系列模型的初始狀態。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 GPT、BERT 系列模型的初始狀態。 下，傳統方案難以處理變數過多的情境，而 預訓練語言模型 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "模型架構",
        "topics": [
          {
            "id": "365",
            "subject": "中科三",
            "category": "模型架構",
            "principle": "-",
            "title": "混合嵌入層",
            "eng_name": "Token + Position + Segment Embeddings",
            "eng_abbr": "-",
            "def": "BERT 的輸入由字詞向量(Token)、位置向量(Position)與句子區隔向量(Segment)三者相加而成。",
            "key_goal": "完整表徵輸入資訊",
            "key_principle": "向量加法融合",
            "key_purpose": "讓模型同時理解語義、順序與句子關係。",
            "common_apps": "BERT 處理兩句對話時，靠 Segment 區分哪句是 A 哪句是 B。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 BERT 處理兩句對話時，靠 Segment 區分哪句是 A 哪句是 B。 下，傳統方案難以處理變數過多的情境，而 混合嵌入層 則能透過多維數據提取深層規律。"
          },
          {
            "id": "390",
            "subject": "中科三",
            "category": "模型架構",
            "principle": "-",
            "title": "稠密僅解碼變換器",
            "eng_name": "Dense Decoder-only Transformer",
            "eng_abbr": "-",
            "def": "模型每一層的參數在計算時都會被激活（非稀疏），且僅包含 Decoder 組件，適合自回歸生成。",
            "key_goal": "優化生成式任務",
            "key_principle": "全參數連接解碼架構",
            "key_purpose": "構建如 GPT、PaLM 等生成式模型。",
            "common_apps": "文本續寫、詩歌創作與對話生成。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 文本續寫、詩歌創作與對話生成。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "405",
            "subject": "中科三",
            "category": "模型架構",
            "principle": "-",
            "title": "BERT 嵌入",
            "eng_name": "BERT Embeddings",
            "eng_abbr": "-",
            "def": "從 BERT 模型中提取的向量，包含了豐富的雙向上下文資訊。",
            "key_goal": "捕捉深層語意特徵",
            "key_principle": "Transformer 隱層輸出",
            "key_purpose": "進行下游任務（如分類、NER）的特徵輸入。",
            "common_apps": "利用 BERT 向量計算兩個句子的語意相似度。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 利用 BERT 向量計算兩個句子的語意相似度。 下，傳統方案難以處理變數過多的情境，而 BERT 嵌入 則能透過多維數據提取深層規律。"
          },
          {
            "id": "434",
            "subject": "中科三",
            "category": "模型架構",
            "principle": "-",
            "title": "因果遮蔽",
            "eng_name": "Causal Masking",
            "eng_abbr": "-",
            "def": "在解碼器中，遮蔽未來 Token，確保模型預測時只能看過去的內容。",
            "key_goal": "防止資訊洩露",
            "key_principle": "下三角矩陣遮蔽",
            "key_purpose": "訓練生成式語言模型。",
            "common_apps": "確保 GPT 生成時不會「偷看」答案。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 確保 GPT 生成時不會「偷看」答案。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "442",
            "subject": "中科三",
            "category": "模型架構",
            "principle": "永續發展與福祉",
            "title": "台灣專家混合模型",
            "eng_name": "TAiwan Mixture of Experts",
            "eng_abbr": "TMoe",
            "def": "國科會推動之架構。將模型拆解為多個專家 (Experts)，每次推論僅啟動部分參數。",
            "key_goal": "降低算力門檻",
            "key_principle": "稀疏門控專家架構",
            "key_purpose": "實現高效且低成本的推論。",
            "common_apps": "處理醫療與法律等多元專家任務。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 處理醫療與法律等多元專家任務。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數值優化",
        "topics": [
          {
            "id": "374",
            "subject": "中科三",
            "category": "數值優化",
            "principle": "-",
            "title": "維特比演算法",
            "eng_name": "Viterbi Algorithm",
            "eng_abbr": "-",
            "def": "在 HMM 中尋找最可能的隱藏狀態序列（路徑）的高效演算法。",
            "key_goal": "尋找最可能路徑",
            "key_principle": "動態規劃 (Dynamic Programming)",
            "key_purpose": "解碼序列標註結果。",
            "common_apps": "將語音波形轉換為對應的最機率文字序列。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將語音波形轉換為對應的最機率文字序列。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "380",
            "subject": "中科三",
            "category": "數值優化",
            "principle": "-",
            "title": "全域最佳解",
            "eng_name": "Global Optimum",
            "eng_abbr": "-",
            "def": "在整個定義域內使目標函數達到最小（或最大）的值。",
            "key_goal": "尋找系統最優點",
            "key_principle": "成本函數的絕對最小值",
            "key_purpose": "確保模型訓練達到完美收斂。",
            "common_apps": "尋找一組神經網路權重，使整體誤差達到最低。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 尋找一組神經網路權重，使整體誤差達到最低。 下，傳統方案難以處理變數過多的情境，而 全域最佳解 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "模型能力",
        "topics": [
          {
            "id": "394",
            "subject": "中科三",
            "category": "模型能力",
            "principle": "永續發展與福祉",
            "title": "推理與編碼熟練度",
            "eng_name": "Reasoning & Coding Proficiency",
            "eng_abbr": "-",
            "def": "衡量模型在解決邏輯悖論與撰寫、除錯程式碼方面的綜合能力水準。",
            "key_goal": "衡量模型智力指標",
            "key_principle": "邏輯架構與語法理解",
            "key_purpose": "評估模型是否具備解決高難度任務的潛力。",
            "common_apps": "在編程競賽中測試 AI 生成演算法的能力。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在編程競賽中測試 AI 生成演算法的能力。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "NLP 理論",
        "topics": [
          {
            "id": "402",
            "subject": "中科三",
            "category": "NLP 理論",
            "principle": "-",
            "title": "分佈假說",
            "eng_name": "Distributional Hypothesis",
            "eng_abbr": "-",
            "def": "語言學核心理念：出現在相似上下文中的詞，其語意也相近（\"語境決定語意\"）。",
            "key_goal": "語意計算的基礎",
            "key_principle": "靠鄰居定義含義",
            "key_purpose": "支撐 Word2Vec 等向量技術。",
            "common_apps": "因為「漢堡」和「披薩」都出現在「吃」後面，所以它們向量相近。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 因為「漢堡」和「披薩」都出現在「吃」後面，所以它們向量相近。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "420",
            "subject": "中科三",
            "category": "NLP 理論",
            "principle": "-",
            "title": "分散式表徵",
            "eng_name": "Distributed Representation",
            "eng_abbr": "-",
            "def": "將資訊分散到向量的多個維度中，每個維度代表部分特徵（如 [0.1, -0.2...]）。",
            "key_goal": "捕捉細粒度語意",
            "key_principle": "稠密向量映射",
            "key_purpose": "實現語意運算與降維。",
            "common_apps": "詞嵌入 (Word Embeddings) 的核心邏輯。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 詞嵌入 (Word Embeddings) 的核心邏輯。 下，傳統方案難以處理變數過多的情境，而 分散式表徵 則能透過多維數據提取深層規律。"
          },
          {
            "id": "421",
            "subject": "中科三",
            "category": "NLP 理論",
            "principle": "-",
            "title": "非分散式表徵",
            "eng_name": "Non-distributed Representation",
            "eng_abbr": "-",
            "def": "每個維度代表一個獨立的、互斥的類別，向量中只有一個 1 其餘為 0。",
            "key_goal": "離散化分類",
            "key_principle": "獨熱編碼 (One-hot)",
            "key_purpose": "簡單分類任務的前處理。",
            "common_apps": "將「紅、藍、綠」編碼為 [1,0,0]、[0,1,0]、[0,0,1]。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將「紅、藍、綠」編碼為 [1,0,0]、[0,1,0]、[0,0,1]。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "429",
            "subject": "中科三",
            "category": "NLP 理論",
            "principle": "-",
            "title": "線性關係特性",
            "eng_name": "Linear Relational Property",
            "eng_abbr": "-",
            "def": "詞向量中存在如「King - Man + Woman = Queen」的線性邏輯關係。",
            "key_goal": "實現語意代數運算",
            "key_principle": "向量方向性與平移",
            "key_purpose": "語意推理與關係發現。",
            "common_apps": "發現模型能理解類比關係。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 發現模型能理解類比關係。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "知名技術",
        "topics": [
          {
            "id": "403",
            "subject": "中科三",
            "category": "知名技術",
            "principle": "-",
            "title": "-",
            "eng_name": "Word2Vec",
            "eng_abbr": "-",
            "def": "Google 提出的技術，透過預測上下文來訓練詞向量，能捕捉到如「國王-男人=女王-女人」的關係。",
            "key_goal": "學習靜態詞向量",
            "key_principle": "淺層神經網路預測",
            "key_purpose": "早期 NLP 的基礎組件。",
            "common_apps": "尋找與「咖啡」語意最接近的詞（如「拿鐵」）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 尋找與「咖啡」語意最接近的詞（如「拿鐵」）。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          },
          {
            "id": "410",
            "subject": "中科三",
            "category": "知名技術",
            "principle": "-",
            "title": "全局向量",
            "eng_name": "Global Vectors for Word Representation",
            "eng_abbr": "GloVe",
            "def": "結合全局詞彙共現統計與局部上下文窗口優點的詞向量技術。",
            "key_goal": "融合全局統計資訊",
            "key_principle": "共現矩陣分解",
            "key_purpose": "預訓練詞向量庫。",
            "common_apps": "捕捉詞彙間的線性子空間結構關係。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 捕捉詞彙間的線性子空間結構關係。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "411",
            "subject": "中科三",
            "category": "知名技術",
            "principle": "-",
            "title": "-",
            "eng_name": "FastText",
            "eng_abbr": "-",
            "def": "Meta 提出的技術，將單字拆解為子字串訓練，能有效處理拼錯字或新詞。",
            "key_goal": "處理未登錄詞 (OOV)",
            "key_principle": "字元級 N-gram (Subword)",
            "key_purpose": "社交媒體文本處理。",
            "common_apps": "即使模型沒看過 \"superintelligent\"，也能根據 \"super\" 和 \"intelligent\" 推導。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 即使模型沒看過 \"superintelligent\"，也能根據 \"super\" 和 \"intelligent\" 推導。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          },
          {
            "id": "412",
            "subject": "中科三",
            "category": "知名技術",
            "principle": "-",
            "title": "來自語言模型的嵌入",
            "eng_name": "Embeddings from Language Models",
            "eng_abbr": "ELMo",
            "def": "首次大規模應用的動態向量技術，利用雙向 LSTM 提取上下文資訊。",
            "key_goal": "實現動態詞向量",
            "key_principle": "雙向 LSTM 隱層組合",
            "key_purpose": "解決 NLP 任務中的多義詞問題。",
            "common_apps": "2018 年前最先進的語意表徵技術。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 2018 年前最先進的語意表徵技術。 下，傳統方案難以處理變數過多的情境，而 來自語言模型的嵌入 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "訓練模式",
        "topics": [
          {
            "id": "407",
            "subject": "中科三",
            "category": "訓練模式",
            "principle": "-",
            "title": "跳字模型",
            "eng_name": "Skip-gram",
            "eng_abbr": "-",
            "def": "Word2Vec 的一種方法，給定一個單字，讓模型猜測其前後可能出現的詞。",
            "key_goal": "學習詞向量",
            "key_principle": "用中心詞預測周圍詞",
            "key_purpose": "在稀有詞處理上表現較佳。",
            "common_apps": "看到「台灣」預測出「台北」、「珍珠奶茶」。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 看到「台灣」預測出「台北」、「珍珠奶茶」。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "435",
            "subject": "中科三",
            "category": "訓練模式",
            "principle": "永續發展與福祉",
            "title": "預訓練與微調",
            "eng_name": "Pre-training & Fine-tuning",
            "eng_abbr": "-",
            "def": "先在大數據上學通用知識，再在小規模特定數據上調整以執行特定任務。",
            "key_goal": "遷移通用知識至領域",
            "key_principle": "兩階段學習架構",
            "key_purpose": "降低特定任務開發門檻。",
            "common_apps": "拿 GPT 預訓練模型微調成法律合約分析工具。",
            "scenarios": {
              "weather": "氣象預報：多站氣象數據關聯建模；長序列氣溫趨勢預測",
              "agri": "農業報告語意摘要；農業政策法規文件自動解析",
              "traffic": "智慧物流：運輸訂單文字意圖理解；交通事故報告自動分析",
              "industry": "製程優化：製造設備日誌語意分析；異常描述文字分類",
              "finance": "金融科技：金融報告語意理解；智慧醫療：病歷/診斷報告文字摘要",
              "life": "智能客服：用戶意圖理解；個人化推薦：評論語意分析",
              "fire": "公共安全：社群媒體災情文字解析；緊急求救訊號意圖識別"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 拿 GPT 預訓練模型微調成法律合約分析工具。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "436",
            "subject": "中科三",
            "category": "訓練模式",
            "principle": "-",
            "title": "下一個標記預測",
            "eng_name": "Next Token Prediction",
            "eng_abbr": "-",
            "def": "語言模型最核心的訓練任務：給定前文，預測下一個出現機率最高的詞。",
            "key_goal": "學習語言生成",
            "key_principle": "機率分佈最大化",
            "key_purpose": "模型智能湧現的基礎。",
            "common_apps": "AI 看到「九層塔」預測下一個詞是「炒蛋」。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 AI 看到「九層塔」預測下一個詞是「炒蛋」。 下，傳統方案難以處理變數過多的情境，而 下一個標記預測 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "數據結構",
        "topics": [
          {
            "id": "413",
            "subject": "中科三",
            "category": "數據結構",
            "principle": "-",
            "title": "稀疏向量",
            "eng_name": "Sparse Vector",
            "eng_abbr": "-",
            "def": "維度極高（如詞典大小），但大部分位置都是零的向量（如 One-hot, TF-IDF）。",
            "key_goal": "節省非零項存儲",
            "key_principle": "大部分元素為零",
            "key_purpose": "傳統的信息檢索系統。",
            "common_apps": "在 5 萬維的向量中只有 3 個位置有值。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在 5 萬維的向量中只有 3 個位置有值。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "414",
            "subject": "中科三",
            "category": "數據結構",
            "principle": "-",
            "title": "稠密向量",
            "eng_name": "Dense Vector",
            "eng_abbr": "-",
            "def": "維度較低（通常 128-1024），每個位置都有實數值的向量（如 Word2Vec, BERT）。",
            "key_goal": "高效表達語意",
            "key_principle": "實數值填充的低維向量",
            "key_purpose": "深度學習模型輸入與向量資料庫。",
            "common_apps": "將語意壓縮到一個 512 維的小空間中進行運算。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將語意壓縮到一個 512 維的小空間中進行運算。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "NLP 挑戰",
        "topics": [
          {
            "id": "415",
            "subject": "中科三",
            "category": "NLP 挑戰",
            "principle": "-",
            "title": "未登錄詞",
            "eng_name": "Out-of-Vocabulary",
            "eng_abbr": "OOV",
            "def": "模型訓練時未見過的單字，會導致模型無法理解該詞義。",
            "key_goal": "解決字典外單字問題",
            "key_principle": "子字拆解或平滑化",
            "key_purpose": "評估模型泛化能力。",
            "common_apps": "使用者輸入最新的網路流行語，模型顯示為 <UNK>。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 使用者輸入最新的網路流行語，模型顯示為 <UNK>。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "統計分析",
        "topics": [
          {
            "id": "423",
            "subject": "中科三",
            "category": "統計分析",
            "principle": "-",
            "title": "詞頻",
            "eng_name": "Term Frequency",
            "eng_abbr": "TF",
            "def": "指特定單字在單份文件中出現的頻率。",
            "key_goal": "衡量局部詞彙重要性",
            "key_principle": "計數與歸一化",
            "key_purpose": "特徵工程與關鍵詞提取。",
            "common_apps": "某單字在文章中出現 10 次，代表其在該文具代表性。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 某單字在文章中出現 10 次，代表其在該文具代表性。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "424",
            "subject": "中科三",
            "category": "統計分析",
            "principle": "-",
            "title": "逆文件頻率",
            "eng_name": "Inverse Document Frequency",
            "eng_abbr": "IDF",
            "def": "總文件數除以包含該詞的文件數，取對數。代表該詞的「資訊價值」。",
            "key_goal": "衡量全局詞彙稀有度",
            "key_principle": "對數運算",
            "key_purpose": "過濾通用詞，保留關鍵詞。",
            "common_apps": "「的」在所有文章都有，故 IDF 值極低。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 「的」在所有文章都有，故 IDF 值極低。 下，傳統方案難以處理變數過多的情境，而 逆文件頻率 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "數學優化",
        "topics": [
          {
            "id": "427",
            "subject": "中科三",
            "category": "數學優化",
            "principle": "-",
            "title": "對數縮放",
            "eng_name": "Logarithmic Scaling",
            "eng_abbr": "-",
            "def": "將線性成長的數值透過 Log 轉換，縮小極端值差異。",
            "key_goal": "壓縮數值動態範圍",
            "key_principle": "Log 函數轉換",
            "key_purpose": "處理詞頻分佈不均。",
            "common_apps": "在 TF-IDF 或音訊處理中平滑數據分佈。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在 TF-IDF 或音訊處理中平滑數據分佈。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "運作機制",
        "topics": [
          {
            "id": "443",
            "subject": "中科三",
            "category": "運作機制",
            "principle": "透明與可解釋",
            "title": "門控網路",
            "eng_name": "Gating Network",
            "eng_abbr": "-",
            "def": "TMoe 或 MoE 架構中的核心組件，決定輸入問題該交由哪些「專家」模型來回答。",
            "key_goal": "任務分配調度",
            "key_principle": "機率分流權重計算",
            "key_purpose": "優化推論路徑。",
            "common_apps": "偵測到問題是「醫療類」時，自動分發給醫療專家模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 偵測到問題是「醫療類」時，自動分發給醫療專家模型。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "444",
            "subject": "中科三",
            "category": "運作機制",
            "principle": "永續發展與福祉",
            "title": "稀疏啟用",
            "eng_name": "Sparse Activation",
            "eng_abbr": "-",
            "def": "在大型模型中，每次處理任務僅運算 5%-10% 參數的技術，與 Dense 模型相反。",
            "key_goal": "節省計算資源",
            "key_principle": "局部參數激活",
            "key_purpose": "降低超大型模型部署成本。",
            "common_apps": "在普通伺服器上也能運行具備萬億參數邏輯的模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在普通伺服器上也能運行具備萬億參數邏輯的模型。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "深度學習原理",
        "topics": [
          {
            "id": "454",
            "subject": "中科三",
            "category": "深度學習原理",
            "principle": "永續發展與福祉",
            "title": "分層語言模型",
            "eng_name": "Hierarchical Language Model",
            "eng_abbr": "HLM",
            "def": "將文本分解為不同層級的抽象表示，以捕捉宏觀與微觀語義。",
            "key_goal": "處理長文本的結構依賴",
            "key_principle": "透過多層級（如字、詞、句、段落）的結構化表徵進行建模。",
            "key_purpose": "一種具備層次化處理能力的語言模型架構 。",
            "common_apps": "提升長篇文檔（如法律契約、長篇小說）的摘要準確性與邏輯性。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 提升長篇文檔（如法律契約、長篇小說）的摘要準確性與邏輯性。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "演算法偏見",
        "topics": [
          {
            "id": "465",
            "subject": "中科三",
            "category": "演算法偏見",
            "principle": "公平性",
            "title": "資料偏見",
            "eng_name": "Data Bias",
            "eng_abbr": "-",
            "def": "指訓練模型所使用的資料集中，特定群體被過度或不足代表的情形 。",
            "key_goal": "識別並消除源頭歧視",
            "key_principle": "訓練數據未能真實反映現實世界，或包含社會刻板印象。",
            "key_purpose": "避免模型學習到不公正的規律，造成輸出不平等。",
            "common_apps": "貸款審核模型因歷史數據偏見，對特定區域族群給予較低評分。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 貸款審核模型因歷史數據偏見，對特定區域族群給予較低評分。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "機器學習治理",
        "topics": [
          {
            "id": "467",
            "subject": "中科三",
            "category": "機器學習治理",
            "principle": "公平性",
            "title": "詞嵌入關聯測試",
            "eng_name": "Word Embedding Association Test",
            "eng_abbr": "WEAT",
            "def": "一種衡量文本表示模型是否包含人類偏見（如性別偏見）的指標 。",
            "key_goal": "量化語言模型偏見",
            "key_principle": "計算詞向量空間中，特定概念與屬性詞之間的距離。",
            "key_purpose": "作為 AI 倫理審核的量化工具，確保模型符合公平性原則。",
            "common_apps": "偵測模型是否將「工程師」與「男性」連結強度顯著高於「女性」。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 偵測模型是否將「工程師」與「男性」連結強度顯著高於「女性」。 下，傳統方案難以處理變數過多的情境，而 詞嵌入關聯測試 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "評估指標",
        "topics": [
          {
            "id": "552",
            "subject": "中科三",
            "category": "評估指標",
            "principle": "問責性",
            "title": "交併比",
            "eng_name": "Intersection over Union",
            "eng_abbr": "IoU",
            "def": "計算「預測框」與「真實框」重疊面積除以聯集面積。",
            "key_goal": "衡量檢測準確性",
            "key_principle": "預測與真實面積比",
            "key_purpose": "判斷物體偵測模型是否抓準目標。",
            "common_apps": "自駕車避障系統的誤差分析。",
            "scenarios": {
              "weather": "氣象預報：自駕系統結合即時路面積水/能見度警示",
              "agri": "智慧耕作：農場自駕拖拉機自動施肥/犁田",
              "traffic": "自駕與輔助：自駕公車測試、ADAS駕駛輔助、疲勞駕駛偵測（核心場景）",
              "industry": "製程優化：工廠內自駕AGV物料搬運",
              "finance": "半導體：自駕晶片研發驗證場景",
              "life": "智慧生活：配送無人車/電動輪椅自駕輔助",
              "fire": "智慧消防：救災自駕機器人進入火場偵測"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 自駕車避障系統的誤差分析。 下，傳統方案難以處理變數過多的情境，而 交併比 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "幾何運算",
        "topics": [
          {
            "id": "554",
            "subject": "中科三",
            "category": "幾何運算",
            "principle": "透明可解釋",
            "title": "交集",
            "eng_name": "Intersection",
            "eng_abbr": "-",
            "def": "指預測區域與真實區域重疊的部分。",
            "key_goal": "計算重疊區域",
            "key_principle": "邏輯與運算 (AND)",
            "key_purpose": "作為計算 IoU 的分子。",
            "common_apps": "碰撞偵測演算法。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 碰撞偵測演算法。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "555",
            "subject": "中科三",
            "category": "幾何運算",
            "principle": "透明可解釋",
            "title": "聯集",
            "eng_name": "Union",
            "eng_abbr": "-",
            "def": "指預測區域與真實區域合併後的總範圍。",
            "key_goal": "計算總涵蓋區域",
            "key_principle": "邏輯或運算 (OR)",
            "key_purpose": "作為計算 IoU 的分母。",
            "common_apps": "計算空間覆蓋率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 計算空間覆蓋率。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型效能",
        "topics": [
          {
            "id": "582",
            "subject": "中科三",
            "category": "模型效能",
            "principle": "永續發展",
            "title": "泛化能力",
            "eng_name": "Generalization",
            "eng_abbr": "-",
            "def": "模型對未見過的測試數據做出正確預測的能力。",
            "key_goal": "應對未知數據",
            "key_principle": "降低過擬合風險",
            "key_purpose": "衡量模型在實際應用中的穩定性。",
            "common_apps": "訓練好的模型在不同工廠的適用度。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 訓練好的模型在不同工廠的適用度。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數據前處理",
        "topics": [
          {
            "id": "583",
            "subject": "中科三",
            "category": "數據前處理",
            "principle": "透明可解釋",
            "title": "雜訊添加",
            "eng_name": "Noise Addition",
            "eng_abbr": "-",
            "def": "在訓練數據中主動加入高斯雜訊或其他擾動。",
            "key_goal": "增強模型魯棒性",
            "key_principle": "隨機擾動導入",
            "key_purpose": "防止模型對特定畫質過擬合。",
            "common_apps": "模擬監視器畫質不良時的辨識能力。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 模擬監視器畫質不良時的辨識能力。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "常見演算法",
        "topics": [
          {
            "id": "593",
            "subject": "中科三",
            "category": "常見演算法",
            "principle": "可解釋性",
            "title": "邏輯迴歸",
            "eng_name": "Logistic regression",
            "eng_abbr": "-",
            "def": "處理分類問題的統計模型，常用於線性可分的二元分類任務 。",
            "key_goal": "預測事件發生的機率（二元分類）",
            "key_principle": "使用 Sigmoid 函數將線性組合映射至 0 與 1 之間，代表發生概率 。",
            "key_purpose": "點擊率預測、患病風險評估、客戶流失分析 。",
            "common_apps": "智慧醫療評估心臟病發作風險\n\n廣告系統預測點擊可能性",
            "scenarios": {
              "weather": "氣象預報：預測降雨機率（下雨/不下雨二元分類）",
              "agri": "智慧耕作：預測作物是否感染病害的機率",
              "traffic": "交通管理：預測道路是否發生事故的機率",
              "industry": "品質檢測：預測產品合格/不合格的機率",
              "finance": "智慧醫療：評估心臟病發作風險機率",
              "life": "智慧零售：預測顧客是否會流失的機率",
              "fire": "公共安全：預測特定區域犯罪發生機率"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在評估心臟病發作風險、金融貸款違約機率預測下，傳統方案難以處理變數過多的情境，而邏輯迴歸則能透過多維數據提取深層規律。"
          }
        ]
      }
    ]
  },
  {
    "title": "初科一  中科二",
    "sub_units": [
      {
        "title": "資料隱私",
        "topics": [
          {
            "id": "23",
            "subject": "初科一  中科二",
            "category": "資料隱私",
            "principle": "隱私保護",
            "title": "個人識別資訊",
            "eng_name": "Personally Identifiable Information",
            "eng_abbr": "PII",
            "def": "任何可單獨或結合其他資訊識別出特定個人的資料 。",
            "key_goal": "個資保護",
            "key_principle": "直接/間接識別特徵",
            "key_purpose": "隱私合規管理",
            "common_apps": "電子郵件、身分證字號管理 。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 電子郵件、身分證字號管理 。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "資料處理",
        "topics": [
          {
            "id": "24",
            "subject": "初科一  中科二",
            "category": "資料處理",
            "principle": "隱私保護",
            "title": "去識別化",
            "eng_name": "De-identification",
            "eng_abbr": "-",
            "def": "移除或隱蔽 PII 使資料難以與特定個人關聯的過程 。",
            "key_goal": "降低識別風險",
            "key_principle": "資料轉換處理",
            "key_purpose": "安全資料分享",
            "common_apps": "醫療大數據分析前的預處理。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫療大數據分析前的預處理。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "25",
            "subject": "初科一  中科二",
            "category": "資料處理",
            "principle": "隱私保護",
            "title": "匿名化",
            "eng_name": "Anonymization",
            "eng_abbr": "-",
            "def": "將資料處理至無法還原回個體且不可逆的程度 。",
            "key_goal": "永久移除關聯",
            "key_principle": "不可逆資料處理",
            "key_purpose": "法律豁免與研究",
            "common_apps": "公開資料集發布。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 公開資料集發布。 下，傳統方案難以處理變數過多的情境，而 匿名化 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "大數據",
        "topics": [
          {
            "id": "31",
            "subject": "初科一  中科二",
            "category": "大數據",
            "principle": "永續發展與福祉",
            "title": "大數據",
            "eng_name": "Big Data",
            "eng_abbr": "-",
            "def": "規模龐大且多元，難以用傳統資料庫工具處理的資料集 。",
            "key_goal": "萃取數據價值",
            "key_principle": "4V/5V 特性",
            "key_purpose": "洞察趨勢與預測",
            "common_apps": "電商推薦系統、交通流量分析。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 電商推薦系統、交通流量分析。 下，傳統方案難以處理變數過多的情境，而 大數據 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "資料工程",
        "topics": [
          {
            "id": "34",
            "subject": "初科一  中科二",
            "category": "資料工程",
            "principle": "透明與可解釋",
            "title": "探索性資料分析",
            "eng_name": "Exploratory Data Analysis",
            "eng_abbr": "EDA",
            "def": "在建模前透過視覺化與統計方法了解數據分佈與模式的過程 。",
            "key_goal": "理解數據結構",
            "key_principle": "統計摘要與視覺化",
            "key_purpose": "發現潛在特徵與異常值",
            "common_apps": "繪製散佈圖找出特徵間的相關性。",
            "scenarios": {
              "weather": "環境監控：水庫水位/PM2.5感測值異常即時告警；地震前兆異常偵測",
              "agri": "精準養殖：魚塭水質pH/溶氧異常立即警報；畜牧：體溫異常偵測",
              "traffic": "智慧交通：交通事故現場流量異常識別；物流：配送軌跡異常告警",
              "industry": "預測性維護：機台振動/電流異常早期告警；品質：製程數據異常即時停線",
              "finance": "金融科技：信用卡盜刷異常交易即時攔截；智慧醫療：生命徵象異常告警",
              "life": "智慧零售：庫存異常銷售模式偵測（搶購/假退貨）",
              "fire": "智慧消防：感測溫度/煙霧異常即時觸發告警；公共安全：人流密度異常偵測"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 繪製散佈圖找出特徵間的相關性。 下，傳統方案難以處理變數過多的情境，而 探索性資料分析 則能透過多維數據提取深層規律。"
          },
          {
            "id": "36",
            "subject": "初科一  中科二",
            "category": "資料工程",
            "principle": "安全性",
            "title": "資料清洗",
            "eng_name": "Data Cleaning",
            "eng_abbr": "-",
            "def": "修正或刪除資料集中錯誤、重複、格式不一或異常數據的過程。",
            "key_goal": "提升資料品質",
            "key_principle": "異常值/雜訊處理",
            "key_purpose": "降低 Garbage In 影響",
            "common_apps": "統一地址格式、刪除重複會員資料。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 統一地址格式、刪除重複會員資料。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      }
    ]
  },
  {
    "title": "中科二  中科三",
    "sub_units": [
      {
        "title": "隱私技術",
        "topics": [
          {
            "id": "26",
            "subject": "中科二  中科三",
            "category": "隱私技術",
            "principle": "隱私保護",
            "title": "差分隱私",
            "eng_name": "Differential Privacy",
            "eng_abbr": "DP",
            "def": "透過在查詢結果中加入雜訊，確保個別數據無法被反推出的技術。",
            "key_goal": "數學保障隱私",
            "key_principle": "加入隨機雜訊",
            "key_purpose": "大規模數據統計分析",
            "common_apps": "人口普查數據統計。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 人口普查數據統計。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "敘述性統計\n\n特徵工程",
        "topics": [
          {
            "id": "100",
            "subject": "中科二  中科三",
            "category": "敘述性統計\n\n特徵工程",
            "principle": "透明與可解釋",
            "title": "相關係數",
            "eng_name": "Correlation Coefficient",
            "eng_abbr": "-",
            "def": "用於衡量兩個隨機變數之間線性相關程度的統計指標（最常用者為皮爾森相關係數）。",
            "key_goal": "量化變數間的線性關係強度",
            "key_principle": "透過計算兩變數間的共變異數與標準差積之比值，將結果標準化於 -1 到 1 之間。",
            "key_purpose": "1. 識別數據趨勢。\n\n2. 排除冗餘特徵（解決共線性問題）。\n\n3. 評估模型預測力。",
            "common_apps": "在製造業中，分析「機台溫度」與「產品不良率」的關聯性，以決定預測模型的關鍵輸入因子。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 在製造業中，分析「機台溫度」與「產品不良率」的關聯性，以決定預測模型的關鍵輸入因子。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數學基礎",
        "topics": [
          {
            "id": "211",
            "subject": "中科二  中科三",
            "category": "數學基礎",
            "principle": "透明與可解釋",
            "title": "常態分佈",
            "eng_name": "Normal Distribution",
            "eng_abbr": "-",
            "def": "大多數隨機變數趨向的分佈模式（均值為中心，左右對稱）。",
            "key_goal": "描述自然數據規律",
            "key_principle": "鐘形曲線",
            "key_purpose": "資料標準化參考",
            "common_apps": "判定數據是否為異常值。",
            "scenarios": {
              "weather": "環境監控：水庫水位/PM2.5感測值異常即時告警；地震前兆異常偵測",
              "agri": "精準養殖：魚塭水質pH/溶氧異常立即警報；畜牧：體溫異常偵測",
              "traffic": "智慧交通：交通事故現場流量異常識別；物流：配送軌跡異常告警",
              "industry": "預測性維護：機台振動/電流異常早期告警；品質：製程數據異常即時停線",
              "finance": "金融科技：信用卡盜刷異常交易即時攔截；智慧醫療：生命徵象異常告警",
              "life": "智慧零售：庫存異常銷售模式偵測（搶購/假退貨）",
              "fire": "智慧消防：感測溫度/煙霧異常即時觸發告警；公共安全：人流密度異常偵測"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 判定數據是否為異常值。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "212",
            "subject": "中科二  中科三",
            "category": "數學基礎",
            "principle": "-",
            "title": "歐幾里得距離",
            "eng_name": "Euclidean Distance",
            "eng_abbr": "-",
            "def": "兩點間最短直線距離，常用於衡量數據間的相似度。",
            "key_goal": "衡量物理距離",
            "key_principle": "直線距離公式",
            "key_purpose": "相似度比對",
            "common_apps": "找出最鄰近的分類對象 (KNN)。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 找出最鄰近的分類對象 (KNN)。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "大數據隱私保護\n\n機器學習治理",
        "topics": [
          {
            "id": "462",
            "subject": "中科二  中科三",
            "category": "大數據隱私保護\n\n機器學習治理",
            "principle": "隱私保護",
            "title": "假名化",
            "eng_name": "Pseudonymization",
            "eng_abbr": "-",
            "def": "一種去識別化技術，使資料無法在不使用額外資訊下指向特定人 。",
            "key_goal": "保護資料主體識別性",
            "key_principle": "以人工識別碼替換敏感欄位（如姓名），且保留還原可能性。",
            "key_purpose": "在符合合規要求的前提下，允許進行跨部門數據研究。",
            "common_apps": "醫療大數據研究中，以隨機 ID 取代病患身分證字號。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 醫療大數據研究中，以隨機 ID 取代病患身分證字號。 下，傳統方案難以處理變數過多的情境，而 假名化 則能透過多維數據提取深層規律。"
          },
          {
            "id": "463",
            "subject": "中科二  中科三",
            "category": "大數據隱私保護\n\n機器學習治理",
            "principle": "隱私保護",
            "title": "資料泛化",
            "eng_name": "Data Generalization",
            "eng_abbr": "-",
            "def": "隱私保護核心技術，透過降低資料粒度來減少識別風險 。",
            "key_goal": "降低數據精確度",
            "key_principle": "將具體數值轉化為範圍區間（如年齡改為年齡層）。",
            "key_purpose": "達成 K-anonymity (K-匿名性)，防止個體身分洩露。",
            "common_apps": "公布薪資統計時，僅顯示「5-7萬」區間而非精確金額。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 公布薪資統計時，僅顯示「5-7萬」區間而非精確金額。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "464",
            "subject": "中科二  中科三",
            "category": "大數據隱私保護\n\n機器學習治理",
            "principle": "隱私保護",
            "title": "遮蔽",
            "eng_name": "Masking",
            "eng_abbr": "-",
            "def": "透過特定規則隱藏敏感數據，確保非授權者無法讀取 。",
            "key_goal": "阻斷敏感資訊顯示",
            "key_principle": "將資料的部分內容以符號（如 *）取代。",
            "key_purpose": "確保展示介面（UI）符合個資保護原則。",
            "common_apps": "客服系統顯示會員手機號碼為「0912***456」。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 客服系統顯示會員手機號碼為「0912***456」。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "470",
            "subject": "中科二  中科三",
            "category": "大數據隱私保護\n\n機器學習治理",
            "principle": "隱私保護\n\n安全穩定",
            "title": "隨機化",
            "eng_name": "Randomization",
            "eng_abbr": "-",
            "def": "一種隱私保護技術，透過改變數據的確切數值，使攻擊者無法回推特定個體的真實資訊。",
            "key_goal": "消除數據關聯性與干擾攻擊",
            "key_principle": "在原始數據中加入隨機噪聲（Noise）或進行隨機置換（Permutation）。",
            "key_purpose": "用於實現差分隱私（Differential Privacy），平衡數據可用性與隱私。",
            "common_apps": "在收集使用者瀏覽習慣時，隨機修改部分選項，確保廠商無法確知單一使用者的特定偏好。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在收集使用者瀏覽習慣時，隨機修改部分選項，確保廠商無法確知單一使用者的特定偏好。 下，傳統方案難以處理變數過多的情境，而 隨機化 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "分散式計算\n\n聯邦學習架構",
        "topics": [
          {
            "id": "471",
            "subject": "中科二  中科三",
            "category": "分散式計算\n\n聯邦學習架構",
            "principle": "隱私保護\n\n永續發展與福祉",
            "title": "聚合",
            "eng_name": "Aggregation",
            "eng_abbr": "-",
            "def": "將多個分散的數據點組合為單一彙整值的過程，使個體資訊消失在群體統計中。",
            "key_goal": "提取群體特徵並隱藏個體數據",
            "key_principle": "將來自多個來源的數據或模型參數進行統計彙整（如求和、平均）。",
            "key_purpose": "減少數據傳輸量，並在不移動原始資料的情況下進行全域模型更新。",
            "common_apps": "聯邦學習 (Federated Learning)：各醫院僅上傳模型參數，由中心伺服器「聚合」更新後的權重，保護病患個資。",
            "scenarios": {
              "weather": "環境監控：跨縣市空氣品質站數據聯合訓練（各站數據不離站）",
              "agri": "智慧耕作：跨農場病害模型協同訓練（農場資料不外傳）",
              "traffic": "自駕與輔助：跨車廠自駕數據聯合訓練（車輛感測資料隱私保護）",
              "industry": "品質檢測：跨廠區瑕疵模型協同訓練（各廠製程機密保護）",
              "finance": "金融科技：跨銀行聯合風控建模（客戶資料不離行）；智慧醫療：跨醫院疾病模型訓練",
              "life": "智慧零售：跨門市顧客行為聯合分析",
              "fire": "公共安全：跨地方政府監控數據聯合異常偵測（資料在地保存）"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 聯邦學習 (Federated Learning)：各醫院僅上傳模型參數，由中心伺服器「聚合」更新後的權重，保護病患個資。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型評估指標\n\n自然語言處理",
        "topics": [
          {
            "id": "621",
            "subject": "中科二  中科三",
            "category": "模型評估指標\n\n自然語言處理",
            "principle": "公平性",
            "title": "雙語評估替補",
            "eng_name": "Bilingual Evaluation Understudy",
            "eng_abbr": "BLEU",
            "def": "一種衡量文本翻譯品質的演算法，分數越高代表與人類翻譯結果越接近。",
            "key_goal": "自動化衡量機器翻譯與人工翻譯的相似度。",
            "key_principle": "計算預測文本與參考文本之間的 n-gram 重疊比例，並加入長度懲罰項。",
            "key_purpose": "用於機器翻譯系統、摘要生成的效能基準測試。",
            "common_apps": "評估法翻中模型在處理外交公文時的翻譯準確度。",
            "scenarios": {
              "weather": "災害監測：評估 AI 翻譯多語言災情報告的翻譯品質",
              "agri": "智慧耕作：評估 AI 翻譯農業技術文件的翻譯品質",
              "traffic": "交通管理：評估 AI 翻譯多語言交通標誌說明的品質",
              "industry": "製程優化：評估 AI 翻譯設備操作手冊的翻譯品質",
              "finance": "智慧醫療：評估 AI 翻譯醫學文獻的翻譯品質",
              "life": "智慧生活：評估 AI 翻譯電商商品描述的翻譯品質",
              "fire": "公共安全：評估 AI 翻譯國際刑警通報的翻譯品質"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在機器翻譯品質評估等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型評估指標\n\n文本摘要",
        "topics": [
          {
            "id": "622",
            "subject": "中科二  中科三",
            "category": "模型評估指標\n\n文本摘要",
            "principle": "透明與可解釋",
            "title": "面向召回率的摘要評估",
            "eng_name": "Recall-Oriented Understudy for Gisting Evaluation",
            "eng_abbr": "ROUGE",
            "def": "一套用於評估自動摘要或機器翻譯品質的指標集，包含 ROUGE-N、ROUGE-L 等。",
            "key_goal": "衡量自動摘要系統保留關鍵資訊的能力。",
            "key_principle": "側重於召回率（Recall），計算參考摘要中的單詞有多少出現在自動摘要中。",
            "key_purpose": "確保 AI 生成的摘要確實涵蓋了原文中的核心重點。",
            "common_apps": "評估新聞自動摘要工具是否成功擷取了事件的時間、地點與人物。",
            "scenarios": {
              "weather": "災害監測：評估 AI 自動摘要災情報告保留關鍵資訊的程度",
              "agri": "智慧耕作：評估 AI 自動摘要農業研究報告的資訊保留度",
              "traffic": "交通管理：評估 AI 自動摘要交通事故報告的資訊保留度",
              "industry": "製程優化：評估 AI 自動摘要製程異常報告的資訊保留度",
              "finance": "智慧醫療：評估 AI 自動摘要病歷報告的資訊保留度",
              "life": "智慧零售：評估 AI 自動摘要客戶評論的資訊保留度",
              "fire": "公共安全：評估 AI 自動摘要案件偵查報告的資訊保留度"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在自動摘要品質評估等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "文本評估",
        "topics": [
          {
            "id": "623",
            "subject": "中科二  中科三",
            "category": "文本評估",
            "principle": "-",
            "title": "n-gram 召回率",
            "eng_name": "ROUGE-N",
            "eng_abbr": "-",
            "def": "ROUGE 指標中，針對特定連續 n 個單詞進行匹配的子項。",
            "key_goal": "評估固定長度詞組的重疊程度。",
            "key_principle": "基於 n-gram 的重疊統計，如 ROUGE-1（單詞）或 ROUGE-2（雙詞對）。",
            "key_purpose": "測量摘要與原文在細節描述上的精確一致性。",
            "common_apps": "在醫療病歷摘要評估中，確認專有名詞（n-gram）是否正確保留。",
            "scenarios": {
              "weather": "氣象預報：評估 AI 氣象摘要中固定長度詞組的重疊精準度",
              "agri": "智慧耕作：評估 AI 農業報告摘要的 n-gram 精準度",
              "traffic": "交通管理：評估 AI 交通報告摘要的 n-gram 精準度",
              "industry": "製程優化：評估 AI 品檢報告摘要的 n-gram 精準度",
              "finance": "智慧醫療：評估 AI 病歷摘要的 n-gram 精準度",
              "life": "智慧零售：評估 AI 商品評論摘要的 n-gram 精準度",
              "fire": "公共安全：評估 AI 安全報告摘要的 n-gram 精準度"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在文本評估精準度等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "624",
            "subject": "中科二  中科三",
            "category": "文本評估",
            "principle": "-",
            "title": "最長公共子序列召回率",
            "eng_name": "ROUGE-Longest Common Subsequence",
            "eng_abbr": "ROUGE-L",
            "def": "ROUGE 指標中，基於 LCS 演算法衡量句子結構相似度的子項。",
            "key_goal": "衡量文本的結構流暢性與詞序一致性。",
            "key_principle": "尋找預測文本與參考文本之間最長的共同子序列（不需連續但需順序一致）。",
            "key_purpose": "捕捉比 n-gram 更長距離的結構相似度，反映文本流暢性。",
            "common_apps": "評估 AI 寫作助手生成的草稿是否維持了與範本一致的邏輯順序。",
            "scenarios": {
              "weather": "氣象預報：衡量 AI 氣象摘要的結構流暢性與詞序一致性",
              "agri": "智慧耕作：衡量 AI 農業報告摘要的詞序一致性",
              "traffic": "交通管理：衡量 AI 交通報告摘要的結構流暢性",
              "industry": "製程優化：衡量 AI 品檢報告摘要的詞序一致性",
              "finance": "智慧醫療：衡量 AI 病歷摘要的結構流暢性與詞序準確度",
              "life": "智慧零售：衡量 AI 客戶評論摘要的結構流暢性",
              "fire": "公共安全：衡量 AI 案件報告摘要的結構流暢性"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在文本流暢性評估等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "625",
            "subject": "中科二  中科三",
            "category": "文本評估",
            "principle": "-",
            "title": "跳詞二元組召回率",
            "eng_name": "ROUGE-Skip-bigram Co-occurrence",
            "eng_abbr": "ROUGE-S",
            "def": "ROUGE 指標中，允許跳過任意詞對進行匹配的子項。",
            "key_goal": "捕捉非連續單詞之間的關聯性。",
            "key_principle": "允許在計算二元組（Bigram）時跳過中間單詞，增加評估的靈活性。",
            "key_purpose": "應對詞彙替換或略微變動語序的評估場景。",
            "common_apps": "評估創意寫作 AI 在改寫語句後，是否仍能保留原意。",
            "scenarios": {
              "weather": "氣象預報：捕捉 AI 氣象描述中非連續關鍵詞的語意關聯",
              "agri": "智慧耕作：捕捉 AI 農業報告中非連續術語的關聯性",
              "traffic": "交通管理：捕捉 AI 交通分析中非連續事件描述的關聯性",
              "industry": "製程優化：捕捉 AI 品檢報告中非連續參數的關聯性",
              "finance": "智慧醫療：捕捉 AI 病歷摘要中非連續症狀描述的關聯性",
              "life": "智慧零售：捕捉 AI 評論分析中非連續情感詞的關聯性",
              "fire": "公共安全：捕捉 AI 案件分析中非連續線索描述的關聯性"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在非連續單詞關聯捕捉等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "模型評估細項",
        "topics": [
          {
            "id": "626",
            "subject": "中科二  中科三",
            "category": "模型評估細項",
            "principle": "公平性",
            "title": "短句懲罰",
            "eng_name": "Brevity Penalty",
            "eng_abbr": "-",
            "def": "BLEU 指標中的一個修正係數，用於懲罰長度過短的輸出。",
            "key_goal": "防止模型透過生成極短句子來規避錯誤率。",
            "key_principle": "當生成文本短於參考文本時，對 BLEU 分數進行衰減懲罰。",
            "key_purpose": "確保翻譯或摘要具備足夠的資訊量，而非僅提供片斷資訊。",
            "common_apps": "在合規性審查 AI 中，防止模型僅回覆「是/否」而忽略必要解釋。",
            "scenarios": {
              "weather": "氣象預報：防止 AI 天氣摘要過度精簡而遺漏關鍵警報資訊",
              "agri": "智慧耕作：防止 AI 農業報告過度精簡遺漏關鍵病害資訊",
              "traffic": "交通管理：防止 AI 交通摘要過度精簡遺漏關鍵事故資訊",
              "industry": "製程優化：防止 AI 品檢摘要過度精簡遺漏關鍵瑕疵資訊",
              "finance": "智慧醫療：防止 AI 病歷摘要過度精簡遺漏關鍵病徵資訊",
              "life": "智慧零售：防止 AI 評論摘要過度精簡遺漏關鍵客訴資訊",
              "fire": "公共安全：防止 AI 案件摘要過度精簡遺漏關鍵證據資訊"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在防止極短句規避錯誤等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "演算法基礎",
        "topics": [
          {
            "id": "627",
            "subject": "中科二  中科三",
            "category": "演算法基礎",
            "principle": "透明與可解釋",
            "title": "最長公共子序列",
            "eng_name": "Longest Common Subsequence",
            "eng_abbr": "LCS",
            "def": "計算兩段文字或數據序列相似度的核心演算法，為 ROUGE-L 的基礎。",
            "key_goal": "找出兩個序列之間共有的最長特徵。",
            "key_principle": "動態規劃演算法，尋找兩個序列中不改變相對順序的最長子序列。",
            "key_purpose": "用於版本比較、文本差異分析與生物序列對齊。",
            "common_apps": "偵測兩份合約版本之間的差異，找出未受更動的核心條款。",
            "scenarios": {
              "weather": "氣象預報：偵測兩份氣象預報版本之間的共有特徵序列",
              "agri": "智慧耕作：偵測兩份農業報告版本之間的共有特徵",
              "traffic": "交通管理：偵測兩份交通法規版本之間的差異與共有段落",
              "industry": "製程優化：偵測兩份品檢標準版本之間的共有規格序列",
              "finance": "智慧醫療：偵測兩份臨床指引版本之間的共有治療程序",
              "life": "智慧零售：偵測兩份合約版本之間的差異與核心條款",
              "fire": "公共安全：偵測兩份法規版本之間的差異與共有條文"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在偵測兩份合約版本之間的差異下，傳統方案難以處理變數過多的情境，而最長公共子序列則能透過多維數據提取深層規律。"
          }
        ]
      }
    ]
  },
  {
    "title": "中科二",
    "sub_units": [
      {
        "title": "資料分析",
        "topics": [
          {
            "id": "32",
            "subject": "中科二",
            "category": "資料分析",
            "principle": "永續發展與福祉",
            "title": "資料科學",
            "eng_name": "Data Science",
            "eng_abbr": "DS",
            "def": "結合統計、演算法與領域知識，從數據中萃取價值的科學領域。",
            "key_goal": "從數據中獲取見解",
            "key_principle": "跨領域技術結合",
            "key_purpose": "支援商業決策",
            "common_apps": "金融詐欺偵測、市場趨勢預測。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "金融科技：信用卡盜刷風險即時偵測、異常交易攔截（核心場景）",
              "life": "智慧零售：電商平台異常退款/刷卡詐欺偵測",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 金融詐欺偵測、市場趨勢預測。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "資料工程",
        "topics": [
          {
            "id": "33",
            "subject": "中科二",
            "category": "資料工程",
            "principle": "透明與可解釋",
            "title": "擷取轉換載入",
            "eng_name": "Extract, Transform, Load",
            "eng_abbr": "ETL",
            "def": "從來源擷取、清洗轉換格式後載入資料倉儲的自動化流程。",
            "key_goal": "數據整合",
            "key_principle": "資料清洗與格式轉換",
            "key_purpose": "建立分析用資料庫",
            "common_apps": "跨部門資料整併至數據中台。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 跨部門資料整併至數據中台。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "35",
            "subject": "中科二",
            "category": "資料工程",
            "principle": "公平性",
            "title": "資料標註",
            "eng_name": "Data Labeling",
            "eng_abbr": "-",
            "def": "為原始資料加上類別或屬性標籤（如標記貓狗圖片）的過程 。",
            "key_goal": "提供訓練基準",
            "key_principle": "人工/自動加上標籤",
            "key_purpose": "監督式學習基礎",
            "common_apps": "標註醫療影像中的腫瘤位置。",
            "scenarios": {
              "weather": "氣象預報：有標記歷史氣象數據訓練降雨預測模型",
              "agri": "智慧耕作：標記病害影像訓練的辨識模型；畜牧：有標記生理數據訓練健康預測",
              "traffic": "智慧交通：標記交通違規影像訓練偵測模型",
              "industry": "品質檢測：標記瑕疵影像訓練AOI分類器",
              "finance": "金融科技：標記詐欺交易訓練風險模型；智慧醫療：標記病理影像訓練診斷模型",
              "life": "智慧零售：標記商品影像訓練識別模型；客服：意圖分類模型訓練",
              "fire": "智慧消防：標記火焰/煙霧影像訓練偵測模型"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 標註醫療影像中的腫瘤位置。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "563",
            "subject": "中科二",
            "category": "資料工程",
            "principle": "隱私保護",
            "title": "前處理",
            "eng_name": "Pre-processing",
            "eng_abbr": "-",
            "def": "影像進入模型前的降噪、縮放與正規化處理。",
            "key_goal": "淨化與格式化數據",
            "key_principle": "數據轉換演算法",
            "key_purpose": "提高辨識穩定度與速度。",
            "common_apps": "車牌辨識前的灰階化與去噪。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 車牌辨識前的灰階化與去噪。 下，傳統方案難以處理變數過多的情境，而 前處理 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "資料預處理",
        "topics": [
          {
            "id": "90",
            "subject": "中科二",
            "category": "資料預處理",
            "principle": "透明與可解釋",
            "title": "斷詞/標記化",
            "eng_name": "Tokenization",
            "eng_abbr": "-",
            "def": "將原始文本切分成最小的有意義單位（Token，如單字或詞彙）。",
            "key_goal": "最小語意單位切分",
            "key_principle": "字串分割演算法",
            "key_purpose": "文本特徵提取",
            "common_apps": "中文斷詞處理（如使用 Jieba）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 中文斷詞處理（如使用 Jieba）。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "91",
            "subject": "中科二",
            "category": "資料預處理",
            "principle": "透明與可解釋",
            "title": "停用詞移除",
            "eng_name": "Stop Words Removal",
            "eng_abbr": "-",
            "def": "移除對語意貢獻極低的高頻詞（如「的」、「了」、「and」）。",
            "key_goal": "去除高頻無義詞",
            "key_principle": "關鍵詞過濾",
            "key_purpose": "提升運算效率",
            "common_apps": "文本摘要、情感極性判斷。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 文本摘要、情感極性判斷。 下，傳統方案難以處理變數過多的情境，而 停用詞移除 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "統計學",
        "topics": [
          {
            "id": "96",
            "subject": "中科二",
            "category": "統計學",
            "principle": "透明與可解釋",
            "title": "敘述性統計",
            "eng_name": "Descriptive Statistics",
            "eng_abbr": "-",
            "def": "使用平均數、標準差、分佈圖等工具來總結與描述資料特性。",
            "key_goal": "描述資料特徵",
            "key_principle": "集中趨勢與離散程度",
            "key_purpose": "數據初步洞察",
            "common_apps": "營收報表分析、用戶輪廓描繪。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 營收報表分析、用戶輪廓描繪。 下，傳統方案難以處理變數過多的情境，而 敘述性統計 則能透過多維數據提取深層規律。"
          },
          {
            "id": "97",
            "subject": "中科二",
            "category": "統計學",
            "principle": "問責",
            "title": "推論統計",
            "eng_name": "Inferential Statistics",
            "eng_abbr": "-",
            "def": "透過樣本資料來推斷整體母體特徵的科學方法。",
            "key_goal": "樣本推論母體",
            "key_principle": "抽樣分佈與機率論",
            "key_purpose": "預測與決策評估",
            "common_apps": "民調推估大選結果、產品品質抽檢。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 民調推估大選結果、產品品質抽檢。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "98",
            "subject": "中科二",
            "category": "統計學",
            "principle": "問責",
            "title": "假設檢定",
            "eng_name": "Hypothesis Testing",
            "eng_abbr": "-",
            "def": "評估樣本觀測到的結果是否具備統計顯著性，而非純粹隨機。",
            "key_goal": "判斷統計顯著性",
            "key_principle": "虛無假設與對立假設",
            "key_purpose": "策略有效性驗證",
            "common_apps": "A/B Testing（如新版網頁是否真的提升轉化率）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 A/B Testing（如新版網頁是否真的提升轉化率）。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "99",
            "subject": "中科二",
            "category": "統計學",
            "principle": "問責",
            "title": "P 值",
            "eng_name": "P-value",
            "eng_abbr": "-",
            "def": "在虛無假設成立下，觀察到當前結果或更極端結果的機率。",
            "key_goal": "衡量證據強度",
            "key_principle": "錯誤拒絕機率",
            "key_purpose": "判定實驗結果",
            "common_apps": "醫藥臨床試驗有效性判斷。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 醫藥臨床試驗有效性判斷。 下，傳統方案難以處理變數過多的情境，而 P 值 則能透過多維數據提取深層規律。"
          },
          {
            "id": "101",
            "subject": "中科二",
            "category": "統計學",
            "principle": "透明與可解釋",
            "title": "多重共線性",
            "eng_name": "Multicollinearity",
            "eng_abbr": "-",
            "def": "迴歸分析中自變數之間存在高度相關，導致模型參數估計不準。",
            "key_goal": "變數間高度相關",
            "key_principle": "迴歸不穩定性",
            "key_purpose": "模型診斷",
            "common_apps": "排除冗餘特徵以優化模型。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 排除冗餘特徵以優化模型。 下，傳統方案難以處理變數過多的情境，而 多重共線性 則能透過多維數據提取深層規律。"
          },
          {
            "id": "102",
            "subject": "中科二",
            "category": "統計學",
            "principle": "透明與可解釋",
            "title": "資料分佈",
            "eng_name": "Data Distribution",
            "eng_abbr": "-",
            "def": "描述變數可能出現的數值及其發生頻率的模式（如常態分佈）。",
            "key_goal": "描繪數據形態",
            "key_principle": "機率分佈函數",
            "key_purpose": "模型選型基礎",
            "common_apps": "判斷是否符合特定演算法的假設條件。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 判斷是否符合特定演算法的假設條件。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "資料處理",
        "topics": [
          {
            "id": "103",
            "subject": "中科二",
            "category": "資料處理",
            "principle": "安全性",
            "title": "異常值檢測",
            "eng_name": "Outlier Detection",
            "eng_abbr": "-",
            "def": "識別資料集中顯著偏離其他觀察值的樣本，可能是錯誤或特殊事件。",
            "key_goal": "識別偏離數據",
            "key_principle": "距離度量/統計門檻",
            "key_purpose": "詐欺偵測與清洗",
            "common_apps": "信用卡異常刷卡偵測、設備故障預警。",
            "scenarios": {
              "weather": "環境監控：水庫水位/PM2.5感測值異常即時告警；地震前兆異常偵測",
              "agri": "精準養殖：魚塭水質pH/溶氧異常立即警報；畜牧：體溫異常偵測",
              "traffic": "智慧交通：交通事故現場流量異常識別；物流：配送軌跡異常告警",
              "industry": "預測性維護：機台振動/電流異常早期告警；品質：製程數據異常即時停線",
              "finance": "金融科技：信用卡盜刷異常交易即時攔截；智慧醫療：生命徵象異常告警",
              "life": "智慧零售：庫存異常銷售模式偵測（搶購/假退貨）",
              "fire": "智慧消防：感測溫度/煙霧異常即時觸發告警；公共安全：人流密度異常偵測"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 信用卡異常刷卡偵測、設備故障預警。 下，傳統方案難以處理變數過多的情境，而 異常值檢測 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "機器學習",
        "topics": [
          {
            "id": "104",
            "subject": "中科二",
            "category": "機器學習",
            "principle": "永續發展與福祉",
            "title": "維度災難",
            "eng_name": "Curse of Dimensionality",
            "eng_abbr": "-",
            "def": "隨著特徵維度增加，資料變得稀疏，導致模型訓練效能下降。",
            "key_goal": "空間稀疏性問題",
            "key_principle": "高維特徵負效應",
            "key_purpose": "模型設計提醒",
            "common_apps": "推動執行降維 (PCA) 或特徵篩選。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 推動執行降維 (PCA) 或特徵篩選。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "統計與檢索",
        "topics": [
          {
            "id": "150",
            "subject": "中科二",
            "category": "統計與檢索",
            "principle": "透明與可解釋",
            "title": "餘弦相似度",
            "eng_name": "Cosine Similarity",
            "eng_abbr": "-",
            "def": "透過計算兩個向量間的夾角來判斷相似度，值愈接近 1 愈相似。",
            "key_goal": "衡量語義相關性",
            "key_principle": "向量夾角餘弦值",
            "key_purpose": "找出最相關文獻",
            "common_apps": "在 RAG 中判定哪一段文字與問題最接近。",
            "scenarios": {
              "weather": "環境監控：氣象法規/標準文件RAG問答系統",
              "agri": "智慧耕作：農業技術資料庫RAG問答助理（查詢防治方法）",
              "traffic": "智慧物流：運輸法規/路線資料庫AI查詢",
              "industry": "預測性維護：設備維修手冊RAG問答（快速查詢故障碼）",
              "finance": "智慧醫療：醫學文獻RAG輔助診斷；金融：法規合規即時查詢",
              "life": "智能客服：企業內部產品知識庫RAG問答（減少幻覺）",
              "fire": "公共安全：消防法規/救災程序RAG查詢助理"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在 RAG 中判定哪一段文字與問題最接近。 下，傳統方案難以處理變數過多的情境，而 餘弦相似度 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "數據處理",
        "topics": [
          {
            "id": "151",
            "subject": "中科二",
            "category": "數據處理",
            "principle": "-",
            "title": "文本分塊",
            "eng_name": "Chunking",
            "eng_abbr": "-",
            "def": "將長文章切分為適當大小的片段，以符合 LLM 上下文限制並優化檢索。",
            "key_goal": "維持語義完整性",
            "key_principle": "文本切割策略",
            "key_purpose": "優化檢索精準度",
            "common_apps": "按段落或固定長度切割 PDF 文件。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 按段落或固定長度切割 PDF 文件。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "283",
            "subject": "中科二",
            "category": "數據處理",
            "principle": "永續發展與福祉",
            "title": "異動資料擷取",
            "eng_name": "Change Data Capture",
            "eng_abbr": "CDC",
            "def": "偵測並擷取資料庫中異動（增、刪、改）的部分，將其同步至其他系統。",
            "key_goal": "實現即時數據同步",
            "key_principle": "監控資料庫日誌變更",
            "key_purpose": "即時數據備份與整合",
            "common_apps": "讓資料倉儲與正式營運資料庫保持秒級同步。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 讓資料倉儲與正式營運資料庫保持秒級同步。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "448",
            "subject": "中科二",
            "category": "數據處理",
            "principle": "-",
            "title": "領域專用語料庫",
            "eng_name": "Domain-specific Corpus",
            "eng_abbr": "-",
            "def": "專門收集特定領域（如法律、金融、醫學）的高質量文本數據集。",
            "key_goal": "訓練專家模型",
            "key_principle": "結構化專業文本集合",
            "key_purpose": "提升模型在該領域的準確率。",
            "common_apps": "收集 20 年份的台灣最高法院判決書作為訓練語料。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 收集 20 年份的台灣最高法院判決書作為訓練語料。 下，傳統方案難以處理變數過多的情境，而 領域專用語料庫 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "資料科學",
        "topics": [
          {
            "id": "179",
            "subject": "中科二",
            "category": "資料科學",
            "principle": "透明與可解釋",
            "title": "筆記本 (編程環境)",
            "eng_name": "Notebook (Jupyter)",
            "eng_abbr": "-",
            "def": "允許開發者同時撰寫程式、運行結果與展示圖表的開發環境。",
            "key_goal": "互動式分析",
            "key_principle": "程式碼與文檔混排",
            "key_purpose": "資料探索與建模紀錄",
            "common_apps": "進行數據清洗與視覺化分析。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 進行數據清洗與視覺化分析。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "大數據 5V",
        "topics": [
          {
            "id": "198",
            "subject": "中科二",
            "category": "大數據 5V",
            "principle": "永續發展與福祉",
            "title": "資料價值",
            "eng_name": "Value",
            "eng_abbr": "-",
            "def": "大數據的核心，強調從海量資料中提煉出能解決問題或獲利的見解。",
            "key_goal": "數據變現與決策",
            "key_principle": "商業價值萃取",
            "key_purpose": "決定數據收集策略",
            "common_apps": "判定收集此項數據是否能提升利潤。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 判定收集此項數據是否能提升利潤。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "199",
            "subject": "中科二",
            "category": "大數據 5V",
            "principle": "永續發展與福祉",
            "title": "數據量",
            "eng_name": "Volume",
            "eng_abbr": "-",
            "def": "數據的巨大規模（如從 GB 到 PB 級別），是傳統工具難以處理的首要特徵。",
            "key_goal": "數據規模管理",
            "key_principle": "存儲擴充能力",
            "key_purpose": "評估硬件需求",
            "common_apps": "決定是否需要分佈式文件系統。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 決定是否需要分佈式文件系統。 下，傳統方案難以處理變數過多的情境，而 數據量 則能透過多維數據提取深層規律。"
          },
          {
            "id": "200",
            "subject": "中科二",
            "category": "大數據 5V",
            "principle": "永續發展與福祉",
            "title": "數據多樣性",
            "eng_name": "Variety",
            "eng_abbr": "-",
            "def": "包含結構化、半結構化（JSON）及非結構化（圖影音）的數據類型。",
            "key_goal": "處理非結構化數據",
            "key_principle": "多元格式整合",
            "key_purpose": "擴大分析維度",
            "common_apps": "結合文字評論與銷售數據進行分析。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 結合文字評論與銷售數據進行分析。 下，傳統方案難以處理變數過多的情境，而 數據多樣性 則能透過多維數據提取深層規律。"
          },
          {
            "id": "201",
            "subject": "中科二",
            "category": "大數據 5V",
            "principle": "永續發展與福祉",
            "title": "數據時效性",
            "eng_name": "Velocity",
            "eng_abbr": "-",
            "def": "數據產生與處理的速度，強調即時分析而非僅是批次處理。",
            "key_goal": "提升即時處理力",
            "key_principle": "串流運算與低延遲",
            "key_purpose": "實現即時反應",
            "common_apps": "股票市場即時行情分析與預警。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 股票市場即時行情分析與預警。 下，傳統方案難以處理變數過多的情境，而 數據時效性 則能透過多維數據提取深層規律。"
          },
          {
            "id": "202",
            "subject": "中科二",
            "category": "大數據 5V",
            "principle": "透明與可解釋",
            "title": "數據真實性",
            "eng_name": "Veracity",
            "eng_abbr": "-",
            "def": "指數據的準確性、一致性與可信度，是決定「Garbage In, Garbage Out」的關鍵。",
            "key_goal": "確保數據品質",
            "key_principle": "數據清洗與來源追蹤",
            "key_purpose": "提升模型信任度",
            "common_apps": "清除爬蟲抓取到的垃圾資訊。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 清除爬蟲抓取到的垃圾資訊。 下，傳統方案難以處理變數過多的情境，而 數據真實性 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "系統架構",
        "topics": [
          {
            "id": "221",
            "subject": "中科二",
            "category": "系統架構",
            "principle": "永續發展與福祉",
            "title": "資料湖",
            "eng_name": "Data Lake",
            "eng_abbr": "-",
            "def": "以原始格式儲存各類原始數據（結構化與非結構化）的系統，適合大數據分析。",
            "key_goal": "儲存原始大數據",
            "key_principle": "原始格式存儲",
            "key_purpose": "支援探索性研究",
            "common_apps": "儲存公司成立至今的所有日誌與圖像。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 儲存公司成立至今的所有日誌與圖像。 下，傳統方案難以處理變數過多的情境，而 資料湖 則能透過多維數據提取深層規律。"
          },
          {
            "id": "222",
            "subject": "中科二",
            "category": "系統架構",
            "principle": "永續發展與福祉",
            "title": "資料倉儲",
            "eng_name": "Data Warehouse",
            "eng_abbr": "-",
            "def": "經處理、清洗後的結構化數據存儲庫，專為查詢、報告與分析設計。",
            "key_goal": "支援決策分析",
            "key_principle": "結構化數據整合",
            "key_purpose": "產出經營報表",
            "common_apps": "定期統計各季度的銷售增長。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 定期統計各季度的銷售增長。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "系統效能",
        "topics": [
          {
            "id": "233",
            "subject": "中科二",
            "category": "系統效能",
            "principle": "永續發展與福祉",
            "title": "冷啟動問題",
            "eng_name": "Cold Start Problem",
            "eng_abbr": "-",
            "def": "新用戶或新商品加入時，因缺乏歷史行為數據導致推薦不準的問題。",
            "key_goal": "解決初期推薦難題",
            "key_principle": "基於內容的初步推薦",
            "key_purpose": "優化新進資源推廣",
            "common_apps": "新上架 APP 的初始曝光策略。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 新上架 APP 的初始曝光策略。 下，傳統方案難以處理變數過多的情境，而 冷啟動問題 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "資訊檢索",
        "topics": [
          {
            "id": "238",
            "subject": "中科二",
            "category": "資訊檢索",
            "principle": "問責",
            "title": "Recall@K",
            "eng_name": "Recall@K",
            "eng_abbr": "-",
            "def": "在推薦或檢索系統中，前 K 個結果中包含正確答案的比例。",
            "key_goal": "衡量檢索完整性",
            "key_principle": "前 K 名覆蓋比例",
            "key_purpose": "評估 RAG 效果",
            "common_apps": "前 10 筆檢索結果中是否有我要的文獻。",
            "scenarios": {
              "weather": "環境監控：氣象法規/標準文件RAG問答系統",
              "agri": "智慧耕作：農業技術資料庫RAG問答助理（查詢防治方法）",
              "traffic": "智慧物流：運輸法規/路線資料庫AI查詢",
              "industry": "預測性維護：設備維修手冊RAG問答（快速查詢故障碼）",
              "finance": "智慧醫療：醫學文獻RAG輔助診斷；金融：法規合規即時查詢",
              "life": "智能客服：企業內部產品知識庫RAG問答（減少幻覺）",
              "fire": "公共安全：消防法規/救災程序RAG查詢助理"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 前 10 筆檢索結果中是否有我要的文獻。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "239",
            "subject": "中科二",
            "category": "資訊檢索",
            "principle": "透明與可解釋",
            "title": "歸一化折損累計增益",
            "eng_name": "NDCG",
            "eng_abbr": "NDCG",
            "def": "不僅看結果對不對，還考慮結果排名的先後順序是否合理。",
            "key_goal": "衡量排名品質",
            "key_principle": "加權排名相關性評分",
            "key_purpose": "優化搜尋引擎排序",
            "common_apps": "使最相關的網頁排在第一位。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 使最相關的網頁排在第一位。 下，傳統方案難以處理變數過多的情境，而 歸一化折損累計增益 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "大數據架構",
        "topics": [
          {
            "id": "279",
            "subject": "中科二",
            "category": "大數據架構",
            "principle": "永續發展與福祉",
            "title": "Lambda 架構",
            "eng_name": "Lambda Architecture",
            "eng_abbr": "-",
            "def": "結合 Batch Layer（處理歷史數據）與 Speed Layer（處理即時數據）的數據架構。",
            "key_goal": "平衡精準度與速度",
            "key_principle": "批次處理 + 串流處理",
            "key_purpose": "數位廣告點擊分析",
            "common_apps": "既要精準結算昨日帳單，也要即時更新今日點擊熱度。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 既要精準結算昨日帳單，也要即時更新今日點擊熱度。 下，傳統方案難以處理變數過多的情境，而 Lambda 架構 則能透過多維數據提取深層規律。"
          },
          {
            "id": "280",
            "subject": "中科二",
            "category": "大數據架構",
            "principle": "永續發展與福祉",
            "title": "Kappa 架構",
            "eng_name": "Kappa Architecture",
            "eng_abbr": "-",
            "def": "移除批次層，所有資料皆視為串流，透過單一處理引擎完成歷史與即時分析。",
            "key_goal": "簡化數據管線",
            "key_principle": "全串流處理 (Stream-only)",
            "key_purpose": "即時金融欺詐監控",
            "common_apps": "所有的交易行為皆即時通過串流引擎進行規則判斷。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 所有的交易行為皆即時通過串流引擎進行規則判斷。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "281",
            "subject": "中科二",
            "category": "大數據架構",
            "principle": "永續發展與福祉",
            "title": "資料管線",
            "eng_name": "Data Pipeline",
            "eng_abbr": "-",
            "def": "數據從來源端經過清洗、轉換到儲存端的一系列自動化步驟。",
            "key_goal": "實現自動化資料流",
            "key_principle": "ETL 流程自動化",
            "key_purpose": "企業數據中台",
            "common_apps": "自動將每日銷售數據從各分店 POS 系統導向總部資料庫。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動將每日銷售數據從各分店 POS 系統導向總部資料庫。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "306",
            "subject": "中科二",
            "category": "大數據架構",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "Kafka",
            "eng_abbr": "-",
            "def": "一個高吞吐量的分散式串流平台，用於構建實時數據管道與應用。",
            "key_goal": "處理高併發數據流",
            "key_principle": "分散式發佈/訂閱消息系統",
            "key_purpose": "日誌收集與實時監控",
            "common_apps": "處理每秒數萬筆的系統 Log 並分發給分析系統。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 處理每秒數萬筆的系統 Log 並分發給分析系統。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "軟體工程",
        "topics": [
          {
            "id": "282",
            "subject": "中科二",
            "category": "軟體工程",
            "principle": "永續發展與福祉",
            "title": "面向數據設計",
            "eng_name": "Data-Oriented",
            "eng_abbr": "-",
            "def": "以數據如何被存取與處理為核心，而非以物件結構為核心的開發範式。",
            "key_goal": "優化快取命中率",
            "key_principle": "資料連續存儲 layout",
            "key_purpose": "高效能 AI 引擎開發",
            "common_apps": "優化記憶體排列以加速大規模矩陣運算。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 優化記憶體排列以加速大規模矩陣運算。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數據儲存",
        "topics": [
          {
            "id": "284",
            "subject": "中科二",
            "category": "數據儲存",
            "principle": "永續發展與福祉",
            "title": "水平擴展",
            "eng_name": "Scale-out / Horizontal Scaling",
            "eng_abbr": "-",
            "def": "透過增加更多伺服器節點來提升系統整體的儲存或計算能力 。",
            "key_goal": "處理海量數據與併發",
            "key_principle": "增加節點數量",
            "key_purpose": "雲端彈性部署",
            "common_apps": "雙 11 期間增加伺服器數量以應對爆量流量。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 雙 11 期間增加伺服器數量以應對爆量流量。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "285",
            "subject": "中科二",
            "category": "數據儲存",
            "principle": "永續發展與福祉",
            "title": "垂直擴展",
            "eng_name": "Scale-up / Vertical Scaling",
            "eng_abbr": "-",
            "def": "透過升級單一伺服器的 CPU、RAM 或 GPU 來提升性能。",
            "key_goal": "提升單體效能",
            "key_principle": "提升單機硬體配置",
            "key_purpose": "初期開發環境升級",
            "common_apps": "訓練模型時發現記憶體不足，將單機顯存從 24G 升級至 80G。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 訓練模型時發現記憶體不足，將單機顯存從 24G 升級至 80G。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "286",
            "subject": "中科二",
            "category": "數據儲存",
            "principle": "永續發展與福祉",
            "title": "列式儲存",
            "eng_name": "Columnar Storage",
            "eng_abbr": "-",
            "def": "將同一欄位的數據儲存在連續空間，適合進行大規模的數據聚合運算。",
            "key_goal": "加速分析查詢",
            "key_principle": "數據按欄而非按列存放",
            "key_purpose": "資料倉儲 (BigQuery)",
            "common_apps": "僅讀取「銷售額」欄位進行加總，無需讀取整行其他無關資料。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 僅讀取「銷售額」欄位進行加總，無需讀取整行其他無關資料。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "287",
            "subject": "中科二",
            "category": "數據儲存",
            "principle": "永續發展與福祉",
            "title": "資料市集",
            "eng_name": "Data Mart",
            "eng_abbr": "-",
            "def": "為特定業務部門（如行銷部、財務部）設計的小型主題式數據儲存區。",
            "key_goal": "滿足特定部門需求",
            "key_principle": "資料倉儲的子集",
            "key_purpose": "業務報表分析",
            "common_apps": "行銷人員從市集中快速抓取顧客點擊數據，無需進入龐大的總資料庫。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 行銷人員從市集中快速抓取顧客點擊數據，無需進入龐大的總資料庫。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數據管理",
        "topics": [
          {
            "id": "288",
            "subject": "中科二",
            "category": "數據管理",
            "principle": "永續發展與福祉",
            "title": "資料分層儲存",
            "eng_name": "Data Tiering",
            "eng_abbr": "-",
            "def": "根據存取頻率將數據存放在不同效能與成本的硬碟（如 SSD 或雲端歸檔）。",
            "key_goal": "降低儲存成本",
            "key_principle": "熱 / 溫 / 冷資料分類",
            "key_purpose": "法規合規與審計",
            "common_apps": "常用數據放 SSD，五年前的交易日誌存入低成本的冷存儲。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 常用數據放 SSD，五年前的交易日誌存入低成本的冷存儲。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "301",
            "subject": "中科二",
            "category": "數據管理",
            "principle": "問責",
            "title": "資料血緣",
            "eng_name": "Data Lineage",
            "eng_abbr": "-",
            "def": "記錄數據從產生、轉換、移動到最終使用的完整流向與變化歷史。",
            "key_goal": "實現數據追蹤",
            "key_principle": "數據生命週期生命路徑圖",
            "key_purpose": "故障診斷與合規審計",
            "common_apps": "發現報表數據錯誤時，回溯是哪一個清洗步驟出了問題。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 發現報表數據錯誤時，回溯是哪一個清洗步驟出了問題。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "302",
            "subject": "中科二",
            "category": "數據管理",
            "principle": "透明與可解釋",
            "title": "資料字典",
            "eng_name": "Data Dictionary",
            "eng_abbr": "-",
            "def": "集中儲存數據項目的定義、格式、來源與業務意義的說明文檔。",
            "key_goal": "統一定義標準",
            "key_principle": "元數據 (Metadata) 儲存庫",
            "key_purpose": "促進團隊協作開發",
            "common_apps": "確保工程師與分析師對「活躍用戶」的定義一致。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 確保工程師與分析師對「活躍用戶」的定義一致。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "大數據處理",
        "topics": [
          {
            "id": "289",
            "subject": "中科二",
            "category": "大數據處理",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "MapReduce",
            "eng_abbr": "-",
            "def": "將任務拆解後在多台電腦同步運算，再彙整結果的計算框架。",
            "key_goal": "分散式大規模運算",
            "key_principle": "映射 (Map) 與 歸約 (Reduce)",
            "key_purpose": "大規模文字檢索",
            "common_apps": "在數百億個網頁中統計每個字出現的頻率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在數百億個網頁中統計每個字出現的頻率。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          },
          {
            "id": "290",
            "subject": "中科二",
            "category": "大數據處理",
            "principle": "永續發展與福祉",
            "title": "彈性分散式資料集",
            "eng_name": "Resilient Distributed Datasets",
            "eng_abbr": "RDD",
            "def": "Spark 的核心概念，是一種可跨集群分佈並具備容錯能力的數據集合。",
            "key_goal": "提升記憶體計算效率",
            "key_principle": "記憶體內、不可變分佈數據",
            "key_purpose": "疊代式機器學習訓練",
            "common_apps": "將中間計算結果留在記憶體，避免頻繁讀寫硬碟加速訓練。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將中間計算結果留在記憶體，避免頻繁讀寫硬碟加速訓練。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "304",
            "subject": "中科二",
            "category": "大數據處理",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "Hadoop",
            "eng_abbr": "-",
            "def": "一個開源框架，允許在商用硬體集群上進行大規模數據的分散式處理。",
            "key_goal": "廉價硬體處理海量數據",
            "key_principle": "分散式儲存 (HDFS) 與計算",
            "key_purpose": "海量數據批次處理",
            "common_apps": "存儲並分析過去十年的全行交易紀錄。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 存儲並分析過去十年的全行交易紀錄。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          },
          {
            "id": "305",
            "subject": "中科二",
            "category": "大數據處理",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "Spark",
            "eng_abbr": "-",
            "def": "基於記憶體運算的大數據分析引擎，速度比 Hadoop MapReduce 快百倍。",
            "key_goal": "加速大數據運算",
            "key_principle": "記憶體內計算 (In-memory)",
            "key_purpose": "實時分析與機器學習",
            "common_apps": "在海量點擊流數據中即時計算推薦結果。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 在海量點擊流數據中即時計算推薦結果。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "運算架構",
        "topics": [
          {
            "id": "291",
            "subject": "中科二",
            "category": "運算架構",
            "principle": "永續發展與福祉",
            "title": "節點 / 集群",
            "eng_name": "Node / Cluster",
            "eng_abbr": "-",
            "def": "節點是單一計算設備，集群是由多個節點組成的運算群組。",
            "key_goal": "構建分散式系統",
            "key_principle": "單機 (Node) 與 集合 (Cluster)",
            "key_purpose": "分散式模型訓練",
            "common_apps": "使用包含 8 台 A100 伺服器（節點）的集群進行模型微調。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 使用包含 8 台 A100 伺服器（節點）的集群進行模型微調。 下，傳統方案難以處理變數過多的情境，而 節點 / 集群 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "統計基礎",
        "topics": [
          {
            "id": "292",
            "subject": "中科二",
            "category": "統計基礎",
            "principle": "透明與可解釋",
            "title": "中央極限定理",
            "eng_name": "Central Limit Theorem",
            "eng_abbr": "CLT",
            "def": "指出無論母體分佈為何，樣本數夠大時，樣本平均數的分佈會接近常態分佈 。",
            "key_goal": "支撐假設檢定基礎",
            "key_principle": "樣本平均數趨向常態分佈",
            "key_purpose": "區間估計與檢定",
            "common_apps": "利用常態分佈特性對產品合格率進行抽樣估計。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 利用常態分佈特性對產品合格率進行抽樣估計。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "統計推論",
        "topics": [
          {
            "id": "293",
            "subject": "中科二",
            "category": "統計推論",
            "principle": "問責",
            "title": "第一型錯誤 (Alpha)",
            "eng_name": "Type I Error",
            "eng_abbr": "α",
            "def": "在虛無假設為真時，卻錯誤地拒絕了它（如：沒病判成有病）。",
            "key_goal": "衡量誤報風險",
            "key_principle": "棄真 (拒絕正確的虛無假設)",
            "key_purpose": "醫學診斷檢測",
            "common_apps": "確保癌症篩檢的偽陽性率（False Positive）在可控範圍內。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 確保癌症篩檢的偽陽性率（False Positive）在可控範圍內。 下，傳統方案難以處理變數過多的情境，而 第一型錯誤 (Alpha) 則能透過多維數據提取深層規律。"
          },
          {
            "id": "294",
            "subject": "中科二",
            "category": "統計推論",
            "principle": "問責",
            "title": "第二型錯誤 (Beta)",
            "eng_name": "Type II Error",
            "eng_abbr": "β",
            "def": "在虛無假設為假時，卻錯誤地接受了它（如：有病判成沒病）。",
            "key_goal": "降低漏報風險",
            "key_principle": "納偽 (接受錯誤的虛無假設)",
            "key_purpose": "衡量檢定力 (Power)",
            "common_apps": "確保癌症篩檢不會漏掉真正的患者。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 確保癌症篩檢不會漏掉真正的患者。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "295",
            "subject": "中科二",
            "category": "統計推論",
            "principle": "透明與可解釋",
            "title": "顯著水準",
            "eng_name": "Significance Level",
            "eng_abbr": "α",
            "def": "在假設檢定中，預先設定拒絕虛無假設的門檻機率（通常為 0.05）。",
            "key_goal": "設定決策門檻",
            "key_principle": "拒絕域機率值",
            "key_purpose": "判定結果是否具統計顯著性",
            "common_apps": "判斷新舊演算法的點擊率差異是否非隨機發生。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 判斷新舊演算法的點擊率差異是否非隨機發生。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "任務編排",
        "topics": [
          {
            "id": "307",
            "subject": "中科二",
            "category": "任務編排",
            "principle": "透明與可解釋",
            "title": "-",
            "eng_name": "Airflow",
            "eng_abbr": "-",
            "def": "由 Airbnb 開源的平台，用於編排、調度與監控複雜的數據工作流。",
            "key_goal": "自動化工作流管理",
            "key_principle": "DAG (有向無環圖) 調度",
            "key_purpose": "管理 ETL 流程",
            "common_apps": "定時執行：抓取數據 -> 清洗 -> 訓練模型 -> 更新報表。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 定時執行：抓取數據 -> 清洗 -> 訓練模型 -> 更新報表。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "提示工程",
        "topics": [
          {
            "id": "388",
            "subject": "中科二",
            "category": "提示工程",
            "principle": "透明與可解釋",
            "title": "思維鏈提示",
            "eng_name": "Chain-of-Thought Prompting",
            "eng_abbr": "CoT",
            "def": "透過在 Prompt 中加入「讓我們一步步思考」或範例步驟，引導模型展示推理過程的技術。",
            "key_goal": "提升複雜邏輯推理",
            "key_principle": "誘導模型輸出中間步驟",
            "key_purpose": "解決多步驟數學題或邏輯謎題。",
            "common_apps": "要求 AI 計算複雜的稅務問題並列出計算過程。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 要求 AI 計算複雜的稅務問題並列出計算過程。 下，傳統方案難以處理變數過多的情境，而 思維鏈提示 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "數據主權",
        "topics": [
          {
            "id": "441",
            "subject": "中科二",
            "category": "數據主權",
            "principle": "永續發展與福祉",
            "title": "在地資料訓練",
            "eng_name": "Local Data Training",
            "eng_abbr": "-",
            "def": "TAIDE 的核心方針，確保模型熟悉台灣特有的社會制度、節慶與文化慣語。",
            "key_goal": "降低事實幻覺",
            "key_principle": "納入在地法律與稅制",
            "key_purpose": "提升模型對在地服務的準確度。",
            "common_apps": "使用台灣特有的報稅規則訓練 AI 以提供正確諮詢。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 使用台灣特有的報稅規則訓練 AI 以提供正確諮詢。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "大數據隱私保護",
        "topics": [
          {
            "id": "472",
            "subject": "中科二",
            "category": "大數據隱私保護",
            "principle": "隱私保護",
            "title": "隨機化聚合",
            "eng_name": "Randomization Aggregation",
            "eng_abbr": "-",
            "def": "結合差分隱私 (Differential Privacy) 的概念，保護個別數據點 。",
            "key_goal": "統計干擾與防禦",
            "key_principle": "在數據中加入隨機噪聲，並以群體統計值輸出。",
            "key_purpose": "在不暴露個人隱私的情況下，獲取群體趨勢分析。",
            "common_apps": "科技大廠收集使用者 App 使用時長統計，同時保護個體隱私。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 科技大廠收集使用者 App 使用時長統計，同時保護個體隱私。 下，傳統方案難以處理變數過多的情境，而 隨機化聚合 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "影像標註",
        "topics": [
          {
            "id": "505",
            "subject": "中科二",
            "category": "影像標註",
            "principle": "永續發展",
            "title": "影像模型平台",
            "eng_name": "Roboflow",
            "eng_abbr": "-",
            "def": "一站式的電腦視覺資料庫管理平台，涵蓋標註、增強與部署。",
            "key_goal": "數據工作流自動化",
            "key_principle": "雲端電腦視覺管理系統",
            "key_purpose": "簡化從原始影像到模型訓練的流程。",
            "common_apps": "生產線產品瑕疵檢測快速建模。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 生產線產品瑕疵檢測快速建模。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "507",
            "subject": "中科二",
            "category": "影像標註",
            "principle": "安全與問責",
            "title": "超級標註平台",
            "eng_name": "SuperAnnotate",
            "eng_abbr": "-",
            "def": "提供自動化標註與團隊協作管理的大型專業影像標註平台。",
            "key_goal": "端到端標註管理",
            "key_principle": "整合式標註生態系",
            "key_purpose": "提升大規模標註專案的準確率與效率。",
            "common_apps": "智慧城市監控數據標註專案。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 智慧城市監控數據標註專案。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "513",
            "subject": "中科二",
            "category": "影像標註",
            "principle": "永續發展",
            "title": "自動標註",
            "eng_name": "Auto-labeling",
            "eng_abbr": "-",
            "def": "利用既有預訓練模型對新數據進行自動標記，再由人工進行修正。",
            "key_goal": "降低人工標註成本",
            "key_principle": "模型輔助預標註",
            "key_purpose": "大幅提升數據準備速度。",
            "common_apps": "大規模人臉辨識數據自動預處理。",
            "scenarios": {
              "weather": "",
              "agri": "畜牧管理：牛隻個體臉部識別追蹤（乳牛個體健康管理）",
              "traffic": "自駕與輔助：疲勞駕駛臉部特徵偵測（眼皮閉合角度）",
              "industry": "製程優化：廠區人員身份核驗，防止未授權進入",
              "finance": "金融科技：ATM/網銀人臉身份核實；健康管家：情緒健康狀態辨識",
              "life": "智慧零售：販賣機顧客年齡/性別分析精準推薦",
              "fire": "公共安全：協尋失蹤/通緝人員特徵比對；刑事案件追查"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 大規模人臉辨識數據自動預處理。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數據治理",
        "topics": [
          {
            "id": "514",
            "subject": "中科二",
            "category": "數據治理",
            "principle": "安全與問責",
            "title": "標註準則",
            "eng_name": "Annotation Guideline",
            "eng_abbr": "-",
            "def": "標註任務中定義標籤定義、邊界判定及爭議處理的規範手冊。",
            "key_goal": "確保數據一致性",
            "key_principle": "標準作業程序 (SOP)",
            "key_purpose": "減少不同標註者間的認知偏誤。",
            "common_apps": "醫療診斷影像的專業標註規範。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫療診斷影像的專業標註規範。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數據前處理",
        "topics": [
          {
            "id": "515",
            "subject": "中科二",
            "category": "數據前處理",
            "principle": "隱私保護",
            "title": "影像數據前處理",
            "eng_name": "Preprocessing for Image Data",
            "eng_abbr": "-",
            "def": "在模型訓練前對原始影像進行的大小調整、降噪與標準化過程。",
            "key_goal": "數據格式標準化",
            "key_principle": "影像轉換技術",
            "key_purpose": "提升模型訓練效率與精確度。",
            "common_apps": "各類視覺模型訓練前的必要流程。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 各類視覺模型訓練前的必要流程。 下，傳統方案難以處理變數過多的情境，而 影像數據前處理 則能透過多維數據提取深層規律。"
          },
          {
            "id": "516",
            "subject": "中科二",
            "category": "數據前處理",
            "principle": "永續發展",
            "title": "尺寸調整",
            "eng_name": "Resize",
            "eng_abbr": "-",
            "def": "將不同尺寸的原始影像調整為模型要求的固定解析度（如 224x224）。",
            "key_goal": "統一解析度",
            "key_principle": "內插與採樣技術",
            "key_purpose": "確保模型輸入張量格式一致。",
            "common_apps": "智慧手機端模型的輸入優化。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 智慧手機端模型的輸入優化。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "517",
            "subject": "中科二",
            "category": "數據前處理",
            "principle": "透明可解釋",
            "title": "填充",
            "eng_name": "Padding",
            "eng_abbr": "-",
            "def": "在影像周圍增加像素（通常為 0），以在不扭曲比例下達到指定尺寸。",
            "key_goal": "保持影像比例",
            "key_principle": "常數或零值填充",
            "key_purpose": "防止因 Resize 導致的物體變形。",
            "common_apps": "醫學影像的非對稱尺寸處理。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 醫學影像的非對稱尺寸處理。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "518",
            "subject": "中科二",
            "category": "數據前處理",
            "principle": "隱私保護",
            "title": "裁剪",
            "eng_name": "Cropping",
            "eng_abbr": "-",
            "def": "從原始影像中擷取特定區域，移除不相關的背景資訊。",
            "key_goal": "聚焦感興趣區域",
            "key_principle": "座標裁切",
            "key_purpose": "減少背景雜訊，聚焦學習目標。",
            "common_apps": "掃描文件中的特定欄位提取。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 掃描文件中的特定欄位提取。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "519",
            "subject": "中科二",
            "category": "數據前處理",
            "principle": "永續發展",
            "title": "像素歸一化",
            "eng_name": "Pixel Normalization",
            "eng_abbr": "-",
            "def": "將像素值（0-255）轉換至特定範圍（如 0 到 1），使其呈正態分佈。",
            "key_goal": "提升數值穩定性",
            "key_principle": "特徵縮放 (0-1)",
            "key_purpose": "加速模型梯度下降的收斂速度。",
            "common_apps": "深度學習神經網路訓練初階處理。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 深度學習神經網路訓練初階處理。 下，傳統方案難以處理變數過多的情境，而 像素歸一化 則能透過多維數據提取深層規律。"
          },
          {
            "id": "525",
            "subject": "中科二",
            "category": "數據前處理",
            "principle": "永續發展",
            "title": "通道降維",
            "eng_name": "Channel Reduction",
            "eng_abbr": "-",
            "def": "將多通道影像壓縮為單通道，以節省記憶體空間並過濾無關色彩雜訊。",
            "key_goal": "優化算力效率",
            "key_principle": "特徵提取與壓縮",
            "key_purpose": "在不損失關鍵結構資訊下精簡數據。",
            "common_apps": "大規模監控影像的初步過濾與儲存。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 大規模監控影像的初步過濾與儲存。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "531",
            "subject": "中科二",
            "category": "數據前處理",
            "principle": "透明可解釋",
            "title": "編碼",
            "eng_name": "Encoding",
            "eng_abbr": "-",
            "def": "將類別資料（如顏色、廠牌）轉換為機器可理解的數值格式。",
            "key_goal": "標籤數值化",
            "key_principle": "類別轉向量",
            "key_purpose": "讓非數值特徵進入數學模型運算。",
            "common_apps": "將車輛顏色轉為 One-hot 向量。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 將車輛顏色轉為 One-hot 向量。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "數據採樣",
        "topics": [
          {
            "id": "530",
            "subject": "中科二",
            "category": "數據採樣",
            "principle": "公平性",
            "title": "分層採樣",
            "eng_name": "Stratified Sampling",
            "eng_abbr": "-",
            "def": "確保抽取的子集中各類別的比例與原始資料集完全相同。",
            "key_goal": "保持類別比例一致",
            "key_principle": "按比例抽樣",
            "key_purpose": "避免在不平衡數據中忽略少數類別。",
            "common_apps": "預測稀有疾病時的數據抽樣。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 預測稀有疾病時的數據抽樣。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "商務分析",
        "topics": [
          {
            "id": "574",
            "subject": "中科二",
            "category": "商務分析",
            "principle": "透明可解釋",
            "title": "產品行為分析",
            "eng_name": "Product Behavior Analysis",
            "eng_abbr": "-",
            "def": "透過追蹤用戶與產品互動的數據，分析產品功能的受歡迎程度與問題。",
            "key_goal": "優化產品設計",
            "key_principle": "數據挖掘與序列分析",
            "key_purpose": "根據數據反饋迭代產品特徵。",
            "common_apps": "APP 功能點擊流分析。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 APP 功能點擊流分析。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "575",
            "subject": "中科二",
            "category": "商務分析",
            "principle": "隱私保護",
            "title": "客戶行為追蹤",
            "eng_name": "Customer Behavior Tracking",
            "eng_abbr": "-",
            "def": "在實體或數位空間紀錄客戶的瀏覽、停留與購買路徑。",
            "key_goal": "精準行銷與推薦",
            "key_principle": "跨渠道數據標記",
            "key_purpose": "建立用戶畫像，提升轉化率。",
            "common_apps": "零售店內動線分析。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 零售店內動線分析。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "知名工具與平台",
        "topics": [
          {
            "id": "610",
            "subject": "中科二",
            "category": "知名工具與平台",
            "principle": "責任與問責\n\n安全性",
            "title": "自主代理",
            "eng_name": "Autonomous Agent",
            "eng_abbr": "-",
            "def": "一種能根據預設目標，自主拆解任務、調用外部工具並進行自我修正，最終完成任務的 AI 系統。",
            "key_goal": "在無需人類介入下完成複雜目標",
            "key_principle": "感知 (Perceive) → 思考 (Plan) → 行動 (Action) 的閉環系統",
            "key_purpose": "自動執行研究、自主編碼、自動化供應鏈管理",
            "common_apps": "AutoGPT 執行市場分析\n\n智能家居自動節能優化",
            "scenarios": {
              "weather": "災害監測：自主代理持續監控氣象數據並自動發布預警",
              "agri": "智慧耕作：自主代理自動監控作物狀態並執行灌溉施肥",
              "traffic": "交通管理：自主代理自動調控交通號誌優化路口流量",
              "industry": "製程優化：自主代理自動監控產線並調整製程參數",
              "finance": "智慧醫療：自主代理自動分析病患數據並建議治療方案",
              "life": "智慧生活：AI 個人助理自主安排行程與處理郵件",
              "fire": "智慧消防：自主代理自動監控火警感測器並調度消防資源"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在無需人類介入下完成複雜目標下，傳統方案難以處理變數過多的情境，而自主代理則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "系統架構優化",
        "topics": [
          {
            "id": "611",
            "subject": "中科二",
            "category": "系統架構優化",
            "principle": "隱私保護\n\n互通性",
            "title": "代理對代理",
            "eng_name": "Agentic To Agentic",
            "eng_abbr": "A2A",
            "def": "指不同 AI 代理之間直接進行資訊交換、任務委託或資源協商的互動模式，無需人類作為中介。",
            "key_goal": "實現不同 AI 代理之間的協作與通訊",
            "key_principle": "基於標準協議 (如 JSON-RPC) 的代理間協商與交易",
            "key_purpose": "多代理協作 (Multi-Agent)、跨平台自動化、AI 經濟系統",
            "common_apps": "AI 旅遊代理與 AI 飯店代理自動議價訂房\n\n跨公司 AI 法律審查對接",
            "scenarios": {
              "weather": "災害監測：多個氣象 AI 代理協作進行跨區域聯合預警",
              "agri": "智慧耕作：農場多個 AI 代理協作進行全流程智慧管理",
              "traffic": "交通管理：多個交通 AI 代理協作優化區域交通網路",
              "industry": "製程優化：多個產線 AI 代理協作實現跨廠區製程優化",
              "finance": "智慧醫療：多個醫療 AI 代理協作進行跨科會診輔助",
              "life": "智慧零售：多個零售 AI 代理協作優化供應鏈與庫存",
              "fire": "智慧消防：多個消防 AI 代理協作進行跨轄區聯合救災"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在不同 AI 代理之間的協作與通訊下，傳統方案難以處理變數過多的情境，而代理對代理則能透過多維數據提取深層規律。"
          }
        ]
      }
    ]
  },
  {
    "title": "初科一  中科三",
    "sub_units": [
      {
        "title": "特徵工程",
        "topics": [
          {
            "id": "39",
            "subject": "初科一  中科三",
            "category": "特徵工程",
            "principle": "透明與可解釋",
            "title": "主成分分析",
            "eng_name": "Principal Component Analysis",
            "eng_abbr": "PCA",
            "def": "透過線性變換將高維數據投射至低維空間並保留最大變異量 。",
            "key_goal": "資料降維",
            "key_principle": "線性變換與特徵分解",
            "key_purpose": "降低運算負擔、視覺化",
            "common_apps": "簡化影像處理、縮減問卷題項 。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 簡化影像處理、縮減問卷題項 。 下，傳統方案難以處理變數過多的情境，而 主成分分析 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "機器學習",
        "topics": [
          {
            "id": "42",
            "subject": "初科一  中科三",
            "category": "機器學習",
            "principle": "永續發展與福祉",
            "title": "監督式學習",
            "eng_name": "Supervised Learning",
            "eng_abbr": "-",
            "def": "利用含有「標籤 (Label)」的訓練資料來訓練模型，使其能預測未知資料。",
            "key_goal": "建立標記映射",
            "key_principle": "標籤驅動學習",
            "key_purpose": "分類與迴歸任務",
            "common_apps": "垃圾郵件偵測、房價預測。",
            "scenarios": {
              "weather": "氣象預報：有標記歷史氣象數據訓練降雨預測模型",
              "agri": "智慧耕作：標記病害影像訓練的辨識模型；畜牧：有標記生理數據訓練健康預測",
              "traffic": "智慧交通：標記交通違規影像訓練偵測模型",
              "industry": "品質檢測：標記瑕疵影像訓練AOI分類器",
              "finance": "金融科技：標記詐欺交易訓練風險模型；智慧醫療：標記病理影像訓練診斷模型",
              "life": "智慧零售：標記商品影像訓練識別模型；客服：意圖分類模型訓練",
              "fire": "智慧消防：標記火焰/煙霧影像訓練偵測模型"
            },
            "detail_explain": "正確答案是 (A)。機器學習就像考試，如果考卷 99 題都是 A，模型會發現全部寫 A 就能拿 99 分，這就會產生對多數類的偏誤，這是在處理資料時考官非常在意的品質問題。"
          },
          {
            "id": "43",
            "subject": "初科一  中科三",
            "category": "機器學習",
            "principle": "透明與可解釋",
            "title": "非監督式學習",
            "eng_name": "Unsupervised Learning",
            "eng_abbr": "-",
            "def": "處理不含標籤的資料，由模型自行尋找數據中的隱藏模式或結構。",
            "key_goal": "發現數據結構",
            "key_principle": "特徵分佈聚類",
            "key_purpose": "分群與降維",
            "common_apps": "客群分類、異常交易偵測。",
            "scenarios": {
              "weather": "氣象預報：有標記歷史氣象數據訓練降雨預測模型",
              "agri": "智慧耕作：標記病害影像訓練的辨識模型；畜牧：有標記生理數據訓練健康預測",
              "traffic": "智慧交通：標記交通違規影像訓練偵測模型",
              "industry": "品質檢測：標記瑕疵影像訓練AOI分類器",
              "finance": "金融科技：標記詐欺交易訓練風險模型；智慧醫療：標記病理影像訓練診斷模型",
              "life": "智慧零售：標記商品影像訓練識別模型；客服：意圖分類模型訓練",
              "fire": "智慧消防：標記火焰/煙霧影像訓練偵測模型"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 客群分類、異常交易偵測。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "44",
            "subject": "初科一  中科三",
            "category": "機器學習",
            "principle": "永續發展與福祉",
            "title": "強化學習",
            "eng_name": "Reinforcement Learning",
            "eng_abbr": "RL",
            "def": "代理人在環境中透過行動獲得獎勵或懲罰，進而學習最優策略。",
            "key_goal": "獲得最大累積獎勵",
            "key_principle": "試錯與回饋機制",
            "key_purpose": "序列決策優化",
            "common_apps": "自動駕駛控制、AlphaGo 棋藝。",
            "scenarios": {
              "weather": "環境監控：氣象感測站最優部署策略學習",
              "agri": "智慧耕作：無人機施肥/灌溉最優決策學習",
              "traffic": "智慧交通：動態紅綠燈排程最優化；自駕公車路徑決策學習；配送路徑實時優化",
              "industry": "製程優化：排程任務分配強化學習；機械手臂操作策略自動優化",
              "finance": "金融科技：量化交易策略強化學習優化",
              "life": "智慧生活：個人化推薦動態策略強化學習",
              "fire": "智慧消防：救災機器人路徑規劃強化學習"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 自動駕駛控制、AlphaGo 棋藝。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "46",
            "subject": "初科一  中科三",
            "category": "機器學習",
            "principle": "公平性",
            "title": "分類",
            "eng_name": "Classification",
            "eng_abbr": "-",
            "def": "預測目標屬於哪一個特定類別（如：是/否、貓/狗）。",
            "key_goal": "預測離散類別",
            "key_principle": "邊界判定邏輯",
            "key_purpose": "決策分類",
            "common_apps": "信用核貸審核、疾病診斷。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 信用核貸審核、疾病診斷。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "47",
            "subject": "初科一  中科三",
            "category": "機器學習",
            "principle": "透明與可解釋",
            "title": "迴歸",
            "eng_name": "Regression",
            "eng_abbr": "-",
            "def": "建立自變數與因變數之間的關係，用以預測連續性的目標值。",
            "key_goal": "預測連續數值",
            "key_principle": "函數擬合",
            "key_purpose": "數值預測",
            "common_apps": "股市預測、氣溫變化估計。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 股市預測、氣溫變化估計。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "48",
            "subject": "初科一  中科三",
            "category": "機器學習",
            "principle": "透明與可解釋",
            "title": "分群",
            "eng_name": "Clustering",
            "eng_abbr": "-",
            "def": "將相似的數據點歸於同一組，且組間差異極大化的非監督技術。",
            "key_goal": "相似性分類",
            "key_principle": "距離度量與聚合",
            "key_purpose": "探索數據特徵",
            "common_apps": "市場區隔分析、主題模型建構。",
            "scenarios": {
              "weather": "環境監控：氣象站數據自動分群，識別異常氣候模式",
              "agri": "精準養殖：魚群行為無標記分群辨識異常群體",
              "traffic": "智慧交通：車流模式無標記分群分析；物流路線分群優化",
              "industry": "預測性維護：設備感測數據自動分群辨識異常型態",
              "finance": "金融科技：異常交易模式分群偵測；醫療：病患表型分群輔助個案分析",
              "life": "智慧零售：顧客行為分群（RFM分析）；推薦系統用戶聚類",
              "fire": "公共安全：人流異常聚集模式分群偵測"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 市場區隔分析、主題模型建構。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "488",
            "subject": "初科一  中科三",
            "category": "機器學習",
            "principle": "公平性",
            "title": "K-近鄰演算法",
            "eng_name": "K-Nearest Neighbors",
            "eng_abbr": "KNN",
            "def": "根據鄰近樣本的多數類別來決定新樣本類別。",
            "key_goal": "相似性分類",
            "key_principle": "歐式距離計算",
            "key_purpose": "基礎分類與迴歸任務。",
            "common_apps": "電影推薦相似系統。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 電影推薦相似系統。 下，傳統方案難以處理變數過多的情境，而 K-近鄰演算法 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "模型指標",
        "topics": [
          {
            "id": "58",
            "subject": "初科一  中科三",
            "category": "模型指標",
            "principle": "問責",
            "title": "準確度",
            "eng_name": "Accuracy",
            "eng_abbr": "-",
            "def": "模型正確預測的樣本數佔總樣本數的比例。",
            "key_goal": "衡量整體對錯",
            "key_principle": "正確預測比例",
            "key_purpose": "基本效能衡量",
            "common_apps": "一般均衡數據的分類評估。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 一般均衡數據的分類評估。 下，傳統方案難以處理變數過多的情境，而 準確度 則能透過多維數據提取深層規律。"
          },
          {
            "id": "59",
            "subject": "初科一  中科三",
            "category": "模型指標",
            "principle": "問責",
            "title": "精確率",
            "eng_name": "Precision",
            "eng_abbr": "-",
            "def": "在所有預測為正類的樣本中，實際也為正類的比例。",
            "key_goal": "衡量預測準度",
            "key_principle": "預測為正且正確",
            "key_purpose": "減少偽陽性風險",
            "common_apps": "癌症篩檢預測正確率。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 癌症篩檢預測正確率。 下，傳統方案難以處理變數過多的情境，而 精確率 則能透過多維數據提取深層規律。"
          },
          {
            "id": "60",
            "subject": "初科一  中科三",
            "category": "模型指標",
            "principle": "問責",
            "title": "召回率",
            "eng_name": "Recall",
            "eng_abbr": "-",
            "def": "在所有實際為正類的樣本中，模型正確找出正類的比例。",
            "key_goal": "衡量捕捉能力",
            "key_principle": "實際為正且預測",
            "key_purpose": "減少漏報風險",
            "common_apps": "信用卡詐騙偵測（不能漏抓）。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "金融科技：信用卡盜刷風險即時偵測、異常交易攔截（核心場景）",
              "life": "智慧零售：電商平台異常退款/刷卡詐欺偵測",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 信用卡詐騙偵測（不能漏抓）。 下，傳統方案難以處理變數過多的情境，而 召回率 則能透過多維數據提取深層規律。"
          },
          {
            "id": "61",
            "subject": "初科一  中科三",
            "category": "模型指標",
            "principle": "問責",
            "title": "F1 分數",
            "eng_name": "F1-Score",
            "eng_abbr": "-",
            "def": "精確率與召回率的調和平均值，適合評估不平衡數據。",
            "key_goal": "權衡精準與召回",
            "key_principle": "調和平均數",
            "key_purpose": "綜合效能評價",
            "common_apps": "指標權衡時的單一分數參考。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 指標權衡時的單一分數參考。 下，傳統方案難以處理變數過多的情境，而 F1 分數 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "AI 基礎概論\n\n機器學習原理",
        "topics": [
          {
            "id": "461",
            "subject": "初科一  中科三",
            "category": "AI 基礎概論\n\n機器學習原理",
            "principle": "問責",
            "title": "機器學習",
            "eng_name": "Machine Learning",
            "eng_abbr": "ML",
            "def": "AI 的分支，強調不需顯式編程，而是透過經驗改進表現 。",
            "key_goal": "數據驅動的自主優化",
            "key_principle": "透過演算法從歷史數據中學習規律並建立預測模型。",
            "key_purpose": "解決傳統規則引擎難以處理的複雜預測問題。",
            "common_apps": "信用卡交易詐欺偵測、工廠設備的預測性維修。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "金融科技：信用卡盜刷風險即時偵測、異常交易攔截（核心場景）",
              "life": "智慧零售：電商平台異常退款/刷卡詐欺偵測",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 信用卡交易詐欺偵測、工廠設備的預測性維修。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "AI 治理",
        "topics": [
          {
            "id": "566",
            "subject": "初科一  中科三",
            "category": "AI 治理",
            "principle": "隱私保護\n\n問責性",
            "title": "一般資料保護規範",
            "eng_name": "General Data Protection Regulation",
            "eng_abbr": "GDPR",
            "def": "歐盟於 2018 年實施的全球最嚴格隱私法，規範個資蒐集、處理及跨境傳輸。",
            "key_goal": "保障個人資料主權",
            "key_principle": "被遺忘權、資料最小化",
            "key_purpose": "確保 AI 模型訓練數據來源合法，並賦予用戶撤回數據的權利。",
            "common_apps": "跨國電商平台處理歐洲客戶行為數據。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 跨國電商平台處理歐洲客戶行為數據。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "567",
            "subject": "初科一  中科三",
            "category": "AI 治理",
            "principle": "安全與問責",
            "title": "醫療保險流通與責任法案",
            "eng_name": "Health Insurance Portability and Accountability Act",
            "eng_abbr": "HIPAA",
            "def": "美國針對受保護健康資訊 (PHI) 所制定的標準，強制要求數據加密與存取控管。",
            "key_goal": "保護醫療隱私與安全",
            "key_principle": "實體、技術與行政規範",
            "key_purpose": "規範 AI 在處理病患病歷、醫學影像時的隱私保護標準。",
            "common_apps": "開發輔助診斷 AI 時的醫療影像數據去識別化。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 開發輔助診斷 AI 時的醫療影像數據去識別化。 下，傳統方案難以處理變數過多的情境，而 醫療保險流通與責任法案 則能透過多維數據提取深層規律。"
          }
        ]
      }
    ]
  },
  {
    "title": "初科二  中科三",
    "sub_units": [
      {
        "title": "模型優化",
        "topics": [
          {
            "id": "153",
            "subject": "初科二  中科三",
            "category": "模型優化",
            "principle": "永續發展與福祉",
            "title": "微調",
            "eng_name": "Fine-tuning",
            "eng_abbr": "-",
            "def": "在特定數據集上對預訓練模型進行二次訓練，調整其參數以適應特定任務。",
            "key_goal": "領域知識專業化",
            "key_principle": "參數進階訓練",
            "key_purpose": "開發專業領域模型",
            "common_apps": "訓練一個專精於台灣醫療法規的法律 AI。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。注意題目的關鍵字是「口吻」與「格式」。RAG 擅長提供「正確事實」，但要改變 AI 的「講話方式」或「思維結構」，微調 (A) 是最根本的做法。"
          }
        ]
      },
      {
        "title": "生成式 AI 優化\n\n模型微調",
        "topics": [
          {
            "id": "616",
            "subject": "初科二  中科三",
            "category": "生成式 AI 優化\n\n模型微調",
            "principle": "透明與可解釋\n\n安全與可靠",
            "title": "指令微調",
            "eng_name": "Instruction Tuning",
            "eng_abbr": "-",
            "def": "透過特定格式的任務指令訓練 LLM，使其能理解並準確執行各種複雜任務（如摘要、翻譯）。",
            "key_goal": "強化模型遵循人類指令的能力。",
            "key_principle": "在預訓練模型基礎上，使用「指令-回答」對（Prompt-Response pairs）進行有監督微調（SFT）。",
            "key_purpose": "解決模型「答非所問」的問題，提升模型在特定任務上的實用性。",
            "common_apps": "將通用的 Llama 模型微調成專門處理台灣法律公文格式的法律助手。",
            "scenarios": {
              "weather": "災害監測：微調防災 AI 使其更精準遵循災害分級指令",
              "agri": "智慧耕作：微調農業 AI 使其更精準遵循病蟲害診斷指令",
              "traffic": "交通管理：微調交通 AI 使其更精準遵循號誌控制指令",
              "industry": "製程優化：微調產線 AI 使其更精準遵循品質控制指令",
              "finance": "智慧醫療：微調醫療 AI 使其更精準遵循臨床診斷指令",
              "life": "智慧生活：微調客服 AI 使其更精準遵循服務流程指令",
              "fire": "智慧消防：微調消防 AI 使其更精準遵循救災部署指令"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在強化模型遵循人類指令的能力下，傳統方案難以處理變數過多的情境，而指令微調則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "生成式 AI 模型",
        "topics": [
          {
            "id": "619",
            "subject": "初科二  中科三",
            "category": "生成式 AI 模型",
            "principle": "永續發展與福祉",
            "title": "Mistral 人工智慧",
            "eng_name": "Mistral AI",
            "eng_abbr": "-",
            "def": "法國 AI 新創公司開發的模型系列，以高效能的小參數模型著稱。",
            "key_goal": "開發高效能、低延遲的開源與商業模型。",
            "key_principle": "採用「混合專家模型（MoE）」等創新架構，提升參數利用效率與推論速度。",
            "key_purpose": "適合部署於資源有限的環境，或作為企業級應用的輕量化選擇。",
            "common_apps": "銀行在本地端伺服器部署 Mistral 模型，處理機密的客戶對答。",
            "scenarios": {
              "weather": "災害監測：使用 Mistral 模型快速分析多語言災情報告",
              "agri": "智慧耕作：使用 Mistral 模型建構低延遲農業諮詢系統",
              "traffic": "交通管理：使用 Mistral 模型建構即時交通資訊查詢系統",
              "industry": "製程優化：使用 Mistral 模型建構低延遲製程異常診斷",
              "finance": "智慧醫療：使用 Mistral 模型建構低延遲臨床決策輔助",
              "life": "智慧生活：使用 Mistral 模型建構高效能本地化 AI 助手",
              "fire": "公共安全：使用 Mistral 模型建構低延遲安全威脅分析"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在高效能低延遲模型應用等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      },
      {
        "title": "RAG 與長文本處理",
        "topics": [
          {
            "id": "620",
            "subject": "初科二  中科三",
            "category": "RAG 與長文本處理",
            "principle": "透明與可解釋",
            "title": "指令式-R",
            "eng_name": "Command-R",
            "eng_abbr": "-",
            "def": "Cohere 公司開發，專為企業級 RAG 任務優化的模型，強調引用來源的準確性。",
            "key_goal": "優化檢索增強生成（RAG）與工具調用。",
            "key_principle": "針對長上下文（Long Context）優化，特別強化對檢索結果的整合與精準引用能力。",
            "key_purpose": "減少幻覺，確保模型輸出的每一個觀點都能追溯到原始文件。",
            "common_apps": "金融分析師利用 Command-R 分析千頁財報，並精確標註數據來源。",
            "scenarios": {
              "weather": "災害監測：RAG 結合即時氣象資料庫精準回覆防災問題",
              "agri": "智慧耕作：RAG 結合農業知識庫精準回覆病蟲害防治",
              "traffic": "交通管理：RAG 結合交通法規庫精準回覆駕駛問題",
              "industry": "製程優化：RAG 結合設備手冊庫精準回覆故障排除",
              "finance": "智慧醫療：RAG 結合醫學文獻庫精準回覆臨床查詢",
              "life": "智慧零售：RAG 結合商品知識庫精準回覆客服問題",
              "fire": "公共安全：RAG 結合法律條文庫精準回覆法規諮詢"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在優化 RAG 與工具調用下，傳統方案難以處理變數過多的情境，而指令式-R 則能透過多維數據提取深層規律。"
          }
        ]
      }
    ]
  },
  {
    "title": "中科一  初科二",
    "sub_units": [
      {
        "title": "生成式 AI",
        "topics": [
          {
            "id": "181",
            "subject": "中科一  初科二",
            "category": "生成式 AI",
            "principle": "透明與可解釋",
            "title": "-",
            "eng_name": "NotebookLM",
            "eng_abbr": "-",
            "def": "Google 開發的 AI 筆記助手，僅針對使用者提供的特定資料源（如 PDF、網頁）進行分析與回應。",
            "key_goal": "精準文獻研究",
            "key_principle": "檢索增強生成 (RAG)",
            "key_purpose": "提升特定領域的研究效率與準確性。",
            "common_apps": "學生上傳整學期的講義，要求 AI 生成考前重點摘要與模擬試題。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 學生上傳整學期的講義，要求 AI 生成考前重點摘要與模擬試題。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          },
          {
            "id": "478",
            "subject": "中科一  初科二",
            "category": "生成式 AI",
            "principle": "透明可解釋",
            "title": "擴散模型",
            "eng_name": "Diffusion Models",
            "eng_abbr": "-",
            "def": "透過模擬數據擴散與反向去噪來生成高品質圖像。",
            "key_goal": "影像合成",
            "key_principle": "逆向去噪過程",
            "key_purpose": "高品質影像生成與修復。",
            "common_apps": "AI 藝術創作工具。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 AI 藝術創作工具。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          },
          {
            "id": "481",
            "subject": "中科一  初科二",
            "category": "生成式 AI",
            "principle": "透明可解釋",
            "title": "影像生成與合成",
            "eng_name": "Image Generation & Synthesis",
            "eng_abbr": "-",
            "def": "根據學到的特徵分佈，合成出不存在的全新影像。",
            "key_goal": "創造虛擬內容",
            "key_principle": "概率分佈採樣",
            "key_purpose": "數位內容創作與模擬。",
            "common_apps": "遊戲場景自動生成。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 遊戲場景自動生成。 下，傳統方案難以處理變數過多的情境，而 影像生成與合成 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "雲端平台",
        "topics": [
          {
            "id": "196",
            "subject": "中科一  初科二",
            "category": "雲端平台",
            "principle": "永續發展與福祉",
            "title": "-",
            "eng_name": "OpenAI Application Programming Interface",
            "eng_abbr": "OpenAI API",
            "def": "OpenAI 提供的雲端接口，允許開發者透過程式碼直接存取 GPT-4o、DALL-E 等模型的能力。",
            "key_goal": "降低開發門檻",
            "key_principle": "RESTful API 呼叫",
            "key_purpose": "讓企業無需自建算力即可擁有頂尖 AI 功能。",
            "common_apps": "企業將 OpenAI API 整合至官方 App 中，提供智慧客服功能。",
            "scenarios": {
              "weather": "",
              "agri": "智慧耕作：農民用藥/種植問題語音客服機器人",
              "traffic": "智慧交通：大眾運輸24H AI客服（班次/票務查詢）",
              "industry": "製程優化：設備操作問題AI即時回覆",
              "finance": "金融科技：24H智能理財/帳務客服；智慧醫療：預約/衛教問答機器人",
              "life": "智能客服：24H語音機器人、生成式AI郵件回覆（核心場景）",
              "fire": "公共安全：非緊急情況AI問答分流（釋放人工接線員）"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 企業將 OpenAI API 整合至官方 App 中，提供智慧客服功能。 下，傳統方案難以處理變數過多的情境，而 - 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "多模態",
        "topics": [
          {
            "id": "475",
            "subject": "中科一  初科二",
            "category": "多模態",
            "principle": "永續發展",
            "title": "影像描述生成",
            "eng_name": "Image Captioning",
            "eng_abbr": "-",
            "def": "自動根據影像內容生成一段描述性文字的技術。",
            "key_goal": "影像轉文字",
            "key_principle": "視覺與語言模型融合",
            "key_purpose": "內容自動標註、輔助功能。",
            "common_apps": "社交媒體照片自動下標。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 社交媒體照片自動下標。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      }
    ]
  },
  {
    "title": "初科一  初科二",
    "sub_units": [
      {
        "title": "AI 基礎概念\n\n生成式AI工具",
        "topics": [
          {
            "id": "459",
            "subject": "初科一  初科二",
            "category": "AI 基礎概念\n\n生成式AI工具",
            "principle": "永續發展與福祉",
            "title": "對話機器人",
            "eng_name": "Chatbot",
            "eng_abbr": "-",
            "def": "能夠透過文字或語音與人類進行自然語言互動的軟體程式 。",
            "key_goal": "模擬真人對話互動",
            "key_principle": "結合 NLP、NLU 與 NLG 技術的對談系統架構。",
            "key_purpose": "提升企業服務效率，提供 24/7 的即時支援。",
            "common_apps": "銀行 App 的智慧理財顧問，回答帳戶餘額或匯率查詢。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "",
              "life": "",
              "fire": ""
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 銀行 App 的智慧理財顧問，回答帳戶餘額或匯率查詢。 下，傳統方案難以處理變數過多的情境，而 對話機器人 則能透過多維數據提取深層規律。"
          }
        ]
      }
    ]
  },
  {
    "title": "中科一  中科二",
    "sub_units": [
      {
        "title": "影像標註",
        "topics": [
          {
            "id": "503",
            "subject": "中科一  中科二",
            "category": "影像標註",
            "principle": "安全與問責",
            "title": "標註工作室",
            "eng_name": "Label Studio",
            "eng_abbr": "-",
            "def": "一款支援影像、文本、音訊等多種類型數據標註的開源工具。",
            "key_goal": "多模態標註整合",
            "key_principle": "開源多功能標註框架",
            "key_purpose": "建立各類 AI 模型所需的監督學習標籤。",
            "common_apps": "醫療影像與診斷報告對照標註。",
            "scenarios": {
              "weather": "",
              "agri": "",
              "traffic": "",
              "industry": "",
              "finance": "智慧醫療：醫學影像輔助判讀（X光/MRI）、新藥開發篩選、個人化健康管家（核心場景）",
              "life": "智慧生活：健康管家APP個人化衛教建議",
              "fire": "消防：救災傷患傷勢快速評估輔助"
            },
            "detail_explain": "正確答案是 (A)。AI 的核心在於從資料中「學習」而不是「背公式」。在 醫療影像與診斷報告對照標註。 下，傳統方案難以處理變數過多的情境，而 標註工作室 則能透過多維數據提取深層規律。"
          }
        ]
      },
      {
        "title": "影像處理",
        "topics": [
          {
            "id": "523",
            "subject": "中科一  中科二",
            "category": "影像處理",
            "principle": "永續發展",
            "title": "灰階轉換",
            "eng_name": "Grayscale Conversion",
            "eng_abbr": "-",
            "def": "將三通道的 RGB 影像轉換為單通道灰階影像的過程，保留亮度資訊。",
            "key_goal": "降低維度與運算量",
            "key_principle": "加權平均法 (Luminance)",
            "key_purpose": "減少模型參數量，加速訓練與推論。",
            "common_apps": "車牌號碼辨識、文件 OCR 掃描。",
            "scenarios": {
              "weather": "環境監控：氣象站儀表板數字自動讀取數位化",
              "agri": "精準養殖：水質感測器讀值自動記錄",
              "traffic": "智慧交通：車牌自動辨識（停車計費/違規舉牌）；物流：包裹條碼讀取",
              "industry": "品質檢測：產品序號/批號自動讀取紀錄",
              "finance": "金融科技：票據/合約文字自動擷取；智慧醫療：病歷表格數位化",
              "life": "智慧零售：電子發票/收據文字辨識",
              "fire": "公共安全：車牌辨識輔助警方追蹤"
            },
            "detail_explain": "正確答案是 (A)。專業考官看重的是「資料品質」與「泛化能力」。在 車牌號碼辨識、文件 OCR 掃描。 等場景中，若資料原始分佈與模型學習到的分佈不符，再強的技術也救不了偏差的結果。"
          }
        ]
      }
    ]
  }
];