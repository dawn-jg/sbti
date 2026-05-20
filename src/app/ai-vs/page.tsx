"use client";
import { aiVsQuestions, calculateAIVs } from "@/data/ai-vs";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function AIVsTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
        <div className="max-w-4xl mx-auto px-4">
      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "AI 能力对比" : "AI vs Human Test"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "5种思维类型 · 测试你的人机思维指数" : "5 Thinking Types · Human or AI?"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 10题" : "📝 10 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 5种类型" : "🧭 5 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 4-6分钟" : "⏱ 4-6 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "AI能力对比" : "AI vs Human"}
        emoji="🤖"
        questions={aiVsQuestions}
        onCalculate={calculateAIVs}
        resultPath="/ai-vs/result"
      />
    </div>
  );
}