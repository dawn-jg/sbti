"use client";

import { useParams } from "next/navigation";
import { aiVsResultRanges } from "@/data/ai-vs";
import ResultCard from "@/components/ResultCard";
import { useSite } from "@/lib/site-context";

export default function AIVSResultPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";
  const params = useParams();
  const label = decodeURIComponent(String(params.type));
  const range = aiVsResultRanges.find(r => r.label === label);
  if (!range) return <div className="text-center py-20 text-gray-400">{isZh ? "类型未找到" : "Type not found"}</div>;
  const score = typeof window !== 'undefined' ? parseInt(localStorage.getItem('ai-vs-score') || '50') : 50;
  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": isZh ? range.label : (range.labelEn || range.label),
            "description": isZh ? range.description : (range.descriptionEn || range.description),
            "about": {
              "@type": "Thing",
              "name": "蜂巢测试"
            }
          })
        }}
      />
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">{range.emoji}</div>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">{range.label}</h2>
        <div className="mt-3 text-lg font-bold text-amber-500">{isZh ? "AI思维指数" : "AI Mind Score"}: {score}/100</div>
      </div>
      <ResultCard
        emoji={range.emoji}
        code={range.label}
        name={isZh ? range.label : range.labelEn}
        tagline={isZh ? "你的思维方式测试结果" : "Your Thinking Style Result"}
        description={isZh ? range.description : range.descriptionEn}
      />
    </div>
  );
}
