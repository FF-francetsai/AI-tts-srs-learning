// RPG 每日挑戰模組 — 每日 Boss 戰、成就徽章、學習連勝
(function(global) {
    // 檢查 DAILY_TERM_POOL
    var pool = global.DAILY_TERM_POOL;
    var valid = Array.isArray(pool) && pool.length >= 4;

    // 種子隨機生成器
    function createRng(seed) {
        var s = seed | 0;
        return function() {
            s = (s + 0x6D2B79F5) | 0;
            var t = Math.imul(s ^ (s >>> 15), 1 | s);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    // 取得今日種子
    function getDaySeed() {
        return Math.floor(Date.now() / 86400000);
    }

    // 獲取今日日期字串
    function getTodayStr() {
        var d = new Date();
        var y = d.getFullYear();
        var m = ('0' + (d.getMonth() + 1)).slice(-2);
        var day = ('0' + d.getDate()).slice(-2);
        return y + '-' + m + '-' + day;
    }

    // 從 localStorage 讀取記錄
    function loadRecord() {
        try {
            var raw = global.localStorage.getItem('rpg_challenge_v1');
            if (raw) return JSON.parse(raw);
        } catch(e) {}
        return { lastWin: null, streak: 0, badges: [], totalCorrect: 0 };
    }

    // 儲存記錄
    function saveRecord(rec) {
        try {
            global.localStorage.setItem('rpg_challenge_v1', JSON.stringify(rec));
        } catch(e) {}
    }

    // 取得今日 Boss 與問題（不依賴外部狀態）
    function buildDailyQuestion() {
        if (!valid) return null;
        var seed = getDaySeed();
        var rng = createRng(seed);
        // 複製索引陣列並打亂
        var indices = [];
        for (var i = 0; i < pool.length; i++) indices.push(i);
        // Fisher-Yates shuffle using rng
        for (var i = indices.length - 1; i > 0; i--) {
            var j = Math.floor(rng() * (i + 1));
            var tmp = indices[i];
            indices[i] = indices[j];
            indices[j] = tmp;
        }
        var bossIdx = indices[0];
        var boss = pool[bossIdx];
        var distractors = [];
        for (var k = 1; k < 4 && k < indices.length; k++) {
            distractors.push(pool[indices[k]]);
        }
        // 若干擾項不足，可能 pool.length 小於 4，但已在 valid 檢查，假設至少有4
        // 構建 choices
        var correctZh = boss.zh;
        var distZh = distractors.map(function(d) { return d.zh; });
        // 隨機放置正確答案位置（使用同一個 rng 但調用多次會改變狀態，但因為每次 buildDailyQuestion 都重新建立 rng，所以狀態一致）
        // 但我們想要正確答案位置也是確定性的，所以用 rng 決定位置
        var pos = Math.floor(rng() * 4); // 0-3
        var choices = [];
        var di = 0;
        for (var i = 0; i < 4; i++) {
            if (i === pos) {
                choices.push(correctZh);
            } else {
                choices.push(distZh[di++]);
            }
        }
        return {
            term: { zh: boss.zh, en: boss.en, def: boss.def },
            question: {
                text: '「' + boss.def + '」描述的是哪個術語？',
                choices: choices,
                answer: pos
            }
        };
    }

    // 取得徽章列表
    function checkBadges(streak, totalCorrect, currentBadges) {
        var newBadges = [];
        var badgeRules = [
            { key: '三日連勝', check: streak >= 3 },
            { key: '七日學霸', check: streak >= 7 },
            { key: 'Boss 獵人', check: totalCorrect >= 10 },
            { key: '星域征服者', check: totalCorrect >= 30 }
        ];
        for (var i = 0; i < badgeRules.length; i++) {
            var rule = badgeRules[i];
            if (rule.check && currentBadges.indexOf(rule.key) === -1) {
                newBadges.push(rule.key);
            }
        }
        return newBadges;
    }

    // 公開 API
    var api = {
        getDailyBoss: function() {
            var q = buildDailyQuestion();
            if (!q) return null;
            return q;
        },
        submitBossAnswer: function(idx) {
            var q = buildDailyQuestion();
            if (!q) {
                return { correct: false, streak: 0, badges: [], newBadges: [] };
            }
            var rec = loadRecord();
            var today = getTodayStr();
            // 如果今天已經答對，則不更新
            if (rec.lastWin === today) {
                // 但還是判斷對錯，但不更新
                var correct = (idx === q.question.answer);
                return { correct: correct, streak: rec.streak, badges: rec.badges, newBadges: [] };
            }
            var correct = (idx === q.question.answer);
            if (correct) {
                // 計算連續天數
                var yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                var yStr = yesterday.getFullYear() + '-' + ('0'+(yesterday.getMonth()+1)).slice(-2) + '-' + ('0'+yesterday.getDate()).slice(-2);
                if (rec.lastWin === yStr) {
                    rec.streak += 1;
                } else if (rec.lastWin === today) {
                    // 已經處理過
                } else {
                    rec.streak = 1;
                }
                rec.lastWin = today;
                rec.totalCorrect = (rec.totalCorrect || 0) + 1;
                // 檢查徽章
                var newBadges = checkBadges(rec.streak, rec.totalCorrect, rec.badges);
                for (var i = 0; i < newBadges.length; i++) {
                    if (rec.badges.indexOf(newBadges[i]) === -1) {
                        rec.badges.push(newBadges[i]);
                    }
                }
                saveRecord(rec);
                return { correct: true, streak: rec.streak, badges: rec.badges, newBadges: newBadges };
            } else {
                // 答錯不更新記錄，但返回當前 streak 和 badges
                return { correct: false, streak: rec.streak, badges: rec.badges, newBadges: [] };
            }
        },
        getStatus: function() {
            var rec = loadRecord();
            var today = getTodayStr();
            var todayDone = (rec.lastWin === today);
            return { todayDone: todayDone, streak: rec.streak, badges: rec.badges };
        }
    };

    global.RPGChallenge = api;
})(window);
