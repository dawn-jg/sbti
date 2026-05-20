import Link from "next/link";
import { mbtiTypes } from "@/data/mbti";

const groups = [
  { label: "分析家", emoji: "🧠", keys: ["INTJ","INTP","ENTJ","ENTP"], color: "from-indigo-500 to-blue-500" },
  { label: "外交家", emoji: "🌈", keys: ["INFJ","INFP","ENFJ","ENFP"], color: "from-pink-500 to-rose-500" },
  { label: "守护者", emoji: "🛡️", keys: ["ISTJ","ISFJ","ESTJ","ESFJ"], color: "from-amber-500 to-orange-500" },
  { label: "探险家", emoji: "⚡", keys: ["ISTP","ISFP","ESTP","ESFP"], color: "from-green-500 to-emerald-500" },
];

export default function MBTITypesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 pt-14 pb-10">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="text-4xl mb-2">🧠</div>
          <h1 className="text-3xl font-extrabold text-gray-900">MBTI 16型人格图鉴</h1>
          <p className="text-gray-400 text-sm mt-2">点击任意类型卡片，了解你的完整分析报告</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 py-10">
        {groups.map(g => (
          <div key={g.label} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-8 h-8 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center text-white text-sm shadow-sm`}>{g.emoji}</span>
              <h2 className="font-bold text-gray-800">{g.label}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {g.keys.map(key => {
                const t = mbtiTypes[key];
                return (
                  <Link key={key} href={`/mbti/result/${key}`}
                    className="group p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{t.emoji}</div>
                    <div className="font-bold text-lg text-gray-900 mb-0.5">{t.code}</div>
                    <div className="text-sm font-medium text-gray-600 mb-1">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.nickname}</div>
                    <div className="mt-3 text-xs font-semibold text-indigo-500 group-hover:underline">查看报告 →</div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}