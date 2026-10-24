// 主要内容在这里维护。未确认的信息请保留 null，不要填写示例人物或虚构日期。
window.SEMINAR_CONTENT = {
  founder: { name: "曹斌", avatar: "./assets/committee/bin-cao.jpg", homepage: "https://www.caobin.asia/" },
  // 报名链接确认后填写；推荐讲者、共建与资助通过邮件联系。
  registrationUrl: null,
  speakerEmail: "bincao@hkust-gz.edu.cn",
  collaborationEmail: "bincao@hkust-gz.edu.cn",
  wechat: { name: "SciMindBin", qrCode: "./assets/optimized/scimindbin.webp" },
  acknowledgements: [
    { id: "hkust", name: "香港科技大学", englishName: "The Hong Kong University of Science and Technology", logo: "./assets/optimized/institutions/hkust-classic.webp" },
    { id: "cuhk", name: "香港中文大学", englishName: "The Chinese University of Hong Kong", logo: "./assets/optimized/institutions/cuhk.svg" },
    { id: "tsinghua", name: "清华大学", englishName: "Tsinghua University", logo: "./assets/optimized/institutions/tsinghua.svg" },
    { id: "ustc", name: "中国科学技术大学", englishName: "University of Science and Technology of China", logo: "./assets/optimized/institutions/ustc.svg" },
    { id: "ntu", name: "南洋理工大学", englishName: "Nanyang Technological University, Singapore", logo: "./assets/optimized/institutions/ntu.webp" },
    { id: "ucl", name: "UCL · 伦敦大学学院", englishName: "University College London", logo: "./assets/institutions/ucl.svg" },
    { id: "unsw", name: "新南威尔士大学", englishName: "UNSW Sydney", logo: "./assets/optimized/institutions/unsw.webp" },
    { id: "sydney", name: "悉尼大学", englishName: "The University of Sydney", logo: "./assets/optimized/institutions/sydney.svg" }
  ],
  seminars: [
    {
      id: "001", category: "AI × COMPUTATIONAL MECHANICS", title: "智能计算力学",
      description: "首期圆满收官，100+ 位观众在线参与。清华大学王一铮分享 AI4PDEs 的方法与固体力学应用。",
      status: "已举办", topicNote: "第 1 期 · 中文报告", featured: false,
      attendance: "100+",
      recapTitle: "首期圆满收官 共话智能计算力学",
      recapIntro: "2026年10月24日，研透论坛第一期通过腾讯会议顺利举办。清华大学工程力学系博士生王一铮带来《智能计算力学》，由曹斌邀请并主持，100+ 位观众在线参与。",
      recapBody: "报告围绕物理驱动、数据驱动，以及物理与数据双驱动三条路线，梳理 AI4PDEs 的主要算法与理论，结合固体力学正反问题介绍具体应用。现场展示了深度余能法，讨论如何以余能原理构造损失函数，并展望计算力学大模型的研究方向。",
      recapThanks: "感谢王一铮的认真准备与分享，也感谢每一位参与、转发和支持首期活动的朋友。欢迎继续关注研透论坛，带着自己的研究问题来交流。",
      recapImage: "./assets/optimized/recaps/seminar-001-audience.webp",
      recapImageOriginal: "./assets/recaps/seminar-001-audience.png",
      recapImageAlt: "第一期智能计算力学报告现场，红圈标出腾讯会议底部的成员(99+)人数显示",
      recapImageCaption: "报告现场截图 · 红圈处为腾讯会议显示的“成员(99+)” · 点击查看大图",
      // 报告15:00开始；已确认的会议室开放时段为2026年10月24日14:30–17:30（UTC+8）。
      date: "2026年10月24日 15:00（北京时间）", format: "腾讯会议",
      // 人物资料由下方学术委员条目统一填充，避免中英文简介重复维护。
      speakerId: "yizheng-wang", hostId: "bin-cao",
      meetingUrl: "https://meeting.tencent.com/dm/SzTHWZEJWrQU",
      meetingNumber: "117-594-534",
      registrationUrl: null, completed: true,
      confirmationNote: "线上报告 · 北京时间 UTC+8",
      registrationNote: "2026年10月24日，会议室开放时间为14:30–17:30，报告15:00开始（北京时间 UTC+8）。报告语言为中文。",
      detail: "近几年来，深度学习无所不在，赋能于各个领域。尤其是人工智能与传统科学的结合（AI for Science，AI4Science）引发广泛关注。在 AI4Science 领域，利用人工智能算法求解 PDEs（AI4PDEs）已成为计算力学研究的焦点。AI4PDEs 的核心是将数据与方程相融合，并且几乎可以求解任何偏微分方程问题。由于其融合数据的优势，相较于传统算法，其计算效率通常提升数万倍。因此，本报告全面综述 AI4PDEs 的研究，总结现有 AI4PDEs 算法、理论，并讨论其在固体力学中的应用，包括正问题和反问题，展望未来研究方向，尤其是计算力学大模型。\n\n现有 AI4PDEs 算法包括物理信息神经网络（physics-informed neural networks，PINNs）、深度能量法（deep energy methods，DEM）、算子学习（operator learning），以及物理信息神经算子（physics-informed neural operators，PINO）。AI4PDEs 在科学计算中有许多应用，本报告聚焦于固体力学：正问题包括线弹性、弹塑性、超弹性以及断裂力学；反问题包括材料参数、本构、缺陷的识别，以及拓扑优化。\n\nAI4PDEs 代表了一种全新的科学模拟方法，通过利用大量数据在特定问题上提供近似解，然后根据具体的物理方程进行微调，避免像传统算法那样从头开始计算。因此，AI4PDEs 是未来计算力学大模型的雏形，能够大大加速传统数值算法。我们相信，利用人工智能助力科学计算不仅是计算领域的未来重要方向，同时也是计算力学的未来，即智能计算力学。",
      outcome: "了解智能计算力学最新的研究进展，加深对弹性力学、超弹性、断裂和塑性问题的理解，便于将相关方法用于自己的研究领域。",
      keywords: ["计算力学", "AI4PDEs", "AI4Science", "固体力学"],
      resourceUrl: "https://yizheng-wang.github.io/",
      takeaways: [
        { title: "物理驱动", text: "智能计算力学中的物理驱动方法。" },
        { title: "数据驱动", text: "智能计算力学中的数据驱动方法。" },
        { title: "物理与数据双驱动", text: "智能计算力学中的物理与数据融合。" }
      ]
    },
    {
      id: "002", category: "AI × LIFE SCIENCE", title: "从 AI for Biology 到虚拟细胞",
      description: "从生物学基础模型到虚拟细胞，探讨细胞状态表征、多组学整合、基因扰动预测与细胞动态建模的技术路线和局限。",
      status: "即将举行", topicNote: "第 2 期 · 中文报告", featured: true,
      speaker: "赵正阳", affiliation: "北京大学前沿交叉学科研究院", shortAffiliation: "北京大学",
      speakerTitle: "博士生", speakerResearch: ["AI for Biology", "基因组学", "生物信息学"],
      avatar: "./assets/optimized/speakers/zhengyang-zhao.webp",
      speakerBio: "赵正阳，北京大学前沿交叉学科研究院博士生，研究方向为人工智能与生物学交叉（AI for Biology），主要关注基因组学、生物信息学以及人工智能在生命科学中的应用。曾在北京大学、清华大学多个实验室从事研究助理工作。获中国科协青年科技人才培育工程博士生专项计划。",
      hostId: "yizheng-wang",
      date: "11月7日 10:00（北京时间）", format: "腾讯会议",
      meetingUrl: "https://meeting.tencent.com/dm/7rmSlRkoEaN2", meetingNumber: "150-171-149",
      registrationUrl: null, completed: false,
      registrationNote: "11月7日，报告10:00开始，会议时段为10:00–12:00（北京时间 UTC+8）。报告语言为中文，听众无特殊背景要求。",
      detail: "人工智能正在深刻改变生命科学的研究范式，推动生物学研究从传统的数据分析与规律发现，逐步走向复杂生命系统的预测、生成与模拟。从蛋白质结构预测与设计，到基因组学建模、单细胞多组学分析，AI for Biology 正在不同生物学尺度上展现出巨大的应用潜力。\n\n本报告将首先梳理 AI for Biology 的主要技术进展及研究范式，随后聚焦虚拟细胞领域，介绍细胞基础模型、多组学数据整合、基因扰动预测及细胞动态建模等核心研究方向，结合代表性工作探讨不同技术方法的建模思路、适用场景与局限性。",
      outcome: "对 AI for Biology 的主要研究方向和虚拟细胞的技术进展形成系统认识，理解不同建模范式的适用场景及技术局限。\n\n了解从细胞基础模型走向虚拟细胞所面临的核心科学问题与技术挑战，为未来相关研究的选题与方法探索提供参考。",
      audience: "无特殊背景要求",
      keywords: ["AI for Biology", "Virtual Cell", "生物学基础模型", "单细胞多组学"],
      resourceUrl: null,
      takeaways: [
        { title: "AI for Biology 的主要技术范式与发展趋势", text: "梳理人工智能在蛋白质、基因组学及单细胞生物学等领域的应用，重点介绍生物学基础模型、生成式模型等技术的发展，讨论不同生物学尺度下模型构建的共性与差异。" },
        { title: "虚拟细胞的核心任务与技术路线", text: "围绕细胞状态表征、多组学数据整合、基因扰动预测及动态轨迹建模等核心任务，介绍虚拟细胞的代表性研究工作，比较数据驱动、机制驱动及混合建模等方法的技术特点与局限。" },
        { title: "虚拟细胞的关键挑战与未来研究方向", text: "讨论现有细胞模型在泛化能力、因果推断、动态模拟和跨尺度建模等方面的不足，探讨高通量扰动实验、主动学习及机制约束建模等技术的发展潜力，以及构建可验证虚拟细胞的可能路径。" }
      ]
    },
    {
      id: "003", category: "AI × PHYSICAL SCIENCE", title: "发现物质世界的新可能",
      description: "物理约束怎么加，计算结果怎么验，方法怎样用于真实的科学问题。",
      status: "规划中", topicNote: "拟议方向", featured: false,
      speaker: null, affiliation: null, avatar: null, date: null, format: null,
      speakerBio: null, host: { name: null, affiliation: null, avatar: null, bio: null },
      registrationUrl: null, completed: false,
      detail: "拟关注人工智能如何帮助理解物质世界，讨论物理约束、材料发现与科学计算中的研究问题。该议题为规划方向，讲者及最终主题尚未确定。"
    }
  ],
  // 公开资料集中保存在 dist；原始 Word 文档仅保留在本地的学术委员会目录。
  committee: [
    {
      "id": "bin-cao",
      "name": "曹斌",
      "englishName": "Bin Cao",
      "affiliation": "华为诺亚方舟实验室（伦敦）",
      "shortAffiliation": "华为诺亚方舟实验室",
      "title": "研究科学家",
      "role": "发起人 / 学术委员",
      "avatar": "./assets/committee/bin-cao.jpg",
      "research": [
        "科学智能体",
        "AI for Materials"
      ],
      "shortBio": "研透论坛发起人，主要从事面向材料科学的智能体与机器学习研究，主导开发自学习科学智能体 Ganjiang（干将）。",
      "bio": "曹斌，华为诺亚方舟实验室（伦敦）研究科学家，与伦敦大学学院 Jun Wang 教授合作，研究面向材料科学的智能体与机器学习方法。主要方向包括科学智能体、晶体表征学习和贝叶斯优化，关注如何结合物理证据、科学工具与研究经验，推动材料分析与发现。\n\n以第一作者在 Natl. Sci. Rev.、Sci. Bull.、npj Comput. Mater. 等期刊及 ICLR、NeurIPS 等机器学习会议发表研究论文二十余篇。其中，WPEM 被誉为继 1969 年 Rietveld 方法之后，粉末衍射结构精修领域又一里程碑式的理论突破。\n\n主导开发自学习科学智能体 Ganjiang（干将），探索衍射分析、物相识别与结构精修中的智能方法。",
      "homepage": "https://www.caobin.asia/"
    },
    {
      "id": "pengkun-wang",
      "name": "王鹏焜",
      "englishName": "Pengkun Wang",
      "affiliation": "中国科学技术大学软件学院",
      "shortAffiliation": "中国科学技术大学",
      "title": "长聘副研究员",
      "role": "学术委员",
      "avatar": "./assets/optimized/committee/pengkun-wang-scholar.webp",
      "research": [
        "开放环境深度学习",
        "AI4Science"
      ],
      "bio": "王鹏焜，中国科学技术大学软件学院长聘副研究员，长期聚焦人工智能基础理论研究，致力于赋能化学材料、芯片设计等关键领域。近年来作为项目负责人主持国家自然科学基金青年科学基金项目、江苏省自然科学基金青年基金、国家重大科研仪器研制专项（部门推荐）子课题，并参与中国科学院抢占科技制高点专项等在内的多个项目。\n\n近五年来在人工智能领域顶级国际会议和期刊上发表论文 80 余篇，其中以第一／通讯作者身份发表 40 余篇，多篇论文入选人工智能三大会议亮点论文。担任 ICLR、NeurIPS 等会议领域主席、Frontiers in AI 期刊客座副主编，获安徽省教学成果奖一等奖、江苏省青年托举、江苏省双创博士等荣誉。",
      "homepage": "http://home.ustc.edu.cn/~pengkun/index.html"
    },
    {
      "id": "jie-xiong",
      "name": "熊杰",
      "englishName": "Jie Xiong",
      "affiliation": "上海大学材料基因组工程研究院",
      "shortAffiliation": "上海大学",
      "title": "助理研究员；材料信息与数据科学中心副主任",
      "role": "学术委员",
      "avatar": "./assets/optimized/committee/jie-xiong.webp",
      "research": [
        "AI4alloys",
        "Physics-guided AI"
      ],
      "bio": "熊杰，上海大学材料基因组工程研究院助理研究员、材料信息与数据科学中心副主任，主要从事人工智能驱动的金属结构材料设计，以及知识引导的材料通用算法研究。曾入选上海市浦江人才，并获材料基因工程青年科学家奖。作为第一或通信作者，在 npj Computational Materials、Advanced Science、Acta Materialia 等期刊发表论文30余篇。主持工信部新材料重大专项子课题、国家自然科学基金青年基金、上海市科委、上海市经信委等多项 AI4S 相关课题，兼任中国材料研究学会材料基因组分会秘书，以及 Journal of Materials Informatics 和 MGE Advances 青年编委。",
      "homepage": "http://www.ai4s-mgi.cn/xiongjie"
    },
    {
      "id": "yuquan-li",
      "name": "黎育权",
      "englishName": "Yuquan Li",
      "affiliation": "贵州大学计算机科学与技术学院；贵州省大数据实验室（依托贵州大学）",
      "shortAffiliation": "贵州大学",
      "title": "副教授；硕士生导师",
      "role": "学术委员",
      "avatar": "./assets/optimized/committee/yuquan-li-research-office.webp",
      "research": [
        "AI for Science",
        "AI 分子设计"
      ],
      "bio": "黎育权，贵州大学副教授、硕士生导师，兰州大学化学信息学博士，曾在腾讯量子实验室联合培养。长期从事 AI for Science 研究，聚焦 AI 靶标发现与分子设计。\n\n针对分子设计空间近乎无限而实验验证昂贵缓慢的核心矛盾，探索“专家智慧 + 通用智能 + 专用工具 + 自动实验”协同的干湿闭环科学发现新范式，研究兴趣涵盖大模型智能体与小分子、多肽、蛋白设计。\n\n相关工作以主要作者身份发表于 Nature Machine Intelligence、The Innovation、Advanced Science 等期刊，主持国家自然科学基金等项目。现任 The Innovation、iMeta、Exploration 青年编委，The Innovation Drug Discovery 学术编辑。",
      "homepage": "https://yuquan.li/"
    },
    {
      "id": "tong-xie",
      "name": "谢童",
      "englishName": "Tong Xie",
      "affiliation": "新南威尔士大学（UNSW Sydney）；律动造物",
      "shortAffiliation": "新南威尔士大学 · 律动造物",
      "title": "讲师；UNSW AI4Science（MASA Lab）研究组创始人；律动造物创始人兼首席执行官",
      "role": "学术委员",
      "avatar": "./assets/committee/tong-xie.jpg",
      "research": [
        "AI for Science",
        "RSI",
        "自主化实验室",
        "化学信息学"
      ],
      "bio": "谢童，新南威尔士大学（UNSW）讲师，MASA Lab 研究组创始人，律动造物创始人兼 CEO。博士毕业于新南威尔士大学，早期从事钙钛矿纳米材料研究，现专注科学大模型与 AI 驱动的材料与化学研发，主导开发 DARWIN 科学大模型、CheMiST 化学推理大模型等工作，成果发表于 NeurIPS、ICML、ICLR 等顶级会议以及 Nature、Science 系列期刊。曾获美国能源部阿贡国家实验室主任奖、澳大利亚 NCI HPC-AI 十佳人才等国际青年科学家奖项。",
      "homepage": "https://scholar.google.com/citations?user=IWEN6kcAAAAJ",
      "orcid": "0000-0002-1659-4865"
    },
    {
      "id": "mengwei-he",
      "name": "何孟伟",
      "englishName": "Mengwei He",
      "affiliation": "澳大利亚悉尼大学／澳洲显微分析中心",
      "shortAffiliation": "悉尼大学",
      "title": "博士后研究员",
      "role": "学术委员",
      "avatar": "./assets/optimized/committee/mengwei-he-courtyard.webp",
      "research": [
        "短程有序",
        "AI4S"
      ],
      "bio": "何孟伟，博士，现任澳大利亚悉尼大学博士后研究员，2022 年获悉尼大学博士学位。主要从事先进材料原子尺度结构表征、材料科学与人工智能交叉研究，重点关注原子探针层析技术（APT）、电子显微技术、短程有序结构及 AI 驱动的材料分析与设计。研究成果发表于 Nature Materials、npj Computational Materials、Ultramicroscopy 等国际期刊，并在 ICCV 等人工智能顶级学术会议发表论文。曾获 Google 科研资助及 NVIDIA 学术资助，担任 Nature Communications 等国际期刊审稿人，具有跨学科科研合作及学生指导经验。",
      "homepage": null
    },
    {
      "id": "yang-liu",
      "name": "刘阳",
      "englishName": "Yang Liu",
      "affiliation": "香港中文大学系统工程与工程管理学系",
      "shortAffiliation": "香港中文大学",
      "title": "博士后研究员",
      "role": "学术委员",
      "avatar": "./assets/optimized/committee/yang-liu-lakeside.webp",
      "research": [
        "AI 气象与气候"
      ],
      "bio": "刘阳，香港中文大学博士后研究员，与 Hong Cheng 教授合作。2025 年获香港科技大学个性化跨学科项目（数据科学与分析）博士学位。主要研究人工智能在天气与气候领域的应用，尤其关注利用几何深度学习与基础模型理解地球系统动力学。\n\n研究涵盖面向物理动力学的等变神经网络、全球次季节至季节尺度天气预报，以及风电功率预测、极端天气预测等应用。相关成果发表于 ICLR、ICML、NeurIPS、CVPR、WWW、KDD 等机器学习与人工智能会议，以及 IEEE Transactions on Knowledge and Data Engineering、National Science Review 等期刊。",
      "homepage": "https://yliukj.github.io/"
    },
    {
      "id": "rui-jiao",
      "name": "矫瑞",
      "englishName": "Rui Jiao",
      "affiliation": "清华大学计算机科学与技术系",
      "shortAffiliation": "清华大学",
      "title": "博士",
      "role": "学术委员",
      "avatar": "./assets/optimized/committee/rui-jiao.webp",
      "research": [
        "几何深度学习",
        "材料发现"
      ],
      "bio": "矫瑞，清华大学计算机科学与技术系博士毕业生，师从刘洋教授。研究聚焦几何深度学习与生成模型，关注 AI 在材料科学和生命科学中的应用。\n\n代表成果包括晶体扩散模型 DiffCSP 与三维分子预训练模型 EPT，分别发表于 NeurIPS 和 Nature Communications，Google Scholar 总引用量 2000 余次。博士期间曾在微软剑桥研究院、阿里巴巴达摩院及通义实验室开展科研实习，获清华大学优秀毕业生及优秀博士学位论文奖。",
      "homepage": "https://jiaor17.github.io/"
    },
    {
      "id": "ruiming-zhu",
      "name": "朱睿明",
      "englishName": "Ruiming Zhu",
      "affiliation": "南洋理工大学材料科学与工程学院",
      "shortAffiliation": "南洋理工大学",
      "title": "博士后研究员",
      "role": "学术委员",
      "avatar": "./assets/optimized/committee/ruiming-zhu-seminar-room.webp",
      "research": [
        "AI4Science",
        "生成式 AI",
        "晶体结构设计"
      ],
      "bio": "朱睿明，南洋理工大学（NTU）材料科学与工程学院博士后研究员，博士毕业于南洋理工大学，曾于美国普渡大学和斯坦福大学获得材料科学与工程学士及硕士学位。主要从事人工智能驱动的晶体材料设计与发现，研究方向包括晶体结构生成、材料可合成性预测、对称性约束的生成式人工智能，以及无序晶体材料设计。\n\n近年来，围绕晶体材料的智能设计与高通量筛选，开发了 WyCryst、Dis-GEN 等晶体结构生成框架，并将机器学习与第一性原理计算相结合，开展新型功能材料的预测、筛选及实验验证。相关研究成果发表于 Matter、ICML 及 Nature、Science 系列期刊，涵盖热电材料、金属合金及无机晶体等体系，致力于构建从材料生成、稳定性评估到实验验证的人工智能驱动材料发现的闭环设计。",
      "homepage": null
    },
    {
      "id": "yizheng-wang",
      "name": "王一铮",
      "englishName": "Yizheng Wang",
      "affiliation": "清华大学航天航空学院工程力学系",
      "shortAffiliation": "清华大学",
      "title": "博士生",
      "role": "学术委员",
      "shortBio": "清华大学工程力学系博士生、清华大学未来学者，研究人工智能与物理计算的结合（Physical AI），重点关注 AI for PDEs 与计算固体力学。",
      "avatar": "./assets/committee/yizheng-wang.jpeg",
      "research": [
        "AI for PDEs",
        "计算固体力学"
      ],
      "bio": "王一铮，清华大学工程力学系博士生、清华大学未来学者，研究人工智能与物理计算的结合（Physical AI），重点关注 AI for PDEs 与计算固体力学。曾在微软研究院 AI for Science 从事研究助理工作，并赴德国魏玛包豪斯大学访问研究。研究涉及物理信息神经网络、算子学习与深度能量方法，相关成果发表于 Applied Mechanics Reviews、Nature Communications、JMPS、CMAME 等期刊，参与编写科学机器学习英文专著。",
      "homepage": "https://yizheng-wang.github.io/"
    }
  ]};

// English copy shares the same confirmed people, assets, links, and session
// state. When adding a session or member, maintain its English entry here too.
(() => {
  if (window.I18N.language !== "en") return;
  const content = window.SEMINAR_CONTENT;
  const seminars = {
    "001": {
      title: "AI for PDEs in Computational Mechanics",
      description: "Our first session brought together 100+ attendees online. Yizheng Wang of Tsinghua University shared AI4PDEs methods and applications in solid mechanics.",
      status: "Completed", topicNote: "Session 1 · In Chinese",
      date: "24 Oct 2026, 15:00 Beijing (UTC+8)", format: "Tencent Meeting",
      recapTitle: "A successful first session on computational mechanics",
      recapIntro: "On 24 October 2026, the first Unpacked Seminar brought together 100+ attendees on Tencent Meeting. Yizheng Wang, a PhD student in Engineering Mechanics at Tsinghua University, presented AI for PDEs in Computational Mechanics. Bin Cao invited and hosted the session.",
      recapBody: "The talk reviewed physics-driven, data-driven, and hybrid approaches to AI4PDEs, connecting algorithms and theory with forward and inverse problems in solid mechanics. The live presentation included the deep complementary energy method and its use of the complementary energy principle to formulate a loss function, alongside a discussion of future foundation models for computational mechanics.",
      recapThanks: "Thank you to Yizheng Wang for preparing and sharing his work, and to everyone who attended, shared the announcement, or supported our first session. Follow Unpacked Seminar and bring your research questions to the next conversation.",
      recapImageAlt: "The first computational mechanics session, with the Tencent Meeting Members (99+) indicator circled in red",
      recapImageCaption: "From the live session · The red circle highlights Members (99+) · Select to view full size",
      confirmationNote: "Online seminar · Beijing time (UTC+8)",
      registrationNote: "24 October 2026. Meeting room open 14:30–17:30; talk starts at 15:00 (Beijing time, UTC+8). Talk in Chinese.",
      detail: "Deep learning has spread across many fields, with the combination of artificial intelligence and traditional science (AI for Science, AI4Science) attracting particular attention. Within AI4Science, using AI algorithms to solve partial differential equations (AI4PDEs) has become a focus of computational mechanics. AI4PDEs combines data with equations and can address almost any PDE problem. By incorporating data, its computational efficiency can typically improve by tens of thousands of times compared with traditional algorithms. This talk reviews AI4PDEs research, summarizes existing algorithms and theory, and discusses forward and inverse problems in solid mechanics, before looking ahead to future directions, particularly foundation models for computational mechanics.\n\nExisting approaches include physics-informed neural networks (PINNs), deep energy methods (DEM), operator learning, and physics-informed neural operators (PINO). Although AI4PDEs has many scientific computing applications, this talk focuses on solid mechanics. Forward problems include linear elasticity, elastoplasticity, hyperelasticity, and fracture mechanics. Inverse problems include identifying material parameters, constitutive relations, and defects, as well as topology optimization.\n\nAI4PDEs offers a new approach to scientific simulation: using large amounts of data to provide approximate solutions for specific problems, then fine-tuning them to the governing physical equations instead of computing from scratch. In this sense, AI4PDEs is a precursor to foundation models for computational mechanics and can substantially accelerate traditional numerical algorithms. AI-assisted scientific computing is an important future direction for both computing and computational mechanics: intelligent computational mechanics.",
      outcome: "Learn about recent advances in intelligent computational mechanics and deepen your understanding of elasticity, hyperelasticity, fracture, and plasticity, with a view to applying these methods in your own research.",
      keywords: ["Computational mechanics", "AI4PDEs", "AI4Science", "Solid mechanics"],
      takeaways: [
        { title: "Physics-driven methods", text: "Physics-driven approaches to intelligent computational mechanics." },
        { title: "Data-driven methods", text: "Data-driven approaches to intelligent computational mechanics." },
        { title: "Combining physics and data", text: "Hybrid approaches that bring physics and data together." }
      ]
    },
    "002": {
      title: "From AI for Biology to Virtual Cells",
      description: "From biological foundation models to virtual cells: approaches and limitations in cell-state representation, multi-omics integration, genetic perturbation prediction, and cell dynamics.",
      status: "Upcoming", topicNote: "Session 2 · In Chinese",
      date: "7 Nov, 10:00 Beijing (UTC+8)", format: "Tencent Meeting",
      speaker: "Zhengyang Zhao", affiliation: "Academy for Advanced Interdisciplinary Studies, Peking University", shortAffiliation: "Peking University",
      speakerTitle: "PhD Student", speakerResearch: ["AI for Biology", "Genomics", "Bioinformatics"],
      speakerBio: "Zhengyang Zhao is a PhD student at the Academy for Advanced Interdisciplinary Studies, Peking University. His research lies at the intersection of artificial intelligence and biology (AI for Biology), with a focus on genomics, bioinformatics, and AI applications in the life sciences. He has worked as a research assistant in several laboratories at Peking University and Tsinghua University. He was selected for the PhD student track of the China Association for Science and Technology’s Young Science and Technology Talent Development Program.",
      registrationNote: "7 November. The talk starts at 10:00; the meeting runs 10:00–12:00 (Beijing time, UTC+8). Talk in Chinese; no specific background required.",
      detail: "Artificial intelligence is reshaping research in the life sciences, moving biology beyond traditional data analysis and pattern discovery toward the prediction, generation, and simulation of complex living systems. From protein structure prediction and design to genomic modeling and single-cell multi-omics analysis, AI for Biology is showing considerable potential across biological scales.\n\nThis talk will first review the main technical advances and research paradigms in AI for Biology, then focus on virtual cells. It will cover cell foundation models, multi-omics data integration, genetic perturbation prediction, and cell dynamics, using representative studies to examine the modeling approaches, use cases, and limitations of different methods.",
      outcome: "Gain a systematic understanding of the main research directions in AI for Biology and technical advances in virtual cells, including the use cases and limitations of different modeling paradigms.\n\nUnderstand the central scientific questions and technical challenges in moving from cell foundation models toward virtual cells, to inform future research topics and methodological choices.",
      audience: "No specific background required",
      keywords: ["AI for Biology", "Virtual Cell", "Biological foundation models", "Single-cell multi-omics"],
      takeaways: [
        { title: "AI for Biology: paradigms and trends", text: "Review AI applications in proteins, genomics, and single-cell biology, with a focus on biological foundation models and generative models. Discuss what modeling approaches share and how they differ across biological scales." },
        { title: "Virtual cells: core tasks and approaches", text: "Explore cell-state representation, multi-omics integration, genetic perturbation prediction, and dynamic trajectory modeling through representative studies. Compare the strengths and limitations of data-driven, mechanistic, and hybrid approaches." },
        { title: "Challenges and future research directions", text: "Discuss limitations in generalization, causal inference, dynamic simulation, and cross-scale modeling. Explore the potential of high-throughput perturbation experiments, active learning, and mechanistic constraints in building verifiable virtual cells." }
      ]
    },
    "003": {
      title: "New possibilities in the physical world",
      description: "Physical constraints, computational validation, and putting methods to work on real scientific questions.",
      status: "Planned", topicNote: "Proposed direction",
      detail: "A proposed conversation on how AI can help us understand the physical world, with research questions around physical constraints, materials discovery, and scientific computing. This is a planning direction; the speaker and final topic have not yet been confirmed."
    }
  };
  const committee = {
    "bin-cao": {
      name: "Bin Cao", affiliation: "Huawei Noah’s Ark Lab, London", shortAffiliation: "Huawei Noah’s Ark Lab",
      title: "Research Scientist", role: "Initiator / Academic Committee",
      research: ["Scientific agents", "AI for Materials"],
      shortBio: "Initiator of Unpacked Seminar, with research focused on agents and machine learning for materials science. He leads the development of the self-learning scientific agent Ganjiang.",
      bio: "Bin Cao is a Research Scientist at Huawei Noah’s Ark Lab in London, collaborating with Professor Jun Wang at University College London on agents and machine learning for materials science. His research spans scientific agents, crystal representation learning, and Bayesian optimization, combining physical evidence, scientific tools, and research experience to advance materials analysis and discovery.\n\nHe has published more than 20 first-author research papers in journals including Natl. Sci. Rev., Sci. Bull., and npj Comput. Mater., and at machine learning conferences including ICLR and NeurIPS. Among his contributions, WPEM has been hailed as another landmark theoretical breakthrough in powder diffraction structure refinement following the Rietveld method introduced in 1969.\n\nHe leads the development of Ganjiang, a self-learning scientific agent exploring intelligent methods for diffraction analysis, phase identification, and structure refinement."
    },
    "yang-liu": {
      "name": "Yang Liu",
      "affiliation": "Department of Systems Engineering and Engineering Management, The Chinese University of Hong Kong",
      "shortAffiliation": "The Chinese University of Hong Kong",
      "title": "Postdoctoral Fellow",
      "role": "Academic Committee",
      "research": [
        "AI for Weather and Climate"
      ],
      "bio": "Yang Liu is a Postdoctoral Fellow at The Chinese University of Hong Kong, working with Professor Hong Cheng. He received his Ph.D. in the Individualized Interdisciplinary Program (Data Science and Analytics) from The Hong Kong University of Science and Technology in 2025. His research interests center on AI for weather and climate, particularly geometric deep learning and foundation models for understanding Earth-system dynamics.\n\nHis work spans equivariant neural networks for physical dynamics, global subseasonal-to-seasonal weather forecasting, and downstream weather applications, including wind power prediction and extreme weather prediction. He has published at major machine learning and AI conferences, including ICLR, ICML, NeurIPS, CVPR, WWW, and KDD, as well as in journals such as IEEE Transactions on Knowledge and Data Engineering and National Science Review."
    },
    "rui-jiao": {
      "name": "Rui Jiao",
      "affiliation": "Department of Computer Science and Technology, Tsinghua University",
      "shortAffiliation": "Tsinghua University",
      "title": "PhD",
      "role": "Academic Committee",
      "research": [
        "Geometric deep learning",
        "Materials discovery"
      ],
      "bio": "Rui Jiao received his PhD from the Department of Computer Science and Technology at Tsinghua University, supervised by Professor Yang Liu. His research focuses on geometric deep learning and generative models, with applications of AI in materials science and life sciences.\n\nHis representative work includes the crystal diffusion model DiffCSP and the 3D molecular pretraining model EPT, published at NeurIPS and in Nature Communications, respectively. His work has received over 2,000 citations on Google Scholar. During his doctoral studies, he completed research internships at Microsoft Research Cambridge, Alibaba DAMO Academy, and Tongyi Lab. He received Tsinghua University’s Outstanding Graduate and Outstanding Doctoral Dissertation awards."
    },
    "ruiming-zhu": {
      "name": "Ruiming Zhu",
      "affiliation": "School of Materials Science and Engineering, Nanyang Technological University",
      "shortAffiliation": "Nanyang Technological University",
      "title": "Postdoctoral Research Fellow",
      "role": "Academic Committee",
      "research": [
        "AI4Science",
        "Generative AI",
        "Crystal structure design"
      ],
      "bio": "Ruiming Zhu is a Postdoctoral Research Fellow at the School of Materials Science and Engineering, Nanyang Technological University (NTU), where he received his Ph.D. He previously earned a bachelor’s degree in Materials Science and Engineering from Purdue University and a master’s degree in the same field from Stanford University. His research focuses on AI-driven crystal materials design and discovery, including crystal structure generation, materials synthesizability prediction, symmetry-constrained generative AI, and the design of disordered crystalline materials.\n\nHe has developed crystal structure generation frameworks including WyCryst and Dis-GEN for intelligent materials design and high-throughput screening. By combining machine learning with first-principles calculations, he works on predicting, screening, and experimentally validating new functional materials. His research has appeared in Matter, at ICML, and in Nature and Science family journals, spanning thermoelectric materials, metal alloys, and inorganic crystals. He aims to build a closed-loop approach to AI-driven materials discovery that connects materials generation, stability assessment, and experimental validation."
    },
    "yizheng-wang": {
      name: "Yizheng Wang", affiliation: "Department of Engineering Mechanics, School of Aerospace Engineering, Tsinghua University", shortAffiliation: "Tsinghua University",
      title: "PhD Student", role: "Academic Committee",
      research: ["AI for PDEs", "Computational solid mechanics"],
      shortBio: "A PhD student in Engineering Mechanics and a Future Scholar at Tsinghua University. His research connects artificial intelligence with physics-based computation (Physical AI), focusing on AI for PDEs and computational solid mechanics.",
      bio: "Yizheng Wang is a PhD student in Engineering Mechanics and a Future Scholar at Tsinghua University. His research connects artificial intelligence with physics-based computation (Physical AI), focusing on AI for PDEs and computational solid mechanics. He has worked as a Research Assistant with Microsoft Research AI for Science and visited Bauhaus-Universität Weimar in Germany. His work covers physics-informed neural networks, operator learning, and deep energy methods, with publications in Applied Mechanics Reviews, Nature Communications, JMPS, and CMAME. He has also contributed to an English-language monograph on scientific machine learning."
    },
    "jie-xiong": {
      name: "Jie Xiong", affiliation: "Materials Genome Institute, Shanghai University", shortAffiliation: "Shanghai University",
      title: "Assistant Researcher; Deputy Director, Center for Materials Informatics and Data Science", role: "Academic Committee",
      research: ["AI4alloys", "Physics-guided AI"],
      bio: "Jie Xiong is an Assistant Researcher at the Materials Genome Institute of Shanghai University and Deputy Director of its Center for Materials Informatics and Data Science. His research focuses on AI-driven design of structural metallic materials and knowledge-guided general-purpose algorithms for materials. He has been selected for the Shanghai Pujiang Talent Program and received a Materials Genome Engineering Young Scientist Award. He has published more than 30 papers as first or corresponding author in journals including npj Computational Materials, Advanced Science, and Acta Materialia. He leads AI4S projects supported by national and Shanghai funding programmes, serves as secretary of the Materials Genome Engineering branch of the Chinese Materials Research Society, and is a young editorial board member of Journal of Materials Informatics and MGE Advances."
    },
    "yuquan-li": {
      "name": "Yuquan Li",
      "affiliation": "School of Computer Science and Technology, Guizhou University; Guizhou Provincial Big Data Laboratory (hosted by Guizhou University)",
      "shortAffiliation": "Guizhou University",
      "title": "Associate Professor; Master’s Supervisor",
      "role": "Academic Committee",
      "research": [
        "AI for Science",
        "AI-driven molecular design"
      ],
      "bio": "Yuquan Li is an Associate Professor and master’s supervisor at Guizhou University. He received his PhD in Cheminformatics from Lanzhou University and undertook joint training at Tencent Quantum Lab. His research focuses on AI for Science, particularly AI-driven target discovery and molecular design.\n\nTo address the challenge of a virtually limitless molecular design space and costly, slow experimental validation, he explores closed-loop scientific discovery that connects computational and experimental work through human expertise, general-purpose AI, specialized tools, and automated experimentation. His interests include large language model agents and the design of small molecules, peptides, and proteins.\n\nHis work as a principal author has appeared in Nature Machine Intelligence, The Innovation, and Advanced Science. He leads projects supported by the National Natural Science Foundation of China and other funding sources. He serves on the young editorial boards of The Innovation, iMeta, and Exploration, and as an Academic Editor of The Innovation Drug Discovery."
    },
    "tong-xie": {
      name: "Tong Xie", affiliation: "UNSW Sydney; 律动造物", shortAffiliation: "UNSW Sydney · 律动造物",
      title: "Lecturer; Founder of UNSW AI4Science (MASA Lab); Founder and CEO of 律动造物", role: "Academic Committee",
      research: ["AI for Science", "RSI", "Autonomous laboratories", "Cheminformatics"],
      bio: "Tong Xie is a Lecturer at UNSW Sydney, founder of MASA Lab, and founder and CEO of 律动造物. He received his PhD from UNSW, initially working on perovskite nanomaterials. His current research focuses on scientific foundation models and AI-driven materials and chemistry research. He has led the development of DARWIN scientific foundation models and CheMiST chemical reasoning models, with work published at NeurIPS, ICML, and ICLR and in Nature and Science family journals. His awards include a Director’s Award from the U.S. Department of Energy’s Argonne National Laboratory and recognition among Australia’s NCI HPC-AI Top 10 talents."
    },
    "mengwei-he": {
      "name": "Mengwei He",
      "affiliation": "University of Sydney / Australian Centre for Microscopy and Microanalysis",
      "shortAffiliation": "University of Sydney",
      "title": "Postdoctoral Research Fellow",
      "role": "Academic Committee",
      "research": [
        "Short-range order",
        "AI4S"
      ],
      "bio": "Mengwei He is a Postdoctoral Research Fellow at the University of Sydney, where he received his PhD in 2022. His research connects atomic-scale structural characterization of advanced materials with artificial intelligence, focusing on atom probe tomography (APT), electron microscopy, short-range order, and AI-driven materials analysis and design. His work has appeared in Nature Materials, npj Computational Materials, and Ultramicroscopy, and at AI conferences including ICCV. He has received research support from Google and NVIDIA, reviews for journals including Nature Communications, and has experience in interdisciplinary collaboration and student supervision."
    },
    "pengkun-wang": {
      "name": "Pengkun Wang",
      "affiliation": "School of Software Engineering, University of Science and Technology of China",
      "shortAffiliation": "USTC",
      "title": "Tenured Associate Research Scientist",
      "role": "Academic Committee",
      "research": [
        "Open-world deep learning",
        "AI4Science"
      ],
      "bio": "Pengkun Wang is a Tenured Associate Research Scientist at the School of Software Engineering, University of Science and Technology of China. His research focuses on the foundations of artificial intelligence and applications in chemistry, materials, and chip design. He has led projects supported by the NSFC Young Scientists Fund, the Jiangsu Natural Science Foundation for young scientists, and a subproject of a national major scientific instrument development programme, and has participated in a Chinese Academy of Sciences strategic research initiative.\n\nOver the past five years, he has published more than 80 papers in leading international AI conferences and journals, including more than 40 as first or corresponding author. Several papers have been selected as highlights at major AI conferences. He serves as an Area Chair for conferences including ICLR and NeurIPS and as a guest associate editor for Frontiers in AI. His honours include a first prize for teaching achievements in Anhui and recognition through Jiangsu young-talent and entrepreneurship programmes."
    }
  };
  content.founder.name = "Bin Cao";
  content.seminars = content.seminars.map((item) => ({ ...item, ...seminars[item.id] }));
  content.committee = content.committee.map((item) => item && ({ ...item, ...committee[item.id] }));
  content.acknowledgements = content.acknowledgements.map((item) => ({ ...item, name: item.englishName }));
})();

// Reuse the localized committee profiles for speakers and hosts.
window.SEMINAR_CONTENT.seminars.forEach((seminar) => {
  const members = window.SEMINAR_CONTENT.committee;
  const speaker = members.find((member) => member?.id === seminar.speakerId);
  const host = members.find((member) => member?.id === seminar.hostId);
  if (speaker) Object.assign(seminar, { speaker: speaker.name, affiliation: speaker.affiliation, shortAffiliation: speaker.shortAffiliation, speakerTitle: speaker.title, speakerResearch: speaker.research, avatar: speaker.avatar, speakerBio: speaker.bio });
  if (host) seminar.host = { name: host.name, affiliation: host.affiliation, title: host.title, research: host.research, avatar: host.avatar, bio: host.shortBio || host.bio };
});
