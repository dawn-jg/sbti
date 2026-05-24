"use client";

import { useParams } from "next/navigation";
import { innerChildTypes } from "@/data/inner-child";
import ResultCard from "@/components/ResultCard";



export default function InnerChildResultPage() {
  const params = useParams();
  const key = decodeURIComponent(String(params.type));
  const t = innerChildTypes[key as keyof typeof innerChildTypes];
  if (!t) return <div className="text-center py-20 text-gray-400">类型未找到</div>;
  return (
    <ResultCard
      emoji={t.emoji} code={t.code} name={t.name} tagline={`「${t.tagline}」`}
      description={t.description}
      details={[
        { label: "疗愈方向", value: t.healing },
      ]}
    />
  );
}