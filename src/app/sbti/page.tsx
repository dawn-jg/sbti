"use client";
import { useState } from "react";
import Link from "next/link";
import { sbtiQuestions, sbtiTypes } from "@/data/sbti";
import QuestionFlow from "@/components/QuestionFlow";
import { useSite } from "@/lib/site-context";

const faqs = [
  {
    q: "SBTI 是什么？和 MBTI 有什么区别？",
    qEn: "What is SBTI? How is it different from MBTI?",
    a: "SBTI（Self-Behavioral Type Indicator）是一个娱乐向人格测试，基于五大模型、十五维度交叉计算，匹配 27 种独特人格标签。与 MBTI 的四维度二分法不同，SBTI 采用更细的三级评估（H/M/L），结果更具戏剧性和趣味性。它不是心理学工具，纯粹为了好玩。",
    aEn: "SBTI (Self-Behavioral Type Indicator) is an entertainment-oriented personality test based on five models and fifteen dimensions, matching you to one of 27 unique personality labels. Unlike MBTI's four-dimension binary approach, SBTI uses finer three-level assessments (H/M/L), making results more dramatic and fun. It's NOT a psychological tool — purely for entertainment.",
  },
  {
    q: "测试需要多长时间？",
    qEn: "How long does the test take?",
    a: "约 30 道主线题，通常 5–8 分钟即可完成。题目每次随机排列，所以每次体验略有不同。",
    aEn: "About 30 main questions, usually 5–8 minutes. Questions are shuffled each time, so every experience is slightly different.",
  },
  {
    q: "测试结果准确吗？",
    qEn: "Are the results accurate?",
    a: "本测试仅供娱乐，不构成任何心理学、医学或职业建议。所有人格描述均为戏谑风格，请勿当真。如果你觉得结果像你，那是巧合；如果觉得不像，那也是巧合。",
    aEn: "This test is purely for entertainment and does not constitute any psychological, medical, or career advice. All personality descriptions are written in a satirical style — don't take them seriously. If the result seems like you, that's coincidence; if not, that's also coincidence.",
  },
  {
    q: "我的数据会被上传吗？",
    qEn: "Will my data be uploaded?",
    a: "不会。所有计算都在你的浏览器本地完成（纯前端），我们不收集、不存储、不上传任何答题数据。你的人格秘密只有你自己知道。",
    aEn: "No. All calculations happen locally in your browser (pure front-end). We don't collect, store, or upload any answer data. Your personality secrets are known only to you.",
  },
  {
    q: "为什么我每次测出来的结果不一样？",
    qEn: "Why do I get different results each time?",
    a: "题目顺序每次随机排列，不同的答题节奏可能影响你的选择。另外，如果你的维度得分处于边界值附近，微小的变化就可能匹配到不同的人格类型。这也是测试有趣的地方。",
    aEn: "Questions are shuffled each time, and different moods may affect your choices. Also, if your dimension scores are near boundaries, small changes can match you to a different type. That's part of the fun!",
  },
  {
    q: "什么是五大模型？",
    qEn: "What are the five models?",
    a: "五大模型分别是：自我模型（自尊自信/自我清晰度/核心价值）、情感模型（依恋安全感/情感投入度/边界与依赖）、态度模型（世界观倾向/规则与灵活度/人生意义感）、行动驱力模型（动机导向/决策风格/执行模式）、社交模型（社交主动性/人际边界感/表达与真实度）。",
    aEn: "The five models are: Self Model (self-esteem/self-clarity/core values), Emotion Model (attachment security/emotional investment/boundaries & dependency), Attitude Model (worldview/rules & flexibility/meaning of life), Drive Model (motivation/decision style/execution mode), Social Model (social initiative/interpersonal boundaries/authenticity of expression).",
  },
];

const models = [
  { name: "自我模型", nameEn: "Self Model", icon: "🪞", dims: ["自尊自信", "自我清晰度", "核心价值"], dimsEn: ["Self-esteem", "Self-clarity", "Core values"] },
  { name: "情感模型", nameEn: "Emotion Model", icon: "💗", dims: ["依恋安全感", "情感投入度", "边界与依赖"], dimsEn: ["Attachment security", "Emotional investment", "Boundaries & dependency"] },
  { name: "态度模型", nameEn: "Attitude Model", icon: "🌍", dims: ["世界观倾向", "规则与灵活度", "人生意义感"], dimsEn: ["Worldview", "Rules & flexibility", "Meaning of life"] },
  { name: "行动驱力模型", nameEn: "Drive Model", icon: "⚡", dims: ["动机导向", "决策风格", "执行模式"], dimsEn: ["Motivation", "Decision style", "Execution mode"] },
  { name: "社交模型", nameEn: "Social Model", icon: "👥", dims: ["社交主动性", "人际边界感", "表达与真实度"], dimsEn: ["Social initiative", "Interpersonal boundaries", "Authenticity"] },
];

export default function SBTITestPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";
  const [started, setStarted] = useState(false);

  if (started) {
    return (
      <div className="max-w-5xl mx-auto px-4">
        <div className="py-8 text-center">
          <div className="text-7xl mb-4">🐝</div>
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100">
            {isZh ? "SBTI 人格测试" : "SBTI Personality Test"}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
            30 {isZh ? "题" : "questions"} · 27 {isZh ? "种人格" : "personality types"} · {isZh ? "五大模型十五维度" : "5 models · 15 dimensions"}
          </p>
          <p className="text-xs text-amber-500 mt-2 bg-amber-50 dark:bg-amber-900/30 inline-block px-3 py-1 rounded-full">
            ⚠️ {isZh ? "本测试仅供娱乐，无心理学依据" : "For entertainment only, not a psychological tool"}
          </p>
        </div>
        <QuestionFlow
          title="SBTI 测试"
          emoji="🐝"
          questions={sbtiQuestions}
          onCalculate={(answers: Record<number, number>) => {
            const scores = new Array(27).fill(0);
            Object.entries(answers).forEach(([qIdStr, optIdx]) => {
              const q = sbtiQuestions[parseInt(qIdStr) - 1];
              if (!q) return;
              const opt = q.options[optIdx];
              if (!opt) return;
              opt.scores.forEach((s: number, i: number) => { scores[i] += s; });
            });
            let maxIdx = 0, maxVal = scores[0];
            scores.forEach((s, i) => { if (s > maxVal) { maxVal = s; maxIdx = i; } });
            return sbtiTypes[maxIdx].code;
          }}
          resultPath="/sbti/result"
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="text-5xl mb-4">🐝</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-3">
          SBTI {isZh ? "人格测试" : "Personality Test"} · {isZh ? "娱乐向" : "Entertainment"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          {isZh
            ? "30 道主线题，五大模型十五维度交叉分析，为你匹配最贴合的人格标签。测试仅供娱乐，请勿当真。"
            : "30 main questions, five models with fifteen dimensions of cross-analysis, matching you to the most fitting personality label. For entertainment only."}
        </p>
      </div>

      {/* Five Models */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          {isZh ? "五大模型" : "Five Models"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {models.map((m, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-4 text-center">
              <div className="text-3xl mb-2">{m.icon}</div>
              <div className="font-bold text-sm text-gray-800 dark:text-gray-200 mb-2">{isZh ? m.name : m.nameEn}</div>
              <div className="text-xs text-gray-400 space-y-1">
                {(isZh ? m.dims : m.dimsEn).map((d, j) => (
                  <div key={j}>{d}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Test */}
      <div className="mb-12 bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          {isZh ? "关于测试" : "About the Test"}
        </h2>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-2"><span>📝</span>{isZh ? "约 30 题，5–8 分钟" : "About 30 questions, 5–8 minutes"}</li>
          <li className="flex items-start gap-2"><span>🔀</span>{isZh ? "题目每次随机排列" : "Questions are shuffled each time"}</li>
          <li className="flex items-start gap-2"><span>🔒</span>{isZh ? "纯前端计算，不上传数据" : "Pure front-end calculation, no data upload"}</li>
          <li className="flex items-start gap-2"><span>🎭</span>{isZh ? "娱乐向测试，请勿当真" : "Entertainment only, don't take it seriously"}</li>
        </ul>
      </div>

      {/* Type Gallery Preview */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            {isZh ? "全部人格图鉴" : "All Personality Types"}
          </h2>
          <Link href="/types/sbti" className="text-sm text-amber-500 hover:underline font-medium">
            {isZh ? "查看详情 →" : "View details →"}
          </Link>
        </div>
        <p className="text-sm text-gray-400 mb-4">{isZh ? "共 27 种人格，点击查看详情" : "27 types total, click to view details"}</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2">
          {sbtiTypes.map((t) => (
            <Link key={t.code} href={`/types/sbti#${t.code}`} className="group text-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition">
              <div className="text-3xl mb-1">{t.emoji}</div>
              <div className="text-[10px] font-bold text-gray-600 dark:text-gray-400 group-hover:text-amber-500 transition">{t.code}</div>
              <div className="text-[10px] text-gray-400 truncate">{isZh ? t.name : t.nameEn}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          {isZh ? "常见问题" : "FAQ"}
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden group">
              <summary className="px-5 py-3.5 cursor-pointer text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-amber-500 transition flex items-center justify-between">
                <span>{isZh ? f.q : f.qEn}</span>
                <span className="text-gray-300 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {isZh ? f.a : f.aEn}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Start Button */}
      <div className="text-center py-8">
        <button
          onClick={() => setStarted(true)}
          className="px-10 py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-base font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition shadow-lg shadow-gray-900/10 dark:shadow-white/10"
        >
          {isZh ? "开始测试 →" : "Start Test →"}
        </button>
        <p className="text-xs text-gray-400 mt-3">30 {isZh ? "题" : "questions"} · 5–8 min · {isZh ? "完全免费" : "completely free"}</p>
      </div>
    </div>
  );
}
