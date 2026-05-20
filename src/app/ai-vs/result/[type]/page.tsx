"use client";
import { useParams } from "next/navigation";
import { aiVsResultRanges } from "@/data/ai-vs";
import ResultCard from "@/components/ResultCard";

export default function AIVSResultPage() {
  const params = useParams();
  const score = parseInt(decodeURIComponent(String(params.type)));
  if (isNaN(score)) return <div className="text-center py-20 text-gray-400">无效分数</div>;
  const range = aiVsResultRanges.find(r => score >= r.min && score <= r.max) || aiVsResultRanges[0];
  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">{range.emoji}</div>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">{range.label}</h2>
        <div className="mt-3 text-lg font-bold text-amber-500">AI思维指数: {score}/100</div>
      </div>
      <ResultCard emoji={range.emoji} code={range.label} name={score + " / 100"} tagline="你的思维方式测试结果" description={range.description} />
    </div>
  );
}