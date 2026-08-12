"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSite } from "@/lib/site-context";

export default function Methodology() {
  const { t } = useSite();

  useEffect(() => {
    document.title = t("测试科学性说明 | 蜂巢测试", "Test Methodology | SBTI Test");
  }, [t]);

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-1">
        {t("测试科学性说明", "Test Methodology")}
      </h1>
      <p className="text-gray-400 dark:text-gray-500 mb-8">
        {t("我们依据什么设计这些测试", "What our tests are based on")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("我们的测试有科学依据吗？", "Are our tests scientifically grounded?")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {t(
            "有。蜂巢测试的每一个测试都基于公开的心理学理论与研究框架设计，而非随意编写。我们的目标是把学术研究中的经典人格理论，转化为普通人也能轻松完成的测评体验。",
            "Yes. Every test on SBTI Test is designed based on published psychological theories and research frameworks, not written arbitrarily. Our goal is to translate classic personality theories from academic research into assessments that ordinary people can easily complete."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("各测试的理论来源", "Theoretical Sources")}
        </h2>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed">
          <li>
            <strong className="text-gray-800 dark:text-gray-200">{t("MBTI 十六型人格：", "MBTI: ")}</strong>
            {t(
              "基于卡尔·荣格（Carl Jung）的《心理类型》（Psychological Types, 1921）及迈尔斯-布里格斯类型指标（MBTI®）的认知功能框架，参考 Myers-Briggs 基金会公开资料设计。",
              "Based on Carl Jung's Psychological Types (1921) and the cognitive functions framework of the Myers-Briggs Type Indicator, referencing Myers-Briggs Foundation public materials."
            )}
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">{t("九型人格：", "Enneagram: ")}</strong>
            {t(
              "参考现代九型人格理论（Naranjo、Riso & Hudson 等学者发展），围绕 9 种核心恐惧与渴望设计题目。",
              "Referencing modern Enneagram theory (developed by Naranjo, Riso & Hudson and others), with questions围绕 9 core fears and desires."
            )}
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">{t("依恋风格：", "Attachment: ")}</strong>
            {t(
              "基于约翰·鲍尔比（John Bowlby）的依恋理论（Attachment Theory）与玛丽·安斯沃思（Mary Ainsworth）的陌生情境实验，参考成人依恋量表（ECR）的维度划分。",
              "Based on John Bowlby's attachment theory and Mary Ainsworth's Strange Situation experiment, referencing the dimension structure of the Experiences in Close Relationships (ECR) scale."
            )}
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">{t("爱的五种语言：", "5 Love Languages: ")}</strong>
            {t(
              "基于 Gary Chapman 的《爱的五种语言》（The 5 Love Languages）框架。",
              "Based on Gary Chapman's The 5 Love Languages framework."
            )}
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">{t("暗黑三角：", "Dark Triad: ")}</strong>
            {t(
              "基于 Paulhus & Williams (2002) 提出的暗黑人格三特质（自恋、马基雅维利主义、精神病态）研究。",
              "Based on Paulhus & Williams (2002) research on the Dark Triad (narcissism, Machiavellianism, psychopathy)."
            )}
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">{t("宠物 SBTI / SBTI / 气场颜色 / AI 对决：", "Pet SBTI / SBTI / Aura / AI-vs: ")}</strong>
            {t(
              "这些属于趣味性人格分类工具，参考了人格心理学中的特质维度（如外向性、开放性、宜人性等 Big Five 维度），但更侧重娱乐与自我表达，不构成严谨的心理学量表。",
              "These are playful personality classification tools. They reference trait dimensions from personality psychology (e.g., Big Five dimensions like extraversion, openness, agreeableness), but focus more on entertainment and self-expression rather than rigorous psychometric scales."
            )}
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("结果应该怎么理解？", "How should you interpret results?")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {t(
            "所有测试结果都基于你的自我报告答案，描述的是倾向而非绝对属性。人格是复杂、动态的——同一个人的结果可能随心境、环境而变化。我们建议你把结果当作一面镜子：它反映你当下的自我感知，帮助你更有意识地理解自己的偏好与模式，而不是给你贴上固定的标签。",
            "All results are based on your self-reported answers and describe tendencies, not absolute attributes. Personality is complex and dynamic — the same person's results may vary with mood and context. We suggest treating results as a mirror: they reflect your current self-perception and help you understand your preferences and patterns more consciously, rather than labeling you permanently."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("免责声明", "Disclaimer")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {t(
            "蜂巢测试的所有测试仅供娱乐与自我参考，不构成临床诊断，也不能替代专业心理咨询、心理治疗或医学评估。如果你正在经历显著的心理困扰，或对自身心理状态有疑问，请务必寻求有资质的专业人士（如持证心理咨询师、精神科医生）的帮助。",
            "All tests on SBTI Test are for entertainment and self-reflection only. They do not constitute clinical diagnosis and cannot replace professional psychological counseling, therapy, or medical evaluation. If you are experiencing significant psychological distress or have concerns about your mental state, please seek help from qualified professionals (such as licensed counselors or psychiatrists)."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("隐私保护", "Privacy")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {t(
            "你的答案与测试结果只在你自己的浏览器中计算，不会上传到任何服务器。我们不需要注册、不收集答案数据，你可以放心作答。",
            "Your answers and results are computed only in your own browser and never uploaded to any server. No registration required, no answer data collected — feel free to take the tests."
          )}
        </p>
      </section>

      <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
        {t(
          "想了解更多？阅读我们的",
          "Want to learn more? Read our "
        )}
        <Link href="/about" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          {t("关于我们", "About Us")}
        </Link>
        {" "}{t("或", "or")}{" "}
        <Link href="/terms" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          {t("服务条款", "Terms")}
        </Link>
        。
      </div>
    </div>
  );
}
