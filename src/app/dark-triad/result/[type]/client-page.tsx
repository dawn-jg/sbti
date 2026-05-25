"use client";

import { useParams } from "next/navigation";
import { darkTriadTypes } from "@/data/dark-triad";
import ResultCard from "@/components/ResultCard";
import { useSite } from "@/lib/site-context";

export default function DarkTriadResultPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";
  const params = useParams();
  const code = decodeURIComponent(String(params.type));
  const t = darkTriadTypes.find(d => d.code === code);
  if (!t) return <div className="text-center py-20 text-gray-400">{isZh ? "类型未找到" : "Type not found"}</div>;
  return (
    <ResultCard
      emoji={t.emoji} code={t.code} name={isZh ? t.name : t.nameEn} tagline={isZh ? `「${t.tagline}」` : `「${t.taglineEn}」`}
      description={isZh ? t.description : t.descriptionEn}
      details={[
        { label: isZh ? "警示" : "Warning", value: isZh ? t.warning : t.warningEn },
      ]}
    />
  );
}
