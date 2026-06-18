import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务条款",
  description: "蜂巢测试(sbtibee.com)服务条款——使用本平台即视为同意以下条款。",
};

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-1">服务条款</h1>
      <p className="text-gray-400 dark:text-gray-500 mb-8">最后更新: 2026-06</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">1. 接受条款</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          欢迎访问蜂巢测试（sbtibee.com）。通过访问或使用本网站，您同意受以下服务条款约束。
          如果您不同意这些条款，请勿使用本网站。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">2. 服务说明</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          本平台提供多种人格心理学测试，包括但不限于MBTI、SBTI、九型人格等。所有测试结果仅用于
          娱乐和自我探索目的，不构成任何形式的心理诊断、医疗建议或专业咨询。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">3. 免责声明</h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 leading-relaxed space-y-1.5">
          <li>本网站提供的测试结果仅供参考和娱乐，不具临床诊断意义。</li>
          <li>我们不对测试结果的准确性、完整性或适用性做任何明示或暗示的保证。</li>
          <li>如需专业心理评估或治疗，请联系持牌心理健康专业人士。</li>
          <li>本网站可能因维护、升级或不可抗力原因暂时不可用。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">4. 知识产权</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          本网站的所有内容，包括但不限于文字、图形、标识、测试题目和界面设计，均受版权法保护。
          未经明确许可，不得复制、修改或分发本网站内容。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">5. 用户行为规范</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          使用本网站时，您同意不会：
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 leading-relaxed space-y-1.5">
          <li>滥用测试功能，包括但不限于自动化脚本提交、暴力破解等。</li>
          <li>使用爬虫、机器人或其他自动化工具抓取网站内容。</li>
          <li>发布、传播任何违法、骚扰、歧视或冒犯性内容。</li>
          <li>干扰网站正常运营或破坏系统安全。</li>
          <li>从事任何违反适用法律法规的行为。</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
          违反上述规范可能导致您的访问权限被立即终止。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">6. 隐私政策关联</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          我们重视您的隐私。所有测试结果均在浏览器本地计算完成，<strong className="text-gray-800 dark:text-gray-200">不收集、不保存任何个人身份信息</strong>。
          我们不会追踪您的测试记录、答案或个人偏好。
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
          本网站仅使用必要的第三方服务进行广告投放和流量分析（详见第 9 条），
          这些服务不会获取您的测试数据。完整的隐私保护说明请参阅
          <Link href="/privacy-policy" className="text-indigo-600 dark:text-indigo-400 hover:underline"> 隐私政策</Link>。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">7. 责任限制</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          在法律允许的最大范围内，蜂巢测试及其运营方对以下情况不承担责任：
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 leading-relaxed space-y-1.5">
          <li>因使用或无法使用本网站所导致的任何直接或间接损失。</li>
          <li>测试结果解读不当导致的心理或情绪影响。</li>
          <li>第三方链接或服务的可用性、准确性及安全性。</li>
          <li>因不可抗力因素造成的网站中断或数据丢失。</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
          本平台的测试仅供娱乐和自我探索之用，不可替代专业心理评估或医疗诊断。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">8. 准据法与争议解决</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          本条款受中华人民共和国法律管辖。因本条款引起的或与之相关的争议，
          双方应首先友好协商解决；协商不成的，提交运营方所在地有管辖权的人民法院诉讼解决。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">9. 第三方服务</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          本网站使用以下第三方服务：
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400 leading-relaxed space-y-1">
          <li><strong>Google AdSense</strong> – 广告投放</li>
          <li><strong>51.la</strong> – 网站统计分析</li>
          <li><strong>Cloudflare Pages</strong> – 网站托管</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">10. 条款变更</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          我们保留随时修改这些条款的权利。修改后的条款将在本页面发布后立即生效。
          继续使用本网站即表示您接受修改后的条款。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">11. 联系我们</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          如有任何疑问，请通过 <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">联系我们</Link> 页面提交反馈。
        </p>
      </section>
    </div>
  );
}
