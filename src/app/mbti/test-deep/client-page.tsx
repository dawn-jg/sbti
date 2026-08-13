"use client";

import { mbtiDeepQuestions, calculateMBTI } from "@/data/mbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function MBTITestDeepPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">🏔️</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "MBTI 深度测评" : "MBTI Deep Test"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh
            ? "200题 · 16种人格类型 · 全维度深度剖析"
            : "200 Questions · 16 Types · Full Dimension Deep Analysis"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs text-gray-400">
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full font-semibold">
            {isZh ? "💎 最精准" : "💎 Most Accurate"}
          </span>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            {isZh ? "⏱ 约20分钟" : "⏱ ~20 min"}
          </span>
        </div>
      </div>

      <QuestionFlow
        title={isZh ? "MBTI 深度测评" : "MBTI Deep Test"}
        emoji="🏔️"
        questions={mbtiDeepQuestions}
        onCalculate={(answers) => calculateMBTI(answers, mbtiDeepQuestions)}
        resultPath="/mbti/result"
      />
    </div>
  );
}