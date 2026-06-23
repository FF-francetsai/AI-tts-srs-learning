// js/starmap.js — AI 知識星象圖 v6.0
(function(global) {
  'use strict';

  const MANSIONS = [
    { sym:'斗', g:'N', stars:[[-6,-8],[-2,-12],[4,-10],[8,-4],[4,2],[-2,4]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[2,4]] },
    { sym:'牛', g:'N', stars:[[-7,-10],[7,-10],[-2,-3],[2,-3],[0,4],[0,10]], lines:[[0,2],[1,3],[2,3],[2,4],[3,4],[4,5]] },
    { sym:'女', g:'N', stars:[[-4,-8],[4,-8],[0,-2],[-7,5],[7,5]],           lines:[[0,2],[1,2],[2,3],[2,4]] },
    { sym:'虛', g:'N', stars:[[-6,-3],[6,3]],                                lines:[[0,1]] },
    { sym:'危', g:'N', stars:[[0,-10],[-6,2],[6,2],[0,8]],                   lines:[[0,1],[0,2],[1,3],[2,3]] },
    { sym:'室', g:'N', stars:[[-8,-4],[8,-4],[8,5],[-8,5],[0,-11]],          lines:[[0,1],[1,2],[2,3],[3,0],[0,4],[1,4]] },
    { sym:'壁', g:'N', stars:[[-6,-8],[6,8],[0,0],[6,-8],[-6,8]],            lines:[[0,2],[2,1],[3,2],[2,4]] },
    { sym:'角', g:'E', stars:[[-8,-4],[8,4]],                                lines:[[0,1]] },
    { sym:'亢', g:'E', stars:[[-6,-6],[-2,-12],[6,-4],[0,4]],                lines:[[0,1],[1,2],[2,3],[3,0]] },
    { sym:'氐', g:'E', stars:[[-8,-4],[8,-4],[8,5],[-8,5]],                  lines:[[0,1],[1,2],[2,3],[3,0]] },
    { sym:'房', g:'E', stars:[[-6,-8],[6,-8],[6,8],[-6,8]],                  lines:[[0,1],[1,2],[2,3],[3,0],[0,2]] },
    { sym:'心', g:'E', stars:[[-10,0],[0,-4],[10,0]],                        lines:[[0,1],[1,2]] },
    { sym:'尾', g:'E', stars:[[-4,-14],[-2,-7],[0,0],[2,6],[4,10],[6,12],[4,6],[2,14],[-2,18]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[3,7],[7,8]] },
    { sym:'箕', g:'E', stars:[[0,-8],[-10,4],[0,10],[10,4]],                 lines:[[0,1],[1,2],[2,3],[3,0]] },
    { sym:'奎', g:'W', stars:[[0,-12],[-5,-6],[5,-6],[-8,0],[8,0],[-5,6],[5,6],[0,10]], lines:[[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,7],[1,4]] },
    { sym:'婁', g:'W', stars:[[-8,0],[0,-8],[8,0]],                          lines:[[0,1],[1,2]] },
    { sym:'胃', g:'W', stars:[[0,-8],[-6,4],[6,4]],                          lines:[[0,1],[1,2],[2,0]] },
    { sym:'昴', g:'W', stars:[[0,0],[-6,-6],[6,-6],[-8,0],[8,0],[-4,6],[4,6]], lines:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[5,6]] },
    { sym:'畢', g:'W', stars:[[-4,-10],[0,-4],[4,-10],[-7,2],[7,2],[-4,8],[0,12],[4,8]], lines:[[0,1],[2,1],[1,3],[1,4],[3,5],[5,6],[6,7],[7,4]] },
    { sym:'觜', g:'W', stars:[[-6,-4],[6,-4],[0,6]],                         lines:[[0,2],[2,1],[0,1]] },
    { sym:'參', g:'W', stars:[[0,-12],[-6,-6],[6,-6],[-4,0],[0,0],[4,0],[0,8]], lines:[[0,1],[0,2],[1,3],[2,5],[3,4],[4,5],[3,6],[5,6]] },
    { sym:'井', g:'S', stars:[[-6,-6],[6,-6],[8,0],[6,6],[-6,6],[-8,0],[0,-12],[0,10]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[1,6]] },
    { sym:'鬼', g:'S', stars:[[0,0],[-6,-6],[6,-6],[-6,6],[6,6]],            lines:[[0,1],[0,2],[0,3],[0,4],[1,2],[3,4]] },
    { sym:'柳', g:'S', stars:[[-10,-4],[-6,-8],[-2,-6],[2,-4],[6,-2],[8,2],[6,6],[2,8]], lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
    { sym:'星', g:'S', stars:[[0,0],[-8,0],[8,0],[0,-8],[0,8],[-4,-4],[4,4]],lines:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6]] },
    { sym:'張', g:'S', stars:[[-8,-4],[0,-8],[8,-4],[8,4],[0,8],[-8,4]],     lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]] },
    { sym:'翼', g:'S', stars:[[-10,-6],[-4,-10],[4,-10],[10,-6],[6,0],[0,2],[-6,0],[-4,8],[4,8]], lines:[[0,1],[1,2],[2,3],[0,6],[3,4],[4,5],[5,6],[5,7],[5,8],[7,8]] },
    { sym:'軫', g:'S', stars:[[-6,-6],[6,-6],[6,6],[-6,6]],                  lines:[[0,1],[1,2],[2,3],[3,0],[0,2],[1,3]] },
  ];

  const GROUP_COLOR  = { N:'#60a5fa', E:'#4ade80', W:'#d1d5db', S:'#f87171' };
  const GROUP_ANGLES = {
    N:[-130,-117,-103,-90,-77,-63,-50],
    E:[140,153,167,180,193,207,220],
    W:[-40,-27,-13,0,13,27,40],
    S:[50,63,77,90,103,117,130],
  };
  const GROUP_CAT = {
    N:['機器學習','資料科學'],
    E:['深度學習','電腦視覺'],
    W:['NLP基礎','AI 代理人'],
    S:['生成式 AI','AI 治理'],
  };
  const GROUP_ORDER = { N:0, E:7, W:14, S:21 };

  const ZODIAC_PATTERNS = [
    { stars:[[-12,4],[-6,0],[0,-5],[8,-2],[14,4]],                                     lines:[[0,1],[1,2],[2,3],[3,4]] },
    { stars:[[-10,8],[-5,2],[0,-2],[5,2],[10,8],[2,-9]],                               lines:[[0,1],[1,2],[2,3],[3,4],[2,5]] },
    { stars:[[-8,-10],[-8,-2],[-8,6],[-8,14],[8,-10],[8,-2],[8,6],[8,14]],             lines:[[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[1,5],[2,6]] },
    { stars:[[0,-12],[0,-4],[-9,4],[9,4],[-5,12],[5,12]],                              lines:[[0,1],[1,2],[1,3],[2,4],[3,5]] },
    { stars:[[0,-12],[4,-6],[8,0],[4,5],[-2,5],[-6,2],[-4,-3],[6,10],[2,14]],          lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,1],[7,8]] },
    { stars:[[-10,-10],[0,-6],[10,-10],[2,0],[0,8],[-8,14],[4,14]],                    lines:[[0,1],[2,1],[1,3],[3,4],[4,5],[4,6]] },
    { stars:[[0,-12],[-10,0],[0,6],[10,0],[-6,12],[6,12]],                             lines:[[0,1],[0,3],[1,2],[3,2],[1,4],[3,5],[4,5]] },
    { stars:[[-8,-14],[-4,-8],[0,-2],[2,4],[4,8],[6,10],[8,8],[6,12],[2,16]],          lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[5,7],[7,8]] },
    { stars:[[-10,-6],[-6,-12],[0,-8],[8,-10],[6,-2],[0,4],[-6,4],[6,8],[10,12]],      lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[4,7],[7,8]] },
    { stars:[[-12,-6],[-6,-10],[0,-12],[6,-8],[12,-4],[8,4],[2,8],[-4,6],[-10,2]],     lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0]] },
    { stars:[[-12,-6],[-4,-10],[4,-8],[12,-4],[8,2],[0,4],[-8,2],[-4,10],[4,12]],      lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    { stars:[[-10,-10],[-14,-2],[-10,6],[-4,2],[-2,-6],[2,-6],[4,2],[10,6],[14,-2],[10,-10],[0,0]], lines:[[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,9],[9,5],[3,10],[10,6]] },
  ];

  const ZODIAC_CAT = [
    'AI 代理人','機器學習','NLP基礎','神經網路',
    '生成式 AI','深度學習','電腦視覺','資料科學',
    'AI 代理人','AI 治理','生成式 AI','NLP基礎',
  ];

  const CAT_DEFS = [
    { cat:'機器學習',  color:'#a78bfa', shortName:'ML'   },
    { cat:'深度學習',  color:'#fbbf24', shortName:'DL'   },
    { cat:'神經網路',  color:'#34d399', shortName:'NN'   },
    { cat:'生成式 AI', color:'#7dd3fc', shortName:'GEN'  },
    { cat:'鑑別式 AI', color:'#a3e635', shortName:'DISC' },
    { cat:'多模態 AI', color:'#22d3ee', shortName:'MM'   },
    { cat:'電腦視覺',  color:'#f472b6', shortName:'CV'   },
    { cat:'NLP基礎',   color:'#fb923c', shortName:'NLP'  },
    { cat:'AI 代理人', color:'#c084fc', shortName:'AGT'  },
    { cat:'AI 治理',   color:'#e879f9', shortName:'GOV'  },
    { cat:'資料科學',  color:'#2dd4bf', shortName:'DS'   },
    { cat:'AI 應用',   color:'#94a3b8', shortName:'APP'  },
  ];

  // ── 學習導向：8 個漸進式學習路徑（入門→進階）─────────────────────────────────
  const LEARN_DEFS = [
    { cat:'AI 入門',   color:'#22d3ee', shortName:'INTRO', emoji:'🌱' },
    { cat:'資料基礎',  color:'#60a5fa', shortName:'DATA',  emoji:'📊' },
    { cat:'監督式',    color:'#a78bfa', shortName:'SL',    emoji:'🎯' },
    { cat:'鑑別式',    color:'#a3e635', shortName:'DISC',  emoji:'🔬' },
    { cat:'非監督式',  color:'#34d399', shortName:'UL',    emoji:'🔍' },
    { cat:'深度學習',  color:'#fbbf24', shortName:'DL',    emoji:'🧠' },
    { cat:'生成式',    color:'#f472b6', shortName:'GEN',   emoji:'✨' },
    { cat:'強化學習',  color:'#fb923c', shortName:'RL',    emoji:'🎮' },
    { cat:'中級進階',  color:'#94a3b8', shortName:'ADV',   emoji:'⚙️' },
  ];

  const CROSS_LINKS = [
    { a:'機器學習',  b:'深度學習'  },
    { a:'深度學習',  b:'神經網路'  },
    { a:'神經網路',  b:'電腦視覺'  },
    { a:'神經網路',  b:'生成式 AI' },
    { a:'生成式 AI', b:'NLP基礎'   },
    { a:'生成式 AI', b:'AI 代理人' },
    { a:'NLP基礎',   b:'AI 代理人' },
    { a:'機器學習',  b:'資料科學'  },
    { a:'資料科學',  b:'深度學習'  },
    { a:'AI 代理人', b:'AI 治理'   },
    { a:'AI 治理',   b:'AI 應用'   },
    { a:'AI 應用',   b:'生成式 AI' },
  ];

  // ─────────────────────────────────────────────────────────────────────────────

  class ConstellationAtlas {
    constructor(container, topics) {
      this._el      = typeof container === 'string' ? document.querySelector(container) : container;
      this._topics  = topics || [];
      this._rot     = 0;
      this._autoRot = true;
      this._speed   = 0.005;
      this._visible = false;
      this._raf     = null;
      this._byCat   = {};

      this._calc();
      this._buildTermPools();
      this._buildLearnPools();
      this._buildClusters();
      this._buildZodiacNodes();
      this._buildMansionNodes();
      this._buildSVG();
      this._drawAll();
    }

    _calc() {
      this._W  = this._el.clientWidth  || window.innerWidth;
      this._H  = this._el.clientHeight || window.innerHeight;
      this._cx = this._W / 2;
      this._cy = this._H / 2;
      const md      = Math.min(this._W, this._H - 90);
      this._md      = md;   // 供外部方法（_drawClusters 等）使用
      // 放大各環半徑，初始縮小 0.65x 後可看到全圖，滾輪/拖曳放大細節
      this._orbitR  = md * 0.44;
      this._zodR    = md * 0.60;
      this._sxR     = md * 0.75;
      this._coreR   = md * 0.055;
    }

    _d2r(d) { return d * Math.PI / 180; }
    _pt(deg, r) {
      const a = this._d2r(deg);
      return [Math.cos(a) * r, Math.sin(a) * r];
    }

    _normCat(raw) {
      const c = String(raw || '').split('\n')[0].trim().replace(/\s+/g, ' ')
        .replace(/NLP\s*基礎/i, 'NLP基礎')
        .replace(/生成式\s*AI/i, '生成式 AI')
        .replace(/AI\s*代理人/i, 'AI 代理人');
      // 完全相符
      for (const d of CAT_DEFS) if (c === d.cat) return d.cat;

      const cl = c.toLowerCase();

      // ── NLP（優先，避免被「語言」誤入深度學習）────────────────────────
      if (/nlp|自然語言|句法|詞彙|語義|語用|依存|剖析|語音技術|文本評估|詞義消歧|語言特性|語言技術|搜尋/.test(cl))
        return 'NLP基礎';

      // ── 電腦視覺 ──────────────────────────────────────────────────────
      if (/視覺|影像|目標偵測|物件偵測|影像分割|醫學影像|車牌|圖像|文字辨識|ocr|工業感測器|工業資料/.test(cl))
        return '電腦視覺';

      // ── 神經網路 ──────────────────────────────────────────────────────
      if (/神經網路|神經/.test(cl)) return '神經網路';

      // ── 生成式 AI ─────────────────────────────────────────────────────
      if (/生成式|擴散模型|提示工程|rag|大型語言模型|llm|gpt|diffusion|生成ai|本土模型|本土優化/.test(cl))
        return '生成式 AI';

      // ── 多模態 AI（獨立分類，從深度學習中分離）──────────────────────
      if (/多模態|跨模態|視覺語言|image.*text|text.*image|\bclip\b|\bflamingo\b|\bblip\b|多感官/.test(cl))
        return '多模態 AI';

      // ── 深度學習 ──────────────────────────────────────────────────────
      if (/深度學習|transformer|注意力|表徵學習|具身智能/.test(cl))
        return '深度學習';

      // ── 鑑別式 AI（判別模型，從機器學習中分離）──────────────────────
      if (/鑑別式|判別式|判別模型|discriminative|\bsvm\b|支援向量機|支持向量機|邏輯回歸|logistic.*回歸|感知機|perceptron|線性分類|線性判別/.test(cl))
        return '鑑別式 AI';

      // ── 機器學習 ──────────────────────────────────────────────────────
      if (/機器學習|傳統\s*ml|集成學習|演算法|特徵工程|模型訓練|模型微調|訓練模式|強化學習|不均衡|模型優化|模型壓縮|模型量化|模型架構|模型評估|模型監控|模型效能|模型決策|xai|可解釋|自動特徵|推論優化|lmm推論/.test(cl))
        return '機器學習';

      // ── AI 代理人 ─────────────────────────────────────────────────────
      if (/代理人|任務編排|智慧製造|agent/.test(cl)) return 'AI 代理人';

      // ── AI 治理 ───────────────────────────────────────────────────────
      if (/治理|倫理|法律|法規|合規|透明|問責|公平|偏見|隱私|資安|資訊安全|風險管理|稽核|監管|沙盒|演算法偏見|內容治理|組織治理/.test(cl))
        return 'AI 治理';

      // ── 資料科學 ──────────────────────────────────────────────────────
      if (/資料|數據|數學|統計|特徵工程|資料科學|前處理|預處理|資料工程|大數據|資料集|補值|採樣|資料品質|結構化資料|時序|異常偵測|幾何運算|圖形資料/.test(cl))
        return '資料科學';

      // ── AI 應用（其餘）───────────────────────────────────────────────
      return 'AI 應用';
    }

    _buildTermPools() {
      this._topics.forEach(t => {
        let cat = this._normCat(t.category);
        // 補充：若分類是機器學習/深度學習，再以術語名稱細分至鑑別式/多模態 AI
        if (cat === '機器學習' || cat === '深度學習' || cat === 'AI 應用') {
          cat = this._normCatByTitle(t.title, t.eng_name) || cat;
        }
        (this._byCat[cat] ??= []).push({
          id:       String(t.id || ('r'+Math.random())),
          title:    t.title    || '',
          eng:      t.eng_name || '',
          cat,
          def:      t.def      || '',
          key_goal: !!t.key_goal,
        });
      });
    }

    _normCatByTitle(title, eng) {
      const s = ((title || '') + ' ' + (eng || '')).toLowerCase();
      if (/多模態|multimodal|跨模態|cross[\s-]modal|視覺語言|vision.*language|language.*vision|\bclip\b|\bblip\b/.test(s))
        return '多模態 AI';
      if (/鑑別式|判別式|discriminative|支援向量|支持向量|\bsvm\b|邏輯回歸|logistic.*regress|logistic.*分類|感知機|perceptron|樸素貝葉斯|naive\s*bayes|k[\s-]近鄰|knn|線性判別|線性分類|二元分類|多元分類|分類器|classifier/.test(s))
        return '鑑別式 AI';
      return null;
    }

    // ── 學習導向：術語依學習範式分類 ─────────────────────────────────────────────

    _normLearnCat(t) {
      const title = (t.title || '').toLowerCase();
      const eng   = (t.eng_name || t.eng || '').toLowerCase();
      const cat   = (t.category || '').toLowerCase();
      const def   = (t.def || '').toLowerCase();
      const s = `${title} ${eng} ${cat} ${def}`;

      // ── 1. 強化學習（最具體，優先判斷）
      if (/強化學習|reinforcement.learn|q.learn|policy.gradient|深度強化|\bppo\b|\bdqn\b|\bmdp\b|馬可夫決策|bellman|actor.critic|temporal.differ|蒙特卡羅.*強化|multi.armed.bandit|sarsa\b/.test(s))
        return '強化學習';

      // ── 2. 生成式（含自監督、對比學習）
      if (/生成.*對抗|\bgan\b|生成對抗|variational.*auto|\bvae\b|擴散模型|diffusion.model|\bddpm\b|flow.based|normalizing.flow|生成模型|generative.model|stable.diffusion|denoising.diffus|自監督|self.supervis|對比學習|contrastive.learn|masked.language|\bbert\b.*pretrain|\bgpt\b.*pretrain|預訓練.*語言/.test(s))
        return '生成式';

      // ── 3. 非監督式
      if (/非監督|unsupervis|聚類|clustering|\bk.means\b|dbscan|hierarchical.cluster|降維|dimension.*reduc|\bpca\b|主成分分析|自編碼器(?!.*變分)|autoencoder(?!.*variational)|\bt.sne\b|\bumap\b|異常偵測|anomaly.detect|孤立森林|isolation.forest/.test(s))
        return '非監督式';

      // ── 4. 深度學習（神經網路架構、訓練技術）
      if (/神經網路|neural.network|deep.learn|\bcnn\b|卷積神經|\brnn\b|循環神經|\blstm\b|\bgru\b|\btransformer\b|注意力機制|attention.mechanism|embedding.*layer|批次正規化|batch.norm|dropout層|激活函數|activation.func|反向傳播|backpropag|殘差網路|resnet|\bvgg\b|遷移.*深度/.test(s))
        return '深度學習';

      // ── 5a. 鑑別式（判別模型，比監督式更具體）
      if (/鑑別式|判別式|discriminative|\bsvm\b|支援向量機|感知機(?!.*多層)|邏輯回歸|logistic.regress|線性判別|linear.discriminant|sigmoid.*分類|二元.*分類器(?!.*深度)/.test(s))
        return '鑑別式';

      // ── 5b. 監督式（含傳統分類/回歸算法）
      if (/監督.{0,4}學習|supervis.{0,10}learn|分類算法|回歸算法|決策樹|decision.tree|隨機森林|random.forest|梯度下降|gradient.descent|過擬合|overfitt|正規化.*模型|regulariz|交叉驗證|cross.valid|樸素貝葉斯|naive.bayes|\bknn\b|k.近鄰|gradient.boost|xgboost|adaboost|集成學習|ensemble|線性回歸|linear.regress/.test(s))
        return '監督式';

      // ── 6. 資料基礎（資料處理、特徵工程、評估指標）
      if (/資料前處理|data.preprocess|特徵工程|feature.engineer|資料清洗|data.clean|評估指標|evaluation.metric|混淆矩陣|confusion.matrix|準確率|accuracy\b|精確率|precision.*recall|\bf1.score|\broc\b|\bauc\b|資料集.*分割|train.*test.*split|資料不平衡|class.imbalance|過採樣|undersampl|標準化.*資料|data.normaliz|缺失值|missing.value|資料科學|data.scien/.test(s))
        return '資料基礎';

      // ── 7. 中級進階（治理、部署、MLOps、多智能體）
      if (/ai.治理|ai.govern|偏見.*ai|bias.*ai|可解釋.*ai|explainab|模型.*公平|fairness.*model|mlops|模型部署|model.deploy|持續學習|continual.learn|遷移學習|transfer.learn|元學習|meta.learn|多智能體|multi.agent|聯邦學習|federated|量化.*模型|model.quantiz|剪枝.*模型|model.prun|知識蒸餾|knowledge.distill|ai.*倫理|ethics.*ai|負責任.*ai/.test(s))
        return '中級進階';

      // ── 8. AI 入門（No-code/Low-code、應用、概念）
      if (/no.?code|low.?code|ai.{0,4}入門|人工智.{1,3}基礎|ai.{0,4}概念|ai.{0,4}歷史|圖靈測試|弱.?ai|強.?ai|\bagi\b|通用人工|ai.{0,4}應用|ai.{0,4}工具|虛擬助理|聊天機器人|語音助理|智慧音箱|推薦系統|影像辨識.*應用|自動駕駛|機器人.*應用|大數據.*應用|智慧製造|ai.{0,4}助手/.test(s))
        return 'AI 入門';

      // ── 分類回退：依原始 category 欄位快速映射（確保高覆蓋率）
      if (/資料科學/.test(cat))             return '資料基礎';
      if (/神經網路|電腦視覺|nlp基礎/.test(cat)) return '深度學習';
      if (/深度學習/.test(cat))             return '深度學習';
      if (/生成式|多模態/.test(cat))         return '生成式';
      if (/機器學習|鑑別式/.test(cat))       return '監督式';
      if (/ai.代理人|ai.治理/.test(cat))     return '中級進階';
      if (/ai.應用/.test(cat))              return 'AI 入門';

      return null;
    }

    _buildLearnPools() {
      this._byLearnCat = {};
      this._topics.forEach(t => {
        const lcat = this._normLearnCat(t);
        if (!lcat) return;
        (this._byLearnCat[lcat] ??= []).push({
          id:       String(t.id || ('l' + Math.random())),
          title:    t.title    || '',
          eng:      t.eng_name || '',
          cat:      lcat,
          def:      t.def      || '',
          key_goal: !!t.key_goal,
        });
      });
    }

    // 學習導向全覽：8 顆學習範式星體
    showLearnOverview() {
      this._filterCat = '__learn__';
      this._rotG.selectAll('.ca-detail').transition().duration(280).attr('opacity', 0)
        .on('end', function() { d3.select(this).remove(); });
      // 顯示學習星體，隱藏功能星體
      this._rotG.selectAll('.ca-cluster').transition().duration(280).attr('opacity', 0);
      setTimeout(() => {
        if (this._filterCat !== '__learn__') return;
        this._rotG.selectAll('.ca-cluster').style('display', 'none').attr('opacity', 1);
        this._drawLearnClusters();
      }, 300);
    }

    _drawLearnClusters() {
      // 清除舊的學習星體
      this._rotG.selectAll('.ca-learn-cluster').remove();
      const self = this;
      const planetR = Math.max(18, this._md * 0.034);
      const n = LEARN_DEFS.length;
      // 8 顆行星均勻分佈在軌道上
      LEARN_DEFS.forEach((def, li) => {
        const angle = (li / n) * 360 - 90;
        const [gcx, gcy] = this._pt(angle, this._orbitR);
        const items = this._byLearnCat[def.cat] || [];
        const cg = this._rotG.append('g')
          .attr('class', `ca-learn-cluster ca-learn-cluster-${li}`);
        const pg = cg.append('g').attr('class', 'ca-learn-planet')
          .attr('transform', `translate(${gcx},${gcy})`).style('cursor', 'pointer');
        // 外層光暈
        pg.append('circle').attr('r', planetR * 2.4)
          .attr('fill', def.color + '09').attr('pointer-events', 'none');
        pg.append('circle').attr('r', planetR * 1.6)
          .attr('fill', def.color + '18').attr('pointer-events', 'none');
        // 行星本體 + SMIL 閃爍（各自不同週期）
        const LEARN_DUR = [9, 12, 8, 14, 7, 11, 10, 13];
        const LEARN_LOW = [0.50,0.38,0.55,0.35,0.60,0.42,0.48,0.40];
        const dur = LEARN_DUR[li] ?? 10;
        const low = LEARN_LOW[li] ?? 0.45;
        const body = pg.append('circle').attr('class', 'ca-learn-body').attr('r', planetR)
          .attr('fill', def.color).attr('fill-opacity', 0.88)
          .attr('stroke', '#ffffff').attr('stroke-opacity', 0.18).attr('stroke-width', 0.8)
          .style('filter', 'url(#star-glow)');
        body.append('animate').attr('attributeName','opacity')
          .attr('values', `0.88;${low};0.95;${low*0.8};0.88`)
          .attr('dur', `${dur}s`).attr('begin', `${(li * 1.5).toFixed(1)}s`)
          .attr('repeatCount', 'indefinite');
        // 3D 高光
        pg.append('circle').attr('r', planetR * 0.30)
          .attr('cx', -planetR * 0.22).attr('cy', -planetR * 0.26)
          .attr('fill', '#ffffff').attr('fill-opacity', 0.40)
          .attr('pointer-events', 'none');
        // 名稱標籤
        pg.append('text').attr('text-anchor', 'middle').attr('dy', planetR + 15)
          .attr('fill', def.color).attr('font-size', 10).attr('font-weight', 600)
          .attr('pointer-events', 'none').text(def.cat);
        pg.append('text').attr('text-anchor', 'middle').attr('dy', planetR + 27)
          .attr('fill', def.color + '80').attr('font-size', 8)
          .attr('pointer-events', 'none').text(`${items.length} 個術語`);
        // Hover / click
        pg.on('mouseenter', (ev) => {
            pg.select('.ca-learn-body').transition().duration(150).attr('r', planetR * 1.18);
            const tip = document.getElementById('atlas-tooltip');
            if (tip) {
              tip.innerHTML = `<strong style="color:${def.color}">${def.emoji} ${def.cat}</strong>
                <br><span style="color:#94a3b8;font-size:10px">點擊查看 ${items.length} 個術語</span>`;
              tip.style.display = 'block';
              tip.style.left = Math.min(ev.clientX + 14, window.innerWidth - 220) + 'px';
              tip.style.top  = Math.min(ev.clientY - 10, window.innerHeight - 80) + 'px';
            }
          })
          .on('mouseleave', () => {
            pg.select('.ca-learn-body').transition().duration(200).attr('r', planetR);
            self._hideTooltip();
          })
          .on('click', (ev) => {
            ev.stopPropagation();
            if (typeof self.onLearnCatClick === 'function') self.onLearnCatClick(def.cat);
          });
      });
    }

    filterLearnCat(cat) {
      this._filterCat = '__learn_detail__' + cat;
      // 隱藏學習星體
      this._rotG.selectAll('.ca-learn-cluster').transition().duration(280).attr('opacity', 0);
      // 清除功能詳細層
      this._rotG.selectAll('.ca-detail').transition().duration(280).attr('opacity', 0)
        .on('end', function() { d3.select(this).remove(); });
      setTimeout(() => {
        if (this._filterCat !== '__learn_detail__' + cat) return;
        this._rotG.selectAll('.ca-learn-cluster').style('display','none').attr('opacity',1);
        const def = LEARN_DEFS.find(d => d.cat === cat);
        const items = this._byLearnCat[cat] || [];
        this._buildDetailLayerLearn(cat, def?.color || '#7dd3fc', items);
      }, 320);
    }

    _buildDetailLayerLearn(cat, color, items) {
      const n = items.length;
      if (!n) return;
      // 黃金螺旋排列（無連線）—— 與全部AI 相同風格，乾淨不雜亂
      const mobile = this._md < 768;
      const spiralC = mobile ? 10 : 13;
      const minStartR = this._coreR * 3.4;
      const pos = this._goldenSpiralPos(n, spiralC, minStartR);
      const g = this._rotG.insert('g', '.ca-cluster')
        .attr('class', 'ca-detail').attr('opacity', 0);
      const nodes = items.map((t, i) => {
        const p = pos[i] || { r: minStartR, th: 0 };
        return { id:t.id, title:t.title, eng:t.eng, cat:t.cat, def:t.def,
          key_goal:t.key_goal, color,
          lx: p.r * Math.cos(p.th), ly: p.r * Math.sin(p.th),
          nr: t.key_goal ? 2.0 : 1.2 };
      });
      // 無連線，純星點
      const ns = g.selectAll('g.cd-node').data(nodes).join('g').attr('class','cd-node')
        .attr('transform',d=>`translate(${d.lx},${d.ly})`).style('cursor','pointer');
      ns.append('circle').attr('class','cd-halo')
        .attr('r',d=>d.nr*2.5).attr('fill',color+'20').attr('pointer-events','none');
      ns.append('circle')
        .attr('class',d=>d.key_goal?'cd-dot is-key':'cd-dot')
        .attr('r',d=>d.nr).attr('fill',color).attr('fill-opacity',0.92)
        .style('filter','url(#star-glow)')
        .style('--sd',(d,i)=>d.key_goal?`${(6+(i*0.41%4)).toFixed(2)}s`:`${(14+(i*0.83%8)).toFixed(2)}s`)
        .style('animation-delay',(_,i)=>`-${(i*1.73%14).toFixed(2)}s`);
      const self = this;
      ns.on('mouseenter',(ev,d)=>{
          ns.filter(dd=>dd.id===d.id).select('.cd-dot').transition().duration(120).attr('r',d.nr*2.5);
          self._tooltip(ev,d);
        })
        .on('mouseleave',(ev,d)=>{
          ns.filter(dd=>dd.id===d.id).select('.cd-dot').transition().duration(200).attr('r',d.nr);
          self._hideTooltip();
        })
        .on('click',(ev,d)=>{ev.stopPropagation();self._panel(d);})
        .on('touchstart',(ev,d)=>{
          ev.preventDefault();ev.stopPropagation();
          const t=ev.touches[0];
          self._tooltip({clientX:t.clientX,clientY:t.clientY},d);
          setTimeout(()=>self._hideTooltip(),2200);
          setTimeout(()=>self._panel(d),250);
        },{passive:false});
      g.transition().duration(450).attr('opacity',1);
    }

    // 從學習導向返回全覽：清除學習圖層，還原功能導向
    restoreFromLearn() {
      this._filterCat = null;
      this._rotG.selectAll('.ca-learn-cluster').remove();
      this._rotG.selectAll('.ca-detail').transition().duration(280).attr('opacity',0)
        .on('end', function() { d3.select(this).remove(); });
      this._rotG.selectAll('.ca-cluster').style('display','').attr('opacity',0)
        .transition().duration(350).attr('opacity',1);
    }

    _buildClusters() {
      this._clusters = [];
      const MAX_NODES = 15;   // 每個 cluster 最多顯示節點數，保持稀疏星座感
      const ORBIT_MINSEP = 35; // 固定大間距，讓節點之間有明顯留白
      CAT_DEFS.forEach((def, ci) => {
        const allItems = this._byCat[def.cat] || [];
        // 優先取 key_goal 節點，不足再補一般節點
        const key  = allItems.filter(t => t.key_goal);
        const rest = allItems.filter(t => !t.key_goal);
        const items = [...key, ...rest].slice(0, MAX_NODES);

        const angle  = (ci / CAT_DEFS.length) * 360 - 90;
        const [gcx, gcy] = this._pt(angle, this._orbitR);
        const n      = items.length;
        const pos    = this._concentricPos(n, ORBIT_MINSEP);
        const groupR = pos.length ? Math.max(...pos.map(p=>p.r)) + 18 : 18;

        const nodes = items.map((t, i) => {
          const p = pos[i] || { r:0, th:0 };
          return { id:t.id, title:t.title, eng:t.eng, cat:def.cat, def:t.def,
            key_goal:t.key_goal, color:def.color, r:t.key_goal ? 5.5 : 3.5,
            lx: gcx + p.r*Math.cos(p.th), ly: gcy + p.r*Math.sin(p.th) };
        });
        const links = this._mstLinks(nodes, ORBIT_MINSEP * 2.5);
        this._clusters.push({ def, centerAngle:angle, gcx, gcy, groupR, nodes, links });
      });
      this._allNodes = this._clusters.flatMap(c => c.nodes);
    }

    _mstLinks(nodes, maxShortDist = 55) {
      if (nodes.length <= 1) return [];
      const dist = (a,b) => Math.hypot(a.lx-b.lx, a.ly-b.ly);
      const inMST = new Set([0]);
      const links = [];
      while (inMST.size < nodes.length) {
        let best = { d:Infinity, i:-1, j:-1 };
        inMST.forEach(i => {
          nodes.forEach((_, j) => {
            if (inMST.has(j)) return;
            const d = dist(nodes[i], nodes[j]);
            if (d < best.d) best = { d, i, j };
          });
        });
        if (best.j === -1) break;
        inMST.add(best.j);
        links.push({ s:nodes[best.i], t:nodes[best.j] });
      }
      const used = new Set(links.map(l => `${l.s.id}-${l.t.id}`));
      nodes.forEach((a,i) => {
        nodes.map((b,j)=>({j,d:dist(a,b)})).filter(({j})=>j!==i)
          .sort((x,y)=>x.d-y.d).slice(0,3).forEach(({j})=>{
            const k1=`${a.id}-${nodes[j].id}`, k2=`${nodes[j].id}-${a.id}`;
            if (!used.has(k1)&&!used.has(k2)&&dist(a,nodes[j])<maxShortDist){
              used.add(k1); links.push({s:a,t:nodes[j]});
            }
          });
      });
      return links;
    }

    _concentricPos(n, minSep, minStartR = 0) {
      // 同心環排列：保證節點圓心間距 ≥ minSep px；minStartR 讓中心留白
      const out = [];
      if (n === 0) return out;
      let ring = 0;
      while (out.length < n) {
        const ringR = minStartR + ring * minSep;
        if (ringR === 0) {
          out.push({ r: 0, th: 0 });
        } else {
          const cap    = Math.max(1, Math.floor(2 * Math.PI * ringR / minSep));
          const offset = ring * 0.37;
          for (let i = 0; i < cap && out.length < n; i++) {
            out.push({ r: ringR, th: offset + 2 * Math.PI * i / cap });
          }
        }
        ring++;
      }
      return out;
    }

    _buildZodiacNodes() {
      const ptrs = Object.fromEntries(CAT_DEFS.map(d=>[d.cat,0]));
      this._zodiacData = ZODIAC_PATTERNS.map((pat, zi) => {
        const cat    = ZODIAC_CAT[zi];
        const catDef = CAT_DEFS.find(d=>d.cat===cat);
        const pool   = this._byCat[cat] || [];
        const mid    = zi*30+15;
        const [cx,cy]= this._pt(mid, this._zodR);
        const nodes  = pat.stars.map((s,si) => {
          if (!pool.length) return null;
          const t = pool[ptrs[cat]++ % pool.length];
          return { id:`z${zi}_${si}`, title:t.title, eng:t.eng, cat,
            def:t.def, color:catDef.color, r:t.key_goal?3.5:2.2,
            lx:cx+s[0], ly:cy+s[1] };
        }).filter(Boolean);
        return { pat, zi, mid, cx, cy, catDef, nodes };
      });
    }

    _buildMansionNodes() {
      const ptrs = Object.fromEntries(CAT_DEFS.map(d=>[d.cat,0]));
      this._mansionData = MANSIONS.map((m, idx) => {
        const grp      = m.g;
        const localIdx = idx - GROUP_ORDER[grp];
        if (localIdx < 0 || localIdx >= 7) return null;
        const angle    = GROUP_ANGLES[grp][localIdx];
        const color    = GROUP_COLOR[grp];
        const [cx,cy]  = this._pt(angle, this._sxR);
        const cat      = GROUP_CAT[grp][localIdx % GROUP_CAT[grp].length];
        const catDef   = CAT_DEFS.find(d=>d.cat===cat);
        const pool     = this._byCat[cat] || [];
        const nodes    = m.stars.map((s,si) => {
          if (!pool.length) return null;
          const t = pool[ptrs[cat]++ % pool.length];
          return { id:`m${idx}_${si}`, title:t.title, eng:t.eng, cat,
            def:t.def, color:catDef?catDef.color:color, r:t.key_goal?3.0:1.8,
            lx:cx+s[0], ly:cy+s[1] };
        }).filter(Boolean);
        return { m, idx, angle, cx, cy, color, nodes };
      }).filter(Boolean);
    }

    _buildSVG() {
      d3.select(this._el).select('svg.ca-svg').remove();
      this._svg = d3.select(this._el).append('svg').attr('class','ca-svg')
        .attr('width','100%').attr('height','100%')
        .style('position','absolute').style('top',0).style('left',0)
        .style('display','none');

      const defs = this._svg.append('defs');
      const sf = defs.append('filter').attr('id','star-glow')
        .attr('x','-150%').attr('y','-150%').attr('width','500%').attr('height','500%');
      sf.append('feGaussianBlur').attr('in','SourceGraphic').attr('stdDeviation',3.5).attr('result','b');
      const sm = sf.append('feMerge');
      sm.append('feMergeNode').attr('in','b');
      sm.append('feMergeNode').attr('in','SourceGraphic');

      const pf = defs.append('filter').attr('id','pulse-glow')
        .attr('x','-200%').attr('y','-200%').attr('width','600%').attr('height','600%');
      pf.append('feGaussianBlur').attr('in','SourceGraphic').attr('stdDeviation',5).attr('result','b');
      const pm = pf.append('feMerge');
      pm.append('feMergeNode').attr('in','b');
      pm.append('feMergeNode').attr('in','SourceGraphic');

      const cf = defs.append('filter').attr('id','core-glow')
        .attr('x','-150%').attr('y','-150%').attr('width','500%').attr('height','500%');
      const cfBlur = cf.append('feGaussianBlur').attr('in','SourceGraphic').attr('stdDeviation',12).attr('result','b');
      // 閃爍：動態改變光暈模糊半徑（慢速，14s）
      cfBlur.append('animate')
        .attr('attributeName','stdDeviation')
        .attr('values','10;16;10;20;12;18;10')
        .attr('dur','14s').attr('repeatCount','indefinite');
      const cm = cf.append('feMerge');
      cm.append('feMergeNode').attr('in','b');
      cm.append('feMergeNode').attr('in','SourceGraphic');

      // 核心漸層：中心高亮 → 中段金黃 → 邊緣半透明（漸層光暈感）
      const cg = defs.append('radialGradient').attr('id','core-grad')
        .attr('cx','36%').attr('cy','32%').attr('r','68%');
      cg.append('stop').attr('offset','0%').attr('stop-color','#fffde8').attr('stop-opacity', 1);
      cg.append('stop').attr('offset','25%').attr('stop-color','#fde68a').attr('stop-opacity', 1);
      cg.append('stop').attr('offset','60%').attr('stop-color','#f59e0b').attr('stop-opacity', 0.92);
      cg.append('stop').attr('offset','85%').attr('stop-color','#d97706').attr('stop-opacity', 0.75);
      cg.append('stop').attr('offset','100%').attr('stop-color','#78350f').attr('stop-opacity', 0.35);

      // ── 節點閃爍 CSS 動畫（依重要性分三層）────────────────────────────────
      defs.append('style').text(`
        /* key_goal 重要節點：激烈閃爍 + scale 脈衝（週期 6-12s） */
        .cd-dot.is-key {
          animation: star-flash-key var(--sd,8s) ease-in-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        @keyframes star-flash-key {
          0%,100% { opacity:1;    transform:scale(1);    }
          12%     { opacity:0.35; transform:scale(0.84); }
          30%     { opacity:1;    transform:scale(1.26); }
          48%     { opacity:0.5;  transform:scale(0.9);  }
          66%     { opacity:0.95; transform:scale(1.16); }
          84%     { opacity:0.6;  transform:scale(1);    }
        }
        /* 普通節點：慢速呼吸暗淡（週期 14-24s，緩緩呼吸） */
        .cd-dot {
          animation: star-pulse var(--sd,18s) ease-in-out infinite;
        }
        @keyframes star-pulse {
          0%,100% { opacity:0.85; }
          50%     { opacity:0.35; }
        }
      `);

      // 透明背景 rect — 讓 D3 zoom drag 在空白區域也能捕捉
      this._svg.append('rect')
        .attr('width','100%').attr('height','100%')
        .attr('fill','none').style('pointer-events','all');

      // Root (D3 pan+zoom) → rotG (auto-rotation)
      this._root = this._svg.append('g').attr('class','ca-root');
      this._rotG = this._root.append('g').attr('class','ca-rotg');

      // D3 zoom：以滑鼠游標位置為中心縮放，左鍵拖曳平移
      this._zoomBehavior = d3.zoom()
        .scaleExtent([0.12, 8])
        .on('zoom', ev => {
          this._root.attr('transform', ev.transform.toString());
        });
      this._svg.call(this._zoomBehavior);
      // 初始：節點座標原點對齊畫面中心
      this._svg.call(this._zoomBehavior.transform,
        d3.zoomIdentity.translate(this._cx, this._cy));
      this._svg.on('dblclick.zoom', null);

      // Click on background closes panel
      this._svg.on('click', () =>
        document.getElementById('atlas-panel')?.classList.remove('show'));
    }

    _drawAll() {
      this._drawOrbitalRings();
      this._drawCrossLinks();
      this._drawMansions();
      this._drawZodiacPatterns();
      this._drawClusters();
      this._drawCore();
    }

    _drawOrbitalRings() {
      const g = this._rotG.append('g').attr('class','ca-orbit');
      g.append('circle').attr('r',this._orbitR).attr('fill','none')
        .attr('stroke','rgba(125,211,252,0.14)').attr('stroke-width',1).attr('stroke-dasharray','6,9');
      [this._zodR-16, this._zodR+16].forEach(r =>
        g.append('circle').attr('r',r).attr('fill','none')
          .attr('stroke','rgba(125,211,252,0.10)').attr('stroke-width',0.7));
      for (let i=0;i<12;i++) {
        const a = i*30;
        const [x1,y1]=this._pt(a,this._zodR-16), [x2,y2]=this._pt(a,this._zodR+16);
        g.append('line').attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2)
          .attr('stroke','rgba(125,211,252,0.07)').attr('stroke-width',0.6);
      }
      g.append('circle').attr('r',this._sxR).attr('fill','none')
        .attr('stroke','rgba(125,211,252,0.07)').attr('stroke-width',0.8).attr('stroke-dasharray','2,10');
      g.append('circle').attr('r',this._sxR+34).attr('fill','none')
        .attr('stroke','rgba(125,211,252,0.04)').attr('stroke-width',1).attr('stroke-dasharray','1,14');
    }

    _drawCrossLinks() {
      const g = this._rotG.append('g').attr('class','ca-crosslinks');
      const byName = Object.fromEntries(this._clusters.map(c=>[c.def.cat,c]));
      CROSS_LINKS.forEach(({a,b}) => {
        const ca = byName[a], cb = byName[b];
        if (!ca||!cb||!ca.nodes.length||!cb.nodes.length) return;
        const dx=cb.gcx-ca.gcx, dy=cb.gcy-ca.gcy, dir=Math.atan2(dy,dx);
        const nodeA = [...ca.nodes].sort((p,q)=>
          Math.abs(this._adiff(Math.atan2(p.ly-ca.gcy,p.lx-ca.gcx),dir)) -
          Math.abs(this._adiff(Math.atan2(q.ly-ca.gcy,q.lx-ca.gcx),dir)))[0];
        const nodeB = cb.nodes.reduce((b,n)=>
          Math.hypot(n.lx-nodeA.lx,n.ly-nodeA.ly)<Math.hypot(b.lx-nodeA.lx,b.ly-nodeA.ly)?n:b, cb.nodes[0]);
        g.append('line')
          .attr('x1',nodeA.lx).attr('y1',nodeA.ly).attr('x2',nodeB.lx).attr('y2',nodeB.ly)
          .attr('stroke',ca.def.color).attr('stroke-opacity',0.10)
          .attr('stroke-width',0.5).attr('stroke-dasharray','4,7');
      });
    }

    _adiff(a,b) {
      let d=a-b;
      while(d>Math.PI)d-=2*Math.PI;
      while(d<-Math.PI)d+=2*Math.PI;
      return d;
    }

    // ── 二十八宿：AI術語節點填入星點位置 ────────────────────────────────────

    _drawMansions() {
      const g = this._rotG.append('g').attr('class','ca-mansions');
      const self = this;
      this._mansionData.forEach(({ m, idx, cx, cy, color, nodes }) => {
        const mg = g.append('g').attr('transform',`translate(${cx},${cy})`);
        m.lines.forEach(([si,ti]) => {
          const s=m.stars[si], t=m.stars[ti];
          mg.append('line').attr('x1',s[0]).attr('y1',s[1]).attr('x2',t[0]).attr('y2',t[1])
            .attr('stroke',color).attr('stroke-opacity',0.38).attr('stroke-width',0.8);
        });
        const ns = mg.selectAll('g.mn').data(nodes).join('g').attr('class','mn')
          .attr('transform',(_,i)=>`translate(${m.stars[i][0]},${m.stars[i][1]})`)
          .style('cursor','pointer');
        // 雙層節點：外層光暈 + 內層閃爍（與 cd-node 相同結構，縮小半徑）
        const MR_KEY = 2.0, MR_REG = 1.3;
        ns.append('circle').attr('class','cd-halo').attr('pointer-events','none')
          .attr('r', d => (d.r > 2.3 ? MR_KEY : MR_REG) * 2.5)
          .attr('fill', d => d.color + '22');
        ns.append('circle').attr('data-nid',d=>d.id)
          .attr('class', d => d.r > 2.3 ? 'cd-dot is-key' : 'cd-dot')
          .attr('r', d => d.r > 2.3 ? MR_KEY : MR_REG)
          .attr('fill',d=>d.color).attr('fill-opacity',0.92)
          .style('filter','url(#star-glow)')
          .style('--sd', (d, i) => {
            const gi = idx * 10 + i;
            return d.r > 2.3
              ? `${(4.5 + (gi * 0.53 % 3.5)).toFixed(2)}s`
              : `${(9.0 + (gi * 0.79 % 7.0)).toFixed(2)}s`;
          })
          .style('animation-delay', (_, i) => `-${((idx * 10 + i) * 1.17 % 12).toFixed(2)}s`);
        ns.on('mouseenter',(ev,d)=>{
            const nr = d.r > 2.3 ? MR_KEY : MR_REG;
            d3.select(ev.currentTarget).select('.cd-dot')
              .transition().duration(100).attr('r',nr*2.5);
            self._tooltip(ev,d);
          })
          .on('mouseleave',(ev,d)=>{
            const nr = d.r > 2.3 ? MR_KEY : MR_REG;
            d3.select(ev.currentTarget).select('.cd-dot')
              .transition().duration(200).attr('r',nr);
            self._hideTooltip();
          })
          .on('click',(ev,d)=>{
            ev.stopPropagation();
            self._panel(d);
            self._glowNode(d);
          });
      });
    }

    // ── 十二星座：AI術語節點填入，無文字標籤 ────────────────────────────────

    _drawZodiacPatterns() {
      const g = this._rotG.append('g').attr('class','ca-zodiac');
      const self = this;
      // zi = zodiac index（300 偏移避免與 mansion delay 重複）
      this._zodiacData.forEach(({ pat, zi, cx, cy, catDef, nodes }) => {
        const pg = g.append('g').attr('transform',`translate(${cx},${cy})`);
        pat.lines.forEach(([si,ti]) => {
          const s=pat.stars[si], t=pat.stars[ti];
          pg.append('line').attr('x1',s[0]).attr('y1',s[1]).attr('x2',t[0]).attr('y2',t[1])
            .attr('stroke',catDef.color).attr('stroke-opacity',0.38).attr('stroke-width',0.9);
        });
        const ns = pg.selectAll('g.zn').data(nodes).join('g').attr('class','zn')
          .attr('transform',(_,i)=>`translate(${pat.stars[i][0]},${pat.stars[i][1]})`)
          .style('cursor','pointer');
        // 雙層節點：外層光暈 + 內層閃爍（縮小半徑）
        const ZR_KEY = 2.3, ZR_REG = 1.5;
        ns.append('circle').attr('class','cd-halo').attr('pointer-events','none')
          .attr('r', d => (d.r > 3.0 ? ZR_KEY : ZR_REG) * 2.5)
          .attr('fill', d => d.color + '22');
        ns.append('circle').attr('data-nid',d=>d.id)
          .attr('class', d => d.r > 3.0 ? 'cd-dot is-key' : 'cd-dot')
          .attr('r', d => d.r > 3.0 ? ZR_KEY : ZR_REG)
          .attr('fill',d=>d.color).attr('fill-opacity',0.92)
          .style('filter','url(#star-glow)')
          .style('--sd', (d, i) => {
            const gi = 300 + zi * 10 + i;
            return d.r > 3.0
              ? `${(4.0 + (gi * 0.61 % 4.0)).toFixed(2)}s`
              : `${(8.5 + (gi * 0.83 % 6.5)).toFixed(2)}s`;
          })
          .style('animation-delay', (_, i) => `-${((300 + zi * 10 + i) * 1.23 % 14).toFixed(2)}s`);
        ns.on('mouseenter',(ev,d)=>{
            const nr = d.r > 3.0 ? ZR_KEY : ZR_REG;
            d3.select(ev.currentTarget).select('.cd-dot')
              .transition().duration(100).attr('r',nr*2.5);
            self._tooltip(ev,d);
          })
          .on('mouseleave',(ev,d)=>{
            const nr = d.r > 3.0 ? ZR_KEY : ZR_REG;
            d3.select(ev.currentTarget).select('.cd-dot')
              .transition().duration(200).attr('r',nr);
            self._hideTooltip();
          })
          .on('click',(ev,d)=>{
            ev.stopPropagation();
            self._panel(d);
            self._glowNode(d);
          });
      });
    }

    // ── 全覽圖：10 顆行星（每個分類一顆，點擊進入該分類）────────────────────

    _drawClusters() {
      const self = this;
      this._clusterEls = [];
      const planetR = Math.max(20, this._md * 0.038);

      this._clusters.forEach((cluster, ci) => {
        const cg = this._rotG.append('g').attr('class', `ca-cluster ca-cluster-${ci}`);

        const pg = cg.append('g').attr('class', 'ca-planet')
          .attr('transform', `translate(${cluster.gcx},${cluster.gcy})`)
          .style('cursor', 'pointer');

        // 外層光暈（純色+透明度）
        pg.append('circle').attr('r', planetR * 2.6)
          .attr('fill', cluster.def.color + '09').attr('pointer-events', 'none');
        pg.append('circle').attr('r', planetR * 1.7)
          .attr('fill', cluster.def.color + '18').attr('pointer-events', 'none');
        // 行星本體（純色實心）— 12 顆各有獨立 SMIL 閃爍週期
        // 12 個獨特週期（秒），讓每顆行星的呼吸節奏完全不同
        const PLANET_DUR  = [8, 11, 7, 13, 9, 15, 6.5, 12, 10, 14, 8.5, 16];
        const PLANET_LOW  = [0.50,0.40,0.60,0.35,0.55,0.30,0.65,0.45,0.58,0.38,0.52,0.42];
        const dur = PLANET_DUR[ci] ?? 9;
        const low = PLANET_LOW[ci] ?? 0.45;
        const planetBody = pg.append('circle').attr('class', 'ca-planet-body').attr('r', planetR)
          .attr('fill', cluster.def.color).attr('fill-opacity', 0.88)
          .attr('stroke', '#ffffff').attr('stroke-opacity', 0.2).attr('stroke-width', 0.8)
          .style('filter', 'url(#star-glow)');
        // 各自獨立的閃爍週期（SMIL）
        planetBody.append('animate')
          .attr('attributeName', 'opacity')
          .attr('values', `0.88;${low};0.95;${low*0.8};0.88`)
          .attr('dur', `${dur}s`)
          .attr('begin', `${(ci * 1.3).toFixed(1)}s`)
          .attr('repeatCount', 'indefinite');
        // 3D 高光（左上方白色小圓，模擬球面光澤）
        pg.append('circle').attr('r', planetR * 0.32)
          .attr('cx', -planetR * 0.22).attr('cy', -planetR * 0.26)
          .attr('fill', '#ffffff').attr('fill-opacity', 0.42)
          .attr('pointer-events', 'none');
        // 類別名稱（行星下方）
        pg.append('text').attr('text-anchor', 'middle').attr('dy', planetR + 15)
          .attr('fill', cluster.def.color).attr('font-size', 10).attr('font-weight', 600)
          .attr('pointer-events', 'none').text(cluster.def.cat);
        // 術語數量（小字）
        pg.append('text').attr('text-anchor', 'middle').attr('dy', planetR + 27)
          .attr('fill', cluster.def.color + '80').attr('font-size', 8)
          .attr('pointer-events', 'none')
          .text(`${(self._byCat[cluster.def.cat] || []).length} 個術語`);

        pg.on('mouseenter', (ev) => {
            pg.select('.ca-planet-body').transition().duration(150).attr('r', planetR * 1.18);
            const tip = document.getElementById('atlas-tooltip');
            if (tip) {
              tip.innerHTML = `<strong style="color:${cluster.def.color}">${cluster.def.cat}</strong>
                <br><span style="color:#94a3b8;font-size:10px">點擊查看所有術語</span>`;
              tip.style.display = 'block';
              tip.style.left = Math.min(ev.clientX + 14, window.innerWidth - 220) + 'px';
              tip.style.top  = Math.min(ev.clientY - 10, window.innerHeight - 80) + 'px';
            }
          })
          .on('mouseleave', () => {
            pg.select('.ca-planet-body').transition().duration(200).attr('r', planetR);
            self._hideTooltip();
          })
          .on('click', (ev) => {
            ev.stopPropagation();
            if (typeof self.onCatClick === 'function') self.onCatClick(cluster.def.cat);
          });

        this._clusterEls.push({ cg, linesSel: null, nodeSel: null, cluster });
      });
    }

    // ── 點擊：神經傳電脈衝動畫 ───────────────────────────────────────────────

    _glowNode(node) {
      this._rotG.selectAll(`circle[data-nid="${node.id}"]`)
        .transition().duration(200).attr('r', node.r*5).style('filter','url(#pulse-glow)')
        .transition().duration(700).attr('r', node.r).style('filter','url(#star-glow)');
    }

    _neuralPulse(clickedNode, links, color) {
      this._glowNode(clickedNode);
      const connected = links.filter(l=>l.s.id===clickedNode.id||l.t.id===clickedNode.id);
      connected.slice(0,8).forEach((link, i) => {
        const other = link.s.id===clickedNode.id ? link.t : link.s;
        setTimeout(() => {
          // Travelling dot
          const dot = this._rotG.append('circle')
            .attr('cx', clickedNode.lx).attr('cy', clickedNode.ly)
            .attr('r', 4).attr('fill', color).attr('fill-opacity', 1)
            .attr('pointer-events','none')
            .style('filter','url(#pulse-glow)');
          dot.transition().duration(520).ease(d3.easeLinear)
            .attr('cx', other.lx).attr('cy', other.ly)
            .attr('fill-opacity', 0)
            .on('end', function() {
              d3.select(this).remove();
            });
          // Glow destination after pulse arrives
          setTimeout(() => this._glowNode(other), 480);
        }, i * 90);
      });
    }

    // ── 中心核心 ──────────────────────────────────────────────────────────────

    _drawCore() {
      // 熱流折射濾鏡（模擬水/空氣光線折射）
      const defs = this._svg.select('defs');
      const wf = defs.append('filter').attr('id','solar-warp')
        .attr('x','-80%').attr('y','-80%').attr('width','260%').attr('height','260%');
      wf.append('feTurbulence')
        .attr('type','fractalNoise').attr('baseFrequency','0.014')
        .attr('numOctaves',2).attr('seed',7).attr('result','noise');
      wf.append('feDisplacementMap')
        .attr('in','SourceGraphic').attr('in2','noise')
        .attr('scale',8).attr('xChannelSelector','R').attr('yChannelSelector','G');

      const r  = this._coreR * 0.72; // 縮小至原本 0.72x
      const g  = this._rotG.append('g').attr('class','ca-core').style('cursor','pointer');

      // 日冕光暈圈（由外而內，最外層套折射濾鏡）
      [
        { cr:r*5.0, sw:22, op:0.030, flt:'url(#solar-warp)', dur:7.0 },
        { cr:r*3.5, sw:12, op:0.060, flt:null,               dur:5.5 },
        { cr:r*2.4, sw:5,  op:0.12,  flt:null,               dur:4.0 },
        { cr:r*1.7, sw:2,  op:0.22,  flt:null,               dur:3.0 },
      ].forEach(({ cr, sw, op, flt, dur }) => {
        const ring = g.append('circle').attr('r', cr)
          .attr('fill','none').attr('stroke','#fde68a')
          .attr('stroke-width', sw).attr('stroke-opacity', op)
          .attr('pointer-events', 'none');
        if (flt) ring.attr('filter', flt);
        // SMIL 脈衝動畫
        ring.append('animate')
          .attr('attributeName','stroke-opacity')
          .attr('values',`${op*0.5};${Math.min(op*1.8,0.5)};${op*0.5}`)
          .attr('dur',`${dur}s`).attr('repeatCount','indefinite');
      });

      // 光芒射線 — 16 道（長短交替），虛線向外流動
      for (let i = 0; i < 16; i++) {
        const a    = this._d2r(i * 22.5);
        const main = i % 2 === 0;
        const r0   = r + 1.5;
        const r1   = r + (main ? r*3.2 : r*1.8);
        const ray  = g.append('line')
          .attr('x1', Math.cos(a)*r0).attr('y1', Math.sin(a)*r0)
          .attr('x2', Math.cos(a)*r1).attr('y2', Math.sin(a)*r1)
          .attr('stroke','#fde68a')
          .attr('stroke-width',  main ? 1.4 : 0.7)
          .attr('stroke-opacity', main ? 0.65 : 0.35)
          .attr('stroke-dasharray', main ? '4,3' : '2,4')
          .attr('pointer-events', 'none');
        ray.append('animate')
          .attr('attributeName','stroke-dashoffset')
          .attr('from','0').attr('to', main ? '-14' : '-12')
          .attr('dur', `${main ? 5 : 7}s`).attr('repeatCount','indefinite');
      }

      // 太陽本體（帶 SMIL 閃爍脈衝）
      const coreCircle = g.append('circle').attr('r', r)
        .attr('fill','url(#core-grad)').style('filter','url(#core-glow)');
      // 半徑脈衝：緩慢呼吸（16s）
      coreCircle.append('animate')
        .attr('attributeName','r')
        .attr('values',`${r};${r*1.06};${r*0.97};${r*1.09};${r*0.98};${r}`)
        .attr('dur','16s').attr('repeatCount','indefinite');
      // 透明度閃爍（10s，像恆星緩慢搏動）
      coreCircle.append('animate')
        .attr('attributeName','opacity')
        .attr('values','1;0.85;1;0.75;0.95;1;0.88;1')
        .attr('dur','10s').attr('repeatCount','indefinite');
      g.append('text').attr('text-anchor','middle').attr('dy','0.32em')
        .attr('fill','#1c1917').attr('font-size', r*0.6).attr('font-weight', 700)
        .attr('pointer-events','none').text('AI');

      // 中心術語：人工智慧（可點擊開啟面板）
      const aiTerm = {
        id:'core-ai', title:'人工智慧', eng:'Artificial Intelligence',
        cat:'AI 代理人', color:'#fbbf24', r,
        def:'模擬人類智能的計算系統，是機器學習、深度學習、電腦視覺、NLP、AI代理人等所有子領域的統稱。目標是讓機器能感知、推理、學習與行動。'
      };
      // 事件只綁在核心圓本體，不讓光芒射線攔截點擊
      coreCircle.style('cursor', 'pointer')
        .on('mouseenter', ev => {
          coreCircle.transition().duration(150).attr('r', r*1.3);
          this._tooltip(ev, aiTerm);
        })
        .on('mouseleave', () => {
          coreCircle.transition().duration(200).attr('r', r);
          this._hideTooltip();
        })
        .on('click', ev => {
          ev.stopPropagation();
          this._panel(aiTerm);
        });
    }

    // ── Tooltip & Panel ───────────────────────────────────────────────────────

    _tooltip(ev, d) {
      const tip = document.getElementById('atlas-tooltip');
      if (!tip) return;
      tip.innerHTML = `<strong style="color:${d.color}">${d.title}</strong>
        ${d.eng?`<br><span style="color:#94a3b8;font-size:10px">${d.eng}</span>`:''}
        <br><span style="color:#64748b;font-size:10px">${d.cat}</span>`;
      tip.style.display = 'block';
      tip.style.left = Math.min(ev.clientX+14, window.innerWidth-220)+'px';
      tip.style.top  = Math.min(ev.clientY-10, window.innerHeight-80)+'px';
    }

    _hideTooltip() {
      const t = document.getElementById('atlas-tooltip');
      if (t) t.style.display = 'none';
    }

    _panel(node) {
      const p = document.getElementById('atlas-panel');
      if (!p) return;
      // 存入 sessionStorage 供 chat.html 讀取定義
      try {
        sessionStorage.setItem('chatTermData', JSON.stringify({
          title: node.title, eng: node.eng || '', def: node.def || ''
        }));
      } catch(_) {}
      p.innerHTML = `
        <button class="panel-close"
          onclick="this.closest('#atlas-panel').classList.remove('show')">×</button>
        <span class="panel-color-dot" style="background:${node.color}"></span>
        <h3 class="panel-title">${node.title}</h3>
        ${node.eng?`<div class="panel-eng">${node.eng}</div>`:''}
        <p class="panel-def">${node.def||'暫無說明。'}</p>
        <div class="panel-cat" style="color:${node.color}">${node.cat}</div>
        <div class="panel-actions">
          <a class="panel-btn" href="chat.html?term=${encodeURIComponent(node.title)}" target="_blank">💬 問 AI</a>
          <a class="panel-btn" href="vocab.html" target="_blank">📖 詞庫</a>
        </div>`;
      p.classList.add('show');
    }

    // ── 旋轉動畫 ──────────────────────────────────────────────────────────────

    _applyRot() {
      this._rotG.attr('transform', `rotate(${this._rot})`);
    }

    _startAnim() {
      const self = this;
      (function loop() {
        if (self._visible && self._autoRot) {
          self._rot = (self._rot + self._speed) % 360;
          self._applyRot();
        }
        self._raf = requestAnimationFrame(loop);
      })();
    }

    // ── 分類過濾（分類頁籤：展開該類所有節點鋪滿畫面，其他隱藏）──────────

    filterCategory(cat) {
      if (!this._clusterEls) return;
      this._filterCat = cat || null;
      this._clearDetailLayer();

      if (!cat) {
        // 恢復全部 cluster 顯示
        this._clusterEls.forEach(({ cg }) =>
          cg.attr('display', null).transition().duration(350).attr('opacity', 1));
        this._rotG.select('.ca-crosslinks').transition().duration(350).attr('opacity', 1);
        this._rotG.select('.ca-zodiac').transition().duration(350).attr('opacity', 0.6);
        this._rotG.select('.ca-mansions').transition().duration(350).attr('opacity', 0.6);
        return;
      }

      // 淡出並隱藏所有 cluster 及裝飾
      this._clusterEls.forEach(({ cg }) =>
        cg.transition().duration(280).attr('opacity', 0)
          .on('end', function() { d3.select(this).attr('display', 'none'); }));
      this._rotG.select('.ca-crosslinks').transition().duration(280).attr('opacity', 0);
      this._rotG.select('.ca-zodiac').transition().duration(280).attr('opacity', 0);
      this._rotG.select('.ca-mansions').transition().duration(280).attr('opacity', 0);

      // 延遲建立 detail layer（等淡出完成）
      setTimeout(() => { if (this._filterCat === cat) this._buildDetailLayer(cat); }, 320);
    }

    _clearDetailLayer() {
      this._rotG?.select('.ca-detail').remove();
    }

    _buildDetailLayer(cat) {
      const items = this._byCat[cat] || [];
      const def   = CAT_DEFS.find(d => d.cat === cat);
      if (!items.length || !def) return;

      const n      = items.length;
      const mobile = this._md < 768;
      const minSep = mobile
        ? (n > 100 ? 22 : n > 50 ? 28 : 35)
        : (n > 150 ? 30 : n > 100 ? 38 : n > 50 ? 45 : 55);

      const minStartR = this._coreR * 3.4; // 超過光芒射線末端
      const pos = this._concentricPos(n, minSep, minStartR);

      const g = this._rotG.insert('g', '.ca-cluster')
        .attr('class', 'ca-detail').attr('opacity', 0);

      const nodes = items.map((t, i) => {
        const p = pos[i] || { r: minStartR, th: 0 };
        return { id:t.id, title:t.title, eng:t.eng, cat:def.cat, def:t.def,
          key_goal:t.key_goal, color:def.color,
          lx: p.r * Math.cos(p.th), ly: p.r * Math.sin(p.th),
          nr: t.key_goal ? 2.5 : 1.5 };  // 縮小節點至類似紅箭頭的小星點
      });

      const links = this._mstLinks(nodes, minSep * 2.3);

      // 細虛線連線（星座風格）
      g.selectAll('line.cd-link').data(links).join('line').attr('class', 'cd-link')
        .attr('x1', d => d.s.lx).attr('y1', d => d.s.ly)
        .attr('x2', d => d.t.lx).attr('y2', d => d.t.ly)
        .attr('stroke', def.color).attr('stroke-opacity', 0.22)
        .attr('stroke-width', 0.7).attr('stroke-dasharray', '3,5');

      const ns = g.selectAll('g.cd-node').data(nodes).join('g').attr('class', 'cd-node')
        .attr('transform', d => `translate(${d.lx},${d.ly})`).style('cursor', 'pointer');

      // 外層半透明光暈（半徑縮小，避免圈與圈重疊交叉）
      ns.append('circle').attr('class', 'cd-halo')
        .attr('r', d => d.nr * 2.5).attr('fill', def.color + '20')
        .attr('pointer-events', 'none');
      // 內層實心點（小而亮）；key_goal 加 is-key class 觸發激烈閃爍
      ns.append('circle')
        .attr('class', d => d.key_goal ? 'cd-dot is-key' : 'cd-dot')
        .attr('r', d => d.nr).attr('fill', def.color).attr('fill-opacity', 0.92)
        .style('filter', 'url(#star-glow)')
        // --sd：key_goal 6-10s，普通 14-22s（依索引錯開）
        .style('--sd', (d, i) => d.key_goal
          ? `${(6.0 + (i * 0.41 % 4.0)).toFixed(2)}s`
          : `${(14.0 + (i * 0.83 % 8.0)).toFixed(2)}s`)
        .style('animation-delay', (_, i) => `-${(i * 1.73 % 14).toFixed(2)}s`);

      // 靜態文字標籤已移除，hover/touch 時顯示 tooltip
      const self = this;
      ns.on('mouseenter', (ev, d) => {
          ns.filter(dd => dd.id === d.id).select('.cd-dot')
            .transition().duration(120).attr('r', d.nr * 2.5);
          self._tooltip(ev, d);
        })
        .on('mouseleave', (ev, d) => {
          ns.filter(dd => dd.id === d.id).select('.cd-dot')
            .transition().duration(200).attr('r', d.nr);
          self._hideTooltip();
        })
        .on('click', (ev, d) => { ev.stopPropagation(); self._panel(d); })
        .on('touchstart', (ev, d) => {
          ev.preventDefault(); ev.stopPropagation();
          const t = ev.touches[0];
          self._tooltip({ clientX: t.clientX, clientY: t.clientY }, d);
          setTimeout(() => self._hideTooltip(), 2200);
          setTimeout(() => self._panel(d), 250);
        }, { passive: false });

      g.transition().duration(450).attr('opacity', 1);
    }

    // ── 搜尋 ──────────────────────────────────────────────────────────────────

    search(query) {
      if (!this._clusterEls) return;
      // 在 detail 層搜尋（行星模式下 nodeSel/linesSel 均為 null，直接在 detail layer 操作）
      const detailLayer = this._rotG?.select('.ca-detail');
      if (!query) {
        detailLayer?.selectAll('.cd-dot').attr('opacity', 1);
        detailLayer?.selectAll('.cd-link').attr('stroke-opacity', 0.25);
        this._clusterEls.forEach(({ nodeSel, linesSel }) => {
          if (nodeSel) nodeSel.select('circle:nth-child(2)').attr('opacity', 1);
          if (linesSel) linesSel.attr('stroke-opacity', 0.32);
        });
        return;
      }
      const q = query.toLowerCase();
      const hitIds = new Set(
        this._allNodes.filter(n => n.title.toLowerCase().includes(q) || n.eng.toLowerCase().includes(q))
          .map(n => n.id)
      );
      // Detail layer 搜尋
      detailLayer?.selectAll('g.cd-node').each(function(d) {
        d3.select(this).select('.cd-dot').attr('opacity', hitIds.has(d.id) ? 1 : 0.05);
      });
      detailLayer?.selectAll('line.cd-link')
        .attr('stroke-opacity', l => hitIds.has(l.s.id) || hitIds.has(l.t.id) ? 0.7 : 0.02);
      this._clusterEls.forEach(({ nodeSel, linesSel }) => {
        if (nodeSel) nodeSel.select('circle:nth-child(2)').attr('opacity', d => hitIds.has(d.id) ? 1 : 0.07);
        if (linesSel) linesSel.attr('stroke-opacity', l => hitIds.has(l.s.id) || hitIds.has(l.t.id) ? 0.7 : 0.04);
      });
      if (hitIds.size) {
        const first = this._allNodes.find(n=>hitIds.has(n.id));
        if (first) {
          const cl = this._clusters.find(c=>c.nodes.includes(first));
          if (cl) { this._rot = -cl.centerAngle+5; this._applyRot(); }
        }
      }
    }

    // ── Public API ────────────────────────────────────────────────────────────

    show() {
      this._visible = true;
      this._svg.style('display','block');
      if (!this._raf) this._startAnim();
      // 初次顯示：0.65x 縮小讓全圖可見，中心對齊畫面中央
      if (!this._initZoomSet) {
        this._initZoomSet = true;
        requestAnimationFrame(() => {
          this._svg.call(this._zoomBehavior.transform,
            d3.zoomIdentity.translate(this._cx, this._cy).scale(0.65));
        });
      }
    }

    hide() {
      this._visible = false;
      this._svg.style('display','none');
      this._hideTooltip();
    }

    toggleRotation() {
      this._autoRot = !this._autoRot;
      return this._autoRot;
    }

    resetView() {
      this._rot = 0;
      this._applyRot();
      this._svg.transition().duration(600)
        .call(this._zoomBehavior.transform,
          d3.zoomIdentity.translate(this._cx, this._cy).scale(0.65));
    }

    // ── 全部 AI 模式：所有節點展開旋轉 ─────────────────────────────────────

    showAll() {
      if (!this._clusterEls) return;
      this._clearDetailLayer();
      this._filterCat = '__all__';

      // 隱藏 cluster 與裝飾
      this._clusterEls.forEach(({ cg }) =>
        cg.transition().duration(280).attr('opacity', 0)
          .on('end', function() { d3.select(this).attr('display', 'none'); }));
      this._rotG.select('.ca-crosslinks').transition().duration(280).attr('opacity', 0);
      this._rotG.select('.ca-zodiac').transition().duration(280).attr('opacity', 0);
      this._rotG.select('.ca-mansions').transition().duration(280).attr('opacity', 0);

      setTimeout(() => { if (this._filterCat === '__all__') this._buildAllLayer(); }, 320);
    }

    _buildAllLayer() {
      const colorMap = Object.fromEntries(CAT_DEFS.map(d => [d.cat, d.color]));
      // 所有節點，依分類 interleave 排列讓顏色散布均勻
      const buckets = CAT_DEFS.map(d => (this._byCat[d.cat] || []).map(t =>
        ({ ...t, color: d.color })));
      const allItems = [];
      const maxLen = Math.max(...buckets.map(b => b.length));
      for (let i = 0; i < maxLen; i++)
        buckets.forEach(b => { if (b[i]) allItems.push(b[i]); });

      const n = allItems.length;
      const mobile = this._md < 768;
      // 節點多時用小間距（使用者說「可以小一點」），整體仍會旋轉展開
      const minSep = mobile
        ? (n > 400 ? 14 : n > 200 ? 17 : 22)
        : (n > 600 ? 16 : n > 300 ? 20 : n > 150 ? 25 : 30);

      const minStartR = this._coreR * 3.4; // 超過光芒射線末端
      // 黃金螺旋（向日葵籽排列），spiralC 為縮放係數
      const spiralC = mobile ? 10 : 13;
      const pos = this._goldenSpiralPos(n, spiralC, minStartR);
      const g = this._rotG.insert('g', '.ca-cluster')
        .attr('class', 'ca-detail').attr('opacity', 0);

      const nodes = allItems.map((t, i) => {
        const p = pos[i] || { r: minStartR, th: 0 };
        return { id:t.id, title:t.title, eng:t.eng, cat:t.cat, def:t.def,
          key_goal:t.key_goal, color:t.color,
          lx: p.r * Math.cos(p.th), ly: p.r * Math.sin(p.th),
          nr: t.key_goal ? 1.8 : 1.0 };  // 更小的星點
      });

      // 全部AI 不畫連線，只顯示黃金螺旋星點
      const ns = g.selectAll('g.cd-node').data(nodes).join('g').attr('class', 'cd-node')
        .attr('transform', d => `translate(${d.lx},${d.ly})`).style('cursor', 'pointer');

      // 外層光暈（縮小，避免全部AI密集時圈圈重疊）
      ns.append('circle').attr('class', 'cd-halo')
        .attr('r', d => d.nr * 2.5).attr('fill', d => d.color + '18')
        .attr('pointer-events', 'none');
      // 內層實心點（全部AI不顯示標籤）
      ns.append('circle')
        .attr('class', d => d.key_goal ? 'cd-dot is-key' : 'cd-dot')
        .attr('r', d => d.nr).attr('fill', d => d.color).attr('fill-opacity', 0.95)
        .style('filter', 'url(#star-glow)')
        // 全部AI：12 個分類各有固定基準週期，同分類節點閃爍速率相近
        .style('--sd', (d, i) => {
          const CI_KEY = [7,8,9.5,8.5,11,6.5,10,9,12,8.8,7.5,10.5]; // 12 分類 key_goal 週期
          const CI_REG = [14,17,20,16,24,13,22,18,26,19,15,23];       // 12 分類普通週期
          const ci = CAT_DEFS.findIndex(c => c.cat === d.cat);
          const base = d.key_goal ? (CI_KEY[ci] ?? 8) : (CI_REG[ci] ?? 18);
          return `${(base + (i % 6) * 0.35).toFixed(2)}s`;
        })
        .style('animation-delay', (_, i) => `-${(i * 1.79 % 16).toFixed(2)}s`);

      const self = this;
      ns.on('mouseenter', (ev, d) => {
          ns.filter(dd => dd.id === d.id).select('.cd-dot')
            .transition().duration(120).attr('r', d.nr * 2.5);
          self._tooltip(ev, d);
        })
        .on('mouseleave', (ev, d) => {
          ns.filter(dd => dd.id === d.id).select('.cd-dot')
            .transition().duration(200).attr('r', d.nr);
          self._hideTooltip();
        })
        .on('click', (ev, d) => { ev.stopPropagation(); self._panel(d); })
        .on('touchstart', (ev, d) => {
          ev.preventDefault(); ev.stopPropagation();
          const t = ev.touches[0];
          self._tooltip({ clientX: t.clientX, clientY: t.clientY }, d);
          setTimeout(() => self._hideTooltip(), 2200);
          setTimeout(() => self._panel(d), 250);
        }, { passive: false });

      g.transition().duration(450).attr('opacity', 1);
    }

    // ── 黃金螺旋位置排列（向日葵籽 / 費波那契螺旋）────────────────────────────
    // c: 縮放係數（控制整體大小）；minStartR: 最內圈最小半徑（跳過中心）
    _goldenSpiralPos(n, c, minStartR = 0) {
      const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ≈ 137.508°
      const startIdx    = minStartR > 0 ? Math.ceil((minStartR / c) ** 2) : 0;
      return Array.from({ length: n }, (_, i) => ({
        r:  c * Math.sqrt(i + startIdx + 1),
        th: (i + startIdx) * goldenAngle
      }));
    }

    // 空間格子法：找距離 maxDist 以內的相鄰節點並建立連線（O(n)）
    _nearestLinks(nodes, maxDist) {
      const links = [];
      const used  = new Set();
      const cell  = maxDist;
      const grid  = {};
      nodes.forEach((a, i) => {
        const cx = Math.floor(a.lx / cell), cy = Math.floor(a.ly / cell);
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const key = `${cx+dx},${cy+dy}`;
            (grid[key] || []).forEach(j => {
              if (j >= i) return;
              const d = Math.hypot(a.lx - nodes[j].lx, a.ly - nodes[j].ly);
              const k = `${j}-${i}`;
              if (d <= maxDist && !used.has(k)) { used.add(k); links.push({ s:nodes[j], t:a }); }
            });
          }
        }
        (grid[`${cx},${cy}`] ??= []).push(i);
      });
      return links;
    }
  }

  global.ConstellationAtlas = ConstellationAtlas;
  global.StarMap = ConstellationAtlas;

})(window);
