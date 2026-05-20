"use client";
import { sbtiQuestions, calculateSBTI } from "@/data/sbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function SbtiTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "SBTI 人格测试" : "SBTI Personality Test"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "选最像你的答案，测完就知道你是哪种抽象人格" : "Pick the answers that feel most like you"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 32题" : "📝 32 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 5-8分钟" : "⏱ 5-8 min"}</span>
        </div>
      </div>

      <QuestionFlow
        title={isZh ? "SBTI 测试" : "SBTI Test"}
        emoji="🎭"
        questions={sbtiQuestions}
        onCalculate={calculateSBTI}
        resultPath="/sbti/result"
      />
    </div>
  );
}
