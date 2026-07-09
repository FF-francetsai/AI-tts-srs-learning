// daily_pool.js — 自動產生（tools/build_daily_pool_js.py），勿手改；來源 content/daily_pool_stage*.json
window.DAILY_TERM_POOL = [
 {
  "zh": "人工智慧",
  "en": "Artificial Intelligence",
  "def": "賦予機器學習、推理與決策能力的技術總稱",
  "stage": 0
 },
 {
  "zh": "機器學習",
  "en": "Machine Learning",
  "def": "AI 的分支，強調不需顯式編程，而是透過經驗改進表現",
  "stage": 0
 },
 {
  "zh": "大型語言模型",
  "en": "Large Language Model",
  "def": "基於海量文本訓練，具備自然語言理解與生成能力的大型模型",
  "stage": 0
 },
 {
  "zh": "變壓器架構",
  "en": "Transformer",
  "def": "基於注意力機制拋棄循環結構，可並行處理序列數據的現代架構",
  "stage": 0
 },
 {
  "zh": "提示工程",
  "en": "Prompt Engineering",
  "def": "透過精確設計輸入提示來引導 LLM 產生高品質輸出的過程",
  "stage": 0
 },
 {
  "zh": "監督式學習",
  "en": "Supervised Learning",
  "def": "提供標註答案的訓練資料讓模型學會對應關係。",
  "stage": 1
 },
 {
  "zh": "非監督式學習",
  "en": "Unsupervised Learning",
  "def": "不給標籤,讓模型自行從資料中找出隱藏結構。",
  "stage": 1
 },
 {
  "zh": "強化學習",
  "en": "Reinforcement Learning",
  "def": "透過試錯與獎勵機制,讓代理人學會最佳行動策略。",
  "stage": 1
 },
 {
  "zh": "分類",
  "en": "Classification",
  "def": "將資料分到預先定義的類別中,常見的監督式任務。",
  "stage": 1
 },
 {
  "zh": "迴歸",
  "en": "Regression",
  "def": "預測連續數值,例如房價或溫度等數值型輸出。",
  "stage": 1
 },
 {
  "zh": "分群",
  "en": "Clustering",
  "def": "把相似的資料自動聚成幾群,不需要事先標籤。",
  "stage": 1
 },
 {
  "zh": "準確度",
  "en": "Accuracy",
  "def": "模型預測正確的比例,是最直覺的評估指標。",
  "stage": 1
 },
 {
  "zh": "精確率",
  "en": "Precision",
  "def": "預測為正當中真的為正的比例,衡量查得準不準。",
  "stage": 1
 },
 {
  "zh": "召回率",
  "en": "Recall",
  "def": "真正為正的樣本被成功找出的比例,衡量覆蓋率。",
  "stage": 1
 },
 {
  "zh": "F1 分數",
  "en": "F1-Score",
  "def": "精確率與召回率的調和平均,平衡兩者的綜合指標。",
  "stage": 1
 },
 {
  "zh": "基座模型",
  "en": "Foundation Model",
  "def": "經大規模預訓練,可作為多種下游任務基礎的通用模型。",
  "stage": 1
 },
 {
  "zh": "自注意力機制",
  "en": "Self-Attention",
  "def": "讓模型自行決定句子中哪些詞彼此相關的重要機制。",
  "stage": 1
 },
 {
  "zh": "卷積神經網路",
  "en": "Convolutional Neural Network",
  "def": "擅長處理影像的深度神經網路,能自動擷取空間特徵。",
  "stage": 1
 },
 {
  "zh": "思維鏈",
  "en": "Chain-of-Thought",
  "def": "引導模型逐步推理的提示技巧,可提升複雜題正確率。",
  "stage": 1
 },
 {
  "zh": "零樣本學習",
  "en": "Zero-shot Learning",
  "def": "不給任何範例,直接要求模型完成從未看過的任務。",
  "stage": 1
 },
 {
  "zh": "少樣本提示",
  "en": "Few-shot Prompting",
  "def": "在提示中提供少量範例,引導模型學會任務的格式。",
  "stage": 1
 },
 {
  "zh": "檢索增強生成",
  "en": "Retrieval-Augmented Generation",
  "def": "先從知識庫找資料再交給模型回答,可減少幻覺。",
  "stage": 1
 },
 {
  "zh": "幻覺",
  "en": "Hallucination",
  "def": "模型自信地編造看似合理但其實錯誤內容的現象。",
  "stage": 1
 },
 {
  "zh": "上下文視窗",
  "en": "Context Window",
  "def": "模型單次對話能容納的最大文字長度上限。",
  "stage": 1
 },
 {
  "zh": "標記",
  "en": "Token",
  "def": "模型處理文字的最小單位,可能是字、詞或子詞片段。",
  "stage": 1
 },
 {
  "zh": "ChatGPT",
  "en": "ChatGPT",
  "def": "OpenAI 推出的對話式大型語言模型,帶動生成式 AI 風潮。",
  "stage": 1
 },
 {
  "zh": "Claude",
  "en": "Claude",
  "def": "Anthropic 推出的對話式AI助手,以安全與長文本見長。",
  "stage": 1
 },
 {
  "zh": "Gemini",
  "en": "Gemini",
  "def": "Google 推出的原生多模態大型語言模型系列產品。",
  "stage": 1
 },
 {
  "zh": "Stable Diffusion",
  "en": "Stable Diffusion",
  "def": "開源的文字生圖模型,大幅降低AI繪圖門檻。",
  "stage": 1
 },
 {
  "zh": "微調",
  "en": "Fine-tuning",
  "def": "在已訓練好的模型上,用自己的資料再訓練以適應任務。",
  "stage": 1
 },
 {
  "zh": "歐盟人工智慧法案",
  "en": "EU AI Act",
  "def": "全球首部AI專法，規範AI系統風險分級",
  "stage": 2
 },
 {
  "zh": "監理沙盒",
  "en": "Regulatory Sandbox",
  "def": "受監管環境內測試創新AI產品",
  "stage": 2
 },
 {
  "zh": "人工智慧治理",
  "en": "AI Governance",
  "def": "企業管理AI倫理、風險與合規框架",
  "stage": 2
 },
 {
  "zh": "AI 專案經理",
  "en": "AI Project Manager",
  "def": "統籌AI專案時程、團隊與交付成果",
  "stage": 2
 },
 {
  "zh": "範圍定義",
  "en": "Scope Definition",
  "def": "明確專案邊界、功能與非目標項目",
  "stage": 2
 },
 {
  "zh": "利害關係人分析",
  "en": "Stakeholder Analysis",
  "def": "識別並分類專案相關人員與影響",
  "stage": 2
 },
 {
  "zh": "可行性評估",
  "en": "Feasibility Study",
  "def": "分析技術資料與組織面執行可能",
  "stage": 2
 },
 {
  "zh": "機器學習營運",
  "en": "Machine Learning Operations",
  "def": "機器學習模型開發部署與維運整合",
  "stage": 2
 },
 {
  "zh": "A/B 測試",
  "en": "A/B Testing",
  "def": "比較兩版本成效以決定採用方案",
  "stage": 2
 },
 {
  "zh": "容器化",
  "en": "Containerization",
  "def": "將應用與相依套件打包成可攜容器",
  "stage": 2
 },
 {
  "zh": "模型壓縮",
  "en": "Model Compression",
  "def": "縮減模型體積以加速推論並降成本",
  "stage": 2
 },
 {
  "zh": "邊緣人工智慧",
  "en": "Edge AI",
  "def": "在終端裝置本地執行AI推論減少延遲",
  "stage": 2
 },
 {
  "zh": "代理人人工智慧",
  "en": "Agentic AI",
  "def": "能自主規劃並執行多步驟任務的AI",
  "stage": 2
 },
 {
  "zh": "多代理人系統",
  "en": "Multi-Agent System",
  "def": "多個AI代理人協作完成複雜任務",
  "stage": 2
 },
 {
  "zh": "模型上下文協定",
  "en": "Model Context Protocol",
  "def": "標準化代理人與工具溝通的協定",
  "stage": 2
 },
 {
  "zh": "函式調用",
  "en": "Function Calling",
  "def": "模型以結構化方式觸發外部工具",
  "stage": 2
 },
 {
  "zh": "向量資料庫",
  "en": "Vector Database",
  "def": "儲存與高效搜尋高維向量嵌入",
  "stage": 2
 },
 {
  "zh": "向量嵌入",
  "en": "Vector Embedding",
  "def": "將文字轉為語意向量以利比對",
  "stage": 2
 },
 {
  "zh": "混合檢索增強生成",
  "en": "Hybrid RAG",
  "def": "結合多種檢索策略的擴增生成架構",
  "stage": 2
 },
 {
  "zh": "預訓練",
  "en": "Pre-training",
  "def": "用大規模資料事先訓練模型基礎能力",
  "stage": 2
 },
 {
  "zh": "指令微調",
  "en": "Instruction Fine-tuning",
  "def": "用指令資料讓模型學會遵循任務",
  "stage": 2
 },
 {
  "zh": "推論延遲",
  "en": "Inference Latency",
  "def": "模型從輸入到輸出所花費的時間",
  "stage": 2
 },
 {
  "zh": "吞吐量",
  "en": "Throughput",
  "def": "系統單位時間可處理的推論請求量",
  "stage": 2
 },
 {
  "zh": "物件偵測",
  "en": "Object Detection",
  "def": "影像中標出物件位置與類別的技術",
  "stage": 2
 },
 {
  "zh": "視覺語言模型",
  "en": "Vision-Language Model",
  "def": "同時理解影像與文字的多模態模型",
  "stage": 2
 },
 {
  "zh": "影子人工智慧",
  "en": "Shadow AI",
  "def": "員工未經核准私下使用的AI工具",
  "stage": 2
 },
 {
  "zh": "主權人工智慧",
  "en": "Sovereign AI",
  "def": "由國家自主研發掌控的AI技術",
  "stage": 2
 },
 {
  "zh": "具身智能",
  "en": "Embodied AI",
  "def": "AI透過機器人等實體與世界互動",
  "stage": 2
 },
 {
  "zh": "幻覺偵測器",
  "en": "Hallucination Detector",
  "def": "辨識模型生成內容虛構錯誤的機制",
  "stage": 2
 },
 {
  "zh": "永續人工智慧",
  "en": "Sustainable AI",
  "def": "兼顧環保節能與社會責任的AI發展",
  "stage": 2
 },
 {
  "zh": "負責任的人工智慧",
  "en": "Responsible AI",
  "def": "在AI開發與部署中兼顧倫理、社會責任的原則",
  "stage": 3
 },
 {
  "zh": "差分隱私",
  "en": "Differential Privacy",
  "def": "透過加入隨機雜訊保護個資的隱私技術",
  "stage": 3
 },
 {
  "zh": "聯邦學習",
  "en": "Federated Learning",
  "def": "不集中原始資料、跨裝置協作訓練模型的隱私機制",
  "stage": 3
 },
 {
  "zh": "資料科學",
  "en": "Data Science",
  "def": "結合統計、領域知識與程式設計萃取資料價值的學科",
  "stage": 3
 },
 {
  "zh": "擷取轉換載入",
  "en": "Extract, Transform, Load",
  "def": "將資料從來源萃取、清洗後載入目標系統的流程",
  "stage": 3
 },
 {
  "zh": "特徵工程",
  "en": "Feature Engineering",
  "def": "將原始資料轉換成模型更易學習的特徵之步驟",
  "stage": 3
 },
 {
  "zh": "決策樹",
  "en": "Decision Tree",
  "def": "以樹狀規則進行分類或迴歸的監督式學習模型",
  "stage": 3
 },
 {
  "zh": "過度擬合",
  "en": "Overfitting",
  "def": "模型過度記憶訓練資料、導致泛化能力下降的現象",
  "stage": 3
 },
 {
  "zh": "交叉驗證",
  "en": "Cross-Validation",
  "def": "將資料切分多輪以穩定評估模型效能的方法",
  "stage": 3
 },
 {
  "zh": "混淆矩陣",
  "en": "Confusion Matrix",
  "def": "以表格呈現分類預測與真實標籤對應情況的工具",
  "stage": 3
 },
 {
  "zh": "梯度下降",
  "en": "Gradient Descent",
  "def": "沿著損失函數負梯度方向逐步更新參數的優化法",
  "stage": 3
 },
 {
  "zh": "反向傳播",
  "en": "Backpropagation",
  "def": "從輸出端回傳誤差以更新神經網路權重的演算法",
  "stage": 3
 },
 {
  "zh": "特徵選擇",
  "en": "Feature Selection",
  "def": "從大量特徵中篩選對模型最有用的子集",
  "stage": 3
 },
 {
  "zh": "夏普利加性解釋",
  "en": "Shapley Additive Explanations",
  "def": "計算每個特徵對模型預測貢獻度的可解釋方法",
  "stage": 3
 },
 {
  "zh": "泛化能力",
  "en": "Generalization",
  "def": "模型對未見過的新資料仍能正確預測的能力",
  "stage": 3
 },
 {
  "zh": "對抗訓練",
  "en": "Adversarial Training",
  "def": "將刻意設計的擾動樣本加入訓練以提升模型穩健性",
  "stage": 3
 },
 {
  "zh": "自我監督學習",
  "en": "Self-supervised Learning",
  "def": "從資料本身產生標籤、減少人工標註的學習方式",
  "stage": 3
 },
 {
  "zh": "資料品質",
  "en": "Data Quality",
  "def": "衡量資料是否符合完整性、一致性與準確性的程度",
  "stage": 3
 },
 {
  "zh": "數據治理",
  "en": "Data Governance",
  "def": "企業對資料資產制定政策、標準與權責的管理框架",
  "stage": 3
 },
 {
  "zh": "性能指標",
  "en": "Performance Metrics",
  "def": "用以量化模型表現的評估值,例如準確率與F1",
  "stage": 3
 },
 {
  "zh": "異常值（離群點）",
  "en": "Outliers",
  "def": "明顯偏離整體分佈、值得進一步檢視的觀測值",
  "stage": 3
 },
 {
  "zh": "特徵重要性",
  "en": "Frature Importance",
  "def": "量化各輸入特徵對模型預測影響程度的方法",
  "stage": 3
 },
 {
  "zh": "異常偵測",
  "en": "Anomaly Detection",
  "def": "從資料中自動找出行為或模式偏離常態的個案",
  "stage": 3
 },
 {
  "zh": "評估指標",
  "en": "Evaluation Metrics",
  "def": "衡量模型表現的量化數值,例如精確率、召回率",
  "stage": 3
 },
 {
  "zh": "護欄機制",
  "en": "Guardrails",
  "def": "限制AI輸出內容、避免有害或不當回應的安全機制",
  "stage": 3
 },
 {
  "zh": "直接偏好優化",
  "en": "Direct Preference Optimization",
  "def": "直接以人類偏好資料微調語言模型的對齊方法",
  "stage": 3
 },
 {
  "zh": "群體相對策略優化",
  "en": "Group Relative Policy Optimization",
  "def": "以群內相對優勢估計優化策略的強化學習演算法",
  "stage": 3
 },
 {
  "zh": "混合專家模型",
  "en": "Mixture of Experts",
  "def": "由多個專家子模型與門控機制組成的稀疏架構",
  "stage": 3
 }
];
