"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useSite } from "@/lib/site-context";

const links = [
  { href: "/mbti", labelZh: "MBTI", labelEn: "MBTI" },
  { href: "/sbti", labelZh: "SBTI", labelEn: "SBTI" },
  { href: "/enneagram", labelZh: "九型人格", labelEn: "Enneagram" },
  { href: "/pet-sbti", labelZh: "宠物SBTI", labelEn: "Pet SBTI" },
  { href: "/love-language", labelZh: "爱的语言", labelEn: "Love Lang" },
  { href: "/attachment", labelZh: "依恋风格", labelEn: "Attachment" },
  { href: "/inner-child", labelZh: "内在小孩", labelEn: "Inner Child" },
  { href: "/dark-triad", labelZh: "暗黑三角", labelEn: "Dark Triad" },
  { href: "/aura", labelZh: "气场颜色", labelEn: "Aura" },
  { href: "/ai-vs", labelZh: "AI对决", labelEn: "AI Battle" },
];

export default function Header() {
  const { lang, setLang, theme, setTheme } = useSite();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "zh" ? "en" : "zh");
  }, [lang, setLang]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-5 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="text-5xl">🐝</span>
            <div className="flex flex-col leading-none">
              <span className="font-black text-3xl tracking-tight text-gray-900">蜂巢测试</span>
              <span className="text-sm font-semibold text-gray-400 tracking-wider">sbtibee.com</span>
            </div>
          </Link>
          <div className="flex items-center gap-2 ml-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center gap-1 text-sm font-extrabold bg-gray-100 text-gray-500">
              <span className="text-lg">🌐</span>
              <span>EN</span>
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gray-100 text-gray-500">🌙</div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-950/70 border-b border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-5 h-18 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <span className="text-5xl">🐝</span>
          <div className="flex flex-col leading-none">
            <span className="font-black text-3xl tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">蜂巢测试</span>
            <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 tracking-wider">sbtibee.com</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm font-bold overflow-x-auto">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="px-2.5 py-2 rounded-lg text-gray-500 dark:text-gray-400 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200 transition-colors whitespace-nowrap">
              {lang === "zh" ? l.labelZh : l.labelEn}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-3">
          <button
            onClick={toggleLang}
            className="w-12 h-12 rounded-xl flex items-center justify-center gap-1 text-sm font-extrabold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            title={lang === "zh" ? "Switch to English" : "切换为中文"}
            type="button"
          >
            <span className="text-lg">🌐</span>
            <span>{lang === "zh" ? "EN" : "中"}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            title={theme === "light" ? "暗黑模式" : "Light Mode"}
            type="button"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button className="lg:hidden w-12 h-12 flex items-center justify-center text-gray-500" onClick={() => setOpen(!open)} type="button">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur px-5 py-3 flex flex-col gap-1 text-base font-extrabold">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-xl font-black text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              {lang === "zh" ? l.labelZh : l.labelEn}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
