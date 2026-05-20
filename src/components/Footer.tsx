import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-1">
              <span>🐝</span> 蜂巢测试
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {new Date().getFullYear() > 2025 ? "免费人格测试平台" : "免费人格测试平台"}
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">人格测试</div>
            <div className="flex flex-col gap-1.5">
              {[["/mbti","MBTI"],["/sbti","SBTI"],["/enneagram","九型人格"],["/pet-sbti","宠物SBTI"]].map(([h,t])=><Link key={h} href={h} className="text-xs text-gray-400 hover:text-amber-500 transition">{t}</Link>)}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">更多测试</div>
            <div className="flex flex-col gap-1.5">
              {[["/love-language","爱的语言"],["/attachment","依恋风格"],["/inner-child","内在小孩"],["/dark-triad","暗黑三角"]].map(([h,t])=><Link key={h} href={h} className="text-xs text-gray-400 hover:text-amber-500 transition">{t}</Link>)}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">其他</div>
            <div className="flex flex-col gap-1.5">
              {[["/aura","气场颜色"],["/ai-vs","AI能力对比"],["/types/mbti","MBTI百科"],["/types/enneagram","九型百科"]].map(([h,t])=><Link key={h} href={h} className="text-xs text-gray-400 hover:text-amber-500 transition">{t}</Link>)}
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-300 dark:text-gray-600">
            © {year} 蜂巢测试 · 完全免费 · 无需注册
          </p>
          <p className="text-xs text-gray-300 dark:text-gray-600">
            测着玩，仅供娱乐
          </p>
        </div>
      </div>
    </footer>
  );
}
