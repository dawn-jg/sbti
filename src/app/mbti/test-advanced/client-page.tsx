"use client";

import { mbtiAdvancedQuestions, calculateMBTI } from "@/data/mbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";
import TestDisclaimer from "@/components/TestDisclaimer";

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
      <TestDisclaimer
        intro="本测评共 144 题，约 25 分钟完成。除了类型结果，还分析你的主导功能与辅助功能，帮助你理解「为什么我是这个类型」。"
        introEn="This 144-question deep assessment takes about 25 minutes. Beyond your type, it analyzes your dominant and auxiliary functions to explain why you are this type."
        theory="MBTI 进阶测评深入测量荣格认知功能（Ni/Ne/Si/Se/Ti/Te/Fi/Fe）的偏好顺序，理论基础为荣格《心理类型》与 Myers-Briggs 功能栈模型。"
        theoryEn="The MBTI Advanced Test measures the order of Jungian cognitive functions (Ni/Ne/Si/Se/Ti/Te/Fi/Fe), based on Jung's Psychological Types and the Myers-Briggs function stack."
      />
    </div>
  );
}