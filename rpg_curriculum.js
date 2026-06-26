window.RPG_CURRICULUM = (function(){
  const data = window.VOCAB_DATA || [];
  const groups = {};
  data.forEach(t => {
    const key = 'st' + t.stage + '_' + (t.category || '通用');
    if (!groups[key]) groups[key] = {stage: t.stage, category: t.category || '通用', terms: []};
    groups[key].terms.push({en: t.en, zh: t.zh, def: t.def || ''});
  });
  return Object.values(groups)
    .sort((a, b) => a.stage - b.stage)
    .map((g, i) => ({
      id: 'ch' + (i + 1),
      chapter: i + 1,
      title: '第' + (i + 1) + '章 ' + g.category + ' (Stage ' + g.stage + ')',
      stage: g.stage,
      category: g.category,
      terms: g.terms.slice(0, 12)
    }));
})();
