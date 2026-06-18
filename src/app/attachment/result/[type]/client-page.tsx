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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": t.name,
            "description": t.description,
            "about": {
              "@type": "Thing",
              "name": "蜂巢测试"
            }
          })
        }}
      />
      <ResultCard
        emoji={t.emoji} code={t.code} name={t.name} tagline={`「${t.tagline}」`}
        description={t.description}
        details={[
          { label: "优势", value: t.strengths.join(" · ") },
          { label: "挑战", value: t.weaknesses.join(" · ") },
          { label: "建议", value: t.tips },
        ]}
      />
    </div>
  );
}