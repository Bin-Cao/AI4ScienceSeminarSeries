// 主要内容在这里维护。未确认的信息请保留 null，不要填写示例人物或虚构日期。
window.SEMINAR_CONTENT = {
  founder: { name: "曹斌", avatar: "./assets/committee/bin-cao.jpg", homepage: "https://www.caobin.asia/" },
  // 报名链接确认后填写；推荐讲者、共建与资助通过邮件联系。
  registrationUrl: null,
  speakerEmail: "bincao@hkust-gz.edu.cn",
  collaborationEmail: "bincao@hkust-gz.edu.cn",
  wechat: { name: "SciMindBin", qrCode: "./assets/scimindbin.jpg" },
  acknowledgements: [
    { id: "hkust", name: "香港科技大学", englishName: "The Hong Kong University of Science and Technology", logo: "./assets/institutions/hkust.svg" },
    { id: "cuhk", name: "香港中文大学", englishName: "The Chinese University of Hong Kong", logo: "./assets/institutions/cuhk.svg" },
    { id: "tsinghua", name: "清华大学", englishName: "Tsinghua University", logo: "./assets/institutions/tsinghua.svg" },
    { id: "ustc", name: "中国科学技术大学", englishName: "University of Science and Technology of China", logo: "./assets/institutions/ustc.svg" },
    { id: "ntu", name: "南洋理工大学", englishName: "Nanyang Technological University, Singapore", logo: "./assets/institutions/ntu.png" },
    { id: "ucl", name: "UCL · 伦敦大学学院", englishName: "University College London", logo: "./assets/institutions/ucl.svg" },
    { id: "unsw", name: "新南威尔士大学", englishName: "UNSW Sydney", logo: "./assets/institutions/unsw.png" }
  ],
  seminars: [
    {
      id: "001", category: "AI × COMPUTATIONAL MECHANICS", title: "智能计算力学",
      description: "从物理驱动、数据驱动到物理与数据双驱动，综述 AI4PDEs 的算法、理论及其在固体力学正反问题中的应用。",
      status: "即将举行", topicNote: "第 1 期 · 中文报告", featured: true,
      // 时间已确认；腾讯会议链接由组织者提供后填入 meetingUrl。
      date: "10月24日 15:00（北京时间）", format: "腾讯会议",
      // 人物资料由下方学术委员条目统一填充，避免中英文简介重复维护。
      speakerId: "yizheng-wang", hostId: "bin-cao",
      meetingUrl: null,
      registrationUrl: null, completed: false,
      confirmationNote: "线上报告 · 北京时间 UTC+8",
      registrationNote: "10月24日北京时间15:00开始，报告语言为中文，通过腾讯会议参加。",
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
      id: "002", category: "AI × LIFE SCIENCE", title: "探索生命的计算视角",
      description: "从数据、模型到实验，聊清生命科学研究中的技术选择与验证经验。",
      status: "规划中", topicNote: "拟议方向", featured: false,
      speaker: null, affiliation: null, avatar: null, date: null, format: null,
      speakerBio: null, host: { name: null, affiliation: null, avatar: null, bio: null },
      registrationUrl: null, completed: false,
      detail: "拟关注人工智能与生命科学的交叉研究，包括分子建模、生命系统理解，以及计算方法与实验之间的协作。该议题为规划方向，讲者及最终主题尚未确定。"
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
      id: "bin-cao", name: "曹斌", englishName: "Bin Cao",
      affiliation: "华为诺亚方舟实验室（伦敦）", shortAffiliation: "华为诺亚方舟实验室",
      title: "研究科学家", role: "发起人 / 学术委员",
      avatar: "./assets/committee/bin-cao.jpg",
      research: ["科学智能体", "AI for Materials"],
      bio: "曹斌，华为诺亚方舟实验室（伦敦）研究科学家，与伦敦大学学院 Jun Wang 教授合作，研究面向材料科学的智能体与机器学习方法。主要方向包括科学智能体、晶体表征学习和贝叶斯优化，关注如何结合物理证据、科学工具与研究经验，推动材料分析与发现。主导开发自学习科学智能体 Ganjiang（干将），探索衍射分析、物相识别与结构精修中的智能方法。",
      homepage: "https://www.caobin.asia/"
    },
    {
      id: "jie-xiong", name: "熊杰", englishName: "Jie Xiong",
      affiliation: "上海大学材料基因组工程研究院", shortAffiliation: "上海大学",
      title: "助理研究员；材料信息与数据科学中心副主任", role: "学术委员",
      avatar: "./assets/committee/jie-xiong.png",
      research: ["AI4alloys", "Physics-guided AI"],
      bio: "熊杰，上海大学材料基因组工程研究院助理研究员、材料信息与数据科学中心副主任，主要从事人工智能驱动的金属结构材料设计，以及知识引导的材料通用算法研究。曾入选上海市浦江人才，并获材料基因工程青年科学家奖。作为第一或通信作者，在 npj Computational Materials、Advanced Science、Acta Materialia 等期刊发表论文30余篇。主持工信部新材料重大专项子课题、国家自然科学基金青年基金、上海市科委、上海市经信委等多项 AI4S 相关课题，兼任中国材料研究学会材料基因组分会秘书，以及 Journal of Materials Informatics 和 MGE Advances 青年编委。",
      homepage: "http://www.ai4s-mgi.cn/xiongjie"
    },
    {
      id: "tong-xie", name: "谢童", englishName: "Tong Xie",
      affiliation: "新南威尔士大学（UNSW Sydney）；律动造物", shortAffiliation: "新南威尔士大学 · 律动造物",
      title: "讲师；UNSW AI4Science（MASA Lab）研究组创始人；律动造物创始人兼首席执行官", role: "学术委员",
      avatar: "./assets/committee/tong-xie.jpg",
      research: ["AI for Science", "RSI", "自主化实验室", "化学信息学"],
      bio: "谢童，新南威尔士大学（UNSW）讲师，MASA Lab 研究组创始人，律动造物创始人兼 CEO。博士毕业于新南威尔士大学，早期从事钙钛矿纳米材料研究，现专注科学大模型与 AI 驱动的材料与化学研发，主导开发 DARWIN 科学大模型、CheMiST 化学推理大模型等工作，成果发表于 NeurIPS、ICML、ICLR 等顶级会议以及 Nature、Science 系列期刊。曾获美国能源部阿贡国家实验室主任奖、澳大利亚 NCI HPC-AI 十佳人才等国际青年科学家奖项。",
      homepage: "https://scholar.google.com/citations?user=IWEN6kcAAAAJ",
      orcid: "0000-0002-1659-4865"
    },
    {
      id: "yizheng-wang", name: "王一铮", englishName: "Yizheng Wang",
      affiliation: "清华大学航天航空学院工程力学系", shortAffiliation: "清华大学",
      title: "博士生", role: "学术委员",
      avatar: "./assets/committee/yizheng-wang.jpeg",
      research: ["AI for PDEs", "计算固体力学"],
      bio: "王一铮，清华大学工程力学系博士生、清华大学未来学者，研究人工智能与物理计算的结合（Physical AI），重点关注 AI for PDEs 与计算固体力学。曾在微软研究院 AI for Science 从事研究助理工作，并赴德国魏玛包豪斯大学访问研究。研究涉及物理信息神经网络、算子学习与深度能量方法，相关成果发表于 Applied Mechanics Reviews、Nature Communications、JMPS、CMAME 等期刊，参与编写科学机器学习英文专著。",
      homepage: "https://yizheng-wang.github.io/"
    }
  ]
};

// English copy shares the same confirmed people, assets, links, and session
// state. When adding a session or member, maintain its English entry here too.
(() => {
  if (window.I18N.language !== "en") return;
  const content = window.SEMINAR_CONTENT;
  const seminars = {
    "001": {
      title: "AI for PDEs in Computational Mechanics",
      description: "Physics-driven, data-driven, and hybrid approaches: a review of AI4PDEs algorithms, theory, and applications to forward and inverse problems in solid mechanics.",
      status: "Upcoming", topicNote: "Session 1 · In Chinese",
      date: "24 Oct, 15:00 Beijing (UTC+8)", format: "Tencent Meeting",
      confirmationNote: "Online seminar · Beijing time (UTC+8)",
      registrationNote: "24 October at 15:00 Beijing time (UTC+8). The talk will be in Chinese, via Tencent Meeting.",
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
      title: "A computational view of life",
      description: "From data and models to experiments: technical choices and lessons in validation from life science research.",
      status: "Planned", topicNote: "Proposed direction",
      detail: "A proposed conversation at the intersection of AI and life science: molecular modelling, understanding biological systems, and collaboration between computation and experiments. This is a planning direction; the speaker and final topic have not yet been confirmed."
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
      bio: "Bin Cao is a Research Scientist at Huawei Noah’s Ark Lab in London, collaborating with Professor Jun Wang at University College London on agents and machine learning for materials science. His research spans scientific agents, crystal representation learning, and Bayesian optimization, combining physical evidence, scientific tools, and research experience to advance materials analysis and discovery. He leads the development of Ganjiang, a self-learning scientific agent exploring intelligent methods for diffraction analysis, phase identification, and structure refinement."
    },
    "yizheng-wang": {
      name: "Yizheng Wang", affiliation: "Department of Engineering Mechanics, School of Aerospace Engineering, Tsinghua University", shortAffiliation: "Tsinghua University",
      title: "PhD Student", role: "Academic Committee",
      research: ["AI for PDEs", "Computational solid mechanics"],
      bio: "Yizheng Wang is a PhD student in Engineering Mechanics and a Future Scholar at Tsinghua University. His research connects artificial intelligence with physics-based computation (Physical AI), focusing on AI for PDEs and computational solid mechanics. He has worked as a Research Assistant with Microsoft Research AI for Science and visited Bauhaus-Universität Weimar in Germany. His work covers physics-informed neural networks, operator learning, and deep energy methods, with publications in Applied Mechanics Reviews, Nature Communications, JMPS, and CMAME. He has also contributed to an English-language monograph on scientific machine learning."
    },
    "jie-xiong": {
      name: "Jie Xiong", affiliation: "Materials Genome Institute, Shanghai University", shortAffiliation: "Shanghai University",
      title: "Assistant Researcher; Deputy Director, Center for Materials Informatics and Data Science", role: "Academic Committee",
      research: ["AI4alloys", "Physics-guided AI"],
      bio: "Jie Xiong is an Assistant Researcher at the Materials Genome Institute of Shanghai University and Deputy Director of its Center for Materials Informatics and Data Science. His research focuses on AI-driven design of structural metallic materials and knowledge-guided general-purpose algorithms for materials. He has been selected for the Shanghai Pujiang Talent Program and received a Materials Genome Engineering Young Scientist Award. He has published more than 30 papers as first or corresponding author in journals including npj Computational Materials, Advanced Science, and Acta Materialia. He leads AI4S projects supported by national and Shanghai funding programmes, serves as secretary of the Materials Genome Engineering branch of the Chinese Materials Research Society, and is a young editorial board member of Journal of Materials Informatics and MGE Advances."
    },
    "tong-xie": {
      name: "Tong Xie", affiliation: "UNSW Sydney; 律动造物", shortAffiliation: "UNSW Sydney · 律动造物",
      title: "Lecturer; Founder of UNSW AI4Science (MASA Lab); Founder and CEO of 律动造物", role: "Academic Committee",
      research: ["AI for Science", "RSI", "Autonomous laboratories", "Cheminformatics"],
      bio: "Tong Xie is a Lecturer at UNSW Sydney, founder of MASA Lab, and founder and CEO of 律动造物. He received his PhD from UNSW, initially working on perovskite nanomaterials. His current research focuses on scientific foundation models and AI-driven materials and chemistry research. He has led the development of DARWIN scientific foundation models and CheMiST chemical reasoning models, with work published at NeurIPS, ICML, and ICLR and in Nature and Science family journals. His awards include a Director’s Award from the U.S. Department of Energy’s Argonne National Laboratory and recognition among Australia’s NCI HPC-AI Top 10 talents."
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
  if (host) seminar.host = { name: host.name, affiliation: host.affiliation, title: host.title, avatar: host.avatar, bio: host.bio };
});
