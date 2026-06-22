"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSite } from "@/lib/site-context";

export default function About() {
  const { t } = useSite();

  useEffect(() => {
    document.title = t("关于我们 | 蜂巢测试", "About Us | SBTI Test");
  }, [t]);

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-1">
        {t("关于蜂巢测试", "About SBTI Test")}
      </h1>
      <p className="text-gray-400 dark:text-gray-500 mb-8">
        {t("发现更好的自己", "Discover a better you")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("我们是谁", "Who We Are")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {t(
            "蜂巢测试（sbtibee.com）是一个专注于人格心理学的大众化测试平台。我们聚合了",
            "SBTI Test (sbtibee.com) is a personality psychology platform. We aggregate"
          )}
          <strong className="text-gray-800 dark:text-gray-200">
            {t("MBTI、SBTI、九型人格、宠物SBTI、爱的五种语言、依恋风格、内在小孩、暗黑三角·光明三角、气场颜色", "MBTI, SBTI, Enneagram, Pet SBTI, Love Language, Attachment, Inner Child, Dark Triad, Aura")}
          </strong>
          {t("等多种热门心理学测试，全部免费开放，无需注册。", "— all free and open with no registration required.")}
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            "我们的使命是让心理学测试更易触达、更有趣。无论你是想深度了解自己的 MBTI 类型，还是想跟朋友一起测测谁是「拿捏者」，这里都有适合你的测试。",
            "Our mission is to make psychological tests more accessible and fun. Whether you want to deeply understand your MBTI type or just have fun with friends, there's a test for you here."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("为什么叫蜂巢", "Why 'SBTI' and 'Hive'")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            "蜂巢的六边形结构既吻合 MBTI 16 种人格相互关联的拓扑关系，也象征每个人都是独特「蜂格」的一部分。整个平台的色调与视觉系统也围绕暖光灯下的蜂巢意象展开。",
            "The hexagonal honeycomb structure mirrors the interconnected topology of personality types, symbolizing that everyone is a unique 'honeycell' within a larger framework. The visual system centers around warm-toned hive imagery."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("我们的测试", "Our Tests")}
        </h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 leading-relaxed space-y-1.5">
          <li><Link href="/mbti" className="text-indigo-600 dark:text-indigo-400 hover:underline">MBTI</Link>
            &nbsp;– {t("32题经典版本，4级测评路径 + 16类型图鉴", "32 questions, 4-tier path + 16-type gallery")}</li>
          <li><Link href="/sbti" className="text-indigo-600 dark:text-indigo-400 hover:underline">SBTI</Link>
            &nbsp;– {t("30题15维测评，热门抽象人格测试", "30 questions, 15 dimensions")}</li>
          <li><Link href="/enneagram" className="text-indigo-600 dark:text-indigo-400 hover:underline">{t("九型人格", "Enneagram")}</Link>
            &nbsp;– {t("18题，探索你的核心恐惧与动机", "18 questions, explore core fears & motivations")}</li>
          <li><Link href="/pet-sbti" className="text-indigo-600 dark:text-indigo-400 hover:underline">{t("宠物 SBTI", "Pet SBTI")}</Link>
            &nbsp;– {t("给毛孩子做的8题人格测试", "8-question personality test for your furry friend")}</li>
          <li><Link href="/love-language" className="text-indigo-600 dark:text-indigo-400 hover:underline">{t("爱的五种语言", "Love Languages")}</Link>
            &nbsp;– {t("Gary Chapman 经典理论", "Gary Chapman's classic theory")}</li>
          <li><Link href="/attachment" className="text-indigo-600 dark:text-indigo-400 hover:underline">{t("依恋风格", "Attachment Style")}</Link>
            &nbsp;– {t("安全型/焦虑型/回避型/混乱型", "Secure/Anxious/Avoidant/Fearful")}</li>
          <li><Link href="/inner-child" className="text-indigo-600 dark:text-indigo-400 hover:underline">{t("内在小孩", "Inner Child")}</Link>
            &nbsp;– {t("童年情绪印记探索", "Childhood emotional imprint")}</li>
          <li><Link href="/dark-triad" className="text-indigo-600 dark:text-indigo-400 hover:underline">{t("暗黑三角·光明三角", "Dark Triad · Light Triad")}</Link>
            &nbsp;– {t("人性的阴暗与光明面", "The shadow and light of personality")}</li>
          <li><Link href="/aura" className="text-indigo-600 dark:text-indigo-400 hover:underline">{t("气场颜色", "Aura Color")}</Link>
            &nbsp;– {t("了解你的能量类型与脉轮", "Discover your energy type & chakra")}</li>
          <li><Link href="/ai-vs" className="text-indigo-600 dark:text-indigo-400 hover:underline">{t("AI 对决", "AI vs Human")}</Link>
            &nbsp;– {t("测测你的思维更像人类还是AI", "Is your thinking more human or AI?")}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("测试的科学基础", "Scientific Foundation")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {t(
            "蜂巢测试的每项测试都基于成熟的心理学理论体系。MBTI 源自荣格（Carl Jung）的《心理类型》理论，经 Katharine Cook Briggs 与 Isabel Briggs Myers 数十年研究发展成形，是全球应用最广泛的人格分类工具之一。",
            "Every test on SBTI Test is rooted in established psychological frameworks. MBTI originates from Carl Jung's Psychological Types, developed over decades by Katharine Cook Briggs and Isabel Briggs Myers."
          )}
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {t(
            "依恋风格测试基于 Bowlby 和 Ainsworth 的依恋理论——过去四十年被数千篇学术论文验证；九型人格拥有完整的动机结构模型；爱的五种语言出自 Gary Chapman 博士的临床实践。我们不是凭空编题，而是将这些学界公认的理论框架转化为简单、易懂的互动体验。",
            "Attachment tests are based on Bowlby & Ainsworth's attachment theory, validated by thousands of papers. The Enneagram has a complete motivational model. Love Languages come from Dr. Gary Chapman's clinical practice. We transform established frameworks into simple, engaging interactive experiences."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("隐私保护，无需顾虑", "Privacy First")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {t("你的隐私是我们的底线。蜂巢测试", "Your privacy is our底线. SBTI Test")}
          <strong className="text-gray-800 dark:text-gray-200">
            {t("不保存任何个人数据", "does not store any personal data")}
          </strong>
          {t("。", ".")}
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {t(
            "所有测试结果均在浏览器本地（前端）计算完成，答案不会上传至任何服务器。你的每一次测试都无需注册、无需登录——测完即走，不留痕迹。",
            "All results are computed locally in your browser. No answers are uploaded to any server. No registration, no login — test and go, leaving no trace."
          )}
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            "需要保存结果？请自行截图或复制结果页面链接。我们没有你的数据，也不会要。",
            "Want to save your results? Screenshot or copy the result link. We don't have your data, and we don't want it."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("我们的愿景", "Our Vision")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {t(
            "我们相信心理学知识不该被锁在教科书和咨询室里。蜂巢测试想做的事情很简单：",
            "We believe psychology shouldn't be locked in textbooks and clinics. Our goal is simple:"
          )}
          <strong className="text-gray-800 dark:text-gray-200">
            {t("让心理学测试像玩游戏一样触手可及", "make psychological tests as accessible as playing a game")}
          </strong>
          {t("。", ".")}
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {t(
            "不需要注册、不需要付费、不需要专业知识——打开即测，几分钟后你就能对自己或身边人多一个理解的角度。我们持续打磨每套测试的品质，同时保持零门槛的体验。",
            "No registration, no payment, no expertise needed — open and test. In minutes you'll gain a new perspective on yourself or others. We keep everything polished yet zero-barrier."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("免责声明", "Disclaimer")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            "本平台的所有测试仅供娱乐和自我探索之用，不构成任何心理诊断或医疗建议。如需专业心理帮助，请咨询持牌心理咨询师或医生。",
            "All tests on this platform are for entertainment and self-exploration only. They do not constitute psychological diagnosis or medical advice. For professional help, consult a licensed mental health professional."
          )}
        </p>
      </section>
    </div>
  );
}
