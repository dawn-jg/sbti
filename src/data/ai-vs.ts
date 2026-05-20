export interface AIvsQuestion {
  id: number; text: string; textEn: string;
  options: { text: string; textEn: string; score: number }[];
}
export interface AIvsResultRange {
  min: number; max: number; label: string; labelEn: string;
  emoji: string; description: string; descriptionEn: string;
}

export const aiVsQuestions: AIvsQuestion[] = [
  { id: 1, text: "如何解决一个复杂问题？", textEn: "How do you solve a complex problem?",
    options: [
      { text: "凭直觉和经验快速判断", textEn: "Go with intuition and experience", score: 1 },
      { text: "先列数据，再算最优解", textEn: "List data first, then calculate optimal solution", score: 3 },
      { text: "直觉先行，数据验证", textEn: "Intuition leads, data validates", score: 2 }
    ] },
  { id: 2, text: "做决策时你最依赖什么？", textEn: "What do you rely on most for decisions?",
    options: [
      { text: "感觉和情绪", textEn: "Feelings and emotions", score: 1 },
      { text: "逻辑和证据", textEn: "Logic and evidence", score: 3 },
      { text: "两者都参考", textEn: "Consider both", score: 2 }
    ] },
  { id: 3, text: "面对意外变化你会？", textEn: "Facing unexpected changes, you?",
    options: [
      { text: "顺势而为，享受变化", textEn: "Go with the flow, enjoy it", score: 1 },
      { text: "立刻制定新计划", textEn: "Immediately make a new plan", score: 3 },
      { text: "先稳住，再调整", textEn: "Stabilize first, then adjust", score: 2 }
    ] },
  { id: 4, text: "你如何理解一幅抽象画？", textEn: "How do you interpret an abstract painting?",
    options: [
      { text: "感受它传递的情绪和氛围", textEn: "Feel the emotion and atmosphere it conveys", score: 1 },
      { text: "分析构图、色彩和技法", textEn: "Analyze composition, color, and technique", score: 3 },
      { text: "先感受再分析", textEn: "Feel first, then analyze", score: 2 }
    ] },
  { id: 5, text: "你更擅长哪种任务？", textEn: "Which type of task are you better at?",
    options: [
      { text: "需要创造力和共情的事", textEn: "Creative and empathetic tasks", score: 1 },
      { text: "需要精确计算和逻辑的事", textEn: "Precise calculation and logic tasks", score: 3 },
      { text: "两者都行，看情况", textEn: "Both, depends on the situation", score: 2 }
    ] },
  { id: 6, text: "学习新东西时你倾向于？", textEn: "When learning something new, you prefer?",
    options: [
      { text: "边做边学，在实践中摸索", textEn: "Learn by doing, figure it out in practice", score: 1 },
      { text: "先系统看完所有资料", textEn: "Systematically study all materials first", score: 3 },
      { text: "先看个大概，然后动手", textEn: "Get an overview, then dive in", score: 2 }
    ] },
  { id: 7, text: "你每天醒来的第一件事？", textEn: "First thing you do after waking up?",
    options: [
      { text: "翻个身再睡一会儿", textEn: "Roll over and sleep a bit more", score: 1 },
      { text: "按计划执行晨间流程", textEn: "Execute morning routine as planned", score: 3 },
      { text: "先看手机消息再决定", textEn: "Check phone messages first, then decide", score: 2 }
    ] },
  { id: 8, text: "你的购物风格是？", textEn: "Your shopping style is?",
    options: [
      { text: "看上就买，不纠结", textEn: "See it, buy it, no hesitation", score: 1 },
      { text: "比价、看测评、算性价比", textEn: "Compare prices, reviews, calculate value", score: 3 },
      { text: "先收藏，过两天还想要再买", textEn: "Save for later, buy after a few days if still want it", score: 2 }
    ] },
  { id: 9, text: "如果AI能代替你的工作，你会？", textEn: "If AI could replace your job, you would?",
    options: [
      { text: "太好了，终于可以躺平", textEn: "Great, I can finally relax", score: 1 },
      { text: "学会控制AI，让AI为我工作", textEn: "Learn to control AI, make it work for me", score: 3 },
      { text: "和AI协作，各取所长", textEn: "Collaborate with AI, leverage each other's strengths", score: 2 }
    ] },
  { id: 10, text: "你觉得你是谁？", textEn: "Who do you think you are?",
    options: [
      { text: "一个充满情感和直觉的人类", textEn: "A human full of emotions and intuition", score: 1 },
      { text: "一个高效处理信息的存在", textEn: "A being that efficiently processes information", score: 3 },
      { text: "一个同时具备感性和理性的矛盾体", textEn: "A paradox of emotion and reason", score: 2 }
    ] }
];

export const aiVsResultRanges: AIvsResultRange[] = [
  { min: 0, max: 20, label: "纯人类思维", labelEn: "Pure Human Mind", emoji: "🎨",
    description: "你是一个彻头彻尾的人类！直觉、情感、创造力是你的超能力。你不需要算力帮你做决定，你靠的是生命体验和内心感受。在AI时代，你代表的是人类思维最纯粹的形态。",
    descriptionEn: "You're human to the core! Intuition, emotion, and creativity are your superpowers. You don't need compute power — you navigate life with experience and gut feelings. In the AI era, you represent the purest form of human cognition." },
  { min: 21, max: 40, label: "人类主导", labelEn: "Human-Dominant", emoji: "🧠",
    description: "你是以人类思维为主，偶尔用理性给自己加加速。你喜欢靠直觉做决定，但也会在重要时刻拉出数据帮你验证。整体来说，你还是更像一个会算账的艺术家。",
    descriptionEn: "You think mostly like a human, with occasional rational acceleration. You prefer intuition but will pull in data to validate when it matters. Overall, you're like an artist who can do math." },
  { min: 41, max: 60, label: "人机平衡", labelEn: "Human-AI Hybrid", emoji: "⚡",
    description: "你正在进化为新一代人类——人机共生的典范。感性让你有温度，理性让你有效率。你是那个既能在深夜写诗，也能在白天写算法的稀有物种。",
    descriptionEn: "You're evolving into a new breed of human — the epitome of human-AI symbiosis. Emotion gives you warmth, logic gives you efficiency. You're the rare person who can write poetry at night and code algorithms by day." },
  { min: 61, max: 80, label: "AI主导", labelEn: "AI-Dominant", emoji: "🤖",
    description: "你的思维方式已经非常接近AI——高效、逻辑、系统化。你善于将复杂问题拆解为可执行的模块，在朋友圈里你是那个「说啥都有理有据」的人。别忘了偶尔也要感受一下生活的温度。",
    descriptionEn: "Your thinking style is remarkably close to AI — efficient, logical, systematic. You excel at breaking down complexity into executable modules. You're the one who always has a well-reasoned argument. Don't forget to feel life's warmth once in a while." },
  { min: 81, max: 100, label: "纯AI思维", labelEn: "Pure AI Mind", emoji: "🖥️",
    description: "如果图灵在世，他大概想招你进实验室。你的思维几乎就是运行在人类身体里的算法——极端理性、精确、高效。你可能是被送错了时代的未来人，或者…你本来就是一个AI，只是运行在碳基身体里？",
    descriptionEn: "If Turing were alive, he'd probably recruit you. Your mind runs like an algorithm in a human body — extremely rational, precise, and efficient. You might be a future human born in the wrong era, or... were you always an AI running on carbon-based hardware?" }
];

export function calculateAIVs(answers: Record<number, number>): number {
  let total = 0;
  Object.entries(answers).forEach(([qId, optIdx]) => {
    const q = aiVsQuestions[parseInt(qId)];
    if (q && q.options[optIdx]) total += q.options[optIdx].score;
  });
  const maxScore = aiVsQuestions.length * 3;
  return Math.round((total / maxScore) * 100);
}