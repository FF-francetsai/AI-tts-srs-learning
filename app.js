/**
 * AI SRS 智慧學習平台 - 核心邏輯
 * 最終美學還原版：完全對接截圖視覺
 */

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
        const synced = JSON.parse(localStorage.getItem('synced_lesson_data') || '[]');
        if (synced.length > 0) window.lessonData = synced;
        App.renderSidebar(window.lessonData);
        App.renderHomeScreen();
        App.updateProgress();
        document.getElementById('toggleTheme').onclick = () => document.body.classList.toggle('light-theme');
    },

    renderSidebar: (data) => {
        const nav = document.getElementById('sidebarNav'); nav.innerHTML = '';
        data.forEach(unit => {
            const unitDiv = document.createElement('div'); unitDiv.className = 'unit-item';
            unitDiv.innerHTML = `<div class="unit-title" style="padding:10px; font-weight:800; cursor:pointer;">${unit.title}</div>`;
            const subList = document.createElement('div'); subList.className = 'sub-unit-list';
            unit.sub_units.forEach(sub => {
                sub.topics.forEach(topic => {
                    const link = document.createElement('div'); link.className = 'topic-link';
                    link.innerHTML = `${topic.id}. ${topic.title}`;
                    link.onclick = () => App.loadTopic(topic);
                    subList.appendChild(link);
                });
            });
            unitDiv.onclick = () => subList.classList.toggle('active');
            unitDiv.appendChild(subList); nav.appendChild(unitDiv);
        });
    },

    loadTopic: (topic) => { App.currentTopic = topic; App.renderDetail(topic); },

    renderDetail: (topic) => {
        const old = document.querySelector('.detail-modal'); if (old) old.remove();
        const modal = document.createElement('div'); modal.className = 'detail-modal';
        modal.innerHTML = `
            <div class="detail-overlay" onclick="App.closeDetail()"></div>
            <div class="detail-content">
                <button class="close-detail-btn" onclick="App.closeDetail()"><i class="fas fa-times"></i></button>
                <div class="topic-header">
                    <h1><span class="topic-no">#${topic.id}</span>${topic.title}</h1>
                    <div class="topic-meta">
                        <span class="meta-badge blue"><i class="fas fa-language"></i> ${topic.eng_name}</span>
                        <span class="meta-badge purple"><i class="fas fa-tag"></i> ${topic.category}</span>
                    </div>
                </div>
                
                <div class="card-content-box">
                    <div class="info-label amber">${topic.key_goal || '執行需人類智慧的任務'}</div>
                    <div class="info-label">定義</div>
                    <div class="info-value">${topic.def}</div>
                    
                    <div class="info-label">企業導入場景</div>
                    <div class="scenarios-list">
                        ${Object.entries(topic.scenarios).map(([key, val]) => val ? `
                            <div class="scenario-item">
                                <span class="scenario-tag">${App._getScenarioLabel(key)}</span>
                                <div class="scenario-val">${val}</div>
                            </div>
                        ` : '').join('')}
                    </div>

                    <div class="srs-btns-grid" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-top:30px;">
                        <button class="srs-btn" style="background:#ef4444;" onclick="App.handleSRS(0)">忘了 (Again)</button>
                        <button class="srs-btn" style="background:#f59e0b;" onclick="App.handleSRS(1)">困難 (Hard)</button>
                        <button class="srs-btn" style="background:#10b981;" onclick="App.handleSRS(2)">答對 (Good)</button>
                        <button class="srs-btn" style="background:#3b82f6;" onclick="App.handleSRS(3)">秒答 (Easy)</button>
                    </div>

                    <button class="quiz-start-btn"><i class="fas fa-edit"></i> 開始測驗</button>
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
                    <div id="zone-ai"></div>
                    <div class="nzone nzone-ml">
                        <div class="nzone-label"><span class="nzone-name">機器學習 <em>Machine Learning</em></span><span class="nzone-scope">AI 子集</span></div>
                        <div id="zone-ml"></div>
                        <div class="nzone nzone-nn">
                            <div class="nzone-label"><span class="nzone-name">類神經網路 <em>Neural Networks</em></span><span class="nzone-scope">ML 子集</span></div>
                            <div id="zone-nn"></div>
                            <div class="nzone nzone-dl">
                                <div class="nzone-label"><span class="nzone-name">深度學習 <em>Deep Learning</em></span><span class="nzone-scope">NN 子集</span></div>
                                <div id="zone-dl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const fillZone = (id, filterFn) => {
            const el = document.getElementById(id);
            allTopics.filter(filterFn).slice(0, 6).forEach(t => {
                const b = document.createElement('span'); b.className = 'zone-badge'; b.textContent = t.title;
                b.onclick = () => App.loadTopic(t);
                el.appendChild(b);
            });
        };
        fillZone('zone-dl', t => t.category.includes('深度學習'));
        fillZone('zone-nn', t => t.category.includes('神經網路'));
        fillZone('zone-ml', t => t.category.includes('機器學習'));
        fillZone('zone-ai', t => !t.category.includes('學習'));
    },

    updateProgress: () => {
        const stats = SRSManager.getStats(); const reviewed = Object.keys(stats).length;
        const text = document.getElementById('progressText'); if (text) text.textContent = `熟練度: ${Math.round(reviewed/631*100)}%`;
    },

    speakEng: (text) => {
        App.synth.cancel(); const utter = new SpeechSynthesisUtterance(text); utter.lang = 'en-US'; App.synth.speak(utter);
    }
};
window.onload = App.init;
