/**
 * 内在小孩测试 — Inner Child Test
 * 探索你的童年情绪模式与应对机制。
 * 10 questions, 5 types: WOUNDED / MAGICAL / REBEL / PERFECTIONIST / CARETAKER
 */

// ── Types ────────────────────────────────────────────────────────────────────
export type InnerChildTypeCode = 'WOUNDED' | 'MAGICAL' | 'REBEL' | 'PERFECTIONIST' | 'CARETAKER';

export interface InnerChildOption {
  label: string;
  text: string;
  textEn: string;
  scores: Record<InnerChildTypeCode, number>;
}

export interface InnerChildQuestion {
  id: number;
  text: string;
  textEn: string;
  options: InnerChildOption[];
}

export interface InnerChildTypeInfo {
  code: InnerChildTypeCode;
  name: string;
  nameEn: string;
  emoji: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  healing: string;
  healingEn: string;
}

// ── Questions ─────────────────────────────────────────────────────────────
export const innerChildQuestions: InnerChildQuestion[] = [
  {
    id: 1,
    text: '小时候不小心打破了家里的东西，你的第一反应是？',
    textEn: 'As a child, when you accidentally broke something at home, your first reaction was?',
    options: [
      { label: 'A', text: '吓得屏住呼吸，脑子里全是"完了完了"，恨不得钻进地缝里', textEn: "Held my breath in terror, thinking I'm done for, wishing I could disappear", scores: { WOUNDED: 3, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'B', text: '赶紧想办法找个理由，比如"不是我干的"或者"它自己掉的"', textEn: "Quickly found an excuse — 'it wasn't me' or 'it fell on its own'", scores: { WOUNDED: 1, MAGICAL: 0, REBEL: 2, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'C', text: '立刻承认，主动道歉，请求原谅，心里想着下次一定要更小心', textEn: "Immediately admitted it, apologized, asked for forgiveness, vowed to be more careful", scores: { WOUNDED: 0, MAGICAL: 2, REBEL: 0, PERFECTIONIST: 3, CARETAKER: 0 } },
      { label: 'D', text: '先不管东西，第一时间去安慰可能受伤的人，或者问问有没有人吓到', textEn: "Ignored the broken thing, first checked if anyone was scared or needed comfort", scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 3 } },
    ],
  },
  {
    id: 2,
    text: '父母或长辈批评你时，你的内心OS是？',
    textEn: 'When your parents or elders criticized you, your inner voice was?',
    options: [
      { label: 'A', text: '"我不够好""我又做错了""他们一定对我很失望"', textEn: '"I\'m not good enough", "I messed up again", "They must be so disappointed in me"', scores: { WOUNDED: 3, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 1, CARETAKER: 0 } },
      { label: 'B', text: '"凭什么？""规则是死的吗？""这不合理！"', textEn: '"Why should I?", "Are rules set in stone?", "This is unreasonable!"', scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 3, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'C', text: '"好，我知道了，我会按你说的改"', textEn: '"Okay, I understand. I\'ll do it your way."', scores: { WOUNDED: 1, MAGICAL: 1, REBEL: 0, PERFECTIONIST: 2, CARETAKER: 1 } },
      { label: 'D', text: '默默听着，一边点头一边想"他们的感受是什么？为什么要这样说？"', textEn: "Listened quietly, nodded, wondering 'how do they feel? Why are they saying this?'", scores: { WOUNDED: 0, MAGICAL: 2, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 2 } },
    ],
  },
  {
    id: 3,
    text: '回忆童年时，你脑海里常常浮现的画面是？',
    textEn: 'When you recall your childhood, what image most often pops into your mind?',
    options: [
      { label: 'A', text: '一个人被留在角落，或者躲在房间里哭', textEn: "Someone left alone in a corner, or hiding in a room crying", scores: { WOUNDED: 3, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'B', text: '光着脚在雨里跑、在草地上打滚、爬上树摘果子', textEn: "Running barefoot in the rain, rolling on grass, climbing trees to pick fruit", scores: { WOUNDED: 0, MAGICAL: 3, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'C', text: '坐在桌前写作业、练习乐器、或者被要求"再做一遍"', textEn: "Sitting at a desk doing homework, practicing an instrument, or being told 'do it again'", scores: { WOUNDED: 1, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 3, CARETAKER: 0 } },
      { label: 'D', text: '在厨房帮妈妈做饭、照顾弟弟妹妹、给忙碌的大人递水', textEn: "Helping mom in the kitchen, taking care of younger siblings, bringing water to busy adults", scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 3 } },
    ],
  },
  {
    id: 4,
    text: '如果有人对你说"你真的很努力了"，你的第一反应是？',
    textEn: 'If someone told you "you really tried hard", your first reaction would be?',
    options: [
      { label: 'A', text: '有点想哭，觉得终于被看见了，哪怕只是一点点认可', textEn: "Want to cry a little — feeling finally seen, even if just a tiny bit of recognition", scores: { WOUNDED: 2, MAGICAL: 1, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'B', text: '"还不够，还可以更好"，觉得这个认可来得太轻易', textEn: '"Not enough — could be better." Feeling the recognition came too easily', scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 1, PERFECTIONIST: 3, CARETAKER: 0 } },
      { label: 'C', text: '翻个白眼："你是在安慰我吧？"', textEn: 'Roll my eyes: "Are you just trying to make me feel better?"', scores: { WOUNDED: 1, MAGICAL: 0, REBEL: 3, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'D', text: '开心地收下，然后立刻想着怎么也为对方做点什么', textEn: "Gladly accept, then immediately think about what I can do for them in return", scores: { WOUNDED: 0, MAGICAL: 2, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 2 } },
    ],
  },
  {
    id: 5,
    text: '当你感到压力很大时，你更倾向于？',
    textEn: 'When you feel very stressed, you tend to?',
    options: [
      { label: 'A', text: '一个人待着，不想说话，不想被看见', textEn: "Stay alone, don't want to talk, don't want to be seen", scores: { WOUNDED: 3, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'B', text: '去跑步、跳伞、或者做任何能让大脑空白的事', textEn: "Go running, skydiving, or anything that empties the mind", scores: { WOUNDED: 0, MAGICAL: 3, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'C', text: '列清单、排优先级、把任务切成小块，逐一解决', textEn: "Make lists, prioritize, cut tasks into small pieces and tackle them one by one", scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 3, CARETAKER: 0 } },
      { label: 'D', text: '找到最在意的人倾诉，或者通过帮助别人来转移注意力', textEn: "Talk to someone you care about, or help others to take your mind off it", scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 3 } },
    ],
  },
  {
    id: 6,
    text: '你小时候最常感受到的情绪是？',
    textEn: 'The emotion you felt most often as a child was?',
    options: [
      { label: 'A', text: '恐惧和不安——总是担心会发生不好的事', textEn: "Fear and anxiety — always worried something bad would happen", scores: { WOUNDED: 3, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'B', text: '好奇和兴奋——世界像个巨大的游乐场，等着去探索', textEn: "Curiosity and excitement — the world was a giant playground waiting to be explored", scores: { WOUNDED: 0, MAGICAL: 3, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'C', text: '焦虑和紧张——总觉得自己做得不够好', textEn: "Anxiety and tension — always felt like you weren't doing enough", scores: { WOUNDED: 1, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 3, CARETAKER: 0 } },
      { label: 'D', text: '责任感和义务——小小年纪就觉得要照顾别人', textEn: "Sense of duty and obligation — even as a small child, felt responsible for caring for others", scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 3 } },
    ],
  },
  {
    id: 7,
    text: '有人向你倾诉烦恼时，你的第一反应是？',
    textEn: 'When someone comes to you with their troubles, your first reaction is?',
    options: [
      { label: 'A', text: '心疼对方，但不知道该说什么，怕自己说错话', textEn: "Feel heartache for them, but don't know what to say — afraid of saying the wrong thing", scores: { WOUNDED: 2, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 1 } },
      { label: 'B', text: '安静地听，不打断，给对方足够的空间', textEn: "Listen quietly without interrupting, giving them plenty of space", scores: { WOUNDED: 0, MAGICAL: 2, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 1 } },
      { label: 'C', text: '分析和拆解问题，给出具体的解决方案', textEn: "Analyze and break down the problem, offer concrete solutions", scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 3, CARETAKER: 0 } },
      { label: 'D', text: '感同身受，想象如果是你经历同样的事会有什么感受', textEn: "Empathize deeply, imagining how you would feel in their situation", scores: { WOUNDED: 1, MAGICAL: 1, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 2 } },
    ],
  },
  {
    id: 8,
    text: '当你犯错时，你更希望对方？',
    textEn: 'When you make a mistake, you prefer the other person to?',
    options: [
      { label: 'A', text: '温柔地安慰你，先确认你没事，再讨论如何改进', textEn: "Gently comfort you, make sure you're okay first, then discuss how to improve", scores: { WOUNDED: 2, MAGICAL: 1, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'B', text: '直接告诉你错了在哪里，但不审判你', textEn: "Directly point out what went wrong, but without judging you", scores: { WOUNDED: 0, MAGICAL: 2, REBEL: 1, PERFECTIONIST: 1, CARETAKER: 0 } },
      { label: 'C', text: '给你空间冷静下来，然后一起分析原因和解决方案', textEn: "Give you space to cool down, then analyze the cause and solution together", scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 2, CARETAKER: 1 } },
      { label: 'D', text: '不要过度指责你，因为你知道自己的错误，愿意主动修复', textEn: "Not overly blame you — because you know your mistake and are willing to fix it", scores: { WOUNDED: 1, MAGICAL: 1, REBEL: 2, PERFECTIONIST: 0, CARETAKER: 0 } },
    ],
  },
  {
    id: 9,
    text: '你希望在关系中得到的是？',
    textEn: 'What you hope to get from relationships is?',
    options: [
      { label: 'A', text: '安全感——无条件的接纳和包容', textEn: "Security — unconditional acceptance and tolerance", scores: { WOUNDED: 3, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'B', text: '自由和探索——可以一起成长也允许彼此独立', textEn: "Freedom and exploration — growing together while allowing individual independence", scores: { WOUNDED: 0, MAGICAL: 3, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'C', text: '尊重和认可——你的努力被看见，你的价值被肯定', textEn: "Respect and recognition — your efforts are seen and your worth is affirmed", scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 3, CARETAKER: 0 } },
      { label: 'D', text: '被需要的感觉——你的存在对对方很重要', textEn: "Feeling needed — your existence matters deeply to them", scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 3 } },
    ],
  },
  {
    id: 10,
    text: '如果回到童年，你会对那个小小的自己说什么？',
    textEn: 'If you could go back to childhood, what would you say to your little self?',
    options: [
      { label: 'A', text: '"你已经做得很好了，不必总是完美"', textEn: '"You\'ve done really well. You don\'t have to be perfect all the time."', scores: { WOUNDED: 2, MAGICAL: 1, REBEL: 0, PERFECTIONIST: 1, CARETAKER: 0 } },
      { label: 'B', text: '"保持好奇心，世界比你想象的更有趣"', textEn: '"Keep that curiosity — the world is far more interesting than you think."', scores: { WOUNDED: 0, MAGICAL: 3, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'C', text: '"不要太在意别人的评价，你的价值不是由别人决定的"', textEn: '"Don\'t care too much about others\' opinions — your worth isn\'t determined by them."', scores: { WOUNDED: 1, MAGICAL: 0, REBEL: 3, PERFECTIONIST: 0, CARETAKER: 0 } },
      { label: 'D', text: '"先照顾好自己，才有力量照顾别人"', textEn: '"Take care of yourself first — then you\'ll have the strength to care for others."', scores: { WOUNDED: 0, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 1, CARETAKER: 3 } },
    ],
  },
];

// ── Types ────────────────────────────────────────────────────────────────────
export const innerChildTypes: Record<InnerChildTypeCode, InnerChildTypeInfo> = {
  WOUNDED: {
    code: 'WOUNDED', name: '受伤小孩', nameEn: 'Wounded Child', emoji: '🩹',
    tagline: '你受伤了，但你还不知道', taglineEn: 'You were hurt, but you didn\'t know it yet',
    description: '你的内心深处住着一个从小就习惯了不安和恐惧的小孩。在你的成长环境里，爱和关注是有条件的——你必须表现得好、必须乖巧、必须不让大人操心才能被喜欢。这种模式让你学会了压抑自己的情绪，学会了最先察觉别人的需求，却把自己的感受放在最后。你害怕被抛弃，害怕被否定，害怕自己的"不够好"被看见。成年后，你可能经常在人际关系中感到疲惫、焦虑，或者总是觉得别人不够在乎你——其实是因为你还没有学会真正在乎自己。',
    descriptionEn: 'A child who grew up accustomed to insecurity and fear lives deep within you. In your environment, love and attention were conditional — you had to behave well, be good, and not cause trouble for adults to be liked. This taught you to suppress your emotions and always prioritize others\' needs before your own. You fear abandonment and rejection, fear that your "not good enough" will be exposed. As an adult, you may often feel exhausted or anxious in relationships, or feel others don\'t care enough — because you haven\'t yet learned to truly care for yourself.',
    healing: '停下来。那个受伤的小孩不需要再证明什么了。你的价值从来不是打分打出来的——你在成为任何人之前就已经值得被爱。试着做一件"没那么好"的事：画歪的画、唱跑调的歌、发一条不用反复修改的消息。允许自己及格，允许自己休息，允许自己只是存在，而不是表现。完美主义曾经保护了你，现在你可以放下那把尺子了。',
    healingEn: 'Stop. That child doesn\'t need to prove anything anymore. Your worth was never measured on a scorecard — you were worthy of love before you became anyone. Try doing something "not that great": a crooked drawing, an off-key song, a message sent without editing it ten times. Give yourself permission to be average, to rest, to simply exist rather than perform. Perfectionism once protected you. Now you can put down that ruler.',
  },
  MAGICAL: {
    code: 'MAGICAL', name: '魔法小孩', nameEn: 'Magical Child', emoji: '✨',
    tagline: '你相信世界的美好，而你从未失去它', taglineEn: 'You believe in the world\'s goodness, and you never lost it',
    description: '你内心保持着一份童年的魔法感——一种与世界深度连接的直觉。你对美、真相和意义有超乎寻常的感知力，经常能够在别人之前感受到潜在的可能性。你的内心是开放的、富有想象力的、充满奇迹感的。你没有把童年丢失，而是将它转化成了成年后的创造力和洞察力。你能在平凡中发现美，在混乱中找到秩序，在最黑暗的地方看见光。',
    descriptionEn: 'You\'ve retained a sense of childhood magic — an intuitive deep connection with the world. You have an extraordinary ability to perceive beauty, truth, and meaning, often sensing latent possibilities before others do. Your inner world is open, imaginative, and full of wonder. You didn\'t lose your childhood — you transformed it into creativity and insight as an adult. You can find beauty in the ordinary, order in chaos, and light in the darkest places.',
    healing: '继续保持这份魔法，但也要学会在现实世界中扎根。魔法小孩的力量在于连接——保持对世界的好奇，但也要学会在风暴来临时站稳。让直觉成为你的指南，而不是逃跑的借口。',
    healingEn: 'Keep this magic alive, but also learn to ground yourself in the physical world. The magical child\'s power lies in connection — maintain your wonder, but learn to stand firm when storms come. Let intuition be your guide, not an excuse to escape.',
  },
  REBEL: {
    code: 'REBEL', name: '叛逆小孩', nameEn: 'Rebel Child', emoji: '🔥',
    tagline: '你的不服从，是未被听见的声音', taglineEn: 'Your defiance is an unheard voice',
    description: '你的内心深处有一个叛逆的小孩——他不是坏孩子，而是从未被真正听见的孩子。小时候，你的声音、你的需求、你的边界经常被忽视或者压制，所以你学会了用愤怒和反抗来保护自己。你不是不愿意服从，而是讨厌被强迫；你不是故意唱反调，而是需要被证明自己是独立的存在。成年后，你的叛逆可能表现为拒绝妥协、讨厌被控制、或者在人际关系中过于激烈地保护自己的边界。这是你的保护机制，但有时候也会让你错过真正重要的东西。',
    descriptionEn: 'A rebellious child lives deep within you — not a bad kid, but one who was never truly heard. As a child, your voice, needs, and boundaries were often ignored or suppressed, so you learned to protect yourself with anger and defiance. You\'re not unwilling to cooperate — you hate being forced; you don\'t intentionally rebel — you need to prove you\'re an independent being. As an adult, your rebellion may show as refusing to compromise,讨厌 being controlled, or fiercely protecting your boundaries in relationships. This is your defense mechanism, but sometimes it makes you miss what truly matters.',
    healing: '你的叛逆有它存在的理由。但试着区分：这件事是"我真正不认同"，还是"我只是讨厌被控制"？你的独立不等于孤立。有时候，让自己在乎的人靠近，并不等于失去自己。',
    healingEn: 'Your rebellion has its reason. But try to distinguish: Is this "I truly disagree", or "I just hate being controlled"? Your independence doesn\'t equal isolation. Sometimes letting someone you care about get close doesn\'t mean losing yourself.',
  },
  PERFECTIONIST: {
    code: 'PERFECTIONIST', name: '完美主义小孩', nameEn: 'Perfectionist Child', emoji: '📐',
    tagline: '你已经很努力了，你可以放下那把尺子了', taglineEn: 'You\'ve tried hard enough. You can put down that ruler now',
    description: '你的内心住着一个永远在评判自己、永远觉得自己不够好的小孩。在你的成长环境里，爱似乎是与"表现"挂钩的——你必须做得漂亮、做得正确、做得比別人好，才能被喜欢。这种模式让你追求卓越，但也让你持续生活在焦虑之中——总是担心自己不够好、总是害怕犯错误、总是用放大镜看自己的缺点。成年后，你可能经常陷入过度反思、拖延然后赶工、或者在人前完美在人后崩溃的循环。',
    descriptionEn: 'A child who is always judging themselves, always feeling insufficient, lives within you. In your environment, love seemed tied to "performance" — you had to do it beautifully, correctly, better than others to be liked. This pattern drives you toward excellence but keeps you in constant anxiety — always worried you\'re not good enough, always afraid of mistakes, always seeing your flaws under a magnifying glass. As an adult, you may fall into cycles of over-reflection, procrastination-then-cramming, or appearing perfect to others while falling apart in private.',
    healing: '停下来。那个小孩不需要再证明什么了。你的价值从来不是打分打出来的——你在成为任何人之前就已经值得被爱。试着做一件"没那么好"的事：画歪的画、唱跑调的歌、发一条不用反复修改的消息。允许自己及格，允许自己休息，允许自己只是存在，而不是表现。完美主义曾经保护了你，现在你可以放下那把尺子了。',
    healingEn: 'Stop. That child doesn\'t need to prove anything anymore. Your worth was never measured on a scorecard — you were worthy of love before you became anyone. Try doing something "not that great": a crooked drawing, an off-key song, a message sent without editing it ten times. Give yourself permission to be average, to rest, to simply exist rather than perform. Perfectionism once protected you. Now you can put down that ruler.',
  },
  CARETAKER: {
    code: 'CARETAKER', name: '照顾者小孩', nameEn: 'Caretaker Child', emoji: '🤲',
    tagline: '你还好吗？需要我做什么？', taglineEn: 'Are you okay? What can I do for you?',
    description: '你内心住着一个早早就学会了"照顾别人"的小孩。在你的童年里，"被爱"和"有用"是一回事——你的雷达永远对准别人的需要，你是第一个递纸巾的人、第一个问"你怎么了"的人、第一个把自己的东西让给别人的人。你擅长让别人舒服，却不擅长让自己被照顾。你把"被需要"当作安全感的来源，却也忘了问自己：那我呢？我需要谁？',
    descriptionEn: 'A child who learned to "take care of others" far too early lives within you. In your childhood, "being loved" and "being useful" were the same thing — your radar is always tuned to others\' needs. You\'re the first to hand over a tissue, the first to ask "what\'s wrong", the first to give up what you have for someone else. You\'re great at making others comfortable, but terrible at letting yourself be cared for. You use "being needed" as your source of security, but forgot to ask yourself: what about me? Who do I need?',
    healing: '你可以照顾别人，但不必为别人的情绪负责。你的价值不需要用"有用"来证明——你什么都不做，也值得被爱。试着练习说"我累了""我需要帮助""今天换你来照顾我"。把那双伸向别人的手，偶尔也收回来抱抱自己。你不是别人的救生圈，你是你自己世界的中心。',
    healingEn: 'You can care for others, but you don\'t have to be responsible for everyone\'s emotions. Your worth doesn\'t need to be proven through "usefulness" — you deserve love even when you do nothing. Practice saying "I\'m tired", "I need help", "today it\'s your turn to take care of me". Take those hands that always reach out to others — and wrap them around yourself once in a while. You are not anyone\'s life raft. You are the center of your own world.',
  },
};

// ── Calculate ─────────────────────────────────────────────────────────────
export function calculateInnerChild(answers: Record<number, number>): number {
  const scores: Record<string, number> = { WOUNDED: 0, MAGICAL: 0, REBEL: 0, PERFECTIONIST: 0, CARETAKER: 0 };
  Object.entries(answers).forEach(([qIdStr, optIdx]) => {
    const qIndex = parseInt(qIdStr) - 1;
    const question = innerChildQuestions[qIndex];
    if (!question) return;
    if (optIdx >= 0 && optIdx < question.options.length) {
      const optionScores = question.options[optIdx].scores;
      Object.entries(optionScores).forEach(([type, val]) => { scores[type] = (scores[type] || 0) + val; });
    }
  });
  let maxScore = -1; let result = 0;
  const typeOrder = ['WOUNDED', 'MAGICAL', 'REBEL', 'PERFECTIONIST', 'CARETAKER'];
  typeOrder.forEach((type, idx) => { if ((scores[type] || 0) > maxScore) { maxScore = scores[type] || 0; result = idx; } });
  return result;
}