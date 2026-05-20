"use client";
import Link from "next/link";

interface TestCardProps {
  href: string;
  emoji: string;
  title: string;
  subtitle: string;
  desc: string;
  gradient: string;
  bg: string;
  tag: string;
  questions: number;
  types: number;
}

export default function TestCard({ href, emoji, title, subtitle, desc, gradient, bg, tag, questions, types }: TestCardProps) {
  return (
    <Link href={href} className={`group block rounded-2xl border dark:border-gray-800 p-6 bg-white dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all hover:-translate-y-1 ${bg} dark:bg-opacity-100`}>
      <div className="text-5xl mb-4">{emoji}</div>
      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <h3 className="font-extrabold text-lg group-hover:text-amber-500 dark:group-hover:text-amber-400 transition">{title}</h3>
        <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-1.5 py-0.5 rounded-full">{tag}</span>
      </div>
      <p className={`text-sm font-extrabold mb-3 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{subtitle}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
      <div className="flex gap-3 text-xs text-gray-400 dark:text-gray-500 font-medium">
        <span>📝 {questions}题</span>
        <span>🧭 {types}种类型</span>
      </div>
      <div className="mt-4 flex items-center text-sm font-semibold text-amber-500 dark:text-amber-400 group-hover:underline">
        开始测试 →
      </div>
    </Link>
  );
}