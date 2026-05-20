"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { mbtiTypes, type MBTITypeInfo } from "@/data/mbti";
import { useSite } from "@/lib/site-context";

// ── Category mapping ──
function getCategory(type: string): { zh: string; en: string } {
  const code = type.toUpperCase();
  if (code.includes("N") && code.includes("T"))
    return { zh: "分析师", en: "Analysts" };
  if (code.includes("N") && code.includes("F"))
    return { zh: "外交家", en: "Diplomats" };
  if (code.includes("S") && code.includes("J"))
    return { zh: "守护者", en: "Sentinels" };
  return { zh: "探险家", en: "Explorers" };
}

// ── Dimension visualization ──
interface Dimension {
  key: string;
  labelZh: string;
  labelEn: string;
  value: number;
  oppositeZh: string;
  oppositeEn: string;
}

function getDimensions(type: string): Dimension[] {
  type = type.toUpperCase();
  const dimDefs: Record<
    string,
    {
      labelZh: string;
      labelEn: string;
      oppositeZh: string;
      oppositeEn: string;
      values: Record<string, number>;
    }
  > = {
    E: {
      labelZh: "外向",
      labelEn: "Extraverted",
      oppositeZh: "内向",
      oppositeEn: "Introverted",
      values: {
        INTJ: 22, INTP: 18, ENTJ: 82, ENTP: 78,
        INFJ: 25, INFP: 20, ENFJ: 80, ENFP: 85,
        ISTJ: 20, ISFJ: 18, ESTJ: 80, ESFJ: 82,
        ISTP: 22, ISFP: 20, ESTP: 85, ESFP: 88,
      },
    },
    I: {
      labelZh: "内向",
      labelEn: "Introverted",
      oppositeZh: "外向",
      oppositeEn: "Extraverted",
      values: {
        INTJ: 78, INTP: 82, ENTJ: 18, ENTP: 22,
        INFJ: 75, INFP: 80, ENFJ: 20, ENFP: 15,
        ISTJ: 80, ISFJ: 82, ESTJ: 20, ESFJ: 18,
        ISTP: 78, ISFP: 80, ESTP: 15, ESFP: 12,
      },
    },
    S: {
      labelZh: "实感",
      labelEn: "Sensing",
      oppositeZh: "直觉",
      oppositeEn: "Intuitive",
      values: {
        INTJ: 20, INTP: 18, ENTJ: 22, ENTP: 15,
        INFJ: 25, INFP: 22, ENFJ: 28, ENFP: 18,
        ISTJ: 85, ISFJ: 82, ESTJ: 88, ESFJ: 80,
        ISTP: 82, ISFP: 78, ESTP: 85, ESFP: 80,
      },
    },
    N: {
      labelZh: "直觉",
      labelEn: "Intuitive",
      oppositeZh: "实感",
      oppositeEn: "Sensing",
      values: {
        INTJ: 80, INTP: 82, ENTJ: 78, ENTP: 85,
        INFJ: 75, INFP: 78, ENFJ: 72, ENFP: 82,
        ISTJ: 15, ISFJ: 18, ESTJ: 12, ESFJ: 20,
        ISTP: 18, ISFP: 22, ESTP: 15, ESFP: 20,
      },
    },
    T: {
      labelZh: "思维",
      labelEn: "Thinking",
      oppositeZh: "情感",
      oppositeEn: "Feeling",
      values: {
        INTJ: 85, INTP: 88, ENTJ: 90, ENTP: 82,
        INFJ: 30, INFP: 25, ENFJ: 28, ENFP: 22,
        ISTJ: 80, ISFJ: 25, ESTJ: 88, ESFJ: 28,
        ISTP: 85, ISFP: 22, ESTP: 80, ESFP: 20,
      },
    },
    F: {
      labelZh: "情感",
      labelEn: "Feeling",
      oppositeZh: "思维",
      oppositeEn: "Thinking",
      values: {
        INTJ: 15, INTP: 12, ENTJ: 10, ENTP: 18,
        INFJ: 70, INFP: 75, ENFJ: 72, ENFP: 78,
        ISTJ: 20, ISFJ: 75, ESTJ: 12, ESFJ: 72,
        ISTP: 15, ISFP: 78, ESTP: 20, ESFP: 80,
      },
    },
    J: {
      labelZh: "判断",
      labelEn: "Judging",
      oppositeZh: "感知",
      oppositeEn: "Perceiving",
      values: {
        INTJ: 88, INTP: 25, ENTJ: 85, ENTP: 22,
        INFJ: 82, INFP: 28, ENFJ: 80, ENFP: 20,
        ISTJ: 90, ISFJ: 85, ESTJ: 88, ESFJ: 82,
        ISTP: 22, ISFP: 25, ESTP: 18, ESFP: 15,
      },
    },
    P: {
      labelZh: "感知",
      labelEn: "Perceiving",
      oppositeZh: "判断",
      oppositeEn: "Judging",
      values: {
        INTJ: 12, INTP: 75, ENTJ: 15, ENTP: 78,
        INFJ: 18, INFP: 72, ENFJ: 20, ENFP: 80,
        ISTJ: 10, ISFJ: 15, ESTJ: 12, ESFJ: 18,
        ISTP: 78, ISFP: 75, ESTP: 82, ESFP: 85,
      },
    },
  };

  return type.split("").map((letter) => {
    const d = dimDefs[letter];
    return {
      key: letter,
      labelZh: d.labelZh,
      labelEn: d.labelEn,
      value: d.values[type] ?? 80,
      oppositeZh: d.oppositeZh,
      oppositeEn: d.oppositeEn,
    };
  });
}

// ── Related types (same category) ──
function getRelatedTypes(type: string, count = 4): MBTITypeInfo[] {
  const t = type.toUpperCase();
  const isNT = t.includes("N") && t.includes("T");
  const isNF = t.includes("N") && t.includes("F");
  const isSJ = t.includes("S") && t.includes("J");

  return Object.values(mbtiTypes)
    .filter((other) => {
      if (other.code === t) return false;
      if (isNT) return other.code.includes("N") && other.code.includes("T");
      if (isNF) return other.code.includes("N") && other.code.includes("F");
      if (isSJ) return other.code.includes("S") && other.code.includes("J");
      return other.code.includes("S") && other.code.includes("P");
    })
    .slice(0, count);
}

// ── Gradient map per type ──
const gradientMap: Record<string, string> = {
  INTJ: "from-indigo-500 via-violet-500 to-purple-600",
  INTP: "from-blue-500 via-indigo-500 to-violet-500",
  ENTJ: "from-amber-500 via-orange-500 to-red-500",
  ENTP: "from-violet-500 via-purple-500 to-fuchsia-500",
  INFJ: "from-emerald-500 via-teal-500 to-cyan-500",
  INFP: "from-pink-400 via-rose-400 to-red-400",
  ENFJ: "from-sky-400 via-blue-500 to-indigo-500",
  ENFP: "from-yellow-400 via-orange-400 to-pink-400",
  ISTJ: "from-slate-500 via-gray-500 to-zinc-500",
  ISFJ: "from-teal-400 via-emerald-400 to-green-500",
  ESTJ: "from-red-500 via-rose-500 to-pink-500",
  ESFJ: "from-lime-400 via-green-400 to-emerald-500",
  ISTP: "from-cyan-500 via-sky-500 to-blue-500",
  ISFP: "from-fuchsia-400 via-pink-400 to-rose-400",
  ESTP: "from-orange-500 via-amber-500 to-yellow-500",
  ESFP: "from-rose-400 via-pink-400 via-fuchsia-400 to-purple-400",
};

// ── Page Component ──
export default function MBTIResultPage() {
  const { type } = useParams<{ type: string }>();
  const router = useRouter();
  const { lang, t } = useSite();
  const isZh = lang === "zh";

  const decoded = decodeURIComponent(type).toUpperCase();
  const info = mbtiTypes[decoded];

  // ═══ Error State ═══
  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 px-4">
        <div className="text-center max-w-sm">
          <span className="text-7xl block mb-5">😅</span>
          <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">
            {t("未找到测试结果", "Result Not Found")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            {t(
              `未找到类型 "${decoded}" 的数据，请确认链接是否正确。`,
              `No data found for type "${decoded}". Please check the link.`
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => router.push("/mbti/test")}
              className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/25"
            >
              🔄 {t("重新测试", "Retake Test")}
            </button>
            <Link
              href="/mbti"
              className="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              🔍 {t("查看所有类型", "View All Types")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const category = getCategory(decoded);
  const dimensions = getDimensions(decoded);
  const relatedTypes = getRelatedTypes(decoded, 4);
  const gradient = gradientMap[decoded] ?? "from-indigo-500 via-violet-500 to-purple-600";

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "https://sbtibee.com";
  const shareTitle = t(
    `我的MBTI人格类型是 ${info.code} · ${info.name}（${info.nickname}）`,
    `My MBTI type is ${info.code} · ${info.nameEn} (${info.nickname})`
  );

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareTitle}\n${shareUrl}`);
      alert(t("✅ 链接已复制！", "✅ Link copied!"));
    } catch {
      alert(t("复制失败，请手动复制", "Copy failed, please copy manually"));
    }
  };

  // ═══ Main Layout ═══
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        {/* ═══ Hero ═══ */}
        <section className="text-center mb-10">
          <span className="text-6xl sm:text-7xl block mb-5 drop-shadow-sm">
            {info.emoji}
          </span>

          <h1
            className={`text-5xl sm:text-6xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-3 tracking-tight`}
          >
            {info.code}
          </h1>

          <p className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
            {isZh ? info.name : info.nameEn}
          </p>

          <p className="text-base text-gray-500 dark:text-gray-400 mt-1.5">
            {isZh ? info.nameEn : info.name} · «{info.nickname}»
          </p>

          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50">
              📂 {isZh ? category.zh : category.en}
            </span>
          </div>
        </section>

        {/* ═══ Description Card ═══ */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 mb-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
            <span className="text-xl">📖</span>
            {t("关于你", "About You")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px] sm:text-base">
            {isZh ? info.description : info.descriptionEn}
          </p>
        </section>

        {/* ═══ Dimension Visualization ═══ */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 mb-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-5 flex items-center gap-2">
            <span className="text-xl">📊</span>
            {t("维度分析", "Dimension Analysis")}
          </h3>
          <div className="space-y-5">
            {dimensions.map((dim) => (
              <div key={dim.key}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {isZh ? dim.labelZh : dim.labelEn}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      vs {isZh ? dim.oppositeZh : dim.oppositeEn}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 tabular-nums">
                    {dim.value}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-1000 ease-out`}
                    style={{ width: `${dim.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Strengths & Weaknesses (2 columns) ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Strengths */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <span className="text-xl">💪</span>
              {t("核心优势", "Strengths")}
            </h3>
            <ul className="space-y-3">
              {info.strengths.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-gray-700 dark:text-gray-300"
                >
                  <span className="text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0 text-sm">
                    ✦
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Weaknesses */}
          <section className="bg-white dark:bg-gray-900 rounded-2xl border border-amber-100 dark:border-amber-900/30 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-4 flex items-center gap-2">
              <span className="text-xl">🌱</span>
              {t("成长空间", "Growth Areas")}
            </h3>
            <ul className="space-y-3">
              {info.weaknesses.map((w, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-gray-700 dark:text-gray-300"
                >
                  <span className="text-amber-500 dark:text-amber-400 mt-0.5 shrink-0 text-sm">
                    ○
                  </span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ═══ Career Paths ═══ */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 mb-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <span className="text-xl">💼</span>
            {t("适合职业", "Career Paths")}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {info.careers.map((c, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/40"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* ═══ Relationship Compatibility ═══ */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 mb-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <span className="text-xl">💕</span>
            {t("最佳配对", "Best Matches")}
          </h3>
          <div className="flex flex-wrap gap-3">
            {info.relationships && (
            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-2xl p-5 border border-pink-200 dark:border-pink-800">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {isZh ? info.relationships : info.relationshipsEn}
              </p>
            </div>
          )}
          </div>
        </section>

        {/* ═══ Share & Actions ═══ */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 mb-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <span className="text-xl">📤</span>
            {t("分享结果", "Share Result")}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={copyLink}
              className="px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              📋 {t("复制链接", "Copy Link")}
            </button>
            <button
              onClick={() => {
                const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(window.location.href)}`;
                const w = window.open('', '_blank', 'width=420,height=420');
                if (w) {
                  w.document.write(`<!DOCTYPE html><html><head><title>${shareTitle}</title><style>body{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;margin:0;font-family:system-ui;background:#f5f5f5}.qr{border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.1)}p{margin-top:16px;color:#666;font-size:14px}</style></head><body><img class="qr" src="${qrUrl}" alt="QR"><p>${isZh ? '微信扫一扫即可分享' : 'Scan with WeChat to share'}</p></body></html>`);
                }
              }}
              className="flex-1 py-2.5 rounded-xl bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition text-center"
            >
              📱 {isZh ? "分享微信" : "Share WeChat"}
            </button>
            <Link
              href="/mbti/test"
              className="px-4 py-2.5 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition shadow-sm"
            >
              🔄 {t("重新测试", "Retake")}
            </Link>
            <Link
              href="/mbti"
              className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              🔍 {t("查看所有类型", "All Types")}
            </Link>
          </div>
        </section>

        {/* ═══ Related Types ═══ */}
        <section className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 mb-8 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-5 flex items-center gap-2">
            <span className="text-xl">🔗</span>
            {t("同类人格", "Related Types")}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedTypes.map((rt) => (
              <Link
                key={rt.code}
                href={`/mbti/result/${rt.code}`}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-sm transition group"
              >
                <span className="text-3xl">{rt.emoji}</span>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {rt.code}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {isZh ? rt.name : rt.nameEn}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══ Footer ═══ */}
        <p className="text-xs text-center text-gray-300 dark:text-gray-700 pb-4">
          🐝 SBTIBEE · {t("帮你找到最真实的自己", "Discover your true self")}
        </p>
      </div>
    </div>
  );
}
