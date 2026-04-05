/**
 * AI SRS 智慧學習平台 - 核心邏輯 (精修版)
 */

// --- 0. 資料同步管理員 ---
const SyncManager = {
    SHEET_ID: '1HxfWzkcTiO49OjzzaGXL6PaXXblnAwaIzg7kabGLpK0',
    PRO_QUIZ_GID: '72198410',
    QUIZ_BANK_GID: '294084716',

    fetchCSV: async (gid) => {
        const url = `https://docs.google.com/spreadsheets/d/${SyncManager.SHEET_ID}/export?format=csv&gid=${gid}`;
        try {
            const response = await fetch(url, { method: 'GET', credentials: 'omit', mode: 'cors', cache: 'no-cache' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.text();
        } catch (err) { throw err; }
    },

    parseCSV: (text) => {
        const rows = []; let row = []; let col = ""; let inQuotes = false;
        for (let i = 0; i < text.length; i++) {
            const char = text[i]; const next = text[i + 1];
            if (inQuotes) {
                if (char === '"' && next === '"') { col += '"'; i++; }
                else if (char === '"') { inQuotes = false; }
                else { col += char; }
            } else {
                if (char === '"') { inQuotes = true; }
                else if (char === ',') { row.push(col.trim()); col = ""; }
                else if (char === '\n' || char === '\r') {
                    row.push(col.trim());
                    if (row.length > 1 || row[0] !== "") rows.push(row);
                    row = []; col = "";
                    if (char === '\r' && next === '\n') i++;
                } else { col += char; }
            }
        }
        if (col || row.length > 0) { row.push(col.trim()); rows.push(row); }
        const headers = rows[0];
        return rows.slice(1).map(r => {
            const obj = {}; headers.forEach((h, idx) => { obj[h] = r[idx] || ""; });
            return obj;
        });
    },

    transformData: (proQuizRows, quizBankRows) => {
        const topics = {};
        proQuizRows.forEach(row => {
            const no = row['編號'] || row['no']; if (!no) return;
            topics[no] = {
                id: no, subject: (row['科目'] || "").replace(/\n/g, ' '),
                category: row['主題'] || "", principle: row['七大原則'] || "",
                title: row['繁體中文'] || "", eng_name: row['英文全名'] || "",
                eng_abbr: row['英文縮寫'] || "", def: row['定義'] || "",
                key_goal: row['核心目標'] || "", key_purpose: row['用途'] || "",
                scenarios: {
                    weather: row['氣象與防災'] || "", agri: row['農業漁業與畜牧'] || "",
                    traffic: row['交通與物流'] || "", industry: row['生產與製造（工業4.0）'] || "",
                    finance: row['科技金融與醫學'] || "", life: row['客服零售與生活'] || "",
                    fire: row['消防與公共安全'] || ""
                },
                detail_explain: row['詳細解析'] || ""
            };
        });
        const finalQuizBank = {};
        quizBankRows.forEach(row => {
            const no = row['no']; if (!no) return;
            if (!finalQuizBank[no]) finalQuizBank[no] = [];
            finalQuizBank[no].push({
                q: row['question'] || "", opts: [row['optA'] || "", row['optB'] || "", row['optC'] || "", row['optD'] || ""],
                ans: row['correctAns'] || "", explain: row['explanation'] || ""
            });
        });
        const unitMap = {};
        Object.values(topics).forEach(t => {
            const sub = t.subject; const cat = t.category;
            if (!unitMap[sub]) unitMap[sub] = {};
            if (!unitMap[sub][cat]) unitMap[sub][cat] = [];
            unitMap[sub][cat].push(t);
        });
        const finalLessonData = Object.entries(unitMap).map(([sub, cats]) => ({
            title: sub, sub_units: Object.entries(cats).map(([cat, ts]) => ({ title: cat, topics: ts }))
        }));
        return { lessonData: finalLessonData, quizBank: finalQuizBank };
    },

    save: (data, quizzes) => {
        localStorage.setItem('synced_lesson_data', JSON.stringify(data));
        localStorage.setItem('synced_quiz_bank', JSON.stringify(quizzes));
        localStorage.setItem('last_sync_time', new Date().toLocaleString());
    },

    load: () => {
        const d = localStorage.getItem('synced_lesson_data');
        const q = localStorage.getItem('synced_quiz_bank');
        return (d && q) ? { lessonData: JSON.parse(d), quizBank: JSON.parse(q) } : null;
    }
};

// --- 1. SRS 記憶引擎 ---
const SRSManager = {
    getStats: () => JSON.parse(localStorage.getItem('study_stats') || '{}'),
    saveStats: (stats) => localStorage.setItem('study_stats', JSON.stringify(stats)),
    getWrongTopics: () => {
        const stats = SRSManager.getStats();
        return Object.keys(stats).filter(id => stats[id].wrongCount > 0 || stats[id].lastResult === 'wrong');
    },
    updateCard: (id, grade) => {
        const stats = SRSManager.getStats();
        let card = stats[id] || { interval: 0, repetition: 0, efactor: 2.5, dueDate: Date.now(), wrongCount: 0, lastResult: 'none' };
        if (grade >= 2) {
            if (card.repetition === 0) card.interval = 1;
            else if (card.repetition === 1) card.interval = 4;
            else card.interval = Math.round(card.interval * card.efactor);
            card.repetition++; card.lastResult = 'correct';
        } else {
            card.repetition = 0; card.interval = 1; card.wrongCount = (card.wrongCount || 0) + 1; card.lastResult = 'wrong';
        }
        card.efactor = Math.max(1.3, card.efactor + (0.1 - (3 - grade) * (0.08 + (3 - grade) * 0.02)));
        const days = grade === 0 ? 0 : card.interval;
        card.dueDate = Date.now() + days * 24 * 60 * 60 * 1000;
        stats[id] = card; SRSManager.saveStats(stats);
        return card;
    },
    getDueTopics: () => {
        const stats = SRSManager.getStats(); const now = Date.now();
        return Object.keys(stats).filter(id => stats[id].dueDate <= now);
    }
};

// --- 2. 測驗引擎 ---
const QuizManager = {
    currentQuizList: [], currentIndex: 0,
    initQuiz: (topicId) => {
        const questions = quizBank[topicId] || []; if (questions.length === 0) return false;
        QuizManager.currentQuizList = [...questions].sort(() => Math.random() - 0.5);
        QuizManager.currentIndex = 0; return true;
    },
    initWrongQuiz: () => {
        const wrongIds = SRSManager.getWrongTopics(); if (wrongIds.length === 0) return false;
        let allQ = []; wrongIds.forEach(id => { allQ = allQ.concat(quizBank[id] || []); });
        if (allQ.length === 0) return false;
        QuizManager.currentQuizList = allQ.sort(() => Math.random() - 0.5).slice(0, 10);
        QuizManager.currentIndex = 0; return true;
    },
    renderCurrent: (isModal = false) => {
        const q = QuizManager.currentQuizList[QuizManager.currentIndex];
        const container = document.getElementById(isModal ? 'quizContainerInModal' : 'quizContainer');
        const qEl = document.getElementById(isModal ? 'modalQuizQuestion' : 'quizQuestion');
        const optEl = document.getElementById(isModal ? 'modalQuizOptions' : 'quizOptions');
        const feedback = document.getElementById(isModal ? 'modalQuizFeedback' : 'quizFeedback');
        const nextBtn = document.getElementById(isModal ? 'modalNextQuestionBtn' : 'nextQuestionBtn');
        const srsActions = document.getElementById(isModal ? 'modalSrsActions' : 'srsActions');
        if (!q || !container) return;
        qEl.textContent = `(Q${QuizManager.currentIndex + 1}/${QuizManager.currentQuizList.length}) ${q.q}`;
        optEl.innerHTML = ''; feedback.classList.add('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');
        if (srsActions) srsActions.classList.add('hidden');
        container.classList.remove('hidden');
        const labels = ['A', 'B', 'C', 'D'];
        q.opts.forEach((opt, idx) => {
            if (!opt) return;
            const btn = document.createElement('div'); btn.className = 'quiz-opt';
            btn.textContent = `${labels[idx]}. ${opt}`;
            btn.onclick = () => QuizManager.checkAnswer(labels[idx], q.ans, q.explain, isModal);
            optEl.appendChild(btn);
        });
    },
    checkAnswer: (selected, correct, explain, isModal = false) => {
        const optEl = document.getElementById(isModal ? 'modalQuizOptions' : 'quizOptions');
        const opts = optEl.querySelectorAll('.quiz-opt');
        opts.forEach(opt => {
            if (opt.textContent.startsWith(correct)) opt.classList.add('correct');
            else if (opt.textContent.startsWith(selected)) opt.classList.add('wrong');
            opt.onclick = null;
        });
        const feedback = document.getElementById(isModal ? 'modalQuizFeedback' : 'quizFeedback');
        const explainEl = document.getElementById(isModal ? 'modalQuizExplain' : 'quizExplain');
        const nextBtn = document.getElementById(isModal ? 'modalNextQuestionBtn' : 'nextQuestionBtn');
        const srsActions = document.getElementById(isModal ? 'modalSrsActions' : 'srsActions');
        explainEl.innerHTML = `<strong>解析：</strong><br>${explain}`;
        feedback.classList.remove('hidden');
        if (QuizManager.currentIndex < QuizManager.currentQuizList.length - 1) {
            if (nextBtn) {
                nextBtn.classList.remove('hidden');
                nextBtn.onclick = () => { QuizManager.currentIndex++; QuizManager.renderCurrent(isModal); };
            }
        } else {
            if (srsActions) srsActions.classList.remove('hidden');
            const detailExplain = document.getElementById('modalTopicDetailExplain');
            if (detailExplain) detailExplain.classList.remove('hidden');
        }
        feedback.scrollIntoView({ behavior: 'smooth' });
    }
};

// --- 3. UI 控制中心 ---
const App = {
    currentTopic: null, isSRSMode: false, synth: window.speechSynthesis,
    init: () => {
        const synced = SyncManager.load();
        if (synced) { window.lessonData = synced.lessonData; window.quizBank = synced.quizBank; }
        App.renderSidebar(window.lessonData); App.bindEvents(); App.updateProgress(); App.renderHomeScreen();
    },
    renderSidebar: (data) => {
        const nav = document.getElementById('sidebarNav'); nav.innerHTML = '';
        data.forEach(unit => {
            const unitDiv = document.createElement('div'); unitDiv.className = 'unit-item';
            unitDiv.innerHTML = `<div class="unit-title">${unit.title} <i class="fas fa-chevron-down"></i></div>`;
            const subList = document.createElement('div'); subList.className = 'sub-unit-list';
            unit.sub_units.forEach(sub => {
                const subHeader = document.createElement('div'); subHeader.className = 'sub-unit-header'; subHeader.textContent = sub.title; subList.appendChild(subHeader);
                sub.topics.forEach(topic => {
                    const link = document.createElement('div'); link.className = 'topic-link';
                    link.innerHTML = `<i class="fas fa-file-alt"></i> ${topic.id}. ${topic.title}`;
                    link.onclick = (e) => { e.stopPropagation(); App.loadTopic(topic); };
                    subList.appendChild(link);
                });
            });
            unitDiv.querySelector('.unit-title').onclick = () => subList.classList.toggle('active');
            unitDiv.appendChild(subList); nav.appendChild(unitDiv);
        });
    },
    loadTopic: (topic) => { App.currentTopic = topic; App.renderDetail(topic); },
    renderDetail: (topic) => {
        const old = document.querySelector('.detail-modal'); if (old) old.remove();
        const modal = document.createElement('div'); modal.className = 'detail-modal';
        modal.innerHTML = `
            <div class="detail-overlay" onclick="App.closeDetail()"></div>
            <div class="detail-content glass-panel">
                <button class="close-detail-btn" onclick="App.closeDetail()" title="關閉"><i class="fas fa-times"></i></button>
                <div class="topic-header">
                    <h1><span class="topic-no">#${topic.id}</span>${topic.title}</h1>
                    <div class="topic-meta">
                        <span class="meta-badge">英：${topic.eng_name}</span>
                        <span class="meta-badge">類：${topic.category}</span>
                    </div>
                </div>
                <div class="card-3d">
                    <div class="card-inner" onclick="this.classList.toggle('flipped')">
                        <div class="card-front">
                            <div class="term-title"><span class="term-no-front">#${topic.id}</span>${topic.title}</div>
                            <div class="term-eng-row" style="margin-top:15px;">
                                <span>${topic.eng_name}</span>
                                <button class="tts-icon-btn" onclick="event.stopPropagation(); App.speakEng('${topic.eng_name.replace(/'/g, "\\'")}')"><i class="fas fa-volume-up"></i></button>
                            </div>
                            <p style="margin-top:40px; opacity:0.6;">點擊翻轉</p>
                        </div>
                        <div class="card-back">
                            <div class="card-back-scroll">
                                <div class="info-group"><div class="info-label">核心目標</div><div class="info-value">${topic.key_goal || '見解析'}</div></div>
                                <div class="info-group"><div class="info-label">用途</div><div class="info-value primary-text">${topic.key_purpose || '見解析'}</div></div>
                                <div class="info-group"><div class="info-label">定義</div><div class="info-value">${topic.def}</div></div>
                                <div class="scenario-grid">
                                    ${Object.entries(topic.scenarios).map(([k, v]) => v ? `<div class="scenario-item"><span class="scenario-tag">${k}</span><span class="scenario-val">${v}</span></div>` : '').join('')}
                                </div>
                                <div class="srs-btns-grid" style="margin-top:20px;">
                                    <button class="srs-btn again" data-grade="0">Again</button>
                                    <button class="srs-btn hard" data-grade="1">Hard</button>
                                    <button class="srs-btn good" data-grade="2">Good</button>
                                    <button class="srs-btn easy" data-grade="3">Easy</button>
                                </div>
                                <button class="control-btn quiz-start-btn" id="startQuizInModal" style="margin-top:15px; width:100%;">開始測驗</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="quizContainerInModal" class="hidden glass-panel" style="margin-top:20px; padding:20px;">
                    <div id="modalQuizQuestion" style="font-weight:700; margin-bottom:15px;"></div>
                    <div id="modalQuizOptions" class="quiz-options"></div>
                    <div id="modalQuizFeedback" class="quiz-feedback hidden">
                        <div id="modalQuizExplain"></div>
                        <div id="modalTopicDetailExplain" class="hidden" style="margin-top:15px; background:rgba(255,255,255,0.05); padding:10px;">
                            <strong>主題核心解析：</strong><br>${topic.detail_explain}
                        </div>
                        <button id="modalNextQuestionBtn" class="control-btn hidden" style="width:100%; margin-top:10px;">下一題</button>
                        <div id="modalSrsActions" class="srs-btns-grid hidden" style="margin-top:10px;">
                            <button class="srs-btn again" data-grade="0">Again</button>
                            <button class="srs-btn hard" data-grade="1">Hard</button>
                            <button class="srs-btn good" data-grade="2">Good</button>
                            <button class="srs-btn easy" data-grade="3">Easy</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.querySelectorAll('.srs-btn').forEach(btn => {
            btn.onclick = () => { SRSManager.updateCard(topic.id, parseInt(btn.dataset.grade)); App.updateProgress(); App.closeDetail(); };
        });
        document.getElementById('startQuizInModal').onclick = () => { if (QuizManager.initQuiz(topic.id)) QuizManager.renderCurrent(true); };
    },
    closeDetail: () => { const m = document.querySelector('.detail-modal'); if (m) { m.remove(); } },
    renderHomeScreen: () => {
        const container = document.getElementById('topicContent');
        const allTopics = lessonData.flatMap(u => u.sub_units.flatMap(s => s.topics));
        const learned = Object.keys(SRSManager.getStats()).length;
        
        container.innerHTML = `
            <div class="home-hero">
                <h1>🗺️ AI 知識地圖</h1>
                <p class="home-sub">探索 <strong>AI ⊃ ML ⊃ 類神經網路 ⊃ 深度學習</strong> 的巢狀知識體系，點擊任意主題開始學習</p>
                <div class="hero-stats">
                    <span class="stat-item"><i class="fas fa-book"></i> ${allTopics.length} 個術語</span>
                    <span class="stat-divider">|</span>
                    <span class="stat-item"><i class="fas fa-check-circle"></i> ${learned} 已掌握</span>
                    <span class="stat-divider">|</span>
                    <span class="stat-item"><i class="fas fa-chart-line"></i> ${Math.round(learned / (allTopics.length || 1) * 100)}% 完成度</span>
                </div>
            </div>
            <div class="nested-map">
                <div class="nzone nzone-ai">
                    <div class="nzone-label"><span class="nzone-icon">🤖</span><span class="nzone-name">人工智慧 <em>Artificial Intelligence</em></span><span class="nzone-scope">最廣義範疇</span></div>
                    <p class="nzone-desc">讓機器模擬人類智慧的技術全集合</p>
                    <div class="nzone-badges" id="zone-ai"></div>
                    <div class="nzone nzone-ml">
                        <div class="nzone-label"><span class="nzone-icon">📊</span><span class="nzone-name">機器學習 <em>Machine Learning</em></span><span class="nzone-scope">AI 子集</span></div>
                        <div class="nzone-badges" id="zone-ml"></div>
                        <div class="nzone nzone-nn">
                            <div class="nzone-label"><span class="nzone-icon">🧠</span><span class="nzone-name">類神經網路 <em>Neural Networks</em></span><span class="nzone-scope">ML 子集</span></div>
                            <div class="nzone-badges" id="zone-nn"></div>
                            <div class="nzone nzone-dl">
                                <div class="nzone-label"><span class="nzone-icon">⚡</span><span class="nzone-name">深度學習 <em>Deep Learning</em></span><span class="nzone-scope">NN 子集</span></div>
                                <div class="nzone-badges" id="zone-dl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-actions">
                <button class="home-action-btn" id="randomStartBtn"><i class="fas fa-random"></i> 隨機開始學習</button>
            </div>
        `;

        // 填充 Badges 並綁定點擊事件
        const fillZone = (id, filterFn) => {
            const el = document.getElementById(id);
            allTopics.filter(filterFn).slice(0, 6).forEach(t => {
                const b = document.createElement('span'); b.className = 'zone-badge'; b.textContent = t.title;
                b.onclick = () => App.loadTopic(t);
                el.appendChild(b);
            });
        };
        fillZone('zone-dl', t => t.category.includes('深度學習'));
        fillZone('zone-nn', t => t.category.includes('神經網路') || t.category.includes('訓練'));
        fillZone('zone-ml', t => t.category.includes('機器學習') || t.category.includes('數據'));
        fillZone('zone-ai', t => !t.category.includes('學習') && !t.category.includes('網路'));

        document.getElementById('randomStartBtn').onclick = () => App.loadTopic(allTopics[Math.floor(Math.random()*allTopics.length)]);
    },
    updateProgress: () => {
        const stats = SRSManager.getStats(); const reviewed = Object.keys(stats).length; const total = 631;
        const percent = Math.round((reviewed / total) * 100);
        const text = document.getElementById('progressText'); if (text) text.textContent = `熟練度: ${percent}% (${reviewed}/${total})`;
        const bar = document.getElementById('progressBar'); if (bar) bar.style.width = `${percent}%`;
    },
    bindEvents: () => {
        document.getElementById('toggleTheme').onclick = () => document.body.classList.toggle('light-theme');
        document.getElementById('fontUp').onclick = () => { document.querySelector('.content-area').style.fontSize = '1.1em'; };
        document.getElementById('fontDown').onclick = () => { document.querySelector('.content-area').style.fontSize = '0.9em'; };
        const logo = document.querySelector('.logo'); if (logo) logo.onclick = () => App.renderHomeScreen();
    },
    speakEng: (text) => {
        App.synth.cancel(); const utter = new SpeechSynthesisUtterance(text); utter.lang = 'en-US'; utter.rate = 0.8;
        const voices = App.synth.getVoices(); utter.voice = voices.find(v => v.lang.startsWith('en')) || null;
        App.synth.speak(utter);
    }
};
window.onload = App.init;
