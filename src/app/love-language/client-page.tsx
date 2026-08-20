"use client";
import { loveLanguageQuestions, calculateLoveLanguage } from "@/data/love-language";
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
            "name": "爱的五种语言测试",
            "description": "免费爱的五种语言测试，10题测出你的主要爱语。",
            "url": "https://sbtibee.com/love-language",
            "about": { "@type": "Thing", "name": "Five Love Languages" }
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
                  "name": "爱的五种语言是什么？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gary Chapman提出的5种表达爱的方式：肯定的言词、精心的时刻、接受礼物、服务的行动、身体的接触。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "为什么要测爱的语言？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "了解自己和伴侣的主要爱语，能减少关系中的误解与错位，让爱真正被接收到。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "测试免费吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "完全免费，无需注册，10题约3分钟，测完即出结果。"
                  }
                }
            ]
          })
        }}
      />

      
      

      

      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "爱的五种语言" : "Love Language"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "5种爱语 · 了解你表达和接收爱的方式" : "5 Love Languages · Express & Receive Love"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 10题" : "📝 10 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 5种类型" : "🧭 5 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 4-6分钟" : "⏱ 4-6 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "爱的五种语言" : "Love Language"}
        emoji="💕"
        questions={loveLanguageQuestions}
        onCalculate={calculateLoveLanguage}
        resultPath="/love-language/result"
      />
      <TestDisclaimer
        intro="本测试共 15 题，约 3 分钟完成。测出你的主要爱的语言（肯定的话语、优质时间、接受礼物、服务的行动、身体接触），附关系沟通建议。"
        introEn="This 15-question test takes about 3 minutes. Identify your primary love language (words of affirmation, quality time, gifts, acts of service, physical touch) with relationship tips."
        theory="爱的五种语言测试基于 Gary Chapman 的畅销书《爱的五种语言》（The 5 Love Languages），框架描述人们表达和接收爱的五种不同方式。"
        theoryEn="The 5 Love Languages test is based on Gary Chapman's bestselling book The 5 Love Languages, describing five ways people give and receive love."
      />
    <SeoContentSection test="love-language" />
    </div>
  );
}