"use client";
import { innerChildQuestions, calculateInnerChild } from "@/data/inner-child";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function InnerChildTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
        <div className="max-w-4xl mx-auto px-4">
      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "内在小孩测试" : "Inner Child"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "5种内在小孩 · 童年情绪疗愈" : "5 Inner Child Types · Childhood Healing"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 10题" : "📝 10 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 5种类型" : "🧭 5 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 4-6分钟" : "⏱ 4-6 min"}</span>
        </div>
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