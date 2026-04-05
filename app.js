/**
 * AI SRS 智慧學習平台 - 核心邏輯
 * 整合：Mermaid 心智圖、Web Speech TTS、Anki 風格 SRS 系統、5800+ 題庫、Google Sheets 即時同步
 */

// --- 0. 資料同步管理員 (SyncManager) ---
const SyncManager = {
    // Google Sheets CSV 匯出網址
    SHEET_ID: '1HxfWzkcTiO49OjzzaGXL6PaXXblnAwaIzg7kabGLpK0',
    PRO_QUIZ_GID: '72198410',
    QUIZ_BANK_GID: '294084716',

    // 取得 CSV 原始資料
    fetchCSV: async (gid) => {
        const url = `https://docs.google.com/spreadsheets/d/${SyncManager.SHEET_ID}/export?format=csv&gid=${gid}`;

        // 環境偵測：本地檔案、開發伺服器、線上 HTTPS
        const isLocalFile = window.location.protocol === 'file:';
        const isHttps = window.location.protocol === 'https:';

        try {
            console.log(`[Sync] 正在從 GID ${gid} 請求資料...`);
            const response = await fetch(url, {
                method: 'GET',
                credentials: 'omit', // 避開第三方 Cookie 限制
                mode: 'cors',
                cache: 'no-cache'
            });

            if (!response.ok) {
                if (response.status === 404) throw new Error("試算表 ID 錯誤或檔案未公開。");
                throw new Error(`HTTP 狀態碼: ${response.status}`);
            }
            return await response.text();
        } catch (err) {
            console.error("Sync Error Details:", err);
            let msg = "同步失敗：無法存取 Google 雲端資料。";

            if (isLocalFile) {
                msg += "\n\n【本地端限制】偵測到您目前以 file:// 開啟，瀏覽器會阻擋 CORS 請求。\n請改用 Live Server 或部署至 GitHub Pages。";
            } else if (isHttps && err.message.includes('fetch')) {
                msg += "\n\n【CORS 阻擋】請確認 Google Sheets 是否已設定「知道連結的所有人皆可檢視」。";
            } else {
                msg += `\n原因：${err.message}`;
            }
            throw new Error(msg);
        }
    },

    // 簡易 CSV 解析器 (支援引號與逗號)
    parseCSV: (text) => {
        const rows = [];
        let row = [];
        let col = "";
        let inQuotes = false;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const next = text[i + 1];

            if (inQuotes) {
                if (char === '"' && next === '"') {
                    col += '"'; i++;
                } else if (char === '"') {
                    inQuotes = false;
                } else {
                    col += char;
                }
            } else {
                if (char === '"') {
                    inQuotes = true;
                } else if (char === ',') {
                    row.push(col.trim());
                    col = "";
                } else if (char === '\n' || char === '\r') {
                    row.push(col.trim());
                    if (row.length > 1 || row[0] !== "") rows.push(row);
                    row = [];
                    col = "";
                    if (char === '\r' && next === '\n') i++;
                } else {
                    col += char;
                }
            }
        }
        if (col || row.length > 0) {
            row.push(col.trim());
            rows.push(row);
        }

        // 轉換為物件陣列
        const headers = rows[0];
        return rows.slice(1).map(r => {
            const obj = {};
            headers.forEach((h, idx) => { obj[h] = r[idx] || ""; });
            return obj;
        });
    },

    // 將 Raw Data 轉換為 App 格式 (移植自 Python 邏輯)
    transformData: (proQuizRows, quizBankRows) => {
        // 1. 處理主題架構
        const topics = {};
        proQuizRows.forEach(row => {
            const no = row['編號'] || row['no'];
            if (!no) return;
            topics[no] = {
                id: no,
                subject: (row['科目'] || "").replace(/\n/g, ' '),
                category: row['主題'] || "",
                principle: row['七大原則'] || "",
                title: row['繁體中文'] || "",
                eng_name: row['英文全名'] || "",
                eng_abbr: row['英文縮寫'] || "",
                def: row['定義'] || "",
                key_goal: row['核心目標'] || "",
                key_principle: row['核心原理'] || "",
                key_purpose: row['用途'] || "",
                common_apps: row['應用場景'] || "",
                scenarios: {
                    weather: row['氣象與防災'] || "",
                    agri: row['農業漁業與畜牧'] || "",
                    traffic: row['交通與物流'] || "",
                    industry: row['生產與製造（工業4.0）'] || "",
                    finance: row['科技金融與醫學'] || "",
                    life: row['客服零售與生活'] || "",
                    fire: row['消防與公共安全'] || ""
                },
                detail_explain: row['詳細解析'] || ""
            };
        });

        // 2. 處理題庫
        const finalQuizBank = {};
        quizBankRows.forEach(row => {
            const no = row['no'];
            if (!no) return;
            if (!finalQuizBank[no]) finalQuizBank[no] = [];
            finalQuizBank[no].push({
                q_id: row['q_id'] || "",
                diff: row['difficulty'] || "",
                style: row['style'] || "",
                q: row['question'] || "",
                opts: [row['optA'] || "", row['optB'] || "", row['optC'] || "", row['optD'] || ""],
                ans: row['correctAns'] || "",
                explain: row['explanation'] || ""
            });
        });

        // 3. 建立層級架構
        const unitMap = {};
        Object.values(topics).forEach(t => {
            const sub = t.subject;
            const cat = t.category;
            if (!unitMap[sub]) unitMap[sub] = {};
            if (!unitMap[sub][cat]) unitMap[sub][cat] = [];
            unitMap[sub][cat].push(t);
        });

        const finalLessonData = Object.entries(unitMap).map(([sub, cats]) => ({
            title: sub,
            sub_units: Object.entries(cats).map(([cat, ts]) => ({
                title: cat,
                topics: ts
            }))
        }));

        return { lessonData: finalLessonData, quizBank: finalQuizBank };
    },

    // 儲存與載入
    save: (data, quizzes) => {
        localStorage.setItem('synced_lesson_data', JSON.stringify(data));
        localStorage.setItem('synced_quiz_bank', JSON.stringify(quizzes));
        localStorage.setItem('last_sync_time', new Date().toLocaleString());
    },

    load: () => {
        const d = localStorage.getItem('synced_lesson_data');
        const q = localStorage.getItem('synced_quiz_bank');
        if (d && q) {
            return { lessonData: JSON.parse(d), quizBank: JSON.parse(q) };
        }
        return null;
    }
};

// --- 1. SRS 記憶引擎 (Leitner/SM-2 簡化版) ---
const SRSManager = {
    getStats: () => JSON.parse(localStorage.getItem('study_stats') || '{}'),
    saveStats: (stats) => localStorage.setItem('study_stats', JSON.stringify(stats)),

    getWrongTopics: () => {
        const stats = SRSManager.getStats();
        // 篩選出曾經答錯（grade < 2）或 wrongCount > 0 的題目
        return Object.keys(stats).filter(id => stats[id].wrongCount > 0 || stats[id].lastResult === 'wrong');
    },

    // 計算下次複習時間 (SM-2 簡化邏輯)
    updateCard: (id, grade) => {
        const stats = SRSManager.getStats();
        let card = stats[id] || { interval: 0, repetition: 0, efactor: 2.5, dueDate: Date.now(), wrongCount: 0, lastResult: 'none' };

        if (grade >= 2) { // Good or Easy
            if (card.repetition === 0) card.interval = 1;
            else if (card.repetition === 1) card.interval = 4;
            else card.interval = Math.round(card.interval * card.efactor);
            card.repetition++;
            card.lastResult = 'correct';
        } else { // Again or Hard
            card.repetition = 0;
            card.interval = 1;
            card.wrongCount = (card.wrongCount || 0) + 1;
            card.lastResult = 'wrong';
        }

        // 調整易記係數 (Ease Factor)
        card.efactor = Math.max(1.3, card.efactor + (0.1 - (3 - grade) * (0.08 + (3 - grade) * 0.02)));

        // 設定下次複習日期 (以天為單位)
        const days = grade === 0 ? 0 : card.interval; // Again 設為今天
        card.dueDate = Date.now() + days * 24 * 60 * 60 * 1000;

        stats[id] = card;
        SRSManager.saveStats(stats);
        
        // 每次更新進度後檢查成就
        AchievementManager.checkProgress();
        
        return card;
    },

    getDueTopics: () => {
        const stats = SRSManager.getStats();
        const now = Date.now();
        return Object.keys(stats).filter(id => stats[id].dueDate <= now);
    }
};

// --- 1.2 成就系統管理員 (AchievementManager) ---
const AchievementManager = {
    ACHIEVEMENTS: [
        { id: 'newbie', icon: '🐣', title: '初試啼聲', desc: '完成第 1 個術語學習', goal: 1 },
        { id: 'apprentice', icon: '🤺', title: '略有小成', desc: '熟練度達到 10%', goal: 63 },
        { id: 'expert', icon: '🛡️', title: '領域專家', desc: '熟練度達到 50%', goal: 315 },
        { id: 'master', icon: '👑', title: 'AI 大師', desc: '熟練度達到 80%', goal: 504 },
        { id: 'perfect', icon: '💎', title: '圓滿境界', desc: '掌握所有 631 個術語', goal: 631 }
    ],

    getUnlocked: () => JSON.parse(localStorage.getItem('unlocked_achievements') || '[]'),
    
    checkProgress: () => {
        const stats = SRSManager.getStats();
        const learnedCount = Object.keys(stats).length;
        const unlocked = AchievementManager.getUnlocked();
        let newlyUnlocked = false;

        AchievementManager.ACHIEVEMENTS.forEach(ach => {
            if (!unlocked.includes(ach.id) && learnedCount >= ach.goal) {
                unlocked.push(ach.id);
                newlyUnlocked = true;
                // 彈出慶祝 (這裡可用漂亮的 Toast 或 Alert)
                console.log(`[Achievement] 解鎖成就: ${ach.title}`);
            }
        });

        if (newlyUnlocked) {
            localStorage.setItem('unlocked_achievements', JSON.stringify(unlocked));
        }
    },

    renderWall: () => {
        const unlocked = AchievementManager.getUnlocked();
        return `<div class="achievement-wall">
            ${AchievementManager.ACHIEVEMENTS.map(ach => {
                const isLocked = !unlocked.includes(ach.id);
                return `
                    <div class="achievement-item ${isLocked ? 'locked' : 'unlocked'}" title="${ach.desc}">
                        <div class="ach-icon">${ach.icon}</div>
                        <div class="ach-title">${ach.title}</div>
                    </div>
                `;
            }).join('')}
        </div>`;
    }
};

// --- 2. 測驗引擎 ---
const QuizManager = {
    currentQuizList: [],
    currentIndex: 0,

    initQuiz: (topicId) => {
        const questions = quizBank[topicId] || [];
        if (questions.length === 0) return false;

        // ✅ 修正：改為洗牌所有題目，而不是只抽一題
        QuizManager.currentQuizList = [...questions].sort(() => Math.random() - 0.5);
        QuizManager.currentIndex = 0;
        return true;
    },

    initWrongQuiz: () => {
        const wrongIds = SRSManager.getWrongTopics();
        if (wrongIds.length === 0) return false;

        let allWrongQuestions = [];
        wrongIds.forEach(id => {
            const qs = quizBank[id] || [];
            allWrongQuestions = allWrongQuestions.concat(qs);
        });

        if (allWrongQuestions.length === 0) return false;

        // 從錯題庫中隨機抽出 10 題進行補救
        QuizManager.currentQuizList = allWrongQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
        QuizManager.currentIndex = 0;
        return true;
    },

    renderCurrent: (isModal = false) => {
        const q = QuizManager.currentQuizList[QuizManager.currentIndex];
        
        // 根據環境選擇容器與元素
        const container = document.getElementById(isModal ? 'quizContainerInModal' : 'quizContainer');
        const qEl = document.getElementById(isModal ? 'modalQuizQuestion' : isModal ? 'modalQuizQuestion' : 'quizQuestion');
        // 修正：如果 qEl 沒抓到，嘗試抓 modalQuizQuestion (為了相容性)
        const actualQEl = qEl || document.getElementById('modalQuizQuestion');
        const actualOptEl = document.getElementById(isModal ? 'modalQuizOptions' : 'quizOptions');
        const feedback = document.getElementById(isModal ? 'modalQuizFeedback' : 'quizFeedback');
        const nextBtn = document.getElementById(isModal ? 'modalNextQuestionBtn' : 'nextQuestionBtn');
        const srsActions = document.getElementById(isModal ? 'modalSrsActions' : 'srsActions');

        if (!q || !container || !actualQEl || !actualOptEl) return;

        // 顯示題號進度 (使用 .q 屬性)
        actualQEl.textContent = `(Q${QuizManager.currentIndex + 1}/${QuizManager.currentQuizList.length}) ${q.q}`;
        actualOptEl.innerHTML = '';

        feedback.classList.add('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');
        srsActions.classList.add('hidden');
        container.classList.remove('hidden');

        // ✅ 每次渲染新題目時，確保詳細解析還是隱藏狀態
        const modalDetail = document.getElementById('modalTopicDetailExplain');
        if (modalDetail) modalDetail.classList.add('hidden');
        
        const topicContent = document.getElementById('topicContent');
        const detailSection = topicContent ? topicContent.querySelector('.details-section') : null;
        if (detailSection) detailSection.style.display = 'none';

        const labels = ['A', 'B', 'C', 'D'];
        q.opts.forEach((opt, idx) => {
            if (!opt) return; // 略過空選項
            const btn = document.createElement('div');
            btn.className = 'quiz-opt';
            btn.textContent = `${labels[idx]}. ${opt}`;
            btn.onclick = () => QuizManager.checkAnswer(labels[idx], q.ans, q.explain, isModal);
            actualOptEl.appendChild(btn);
        });
    },

    // ✅ 補完缺失的函式：專供 Modal 渲染
    renderCurrentInModal: () => {
        QuizManager.renderCurrent(true);
    },

    checkAnswer: (selected, correct, explain, isModal = false) => {
        const optContainerId = isModal ? 'modalQuizOptions' : 'quizOptions';
        const opts = document.getElementById(optContainerId).querySelectorAll('.quiz-opt');
        
        opts.forEach(opt => {
            if (opt.textContent.startsWith(correct)) opt.classList.add('correct');
            else if (opt.textContent.startsWith(selected)) opt.classList.add('wrong');
            opt.onclick = null; // 禁止重複點擊
        });

        const feedback = document.getElementById(isModal ? 'modalQuizFeedback' : 'quizFeedback');
        const explainEl = document.getElementById(isModal ? 'modalQuizExplain' : 'quizExplain');
        const nextBtn = document.getElementById(isModal ? 'modalNextQuestionBtn' : 'nextQuestionBtn');
        const srsActions = document.getElementById(isModal ? 'modalSrsActions' : 'srsActions');

        explainEl.innerHTML = `<strong>解析：</strong><br>${explain}`;
        feedback.classList.remove('hidden');

        // 判斷是否還有下一題
        if (QuizManager.currentIndex < QuizManager.currentQuizList.length - 1) {
            if (nextBtn) {
                nextBtn.classList.remove('hidden');
                nextBtn.onclick = () => {
                    QuizManager.currentIndex++;
                    QuizManager.renderCurrent(isModal);
                };
            }
        } else {
            // 最後一題才顯示 SRS 評分按鈕
            if (srsActions) srsActions.classList.remove('hidden');

            // ✅ 最後一題回答完，才顯示主題核心解析
            const modalDetail = document.getElementById('modalTopicDetailExplain');
            if (modalDetail) {
                modalDetail.classList.remove('hidden');
                setTimeout(() => modalDetail.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }

            const topicContent = document.getElementById('topicContent');
            const detailSection = topicContent ? topicContent.querySelector('.details-section') : null;
            if (detailSection) {
                detailSection.style.display = 'block';
                setTimeout(() => detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
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

    init: () => {
        // --- A. 嘗試從 LocalStorage 載入同步資料 ---
        const synced = SyncManager.load();
        if (synced) {
            window.lessonData = synced.lessonData;
            window.quizBank = synced.quizBank;
            console.log("已從 LocalStorage 載入同步資料 (上次同步: " + localStorage.getItem('last_sync_time') + ")");
        }

        App.renderSidebar(window.lessonData);
        App.bindEvents();
        App.initTTS();
        mermaid.initialize({ startOnLoad: false, theme: 'neutral', securityLevel: 'loose' });
        App.updateProgress();
        // ✅ 2A 修正：啟動時顯示 AI 知識地圖主頁
        App.renderHomeScreen();
    },

    // 手動觸發雲端同步
    syncFromCloud: async () => {
        const btn = document.getElementById('syncBtn');
        if (btn) btn.classList.add('fa-spin');

        try {
            console.log("開始同步雲端數據...");
            const rawPro = await SyncManager.fetchCSV(SyncManager.PRO_QUIZ_GID);
            const rawBank = await SyncManager.fetchCSV(SyncManager.QUIZ_BANK_GID);

            const proRows = SyncManager.parseCSV(rawPro);
            const bankRows = SyncManager.parseCSV(rawBank);

            const result = SyncManager.transformData(proRows, bankRows);
            SyncManager.save(result.lessonData, result.quizBank);

            // 更新全域變數並重新初始化 UI
            window.lessonData = result.lessonData;
            window.quizBank = result.quizBank;

            App.renderSidebar(window.lessonData);
            App.updateProgress();
            App.renderHomeScreen();

            alert('雲端同步成功！資料已更新至最新版本。');
        } catch (err) {
            console.error(err);
            alert('同步失敗：' + err.message + '\n請檢查網路連線或試算表權限。');
        } finally {
            if (btn) btn.classList.remove('fa-spin');
        }
    },

    // 渲染側邊欄
    renderSidebar: (data) => {
        const nav = document.getElementById('sidebarNav');
        nav.innerHTML = '';

        data.forEach(unit => {
            const unitDiv = document.createElement('div');
            unitDiv.className = 'unit-item';
            unitDiv.innerHTML = `<div class="unit-title">${unit.title} <i class="fas fa-chevron-down"></i></div>`;

            const subList = document.createElement('div');
            subList.className = 'sub-unit-list';

            unit.sub_units.forEach(sub => {
                const subHeader = document.createElement('div');
                subHeader.className = 'sub-unit-header';
                subHeader.textContent = sub.title;
                subList.appendChild(subHeader);

                sub.topics.forEach(topic => {
                    const link = document.createElement('div');
                    link.className = 'topic-link';
                    link.innerHTML = `<i class="fas fa-file-alt"></i> ${topic.id}. ${topic.title}`;
                    link.onclick = (e) => {
                        e.stopPropagation();
                        App.loadTopic(topic);
                        // 行動端點擊後自動收合
                        if (window.innerWidth <= 768) {
                            document.querySelector('.sidebar').classList.remove('active');
                        }
                    };
                    subList.appendChild(link);
                });
            });

            unitDiv.querySelector('.unit-title').onclick = () => subList.classList.toggle('active');
            unitDiv.appendChild(subList);
            nav.appendChild(unitDiv);
        });
    },

    // 載入主題並顯示為 Modal
    loadTopic: (topic) => {
        App.currentTopic = topic;
        App.renderDetail(topic);

        // 自動語音朗讀 (如果勾選)
        const autoPlay = document.getElementById('autoPlayToggle');
        if (autoPlay && autoPlay.checked) {
            App.speakZh(topic.title);
        }
    },

    // 渲染詳細學習卡 (以 Modal 顯示)
    renderDetail: (topic) => {
        // 先移除舊的 Modal
        const oldModal = document.querySelector('.detail-modal');
        if (oldModal) oldModal.remove();

        const modal = document.createElement('div');
        modal.className = 'detail-modal';
        modal.innerHTML = `
            <div class="detail-overlay" onclick="App.closeDetail()"></div>
            <div class="detail-content glass-panel">
                <button class="close-detail-btn" onclick="App.closeDetail()" title="關閉"><i class="fas fa-times"></i></button>
                
                <div class="topic-header">
                    <h1><span style="color:var(--accent-color); opacity:0.6; margin-right:12px; font-family:monospace;">#${topic.id}</span>${topic.title}</h1>
                    <div class="topic-meta">
                        <span class="meta-badge meta-eng"><i class="fas fa-language"></i> ${topic.eng_name} (${topic.eng_abbr})</span>
                        <span class="meta-badge meta-cat"><i class="fas fa-tag"></i> ${topic.category}</span>
                    </div>
                </div>

                <div class="card-3d">
                    <div class="card-inner" onclick="this.classList.toggle('flipped')">
                        <div class="card-front">
                            <div class="term-title">
                                <span style="font-family:monospace; color:var(--accent-color); opacity:0.4; margin-right:10px;">#${topic.id}</span>
                                ${topic.title}
                            </div>
                            <div class="term-eng-row" style="margin-top: 15px;">
                                <span class="term-eng">${topic.eng_name}</span>
                                <button class="tts-icon-btn" onclick="event.stopPropagation(); App.speakEng('${topic.eng_name.replace(/'/g, "\\'")}')">
                                    <i class="fas fa-volume-up"></i>
                                </button>
                            </div>
                            <p style="margin-top:40px; opacity:0.6; font-size:0.9rem;">點擊翻轉查看詳細解析</p>
                        </div>
                        <div class="card-back">
                            <div class="card-back-scroll">
                                <div class="info-group">
                                    <div class="info-label">核心目標</div>
                                    <div class="info-value">${topic.key_goal || '請見詳細解析'}</div>
                                </div>
                                <div class="info-group">
                                    <div class="info-label">用途</div>
                                    <div class="info-value primary-text">${topic.key_purpose || '請見詳細解析'}</div>
                                </div>
                                <div class="info-group">
                                    <div class="info-label">定義</div>
                                    <div class="info-value">${topic.def}</div>
                                </div>
                                <div class="info-group">
                                    <div class="info-label">企業導入場景</div>
                                    <div class="scenario-grid">
                                        ${Object.entries(topic.scenarios).map(([key, val]) => val ? `
                                            <div class="scenario-item">
                                                <span class="scenario-tag">${App._getScenarioLabel(key)}</span>
                                                <span class="scenario-val">${val}</span>
                                            </div>
                                        ` : '').join('')}
                                    </div>
                                </div>
                                <div class="srs-actions" style="margin-top: 20px;">
                                    <div class="srs-btns-grid">
                                        <button class="srs-btn again" data-grade="0">忘了 (Again)</button>
                                        <button class="srs-btn hard" data-grade="1">困難 (Hard)</button>
                                        <button class="srs-btn good" data-grade="2">答對 (Good)</button>
                                        <button class="srs-btn easy" data-grade="3">秒答 (Easy)</button>
                                    </div>
                                </div>
                                <button class="control-btn quiz-start-btn" id="startQuizInModal" style="margin-top:20px; width:100%;"><i class="fas fa-vial"></i> 開始測驗</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="quizContainerInModal" class="hidden glass-panel" style="margin-top: 20px; padding: 25px; border: 1px solid var(--accent-color);">
                    <div id="modalQuizQuestion" class="quiz-q" style="font-size: 1.15rem; font-weight: 700; margin-bottom: 20px; color: var(--text-main);"></div>
                    <div id="modalQuizOptions" class="quiz-options"></div>
                    <div id="modalQuizFeedback" class="quiz-feedback hidden" style="margin-top: 25px;">
                        <!-- 題目專屬解析 -->
                        <div id="modalQuizExplain" class="quiz-explain" style="border-left: 4px solid var(--accent-color); padding-left: 15px; margin-bottom: 20px;"></div>
                        
                        <!-- 主題整體詳細解析 -->
                        <div id="modalTopicDetailExplain" class="quiz-explain" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                            <h4 style="margin-bottom: 8px; color: var(--accent-color); font-size: 0.9rem;"><i class="fas fa-book-open"></i> 主題核心解析</h4>
                             <div class="detail-text" style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">${topic.detail_explain}</div>
                        </div>

                        <button id="modalNextQuestionBtn" class="control-btn hidden" style="width: 100%; margin-bottom: 15px;">下一題 <i class="fas fa-arrow-right"></i></button>
                        
                        <div id="modalSrsActions" class="srs-btns-grid hidden">
                            <button class="srs-btn again" data-grade="0">忘了 (Again)</button>
                            <button class="srs-btn hard" data-grade="1">困難 (Hard)</button>
                            <button class="srs-btn good" data-grade="2">答對 (Good)</button>
                            <button class="srs-btn easy" data-grade="3">秒答 (Easy)</button>
                        </div>
                    </div>
                </div>

            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // 綁定測驗
        const startBtn = document.getElementById('startQuizInModal');
        if (startBtn) {
            startBtn.onclick = (e) => {
                e.stopPropagation();
                if (QuizManager.initQuiz(topic.id)) {
                    QuizManager.renderCurrentInModal();
                } else {
                    alert('此主題暫無測驗題目');
                }
            };
        }

        // 綁定內部 SRS 評分
        modal.querySelectorAll('.srs-btn').forEach(btn => {
            btn.onclick = (e) => {
                const grade = parseInt(e.target.closest('.srs-btn').dataset.grade);
                SRSManager.updateCard(topic.id, grade);
                App.updateProgress();
                App.closeDetail();
            };
        });
    },

    closeDetail: () => {
        const modal = document.querySelector('.detail-modal');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = 'auto';
            }, 300);
        }
    },

    // ✅ 新增：更新進度條邏輯
    updateProgressBar: () => {
        const stats = SRSManager.getStats();
        const reviewedCount = Object.keys(stats).length;
        const totalCount = 631; // 題目總數
        const progress = Math.round((reviewedCount / totalCount) * 100);

        const text = document.getElementById('progressText');
        const bar = document.getElementById('progressBar');
        if (text) text.textContent = `進度: ${progress}% (${reviewedCount}/${totalCount})`;
        if (bar) bar.style.width = `${progress}%`;
    },

    bindEvents: () => {
        // 漢堡選單 (行動端)
        const menuBtn = document.getElementById('menuBtn');
        const sidebar = document.querySelector('.sidebar');
        if (menuBtn && sidebar) {
            menuBtn.onclick = (e) => {
                e.stopPropagation();
                sidebar.classList.toggle('active');
            };
        }

        // 點擊 Modal 以外的地方關閉 Sidebar
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
                if (!sidebar.contains(e.target) && e.target !== menuBtn) {
                    sidebar.classList.remove('active');
                }
            }
        });

        // Logo 點擊 → 返回知識地圖主頁
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.style.cursor = 'pointer';
            logo.onclick = () => {
                App.renderHomeScreen();
                if (window.innerWidth <= 768) sidebar.classList.remove('active');
            };
        }

        // 主題色
        document.getElementById('toggleTheme').onclick = () => {
            document.body.classList.toggle('light-theme');
        };

        // 字體縮放
        document.getElementById('fontUp').onclick = () => {
            App.fontSize += 2;
            document.querySelector('.content-area').style.fontSize = App.fontSize + 'px';
        };
        document.getElementById('fontDown').onclick = () => {
            App.fontSize = Math.max(12, App.fontSize - 2);
            document.querySelector('.content-area').style.fontSize = App.fontSize + 'px';
        };

        // 搜尋功能：優化支援編號、中英文、縮寫與關鍵字
        document.getElementById('topicSearch').oninput = (e) => {
            const val = e.target.value.toLowerCase().trim();
            if (!val) {
                App.renderSidebar(lessonData);
                return;
            }

            const filtered = lessonData.map(unit => {
                const filteredSubUnits = unit.sub_units.map(sub => {
                    const filteredTopics = sub.topics.filter(t => {
                        return t.id.toLowerCase().includes(val) ||
                            t.title.toLowerCase().includes(val) ||
                            t.eng_name.toLowerCase().includes(val) ||
                            t.eng_abbr.toLowerCase().includes(val) ||
                            t.def.toLowerCase().includes(val) ||
                            t.category.toLowerCase().includes(val) ||
                            t.principle.toLowerCase().includes(val) ||
                            (t.key_purpose && t.key_purpose.toLowerCase().includes(val)) ||
                            (t.common_apps && t.common_apps.toLowerCase().includes(val));
                    });
                    return { ...sub, topics: filteredTopics };
                }).filter(sub => sub.topics.length > 0);

                return { ...unit, sub_units: filteredSubUnits };
            }).filter(unit => unit.sub_units.length > 0);

            App.renderSidebar(filtered);
        };

        // SRS 評分按鈕
        document.querySelectorAll('.srs-btn').forEach(btn => {
            btn.onclick = (e) => {
                const grade = parseInt(e.target.dataset.grade);
                const tid = App.currentTopic.id;
                SRSManager.updateCard(tid, grade);
                App.updateProgress();

                document.getElementById('quizContainer').classList.add('hidden');

                // ✅ 模式優化：如果是 SRS 模式，評分後自動載入下一個待複習的主題
                if (App.isSRSMode) {
                    const dueIds = SRSManager.getDueTopics();
                    const nextTid = dueIds.find(id => id !== tid);
                    if (nextTid) {
                        const allTopics = lessonData.flatMap(u => u.sub_units.flatMap(s => s.topics));
                        const nextTopic = allTopics.find(t => t.id === nextTid);
                        if (nextTopic) {
                            App.loadTopic(nextTopic);
                            return;
                        }
                    }
                    alert('恭喜！今日複習任務已全部完成！');
                    App.renderHomeScreen();
                } else {
                    alert('已記錄複習進度！下次複習時將自動排程。');
                }
            };
        });

         // SRS 複習切換
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
                if (dueIds.length === 0) alert('今日暫無待複習項目！');
            } else {
                App.renderSidebar(lessonData);
            }
        };

        // 錯題補救快捷按鈕 (Header)
        const headerWrongBtn = document.getElementById('headerWrongQuizBtn');
        if (headerWrongBtn) {
            headerWrongBtn.onclick = () => {
                if (QuizManager.initWrongQuiz()) {
                    // 渲染測驗介面到內容區
                    const container = document.getElementById('topicContent');
                    container.innerHTML = `
                        <div class="quiz-header" style="margin-bottom: 30px;">
                            <h1>⚠️ 錯題補救挑戰 (快捷模式)</h1>
                            <p>針對不熟悉的主題進行強化訓練。</p>
                        </div>
                        <div id="quizContainer" class="glass-panel" style="padding: 30px;">
                            <div id="quizQuestion" class="quiz-q"></div>
                            <div id="quizOptions" class="quiz-options"></div>
                            <div id="quizFeedback" class="quiz-feedback hidden">
                                <div id="quizExplain" class="quiz-explain"></div>
                                <button id="nextQuestionBtn" class="control-btn hidden">下一題 <i class="fas fa-arrow-right"></i></button>
                                <div id="srsActions" class="srs-btns-grid hidden">
                                    <button class="srs-btn again" data-grade="0">忘了 (Again)</button>
                                    <button class="srs-btn hard" data-grade="1">困難 (Hard)</button>
                                    <button class="srs-btn good" data-grade="2">答對 (Good)</button>
                                    <button class="srs-btn easy" data-grade="3">秒答 (Easy)</button>
                                </div>
                            </div>
                        </div>
                    `;
                    QuizManager.renderCurrent(false);
                    // 隱藏側邊欄 (行動端)
                    if (window.innerWidth <= 768) {
                        document.querySelector('.sidebar').classList.remove('active');
                    }
                } else {
                    alert('目前沒有錯題紀錄！');
                }
            };
        }

        // 語音朗讀（readFull 已移至學習卡喇叭，這裡保留邖層再 抓一次）
        const readBtn = document.getElementById('readFull');
        if (readBtn) {
            readBtn.onclick = () => {
                if (!App.currentTopic) return;
                App.speakZh(`${App.currentTopic.title}。定義如下: ${App.currentTopic.def}`);
            };
        }
    },

    initTTS: () => {
        const preloadVoices = () => { App.synth.getVoices(); };
        preloadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = preloadVoices;
        }

        // 當引擎或性別改變時，立即發音預覽，並確保修正男聲
        document.getElementById('ttsEngineSelect').onchange = () => App.speakZh("切換語音引擎測試", 1.0);
        document.getElementById('ttsGenderSelect').onchange = () => {
            const gender = App._getTTSGender();
            App.speakZh(gender === 'female' ? "切換為女聲" : "切換為男聲", 1.0);
        };

        // TTS 滑動條即時顯示值
        const rateSlider = document.getElementById('ttsRateSlider');
        const pitchSlider = document.getElementById('ttsPitchSlider');
        const rateVal = document.getElementById('ttsRateVal');
        const pitchVal = document.getElementById('ttsPitchVal');

        if (rateSlider && rateVal) {
            rateSlider.oninput = (e) => {
                rateVal.textContent = e.target.value;
            };
            rateSlider.onchange = () => App.speakZh("語速測試", 1.0);
        }
        if (pitchSlider && pitchVal) {
            pitchSlider.oninput = (e) => {
                pitchVal.textContent = e.target.value;
            };
            // 音調測試僅在系統引擎下有效
            pitchSlider.onchange = () => {
                if (App._getTTSEngine() === 'browser') {
                    App.speakZh("音調測試", 1.0);
                }
            };
        }
    },

    // 取得場景標籤
    _getScenarioLabel: (key) => {
        const labels = {
            weather: '氣象與防災',
            agri: '農業漁業與畜牧',
            traffic: '交通與物流',
            industry: '生產與製造',
            finance: '科技金融與醫學',
            life: '客服零售與生活',
            fire: '消防與公共安全'
        };
        return labels[key] || key;
    },

    // ✅ 核心修正：指定 Google TTS 聲音
    speakZh: (text, speedOverride = null) => {
        App.synth.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        const rateSlider = document.getElementById('ttsRateSlider');
        utter.rate = speedOverride || (rateSlider ? parseFloat(rateSlider.value) : 1.0);

        const voices = App.synth.getVoices();
        const engine = document.getElementById('ttsEngineSelect').value;
        const gender = document.getElementById('ttsGenderSelect').value;

        if (engine === 'google') {
            // 強制匹配 Google 聲音
            // Google 國語 (台灣) - Standard-A (女), Standard-B (男)
            const targetName = gender === 'female' ? 'Google 國語（臺灣）' : 'Google 國語（臺灣）';
            // 注意：Chrome 顯示名稱可能略有不同，我們根據 index 或 genderhint 匹配
            const googleVoices = voices.filter(v => v.name.includes('Google') && v.lang.includes('zh-TW'));
            if (googleVoices.length > 0) {
                // 語音引擎排序通常是 A 在前 B 在後，或者我們直接匹配特定 String
                const targetVoice = googleVoices.find(v => v.name.includes(gender === 'female' ? '-A' : '-B')) || googleVoices[0];
                utter.voice = targetVoice;
            }
        } else {
            // 系統引擎：根據 gender hint
            const zhVoice = voices.find(v => v.lang.includes('zh-TW') && (gender === 'female' ? !v.name.includes('Male') : v.name.includes('Male')));
            if (zhVoice) utter.voice = zhVoice;
        }

        App.synth.speak(utter);
    },

    speakEng: (text) => {
        App.synth.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        const voices = App.synth.getVoices();
        const engVoice = voices.find(v => v.lang.startsWith('en-'));
        if (engVoice) utter.voice = engVoice;
        utter.rate = 0.9;
        App.synth.speak(utter);
    },

    updateProgress: () => {
        const stats = SRSManager.getStats();
        const reviewed = Object.keys(stats).length;
        const total = 631; // 已更新至 631 個主題 (2026-04-03)
        const percent = Math.round((reviewed / total) * 100);
        document.getElementById('progressText').textContent = `熟練度: ${percent}% (${reviewed}/${total})`;
        document.getElementById('progressBar').style.width = `${percent}%`;
    },

    // ✅ 2A 修正：渲染 AI 知識地圖主頁
    renderHomeScreen: () => {
        const container = document.getElementById('topicContent');
        document.getElementById('quizContainer').classList.add('hidden');

        // 收集所有主題
        const allTopics = lessonData.flatMap(u => u.sub_units.flatMap(s => s.topics));

        // ✅ 2A 微調：改用 category 白名單做精確分區，避免語意誤配
        // DL 白名單：category 直接對應深度學習相關領域
        const DL_CATS = new Set([
            '深度學習', '深度學習原理', '神經網路', '模型架構', '模型訓練',
            '模型優化', '模型壓縮', '模型量化', '模型微調', '推論優化',
            '生成式 AI', '生成式AI技術', '模型規模', '多模態', '多模態人工智慧',
            '自然語言處理\n\n深度學習架構', '生成式AI應用\n\n提示工程',
            '生成式AI風險\n\nAI 導入規劃'
        ]);

        // NN 白名單：類神經網路架構與訓練機制
        const NN_CATS = new Set([
            '訓練模式', '數值優化', '數學優化', '運作機制', '數學基礎', '幾何運算'
        ]);

        // ML 白名單：傳統機器學習、資料科學與統計
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

        // 根據 category 白名單決定所屬區域（DL → NN → ML → AI，最具體優先）
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

        // 將對應區域的 badge HTML 產生
        const mkBadges = (id, max) =>
            (zoneTopics[id] || []).slice(0, max)
                .map(t => `<span class="zone-badge" data-tid="${t.id}" title="${t.eng_name}">${t.title}</span>`)
                .join('') || '<span class="zone-badge-empty">暫無指定主題</span>';

        container.innerHTML = `
            <div class="home-hero">
                <h1>🗺️ AI 知識地圖</h1>
                <p class="home-sub">探索 <strong>AI ⊃ ML ⊃ 類神經網路 ⊃ 深度學習</strong> 的巢狀知識體系，點擊任意主題開始學習</p>
                <div class="hero-stats">
                    <span class="stat-item"><i class="fas fa-book"></i> ${allTopics.length} 個術語</span>
                    <span class="stat-divider">|</span>
                    <span class="stat-item"><i class="fas fa-check-circle"></i> ${learned} 已掌握</span>
                    <span class="stat-divider">|</span>
                    <span class="stat-item"><i class="fas fa-chart-line"></i> ${Math.round(learned / allTopics.length * 100)}% 完成度</span>
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
                <button class="home-action-btn secondary" id="wrongQuizBtn">
                    <i class="fas fa-exclamation-triangle"></i> 錯題補救測驗 (${SRSManager.getWrongTopics().length})
                </button>
            </div>

            <div class="topology-section glass-panel" style="margin-top: 30px; padding: 20px;">
                <h3 style="margin-bottom: 20px; color: var(--accent-color);"><i class="fas fa-project-diagram"></i> 學習拓撲地圖</h3>
                <div id="topologyMapContainer" class="mermaid" style="background: rgba(0,0,0,0.2); border-radius: 12px; padding: 15px;">
                    ${App.renderTopologyMap()}
                </div>
            </div>

            <div class="achievement-section glass-panel" style="margin-top: 30px; padding: 20px;">
                <h3 style="margin-bottom: 20px; color: var(--accent-color);"><i class="fas fa-trophy"></i> 學習成就牆</h3>
                ${AchievementManager.renderWall()}
            </div>
        `;

        // 重新渲染 Mermaid
        setTimeout(() => {
            const container = document.getElementById('topologyMapContainer');
            if (container) {
                // 清除舊的渲染內容
                container.removeAttribute('data-processed');
                mermaid.init(undefined, container);
            }
        }, 100);

        // 綁定區域 badge 點擊
        container.querySelectorAll('.zone-badge').forEach(badge => {
            const topic = allTopics.find(t => t.id === badge.dataset.tid);
            if (topic) badge.onclick = () => App.loadTopic(topic);
        });

        // 隨機學習按鈕
        const randomBtn = document.getElementById('randomStartBtn');
        if (randomBtn) randomBtn.onclick = () => {
            App.loadTopic(allTopics[Math.floor(Math.random() * allTopics.length)]);
        };

        // 錯題補救按鈕
        const wrongBtn = document.getElementById('wrongQuizBtn');
        if (wrongBtn) wrongBtn.onclick = () => {
            if (QuizManager.initWrongQuiz()) {
                // 進入測驗模式 UI
                document.getElementById('topicContent').innerHTML = `
                    <div class="quiz-header" style="margin-bottom: 30px;">
                        <h1>⚠️ 錯題補救挑戰</h1>
                        <p>正在針對您答錯或不熟悉的題目進行專屬強化測驗。</p>
                    </div>
                    <div id="quizContainer" class="glass-panel" style="padding: 30px;">
                        <div id="quizQuestion" class="quiz-q"></div>
                        <div id="quizOptions" class="quiz-options"></div>
                        <div id="quizFeedback" class="quiz-feedback hidden">
                            <div id="quizExplain" class="quiz-explain"></div>
                            <button id="nextQuestionBtn" class="control-btn hidden">下一題 <i class="fas fa-arrow-right"></i></button>
                            <div id="srsActions" class="srs-btns-grid hidden">
                                <button class="srs-btn again" data-grade="0">忘了 (Again)</button>
                                <button class="srs-btn hard" data-grade="1">困難 (Hard)</button>
                                <button class="srs-btn good" data-grade="2">答對 (Good)</button>
                                <button class="srs-btn easy" data-grade="3">秒答 (Easy)</button>
                            </div>
                        </div>
                    </div>
                `;
                QuizManager.renderCurrent(false);
            } else {
                alert('目前沒有錯題紀錄，太厲害了！繼續保持！');
            }
        };
    },

    // ✅ 實作：拓撲圖渲染邏輯 (子單元層級)
    renderTopologyMap: () => {
        const stats = SRSManager.getStats();
        let mermaidCode = 'graph LR\n';
        
        // 定義樣式
        mermaidCode += 'classDef done fill:#22c55e,stroke:#16a34a,color:#fff\n';
        mermaidCode += 'classDef doing fill:#f59e0b,stroke:#d97706,color:#fff\n';
        mermaidCode += 'classDef todo fill:rgba(255,255,255,0.1),stroke:rgba(255,255,255,0.2),color:rgba(255,255,255,0.5)\n';

        window.lessonData.forEach((unit, uIdx) => {
            const uId = `U${uIdx}`;
            mermaidCode += `${uId}("${unit.title}")\n`;

            unit.sub_units.forEach((sub, sIdx) => {
                const sId = `U${uIdx}S${sIdx}`;
                
                // 計算子單元進度
                const total = sub.topics.length;
                const learned = sub.topics.filter(t => stats[t.id]).length;
                const percent = Math.round((learned / total) * 100);
                
                mermaidCode += `${uId} --> ${sId}("${sub.title}<br>${percent}%")\n`;
                
                // 套用樣式
                if (percent >= 100) mermaidCode += `class ${sId} done\n`;
                else if (percent > 0) mermaidCode += `class ${sId} doing\n`;
                else mermaidCode += `class ${sId} todo\n`;
            });
            // 單元節點樣式
            mermaidCode += `class ${uId} done\n`;
        });

        return mermaidCode;
    },

    // 取得語速與語調設定
    _getTTSRate: () => {
        const slider = document.getElementById('ttsRateSlider');
        return slider ? parseFloat(slider.value) : 0.5;
    },
    _getTTSPitch: () => {
        const slider = document.getElementById('ttsPitchSlider');
        return slider ? parseFloat(slider.value) : 1.0;
    },

    // ✅ 2C 優化：取得目前 TTS 引擎選擇
    _getTTSEngine: () => {
        const sel = document.getElementById('ttsEngineSelect');
        return sel ? sel.value : 'browser';
    },

    // ✅ 2C 優化：取得性別設定（male / female）
    _getTTSGender: () => {
        const sel = document.getElementById('ttsGenderSelect');
        return sel ? sel.value : 'female';
    },

    // ✅ 2C 優化：根據語言前綴 + 性別偏好，精確挑選語音
    _pickVoice: (langPrefix, gender, engine) => {
        const voices = window.speechSynthesis.getVoices();
        const isFemale = gender === 'female';

        // 更精確的 Windows / Chrome 語音關鍵字
        const femaleKw = ['female', 'woman', 'zira', 'yating', 'hanhan', 'huihui', 'xiaoxiao', 'samantha', 'victoria', '女'];
        const maleKw = ['male', 'man', 'zhiwei', 'yunyang', 'david', 'mark', 'daniel', '男', 'yunxi'];
        const targetKws = isFemale ? femaleKw : maleKw;

        const matchesGender = (v) => {
            const n = v.name.toLowerCase();
            const l = v.lang.toLowerCase();
            // 1. 優先比對明確的男女聲關鍵字
            if (targetKws.some(kw => n.includes(kw))) return true;

            // 2. 特殊處理：Google 語音與一些系統預設
            if (langPrefix === 'zh') {
                // Windows 常用廣東話/國語男聲補強
                if (!isFemale && (n.includes('can') || n.includes('yue') || n.includes('hant'))) {
                    if (n.includes('szewai') || n.includes('zhiwei') || n.includes('yunyang')) return true;
                }
                if (n.includes('google')) return isFemale; // Google 國語通常是女聲
            }
            return false;
        };

        const isGoogle = (v) => v.name.includes('Google');

        if (engine === 'google') {
            // 強制優先：Google 引擎必須含有 Google 字眼
            return voices.find(v => v.lang.startsWith(langPrefix) && isGoogle(v) && matchesGender(v))
                || voices.find(v => v.lang.startsWith(langPrefix) && isGoogle(v))
                || voices.find(v => v.lang.startsWith(langPrefix) && matchesGender(v)) // 備用
                || voices.find(v => v.lang.startsWith(langPrefix));
        } else {
            // Browser 系統引擎：排除 Google 選項
            return voices.find(v => v.lang.startsWith(langPrefix) && !isGoogle(v) && matchesGender(v))
                || voices.find(v => v.lang.startsWith(langPrefix) && !isGoogle(v))
                || voices.find(v => v.lang.startsWith(langPrefix) && matchesGender(v))
                || voices.find(v => v.lang.startsWith(langPrefix));
        }
    },

    // 通用 speak 支援
    speak: (text, overrideRate = null) => {
        const isEng = /[a-zA-Z]/.test(text.substring(0, 5));
        isEng ? App.speakEng(text, overrideRate) : App.speakZh(text, overrideRate);
    },

    // ✅ 2C 優化：英文 TTS（引擎 + 性別 + 語速 + 語調全部整合）
    speakEng: (text, overrideRate = null) => {
        App.synth.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        const engine = App._getTTSEngine();
        const voice = App._pickVoice('en', App._getTTSGender(), engine);
        if (voice) utter.voice = voice;

        // 設定語速與語調（Google 語音不支援 pitch 自訂，此處僅對系統語音有效）
        utter.rate = overrideRate || App._getTTSRate();
        utter.pitch = engine === 'browser' ? App._getTTSPitch() : 1.0;

        App.synth.speak(utter);
    },

    // ✅ 2C 優化：中文 TTS（引擎 + 性別 + 語速 + 語調全部整合）
    speakZh: (text, overrideRate = null) => {
        App.synth.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'zh-TW';
        const engine = App._getTTSEngine();
        const voice = App._pickVoice('zh', App._getTTSGender(), engine);
        if (voice) utter.voice = voice;

        // 設定語速與語調
        utter.rate = overrideRate || App._getTTSRate();
        utter.pitch = engine === 'browser' ? App._getTTSPitch() : 1.0;

        App.synth.speak(utter);
    }
};

window.onload = App.init;
