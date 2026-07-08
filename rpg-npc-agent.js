// rpg-npc-agent.js — 生成式 NPC 智能行為系統
// 由 GLMthink 實作 Reflection & Planning 模組


// =============================================================
// 生成式 NPC 智能行為系統 — Reflection & Planning 模組
// 由 GLMthink 實作，整合至 NPCDialogue 類別
// =============================================================

/**
 * Reflection 類別
 * 每 3 輪對話後，根據玩家答對/答錯比率產生鼓勵、建議或提示。
 * 可呼叫 CF Worker LLM 生成自然語言回應。
 */
class Reflection {
  constructor(options = {}) {
    this.dialogueInterval = options.dialogueInterval || 3; // 每 N 輪觸發反思
    this.llmEndpoint = options.llmEndpoint || null;       // CF Worker API URL
    this.npcName = options.npcName || 'NPC';
    this._turnCount = 0;
  }

  /**
   * 每次對話結束後呼叫，累計輪數並在達到門檻時觸發反思。
   * @param {Object} memoryStream - NPC 記憶流（含短期 lines 與長期進度）
   * @returns {Promise<string|null>} 反思文字或 null（未達門檻）
   */
  async onDialogueTurn(memoryStream) {
    this._turnCount += 1;
    if (this._turnCount % this.dialogueInterval !== 0) {
      return null;
    }
    return await this.generateReflection(memoryStream);
  }

  /**
   * 根據記憶流中的答對/答錯比率生成反思。
   * 若有 LLM endpoint 則呼叫生成自然語言；否則使用模板。
   */
  async generateReflection(memoryStream) {
    const stats = this._computeStats(memoryStream);
    const ratio = stats.correctRatio;

    // 根據比率決定語氣策略
    let strategy;
    if (ratio >= 0.8) {
      strategy = 'encourage';     // 表現優異 → 鼓勵挑戰更高難度
    } else if (ratio >= 0.5) {
      strategy = 'suggest';       // 中等表現 → 建議加強弱點
    } else {
      strategy = 'hint';          // 表現不佳 → 給提示、降難度
    }

    // 嘗試呼叫 LLM 生成自然語言反思
    if (this.llmEndpoint) {
      try {
        const prompt = this._buildPrompt(strategy, stats);
        const resp = await fetch(this.llmEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, maxTokens: 120 })
        });
        const data = await resp.json();
        if (data && data.response) return data.response.trim();
      } catch (e) {
        console.warn('[Reflection] LLM 呼叫失敗，回退模板:', e.message);
      }
    }

    // 模板回退
    return this._templateReflection(strategy, stats);
  }

  /** 從記憶流計算答對/答錯統計 */
  _computeStats(memoryStream) {
    const records = (memoryStream && memoryStream.longTerm)
      ? memoryStream.longTerm.filter(r => r.type === 'qa')
      : [];
    const total = records.length || 1;
    const correct = records.filter(r => r.correct).length;
    const wrong = total - correct;
    return {
      total: records.length,
      correct,
      wrong,
      correctRatio: records.length > 0 ? correct / records.length : 0
    };
  }

  /** 組裝 LLM prompt */
  _buildPrompt(strategy, stats) {
    const base = `你是星際聯盟 NPC「${this.npcName}」，正在引導玩家學習。`;
    const statStr = `玩家目前答對 ${stats.correct} 題，答錯 ${stats.wrong} 題，正確率 ${(stats.correctRatio*100).toFixed(0)}%。`;
    const taskMap = {
      encourage: '請用一句話鼓勵玩家，並暗示可以挑戰更難的內容。',
      suggest:   '請用一句話給出學習建議，指出可以加強的方向。',
      hint:      '請用一句話給予提示，降低壓力並引導複習基礎。'
    };
    return `${base}\n${statStr}\n${taskMap[strategy]}\n回覆請控制在 50 字以內，語氣親切。`;
  }

  /** 無 LLM 時的模板反思 */
  _templateReflection(strategy, stats) {
    const pct = (stats.correctRatio * 100).toFixed(0);
    const templates = {
      encourage: `太棒了！你的正確率高達 ${pct}%，看來可以挑戰更進階的星域知識了！`,
      suggest:   `目前正確率 ${pct}%，表現不錯！建議多練習容易混淆的知識點會更穩。`,
      hint:      `別灰心，正確率 ${pct}% 代表基礎還需要鞏固。我們先複習一下核心概念吧！`
    };
    return templates[strategy] || templates.suggest;
  }

  /** 重置輪數計數器（換場景時呼叫） */
  reset() { this._turnCount = 0; }
}

/**
 * Planning 類別
 * 根據玩家當前學習進度，動態調整下一題難度與推薦知識點。
 */
class Planning {
  constructor(options = {}) {
    this.knowledgeMap = options.knowledgeMap || {
      easy:   ['基礎概念', '入門術語', '簡單定義'],
      medium: ['應用情境', '比較分析', '流程理解'],
      hard:   ['進階推理', '跨域整合', '實戰問題']
    };
    this.llmEndpoint = options.llmEndpoint || null;
    this.npcName = options.npcName || 'NPC';
    this._currentDifficulty = 'easy';
    this._topicIndex = { easy: 0, medium: 0, hard: 0 };
  }

  /**
   * 根據記憶流中的學習進度，決定下一輪的難度與知識點。
   * @param {Object} memoryStream - NPC 記憶流
   * @returns {Promise<{difficulty:string, topic:string, reason:string}>}
   */
  async planNext(memoryStream) {
    const stats = this._evalProgress(memoryStream);

    // 難度調整邏輯
    let newDifficulty = this._currentDifficulty;
    let reason;

    if (stats.correctRatio >= 0.8 && stats.recent >= 3) {
      // 連續答對 → 升級難度
      newDifficulty = this._upgradeDifficulty();
      reason = `連續答對 ${stats.recent} 題，正確率 ${ (stats.correctRatio*100).toFixed(0) }%，升級難度至「${newDifficulty}」。`;
    } else if (stats.correctRatio < 0.4 && stats.recent >= 2) {
      // 連續答錯 → 降級難度
      newDifficulty = this._downgradeDifficulty();
      reason = `近期答對率偏低（${(stats.correctRatio*100).toFixed(0)}%），降級難度至「${newDifficulty}」以鞏固基礎。`;
    } else {
      reason = `正確率 ${(stats.correctRatio*100).toFixed(0)}%，維持「${newDifficulty}」難度繼續練習。`;
    }

    this._currentDifficulty = newDifficulty;

    // 選擇知識點（輪替）
    const topic = this._pickTopic(newDifficulty);

    // 若有 LLM，可請 LLM 生成更精細的教學計劃（可選）
    let plan = { difficulty: newDifficulty, topic, reason };
    if (this.llmEndpoint) {
      try {
        const enriched = await this._llmEnrichPlan(plan, stats);
        if (enriched) plan = { ...plan, llmSuggestion: enriched };
      } catch (e) {
        console.warn('[Planning] LLM 補充失敗:', e.message);
      }
    }

    return plan;
  }

  /** 評估玩家學習進度 */
  _evalProgress(memoryStream) {
    const records = (memoryStream && memoryStream.longTerm)
      ? memoryStream.longTerm.filter(r => r.type === 'qa')
      : [];
    const recentN = Math.min(5, records.length);
    const recentRecords = records.slice(-recentN);
    const recentCorrect = recentRecords.filter(r => r.correct).length;
    const total = records.length || 1;
    const totalCorrect = records.filter(r => r.correct).length;

    return {
      total: records.length,
      recent: recentN,
      recentCorrect,
      recentRatio: recentN > 0 ? recentCorrect / recentN : 0,
      correctRatio: records.length > 0 ? totalCorrect / total : 0
    };
  }

  /** 升級難度 */
  _upgradeDifficulty() {
    const order = ['easy', 'medium', 'hard'];
    const idx = order.indexOf(this._currentDifficulty);
    return order[Math.min(idx + 1, order.length - 1)];
  }

  /** 降級難度 */
  _downgradeDifficulty() {
    const order = ['easy', 'medium', 'hard'];
    const idx = order.indexOf(this._currentDifficulty);
    return order[Math.max(idx - 1, 0)];
  }

  /** 從當前難度的知識點清單中輪替選取 */
  _pickTopic(difficulty) {
    const topics = this.knowledgeMap[difficulty] || ['一般練習'];
    const idx = this._topicIndex[difficulty] || 0;
    const topic = topics[idx % topics.length];
    this._topicIndex[difficulty] = idx + 1;
    return topic;
  }

  /** 呼叫 LLM 生成更精細的教學建議（可選） */
  async _llmEnrichPlan(plan, stats) {
    const prompt = `你是 NPC「${this.npcName}」。玩家正確率 ${(stats.correctRatio*100).toFixed(0)}%，` +
      `下一題難度「${plan.difficulty}」，知識點「${plan.topic}」。` +
      `請用一句話（30字內）建議如何引導玩家學習這個知識點。`;
    const resp = await fetch(this.llmEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, maxTokens: 60 })
    });
    const data = await resp.json();
    return (data && data.response) ? data.response.trim() : null;
  }

  /** 取得當前難度 */
  get currentDifficulty() { return this._currentDifficulty; }

  /** 重置（換場景時） */
  reset() {
    this._currentDifficulty = 'easy';
    this._topicIndex = { easy: 0, medium: 0, hard: 0 };
  }
}

// 匯出（若在 Node 環境）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Reflection, Planning };
}
