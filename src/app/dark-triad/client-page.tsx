"use client";
import { darkTriadQuestions, darkTriadTypes, calculateDarkTriad } from "@/data/dark-triad";
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
            "name": "暗黑三角测试",
            "description": "免费暗黑三角测试，15题测出你的暗黑人格特质。",
            "url": "https://sbtibee.com/dark-triad",
            "about": { "@type": "Thing", "name": "Dark Triad Personality Traits" }
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
                  "name": "暗黑三角是什么？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "暗黑三角是心理学中描述3种负面人格特质的组合：自恋、马基雅维利主义和精神病态。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "测出暗黑特质代表我是坏人吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "不一定。每个人都有不同程度的暗黑特质，重要的是觉察而非评判。本测试仅用于自我了解。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "测试免费吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "完全免费，无需注册，15题约5分钟，附专业解读。"
                  }
                }
            ]
          })
        }}
      />

      
      

      

      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "暗黑三角·光明三角" : "Dark Triad · Light Triad"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "6种人格面向 · 探索人性的阴暗与光明面" : "6 Facets · Dark & Light Personality"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 15题" : "📝 15 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 6种类型" : "🧭 6 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 6-8分钟" : "⏱ 6-8 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "暗黑三角·光明三角" : "Dark Triad · Light Triad"}
        emoji="⚖️"
        questions={darkTriadQuestions}
        onCalculate={(answers) => darkTriadTypes[calculateDarkTriad(answers)]?.code ?? "FAITH"}
        resultPath="/dark-triad/result"
      />
    <SeoContentSection test="dark-triad" />
    </div>
  );
}