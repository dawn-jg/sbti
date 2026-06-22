"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSite } from "@/lib/site-context";

export default function PrivacyPage() {
  const { t } = useSite();

  useEffect(() => {
    document.title = t("隐私政策 | 蜂巢测试", "Privacy Policy | SBTI Test");
  }, [t]);

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-1">
        {t("隐私政策", "Privacy Policy")}
      </h1>
      <p className="text-gray-400 dark:text-gray-500 mb-8">
        {t("最后更新: 2026-06", "Last updated: 2026-06")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("1. 引言", "1. Introduction")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            `蜂巢测试（sbtibee.com）（以下简称"我们"）尊重您的隐私。本隐私政策说明当您访问我们的网站时，我们如何收集、使用和保护您的信息。`,
            `SBTI Test (sbtibee.com) respects your privacy. This policy explains how we collect, use, and protect your information when you visit our site.`
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("2. 我们收集的信息", "2. Information We Collect")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
          <strong>{t("自动收集的信息：", "Automatically collected:")}</strong>
          {t(
            `当您访问我们的网站时，可能会自动收集您的IP地址、浏览器类型、操作系统、设备类型和访问页面等信息。这些信息用于分析和安全目的。`,
            `When you visit our site, we may automatically collect your IP address, browser type, OS, device type, and pages visited for analytics and security.`
          )}
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          <strong>Cookies：</strong>
          {t(
            `我们和第三方合作伙伴使用cookies来了解您如何使用我们的网站、展示相关广告和分析流量。`,
            `We and third-party partners use cookies to understand site usage, serve relevant ads, and analyze traffic.`
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("3. 第三方服务", "3. Third-Party Services")}
        </h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
          <li><strong>Google AdSense</strong>
            &nbsp;– {t(`使用cookies投放个性化广告。您可以在`, `Uses cookies to serve personalized ads. You can opt out at`)}
            &nbsp;<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer"
               className="text-indigo-600 dark:text-indigo-400 hover:underline">adssettings.google.com</a>.
          </li>
          <li><strong>51.la</strong>
            &nbsp;– {t(`中国分析平台，收集匿名访客数据。`, `Chinese analytics platform, collects anonymous visitor data.`)}
            &nbsp;<a href="https://www.51.la/privacy" target="_blank" rel="noopener noreferrer"
               className="text-indigo-600 dark:text-indigo-400 hover:underline">{t("隐私政策", "Privacy Policy")}</a>.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("4. 您的权利", "4. Your Rights")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            `根据您所在地区的法律，您可能有权访问、更正或删除您的个人数据，以及退出个性化广告。如需行使这些权利，请通过以下方式联系我们。`,
            `Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, and to opt out of personalized ads. Contact us to exercise these rights.`
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("5. 联系我们", "5. Contact Us")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            `如有关于本隐私政策的疑问，请联系我们或提交至 GitHub Issues。`,
            `For questions about this policy, contact us or submit to GitHub Issues.`
          )}
        </p>
      </section>
    </div>
  );
}
