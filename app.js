/**
 * AI SRS 智慧學習平台 - 核心邏輯
 * 恢復 V4.0 美學架構 + 整合 V4.4 功能優化
 */

const SyncManager = {
    SHEET_ID: '1HxfWzkcTiO49OjzzaGXL6PaXXblnAwaIzg7kabGLpK0',
    PRO_QUIZ_GID: '72198410',
    QUIZ_BANK_GID: '294084716',

    fetchCSV: async (gid) => {
        const url = `https://docs.google.com/spreadsheets/d/${SyncManager.SHEET_ID}/export?format=csv&gid=${gid}`;
        const response = await fetch(url);
        return await response.text();
    },

    parseCSV: (text) => {
        const rows = []; let row = []; let col = ""; let inQuotes = false;
        for (let i = 0; i < text.length; i++) {
            const char = text[i]; const next = text[i + 1];
            if (inQuotes) {
                if (char === '"' && next === '"') { col += '"'; i++; }
                else if (char === '"') inQuotes = false;
                else col += char;
            } else {
                if (char === '"') inQuotes = true;
                else if (char === ',') { row.push(col.trim()); col = ""; }
                else if (char === '\n' || char === '\r') {
                    row.push(col.trim()); if (row.length > 1 || row[0] !== "") rows.push(row);
                    row = []; col = ""; if (char === '\r' && next === '\n') i++;
                } else col += char;
            }
        }
        if (col || row.length > 0) { row.push(col.trim()); rows.push(row); }
        const headers = rows[0];
        return rows.slice(1).map(r => {
            const obj = {}; headers.forEach((h, idx) => { obj[h] = r[idx] || ""; });
            return obj;
        });
    },

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
        let card = stats[id] || { interval: 0, repetition: 0, efactor: 2.5, dueDate: Date.now(), wrongCount: 0 };
        if (grade >= 2) {
            if (card.repetition === 0) card.interval = 1;
            else if (card.repetition === 1) card.interval = 4;
            else card.interval = Math.round(card.interval * card.efactor);
            card.repetition++;
        } else {
            card.repetition = 0; card.interval = 1; card.wrongCount = (card.wrongCount || 0) + 1;
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
                const subHeader = document.createElement('div'); subHeader.className = 'sub-unit-header'; subHeader.style.padding = '8px 10px'; subHeader.style.fontSize = '0.8rem'; subHeader.style.color = 'var(--accent-color)';
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
                            <div class="term-eng-row" style="margin-top:15px; display:flex; align-items:center; gap:10px;">
                                <span style="font-size:1.2rem; color:var(--text-dim);">${topic.eng_name}</span>
                                <button class="tts-icon-btn" onclick="event.stopPropagation(); App.speakEng('${topic.eng_name.replace(/'/g, "\\'")}')"><i class="fas fa-volume-up"></i></button>
                            </div>
                            <p style="margin-top:40px; opacity:0.6;">點擊翻轉查看詳細解析</p>
                        </div>
                        <div class="card-back">
                            <div class="card-back-scroll">
                                <div class="info-group"><div class="info-label">核心目標</div><div class="info-value">${topic.key_goal || '請見詳細解析'}</div></div>
                                <div class="info-group"><div class="info-label">用途</div><div class="info-value primary-text">${topic.key_purpose || '請見詳細解析'}</div></div>
                                <div class="info-group"><div class="info-label">定義</div><div class="info-value" style="font-size:0.95rem; line-height:1.6;">${topic.def}</div></div>
                                <div class="srs-btns-grid" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-top:20px;">
                                    <button class="srs-btn again" data-grade="0" style="background:var(--srs-again); color:white; border:none; padding:10px; border-radius:8px; font-weight:700;">Again</button>
                                    <button class="srs-btn hard" data-grade="1" style="background:var(--srs-hard); color:white; border:none; padding:10px; border-radius:8px; font-weight:700;">Hard</button>
                                    <button class="srs-btn good" data-grade="2" style="background:var(--srs-good); color:white; border:none; padding:10px; border-radius:8px; font-weight:700;">Good</button>
                                    <button class="srs-btn easy" data-grade="3" style="background:var(--srs-easy); color:white; border:none; padding:10px; border-radius:8px; font-weight:700;">Easy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.querySelectorAll('.srs-btn').forEach(btn => {
            btn.onclick = (e) => { e.stopPropagation(); SRSManager.updateCard(topic.id, parseInt(btn.dataset.grade)); App.updateProgress(); App.closeDetail(); };
        });
    },

    closeDetail: () => { const m = document.querySelector('.detail-modal'); if (m) m.remove(); },

    renderHomeScreen: () => {
        const container = document.getElementById('topicContent');
        const allTopics = lessonData.flatMap(u => u.sub_units.flatMap(s => s.topics));
        const learned = Object.keys(SRSManager.getStats()).length;
        
        container.innerHTML = `
            <div class="home-hero">
                <h1>🗺️ AI 知識地圖</h1>
                <p class="home-sub">探索 <strong>AI ⊃ ML ⊃ 類神經網路 ⊃ 深度學習</strong> 的巢狀知識體系，點擊主題開始學習</p>
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
                    <div class="nzone-label"><span class="nzone-icon">🤖</span><span class="nzone-name">人工智慧 <em>Artificial Intelligence</em></span><span class="nzone-scope">廣義範疇</span></div>
                    <p class="nzone-desc">讓機器模擬人類智慧，包含感知、推理與決策的技術全集合</p>
                    <div class="nzone-badges" id="zone-ai"></div>

                    <div class="nzone nzone-ml">
                        <div class="nzone-label"><span class="nzone-icon">📊</span><span class="nzone-name">機器學習 <em>Machine Learning</em></span><span class="nzone-scope">AI 子集</span></div>
                        <p class="nzone-desc">透過資料讓演算法自動學習規律，不需明確程式設計</p>
                        <div class="nzone-badges" id="zone-ml"></div>

                        <div class="nzone nzone-nn">
                            <div class="nzone-label"><span class="nzone-icon">🧠</span><span class="nzone-name">類神經網路 <em>Neural Networks</em></span><span class="nzone-scope">ML 子集</span></div>
                            <div class="nzone-badges" id="zone-nn"></div>

                            <div class="nzone nzone-dl">
                                <div class="nzone-label"><span class="nzone-icon">⚡</span><span class="nzone-name">深度學習 <em>Deep Learning</em></span><span class="nzone-scope">NN 子集</span></div>
                                <p class="nzone-desc">多層神經網路自動提取特徵，現代 AI 革命的核心引擎</p>
                                <div class="nzone-badges" id="zone-dl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="home-actions">
                <button class="home-action-btn" id="randomStartBtn"><i class="fas fa-random"></i> 隨機開始學習</button>
                <button class="home-action-btn secondary" id="wrongQuizBtn"><i class="fas fa-exclamation-triangle"></i> 錯題補救測驗</button>
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
        const stats = SRSManager.getStats(); const reviewed = Object.keys(stats).length; const total = 631;
        const percent = Math.round((reviewed / total) * 100);
        document.getElementById('progressText').textContent = `熟練度: ${percent}% (${reviewed}/${total})`;
        document.getElementById('progressBar').style.width = `${percent}%`;
    },

    bindEvents: () => {
        document.getElementById('toggleTheme').onclick = () => document.body.classList.toggle('light-theme');
        const logo = document.querySelector('.logo'); if (logo) logo.onclick = () => App.renderHomeScreen();
    },

    speakEng: (text) => {
        App.synth.cancel(); const utter = new SpeechSynthesisUtterance(text); utter.lang = 'en-US';
        App.synth.speak(utter);
    }
};

window.onload = App.init;
