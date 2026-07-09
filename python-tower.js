(function() {
  'use strict';

  var state;
  var currentAnswer = null; // { answerIndex, explanation }
  var STAGE_FLOORS = {
    P0: [1, 2, 3],
    P1: [4, 5, 6],
    P2: [7, 8, 9],
    P3: [10, 11, 12]
  };
  var STAGE_BY_FLOOR = {};
  for (var s in STAGE_FLOORS) {
    STAGE_FLOORS[s].forEach(function(f) { STAGE_BY_FLOOR[f] = s; });
  }
  var FLOOR_MAX = 12;
  var PROGRESS_PER_FLOOR = 3;

  function getStage(floor) {
    return STAGE_BY_FLOOR[floor] || null;
  }

  function getPool() {
    return window.PYTHON_QUIZ_POOL;
  }

  function defaultState() {
    return {
      floor: 1,
      floorProgress: 0,
      totalCorrect: 0,
      cleared: false,
      used: {}  // { stage: [no, ...] }
    };
  }

  function loadState() {
    var saved;
    try {
      saved = JSON.parse(localStorage.getItem('python_tower_v1'));
    } catch(e) { saved = null; }
    if (saved && typeof saved.floor === 'number' && saved.floor >= 1 && saved.floor <= 12) {
      saved.used = saved.used || {};
      return saved;
    }
    return defaultState();
  }

  function saveState() {
    try {
      localStorage.setItem('python_tower_v1', JSON.stringify(state));
    } catch(e) {}
  }

  function getQuestionsForStage(stage) {
    var pool = getPool();
    if (!Array.isArray(pool)) return [];
    return pool.filter(function(q) { return q.stage === stage; });
  }

  function randomPick(arr) {
    if (arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function buildChoices(question) {
    return [question.opt_a, question.opt_b, question.opt_c, question.opt_d];
  }

  function answerIndexFromLetter(letter) {
    var map = { a: 0, b: 1, c: 2, d: 3 };
    return map[letter] !== undefined ? map[letter] : -1;
  }

  // 初始化
  state = loadState();

  window.PythonTower = {
    getStatus: function() {
      if (!getPool()) return null;
      var stage = getStage(state.floor);
      return {
        floor: state.floor,
        stage: stage,
        floorProgress: state.floorProgress,
        totalCorrect: state.totalCorrect,
        cleared: state.cleared
      };
    },
    getQuestion: function() {
      if (state.cleared || !getPool()) return null;
      var stage = getStage(state.floor);
      var questions = getQuestionsForStage(stage);
      if (questions.length === 0) return null;
      // 過濾出尚未使用的題目
      var usedNos = state.used[stage] || [];
      var available = questions.filter(function(q) { return usedNos.indexOf(q.no) === -1; });
      if (available.length === 0) {
        // 重置該層 used，重新開始
        state.used[stage] = [];
        available = questions.slice();
      }
      var picked = randomPick(available);
      if (!picked) return null;
      // 記錄使用
      if (!state.used[stage]) state.used[stage] = [];
      state.used[stage].push(picked.no);
      // 儲存當前題目資訊供 submitAnswer 使用
      currentAnswer = {
        answerIndex: answerIndexFromLetter(picked.answer),
        explanation: picked.explanation
      };
      saveState();
      return {
        no: picked.no,
        q_type: picked.q_type,
        question: picked.question,
        code_block: picked.code_block,
        choices: buildChoices(picked),
        answerIndex: currentAnswer.answerIndex,
        explanation: picked.explanation
      };
    },
    submitAnswer: function(idx) {
      if (!getPool() || !currentAnswer) return null;
      var correct = (idx === currentAnswer.answerIndex);
      var explanation = currentAnswer.explanation;
      var advanced = false;
      var newFloor = state.floor;
      if (correct) {
        state.totalCorrect++;
        state.floorProgress++;
        if (state.floorProgress >= PROGRESS_PER_FLOOR) {
          if (state.floor < FLOOR_MAX) {
            state.floor++;
            state.floorProgress = 0;
            advanced = true;
            newFloor = state.floor;
            // 重置新階層的已用記錄
            var newStage = getStage(state.floor);
            if (newStage) {
              state.used[newStage] = [];
            }
          } else {
            // 已經在最高層且答滿三題，登頂
            state.cleared = true;
            advanced = true; // 也可以視為升層到頂
            newFloor = FLOOR_MAX;
          }
        }
      } else {
        state.floorProgress = 0; // 答錯歸零
      }
      // 記錄錯誤題目？不需要。
      saveState();
      return {
        correct: correct,
        floorProgress: state.floorProgress,
        advanced: advanced,
        newFloor: newFloor,
        explanation: explanation
      };
    },
    reset: function() {
      state = defaultState();
      currentAnswer = null;
      saveState();
    }
  };
})();
