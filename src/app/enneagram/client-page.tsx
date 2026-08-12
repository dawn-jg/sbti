"use client";
import { enneagramQuestions, calculateEnneagram } from "@/data/enneagram";
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
            "name": "九型人格测试",
            "description": "免费九型人格在线测试，18题测出你的9型性格类型。",
            "url": "https://sbtibee.com/enneagram",
            "about": { "@type": "Thing", "name": "Enneagram Personality Types" }
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
                  "name": "九型人格测试准吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "九型人格是描述9种基本人格类型的系统，每种类型围绕核心恐惧与渴望展开。它提供自我认知框架，测试结果仅供参考。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "九型人格测试免费吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "蜂巢测试的九型人格测试完全免费，无需注册，18题约5-8分钟，测完即出结果。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "九型人格有多少种类型？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "九型人格共有9种基本类型，每种类型还有侧翼（Wing）和压力/放松状态下的动态流动。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "九型人格和MBTI有什么区别？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MBTI描述认知偏好（脑回路），九型人格描述情感动机（内心驱动）。两者结合可获得更立体的自我认知。"
                  }
                }
            ]
          })
        }}
      />

      
      

      

      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "九型人格测试" : "Enneagram Test"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "18题 · 9种性格类型 · 深入了解你的核心动机" : "18 Questions · 9 Types · Core Motivation"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 18题" : "📝 18 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 9种类型" : "🧭 9 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 5-8分钟" : "⏱ 5-8 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "九型人格测试" : "Enneagram Test"}
        emoji="🔮"
        questions={enneagramQuestions}
        onCalculate={calculateEnneagram}
        resultPath="/enneagram/result"
      />
    <SeoContentSection test="enneagram" />
    </div>
  );
}