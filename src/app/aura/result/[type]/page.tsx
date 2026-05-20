"use client";
import { useParams } from "next/navigation";
import { auraTypes } from "@/data/aura";
import ResultCard from "@/components/ResultCard";

export default function AuraResultPage() {
  const params = useParams();
  const idx = parseInt(decodeURIComponent(String(params.type)));
  const t = auraTypes[idx];
  if (!t) return <div className="text-center py-20 text-gray-400">类型未找到</div>;
  return (
    <ResultCard
      emoji={t.emoji} code={t.code} name={t.name} tagline={`「${t.tagline}」`}
      description={t.description}
      details={[
        { label: "对应脉轮", value: t.chakra },
        { label: "能量建议", value: t.advice },
      ]}
    />
  );
}