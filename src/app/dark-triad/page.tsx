"use client";
import { darkTriadQuestions, calculateDarkTriad } from "@/data/dark-triad";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function DarkTriadTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">⚖️</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "暗黑三角·光明三角" : "Dark Triad · Light Triad"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh ? "15题 · 6种人格面向 · 探索人性的阴暗与光明" : "15 Questions · 6 Personality Facets · Explore the Human Shadow & Light"}
        </p>
      </div>
      <QuestionFlow
        title={isZh ? "暗黑三角·光明三角" : "Dark Triad · Light Triad"}
        emoji="⚖️"
        questions={darkTriadQuestions}
        onCalculate={calculateDarkTriad}
        resultPath="/dark-triad/result"
      />
    </div>
  );
}