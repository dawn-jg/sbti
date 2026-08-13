"use client";

import { mbtiQuestions, calculateMBTI } from "@/data/mbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function MBTITestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">🧠</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "MBTI 人格测试" : "MBTI Personality Test"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh
            ? "32题 · 16种人格类型 · 基于荣格心理类型理论"
            : "32 Questions · 16 Types · Based on Jung's Theory"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs text-gray-400">
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            {isZh ? "📝 32题速测版" : "📝 Quick Test"}
          </span>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            {isZh ? "⏱ 约5分钟" : "⏱ ~5 min"}
          </span>
        </div>
      </div>

      <QuestionFlow
        title={isZh ? "MBTI 测试" : "MBTI Test"}
        emoji="🧠"
        questions={mbtiQuestions}
        onCalculate={calculateMBTI}
        resultPath="/mbti/result"
      />
    </div>
  );
}
