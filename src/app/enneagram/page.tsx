"use client";
import { enneagramQuestions, calculateEnneagram } from "@/data/enneagram";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function EnneagramTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">🔮</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "九型人格测试" : "Enneagram Test"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh ? "18题 · 9种性格类型 · 深入了解你的核心动机" : "18 Questions · 9 Personality Types · Discover Your Core Motivation"}
        </p>
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