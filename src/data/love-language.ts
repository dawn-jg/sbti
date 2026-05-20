// Love Language Test - 爱的五种语言 (Gary Chapman)
// 10 questions, 5 types: WORDS / ACTS / GIFTS / TIME / TOUCH
// 每个选项用 scores 标记它加给哪种类型的分数

export type LoveLanguageType = 'WORDS' | 'ACTS' | 'GIFTS' | 'TIME' | 'TOUCH';

export interface LoveLanguageTypeInfo {
  code: LoveLanguageType;
  name: string;
  nameEn: string;
  emoji: string;
  description: string;
  descriptionEn: string;
  tagline: string;
  taglineEn: string;
}

export interface LoveLanguageQuestionOption {
  text: string;
  scores: Partial<Record<LoveLanguageType, number>>;
}

export interface LoveLanguageQuestion {
  id: number;
  text: string;
  textEn: string;
  options: LoveLanguageQuestionOption[];
}

export const loveLanguageTypes: Record<LoveLanguageType, LoveLanguageTypeInfo> = {
  WORDS: {
    code: 'WORDS', name: '肯定的言语', nameEn: 'Words of Affirmation',
    emoji: '💬',
    description: '对你来说，赞美、鼓励和温柔的言辞是最动人的礼物。你渴望听到伴侣真诚地表达爱意和欣赏。',
    descriptionEn: 'For you, compliments, encouragement, and kind words are the most moving gifts. You long to hear your partner express love and appreciation sincerely.',
    tagline: '爱是听你说出口的温柔', taglineEn: 'Love is the tenderness you speak aloud',
  },
  ACTS: {
    code: 'ACTS', name: '服务的行动', nameEn: 'Acts of Service',
    emoji: '🛠️',
    description: '你最能感受到爱的方式，是伴侣为你做的实实在在的事。一碗热汤、一次接送，都胜过千言万语。',
    descriptionEn: 'The way you feel love most is through practical things your partner does for you. A warm bowl of soup, a ride home — actions speak louder than words.',
    tagline: '爱是行动，不是说辞', taglineEn: 'Love is action, not just words',
  },
  GIFTS: {
    code: 'GIFTS', name: '接受礼物', nameEn: 'Receiving Gifts',
    emoji: '🎁',
    description: '你注重礼物的象征意义——它代表对方花心思了解你、惦记你。礼物的价值不在于价格，而在于那份被惦记的心意。',
    descriptionEn: 'You value the symbolism of gifts — it represents your partner taking the time to know and remember you. The value lies not in price, but in being thought of.',
    tagline: '爱是你惦记我的样子', taglineEn: 'Love is the way you remember me',
  },
  TIME: {
    code: 'TIME', name: '优质时光', nameEn: 'Quality Time',
    emoji: '⏰',
    description: '全心全意的陪伴是你在关系中最大的安全感来源。放下手机、认真倾听、一起经历，才是最好的爱的表达。',
    descriptionEn: 'Undivided companionship is your greatest source of security in a relationship. Putting down the phone, truly listening, sharing experiences — that\'s the best expression of love.',
    tagline: '爱是为你停下脚步的时光', taglineEn: 'Love is the time you stop for me',
  },
  TOUCH: {
    code: 'TOUCH', name: '身体接触', nameEn: 'Physical Touch',
    emoji: '🤗',
    description: '拥抱、牵手、依偎——身体上的亲密接触是你表达和接收爱的首选语言。一个拥抱胜过一封情书。',
    descriptionEn: 'Hugs, holding hands, cuddling — physical intimacy is your first language for expressing and receiving love. One embrace is worth a thousand love letters.',
    tagline: '爱是一个温暖的拥抱', taglineEn: 'Love is a warm embrace',
  },
};

export const loveLanguageQuestions: LoveLanguageQuestion[] = [
  {
    id: 1,
    text: '伴侣做了什么事让你最开心？',
    textEn: 'What does your partner do that makes you happiest?',
    options: [
      { text: '认真地说"我爱你""你很棒""感谢有你在身边"', scores: { WORDS: 1 } },
      { text: '默默地帮你把事情做好——洗碗、接孩子、搞定头疼的账单', scores: { ACTS: 1 } },
      { text: '记住你喜欢的东西，送你一个想要很久的小礼物', scores: { GIFTS: 1 } },
      { text: '关掉手机，一整天专门陪你，做什么都行', scores: { TIME: 1 } },
      { text: '牵手散步、靠在肩上看电影、给你一个拥抱', scores: { TOUCH: 1 } },
    ],
  },
  {
    id: 2,
    text: '你抱怨最多的事情是？',
    textEn: 'What do you complain about most often?',
    options: [
      { text: '他/她很少说好听的话，连句谢谢都不说', scores: { WORDS: 1 } },
      { text: '答应做的事总是拖延或者敷衍，从不主动帮忙', scores: { ACTS: 1 } },
      { text: '生日、纪念日总是忘，从来不准备惊喜', scores: { GIFTS: 1 } },
      { text: '两个人在一起时，他/她总是玩手机心不在焉', scores: { TIME: 1 } },
      { text: '好像很久没有抱过了，牵手都觉得是奢侈', scores: { TOUCH: 1 } },
    ],
  },
  {
    id: 3,
    text: '你出差一周回来，最希望伴侣做的第一件事是？',
    textEn: 'After a week away on a business trip, the first thing you want your partner to do is?',
    options: [
      { text: '一个深情的拥抱+一句"我好想你"', scores: { TOUCH: 1 } },
      { text: '做好饭、备好热水澡，让你舒舒服服放松下来', scores: { ACTS: 1 } },
      { text: '拿出一份精心准备的小礼物，说"欢迎回家"', scores: { GIFTS: 1 } },
      { text: '放下所有安排，一整晚都属于你们两个人', scores: { TIME: 1 } },
      { text: '看着你的眼睛说"你不在的这几天，我每天都在想你"', scores: { WORDS: 1 } },
    ],
  },
  {
    id: 4,
    text: '你们吵架后的和解方式，你更倾向哪个？',
    textEn: 'After a fight, how do you prefer to make up?',
    options: [
      { text: '说清楚——把感受和想法都摊开来好好谈', scores: { WORDS: 1 } },
      { text: '行动表示——主动做顿饭，或者用其他方式表达"我错了"', scores: { ACTS: 1 } },
      { text: '不需要什么特别的，一个小礼物就能让气氛缓和', scores: { GIFTS: 1 } },
      { text: '一起出去走走，换个环境，在散步中把话说开', scores: { TIME: 1 } },
      { text: '一个拥抱胜过千言万语，拥抱着说着说着就和好了', scores: { TOUCH: 1 } },
    ],
  },
  {
    id: 5,
    text: '你觉得自己表达爱意最自然的方式是？',
    textEn: 'What is your most natural way of expressing love?',
    options: [
      { text: '经常夸赞伴侣的外表、能力或者做的某件小事', scores: { WORDS: 1 } },
      { text: '默默帮伴侣做很多事情，不说但一直在做', scores: { ACTS: 1 } },
      { text: '收藏各种有意义的小东西，偶尔拿出来作为礼物送', scores: { GIFTS: 1 } },
      { text: '花时间陪伴，一起看电影、散步、聊天', scores: { TIME: 1 } },
      { text: '喜欢肢体接触——牵手、摸头、拥抱、依偎', scores: { TOUCH: 1 } },
    ],
  },
  {
    id: 6,
    text: '如果你不开心，你最可能希望伴侣怎么做？',
    textEn: 'When you\'re feeling down, what do you most want your partner to do?',
    options: [
      { text: '抱抱你，静静地陪着你，不用说太多话', scores: { TOUCH: 1 } },
      { text: '帮你把今天的烦心事分担一些，比如做饭或者送孩子', scores: { ACTS: 1 } },
      { text: '跟你说一些鼓励和肯定的话，让你重新振作', scores: { WORDS: 1 } },
      { text: '放下一切事情，专心陪你度过这个低潮期', scores: { TIME: 1 } },
      { text: '送一个小礼物或者一束花，让你知道他在乎你', scores: { GIFTS: 1 } },
    ],
  },
  {
    id: 7,
    text: '你收到的最感动的一份礼物是？',
    textEn: 'The most touching gift you\'ve ever received was...',
    options: [
      { text: '一张手写的卡片，或者一句真诚的表白', scores: { WORDS: 1 } },
      { text: '对方在你最需要的时候出现，帮你搞定了一件一直拖着的事', scores: { ACTS: 1 } },
      { text: '一份很有心思的礼物——说明他一直在观察和记得你喜欢什么', scores: { GIFTS: 1 } },
      { text: '两个人一起度过的一整段特别时光，现在想起来还是觉得很幸福', scores: { TIME: 1 } },
      { text: '一个突如其来的拥抱，或者一场深夜的谈心', scores: { TOUCH: 1 } },
    ],
  },
  {
    id: 8,
    text: '在公众场合，你最喜欢伴侣如何表达对你的喜欢？',
    textEn: 'In public, how do you most like your partner to show they like you?',
    options: [
      { text: '向朋友介绍你，夸你哪里哪里好', scores: { WORDS: 1 } },
      { text: '牵着你的手不放，或者自然地把手搭在你腰上', scores: { TOUCH: 1 } },
      { text: '提前做好安排，带你去吃一顿好的，或者一起参加活动', scores: { ACTS: 1 } },
      { text: '精心准备一份礼物，或者在朋友圈发关于你们的动态', scores: { GIFTS: 1 } },
      { text: '和你一起参与朋友的聚会，表现得跟你很亲密', scores: { TIME: 1 } },
    ],
  },
  {
    id: 9,
    text: '你的爱情观，你最在乎的是？',
    textEn: 'In your philosophy of love, what matters most to you?',
    options: [
      { text: '有话直说，能坦诚表达喜欢和不满的关系', scores: { WORDS: 1 } },
      { text: '相互照顾，你帮我我帮你，踏踏实实过日子', scores: { ACTS: 1 } },
      { text: '记得彼此的喜好，在重要日子用礼物表达在意', scores: { GIFTS: 1 } },
      { text: '在一起时 quality time，哪怕什么都不做也很自在', scores: { TIME: 1 } },
      { text: '身体上的亲密——拥抱、牵手、依偎，是爱的语言也是爱的证明', scores: { TOUCH: 1 } },
    ],
  },
  {
    id: 10,
    text: '如果用一句话来形容你理想的亲密关系，你会说？',
    textEn: 'If you could describe your ideal intimate relationship in one sentence, it would be...',
    options: [
      { text: '我们从不吝啬对彼此的赞美，甜言蜜语说到老', scores: { WORDS: 1 } },
      { text: '我们像最好的搭档，生活里的事都一起扛', scores: { ACTS: 1 } },
      { text: '我们记得关于彼此的一切，礼物和仪式感让爱一直新鲜', scores: { GIFTS: 1 } },
      { text: '我们在一起的时间质量很高，即使什么都不做也很满足', scores: { TIME: 1 } },
      { text: '我们每天都用身体接触确认彼此的爱，一个拥抱胜过一百万句话', scores: { TOUCH: 1 } },
    ],
  },
];

export function calculateLoveLanguage(answers: Record<number, number>): LoveLanguageType {
  const scores: Record<LoveLanguageType, number> = {
    WORDS: 0, ACTS: 0, GIFTS: 0, TIME: 0, TOUCH: 0,
  };
  Object.entries(answers).forEach(([qIdStr, optionIndex]) => {
    const qIndex = parseInt(qIdStr) - 1;
    const question = loveLanguageQuestions[qIndex];
    if (!question) return;
    const option = question.options[optionIndex];
    if (!option) return;
    for (const [key, value] of Object.entries(option.scores)) {
      if (value) (scores as Record<string, number>)[key] += value;
    }
  });
  let maxType: LoveLanguageType = 'WORDS';
  let maxScore = 0;
  for (const [key, value] of Object.entries(scores)) {
    if (value > maxScore) { maxScore = value; maxType = key as LoveLanguageType; }
  }
  return maxType;
}