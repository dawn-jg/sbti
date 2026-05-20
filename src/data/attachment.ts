export interface AttachmentQuestion {
  id: number; text: string; textEn: string;
  options: { text: string; textEn: string; scores: Record<string, number> }[];
}
export interface AttachmentTypeInfo {
  code: string; name: string; nameEn: string; emoji: string;
  tagline: string; taglineEn: string; description: string; descriptionEn: string;
  strengths: string[]; strengthsEn: string[]; weaknesses: string[]; weaknessesEn: string[];
  tips: string; tipsEn: string;
}

export const attachmentQuestions: AttachmentQuestion[] = [
  { id: 1, text: "伴侣没有及时回复你的消息，你会？", textEn: "Partner doesn't reply promptly, you?",
    options: [
      { text: "立刻再发一条追问", textEn: "Immediately text again", scores: { SECURE: 0, ANXIOUS: 3, AVOIDANT: 0, FEARFUL: 1 } },
      { text: "假装没看见，继续做自己的事", textEn: "Pretend you didn't notice", scores: { SECURE: 0, ANXIOUS: 0, AVOIDANT: 3, FEARFUL: 1 } },
      { text: "稍微担心但很快转移注意力", textEn: "Slightly worried but quickly distract yourself", scores: { SECURE: 2, ANXIOUS: 1, AVOIDANT: 0, FEARFUL: 2 } }
    ] },
  { id: 2, text: "你理想中的亲密关系是？", textEn: "Your ideal relationship is?",
    options: [
      { text: "彼此独立但有深度连接", textEn: "Independent but deeply connected", scores: { SECURE: 3, ANXIOUS: 0, AVOIDANT: 1, FEARFUL: 0 } },
      { text: "时时刻刻都想粘在一起", textEn: "Want to be together all the time", scores: { SECURE: 0, ANXIOUS: 3, AVOIDANT: 0, FEARFUL: 1 } },
      { text: "保持距离，不需要太多亲密", textEn: "Keep distance, don't need much intimacy", scores: { SECURE: 0, ANXIOUS: 0, AVOIDANT: 3, FEARFUL: 1 } }
    ] },
  { id: 3, text: "吵架后你通常？", textEn: "After a fight, you usually?",
    options: [
      { text: "主动沟通，尽快和解", textEn: "Take initiative to communicate and reconcile", scores: { SECURE: 3, ANXIOUS: 1, AVOIDANT: 0, FEARFUL: 0 } },
      { text: "等对方先低头", textEn: "Wait for them to apologize first", scores: { SECURE: 0, ANXIOUS: 0, AVOIDANT: 2, FEARFUL: 1 } },
      { text: "反复回想对方说的话，越想越委屈", textEn: "Keep replaying what they said, feeling more hurt", scores: { SECURE: 0, ANXIOUS: 2, AVOIDANT: 0, FEARFUL: 2 } }
    ] },
  { id: 4, text: "你觉得自己在关系中？", textEn: "In relationships, you are?",
    options: [
      { text: "安全且自信的", textEn: "Secure and confident", scores: { SECURE: 3, ANXIOUS: 0, AVOIDANT: 0, FEARFUL: 0 } },
      { text: "总是担心被抛弃", textEn: "Always afraid of being abandoned", scores: { SECURE: 0, ANXIOUS: 3, AVOIDANT: 0, FEARFUL: 1 } },
      { text: "很难完全信任一个人", textEn: "Hard to fully trust someone", scores: { SECURE: 0, ANXIOUS: 0, AVOIDANT: 2, FEARFUL: 2 } }
    ] },
  { id: 5, text: "对方需要空间时，你的感受是？", textEn: "When your partner needs space, you feel?",
    options: [
      { text: "完全理解，我也需要空间", textEn: "Totally understand, I need space too", scores: { SECURE: 3, ANXIOUS: 0, AVOIDANT: 1, FEARFUL: 0 } },
      { text: "是不是我哪里做错了？", textEn: "Did I do something wrong?", scores: { SECURE: 0, ANXIOUS: 3, AVOIDANT: 0, FEARFUL: 1 } },
      { text: "正好，我也想一个人待着", textEn: "Perfect, I want to be alone too", scores: { SECURE: 0, ANXIOUS: 0, AVOIDANT: 3, FEARFUL: 0 } }
    ] },
  { id: 6, text: "关于示弱，你的态度是？", textEn: "About showing vulnerability?",
    options: [
      { text: "很自然，信任对方才会示弱", textEn: "Natural, only show weakness to people I trust", scores: { SECURE: 2, ANXIOUS: 0, AVOIDANT: 1, FEARFUL: 0 } },
      { text: "绝对不示弱，不能让人看到脆弱", textEn: "Never show weakness, can't let people see vulnerability", scores: { SECURE: 0, ANXIOUS: 0, AVOIDANT: 3, FEARFUL: 1 } },
      { text: "想示弱但又怕被利用", textEn: "Want to but afraid of being taken advantage of", scores: { SECURE: 0, ANXIOUS: 1, AVOIDANT: 0, FEARFUL: 3 } }
    ] },
  { id: 7, text: "你更认同哪种爱情观？", textEn: "Which love philosophy do you identify with?",
    options: [
      { text: "爱情是合作和成长", textEn: "Love is partnership and growth", scores: { SECURE: 3, ANXIOUS: 0, AVOIDANT: 0, FEARFUL: 0 } },
      { text: "爱情是救赎，对方应该填补我的空缺", textEn: "Love is salvation, fill my void", scores: { SECURE: 0, ANXIOUS: 3, AVOIDANT: 0, FEARFUL: 1 } },
      { text: "爱情是束缚，我更喜欢自由", textEn: "Love is constraint, I prefer freedom", scores: { SECURE: 0, ANXIOUS: 0, AVOIDANT: 3, FEARFUL: 0 } }
    ] },
  { id: 8, text: "分手后，你会？", textEn: "After a breakup, you would?",
    options: [
      { text: "难过但能正常走出来", textEn: "Sad but can move on normally", scores: { SECURE: 3, ANXIOUS: 0, AVOIDANT: 1, FEARFUL: 0 } },
      { text: "反复纠结哪里出了问题", textEn: "Overanalyze what went wrong", scores: { SECURE: 0, ANXIOUS: 2, AVOIDANT: 0, FEARFUL: 2 } },
      { text: "迅速切断联系，不想回头", textEn: "Cut contact immediately, don't look back", scores: { SECURE: 0, ANXIOUS: 0, AVOIDANT: 3, FEARFUL: 1 } }
    ] },
  { id: 9, text: "你觉得亲密关系中最重要的是？", textEn: "Most important in intimacy is?",
    options: [
      { text: "信任和安全感", textEn: "Trust and security", scores: { SECURE: 3, ANXIOUS: 1, AVOIDANT: 0, FEARFUL: 0 } },
      { text: "激情和占有", textEn: "Passion and possession", scores: { SECURE: 0, ANXIOUS: 3, AVOIDANT: 0, FEARFUL: 0 } },
      { text: "独立和边界", textEn: "Independence and boundaries", scores: { SECURE: 1, ANXIOUS: 0, AVOIDANT: 3, FEARFUL: 0 } }
    ] },
  { id: 10, text: "当对方情绪不好时，你？", textEn: "When your partner is in a bad mood, you?",
    options: [
      { text: "主动询问，提供陪伴", textEn: "Ask proactively and offer company", scores: { SECURE: 3, ANXIOUS: 1, AVOIDANT: 0, FEARFUL: 0 } },
      { text: "担心是不是我造成的", textEn: "Worry that I caused it", scores: { SECURE: 0, ANXIOUS: 3, AVOIDANT: 0, FEARFUL: 1 } },
      { text: "给对方空间，不打扰", textEn: "Give them space, don't disturb", scores: { SECURE: 1, ANXIOUS: 0, AVOIDANT: 2, FEARFUL: 1 } }
    ] },
  { id: 11, text: "大多数人分手的原因是？", textEn: "Most of your breakups are because?",
    options: [
      { text: "性格不合，和平分手", textEn: "Incompatible personalities, amicable", scores: { SECURE: 2, ANXIOUS: 0, AVOIDANT: 1, FEARFUL: 0 } },
      { text: "没有安全感，反复拉扯", textEn: "Insecurity, on-again-off-again", scores: { SECURE: 0, ANXIOUS: 3, AVOIDANT: 0, FEARFUL: 1 } },
      { text: "感觉被束缚，想逃跑", textEn: "Feel trapped, want to escape", scores: { SECURE: 0, ANXIOUS: 0, AVOIDANT: 3, FEARFUL: 1 } }
    ] },
  { id: 12, text: "如果对方查看你的手机，你会？", textEn: "If your partner checks your phone, you?",
    options: [
      { text: "无所谓，问一声就行", textEn: "No problem, just ask first", scores: { SECURE: 3, ANXIOUS: 0, AVOIDANT: 1, FEARFUL: 0 } },
      { text: "立刻紧张，是不是怀疑我什么", textEn: "Immediately nervous, are you suspecting something?", scores: { SECURE: 0, ANXIOUS: 3, AVOIDANT: 0, FEARFUL: 1 } },
      { text: "非常反感，这是侵犯隐私", textEn: "Very resentful, this is invasion of privacy", scores: { SECURE: 1, ANXIOUS: 0, AVOIDANT: 3, FEARFUL: 0 } }
    ] }
];

export const attachmentTypes: Record<string, AttachmentTypeInfo> = {
  SECURE: {
    code: "SECURE", name: "安全型", nameEn: "Secure", emoji: "🔒",
    tagline: "我爱你，也爱我自己", taglineEn: "I love you, and I love myself too",
    description: "你拥有健康的依恋模式。在亲密关系中感到安全、自信，既能享受亲密，也能保持独立。你不害怕被抛弃，也不抗拒深度连接。",
    descriptionEn: "You have a healthy attachment style. You feel secure and confident in relationships, capable of both intimacy and independence. You don't fear abandonment or resist deep connection.",
    strengths: ["情绪稳定", "信任他人", "沟通直接", "边界清晰"], strengthsEn: ["Emotionally stable", "Trusts others", "Direct communication", "Clear boundaries"],
    weaknesses: ["可能过于理性", "有时忽视对方情感需求"], weaknessesEn: ["Can be too rational", "Sometimes overlooks emotional needs"],
    tips: "继续保持自我觉察，在关系里保持真实表达。", tipsEn: "Keep practicing self-awareness and authentic expression in relationships."
  },
  ANXIOUS: {
    code: "ANXIOUS", name: "焦虑型", nameEn: "Anxious", emoji: "😰",
    tagline: "我爱你，但总觉得你会离开我", taglineEn: "I love you, but I'm always afraid you'll leave",
    description: "你在关系中常常感到不安，害怕被抛弃。可能需要大量确认和保证，容易过度解读对方的行为。你对亲密充满渴望，但也容易被情绪淹没。",
    descriptionEn: "You often feel insecure in relationships, fearing abandonment. You may need constant reassurance and tend to overanalyze your partner's behavior. Your longing for intimacy can overwhelm you.",
    strengths: ["情感丰富", "渴望亲密", "对关系投入"], strengthsEn: ["Emotionally rich", "Craves intimacy", "Deeply invested"],
    weaknesses: ["容易焦虑", "过度依赖", "敏感多疑"], weaknessesEn: ["Prone to anxiety", "Overly dependent", "Insecure and suspicious"],
    tips: "练习自我安抚，建立内在安全感，学会区分事实和想象。", tipsEn: "Practice self-soothing, build internal security, learn to distinguish facts from fears."
  },
  AVOIDANT: {
    code: "AVOIDANT", name: "回避型", nameEn: "Avoidant", emoji: "🏃",
    tagline: "我不需要任何人，亲密让我窒息", taglineEn: "I don't need anyone, intimacy suffocates me",
    description: "你高度重视独立和自由，在亲密关系中容易感到被束缚。你可能下意识地保持距离，避免深度情感连接。独处让你感到安全。",
    descriptionEn: "You highly value independence and freedom. You tend to keep distance in relationships and avoid deep emotional connection. Being alone feels safe and comfortable.",
    strengths: ["独立自主", "情绪自控", "边界清晰"], strengthsEn: ["Independent", "Self-controlled", "Clear boundaries"],
    weaknesses: ["难以亲密", "情感隔离", "拒绝依赖"], weaknessesEn: ["Difficulty with intimacy", "Emotional detachment", "Refuses to depend"],
    tips: "试着慢慢打开，允许自己依赖别人，亲密不是失去自我。", tipsEn: "Try opening up slowly, allow yourself to depend on others. Intimacy isn't losing yourself."
  },
  FEARFUL: {
    code: "FEARFUL", name: "混乱型", nameEn: "Fearful-Avoidant", emoji: "🌪️",
    tagline: "我渴望爱，但我不敢相信爱", taglineEn: "I crave love, but I don't dare to trust it",
    description: "你同时拥有焦虑型和回避型的特质——渴望亲密，但又害怕受伤。你在关系中常常发出矛盾信号，自己也很困惑。这是最复杂的一种依恋类型。",
    descriptionEn: "You have both anxious and avoidant traits — you crave intimacy but fear getting hurt. You often send mixed signals and feel confused yourself. This is the most complex attachment style.",
    strengths: ["高度敏感", "有深度自我觉察潜力"], strengthsEn: ["Highly sensitive", "Potential for deep self-awareness"],
    weaknesses: ["矛盾行为", "难以维持稳定关系", "易自我破坏"], weaknessesEn: ["Contradictory behavior", "Hard to maintain stability", "Self-sabotage"],
    tips: "寻求专业心理咨询帮助，安全地探索早期依恋创伤，你值得被爱。", tipsEn: "Consider professional counseling to safely explore early attachment trauma. You deserve to be loved."
  }
};

export function calculateAttachment(answers: Record<number, number>): string {
  const scores: Record<string, number> = { SECURE: 0, ANXIOUS: 0, AVOIDANT: 0, FEARFUL: 0 };
  Object.entries(answers).forEach(([qId, optIdx]) => {
    const q = attachmentQuestions[parseInt(qId)];
    if (q && q.options[optIdx]) {
      Object.entries(q.options[optIdx].scores).forEach(([k, v]) => { scores[k] = (scores[k] || 0) + v; });
    }
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}