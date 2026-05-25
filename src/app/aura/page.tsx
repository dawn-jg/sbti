"use client";
import { auraQuestions, auraTypes, calculateAura } from "@/data/aura";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function AuraTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
        <div className="max-w-4xl mx-auto px-4">
      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "气场颜色测试" : "Aura Color Test"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "7种气场颜色 · 感知你的能量频率" : "7 Aura Colors · Feel Your Energy"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 10题" : "📝 10 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 7种类型" : "🧭 7 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 4-6分钟" : "⏱ 4-6 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "气场颜色测试" : "Aura Color Test"}
        emoji="🌈"
        questions={auraQuestions}
        onCalculate={(answers) => auraTypes[calculateAura(answers)]?.code ?? "RED"}
        resultPath="/aura/result"
      />
    </div>
  );
}