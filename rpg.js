// rpg.js — AI 星際聯盟 RPG 引擎 v1.0
// 依賴：rpg-data.js（DOMAINS, buildQuiz, getDomainSkills）

const RPG_CF_WORKER = 'https://ai-tts-srs-proxy.ai-tts-srs-learning.workers.dev';
const RPG_SAVE_KEY  = 'rpg_ai_league_progress';

// ── 職階定義 ──────────────────────────────────────────────────────────────────
const RANKS = [
  { name: '見習士',    minExp: 0    },
  { name: '初級訓練師', minExp: 300  },
  { name: '中級研究員', minExp: 800  },
  { name: '高級工程師', minExp: 1800 },
  { name: 'AI 聯盟士官', minExp: 3500 },
];

// ── NPC 對話 API（走 CF Worker，各 NPC 用不同模型）───────────────────────────
class NPCDialogue {
  constructor(domain) {
    this._model = domain.npcModel;
    this._domain = domain;
  }

  async ask(userText, termHints = []) {
    const termList = termHints.slice(0, 12).map(t => `・${t.title}：${t.def ? t.def.slice(0, 30) : ''}`).join('\n');
    const sysPrompt = `你是「${this._domain.guardian}」，${this._domain.name}的守護者。
個性：${this._getPersonality()}
你的任務是用親切的口吻幫助見習士學習 AI 知識。
請在回答中自然夾帶以下術語的解說（不要一次全部列出，挑 1-2 個融入對話）：
${termList}
回覆請控制在 80 字以內，使用繁體中文。`;

    const messages = [
      { role: 'system', content: sysPrompt },
      { role: 'user',   content: userText }
    ];

    const body = { messages, max_tokens: 200 };
    if (this._model.nvidia) body.model_nv = this._model.nvidia;
    if (this._model.cf)     body.model_cf = this._model.cf;
    if (this._model.hf)     body.model_hf = this._model.hf;

    try {
      const r = await fetch(RPG_CF_WORKER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(20000)
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const d = await r.json();
      return d?.choices?.[0]?.message?.content?.trim() || null;
    } catch (e) {
      console.warn('[RPG NPC]', e.message);
      return null;
    }
  }

  _getPersonality() {
    const map = {
      isabel:  '溫柔引導，語氣鼓勵，適合初學者',
      dada:    '務實直接，強調資料的重要性',
      kael:    '嚴格正式，要求精準，不接受模糊答案',
      sara:    '理性分析，善於拆解問題',
      rova:    '自由探索，喜歡用比喻和故事說明',
      moon:    '深沉哲學，思考深度，適合進階討論',
      aura:    '詩意感性，充滿創造力',
      liyang:  '活力激勵，像運動教練一樣鼓舞',
      council: '博學多聞，給予全面性的總結評價',
    };
    return map[this._domain.guardianChar] || '友善專業';
  }
}

// ── RPG 主引擎 ────────────────────────────────────────────────────────────────
class RPGEngine {
  constructor(ui) {
    this._ui     = ui;   // window.RPG_UI（HermesAgent 提供）
    this._state  = null; // 玩家進度
    this._curDomain  = null;
    this._curChapter = null;
    this._sceneIdx   = 0;
    this._quizQ      = [];
    this._quizIdx    = 0;
    this._hp         = 3;
    this._score      = 0;
    this._npc        = null;
  }

  // ── 啟動 ────────────────────────────────────────────────────────────────
  start() {
    this._state = this._load();
    this._syncUI();
    this._ui.showMap();
  }

  // ── 進入星域 ─────────────────────────────────────────────────────────────
  enterDomain(key) {
    const domain = DOMAINS.find(d => d.key === key);
    if (!domain) return;

    // 檢查鎖定
    if (domain.unlockAfter && !this._state.cleared.includes(domain.unlockAfter)) {
      this._ui.showToast?.(`請先完成「${DOMAINS.find(d=>d.key===domain.unlockAfter)?.name}」！`);
      return;
    }

    this._curDomain  = domain;
    window._rpgCurDomain     = domain;
    window._rpgCurDomainName = domain.name;
    this._npc        = new NPCDialogue(domain);

    // 找到目前進行中的章節
    const doneChapters = this._state.chapters[key] || [];
    let chapter = domain.chapters.find(c => !doneChapters.includes(c.id));
    if (!chapter) {
      // 已全通關 → 重新挑戰（重置章節紀錄，保留 cleared 與 exp）
      this._state.chapters[domain.key] = [];
      this._save();
      chapter = domain.chapters[0];
      this._ui.showToast?.(`🔄 重新挑戰「${domain.name}」！`);
    }

    this._curChapter = chapter;
    this._sceneIdx   = 0;
    this._runScene();
  }

  // ── 對話場景推進 ─────────────────────────────────────────────────────────
  _runScene() {
    const chapter = this._curChapter;
    if (this._sceneIdx >= chapter.scenes.length) {
      this._startQuiz();
      return;
    }
    const scene = chapter.scenes[this._sceneIdx];
    this._ui.showDialogue({
      ...scene,
      onNext: () => {
        this._sceneIdx++;
        this._runScene();
      },
      onChoice: (choice) => {
        if (choice.next === 'npc') {
          this._npcChat(choice.text);
        } else {
          this._sceneIdx++;
          this._runScene();
        }
      }
    });
  }

  // ── NPC 即時對話（自由提問）──────────────────────────────────────────────
  async _npcChat(userText) {
    const termHints = getTermPool ? getTermPool(this._curDomain) : [];
    this._ui.showDialogue({
      char:      this._curDomain.guardianChar,
      charName:  this._curDomain.guardian,
      charColor: this._curDomain.color,
      lines:     ['…（思考中）'],
      choices:   []
    });
    const reply = await this._npc.ask(userText, termHints);
    this._ui.showDialogue({
      char:      this._curDomain.guardianChar,
      charName:  this._curDomain.guardian,
      charColor: this._curDomain.color,
      lines:     [reply || '（網路不穩，請稍後再試）'],
      choices:   [],
      onNext: () => { this._sceneIdx++; this._runScene(); }
    });
  }

  // ── 開始測驗 ─────────────────────────────────────────────────────────────
  _startQuiz() {
    this._quizQ   = buildQuiz(this._curDomain.key, 5);
    this._quizIdx = 0;
    this._hp      = 3;
    this._score   = 0;
    this._runQuizQuestion();
  }

  _runQuizQuestion() {
    if (this._quizIdx >= this._quizQ.length) {
      this._endQuiz();
      return;
    }
    const q = this._quizQ[this._quizIdx];
    this._ui.showQuiz({
      ...q,
      progress: { cur: this._quizIdx + 1, total: this._quizQ.length },
      hp: this._hp,
      onAnswer: (idx) => {
        if (idx === q.answer) {
          this._score++;
          this._state.exp += 20;
        } else {
          this._hp--;
        }
        this._quizIdx++;
        if (this._hp <= 0) {
          this._failQuiz();
        } else {
          this._runQuizQuestion();
        }
      }
    });
  }

  _endQuiz() {
    const chapter = this._curChapter;
    const domain  = this._curDomain;
    const pass    = this._score >= chapter.quiz.passScore;

    if (pass) {
      // 記錄通關
      if (!this._state.chapters[domain.key]) this._state.chapters[domain.key] = [];
      if (!this._state.chapters[domain.key].includes(chapter.id))
        this._state.chapters[domain.key].push(chapter.id);

      // 計算 exp + 職階
      this._state.exp += chapter.quiz.reward.exp;
      const newRank = chapter.quiz.reward.rank;
      if (newRank) this._state.rank = newRank;
      else this._state.rank = this._calcRank();

      // 檢查是否星域全通關
      const allDone = domain.chapters.every(c => this._state.chapters[domain.key]?.includes(c.id));
      if (allDone && !this._state.cleared.includes(domain.key)) {
        this._state.cleared.push(domain.key);
        this._ui.unlockDomain(domain.key);
        // 解鎖技能
        const skills = getDomainSkills(domain.key);
        this._state.skills.push(...skills.map(s => s.name));
        this._ui.showSkillUnlock?.(skills);
      }

      this._save();
      this._syncUI();
      this._ui.showQuizResult?.({ pass: true, score: this._score, total: this._quizQ.length });
    } else {
      this._failQuiz();
    }
  }

  _failQuiz() {
    this._ui.showQuizResult?.({ pass: false, score: this._score, total: this._quizQ.length });
  }

  // ── 職階計算 ─────────────────────────────────────────────────────────────
  _calcRank() {
    const exp = this._state.exp;
    let rank = RANKS[0].name;
    for (const r of RANKS) {
      if (exp >= r.minExp) rank = r.name;
    }
    return rank;
  }

  // ── 同步 UI ──────────────────────────────────────────────────────────────
  _syncUI() {
    const exp    = this._state.exp;
    const nextR  = RANKS.find(r => r.minExp > exp);
    const maxExp = nextR ? nextR.minExp : RANKS[RANKS.length - 1].minExp;
    this._ui.updatePlayer({
      rank:    this._state.rank,
      exp,
      maxExp,
      cleared: this._state.cleared.length
    });
    // 更新地圖解鎖狀態
    this._state.cleared.forEach(key => this._ui.unlockDomain(key));
  }

  // ── localStorage ─────────────────────────────────────────────────────────
  _save() {
    try { localStorage.setItem(RPG_SAVE_KEY, JSON.stringify(this._state)); }
    catch(e) { console.warn('[RPG] save failed', e); }
  }

  _load() {
    try {
      const raw = localStorage.getItem(RPG_SAVE_KEY);
      if (raw) return JSON.parse(raw);
    } catch(e) {}
    return { rank: '見習士', exp: 0, cleared: [], chapters: {}, skills: [] };
  }

  // ── 重置（除錯用）────────────────────────────────────────────────────────
  reset() {
    localStorage.removeItem(RPG_SAVE_KEY);
    this.start();
  }
}

// 掛到全域，等 RPG_UI 就緒後由 rpg.html 呼叫 new RPGEngine(RPG_UI).start()
window.RPGEngine = RPGEngine;
window.RPG_ENGINE = null; // rpg.html 初始化後覆寫
