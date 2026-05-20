"use client";
import { useSite } from "@/lib/site-context";
import { sbtiTypes } from "@/data/sbti";

export default function SBITypesPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          {isZh ? "全部人格图鉴" : "All 27 Types Gallery"}
        </h1>
        <p className="text-2xl text-gray-500 dark:text-gray-400">
          {isZh ? "27种人格 · 点击查看你的类型" : "27 Types · Find Your Personality"}
        </p>
      </div>

      {/* All 27 Types Grid */}
      <div className="max-w-8xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sbtiTypes.map((type) => (
            <div key={type.code} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              {/* Emoji big */}
              <div className="text-center mb-4">
                <span className="text-8xl block">{type.emoji}</span>
              </div>
              {/* Code */}
              <div className="text-center mb-2">
                <span className="text-2xl font-extrabold font-mono text-amber-500 dark:text-amber-400">
                  {type.code}
                </span>
              </div>
              {/* Chinese name */}
              <h3 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-2">
                {type.name}
              </h3>
              {/* English name */}
              <p className="text-lg text-center text-gray-400 mb-4">
                {type.nameEn}
              </p>
              {/* Tagline */}
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 mb-4 text-center">
                <p className="text-xl font-extrabold text-amber-600 dark:text-amber-400 leading-snug">
                  「{type.tagline}」
                </p>
              </div>
              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {isZh ? type.description : type.descriptionEn}
              </p>
              {/* Traits */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {(isZh ? type.traits : type.traitsEn).map((t, i) => (
                  <span key={i} className="text-sm font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              {/* Advice */}
              <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                <p className="text-base font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">
                  💡 {isZh ? type.advice : type.adviceEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}