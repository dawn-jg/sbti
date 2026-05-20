"use client";
import { useParams, useRouter } from "next/navigation";
import { mbtiTypes } from "@/data/mbti";
import { useSite } from "@/lib/site-context";

export default function MBTIResultPage() {
  const { type } = useParams<{ type: string }>();
  const router = useRouter();
  const { lang } = useSite();
  const isZh = lang === "zh";
  const decoded = decodeURIComponent(String(type));
  const info = mbtiTypes[decoded];

  if (!info) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 p-6">
        <div className="text-center">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">
            {isZh ? "未找到测试结果" : "Result Not Found"}: {decoded}
          </p>
          <button
            onClick={() => router.push("/mbti")}
            className="mt-4 px-6 py-3 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition"
          >
            {isZh ? "重新测试" : "Retake Test"}
          </button>
        </div>
      </div>
    );
  }

  const categoryLabel = () => {
    const map: Record<string, string> = {
      Analyst: isZh ? "分析师" : "Analyst",
      Diplomat: isZh ? "外交家" : "Diplomat",
      Sentinel: isZh ? "守护者" : "Sentinel",
      Explorer: isZh ? "探险家" : "Explorer",
    };
    const key = decoded.slice(0, 2);
    if ("INT".includes(key) || "ENT".includes(key)) return map.Analyst || "Analyst";
    if ("INF".includes(key) || "ENF".includes(key)) return map.Diplomat || "Diplomat";
    if ("IST".includes(key) || "EST".includes(key)) return map.Sentinel || "Sentinel";
    return map.Explorer || "Explorer";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10">
      <div className="max-w-2xl mx-auto px-4 space-y-4">

        {/* Hero */}
        <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl p-6 text-white text-center">
          <div className="text-5xl mb-2">{info.emoji}</div>
          <div className="text-3xl font-black tracking-widest mb-1">{info.code}</div>
          <div className="text-lg font-bold opacity-90">{isZh ? info.name : info.nameEn}</div>
          <div className="text-sm opacity-75 mt-1">{info.nickname}</div>
          <div className="mt-2 inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
            {categoryLabel()}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {isZh ? info.description : info.descriptionEn}
        </div>

        {/* Dimensions */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            {isZh ? "维度分析" : "Dimension Analysis"}
          </div>
          <div className="space-y-2 text-sm">
            {[
              { label: isZh ? "外向/内向" : "Extraversion/Introversion", pct: info.code.includes("E") ? 75 : 25 },
              { label: isZh ? "实感/直觉" : "Sensing/iNtuition", pct: info.code.charAt(1) === "S" ? 70 : 30 },
              { label: isZh ? "理性/情感" : "Thinking/Feeling", pct: info.code.charAt(2) === "T" ? 72 : 28 },
              { label: isZh ? "计划/灵活" : "Judging/Perceiving", pct: info.code.charAt(3) === "J" ? 68 : 32 },
            ].map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-28 shrink-0 text-gray-500 text-xs">{d.label}</span>
                <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${d.pct}%` }} />
                </div>
                <span className="text-xs text-gray-400 w-8 text-right">{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        {info.strengths && info.strengths.length > 0 && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-5">
            <div className="text-xs font-bold text-green-600 dark:text-green-400 mb-2">{isZh ? "核心优势" : "Strengths"}</div>
            <div className="flex flex-wrap gap-2">
              {(isZh ? info.strengths : (info.strengthsEn || info.strengths)).map((s: string, i: number) => (
                <span key={i} className="px-2 py-1 bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">{s}</span>
              ))}
            </div>
          </div>
        )}

        {/* Weaknesses */}
        {info.weaknesses && info.weaknesses.length > 0 && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-5">
            <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-2">{isZh ? "需要注意" : "Weaknesses"}</div>
            <div className="flex flex-wrap gap-2">
              {(isZh ? info.weaknesses : (info.weaknessesEn || info.weaknesses)).map((w: string, i: number) => (
                <span key={i} className="px-2 py-1 bg-amber-50 dark:bg-amber-900 text-amber-600 dark:text-amber-300 text-xs rounded-full">{w}</span>
              ))}
            </div>
          </div>
        )}

        {/* Careers */}
        {info.careers && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 text-sm">
            <div className="text-xs font-bold text-gray-400 mb-2">{isZh ? "适合职业" : "Careers"}</div>
            <div className="flex flex-wrap gap-2">
              {(isZh ? info.careers : (info.careersEn || info.careers)).map((c: string, i: number) => (
                <span key={i} className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs rounded-full">{c}</span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="flex gap-2">
          <button
            onClick={() => router.push("/mbti")}
            className="flex-1 py-3 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition text-center"
          >
            🔄 {isZh ? "再测一次" : "Retake Test"}
          </button>
          <a
            href="/"
            className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center"
          >
            🏠 {isZh ? "首页" : "Home"}
          </a>
        </div>

      </div>
    </div>
  );
}
