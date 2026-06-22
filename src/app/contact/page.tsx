"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSite } from "@/lib/site-context";

export default function Contact() {
  const { t } = useSite();

  useEffect(() => {
    document.title = t("联系我们 | 蜂巢测试", "Contact | SBTI Test");
  }, [t]);

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
        {t("联系我们", "Contact Us")}
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        {t("有问题、建议或发现了 Bug？欢迎通过以下渠道找到我们。", "Questions, suggestions, or found a bug? Here's how to reach us.")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("提交 Issue", "Submit an Issue")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          {t("我们使用 GitHub Issues 来追踪 bug 报告和功能建议。", "We use GitHub Issues to track bug reports and feature requests.")}
        </p>
        <a
          href="https://github.com/dawn-jg/sbti/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 text-white rounded-xl font-medium transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub Issues
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("邮件反馈", "Email")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          {t("偏好更正式的反馈方式？直接写邮件给我们。", "Prefer a more formal channel? Send us an email.")}
        </p>
        <a
          href="mailto:hello@sbtibee.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 text-white rounded-xl font-medium transition-colors"
        >
          hello@sbtibee.com
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("常见问题", "FAQ")}
        </h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              {t("测试需要注册吗？", "Do I need to register?")}
            </h3>
            <p>{t("完全不需要。所有测试即开即测，无需注册、无需登录。", "Not at all. All tests are ready to go, no login required.")}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              {t("测试结果准确吗？", "Are the results accurate?")}
            </h3>
            <p>{t("本平台的所有测试仅供娱乐和自我探索，不构成心理诊断。", "All tests are for entertainment and self-exploration only.")}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              {t("测试结果会保存吗？", "Are results saved?")}
            </h3>
            <p>{t("不会。我们不保存任何测试结果。请自行截图或复制结果链接。", "No. We don't store any results. Please screenshot or copy the link.")}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              {t("测试结果怎么分享？", "How do I share results?")}
            </h3>
            <p>{t("完成测试后可以截图或直接分享结果页面链接。由于我们不保存任何数据，建议测完后立即截图保存。", "Screenshot or share the result page URL. Since we don't store data, capture it right after testing.")}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              {t("网站会开发更多测试吗？", "More tests coming?")}
            </h3>
            <p>{t("会。蜂巢测试持续扩展测试种类，欢迎通过 Issue 或邮件提交你感兴趣的测试题材。", "Yes. We keep adding new tests. Suggest topics via Issue or email.")}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              {t("如何举报不当内容？", "How to report inappropriate content?")}
            </h3>
            <p>{t("如发现任何不当或冒犯性内容，请通过邮件或 GitHub Issue 向我们举报，我们会尽快处理。", "Report inappropriate or offensive content via email or GitHub Issue.")}</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("响应时间", "Response Time")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t("GitHub Issues 和邮件通常在", "GitHub Issues and emails are typically replied within")}
          &nbsp;<strong className="text-gray-800 dark:text-gray-200">{t("24–48 小时", "24–48 hours")}</strong>
          {t("内回复。周末和节假日的响应可能会稍有延迟，感谢理解。", ". Responses may be slightly delayed on weekends and holidays.")}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("其他渠道", "Other Channels")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t("你也可以通过 GitHub 上的项目讨论区与我们交流。", "You can also reach us via GitHub Discussions.")}
        </p>
      </section>
    </div>
  );
}
