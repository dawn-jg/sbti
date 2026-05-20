"use client";
import { petSbtiQuestions, calculatePetSBTI } from "@/data/pet-sbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function PetSbtiTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
        <div className="max-w-4xl mx-auto px-4">
      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "宠物 SBTI" : "Pet SBTI"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "12种动物人格 · 看看你是哪种萌宠" : "12 Animal Types · Find Your Spirit Pet"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 8题" : "📝 8 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 12种类型" : "🧭 12 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 3-5分钟" : "⏱ 3-5 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "宠物SBTI" : "Pet SBTI"}
        emoji="🐾"
        questions={petSbtiQuestions}
        onCalculate={calculatePetSBTI}
        resultPath="/pet-sbti/result"
      />
    </div>
  );
}