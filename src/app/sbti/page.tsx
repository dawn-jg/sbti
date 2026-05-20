"use client";
import { useState } from "react";
import Link from "next/link";
import { useSite } from "@/lib/site-context";
import { sbtiTypes } from "@/data/sbti";

const models = [
  { id:"S", zh:"自我模型", en:"Self Model", dims:["S1 自尊自信","S2 自我清晰度","S3 核心价值"], dimsEn:["S1 Self-Esteem","S2 Self-Clarity","S3 Core Values"] },
  { id:"E", zh:"情感模型", en:"Emotion Model", dims:["E1 依恋安全感","E2 情感投入度","E3 边界与依赖"], dimsEn:["E1 Attachment Security","E2 Emotional Investment","E3 Boundaries"] },
  { id:"A", zh:"态度模型", en:"Attitude Model", dims:["A1 世界观倾向","A2 规则与灵活度","A3 人生意义感"], dimsEn:["A1 Worldview","A2 Rules vs Flexibility","A3 Life Meaning"] },
  { id:"Ac", zh:"行动驱力模型", en:"Action Model", dims:["Ac1 动机导向","Ac2 决策风格","Ac3 执行模式"], dimsEn:["Ac1 Motivation","Ac2 Decision Style","Ac3 Execution"] },
  { id:"So", zh:"社交模型", en:"Social Model", dims:["So1 社交主动性","So2 人际边界感","So3 表达与真实度"], dimsEn:["So1 Social Initiative","So2 Boundaries","So3 Authenticity"] },
];

const faqs = [
  { q:"SBTI测试是什么？", a:"SBTI是一个把互联网精神状态翻译成人格标签的娱乐测试。用更好懂的方式，描述你在自我认知、关系、行动和社交里的真实反应。", qEn:"What is SBTI?", aEn:"SBTI is an entertaining test that translates internet mental states into personality labels." },
  { q:"SBTI和MBTI有什么区别？", a:"MBTI是经典人格框架，偏正式稳定；SBTI更关注你平时怎么想、怎么爱、怎么嘴硬。", qEn:"Difference with MBTI?", aEn:"MBTI is formal; SBTI is an abstract internet-culture snapshot of your daily self." },
  { q:"SBTI有多少种人格？", a:"27种人格结果，包含25个常规和2个特殊。测完后展示十五维落点。", qEn:"How many types?", aEn:"27 personality types, including 25 regular and 2 special, plus 15-dimension analysis." },
  { q:"测试需要多久？", a:"约32题，5-8分钟。题目每次随机排列。", qEn:"How long?", aEn:"About 32 questions, 5-8 minutes. Randomly shuffled." },
  { q:"测试结果准吗？", a:"适合做自我观察和朋友互损，不适合当医学或心理诊断。", qEn:"Is it accurate?", aEn:"Great for self-observation and fun, not for medical diagnosis." },
  { q:"测试免费吗？", a:"免费，不需要注册。直接答题测完就看完整结果。", qEn:"Is it free?", aEn:"Yes, free and no registration needed." },
];

export default function SbtiHome() {
  const { lang } = useSite();
  const isZh = lang === "zh";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-5 pt-20 pb-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-gray-100 leading-tight">
          Silly Behavioral Type Indicator
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-bold">
          {isZh ? "测测你到底是哪一种抽象人格" : "Find out which abstract personality you are"}
        </p>
        <Link href="/sbti/test" className="mt-8 inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-extrabold rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30 transition">
          {isZh ? "开始测试 →" : "Start Test →"}
        </Link>
      </section>

      {/* Stats */}
      <section className="max-w-3xl mx-auto px-5 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[["15维模型","15 Dimensions"],["5套人格切面","5 Sets"],["27种结果","27 Types"],["32道题","32 Questions"]].map(([zh,en]) => (
            <div key={zh} className="bg-gray-50 dark:bg-gray-900 rounded-2xl py-5 border border-gray-100 dark:border-gray-800">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{zh.split(/[^\d]/)[0]}</div>
              <div className="text-sm font-bold text-gray-500 dark:text-gray-400 mt-1">{isZh ? zh.replace(/\d+/, "") : en.replace(/\d+\s*/, "")}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Type gallery */}
      <section className="max-w-5xl mx-auto px-5 pb-14">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {sbtiTypes.map((t,i) => (
            <Link key={i} href={`/sbti/result/${encodeURIComponent(t.code)}`} className="flex flex-col items-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md transition group">
              <span className="text-4xl mb-1.5 group-hover:scale-110 transition-transform">{t.emoji}</span>
              <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">{t.code}</span>
              <span className="text-xs font-bold text-gray-700 dark:text-gray-300 mt-0.5 text-center">{isZh ? t.name : t.nameEn}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Five Models */}
      <section className="bg-gray-50 dark:bg-gray-900 py-14">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl font-black text-center text-gray-900 dark:text-gray-100 mb-2">{isZh ? "SBTI 采用 5 组人格切面" : "SBTI Uses 5 Personality Sets"}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">{isZh ? "从十五个维度看一个人的真实状态" : "See your real state across 15 dimensions"}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {models.map((m) => (
              <div key={m.id} className="bg-white dark:bg-gray-950 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-sm font-black">{m.id}</span>
                  <span className="font-extrabold text-gray-900 dark:text-gray-100">{isZh ? m.zh : m.en}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(isZh ? m.dims : m.dimsEn).map((d) => (
                    <span key={d} className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-full">{d}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SBTI x MBTI */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-2">SBTI × MBTI</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{isZh ? "当最真实的你，遇上最体面的你" : "When your real self meets your polite self"}</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 max-w-lg mx-auto leading-relaxed">{isZh ? "MBTI告诉你「你是什么样的人」。SBTI告诉你「你实际活成了什么样」。一个是你面试时写在简历上的版本，一个是你凌晨三点发的朋友圈。" : "MBTI tells you who you are. SBTI tells you who you actually turned out to be."}</p>
          <Link href="/types/sbti" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">{isZh ? "查看 27 种人格详细解读 →" : "View all 27 personality types →"}</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 dark:bg-gray-900 py-14">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="text-2xl font-black text-center text-gray-900 dark:text-gray-100 mb-8">{isZh ? "常见问题" : "FAQ"}</h2>
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-4 text-left">
                <span className="font-extrabold text-sm text-gray-800 dark:text-gray-200">{isZh ? f.q : f.qEn}</span>
                <span className={`text-gray-400 text-lg transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && <div className="pb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{isZh ? f.a : f.aEn}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center">
        <p className="text-lg font-extrabold text-gray-800 dark:text-gray-200 mb-4">{isZh ? "准备好了吗？" : "Ready?"}</p>
        <Link href="/sbti/test" className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-extrabold rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30 transition">{isZh ? "开始测试 →" : "Start Test →"}</Link>
      </section>

    </div>
  );
}
