"use client";
import { auraQuestions, calculateAura } from "@/data/aura";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function AuraTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">🌈</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "气场颜色测试" : "Aura Color Test"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh ? "10题 · 7种气场颜色 · 感知你的能量频率" : "10 Questions · 7 Aura Colors · Sense Your Energy Frequency"}
        </p>
      </div>
      <QuestionFlow
        title={isZh ? "气场颜色测试" : "Aura Color Test"}
        emoji="🌈"
        questions={auraQuestions}
        onCalculate={calculateAura}
        resultPath="/aura/result"
      />
    </div>
  );
}