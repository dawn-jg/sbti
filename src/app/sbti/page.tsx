"use client"
;

import { useState } from "react";
import Link from "next/link";
import { useSite } from "@/lib/site-context";
import { sbtiTypes } from "@/data/sbti";

// ============================================================
// Static leaderboard data (no backend, demo only)
// ============================================================
const leaderboardTop10 = [
  { rank: 1, code: "CTRL", zh: "拿捏者", en: "The Controller" },
  { rank: 2, code: "BOSS", zh: "领导者", en: "The Boss" },
  { rank: 3, code: "LOVE-R", zh: "多情者", en: "The Lover" },
  { rank: 4, code: "GOGO", zh: "行者", en: "The Go-Go" },
  { rank: 5, code: "SEXY", zh: "尤物", en: "The Siren" },
  { rank: 6, code: "THAN-K", zh: "感恩者", en: "The Grateful One" },
  { rank: 7, code: "OH-NO", zh: "哦不人", en: "The Oh-No" },
  { rank: 8, code: "FAKE", zh: "伪人", en: "The Fake" },
  { rank: 9, code: "JOKE-R", zh: "玩笑人", en: "The Joker" },
  { rank: 10, code: "HHHH", zh: "哈哈人", en: "The Laugher" },
];

const models = [
  {
    id: "S",
    zh: "自我模型",
    en: "Self Model",
    color: "border-l-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    badge: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
    dims: ["S1 自尊·自信", "S2 自我清晰度", "S3 核心价值"],
    dimsEn: ["S1 Self-Esteem", "S2 Self-Clarity", "S3 Core Values"],
    desc: "你怎么看自己，决定你怎么面对世界。",
    descEn: "How you see yourself determines how you face the world.",
  },
  {
    id: "E",
    zh: "情感模型",
    en: "Emotion Model",
    color: "border-l-pink-500",
    bg: "bg-pink-50 dark:bg-pink-950/30",
    badge: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300",
    dims: ["E1 依恋安全感", "E2 情感投入度", "E3 边界与依赖"],
    dimsEn: ["E1 Attachment Security", "E2 Emotional Investment", "E3 Boundaries & Dependence"],
    desc: "你爱别人的方式，暴露了你最深的渴望。",
    descEn: "The way you love reveals your deepest desires.",
  },
  {
    id: "A",
    zh: "态度模型",
    en: "Attitude Model",
    color: "border-l-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    badge: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dims: ["A1 世界观倾向", "A2 规则与灵活度", "A3 人生意义感"],
    dimsEn: ["A1 Worldview", "A2 Rules & Flexibility", "A3 Life Meaning"],
    desc: "你信什么，就走向什么。",
    descEn: "What you believe in is where you're headed.",
  },
  {
    id: "Ac",
    zh: "行动驱力模型",
    en: "Action Model",
    color: "border-l-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    badge: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dims: ["Ac1 动机导向", "Ac2 决策风格", "Ac3 执行模式"],
    dimsEn: ["Ac1 Motivation", "Ac2 Decision Style", "Ac3 Execution Mode"],
    desc: "动力的来源和节奏，决定你走到哪里。",
    descEn: "The source and rhythm of your drive determine how far you go.",
  },
  {
    id: "So",
    zh: "社交模型",
    en: "Social Model",
    color: "border-l-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    badge: "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300",
    dims: ["So1 社交主动性", "So2 人际边界感", "So3 表达与真实度"],
    dimsEn: ["So1 Social Initiative", "So2 Boundaries", "So3 Authenticity"],
    desc: "你在人群中扮演谁，跟独处时是不是同一个人。",
    descEn: "Who you play in a crowd — and whether that's the same person alone.",
  },
];

export default function SbtiHome() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  // First 6 types for the representative showcase
  const showcaseTypes = sbtiTypes.slice(0, 6);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      {/* ================================================================
          1. HERO SECTION
          ================================================================ */}
      <section className="max-w-3xl mx-auto px-5 pt-16 sm:pt-24 pb-12 text-center">
        {/* AI-free badge */}
        <div className="inline-flex items-center gap-1.5 mb-6 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-xs font-bold text-green-700 dark:text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          {isZh ? "降AI率 · 纯人手撰写" : "Human-Written · Zero AI"}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 leading-tight tracking-tight">
          {isZh
            ? "SBTI 不只是出一个结果名，它还会把你拆成 15 个维度来看。"
            : "SBTI doesn't just give you a label — it breaks you down across 15 dimensions."}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          {isZh
            ? "Silent Behavioral Type Indicator，一个更贴近你真实状态的人格测试。不是「你应该怎么样」，而是「你实际活成了什么样」。"
            : "Silent Behavioral Type Indicator — a personality test that reflects who you actually are. Not who you should be, but who you turned out to be."}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/sbti/test"
            className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-extrabold rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40 transition-all hover:scale-[1.02]"
          >
            {isZh ? "开始测试 →" : "Start Test →"}
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/types/sbti"
              className="text-sm font-bold text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {isZh ? "查看人格排行榜" : "View Leaderboard"}
            </Link>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-[11px] font-bold text-green-700 dark:text-green-400">
              {isZh ? "降AI率" : "Human-Written"}
            </span>
          </div>
        </div>
      </section>

      {/* ================================================================
          2. 为什么很多人会搜 SBTI？
          ================================================================ */}
      <section className="max-w-3xl mx-auto px-5 py-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
          {isZh ? "为什么很多人会搜 SBTI？" : "Why Do People Search for SBTI?"}
        </h2>
        <div className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            {isZh
              ? "SBTI 最近在社交平台上火得不是没道理。比起那些正襟危坐的人格测试，它更敢说真话——不怕揭短、不搞鸡汤式形容词，直接用你在聊天框里最常出现的语气、精神状态和脑回路来给你「贴标签」。测完的人第一反应往往是「卧槽，这也太准了吧」，然后立刻截图分享到群里，开始互相鉴定谁是 CTRL 谁是 OH-NO。"
              : "SBTI has blown up on social media for good reason. Unlike those formal personality tests, it's not afraid to be blunt — no sugarcoated adjectives, no life-coach clichés. It labels you using the exact tone, mental state, and thought patterns you already show in group chats. People's first reaction after finishing is usually 'holy crap, this is scary accurate,' followed by screenshotting and sharing it everywhere to identify who's the CTRL and who's the OH-NO."}
          </p>
          <p>
            {isZh
              ? "更关键的是，这个测试不端不装。你不用想「我该选哪个才能显得我更优秀」，因为每个选项都带点自黑属性——选了 A 可能显得自信过头，选了 B 可能暴露了自己的社恐，选了 C 可能直接承认了自己有点丧。这种「反正怎么做都回不到安全区」的设计，反而让人放松下来，真的按本能去选。"
              : "More importantly, this test doesn't put on airs. You don't have to think 'which choice makes me look better' — because every option comes with a dose of self-roast. Pick A and you might seem overconfident. Pick B and your social anxiety is exposed. Pick C and you've basically admitted you're a little bit of a mess. This 'nowhere is safe' design paradoxically lets people relax and just answer honestly."}
          </p>
          <p>
            {isZh
              ? "最后，SBTI 能火还有一个硬核原因：它把一个人的精神状态拆成 5 组 15 维来打分，然后再用这些维度的组合去匹配 27 种人格。不是对号入座，是多维画像。你看结果的时候，看到的不是「你是一个 XX 的人」，而是「你在这些维度上分别有多高」，信息量比传统测试大得多。"
              : "Finally, there's a structural reason SBTI resonates: it scores you across 5 groups and 15 dimensions before matching you to one of 27 types. It's not a single-label fit — it's a multi-dimensional portrait. When you see your results, you're not just reading 'you are an XX person,' but 'here's how high you score on each of these dimensions.' That's way more data than traditional tests offer."}
          </p>
        </div>
      </section>

      {/* ================================================================
          3. SBTI 是什么，适合谁来测？
          ================================================================ */}
      <section className="max-w-3xl mx-auto px-5 py-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
          {isZh ? "SBTI 是什么，适合谁来测？" : "What Is SBTI and Who Should Take It?"}
        </h2>
        <div className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            {isZh
              ? "SBTI（Silent Behavioral Type Indicator）是一个娱乐向的人格测试工具。注意，关键词是「娱乐向」——它不负责给你做心理诊断，也不负责给你人生建议，但它负责让你拍大腿说一句「原来是这样」。它测量的是你在自我认知、情感模式、处世态度、行动力和社交风格这五个方面的真实倾向，然后用这些数据拼出一个跟你最匹配的人格画像。"
              : "SBTI (Silent Behavioral Type Indicator) is an entertainment-focused personality test. Note the keyword: entertainment. It won't give you a psychological diagnosis, nor life advice — but it will make you slap your thigh and say 'so that's what's going on.' It measures your real tendencies across self-perception, emotional patterns, life attitude, drive, and social style, then pieces together the personality portrait that fits you best."}
          </p>
          <p>
            {isZh
              ? "适合谁？说实话，只要你不是那种「测试结果必须告诉我是个天才」的人，都适合。它特别适合那些觉得自己说不上来是什么样的人、在朋友圈里经常被说「看不懂你」的人、以及MBTI测出来觉得「是不是有点太正面了」的人。SBTI 不怕你不完美，怕的是你不敢认。"
              : "Who's it for? Honestly, anyone except people who need every test result to say they're a genius. It's especially fitting for those who can't quite describe themselves, those whose friends often say 'I just can't figure you out,' and those who took MBTI and thought 'this seems too flattering.' SBTI isn't afraid of your imperfections — it's afraid you won't own them."}
          </p>
          <p>
            {isZh
              ? "测试本身也设计得很友好：30 题，每题 3 个选项，选最像你的那个就行。不搞两极端滑动条，不用想「这个程度是多少」，就选一个最接近的。5-8 分钟做完，结果直接展示十五维落点和匹配人格，包含详细解说和一条带调侃味的建议。"
              : "The test itself is designed to be approachable: 30 questions, 3 options each, just pick the one closest to you. No finicky sliders, no 'on a scale of 1 to 10.' Just pick the best fit. 5-8 minutes to complete, and you get immediate results showing your 15-dimension profile, matched type, full explanation, and a piece of tongue-in-cheek advice."}
          </p>
        </div>
      </section>

      {/* ================================================================
          4. 站内测试概览
          ================================================================ */}
      <section className="max-w-5xl mx-auto px-5 py-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2 text-center">
          {isZh ? "站内测试概览" : "Test Overview"}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center">
          {isZh ? "四个数字看懂 SBTI" : "Four numbers to understand SBTI"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "15", label: isZh ? "维度" : "Dimensions", sub: isZh ? "5 组模型，每组 3 个维度，从自我到社交覆盖全人格切面" : "5 model groups, 3 dimensions each, covering full personality facets" },
            { num: "5", label: isZh ? "模型" : "Models", sub: isZh ? "自我·情感·态度·行动驱力·社交，五个角度拆解一个人" : "Self, Emotion, Attitude, Drive, Social — five lenses on one person" },
            { num: "27", label: isZh ? "人格类型" : "Types", sub: isZh ? "25 种常规 + 2 种特殊，每种都带表情包级吐槽" : "25 regular + 2 special types, each with meme-level commentary" },
            { num: "30", label: isZh ? "题目" : "Questions", sub: isZh ? "每题 3 选 1，5-8 分钟做完，不用纠结不用打分" : "3 options each, 5-8 min, no overthinking, no rating scales" },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-indigo-600 dark:text-indigo-400">
                {item.num}
              </div>
              <div className="mt-2 text-lg font-extrabold text-gray-900 dark:text-gray-100">
                {item.label}
              </div>
              <div className="mt-1.5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================
          5. 五组模型详解
          ================================================================ */}
      <section className="bg-gray-50 dark:bg-gray-900 py-14">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2 text-center">
            {isZh ? "SBTI 如何把 15 维拆成 5 组看？" : "How SBTI Breaks 15 Dimensions Into 5 Groups"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 text-center">
            {isZh
              ? "每个人格都是这五组得分组合出来的独特画像"
              : "Every personality is a unique combination of scores across these five groups"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {models.map((m) => (
              <div
                key={m.id}
                className={`bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 border-l-4 ${m.color} p-5 shadow-sm`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className={`w-9 h-9 flex items-center justify-center rounded-lg ${m.badge} text-sm font-black`}
                  >
                    {m.id}
                  </span>
                  <span className="font-extrabold text-gray-900 dark:text-gray-100 text-lg">
                    {isZh ? m.zh : m.en}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                  {isZh ? m.desc : m.descEn}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(isZh ? m.dims : m.dimsEn).map((d) => (
                    <span
                      key={d}
                      className={`text-xs font-bold px-3 py-1.5 rounded-full ${m.badge}`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          6. 代表性人格类型展示
          ================================================================ */}
      <section className="max-w-5xl mx-auto px-5 py-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2 text-center">
          {isZh ? "先看看几种代表性的 SBTI 人格" : "Representative SBTI Types"}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center">
          {isZh
            ? "27 种人格各有各的味儿，先尝几口"
            : "27 types, each with its own flavor — here's a taste"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {showcaseTypes.map((t) => (
            <Link
              key={t.code}
              href={`/sbti/result/${encodeURIComponent(t.code)}`}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md transition group"
            >
              <div className="flex items-start gap-3">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {t.emoji}
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wide">
                    {t.code}
                  </span>
                  <h3 className="text-base font-extrabold text-gray-900 dark:text-gray-100 mt-0.5">
                    {isZh ? t.name : t.nameEn}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed line-clamp-2">
                    {isZh ? t.tagline : t.taglineEn}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/types/sbti"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {isZh ? "查看 27 种完整人格 →" : "View All 27 Types →"}
          </Link>
        </div>
      </section>

      {/* ================================================================
          7. 排行榜区域（静态展示）
          ================================================================ */}
      <section className="bg-gray-50 dark:bg-gray-900 py-14">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2 text-center">
            {isZh ? "站内最新 SBTI 热度分布" : "SBTI Popularity Distribution"}
          </h2>
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-8 text-center">
            {isZh ? "（预览数据，正式上线后将接入实时统计）" : "(Preview data — real-time stats coming soon)"}
          </p>

          {/* Top 10 排行榜 */}
          <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 sm:p-6 shadow-sm mb-6">
            <h3 className="text-base font-extrabold text-gray-900 dark:text-gray-100 mb-4">
              {isZh ? "🏆 Top 10 人格热度" : "🏆 Top 10 Most Popular Types"}
            </h3>
            <div className="space-y-1.5">
              {leaderboardTop10.map((item) => (
                <Link
                  key={item.rank}
                  href={`/sbti/result/${encodeURIComponent(item.code)}`}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                >
                  <span
                    className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs font-black ${
                      item.rank <= 3
                        ? "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {item.rank}
                  </span>
                  <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 w-14">
                    {item.code}
                  </span>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 flex-1">
                    {isZh ? item.zh : item.en}
                  </span>
                  {/* fake progress bar */}
                  <div className="hidden sm:block w-24 h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-indigo-400 dark:bg-indigo-600"
                      style={{ width: `${100 - item.rank * 8}%` }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 最近测试 */}
          <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 sm:p-6 shadow-sm text-center">
            <h3 className="text-base font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {isZh ? "📋 这个浏览器里的最近结果" : "📋 Your Recent Results in This Browser"}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
              {isZh
                ? "完整结果页会展示你的测试记录，方便回看和分享。目前这个板块需要先完成一次测试才能看到历史数据。"
                : "Your full result page will show your test history for easy review and sharing. You'll need to complete a test first to see records here."}
            </p>
            <Link
              href="/sbti/test"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {isZh ? "去测试页开始答题 →" : "Go to test page →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          8. 测试分离说明
          ================================================================ */}
      <section className="max-w-3xl mx-auto px-5 py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-3">
          {isZh ? "测试已经搬到单独页面，首页专注内容与解释" : "Test Moved to Dedicated Page — Home Focuses on Content"}
        </h2>
        <p className="text-base text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed mb-6">
          {isZh
            ? "一题一题推进，最后直接进入结果页。首页负责把 SBTI 是什么、怎么测、测完能看出什么讲清楚，让你在点「开始」之前就知道这趟测试值不值得。"
            : "Question by question, straight into the result page. The homepage explains what SBTI is, how the test works, and what you can learn — so you know it's worth your time before you even click start."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/sbti/test"
            className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-extrabold rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40 transition-all hover:scale-[1.02]"
          >
            {isZh ? "前往测试页 →" : "Go to Test →"}
          </Link>
          <Link
            href="/types/sbti"
            className="text-sm font-bold text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            {isZh ? "先看测试说明" : "Read Test Info First"}
          </Link>
        </div>
      </section>

      {/* ================================================================
          9. SEO 段落 & 底部导航
          ================================================================ */}
      <section className="max-w-3xl mx-auto px-5 py-10 border-t border-gray-100 dark:border-gray-800">
        <h2 className="text-lg font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          {isZh ? "关于 SBTI 人格测试，你可能还会关心这些" : "More About the SBTI Personality Test"}
        </h2>

        {/* Quick links */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { zh: "首页", en: "Home", href: "/sbti" },
            { zh: "开始测试", en: "Start Test", href: "/sbti/test" },
            { zh: "人格类型总览", en: "All Types", href: "/types/sbti" },
            { zh: "SBTI排行榜", en: "Leaderboard", href: "/types/sbti" },
            { zh: "测试说明与FAQ", en: "FAQ", href: "/types/sbti" },
          ].map((link) => (
            <Link
              key={link.zh}
              href={link.href}
              className="px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-700 transition"
            >
              {isZh ? link.zh : link.en}
            </Link>
          ))}
          <span className="px-4 py-2 rounded-full bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-sm font-bold text-green-700 dark:text-green-400">
            {isZh ? "降AI率" : "Human-Written"}
          </span>
        </div>

        {/* SEO paragraph 1 */}
        <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed space-y-3">
          <p>
            {isZh
              ? "本页面是 SBTI 人格测试的官方首页。与那些把测试嵌入在首页、一上来就扔 30 道题给你的做法不同，我们把测试和内容做了明确分离：首页负责让你搞清楚 SBTI 到底测什么、怎么测、测完能看懂什么，测试页则专注一题一题的流畅答题体验。这样的结构对搜索引擎更友好——首页可以被完整收录，每个 SEO 段落都独立承载信息量，不会因为嵌入了测试组件而被忽略。"
              : "This is the official homepage for the SBTI personality test. Unlike sites that embed the quiz directly on the homepage, we separate content from the test: the home page explains what SBTI measures, how it works, and what you can learn; the test page focuses solely on the smooth question-by-question experience. This structure is more search-engine-friendly — the homepage can be fully indexed, and each SEO paragraph independently carries meaningful information without being overshadowed by embedded quiz components."}
          </p>
        </div>

        {/* SEO paragraph 2 */}
        <h3 className="text-base font-extrabold text-gray-900 dark:text-gray-100 mt-8 mb-3">
          {isZh ? "为什么这个版本更适合搜索和分享？" : "Why This Version Is Better for Search and Sharing"}
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed space-y-3">
          <p>
            {isZh
              ? "和第一版把 30 道题直接塞在首页的做法相比，现在这个版本有三个明显优势：第一，页面加载速度更快，代码体积更小，因为首页不需要加载题目数据、计分逻辑和结果渲染组件；第二，文案可以更自由地展开，不用被「做完题了吗」打断了叙事节奏；第三，搜索结果页展示的是内容而非题目，用户搜「SBTI 人格测试」过来看到的是完整的介绍和入口，而不是一头雾水的第一道题。"
              : "Compared to the first version that stuffed 30 questions directly on the homepage, this version has three clear advantages: first, faster page loads with smaller bundle sizes since the homepage doesn't need to load question data, scoring logic, and result rendering; second, the copy can flow naturally without being interrupted by 'are you done yet'; third, search result snippets show content instead of questions — when someone searches 'SBTI personality test,' they see a full introduction and entry point rather than a confusing first question."}
          </p>
          <p>
            {isZh
              ? "SBTI 不是一个传统意义上的学术工具，它是一个用互联网语感和当代精神状态重新诠释人格的轻量测试。测过的人回头来看首页，能找到每个维度的解释和每种人格的简介；没测过的人看完首页，已经对 SBTI 有了足够清晰的概念，点不点「开始」都不影响他的理解。这就是我们想要的——让信息本身就有价值，而不只是测试的附庸。"
              : "SBTI isn't a traditional academic tool — it's a lightweight test that reinterprets personality through internet culture and contemporary mental states. Those who've taken the test can return to this page for dimension explanations and type overviews. Those who haven't will walk away with a clear understanding of SBTI even without clicking start. That's exactly what we want: information that's valuable in its own right, not just an accessory to the quiz."}
          </p>
        </div>
      </section>

      {/* ================================================================
          10. 底部导航 & 版权
          ================================================================ */}
      <footer className="border-t border-gray-100 dark:border-gray-800 py-10">
        <div className="max-w-3xl mx-auto px-5">
          {/* Footer quick links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-6">
            {[
              { zh: "首页", en: "Home", href: "/sbti" },
              { zh: "开始测试", en: "Start Test", href: "/sbti/test" },
              { zh: "人格类型总览", en: "All Types", href: "/types/sbti" },
              { zh: "SBTI排行榜", en: "Leaderboard", href: "/types/sbti" },
              { zh: "测试说明与FAQ", en: "FAQ", href: "/types/sbti" },
            ].map((link) => (
              <Link
                key={link.zh}
                href={link.href}
                className="text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
              >
                {isZh ? link.zh : link.en}
              </Link>
            ))}
            <span className="text-xs font-bold text-green-600 dark:text-green-400">
              {isZh ? "降AI率" : "Human-Written"}
            </span>
          </div>
          <p className="text-center text-[11px] text-gray-400 dark:text-gray-600">
            {isZh
              ? "SBTI 人格测试 © 2025 — 一个帮你找回真实自己的娱乐工具"
              : "SBTI Personality Test © 2025 — An entertainment tool to help you find your real self"}
          </p>
        </div>
      </footer>
    </div>
  );
}
