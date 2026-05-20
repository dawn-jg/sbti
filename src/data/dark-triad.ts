// Dark Triad / Light Triad Personality Test Data
// 6 types: [0]NARCISSIST [1]MACHIAVELLIAN [2]PSYCHOPATH [3]KANTIAN [4]HUMANIST [5]FAITH

export interface DarkTriadQuestion {
  id: number;
  text: string;
  textEn: string;
  options: {
    text: string;
    textEn: string;
    /** Scores per type: [NARCISSIST, MACHIAVELLIAN, PSYCHOPATH, KANTIAN, HUMANIST, FAITH] */
    scores: [number, number, number, number, number, number];
  }[];
}

export interface DarkTriadTypeInfo {
  id: number;
  code: string;
  name: string;
  nameEn: string;
  emoji: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  warning: string;
  warningEn: string;
}

export const darkTriadTypes: DarkTriadTypeInfo[] = [
  {
    id: 0,
    code: "NARCISSIST",
    name: "自恋型",
    nameEn: "Narcissist",
    emoji: "👑",
    tagline: "我必须是最耀眼的那一个",
    taglineEn: "I must be the most outstanding one",
    description: "你渴望被看见、被认可、站在舞台中央。自我价值感建立在外部的掌声之上，你追求卓越与独特，不甘于平凡。",
    descriptionEn:
      "You crave visibility, recognition, and the center stage. Your self-worth is anchored in external applause, and you pursue excellence and uniqueness.",
    warning: "当聚光灯熄灭，你是否会迷失自己？",
    warningEn: "When the spotlight fades, do you lose yourself?",
  },
  {
    id: 1,
    code: "MACHIAVELLIAN",
    name: "马基雅维利型",
    nameEn: "Machiavellian",
    emoji: "🎭",
    tagline: "规则是给没本事的人准备的",
    taglineEn: "Rules are for those without the skill",
    description: "你深谙人性，善于操控局面，利用信息不对称谋取优势。你在暗处布局，以最小的代价换取最大的收益。",
    descriptionEn:
      "You understand human nature deeply, excel at manipulating situations, and leverage information asymmetry for advantage. You scheme in the shadows for maximum gain at minimum cost.",
    warning: "当你把所有人都当作棋子，信任也会悄然消失。",
    warningEn: "When you treat everyone as a pawn, trust quietly disappears.",
  },
  {
    id: 2,
    code: "PSYCHOPATH",
    name: "心理病态型",
    nameEn: "Psychopath",
    emoji: "🐍",
    tagline: "情绪是弱者的奢侈品",
    taglineEn: "Emotion is a luxury for the weak",
    description: "你冷静理性，不受情绪波动干扰，能在压力下做出冷酷决策。你将他人视为工具，效率高于一切。",
    descriptionEn:
      "You remain calm and rational, unperturbed by emotional turbulence, capable of making cold decisions under pressure. You view others as instruments, and efficiency trumps everything.",
    warning: "剥除情感的同时，你也可能失去了人性最珍贵的东西。",
    warningEn: "Stripping away emotion may also strip away what is most human.",
  },
  {
    id: 3,
    code: "KANTIAN",
    name: "康德型",
    nameEn: "Kantian",
    emoji: "⚖️",
    tagline: "正因如此，正义才称之为正义",
    taglineEn: "That is precisely why it is called justice",
    description: "你以道德原则为行事准则，无论结果如何都坚守底线。你相信正直是一种义务，而非选项。",
    descriptionEn:
      "You act by moral principles regardless of consequences, holding firm to bottom lines. You believe integrity is a duty, not an option.",
    warning: "当原则变成教条，你是否会忽略具体情境中的人？",
    warningEn: "When principles become dogma, do you lose sight of the people in specific situations?",
  },
  {
    id: 4,
    code: "HUMANIST",
    name: "人文主义者",
    nameEn: "Humanist",
    emoji: "🌟",
    tagline: "因为懂得，所以慈悲",
    taglineEn: "Because I understand, I show compassion",
    description: "你以同情心和利他主义为核心，相信每个人的价值。你慷慨助人，从给予中获得深刻的满足感。",
    descriptionEn:
      "Centered on empathy and altruism, you believe in every person's inherent worth. You give generously and find deep fulfillment in helping others.",
    warning: "无条件的善意，有时会滋养不懂感恩的人。",
    warningEn: "Unconditional kindness can sometimes nourish those who do not appreciate it.",
  },
  {
    id: 5,
    code: "FAITH",
    name: "信仰者型",
    nameEn: "Faith Type",
    emoji: "🙏",
    tagline: "善意终将回馈于你",
    taglineEn: "Goodness will return to you",
    description: "你天性信任他人，内心充满灵性与希望。你相信善有善报，愿意相信人性本善。",
    descriptionEn:
      "Naturally trusting, you are filled with spirituality and hope. You believe goodness is rewarded and choose to believe in the good in people.",
    warning: "纯粹的信任，有时会成为他人利用你的入口。",
    warningEn: "Pure trust can sometimes be an opening for others to exploit you.",
  },
];

export const darkTriadQuestions: DarkTriadQuestion[] = [
  {
    id: 1,
    text: "你在会议中目睹同事窃取了你的创意并邀功。你会怎么做？",
    textEn: "During a meeting, you witness a colleague steal your idea and take credit for it. What would you do?",
    options: [
      {
        text: "当场揭穿——我的声誉不容侵犯",
        textEn: "Expose them on the spot — my reputation is non-negotiable",
        scores: [3, 1, 0, 0, 0, 0],
      },
      {
        text: "保持沉默，暗中记下这笔账",
        textEn: "Stay silent and quietly keep a record of this debt",
        scores: [0, 3, 1, 0, 0, 0],
      },
      {
        text: "无所谓，团队成功才是最重要的",
        textEn: "No big deal — the team's success is what matters most",
        scores: [0, 0, 0, 1, 3, 1],
      },
    ],
  },
  {
    id: 2,
    text: "路边一个流浪汉向你讨零钱。你会怎么做？",
    textEn: "A homeless person asks you for spare change on the street. What would you do?",
    options: [
      {
        text: "慷慨施舍——每个人都有被帮助的权利",
        textEn: "Give generously — everyone deserves a helping hand",
        scores: [0, 0, 0, 1, 3, 1],
      },
      {
        text: "直接走开——他的处境与我无关",
        textEn: "Walk away — his situation is none of my business",
        scores: [1, 1, 3, 0, 0, 0],
      },
      {
        text: "思考一下这钱是否真的能帮到他",
        textEn: "Think it through — will this money actually help him?",
        scores: [0, 1, 0, 2, 1, 1],
      },
    ],
  },
  {
    id: 3,
    text: "你在街上捡到一个钱包，里面有现金和身份证。你会怎么做？",
    textEn: "You find a wallet on the street with cash and an ID inside. What would you do?",
    options: [
      {
        text: "原封不动归还——这是做人的基本底线",
        textEn: "Return it intact — this is the basic line of decent human conduct",
        scores: [0, 0, 0, 3, 1, 1],
      },
      {
        text: "现金拿走，其余匿名归还",
        textEn: "Take the cash, return the rest anonymously",
        scores: [1, 3, 1, 0, 0, 0],
      },
      {
        text: "据为己有——谁捡到就是谁的",
        textEn: "Keep it all — finders keepers",
        scores: [1, 1, 3, 0, 0, 0],
      },
    ],
  },
  {
    id: 4,
    text: "团队项目中，有位成员明显力不从心。你会怎么做？",
    textEn: "During a team project, one member is clearly struggling. What would you do?",
    options: [
      {
        text: "帮他一把，但确保大家都知道是我救场",
        textEn: "Help them out, but make sure everyone knows I saved the day",
        scores: [3, 1, 0, 0, 1, 0],
      },
      {
        text: "真心实意地帮助他，不求回报",
        textEn: "Genuinely help them with no strings attached",
        scores: [0, 0, 0, 1, 3, 1],
      },
      {
        text: "让他们自己承担后果——这会凸显我的能力",
        textEn: "Let them face the consequences — this will highlight my capability",
        scores: [1, 3, 1, 0, 0, 0],
      },
    ],
  },
  {
    id: 5,
    text: "你发现了竞争对手的一个致命把柄。你会怎么做？",
    textEn: "You discover a devastating piece of leverage on your competitor. What would you do?",
    options: [
      {
        text: "在关键时刻精准放出，彻底击垮对方",
        textEn: "Deploy it at the critical moment and crush them completely",
        scores: [1, 3, 1, 0, 0, 0],
      },
      {
        text: "毫无愧疚地使用——换作是他也会这么做",
        textEn: "Use it without guilt — they would do the same to me",
        scores: [1, 1, 3, 0, 0, 0],
      },
      {
        text: "保密清白——用实力赢得胜利才是本事",
        textEn: "Keep it clean — winning through genuine skill is the only real victory",
        scores: [0, 0, 0, 3, 1, 1],
      },
    ],
  },
  {
    id: 6,
    text: "一位朋友向你倾诉了一个极为私密的心事。你会怎么做？",
    textEn: "A friend confides a deeply personal secret to you. What would you do?",
    options: [
      {
        text: "视若珍宝——信任神圣不可侵犯",
        textEn: "Treasure it like gold — trust is sacred and inviolable",
        scores: [0, 0, 0, 1, 1, 3],
      },
      {
        text: "记在心里——关键时候这可能是筹码",
        textEn: "Keep it in mind — it might be useful leverage someday",
        scores: [0, 3, 1, 0, 0, 0],
      },
      {
        text: "感动于这份信任，为他提供支持",
        textEn: "Feel honored by their trust and offer support",
        scores: [0, 0, 0, 1, 3, 1],
      },
    ],
  },
  {
    id: 7,
    text: "你获得了一个需要踩着同事上位的晋升机会。你会怎么做？",
    textEn: "You have a promotion opportunity that requires stepping over a colleague. What would you do?",
    options: [
      {
        text: "当仁不让——我比他更有资格",
        textEn: "I deserve it — I'm more qualified than them",
        scores: [3, 1, 1, 0, 0, 0],
      },
      {
        text: "放弃——成功不能建立在别人的不幸上",
        textEn: "Walk away — success built on others' misfortune isn't worth it",
        scores: [0, 0, 0, 3, 1, 1],
      },
      {
        text: "接受，但之后帮他找到新的出路",
        textEn: "Take it, but help them find a new path afterward",
        scores: [1, 1, 0, 1, 3, 1],
      },
    ],
  },
  {
    id: 8,
    text: "在聚会上，有人公然羞辱你。你会怎么做？",
    textEn: "At a gathering, someone publicly humiliates you. What would you do?",
    options: [
      {
        text: "十倍奉还——没有人可以践踏我的尊严",
        textEn: "Pay them back tenfold — no one can trample on my dignity",
        scores: [3, 1, 1, 0, 0, 0],
      },
      {
        text: "微笑以对——秋后算账为时不晚",
        textEn: "Smile through it — settling scores later is still an option",
        scores: [1, 3, 1, 0, 0, 0],
      },
      {
        text: "无动于衷——言语而已，伤不了我分毫",
        textEn: "Stay unmoved — words can't touch me",
        scores: [1, 1, 3, 0, 0, 0],
      },
    ],
  },
  {
    id: 9,
    text: "你看见一位老人拎着沉重的购物袋艰难前行。你会怎么做？",
    textEn: "You see an elderly person struggling with heavy shopping bags. What would you do?",
    options: [
      {
        text: "立刻上前帮忙——出于本能的善意",
        textEn: "Immediately offer help — instinctive compassion",
        scores: [0, 0, 0, 1, 3, 1],
      },
      {
        text: "帮忙——照顾社会中的弱者是一种责任",
        textEn: "Help out — caring for the vulnerable in society is a responsibility",
        scores: [0, 0, 0, 3, 1, 1],
      },
      {
        text: "帮忙——相信小小的善举会在世间流转",
        textEn: "Help out — believing small acts of kindness ripple through the world",
        scores: [0, 0, 0, 1, 1, 3],
      },
    ],
  },
  {
    id: 10,
    text: "你有机会在考试中作弊，而且绝对不会被发现。你会怎么做？",
    textEn: "You have a chance to cheat on an exam and would never get caught. What would you do?",
    options: [
      {
        text: "作弊——规则是给那些不会变通的人设的",
        textEn: "Cheat — rules are for people who can't adapt",
        scores: [1, 1, 3, 0, 0, 0],
      },
      {
        text: "权衡利弊——如果影响足够大，就值得冒险",
        textEn: "Weigh the pros and cons — if the stakes are high enough, it's worth the risk",
        scores: [1, 3, 1, 0, 0, 0],
      },
      {
        text: "拒绝——人格是在无人注视时铸就的",
        textEn: "Refuse — character is forged when no one is watching",
        scores: [0, 0, 0, 3, 1, 1],
      },
    ],
  },
  {
    id: 11,
    text: "一家慈善机构邀请你周末去做志愿者。你会怎么做？",
    textEn: "A charity invites you to volunteer on the weekend. What would you do?",
    options: [
      {
        text: "欣然前往——当然要发朋友圈记录一下",
        textEn: "Gladly accept — and of course post it on social media",
        scores: [3, 1, 0, 0, 1, 0],
      },
      {
        text: "悄悄去——影响力比掌声更重要",
        textEn: "Go quietly — influence matters more than applause",
        scores: [0, 0, 0, 1, 3, 1],
      },
      {
        text: "去——相信宇宙会回馈善良的人",
        textEn: "Go — believing the universe rewards kind people",
        scores: [0, 0, 0, 1, 1, 3],
      },
    ],
  },
  {
    id: 12,
    text: "商务谈判中，对方无意间透露了一个弱点。你会怎么做？",
    textEn: "During a business negotiation, the other party accidentally reveals a weakness. What would you do?",
    options: [
      {
        text: "毫不留情地利用——商场如战场",
        textEn: "Exploit it ruthlessly — all's fair in business and war",
        scores: [1, 1, 3, 0, 0, 0],
      },
      {
        text: "适度利用——要赢，但未来的合作关系也要维护",
        textEn: "Use it judiciously — win, but preserve the future working relationship",
        scores: [1, 3, 0, 0, 1, 0],
      },
      {
        text: "指出这一点，公平公正地谈判",
        textEn: "Point it out and negotiate fairly",
        scores: [0, 0, 0, 3, 1, 1],
      },
    ],
  },
  {
    id: 13,
    text: "网络上，一个陌生人发表了让你极为反感的观点。你会怎么做？",
    textEn: "Online, a stranger posts a viewpoint you find extremely repulsive. What would you do?",
    options: [
      {
        text: "公开反驳——用逻辑让他们无话可说",
        textEn: "Reply publicly — use logic to leave them speechless",
        scores: [3, 1, 0, 0, 0, 0],
      },
      {
        text: "不理会——他们的看法与我的生活无关",
        textEn: "Ignore it — their opinion has nothing to do with my life",
        scores: [1, 1, 3, 0, 0, 0],
      },
      {
        text: "礼貌回应——相信对话能消除隔阂",
        textEn: "Respond politely — believing dialogue can bridge divides",
        scores: [0, 0, 0, 1, 1, 3],
      },
    ],
  },
  {
    id: 14,
    text: "你无意间伤害了别人的感情。你会怎么做？",
    textEn: "You accidentally hurt someone's feelings. What would you do?",
    options: [
      {
        text: "真诚道歉并弥补——共情能力是人的基本素养",
        textEn: "Sincere apology and make it right — empathy is fundamental to being human",
        scores: [0, 0, 0, 1, 3, 1],
      },
      {
        text: "有点恼火——他们太玻璃心了",
        textEn: "Feel slightly annoyed — they're just too thin-skinned",
        scores: [3, 1, 1, 0, 0, 0],
      },
      {
        text: "承认无意，但情绪管理是他人的责任",
        textEn: "Acknowledge it was unintentional, but managing emotions is their responsibility",
        scores: [1, 1, 3, 0, 0, 0],
      },
    ],
  },
  {
    id: 15,
    text: "你时常思考：人生的意义是什么？",
    textEn: "You often ponder: what is the meaning of life?",
    options: [
      {
        text: "留下印记——我要被世人铭记为卓越之人",
        textEn: "To leave a mark — I want to be remembered as someone extraordinary",
        scores: [3, 1, 0, 0, 0, 0],
      },
      {
        text: "坚守原则——正直地活着本身就是意义",
        textEn: "To uphold principles — living with integrity is meaning enough",
        scores: [0, 0, 0, 3, 1, 1],
      },
      {
        text: "保持信仰——有更高的力量在指引着我",
        textEn: "To keep the faith — a higher power guides my path",
        scores: [0, 0, 0, 0, 1, 3],
      },
    ],
  },
];

/**
 * Calculate Dark Triad / Light Triad result from user answers.
 * @param answers - Array of selected option indices (0, 1, or 2) per question
 * @returns The type index (0-5) of the highest-scoring type
 */
export function calculateDarkTriad(answers: Record<number, number>): number {
  const totals: [number, number, number, number, number, number] = [0, 0, 0, 0, 0, 0];

  Object.entries(answers).forEach(([qIdStr, optIdx]) => {
    const qIndex = parseInt(qIdStr) - 1;
    const question = darkTriadQuestions[qIndex];
    if (!question) return;
    const option = question.options[optIdx];
    if (!option) return;
    for (let i = 0; i < 6; i++) {
      totals[i] += option.scores[i];
    }
  });

  let maxIndex = 0;
  for (let i = 1; i < 6; i++) {
    if (totals[i] > totals[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}