"use client";
import { auraQuestions, auraTypes, calculateAura } from "@/data/aura";
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
            "name": "气场颜色测试",
            "description": "免费气场颜色测试，10题测出你的气场颜色。",
            "url": "https://sbtibee.com/aura",
            "about": { "@type": "Thing", "name": "Aura Colors" }
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
                  "name": "气场颜色是什么？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "气场颜色是灵性文化中描述个人能量频率的7种颜色（红橙黄绿蓝靛紫），每种对应不同的性格特质。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "气场颜色会变吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "气场颜色反映当下的能量状态，会随情绪、生活阶段而变化，测试反映你当前的主导气场。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "测试免费吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "完全免费，无需注册，10题约3分钟，附能量类型与脉轮解读。"
                  }
                }
            ]
          })
        }}
      />

      
      

      

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
    <SeoContentSection test="aura" />
    </div>
  );
}