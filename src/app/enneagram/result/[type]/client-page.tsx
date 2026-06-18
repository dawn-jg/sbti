"use client";

import { useParams, useRouter } from "next/navigation";
import { enneagramTypes } from "@/data/enneagram";
import ResultCard from "@/components/ResultCard";
import { useSite } from "@/lib/site-context";

export default function EnneagramResultPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";
  const { type } = useParams<{ type: string }>();
  const router = useRouter();
  const decoded = decodeURIComponent(type);
  const info = enneagramTypes[decoded];

  if (!info) {
    return (
      <div className="text-center py-32 text-gray-400">
        <div className="text-4xl mb-3">😅</div>
        {isZh ? "未找到测试结果：" : "Test result not found: "}{decoded}
        <br />
        <button onClick={() => router.push("/enneagram")} className="mt-4 px-5 py-2 rounded-xl bg-teal-500 text-white text-sm font-semibold hover:bg-teal-600 transition">
          {isZh ? "重新测试" : "Retake Test"}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": isZh ? info.name : (info.nameEn || info.name),
            "description": isZh ? info.description : (info.descriptionEn || info.description),
            "about": {
              "@type": "Thing",
              "name": "蜂巢测试"
            }
          })
        }}
      />
      <ResultCard
        emoji={info.emoji} code={info.code} name={isZh ? info.name : info.nameEn} tagline={isZh ? info.nickname : info.nicknameEn}
        description={isZh ? info.description : info.descriptionEn}
        color="from-teal-500 to-emerald-500" colorHex="#0d9488"
        details={[
          { label: isZh ? "核心优势" : "Strengths", value: (isZh ? info.strengths : info.strengthsEn).join(" · ") },
          { label: isZh ? "需要注意" : "Weaknesses", value: (isZh ? info.weaknesses : info.weaknessesEn).join(" · ") },
          { label: isZh ? "核心动机" : "Motivation", value: isZh ? info.motivation : info.motivationEn },
          { label: isZh ? "深层恐惧" : "Fear", value: isZh ? info.fear : info.fearEn },
        ]}
      />
      <div className="text-center mt-6">
        <a href="/enneagram" className="text-sm text-gray-400 hover:text-teal-500 font-medium transition">{isZh ? "🔄 再测一次" : "🔄 Retake"}</a>
      </div>
    </div>
  );
}
