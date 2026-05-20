// SBTI data - 30 questions | 27 types matching sbti.ai
// 5 models: 自我 | 情感 | 态度 | 行动驱力 | 社交
// Each question: 3 options, each option has a 27-element scores array

export interface SBTIOption {
  text: string;
  textEn: string;
  scores: number[];
}

export interface SBTIQuestion {
  id: number;
  text: string;
  textEn: string;
  options: SBTIOption[];
}

export interface SBTITypeInfo {
  id: number;
  code: string;
  name: string;
  nameEn: string;
  emoji: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  dimensions: { model: string; modelEn: string; trait: string; traitEn: string; level: string }[];
  traits: string[];
  traitsEn: string[];
  advice: string;
  adviceEn: string;
}

// === Type index map (for scoring reference) ===
// 0:CTRL 1:ATM-er 2:Dior-s 3:BOSS 4:THAN-K 5:OH-NO 6:GOGO 7:SEXY 8:LOVE-R 9:MUM
// 10:FAKE 11:OJBK 12:MALO 13:JOKE-R 14:WOC! 15:THIN-K 16:SHIT 17:ZZZZ 18:POOR
// 19:MONK 20:IMSB 21:SOLO 22:FUCK 23:DEAD 24:IMFW 25:HHHH 26:DRUNK

function score(...values: number[]): number[] {
  return values;
}

export const sbtiQuestions: SBTIQuestion[] = [
  // ===========================
  // 自我模型 (Questions 1-6)
  // ===========================
  {
    id: 1,
    text: "你对自己的整体评价是？",
    textEn: "What's your overall self-assessment?",
    options: [
      {
        text: "我超牛逼",
        textEn: "I'm awesome",
        scores: score(
          3, 0, 0, 2, 0, 0, 1, 1, 0, 0,  // CTRL ATM-er Dior-s BOSS THAN-K OH-NO GOGO SEXY LOVE-R MUM
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  // FAKE OJBK MALO JOKE-R WOC! THIN-K SHIT ZZZZ POOR MONK
          0, 0, 0, 0, 0, 1, 0              // IMSB SOLO FUCK DEAD IMFW HHHH DRUNK
        ),
      },
      {
        text: "我普普通通",
        textEn: "I'm just average",
        scores: score(
          0, 0, 1, 0, 1, 0, 0, 0, 0, 0,
          0, 2, 2, 0, 0, 0, 0, 0, 1, 1,
          0, 0, 0, 0, 0, 1, 0
        ),
      },
      {
        text: "我不确定我是谁",
        textEn: "I'm not sure who I am",
        scores: score(
          0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
          2, 0, 0, 1, 1, 0, 0, 0, 0, 0,
          2, 1, 0, 0, 1, 0, 0
        ),
      },
    ],
  },
  {
    id: 2,
    text: "镜子里的你会对自己说什么？",
    textEn: "What do you say to yourself in the mirror?",
    options: [
      {
        text: "今天也很帅/美呢！",
        textEn: "Looking good today!",
        scores: score(
          2, 0, 0, 1, 0, 0, 1, 3, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 2, 0
        ),
      },
      {
        text: "还行吧，凑合过",
        textEn: "Eh, good enough",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 2, 2, 0, 0, 0, 0, 1, 1, 0,
          0, 0, 0, 0, 1, 0, 0
        ),
      },
      {
        text: "你是谁？",
        textEn: "Who are you?",
        scores: score(
          0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
          3, 0, 0, 0, 1, 0, 0, 0, 0, 0,
          1, 1, 1, 2, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 3,
    text: "当别人夸你时，你第一反应是？",
    textEn: "When someone praises you, your first reaction?",
    options: [
      {
        text: "谢谢，我也这么觉得",
        textEn: "Thanks, I think so too",
        scores: score(
          3, 0, 0, 2, 0, 0, 1, 1, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0
        ),
      },
      {
        text: "没有没有，过奖了",
        textEn: "No no, you flatter me",
        scores: score(
          0, 1, 1, 0, 2, 0, 0, 0, 0, 0,
          0, 1, 2, 0, 0, 0, 0, 0, 1, 0,
          0, 0, 0, 0, 0, 1, 0
        ),
      },
      {
        text: "TA是不是有什么目的？",
        textEn: "Is there an ulterior motive?",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          2, 0, 0, 0, 0, 2, 1, 0, 0, 0,
          0, 1, 2, 0, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 4,
    text: "你觉得自己人生的核心驱动力是什么？",
    textEn: "What's your core life motivation?",
    options: [
      {
        text: "野心和成就",
        textEn: "Ambition and achievement",
        scores: score(
          2, 0, 0, 3, 0, 0, 2, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "爱与被爱",
        textEn: "To love and be loved",
        scores: score(
          0, 1, 0, 0, 2, 0, 0, 2, 3, 2,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0
        ),
      },
      {
        text: "没什么驱动力，混着过",
        textEn: "No real drive, just coasting",
        scores: score(
          0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
          0, 3, 2, 0, 0, 0, 0, 2, 1, 1,
          0, 0, 0, 1, 3, 0, 1
        ),
      },
    ],
  },
  {
    id: 5,
    text: "你对自己的人生方向清楚吗？",
    textEn: "Are you clear about your life direction?",
    options: [
      {
        text: "非常清楚，有详细规划",
        textEn: "Very clear, with detailed plans",
        scores: score(
          2, 0, 0, 3, 0, 0, 2, 0, 0, 0,
          0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "走一步看一步",
        textEn: "Taking it one step at a time",
        scores: score(
          0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
          0, 2, 2, 0, 0, 0, 0, 1, 0, 0,
          0, 0, 0, 0, 0, 1, 0
        ),
      },
      {
        text: "完全迷茫，不知道要干嘛",
        textEn: "Completely lost, no idea what to do",
        scores: score(
          0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
          0, 0, 0, 1, 2, 0, 0, 0, 0, 0,
          2, 2, 1, 1, 2, 0, 0
        ),
      },
    ],
  },
  {
    id: 6,
    text: "你的内心独白通常是什么风格？",
    textEn: "What style is your inner monologue?",
    options: [
      {
        text: "理性分析，逻辑清晰",
        textEn: "Rational analysis, logical and clear",
        scores: score(
          1, 0, 0, 1, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "情绪化，忽上忽下",
        textEn: "Emotional, up and down",
        scores: score(
          0, 0, 0, 0, 0, 2, 0, 0, 1, 0,
          0, 0, 0, 2, 2, 0, 0, 0, 0, 0,
          1, 1, 1, 0, 0, 1, 0
        ),
      },
      {
        text: "一片空白，放空状态",
        textEn: "Blank, just zoning out",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 1, 0, 0, 0, 0, 0, 3, 0, 2,
          0, 0, 0, 2, 2, 0, 0
        ),
      },
    ],
  },

  // ===========================
  // 情感模型 (Questions 7-12)
  // ===========================
  {
    id: 7,
    text: "恋爱中你更像？",
    textEn: "In love, you're more like?",
    options: [
      {
        text: "主动出击型，爱要大声说出来",
        textEn: "Proactive, love must be declared loudly",
        scores: score(
          1, 0, 0, 1, 0, 0, 2, 2, 2, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0
        ),
      },
      {
        text: "默默付出型，对方开心我就开心",
        textEn: "Silent giver, happy when they're happy",
        scores: score(
          0, 2, 0, 0, 1, 0, 0, 0, 1, 2,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "我不谈恋爱，谈恋爱太麻烦",
        textEn: "I don't date, relationships are too much trouble",
        scores: score(
          0, 0, 1, 0, 0, 1, 0, 0, 0, 0,
          2, 2, 0, 1, 0, 1, 0, 1, 0, 2,
          0, 1, 0, 0, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 8,
    text: "看到催泪视频你会？",
    textEn: "When you see a tear-jerker video?",
    options: [
      {
        text: "哭得稀里哗啦",
        textEn: "Cry my eyes out",
        scores: score(
          0, 0, 0, 0, 1, 0, 0, 1, 3, 2,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "内心感动但能忍住",
        textEn: "Moved inside but can hold it in",
        scores: score(
          1, 0, 0, 0, 0, 0, 0, 0, 1, 1,
          0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "毫无波动，甚至想笑",
        textEn: "No emotion, might even laugh",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          2, 0, 0, 1, 0, 0, 1, 1, 0, 0,
          0, 0, 1, 1, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 9,
    text: "你如何处理和伴侣的冲突？",
    textEn: "How do you handle conflicts with your partner?",
    options: [
      {
        text: "主动沟通，摆事实讲道理",
        textEn: "Initiate communication, reason it out",
        scores: score(
          1, 0, 0, 2, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "先冷静几天再说",
        textEn: "Cool off for a few days first",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 2, 0, 0, 0, 1, 0, 2, 0, 1,
          0, 1, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "吵就吵，谁怕谁",
        textEn: "Let's fight, bring it on",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 1, 1, 0, 1, 0, 0, 0,
          0, 0, 3, 0, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 10,
    text: "别人说你\"太粘人\"你什么反应？",
    textEn: "If someone calls you 'too clingy', your response?",
    options: [
      {
        text: "那是因为我太爱了啊！",
        textEn: "That's because I love too much!",
        scores: score(
          0, 1, 0, 0, 0, 0, 0, 1, 3, 2,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "切，那我走远点好了",
        textEn: "Fine, I'll back off then",
        scores: score(
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 2, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "粘人？我根本不需要别人好吧",
        textEn: "Clingy? I don't need anyone anyway",
        scores: score(
          1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
          0, 2, 0, 0, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 11,
    text: "你的情感模式更像？",
    textEn: "Your emotional pattern is more like?",
    options: [
      {
        text: "深情专一，从一而终",
        textEn: "Deeply devoted, loyal to the end",
        scores: score(
          0, 2, 0, 0, 1, 0, 0, 0, 2, 1,
          0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "享受暧昧，不轻易绑定",
        textEn: "Enjoy the flirtation, won't commit easily",
        scores: score(
          1, 0, 0, 1, 0, 0, 0, 2, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "随缘，爱来不来",
        textEn: "Whatever, love comes or it doesn't",
        scores: score(
          0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
          0, 3, 1, 0, 0, 0, 0, 1, 0, 2,
          0, 1, 0, 0, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 12,
    text: "分别时你会？",
    textEn: "When parting ways, you?",
    options: [
      {
        text: "依依不舍，拥抱十分钟",
        textEn: "Reluctant to part, hugging for ten minutes",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 1, 3, 2,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "潇洒挥手，回头再看一眼",
        textEn: "Wave coolly, then glance back once",
        scores: score(
          1, 0, 0, 0, 0, 0, 0, 1, 1, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "终于清净了",
        textEn: "Finally some peace and quiet",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          1, 1, 0, 0, 0, 0, 0, 1, 0, 2,
          0, 1, 0, 0, 0, 0, 0
        ),
      },
    ],
  },

  // ===========================
  // 态度模型 (Questions 13-18)
  // ===========================
  {
    id: 13,
    text: "你对世界的看法是？",
    textEn: "Your view of the world is?",
    options: [
      {
        text: "世界很美好，充满希望",
        textEn: "The world is beautiful, full of hope",
        scores: score(
          0, 0, 0, 0, 3, 0, 1, 0, 1, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 2, 0
        ),
      },
      {
        text: "有善有恶，平常心看待",
        textEn: "Both good and evil, take it as it is",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 2, 0, 0, 0, 1, 0, 0, 0, 1,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "这个世道烂透了",
        textEn: "This world is rotten to the core",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          1, 0, 0, 1, 0, 0, 3, 0, 0, 0,
          0, 1, 2, 0, 0, 0, 1
        ),
      },
    ],
  },
  {
    id: 14,
    text: "看到红灯但没车没人，你？",
    textEn: "Red light, no cars or people around, you?",
    options: [
      {
        text: "等绿灯，规则就是规则",
        textEn: "Wait for green, rules are rules",
        scores: score(
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0, 0, 0, 2,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "看看周围，没人就过",
        textEn: "Check around, go if nobody's watching",
        scores: score(
          1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
          0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "直接过，红绿灯是摆设",
        textEn: "Just go, traffic lights are decoration",
        scores: score(
          0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
          0, 0, 3, 0, 0, 0, 1
        ),
      },
    ],
  },
  {
    id: 15,
    text: "人生的意义是什么？",
    textEn: "What is the meaning of life?",
    options: [
      {
        text: "创造价值，留下点什么",
        textEn: "Create value, leave something behind",
        scores: score(
          1, 0, 0, 3, 0, 0, 2, 0, 0, 0,
          0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "享受当下，开心最重要",
        textEn: "Enjoy the moment, happiness matters most",
        scores: score(
          0, 0, 0, 0, 1, 0, 0, 1, 0, 0,
          0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 3, 1
        ),
      },
      {
        text: "没有意义，活着就是活着",
        textEn: "No meaning, living is just living",
        scores: score(
          0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
          1, 1, 0, 0, 0, 0, 1, 1, 0, 1,
          0, 0, 0, 2, 1, 0, 0
        ),
      },
    ],
  },
  {
    id: 16,
    text: "你对变化的看法是？",
    textEn: "Your view on change is?",
    options: [
      {
        text: "拥抱变化，变化才有机会",
        textEn: "Embrace change, change brings opportunity",
        scores: score(
          0, 0, 0, 2, 0, 0, 3, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0
        ),
      },
      {
        text: "能不变最好不变",
        textEn: "Better not to change if possible",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
          0, 1, 0, 0, 0, 0, 0, 2, 1, 1,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "变或不变，关我什么事",
        textEn: "Change or not, what's it to me",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 3, 1, 0, 0, 0, 0, 1, 0, 0,
          0, 0, 0, 1, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 17,
    text: "你如何处理规则和底线？",
    textEn: "How do you handle rules and boundaries?",
    options: [
      {
        text: "我的规则很明确，不能碰",
        textEn: "My rules are clear, don't cross them",
        scores: score(
          2, 0, 0, 2, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "底线因人而异，可以商量",
        textEn: "Boundaries vary, negotiable",
        scores: score(
          0, 1, 0, 0, 0, 0, 0, 0, 1, 1,
          0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "规则？什么规则？",
        textEn: "Rules? What rules?",
        scores: score(
          0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
          1, 1, 0, 1, 0, 0, 1, 0, 0, 0,
          0, 0, 2, 0, 0, 0, 1
        ),
      },
    ],
  },
  {
    id: 18,
    text: "面对不公的事你会？",
    textEn: "When facing injustice, you?",
    options: [
      {
        text: "站出来硬刚到底",
        textEn: "Stand up and fight to the end",
        scores: score(
          0, 0, 0, 2, 0, 0, 1, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 3, 0, 0, 0, 0
        ),
      },
      {
        text: "心里愤怒但默默忍了",
        textEn: "Angry inside but silently endure",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 2, 0, 0, 0, 1, 0, 0, 0,
          0, 1, 1, 0, 0, 0, 0
        ),
      },
      {
        text: "不关我事，少管闲事",
        textEn: "Not my business, stay out of it",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 3, 1, 0, 0, 0, 0, 1, 0, 1,
          0, 0, 0, 1, 0, 0, 0
        ),
      },
    ],
  },

  // ===========================
  // 行动驱力模型 (Questions 19-24)
  // ===========================
  {
    id: 19,
    text: "你做事最在意？",
    textEn: "What do you care most about when doing things?",
    options: [
      {
        text: "结果好不好",
        textEn: "Whether the result is good",
        scores: score(
          1, 0, 0, 3, 0, 0, 1, 0, 0, 0,
          0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "过程开不开心",
        textEn: "Whether the process is fun",
        scores: score(
          0, 0, 0, 0, 0, 0, 2, 1, 0, 0,
          0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 3, 0
        ),
      },
      {
        text: "别人怎么看我",
        textEn: "How others see me",
        scores: score(
          0, 1, 2, 0, 0, 1, 0, 1, 0, 0,
          1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 20,
    text: "做重大决定时你依赖？",
    textEn: "What do you rely on for big decisions?",
    options: [
      {
        text: "理性分析和数据",
        textEn: "Rational analysis and data",
        scores: score(
          1, 0, 0, 2, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "直觉和感觉",
        textEn: "Gut feeling and intuition",
        scores: score(
          0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
          0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0
        ),
      },
      {
        text: "别人怎么说就怎么来",
        textEn: "Whatever others say, I follow",
        scores: score(
          0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
          1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
          2, 1, 0, 0, 1, 0, 0
        ),
      },
    ],
  },
  {
    id: 21,
    text: "你的工作方式是？",
    textEn: "Your working style is?",
    options: [
      {
        text: "提前规划，按部就班",
        textEn: "Plan ahead, step by step",
        scores: score(
          1, 0, 0, 2, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "随性发挥，灵感来了再说",
        textEn: "Freestyle, wait for inspiration",
        scores: score(
          0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
          0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0
        ),
      },
      {
        text: "能拖就拖，DDL是第一生产力",
        textEn: "Procrastinate, deadline is the best motivator",
        scores: score(
          0, 0, 1, 0, 0, 1, 0, 0, 0, 0,
          0, 1, 2, 0, 0, 0, 0, 2, 0, 0,
          0, 0, 0, 0, 3, 0, 0
        ),
      },
    ],
  },
  {
    id: 22,
    text: "面对deadline你？",
    textEn: "Facing a deadline, you?",
    options: [
      {
        text: "提前完成，从容淡定",
        textEn: "Finish early, calm and collected",
        scores: score(
          2, 0, 0, 2, 0, 0, 1, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "慌得一批但最后总能搞定",
        textEn: "Panic like crazy but always pull through",
        scores: score(
          0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
          0, 0, 1, 1, 2, 0, 0, 0, 0, 0,
          1, 0, 0, 0, 0, 1, 0
        ),
      },
      {
        text: "啥？有deadline？",
        textEn: "Wait? There's a deadline?",
        scores: score(
          0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
          1, 2, 0, 1, 0, 0, 0, 3, 0, 0,
          0, 0, 0, 1, 2, 1, 0
        ),
      },
    ],
  },
  {
    id: 23,
    text: "你的学习方式更像？",
    textEn: "Your learning style is more like?",
    options: [
      {
        text: "系统性学习，搭建知识框架",
        textEn: "Systematic learning, build knowledge frameworks",
        scores: score(
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "啥都想学，啥都不精",
        textEn: "Want to learn everything, master nothing",
        scores: score(
          0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
          0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
          1, 0, 0, 0, 0, 2, 0
        ),
      },
      {
        text: "学习？不如躺平刷手机",
        textEn: "Study? I'd rather scroll on my phone",
        scores: score(
          0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
          0, 1, 1, 0, 0, 0, 0, 3, 1, 1,
          0, 0, 0, 1, 2, 1, 0
        ),
      },
    ],
  },
  {
    id: 24,
    text: "遇到困难任务时？",
    textEn: "When facing a difficult task?",
    options: [
      {
        text: "迎难而上，越战越勇",
        textEn: "Face it head on, fight harder",
        scores: score(
          1, 0, 0, 3, 0, 0, 3, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "找人帮忙，能抱大腿就抱",
        textEn: "Find help, ride on coattails if possible",
        scores: score(
          0, 2, 1, 0, 1, 0, 0, 0, 0, 1,
          0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
          1, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "放弃治疗，下次再说",
        textEn: "Give up, try again next time",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 2, 1, 0, 0, 0, 0, 2, 0, 1,
          0, 0, 0, 2, 3, 0, 0
        ),
      },
    ],
  },

  // ===========================
  // 社交模型 (Questions 25-30)
  // ===========================
  {
    id: 25,
    text: "你在聚会上通常是？",
    textEn: "At parties, you're usually?",
    options: [
      {
        text: "全场焦点，气氛担当",
        textEn: "Center of attention, life of the party",
        scores: score(
          1, 0, 0, 1, 0, 0, 1, 2, 0, 0,
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 3, 0
        ),
      },
      {
        text: "角落生物，默默观察",
        textEn: "Wallflower, silently observing",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          1, 0, 1, 0, 0, 2, 0, 1, 0, 1,
          0, 2, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "来回穿梭，谁都能聊",
        textEn: "Float around, can talk to anyone",
        scores: score(
          0, 0, 0, 0, 0, 0, 2, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 2, 1
        ),
      },
    ],
  },
  {
    id: 26,
    text: "你如何维护友谊？",
    textEn: "How do you maintain friendships?",
    options: [
      {
        text: "主动约局，定期联系",
        textEn: "Initiate hangouts, stay in touch regularly",
        scores: score(
          1, 0, 0, 1, 0, 0, 2, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 0
        ),
      },
      {
        text: "对方找我我就热情回应",
        textEn: "Respond warmly when they reach out",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "有事才联系，没事不问",
        textEn: "Only contact when needed, otherwise silent",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
          0, 2, 0, 0, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 27,
    text: "别人对你最大的误解是？",
    textEn: "What's the biggest misunderstanding about you?",
    options: [
      {
        text: "以为我高冷，其实我只是社恐",
        textEn: "Think I'm cold, but I'm just socially anxious",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 2, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "以为我很强，其实我在硬撑",
        textEn: "Think I'm strong, but I'm just holding it together",
        scores: score(
          0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "以为我傻乐，其实我什么都懂",
        textEn: "Think I'm just a happy fool, but I see everything",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 2, 0, 1, 0, 0, 0, 0,
          1, 0, 0, 0, 0, 1, 0
        ),
      },
    ],
  },
  {
    id: 28,
    text: "你的朋友圈风格是？",
    textEn: "Your social media feed style is?",
    options: [
      {
        text: "频繁更新，记录每一个瞬间",
        textEn: "Frequent updates, recording every moment",
        scores: score(
          0, 0, 1, 0, 0, 0, 1, 1, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 2, 0
        ),
      },
      {
        text: "基本不发，偶尔点赞",
        textEn: "Rarely post, occasionally like",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 2, 0, 0, 0, 0, 0, 1, 0, 1,
          0, 1, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "三天可见，深沉文艺",
        textEn: "Three-day limit, deep and artsy",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
          0, 1, 0, 1, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 29,
    text: "你在社交中戴面具吗？",
    textEn: "Do you wear a mask in social situations?",
    options: [
      {
        text: "做真实的自己，爱谁谁",
        textEn: "Be my true self, don't care what others think",
        scores: score(
          2, 0, 0, 1, 0, 0, 0, 1, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 1, 0, 0, 0, 0
        ),
      },
      {
        text: "看人下菜，不同人不同面",
        textEn: "Adapt to different people, show different faces",
        scores: score(
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "戴了八百层面具，自己都分不清了",
        textEn: "Wearing layers of masks, can't tell real from fake anymore",
        scores: score(
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          3, 0, 0, 1, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 1, 0, 0, 0
        ),
      },
    ],
  },
  {
    id: 30,
    text: "人际关系中你最看重？",
    textEn: "What do you value most in relationships?",
    options: [
      {
        text: "真诚和信任",
        textEn: "Honesty and trust",
        scores: score(
          0, 0, 0, 1, 1, 0, 0, 0, 1, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
      {
        text: "有趣和快乐",
        textEn: "Fun and happiness",
        scores: score(
          0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 3, 1
        ),
      },
      {
        text: "利用价值，能帮我就好",
        textEn: "Usefulness, as long as they can help me",
        scores: score(
          1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0
        ),
      },
    ],
  },
];

// ================================================================
// 27 Types - Complete descriptions matching sbti.ai style
// ================================================================

export const sbtiTypes: SBTITypeInfo[] = [
  {
    id: 0,
  code: "CTRL",
    name: "拿捏者",
    nameEn: "The Controller",
    emoji: "🎮",
    tagline: "怎么样，被我拿捏了吧？",
    taglineEn: "See? I got you under my thumb.",
    description:
      "你就是人群中的操盘手，擅长掌控节奏、拿捏氛围。无论是工作还是社交，你都自带一种\"一切尽在掌握\"的气场。你的自信写在脸上，做决定不拖泥带水。但小心——有时候太想控制全局，反而会让身边的人觉得压力山大。别以为所有人都愿意被拿捏，偶尔放手也是一种智慧。",
    descriptionEn:
      "You're the puppeteer in every room, a master of controlling rhythm and atmosphere. Whether at work or in social settings, you radiate an 'everything is under control' aura. Your confidence is written all over your face, and you never hesitate when making decisions. But be careful — your urge to control everything can feel suffocating to those around you. Not everyone wants to be managed. Sometimes letting go is the real power move.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "自尊自信", traitEn: "Self-esteem", level: "H" },
      { model: "态度模型", modelEn: "Attitude Model", trait: "规则与灵活度", traitEn: "Rules & Flexibility", level: "H" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "决策风格", traitEn: "Decision Style", level: "H" },
    ],
    traits: ["掌控全局", "自信果断", "目标明确", "气场强大"],
    traitsEn: ["In control", "Confident", "Goal-oriented", "Commanding presence"],
    advice: "建议：你很强，但别把所有人都当棋子。偶尔做个佛系玩家，你会发现世界更温柔。",
    adviceEn: "Tip: You're strong, but don't treat everyone like a chess piece. Try being a casual player sometimes — the world gets kinder.",
  },
  {
    id: 1,
  code: "ATM-er",
    name: "送钱者",
    nameEn: "The ATM",
    emoji: "💸",
    tagline: "你以为我很有钱吗？",
    taglineEn: "You think I'm made of money?",
    description:
      "你就是行走的人体ATM，对朋友、对恋人、对自己喜欢的人大方得不像话。你总觉得\"钱是身外之物\"，结果月底一看账单就哭了。你的慷慨让人感动，但也容易被人当成提款机。记住，真正珍惜你的人，不会只在你请客的时候出现。",
    descriptionEn:
      "You're a walking human ATM — ridiculously generous to friends, lovers, and anyone you care about. You always tell yourself 'money is just a tool,' then cry when you see your bank statement at month's end. Your generosity moves people, but it also makes you an easy target. Remember: people who truly value you won't only show up when the tab is on you.",
    dimensions: [
      { model: "情感模型", modelEn: "Emotion Model", trait: "情感投入度", traitEn: "Emotional Investment", level: "H" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "动机导向", traitEn: "Motivation", level: "H" },
      { model: "社交模型", modelEn: "Social Model", trait: "人际边界感", traitEn: "Boundaries", level: "L" },
    ],
    traits: ["大方慷慨", "重情重义", "不设防", "爱付出"],
    traitsEn: ["Generous", "Loyal", "Unguarded", "Giving"],
    advice: "建议：大方是美德，但请学会说\"不\"。你的钱不是大风刮来的，省着点给自己花。",
    adviceEn: "Tip: Generosity is noble, but learn to say 'no'. Your money didn't fall from the sky — spend some on yourself.",
  },
  {
    id: 2,
  code: "Dior-s",
    name: "屌丝",
    nameEn: "The Underdog",
    emoji: "👕",
    tagline: "等着我屌丝逆袭。",
    taglineEn: "Just wait for my comeback.",
    description:
      "你总觉得自己还不够好，但内心深处藏着一股逆袭的劲儿。你看似普通，实际上一直在默默蓄力。\"屌丝\"这个词对你来说不是贬义，而是暂时的状态。但别光想着逆袭——你现在就挺好，放下比较，你已经很努力了。",
    descriptionEn:
      "You always feel like you're not quite enough, but deep down burns the fire of a comeback story. You seem ordinary on the surface, but you've been quietly building up strength. 'Underdog' isn't a label of shame for you — just a temporary state. But don't fixate on the comeback — you're already doing great. Stop comparing yourself to others. You've worked hard enough.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "自尊自信", traitEn: "Self-esteem", level: "L" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "执行模式", traitEn: "Execution Mode", level: "M" },
      { model: "社交模型", modelEn: "Social Model", trait: "表达与真实度", traitEn: "Authenticity", level: "M" },
    ],
    traits: ["不甘平庸", "默默努力", "渴望逆袭", "自嘲达人"],
    traitsEn: ["Ambitious inside", "Quietly grinding", "Dreaming big", "Self-deprecating"],
    advice: "建议：逆袭是好事，但别把现在的自己看扁了。每天对着镜子说三遍：我已经很棒了！",
    adviceEn: "Tip: Comebacks are great, but don't underestimate who you are now. Tell yourself in the mirror: I'm already awesome!",
  },
  {
    id: 3,
  code: "BOSS",
    name: "领导者",
    nameEn: "The Boss",
    emoji: "👑",
    tagline: "方向盘给我，我来开。",
    taglineEn: "Give me the wheel, I'll drive.",
    description:
      "你就是天生的领头羊，自带王冠气场。团队没了你就会散架，方向没了你就会迷茫——你就是那个让一切运转起来的人。你的决策果断、思路清晰，跟着你的人都有安全感。但别忘了，头狼也要学会休息，不是所有方向盘你都得握着。偶尔坐副驾也很舒服。",
    descriptionEn:
      "You're a born alpha, radiating a crown-worthy aura wherever you go. Teams fall apart without you; directions go haywire — you're the one who makes everything click. Your decisions are sharp, your thinking crystal-clear, and people feel safe following your lead. But don't forget: even the alpha needs rest. Not every steering wheel needs your hands on it. Try the passenger seat once in a while — it's surprisingly comfortable.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "核心价值", traitEn: "Core Values", level: "H" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "执行模式", traitEn: "Execution Mode", level: "H" },
      { model: "社交模型", modelEn: "Social Model", trait: "社交主动性", traitEn: "Social Initiative", level: "H" },
    ],
    traits: ["领导力爆棚", "决策果断", "责任心强", "让人安心"],
    traitsEn: ["Natural leader", "Decisive", "Responsible", "Reassuring"],
    advice: "建议：你是大家的依靠，但别把自己累垮了。偶尔说\"你们来决定\"，也是一种领导力。",
    adviceEn: "Tip: You're everyone's rock, but don't crumble yourself. Saying 'you decide' once in a while is also leadership.",
  },
  {
    id: 4,
  code: "THAN-K",
    name: "感恩者",
    nameEn: "The Grateful One",
    emoji: "🙏",
    tagline: "我感谢苍天！我感谢大地！",
    taglineEn: "I thank the heavens! I thank the earth!",
    description:
      "你就是人间正能量发射站，对生活中的一切充满感激。一杯热奶茶能让你感动一整天，谁说你好你会记一辈子。你的朋友圈里全是感恩语录，简直像个行走的佛光。不过有时候别太卑微了——你值得这一切，不是所有好事都是\"蒙恩\"得来的，你的努力也占大头。",
    descriptionEn:
      "You're a walking positive-energy transmitter, radiating gratitude for everything in life. A cup of warm milk tea can move you for a whole day; a compliment you'll remember forever. Your social feed is basically a gratitude journal — you're practically radiating Buddha vibes. But don't be too humble: you deserve all this. Not every good thing is 'a blessing'; your hard work accounts for most of it too.",
    dimensions: [
      { model: "态度模型", modelEn: "Attitude Model", trait: "世界观倾向", traitEn: "Worldview", level: "H" },
      { model: "情感模型", modelEn: "Emotion Model", trait: "情感投入度", traitEn: "Emotional Investment", level: "H" },
      { model: "社交模型", modelEn: "Social Model", trait: "表达与真实度", traitEn: "Authenticity", level: "H" },
    ],
    traits: ["充满感恩", "正能量满满", "知足常乐", "温暖人心"],
    traitsEn: ["Grateful", "Positive energy", "Content", "Heart-warming"],
    advice: "建议：感恩是美德，但别忘了也该感谢一下努力的自己。你配得上所有的好。",
    adviceEn: "Tip: Gratitude is virtuous, but don't forget to thank yourself too. You deserve every good thing coming your way.",
  },
  {
    id: 5,
  code: "OH-NO",
    name: "哦不人",
    nameEn: "The Oh-No",
    emoji: "😱",
    tagline: "哦不！我怎么会是这个人格？！",
    taglineEn: "Oh no! How could I be this type?!",
    description:
      "你的人生仿佛永远在喊\"哦不\"——事情稍微一出岔子，你就开始脑补最坏的可能。你对危险和尴尬有着超乎常人的敏感度，堪称灾难预警系统。但说真的，90%让你喊\"哦不\"的事情最后都没发生。放松点，天塌不下来。就算真塌了，你也比想象中更能扛。",
    descriptionEn:
      "Your life seems to be one constant 'oh no' — the moment something goes slightly awry, you're already imagining the worst possible outcome. You have an extraordinary sensitivity to danger and awkwardness, practically a disaster early-warning system. But honestly, 90% of the things that make you say 'oh no' never actually happen. Relax. The sky isn't falling. And even if it did, you're tougher than you think.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "自我清晰度", traitEn: "Self-Clarity", level: "L" },
      { model: "情感模型", modelEn: "Emotion Model", trait: "依恋安全感", traitEn: "Attachment Security", level: "L" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "决策风格", traitEn: "Decision Style", level: "L" },
    ],
    traits: ["容易惊慌", "过度担忧", "敏感体质", "脑补达人"],
    traitsEn: ["Panic-prone", "Over-thinking", "Hypersensitive", "Worst-case imaginist"],
    advice: "建议：深呼吸，你担心的事80%不会发生。剩下20%发生了你也能搞定。相信你自己。",
    adviceEn: "Tip: Take a deep breath. 80% of what you worry about won't happen. The other 20% — you'll handle it. Trust yourself.",
  },
  {
    id: 6,
  code: "GOGO",
    name: "行者",
    nameEn: "The Go-Go",
    emoji: "🏃",
    tagline: "gogogo~出发咯",
    taglineEn: "Let's go go go~ off we go!",
    description:
      "你就是一个永动机，永远在路上，永远有下一个目标。行动力拉满，拖延症在你身上根本不存在。别人还在纠结要不要开始的时候，你已经跑完半程了。但有时候你冲得太快，连方向都没看清楚就出发了。记住：跑得快很重要，但跑对方向更重要。",
    descriptionEn:
      "You're a perpetual motion machine — always on the move, always with the next goal in sight. Your execution power is maxed out; procrastination simply doesn't exist in your vocabulary. While others are still debating whether to start, you've already finished half the race. But sometimes you charge ahead so fast you haven't even checked the direction. Remember: speed matters, but the right direction matters more.",
    dimensions: [
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "执行模式", traitEn: "Execution Mode", level: "H" },
      { model: "态度模型", modelEn: "Attitude Model", trait: "人生意义感", traitEn: "Life Meaning", level: "H" },
      { model: "自我模型", modelEn: "Self Model", trait: "核心价值", traitEn: "Core Values", level: "H" },
    ],
    traits: ["行动力爆表", "永远在前进", "不纠结不犹豫", "活力四射"],
    traitsEn: ["Action-oriented", "Always moving", "Decisive", "Energetic"],
    advice: "建议：你跑得够快了，偶尔停下来看看风景。方向对了，慢一点反而到得更远。",
    adviceEn: "Tip: You're already fast enough. Pause and enjoy the view sometimes. Right direction at a slower pace beats sprinting the wrong way.",
  },
  {
    id: 7,
  code: "SEXY",
    name: "尤物",
    nameEn: "The Siren",
    emoji: "💋",
    tagline: "您就是天生的尤物！",
    taglineEn: "You're a natural-born siren!",
    description:
      "你就是行走的荷尔蒙，不管走到哪里都是人群中的焦点。你的魅力浑然天成，不靠穿搭、不靠化妆，就是骨子里透出来的吸引力。别人学你穿搭、学你说话，但就是学不来你的味道。不过魅力太大也有烦恼——容易招妒忌、容易让人只看外在。记得提醒大家：你有的不只是一张好看的脸。",
    descriptionEn:
      "You're walking pheromones — the focal point of any crowd, no matter where you go. Your charm comes effortlessly, not from outfits or makeup, but from something in your very bones. People copy your style, your mannerisms, but they can never replicate your essence. But with great allure comes trouble — jealousy, and people seeing only the surface. Remind them now and then: you're more than just a pretty face.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "自尊自信", traitEn: "Self-esteem", level: "H" },
      { model: "社交模型", modelEn: "Social Model", trait: "社交主动性", traitEn: "Social Initiative", level: "H" },
      { model: "情感模型", modelEn: "Emotion Model", trait: "情感投入度", traitEn: "Emotional Investment", level: "M" },
    ],
    traits: ["魅力四射", "自信迷人", "天生焦点", "吸引力拉满"],
    traitsEn: ["Charismatic", "Confidently charming", "Natural spotlight", "Maximum allure"],
    advice: "建议：魅力是你的天赋，别忘了展示内在给值得的人。美貌加脑力，天下无敌。",
    adviceEn: "Tip: Charm is your birthright — don't forget to show your inner self to those who matter. Beauty plus brains, you're unstoppable.",
  },
  {
    id: 8,
  code: "LOVE-R",
    name: "多情者",
    nameEn: "The Lover",
    emoji: "💘",
    tagline: "爱意太满，现实显得有点贫瘠。",
    taglineEn: "Love overflows so much, reality feels a bit barren.",
    description:
      "你的心里装了一个无底洞的爱，永远在寻找可以倾注所有的对象。你是那种会为爱赴汤蹈火的人，爱得热烈、爱得毫无保留。每段感情你都全身心投入，但现实常常配不上你的深情。有时候你需要的不是一个更好的对象，而是学会把那份满满的爱，分一点给自己。",
    descriptionEn:
      "Your heart contains a bottomless well of love, always seeking someone worthy of its full depth. You're the type who'd walk through fire for love — passionate, unreserved, all-consuming. You give your all to every relationship, but reality often can't match the intensity of your devotion. Sometimes what you need isn't a better partner, but just learning to redirect some of that overflowing love toward yourself.",
    dimensions: [
      { model: "情感模型", modelEn: "Emotion Model", trait: "情感投入度", traitEn: "Emotional Investment", level: "H" },
      { model: "自我模型", modelEn: "Self Model", trait: "核心价值", traitEn: "Core Values", level: "M" },
      { model: "态度模型", modelEn: "Attitude Model", trait: "世界观倾向", traitEn: "Worldview", level: "M" },
    ],
    traits: ["深情款款", "爱得热烈", "不顾一切", "浪漫至死"],
    traitsEn: ["Deeply affectionate", "Passionate love", "All-in", "Romantic to death"],
    advice: "建议：你的爱是无价之宝，但别一次性全倒出去。留点给自己，细水长流才最长久。",
    adviceEn: "Tip: Your love is priceless — don't pour it all out at once. Save some for yourself. A slow, steady stream lasts longest.",
  },
  {
    id: 9,
  code: "MUM",
    name: "妈妈",
    nameEn: "The Mum",
    emoji: "🤱",
    tagline: "或许...我可以叫你妈妈吗....?",
    taglineEn: "Maybe... can I call you mom...?",
    description:
      "你就是朋友圈里的\"妈\"——操心所有人的吃喝冷暖，出门带纸巾、包里装零食、永远提醒大家带伞。你的关心细致入微，让人忍不住想依赖你。但操心太多也累，别人的事儿你比人家自己还上心。偶尔也做个\"甩手掌柜\"，你不是所有人的妈，你也是需要被照顾的人。",
    descriptionEn:
      "You're the 'mom' of every friend group — worrying about everyone's meals, weather, and well-being. Tissues in your bag, snacks in your pocket, and you never forget to remind people to bring an umbrella. Your care is so thoughtful it makes people instinctively lean on you. But worrying about everyone else is exhausting — you're more invested in their lives than they are themselves. Once in a while, just step back. You're not everyone's mom, and you deserve to be taken care of too.",
    dimensions: [
      { model: "情感模型", modelEn: "Emotion Model", trait: "边界与依赖", traitEn: "Boundaries & Dependence", level: "H" },
      { model: "社交模型", modelEn: "Social Model", trait: "人际边界感", traitEn: "Boundaries", level: "L" },
      { model: "态度模型", modelEn: "Attitude Model", trait: "规则与灵活度", traitEn: "Rules & Flexibility", level: "M" },
    ],
    traits: ["关怀备至", "操心体质", "温暖可靠", "母性光环"],
    traitsEn: ["Caring", "Worry-prone", "Warm & reliable", "Maternal aura"],
    advice: "建议：你操心全世界，谁来操心你？偶尔也躺平让别人照顾一下。你值得被爱，不只是付出爱。",
    adviceEn: "Tip: You fuss over the whole world — who's fussing over you? Lie back and let others take care of you sometimes. You're worthy of receiving, not just giving.",
  },
  {
    id: 10,
  code: "FAKE",
    name: "伪人",
    nameEn: "The Fake",
    emoji: "🤖",
    tagline: "已经，没有人类了。",
    taglineEn: "There are no humans left.",
    description:
      "你像一个精密运行的AI在模拟人类行为——表情到位、台词完美，但内心毫无波澜。你太擅长在不同场合切换不同人格了，以至于有时候自己都分不清哪个才是真实的自己。你比任何人都懂社交规则，但这让你很累。其实偶尔卸下面具也没关系的——真实的你比完美的你更有吸引力。",
    descriptionEn:
      "You're like a precision AI simulating human behavior — expressions on point, dialogue flawless, but zero emotional involvement inside. You're so good at switching personas for different occasions that sometimes you can't even tell which one is the real you. You understand social rules better than anyone, but it drains you. Truth is, it's okay to drop the mask sometimes — the real you is more captivating than the perfect you.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "自我清晰度", traitEn: "Self-Clarity", level: "L" },
      { model: "社交模型", modelEn: "Social Model", trait: "表达与真实度", traitEn: "Authenticity", level: "L" },
      { model: "情感模型", modelEn: "Emotion Model", trait: "情感投入度", traitEn: "Emotional Investment", level: "L" },
    ],
    traits: ["深不可测", "社交变色龙", "面具达人", "内心孤岛"],
    traitsEn: ["Unfathomable", "Social chameleon", "Mask master", "Inner island"],
    advice: "建议：你演技一流，但生活不是舞台剧。找一两个可以卸下面具的人，你会发现轻松很多。",
    adviceEn: "Tip: Your acting is Oscar-worthy, but life isn't a stage play. Find one or two people you can drop the mask around — you'll feel so much lighter.",
  },
  {
    id: 11,
  code: "OJBK",
    name: "无所谓人",
    nameEn: "The Whatever",
    emoji: "🤷",
    tagline: "我说随便，是真的随便。",
    taglineEn: "When I say 'whatever', I really mean it.",
    description:
      "你就是传说中的\"都可以先生/女士\"——吃什么？随便。去哪里？随便。怎么样？还行。你对大多数事情都没有强烈的偏好，真正做到了\"不以物喜不以己悲\"的超然境界。但你的\"随便\"有时候让人抓狂——别人等着你给个明确意见的时候，你的佛系反而成了负担。不挑是美德，但偶尔给个准话也很帅。",
    descriptionEn:
      "You're the legendary 'Mr./Ms. Whatever' — what to eat? Whatever. Where to go? Whatever. How was it? It was okay. You have almost no strong preferences about most things, genuinely achieving that 'unmoved by external gains or personal losses' Zen state. But your 'whatever' sometimes drives people nuts — when others are waiting for a clear opinion, your Buddha-like detachment becomes a burden. Being easygoing is great, but giving a straight answer once in a while is also pretty cool.",
    dimensions: [
      { model: "态度模型", modelEn: "Attitude Model", trait: "规则与灵活度", traitEn: "Rules & Flexibility", level: "L" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "动机导向", traitEn: "Motivation", level: "L" },
      { model: "社交模型", modelEn: "Social Model", trait: "社交主动性", traitEn: "Social Initiative", level: "L" },
    ],
    traits: ["佛系随缘", "不爱计较", "顺其自然", "极度好说话"],
    traitsEn: ["Zen-like", "Never fusses", "Goes with the flow", "Extremely agreeable"],
    advice: "建议：随和是优点，但不是所有事都\"随便\"就完了。偶尔做一次选择困难吧，世界需要你的声音。",
    adviceEn: "Tip: Being easygoing is a strength, but not everything should end with 'whatever'. Try being indecisive for once — the world needs your voice.",
  },
  {
    id: 12,
  code: "MALO",
    name: "吗喽",
    nameEn: "The Monkey",
    emoji: "🐒",
    tagline: "人生是个副本，而我只是一只吗喽。",
    taglineEn: "Life is a side quest, and I'm just a monkey.",
    description:
      "你用自嘲和幽默来面对人生的荒谬，像一只在副本里瞎逛的猴子，不追求主线任务，就爱到处瞎搞。你的人生哲学是\"认真你就输了\"，所以什么事都不太当回事。但在这层嬉皮笑脸之下，你其实比谁都清醒。别总用\"吗喽\"来否定自己的价值——就算是副本玩家，也能打出隐藏结局。",
    descriptionEn:
      "You face life's absurdity with self-deprecation and humor, like a monkey wandering through a side quest, never bothering with the main storyline. Your life philosophy is 'if you take it too seriously, you lose,' so you treat most things lightly. But beneath that playful grin, you're actually more clear-eyed than anyone. Don't use 'just a monkey' to dismiss your own worth — even side-quest players can unlock hidden endings.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "自尊自信", traitEn: "Self-esteem", level: "M" },
      { model: "态度模型", modelEn: "Attitude Model", trait: "世界观倾向", traitEn: "Worldview", level: "M" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "执行模式", traitEn: "Execution Mode", level: "L" },
    ],
    traits: ["自嘲大师", "幽默化解一切", "佛系玩家", "看似摆烂实则通透"],
    traitsEn: ["Self-deprecating master", "Humor as armor", "Casual player", "Pretends to slack, actually insightful"],
    advice: "建议：自嘲很酷，但别把自嘲变成了自我否定。你是吗喽你骄傲，副本也是人生。",
    adviceEn: "Tip: Self-deprecation is cool, but don't let it turn into self-negation. Be proud of being a monkey — side quests are life too.",
  },
  {
    id: 13,
  code: "JOKE-R",
    name: "小丑",
    nameEn: "The Joker",
    emoji: "🤡",
    tagline: "原来我们都是小丑。",
    taglineEn: "Turns out we're all clowns.",
    description:
      "你看透了人生的荒诞本质，并用笑容来包装这份清醒。你把悲剧变成了喜剧，因为除此之外别无选择。你的幽默感让人捧腹，但笑声之下藏的是一种\"反正也就这样了\"的释然。你不是真的在搞笑——你是在用最体面的方式对抗生活的虚无。",
    descriptionEn:
      "You've seen through the absurd essence of life and wrapped that clarity in a smile. You've turned tragedy into comedy because, really, what other choice is there? Your sense of humor makes people laugh until they cry, but beneath the laughter lies a resignation of 'well, it is what it is.' You're not actually joking around — you're fighting life's emptiness in the most dignified way possible.",
    dimensions: [
      { model: "态度模型", modelEn: "Attitude Model", trait: "世界观倾向", traitEn: "Worldview", level: "L" },
      { model: "自我模型", modelEn: "Self Model", trait: "核心价值", traitEn: "Core Values", level: "M" },
      { model: "社交模型", modelEn: "Social Model", trait: "表达与真实度", traitEn: "Authenticity", level: "M" },
    ],
    traits: ["看透一切", "以笑面对", "荒诞感爆棚", "悲喜交融"],
    traitsEn: ["Sees through it all", "Faces with laughter", "Absurdist", "Bittersweet"],
    advice: "建议：你笑对人生很酷，但别忘了你也有权利认真愤怒。面具戴久了，偶尔也透透气。",
    adviceEn: "Tip: Laughing at life is cool, but you also have the right to be genuinely angry. If you wear the mask too long, let it breathe once in a while.",
  },
  {
    id: 14,
  code: "WOC!",
    name: "握草人",
    nameEn: "The WTF",
    emoji: "😲",
    tagline: "卧槽，我怎么是这个人格？",
    taglineEn: "WTF, how am I this type?",
    description:
      "你的人生充满了\"卧槽\"时刻——看到结果震惊、看到自己更震惊。你总是后知后觉地发现自己的处境，然后发出一声灵魂深处的感叹。你的惊讶是一种天赋，因为你总能用新鲜的眼光看世界。但别光顾着\"卧槽\"——偶尔也冷静一下，你会发现很多事其实早就注定了。",
    descriptionEn:
      "Your life is filled with 'WTF' moments — shocked by results, even more shocked by yourself. You always realize your situation a beat too late, then let out a soul-deep exclamation. Your capacity for surprise is a gift — you see the world with perpetually fresh eyes. But don't just 'WTF' your way through — pause once in a while, and you'll find many things were inevitable all along.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "自我清晰度", traitEn: "Self-Clarity", level: "L" },
      { model: "情感模型", modelEn: "Emotion Model", trait: "依恋安全感", traitEn: "Attachment Security", level: "L" },
      { model: "态度模型", modelEn: "Attitude Model", trait: "规则与灵活度", traitEn: "Rules & Flexibility", level: "M" },
    ],
    traits: ["后知后觉", "一惊一乍", "永远在惊讶", "自带表情包"],
    traitsEn: ["Late reactor", "Easily shocked", "Perpetually surprised", "Walking meme"],
    advice: "建议：卧槽是一种生活态度，但别让它变成你唯一的态度。下次惊讶完，记得做一些改变。",
    adviceEn: "Tip: 'WTF' is a lifestyle, but don't let it be your only style. After the next shock, remember to actually change something.",
  },
  {
    id: 15,
  code: "THIN-K",
    name: "思考者",
    nameEn: "The Thinker",
    emoji: "🧠",
    tagline: "已深度思考100s。",
    taglineEn: "Deep thinking... 100s elapsed.",
    description:
      "你的大脑24小时不间断运转，每一件事都能被你分析出三层含义、五个角度和七个解决方案。你说话像论文、思考像解方程、发呆都在做思想实验。你聪明过人，但过度思考有时候会让你陷在原地。不是所有问题都需要深度分析的——有些事，跟着感觉走就够了。",
    descriptionEn:
      "Your brain runs 24/7, and you can dissect every single thing into three layers of meaning, five perspectives, and seven solutions. You talk like an academic paper, think like you're solving equations, and even your daydreaming is a thought experiment. You're brilliant, but overthinking sometimes keeps you stuck. Not every problem needs deep analysis — some things just need you to follow your gut.",
    dimensions: [
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "决策风格", traitEn: "Decision Style", level: "H" },
      { model: "自我模型", modelEn: "Self Model", trait: "核心价值", traitEn: "Core Values", level: "H" },
      { model: "态度模型", modelEn: "Attitude Model", trait: "规则与灵活度", traitEn: "Rules & Flexibility", level: "H" },
    ],
    traits: ["深度思考", "分析力max", "理性至上", "想太多"],
    traitsEn: ["Deep thinker", "Analysis master", "Hyper-rational", "Overthinks"],
    advice: "建议：你的大脑是最强武器，但别让思考变成拖延。有时候先做了再想，效果更好。",
    adviceEn: "Tip: Your brain is your greatest weapon, but don't let thinking become procrastination. Sometimes act first, think later — the results surprise you.",
  },
  {
    id: 16,
  code: "SHIT",
    name: "愤世者",
    nameEn: "The Cynic",
    emoji: "💩",
    tagline: "这个世界，构石一坨。",
    taglineEn: "This world is a pile of crap.",
    description:
      "你对世界有着清晰的负面判断，不迷信权威、不吃画饼、不信心灵鸡汤。你的愤怒不是无脑发泄，而是源于对理想世界的执着。你看不惯的东西很多，但你比谁都明白什么是对的。只是别把愤怒当成全部人格——世界确实不完美，但你的愤怒值得用来改变它，而不是消耗自己。",
    descriptionEn:
      "You hold crystal-clear negative judgments about the world, refusing to worship authority, rejecting empty promises, and immune to motivational fluff. Your anger isn't mindless venting — it stems from a stubborn vision of how things should be. You see plenty that irks you, but you know better than anyone what's right. Just don't let anger become your entire identity — the world is indeed imperfect, but your fury deserves to change it, not consume you.",
    dimensions: [
      { model: "态度模型", modelEn: "Attitude Model", trait: "世界观倾向", traitEn: "Worldview", level: "L" },
      { model: "自我模型", modelEn: "Self Model", trait: "核心价值", traitEn: "Core Values", level: "H" },
      { model: "社交模型", modelEn: "Social Model", trait: "表达与真实度", traitEn: "Authenticity", level: "H" },
    ],
    traits: ["愤世嫉俗", "看透本质", "不买账", "理想主义内核"],
    traitsEn: ["Cynical", "Sees through BS", "Not buying it", "Idealist at heart"],
    advice: "建议：愤怒是你最贵的内耗。把看不惯的东西变成行动，你就从\"愤世者\"升级成了\"改变者\"。",
    adviceEn: "Tip: Anger is your most expensive internal drain. Turn what you can't stand into action, and you'll level up from 'cynic' to 'changer'.",
  },
  {
    id: 17,
  code: "ZZZZ",
    name: "装死者",
    nameEn: "The Sleeper",
    emoji: "😴",
    tagline: "我没死，我只是在睡觉。",
    taglineEn: "I'm not dead, I'm just sleeping.",
    description:
      "你的人生状态就是——能躺着绝不坐着，能睡着绝不醒着。你不是懒，你只是在\"节能模式\"。你的低欲望生活方式让很多人羡慕，但也让很多人替你着急。别担心，你知道自己在做什么——只是在充电而已。只不过这充电时间有点长，该起床的时候还是得起来。",
    descriptionEn:
      "Your life mode is simple: if you can lie down, never sit; if you can sleep, never wake. You're not lazy — you're just running on 'power saving mode.' Your low-desire lifestyle earns both envy and concern. Don't worry, you know what you're doing — you're just recharging. It's just... the charging cycle is a bit long. Time to wake up when it's really time.",
    dimensions: [
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "执行模式", traitEn: "Execution Mode", level: "L" },
      { model: "自我模型", modelEn: "Self Model", trait: "自尊自信", traitEn: "Self-esteem", level: "M" },
      { model: "态度模型", modelEn: "Attitude Model", trait: "世界观倾向", traitEn: "Worldview", level: "M" },
    ],
    traits: ["睡眠爱好者", "节能模式", "躺平专家", "佛系到极致"],
    traitsEn: ["Sleep enthusiast", "Power saving", "Lying-down expert", "Ultra-Zen"],
    advice: "建议：睡觉确实是正经事，但世界在醒着的时候才发生。起床吧，外面太阳挺好的。",
    adviceEn: "Tip: Sleeping is indeed important business, but things happen while you're awake. Get up, the sun is nice out there.",
  },
  {
    id: 18,
  code: "POOR",
    name: "贫困者",
    nameEn: "The Broke",
    emoji: "🪙",
    tagline: "我穷，但我很专。",
    taglineEn: "I'm broke, but I'm devoted.",
    description:
      "你的钱包可能不太鼓，但你的内心世界超级丰富。你不追求物质享受，更看重精神层面的满足。\"穷\"对你来说是一种选择不是困境——你把钱和精力都花在了真正重要的事情上。但说实话，穷归穷，该对自己好点的时候别太省。人活着，精神和物质都要有点。",
    descriptionEn:
      "Your wallet might be thin, but your inner world is extraordinarily rich. You don't chase material pleasures; you value spiritual fulfillment more. 'Being broke' is a choice for you, not a plight — you put your money and energy into what truly matters. But honestly, poor as you may be, don't skimp too much when it's time to treat yourself. Life needs both spirit and substance.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "核心价值", traitEn: "Core Values", level: "H" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "动机导向", traitEn: "Motivation", level: "L" },
      { model: "社交模型", modelEn: "Social Model", trait: "表达与真实度", traitEn: "Authenticity", level: "H" },
    ],
    traits: ["精神富有", "不物质", "安贫乐道", "专一坚持"],
    traitsEn: ["Spiritually rich", "Non-materialistic", "Content with little", "Faithful & persistent"],
    advice: "建议：穷不可怕，可怕的是连精神也穷了。你精神富足，但钱包也可以试试充盈一下——理财不是坏事。",
    adviceEn: "Tip: Being broke isn't scary; being spiritually broke is. You're rich inside, but maybe let your wallet get a little fuller too — financial planning isn't a sin.",
  },
  {
    id: 19,
  code: "MONK",
    name: "僧人",
    nameEn: "The Monk",
    emoji: "🧘",
    tagline: "没有那种世俗的欲望。",
    taglineEn: "I have no such worldly desires.",
    description:
      "你对世俗的欲望——不管是名利、爱情还是物质——都保持着一种出家人的淡然。别人在争抢的时候，你在旁边看着，内心毫无波澜。你的精神境界让人佩服，但有时候离人群太远了。人间烟火虽然俗，但也有它的温度。偶尔下一趟山也没什么不好。",
    descriptionEn:
      "You maintain a monk-like detachment from worldly desires — be it fame, love, or material things. While others scramble and fight, you watch from the sidelines with zero inner turbulence. Your spiritual elevation is admirable, but sometimes you stand too far from the crowd. Earthly pleasures may be vulgar, but they have warmth. Coming down from the mountain once in a while isn't such a bad thing.",
    dimensions: [
      { model: "情感模型", modelEn: "Emotion Model", trait: "边界与依赖", traitEn: "Boundaries & Dependence", level: "L" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "动机导向", traitEn: "Motivation", level: "L" },
      { model: "社交模型", modelEn: "Social Model", trait: "人际边界感", traitEn: "Boundaries", level: "H" },
    ],
    traits: ["清心寡欲", "超然物外", "精神独立", "不为所动"],
    traitsEn: ["Ascetic", "Above it all", "Spiritually independent", "Unmoved"],
    advice: "建议：无欲则刚，但偶尔\"有欲\"一下也是人生乐趣。下山吃顿好的，不破戒。",
    adviceEn: "Tip: Desirelessness is strength, but a little 'desire' now and then is the spice of life. Come down and treat yourself to a good meal — it won't break any vows.",
  },
  {
    id: 20,
  code: "IMSB",
    name: "傻者",
    nameEn: "The Fool",
    emoji: "🤪",
    tagline: "认真的么？我真的是傻逼么？",
    taglineEn: "Seriously? Am I really an idiot?",
    description:
      "你经常怀疑自己的智商和判断力，觉得自己是不是有点\"傻\"。但其实你的\"傻\"是一种纯真——你是那种会认真生活、认真搞笑、认真犯傻的人。世界太复杂了，而你的简单恰好是最大的反击。别总觉得自己笨——大智若愚，说的就是你这种人。",
    descriptionEn:
      "You often question your own intelligence and judgment, wondering if you're a bit 'stupid.' But really, your 'foolishness' is a kind of purity — you're someone who lives earnestly, jokes earnestly, and makes mistakes earnestly. The world is too complicated, and your simplicity is actually its greatest counterattack. Don't keep thinking you're dumb — 'great wisdom appears foolish' was written for people exactly like you.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "自尊自信", traitEn: "Self-esteem", level: "L" },
      { model: "社交模型", modelEn: "Social Model", trait: "表达与真实度", traitEn: "Authenticity", level: "H" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "决策风格", traitEn: "Decision Style", level: "L" },
    ],
    traits: ["简单纯粹", "自我怀疑", "大智若愚", "天真烂漫"],
    traitsEn: ["Simple & pure", "Self-doubting", "Wise in clumsy guise", "Innocently cheerful"],
    advice: "建议：你不是傻，你只是太真诚了。在这个人人精明的世界，你的\"傻\"才是最稀缺的品质。",
    adviceEn: "Tip: You're not stupid, you're just too genuine. In a world where everyone is cunning, your 'foolishness' is the rarest quality.",
  },
  {
    id: 21,
  code: "SOLO",
    name: "孤儿",
    nameEn: "The Solo",
    emoji: "🥲",
    tagline: "我哭了，我怎么会是孤儿？",
    taglineEn: "I'm crying, how am I a solo?",
    description:
      "你习惯了一个人——一个人吃饭、一个人逛街、一个人看电影。不是没人约，而是你觉得一个人更自在。独立是你的盔甲，也是你的牢笼。你把自己保护得太好了，以至于别人想靠近你都找不到门。其实偶尔也放个人进来吧，两个人的世界也没那么可怕。",
    descriptionEn:
      "You're used to being alone — eating alone, shopping alone, watching movies alone. It's not that nobody invites you; it's that you genuinely prefer your own company. Independence is your armor, but also your cage. You've protected yourself so well that even those who want to get close can't find the door. Let someone in once in a while — a world of two isn't as terrifying as you think.",
    dimensions: [
      { model: "社交模型", modelEn: "Social Model", trait: "社交主动性", traitEn: "Social Initiative", level: "L" },
      { model: "情感模型", modelEn: "Emotion Model", trait: "依恋安全感", traitEn: "Attachment Security", level: "L" },
      { model: "自我模型", modelEn: "Self Model", trait: "自我清晰度", traitEn: "Self-Clarity", level: "H" },
    ],
    traits: ["独处达人", "习惯孤单", "独立坚强", "自我保护"],
    traitsEn: ["Solo expert", "Used to loneliness", "Independent & strong", "Self-protective"],
    advice: "建议：一个人很好，但别把孤独当舒适区。世界很大，总有一个人值得你打开门说\"进来坐坐？\"",
    adviceEn: "Tip: Being alone is fine, but don't make loneliness your comfort zone. The world is big — there's someone worth opening the door for and saying 'come in?'",
  },
  {
    id: 22,
  code: "FUCK",
    name: "草者",
    nameEn: "The F-Bomb",
    emoji: "🤬",
    tagline: "操！这是什么人格？",
    taglineEn: "F***! What kind of personality is this?",
    description:
      "你的情绪像火山一样随时随地喷发——看不惯就骂、不爽就怼、从不委屈自己。你的真实和不做作让人直呼过瘾，在你的世界里没有\"忍一忍算了\"这回事。你是这个虚伪世界的照妖镜。但骂归骂，别让愤怒成为你唯一的语言。有时候好好说话比骂人有力量得多。",
    descriptionEn:
      "Your emotions erupt like a volcano at any given moment — if you don't like it, you curse; if you're pissed, you blast; you never swallow your feelings. Your raw authenticity makes people cheer — in your world, 'just put up with it' doesn't exist. You're the truth-mirror in a world of fakes. But cursing aside, don't let anger be your only language. Sometimes, speaking calmly is far more powerful than shouting.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "自尊自信", traitEn: "Self-esteem", level: "H" },
      { model: "态度模型", modelEn: "Attitude Model", trait: "世界观倾向", traitEn: "Worldview", level: "L" },
      { model: "社交模型", modelEn: "Social Model", trait: "表达与真实度", traitEn: "Authenticity", level: "H" },
    ],
    traits: ["真实到爆", "敢怒敢言", "不装不演", "情绪拉满"],
    traitsEn: ["Brutally real", "Speaks anger aloud", "Zero pretense", "Emotionally maxed"],
    advice: "建议：你的真实让人爱，但表达方式可以升级一下。把\"操\"换成\"我认为这样不合理\"，杀伤力翻倍。",
    adviceEn: "Tip: Your authenticity is loved, but you could upgrade how you express it. Replace 'F***' with 'I find this unreasonable' — twice as devastating.",
  },
  {
    id: 23,
  code: "DEAD",
    name: "死者",
    nameEn: "The Dead",
    emoji: "💀",
    tagline: "我，还活着吗？",
    taglineEn: "Am I... still alive?",
    description:
      "你的身体在运转，但灵魂仿佛已经掉线。对任何事都提不起兴趣，回复消息全靠本能，吃饭只是为了维持生命体征。你不是真的\"死了\"，你只是对生活暂时失去了热情。但好消息是——只要你还在问\"我还活着吗\"就说明你还没放弃。再给自己一点时间，火花会回来的。",
    descriptionEn:
      "Your body is functioning, but your soul seems to have disconnected. Nothing sparks your interest; you reply to messages on autopilot; eating is just to sustain vital signs. You're not actually 'dead' — you've just temporarily lost enthusiasm for life. But here's the good news: as long as you're still asking 'am I alive,' it means you haven't given up yet. Give yourself a little more time — the spark will return.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "自尊自信", traitEn: "Self-esteem", level: "L" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "动机导向", traitEn: "Motivation", level: "L" },
      { model: "情感模型", modelEn: "Emotion Model", trait: "情感投入度", traitEn: "Emotional Investment", level: "L" },
    ],
    traits: ["灵魂出走", "生无可恋", "佛到极致的极致", "沉默如谜"],
    traitsEn: ["Soul on leave", "Existential emptiness", "Ultra-ultra-Zen", "Silently mysterious"],
    advice: "建议：你不是死了，你只是需要重启。去晒晒太阳、吃顿好的、睡个好觉。明天又是新的一天。",
    adviceEn: "Tip: You're not dead — you just need a reboot. Go soak up some sun, eat something good, get a proper sleep. Tomorrow's a new day.",
  },
  {
    id: 24,
  code: "IMFW",
    name: "废物",
    nameEn: "The Failure",
    emoji: "🗑️",
    tagline: "我真的...是废物吗？",
    taglineEn: "Am I really... a failure?",
    description:
      "你经常觉得自己什么都做不好，看着别人的生活总觉得人家都比你强。但\"废物\"只是你对自己的误解——你只是还没找到发光的地方。在别人眼里，你比你以为的要好很多。你不是废物，你只是对自己的标准设太高了。偶尔降低标准，你会发现其实挺多人不如你呢。",
    descriptionEn:
      "You constantly feel like you're failing at everything, looking at others' lives and thinking they're all doing better than you. But 'failure' is just your misunderstanding of yourself — you simply haven't found the place where you shine. In others' eyes, you're far better than you think. You're not a failure; you just set the bar impossibly high for yourself. Lower it a bit, and you'll find plenty of people aren't doing half as well as you.",
    dimensions: [
      { model: "自我模型", modelEn: "Self Model", trait: "自尊自信", traitEn: "Self-esteem", level: "L" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "执行模式", traitEn: "Execution Mode", level: "L" },
      { model: "态度模型", modelEn: "Attitude Model", trait: "人生意义感", traitEn: "Life Meaning", level: "L" },
    ],
    traits: ["自我否定", "标准过高", "看不到自己的好", "潜力被低估"],
    traitsEn: ["Self-negating", "Impossibly high standards", "Cannot see own worth", "Underestimated potential"],
    advice: "建议：把\"我是废物\"换成\"我还在成长\"。没人一开始就是满级号，你的版本还在更新中。",
    adviceEn: "Tip: Swap 'I'm a failure' for 'I'm still growing.' Nobody starts at max level. Your version is still updating.",
  },
  {
    id: 25,
  code: "HHHH",
    name: "傻乐者",
    nameEn: "The Happy Fool",
    emoji: "😂",
    tagline: "哈哈哈哈哈哈。",
    taglineEn: "Hahahahahaha.",
    description:
      "你就是人群中的笑点最低的那个人——不好笑的笑话你能笑出眼泪，生活的微小善意能让你开心一整天。你的快乐简单纯粹，像阳光一样感染着身边的每一个人。有人觉得你\"没心没肺\"，但只有你知道：笑是对生活最好的回应。别在意那些说你\"太幼稚\"的人，他们只是羡慕你的快乐来得那么容易。",
    descriptionEn:
      "You're the person with the lowest laugh threshold in the room — you cry-laugh at jokes that aren't even funny, and life's tiniest kindness brightens your whole day. Your happiness is simple and pure, radiating like sunshine to everyone around you. Some call you 'carefree to a fault,' but only you know: laughter is the best response to life. Don't mind those who call you 'too childish' — they're just envious of how easily joy finds you.",
    dimensions: [
      { model: "态度模型", modelEn: "Attitude Model", trait: "世界观倾向", traitEn: "Worldview", level: "H" },
      { model: "社交模型", modelEn: "Social Model", trait: "社交主动性", traitEn: "Social Initiative", level: "H" },
      { model: "情感模型", modelEn: "Emotion Model", trait: "情感投入度", traitEn: "Emotional Investment", level: "H" },
    ],
    traits: ["快乐永动机", "笑点极低", "正能量病毒", "没心没肺"],
    traitsEn: ["Joy machine", "Extremely low laugh bar", "Positivity virus", "Carefree"],
    advice: "建议：你的快乐是稀缺资源，但别用笑来逃避所有情绪。难过的时候也可以哭，混合模式更健康。",
    adviceEn: "Tip: Your joy is a rare resource, but don't use laughter to dodge every emotion. It's okay to cry when you're sad — hybrid mode is healthier.",
  },
  {
    id: 26,
  code: "DRUNK",
    name: "酒鬼",
    nameEn: "The Drunk",
    emoji: "🍺",
    tagline: "烈酒烧喉，不得不醉。",
    taglineEn: "Strong liquor burns the throat — I have to be drunk.",
    description:
      "你用微醺来对抗清醒的世界——不是说真的嗜酒，而是你总需要一点\"醉意\"来面对生活。你的\"醉\"是一种状态：对现实的温柔逃避，对理想的朦胧坚持。在微醺中你更真实、更大胆、更敢做自己。但别忘了，酒醒之后世界还在。偶尔清醒着面对一切，你也能行。",
    descriptionEn:
      "You use a tipsy haze to counter the sober world — not that you're an actual drinker, but you always need a touch of 'drunkenness' to face life. Your 'drunk' is a state: a gentle escape from reality, a hazy persistence of ideals. In that buzz, you're more real, more bold, more truly yourself. But don't forget: the world is still there when you sober up. Try facing it clear-eyed once in a while — you can handle it.",
    dimensions: [
      { model: "态度模型", modelEn: "Attitude Model", trait: "世界观倾向", traitEn: "Worldview", level: "M" },
      { model: "情感模型", modelEn: "Emotion Model", trait: "边界与依赖", traitEn: "Boundaries & Dependence", level: "L" },
      { model: "行动驱力模型", modelEn: "Drive Model", trait: "决策风格", traitEn: "Decision Style", level: "L" },
    ],
    traits: ["微醺人生", "浪漫逃避", "半醉半醒", "醉眼看世界"],
    traitsEn: ["Tipsy life", "Romantic escapism", "Half-drunk, half-awake", "Seeing through drunk eyes"],
    advice: "建议：微醺是人生佐料，但不是主食。偶尔清醒也很美——你会发现不用醉着也能活得很好。",
    adviceEn: "Tip: Tipsiness is the spice of life, not the main course. Clear-eyed is beautiful too — you'll find you don't need to be drunk to live well.",
  },
];

// ================================================================
// SBTI Calculation Engine
// ================================================================

export function calculateSBTI(answers: Record<number, number>): string {
  const scores = new Array(27).fill(0);

  Object.entries(answers).forEach(([qIdStr, optIdx]) => {
    const qId = parseInt(qIdStr);
    if (qId < 1 || qId > sbtiQuestions.length) return;
    const q = sbtiQuestions[qId - 1];
    if (!q) return;
    const opt = q.options[optIdx];
    if (!opt) return;
    opt.scores.forEach((s: number, i: number) => {
      scores[i] += s;
    });
  });

  let maxIdx = 0;
  let maxVal = scores[0];
  scores.forEach((s, i) => {
    if (s > maxVal) {
      maxVal = s;
      maxIdx = i;
    }
  });

  return sbtiTypes[maxIdx].code;
}

export function getSBTITypeByCode(code: string): SBTITypeInfo | undefined {
  return sbtiTypes.find((t) => t.code === code);
}

export function getAllScores(answers: Record<number, number>): { code: string; score: number }[] {
  const scores = new Array(27).fill(0);

  Object.entries(answers).forEach(([qIdStr, optIdx]) => {
    const qId = parseInt(qIdStr);
    if (qId < 1 || qId > sbtiQuestions.length) return;
    const q = sbtiQuestions[qId - 1];
    if (!q) return;
    const opt = q.options[optIdx];
    if (!opt) return;
    opt.scores.forEach((s: number, i: number) => {
      scores[i] += s;
    });
  });

  return sbtiTypes.map((type, i) => ({
    code: type.code,
    score: scores[i],
  }));
}