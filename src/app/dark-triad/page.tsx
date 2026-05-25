"use client";
import { darkTriadQuestions, darkTriadTypes, calculateDarkTriad } from "@/data/dark-triad";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function DarkTriadTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
        <div className="max-w-4xl mx-auto px-4">
      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "暗黑三角·光明三角" : "Dark Triad · Light Triad"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "6种人格面向 · 探索人性的阴暗与光明面" : "6 Facets · Dark & Light Personality"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 15题" : "📝 15 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 6种类型" : "🧭 6 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 6-8分钟" : "⏱ 6-8 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "暗黑三角·光明三角" : "Dark Triad · Light Triad"}
        emoji="⚖️"
        questions={darkTriadQuestions}
        onCalculate={(answers) => darkTriadTypes[calculateDarkTriad(answers)]?.code ?? "FAITH"}
        resultPath="/dark-triad/result"
      />
    </div>
  );
}