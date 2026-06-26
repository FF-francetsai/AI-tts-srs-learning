window.RPG_ACADEMY = {
  ONBOARDING_KEY: 'rpg_onboarding_done',
  LEARNED_KEY: 'rpg_learned',
  init() {
    console.log('RPG_ACADEMY initialized.');
  },
  hasCompletedOnboarding() {
    return localStorage.getItem(this.ONBOARDING_KEY) === 'true';
  },
  markOnboardingDone() {
    localStorage.setItem(this.ONBOARDING_KEY, 'true');
  },
  markLearned(termEn) {
    let d = JSON.parse(localStorage.getItem(this.LEARNED_KEY) || '{}');
    d[termEn] = (d[termEn] || 0) + 1;
    localStorage.setItem(this.LEARNED_KEY, JSON.stringify(d));
  },
  getLearnedCount() {
    return Object.keys(JSON.parse(localStorage.getItem(this.LEARNED_KEY) || '{}')).length;
  },
  isReadyForBattle(minLearned = 5) {
    return this.getLearnedCount() >= minLearned;
  },
  getTermsForStudy(stage = 0, count = 10) {
    const v = (window.VOCAB_DATA || []).filter(t => t.stage == stage);
    const learned = JSON.parse(localStorage.getItem(this.LEARNED_KEY) || '{}');
    return v.filter(t => !learned[t.en]).slice(0, count);
  },
  generateQuizItem(term, allTerms) {
    const distractors = allTerms.filter(t => t.en !== term.en).sort(() => Math.random() - 0.5).slice(0, 3).map(t => t.en);
    const opts = [term.en, ...distractors].sort(() => Math.random() - 0.5);
    return { question: term.def || term.zh, correct: term.en, options: opts };
  }
};
