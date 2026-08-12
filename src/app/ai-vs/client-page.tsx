"use client";
import { aiVsQuestions, aiVsResultRanges, calculateAIVs } from "@/data/ai-vs";
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
            "name": "AI能力对比测试",
            "description": "免费AI能力对比测试，10题测出你的人机思维指数。",
            "url": "https://sbtibee.com/ai-vs",
            "about": { "@type": "Thing", "name": "Human vs AI Thinking" }
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
                  "name": "AI能力对比测试是什么？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "通过10道思维偏好题，测出你的思维更接近人类直觉派还是AI算法派，得分0-100。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "测试结果代表什么？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "得分反映你的思维风格偏向：接近人类直觉还是接近AI逻辑。纯趣味性测试，仅供参考。"
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
          {isZh ? "AI 能力对比" : "AI vs Human Test"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "5种思维类型 · 测试你的人机思维指数" : "5 Thinking Types · Human or AI?"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 10题" : "📝 10 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 5种类型" : "🧭 5 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 4-6分钟" : "⏱ 4-6 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "AI能力对比" : "AI vs Human"}
        emoji="🤖"
        questions={aiVsQuestions}
        onCalculate={(answers) => {
          const score = calculateAIVs(answers);
          if (typeof window !== 'undefined') localStorage.setItem('ai-vs-score', String(score));
          const range = aiVsResultRanges.find(r => score >= r.min && score <= r.max) || aiVsResultRanges[0];
          return range.label;
        }}
        resultPath="/ai-vs/result"
      />
    <SeoContentSection test="ai-vs" />
    </div>
  );
}