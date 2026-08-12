"use client";
import { enneagramQuestions, calculateEnneagram } from "@/data/enneagram";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";
import SeoContentSection from "@/components/SeoContentSection";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

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
        {/* ── Type Deep-Dive Articles (topic cluster) ─────────────────── */}
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "了解你的类型" : "Explore Your Type"}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
          {isZh
            ? "深度解读九型人格中最受欢迎的类型，理解你的核心动机"
            : "In-depth guides to the most popular enneagram types"}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(() => {
          const guides = blogPosts.filter((p) =>
            ["enneagram-type1-guide", "enneagram-type4-guide", "enneagram-type9-guide"].includes(p.slug)
          );
          return guides.map((g) => (
            <Link
              key={g.slug}
              href={`/blog/${g.slug}`}
              className="group block p-5 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg transition-all"
            >
              <span className="text-3xl">{g.emoji}</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mt-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {g.titleZh}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-3">{g.excerptZh}</p>
              <span className="inline-block mt-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {isZh ? "阅读全文 →" : "Read more →"}
              </span>
            </Link>
          ));
        })()}
      </div>
    </section>

    <SeoContentSection test="enneagram" />
    </div>
  );
}