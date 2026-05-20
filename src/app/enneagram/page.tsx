"use client";
import { enneagramQuestions, calculateEnneagram } from "@/data/enneagram";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function EnneagramTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
        <div className="max-w-4xl mx-auto px-4">
      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "九型人格测试" : "Enneagram Test"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "18题 · 9种性格类型 · 深入了解你的核心动机" : "18 Questions · 9 Types · Core Motivation"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 18题" : "📝 18 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 9种类型" : "🧭 9 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 5-8分钟" : "⏱ 5-8 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "九型人格测试" : "Enneagram Test"}
        emoji="🔮"
        questions={enneagramQuestions}
        onCalculate={calculateEnneagram}
        resultPath="/enneagram/result"
      />
    </div>
  );
}