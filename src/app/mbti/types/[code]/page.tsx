"use client";
import { useParams, useRouter } from "next/navigation";
import { mbtiTypes } from "@/data/mbti";
import Link from "next/link";
import { useSite } from "@/lib/site-context";

// ─── 分类映射 ───
const categoryMap: Record<string, { zh: string; en: string; color: string }> = {
  NT: { zh: "分析家", en: "Analysts", color: "from-violet-500 to-purple-600" },
  NF: { zh: "外交家", en: "Diplomats", color: "from-emerald-500 to-teal-600" },
  SJ: { zh: "守护者", en: "Sentinels", color: "from-sky-500 to-blue-600" },
  SP: { zh: "探险家", en: "Explorers", color: "from-amber-500 to-orange-600" },
};

function getCategory(code: string) {
  const mid = code[1] + code[2]; // e.g. "NT", "NF", "SJ", "SP"
  return categoryMap[mid] || { zh: "其他", en: "Others", color: "from-gray-400 to-gray-500" };
}

// ─── 维度百分比 ───
const dimPercent: Record<string, Record<string, number>> = {
  INTJ: { I: 78, N: 85, T: 82, J: 88 },
  INTP: { I: 82, N: 90, T: 85, P: 72 },
  ENTJ: { E: 85, N: 78, T: 88, J: 85 },
  ENTP: { E: 88, N: 92, T: 75, P: 78 },
  INFJ: { I: 72, N: 88, F: 80, J: 82 },
  INFP: { I: 80, N: 85, F: 85, P: 75 },
  ENFJ: { E: 82, N: 80, F: 82, J: 78 },
  ENFP: { E: 90, N: 88, F: 78, P: 82 },
  ISTJ: { I: 75, S: 82, T: 78, J: 90 },
  ISFJ: { I: 78, S: 80, F: 75, J: 85 },
  ESTJ: { E: 80, S: 78, T: 85, J: 88 },
  ESFJ: { E: 85, S: 75, F: 80, J: 82 },
  ISTP: { I: 82, S: 78, T: 82, P: 80 },
  ISFP: { I: 75, S: 72, F: 82, P: 78 },
  ESTP: { E: 88, S: 85, T: 75, P: 82 },
  ESFP: { E: 92, S: 78, F: 80, P: 85 },
};

const dimLabels: Record<string, { zh: [string, string]; en: [string, string] }> = {
  EI: { zh: ["外向 (E)", "内向 (I)"], en: ["Extraverted (E)", "Introverted (I)"] },
  SN: { zh: ["实感 (S)", "直觉 (N)"], en: ["Observant (S)", "Intuitive (N)"] },
  TF: { zh: ["思考 (T)", "情感 (F)"], en: ["Thinking (T)", "Feeling (F)"] },
  JP: { zh: ["判断 (J)", "感知 (P)"], en: ["Judging (J)", "Prospecting (P)"] },
};

const dimKeys = ["EI", "SN", "TF", "JP"] as const;

// ─── 配对中文名 ───
const typeNameMap: Record<string, { zh: string; en: string }> = {};
Object.values(mbtiTypes).forEach((t) => {
  typeNameMap[t.code] = { zh: t.name, en: t.nameEn };
});

export default function MBTITypePage() {
  const { code } = useParams<{ code: string }>();
  const router = useRouter();
  const { lang, t } = useSite();
  const isZh = lang === "zh";

  const info = mbtiTypes[code as string];

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center py-32">
          <div className="text-6xl mb-4">😅</div>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">
            {isZh ? "未找到人格类型" : "Personality type not found"}：{code}
          </p>
          <button
            onClick={() => router.push("/mbti")}
            className="px-6 py-2.5 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition"
          >
            {isZh ? "返回 MBTI 首页" : "Back to MBTI Home"}
          </button>
        </div>
      </div>
    );
  }

  const cat = getCategory(info.code);
  const dims = dimPercent[info.code] || {};

  // ─── 获取同分类的其他类型 ───
  const relatedTypes = Object.values(mbtiTypes).filter(
    (t) => getCategory(t.code).zh === cat.zh && t.code !== info.code
  );

  // ─── 维度条数据 ───
  const bars = dimKeys.map((key) => {
    const [l1, l2] = key.split(""); // e.g. "E", "I"
    const pct = dims[l1] ?? dims[l2] ?? 50;
    return {
      left: l1,
      right: l2,
      pct, // percentage for the first letter
      label: dimLabels[key],
    };
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* ═══ 面包屑 ═══ */}
      <nav className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
          <li>
            <Link href="/" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
              {isZh ? "首页" : "Home"}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/mbti" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
              MBTI
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600 dark:text-gray-300 font-medium">{isZh ? cat.zh : cat.en}</li>
          <li>/</li>
          <li className="text-gray-800 dark:text-gray-100 font-semibold">{info.code}</li>
        </ol>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-8 md:p-12">
          {/* 背景装饰 */}
          <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${cat.color} opacity-10 blur-2xl`} />
          <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br ${cat.color} opacity-8 blur-2xl`} />

          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            {/* Emoji */}
            <div className="shrink-0 text-7xl md:text-8xl select-none">{info.emoji}</div>

            {/* 信息 */}
            <div className="flex-1 text-center md:text-left">
              {/* 分类徽章 */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${cat.color} mb-3`}
              >
                {isZh ? cat.zh : cat.en}
              </span>

              {/* 类型代码 */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
                {info.code}
              </h1>

              {/* 名称 */}
              <h2 className="mt-2 text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-200">
                {isZh ? info.name : info.nameEn}
              </h2>

              {/* 别名 */}
              <p className="mt-1 text-base text-gray-400 dark:text-gray-500 italic">
                {info.nickname || (isZh ? "暂无别名" : "No nickname")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 描述 ═══ */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
            {isZh ? "📖 类型概述" : "📖 Overview"}
          </h3>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 whitespace-pre-line">
            {isZh ? info.description : info.descriptionEn}
          </p>
        </div>
      </section>

      {/* ═══ 维度可视化 ═══ */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6">
            {isZh ? "📊 认知功能维度" : "📊 Cognitive Dimensions"}
          </h3>

          <div className="space-y-5">
            {bars.map((bar) => {
              const isPctHigh = bar.pct >= 50; // first letter dominant
              const leftPct = bar.pct;
              const rightPct = 100 - leftPct;
              return (
                <div key={`${bar.left}${bar.right}`}>
                  {/* 标签行 */}
                  <div className="flex justify-between text-sm font-semibold mb-1.5">
                    <span className={isPctHigh ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400 dark:text-gray-500"}>
                      {isZh ? bar.label.zh[0] : bar.label.en[0]}
                    </span>
                    <span className={!isPctHigh ? "text-rose-500 dark:text-rose-400" : "text-gray-400 dark:text-gray-500"}>
                      {isZh ? bar.label.zh[1] : bar.label.en[1]}
                    </span>
                  </div>
                  {/* 条 */}
                  <div className="relative h-4 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    {/* 主流 */}
                    <div
                      className="absolute top-0 h-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500 dark:from-indigo-500 dark:to-indigo-400 transition-all duration-700"
                      style={{ [isPctHigh ? "left" : "right"]: 0, width: `${isPctHigh ? leftPct : rightPct}%` }}
                    />
                    {/* 百分数 */}
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-200 drop-shadow-sm">
                      {isPctHigh ? leftPct : rightPct}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 优势 & 劣势 ═══ */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 优势 */}
          <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3">
              <h3 className="text-white font-bold text-base">
                {isZh ? "💪 核心优势" : "💪 Strengths"}
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {info.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 劣势 */}
          <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3">
              <h3 className="text-white font-bold text-base">
                {isZh ? "⚠️ 需要注意" : "⚠️ Weaknesses"}
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {info.weaknesses.map((w, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 职业建议 ═══ */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-5">
            {isZh ? "💼 适合的职业方向" : "💼 Career Paths"}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {info.careers.map((c, i) => {
              const careerEmojis = ["🔬", "⚙️", "📈", "🎯", "🏛️", "💡", "🎨", "📚", "💻", "🏥", "✈️", "🌍"];
              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 text-sm font-medium text-gray-700 dark:text-gray-300 hover:shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition"
                >
                  <span className="text-base">{careerEmojis[i % careerEmojis.length]}</span>
                  <span>{c}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 关系匹配 ═══ */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
            {isZh ? "最佳匹配" : "Best Matches"}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
            {isZh ? info.relationships : info.relationshipsEn}
          </p>
        </div>
      </section>

      {relatedTypes.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 pb-10">
          <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-5">
              {isZh
                ? `🔗 同属「${cat.zh}」的其他类型`
                : `🔗 Other ${cat.en} Types`}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {relatedTypes.map((rt) => (
                <Link
                  key={rt.code}
                  href={`/mbti/types/${rt.code}`}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all"
                >
                  <span className="text-3xl">{rt.emoji}</span>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{rt.code}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {isZh ? rt.name : rt.nameEn}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ 返回按钮 ═══ */}
      <section className="max-w-5xl mx-auto px-4 pb-16 text-center">
        <Link
          href="/mbti"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 shadow-sm hover:shadow-md transition-all"
        >
          <span>←</span>
          <span>{isZh ? "返回所有 MBTI 类型" : "Back to All MBTI Types"}</span>
        </Link>
      </section>
    </div>
  );
}
