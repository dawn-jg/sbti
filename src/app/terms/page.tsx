"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSite } from "@/lib/site-context";

export default function Terms() {
  const { t } = useSite();

  useEffect(() => {
    document.title = t("服务条款 | 蜂巢测试", "Terms of Service | SBTI Test");
  }, [t]);

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-1">
        {t("服务条款", "Terms of Service")}
      </h1>
      <p className="text-gray-400 dark:text-gray-500 mb-8">
        {t("最后更新: 2026-06", "Last updated: 2026-06")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("1. 接受条款", "1. Acceptance")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            "欢迎访问蜂巢测试（sbtibee.com）。通过访问或使用本网站，您同意受以下服务条款约束。如果您不同意这些条款，请勿使用本网站。",
            "Welcome to SBTI Test (sbtibee.com). By accessing or using this site, you agree to be bound by these Terms. If you disagree, do not use the site."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("2. 服务说明", "2. Service Description")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            "本平台提供多种人格心理学测试，包括但不限于MBTI、SBTI、九型人格等。所有测试结果仅用于娱乐和自我探索目的，不构成任何形式的心理诊断、医疗建议或专业咨询。",
            "This platform offers various personality psychology tests including MBTI, SBTI, Enneagram, and more. All results are for entertainment and self-exploration only. They do not constitute psychological diagnosis, medical advice, or professional counseling."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("3. 免责声明", "3. Disclaimer")}
        </h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 leading-relaxed space-y-1.5">
          <li>{t("本网站提供的测试结果仅供参考和娱乐，不具临床诊断意义。", "Test results are for reference and entertainment only, not clinical diagnosis.")}</li>
          <li>{t("我们不对测试结果的准确性、完整性或适用性做任何明示或暗示的保证。", "We make no express or implied guarantees about accuracy, completeness, or suitability.")}</li>
          <li>{t("如需专业心理评估或治疗，请联系持牌心理健康专业人士。", "For professional assessment or treatment, contact a licensed mental health professional.")}</li>
          <li>{t("本网站可能因维护、升级或不可抗力原因暂时不可用。", "This site may be temporarily unavailable due to maintenance, upgrades, or force majeure.")}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("4. 知识产权", "4. Intellectual Property")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            "本网站的所有内容，包括但不限于文字、图形、标识、测试题目和界面设计，均受版权法保护。未经明确许可，不得复制、修改或分发本网站内容。",
            "All content on this site, including text, graphics, logos, test questions, and UI design, is protected by copyright law. Do not reproduce, modify, or distribute without permission."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("5. 用户行为规范", "5. User Conduct")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          {t("使用本网站时，您同意不会：", "When using this site, you agree not to:")}
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 leading-relaxed space-y-1.5">
          <li>{t("滥用测试功能，包括但不限于自动化脚本提交、暴力破解等。", "Abuse test functionality, including automated scripts or brute force.")}</li>
          <li>{t("使用爬虫、机器人或其他自动化工具抓取网站内容。", "Use crawlers, bots, or automated tools to scrape content.")}</li>
          <li>{t("发布、传播任何违法、骚扰、歧视或冒犯性内容。", "Post or distribute illegal, harassing, discriminatory, or offensive content.")}</li>
          <li>{t("干扰网站正常运营或破坏系统安全。", "Interfere with normal site operation or compromise system security.")}</li>
          <li>{t("从事任何违反适用法律法规的行为。", "Engage in any activity that violates applicable laws.")}</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
          {t("违反上述规范可能导致您的访问权限被立即终止。", "Violating these rules may result in immediate termination of access.")}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("6. 隐私政策关联", "6. Privacy Policy")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t("我们重视您的隐私。所有测试结果均在浏览器本地计算完成，", "We value your privacy. All results are computed locally in your browser,")}
          &nbsp;<strong className="text-gray-800 dark:text-gray-200">{t("不收集、不保存任何个人身份信息", "no personal data is collected or stored")}</strong>{t("。", ".")}
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
          {t("完整的隐私保护说明请参阅", "Full privacy details can be found in our")}
          &nbsp;<Link href="/privacy-policy" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            {t("隐私政策", "Privacy Policy")}
          </Link>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("7. 责任限制", "7. Limitation of Liability")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          {t("在法律允许的最大范围内，蜂巢测试及其运营方对以下情况不承担责任：", "To the maximum extent permitted by law, SBTI Test is not liable for:")}
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 leading-relaxed space-y-1.5">
          <li>{t("因使用或无法使用本网站所导致的任何直接或间接损失。", "Any direct or indirect damages from using or being unable to use this site.")}</li>
          <li>{t("测试结果解读不当导致的心理或情绪影响。", "Psychological or emotional effects from misinterpreting test results.")}</li>
          <li>{t("第三方链接或服务的可用性、准确性及安全性。", "Availability, accuracy, or security of third-party links or services.")}</li>
          <li>{t("因不可抗力因素造成的网站中断或数据丢失。", "Site interruption or data loss due to force majeure.")}</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
          {t("本平台的测试仅供娱乐和自我探索之用，不可替代专业心理评估或医疗诊断。", "Tests are for entertainment and self-exploration, not a substitute for professional evaluation or medical diagnosis.")}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("8. 准据法与争议解决", "8. Governing Law")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            "本条款受中华人民共和国法律管辖。因本条款引起的或与之相关的争议，双方应首先友好协商解决；协商不成的，提交运营方所在地有管辖权的人民法院诉讼解决。",
            "These Terms are governed by the laws of the People's Republic of China. Disputes shall first be resolved through friendly negotiation; if unsuccessful, they shall be submitted to the competent court in the operator's jurisdiction."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("9. 第三方服务", "9. Third-Party Services")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t("本网站使用以下第三方服务：", "This site uses the following third-party services:")}
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400 leading-relaxed space-y-1">
          <li><strong>Google AdSense</strong> – {t("广告投放", "Advertising")}</li>
          <li><strong>51.la</strong> – {t("网站统计分析", "Analytics")}</li>
          <li><strong>Cloudflare Pages</strong> – {t("网站托管", "Hosting")}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("10. 条款变更", "10. Changes")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(
            "我们保留随时修改这些条款的权利。修改后的条款将在本页面发布后立即生效。继续使用本网站即表示您接受修改后的条款。",
            "We reserve the right to modify these Terms at any time. Changes take effect immediately upon posting. Continued use constitutes acceptance."
          )}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          {t("11. 联系我们", "11. Contact")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t("如有任何疑问，请通过", "For any questions, please visit")}
          &nbsp;<Link href="/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            {t("联系我们", "Contact Us")}
          </Link>&nbsp;{t("页面提交反馈。", "page.")}
        </p>
      </section>
    </div>
  );
}
