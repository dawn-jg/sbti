"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showDonate, setShowDonate] = useState(false);

  return (
    <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* 捐赠区域 */}
        <div className="text-center mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-extrabold text-gray-900 dark:text-gray-100 mb-3">
            咸鱼也有梦想，你的支持让平台走得更远
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            如果蜂巢测试对你有帮助，欢迎请小Bee喝杯咖啡
          </p>
          <button
            onClick={() => setShowDonate(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            ☕ 请小Bee喝杯咖啡
          </button>
        </div>

        {/* 捐赠弹窗 */}
        {showDonate && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowDonate(false)}
          >
            <div
              className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl max-w-sm mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDonate(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 flex items-center justify-center text-sm font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                ✕
              </button>
              <img src="/donate.jpg" alt="打赏二维码" className="w-80 h-80 rounded-xl" />
              <p className="text-sm text-gray-400 text-center mt-3">微信打赏码 ❤️</p>
            </div>
          </div>
        )}

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
