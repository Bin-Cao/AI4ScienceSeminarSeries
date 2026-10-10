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
    { id: "ucl", name: "UCL · 伦敦大学学院", englishName: "University College London", logo: "./assets/institutions/ucl.svg" }
  ],
  seminars: [
    {
      id: "001", category: "AI FOR SCIENCE", title: "从真实的科学问题出发",
      description: "问题怎么拆、方法怎么选、结果怎么验。把一项研究真正做成的过程，展开讲。",
      status: "筹备中", topicNote: "首期 · 拟议主题", featured: true,
      speaker: null, affiliation: null, avatar: null, date: null, format: null,
      speakerBio: null,
      // 邀请人同时担任主持人，仅维护同一份人物信息。
      host: { name: null, affiliation: null, avatar: null, bio: null },
      registrationUrl: null, completed: false,
      detail: "首期拟从一个真实的科学问题讲起，沿着问题定义、数据准备、方法选择与结果验证，拆开讨论研究中的关键决策。希望把有效的做法、走过的弯路和方法的适用边界讲清楚，让参与者带走能用于自己研究的思路。最终题目与报告内容将在讲者确认后公布。",
      takeaways: [
        { title: "问题，怎么拆？", text: "拟讨论如何把科学需求转成可验证的研究问题，确定任务、数据与评价标准。" },
        { title: "技术，怎么选？", text: "拟讨论模型、基线与实验方案如何取舍，哪些细节影响结果，哪些尝试没有奏效。" },
        { title: "结果，怎么用？", text: "拟讨论如何验证方法的实际效果、识别适用边界，并判断下一步值得做什么。" }
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
      id: "yizheng-wang", name: "王一铮", englishName: "Yizheng Wang",
      affiliation: "清华大学航天航空学院工程力学系", shortAffiliation: "清华大学",
      title: "博士生", role: "学术委员",
      avatar: "./assets/committee/yizheng-wang.jpeg",
      research: ["AI for PDEs", "计算固体力学"],
      bio: "王一铮，清华大学工程力学系博士生、清华大学未来学者，研究人工智能与物理计算的结合（Physical AI），重点关注 AI for PDEs 与计算固体力学。曾在微软研究院 AI for Science 从事研究助理工作，并赴德国魏玛包豪斯大学访问研究。研究涉及物理信息神经网络、算子学习与深度能量方法，相关成果发表于 Applied Mechanics Reviews、Nature Communications、JMPS、CMAME 等期刊，参与编写科学机器学习英文专著。",
      homepage: "https://yizheng-wang.github.io/"
    },
    null,
    null
  ]
};

// English copy shares the same confirmed people, assets, links, and session
// state. When adding a session or member, maintain its English entry here too.
(() => {
  if (window.I18N.language !== "en") return;
  const content = window.SEMINAR_CONTENT;
  const seminars = {
    "001": {
      title: "Starting with a real scientific question",
      description: "How do you frame the problem, choose the method, and validate the result? An inside look at making research work.",
      status: "In preparation", topicNote: "First session · Proposed topic",
      detail: "The proposed first session starts with a real scientific question and follows the decisions behind the research: defining the problem, preparing data, choosing methods, and validating results. We hope to discuss what worked, the detours along the way, and the limits of the approach, so participants leave with ideas they can use in their own research. The final title and abstract will be announced once the speaker is confirmed.",
      takeaways: [
        { title: "How do you frame the problem?", text: "How a scientific need becomes a testable research question, with a clear task, data, and evaluation criteria." },
        { title: "How do you choose the method?", text: "Decisions about models, baselines, and experiments: the details that mattered and the attempts that did not work." },
        { title: "What can you do with the result?", text: "How to validate practical performance, identify the limits, and decide what is worth doing next." }
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
    }
  };
  content.founder.name = "Bin Cao";
  content.seminars = content.seminars.map((item) => ({ ...item, ...seminars[item.id] }));
  content.committee = content.committee.map((item) => item && ({ ...item, ...committee[item.id] }));
  content.acknowledgements = content.acknowledgements.map((item) => ({ ...item, name: item.englishName }));
})();
