"use client";
import { aiVsQuestions, calculateAIVs } from "@/data/ai-vs";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function AIVsTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">🤖</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "AI 能力对比" : "AI vs Human Test"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh ? "10题 · 0-100分 · 测出你的人机思维指数" : "10 Questions · 0-100 Score · Your Human-AI Thinking Index"}
        </p>
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