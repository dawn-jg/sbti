/**
 * 🐾 Pet SBTI — 你的动物人格是什么？
 * 基于 MBTI 的恶搞向人格测试，12种动物人格，8道选择题。
 * "你不是人，你是动物。" —— 本测试唯一宗旨
 */

export interface PetSBTIOption {
  text: string;
  textEn: string;
  scores: number[];
}

export interface PetSBTIQuestion {
  id: number;
  text: string;
  textEn: string;
  options: PetSBTIOption[];
}

export interface PetSBTITypeInfo {
  id: number;
  code: string;
  name: string;
  nameEn: string;
  emoji: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  vibe: string;
  vibeEn: string;
}

export const petSbtiTypes: PetSBTITypeInfo[] = [
  {
    id: 0,
    code: "GOLDEN",
    name: "金毛暖男(狗)",
    nameEn: "Golden Retriever",
    emoji: "🐶",
    tagline: "被卖了还帮人点钱的那位",
    taglineEn: "Would help you count the money after you sold them",
    description: "你是人群中的小太阳，忠诚、热忱、永远在线。朋友低落时第一个出现，需要帮忙时第一个举手。唯一缺点：太容易相信人，被坑了还觉得是自己没做 好。适合做团队里的粘合剂、朋友圈的气氛组、以及任何需要无条件支持的工作。建议：有时候也要学会说不，并肩不是一味付出。",
    descriptionEn: "You're the sunshine in every crowd — loyal, warm, and always online. First to show up when a friend is down, first to volunteer when someone needs help. Your only flaw: you trust too easily and blame yourself when things go wrong. Perfect as a team glue, social cheerleader, and any role that requires unconditional support. Advice: learn to say 'no' sometimes.",
    vibe: "温暖忠诚、阳光开朗、讨人喜欢型、人际系",
    vibeEn: "warm, loyal, people-pleaser, sunshine energy, healer",
  },
  {
    id: 1,
    code: "CAT",
    name: "傲娇猫主子",
    nameEn: "Cat",
    emoji: "🐱",
    tagline: "你对偶好是应该的，我对你好是恩赐",
    taglineEn: "Your affection is expected; mine is a privilege",
    description: "高冷、独立、选择性社交。你不是不合群，只是觉得大部分人都不配。你的能量。对熟悉的人可以聊一整晚，对陌生人连个表情都不给。品味极高，内心柔软但死鸭子嘴硬从不承认。适合做与审美相关的创意工作，以及一切需要我有自己节奏的事情。",
    descriptionEn: "Elegant, independent, selectively social. You're not antisocial — you just find most people unworthy of your energy. With close friends you can chat all night; with strangers you won't even give a facial expression. High aesthetic standards, secretly soft-hearted but would die before admitting it. Perfect for creative work that demands taste, and anything where 'I have my own rhythm' is a strength.",
    vibe: "独立高冷、傲娇本娇、外冷内热、生人勿近系",
    vibeEn: "independent, elegant, tsundere, selective, secretly soft",
  },
  {
    id: 2,
    code: "HUSKY",
    name: "二哈",
    nameEn: "Husky",
    emoji: "🐺",
    tagline: "脑容量还在，但暂时没上线",
    taglineEn: "Brain still exists but is currently offline",
    description: "你是互联网的表情包大王，每天都在犯傻但自己不知道。朋友聚会你是气氛担当，但关键时刻也能冲上去。缺点：注意力分散、容易分心、做事三分钟热度。适合需要创意和活力的工作，以及任何需要 撒开欢儿 的场合。",
    descriptionEn: "You're the internet's meme king — doing stupid things daily without realizing it. At parties you're the life of the room, but can also step up when it counts. Flaw: easily distracted, short attention span, drops things halfway. Great for creative and energetic work, and any scenario that needs you to go all-out.",
    vibe: "傻萌可爱、表情包产出机、气氛组担当、交友达人",
    vibeEn: "goofy, meme-maker, party animal, social butterfly, joyful",
  },
  {
    id: 3,
    code: "RABBIT",
    name: "敏感兔",
    nameEn: "Rabbit",
    emoji: "🐰",
    tagline: "风吹草动都先跑为敬",
    taglineEn: "First to run at the slightest movement",
    description: "你是敏感体质，对环境和他人的情绪感知力超强。容易紧张、容易多想、容易掉毛——不对，是掉眼泪。你需要一个安全的环境和足够的独处时间来恢复能量。适合需要细心和感知力的工作，但记得给自己留足够的缓冲空间。",
    descriptionEn: "You have ultra-sensitive antennae for your surroundings and others' emotions. Prone to nervousness, overthinking, and tears. You need a safe environment and plenty of solo time to recharge. Great for detail-oriented and perceptive work — but remember to give yourself enough buffer space.",
    vibe: "敏感细腻、容易紧张、观察力强、社恐属性",
    vibeEn: "sensitive, anxious, hyper-aware, careful, introverted",
  },
  {
    id: 4,
    code: "SNAKE",
    name: "低调蛇",
    nameEn: "Snake",
    emoji: "🐍",
    tagline: "静静看你表演，不笑出声算我礼貌",
    taglineEn: "Watching your show quietly; not laughing is me being polite",
    description: "你是静水深流，看起来低调但内心什么都明白。社交场合你不是最活跃的，但你的每一次发言都踩在点上。你不喜欢出风头，但关键时刻你的一两句 点拨能让人恍然大悟。适合需要耐心和观察力的工作，你是那种闷声发大财的类型。",
    descriptionEn: "You're the deep, still water — looks quiet but understands everything. In social settings you're not the loudest, but every word you speak hits the right note. You don't like the spotlight, but when it counts your words can be a revelation. Great for patient, observant work — you're the quiet-wealth type.",
    vibe: "低调内敛、精准打击、深藏不露、闷声发财",
    vibeEn: "low-key, sharp, observant, calculated, mysterious",
  },
  {
    id: 5,
    code: "FOX",
    name: "社交狐狸",
    nameEn: "Fox",
    emoji: "🦊",
    tagline: "人脉广到可以开导航，但真心的没几个",
    taglineEn: "Connections wide enough to navigate, but few are real",
    description: "你是天生的人际导航，朋友圈列表比谁都长，但深夜三点还能回你消息的没几个。你善于利用自己的魅力获取资源，但也容易浮于表面。适合需要广泛社交的工作，但记得偶尔也投资一下真正的深度关系。",
    descriptionEn: "You're a natural social navigator — your contact list is longer than anyone else's, but the ones who'd reply at 3am you can count on one hand. You use your charm well to get resources, but can also be shallow. Great for work requiring broad networking — but remember to occasionally invest in truly deep relationships too.",
    vibe: "社交达人、人脉宽广、魅力满点、浮于表面",
    vibeEn: "charismatic, social navigator, networker, polished, transactional",
  },
  {
    id: 6,
    code: "OWL",
    name: "智慧猫头鹰",
    nameEn: "Owl",
    emoji: "🦉",
    tagline: "看透一切但选择不说，说了你们也不听",
    taglineEn: "Sees everything but chooses silence; they'd not listen anyway",
    description: "你是那种让人怀疑是否偷偷在看书的家伙。认知水平高、观察力强，但总觉得自己还知道得不够。你是行走的知识库，但不喜欢炫耀。适合需要专注和专业的领域，你是那种能在一个方向上走得很深的人。",
    descriptionEn: "The kind of person that makes you wonder if they're secretly reading all day. High cognition, strong observation skills, but always feel you don't know enough. You're a walking knowledge base but don't like to show off. Great for focused, expert-level work — the type who can go deep in one direction.",
    vibe: "知识渊博、观察力强、理性分析、深度钻研",
    vibeEn: "knowledgeable, analytical, observant, deep thinker, self-critical",
  },
  {
    id: 7,
    code: "TIGER",
    name: "霸道老虎",
    nameEn: "Tiger",
    emoji: "🐯",
    tagline: "我的就是我的，别人的也是我的",
    taglineEn: "Mine is mine; yours is also mine",
    description: "你是天生的领地者，有魅力、有魄力、敢担当。你享受挑战和掌控，善于组织和推动团队达成目标。你的气场让人不自觉地想跟你走，但小心不要变得太压迫。适合需要影响力和执行力的工作，你是天生的领导者。",
    descriptionEn: "You're a natural territory-owner — charismatic, bold, and responsible. You enjoy challenges and control, excel at organizing and driving teams toward goals. Your aura makes people naturally want to follow you — but be careful not to become too domineering. Great for work requiring influence and execution — you're a born leader.",
    vibe: "霸道总裁型、魅力领导、目标导向、掌控欲强",
    vibeEn: "dominant, charismatic leader, goal-oriented, controlling",
  },
  {
    id: 8,
    code: "PIG",
    name: "躺平猪",
    nameEn: "Pig",
    emoji: "🐷",
    tagline: "能躺着绝不坐着，能不动绝不动",
    taglineEn: "If I can lie down, I won't sit; if I can stay still, I won't move",
    description: "你是互联网的躺平代言人，追求的是舒适和自由。你对物质和成就没什么执念，人生的最高境界就是安逸。但躺平不代表摆烂——你只是在用最少的能量维持生活，然后把精力留给真正喜欢的事。适合需要创意的自由职业，以及一切能让你按自己节奏来的工作。",
    descriptionEn: "You're the internet's躺平 representative — pursuing comfort and freedom above all. You have no strong attachment to material things or achievements; the highest state of life is ease. But lying flat doesn't mean giving up — you're just maintaining life with minimum energy while saving your real spark for what you actually love. Great for creative freelancers and any job that lets you work at your own pace.",
    vibe: "躺平族、慢生活、安逸至上、自由职业者",
    vibeEn: "laid-back, slow-living, comfort-seeker, free spirit, low ambition",
  },
  {
    id: 9,
    code: "EAGLE",
    name: "野心鹰",
    nameEn: "Eagle",
    emoji: "🦅",
    tagline: "我的眼里只有目标，阻碍我的都会被跨过",
    taglineEn: "My eyes are on the goal only; anything in the way gets crossed",
    description: "你是目标导向的行动派，脑子里永远有一个更大更酷的目标。你执行力强、效率高、不喜欢被约束。你讨厌平庸，总想着如何爬得更高、看得更远。但小心不要因为太执着于结果而忽略了过程中的风景。适合需要自驱力和目标感的工作。",
    descriptionEn: "You are a goal-oriented achiever — always with a bigger, cooler target in mind. You're efficient, dislikes being constrained, and hate mediocrity. Always thinking about how to climb higher and see further. But be careful not to get so fixated on the destination that you miss the scenery along the way. Great for work requiring self-motivation and clear goals.",
    vibe: "目标驱动、自律强、野心勃勃、成就导向",
    vibeEn: "driven, self-disciplined, ambitious, achievement-focused",
  },
  {
    id: 10,
    code: "PANDA",
    name: "国宝熊猫",
    nameEn: "Panda",
    emoji: "🐼",
    tagline: "我就是可爱，不接受反驳",
    taglineEn: "I'm cute; no counterarguments accepted",
    description: "你是天生的治愈系，走到哪里都带着一股让人放松的气场。你喜欢慢节奏的生活，对压力和环境有自己的缓冲方式。你的可爱是天生的，但你的韧性也是。适合需要亲和力和耐心的工作，你是能让人感到安心的存在。",
    descriptionEn: "You're a natural healing presence — bringing a vibe that makes people relax wherever you go. You like a slower pace, have your own way of buffering stress. Your cuteness is innate, but so is your resilience. Great for work requiring warmth and patience — you're the presence that makes people feel safe.",
    vibe: "可爱治愈、慢生活、人畜无害、亲和力强",
    vibeEn: "cute, healing, low-stress, approachable, resilient",
  },
  {
    id: 11,
    code: "WOLF",
    name: "独狼",
    nameEn: "Wolf",
    emoji: "🐺",
    tagline: "不需要群体，孤独是我的朋友",
    taglineEn: "No pack needed; solitude is my companion",
    description: "你是独行侠，不喜欢被群体规则束缚。你有强烈的独立精神和对自由的渴望，宁愿一个人在角落里思考，也不愿意在人群中迷失自己。你的直觉很准，第六感是你最信赖的工具。适合需要创造力和独立性的工作，以及一切能让你保持独处空间的环境。",
    descriptionEn: "You're a lone wolf —不喜欢被群体规则束缚. Strong independent spirit and hunger for freedom. You'd rather think alone in a corner than lose yourself in a crowd. Your intuition is sharp; your sixth sense is your most trusted tool. Great for creative, independent work, and any environment that gives you solitude.",
    vibe: "独来独往、神秘直觉、自由灵魂、第六感准",
    vibeEn: "lone wolf, mysterious, independent, strong intuition, free spirit",
  },
];

export const petSbtiQuestions: PetSBTIQuestion[] = [
  {
    id: 1,
    text: "周末你通常怎么过？",
    textEn: "How do you usually spend your weekends?",
    options: [
      { text: "按掉闹钟继续睡，然后发现自己睡过头半小时", textEn: "Hit snooze and go back to sleep, then realize you're half an hour late", scores: [3, 0, 3, 0, 1, 1, 3, 0, 2, 0, 1, 2] },
      { text: "约朋友去咖啡馆奶茶店，社交充电", textEn: "Meet friends at a cafe — socializing charges your batteries", scores: [1, 2, 0, 3, 1, 1, 1, 3, 0, 3, 0, 2] },
      { text: "宅在家里刷手机/看书/打游戏，安静充电", textEn: "Stay home and scroll phone / read / game — quiet recharge", scores: [1, 1, 2, 0, 3, 0, 1, 0, 3, 0, 3, 1] },
      { text: "出去探索新地方，待不住的人", textEn: "Go out exploring new places — can't stay still", scores: [0, 3, 1, 2, 0, 3, 1, 1, 2, 0, 1, 3] },
    ],
  },
  {
    id: 2,
    text: "朋友突然送你一只宠物，你...",
    textEn: "A friend suddenly gifts you a pet — what do you do?",
    options: [
      { text: "立刻给它起名字，规划它的整个未来", textEn: "Name it immediately and plan its whole future", scores: [4, 0, 1, 2, 0, 3, 1, 1, 1, 2, 0, 0] },
      { text: "沉默抗议——起名字意味着接受现实", textEn: "Silent protest — naming it would mean accepting reality", scores: [0, 4, 1, 1, 3, 1, 1, 1, 0, 0, 1, 3] },
      { text: "去查一本厚厚的养育手册，成为专家", textEn: "Read a thick care manual cover to cover, become an expert", scores: [1, 1, 3, 0, 2, 0, 2, 0, 3, 1, 2, 2] },
      { text: "想办法逃跑，也许朋友家可以暂住", textEn: "Make an escape plan — maybe a friend's place has room", scores: [1, 1, 2, 0, 3, 0, 1, 0, 3, 0, 3, 1] },
    ],
  },
  {
    id: 3,
    text: "你在朋友圈通常是什么角色？",
    textEn: "What role do you usually play in your friend group?",
    options: [
      { text: "情绪支持坦克，谁低落都能接住", textEn: "Emotional support tank — catches anyone who's down", scores: [2, 0, 3, 1, 1, 1, 4, 0, 3, 1, 0, 2] },
      { text: "冷眼旁观者，在安全距离外看戏", textEn: "Cold observer — watching drama from a safe distance", scores: [0, 3, 0, 1, 3, 1, 1, 3, 1, 1, 2, 1] },
      { text: "问题终结者，二话不说直接冲上去搞定", textEn: "Problem solver — jumps in and fixes things directly", scores: [0, 2, 0, 1, 1, 2, 0, 2, 0, 1, 4, 1] },
      { text: "气氛组担当，永远能让大家笑出来", textEn: "Mood-maker — always gets everyone laughing", scores: [2, 0, 4, 0, 0, 2, 1, 0, 2, 1, 1, 1] },
    ],
  },
  {
    id: 4,
    text: "深夜 emo 了怎么办？",
    textEn: "Late at night when you're emo — what do you do?",
    options: [
      { text: "发朋友圈/发消息给朋友诉说的，不能一个人憋着", textEn: "Post on social media or text friends — can't hold it in alone", scores: [3, 0, 1, 2, 0, 1, 3, 0, 2, 1, 0, 1] },
      { text: "听伤感歌曲单曲循环，这是本人的emo time", textEn: "Sad songs on repeat — this is my designated emo time", scores: [0, 3, 0, 1, 2, 3, 0, 3, 0, 1, 2, 0] },
      { text: "谁也不说，一个人在黑夜里自己消化", textEn: "Say nothing to anyone — processing alone in the dark", scores: [1, 2, 0, 3, 3, 0, 2, 1, 1, 2, 1, 2] },
      { text: "冲动消费，买点东西让自己开心起来", textEn: "Impulse purchase — buy something to feel better instantly", scores: [2, 1, 2, 1, 0, 3, 1, 1, 2, 1, 1, 0] },
    ],
  },
  {
    id: 5,
    text: "你最理想的生活环境是？",
    textEn: "What's your ideal living environment?",
    options: [
      { text: "宁静的乡村小院，早晨有雾有鸟鸣", textEn: "Peaceful countryside cottage — morning fog and birdsong", scores: [3, 1, 0, 2, 1, 0, 2, 0, 3, 0, 2, 1] },
      { text: "干净整洁的市中心公寓，极简风格", textEn: "Clean minimalist city apartment — everything in its place", scores: [1, 3, 0, 1, 3, 1, 2, 1, 0, 3, 1, 0] },
      { text: "和室友合租的大房子，永远有人陪着", textEn: "Shared house with roommates — always someone around", scores: [1, 0, 2, 0, 0, 3, 2, 2, 2, 1, 3, 1] },
      { text: "郊区别墅，有不同功能的房间对应不同心情", textEn: "Suburban villa with dedicated rooms for different moods", scores: [1, 1, 1, 1, 1, 1, 0, 3, 0, 2, 0, 3] },
    ],
  },
  {
    id: 6,
    text: "如果你必须选一种解压方式，你会选？",
    textEn: "If you had to pick one way to relieve stress, what would it be?",
    options: [
      { text: "剧烈运动——把所有负能量通过汗液排出", textEn: "Strenuous workout — sweat out all the negative energy", scores: [2, 0, 2, 0, 1, 1, 1, 3, 1, 2, 0, 0] },
      { text: "看一部催泪电影，让情绪有个出口", textEn: "Watch a tearjerker — let emotions have an outlet", scores: [0, 2, 0, 3, 1, 1, 2, 0, 1, 1, 2, 1] },
      { text: "和最好的朋友语音或当面倾诉", textEn: "Voice call or meet your best friend to talk it out", scores: [2, 1, 1, 1, 0, 2, 1, 1, 3, 0, 1, 1] },
      { text: "购物或刷购物软件，花钱买快感", textEn: "Shopping or browsing apps — spending for dopamine", scores: [1, 0, 2, 0, 0, 3, 0, 1, 2, 3, 1, 0] },
    ],
  },
  {
    id: 7,
    text: "做重要决定时你会倾向于？",
    textEn: "When making important decisions, you tend to?",
    options: [
      { text: "收集所有数据和情况分析，直到有把握", textEn: "Collect all data and analyze until you're certain", scores: [1, 1, 0, 2, 4, 0, 3, 0, 1, 1, 1, 1] },
      { text: "相信直觉，第一感觉往往是对的", textEn: "Trust your gut — first instinct is usually right", scores: [1, 2, 2, 0, 1, 1, 0, 2, 1, 1, 0, 3] },
      { text: "问遍身边所有人的意见，兼听则明", textEn: "Ask everyone you know — collective wisdom is safer", scores: [2, 1, 1, 1, 0, 3, 1, 0, 2, 1, 2, 0] },
      { text: "快速决定之后边走边改，行动优先", textEn: "Decide quickly then adjust as you go — action first", scores: [1, 0, 3, 0, 0, 1, 0, 3, 1, 2, 1, 1] },
    ],
  },
  {
    id: 8,
    text: "你的朋友圈动态通常是？",
    textEn: "Your social media posting style is?",
    options: [
      { text: "经常更新——每顿饭、每个想法都值得记录", textEn: "Constant updates — every meal, every thought is worth documenting", scores: [2, 0, 2, 1, 0, 4, 0, 1, 2, 0, 1, 0] },
      { text: "很少发，喜欢私信胜过公开内容", textEn: "Rarely post — prefer private messages over public content", scores: [1, 3, 0, 2, 2, 0, 2, 0, 1, 1, 1, 2] },
      { text: "有策略地发——只发能建立人设的内容", textEn: "Strategic posts — only things that build your image", scores: [0, 1, 1, 0, 2, 3, 1, 2, 1, 3, 0, 0] },
      { text: "只在真正有大事时才发，点滴积累生活", textEn: "Only post when something truly memorable happens", scores: [2, 2, 1, 1, 1, 0, 2, 1, 1, 1, 2, 2] },
    ],
  },
];

export function calculatePetSBTI(answers: Record<number, number>): number {
  const totals: number[] = new Array(12).fill(0);

  for (const question of petSbtiQuestions) {
    const chosenOption = answers[question.id];
    if (chosenOption === undefined || chosenOption < 0 || chosenOption >= question.options.length) {
      continue;
    }
    const scores = question.options[chosenOption].scores;
    for (let i = 0; i < 12; i++) {
      totals[i] += scores[i];
    }
  }

  let maxScore = -1;
  let maxIndex = 0;

  for (let i = 0; i < 12; i++) {
    if (totals[i] > maxScore) {
      maxScore = totals[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}