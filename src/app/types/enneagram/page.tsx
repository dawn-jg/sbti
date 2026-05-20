import Link from "next/link";
import { enneagramTypes } from "@/data/enneagram";

export default function EnneagramTypesPage() {
  const types = Object.entries(enneagramTypes);
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-100 pt-14 pb-10">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="text-4xl mb-2">🔮</div>
          <h1 className="text-3xl font-extrabold text-gray-900">九型人格图鉴</h1>
          <p className="text-gray-400 text-sm mt-2">9种核心性格类型，探索你的内在驱动力</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {types.map(([key, t]) => (
            <Link key={key} href={`/enneagram/result/${key}`}
              className="group p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-0.5">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{t.emoji}</div>
              <div className="font-bold text-lg text-gray-900 mb-0.5">{t.code}</div>
              <div className="text-sm font-medium text-gray-600 mb-1">{t.name}</div>
              <div className="text-xs text-gray-400">{t.nickname}</div>
              <div className="mt-3 text-xs font-semibold text-teal-500 group-hover:underline">查看报告 →</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}