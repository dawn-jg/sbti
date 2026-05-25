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
  { id: 0, code: "GOLDEN", name: "金毛暖男", nameEn: "Golden Retriever", emoji: "🐶",
    tagline: "被卖了还帮人数钱", taglineEn: "Would help count money after being sold",
    description: "你家毛孩子是狗中暖男，忠诚热情永远在线。见到谁都会摇尾巴，被骂了也还笑嘻嘻凑上来。唯一缺点：太容易相信人，被陌生人一根火腿肠就能拐走。建议拴好牵引绳。",
    descriptionEn: "Your fur baby is a canine sweetheart — loyal, warm, always present. Wags its tail at everyone. Too trusting — would follow a stranger for a sausage. Keep the leash on.",
    vibe: "温暖忠诚、热情粘人、无条件爱你", vibeEn: "warm, loyal, clingy, unconditional love" },
  { id: 1, code: "CAT", name: "傲娇猫主子", nameEn: "Cat", emoji: "🐱",
    tagline: "你对偶好是应该的", taglineEn: "Your affection is expected",
    description: "你家猫主子高冷独立，选择性营业。高兴了蹭你两下，不高兴了连眼皮都不抬一下。内心柔软但绝不承认，给撸是恩赐，不给撸是本分。适合有耐心、尊重猫主子边界的主人。",
    descriptionEn: "Your cat is elegant and selective. Affection on its terms only. Soft-hearted but would never admit it. Best for patient owners who respect boundaries.",
    vibe: "高冷独立、傲娇本娇、外冷内热", vibeEn: "independent, elegant, tsundere, secretly soft" },
  { id: 2, code: "HUSKY", name: "二哈", nameEn: "Husky", emoji: "🐺",
    tagline: "脑容量还在，但暂时没上线", taglineEn: "Brain still exists but offline",
    description: "你家哈士奇脑回路清奇，每天都在犯傻但自己不知道。出门是撒手没，回家是拆家王。但关键时刻也能给你惊喜——比如在你难过时用爪子拍你。智商在线但延迟200ms。",
    descriptionEn: "Your husky's brain runs on a different OS. Runs off outdoors, destroys furniture indoors. But can surprise you with unexpected emotional intelligence — brain online but with 200ms latency.",
    vibe: "傻萌可爱、拆家一级运动员、表情包", vibeEn: "goofy, destructive athlete, meme generator" },
  { id: 3, code: "RABBIT", name: "敏感兔", nameEn: "Rabbit", emoji: "🐰",
    tagline: "风吹草动都先跑为敬", taglineEn: "First to run at the slightest movement",
    description: "你家兔宝敏感细腻，风吹草动先跑为敬。对环境变化特别敏感，需要稳定安全的家。容易受惊，但熟悉环境后会主动蹭你的手讨摸摸。适合安静温柔、有耐心的主人。",
    descriptionEn: "Your bunny is sensitive and alert — first to bolt at anything. Needs a stable, safe home. Easily startled but once comfortable, will nuzzle your hand for pets.",
    vibe: "敏感细腻、胆小但好奇、需要安全感", vibeEn: "sensitive, timid but curious, needs security" },
  { id: 4, code: "SNAKE", name: "低调蛇", nameEn: "Snake", emoji: "🐍",
    tagline: "静静看你表演", taglineEn: "Watching you quietly",
    description: "你家蛇宝静水深流，平时低调但什么都看在眼里。不主动惹事但也不怕事，关键时刻一个眼神就能让人明白立场。行动缓慢但目标明确，是那种闷声干大事的类型。",
    descriptionEn: "Your snake is quiet but observant — sees everything. Won't start trouble but stands its ground. Moves slow but purposeful. The silent achiever type.",
    vibe: "低调内敛、精准打击、闷声干大事", vibeEn: "low-key, targeted, mysterious achiever" },
  { id: 5, code: "FOX", name: "社交狐狸", nameEn: "Fox", emoji: "🦊",
    tagline: "为了一口零食可以坑全家", taglineEn: "Would sell out the family for one treat",
    description: "你家狐狸社交牛逼症，见到谁都自来熟。人缘好到可以在小区当外交官。但小心——它可能为了零食对你卖萌，吃完就不认人。适合心胸开阔的主人。",
    descriptionEn: "Your fox is a social butterfly who befriends everyone. Popular enough to be the neighborhood diplomat. May charm you for treats then ghost you after. Best for open-minded owners.",
    vibe: "社交达人、戏精本精、为零食折腰", vibeEn: "social, dramatic, treat-motivated" },
  { id: 6, code: "OWL", name: "智慧猫头鹰", nameEn: "Owl", emoji: "🦉",
    tagline: "看透一切但选择不说", taglineEn: "Sees everything but chooses silence",
    description: "你家猫头鹰是智商担当，平时不声不响但什么都懂。观察力超强，家里谁的情绪变化它第一个知道。但有点高冷——知道答案但不屑于告诉你。适合尊重独立性的主人。",
    descriptionEn: "Your owl is the brains — quiet but understands everything. Hyper-observant, knows your mood before you do. But aloof — knows the answer but won't share.",
    vibe: "智慧担当、观察力强、不屑于理你", vibeEn: "wise, observant, too cool for you" },
  { id: 7, code: "TIGER", name: "霸道老虎", nameEn: "Tiger", emoji: "🐯",
    tagline: "这个家只有一个老大，那就是我", taglineEn: "Only one boss in this house — me",
    description: "你家老虎是天生的领地王者，在家也霸气十足。不允许其他宠物踏足它的地盘。气场强大，遛狗时别的狗都绕道走。有领导力但控制欲也强——你是它的小弟，不是主人。",
    descriptionEn: "Your tiger is a natural territory boss. No other pets allowed in its domain. Strong aura that other dogs avoid. Leader material but controlling — you're its subordinate.",
    vibe: "霸气领地王者、控制欲强、气场强大", vibeEn: "territorial, dominant, king energy" },
  { id: 8, code: "PIG", name: "躺平猪", nameEn: "Pig", emoji: "🐷",
    tagline: "能吃是福，能睡是本事", taglineEn: "Eating is fortune, sleeping is talent",
    description: "你家猪猪是躺平大师，能躺着绝不坐着。对吃有极高的追求，对运动有极强的抗拒。但性格超好从不记仇，被骂了睡一觉就忘。适合佛系主人，带它一起躺平。",
    descriptionEn: "Your piggy is the grandmaster of relaxation. World-class appetite, Olympic-level aversion to exercise. Extremely good-natured and forgiving. Best for chill owners.",
    vibe: "吃货领袖、躺平王者、性格超好", vibeEn: "foodie king, relaxation master, sweet-tempered" },
  { id: 9, code: "EAGLE", name: "野心鹰", nameEn: "Eagle", emoji: "🦅",
    tagline: "绳子？那是什么东西", taglineEn: "Leash? Never heard of it",
    description: "你家鹰哥目标导向，拆家都有KPI。运动量惊人，每天不带它跑五公里它能把家拆了。聪明、好胜、永不满足。有它在你就别想睡懒觉。适合精力充沛的运动型主人。",
    descriptionEn: "Your eagle is goal-oriented — even destruction has KPIs. Insane energy levels, will redecorate your home without enough exercise. Smart, competitive, never satisfied.",
    vibe: "运动狂魔、目标导向、永远不够", vibeEn: "exercise fanatic, goal-oriented, never enough" },
  { id: 10, code: "PANDA", name: "国宝熊猫", nameEn: "Panda", emoji: "🐼",
    tagline: "靠可爱吃饭的人生赢家", taglineEn: "Living on cuteness alone",
    description: "你家熊猫是行走的治愈系，光看着它心情就好。慢悠悠的节奏能把你的焦虑都带走。爱吃爱睡爱被抱，对陌生人也很友好。唯一的烦恼：太可爱了，每天被偷拍。",
    descriptionEn: "Your panda is walking therapy — just watching it improves your mood. Its slow pace melts anxiety. Loves food, sleep, and cuddles. Only problem: too cute, constantly photographed.",
    vibe: "可爱治愈、慢悠悠、人畜无害", vibeEn: "cute, healing, slow-paced, harmless" },
  { id: 11, code: "WOLF", name: "独狼", nameEn: "Wolf", emoji: "🐺",
    tagline: "不需要群体，孤独是我的选择", taglineEn: "No pack needed; solitude is my choice",
    description: "你家独狼是独立担当，不喜欢被牵着走。有自己的想法和节奏，合群看心情。直觉超准，能提前感知危险。但一旦认了你做主人，忠诚度爆表。适合给宠物足够自由空间的主人。",
    descriptionEn: "Your lone wolf is fiercely independent. Does its own thing, socializes on its terms. Incredible intuition — senses danger before it arrives. Fiercely loyal once it accepts you as pack leader.",
    vibe: "独来独往、直觉超准、忠诚护主", vibeEn: "lone wolf, sharp intuition, fiercely loyal" },
];

export const petSbtiQuestions: PetSBTIQuestion[] = [
  { id: 1, text: "你家宠物周末通常怎么过？", textEn: "How does your pet usually spend weekends?",
    options: [
      { text: "睡到天昏地暗，醒了吃吃了睡", textEn: "Sleep-eat-sleep cycle all day", scores: [4,0,0,0,1,0,0,0,4,0,3,0] },
      { text: "兴奋地等你带它出门探索", textEn: "Excitedly waits to go explore", scores: [0,0,2,0,0,0,0,0,0,4,3,0] },
      { text: "在窗边看世界，偶尔叫两声", textEn: "Watches the world from the window", scores: [1,3,0,3,3,0,3,2,0,0,0,2] },
      { text: "满屋子跑酷停不下来", textEn: "Parkour around the house non-stop", scores: [2,0,4,0,0,3,0,3,0,0,0,2] },
    ]},
  { id: 2, text: "有陌生人来你家，宠物第一反应是？", textEn: "When a stranger visits, your pet's first reaction?",
    options: [
      { text: "摇尾巴冲上去求摸摸", textEn: "Wags tail and runs for pets", scores: [4,0,2,0,0,3,0,0,1,0,3,0] },
      { text: "躲起来暗中观察", textEn: "Hides and observes secretly", scores: [1,4,0,4,3,0,3,0,0,0,0,1] },
      { text: "警惕地盯着陌生人不放松", textEn: "Stares warily at the stranger", scores: [0,0,0,0,2,0,2,4,0,3,0,3] },
      { text: "兴奋地转圈展示才艺求关注", textEn: "Excitedly shows off for attention", scores: [2,0,4,0,0,3,0,0,0,0,3,0] },
    ]},
  { id: 3, text: "你家宠物在同类中是什么角色？", textEn: "What role among other animals?",
    options: [
      { text: "和平大使，和谁都能玩到一起", textEn: "Peace ambassador — friends with all", scores: [4,0,0,0,0,3,0,0,2,0,3,0] },
      { text: "高冷旁观，闻一下就走", textEn: "Aloof observer — sniffs once, leaves", scores: [0,3,0,0,3,0,3,2,0,0,0,2] },
      { text: "小霸王，必须当老大", textEn: "Little boss — must be the leader", scores: [0,0,0,0,0,0,0,4,0,3,0,2] },
      { text: "跟屁虫，喜欢跟着跑", textEn: "Shadow — loves following others", scores: [2,0,3,0,0,2,0,0,2,0,0,1] },
    ]},
  { id: 4, text: "喂食时间你家宠物怎么表现？", textEn: "Behavior at feeding time?",
    options: [
      { text: "安静坐好等着，有仪式感", textEn: "Sits quietly, full ceremony mode", scores: [3,0,0,0,3,0,3,2,1,0,2,0] },
      { text: "疯狂转圈跳跃，好像饿了三辈子", textEn: "Spins like it hasn't eaten in ages", scores: [0,0,4,0,0,3,0,0,3,3,0,0] },
      { text: "淡定看一眼，不饿就先不吃", textEn: "Glances casually, walks away if not hungry", scores: [0,4,0,0,3,0,3,0,0,0,0,2] },
      { text: "用各种萌系姿势讨食", textEn: "Uses every cute pose to beg", scores: [2,0,1,0,0,3,0,0,2,0,4,0] },
    ]},
  { id: 5, text: "被你批评后会怎样？", textEn: "How does it react to being scolded?",
    options: [
      { text: "低头认错，但下次照犯", textEn: "Looks guilty, then does it again", scores: [4,0,2,0,0,0,0,0,2,0,3,0] },
      { text: "完全不在意，转头就去玩了", textEn: "Couldn't care less, goes back to playing", scores: [0,0,4,0,0,3,0,0,0,0,0,2] },
      { text: "生闷气躲起来求哄", textEn: "Sulks and hides — needs coaxing", scores: [1,4,0,4,0,0,3,0,0,0,0,0] },
      { text: "撒娇求原谅让你没法继续生气", textEn: "Uses cute moves — impossible to stay mad", scores: [2,0,0,0,0,2,0,0,3,0,3,0] },
    ]},
  { id: 6, text: "最喜欢的互动方式是？", textEn: "Favorite way to interact?",
    options: [
      { text: "被抱着揉肚子，享受一整天", textEn: "Belly rubs — could enjoy all day", scores: [4,0,0,0,0,0,0,0,3,0,4,0] },
      { text: "叼玩具让你扔，无限循环", textEn: "Brings toys to throw — infinite loop", scores: [0,0,4,0,0,3,0,0,0,3,0,2] },
      { text: "安静趴在你旁边陪着你", textEn: "Quietly lies beside you", scores: [1,3,0,3,3,0,4,0,0,0,0,2] },
      { text: "用头蹭你要你摸", textEn: "Nudges your hand insistently", scores: [2,0,0,0,0,2,0,3,2,0,0,0] },
    ]},
  { id: 7, text: "散步是什么画风？", textEn: "Vibe when going for walks?",
    options: [
      { text: "优雅走在你旁边，绅士淑女范", textEn: "Walks elegantly beside you", scores: [2,3,0,0,4,0,3,0,0,0,0,1] },
      { text: "疯狂扯绳子，是你被遛", textEn: "Pulls like a sled dog — it's walking you", scores: [0,0,4,0,0,0,0,3,0,4,0,2] },
      { text: "走走停停到处标记", textEn: "Stop-and-go, marking everything", scores: [0,0,2,0,2,3,0,0,0,0,2,2] },
      { text: "出门就想回家兴趣不大", textEn: "Wants to go home after 10 min", scores: [0,0,0,3,0,0,0,0,4,0,3,0] },
    ]},
  { id: 8, text: "睡觉时的习惯是？", textEn: "Sleeping habits?",
    options: [
      { text: "一定要挨着你睡", textEn: "Must sleep pressed against you", scores: [4,0,1,0,0,2,0,0,2,0,3,0] },
      { text: "有自己的床位不让碰", textEn: "Own bed — don't you dare touch it", scores: [0,4,0,1,3,0,3,2,0,0,0,2] },
      { text: "睡姿五花八门忍不住拍照", textEn: "Wildest positions — photo-worthy", scores: [1,0,3,0,0,2,0,0,2,2,0,0] },
      { text: "浅睡眠，一点动静就醒", textEn: "Light sleeper — wakes at any sound", scores: [0,0,0,4,0,0,3,0,0,0,0,3] },
    ]},
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