"use client";

import { useParams } from "next/navigation";
import { attachmentTypes } from "@/data/attachment";
import ResultCard from "@/components/ResultCard";



export default function AttachmentResultPage() {
  const params = useParams();
  const key = decodeURIComponent(String(params.type));
  const t = attachmentTypes[key as keyof typeof attachmentTypes];
  if (!t) return <div className="text-center py-20 text-gray-400">类型未找到</div>;
  return (
    <ResultCard
      emoji={t.emoji} code={t.code} name={t.name} tagline={`「${t.tagline}」`}
      description={t.description}
      details={[
        { label: "优势", value: t.strengths.join(" · ") },
        { label: "挑战", value: t.weaknesses.join(" · ") },
        { label: "建议", value: t.tips },
      ]}
    />
  );
}