/**
 * AI SRS 智慧學習平台 - 核心邏輯
 * 最終還原版：完全對接截圖 V4 美學與功能
 */

const SyncManager = {
    load: () => {
        const d = localStorage.getItem('synced_lesson_data');
        const q = localStorage.getItem('synced_quiz_bank');
        return (d && q) ? { lessonData: JSON.parse(d), quizBank: JSON.parse(q) } : null;
    }
};

const SRSManager = {
    getStats: () => JSON.parse(localStorage.getItem('study_stats') || '{}'),
    saveStats: (stats) => localStorage.setItem('study_stats', JSON.stringify(stats)),
    updateCard: (id, grade) => {
        const stats = SRSManager.getStats();
        let card = stats[id] || { interval: 0, repetition: 0, efactor: 2.5, dueDate: Date.now() };
        if (grade >= 2) {
            if (card.repetition === 0) card.interval = 1;
            else if (card.repetition === 1) card.interval = 4;
            else card.interval = Math.round(card.interval * card.efactor);
            card.repetition++;
        } else {
            card.repetition = 0; card.interval = 1;
        }
        card.dueDate = Date.now() + card.interval * 24 * 60 * 60 * 1000;
        stats[id] = card; SRSManager.saveStats(stats);
    }
};

const App = {
    currentTopic: null, synth: window.speechSynthesis,
    
    init: () => {
        const synced = SyncManager.load();
        if (synced) { window.lessonData = synced.lessonData; window.quizBank = synced.quizBank; }
        App.renderSidebar(window.lessonData);
        App.bindEvents();
        App.renderHomeScreen();
        App.updateProgress();
    },

    renderSidebar: (data) => {
        const nav = document.getElementById('sidebarNav'); nav.innerHTML = '';
        data.forEach(unit => {
            const unitDiv = document.createElement('div'); unitDiv.className = 'unit-item';
            unitDiv.innerHTML = `<div class="unit-title">${unit.title} <i class="fas fa-chevron-down"></i></div>`;
            const subList = document.createElement('div'); subList.className = 'sub-unit-list';
            unit.sub_units.forEach(sub => {
                const subHeader = document.createElement('div'); subHeader.className = 'sub-unit-header';
                subHeader.style = "padding: 8px 10px; font-size: 0.8rem; font-weight: 800; color: var(--accent-color);";
                subHeader.textContent = sub.title; subList.appendChild(subHeader);
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
                <button class="close-detail-btn" onclick="App.closeDetail()"><i class="fas fa-times"></i></button>
                <div class="topic-header">
                    <h1><span style="font-family:monospace; margin-right:15px; opacity:0.6;">#${topic.id}</span>${topic.title}</h1>
                    <div class="topic-meta" style="display:flex; gap:10px; margin-top:10px;">
                        <span class="meta-badge" style="background:rgba(56,189,248,0.15); color:#38bdf8; padding:5px 12px; border-radius:20px; font-size:0.8rem; font-weight:700;">英：${topic.eng_name}</span>
                        <span class="meta-badge" style="background:rgba(167,139,250,0.15); color:#a78bfa; padding:5px 12px; border-radius:20px; font-size:0.8rem; font-weight:700;">類：${topic.category}</span>
                    </div>
                </div>
                <div class="card-3d">
                    <div class="card-inner" onclick="this.classList.toggle('flipped')">
                        <div class="card-front">
                            <div class="term-title"><span style="font-family:monospace; margin-right:15px; opacity:0.4;">#${topic.id}</span>${topic.title}</div>
                            <div class="term-eng-row" style="margin-top:15px;">
                                <span style="font-size:1.2rem; color:var(--text-dim);">${topic.eng_name}</span>
                                <button class="tts-icon-btn" onclick="event.stopPropagation(); App.speakEng('${topic.eng_name.replace(/'/g, "\\'")}')"><i class="fas fa-volume-up"></i></button>
                            </div>
                            <p style="margin-top:40px; opacity:0.6;">點擊翻轉查看詳細解析</p>
                        </div>
                        <div class="card-back">
                            <div class="card-back-scroll">
                                <div class="info-group"><div class="info-label" style="color:#f59e0b; font-size:1.2rem; font-weight:800; margin-bottom:10px;">${topic.key_goal || '執行需人類智慧的任務'}</div></div>
                                <div class="info-group"><div class="info-label" style="color:#0ea5e9; font-weight:800;">定義</div><div class="info-value" style="color:#111827;">${topic.def}</div></div>
                                <div class="info-group"><div class="info-label" style="color:#0ea5e9; font-weight:800;">企業導入場景</div>
                                    <div class="scenarios-list">
                                        ${Object.entries(topic.scenarios).map(([k,v]) => v ? `<div class="scenario-item" style="background:white; border:1px solid #e2e8f0; border-radius:12px; padding:12px; margin-bottom:10px;"><span style="background:#e0f2fe; color:#0284c7; padding:2px 10px; border-radius:8px; font-size:0.75rem; font-weight:800;">${App._getScenarioLabel(k)}</span><div style="font-weight:600; color:#1f2937; margin-top:5px;">${v}</div></div>` : '').join('')}
                                    </div>
                                </div>
                                <div class="srs-btns-grid" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-top:20px;">
                                    <button class="srs-btn" style="background:#ef4444; border:none; color:white; padding:12px; border-radius:12px; font-weight:800;" onclick="App.handleSRS(0)">忘了 (Again)</button>
                                    <button class="srs-btn" style="background:#f59e0b; border:none; color:white; padding:12px; border-radius:12px; font-weight:800;" onclick="App.handleSRS(1)">困難 (Hard)</button>
                                    <button class="srs-btn" style="background:#10b981; border:none; color:white; padding:12px; border-radius:12px; font-weight:800;" onclick="App.handleSRS(2)">答對 (Good)</button>
                                    <button class="srs-btn" style="background:#3b82f6; border:none; color:white; padding:12px; border-radius:12px; font-weight:800;" onclick="App.handleSRS(3)">秒答 (Easy)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    _getScenarioLabel: (key) => {
        const labels = { weather: '氣象與防災', agri: '農業漁業與畜牧', traffic: '交通與物流', industry: '生產與製造', finance: '科技金融與醫學', life: '客服零售與生活', fire: '消防與公共安全' };
        return labels[key] || key;
    },

    handleSRS: (grade) => { SRSManager.updateCard(App.currentTopic.id, grade); App.updateProgress(); App.closeDetail(); },
    closeDetail: () => { const m = document.querySelector('.detail-modal'); if (m) m.remove(); },

    renderHomeScreen: () => {
        const container = document.getElementById('topicContent');
        const allTopics = lessonData.flatMap(u => u.sub_units.flatMap(s => s.topics));
        const learned = Object.keys(SRSManager.getStats()).length;
        
        container.innerHTML = `
            <div class="home-hero">
                <h1>🗺️ AI 知識地圖</h1>
                <p class="home-sub" style="color:var(--text-dim); margin-bottom:15px;">探索 <strong>AI ⊃ ML ⊃ 類神經網路 ⊃ 深度學習</strong> 的巢狀知識體系，點擊主題開始學習</p>
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
                    <div class="nzone-label"><span class="nzone-name">人工智慧 <em>Artificial Intelligence</em></span><span class="nzone-scope">廣義範疇</span></div>
                    <div class="nzone-badges" id="zone-ai"></div>
                    <div class="nzone nzone-ml">
                        <div class="nzone-label"><span class="nzone-name">機器學習 <em>Machine Learning</em></span><span class="nzone-scope">AI 子集</span></div>
                        <div class="nzone-badges" id="zone-ml"></div>
                        <div class="nzone nzone-nn">
                            <div class="nzone-label"><span class="nzone-name">類神經網路 <em>Neural Networks</em></span><span class="nzone-scope">ML 子集</span></div>
                            <div class="nzone-badges" id="zone-nn"></div>
                            <div class="nzone nzone-dl">
                                <div class="nzone-label"><span class="nzone-icon">⚡</span><span class="nzone-name">深度學習 <em>Deep Learning</em></span><span class="nzone-scope">NN 子集</span></div>
                                <div class="nzone-badges" id="zone-dl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-actions" style="display:flex; gap:15px; margin-top:25px;">
                <button class="home-action-btn" id="randomStartBtn" style="flex:1; padding:18px; border-radius:16px; background:linear-gradient(135deg,#38bdf8,#6366f1); color:white; border:none; font-size:1.1rem; font-weight:800; cursor:pointer;"><i class="fas fa-random"></i> 隨機開始學習</button>
                <button class="home-action-btn secondary" id="wrongQuizBtn" style="flex:1; padding:18px; border-radius:16px; background:linear-gradient(135deg,#f87171,#ef4444); color:white; border:none; font-size:1.1rem; font-weight:800; cursor:pointer;"><i class="fas fa-exclamation-triangle"></i> 錯題補救測驗</button>
            </div>
        `;

        const fillZone = (id, filterFn) => {
            const el = document.getElementById(id);
            allTopics.filter(filterFn).slice(0, 8).forEach(t => {
                const b = document.createElement('span'); b.className = 'zone-badge'; b.textContent = t.title;
                b.onclick = () => App.loadTopic(t);
                el.appendChild(b);
            });
        };
        fillZone('zone-dl', t => t.category.includes('深度學習'));
        fillZone('zone-nn', t => t.category.includes('神經網路'));
        fillZone('zone-ml', t => t.category.includes('機器學習') || t.category.includes('數據'));
        fillZone('zone-ai', t => !t.category.includes('學習'));

        document.getElementById('randomStartBtn').onclick = () => App.loadTopic(allTopics[Math.floor(Math.random()*allTopics.length)]);
    },

    updateProgress: () => {
        const stats = SRSManager.getStats(); const reviewed = Object.keys(stats).length;
        const bar = document.getElementById('progressBar'); if (bar) bar.style.width = `${Math.round(reviewed/631*100)}%`;
        const txt = document.getElementById('progressText'); if (txt) txt.textContent = `熟練度: ${Math.round(reviewed/631*100)}% (${reviewed}/631)`;
    },

    bindEvents: () => {
        document.getElementById('toggleTheme').onclick = () => document.body.classList.toggle('light-theme');
        const logo = document.querySelector('.logo'); if (logo) logo.onclick = () => App.renderHomeScreen();
    },

    speakEng: (text) => {
        App.synth.cancel(); const utter = new SpeechSynthesisUtterance(text); utter.lang = 'en-US'; App.synth.speak(utter);
    }
};

window.onload = App.init;
