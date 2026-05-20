export interface MBTIOption {
  text: string;
  textEn: string;
  scores: Partial<Record<string, number>>;
}

export interface MBTIQuestion {
  id: number;
  text: string;
  textEn: string;
  options: MBTIOption[];
}

export interface MBTITypeInfo {
  code: string;
  name: string;
  nameEn: string;
  nickname: string;
  emoji: string;
  description: string;
  descriptionEn: string;
  category: string;
  categoryEn: string;
  categoryZh: string;
  strengths: string[];
  strengthsEn: string[];
  weaknesses: string[];
  weaknessesEn: string[];
  careers: string[];
  careersEn: string[];
  relationships: string;
  relationshipsEn: string;
}

export const mbtiQuestions: MBTIQuestion[] = [
  {
    id: 1,
    text: "参加聚会时，你通常会",
    textEn: "At a party, you usually",
    options: [
      { text: "主动和很多人打招呼聊天", textEn: "Initiate conversations with many people", scores: { E: 1 } },
      { text: "和少数几个熟悉的人深入交流", textEn: "Have deep talks with a few familiar faces", scores: { I: 1 } },
    ],
  },
  {
    id: 2,
    text: "做重要决定时，你更相信",
    textEn: "When making an important decision, you trust more",
    options: [
      { text: "过往的经验和确凿的数据", textEn: "Past experience and solid data", scores: { S: 1 } },
      { text: "直觉和内心的预感", textEn: "Intuition and gut feelings", scores: { N: 1 } },
    ],
  },
  {
    id: 3,
    text: "做决定时，你更看重",
    textEn: "When deciding, you prioritize",
    options: [
      { text: "逻辑一致性和公平原则", textEn: "Logical consistency and fairness", scores: { T: 1 } },
      { text: "个人价值观与人际和谐", textEn: "Personal values and interpersonal harmony", scores: { F: 1 } },
    ],
  },
  {
    id: 4,
    text: "面对一个即将到来的项目，你倾向于",
    textEn: "Facing an upcoming project, you tend to",
    options: [
      { text: "提前制定详细的计划并按部就班", textEn: "Make a detailed plan early and follow it", scores: { J: 1 } },
      { text: "保持灵活，根据进展随时调整", textEn: "Stay flexible and adapt as you go", scores: { P: 1 } },
    ],
  },
  {
    id: 5,
    text: "学习新技能时，你更喜欢",
    textEn: "When learning a new skill, you prefer",
    options: [
      { text: "按步骤一步步练习，掌握细节", textEn: "Step-by-step practice, mastering the details", scores: { S: 1 } },
      { text: "先理解整体框架和背后的原理", textEn: "Understanding the big picture and principles first", scores: { N: 1 } },
    ],
  },
  {
    id: 6,
    text: "面对团队中的冲突，你首先会",
    textEn: "When facing conflict in a team, you first",
    options: [
      { text: "分析问题根源，找出理性解决方案", textEn: "Analyze the root cause and find a rational solution", scores: { T: 1 } },
      { text: "关注每个人的感受，努力修复关系", textEn: "Pay attention to everyone's feelings and mend relationships", scores: { F: 1 } },
    ],
  },
  {
    id: 7,
    text: "你的工作空间通常是",
    textEn: "Your workspace is usually",
    options: [
      { text: "整洁有序，东西放在固定位置", textEn: "Neat and organized, everything in its place", scores: { J: 1 } },
      { text: "随意摆放，但你能找到需要的东西", textEn: "Casually arranged, but you can find what you need", scores: { P: 1 } },
    ],
  },
  {
    id: 8,
    text: "忙碌一周后，你恢复精力的最佳方式是",
    textEn: "After a busy week, the best way to recharge is",
    options: [
      { text: "约朋友出去聚会或参加活动", textEn: "Going out with friends or attending events", scores: { E: 1 } },
      { text: "独自在家看书、看电影或安静思考", textEn: "Staying home alone reading, watching movies, or reflecting", scores: { I: 1 } },
    ],
  },
  {
    id: 9,
    text: "给别人提意见时，你倾向于",
    textEn: "When giving feedback, you tend to be",
    options: [
      { text: "直截了当指出问题，不绕弯子", textEn: "Direct and straightforward about the issues", scores: { T: 1 } },
      { text: "先肯定优点，委婉地提出改进建议", textEn: "Start with positives, then gently suggest improvements", scores: { F: 1 } },
    ],
  },
  {
    id: 10,
    text: "对于截止日期，你的感受是",
    textEn: "Regarding deadlines, you feel they are",
    options: [
      { text: "必要的约束，能帮助你高效完成工作", textEn: "Necessary structure that helps you work efficiently", scores: { J: 1 } },
      { text: "一种压力来源，限制了你的创造力", textEn: "A source of stress that limits your creativity", scores: { P: 1 } },
    ],
  },
  {
    id: 11,
    text: "完成一个项目时，你更喜欢",
    textEn: "When working on a project, you prefer",
    options: [
      { text: "和团队一起头脑风暴，碰撞想法", textEn: "Brainstorming with the team, bouncing ideas around", scores: { E: 1 } },
      { text: "独自深入思考，再与他人分享成果", textEn: "Thinking deeply alone first, then sharing the results", scores: { I: 1 } },
    ],
  },
  {
    id: 12,
    text: "你对什么更感兴趣",
    textEn: "You are more interested in",
    options: [
      { text: "当下实际可用的方法和工具", textEn: "Practical methods and tools that work right now", scores: { S: 1 } },
      { text: "未来的可能性和创新的理念", textEn: "Future possibilities and innovative ideas", scores: { N: 1 } },
    ],
  },
  {
    id: 13,
    text: "处理多个任务时，你倾向于",
    textEn: "When handling multiple tasks, you tend to",
    options: [
      { text: "完成一个再开始下一个", textEn: "Finish one before starting the next", scores: { J: 1 } },
      { text: "多个任务同时推进，自由切换", textEn: "Work on several simultaneously, switching freely", scores: { P: 1 } },
    ],
  },
  {
    id: 14,
    text: "在社交场合遇到陌生人时，你通常",
    textEn: "When meeting strangers in social settings, you usually",
    options: [
      { text: "主动上前攀谈，认识新朋友让你兴奋", textEn: "Approach and strike up conversations, meeting new people excites you", scores: { E: 1 } },
      { text: "等待对方先开口，保持礼貌的距离", textEn: "Wait for the other person to initiate, maintaining polite distance", scores: { I: 1 } },
    ],
  },
  {
    id: 15,
    text: "解决问题时，你的思路更偏向",
    textEn: "When solving problems, your approach leans toward",
    options: [
      { text: "参考已验证的方案和过往的经验", textEn: "Referencing proven solutions and past experience", scores: { S: 1 } },
      { text: "跳出框架思考全新的可能性", textEn: "Thinking outside the box for new possibilities", scores: { N: 1 } },
    ],
  },
  {
    id: 16,
    text: "你认为一个正确的决定应该建立在",
    textEn: "You believe a good decision should be based on",
    options: [
      { text: "客观事实和理性分析之上", textEn: "Objective facts and rational analysis", scores: { T: 1 } },
      { text: "对相关人员的关怀和理解之上", textEn: "Care and understanding for the people involved", scores: { F: 1 } },
    ],
  },
  {
    id: 17,
    text: "你的理想周末是",
    textEn: "Your ideal weekend involves",
    options: [
      { text: "和朋友聚会、参加社交活动", textEn: "Gathering with friends and attending social events", scores: { E: 1 } },
      { text: "独处充电、做自己喜欢的事情", textEn: "Recharging alone, doing things you enjoy", scores: { I: 1 } },
    ],
  },
  {
    id: 18,
    text: "在日常观察中，你更容易注意到",
    textEn: "In daily observation, you more easily notice",
    options: [
      { text: "具体的细节和眼前的变化", textEn: "Specific details and immediate changes", scores: { S: 1 } },
      { text: "整体的模式和潜在的联系", textEn: "Overall patterns and underlying connections", scores: { N: 1 } },
    ],
  },
  {
    id: 19,
    text: "朋友向你倾诉烦恼时，你首先会",
    textEn: "When a friend shares their troubles, you first",
    options: [
      { text: "分析问题，帮忙想解决办法", textEn: "Analyze the problem and help find solutions", scores: { T: 1 } },
      { text: "表达理解，给予情感上的支持", textEn: "Express understanding and offer emotional support", scores: { F: 1 } },
    ],
  },
  {
    id: 20,
    text: "旅行时，你更喜欢",
    textEn: "When traveling, you prefer",
    options: [
      { text: "提前做好详细攻略，按计划执行", textEn: "A detailed itinerary planned in advance", scores: { J: 1 } },
      { text: "只定大方向，走到哪玩到哪", textEn: "A loose direction, exploring spontaneously", scores: { P: 1 } },
    ],
  },
  {
    id: 21,
    text: "在一场激烈的讨论中，你最看重",
    textEn: "In a heated discussion, you value most",
    options: [
      { text: "论点的逻辑严密性和证据的可靠性", textEn: "Logical rigor of arguments and reliability of evidence", scores: { T: 1 } },
      { text: "讨论的氛围和各方的感受", textEn: "The atmosphere of the discussion and everyone's feelings", scores: { F: 1 } },
    ],
  },
  {
    id: 22,
    text: "你做决定的方式更接近",
    textEn: "Your decision-making style is closer to",
    options: [
      { text: "快速判断，选定就执行", textEn: "Judging quickly, then executing", scores: { J: 1 } },
      { text: "充分收集信息，尽量推迟决策", textEn: "Gathering full information, deferring the decision", scores: { P: 1 } },
    ],
  },
  {
    id: 23,
    text: "参加一个全是陌生人的活动，你",
    textEn: "At an event full of strangers, you",
    options: [
      { text: "感到兴奋，期待认识新朋友", textEn: "Feel excited, looking forward to meeting new people", scores: { E: 1 } },
      { text: "感到些许不自在，需要时间适应", textEn: "Feel a bit uncomfortable, need time to adjust", scores: { I: 1 } },
    ],
  },
  {
    id: 24,
    text: "和朋友聊天时，你更喜欢讨论",
    textEn: "When chatting with friends, you prefer discussing",
    options: [
      { text: "生活中实际发生的事和共同的经历", textEn: "Actual events in life and shared experiences", scores: { S: 1 } },
      { text: "抽象的概念、未来的设想和哲学话题", textEn: "Abstract concepts, future visions, and philosophical topics", scores: { N: 1 } },
    ],
  },
  {
    id: 25,
    text: "阅读时，你更偏爱",
    textEn: "When reading, you prefer",
    options: [
      { text: "纪实类、实用类或数据驱动的内容", textEn: "Non-fiction, practical, or data-driven content", scores: { S: 1 } },
      { text: "小说、诗歌或充满想象力的作品", textEn: "Fiction, poetry, or imaginative works", scores: { N: 1 } },
    ],
  },
  {
    id: 26,
    text: "对于规则和流程，你的态度是",
    textEn: "Regarding rules and procedures, your attitude is",
    options: [
      { text: "应该认真遵守，它们是秩序的保障", textEn: "They should be followed carefully, they ensure order", scores: { J: 1 } },
      { text: "可以作为参考，但不必过于死板", textEn: "They can serve as guidelines, but shouldn't be rigid", scores: { P: 1 } },
    ],
  },
  {
    id: 27,
    text: "在人际关系方面，你倾向于",
    textEn: "In terms of relationships, you tend to",
    options: [
      { text: "拥有广泛的社交圈，认识很多人", textEn: "Have a wide social circle, knowing many people", scores: { E: 1 } },
      { text: "有几个深交的挚友，关系紧密", textEn: "Have a few deep, close friendships", scores: { I: 1 } },
    ],
  },
  {
    id: 28,
    text: "你会如何描述自己",
    textEn: "How would you describe yourself",
    options: [
      { text: "理性冷静，善于分析", textEn: "Rational and calm, good at analysis", scores: { T: 1 } },
      { text: "善解人意，富有同情心", textEn: "Empathetic and compassionate", scores: { F: 1 } },
    ],
  },
  {
    id: 29,
    text: "你感到最舒适的状态是",
    textEn: "You feel most comfortable when",
    options: [
      { text: "事情都有了明确的安排和结论", textEn: "Things are clearly arranged and settled", scores: { J: 1 } },
      { text: "一切保持开放，可以随时调整", textEn: "Everything stays open and can be adjusted anytime", scores: { P: 1 } },
    ],
  },
  {
    id: 30,
    text: "你更尊重哪种品质",
    textEn: "Which quality do you respect more",
    options: [
      { text: "理性客观和追求真理的精神", textEn: "Rational objectivity and the pursuit of truth", scores: { T: 1 } },
      { text: "善解人意和温暖包容的态度", textEn: "Empathy and a warm, accepting attitude", scores: { F: 1 } },
    ],
  },
  {
    id: 31,
    text: "描述一件事情时，你更偏向",
    textEn: "When describing something, you lean toward",
    options: [
      { text: "具体、准确地陈述事实经过", textEn: "Stating the facts concretely and accurately", scores: { S: 1 } },
      { text: "表达整体感受和这件事的意义", textEn: "Expressing the overall feeling and what it means", scores: { N: 1 } },
    ],
  },
  {
    id: 32,
    text: "思考问题时，你更倾向于",
    textEn: "When thinking through problems, you tend to",
    options: [
      { text: "说出来和人讨论，边说边理清思路", textEn: "Talk it out with others, clarifying as you speak", scores: { E: 1 } },
      { text: "在心里反复琢磨，想清楚了再开口", textEn: "Reflect internally, speaking only after you've figured it out", scores: { I: 1 } },
    ],
  },
];

export const mbtiTypes: Record<string, MBTITypeInfo> = {
  INTJ: {
    code: "INTJ",
    name: "建筑师",
    nameEn: "Architect",
    nickname: "The Architect",
    emoji: "🏛️",
    category: "Analysts",
    categoryEn: "Analysts",
    categoryZh: "分析师",
    description:
      "INTJ型人格是富有战略眼光的思考者，对知识和能力有着永不满足的追求。他们擅长制定长远规划，并能够坚定地执行。对复杂系统有着天生的理解力，总能洞察事物背后的本质规律。他们独立自信，不盲从权威，始终基于理性分析做出判断。虽然外表冷静，但内心对理想充满热情。在追求目标的过程中展现出惊人的毅力和专注。",
    descriptionEn:
      "INTJs are strategic thinkers with an unquenchable thirst for knowledge and competence. They excel at crafting long-term plans and executing them with unwavering determination. With a natural grasp of complex systems, they consistently discern the underlying principles behind phenomena. Independent and self-assured, they refuse to follow authority blindly and always base their judgments on rational analysis. Though outwardly reserved, they harbor intense passion for their ideals. They demonstrate remarkable perseverance and focus in pursuing their goals.",
    strengths: ["战略思维卓越，善于制定长远规划", "独立思考，不盲从主流观点", "高效自律，执行能力极强", "对复杂问题有深刻的洞察力"],
    strengthsEn: [
      "Exceptional strategic thinking, skilled at long-term planning",
      "Independent thinking, never blindly follows the crowd",
      "Highly disciplined with outstanding execution",
      "Deep insight into complex problems",
    ],
    weaknesses: ["有时过于追求完美，对自己和他人要求过高", "情感表达较为内敛，可能显得冷漠", "不太擅长处理琐碎的社交礼节", "容易忽视他人的情感需求"],
    weaknessesEn: [
      "Sometimes too perfectionistic, setting excessively high standards",
      "Reserved in emotional expression, may appear cold",
      "Not adept at handling trivial social niceties",
      "May overlook others' emotional needs",
    ],
    careers: ["战略顾问 / 管理咨询师", "科学家 / 研究员", "软件架构师 / 系统设计师", "投资分析师 / 金融工程师"],
    careersEn: [
      "Strategy Consultant / Management Consultant",
      "Scientist / Researcher",
      "Software Architect / Systems Designer",
      "Investment Analyst / Financial Engineer",
    ],
    relationships:
      "INTJ在感情中追求深度而非广度，他们渴望能与伴侣进行智识层面的深度交流。他们忠诚且专注，一旦认定对方就会全力以赴。适合能与他们进行思想碰撞、尊重其独立空间的伴侣类型（如ENFP或ENTP）。",
    relationshipsEn:
      "INTJs seek depth over breadth in relationships, craving intellectual connection with their partners. They are loyal and dedicated, committing fully once they've chosen someone. They thrive with partners who can engage them intellectually and respect their need for independence (such as ENFP or ENTP).",
  },
  INTP: {
    code: "INTP",
    name: "逻辑学家",
    nameEn: "Logician",
    nickname: "The Logician",
    emoji: "🔬",
    category: "Analysts",
    categoryEn: "Analysts",
    categoryZh: "分析师",
    description:
      "INTP型人格是富有创造力的理论家，对知识有着纯粹的渴求。他们热爱探索思想的边界，享受在逻辑世界中自由驰骋。对一切事物抱有好奇心，喜欢拆解问题直到找到根本原理。思维灵活开放，能够同时持有多个相互矛盾的假设而不焦虑。他们重视真理胜过世俗的认可。创新的解决方案往往在他们看似散漫的思考中诞生。",
    descriptionEn:
      "INTPs are inventive theorists with a pure thirst for knowledge. They love exploring the boundaries of ideas and roaming freely in the world of logic. Curious about everything, they enjoy deconstructing problems until they find the fundamental principles. Mentally flexible and open, they can hold multiple contradictory hypotheses simultaneously without anxiety. They value truth above worldly recognition. Innovative solutions often emerge from their seemingly meandering thought processes.",
    strengths: ["极强的逻辑分析和抽象思维能力", "开放好奇，乐于探索新领域", "客观理性，不易被情绪左右", "富有创造力，能提出原创性见解"],
    strengthsEn: [
      "Extremely strong logical analysis and abstract thinking",
      "Open and curious, eager to explore new domains",
      "Objective and rational, not easily swayed by emotions",
      "Creative, capable of producing original insights",
    ],
    weaknesses: ["可能过度沉浸于理论而忽略实际执行", "社交场合可能显得疏离或心不在焉", "对自己的想法过于挑剔，导致拖延", "容易忽视日常生活的细节安排"],
    weaknessesEn: [
      "May get lost in theory while neglecting practical execution",
      "Can appear detached or absent-minded in social settings",
      "Overly critical of their own ideas, leading to procrastination",
      "May overlook mundane details of daily life",
    ],
    careers: ["数学家 / 物理学家 / 理论科学家", "程序员 / AI研究员", "哲学家 / 大学教授", "游戏设计师 / 创意总监"],
    careersEn: [
      "Mathematician / Physicist / Theoretical Scientist",
      "Programmer / AI Researcher",
      "Philosopher / University Professor",
      "Game Designer / Creative Director",
    ],
    relationships:
      "INTP在亲密关系中需要智识上的刺激和足够的个人空间。他们不善于传统的浪漫表达，但会通过深度的交流和思想的分享来表达爱意。最适合能与他们进行智力探险、理解其独处需求的伴侣（如ENTJ或INFJ）。",
    relationshipsEn:
      "INTPs need intellectual stimulation and ample personal space in intimate relationships. They may not excel at traditional romantic gestures, but express love through deep conversations and the sharing of ideas. They are best matched with partners who can join their intellectual adventures and understand their need for solitude (such as ENTJ or INFJ).",
  },
  ENTJ: {
    code: "ENTJ",
    name: "指挥官",
    nameEn: "Commander",
    nickname: "The Commander",
    emoji: "👔",
    category: "Analysts",
    categoryEn: "Analysts",
    categoryZh: "分析师",
    description:
      "ENTJ型人格是天生的领导者，拥有卓越的组织能力和战略眼光。他们自信果断，在混乱中能迅速找到方向并带领团队前进。对效率有着近乎偏执的追求，无法容忍无能和拖延。善于激励他人，愿意分享权力并培养团队成员的潜力。面对挑战时愈战愈勇，将困难视为证明自己的机会。意志坚定，一旦确立目标便势不可挡。",
    descriptionEn:
      "ENTJs are natural-born leaders with exceptional organizational abilities and strategic vision. Confident and decisive, they can quickly find direction in chaos and lead their teams forward. They have an almost obsessive pursuit of efficiency and cannot tolerate incompetence or procrastination. Skilled at motivating others, they willingly share power and develop team members' potential. They thrive on challenges, viewing obstacles as opportunities to prove themselves. Strong-willed and unstoppable once a goal is set.",
    strengths: ["卓越的领导才能和战略规划能力", "自信果断，能够在压力下快速决策", "善于激励和组织团队", "目标导向，执行力极强"],
    strengthsEn: [
      "Outstanding leadership and strategic planning skills",
      "Confident and decisive, makes quick decisions under pressure",
      "Skilled at motivating and organizing teams",
      "Goal-oriented with formidable execution ability",
    ],
    weaknesses: ["可能显得过于强势和控制欲强", "对情绪感受的关注不足", "缺乏耐心，对效率低下容忍度低", "有时过于目标导向而忽视过程"],
    weaknessesEn: [
      "May appear domineering and overly controlling",
      "Insufficient attention to emotional dynamics",
      "Impatient with low tolerance for inefficiency",
      "Sometimes too goal-focused, neglecting the process",
    ],
    careers: ["企业高管 / CEO / 创业者", "政治领袖 / 政府官员", "军事指挥官 / 战略规划师", "律师事务所合伙人 / 大法官"],
    careersEn: [
      "Corporate Executive / CEO / Entrepreneur",
      "Political Leader / Government Official",
      "Military Commander / Strategic Planner",
      "Law Firm Partner / Judge",
    ],
    relationships:
      "ENTJ在感情中像经营事业一样认真，注重伴侣的成长和双方共同的未来。他们直率坦诚，不喜欢猜谜游戏。需要一个能与他们并肩作战、不被其强势外表吓退的伴侣。最佳匹配是能与他们产生智识共鸣的类型（如INTP或INFP）。",
    relationshipsEn:
      "ENTJs approach relationships with the same seriousness as their career, focusing on their partner's growth and a shared future. They are direct and honest, disliking guessing games. They need a partner who can stand beside them and not be intimidated by their strong exterior. Best matches are types that can resonate with them intellectually (such as INTP or INFP).",
  },
  ENTP: {
    code: "ENTP",
    name: "辩论家",
    nameEn: "Debater",
    nickname: "The Debater",
    emoji: "💡",
    category: "Analysts",
    categoryEn: "Analysts",
    categoryZh: "分析师",
    description:
      "ENTP型人格是敏捷的智识探险家，喜欢在思想的战场上驰骋。他们思维活跃，能够快速连接看似无关的概念，产生令人惊叹的洞见。热爱辩论，但并非为了赢，而是为了探索真理的不同面向。对新鲜事物永远保持好奇，天生的创业者和创新者。他们的脑中同时运行着无数想法，并乐于将其付诸实验。机智幽默的谈吐让他们在社交场合如鱼得水。",
    descriptionEn:
      "ENTPs are agile intellectual explorers who love roaming the battlefield of ideas. Their minds are highly active, capable of connecting seemingly unrelated concepts to produce astonishing insights. They enjoy debate not to win but to explore different facets of truth. Eternally curious about new things, they are natural entrepreneurs and innovators. Countless ideas run simultaneously in their minds, and they eagerly put them to the test. Their witty humor makes them thrive in social settings.",
    strengths: ["思维敏捷，善于快速学习和适应", "创新力强，点子多且敢于尝试", "口才出众，辩论和说服能力强", "对复杂问题有独特的洞察角度"],
    strengthsEn: [
      "Quick-thinking, adept at rapid learning and adaptation",
      "Highly innovative with abundant ideas and willingness to experiment",
      "Eloquent, strong in debate and persuasion",
      "Unique insight on complex problems",
    ],
    weaknesses: ["可能对长期项目缺乏耐心和持续性", "有时为了辩论而辩论，忽略他人感受", "容易分心，对重复性工作感到厌倦", "可能过于冒险而忽视潜在风险"],
    weaknessesEn: [
      "May lack patience and follow-through on long-term projects",
      "Sometimes debates for the sake of it, ignoring others' feelings",
      "Easily distracted, bored by repetitive tasks",
      "May take excessive risks while overlooking potential dangers",
    ],
    careers: ["创业者 / 企业家", "律师 / 诉讼律师", "产品经理 / 创新顾问", "记者 / 政治评论员"],
    careersEn: [
      "Entrepreneur / Founder",
      "Lawyer / Litigator",
      "Product Manager / Innovation Consultant",
      "Journalist / Political Commentator",
    ],
    relationships:
      "ENTP在感情中追求智识的碰撞和不断的成长。他们需要能跟上其思维速度和广度的伴侣，欣赏挑战而非顺从。好奇心也延伸到亲密关系中，喜欢和伴侣一起探索新事物。最佳伴侣是能给予他们智力刺激又不会被其强势辩论风格压倒的类型（如INFJ或INTJ）。",
    relationshipsEn:
      "ENTPs seek intellectual stimulation and continuous growth in relationships. They need partners who can keep up with their mental speed and breadth, appreciating challenge rather than compliance. Their curiosity extends to intimate relationships, enjoying exploring new things together. Best matches are types who provide intellectual stimulation without being overwhelmed by their assertive debating style (such as INFJ or INTJ).",
  },
  INFJ: {
    code: "INFJ",
    name: "提倡者",
    nameEn: "Advocate",
    nickname: "The Advocate",
    emoji: "🌿",
    category: "Diplomats",
    categoryEn: "Diplomats",
    categoryZh: "外交官",
    description:
      "INFJ型人格是稀有而深刻的思想者，兼有洞察力和同理心。他们能敏锐地感知他人的情感和需求，常常在被说出来之前就已经理解。怀有强烈的理想主义，渴望让世界变得更美好。拥有非凡的直觉，能够预见事态的发展和人们的潜能。在安静的外表下，蕴藏着坚定不移的信念和热情。他们是天生的心灵导师，用温柔而有力的方式引导他人成长。",
    descriptionEn:
      "INFJs are rare and profound thinkers, combining insight with deep empathy. They keenly perceive others' emotions and needs, often understanding before anything is said. They harbor strong idealism and a desire to make the world better. With extraordinary intuition, they foresee developments and recognize people's potential. Beneath their quiet exterior lies unwavering conviction and passion. They are natural mentors of the soul, guiding others' growth with gentle yet powerful presence.",
    strengths: ["深刻的同理心和洞察力", "强烈的理想主义和使命感", "善于帮助他人发掘自身潜力", "具备出色的创造力和直觉判断"],
    strengthsEn: [
      "Deep empathy and penetrating insight",
      "Strong idealism and sense of purpose",
      "Skilled at helping others unlock their potential",
      "Excellent creativity and intuitive judgment",
    ],
    weaknesses: ["对批评和冲突高度敏感", "容易过度付出而导致心力交瘁", "有时过于理想化，不切实际", "倾向于隐藏真实的自我和需求"],
    weaknessesEn: [
      "Highly sensitive to criticism and conflict",
      "Prone to burnout from over-giving",
      "Sometimes overly idealistic and impractical",
      "Tendency to hide their true self and needs",
    ],
    careers: ["心理咨询师 / 治疗师", "作家 / 编辑", "人力资源管理 / 组织发展顾问", "非营利组织负责人 / 社会工作者"],
    careersEn: [
      "Psychologist / Therapist",
      "Writer / Editor",
      "HR Manager / Organizational Development Consultant",
      "Nonprofit Leader / Social Worker",
    ],
    relationships:
      "INFJ将亲密关系视为灵魂层面的连接，追求深度与真诚。他们愿意为所爱之人付出一切，但也需要对方能理解其丰富的内心世界。直觉让他们能惊人地理解伴侣的需求。最适合能与他们分享理想、深入交流心灵的类型（如ENTP或ENFP）。",
    relationshipsEn:
      "INFJs view intimate relationships as soul-level connections, pursuing depth and authenticity. They are willing to give everything for their loved ones, but also need partners who understand their rich inner world. Their intuition allows them to grasp their partner's needs astonishingly well. Best matched with types who can share their ideals and engage in deep heart-to-heart conversations (such as ENTP or ENFP).",
  },
  INFP: {
    code: "INFP",
    name: "调停者",
    nameEn: "Mediator",
    nickname: "The Mediator",
    emoji: "🦋",
    category: "Diplomats",
    categoryEn: "Diplomats",
    categoryZh: "外交官",
    description:
      "INFP型人格是理想主义的梦想家，内心世界丰富多彩。他们遵循内心强烈的价值体系行事，追求真实和意义。对他人的痛苦和喜悦感同身受，是天生的治愈者。丰富的想象力和创造力使他们在艺术和文学领域有出色表现。外表安静温和，内心却有着不可动摇的原则。他们用诗意的眼光看世界，在平凡中发现美。",
    descriptionEn:
      "INFPs are idealistic dreamers with a rich and colorful inner world. They act according to a strong internal value system, pursuing authenticity and meaning. They feel others' pain and joy as their own, making them natural healers. Their abundant imagination and creativity enable outstanding performance in arts and literature. Quiet and gentle on the outside, they hold unshakeable principles within. They view the world through poetic eyes, finding beauty in the ordinary.",
    strengths: ["极其富有创造力和想象力", "忠于内心的价值观和信念", "善解人意，对他人的感受敏锐", "开放包容，接纳不同的观点和生活方式"],
    strengthsEn: [
      "Extremely creative and imaginative",
      "Loyal to inner values and convictions",
      "Empathetic and sensitive to others' feelings",
      "Open and accepting of different perspectives and lifestyles",
    ],
    weaknesses: ["容易陷入理想主义而难以面对现实", "对批评过于敏感，容易自我怀疑", "有时过于沉浸在内心世界而忽视外部事务", "做决定时犹豫不决"],
    weaknessesEn: [
      "May get trapped in idealism and struggle with reality",
      "Overly sensitive to criticism, prone to self-doubt",
      "Sometimes too immersed in inner world, neglecting external matters",
      "Indecisive when making decisions",
    ],
    careers: ["作家 / 诗人 / 艺术创作者", "心理咨询师 / 艺术治疗师", "用户体验设计师 / 人文学科教师", "非营利组织工作者 / 人道主义者"],
    careersEn: [
      "Writer / Poet / Artist",
      "Therapist / Art Therapist",
      "UX Designer / Humanities Teacher",
      "Nonprofit Worker / Humanitarian",
    ],
    relationships:
      "INFP追求浪漫而深刻的感情，将伴侣视为灵魂伴侣。他们全心投入，期望建立深层的心灵连接。对爱极为真诚和忠诚，但需要伴侣理解其丰富而复杂的内心世界。与能欣赏他们的深度并给予温柔支持的伴侣最为匹配（如ENFJ或ESTJ）。",
    relationshipsEn:
      "INFPs pursue romantic and profound love, viewing their partner as a soulmate. They invest their whole heart, seeking deep spiritual connection. Extremely sincere and loyal in love, they need partners who understand their rich and complex inner world. Best matched with those who appreciate their depth and offer gentle support (such as ENFJ or ESTJ).",
  },
  ENFJ: {
    code: "ENFJ",
    name: "主人公",
    nameEn: "Protagonist",
    nickname: "The Protagonist",
    emoji: "🌟",
    category: "Diplomats",
    categoryEn: "Diplomats",
    categoryZh: "外交官",
    description:
      "ENFJ型人格是充满魅力的领导者，拥有非凡的激励他人的能力。他们天生能够理解他人的需求，并热心地帮助他人实现成长。社交场合中的润滑剂，能够凝聚团队、化解矛盾。对自己的信念充满激情，并用感染力带动周围的人。具有极强的组织能力和社交智慧，在人群中自然而然地成为核心。他们的理想主义带有实践的力量，不只是梦想，更善于落地。",
    descriptionEn:
      "ENFJs are charismatic leaders with an extraordinary ability to inspire others. They naturally understand people's needs and eagerly help others achieve growth. As social catalysts, they unite teams and resolve conflicts. Passionate about their beliefs, they move others with their infectious energy. With strong organizational skills and social intelligence, they naturally become the center of any group. Their idealism carries practical force — they don't just dream, they excel at execution.",
    strengths: ["卓越的沟通和激励能力", "强大的共情力，善于理解他人", "天生的组织者和领导者", "乐观积极，能带动团队士气"],
    strengthsEn: [
      "Excellent communication and motivational skills",
      "Strong empathy, adept at understanding others",
      "Natural organizer and leader",
      "Optimistic and positive, boosts team morale",
    ],
    weaknesses: ["可能过于关注他人而忽略自身需求", "对和谐过度追求，难以处理冲突", "有时会过度理想化他人", "做决定时可能过于考虑他人感受而犹豫"],
    weaknessesEn: [
      "May focus too much on others while neglecting own needs",
      "Excessive pursuit of harmony, struggles with conflict",
      "Sometimes overly idealizes others",
      "May hesitate in decisions due to excessive consideration of others' feelings",
    ],
    careers: ["教师 / 教育管理者", "企业培训师 / 组织发展专家", "政治家 / 外交官", "品牌经理 / 公关总监"],
    careersEn: [
      "Teacher / Education Administrator",
      "Corporate Trainer / Organizational Development Expert",
      "Politician / Diplomat",
      "Brand Manager / PR Director",
    ],
    relationships:
      "ENFJ在关系中投入大量精力，喜欢照顾和支持伴侣。他们需要被需要的感觉，会努力成为对方的依靠。热烈而浪漫，但偶尔需要提醒自己也要接受对方的爱。最佳伴侣是能欣赏他们付出并回馈同等真诚的类型（如INFP或ISFP）。",
    relationshipsEn:
      "ENFJs invest tremendous energy in relationships, loving to care for and support their partners. They need to feel needed and work hard to be their partner's pillar. Warm and romantic, though they occasionally need reminders to receive love as well. Best matched with types who appreciate their devotion and reciprocate with equal sincerity (such as INFP or ISFP).",
  },
  ENFP: {
    code: "ENFP",
    name: "竞选者",
    nameEn: "Campaigner",
    nickname: "The Campaigner",
    emoji: "🎭",
    category: "Diplomats",
    categoryEn: "Diplomats",
    categoryZh: "外交官",
    description:
      "ENFP型人格是充满热情的自由灵魂，对生活有着永不枯竭的热爱。他们善于发现每个人身上的闪光点，并用热情感染周围的人。好奇心旺盛，对新体验和新想法来者不拒。拥有丰富的想象力和出色的社交技巧，能轻松地与各种人建立连接。追求人生的意义和可能性，不愿被常规束缚。他们用乐观和创造力为平凡的日常注入活力。",
    descriptionEn:
      "ENFPs are passionate free spirits with an inexhaustible love for life. They excel at discovering the best in everyone and infecting those around them with their enthusiasm. Highly curious, they welcome all new experiences and ideas. With rich imagination and excellent social skills, they effortlessly connect with people of all kinds. They pursue meaning and possibility in life, unwilling to be bound by convention. Their optimism and creativity inject vitality into ordinary daily life.",
    strengths: ["热情洋溢，善于感染和激励他人", "极强的创造力和想象力", "社交高手，容易建立深厚的人际关系", "开放乐观，乐于拥抱变化和新事物"],
    strengthsEn: [
      "Effervescent, skilled at inspiring and motivating others",
      "Extremely strong creativity and imagination",
      "Social virtuoso, easily builds deep relationships",
      "Open and optimistic, embraces change and new things",
    ],
    weaknesses: ["容易对重复性工作失去兴趣", "有时过于乐观而低估困难", "可能在一件事上难以保持长期专注", "过于在意他人看法，害怕被误解"],
    weaknessesEn: [
      "Easily loses interest in repetitive tasks",
      "Sometimes overly optimistic, underestimating difficulties",
      "May struggle with sustained focus on one thing",
      "Overly concerned with others' opinions, fears being misunderstood",
    ],
    careers: ["记者 / 内容创作者", "演员 / 表演艺术家", "市场策划 / 品牌创意总监", "教师 / 青少年辅导员"],
    careersEn: [
      "Journalist / Content Creator",
      "Actor / Performing Artist",
      "Marketing Strategist / Creative Director",
      "Teacher / Youth Counselor",
    ],
    relationships:
      "ENFP将爱情视为一场伟大的冒险，需要足够的激情和深度来保持兴趣。他们是浪漫的理想主义者，追求灵魂深处的共鸣。真诚热情，但也需要伴侣尊重其自由和独立性。与能理解他们丰富情感世界的类型最为匹配（如INFJ或INTJ）。",
    relationshipsEn:
      "ENFPs view love as a grand adventure, needing enough passion and depth to maintain interest. They are romantic idealists seeking deep soul resonance. Genuine and warm, they also need partners who respect their freedom and independence. Best matched with types who understand their rich emotional world (such as INFJ or INTJ).",
  },
  ISTJ: {
    code: "ISTJ",
    name: "物流师",
    nameEn: "Logistician",
    nickname: "The Logistician",
    emoji: "📋",
    category: "Sentinels",
    categoryEn: "Sentinels",
    categoryZh: "守护者",
    description:
      "ISTJ型人格是可靠的务实主义者，以正直和严谨为人称道。他们做事有条不紊，重视事实和数据，不轻易下没有根据的结论。承诺对他们来说是神圣的，一旦答应就会负责到底。注重传统和规则，是稳定的秩序维护者。安静而坚定，用行动而非言语证明自己的价值。在他们身上，你总能找到可靠、诚信和一丝不苟的职业精神。",
    descriptionEn:
      "ISTJs are reliable pragmatists, admired for their integrity and thoroughness. They work methodically, value facts and data, and never jump to unfounded conclusions. A promise is sacred to them — once committed, they see it through to the end. They respect tradition and rules, serving as steady guardians of order. Quiet yet steadfast, they prove their worth through actions rather than words. In them, you will always find reliability, integrity, and meticulous professionalism.",
    strengths: ["极其可靠，承诺的事情一定会做到", "做事严谨细致，注重准确性", "逻辑清晰，善于组织和规划", "有耐心，能坚持完成长期任务"],
    strengthsEn: [
      "Extremely reliable, always delivers on promises",
      "Thorough and meticulous, values accuracy",
      "Clear logic, skilled at organizing and planning",
      "Patient, able to persist through long-term tasks",
    ],
    weaknesses: ["可能过于固执，难以适应变化", "对新想法和新方法持怀疑态度", "有时过于注重细节而忽略大局", "情感表达较少，可能显得冷漠"],
    weaknessesEn: [
      "May be too rigid, struggling to adapt to change",
      "Skeptical of new ideas and approaches",
      "Sometimes too focused on details, missing the big picture",
      "Reserved emotional expression, may appear cold",
    ],
    careers: ["会计师 / 审计师", "法官 / 律师", "军事人员 / 警察", "数据分析师 / 质量管理人员"],
    careersEn: ["Accountant / Auditor", "Judge / Attorney", "Military Personnel / Police Officer", "Data Analyst / Quality Manager"],
    relationships:
      "ISTJ通过行动而非言语来表达爱意，他们是稳定可靠的伴侣。虽然不擅长甜言蜜语，但会通过默默付出来照顾家庭和伴侣。重视承诺和稳定，适合寻找同样重视传统价值观的伴侣（如ESFP或ESTP）。",
    relationshipsEn:
      "ISTJs express love through actions rather than words — they are stable and reliable partners. Though not adept at sweet talk, they care for their family and partner through quiet dedication. They value commitment and stability, best suited with partners who share traditional values (such as ESFP or ESTP).",
  },
  ISFJ: {
    code: "ISFJ",
    name: "守卫者",
    nameEn: "Defender",
    nickname: "The Defender",
    emoji: "🛡️",
    category: "Sentinels",
    categoryEn: "Sentinels",
    categoryZh: "守护者",
    description:
      "ISFJ型人格是温暖而坚定的守护者，默默奉献是他们的本能。他们对所爱之人有着超乎寻常的奉献精神和保护欲。善于观察和记忆细节，总能在恰当时刻给予他人需要的支持。低调谦逊，不喜欢成为焦点，但他们的贡献是团队不可或缺的基石。拥有出色的实践能力和耐心，能够将爱心转化为实际的行动。传统而可靠，是家庭和社群的坚实后盾。",
    descriptionEn:
      "ISFJs are warm and steadfast defenders for whom quiet devotion is second nature. They have extraordinary dedication to and protectiveness toward their loved ones. Keen observers of details, they always provide needed support at just the right moment. Humble and low-key, they dislike the spotlight, yet their contributions form the indispensable foundation of any team. With excellent practical skills and patience, they transform care into concrete action. Traditional and reliable, they are the solid backbone of family and community.",
    strengths: ["极强的责任心和奉献精神", "细心体贴，善于照顾他人", "务实可靠，做事有始有终", "具有良好的记忆力和组织能力"],
    strengthsEn: [
      "Extraordinary sense of responsibility and dedication",
      "Attentive and caring, skilled at looking after others",
      "Practical and reliable, sees things through to the end",
      "Excellent memory and organizational ability",
    ],
    weaknesses: ["过于谦逊，不善于展示自己的贡献", "难以拒绝他人的请求，容易过度付出", "对变化感到不安，喜欢维持现状", "有时过于敏感，容易受到批评伤害"],
    weaknessesEn: [
      "Overly humble, poor at showcasing their contributions",
      "Struggles to say no, prone to over-giving",
      "Uncomfortable with change, prefers maintaining the status quo",
      "Sometimes overly sensitive, easily hurt by criticism",
    ],
    careers: ["护士 / 医疗保健工作者", "小学教师 / 幼教工作者", "行政助理 / 办公室主任", "社会工作者 / 社区服务人员"],
    careersEn: [
      "Nurse / Healthcare Worker",
      "Elementary Teacher / Early Childhood Educator",
      "Administrative Assistant / Office Manager",
      "Social Worker / Community Service Worker",
    ],
    relationships:
      "ISFJ是最忠诚的伴侣，会用细腻的行动来表达深沉的爱。他们重视家庭和传统，渴望建立稳定长久的亲密关系。需要确认自己是被爱和被需要的，对伴侣的情绪变化非常敏感。与能欣赏其默默付出并给予安全感的人最匹配（如ESTP或ENTP）。",
    relationshipsEn:
      "ISFJs are the most loyal partners, expressing deep love through subtle actions. They value family and tradition, longing for stable, lasting relationships. They need to feel loved and needed, and are very sensitive to their partner's emotional changes. Best matched with those who appreciate their quiet devotion and provide emotional security (such as ESTP or ENTP).",
  },
  ESTJ: {
    code: "ESTJ",
    name: "总经理",
    nameEn: "Executive",
    nickname: "The Executive",
    emoji: "💼",
    category: "Sentinels",
    categoryEn: "Sentinels",
    categoryZh: "守护者",
    description:
      "ESTJ型人格是卓越的管理者，将秩序和效率视为第一要务。他们务实果断，能够快速评估形势并制定可行的行动计划。天生的组织者，善于建立高效的系统并确保规则的落实。重视传统和纪律，在结构化的环境中发挥最佳水平。直率坦诚，沟通风格简洁明了，不拐弯抹角。有强烈的责任感和职业道德，是团队中最可靠的执行力量。",
    descriptionEn:
      "ESTJs are outstanding managers who prioritize order and efficiency above all. Practical and decisive, they quickly assess situations and formulate actionable plans. Natural organizers, they excel at building efficient systems and ensuring rules are followed. They value tradition and discipline, performing at their best in structured environments. Direct and candid, their communication is concise and unambiguous. With a strong sense of duty and work ethic, they are the most reliable execution force on any team.",
    strengths: ["极强的组织和管理能力", "务实果断，执行力出色", "诚实可靠，有强烈的责任感", "善于建立和维护高效的运作系统"],
    strengthsEn: [
      "Exceptional organizational and management skills",
      "Practical and decisive with outstanding execution",
      "Honest and reliable with a strong sense of duty",
      "Skilled at building and maintaining efficient systems",
    ],
    weaknesses: ["可能显得专断和不近人情", "对不确定性和模糊状态的容忍度低", "有时过于坚持己见，难以接受新方法", "不太善于处理情感层面的问题"],
    weaknessesEn: [
      "May appear authoritarian and impersonal",
      "Low tolerance for uncertainty and ambiguity",
      "Sometimes too rigid in their views, resistant to new approaches",
      "Not particularly adept at handling emotional matters",
    ],
    careers: ["企业高管 / 运营总监", "军官 / 执法部门领导", "法官 / 审计官", "学校校长 / 教育管理者"],
    careersEn: [
      "Corporate Executive / Operations Director",
      "Military Officer / Law Enforcement Leader",
      "Judge / Auditor",
      "School Principal / Education Administrator",
    ],
    relationships:
      "ESTJ在感情中同样认真负责，视建立稳定的家庭为人生重要目标。他们表达爱的方式是提供安全感和物质保障。需要伴侣理解并尊重其对秩序和传统的重视。与能欣赏其可靠性并提供温暖情感支持的类型最为契合（如ISFP或INFP）。",
    relationshipsEn:
      "ESTJs are equally serious and responsible in relationships, viewing building a stable family as a key life goal. They express love by providing security and material comfort. They need partners who understand and respect their emphasis on order and tradition. Best matched with types who appreciate their reliability while offering warm emotional support (such as ISFP or INFP).",
  },
  ESFJ: {
    code: "ESFJ",
    name: "执政官",
    nameEn: "Consul",
    nickname: "The Consul",
    emoji: "🤝",
    category: "Sentinels",
    categoryEn: "Sentinels",
    categoryZh: "守护者",
    description:
      "ESFJ型人格是热心肠的社交组织者，关心他人的幸福胜过关心自己。他们极其擅长感知他人的需求，并乐于提供实际的帮助。在社交场合如鱼得水，是维系社区和团队凝聚力的核心力量。注重和谐与协作，总是在努力让每个人都感到被包容和重视。务实且有条理，能够将对他人的关怀转化为具体的行动。传统而忠诚，是家人和朋友最温暖的后盾。",
    descriptionEn:
      "ESFJs are warm-hearted social organizers who care more about others' well-being than their own. They are extraordinarily adept at sensing others' needs and eager to provide practical help. Thriving in social settings, they serve as the core force maintaining community and team cohesion. They value harmony and cooperation, always striving to make everyone feel included and valued. Practical and organized, they can transform care for others into concrete action. Traditional and loyal, they are the warmest support for family and friends.",
    strengths: ["极强的社交能力和人际敏感度", "乐于助人，热心服务他人", "实际可靠，能将关怀落实为行动", "善于营造和谐愉快的团队氛围"],
    strengthsEn: [
      "Exceptional social skills and interpersonal sensitivity",
      "Eager to help, dedicated to serving others",
      "Practical and reliable, turns care into action",
      "Skilled at creating harmonious and pleasant team atmospheres",
    ],
    weaknesses: ["可能过度依赖他人的认可和赞扬", "难以接受批评，对负面反馈敏感", "有时过于关注他人而忽视自身需求", "对冲突和分歧感到不安，可能逃避必要的对抗"],
    weaknessesEn: [
      "May be overly dependent on others' approval and praise",
      "Struggles to accept criticism, sensitive to negative feedback",
      "Sometimes too focused on others, neglecting their own needs",
      "Uncomfortable with conflict and disagreement, may avoid necessary confrontation",
    ],
    careers: ["护士 / 医疗管理员", "教师 / 学校辅导员", "客户关系经理 / 客户成功专员", "社区组织者 / 活动策划人"],
    careersEn: [
      "Nurse / Healthcare Administrator",
      "Teacher / School Counselor",
      "Customer Relations Manager / Customer Success Specialist",
      "Community Organizer / Event Planner",
    ],
    relationships:
      "ESFJ在亲密关系中全心全意地付出，将伴侣的幸福视为自己的责任。他们需要被感激和认可，喜欢用实际的关怀来表达爱。重视家庭传统和共同的社交生活。最适合能与他们共同经营温馨家庭、懂得感恩回报的伴侣（如ISFP或ISTP）。",
    relationshipsEn:
      "ESFJs give their whole heart in intimate relationships, viewing their partner's happiness as their responsibility. They need to feel appreciated and recognized, and love expressing affection through practical care. They value family traditions and shared social life. Best matched with partners who can co-create a warm home and know how to reciprocate gratitude (such as ISFP or ISTP).",
  },
  ISTP: {
    code: "ISTP",
    name: "鉴赏家",
    nameEn: "Virtuoso",
    nickname: "The Virtuoso",
    emoji: "🔧",
    category: "Explorers",
    categoryEn: "Explorers",
    categoryZh: "探险家",
    description:
      "ISTP型人格是冷静的技术大师，喜欢探索事物运作的原理。他们动手能力极强，对机械、工具和技术有着天然的亲和力。在危机中表现沉着，能够快速评估形势并采取有效行动。热爱实践，通过亲身体验而非理论学习来掌握技能。独立自主，不喜束缚，追求自由和灵活的生活方式。他们是沉默的问题解决者，用行动证明一切。",
    descriptionEn:
      "ISTPs are cool-headed technical masters who love exploring how things work. They have exceptional hands-on abilities and a natural affinity for machinery, tools, and technology. Calm in crises, they quickly assess situations and take effective action. They love practice, mastering skills through hands-on experience rather than theoretical learning. Independent and unfettered, they pursue a free and flexible lifestyle. They are silent problem-solvers, proving everything through action.",
    strengths: ["动手能力强，善于解决实际问题", "在危机中保持冷静和理性", "灵活适应，能够快速学习新技术", "务实且高效，不浪费时间在空谈上"],
    strengthsEn: [
      "Strong hands-on skills, adept at solving practical problems",
      "Remains calm and rational in crises",
      "Flexible and adaptable, quickly learns new technologies",
      "Practical and efficient, wastes no time on empty talk",
    ],
    weaknesses: ["可能显得冷漠疏离，不善于表达情感", "缺乏长期规划，可能活在当下过于随性", "不喜欢规则和条条框框", "有时过于独立，难以融入团队合作"],
    weaknessesEn: [
      "May appear cold and detached, not good at expressing emotions",
      "Lacks long-term planning, may live too much in the moment",
      "Dislikes rules and rigid structures",
      "Sometimes overly independent, struggles with teamwork",
    ],
    careers: ["工程师 / 机械师", "飞行员 / 驾驶员", "外科医生 / 急诊医生", "程序员 / 网络安全专家"],
    careersEn: [
      "Engineer / Mechanic",
      "Pilot / Driver",
      "Surgeon / Emergency Physician",
      "Programmer / Cybersecurity Expert",
    ],
    relationships:
      "ISTP在感情中需要大量的自由和个人空间，不喜欢被束缚或控制。他们通过实际行动而非甜言蜜语来展示关心。享受和伴侣一起进行刺激性活动，而非传统的约会模式。最适合能尊重其独立性、不对其施加情感压力的伴侣（如ESTJ或ESFJ）。",
    relationshipsEn:
      "ISTPs need substantial freedom and personal space in relationships, disliking being constrained or controlled. They show care through practical actions rather than sweet words. They enjoy engaging in exciting activities with their partner rather than traditional dating patterns. Best matched with partners who respect their independence without applying emotional pressure (such as ESTJ or ESFJ).",
  },
  ISFP: {
    code: "ISFP",
    name: "探险家",
    nameEn: "Adventurer",
    nickname: "The Adventurer",
    emoji: "🎨",
    category: "Explorers",
    categoryEn: "Explorers",
    categoryZh: "探险家",
    description:
      "ISFP型人格是温柔敏感的艺术家，用审美的眼光体验世界。他们活在当下，享受感官带来的美好体验。拥有独特的审美天赋，能够在平凡中发现非凡的美。对人和动物怀有深切的同情心，喜欢用实际行动而非言语来表达关怀。个性低调随和，但内心有着坚定的价值观和原则。追求真实和自由，不愿被社会的条条框框所定义。",
    descriptionEn:
      "ISFPs are gentle and sensitive artists who experience the world through an aesthetic lens. They live in the moment, savoring the beauty brought by their senses. With a unique aesthetic gift, they discover the extraordinary in the ordinary. They harbor deep compassion for people and animals, preferring to express care through actions rather than words. Low-key and easygoing, yet they hold firm inner values and principles. They pursue authenticity and freedom, unwilling to be defined by society's conventions.",
    strengths: ["出色的审美能力和艺术才华", "温柔善良，对他人充满同情心", "活在当下，善于享受生活的美好", "适应力强，随和且容易相处"],
    strengthsEn: [
      "Outstanding aesthetic sense and artistic talent",
      "Gentle and kind, full of compassion for others",
      "Lives in the moment, good at savoring life's beauty",
      "Adaptable, easygoing, and pleasant to be around",
    ],
    weaknesses: ["可能难以制定和执行长期计划", "过于敏感，容易被他人的情绪影响", "不喜欢冲突，可能回避必要的正面沟通", "有时过于随性，不够有条理"],
    weaknessesEn: [
      "May struggle to make and execute long-term plans",
      "Overly sensitive, easily affected by others' emotions",
      "Dislikes conflict, may avoid necessary direct communication",
      "Sometimes too spontaneous, lacking organization",
    ],
    careers: ["艺术家 / 插画师 / 设计师", "摄影师 / 花艺师", "兽医 / 动物保护工作者", "美容师 / 时尚顾问"],
    careersEn: [
      "Artist / Illustrator / Designer",
      "Photographer / Florist",
      "Veterinarian / Animal Welfare Worker",
      "Beautician / Fashion Consultant",
    ],
    relationships:
      "ISFP在感情中温柔体贴，用细小而美好的行为来表达深藏的爱。他们注重当下的相处体验，喜欢和伴侣一起享受美的事物。需要感受到被欣赏和理解，而不是被改变。最佳伴侣是能欣赏他们独特品味并给予不拘束的温柔空间的人（如ESFJ或ENFJ）。",
    relationshipsEn:
      "ISFPs are gentle and considerate in relationships, expressing deep love through small, beautiful gestures. They value present-moment companionship experiences and enjoy savoring beautiful things with their partner. They need to feel appreciated and understood, not changed. Best matched with those who appreciate their unique taste and offer unrestrictive, gentle space (such as ESFJ or ENFJ).",
  },
  ESTP: {
    code: "ESTP",
    name: "企业家",
    nameEn: "Entrepreneur",
    nickname: "The Entrepreneur",
    emoji: "🚀",
    category: "Explorers",
    categoryEn: "Explorers",
    categoryZh: "探险家",
    description:
      "ESTP型人格是胆识过人的实干家，行动力超群。他们精力充沛，善于抓住机遇，是天生的冒险家。对现实环境有着敏锐的感知，能够在瞬息万变中快速做出决策。社交场上游刃有余，善于影响和说服他人。务实直接，只关心行之有效的方案，不喜空谈理论。活在当下的行动哲学让他们成为最具爆发力的执行者。",
    descriptionEn:
      "ESTPs are bold doers with extraordinary drive for action. Energetic and skilled at seizing opportunities, they are natural risk-takers. With sharp perception of their immediate environment, they make quick decisions in rapidly changing situations. They navigate social settings with ease, skilled at influencing and persuading others. Pragmatic and direct, they care only about workable solutions and dislike theoretical talk. Their live-in-the-moment action philosophy makes them the most explosive executors.",
    strengths: ["行动力极强，善于快速抓住机会", "社交能力出众，能轻松影响他人", "务实灵活，善于解决眼前的实际问题", "胆识过人，敢于冒险和尝试新事物"],
    strengthsEn: [
      "Extremely action-oriented, adept at seizing opportunities quickly",
      "Outstanding social skills, easily influences others",
      "Pragmatic and flexible, good at solving immediate problems",
      "Bold and daring, willing to take risks and try new things",
    ],
    weaknesses: ["可能过于追求刺激而忽视长期后果", "缺乏耐心，对理论和抽象概念兴趣不大", "有时显得冲动鲁莽，不够深思熟虑", "可能忽略他人的情感和长期关系的维护"],
    weaknessesEn: [
      "May pursue thrills excessively while ignoring long-term consequences",
      "Impatient with little interest in theory and abstract concepts",
      "Sometimes impulsive and rash, lacking thorough consideration",
      "May neglect others' emotions and long-term relationship maintenance",
    ],
    careers: ["创业者 / 销售总监", "急救人员 / 消防员", "体育教练 / 运动员", "经纪人 / 谈判专家"],
    careersEn: [
      "Entrepreneur / Sales Director",
      "First Responder / Firefighter",
      "Sports Coach / Athlete",
      "Broker / Negotiator",
    ],
    relationships:
      "ESTP在感情中热情似火，喜欢用刺激的约会和有吸引力的方式来表达爱。他们追求当下的化学反应和共同冒险的体验。需要伴侣能跟上他们的生活节奏并欣赏其冒险精神。与能给他们适度约束而又不失乐趣的类型最匹配（如ISFJ或ISTJ）。",
    relationshipsEn:
      "ESTPs are fiery in relationships, loving to express affection through exciting dates and attractive gestures. They pursue present-moment chemistry and shared adventure experiences. They need partners who can keep up with their life pace and appreciate their adventurous spirit. Best matched with types who can offer measured stability without dampening the fun (such as ISFJ or ISTJ).",
  },
  ESFP: {
    code: "ESFP",
    name: "表演者",
    nameEn: "Entertainer",
    nickname: "The Entertainer",
    emoji: "🎉",
    category: "Explorers",
    categoryEn: "Explorers",
    categoryZh: "探险家",
    description:
      "ESFP型人格是天生的表演者，喜欢在人群中散发光芒。他们热爱生活，善于发现日常中的乐趣并用热情感染周围的人。对美的感知力极强，对时尚和品味有天生的敏感度。乐观开朗，活在当下，几乎没有什么能长时间困扰他们。拥有极强的社交直觉，能够轻松地让每个人都感到愉快和被重视。他们是聚会的灵魂人物，生活永远不乏掌声和笑声。",
    descriptionEn:
      "ESFPs are natural entertainers who love shining among the crowd. They adore life, skilled at discovering joy in everyday moments and infecting those around them with enthusiasm. With strong aesthetic perception, they possess natural sensitivity to fashion and taste. Optimistic and cheerful, they live in the moment — almost nothing can trouble them for long. With powerful social intuition, they effortlessly make everyone feel happy and valued. They are the life of the party, with a life never short of applause and laughter.",
    strengths: ["极强的人际交往和社交能力", "乐观向上，善于给周围人带来快乐", "对美和品味有敏锐的感知", "适应力强，能在新环境中迅速融入"],
    strengthsEn: [
      "Exceptional interpersonal and social skills",
      "Optimistic and uplifting, brings joy to those around them",
      "Keen perception of beauty and taste",
      "Highly adaptable, quickly assimilates into new environments",
    ],
    weaknesses: ["可能过于关注眼前的快乐而忽略长期规划", "对批评和负面反馈较为敏感", "可能难以独自面对需要深度思考的任务", "有时过于追求他人的关注和认可"],
    weaknessesEn: [
      "May focus too much on immediate pleasure while neglecting long-term planning",
      "Sensitive to criticism and negative feedback",
      "May struggle with tasks requiring deep solitary thinking",
      "Sometimes overly seeks attention and validation from others",
    ],
    careers: ["演员 / 主持人 / 艺人", "活动策划师 / 派对设计师", "导游 / 旅游业从业者", "零售经理 / 时尚买手"],
    careersEn: [
      "Actor / Host / Entertainer",
      "Event Planner / Party Designer",
      "Tour Guide / Travel Industry Professional",
      "Retail Manager / Fashion Buyer",
    ],
    relationships:
      "ESFP在感情中是充满乐趣和激情的伴侣，每天都在制造美好回忆。他们用高质量的陪伴和温馨的惊喜来表达爱。需要被关注和欣赏，喜欢和伴侣一起享受生活的多彩。最佳伴侣是能欣赏他们的乐观又能给予适度稳定的类型（如ISTJ或ISFJ）。",
    relationshipsEn:
      "ESFPs are fun-filled and passionate partners in relationships, creating beautiful memories every day. They express love through quality time and warm surprises. They need to be noticed and appreciated, enjoying life's colorful experiences with their partner. Best matched with types who appreciate their optimism while providing measured stability (such as ISTJ or ISFJ).",
  },
};

export function calculateMBTI(answers: Record<number, number>): string {
  const scores: Record<string, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  for (const idStr of Object.keys(answers)) {
    const id = Number(idStr);
    const optionIndex = answers[id];
    const question = mbtiQuestions.find((q) => q.id === id);
    if (!question || optionIndex < 0 || optionIndex >= question.options.length) continue;
    const optionScores = question.options[optionIndex].scores;
    for (const key of Object.keys(optionScores)) {
      scores[key] = (scores[key] || 0) + (optionScores[key] || 0);
    }
  }

  const e = scores.E || 0;
  const i = scores.I || 0;
  const s = scores.S || 0;
  const n = scores.N || 0;
  const t = scores.T || 0;
  const f = scores.F || 0;
  const j = scores.J || 0;
  const p = scores.P || 0;

  const first = e >= i ? "E" : "I";
  const second = s >= n ? "S" : "N";
  const third = t >= f ? "T" : "F";
  const fourth = j >= p ? "J" : "P";

  return first + second + third + fourth;
}
