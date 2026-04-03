const fs = require('fs');
const chapters = [
  {
    unit: '初級-科目一：人工智慧基礎概論',
    subUnits: [
      {
        name: '人工智慧概念',
        baseTopics: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Neural Network', 'Turing Test', 'Strong AI', 'Weak AI', 'Symbolic AI', 'Connectionism', 'Expert System', 'Heuristic Search', 'Agent', 'State Space', 'Cognitive Computing']
      },
      {
        name: 'AI 應用領域',
        baseTopics: ['Smart Healthcare', 'Autonomous Driving', 'Smart Manufacturing', 'Smart Home', 'Robotics', 'Recommender System', 'Fraud Detection', 'Chatbot', 'Predictive Maintenance', 'Computer Vision Application', 'Precision Agriculture', 'Smart City']
      }
    ]
  },
  {
    unit: '初級-科目二：人工智慧資料與學習',
    subUnits: [
      {
        name: '資料與特徵工程',
        baseTopics: ['Data Preprocessing', 'Feature Extraction', 'Normalization', 'Missing Value Imputation', 'One-Hot Encoding', 'Feature Selection', 'Outlier Detection', 'Dimensionality Reduction', 'Data Augmentation', 'Label Encoding', 'Data Scaling', 'Imbalanced Data']
      },
      {
        name: '機器學習基礎',
        baseTopics: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Overfitting', 'Underfitting', 'Cross Validation', 'Decision Tree', 'Random Forest', 'Support Vector Machine', 'K-Means Clustering', 'Logistic Regression', 'Linear Regression']
      }
    ]
  },
  {
    unit: '中級-科目一：人工智慧技術應用',
    subUnits: [
      {
        name: '自然語言處理技術',
        baseTopics: ['Tokenization', 'Word Embedding', 'TF-IDF', 'Seq2Seq', 'Attention Mechanism', 'Transformer', 'Named Entity Recognition', 'Sentiment Analysis', 'Machine Translation', 'Text Summarization', 'BERT', 'GPT']
      },
      {
        name: '電腦視覺技術',
        baseTopics: ['Image Classification', 'Object Detection', 'Semantic Segmentation', 'Instance Segmentation', 'CNN', 'YOLO', 'ResNet', 'Feature Pyramid Network', 'Optical Character Recognition', 'Face Recognition', 'Image Generation', 'Vision Transformer']
      },
      {
        name: '生成式 AI 與多模態',
        baseTopics: ['Generative Adversarial Network', 'Variational Autoencoder', 'Diffusion Model', 'Large Language Model', 'Prompt Engineering', 'Multimodal Model', 'Zero-Shot Learning', 'Few-Shot Learning', 'Retrieval-Augmented Generation', 'Text-to-Image', 'Foundational Model', 'Stable Diffusion']
      }
    ]
  },
  {
    unit: '中級-科目二：大數據處理分析',
    subUnits: [
      {
        name: '統計與資料摘要',
        baseTopics: ['Descriptive Statistics', 'Probability Distribution', 'Hypothesis Testing', 'Correlation Coefficient', 'P-Value', 'Confidence Interval', 'Variance', 'Standard Deviation', 'Central Limit Theorem', 'Bayesian Inference']
      },
      {
        name: '大數據處理技術',
        baseTopics: ['Hadoop', 'Spark', 'MapReduce', 'NoSQL', 'Data Warehouse', 'Data Lake', 'ETL', 'Stream Processing', 'Distributed File System', 'Kafka', 'Hive']
      }
    ]
  }
];

// Helper to translate to Chinese conceptually
const cnMap = {
    'Artificial Intelligence': '人工智慧', 'Machine Learning': '機器學習', 'Deep Learning': '深度學習', 'Neural Network': '神經網路', 'Turing Test': '圖靈測試', 'Strong AI': '強人工智慧', 'Weak AI': '弱人工智慧', 'Symbolic AI': '符號AI', 'Connectionism': '連結主義', 'Expert System': '專家系統', 'Heuristic Search': '啟發式搜尋', 'Agent': '代理人', 'State Space': '狀態空間', 'Cognitive Computing': '認知計算',
    'Smart Healthcare': '智慧醫療', 'Autonomous Driving': '自動駕駛', 'Smart Manufacturing': '智慧製造', 'Smart Home': '智慧家庭', 'Robotics': '機器人學', 'Recommender System': '推薦系統', 'Fraud Detection': '詐欺偵測', 'Chatbot': '聊天機器人', 'Predictive Maintenance': '預測性維護', 'Computer Vision Application': '電腦視覺應用', 'Precision Agriculture': '精準農業', 'Smart City': '智慧城市',
    'Data Preprocessing': '資料前處理', 'Feature Extraction': '特徵萃取', 'Normalization': '正規化', 'Missing Value Imputation': '遺失值插補', 'One-Hot Encoding': '獨熱編碼', 'Feature Selection': '特徵選擇', 'Outlier Detection': '異常值偵測', 'Dimensionality Reduction': '降維處理', 'Data Augmentation': '資料擴增', 'Label Encoding': '標籤編碼', 'Data Scaling': '資料縮放', 'Imbalanced Data': '不平衡資料',
    'Supervised Learning': '監督式學習', 'Unsupervised Learning': '非監督式學習', 'Reinforcement Learning': '強化學習', 'Overfitting': '過度擬合', 'Underfitting': '擬合不足', 'Cross Validation': '交叉驗證', 'Decision Tree': '決策樹', 'Random Forest': '隨機森林', 'Support Vector Machine': '支持向量機', 'K-Means Clustering': 'K-Means分群', 'Logistic Regression': '邏輯斯迴歸', 'Linear Regression': '線性迴歸',
    'Tokenization': '分詞處理', 'Word Embedding': '詞嵌入', 'TF-IDF': '詞頻-逆向文件頻率', 'Seq2Seq': '序列到序列', 'Attention Mechanism': '注意力機制', 'Transformer': '變換器模型', 'Named Entity Recognition': '命名實體識別', 'Sentiment Analysis': '情感分析', 'Machine Translation': '機器翻譯', 'Text Summarization': '文本摘要', 'BERT': '雙向編碼器', 'GPT': '生成式預訓練',
    'Image Classification': '影像分類', 'Object Detection': '物件偵測', 'Semantic Segmentation': '語義分割', 'Instance Segmentation': '實例分割', 'CNN': '卷積神經網絡', 'YOLO': 'YOLO物件偵測', 'ResNet': '殘差神經網路', 'Feature Pyramid Network': '特徵金字塔', 'Optical Character Recognition': '光學字元辨識', 'Face Recognition': '人臉辨識', 'Image Generation': '影像生成', 'Vision Transformer': '視覺變換器',
    'Generative Adversarial Network': '生成對抗網路', 'Variational Autoencoder': '變分自編碼器', 'Diffusion Model': '擴散模型', 'Large Language Model': '大型語言模型', 'Prompt Engineering': '提示工程', 'Multimodal Model': '多模態模型', 'Zero-Shot Learning': '零樣本學習', 'Few-Shot Learning': '少樣本學習', 'Retrieval-Augmented Generation': '檢索增強生成', 'Text-to-Image': '文生圖', 'Foundational Model': '基礎模型', 'Stable Diffusion': '穩定擴散',
    'Descriptive Statistics': '敘述性統計', 'Probability Distribution': '機率分佈', 'Hypothesis Testing': '假說檢定', 'Correlation Coefficient': '相關係數', 'P-Value': 'P值', 'Confidence Interval': '信賴區間', 'Variance': '變異數', 'Standard Deviation': '標準差', 'Central Limit Theorem': '中央極限定理', 'Bayesian Inference': '貝氏推論',
    'Hadoop': 'Hadoop框架', 'Spark': 'Spark引擎', 'MapReduce': 'MapReduce運算', 'NoSQL': 'NoSQL資料庫', 'Data Warehouse': '資料倉儲', 'Data Lake': '資料湖泊', 'ETL': '抽取轉換載入', 'Stream Processing': '串流處理', 'Distributed File System': '分散式檔案系統', 'Kafka': 'Kafka訊息系統', 'Hive': 'Hive資料倉儲工具'
};

function generateDefinition(name) {
    if (name.includes('Learning')) return '一種透過數據自我優化的演算法與模型架構。';
    if (name.includes('Data')) return '針對大量資訊進行清理、轉換與處理的技術。';
    if (name.includes('Network') || name.includes('CNN') || name.includes('Transformer')) return '一種受到生物神經網路啟發或具備注意力機制的深度學習架構。';
    return name + ' 是人工智慧與數據科學中的一項關鍵概念或技術。';
}

function generatePurpose(name) {
    if (name.includes('Learning')) return '用於從歷史資料中找出隱藏的模式，並進行趨勢預測。';
    if (name.includes('Data')) return '用於提升特徵品質，為後續機器學習模型打下良好基礎。';
    return '可用於解決特定的複雜問題，提升決策效率與自動化程度。';
}

function generateMindmap(name, currentSubUnit, cnName) {
    return 'graph TD\n  A["' + cnName + '"] --> B(基本概念)\n  A --> C(常見應用)\n  A --> D(所屬領域 : ' + currentSubUnit + ')\n  B --> E{核心原理}\n  C --> F[企業導入]';
}

let lessonData = [];
let vocabPool = [];

chapters.forEach(chap => {
    let sub_units = [];
    chap.subUnits.forEach(sub => {
        let topics = [];
        sub.baseTopics.forEach(engName => {
            let abbr = engName.split(' ').map(w => w[0]).join('').toUpperCase();
            if (abbr.length === 1) abbr = engName.substring(0, 3).toUpperCase();
            
            let cnName = cnMap[engName] || engName;
            
            let topicObj = {
                id: 'id_' + Math.random().toString(36).substr(2, 9),
                title: cnName,
                eng_name: engName,
                eng_abbr: abbr,
                category: sub.name,
                principle: chap.unit.split('：')[0], // e.g. 初級-科目一
                def: generateDefinition(engName),
                purpose: generatePurpose(engName),
                mindmap: generateMindmap(engName, sub.name, cnName),
                detail_explain: '【' + cnName + '】 詳細解析：此概念由相關理論衍生，在實務中扮演重要角色，不僅加速了自動化發展，還大幅降低了人為判斷的失誤率。對於 ' + sub.name + ' 領域來說是不可或缺的技術。',
                related_nodes: [sub.name]
            };
            topics.push(topicObj);
            vocabPool.push(topicObj);
        });
        sub_units.push({ title: sub.name, topics: topics });
    });
    lessonData.push({ unit_title: chap.unit, sub_units: sub_units });
});

let jsContent = 'const lessonData = ' + JSON.stringify(lessonData, null, 4) + ';\n';
fs.writeFileSync('data.js', jsContent, 'utf8');

let quizzes = [];
vocabPool.forEach((v, idx) => {
    let wrongOptions = vocabPool.map(vp => generatePurpose(vp.eng_name)).filter(n => n !== generatePurpose(v.eng_name));
    // get 3 unique random wrong options
    wrongOptions = [...new Set(wrongOptions)].sort(() => Math.random() - 0.5).slice(0, 3);
    
    // fallback if insufficient wrong options
    if (wrongOptions.length < 3) {
        wrongOptions.push('將類比訊號轉化為數位訊號儲存');
        wrongOptions.push('用來設計網頁介面的標籤語法');
        wrongOptions.push('負責管理多執行緒與記憶體分配');
    }
    wrongOptions = [...new Set(wrongOptions)].slice(0, 3);
    
    let options = [...wrongOptions, generatePurpose(v.eng_name)].sort(() => Math.random() - 0.5);
    
    quizzes.push({
        id: 'q_' + Math.random().toString(36).substr(2, 9),
        topic_id: v.id,
        question: '關於「' + v.title + ' (' + v.eng_name + ')」，下列哪一項是它的主要用途？',
        options: options,
        ans_idx: options.indexOf(generatePurpose(v.eng_name)),
        explain: v.detail_explain
    });
});

let quizJsContent = 'const quizzes = ' + JSON.stringify(quizzes, null, 4) + ';\n';
fs.writeFileSync('quizzes.js', quizJsContent, 'utf8');
console.log('Successfully generated ' + vocabPool.length + ' words');
