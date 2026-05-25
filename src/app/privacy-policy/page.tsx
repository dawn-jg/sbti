import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策 | Privacy Policy",
  description: "蜂巢测试隐私政策 – 说明我们如何收集、使用和保护您的信息。",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-1">隐私政策</h1>
      <p className="text-gray-400 dark:text-gray-500 mb-8">
        最后更新: {new Date().toISOString().slice(0, 10)}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">1. 引言</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          蜂巢测试（sbtibee.com）（以下简称"我们"）尊重您的隐私。本隐私政策说明当您访问我们的网站时，
          我们如何收集、使用和保护您的信息。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">2. 我们收集的信息</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
          <strong>自动收集的信息：</strong>当您访问我们的网站时，可能会自动收集您的IP地址、浏览器类型、
          操作系统、设备类型和访问页面等信息。这些信息用于分析和安全目的。
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          <strong>Cookies：</strong>我们和第三方合作伙伴使用cookies来了解您如何使用我们的网站、
          展示相关广告和分析流量。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">3. 第三方服务</h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
          <li><strong>Google AdSense</strong> – 使用cookies投放个性化广告。您可以在
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer"
               className="text-indigo-600 dark:text-indigo-400 hover:underline"> adssettings.google.com</a>
            退出个性化广告。</li>
          <li><strong>51.la 统计</strong> – 中国分析平台，收集匿名访客数据。
            <a href="https://www.51.la/privacy" target="_blank" rel="noopener noreferrer"
               className="text-indigo-600 dark:text-indigo-400 hover:underline"> 隐私政策</a>。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">4. 您的权利</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          根据您所在地区的法律，您可能有权访问、更正或删除您的个人数据，以及退出个性化广告。
          如需行使这些权利，请通过以下方式联系我们。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">5. 联系我们</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          如有关于本隐私政策的疑问，请联系我们或提交至 GitHub Issues。
        </p>
      </section>
    </div>
  );
}
