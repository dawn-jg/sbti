"use client";
import { attachmentQuestions, calculateAttachment } from "@/data/attachment";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function AttachmentTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="py-8 text-center">
        <div className="text-4xl mb-2">💞</div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          {isZh ? "依恋风格测试" : "Attachment Style Test"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          {isZh ? "12题 · 4种依恋型 · 探索你的亲密关系模式" : "12 Questions · 4 Attachment Types · Explore Your Relationship Patterns"}
        </p>
      </div>
      <QuestionFlow
        title={isZh ? "依恋风格测试" : "Attachment Style"}
        emoji="💞"
        questions={attachmentQuestions}
        onCalculate={calculateAttachment}
        resultPath="/attachment/result"
      />
    </div>
  );
}