import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于我们",
  description: "蜂巢测试（sbtibee.com）——免费在线人格测试平台。我们提供MBTI、SBTI、九型人格等10+专业人格测试，帮你更了解自己和他人。",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-1">关于蜂巢测试</h1>
      <p className="text-gray-400 dark:text-gray-500 mb-8">发现更好的自己</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">我们是谁</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          蜂巢测试（sbtibee.com）是一个专注于人格心理学的大众化测试平台。我们聚合了<strong className="text-gray-800 dark:text-gray-200">MBTI、SBTI、九型人格、宠物SBTI、爱的五种语言、依恋风格、内在小孩、暗黑三角·光明三角、气场颜色</strong>等多种热门心理学测试，全部免费开放，无需注册。
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          我们的使命是让心理学测试更易触达、更有趣。无论你是想深度了解自己的 MBTI 类型，还是想跟朋友一起测测谁是「拿捏者」，这里都有适合你的测试。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">为什么叫蜂巢</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          蜂巢的六边形结构既吻合 MBTI 16 种人格相互关联的拓扑关系，也象征每个人都是独特「蜂格」的一部分。整个平台的色调与视觉系统也围绕暖光灯下的蜂巢意象展开。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">我们的测试</h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 leading-relaxed space-y-1.5">
          <li><Link href="/mbti" className="text-indigo-600 dark:text-indigo-400 hover:underline">MBTI 十六型人格</Link> – 32题经典版本，4级测评路径 + 16类型图鉴</li>
          <li><Link href="/sbti" className="text-indigo-600 dark:text-indigo-400 hover:underline">SBTI 抽象人格</Link> – 30题15维测评，今年最火的网络人格测试</li>
          <li><Link href="/enneagram" className="text-indigo-600 dark:text-indigo-400 hover:underline">九型人格</Link> – 18题，探索你的核心恐惧与动机</li>
          <li><Link href="/pet-sbti" className="text-indigo-600 dark:text-indigo-400 hover:underline">宠物 SBTI</Link> – 给毛孩子做的8题人格测试</li>
          <li><Link href="/love-language" className="text-indigo-600 dark:text-indigo-400 hover:underline">爱的五种语言</Link> – Gary Chapman 经典理论</li>
          <li><Link href="/attachment" className="text-indigo-600 dark:text-indigo-400 hover:underline">依恋风格</Link> – 安全型/焦虑型/回避型/混乱型</li>
          <li><Link href="/inner-child" className="text-indigo-600 dark:text-indigo-400 hover:underline">内在小孩</Link> – 童年情绪印记探索</li>
          <li><Link href="/dark-triad" className="text-indigo-600 dark:text-indigo-400 hover:underline">暗黑三角·光明三角</Link> – 人性的阴暗与光明面</li>
          <li><Link href="/aura" className="text-indigo-600 dark:text-indigo-400 hover:underline">气场颜色</Link> – 了解你的能量类型与脉轮</li>
          <li><Link href="/ai-vs" className="text-indigo-600 dark:text-indigo-400 hover:underline">AI 对决</Link> – 测测你的思维更像人类还是AI</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">测试的科学基础</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          蜂巢测试的每项测试都基于成熟的心理学理论体系。MBTI 源自荣格（Carl Jung）的《心理类型》理论，
          经 Katharine Cook Briggs 与 Isabel Briggs Myers 数十年研究发展成形，是全球应用最广泛的人格分类工具之一。
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          依恋风格测试基于 Bowlby 和 Ainsworth 的依恋理论——过去四十年被数千篇学术论文验证；
          九型人格拥有完整的动机结构模型；爱的五种语言出自 Gary Chapman 博士的临床实践。
          我们不是凭空编题，而是将这些学界公认的理论框架转化为简单、易懂的互动体验。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">隐私保护，无需顾虑</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          你的隐私是我们的底线。蜂巢测试<strong className="text-gray-800 dark:text-gray-200">不保存任何个人数据</strong>。
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          所有测试结果均在浏览器本地（前端）计算完成，答案不会上传至任何服务器。
          你的每一次测试都无需注册、无需登录——测完即走，不留痕迹。
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          需要保存结果？请自行截图或复制结果页面链接。我们没有你的数据，也不会要。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">我们的愿景</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          我们相信心理学知识不该被锁在教科书和咨询室里。蜂巢测试想做的事情很简单：<strong className="text-gray-800 dark:text-gray-200">让心理学测试像玩游戏一样触手可及</strong>。
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          不需要注册、不需要付费、不需要专业知识——打开即测，几分钟后你就能对自己或身边人多一个理解的角度。
          我们持续打磨每套测试的品质，同时保持零门槛的体验。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">免责声明</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          本平台的所有测试仅供娱乐和自我探索之用，不构成任何心理诊断或医疗建议。如需专业心理帮助，请咨询持牌心理咨询师或医生。
        </p>
      </section>
    </div>
  );
}
