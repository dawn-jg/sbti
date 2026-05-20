"use client";
import { useParams, useRouter } from "next/navigation";
import { enneagramTypes } from "@/data/enneagram";
import ResultCard from "@/components/ResultCard";

export default function EnneagramResultPage() {
  const { type } = useParams<{ type: string }>();
  const router = useRouter();
  const decoded = decodeURIComponent(type);
  const info = enneagramTypes[decoded];

  if (!info) {
    return (
      <div className="text-center py-32 text-gray-400">
        <div className="text-4xl mb-3">😅</div>
        未找到测试结果：{decoded}
        <br />
        <button onClick={() => router.push("/enneagram")} className="mt-4 px-5 py-2 rounded-xl bg-teal-500 text-white text-sm font-semibold hover:bg-teal-600 transition">
          重新测试
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <ResultCard
        emoji={info.emoji} code={info.code} name={info.name} tagline={info.nickname}
        description={info.description}
        color="from-teal-500 to-emerald-500" colorHex="#0d9488"
        details={[
          { label: "核心优势", value: info.strengths.join(" · ") },
          { label: "需要注意", value: info.weaknesses.join(" · ") },
          { label: "核心动机", value: info.motivation },
          { label: "深层恐惧", value: info.fear },
        ]}
      />
      <div className="text-center mt-6">
        <a href="/enneagram" className="text-sm text-gray-400 hover:text-teal-500 font-medium transition">🔄 再测一次</a>
      </div>
    </div>
  );
}