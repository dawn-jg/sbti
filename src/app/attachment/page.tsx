"use client"
;
import { attachmentQuestions, calculateAttachment } from "@/data/attachment";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

export default function AttachmentTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
        <div className="max-w-4xl mx-auto px-4">
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
    </div>
  );
}