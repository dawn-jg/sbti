"use client";
import { petSbtiQuestions, petSbtiTypes, calculatePetSBTI } from "@/data/pet-sbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";
import SeoContentSection from "@/components/SeoContentSection";

export default function ClientPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
        <div className="max-w-4xl mx-auto px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            "name": "宠物SBTI测试",
            "description": "免费宠物SBTI测试，8题测出你家宠物的12种动物人格。",
            "url": "https://sbtibee.com/pet-sbti",
            "about": { "@type": "Thing", "name": "Pet Animal Personality Types" }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                  "@type": "Question",
                  "name": "宠物也有性格吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "动物行为学研究表明狗、猫等宠物拥有稳定的人格差异，包括外向性、神经质、宜人性等维度。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "宠物SBTI测试怎么用？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "根据你家宠物的日常行为回答8道题，约3分钟即可测出宠物的动物人格类型。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "宠物测试免费吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "完全免费，无需注册。结果附完整解读与饲养建议。"
                  }
                }
            ]
          })
        }}
      />

      
      

      

      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "宠物 SBTI" : "Pet SBTI"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "12种动物人格 · 测测你家毛孩子是哪款" : "12 Animal Types · Find Your Pet's Personality"}
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
        onCalculate={(answers) => petSbtiTypes[calculatePetSBTI(answers)]?.code ?? "CAT"}
        resultPath="/pet-sbti/result"
      />
    <SeoContentSection test="pet-sbti" />
    </div>
  );
}