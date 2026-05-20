"use client";
import { useParams, useRouter } from "next/navigation";
import { sbtiTypes } from "@/data/sbti";
import { useSite } from "@/lib/site-context";

export default function SBTIResultPage() {
  const { type } = useParams<{ type: string }>();
  const router = useRouter();
  const { lang } = useSite();
  const isZh = lang === "zh";
  const decoded = decodeURIComponent(String(type));
  const info = sbtiTypes.find((t: any) => t.code === decoded);

  if (!info) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 p-6">
        <div className="text-center">
          <div className="text-4xl mb-3">🔍</div>
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">
            {isZh ? "未找到测试结果" : "Result Not Found"}: {decoded}
          </h1>
          <button
            onClick={() => router.push("/sbti/test")}
            className="mt-4 px-6 py-3 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition"
          >
            {isZh ? "重新测试" : "Retake Test"}
          </button>
        </div>
      </div>
    );
  }

  const levelWidth = (level: string) => {
    if (level === "H") return "w-[90%]";
    if (level === "M") return "w-[60%]";
    return "w-[30%]";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-4">
      <div className="max-w-2xl mx-auto space-y-4">

        {/* Hero */}
        <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl p-6 text-white text-center">
          <div className="text-5xl mb-2">{info.emoji}</div>
          <div className="text-3xl font-black tracking-widest mb-1">{info.code}</div>
          <div className="text-lg font-bold opacity-90">{isZh ? info.name : info.nameEn}</div>
          <div className="text-sm opacity-75 mt-1">{info.taglineEn}</div>
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {isZh ? info.description : info.descriptionEn}
        </div>

        {/* Traits */}
        {(info.traits || []).length > 0 && (
          <div className="flex flex-wrap gap-2">
            {(isZh ? info.traits : (info.traitsEn || info.traits)).map((t: string, i: number) => (
              <span key={i} className="px-2 py-1 bg-amber-50 dark:bg-amber-900 text-amber-600 dark:text-amber-300 text-xs rounded-full">
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Advice */}
        {info.advice && (
          <div className="bg-amber-50 dark:bg-amber-900 rounded-xl p-3 text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
            <strong>💡 {isZh ? "建议" : "Advice"}: </strong>
            {isZh ? info.advice : info.adviceEn}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => router.push("/sbti/test")}
            className="flex-1 py-3 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition text-center"
          >
            🔄 {isZh ? "再测一次" : "Retake"}
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
