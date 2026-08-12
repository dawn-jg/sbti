import { useSite } from "@/lib/site-context";

const CONTENT: Record<string, { zh: { h2: string; p: string }[]; en: { h2: string; p: string }[] }> = {
  enneagram: {
    zh: [
      { h2: "九型人格在线测试", p: "九型人格（Enneagram）是人格心理学中一套严谨的类型系统，描述了 9 种基本人格类型。每种类型都围绕一种核心恐惧和核心渴望展开：1 号怕犯错、2 号怕不被需要、3 号怕失败、4 号怕平庸、5 号怕被入侵、6 号怕没有安全感、7 号怕痛苦、8 号怕被控制、9 号怕冲突。了解自己的九型人格，能帮助你看见自己下意识的情绪反应模式和压力下的行为变化。本测试免费，无需注册，18 题即可完成。" },
      { h2: "九型人格与 MBTI 的区别", p: "如果说 MBTI 回答的是「你的脑回路长什么样」，九型人格回答的就是「你的心为什么这么跳」。前者是认知偏好，后者是情感动机。两者结合使用可以获得更立体的自我认知。当你知道自己是九型中的哪一型，就能理解为什么你在压力下总会有特定的反应——这不是你能「改掉」的，而是你人格的一部分。" },
      { h2: "收到结果后怎么读？", p: "先看你的主型，然后注意它旁边的「侧翼」（Wing）。7 号可能是 7w6 或 7w8，前者偏谨慎后者偏冲动。再往深了看，你在压力下会朝 1 号方向走（不健康的 7 会变得挑剔苛责），在放松时会朝 5 号方向靠。这套动态流动才是九型人格最精彩的地方——你不是一个静态的标签，而是一套有规律可循的情绪机器。" },
      { h2: "九型人格最常见的三个误解", p: "一、型号会变——型号不变，变化的是你的健康层级。二、有「好型号」和「坏型号」——每个型号都有高阶和低阶状态，3 号可以是迷人的领袖，也可以是空虚的骗子。三、九型人格是算命——恰恰相反，它是一份使用说明书，目的是让你看见模式，而不是预测命运。比起「我是什么」，更重要的是「我怎么了」。" },
    ],
    en: [
      { h2: "Free Enneagram Test Online", p: "The Enneagram describes 9 basic personality types, each driven by a core fear and core desire — Type 1 fears being wrong, Type 2 fears being unwanted, Type 3 fears failure, Type 4 fears being ordinary, Type 5 fears being invaded, Type 6 fears insecurity, Type 7 fears pain, Type 8 fears being controlled, Type 9 fears conflict. Understanding your type reveals your emotional patterns under stress. Free, no registration required, 18 questions." },
      { h2: "How to Read Your Results", p: "Start with your core type, then check your wing — 7w6 and 7w8 may share a core but behave very differently. Then go deeper: under stress, a 7 disintegrates toward 1 (becoming critical and obsessive), and in growth, integrates toward 5 (finding depth). This dynamic movement is the real power of the Enneagram — you're not a static label, you're a machine with predictable patterns. Use it to catch yourself mid-reaction." },
      { h2: "Common Misconceptions", p: "First: types don't change — your level of health does. A Type 3 can be an inspiring leader or a hollow chameleon; the type stays, the behavior shifts. Second: there are no good or bad types — every type has a light and shadow side. Third: the Enneagram is not fortune-telling. It's an owner's manual for your emotional wiring. The question isn't 'what am I?' — it's 'what am I doing right now?'" },
      { h2: "Using the Enneagram in Real Life", p: "In relationships, knowing your partner's type means understanding why they need space (Type 5) or reassurance (Type 6). At work, a Type 8 thrives on direct confrontation while a Type 9 shuts down from it. In your own life, the Enneagram is a growth map: if you're a Type 1 learning to relax, that's not betrayal of your type — it's integration. Use it as a compass, not a cage." },
    ],
  },
  "pet-sbti": {
    zh: [
      { h2: "宠物 SBTI：你的毛孩子是什么人格？", p: "SBTI 的宠物版。同样基于行为维度打分，但完全替换了问题语境——题目改为主人对宠物日常行为的观察，12 种动物人格类型涵盖从狗系到猫系再到冷门系的所有精神样本。不是严肃的性格学，是你跟朋友聊八卦时的全新话题。友情提示：做之前先观察你家宠物三分钟。" },
      { h2: "宠物 SBTI 是怎么来的？", p: "基于 SBTI 的五组行为维度框架，但问题被重新设计为主人视角的宠物行为观察。12 种动物人格类型对应不同的行为倾向和气质特征——狗系忠诚热情、猫系独立高冷、狐狸系机灵狡猾、树懶系佛系躺平。不是科学量表，但比星座准。" },
      { h2: "知道你家毛孩子的类型后能干嘛？", p: "不同类型有不同的相处策略。狗系吃干劲、猫系吃耐心、兔子系吃安全感。知道类型能帮你在遛狗时少拉扯、在吸猫时少挨挠。还有，同类型的主人往往跟宠物相处得更默契——这可能说明你们是真的「彼此养的」。纯娱乐，但当它测出来跟你一个类型时，那种默契感是真实的。" },
      { h2: "谁适合做这个测试？", p: "养宠人士的必备社交货币。如果你家有毛孩子——不管它是猫狗还是仓鼠鹦鹉——这个测试都是你跟同类聊天的破冰神器。暂时没养但想养的人也可以做，提前了解什么类型的宠物可能跟你合拍。不养宠物的……那就想象一个你想养的动物，也准。" },
    ],
    en: [
      { h2: "Pet SBTI Personality Test", p: "The pet version of SBTI — same behavioral dimension framework, but redesigned with questions about your pet's daily behavior. 12 animal personality types from dog-coded to cat-coded to everything in between. It's not serious personality science. It's your next party topic. Quick tip: watch your pet for three minutes before starting." },
      { h2: "How to Understand Your Pet's Type", p: "Each of the 12 types points to a specific behavioral temperament. Dog-coded types are loyal and energetic, cat-coded types are independent and selective, fox types are clever and mischievous, sloth types are chill and low-maintenance. Your pet's type isn't a scientific diagnosis — it's a playful lens to notice what makes them uniquely them. Pay attention to which behaviors the description nails." },
      { h2: "What to Do With the Results", p: "Different types thrive with different approaches. Dog-coded pets need engagement, cat-coded ones need space, rabbit-coded ones need security. Knowing the type can mean fewer leash tangles on walks and more purring during cuddle time. Bonus: owners often share their pet's type — and that's when you know you're really each other's person (and pet)." },
      { h2: "Who This Test Is For", p: "Pet parents who want bragging rights and a conversation starter. Whether you have a cat, dog, hamster, or parrot — this test is your ticket to the cool table at the pet park. Don't have a pet yet? Take it anyway and find out what type would vibe with your lifestyle. No pets at all? Just pick the animal you'd want and go with it — it still works." },
    ],
  },
  "love-language": {
    zh: [
      { h2: "爱的五种语言免费测试", p: "Gary Chapman 博士提出的「爱的五种语言」理论认为，每个人表达和接收爱的方式可以归入 5 种主要类型：肯定的言语、服务的行动、接收礼物、高质量的陪伴时间、身体接触。当伴侣双方的「爱语」不匹配时，即使双方都在努力付出，也可能感受不到对方的爱——因为你用你的语言在爱，而对方用对方的语言在期待。测试你的主要爱语，聊聊彼此的差异。免费测试，10 题即可完成。" },
      { h2: "找到主要爱语之后呢？", p: "大多数人的第一反应是「对，我就是这样的！」——然后就没有然后了。真正的价值在于第二步：你和伴侣或家人坐下来，分别说出自己的排序。爱语不是谁的错，也不是谁「要求太多」。如果对方的主要爱语是「服务的行动」，你送再多花都不如帮ta把碗洗了。如果ta的爱语是「陪伴时间」，你加班再努力都不如放下手机一起吃顿饭。" },
      { h2: "三个最常见的爱的语言误解", p: "第一，你以为你的主要爱语会一成不变——实际上，人生阶段不同，优先的爱语也会变化。第二，你以为知道了对方的爱语就等于自动会了——知道和做到是两码事。第三，你以为爱语理论只适用于伴侣——实际上，用在亲子关系、甚至职场关系里同样有效：下属需要的是「肯定的言语」还是「服务的行动」？差别很大。" },
      { h2: "这个测试适合什么样的人？", p: "任何在一段关系中觉得「我明明很努力了，对方为什么还是不满意」的人。也适合正在热恋期的人——趁一切还好的时候搞清楚彼此的爱语，比出问题后再补救有效得多。甚至单身的人一样可以做：知道你要什么，才知道怎么告诉未来的伴侣怎么爱你。" },
    ],
    en: [
      { h2: "5 Love Languages Free Test", p: "Dr. Gary Chapman's Love Languages theory says everyone gives and receives love in 5 distinct ways: Words of Affirmation, Acts of Service, Receiving Gifts, Quality Time, and Physical Touch. The problem? Most people love in their own language and wonder why their partner doesn't feel loved. Find your primary love language and spark a real conversation. Free test, 10 questions." },
      { h2: "What Comes After the Test", p: "Most people read their result and say 'Yep, that's me!' — then do nothing. The real work is step two: sit down with your partner or family and share your rankings. Love languages aren't about who's right or who 'asks too much'. If their language is Acts of Service, flowers mean less than doing the dishes. If theirs is Quality Time, overtime impresses less than putting down your phone for dinner." },
      { h2: "Three Myths About Love Languages", p: "One: your primary love language is fixed — it isn't. Life stages shift priorities. Two: knowing your partner's language means you're automatically fluent — nope. Knowing and doing are very different things. Three: it only applies to romantic relationships — false. It works in parent-child dynamics and even at work. Does your employee need Words of Affirmation or Acts of Service? Big difference in how you lead them." },
      { h2: "Who Should Take This Test", p: "Anyone who's ever thought 'I try so hard, why don't they feel loved?' — that's your sign. Also great for new couples who want to get ahead of problems instead of fixing them later. Single people too: knowing what you need means you can tell your future partner exactly how to love you. Think of it as a cheat sheet for your next relationship." },
    ],
  },
  attachment: {
    zh: [
      { h2: "依恋风格测试：你的亲密关系模式", p: "依恋理论由约翰·鲍尔比提出，经玛丽·安斯沃思的实验验证，是理解亲密关系模式的最经典框架之一。4 种依恋风格（安全型、焦虑型、回避型、混乱型）描述了人在亲密关系中的不同行为模式。安全型的人自信独立，焦虑型的人渴望确认却害怕被抛弃，回避型的人把独立放在首位，混乱型的人在靠近与疏离之间反复摇摆。了解自己的依恋风格不是为了贴标签，而是为了看清自己在关系中的自动化模式。" },
      { h2: "收到结果后怎么看？", p: "先把「好」和「坏」的判断放下。安全型确实是理想状态，但它是后天养成的，不是天生的——这意味着不安全型也可以逐渐变成安全型。关键是先看懂自己的默认模式：你是不是一吵架就想逃？你是不是需要反复确认对方还在？你是不是对关系又渴望又害怕？这些不是性格缺陷，是你大脑从小习得的生存策略。看懂之后，你才有选择。" },
      { h2: "不同依恋风格的人能在一起吗？", p: "焦虑型和回避型之间的「吸引力」特别常见——一个追一个逃，像磁铁的两极。但这种组合也是最容易出问题的：焦虑越追，回避越逃。安全型的人跟谁都兼容，因为他们既会给空间，也会主动表达。如果你是焦虑或回避，找一个安全型的伴侣是最好的「自我修复课」——不是让对方治愈你，而是在安全的互动中学会新的模式。" },
      { h2: "常见的三个误区", p: "第一，依恋风格 = 三岁定终身——不对，成年后的安全关系体验可以重塑依恋风格。研究表明，建立安全的亲密关系本身就能让焦虑或回避的人向安全型靠拢。第二，不安全 = 有病——焦虑型和回避型只是策略，不是病理。第三，回避型的人不需要亲密——他们需要，只是他们的防御机制让他们看起来不需要。区别很重要。" },
    ],
    en: [
      { h2: "Attachment Style Test", p: "Based on John Bowlby's Attachment Theory and Mary Ainsworth's Strange Situation experiments. Four styles — Secure, Anxious, Avoidant, and Fearful-Avoidant (Disorganized) — describe how you behave in intimate relationships. Secure types are confident and warm, Anxious types crave reassurance but fear abandonment, Avoidant types prioritize independence, and Fearful-Avoidant types swing between closeness and distance. Free test, 12 questions." },
      { h2: "How to Read Your Results", p: "First, drop the good-versus-bad judgment. Secure attachment is ideal but it's developed, not innate — meaning insecure styles can become secure over time. The key is recognizing your default: do you pull away during conflict? Do you need constant reassurance? Do you want closeness but fear it? These aren't character flaws — they're survival strategies your brain learned early. See them clearly, and you get to choose differently." },
      { h2: "Can Different Styles Be Together?", p: "The anxious-avoidant 'trap' is the most common pairing — one chases, one runs, like opposite poles of a magnet. And it's the most volatile: the more anxious one pursues, the more avoidant one retreats. Secure types pair well with everyone because they give space and express needs freely. If you're anxious or avoidant, a secure partner is like relationship rehab — not because they 'fix' you, but because you learn new patterns through safe interaction." },
      { h2: "Three Mistakes People Make", p: "One: attachment style is set by age three — wrong. Secure relationships in adulthood can reshape your attachment pattern. Two: insecure attachment means something is wrong — it doesn't. Anxious and avoidant are strategies, not disorders. Three: avoidant people don't need intimacy — they do. Their defense mechanisms just make them look like they don't. That distinction matters a lot." },
    ],
  },
  "inner-child": {
    zh: [
      { h2: "内在小孩测试：你内心住着哪个小孩？", p: "内在小孩（Inner Child）是心理学中一个重要的隐喻概念，指我们内心深处保留的童年情绪和应对模式。这些「小孩」不是病态的，它们曾经是保护你适应环境的策略。内在小孩测试会探索你的主导小孩类型——受伤小孩、魔法小孩、叛逆小孩、完美主义小孩或照顾者小孩。测试的价值不在于归类，而在于让你意识到当你遇到某种情境时，是哪个「小孩」在接管方向盘。" },
      { h2: "这个概念从哪来的？", p: "内在小孩的概念根植于荣格心理学，被当代心理学家如 John Bradshaw 和 Charles Whitfield 系统化发展。它不是玄学，而是用来描述一个真实的心理现象：成年人在压力下常常退回到童年习得的应对模式。你的「内在小孩」不是你的缺陷——它是你小时候为了活下去而发明的一套操作系统。现在你长大了，但系统还在跑。" },
      { h2: "五种内在小孩详解", p: "受伤小孩——敏感、易难过，需要被看见和被理解。魔法小孩——充满想象和乐观，但有时逃避现实。叛逆小孩——抗拒规则和控制，保护自己的边界。完美主义小孩——不允许自己犯错，用高标准维持安全感。照顾者小孩——习惯先满足别人，忽略自己的需求。你不是只有一种，但总有一种是你在压力下的「默认出场小孩」。" },
      { h2: "知道之后该怎么用？", p: "识别是第一步，对话是第二步。下次当你发现自己因为一件小事突然崩溃时，试着问一句：「是谁在说话？」如果是完美主义小孩在批评你「不够好」，你可以用成年人的声音告诉ta：「够了，你已经做得很好了。」这个对话看起来有点傻，但它练习的是自我共情的能力——不是把内在小孩赶走，而是让它知道你看见了它。" },
    ],
    en: [
      { h2: "Inner Child Test", p: "The Inner Child is a powerful psychological metaphor for the emotional patterns and coping strategies we carry from childhood. Your primary inner child type — Wounded, Magical, Rebel, Perfectionist, or Caretaker — reveals which 'child' takes the wheel when life gets hard. The value isn't the label; it's recognizing when and why that particular kid shows up. Free test, 10 questions." },
      { h2: "Where Does This Concept Come From?", p: "Rooted in Jungian psychology and developed by contemporary psychologists like John Bradshaw and Charles Whitfield. This isn't mysticism — it describes a real phenomenon: adults under stress often revert to childhood coping mechanisms. Your inner child isn't a flaw. It's an operating system you installed as a kid to survive. Now you're an adult, but the system is still running on autopilot. Time to update it." },
      { h2: "A Closer Look at Each Type", p: "The Wounded Child — sensitive, easily hurt, just wants to be seen and heard. The Magical Child — imaginative, optimistic, but sometimes avoids reality. The Rebel — resists rules and boundaries, protecting their autonomy. The Perfectionist — can't afford mistakes, uses high standards as armor. The Caretaker — puts others first, neglects their own needs. You have shades of all five, but one is your default under pressure." },
      { h2: "How to Work With Your Inner Child", p: "Recognition is step one. Dialogue is step two. Next time you overreact to something small, pause and ask: 'Who's talking?' If it's the Perfectionist telling you you're not good enough, respond with your adult voice: 'You've done enough. It's okay.' It feels silly at first, but this practice builds self-compassion. The goal isn't to silence the inner child — it's to let them know you see them." },
    ],
  },
  "dark-triad": {
    zh: [
      { h2: "暗黑三角·光明三角人格测试", p: "暗黑三角（Dark Triad）由自恋、马基雅维利主义和精神病态三种人格特质构成，是人格心理学中一个经典研究领域。与之相对的光明三角（Light Triad）包含康德主义（视人为目的而非手段）、人文主义（尊重每个人的尊严）和对人性的信任。本测试综合测量 6 个面向的得分——不是评判，而是提供一幅你的社交策略地图。免费测试，简单 12 题。" },
      { h2: "怎么理解你的得分？", p: "得分的意义不在于绝对值，而在于分布。暗黑三角得分普遍偏高的人倾向于策略性社交——不是「坏人」，而是更可能在做决策时把他人视为变量。光明三角得分高的人倾向于善意信任——但不是傻白甜，更多是对人性的基本尊重。理想状态不是暗黑低分、光明高分，而是你能够根据情境灵活调用不同的策略。高自恋 + 低马基雅维利 = 炫耀但没有心计；高光明 + 低信任 = 善良但不天真。" },
      { h2: "最常见的三个误解", p: "第一，暗黑三角得分高 = 你是坏人——不对，这是一个社交策略偏好，不是道德判断。很多成功人士暗黑三角得分不低，区别在于他们控制得好。第二，暗黑和光明是反义词——心理学上的测量维度不同，你可能两个都高或都低。第三，这个测试在鼓励你变得阴暗——恰恰相反，知道自己的倾向才能有意识调节。光明三角得分低不代表你冷漠，可能只是你吃过太多亏。" },
      { h2: "知道之后能做什么？", p: "职场最有价值：如果你的马基雅维利主义得分偏高，说明你在谈判中有天然优势，但要注意别用过火让人失去信任。如果你的光明三角得分很高，适合做需要建立信任的工作——管理、教育、咨询。更重要的是，理解自己的社交风格后，可以有意识地补短板：高马基的人多学点共情，高光明的人多学点边界。" },
    ],
    en: [
      { h2: "Dark Triad & Light Triad Test", p: "The Dark Triad — Narcissism, Machiavellianism, and Psychopathy — is one of personality psychology's most-studied frameworks. Its counterpart, the Light Triad — Kantianism (people as ends, not means), Humanism (valuing each person's dignity), and Faith in Humanity — completes the picture. This test scores you across all 6 dimensions. It's not a moral judgment; it's a map of your social strategy. Free test, 12 questions." },
      { h2: "How to Read Your Scores", p: "The scores matter in their pattern, not their absolute values. High Dark Triad suggests strategic social behavior — not 'evil', but a tendency to treat people as variables in decision-making. High Light Triad suggests trusting by default — not naivety, but a baseline respect for human dignity. The sweet spot isn't low-dark-high-light; it's being able to flex between strategies situationally. High Narcissism + Low Machiavellianism = flashy but not scheming. High Light + Low Faith = kind but not gullible." },
      { h2: "Three Big Misconceptions", p: "First: high Dark Triad = bad person — no, it's a social strategy preference, not a moral verdict. Plenty of successful people score high; they just manage it well. Second: Dark and Light are opposites — they're measured on separate dimensions. You can score high on both or low on both. Third: this test encourages darkness — the opposite. Knowing your tendency lets you calibrate. Low Light Triad doesn't mean you're cold; it might mean you've been burned." },
      { h2: "How to Apply This Knowledge", p: "In the workplace: high Machiavellianism gives you an edge in negotiation, but don't erode trust by overusing it. High Light Triad? You're built for trust-based roles — management, education, counseling. The real value is filling your blind spots: if you lean dark, practice empathy deliberately. If you lean light, practice setting boundaries. It's not about changing who you are — it's about expanding your range." },
    ],
  },
  aura: {
    zh: [
      { h2: "气场颜色测试：你的能量色彩", p: "气场颜色测试源自能量疗愈传统中的脉轮体系（Chakra System），将人的能量状态对应为 7 种颜色：红色代表行动力和生存本能、橙色代表创造力、黄色代表自信、绿色代表爱与平衡、蓝色代表沟通、靛色代表直觉、紫色代表灵性。本测试是趣味性向的自我探索工具，免费测试，10 题即可完成。" },
      { h2: "你的气场颜色说明了什么？", p: "如果你的结果是红色，你可能是一个行动派——先做再想，能量充沛。黄色说明你自信有光芒，但小心别变成自我中心。蓝色代表你是一个沟通者，语言是你的超能力。绿色代表你是一个有爱的平衡者，但可能容易牺牲自我。请注意——气场颜色不是固定的，它会随你的状态波动。今天测出紫色不代表你一直灵性高，可能是你刚冥想完。这正是它有趣的地方。" },
      { h2: "关于气场颜色的常见误解", p: "第一，气场颜色有「好坏」之分——没有。每种颜色都有其高阶和低阶状态，红色可以是勇敢也可以是冲动，紫色可以是灵性也可以是逃避现实。第二，它跟星座一样不靠谱——脉轮体系有几千年的文化传统支撑，虽然没有严格的科学验证，但它是一种有价值的自我反思工具。第三，有了结果就不用管了——下次有情绪波动时回头看看，你的颜色变了吗？这个变化本身很有信息量。" },
      { h2: "谁适合做这个测试？", p: "对自我探索感兴趣的人、喜欢视觉化认知的人、正在经历人生转变需要新视角的人。也适合作为跟朋友聊天的话题——对比一下各自的气场颜色，很多关系里的默契和摩擦都有了解释。不做严肃的科学用途，但作为一面镜子足够好用。" },
    ],
    en: [
      { h2: "Aura Color Test", p: "Based on the chakra tradition, this test maps your energetic state to one of 7 aura colors: Red for drive and survival instinct, Orange for creativity, Yellow for confidence, Green for love and balance, Blue for communication, Indigo for intuition, and Violet for spirituality. It's a playful self-exploration tool, not a scientific diagnostic. Free test, 10 questions." },
      { h2: "What Your Aura Color Really Means", p: "If you got Red, you're a doer — act first, think later, high energy. Yellow means you radiate confidence — just watch out for ego creep. Blue makes you a communicator; words are your superpower. Green means you're a lover and balancer — but you might sacrifice yourself in the process. Here's the thing: your aura color shifts with your state. If you tested Purple today, you might test Orange tomorrow. That volatility is the interesting part." },
      { h2: "Common Misconceptions", p: "One: some colors are 'better' than others — they're not. Every color has a high and low expression. Red can be courage or impulsiveness. Purple can be spiritual depth or escapism. Two: it's as unscientific as horoscopes — the chakra system has thousands of years of cultural tradition behind it, and while not scientifically validated, it's a valuable self-reflection framework. Three: you get it once and you're done — check back when your emotions shift. The change tells more than the result." },
      { h2: "Who Should Try This Test", p: "Anyone curious about self-discovery, people who think visually, and anyone going through a life transition looking for a fresh lens. Also great as a conversation starter — compare colors with friends and see how your dynamics match up. It's not rigorous science, but as a mirror for self-reflection, it works surprisingly well." },
    ],
  },
  "ai-vs": {
    zh: [
      { h2: "AI 能力对比测试：你的思维模式更像人类还是 AI？", p: "在这个 AI 已渗透到写代码、写文章、画图的时代，我们不妨反过来问：你的思维方式到底有多像人类？有多像 AI？本测试从直觉与逻辑、感性与理性、灵活与程序化、创新与优化、共情与效率 5 个维度评估你的思维模式，最终给出 0 到 100 分的「人类/AI 倾向指数」。纯娱乐，但会让你思考：当 AI 越来越像人，人又该如何更像自己？" },
      { h2: "分数怎么看？", p: "偏向「人类」那一端说明你依赖直觉、情感和灵活性——你的强项是天马行空的创造力和设身处地的共情力。偏向「AI」那一端说明你擅长逻辑、系统化和效率优化——你能像程序一样拆解问题。大多数人落在中间。有趣的是，在 AI 时代，那些思维模式更「AI」的人并不一定能被 AI 替代，因为真正稀缺的可能是他们身上仅存的「人类」特质。" },
      { h2: "这是个严肃测试吗？", p: "不是。但它触及一个严肃的问题。2013 年牛津大学的研究预测 47% 的职业可能被 AI 自动化，而现在我们讨论的不是职业问题，而是我们自己。这个测试的价值不在于给你一个准确的分数，而在于让你停下来想一下：我的思维方式里，哪些来自训练和经验，哪些来自我的本质？如果 AI 会写诗、会共情了，那「人之所以为人」的东西还剩什么？" },
      { h2: "适合什么样的人做？", p: "适合任何对 AI 和人的关系有好奇的人。科技从业者做了可能发现自己比想象中更「人味儿」，艺术从业者做了可能发现自己比想象中更「程序化」。也适合团队讨论——你的团队是偏人类型还是偏 AI 型？搭配来用效果更好。" },
    ],
    en: [
      { h2: "Human vs AI Thinking Style Test", p: "In an era where AI writes code, articles, and art, let's flip the question: how human-like — or AI-like — is your thinking? This test evaluates you across 5 dimensions: Intuition vs Logic, Emotion vs Reason, Flexibility vs Systematization, Innovation vs Optimization, and Empathy vs Efficiency. You'll get a 0-100 Human/AI index. Purely for fun, but it might make you think: as AI gets more human, what makes you you?" },
      { h2: "How to Read Your Score", p: "Leaning 'Human' means you lead with intuition, emotion, and flexibility — your strength is creative chaos and real empathy. Leaning 'AI' means you're strong in logic, systematization, and efficiency — you can break problems down like code. Most people land in the middle. The irony? In the AI era, the most 'AI-like' thinkers aren't necessarily the ones AI will replace — the rare value might be the humanity they still have left." },
      { h2: "Is This a Serious Test?", p: "No — but it touches on a serious question. A 2013 Oxford study predicted 47% of jobs could be automated. Now we're not just talking about jobs; we're talking about ourselves. This test doesn't give you a precise score. Its real value is making you pause and ask: which parts of my thinking come from training, which from my essence? If AI can write poems and show empathy, what's left that makes you unmistakably you?" },
      { h2: "Who Should Take This Test", p: "Anyone curious about the human-AI dynamic. Tech workers might find they're more 'human' than they think. Artists might find they think more 'systematically' than they'd admit. Great for teams too — is your squad more human-coded or AI-coded? A good mix is probably the answer." },
    ],
  },
  mbti: {
    zh: [
      { h2: "MBTI 十六型人格免费在线测试", p: "MBTI（Myers-Briggs Type Indicator）是全球最流行的人格类型测评工具，基于荣格心理类型理论，从 4 个维度（外向/内向、实感/直觉、思考/情感、判断/感知）评估你的心理偏好，最终归入 16 种人格类型之一。本测试为免费在线版本，无需注册，32 题即可完成测评。" },
      { h2: "MBTI 的 4 个维度", p: "一、精力来源：外向（E）从社交中获得能量，内向（I）从独处中恢复精力。二、认知方式：实感（S）关注具体事实和当下，直觉（N）关注模式和可能性。三、决策方式：思考（T）基于逻辑做决定，情感（F）基于价值观和感受做决定。四、生活方式：判断（J）偏好计划和条理，感知（P）偏好灵活和开放。4 个维度各取首字母就组成了 16 种人格代码，比如 INTJ 是「建筑师」，ESFP 是「表演者」。" },
    ],
    en: [
      { h2: "Free MBTI Test Online", p: "Myers-Briggs Type Indicator - the world's most popular personality assessment. 32 questions, 4 dimensions, 16 personality types. Free, no registration required." },
    ],
  },
  sbti: {
    zh: [
      { h2: "SBTI 是什么？", p: "SBTI（Silent Behavioral Type Indicator）是一套人格画像系统。与 MBTI 不同，SBTI 从 5 组 15 个行为维度来刻画一个人的精神状态和处事风格。27 种人格类型命名更具网感和当代性——死者、拿捏者、卷王、伪人、多情者……每个名字都来自真实的社交语境。如果你觉得传统人格测试太「正经」，SBTI 可能更适合你。" },
    ],
    en: [
      { h2: "What is SBTI?", p: "Silent Behavioral Type Indicator - a personality profiling system with 27 types. Unlike MBTI, SBTI focuses on behavioral dimensions with internet-culture inspired type names. Free test, 30 questions." },
    ],
  },
};

export default function SeoContentSection({ test }: { test: string }) {
  const { lang } = useSite();
  const data = CONTENT[test];
  if (!data) return null;
  const items = lang === "en" && data.en?.length ? data.en : data.zh;
  return (
    <section className="max-w-3xl mx-auto px-5 py-8">
      {items.map((item, i) => (
        <div key={i}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mt-10 mb-3">{item.h2}</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-base">{item.p}</p>
        </div>
      ))}

      {/* Scientific disclaimer - E-E-A-T trust signal */}
      <div className="mt-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">
          {lang === "en" ? "Disclaimer" : "免责声明"}
        </h2>
        <p>
          {lang === "en"
            ? "This test is for entertainment and self-reflection purposes only. It is not a clinical diagnostic tool and does not replace professional psychological assessment or advice. Results are based on your self-reported answers and should not be used to make major life decisions."
            : "本测试仅供娱乐与自我参考，不构成临床诊断，也不能替代专业心理咨询或评估。测试结果基于你的自我报告答案，请勿以此作为重大人生决策的依据。如果你正经历心理困扰，建议寻求专业心理咨询师的帮助。"}
        </p>
      </div>
    </section>
  );
}
