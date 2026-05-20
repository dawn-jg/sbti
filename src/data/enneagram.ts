// Enneagram Test Data — 18 questions | 9 types

export interface EnneagramOption {
  text: string;
  textEn: string;
  scores: Partial<Record<string, number>>;
}

export interface EnneagramQuestion {
  id: number;
  text: string;
  textEn: string;
  options: EnneagramOption[];
}

export const enneagramQuestions: EnneagramQuestion[] = [
  { id: 1, text: "你做事时最在意？", textEn: "When you do things, what do you care about most?", options: [
    { text: "做得对不对，有没有犯错", textEn: "Whether it's done right, whether there are mistakes", scores: { type1: 2 } },
    { text: "能不能帮助到别人", textEn: "Whether you can help others", scores: { type2: 2 } },
    { text: "效率高不高，能不能出成果", textEn: "Whether it's efficient and productive", scores: { type3: 2 } },
  ]},
  { id: 2, text: "你更向往？", textEn: "What do you long for more?", options: [
    { text: "成为一个平凡的、不被记住的人", textEn: "To become an ordinary person,不被记住", scores: { type4: 2 } },
    { text: "被别人的情绪和期望淹没", textEn: "Being overwhelmed by others' emotions and expectations", scores: { type5: 2 } },
    { text: "失去安全感和依靠", textEn: "Losing security and something to rely on", scores: { type6: 2 } },
  ]},
  { id: 3, text: "你对自由的态度？", textEn: "What is your attitude toward freedom?", options: [
    { text: "自由是我的必须，不能被束缚", textEn: "Freedom is my necessity, cannot be constrained", scores: { type7: 2 } },
    { text: "我需要掌控局面，才能安心", textEn: "I need to control the situation to feel safe", scores: { type8: 2 } },
    { text: "避免冲突，和谐最重要", textEn: "Avoid conflict, harmony is most important", scores: { type9: 2 } },
  ]},
  { id: 4, text: "朋友做了你不认同的事，你会？", textEn: "A friend did something you don't agree with -- what do you do?", options: [
    { text: "当面指出问题", textEn: "Point out the problem to their face", scores: { type1: 2 } },
    { text: "先关心他为什么这样做", textEn: "First care about why they did it", scores: { type2: 2 } },
    { text: "如果影响了我才说，否则不 管", textEn: "Only speak up if it affects me, otherwise let it go", scores: { type3: 1 } },
  ]},
  { id: 5, text: "你独处时最常做的事？", textEn: "When you're alone, what do you most often do?", options: [
    { text: "反思自己最近哪儿做得不够好", textEn: "Reflect on what you didn't do well recently", scores: { type1: 1 } },
    { text: "刷社交媒体看别人在干嘛", textEn: "Scroll social media to see what others are doing", scores: { type2: 1, type4: 1 } },
    { text: "制定下一个目标或计划", textEn: "Set the next goal or plan", scores: { type3: 2 } },
  ]},
  { id: 6, text: "你觉得自己内心深处是？", textEn: "Deep down, you feel that you are?", options: [
    { text: "和别人不一样，但不确定哪里不一样", textEn: "Different from others, but not sure where", scores: { type4: 2 } },
    { text: "需要大量独处来恢复能量", textEn: "Need lots of solitude to recover energy", scores: { type5: 2 } },
    { text: "没有安全，需要确认和被确认", textEn: "No security, need to confirm and be confirmed", scores: { type6: 2 } },
  ]},
  { id: 7, text: "你的消费习惯更接近？", textEn: "Your spending habit is closer to?", options: [
    { text: "体验优先，能试的新鲜事都想试", textEn: "Experience first, want to try anything new", scores: { type7: 2 } },
    { text: "实用优先，性价比才是王道", textEn: "Practicality first, cost-performance is king", scores: { type8: 1, type1: 1 } },
    { text: "只要不饿就行，无所谓", textEn: "As long as I'm not hungry, doesn't matter", scores: { type9: 2 } },
  ]},
  { id: 8, text: "面对竞争你的反应？", textEn: "Your reaction to competition?", options: [
    { text: "更努力，用更好的标准要求自己", textEn: "Work harder, demand more of yourself", scores: { type1: 2 } },
    { text: "要赢，输的感觉无法接受", textEn: "Must win, the feeling of losing is unbearable", scores: { type3: 2 } },
    { text: "来就来，我不惧直接冲突", textEn: "Bring it, I'm not afraid of direct confrontation", scores: { type8: 2 } },
  ]},
  { id: 9, text: "你对批评的承受能力？", textEn: "How well do you handle criticism?", options: [
    { text: "如果批评有道理我能接受，但一定要对", textEn: "I can accept if criticism is justified, but it must be right", scores: { type1: 1, type5: 1 } },
    { text: "会很受伤，感觉被否定了整个 人", textEn: "Very hurt, feel like the whole person is rejected", scores: { type2: 1, type4: 2 } },
    { text: "一般不接受，你有你我有我 的看法", textEn: "Generally don't accept it -- you have your views, I have mine", scores: { type8: 1, type7: 1 } },
  ]},
  { id: 10, text: "你在团队中通常的角色是？", textEn: "What role do you usually play in a team?", options: [
    { text: "把控质量的那一个人", textEn: "The one who ensures quality", scores: { type1: 2 } },
    { text: "关心大家情绪的那一个人", textEn: "The one who cares about everyone's emotions", scores: { type2: 2 } },
    { text: "带头冲锋的那一个人", textEn: "The one who leads the charge", scores: { type3: 2 } },
  ]},
  { id: 11, text: "你最不能接受的是？", textEn: "What can you least accept?", options: [
    { text: "平庸和没有追求", textEn: "Mediocrity and having no ambition", scores: { type4: 2 } },
    { text: "被打扰时的反应", textEn: "Being disturbed when concentrating", scores: { type5: 2 } },
    { text: "犹豫和不决", textEn: "Hesitation and indecision", scores: { type6: 2 } },
  ]},
  { id: 12, text: "你做决定时最看重？", textEn: "When making decisions, what matters most to you?", options: [
    { text: "开创最重要，不朽的事就 别怕", textEn: "Innovation matters most -- don't be afraid of big things", scores: { type7: 2 } },
    { text: "掌控感，我说了算才安全", textEn: "Control -- I'm safe only when I have the say", scores: { type8: 2 } },
    { text: "和谐，别因为一个决定伤了 和气", textEn: "Harmony -- don't hurt relationships over one decision", scores: { type9: 2 } },
  ]},
  { id: 13, text: "你最想拥有的一项超能力是？", textEn: "What one superpower would you most want?", options: [
    { text: "一眼看出对错的超能力", textEn: "The power to instantly see right from wrong", scores: { type1: 2 } },
    { text: "感知别人情绪的能力", textEn: "The ability to sense others' emotions", scores: { type2: 2 } },
    { text: "瞬间复制任何技能的超能力", textEn: "The power to instantly copy any skill", scores: { type3: 2 } },
  ]},
  { id: 14, text: "你的内心有没有一个始终压不住的想法？", textEn: "Is there a thought you can never suppress in your heart?", options: [
    { text: "总觉得少了点什么重要的东西", textEn: "Feel like something important is missing", scores: { type4: 2 } },
    { text: "觉得自己储备不够，需要再 多了解一些", textEn: "Feel like you never have enough knowledge", scores: { type5: 2 } },
    { text: "最担心的情况会发生吗", textEn: "Will the worst-case scenario happen", scores: { type6: 2 } },
  ]},
  { id: 15, text: "你和朋友聚会结束后会？", textEn: "After a gathering with friends, you would?", options: [
    { text: "开始计划下一次聚会，越多越好", textEn: "Start planning the next gathering, the more the better", scores: { type7: 2 } },
    { text: "觉得今天不够完美，下次要 换个更大的场", textEn: "Feel today wasn't perfect, next time find a bigger venue", scores: { type8: 2 } },
    { text: "回家就行，共印共印", textEn: "Just go home, that was enough", scores: { type9: 2 } },
  ]},
  { id: 16, text: "面对一个困难的问题你会？", textEn: "Facing a difficult problem, you would?", options: [
    { text: "按步骤分析，找到最优解", textEn: "Analyze step by step to find the best solution", scores: { type1: 1, type5: 2 } },
    { text: "直接冲上去，正面解决", textEn: "Charge forward, solve it head-on", scores: { type8: 2 } },
    { text: "看看能不能绕过去或者拖一 拖", textEn: "See if you can bypass it or delay it", scores: { type9: 2 } },
  ]},
  { id: 17, text: "你觉得自己最理想的人格是？", textEn: "What is your most ideal personality?", options: [
    { text: "真诚和善良", textEn: "Sincere and kind", scores: { type2: 2 } },
    { text: "自信和从容", textEn: "Confident and at ease", scores: { type3: 2 } },
    { text: "独特的感受力和魅力", textEn: "Unique sensitivity and charisma", scores: { type4: 2 } },
  ]},
  { id: 18, text: "如果你有一整天完全自由的时间，你会？", textEn: "If you had a whole day completely free, you would?", options: [
    { text: "学习新东西或深入研究感兴趣的课题", textEn: "Learn something new or deeply research a topic of interest", scores: { type5: 2 } },
    { text: "尝试一个从没体验过的活动或去一个新的地方", textEn: "Try an activity you've never done or go somewhere new", scores: { type7: 2 } },
    { text: "赖在家里、发呆、睡觉，怎么懒怎么来", textEn: "Stay home, space out, sleep -- the lazier the better", scores: { type9: 2 } },
  ]},
];

export interface EnneagramTypeInfo {
  code: string;
  name: string;
  nameEn: string;
  nickname: string;
  nicknameEn: string;
  emoji: string;
  description: string;
  descriptionEn: string;
  strengths: string[];
  strengthsEn: string[];
  weaknesses: string[];
  weaknessesEn: string[];
  motivation: string;
  motivationEn: string;
  fear: string;
  fearEn: string;
}

export const enneagramTypes: Record<string, EnneagramTypeInfo> = {
  type1: {
    code: "Type 1", name: "完美主义者", nameEn: "The Reformer", nickname: "The Reformer", nicknameEn: "The Reformer",
    emoji: "⚖️",
    description: "你是一个有原则、有理想的人，内心有一套完美的标准。你追求卓越和正确，对错误和不平事零容忍。你是天生的改革者，总是试图让世界变得更美好。但你也容易对自己和他人过于苛刻。",
    descriptionEn: "You are a principled, idealistic person with a perfect standard in your heart. You seek excellence and correctness, with zero tolerance for mistakes and injustice. You are the world's reformer, always trying to make it better. But you also tend to be too harsh on yourself and others.",
    strengths: ["有原则", "自律", "追求卓越", "正义感强"],
    strengthsEn: ["Principled", "Self-disciplined", "Striving for excellence", "Strong sense of justice"],
    weaknesses: ["过于评判", "完美主义", "压抑自我", "不兼容"],
    weaknessesEn: ["Over-critical", "Perfectionist", "Self-repressing", "Inflexible"],
    motivation: "追求正确和完美",
    motivationEn: "Pursuing correctness and perfection",
    fear: "犯错或变得不公平",
    fearEn: "Making mistakes or becoming unjust",
  },
  type2: {
    code: "Type 2", name: "给予者", nameEn: "The Helper", nickname: "The Helper", nicknameEn: "The Helper",
    emoji: "💖",
    description: "你天生善于关心他人，总能敏锐地感知别人的需求。你慷慨、热忱，把帮助别人当作自我价值的来源。你是朋友圈里最温暖的存在。但有时你可能牺牲了自己的需求，付出太多却得不到回报时容易受伤。",
    descriptionEn: "You are naturally good at caring for others, always sensing what others need. You are generous, enthusiastic, and see helping others as your source of self-worth. You are the warmest presence in your circle of friends. But sometimes you may sacrifice your own needs, and get hurt when you give too much without getting anything back.",
    strengths: ["善于关心他人", "慷慨大方", "热情友好", "善于解人意"],
    strengthsEn: ["Good at caring for others", "Generous", "Warm and friendly", "Good at reading people"],
    weaknesses: ["忽略自己需求", "主导倾向", "对认可上瘾", "界限模糊"],
    weaknessesEn: ["Ignoring own needs", "Manipulative streak", "Approval-seeking", "Blurry boundaries"],
    motivation: "被需要和被爱",
    motivationEn: "Being needed and being loved",
    fear: "不被需要或被拒绝",
    fearEn: "Being unwanted or rejected",
  },
  type3: {
    code: "Type 3", name: "实干者", nameEn: "The Achiever", nickname: "The Achiever", nicknameEn: "The Achiever",
    emoji: "🏃",
    description: "你是目标导向的行动者，追求成功和认可。你高效、自信，善于展现自己最好的一面。你总能成为团队的核心人物，推动项目前进。但你也可能为了保持形象而过 度工作，忘记了什么才是真正重要的。",
    descriptionEn: "You are a goal-oriented achiever who pursues success and recognition. You are efficient, confident, and good at presenting your best self. You can always become the core person on a team and push projects forward. But you may also overwork to maintain your image, forgetting what really matters.",
    strengths: ["高效执行", "目标明确", "自信积极", "适应力强"],
    strengthsEn: ["Efficient execution", "Clear goals", "Confident and positive", "Highly adaptable"],
    weaknesses: ["过度工作", "形象驱动", "情感压抑", "竞争过度"],
    weaknessesEn: ["Overworking", "Image-driven", "Emotionally repressed", "Excessively competitive"],
    motivation: "获取成功和被认可",
    motivationEn: "Achieving success and being recognized",
    fear: "变得没有价值或失败",
    fearEn: "Becoming worthless or failing",
  },
  type4: {
    code: "Type 4", name: "浪漫主义者", nameEn: "The Individualist", nickname: "The Individualist", nicknameEn: "The Individualist",
    emoji: "🎭",
    description: "你是多愁善感而深刻的个体，有着丰富的内心世界。你追求真实和独特，对美有着强烈的感受力。你觉得自己和他人不一样——这种特别既是你的才华也是你的痛苦来源。你富有创造力，但容易被情绪困扰。",
    descriptionEn: "You are a sensitive and deep individual with a rich inner world. You pursue authenticity and uniqueness, with a strong sense of beauty. You feel different from others -- this uniqueness is both your talent and your source of pain. You are creative but prone to emotional turbulence.",
    strengths: ["感受力强", "有创造力", "真诚独特", "美学的眼光"],
    strengthsEn: ["Deeply perceptive", "Creative", "Authentic and unique", "Aesthetic sense"],
    weaknesses: ["过于敏感", "自我封闭", "比较心强", "情绪波动"],
    weaknessesEn: ["Overly sensitive", "Self-isolating", "Comparitive", "Mood swings"],
    motivation: "找到真实的自我和意义",
    motivationEn: "Finding your true self and meaning",
    fear: "自己和他人不一样或没有自我认同",
    fearEn: "Being different or having no identity",
  },
  type5: {
    code: "Type 5", name: "观察者", nameEn: "The Investigator", nickname: "The Investigator", nicknameEn: "The Investigator",
    emoji: "🔍",
    description: "你是理性的知识探索者，冷静而独立。你善于分析和观察，在自己的领域是专家。你喜欢深入钻研而非浅尝辄止。你保护自己的能量，不喜欢被打扰。但你可能社交远离、情感上疏离、对规则不耐烦。",
    descriptionEn: "You are a rational knowledge-seeker, calm and independent. You excel at analysis and observation, being an expert in your field. You prefer depth over breadth. You guard your energy and dislike being interrupted. But you may be socially distant, emotionally detached, and impatient with rules.",
    strengths: ["观察力强", "理性客观", "知识渊博", "独立自主"],
    strengthsEn: ["Highly observant", "Rational and objective", "Knowledgeable", "Self-reliant"],
    weaknesses: ["社交困难", "情感冷淡", "过度分析", "能量守财"],
    weaknessesEn: ["Socially awkward", "Emotionally cold", "Over-analyzing", "Energy hoarding"],
    motivation: "理解和掌握知识",
    motivationEn: "Understanding and mastering knowledge",
    fear: "变得无能或被入侵",
    fearEn: "Becoming incompetent or being intruded upon",
  },
  type6: {
    code: "Type 6", name: "忠诚者", nameEn: "The Loyalist", nickname: "The Loyalist", nicknameEn: "The Loyalist",
    emoji: "🛡️",
    description: "你是负责且忠诚的人，重视安全和稳定。你善于预见风险，提前做好准备。你是朋友和团队中最可靠的人，但也容易焦虑和过度警惕。你需要在确定性和安全感中找到平衡。",
    descriptionEn: "You are a responsible and loyal person who values security and stability. You are good at anticipating risks and preparing in advance. You are the most reliable person among friends and teams, but also prone to anxiety and excessive vigilance. You need to find balance between certainty and security.",
    strengths: ["忠诚可靠", "负责任", "预见力强", "团队精神"],
    strengthsEn: ["Loyal and reliable", "Responsible", "Strong foresight", "Team spirit"],
    weaknesses: ["多疑虑", "过度谨慎", "规避权威", "依赖倾向"],
    weaknessesEn: ["Doubtful", "Over-cautious", "Authority-avoidant", "Dependent"],
    motivation: "获得安全感和支持",
    motivationEn: "Gaining security and support",
    fear: "没有支持或指导",
    fearEn: "Having no support or guidance",
  },
  type7: {
    code: "Type 7", name: "享乐主义者", nameEn: "The Enthusiast", nickname: "The Enthusiast", nicknameEn: "The Enthusiast",
    emoji: "🎉",
    description: "你是乐观的探险家，对生活充满热情。你善于发现快乐和可能性，喜欢尝试新事物。你的精力充沛，能把任何场合变得有趣。但你也可能因为追求快乐而逃避困难和痛苦。",
    descriptionEn: "You are an optimistic explorer full of passion for life. You are good at finding joy and possibility, likes trying new things. Your energy is abundant and you can make any occasion fun. But you may also escape difficulties and pain by pursuing pleasure.",
    strengths: ["乐观积极", "精力充沛", "创造力丰富", "适应力强"],
    strengthsEn: ["Optimistic and positive", "Energetic", "Creative", "Highly adaptable"],
    weaknesses: ["注意力分散", "逃避痛苦", "过度活动", "缺乏深度"],
    weaknessesEn: ["Scattered attention", "Pain-avoidant", "Over-active", "Shallow"],
    motivation: "保持快乐和自由",
    motivationEn: "Staying happy and free",
    fear: "被困在痛苦中或无聊",
    fearEn: "Being trapped in pain or boredom",
  },
  type8: {
    code: "Type 8", name: "挑战者", nameEn: "The Challenger", nickname: "The Challenger", nicknameEn: "The Challenger",
    emoji: "💪",
    description: "你是强大而自信的人，喜欢掌控局面。你直率、有魄力，不惧冲突和挑战。你保护弱者，追求正义，是天生的领袖和战士。但你也可能过于强势和控制。",
    descriptionEn: "You are a strong, confident person who likes to be in control. You are direct, bold, and unafraid of conflict and challenges. You protect the weak, pursue justice, and are a natural leader and warrior. But you may also be too dominating and controlling.",
    strengths: ["果断强大", "保护他人", "直接坦率", "领导力强"],
    strengthsEn: ["Decisive and powerful", "Protective", "Direct and frank", "Strong leadership"],
    weaknesses: ["过度控制", "攻击性强", "不够敏感", "忽视规则"],
    weaknessesEn: ["Over-controlling", "Aggressive", "Insensitive", "Rule-ignoring"],
    motivation: "掌控和保护自己",
    motivationEn: "Controlling and protecting yourself",
    fear: "被控制或被示弱",
    fearEn: "Being controlled or showing weakness",
  },
  type9: {
    code: "Type 9", name: "和平缔造者", nameEn: "The Peacemaker", nickname: "The Peacemaker", nicknameEn: "The Peacemaker",
    emoji: "☮️",
    description: "你是温和而包容的人，追求和谐与平稳。你善于倾听和调解，是团队中的润滑剂。你不爱争抢，随和亲切，但有时可能因为太回避冲突而失去了自己的立场。你需要在和谐与自我之间找到平衡。",
    descriptionEn: "You are a gentle, tolerant person who pursues harmony and stability. You are good at listening and mediating, serving as a team's lubricant. You don't like to compete, are easygoing and approachable, but sometimes may lose your own position because you avoid conflict too much. You need to find balance between harmony and your authentic self.",
    strengths: ["善于倾听", "包容大度", "善于调解", "稳定可靠"],
    strengthsEn: ["Good at listening", "Tolerant", "Good at mediating", "Stable and reliable"],
    weaknesses: ["逃避冲突", "被动应付", "自我忽视", "过度迁就"],
    weaknessesEn: ["Conflict-avoidant", "Passive", "Self-neglecting", "Over-accommodating"],
    motivation: "保持内心平静和外在和谐",
    motivationEn: "Maintaining inner peace and outer harmony",
    fear: "冲突和失去联系",
    fearEn: "Conflict and losing connection",
  },
};

export function calculateEnneagram(answers: Record<number, number>): string {
  const scores: Record<string, number> = {
    type1: 0, type2: 0, type3: 0, type4: 0,
    type5: 0, type6: 0, type7: 0, type8: 0, type9: 0,
  };
  enneagramQuestions.forEach((q) => {
    const selected = answers[q.id];
    if (selected === undefined) return;
    const s = q.options[selected]?.scores || {};
    Object.entries(s).forEach(([k, v]) => {
      scores[k] = (scores[k] ?? 0) + (v ?? 0);
    });
  });
  let maxKey = "type1";
  let maxVal = scores.type1;
  Object.entries(scores).forEach(([k, v]) => {
    if (v > maxVal) { maxVal = v; maxKey = k; }
  });
  return maxKey;
}