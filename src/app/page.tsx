"use client";
import TestCard from "@/components/TestCard";
import { useSite } from "@/lib/site-context";
import { blogPosts } from "@/data/blog";

const tests = [
  {
    href: "/mbti", emoji: "🧠", title: "MBTI 人格测试", titleEn: "MBTI Personality Test",
    subtitle: "16型人格 · 32题速测", subtitleEn: "16 Types · Classic",
    desc: "荣格心理类型理论。了解你的决策方式、社交偏好与工作风格。全球超过10亿人验证。",
    descEn: "Jung's psychological type theory. 1B+ tests taken worldwide.",
    gradient: "from-indigo-500 to-blue-500", bg: "bg-indigo-50", tag: "经典", tagEn: "Classic", questions: 32, types: 16,
  },
  {
    href: "/sbti", emoji: "🎭", title: "SBTI 人格测试", titleEn: "SBTI Personality Test",
    subtitle: "27种类型 · 爆款新玩法", subtitleEn: "27 Types · Viral",
    desc: "2026年爆火的互联网抽象人格测试。你是「死者」「吗喽」还是「卷王」？一测便知。",
    descEn: "The internet's hottest abstract personality test of 2026.",
    gradient: "from-violet-500 to-purple-500", bg: "bg-violet-50", tag: "热门 🔥", tagEn: "Viral 🔥", questions: 15, types: 27,
  },
  {
    href: "/enneagram", emoji: "🔮", title: "九型人格测试", titleEn: "Enneagram Test",
    subtitle: "9种性格 · 深层剖析", subtitleEn: "9 Types · Deep",
    desc: "古老而深刻的性格分类体系。探索你的核心动机、深层恐惧与情感模式。",
    descEn: "An ancient personality system. Explore your core motivations and fears.",
    gradient: "from-teal-500 to-emerald-500", bg: "bg-teal-50", tag: "深度", tagEn: "Deep", questions: 18, types: 9,
  },
  {
    href: "/pet-sbti", emoji: "🐾", title: "宠物 SBTI", titleEn: "Pet SBTI",
    subtitle: "12种动物人格 · 测测你家毛孩子", subtitleEn: "12 Animal Personalities",
    desc: "你家狗子是暖男还是戏精？猫主子是傲娇还是粘人精？帮你读懂宠物的真实性格。",
    descEn: "Is your dog a sweetheart or a drama queen? Your cat tsundere or clingy? Discover your pet's true personality.",
    gradient: "from-amber-500 to-orange-500", bg: "bg-amber-50", tag: "趣味 🐶", tagEn: "Fun 🐶", questions: 8, types: 12,
  },
  {
    href: "/love-language", emoji: "💕", title: "爱的五种语言", titleEn: "Love Language Test",
    subtitle: "5种爱语 · 感情必修课", subtitleEn: "5 Love Languages",
    desc: "基于 Gary Chapman 经典理论。了解你表达和接收爱的方式。",
    descEn: "Based on Gary Chapman's classic theory.",
    gradient: "from-pink-500 to-rose-500", bg: "bg-pink-50", tag: "恋爱 💑", tagEn: "Love 💑", questions: 10, types: 5,
  },
  {
    href: "/attachment", emoji: "💞", title: "依恋风格测试", titleEn: "Attachment Style Test",
    subtitle: "4种依恋型 · 关系解码", subtitleEn: "4 Attachment Types",
    desc: "安全型、焦虑型、回避型还是混乱型？了解你在亲密关系中的核心模式。",
    descEn: "Secure, anxious, avoidant, or disorganized?",
    gradient: "from-cyan-500 to-blue-500", bg: "bg-cyan-50", tag: "心理学 🧪", tagEn: "Psych 🧪", questions: 12, types: 4,
  },
  {
    href: "/inner-child", emoji: "🧸", title: "内在小孩测试", titleEn: "Inner Child Test",
    subtitle: "5种内在小孩 · 童年疗愈", subtitleEn: "5 Inner Child Types",
    desc: "探索你的童年情绪印记。受伤小孩、魔法小孩还是叛逆小孩？看见即疗愈。",
    descEn: "Wounded child, magical child, or rebel? Seeing is healing.",
    gradient: "from-lime-500 to-green-500", bg: "bg-lime-50", tag: "疗愈 🌿", tagEn: "Healing 🌿", questions: 10, types: 5,
  },
  {
    href: "/dark-triad", emoji: "⚖️", title: "暗黑三角·光明三角", titleEn: "Dark Triad · Light Triad",
    subtitle: "6种人格面向 · 人性光谱", subtitleEn: "6 Personality Facets",
    desc: "你有暗黑特质吗？自恋、马基雅维利还是人文主义者？探索人性的阴暗与光明面。",
    descEn: "Narcissist, Machiavellian, or humanist?",
    gradient: "from-gray-700 to-gray-900", bg: "bg-gray-100", tag: "硬核 🔮", tagEn: "Hardcore 🔮", questions: 15, types: 6,
  },
  {
    href: "/aura", emoji: "🌈", title: "气场颜色测试", titleEn: "Aura Color Test",
    subtitle: "7种气场 · 能量频率", subtitleEn: "7 Aura Colors",
    desc: "红色热情还是紫色灵性？感知你的气场颜色，了解你的能量类型和对应脉轮。",
    descEn: "Red passion or purple spirituality?",
    gradient: "from-fuchsia-500 to-violet-500", bg: "bg-fuchsia-50", tag: "灵性 ✨", tagEn: "Spiritual ✨", questions: 10, types: 7,
  },
  {
    href: "/ai-vs", emoji: "🤖", title: "AI 能力对比", titleEn: "AI vs Human Test",
    subtitle: "0-100分 · 人机思维", subtitleEn: "0-100 Score",
    desc: "你的思维更像人类还是AI？纯直觉派还是纯算法派？测试你的人机思维指数。",
    descEn: "Pure intuitionist or pure algorithmist?",
    gradient: "from-emerald-500 to-cyan-500", bg: "bg-emerald-50", tag: "未来 ⚡", tagEn: "Future ⚡", questions: 10, types: 5,
  },
];

export default function Home() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <>
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-indigo-100/30 via-violet-100/20 to-transparent dark:from-indigo-900/10 dark:via-violet-900/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {isZh ? "完全免费 · 无需注册 · 即来即测" : "Completely Free · No Registration · Instant Access"}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-4 leading-[1.1]">
            {isZh ? "了解自己，" : "Know Yourself, "}<br/>
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">{isZh ? "发现真实自我" : "Bee Real"}</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
            {isZh
              ? <>蜂巢测试是一个免费的人格测试平台。<br className="hidden sm:block" />10种测试，96+种人格类型。</>
              : <>A free personality test platform.<br className="hidden sm:block" />10 tests, 96+ personality types.</>}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/mbti" className="px-8 py-4 rounded-2xl bg-gray-900 text-base dark:bg-white text-white dark:text-gray-900 text-base font-extrabold hover:bg-gray-800 dark:hover:bg-gray-100 transition shadow-lg shadow-gray-900/10 dark:shadow-white/10">{isZh ? "开始 MBTI →" : "Start MBTI →"}</a>
            <a href="/sbti" className="px-8 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-base font-extrabold hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm">{isZh ? "试试 SBTI 🎭" : "Try SBTI 🎭"}</a>
          </div>
        </div>
      </section>

      {/* Platform Introduction Section */}
      <section className="max-w-4xl mx-auto px-5 pb-16">
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 text-center">
            {isZh ? "为什么选择蜂巢测试？" : "Why BeeTest?"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-8 leading-relaxed max-w-2xl mx-auto">
            {isZh
              ? "蜂巢测试是一个基于心理学的免费人格测试平台。我们不收集个人数据、不需要注册、支持中英双语。以下是我们与其他测试平台的不同之处。"
              : "BeeTest is a psychology-based free personality testing platform. No data collection, no registration, bilingual support. Here&apos;s what sets us apart."}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-2xl shrink-0">📚</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {isZh ? "科学理论基础" : "Scientific Foundation"}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {isZh
                    ? "我们的测试基于荣格心理类型理论、Myers-Briggs 类型指标、Bowlby 依恋理论、Gary Chapman 爱的语言等经典心理学框架。每个测试都有明确的学术来源和理论背景。"
                    : "Our tests are based on Jung&apos;s psychological types, Myers-Briggs Type Indicator, Bowlby&apos;s attachment theory, Gary Chapman&apos;s love languages, and other established psychological frameworks with clear academic provenance."}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl shrink-0">🔒</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {isZh ? "隐私优先" : "Privacy First"}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {isZh
                    ? "所有计算在你的设备上完成，我们不存储任何答题数据。不需要注册账号，没有第三方追踪器收集你的个人信息。你的测试结果只有你自己能看到。"
                    : "All calculations happen on your device. We store zero answer data. No account needed, no third-party trackers collecting your info. Your results stay with you."}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl shrink-0">🧩</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {isZh ? "全面覆盖" : "Comprehensive Coverage"}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {isZh
                    ? "10 种测试覆盖 96+ 种人格类型，从经典的 MBTI、九型人格到流行的 SBTI、气场颜色。MBTI 还提供 32/93/144/200 四种题库版本，适合不同深度需求。"
                    : "10 tests covering 96+ personality types, from classic MBTI and Enneagram to trendy SBTI and Aura Colors. MBTI offers 4 question bank versions (32/93/144/200 questions) for different depth needs."}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl shrink-0">🎁</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {isZh ? "永久免费" : "Free Forever"}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {isZh
                    ? "所有测试永久免费开放。我们通过广告维持运营，绝不会向用户收费。我们的使命是让心理学测试触手可及，而不是制造付费墙。"
                    : "All tests are free forever. We sustain through ads, never charging users. Our mission is making psychological testing accessible to everyone, not building paywalls."}
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8">
            {isZh
              ? "已有超过 10 万用户通过蜂巢测试更好地了解自己。现在开始你的第一次测试吧。"
              : "Over 100K users have gained self-insight through BeeTest. Start your first test now."}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {tests.map((t, i) => (
            <TestCard key={i}
              href={t.href} emoji={t.emoji}
              title={isZh ? t.title : t.titleEn}
              subtitle={isZh ? t.subtitle : t.subtitleEn}
              desc={isZh ? t.desc : t.descEn}
              gradient={t.gradient} bg={t.bg}
              tag={isZh ? t.tag : t.tagEn}
              questions={t.questions} types={t.types} />
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              {isZh ? "📖 最新文章" : "📖 Latest Articles"}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
              {isZh ? "人格心理学的深度解读与自我成长指南" : "Deep dives into personality psychology & self-growth"}
            </p>
          </div>
          <a href="/blog" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline shrink-0">
            {isZh ? "查看全部 →" : "View All →"}
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.slice(-3).reverse().map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-900"
            >
              <span className="text-3xl mb-3 block">{post.emoji}</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2">
                {post.titleZh}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
                {post.excerptZh}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readMin} {isZh ? "分钟阅读" : "min read"}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-24">
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            [isZh ? "96+" : "96+", isZh ? "人格类型" : "Personality Types"],
            [isZh ? "10" : "10", isZh ? "专业测试" : "Tests"],
            [isZh ? "100%" : "100%", isZh ? "完全免费" : "Free"],
          ].map(([v, l], i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">{v}</div>
              <div className="text-base text-gray-400 dark:text-gray-500 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
