"use client";

import { mbtiQuestions, calculateMBTI } from "@/data/mbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";
import TestDisclaimer from "@/components/TestDisclaimer";

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
      <TestDisclaimer
        intro="本测试共 32 题，约 5 分钟完成。通过四组维度偏好（外向/内向、实感/直觉、思考/情感、判断/感知）组合出你的 16 型人格类型，并附完整的性格特点、职业倾向与人际关系解读。"
        introEn="This 32-question quick test takes about 5 minutes. It measures four preference pairs to identify your 16-type personality, with full descriptions of traits, career fit, and relationships."
        theory="MBTI 十六型人格测试基于卡尔·荣格（Carl Jung）1921 年出版的《心理类型》（Psychological Types）以及迈尔斯-布里格斯类型指标（MBTI）的认知功能理论设计。"
        theoryEn="The MBTI test is based on Carl Jung's Psychological Types (1921) and the cognitive functions framework of the Myers-Briggs Type Indicator."
      />
    </div>
  );
}
