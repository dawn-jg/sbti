"use client"
;
import { loveLanguageQuestions, calculateLoveLanguage } from "@/data/love-language";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";
import SeoContentSection from "@/components/SeoContentSection";

export default function LoveLanguageTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
        <div className="max-w-4xl mx-auto px-4">
      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "爱的五种语言" : "Love Language"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "5种爱语 · 了解你表达和接收爱的方式" : "5 Love Languages · Express & Receive Love"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 10题" : "📝 10 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 5种类型" : "🧭 5 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 4-6分钟" : "⏱ 4-6 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "爱的五种语言" : "Love Language"}
        emoji="💕"
        questions={loveLanguageQuestions}
        onCalculate={calculateLoveLanguage}
        resultPath="/love-language/result"
      />
    <SeoContentSection test="love-language" />
    </div>
  );
}