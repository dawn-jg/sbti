"use client";
import { sbtiQuestions, calculateSBTI } from "@/data/sbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";
import TestDisclaimer from "@/components/TestDisclaimer";

export default function SbtiTestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="pt-12 pb-4 text-center">
        <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100">
          {isZh ? "SBTI 人格测试" : "SBTI Personality Test"}
        </h1>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
          {isZh ? "选最像你的答案，测完就知道你是哪种抽象人格" : "Pick the answers that feel most like you"}
        </p>
        <div className="mt-3 flex gap-2 justify-center text-xs font-bold text-gray-400">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "📝 32题" : "📝 32 Questions"}</span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{isZh ? "⏱ 5-8分钟" : "⏱ 5-8 min"}</span>
        </div>
      </div>

      <QuestionFlow
        title={isZh ? "SBTI 测试" : "SBTI Test"}
        emoji="🎭"
        questions={sbtiQuestions}
        onCalculate={calculateSBTI}
        resultPath="/sbti/result"
      />
      <TestDisclaimer
        intro="本测试共 30 题，约 5 分钟完成。测出你属于 27 种互联网人格中的哪一种（吗喽、卷王、Dior-s……），附完整的性格解读与「同类」推荐。"
        introEn="This 30-question test takes about 5 minutes. Find out which of 27 internet personalities you are, with full descriptions and similar-type recommendations."
        theory="SBTI 是结合互联网文化的人格分类体系，参考了大五人格（Big Five）中的外向性、开放性、宜人性等特质维度，但以更轻松、更「抽象」的方式呈现 27 种互联网人格。"
        theoryEn="SBTI is an internet-culture personality system that references Big Five trait dimensions (extraversion, openness, agreeableness) but presents 27 playful internet personalities in a more casual way."
      />
    </div>
  );
}
