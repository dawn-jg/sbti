"use client";

import { mbtiStandardQuestions, calculateMBTI } from "@/data/mbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";
import TestDisclaimer from "@/components/TestDisclaimer";
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
      <TestDisclaimer
        intro="本测评共 93 题，约 15 分钟完成。相比速测版题目更全面，能更精准地确定你的四维偏好强度，测出 16 型人格之一并附完整解读。"
        introEn="This 93-question standard assessment takes about 15 minutes. More comprehensive than the quick version, it pinpoints your preferences across four dimensions to identify your 16-type personality."
        theory="MBTI 标准测评基于荣格心理类型理论与 MBTI 官方框架的维度结构，参考 16personalities 的公开维度划分设计。"
        theoryEn="The MBTI Standard Test follows Jung's psychological types and the dimension structure of the official MBTI framework."
      />
    </div>
  );
}
