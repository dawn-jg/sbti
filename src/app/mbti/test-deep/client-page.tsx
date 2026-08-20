"use client";

import { mbtiDeepQuestions, calculateMBTI } from "@/data/mbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";
import TestDisclaimer from "@/components/TestDisclaimer";

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
      <TestDisclaimer
        intro="本测评共 200 题，约 35 分钟完成。适合希望获得最完整人格画像的用户，测出 16 型人格并附详细的功能栈分析与解读。"
        introEn="This 200-question complete assessment takes about 35 minutes, ideal for users who want the fullest personality profile, including a detailed function stack analysis."
        theory="MBTI 深度测评全面测量荣格认知功能栈与各维度偏好强度，参考 MBTI 完整测评的题目结构设计，是本站最完整的 MBTI 工具。"
        theoryEn="The MBTI Deep Test comprehensively measures the Jungian function stack and preference strength, modeled on the full MBTI assessment structure."
      />
    </div>
  );
}