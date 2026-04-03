/**
 * AI SRS 智慧學習平台 - 核心邏輯 V3
 * 整合：Mermaid 心智圖、Web Speech TTS、Anki 風格 SRS 系統、Infinite Mindmap Canvas
 */

// --- 1. SRS 記憶引擎 ---
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
            card.repetition = 0;
            card.interval = 1;
        }

        card.efactor = Math.max(1.3, card.efactor + (0.1 - (3 - grade) * (0.08 + (3 - grade) * 0.02)));
        const days = grade === 0 ? 0 : card.interval;
        card.dueDate = Date.now() + days * 24 * 60 * 60 * 1000;
        
        stats[id] = card;
        SRSManager.saveStats(stats);
        return card;
    },

    getDueTopics: () => {
        const stats = SRSManager.getStats();
        const now = Date.now();
        return Object.keys(stats).filter(id => stats[id].dueDate <= now);
    }
};

// --- 2. 測驗引擎 ---
const QuizManager = {
    currentQuizList: [],
    currentIndex: 0,
    
    initQuiz: (topicId) => {
        const questions = quizBank[topicId] || [];
        if (questions.length === 0) return false;
        
        QuizManager.currentQuizList = [questions[Math.floor(Math.random() * questions.length)]];
        QuizManager.currentIndex = 0;
        return true;
    },

    renderCurrent: () => {
        const q = QuizManager.currentQuizList[QuizManager.currentIndex];
        const container = document.getElementById('quizContainer');
        const qEl = document.getElementById('quizQuestion');
        const optEl = document.getElementById('quizOptions');
        const feedback = document.getElementById('quizFeedback');

        qEl.textContent = q.q;
        optEl.innerHTML = '';
        feedback.classList.add('hidden');
        container.classList.remove('hidden');

        const detailSection = document.getElementById('topicContent').querySelector('.details-section');
        if (detailSection) detailSection.style.display = 'none';

        const labels = ['A', 'B', 'C', 'D'];
        q.opts.forEach((opt, idx) => {
            const btn = document.createElement('div');
            btn.className = 'quiz-opt';
            btn.textContent = `${labels[idx]}. ${opt}`;
            btn.onclick = () => QuizManager.checkAnswer(labels[idx], q.ans, q.explain);
            optEl.appendChild(btn);
        });
    },

    checkAnswer: (selected, correct, explain) => {
        const opts = document.querySelectorAll('.quiz-opt');
        opts.forEach(opt => {
            if (opt.textContent.startsWith(correct)) opt.classList.add('correct');
            else if (opt.textContent.startsWith(selected)) opt.classList.add('wrong');
        });
        
        const feedback = document.getElementById('quizFeedback');
        const explainEl = document.getElementById('quizExplain');
        explainEl.innerHTML = `<strong>解析：</strong><br>${explain}`;
        feedback.classList.remove('hidden');
        
        const topicContent = document.getElementById('topicContent');
        const detailSection = topicContent ? topicContent.querySelector('.details-section') : null;
        if (detailSection) {
            detailSection.style.display = 'block';
            setTimeout(() => detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 600);
        }
        
        feedback.scrollIntoView({ behavior: 'smooth' });
    }
};

// --- 3. UI 控制中心 ---
const App = {
    currentTopic: null,
    isSRSMode: false,
    fontSize: 16,
    synth: window.speechSynthesis,

    // Infinite canvas state
    canvasX: 500,
    canvasY: 500,
    activeNodes: [],

    init: () => {
        App.renderSidebar(lessonData);
        App.bindEvents();
        App.initTTS();
        mermaid.initialize({ startOnLoad: false, theme: 'neutral', securityLevel: 'loose' });
        App.updateProgress();
        App.renderHomeScreen();
        App.setupPanzoom();
    },

    renderSidebar: (data) => {
        const nav = document.getElementById('sidebarNav');
        nav.innerHTML = '';
        
        data.forEach(unit => {
            const unitDiv = document.createElement('div');
            unitDiv.className = 'unit-item';
            unitDiv.innerHTML = `<div class="unit-title">${unit.unit_title} <i class="fas fa-chevron-down"></i></div>`;
            
            const subList = document.createElement('div');
            subList.className = 'sub-unit-list';
            
            unit.sub_units.forEach(sub => {
                const subHeader = document.createElement('div');
                subHeader.className = 'sub-unit-header';
                subHeader.style.padding = '5px 10px';
                subHeader.style.fontWeight = 'bold';
                subHeader.style.fontSize = '0.85rem';
                subHeader.textContent = sub.title;
                subList.appendChild(subHeader);
                
                sub.topics.forEach(topic => {
                    const link = document.createElement('div');
                    link.className = 'topic-link';
                    link.innerHTML = `<i class="fas fa-file-alt"></i> ${topic.title}`;
                    link.onclick = () => App.loadTopic(topic);
                    subList.appendChild(link);
                });
            });

            unitDiv.querySelector('.unit-title').onclick = () => subList.classList.toggle('active');
            unitDiv.appendChild(subList);
            nav.appendChild(unitDiv);
        });
    },

    setupPanzoom: () => {
        const area = document.getElementById('panzoomArea');
        let isDragging = false;
        let startX, startY, scrollLeft, scrollTop;

        area.addEventListener('mousedown', (e) => {
            if (e.target.closest('.mnode')) return;
            isDragging = true;
            startX = e.pageX - area.offsetLeft;
            startY = e.pageY - area.offsetTop;
            scrollLeft = area.scrollLeft;
            scrollTop = area.scrollTop;
        });
        
        window.addEventListener('mouseup', () => isDragging = false);
        area.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - area.offsetLeft;
            const y = e.pageY - area.offsetTop;
            area.scrollLeft = scrollLeft - (x - startX);
            area.scrollTop = scrollTop - (y - startY);
        });
    },

    loadTopic: (topic) => {
        App.currentTopic = topic;
        const container = document.getElementById('topicContent');
        const quizBox = document.getElementById('quizContainer');
        const panzoomArea = document.getElementById('panzoomArea');
        
        quizBox.classList.add('hidden');
        panzoomArea.classList.remove('hidden');

        container.innerHTML = `
            <div class="topic-header">
                <h1>${topic.title}</h1>
                <div class="topic-meta">
                    <span class="meta-badge meta-eng"><i class="fas fa-language"></i> ${topic.eng_name} &nbsp;(${topic.eng_abbr})</span>
                    <span class="meta-badge meta-cat"><i class="fas fa-tag"></i> ${topic.category}</span>
                    <span class="meta-badge meta-prin"><i class="fas fa-layer-group"></i> ${topic.principle}</span>
                </div>
            </div>

            <div class="card-3d">
                <div class="card-inner" id="flashcard">
                    <div class="card-front">
                        <div class="term-title">${topic.title} <span style="font-size:1.2rem; color:var(--text-dim);">(${topic.eng_abbr})</span></div>
                        <div class="term-eng-row">
                            <span class="term-eng">${topic.eng_name}</span>
                            <button class="tts-icon-btn" title="英文發音" onclick="event.stopPropagation(); App.speakEng('${topic.eng_name.replace(/'/g, "\\'")}')"
                            ><i class="fas fa-volume-up"></i></button>
                        </div>
                        <p style="margin-top:20px; color:var(--text-dim);">點擊翻轉查看詳細解析</p>
                    </div>
                    <div class="card-back">
                        <div class="card-back-header">
                            <div class="card-back-title-row">
                                <h3>核心定義</h3>
                                <button class="tts-icon-btn tts-zh" title="中文朗讀定義與用途"
                                    onclick="event.stopPropagation(); App.speakZh('核心定義：${topic.def.replace(/'/g, "\\'").replace(/`/g, '')}。關鍵用途：${topic.purpose.replace(/'/g, "\\'").replace(/`/g, '')}')">
                                    <i class="fas fa-volume-up"></i>
                                </button>
                            </div>
                        </div>
                        <p>${topic.def}</p>
                        <hr style="margin:15px 0; width:100%; opacity:0.1;">
                        <h3>關鍵用途</h3>
                        <p>${topic.purpose}</p>
                        <!-- Mermaid is inside flashcard. Infinite canvas is outside. -->
                        <div class="mindmap-container" style="font-size:1rem;">
                            <pre class="mermaid">${topic.mindmap}</pre>
                        </div>
                        <button class="control-btn" id="startQuizBtn"><i class="fas fa-vial"></i> 開始測驗</button>
                    </div>
                </div>
            </div>

            <div class="details-section glass-panel" style="margin-top:20px; border-radius: 12px; padding:20px; display:none;">
                <div class="detail-reveal-badge">💡 解析已解鎖</div>
                <h3 style="margin-bottom:15px;">詳細解析</h3>
                <p style="line-height: 1.6;">${topic.detail_explain}</p>
            </div>
        `;

        mermaid.init(undefined, '.mermaid');

        document.getElementById('flashcard').onclick = (e) => {
            if (e.target.id === 'startQuizBtn' || e.target.closest('#startQuizBtn')) return;
            e.currentTarget.classList.toggle('flipped');
        };

        document.getElementById('startQuizBtn').onclick = () => {
            if (QuizManager.initQuiz(topic.id)) {
                QuizManager.renderCurrent();
            } else {
                alert('此主題暫無測驗題目');
            }
        };

        const autoPlayToggle = document.getElementById('autoPlayToggle');
        if (autoPlayToggle && autoPlayToggle.checked) {
            App.speak(`${topic.title}. ${topic.eng_name}.`);
        }

        document.querySelectorAll('.topic-link').forEach(l => {
            l.classList.toggle('active', l.textContent.includes(topic.title));
        });

        // Setup Infinite Mindmap Canvas below the card
        App.initMindmap(topic);
    },

    initMindmap: (topic) => {
        const canvas = document.getElementById('mindmapCanvas');
        const svg = document.getElementById('mindmapLines');
        svg.innerHTML = ''; 
        const olds = canvas.querySelectorAll('.mnode');
        olds.forEach(o => o.remove());
        App.activeNodes = [];

        // Center panzoom scroll position roughly near top left
        const area = document.getElementById('panzoomArea');
        area.scrollLeft = App.canvasX - 50; 
        area.scrollTop = App.canvasY - 50;

        App.createNode({
            id: 'root_' + topic.id,
            title: topic.title,
            content: topic.def.substring(0, 50) + "...",
            x: App.canvasX,
            y: App.canvasY,
            parentId: null,
            level: 0
        });
    },

    createNode: (nodeData) => {
        App.activeNodes.push(nodeData);
        const canvas = document.getElementById('mindmapCanvas');
        const el = document.createElement('div');
        el.className = 'mnode';
        el.id = nodeData.id;
        el.style.left = nodeData.x + 'px';
        el.style.top = nodeData.y + 'px';
        
        el.innerHTML = `
            <div class="mnode-header">
                <span class="mnode-title">${nodeData.title}</span>
                <div class="mnode-tools">
                    <i class="fas fa-volume-up" title="發音" onclick="App.speakZh('${nodeData.content.replace(/'/g, "\\'")}')"></i>
                </div>
            </div>
            <div class="mnode-content">
                ${nodeData.content}
            </div>
            <div class="mnode-actions">
                <button class="expand-btn" data-nodeid="${nodeData.id}" onclick="App.expandChildren(this, ${nodeData.level})">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
        canvas.appendChild(el);

        if (nodeData.parentId) {
            App.drawSVGLine(nodeData.parentId, nodeData.id);
        }
    },

    expandChildren: (btn, level) => {
        const parentId = btn.getAttribute('data-nodeid');
        const parentNode = App.activeNodes.find(n => n.id === parentId);
        
        if (btn.classList.contains('expanded')) {
            btn.classList.remove('expanded');
            // Advanced: Remove children. Keeping it simple for demo.
            return;
        }
        
        btn.classList.add('expanded');
        
        const childCount = 3; 
        const spacingY = 150;
        const spacingX = 350;
        const startY = parentNode.y - ((childCount - 1) * spacingY) / 2;

        for(let i=0; i<childCount; i++) {
            let childTitle = (level === 0) ? ["關鍵定義", "核心機理", "延伸應用"][i] : `關聯概念 ${i+1}`;
            let childId = parentId + '_c' + i;
            
            if(App.activeNodes.find(n => n.id === childId)) continue;
            
            App.createNode({
                id: childId,
                title: childTitle,
                content: `探索 ${childTitle} 的詳細說明...`,
                x: parentNode.x + spacingX,
                y: startY + (i * spacingY),
                parentId: parentId,
                level: level + 1
            });
        }
    },

    drawSVGLine: (parentId, childId) => {
        const svg = document.getElementById('mindmapLines');
        const pEl = document.getElementById(parentId);
        const cEl = document.getElementById(childId);
        
        if(!pEl || !cEl) return;

        const pLeft = parseFloat(pEl.style.left);
        const pTop = parseFloat(pEl.style.top);
        const pWidth = pEl.offsetWidth;
        const pHeight = pEl.offsetHeight;

        const cLeft = parseFloat(cEl.style.left);
        const cTop = parseFloat(cEl.style.top);
        const cHeight = cEl.offsetHeight;

        const px = pLeft + pWidth;
        const py = pTop + pHeight / 2;
        const cx = cLeft;
        const cy = cTop + cHeight / 2;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const d = `M ${px} ${py} C ${px + 100} ${py}, ${cx - 100} ${cy}, ${cx} ${cy}`;
        
        path.setAttribute("d", d);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "var(--accent-color)");
        path.setAttribute("stroke-width", "3");
        
        path.style.strokeDasharray = "500";
        path.style.strokeDashoffset = "500";
        path.style.animation = "draw 0.5s ease forwards";
        
        svg.appendChild(path);
    },

    bindEvents: () => {
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.style.cursor = 'pointer';
            logo.onclick = () => App.renderHomeScreen();
        }

        document.getElementById('toggleTheme').onclick = () => {
            document.body.classList.toggle('light-theme');
            document.body.classList.toggle('dark-theme');
        };

        document.getElementById('fontUp').onclick = () => {
            App.fontSize += 2;
            document.querySelector('.content-area').style.fontSize = App.fontSize + 'px';
        };
        document.getElementById('fontDown').onclick = () => {
            App.fontSize = Math.max(12, App.fontSize - 2);
            document.querySelector('.content-area').style.fontSize = App.fontSize + 'px';
        };

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        if (menuToggle) {
            menuToggle.onclick = () => {
                const sidebar = document.querySelector('.sidebar');
                if (sidebar) sidebar.classList.toggle('active');
            };
        }

        // Hide sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            const sidebar = document.querySelector('.sidebar');
            const menuBtn = document.getElementById('menuToggle');
            if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('active')) {
                if (!sidebar.contains(e.target) && (!menuBtn || !menuBtn.contains(e.target))) {
                    sidebar.classList.remove('active');
                }
            }
        });

        // Toggle Right Panel
        const toggleRightPanelBtn = document.getElementById('toggleRightPanelBtn');
        const openRightPanelBtn = document.getElementById('openRightPanelBtn');
        const rightPanel = document.querySelector('.right-panel');

        if (toggleRightPanelBtn) {
            toggleRightPanelBtn.onclick = () => {
                if (window.innerWidth <= 1024) {
                    rightPanel.classList.remove('active');
                } else {
                    rightPanel.classList.add('hidden');
                    if(openRightPanelBtn) openRightPanelBtn.style.display = 'inline-block';
                }
            };
        }
        
        if (openRightPanelBtn) {
            openRightPanelBtn.onclick = () => {
                if (window.innerWidth <= 1024) {
                    rightPanel.classList.add('active');
                } else {
                    rightPanel.classList.remove('hidden');
                    openRightPanelBtn.style.display = 'none';
                }
            };
        }

        document.getElementById('topicSearch').oninput = (e) => {
            const val = e.target.value.toLowerCase();
            const filtered = lessonData.map(unit => ({
                ...unit,
                sub_units: unit.sub_units.map(sub => ({
                    ...sub,
                    topics: sub.topics.filter(t => 
                        t.title.toLowerCase().includes(val) || 
                        t.eng_name.toLowerCase().includes(val) ||
                        t.def.toLowerCase().includes(val)
                    )
                })).filter(sub => sub.topics.length > 0)
            })).filter(unit => unit.sub_units.length > 0);
            App.renderSidebar(filtered);
        };

        document.querySelectorAll('.srs-btn').forEach(btn => {
            btn.onclick = (e) => {
                const grade = parseInt(e.target.dataset.grade);
                SRSManager.updateCard(App.currentTopic.id, grade);
                App.updateProgress();
                alert('已記錄複習進度！下次複習時將自動排程。');
                document.getElementById('quizContainer').classList.add('hidden');
            };
        });

        document.getElementById('srsToggle').onclick = () => {
            App.isSRSMode = !App.isSRSMode;
            document.getElementById('srsToggle').classList.toggle('active', App.isSRSMode);
            const dueIds = SRSManager.getDueTopics();
            
            if (App.isSRSMode) {
                const filtered = lessonData.map(unit => ({
                    ...unit,
                    sub_units: unit.sub_units.map(sub => ({
                        ...sub,
                        topics: sub.topics.filter(t => dueIds.includes(t.id))
                    })).filter(sub => sub.topics.length > 0)
                })).filter(unit => unit.sub_units.length > 0);
                App.renderSidebar(filtered);
                if (dueIds.length === 0) alert('今日暫無待複習項目！');
            } else {
                App.renderSidebar(lessonData);
            }
        };
    },

    initTTS: () => {
        const preloadVoices = () => { App.synth.getVoices(); };
        preloadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = preloadVoices;
        }

        const rateSlider = document.getElementById('ttsRateSlider');
        const rateLabel = document.getElementById('ttsRateLabel');
        if (rateSlider && rateLabel) {
            rateSlider.oninput = () => {
                rateLabel.textContent = parseFloat(rateSlider.value).toFixed(1) + 'x';
            };
        }

        const pitchSlider = document.getElementById('ttsPitchSlider');
        const pitchLabel = document.getElementById('ttsPitchLabel');
        if (pitchSlider && pitchLabel) {
            pitchSlider.oninput = () => {
                pitchLabel.textContent = parseFloat(pitchSlider.value).toFixed(1) + 'x';
            };
        }

        const engineSelect = document.getElementById('ttsEngineSelect');
        if (engineSelect) {
            engineSelect.onchange = () => {
                App.speakZh("切換語音引擎測試");
            };
        }

        const genderSelect = document.getElementById('ttsGenderSelect');
        if (genderSelect) {
            genderSelect.onchange = () => {
                const gender = genderSelect.value;
                App.speakZh(gender === 'male' ? "切換為男聲" : "切換為女聲");
            };
        }
    },

    speak: (text) => {
        App.synth.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        const rateEl = document.getElementById('ttsRateSlider');
        utter.rate = rateEl ? parseFloat(rateEl.value) : 1.0;
        App.synth.speak(utter);
    },

    updateProgress: () => {
        const stats = SRSManager.getStats();
        const reviewed = Object.keys(stats).length;
        const total = 631;
        const percent = Math.round((reviewed / total) * 100);
        document.getElementById('progressText').textContent = `熟練度: ${percent}% (${reviewed}/${total})`;
        document.getElementById('progressBar').style.width = `${percent}%`;
    },

    renderHomeScreen: () => {
        const container = document.getElementById('topicContent');
        document.getElementById('quizContainer').classList.add('hidden');
        document.getElementById('panzoomArea').classList.add('hidden');

        const allTopics = lessonData.flatMap(u => u.sub_units.flatMap(s => s.topics));

        const DL_CATS = new Set([
            '深度學習', '深度學習原理', '神經網路', '模型架構', '模型訓練',
            '模型優化', '模型壓縮', '模型量化', '模型微調', '推論優化',
            '生成式 AI', '生成式AI技術', '模型規模', '多模態', '多模態人工智慧',
            '自然語言處理\n\n深度學習架構', '生成式AI應用\n\n提示工程',
            '生成式AI風險\n\nAI 導入規劃'
        ]);

        const NN_CATS = new Set(['訓練模式', '數值優化', '數學優化', '運作機制', '數學基礎', '幾何運算']);

        const ML_CATS = new Set([
            '機器學習', '傳統 ML', '機器學習治理',
            '特徵工程', '敘述性統計\n\n特徵工程',
            '模型評估', '模型效能', '模型指標', '模型能力',
            '數據準備', '數據前處理', '數據採樣', '數據集', '數據處理',
            '數據科學', '數據結構', '數據管理', '數據儲存', '數據視覺化',
            '資料分析', '資料工程', '資料科學', '資料處理',
            '資料處理與分析\n\nNLP任務', '資料預處理',
            '統計分析', '統計基礎', '統計學', '統計推論', '統計與檢索',
            '商務分析', '大數據', '大數據 5V', '大數據架構', '大數據處理',
            '大數據隱私保護', '大數據隱私保護\n\n機器學習治理',
            'AI 風險管理\n\n機器學習治理', 'AI 基礎概論\n\n機器學習原理',
            '分散式計算\n\n聯邦學習架構', '評估指標'
        ]);

        const normCat = t => t.category.trim();
        const isDL = t => DL_CATS.has(normCat(t));
        const isNN = t => !isDL(t) && NN_CATS.has(normCat(t));
        const isML = t => !isDL(t) && !isNN(t) && ML_CATS.has(normCat(t));

        const zoneTopics = {
            dl: allTopics.filter(isDL).slice(0, 8),
            nn: allTopics.filter(isNN).slice(0, 6),
            ml: allTopics.filter(isML).slice(0, 7),
            ai: allTopics.filter(t => !isDL(t) && !isNN(t) && !isML(t)).slice(0, 8)
        };

        const learned = Object.keys(SRSManager.getStats()).length;

        const mkBadges = (id, max) =>
            (zoneTopics[id] || []).slice(0, max)
                .map(t => `<span class="zone-badge" data-tid="${t.id}" title="${t.eng_name}">${t.title}</span>`)
                .join('') || '<span class="zone-badge-empty">暫無指定主題</span>';

        container.innerHTML = `
            <div class="home-hero">
                <h1>🗺️ AI 知識地圖 V3</h1>
                <p class="home-sub">探索 <strong>AI ⊃ ML ⊃ 類神經網路 ⊃ 深度學習</strong>，並點擊主題查看動態心智圖！</p>
                <div class="hero-stats">
                    <div class="stat-item"><span class="stat-num">${allTopics.length}</span><span class="stat-lbl">個術語</span></div>
                    <div class="stat-item"><span class="stat-num">${learned}</span><span class="stat-lbl">已掌握</span></div>
                    <div class="stat-item"><span class="stat-num">${Math.round(learned / allTopics.length * 100)}%</span><span class="stat-lbl">完成度</span></div>
                </div>
            </div>

            <div class="nested-map">
                <div class="nzone nzone-ai">
                    <div class="nzone-label">
                        <span class="nzone-icon">🤖</span>
                        <span class="nzone-name">人工智慧 <em>Artificial Intelligence</em></span>
                        <span class="nzone-scope">最廣義範疇</span>
                    </div>
                    <p class="nzone-desc">讓機器模擬人類智慧，包含感知、推理、規劃與決策的技術全集合</p>
                    <div class="nzone-badges">${mkBadges('ai', 7)}</div>

                    <div class="nzone nzone-ml">
                        <div class="nzone-label">
                            <span class="nzone-icon">📊</span>
                            <span class="nzone-name">機器學習 <em>Machine Learning</em></span>
                            <span class="nzone-scope">AI 的子集</span>
                        </div>
                        <p class="nzone-desc">透過資料讓演算法自動學習規律，不需明確程式設計每一步驟</p>
                        <div class="nzone-badges">${mkBadges('ml', 6)}</div>

                        <div class="nzone nzone-nn">
                            <div class="nzone-label">
                                <span class="nzone-icon">🧠</span>
                                <span class="nzone-name">類神經網路 <em>Neural Networks</em></span>
                                <span class="nzone-scope">ML 的子集</span>
                            </div>
                            <p class="nzone-desc">仿生物神經元相互連接構成的計算模型，透過訓練調整連接權重</p>
                            <div class="nzone-badges">${mkBadges('nn', 5)}</div>

                            <div class="nzone nzone-dl">
                                <div class="nzone-label">
                                    <span class="nzone-icon">⚡</span>
                                    <span class="nzone-name">深度學習 <em>Deep Learning</em></span>
                                    <span class="nzone-scope">NN 的子集</span>
                                </div>
                                <p class="nzone-desc">多層神經網路自動提取高階抽象特徵，驅動現代 AI 革命的核心引擎</p>
                                <div class="nzone-badges">${mkBadges('dl', 6)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="home-actions">
                <button class="home-action-btn" id="randomStartBtn">
                    <i class="fas fa-random"></i> 隨機開始學習
                </button>
            </div>
        `;

        container.querySelectorAll('.zone-badge').forEach(badge => {
            const topic = allTopics.find(t => t.id === badge.dataset.tid);
            if (topic) badge.onclick = () => App.loadTopic(topic);
        });

        const randomBtn = document.getElementById('randomStartBtn');
        if (randomBtn) randomBtn.onclick = () => {
            App.loadTopic(allTopics[Math.floor(Math.random() * allTopics.length)]);
        };
    },

    _getTTSRate: () => {
        const el = document.getElementById('ttsRateSlider');
        return el ? parseFloat(el.value) : 1.0;
    },

    _getTTSGender: () => {
        const sel = document.getElementById('ttsGenderSelect');
        return sel ? sel.value : 'female';
    },

    _getTTSPitch: () => {
        const el = document.getElementById('ttsPitchSlider');
        return el ? parseFloat(el.value) : 1.0;
    },

    _pickVoice: (langPrefix, gender) => {
        const voices = window.speechSynthesis.getVoices();
        const engine = document.getElementById('ttsEngineSelect')?.value || 'google';
        const isFemale = gender === 'female';
        
        // 擴充關鍵字，包含 Windows 內建與常見雲端聲線
        const femaleKw = ['female', 'woman', 'girl', 'fiona', 'samantha', 'victoria', 'tessa', 'moira', 'karen', '女', 'hsiaochen', 'xiaoxiao'];
        const maleKw   = ['male', 'man', 'boy', 'daniel', 'alex', 'fred', 'thomas', '男', 'zhiwei', 'yunxi'];
        const genderKws = isFemale ? femaleKw : maleKw;

        // 優先權 1: 語言 + 引擎 + 性別
        let voice = voices.find(v => 
            v.lang.startsWith(langPrefix) && 
            (engine === 'google' ? v.name.includes('Google') : !v.name.includes('Google')) &&
            genderKws.some(kw => v.name.toLowerCase().includes(kw))
        );

        // 優先權 2: 語言 + 性別 (不限引擎)
        if (!voice) {
            voice = voices.find(v => 
                v.lang.startsWith(langPrefix) && 
                genderKws.some(kw => v.name.toLowerCase().includes(kw))
            );
        }

        // 優先權 3: 語言 + 引擎
        if (!voice) {
            voice = voices.find(v => 
                v.lang.startsWith(langPrefix) && 
                (engine === 'google' ? v.name.includes('Google') : !v.name.includes('Google'))
            );
        }

        // 後備
        return voice || voices.find(v => v.lang.startsWith(langPrefix)) || null;
    },

    speakEng: (text) => {
        App.synth.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        const voice = App._pickVoice('en', App._getTTSGender());
        if (voice) utter.voice = voice;
        utter.rate = App._getTTSRate();
        utter.pitch = App._getTTSPitch();
        App.synth.speak(utter);
    },

    speakZh: (text) => {
        App.synth.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'zh-TW';
        const voice = App._pickVoice('zh', App._getTTSGender());
        if (voice) utter.voice = voice;
        utter.rate = App._getTTSRate();
        utter.pitch = App._getTTSPitch();
        App.synth.speak(utter);
    }
};

window.onload = App.init;
