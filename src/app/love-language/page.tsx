"use client";
import { loveLanguageQuestions, calculateLoveLanguage } from "@/data/love-language";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function LoveLanguageTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">💕</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "爱的五种语言" : "Love Language Test"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh ? "10题 · 5种爱语 · 了解你和伴侣的表达方式" : "10 Questions · 5 Love Languages · Discover How You Connect"}
        </p>
      </div>
      <QuestionFlow
        title={isZh ? "爱的五种语言" : "Love Language"}
        emoji="💕"
        questions={loveLanguageQuestions}
        onCalculate={calculateLoveLanguage}
        resultPath="/love-language/result"
      />
    </div>
  );
}