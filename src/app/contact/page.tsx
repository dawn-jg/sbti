import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "联系我们",
  description: "蜂巢测试(sbtibee.com)联系渠道：提交 GitHub Issue 或发送邮件到 hello@sbtibee.com。",
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">联系我们</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        有问题、建议或发现了 Bug？欢迎通过以下渠道找到我们。
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">提交 Issue</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          我们使用 GitHub Issues 来追踪 bug 报告和功能建议。
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
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">邮件反馈</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          偏好更正式的反馈方式？直接写邮件给我们。
        </p>
        <a
          href="mailto:hello@sbtibee.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 text-white rounded-xl font-medium transition-colors"
        >
          hello@sbtibee.com
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">常见问题</h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">测试需要注册吗？</h3>
            <p>完全不需要。所有测试即开即测，无需注册、无需登录。</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">测试结果准确吗？</h3>
            <p>本平台的所有测试仅供娱乐和自我探索，不构成心理诊断。</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">测试结果会保存吗？</h3>
            <p>不会。我们不保存任何测试结果。请自行截图或复制结果链接。</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">测试结果怎么分享？</h3>
            <p>完成测试后可以截图或直接分享结果页面链接。由于我们不保存任何数据，建议测完后立即截图保存。</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">网站会开发更多测试吗？</h3>
            <p>会。蜂巢测试持续扩展测试种类，欢迎通过 Issue 或邮件提交你感兴趣的测试题材。</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">如何举报不当内容？</h3>
            <p>如发现任何不当或冒犯性内容，请通过邮件或 GitHub Issue 向我们举报，我们会尽快处理。</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">响应时间</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          GitHub Issues 和邮件通常在 <strong className="text-gray-800 dark:text-gray-200">24–48 小时</strong>内回复。周末和节假日的响应可能会稍有延迟，感谢理解。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">其他渠道</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          你也可以通过 GitHub 上的项目讨论区与我们交流。
        </p>
      </section>
    </div>
  );
}
