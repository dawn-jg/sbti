/**
 * Aura Color / Energy Type Test (气场颜色/能量类型测试)
 *
 * 10 questions, each with 3 options.
 * 7 aura color types based on energy healing traditions.
 * Each option has a scores array of 7 numbers mapping to the 7 types.
 */

// ── Types ────────────────────────────────────────────────────────────────────

export interface AuraOption {
  text: string;
  textEn: string;
  scores: number[]; // [RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET]
}

export interface AuraQuestion {
  id: number;
  text: string;
  textEn: string;
  options: AuraOption[];
}

export interface AuraTypeInfo {
  id: number;
  code: string;
  name: string;
  nameEn: string;
  emoji: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  chakra: string;
  advice: string;
  adviceEn: string;
}

// ── Aura Types ───────────────────────────────────────────────────────────────

export const auraTypes: AuraTypeInfo[] = [
  {
    id: 0,
    code: 'RED',
    name: '红色气场',
    nameEn: 'Red Aura',
    emoji: '🔴',
    tagline: '扎根大地，燃烧生命',
    taglineEn: 'Grounded and burning with life force',
    description:
      '你拥有强大的生命力和原始能量。你的气场如同燃烧的火焰，散发着安全感与掌控力。你脚踏实地、目标明确、不惧挑战，是天生的行动派和守护者。在人群中，你是那股让人安心、值得信赖的稳定力量。你的存在本身就是一种宣言：我在这里，我活着，我战斗。',
    descriptionEn:
      'You possess powerful life force and primal energy. Your aura burns like a flame, radiating security and control. Grounded, purposeful, and unafraid of challenges, you are a natural doer and protector. In any group, you are the steady, trustworthy force that puts others at ease. Your mere presence is a declaration: I am here, I am alive, I fight.',
    chakra: 'Muladhara（根轮 / Root Chakra）',
    advice:
      '学会在行动之前深呼吸。你的力量来自大地，但偶尔仰望天空会让你走得更远。当愤怒或焦虑升起时，赤脚踩地十分钟。',
    adviceEn:
      'Learn to breathe before you act. Your strength comes from the earth, but occasionally looking up at the sky will take you further. When anger or anxiety rises, walk barefoot on the ground for ten minutes.',
  },
  {
    id: 1,
    code: 'ORANGE',
    name: '橙色气场',
    nameEn: 'Orange Aura',
    emoji: '🟠',
    tagline: '拥抱感官，创造快乐',
    taglineEn: 'Embrace the senses, create joy',
    description:
      '你的气场如同一轮温暖的落日，散发着创造力与对生命的热忱。你是感官世界的大师——懂得享受美食、音乐、艺术和人与人之间的亲密联结。你不把快乐当作奢侈品，而是将它视为生命的必需品。你的感染力让身边的人变得轻盈自在，和你在一起，世界变得更鲜活。',
    descriptionEn:
      "Your aura glows like a warm sunset, radiating creativity and passion for life. You are a master of the sensory world — savoring food, music, art, and intimate human connection. You don't treat joy as a luxury; it is a necessity. Your contagious energy makes those around you lighter and freer. With you, the world becomes more vivid.",
    chakra: 'Svadhisthana（脐轮 / Sacral Chakra）',
    advice:
      '创造力是你最大的财富，但也别让它变成逃避现实的出口。建立健康的边界，让快乐与责任并行。偶尔试试独处创作，你会发现新的自己。',
    adviceEn:
      'Creativity is your greatest asset, but don\'t let it become an escape from reality. Build healthy boundaries so that joy and responsibility can coexist. Try creating alone sometimes — you may discover a new version of yourself.',
  },
  {
    id: 2,
    code: 'YELLOW',
    name: '黄色气场',
    nameEn: 'Yellow Aura',
    emoji: '🟡',
    tagline: '洞见之光，思辨之焰',
    taglineEn: 'Light of insight, flame of intellect',
    description:
      '你的气场如正午的阳光，明亮、温暖、充满知性力量。你对世界保持着永不枯竭的好奇心，学习与探索是你最自然的呼吸方式。你擅长用逻辑拆解复杂问题，也懂得用幽默化解尴尬。你是天生的启蒙者——总能用一句话点亮别人的盲区，让他们看见新的可能。你的乐观不是天真，而是基于对事物本质的深刻理解。',
    descriptionEn:
      "Your aura shines like midday sunlight — bright, warm, and intellectually powerful. You maintain an inexhaustible curiosity about the world; learning and exploration are your most natural way of breathing. You excel at deconstructing complex problems with logic and dissolving tension with humor. You are a natural illuminator — always able to light up someone's blind spot with a single sentence. Your optimism is not naivety but rooted in deep understanding.",
    chakra: 'Manipura（太阳神经丛 / Solar Plexus Chakra）',
    advice:
      '头脑是利器，但心是罗盘。有时答案不在逻辑的尽头，而在感受的深处。当你过度分析时，试着问自己：我的身体此刻感受到了什么？',
    adviceEn:
      'The mind is a sharp tool, but the heart is your compass. Sometimes the answer lies not at the end of logic but in the depths of feeling. When you find yourself over-analyzing, pause and ask: what is my body feeling right now?',
  },
  {
    id: 3,
    code: 'GREEN',
    name: '绿色气场',
    nameEn: 'Green Aura',
    emoji: '🟢',
    tagline: '以心为锚，以爱为药',
    taglineEn: 'Heart as anchor, love as medicine',
    description:
      '你的气场如一片宁静的森林，散发着疗愈与平衡的能量。你天生拥有共情的天赋——无需言语就能感知他人的情绪频率。你的存在本身就是一种抚慰，人们不自觉地在你身边卸下防备。你追求和谐而非对抗，但不是因为软弱，而是因为你深知真正的力量来自连接而非征服。你是世界的疗愈师。',
    descriptionEn:
      "Your aura is like a tranquil forest, radiating healing and balancing energy. You are born with the gift of empathy — able to sense others' emotional frequencies without words. Your very presence is soothing; people naturally let down their guard around you. You seek harmony over confrontation, not out of weakness, but because you deeply understand that true strength comes from connection, not conquest. You are a healer of the world.",
    chakra: 'Anahata（心轮 / Heart Chakra）',
    advice:
      '疗愈他人之前，先疗愈自己。你的心是无限的爱之源泉，但需要定期清理沉淀。每天给自己五分钟，把手放在心口，只是感恩。',
    adviceEn:
      'Before healing others, heal yourself. Your heart is an infinite wellspring of love, but it needs regular clearing. Give yourself five minutes each day — place your hand on your heart and simply give thanks.',
  },
  {
    id: 4,
    code: 'BLUE',
    name: '蓝色气场',
    nameEn: 'Blue Aura',
    emoji: '🔵',
    tagline: '言为心声，静水流深',
    taglineEn: 'Truth through words, depth through stillness',
    description:
      '你的气场如一片清澈的晴空，散发着宁静与真诚的力量。你是天生的沟通者——不是那种夸夸其谈的类型，而是能够用最精准的语言触碰他人灵魂的人。你重视真实胜过一切，厌恶虚伪和表面功夫。在你面前，人们不自觉地变得坦诚，因为你创造了一个安全的表达空间。你像一面平静的湖水，映照出他人最真实的样子。',
    descriptionEn:
      'Your aura is like a clear blue sky, radiating tranquility and sincerity. You are a natural communicator — not the loud kind, but the kind who can touch another\'s soul with the most precise words. You value truth above all else and detest falseness and superficiality. In your presence, people find themselves becoming more honest, because you create a safe space for authentic expression. You are like a still lake, reflecting others as they truly are.',
    chakra: 'Vishuddha（喉轮 / Throat Chakra）',
    advice:
      '说出真相是你的天赋，但时机和方式同样重要。有时沉默比语言更有力量。如果感到喉间有话说不出，试着用书写释放心声。',
    adviceEn:
      'Speaking truth is your gift, but timing and delivery matter just as much. Sometimes silence is more powerful than words. If you feel words stuck in your throat, try writing to release your inner voice.',
  },
  {
    id: 5,
    code: 'INDIGO',
    name: '靛蓝色气场',
    nameEn: 'Indigo Aura',
    emoji: '🟣',
    tagline: '洞穿迷雾，感知本质',
    taglineEn: 'Pierce the veil, perceive the essence',
    description:
      '你的气场如深邃的夜空，承载着超越常人的直觉与洞察力。你不需要逻辑推导就能感知事物的真相——这是一种灵魂层面的"知道"。你常常在别人开口之前就已经理解了他们的意图和情绪。你活在一个比常人更丰富的感知世界里，有时也因此感到孤独。但这种孤独是礼物，它让你能听见宇宙的低语。',
    descriptionEn:
      'Your aura is like the deep night sky, carrying intuition and insight beyond the ordinary. You don\'t need logical deduction to perceive the truth — it\'s a soul-level "knowing". You often understand others\' intentions and emotions before they speak. You live in a richer perceptual world than most, and sometimes this brings loneliness. But this loneliness is a gift — it allows you to hear the whispers of the universe.',
    chakra: 'Ajna（眉心轮 / Third Eye Chakra）',
    advice:
      '你的直觉是精准的指南针，信任它，但也要学会接地。过多地停留在第六感中会让人飘忽。每天在日记里写下你感知到的东西，让无形的洞见化为有形的智慧。',
    adviceEn:
      'Your intuition is a precise compass — trust it, but also learn to ground yourself. Staying too long in the sixth sense can make you untethered. Write down what you perceive in a journal each day, transforming invisible insights into tangible wisdom.',
  },
  {
    id: 6,
    code: 'VIOLET',
    name: '紫色气场',
    nameEn: 'Violet Aura',
    emoji: '💜',
    tagline: '超越边界，引领变革',
    taglineEn: 'Transcend boundaries, lead transformation',
    description:
      '你的气场振动着最高频率的能量——它既是终点也是起点，既是毁灭也是重生。你是天生的远见者和变革者，能看见别人看不到的未来图景。你无法忍受平庸和停滞，总是被一种不可名状的使命感推动着前进。你的思维跨越了世俗的框架，常常走在时代的前面。你来到这里不是为了适应世界，而是为了让世界进化。',
    descriptionEn:
      'Your aura vibrates at the highest frequency — it is both ending and beginning, destruction and rebirth. You are a born visionary and transformer, able to see future landscapes invisible to others. You cannot tolerate mediocrity or stagnation, always driven forward by an indescribable sense of mission. Your thinking transcends conventional frameworks and often runs ahead of the times. You did not come here to fit into the world — you came to help it evolve.',
    chakra: 'Sahasrara（顶轮 / Crown Chakra）',
    advice:
      '你能看见山顶的风景，但也别忘记山脚下还有需要你拉一把的人。高频能量需要低频载体的支撑——照顾好你的身体，它是你在三维世界的地基。',
    adviceEn:
      'You can see the view from the mountaintop, but don\'t forget those at the base who need your hand. High-frequency energy needs a low-frequency vessel to carry it — take care of your body; it is your foundation in the three-dimensional world.',
  },
];

// ── Questions ────────────────────────────────────────────────────────────────

export const auraQuestions: AuraQuestion[] = [
  {
    id: 1,
    text: '走进一个陌生房间，你最先注意到什么？',
    textEn: 'When you walk into an unfamiliar room, what do you notice first?',
    options: [
      {
        text: '房间里的"气场"和能量流动',
        textEn: 'The "energy" and energy flow in the room',
        scores: [0, 0, 0, 0, 0, 2, 2],
      },
      {
        text: '谁在主导局面，权力结构是怎样的',
        textEn: 'Who is in charge and what the power structure looks like',
        scores: [2, 0, 1, 0, 0, 0, 0],
      },
      {
        text: '这里的人是否友善，氛围是否温暖',
        textEn: 'Whether the people here are friendly and if the atmosphere is warm',
        scores: [0, 1, 0, 2, 1, 0, 0],
      },
    ],
  },
  {
    id: 2,
    text: '面对一个重大决定时，你最依赖什么？',
    textEn: 'When facing a major decision, what do you rely on most?',
    options: [
      {
        text: '理性的分析和逻辑推理',
        textEn: 'Rational analysis and logical reasoning',
        scores: [0, 0, 2, 0, 2, 0, 0],
      },
      {
        text: '身体的第一反应和直觉判断',
        textEn: 'Your body\'s first reaction and intuitive judgment',
        scores: [2, 0, 0, 0, 0, 2, 0],
      },
      {
        text: '内心的价值观和情感共振',
        textEn: 'Your inner values and emotional resonance',
        scores: [0, 0, 0, 2, 0, 0, 2],
      },
    ],
  },
  {
    id: 3,
    text: '社交场合中，你通常扮演什么角色？',
    textEn: 'In social settings, what role do you usually play?',
    options: [
      {
        text: '点燃气氛的能量中心，让大家开心',
        textEn: 'The energy center that lights up the atmosphere and makes everyone happy',
        scores: [0, 2, 2, 0, 0, 0, 0],
      },
      {
        text: '倾听者和心灵港湾，别人愿意向我敞开心扉',
        textEn: 'Listener and emotional harbor — others are willing to open up to me',
        scores: [0, 0, 0, 2, 2, 0, 0],
      },
      {
        text: '安静的观察者，在角落默默洞察一切',
        textEn: 'A quiet observer, silently observing everything from a corner',
        scores: [0, 0, 0, 0, 0, 2, 2],
      },
    ],
  },
  {
    id: 4,
    text: '什么最能让你感到真正充满能量？',
    textEn: 'What makes you feel truly energized?',
    options: [
      {
        text: '挑战身体极限，感受生命力的迸发',
        textEn: 'Pushing your physical limits and feeling the surge of life force',
        scores: [2, 1, 0, 0, 0, 0, 0],
      },
      {
        text: '创造美的事物，沉浸在感官的世界里',
        textEn: 'Creating beautiful things, immersing yourself in the sensory world',
        scores: [0, 2, 0, 1, 0, 0, 0],
      },
      {
        text: '深入学习新知识，建立自己的认知体系',
        textEn: 'Deeply learning new knowledge and building your own understanding',
        scores: [0, 0, 2, 0, 0, 1, 0],
      },
    ],
  },
  {
    id: 5,
    text: '当你感到疲惫时，什么最能恢复你的能量？',
    textEn: 'When you feel exhausted, what best restores your energy?',
    options: [
      {
        text: '独处冥想，连接内在的自我',
        textEn: 'Meditating alone and connecting with your inner self',
        scores: [0, 0, 0, 0, 0, 2, 2],
      },
      {
        text: '走进大自然，让大地重新给我扎根',
        textEn: 'Going into nature and letting the earth ground you again',
        scores: [1, 0, 0, 2, 0, 0, 0],
      },
      {
        text: '找信任的朋友聊天，说出心里话',
        textEn: 'Chatting with a trusted friend and speaking from the heart',
        scores: [0, 1, 0, 0, 2, 0, 0],
      },
    ],
  },
  {
    id: 6,
    text: '你对"成功"的定义最接近哪一种？',
    textEn: 'Which comes closest to your definition of "success"?',
    options: [
      {
        text: '影响世界、推动变革，留下精神遗产',
        textEn: 'Influencing the world, driving transformation, leaving a spiritual legacy',
        scores: [0, 0, 0, 0, 0, 1, 2],
      },
      {
        text: '拥有丰富的体验和深厚的情感联结',
        textEn: 'Having rich experiences and deep emotional connections',
        scores: [0, 2, 0, 2, 0, 0, 0],
      },
      {
        text: '掌握真知灼见，不断超越自我认知的边界',
        textEn: 'Mastering true wisdom and constantly transcending the boundaries of self-knowledge',
        scores: [0, 0, 2, 0, 0, 2, 0],
      },
    ],
  },
  {
    id: 7,
    text: '面对冲突时，你的本能反应是什么？',
    textEn: 'When faced with conflict, what is your instinctive reaction?',
    options: [
      {
        text: '挺身而出，捍卫自己的立场和边界',
        textEn: 'Stepping forward to defend your position and boundaries',
        scores: [2, 0, 0, 0, 0, 0, 1],
      },
      {
        text: '寻求沟通，找到双方都能接受的方案',
        textEn: 'Seeking communication and finding a solution both sides can accept',
        scores: [0, 0, 0, 1, 2, 0, 0],
      },
      {
        text: '退后一步，从更高的视角理解冲突的本质',
        textEn: 'Stepping back and understanding the nature of the conflict from a higher perspective',
        scores: [0, 0, 1, 0, 0, 2, 0],
      },
    ],
  },
  {
    id: 8,
    text: '你如何看待"命运"这件事？',
    textEn: 'How do you view the idea of "fate"?',
    options: [
      {
        text: '命运由自己创造，行动决定一切',
        textEn: 'Fate is created by oneself — actions determine everything',
        scores: [2, 0, 2, 0, 0, 0, 0],
      },
      {
        text: '冥冥中有更大的力量在指引，我选择信任与臣服',
        textEn: 'There is a greater force guiding — I choose to trust and surrender',
        scores: [0, 0, 0, 0, 0, 2, 2],
      },
      {
        text: '命运是个体与宇宙的和谐共振，平衡即圆满',
        textEn: 'Fate is the harmonious resonance between the individual and the universe — balance is fulfillment',
        scores: [0, 0, 0, 2, 1, 0, 0],
      },
    ],
  },
  {
    id: 9,
    text: '如果有人向你寻求帮助，你更倾向于怎么回应？',
    textEn: 'If someone comes to you for help, how do you tend to respond?',
    options: [
      {
        text: '给出具体可行的行动建议，帮对方解决问题',
        textEn: 'Giving specific and actionable advice to help solve their problem',
        scores: [2, 0, 2, 0, 0, 0, 0],
      },
      {
        text: '用心倾听、给予情感支持，提供疗愈的空间',
        textEn: 'Listening attentively and providing emotional support — a healing space',
        scores: [0, 0, 0, 2, 2, 0, 0],
      },
      {
        text: '帮对方看到更大的图景和内在的智慧',
        textEn: 'Helping them see the bigger picture and their own inner wisdom',
        scores: [0, 0, 0, 0, 0, 2, 2],
      },
    ],
  },
  {
    id: 10,
    text: '你的理想生活更接近哪一种？',
    textEn: 'Which does your ideal life resemble more closely?',
    options: [
      {
        text: '充满冒险与激情，活出生命的力与美',
        textEn: 'Full of adventure and passion — living the strength and beauty of life',
        scores: [2, 2, 0, 0, 0, 0, 0],
      },
      {
        text: '内心平静、关系和谐，万物各安其位',
        textEn: 'Inner peace, harmonious relationships, all things in their rightful place',
        scores: [0, 0, 0, 2, 2, 0, 0],
      },
      {
        text: '不断进化和超越，连接更高的意识层次',
        textEn: 'Constantly evolving and transcending — connecting to higher levels of consciousness',
        scores: [0, 0, 2, 0, 0, 1, 2],
      },
    ],
  },
];

// ── Calculate ────────────────────────────────────────────────────────────────

export function calculateAura(answers: Record<number, number>): number {
  const totalScores: number[] = [0, 0, 0, 0, 0, 0, 0];

  Object.entries(answers).forEach(([qIdStr, optIdx]) => {
    const qIndex = parseInt(qIdStr) - 1; // q.id starts at 1
    const q = auraQuestions[qIndex];
    if (!q) return;
    const option = q.options[optIdx];
    if (!option) return;
    option.scores.forEach((score, typeIndex) => {
      totalScores[typeIndex] += score;
    });
  });

  let maxScore = -1;
  let dominantIndex = 0;
  totalScores.forEach((score, index) => {
    if (score > maxScore) {
      maxScore = score;
      dominantIndex = index;
    }
  });

  return dominantIndex;
}
