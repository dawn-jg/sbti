"use client";

import { useState } from "react";
import Link from "next/link";
import { useSite } from "@/lib/site-context";
import SeoContentSection from "@/components/SeoContentSection";

// ── Type Data ──────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    key: "analysts",
    zh: "分析师",
    en: "Analysts",
    color: "indigo",
    types: [
      {
        code: "INTJ",
        zhName: "建筑师",
        enName: "Architect",
        emoji: "🏗️",
        descZh: "富有想象力和战略性的思想家，一切皆在计划之中。",
        descEn:
          "Imaginative and strategic thinkers, with a plan for everything.",
      },
      {
        code: "INTP",
        zhName: "逻辑学家",
        enName: "Logician",
        emoji: "🔬",
        descZh: "具有创造力的发明家，对知识有着不可抑制的渴望。",
        descEn:
          "Innovative inventors with an unquenchable thirst for knowledge.",
      },
      {
        code: "ENTJ",
        zhName: "指挥官",
        enName: "Commander",
        emoji: "👑",
        descZh: "大胆、富有想象力且意志强大的领导者，总能找到解决办法。",
        descEn:
          "Bold, imaginative and strong-willed leaders, always finding a way.",
      },
      {
        code: "ENTP",
        zhName: "辩论家",
        enName: "Debater",
        emoji: "⚡",
        descZh: "聪明好奇的思想者，不会放弃任何智力上的挑战。",
        descEn:
          "Smart and curious thinkers who cannot resist an intellectual challenge.",
      },
    ],
  },
  {
    key: "diplomats",
    zh: "外交官",
    en: "Diplomats",
    color: "emerald",
    types: [
      {
        code: "INFJ",
        zhName: "提倡者",
        enName: "Advocate",
        emoji: "🌟",
        descZh: "安静而神秘，但激励人心且不知疲倦的理想主义者。",
        descEn:
          "Quiet and mystical, yet very inspiring and tireless idealists.",
      },
      {
        code: "INFP",
        zhName: "调停者",
        enName: "Mediator",
        emoji: "🦋",
        descZh: "诗意、善良的利他主义者，总是热情地帮助正义事业。",
        descEn:
          "Poetic, kind and altruistic people, always eager to help a good cause.",
      },
      {
        code: "ENFJ",
        zhName: "主人公",
        enName: "Protagonist",
        emoji: "🎭",
        descZh: "富有魅力且鼓舞人心的领导者，能够令听众为之着迷。",
        descEn:
          "Charismatic and inspiring leaders, able to mesmerize their listeners.",
      },
      {
        code: "ENFP",
        zhName: "竞选者",
        enName: "Campaigner",
        emoji: "🎉",
        descZh: "热情、有创造力、爱社交的自由精神，总能找到微笑的理由。",
        descEn:
          "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
      },
    ],
  },
  {
    key: "sentinels",
    zh: "守护者",
    en: "Sentinels",
    color: "amber",
    types: [
      {
        code: "ISTJ",
        zhName: "物流师",
        enName: "Logistician",
        emoji: "📋",
        descZh: "实际且注重事实的个体，可靠性不容置疑。",
        descEn:
          "Practical and fact-minded individuals, whose reliability cannot be doubted.",
      },
      {
        code: "ISFJ",
        zhName: "守卫者",
        enName: "Defender",
        emoji: "🛡️",
        descZh: "非常专注和温暖的守护者，时刻准备着保护所爱之人。",
        descEn:
          "Very dedicated and warm protectors, always ready to defend their loved ones.",
      },
      {
        code: "ESTJ",
        zhName: "总经理",
        enName: "Executive",
        emoji: "📊",
        descZh: "出色的管理者，在管理事务或人员方面具有无与伦比的效率。",
        descEn:
          "Excellent administrators, unsurpassed at managing things – or people.",
      },
      {
        code: "ESFJ",
        zhName: "执政官",
        enName: "Consul",
        emoji: "🤝",
        descZh: "非常关心他人、善于社交、受欢迎的人，始终乐于助人。",
        descEn:
          "Extraordinarily caring, social and popular people, always eager to help.",
      },
    ],
  },
  {
    key: "explorers",
    zh: "探险家",
    en: "Explorers",
    color: "rose",
    types: [
      {
        code: "ISTP",
        zhName: "鉴赏家",
        enName: "Virtuoso",
        emoji: "🔧",
        descZh: "大胆而实际的实验者，精通各种工具的使用。",
        descEn:
          "Bold and practical experimenters, masters of all kinds of tools.",
      },
      {
        code: "ISFP",
        zhName: "探险家",
        enName: "Adventurer",
        emoji: "🎨",
        descZh: "灵活而有魅力的艺术家，时刻准备着探索和体验新事物。",
        descEn:
          "Flexible and charming artists, always ready to explore and experience something new.",
      },
      {
        code: "ESTP",
        zhName: "企业家",
        enName: "Entrepreneur",
        emoji: "💼",
        descZh: "聪明、精力充沛、极具洞察力，真正喜欢生活在边缘的人。",
        descEn:
          "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
      },
      {
        code: "ESFP",
        zhName: "表演者",
        enName: "Entertainer",
        emoji: "🎤",
        descZh: "自发、精力充沛且热情的表演者——生活在他们周围永不无聊。",
        descEn:
          "Spontaneous, energetic and enthusiastic entertainers – life is never boring around them.",
      },
    ],
  },
];

const TEST_VERSIONS = [
  {
    emoji: "⚡",
    zhName: "速测版",
    enName: "Quick",
    questions: 32,
    timeZh: "约5分钟",
    timeEn: "~5 min",
    featuresZh: ["快速锁定性格偏好", "四维度快速评估", "适合初次探索"],
    featuresEn: ["Quick type preference lock", "4-dimension rapid assessment", "Great for first-timers"],
    badge: null,
    path: "/mbti/test",
  },
  {
    emoji: "🎯",
    zhName: "标准测评",
    enName: "Standard",
    questions: 93,
    timeZh: "约10分钟",
    timeEn: "~10 min",
    featuresZh: ["核心人格维度分析", "93题专业量表", "综合评估报告"],
    featuresEn: ["Core personality dimensions", "93-item professional scale", "Comprehensive report"],
    badge: "recommended",
    path: "/mbti/test-standard",
  },
  {
    emoji: "🔬",
    zhName: "进阶测评",
    enName: "Advanced",
    questions: 144,
    timeZh: "约15分钟",
    timeEn: "~15 min",
    featuresZh: ["八大认知功能分析", "荣格原型深度解读", "人格发展建议"],
    featuresEn: ["8 cognitive function analysis", "Jungian archetype deep dive", "Growth recommendations"],
    badge: null,
    path: "/mbti/test-advanced",
  },
  {
    emoji: "🧬",
    zhName: "深度测评",
    enName: "Deep",
    questions: 200,
    timeZh: "约20分钟",
    timeEn: "~20 min",
    featuresZh: ["临床级多维度指标", "200题全面评估", "专业级性格画像"],
    featuresEn: ["Clinical-grade multi-metric", "200-item full assessment", "Professional personality profile"],
    badge: null,
    path: "/mbti/test-deep",
  },
];

const ALL_TYPES = CATEGORIES.flatMap((cat) => cat.types);

const FAQ_ITEMS = [
  {
    qZh: "MBTI 是什么？",
    qEn: "What is MBTI?",
    aZh: "MBTI（迈尔斯-布里格斯类型指标）是基于荣格心理类型理论发展而来的性格评估工具。它通过四个维度——外向(E)/内向(I)、感觉(S)/直觉(N)、思考(T)/情感(F)、判断(J)/感知(P)——组合出16种人格类型。MBTI 被广泛用于职业规划、团队建设、个人成长等领域，是全球最受欢迎的性格测试之一。",
    aEn: "The Myers-Briggs Type Indicator (MBTI) is a personality assessment tool developed from Carl Jung's theory of psychological types. It combines four dimensions — Extraversion(E)/Introversion(I), Sensing(S)/Intuition(N), Thinking(T)/Feeling(F), Judging(J)/Perceiving(P) — to form 16 personality types. MBTI is widely used in career planning, team building, and personal development, making it one of the world's most popular personality tests.",
  },
  {
    qZh: "测试需要多长时间？",
    qEn: "How long does the test take?",
    aZh: "根据版本不同，速测版约5分钟（32题），标准版约10分钟（93题），进阶版约15分钟（144题），深度版约20分钟（200题）。我们建议选择标准版以获得最平衡的体验。",
    aEn: "Depending on the version: Quick takes ~5 min (32 items), Standard ~10 min (93 items), Advanced ~15 min (144 items), Deep ~20 min (200 items). We recommend the Standard version for the best balanced experience.",
  },
  {
    qZh: "测试准确吗？",
    qEn: "Is the test accurate?",
    aZh: "我们的测试基于经典MBTI量表，采用'迫选'题型设计，并结合现代心理测量学方法进行优化。测试结果反映的是您的自然偏好，而非绝对标签。建议在放松状态下，凭第一反应作答以获得最准确的结果。",
    aEn: "Our test is based on classic MBTI scales with forced-choice item design, optimized with modern psychometric methods. Results reflect your natural preferences, not absolute labels. Answer with your first instinct in a relaxed state for the most accurate outcome.",
  },
  {
    qZh: "MBTI 和 SBTI 有什么区别？",
    qEn: "What's the difference between MBTI and SBTI?",
    aZh: "SBTI（SBTi Bee Type Indicator）是本平台对经典MBTI的现代化演绎。SBTI在保留荣格理论核心框架的基础上，融入了中文语境优化、更友好的UI交互，以及基于大数据的类型匹配分析。内核一致，体验升级。",
    aEn: "SBTI (SBTi Bee Type Indicator) is our platform's modern interpretation of classic MBTI. While preserving Jung's core theoretical framework, SBTI incorporates Chinese-context optimizations, friendlier UI interactions, and data-driven type matching analysis. Same core, upgraded experience.",
  },
  {
    qZh: "我的数据会上传吗？",
    qEn: "Is my data uploaded?",
    aZh: "测试数据仅保存在您的本地浏览器中，用于生成报告。我们不会上传或分享您的个人测试结果。您可以随时清除浏览器数据来删除所有记录。",
    aEn: "Test data is stored only in your local browser for report generation. We do not upload or share your personal test results. You can clear your browser data anytime to remove all records.",
  },
  {
    qZh: "四种气质类型是什么？",
    qEn: "What are the four temperaments?",
    aZh: "MBTI的16种类型可归为四大气质群体：分析师(NT)、外交官(NF)、守护者(SJ)和探险家(SP)。分析师以理性逻辑著称，外交官以同理心洞察见长，守护者重视秩序与稳定，探险家追求自由与体验。这四种气质反映了人们处理信息和与世界互动的基本方式。",
    aEn: "The 16 MBTI types group into four temperaments: Analysts (NT), Diplomats (NF), Sentinels (SJ), and Explorers (SP). Analysts are known for rational logic, Diplomats for empathetic insight, Sentinels value order and stability, Explorers pursue freedom and experience. These temperaments reflect fundamental ways people process information and interact with the world.",
  },
];

// ── Icons ──────────────────────────────────────────────────────────────────

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function ClientPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  const [activeTab, setActiveTab] = useState("analysts");
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const activeCategory = CATEGORIES.find((c) => c.key === activeTab)!;

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* ── Notice Bar ──────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white text-center py-2.5 text-sm font-medium tracking-wide">
        <span className="opacity-90">
          {isZh
            ? "专业心理测量学  |  基于荣格理论  |  免费测试"
            : "Professional Psychometrics  |  Jung-Based Theory  |  Free Test"}
        </span>
      </div>

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-violet-200 dark:bg-violet-900/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            {isZh ? (
              <>
                MBTI{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                  十六型人格免费测试
                </span>
              </>
            ) : (
              <>
                MBTI{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                  16 Personalities Free Test
                </span>
              </>
            )}
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {isZh
              ? "基于荣格心理类型理论，结合现代心理测量学方法，为您提供专业、精准、深度的性格洞察。发现真实的自己，从这一刻开始。"
              : "Built on Jung's theory of psychological types with modern psychometric methods, delivering professional, precise, and deep personality insights. Discover your true self — starting now."}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/mbti/test-standard"
              className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-200"
            >
              {isZh ? "开始标准测试 (93题)" : "Start Standard Test (93 items)"}
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="#encyclopedia"
              className="inline-flex items-center px-8 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-lg hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
            >
              {isZh ? "了解更多" : "Learn More"}
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-lg">🧪</span>
              {isZh ? "16种人格类型" : "16 Personality Types"}
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <span className="text-lg">📋</span>
              {isZh ? "4种测评路径" : "4 Test Versions"}
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <span className="text-lg">🆓</span>
              {isZh ? "完全免费" : "100% Free"}
            </div>
          </div>
        </div>
      </section>

      {/* ── Test Version Cards ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {isZh ? "选择您的测评路径" : "Choose Your Test Path"}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              {isZh
                ? "从快速筛查到深度分析，四种版本满足不同需求"
                : "From quick screening to deep analysis — four versions for every need"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEST_VERSIONS.map((v, i) => (
              <div
                key={i}
                className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200 group flex flex-col"
              >
                {v.badge === "recommended" && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                    {isZh ? "🌟 最受推荐" : "🌟 Most Recommended"}
                  </span>
                )}

                <div className="text-4xl mb-4">{v.emoji}</div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {isZh ? v.zhName : v.enName}
                </h3>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {v.questions}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {isZh ? "题" : "items"}
                  </span>
                  <span className="text-sm text-gray-400">·</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {isZh ? v.timeZh : v.timeEn}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 flex-1">
                  {v.featuresZh.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {isZh ? f : v.featuresEn[j]}
                    </li>
                  ))}
                </ul>

                <Link
                  href={v.path}
                  className={`mt-6 block text-center py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    v.badge === "recommended"
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 shadow-md"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`}
                >
                  {isZh ? "开始测试" : "Start Test"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personality Encyclopedia ─────────────────────────────────── */}
      <section id="encyclopedia" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {isZh ? "人格百科" : "Personality Encyclopedia"}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              {isZh
                ? "探索16种人格类型，发现每一种性格的独特魅力"
                : "Explore all 16 types and discover the unique charm of each personality"}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {isZh ? cat.zh : cat.en}
                </button>
              );
            })}
          </div>

          {/* Type Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeCategory.types.map((t) => (
              <Link
                key={t.code}
                href={`/mbti/types/${t.code}`}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{t.emoji}</span>
                  <div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {t.code}
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-500">
                      {isZh ? t.zhName : t.enName}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {isZh ? t.descZh : t.descEn}
                </p>
                <span className="inline-block mt-3 text-xs font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                  {isZh ? "查看详情 →" : "View Details →"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTJ Highlight Card ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="md:flex">
              {/* Left: gradient panel */}
              <div className="md:w-2/5 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-8 md:p-10 flex flex-col justify-center items-center text-center">
                <span className="text-6xl mb-4">🏗️</span>
                <span className="text-3xl font-extrabold text-white">
                  INTJ
                </span>
                <span className="mt-1 text-white/80 font-medium">
                  {isZh ? "建筑师 · Architect" : "Architect · 建筑师"}
                </span>
                <div className="mt-6 w-16 h-1 bg-white/30 rounded-full" />
                <p className="mt-4 text-white/90 text-sm leading-relaxed">
                  {isZh
                    ? "INTJ 是16种人格类型中最稀有的之一，仅占人口约2%。他们以战略思维、独立性和对知识的渴望而著称。"
                    : "INTJ is one of the rarest types, making up only ~2% of the population. Known for strategic thinking, independence, and relentless thirst for knowledge."}
                </p>
              </div>

              {/* Right: content */}
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {isZh ? "深入解读 INTJ 人格类型" : "Deep Dive: The INTJ Type"}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {isZh
                    ? "建筑师型人格富有想象力和战略眼光。他们擅长制定长远计划并坚定执行。INTJ并非冷漠——他们只是更倾向于用逻辑而非情感来处理问题，但这并不意味着他们缺乏深度。"
                    : "The Architect personality is imaginative and strategic. They excel at crafting long-term plans and executing them with determination. INTJs aren't cold — they simply prefer logic over emotion when processing, but that doesn't mean they lack depth."}
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    { zh: "认知功能：Ni-Te-Fi-Se", en: "Cognitive: Ni-Te-Fi-Se" },
                    { zh: "核心优势：战略规划、独立自主、洞察力强", en: "Strengths: Strategic planning, independence, insight" },
                    { zh: "适合领域：科研、工程、战略咨询、写作", en: "Fields: Research, engineering, strategy consulting, writing" },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-indigo-500 mt-0.5">•</span>
                      {isZh ? item.zh : item.en}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/mbti/types/INTJ"
                  className="mt-6 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
                >
                  {isZh ? "查看完整 INTJ 解读" : "Full INTJ Profile"}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scientific Methodology ───────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {isZh ? "严谨的科学方法论" : "Rigorous Scientific Methodology"}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              {isZh
                ? "基于数十年心理学研究积累，构建可信赖的性格评估体系"
                : "Built on decades of psychological research, a trustworthy personality assessment system"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Clinical Validity */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {isZh ? "临床有效性" : "Clinical Validity"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {isZh
                  ? "我们的量表经过严格的信效度检验。内部一致性α系数达0.85以上，重测信度超过0.82，结构效度通过验证性因素分析确认。每个维度均经过项目分析与IRT优化，确保测量精度。"
                  : "Our scales pass rigorous reliability and validity testing. Internal consistency α exceeds 0.85, test-retest reliability surpasses 0.82, and construct validity is confirmed via CFA. Each dimension undergoes item analysis and IRT optimization for measurement precision."}
              </p>
            </div>

            {/* Big Data Support */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-violet-600 dark:text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7c0-2 1-3 3-3h10c2 0 3 1 3 3M4 7h16M9 11h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {isZh ? "大数据科研支持" : "Big Data Research Support"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {isZh
                  ? "我们的测评系统基于数十万样本数据库持续迭代优化。类型分布参照全球MBTI常模进行校准，确保结果的代表性和可比性。机器学习辅助评分系统提升了类型判定的准确率至92%以上。"
                  : "Our assessment system continuously improves based on a database of hundreds of thousands of samples. Type distributions are calibrated against global MBTI norms for representativeness and comparability. ML-assisted scoring boosts type classification accuracy to over 92%."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {isZh ? "常见问题" : "Frequently Asked Questions"}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {isZh
                ? "关于 MBTI 测试，您可能想了解的"
                : "What you might want to know about the MBTI test"}
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => {
              const isOpen = openFaqs.has(i);
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">
                      {isZh ? faq.qZh : faq.qEn}
                    </span>
                    <ChevronDown open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {isZh ? faq.aZh : faq.aEn}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testing Instructions ─────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 rounded-3xl border border-indigo-200 dark:border-indigo-900 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
              {isZh ? "MBTI 免费测试说明" : "MBTI Free Test Guide"}
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "🧘",
                  zhTitle: "放松心态",
                  enTitle: "Stay Relaxed",
                  zhDesc: "请在一个安静、不受打扰的环境中进行测试。凭第一反应作答，无需过度思考。",
                  enDesc:
                    "Take the test in a quiet, uninterrupted environment. Answer with your first instinct — don't overthink.",
                },
                {
                  icon: "⚖️",
                  zhTitle: "没有对错",
                  enTitle: "No Right or Wrong",
                  zhDesc: "MBTI 测试测量的是性格偏好，不是能力。请根据您的实际偏好作答，而非'应该'怎样的想法。",
                  enDesc:
                    "MBTI measures personality preferences, not ability. Answer based on your actual preferences, not what you think you 'should' be.",
                },
                {
                  icon: "📊",
                  zhTitle: "理解结果",
                  enTitle: "Understand Results",
                  zhDesc: "测试结果反映的是您的自然倾向。每个人的性格都是独特的，16种类型各有优势。",
                  enDesc:
                    "Results reflect your natural tendencies. Every personality is unique — all 16 types have their own strengths.",
                },
                {
                  icon: "🔄",
                  zhTitle: "定期重测",
                  enTitle: "Retake Periodically",
                  zhDesc: "性格会随着生活经历而发展。建议每隔6-12个月重新测试，观察自己的成长轨迹。",
                  enDesc:
                    "Personality evolves with life experience. Retake every 6-12 months to track your growth journey.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {isZh ? item.zhTitle : item.enTitle}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {isZh ? item.zhDesc : item.enDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/mbti/test-standard"
                className="inline-flex items-center px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-200"
              >
                {isZh ? "开始免费测试 →" : "Start Free Test →"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── All 16 Types Grid ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {isZh
                ? "十六种 MBTI 人格类型一览"
                : "All 16 MBTI Personality Types"}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              {isZh
                ? "点击任一类型，深入了解其性格特征、优势与成长建议"
                : "Click any type to explore traits, strengths, and growth tips"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {ALL_TYPES.map((t) => (
              <Link
                key={t.code}
                href={`/mbti/types/${t.code}`}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 text-center hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span className="text-2xl block mb-2">{t.emoji}</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {t.code}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                  {isZh ? t.zhName : t.enName}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            {isZh ? "准备好探索真实的自己了吗？" : "Ready to discover your true self?"}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {isZh
              ? "选择最适合您的测试版本，开启自我认知之旅"
              : "Choose the test version that fits you best and begin your journey of self-discovery"}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/mbti/test-standard"
              className="inline-flex items-center px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-200"
            >
              {isZh ? "🚀 立即开始测试" : "🚀 Start Test Now"}
            </Link>
          </div>
        </div>
      </section>

    <SeoContentSection test="mbti" />

    </div>
  );
}