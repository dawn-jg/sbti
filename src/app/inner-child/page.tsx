"use client";
import { innerChildQuestions, calculateInnerChild } from "@/data/inner-child";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function InnerChildTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">🧸</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "内在小孩测试" : "Inner Child Test"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh ? "10题 · 5种内在小孩 · 探索你的童年情绪印记" : "10 Questions · 5 Inner Child Types · Explore Your Childhood Imprints"}
        </p>
      </div>
      <QuestionFlow
        title={isZh ? "内在小孩测试" : "Inner Child Test"}
        emoji="🧸"
        questions={innerChildQuestions}
        onCalculate={calculateInnerChild}
        resultPath="/inner-child/result"
      />
    </div>
  );
}