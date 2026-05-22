"use client";

import { mbtiStandardQuestions, calculateMBTI } from "@/data/mbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";
import Link from "next/link";

export default function MBTITestStandardPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">🧠</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "MBTI 标准测评" : "MBTI Standard Test"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh
            ? "93题 · 16种人格类型 · 核心人格维度分析"
            : "93 Questions · 16 Types · Core Personality Dimension Analysis"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs text-gray-400">
          <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-full font-semibold">
            {isZh ? "🌟 推荐" : "🌟 Recommended"}
          </span>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            {isZh ? "⏱ 约10分钟" : "⏱ ~10 min"}
          </span>
        </div>
      </div>

      <QuestionFlow
        title={isZh ? "MBTI 标准测评" : "MBTI Standard Test"}
        emoji="🧠"
        questions={mbtiStandardQuestions}
        onCalculate={(answers) => calculateMBTI(answers, mbtiStandardQuestions)}
        resultPath="/mbti/result"
      />
    </div>
  );
}
