"use client";
import { attachmentQuestions, calculateAttachment } from "@/data/attachment";
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
            "name": "依恋风格测试",
            "description": "免费依恋风格测试，12题测出你的依恋类型。",
            "url": "https://sbtibee.com/attachment",
            "about": { "@type": "Thing", "name": "Adult Attachment Styles" }
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
                  "name": "依恋风格有哪几种？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "成人依恋主要分为4种：安全型、焦虑型、回避型和混乱型，源自童年与主要照顾者的互动模式。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "依恋风格可以改变吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "可以。了解自己的依恋模式是改变的第一步，通过安全的关系体验和自我觉察，依恋风格可以趋于安全。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "测试免费吗？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "完全免费，无需注册，12题约4分钟，附关系模式解读与改善建议。"
                  }
                }
            ]
          })
        }}
      />

      
      

      

      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "依恋风格测试" : "Attachment Style"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "4种依恋型 · 安全型/焦虑型/回避型/混乱型" : "4 Attachment Styles · Secure/Anxious/Avoidant"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 12题" : "📝 12 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "🧭 4种类型" : "🧭 4 Types"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 5-7分钟" : "⏱ 5-7 min"}</span>
        </div>
      </div>
      <QuestionFlow
        title={isZh ? "依恋风格测试" : "Attachment Style"}
        emoji="💞"
        questions={attachmentQuestions}
        onCalculate={calculateAttachment}
        resultPath="/attachment/result"
      />
      <TestDisclaimer
        intro="本测试共 12 题，约 3 分钟完成。测出你的依恋风格（安全型、焦虑型、回避型、恐惧型），附亲密关系中的行为模式与改善建议。"
        introEn="This 12-question test takes about 3 minutes. Identify your attachment style (secure, anxious, avoidant, fearful) with relationship patterns and improvement tips."
        theory="依恋风格测试基于约翰·鲍尔比（John Bowlby）的依恋理论与玛丽·安斯沃思（Mary Ainsworth）的陌生情境实验，参考成人依恋量表（ECR）的维度划分设计。"
        theoryEn="The attachment style test is based on John Bowlby's attachment theory and Mary Ainsworth's Strange Situation experiment, referencing the ECR adult attachment scale dimensions."
      />
    <SeoContentSection test="attachment" />
    </div>
  );
}