// 模擬 iPas 課程目錄結構 (後續可從 DB 或既有 data 變數自動映射)
const ipasCourseLayout = [
    {
        id: 'L11',
        title: '[L11] 人工智慧基礎概論 - 初級',
        children: [
            { id: 'L11101', title: 'L11101 AI的定義與分類', dbRef: '第一章：專案管理基礎' }, // 假定對應既有的 data
            { id: 'L11102', title: 'L11102 機器學習簡介', dbRef: '第二章：專業責任' }
        ]
    },
    {
        id: 'L12',
        title: '[L12] 生成式AI應用與規劃 - 初級',
        children: [
            { id: 'L12101', title: 'L12101 No Code / Low Code', dbRef: '第三章：道德層面' },
            { id: 'L12102', title: 'L12102 Prompt Engineering', dbRef: '第四章：風險應對' }
        ]
    },
    {
        id: 'L21',
        title: '[L21] 人工智慧技術應用 - 中級',
        children: [
            { id: 'L21101', title: 'L21101 自然語言處理應用' },
            { id: 'L21201', title: 'L21201 AI導入評估' }
        ]
    }
];

// 初始化 DOM
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCourseNav();
    setupPanzoom();
    document.getElementById('toggleTheme').addEventListener('click', toggleTheme);
});

/* --- Theme Management --- */
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}
function initTheme() {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }
}

/* --- 導覽列渲染 --- */
function renderCourseNav() {
    const nav = document.getElementById('courseNav');
    nav.innerHTML = '';
    
    ipasCourseLayout.forEach(section => {
        const item = document.createElement('div');
        item.className = 'nav-item';
        item.innerHTML = `
            <div class="nav-title" onclick="toggleNav(this)">
                <span>${section.title}</span> <i class="fas fa-chevron-down"></i>
            </div>
            <div class="nav-children">
                ${section.children.map(child => `
                    <div class="nav-child-link" onclick="loadMindmapNode('${child.id}', '${child.title}', '${child.dbRef || ''}')">
                        <i class="fas fa-sitemap"></i> ${child.title}
                    </div>
                `).join('')}
            </div>
        `;
        nav.appendChild(item);
    });
}

function toggleNav(el) {
    const children = el.nextElementSibling;
    children.classList.toggle('expanded');
    el.classList.toggle('active');
}

/* --- 畫布與 Mindmap 渲染邏輯 --- */
let canvasX = 100, canvasY = 500; // Root node 初始座標
let activeNodes = []; // 儲存目前圖表上的節點
let svgLines = [];

function setupPanzoom() {
    const area = document.getElementById('panzoomArea');
    const canvas = document.getElementById('mindmapCanvas');
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    area.addEventListener('mousedown', (e) => {
        if (e.target.closest('.mnode')) return; // 點擊在節點上不觸發畫布拖曳
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
}

// 點擊目錄後，載入該單元的 Root Node
window.loadMindmapNode = function(id, title, dbRef) {
    document.getElementById('currentTopicTitle').innerText = title;
    
    // 清除舊圖版
    const canvas = document.getElementById('mindmapCanvas');
    const svg = document.getElementById('mindmapLines');
    svg.innerHTML = ''; 
    const olds = canvas.querySelectorAll('.mnode');
    olds.forEach(o => o.remove());
    activeNodes = [];

    // 從舊系統的 data 中找內容 (模擬)
    // 實際上您可擴寫此處對查 data.js 或 quizzes.js
    let desc = "本節涵蓋 " + title + " 的核心理論與考題。點擊下方展開深入學習。";
    if (typeof sheetData !== 'undefined' && dbRef) {
        // 如果載入了舊 data，尋找關聯的內容
        const matched = sheetData.filter(d => d.topic === dbRef);
        if(matched.length > 0) desc = matched[0].text;
    }

    createNode({
        id: 'root_' + id,
        title: title,
        content: desc,
        x: canvasX,
        y: canvasY,
        parentId: null,
        level: 0
    });
    
    // 將畫布中心捲動回起始點
    document.getElementById('panzoomArea').scrollTop = 100;
}

// 建立實體 DOM 節點
function createNode(nodeData) {
    activeNodes.push(nodeData);
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
                <i class="fas fa-volume-up" title="發音" onclick="speakText('${nodeData.content}')"></i>
            </div>
        </div>
        <div class="mnode-content">
            ${nodeData.content}
        </div>
        <div class="mnode-actions">
            <!-- 展開按鈕 -->
            <button class="expand-btn" data-nodeid="${nodeData.id}" onclick="expandChildren(this, ${nodeData.level})">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    `;
    canvas.appendChild(el);

    if (nodeData.parentId) {
        drawSVGLine(nodeData.parentId, nodeData.id);
    }
}

// 展開子節點機制
window.expandChildren = function(btn, level) {
    const parentId = btn.getAttribute('data-nodeid');
    const parentNode = activeNodes.find(n => n.id === parentId);
    
    if (btn.classList.contains('expanded')) {
        // 折疊 (暫未實作完整遞迴消除，目前僅轉按鈕狀態)
        btn.classList.remove('expanded');
        return;
    }
    
    btn.classList.add('expanded');
    
    // 模擬動態生成子樹節點
    const childCount = 3; 
    const spacingY = 150;
    const spacingX = 350;
    const startY = parentNode.y - ((childCount - 1) * spacingY) / 2;

    for(let i=0; i<childCount; i++) {
        let childTitle = (level === 0) ? ["關鍵定義", "應用場景", "歷屆考題"][i] : `子概念 ${i+1}`;
        let childId = parentId + '_c' + i;
        
        // 避免重複生成
        if(activeNodes.find(n => n.id === childId)) continue;
        
        createNode({
            id: childId,
            title: childTitle,
            content: `針對 ${childTitle} 的詳細說明...`,
            x: parentNode.x + spacingX,
            y: startY + (i * spacingY),
            parentId: parentId,
            level: level + 1
        });
    }
}

// 畫 SVG 曲線
function drawSVGLine(parentId, childId) {
    const svg = document.getElementById('mindmapLines');
    const pEl = document.getElementById(parentId);
    const cEl = document.getElementById(childId);
    
    if(!pEl || !cEl) return;

    // 計算起點終點與 Bézier 曲線
    const pRect = pEl.getBoundingClientRect();
    const cRect = cEl.getBoundingClientRect();
    const canvasRect = document.getElementById('mindmapCanvas').getBoundingClientRect();
    
    // offset
    const px = (pRect.right - canvasRect.left) + 10;
    const py = (pRect.top + pRect.height/2) - canvasRect.top;
    
    const cx = (cRect.left - canvasRect.left) - 10;
    const cy = (cRect.top + cRect.height/2) - canvasRect.top;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // 設定貝茲曲線，以水平擴展為主
    const d = `M ${px} ${py} C ${px + 100} ${py}, ${cx - 100} ${cy}, ${cx} ${cy}`;
    
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "var(--accent-color)");
    path.setAttribute("stroke-width", "3");
    
    // 進入動畫
    path.style.strokeDasharray = "500";
    path.style.strokeDashoffset = "500";
    path.style.animation = "draw 0.5s ease forwards";
    
    svg.appendChild(path);
}

document.head.insertAdjacentHTML('beforeend', '<style>@keyframes draw { to { stroke-dashoffset: 0; } }</style>');

// 模擬 TTS
window.speakText = function(text) {
    if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'zh-TW';
        window.speechSynthesis.speak(utter);
    } else {
        alert('您的瀏覽器不支援本機語音發聲！');
    }
}
