"use client";
import { petSbtiQuestions, calculatePetSBTI } from "@/data/pet-sbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function PetSbtiTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">🐾</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "宠物 SBTI" : "Pet SBTI"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh ? "8题 · 12种动物人格 · 看看你是哪种萌宠" : "8 Questions · 12 Animal Types · See Which Pet You Are"}
        </p>
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