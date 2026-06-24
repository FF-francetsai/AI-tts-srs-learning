// rpg-data.js — AI 星際聯盟 RPG 資料層 v1.1
// 依賴：data.js（lessonData 全域）

// ── 10 個星域定義 ─────────────────────────────────────────────────────────────
const DOMAINS = [
  {
    key: 'INTRO', name: 'AI 入門星', emoji: '🌱', color: '#22d3ee',
    guardian: '伊莎貝爾', guardianChar: 'isabel', unlockAfter: null,
    spriteFile: 'Female_01', spriteDir: 3,
    sceneTiles: ['Grass_pipo', 'BaseChip_pipo'],
    npcModel: { nvidia: 'google/gemma-3-12b-it', cf: '@cf/google/gemma-3-12b-it', hf: 'google/gemma-3-12b-it' },
    catFilter: ['AI 基礎', 'AI 分類', '人工智慧'],
    chapters: [
      {
        id: 'intro_ch1', title: '初降 AI 星',
        scenes: [
          { char: 'isabel', charName: '伊莎貝爾', charColor: '#22d3ee',
            lines: ['歡迎來到 AI 星際聯盟，見習士！', '我是你在這顆星球的導師，伊莎貝爾。', '這裡是「AI 入門星」，是每位新成員踏入 AI 宇宙的第一站。'],
            choices: [] },
          { char: 'isabel', charName: '伊莎貝爾', charColor: '#22d3ee',
            lines: ['你知道什麼是「人工智慧」嗎？', '簡單說，它是能模擬人類智慧——感知、學習、推理的系統。', '接下來，你需要掌握最基本的 AI 概念才能繼續旅程。'],
            choices: [
              { text: '我準備好了！', next: null },
              { text: '能再說說「深度學習」嗎？', next: 'npc' }
            ] },
          { char: 'isabel', charName: '伊莎貝爾', charColor: '#22d3ee',
            lines: ['很好！那我們開始第一個考驗。', '回答正確 3 題，就能解鎖 AI 入門星的秘密！'],
            choices: [] }
        ],
        quiz: { passScore: 3, reward: { exp: 100, rank: null } }
      },
      {
        id: 'intro_ch2', title: 'AI 的三大支柱',
        scenes: [
          { char: 'isabel', charName: '伊莎貝爾', charColor: '#22d3ee',
            lines: ['做得好！你通過了第一關。', 'AI 宇宙的基礎由三大支柱組成：機器學習、深度學習、自然語言處理。', '今天，我們深入探討它們的分別。'],
            choices: [] },
          { char: 'isabel', charName: '伊莎貝爾', charColor: '#22d3ee',
            lines: ['「狹義 AI」只能處理單一任務，像是推薦系統或圖像辨識。', '「廣義 AI」才能像人類一樣跨領域思考——目前還在研究中。', '你的目標是了解這整個宇宙的分類！'],
            choices: [] }
        ],
        quiz: { passScore: 3, reward: { exp: 150, rank: '初級訓練師' } }
      }
    ]
  },
  {
    key: 'DATA', name: '資料礦場', emoji: '📊', color: '#60a5fa',
    guardian: '達達', guardianChar: 'dada', unlockAfter: 'INTRO',
    spriteFile: 'Male_03', spriteDir: 3,
    sceneTiles: ['cave_pipo', 'BaseChip_pipo'],
    npcModel: { nvidia: 'meta/llama-3.3-70b-instruct', cf: '@cf/meta/llama-3.3-70b-instruct-fp8-fast', hf: 'meta-llama/Llama-3.3-70B-Instruct' },
    catFilter: ['資料科學', '資料處理', '統計'],
    chapters: [
      {
        id: 'data_ch1', title: '礦場初探',
        scenes: [
          { char: 'dada', charName: '達達', charColor: '#60a5fa',
            lines: ['嘿！你來了。我是礦工長達達。', '這裡是「資料礦場」，AI 的燃料都從這裡開採。', '沒有資料，AI 什麼都不是。'],
            choices: [] }
        ],
        quiz: { passScore: 3, reward: { exp: 120, rank: null } }
      }
    ]
  },
  {
    key: 'SL', name: '監督神殿', emoji: '🎯', color: '#a78bfa',
    guardian: '凱爾', guardianChar: 'kael', unlockAfter: 'DATA',
    spriteFile: 'Male_01', spriteDir: 3,
    sceneTiles: ['stone_temple', 'BaseChip_pipo'],
    npcModel: { nvidia: 'mistralai/mistral-large-3-675b-instruct-2512', cf: null, hf: 'mistralai/Mistral-Large-Instruct-2411' },
    catFilter: ['機器學習', '監督式學習', '分類', '回歸'],
    chapters: [
      {
        id: 'sl_ch1', title: '裁判者的試煉',
        scenes: [
          { char: 'kael', charName: '凱爾', charColor: '#a78bfa',
            lines: ['監督神殿歡迎你。', '在這裡，每一個預測都必須有標記資料作為依據。', '沒有標準答案的演算法，不得進入神殿核心。'],
            choices: [] }
        ],
        quiz: { passScore: 3, reward: { exp: 150, rank: null } }
      }
    ]
  },
  {
    key: 'DISC', name: '鑑別機庫', emoji: '🔬', color: '#a3e635',
    guardian: '薩拉', guardianChar: 'sara', unlockAfter: 'SL',
    spriteFile: 'Female_03', spriteDir: 3,
    sceneTiles: ['metal_floor', 'BaseChip_pipo'],
    npcModel: { nvidia: 'deepseek-ai/deepseek-v4-pro', cf: null, hf: 'deepseek-ai/DeepSeek-V3' },
    catFilter: ['鑑別式', '判別模型', '分類器'],
    chapters: [
      {
        id: 'disc_ch1', title: '判別的藝術',
        scenes: [
          { char: 'sara', charName: '薩拉', charColor: '#a3e635',
            lines: ['我是機庫技師薩拉。', '鑑別式模型學的是「邊界」，而不是資料的分布。', '當你需要分類而不需要生成時，就來找我。'],
            choices: [] }
        ],
        quiz: { passScore: 3, reward: { exp: 160, rank: null } }
      }
    ]
  },
  {
    key: 'UL', name: '非監督荒野', emoji: '🔍', color: '#34d399',
    guardian: '羅瓦', guardianChar: 'rova', unlockAfter: 'DISC',
    spriteFile: 'Male_02', spriteDir: 3,
    sceneTiles: ['wasteland_pipo', 'Grass_pipo'],
    npcModel: { nvidia: 'moonshotai/kimi-k2.6', cf: '@cf/moonshotai/kimi-k2.6', hf: 'moonshotai/Kimi-K2' },
    catFilter: ['非監督式學習', '分群', '降維'],
    chapters: [
      {
        id: 'ul_ch1', title: '無標籤的世界',
        scenes: [
          { char: 'rova', charName: '羅瓦', charColor: '#34d399',
            lines: ['這片荒野沒有地圖，也沒有標記。', '非監督學習就是在混沌中找出結構。', '分群、降維、異常偵測——都是在黑暗中尋找規律。'],
            choices: [] }
        ],
        quiz: { passScore: 3, reward: { exp: 170, rank: '中級研究員' } }
      }
    ]
  },
  {
    key: 'DL', name: '深度熔爐', emoji: '🧠', color: '#fbbf24',
    guardian: '穆恩', guardianChar: 'moon', unlockAfter: 'UL',
    spriteFile: 'Male_04', spriteDir: 3,
    sceneTiles: ['lava_floor', 'BaseChip_pipo'],
    npcModel: { nvidia: null, cf: '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b', hf: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B' },
    catFilter: ['深度學習', '神經網路', '卷積', '遞迴'],
    chapters: [
      {
        id: 'dl_ch1', title: '熔爐的熱度',
        scenes: [
          { char: 'moon', charName: '穆恩', charColor: '#fbbf24',
            lines: ['深度熔爐是 AI 宇宙中最炙熱的地方。', '神經網路在這裡一層一層煅造，直到習得複雜的表徵。', '你必須理解反向傳播，才能在這裡存活。'],
            choices: [] }
        ],
        quiz: { passScore: 3, reward: { exp: 200, rank: null } }
      }
    ]
  },
  {
    key: 'GEN', name: '生成創界', emoji: '✨', color: '#f472b6',
    guardian: '奧菈', guardianChar: 'aura', unlockAfter: 'DL',
    spriteFile: 'Female_05', spriteDir: 3,
    sceneTiles: ['magic_floor', 'BaseChip_pipo'],
    npcModel: { nvidia: 'qwen/qwen3.5-122b-a10b', cf: null, hf: null },
    catFilter: ['生成式 AI', '大語言模型', '擴散模型'],
    chapters: [
      {
        id: 'gen_ch1', title: '創造的力量',
        scenes: [
          { char: 'aura', charName: '奧菈', charColor: '#f472b6',
            lines: ['生成創界是最自由的領域。', '在這裡，AI 不只是分析，而是創造——文字、圖像、音樂、程式。', '從 GPT 到擴散模型，都是創界的居民。'],
            choices: [] }
        ],
        quiz: { passScore: 3, reward: { exp: 200, rank: '高級工程師' } }
      }
    ]
  },
  {
    key: 'RL', name: '強化競技場', emoji: '🎮', color: '#fb923c',
    guardian: '李陽', guardianChar: 'liyang', unlockAfter: 'GEN',
    spriteFile: 'Male_05', spriteDir: 3,
    sceneTiles: ['arena_floor', 'BaseChip_pipo'],
    npcModel: { nvidia: 'meta/llama-4-maverick-17b-128e-instruct', cf: '@cf/meta/llama-4-scout-17b-16e-instruct', hf: 'meta-llama/Llama-4-Scout-17B-16E-Instruct' },
    catFilter: ['強化學習', '策略', '獎勵'],
    chapters: [
      {
        id: 'rl_ch1', title: '以獎懲為師',
        scenes: [
          { char: 'liyang', charName: '李陽', charColor: '#fb923c',
            lines: ['競技場只有一條規則：學會贏！', '強化學習靠的是獎勵訊號，不是標記資料。', 'Agent 在環境中行動、觀察、調整——這才是真正的學習。'],
            choices: [] }
        ],
        quiz: { passScore: 3, reward: { exp: 220, rank: null } }
      }
    ]
  },
  {
    key: 'ADV', name: '中級議會', emoji: '⚙️', color: '#94a3b8',
    guardian: '長老委員會', guardianChar: 'council', unlockAfter: 'RL',
    spriteFile: 'Male_01', spriteDir: 3,
    sceneTiles: ['marble_floor', 'BaseChip_pipo'],
    npcModel: { nvidia: null, cf: '@cf/nvidia/nemotron-3-120b-a12b', hf: null },
    catFilter: ['進階', '中級', '整合應用'],
    chapters: [
      {
        id: 'adv_ch1', title: '議會的綜合考核',
        scenes: [
          { char: 'council', charName: '長老委員會', charColor: '#94a3b8',
            lines: ['你走到了 AI 星際聯盟的最高殿堂。', '這裡匯聚了所有星域的知識。', '通過最終考核，你將獲得 AI 聯盟士官的稱號。'],
            choices: [] }
        ],
        quiz: { passScore: 4, reward: { exp: 300, rank: 'AI 聯盟士官' } }
      }
    ]
  },
  {
    key: 'CORE', name: '星盟核心星', emoji: '🌐', color: '#f0e6ff',
    guardian: '星盟議長 · 亞特拉斯', guardianChar: 'atlas', unlockAfter: 'ADV',
    spriteFile: 'Male_02', spriteDir: 3,
    sceneTiles: ['star_floor', 'BaseChip_pipo'],
    npcModel: { nvidia: 'google/gemma-3-27b-it', cf: '@cf/google/gemma-3-27b-it', hf: 'google/gemma-3-27b-it' },
    catFilter: ['AI 基礎', 'AI 分類', '人工智慧', '資料科學', '機器學習', '深度學習', '神經網路', '生成式 AI', '強化學習', '進階', '整合應用'],
    chapters: [
      {
        id: 'core_ch1', title: '九星歸一',
        scenes: [
          { char: 'atlas', charName: '亞特拉斯', charColor: '#c4b5fd',
            lines: [
              '歡迎來到星盟核心星。',
              '你走過了九顆星域——入門、礦場、神殿、機庫、荒野、熔爐、創界、競技場、議會。',
              '這裡是一切的匯聚點，也是 AI 宇宙真正的中心。'
            ],
            choices: [] },
          { char: 'atlas', charName: '亞特拉斯', charColor: '#c4b5fd',
            lines: [
              '核心星不屬於任何單一技術，它是所有知識互相連結的場域。',
              '資料從礦場流入，在神殿與機庫被淬煉，在熔爐鍛造，在創界綻放，在競技場驗證。',
              '最終，它們在這裡整合成真正有用的智慧。'
            ],
            choices: [
              { text: '我已準備好接受最終考驗', next: null },
              { text: '這與「AGI」有什麼關係？', next: 'npc' }
            ] },
          { char: 'atlas', charName: '亞特拉斯', charColor: '#c4b5fd',
            lines: [
              '最終關卡將跨越所有星域的知識。',
              '通過考核，你將成為星盟正式研究員，有資格進入核心星的常設議會。',
              '準備好了嗎？'
            ],
            choices: [] }
        ],
        quiz: { passScore: 4, reward: { exp: 400, rank: '星盟研究員' } }
      },
      {
        id: 'core_ch2', title: '核心星的真相',
        scenes: [
          { char: 'atlas', charName: '亞特拉斯', charColor: '#c4b5fd',
            lines: [
              '你通過了。恭喜你。',
              '核心星有一個秘密：它不是終點，它是起點的鏡像。',
              '最頂層的 AI 研究者，往往又回到最基礎的問題——什麼是智慧？為什麼學習？'
            ],
            choices: [] },
          { char: 'atlas', charName: '亞特拉斯', charColor: '#c4b5fd',
            lines: [
              '帶著你在九星習得的技能，這個問題的答案才開始有輪廓。',
              '星盟等待你繼續探索。旅程從未結束。'
            ],
            choices: [] }
        ],
        quiz: { passScore: 5, reward: { exp: 500, rank: '星盟首席研究員' } }
      }
    ]
  }
];

// ── 題目靜態備庫（當 lessonData 不可用時使用）────────────────────────────────
const FALLBACK_QUESTIONS = {
  INTRO: [
    { text: '「人工智慧」的核心目標是？', options: ['模擬人類智慧進行感知與決策', '取代所有人類工作', '僅用於圖像處理', '只能處理文字資料'], answer: 0, hint: 'AI 旨在模擬人類學習、思考及反應模式的系統。' },
    { text: '「狹義 AI」的特徵是？', options: ['只能執行特定任務', '可以進行任意推理', '具有人類等級的智慧', '不需要資料訓練'], answer: 0, hint: '狹義 AI 專為特定任務設計，能力侷限於預定義範圍。' },
    { text: '下列何者屬於 AI 的應用場景？', options: ['語音助手推薦系統', '手動試算表計算', '紙本文件歸檔', '電話人工客服'], answer: 0, hint: '語音助手和推薦系統都是狹義 AI 的典型應用。' },
    { text: '機器學習與傳統程式設計最大的差異是？', options: ['從資料中自動學習規則', '需要手動寫出所有規則', '不使用任何資料', '只能處理數字'], answer: 0, hint: '機器學習從大量資料中自動學習規律，無需明確程式化規則。' },
    { text: '下列哪個技術讓 AI 能理解人類語言？', options: ['自然語言處理（NLP）', '電腦視覺（CV）', '強化學習（RL）', '卷積神經網路（CNN）'], answer: 0, hint: '自然語言處理（NLP）是處理人類語言的 AI 技術。' }
  ]
};

// ── 術語庫存取 ────────────────────────────────────────────────────────────────
function loadTerms() {
  if (typeof lessonData === 'undefined') return [];
  return lessonData.filter(item => item.title && item.def);
}

// ── 分類術語池（按 catFilter 關鍵字篩選）────────────────────────────────────
function getTermPool(domain) {
  const terms = loadTerms();
  if (!terms.length) return [];
  const filters = domain.catFilter || [];
  return terms.filter(t => {
    const cat = (t.category || '').toLowerCase();
    return filters.some(f => cat.includes(f.toLowerCase()) || (t.title || '').includes(f));
  });
}

// ── 動態出題（從術語庫抽題）────────────────────────────────────────────────
function buildQuiz(domainKey, count = 5) {
  const domain = DOMAINS.find(d => d.key === domainKey);
  if (!domain) return [];

  const pool = getTermPool(domain);

  // 若術語庫不足，使用靜態備庫
  if (pool.length < 4) {
    const fb = FALLBACK_QUESTIONS[domainKey] || FALLBACK_QUESTIONS.INTRO;
    return fb.slice(0, count);
  }

  // key_goal（字串非空 = 重要詞條）優先
  const keyTerms = pool.filter(t => t.key_goal && String(t.key_goal).trim());
  const regTerms = pool.filter(t => !t.key_goal || !String(t.key_goal).trim());
  const ordered  = [..._shuffle(keyTerms), ..._shuffle(regTerms)];
  const picked   = ordered.slice(0, count);

  return picked.map(term => {
    // 錯誤選項：從同分類其他術語取標題
    const others  = pool.filter(t => t.id !== term.id && t.title !== term.title);
    const wrongs  = _shuffle(others).slice(0, 3).map(t => t.title);
    const options = _shuffle([term.title, ...wrongs]);
    return {
      text:    `下列哪個 AI 術語的定義是：「${_truncate(term.def, 60)}」？`,
      options,
      answer:  options.indexOf(term.title),
      hint:    `${term.title}${term.eng_name ? `（${term.eng_name}）` : ''}：${_truncate(term.def, 80)}`
    };
  });
}

// ── 技能解鎖（從星域 key_goal 術語取前 3 個）──────────────────────────────
function getDomainSkills(domainKey) {
  const domain = DOMAINS.find(d => d.key === domainKey);
  if (!domain) return [];
  const pool = getTermPool(domain).filter(t => t.key_goal && String(t.key_goal).trim());
  return _shuffle(pool).slice(0, 3).map(t => ({
    name:   t.title,
    eng:    t.eng_name || '',
    effect: _toSkillEffect(t.title, t.def)
  }));
}

// ── 工具函式 ─────────────────────────────────────────────────────────────────
function _shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function _truncate(str, len) {
  if (!str) return '';
  return str.length > len ? str.slice(0, len) + '…' : str;
}

function _toSkillEffect(title, def) {
  const short = _truncate(def, 40);
  return `施放「${title}」：${short}，對目標造成知識衝擊！`;
}
