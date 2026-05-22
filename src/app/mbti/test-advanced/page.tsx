"use client";

import { mbtiAdvancedQuestions, calculateMBTI } from "@/data/mbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function MBTITestAdvancedPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">🔬</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "MBTI 进阶测评" : "MBTI Advanced Test"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh
            ? "144题 · 16种人格类型 · 八大认知功能分析"
            : "144 Questions · 16 Types · 8 Cognitive Function Analysis"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs text-gray-400">
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            {isZh ? "📝 144题专业量表" : "📝 144-item Scale"}
          </span>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            {isZh ? "⏱ 约15分钟" : "⏱ ~15 min"}
          </span>
        </div>
      </div>

      <QuestionFlow
        title={isZh ? "MBTI 进阶测评" : "MBTI Advanced Test"}
        emoji="🔬"
        questions={mbtiAdvancedQuestions}
        onCalculate={(answers) => calculateMBTI(answers, mbtiAdvancedQuestions)}
        resultPath="/mbti/result"
      />
    </div>
  );
}