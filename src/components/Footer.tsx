import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* 赞助 / 打赏 */}
        <div className="text-center mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-extrabold text-gray-900 dark:text-gray-100 mb-3">
            咸鱼也有梦想，你的支持让平台走得更远
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            如果蜂巢测试对你有帮助，欢迎请小Bee喝杯咖啡
          </p>
          <div className="flex justify-center gap-6">
            <div className="text-center">
              <img src="/donate.jpg" alt="打赏" className="w-80 h-80 rounded-2xl shadow-lg" />
              <p className="text-sm text-gray-400 mt-2">微信打赏码 ❤️</p>
            </div>
          </div>
        </div>

        {/* 链接网格 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-sm font-extrabold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-1">
              <span>🐝</span> 蜂巢测试
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {year} 蜂巢测试 · 完全免费 · 无需注册
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">人格测试</div>
            <div className="flex flex-col gap-1.5">
              {[["/mbti","MBTI"],["/sbti","SBTI"],["/enneagram","九型人格"],["/pet-sbti","宠物SBTI"]].map(([h,t]) => (
                <Link key={h} href={h} className="text-xs text-gray-400 hover:text-amber-500 transition">{t}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-400 mb-3">更多测试</div>
            <div className="flex flex-col gap-1.5">
              {[["/love-language","爱的语言"],["/attachment","依恋风格"],["/inner-child","内在小孩"],["/dark-triad","暗黑三角"],["/aura","气场颜色"],["/ai-vs","AI对决"]].map(([h,t]) => (
                <Link key={h} href={h} className="text-xs text-gray-400 hover:text-amber-500 transition">{t}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-400 mb-3">其他</div>
            <div className="flex flex-col gap-1.5">
              {[["/blog","百科文章"],["/about","关于我们"],["/contact","联系我们"],["/privacy-policy","隐私政策"],["/terms","服务条款"]].map(([h,t]) => (
                <Link key={h} href={h} className="text-xs text-gray-400 hover:text-amber-500 transition">{t}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">🐝 蜂巢测试 · 免费人格测试平台</p>
          <p className="text-xs text-gray-500 dark:text-gray-600">© {year} 蜂巢测试 · 喜欢请告诉朋友</p>
        </div>
      </div>
    </footer>
  );
}

