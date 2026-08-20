"use client";
import { innerChildQuestions, innerChildTypes, calculateInnerChild } from "@/data/inner-child";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";
import TestDisclaimer from "@/components/TestDisclaimer";
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
            "name": "内在小孩测试",
            "description": "免费内在小孩测试，10题测出你的内在小孩类型。",
            "url": "https://sbtibee.com/inner-child",
            "about": { "@type": "Thing", "name": "Inner Child Archetypes" }
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
                  "name": "内在小孩是什么？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "内在小孩是童年时期遗留下来的情感自我，保留着你小时候感受世界的方式，影响成年后的情绪反应。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "内在小孩有哪几种？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "常见的有5种：受伤小孩、顺从小孩、叛逆小孩、魔法小孩和孤儿小孩。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "测试免费吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "完全免费，无需注册，10题约3分钟，附疗愈指南。"
                  }
                }
            ]
          })
        }}
      />

      
      

      

      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "内在小孩测试" : "Inner Child"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "5种内在小孩 · 童年情绪疗愈" : "5 Inner Child Types · Childhood Healing"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 10题" : "📝 10 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 5种类型" : "🧭 5 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 4-6分钟" : "⏱ 4-6 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "内在小孩测试" : "Inner Child Test"}
        emoji="🧸"
        questions={innerChildQuestions}
        onCalculate={(answers) => { const typeKeys = Object.keys(innerChildTypes); return typeKeys[calculateInnerChild(answers)] ?? "WOUNDED"; }}
        resultPath="/inner-child/result"
      />
      <TestDisclaimer
        intro="本测试共 10 题，约 2 分钟完成。测出你的内在小孩类型（如被忽视的小孩、完美主义的小孩等），附疗愈方向与自我关怀建议。"
        introEn="This 10-question test takes about 2 minutes. Identify your inner child archetype with healing directions and self-care suggestions."
        theory="内在小孩测试借鉴了荣格心理学的内在小孩概念以及心理学中常见的童年创伤与需求理论，用于探索你内心未被满足的情感需求。"
        theoryEn="The Inner Child test draws on Jungian psychology's inner child concept and common childhood needs theories to explore unmet emotional needs."
      />
    <SeoContentSection test="inner-child" />
    </div>
  );
}