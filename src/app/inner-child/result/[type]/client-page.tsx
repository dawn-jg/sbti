"use client";

import { useParams } from "next/navigation";
import { innerChildTypes } from "@/data/inner-child";
import ResultCard from "@/components/ResultCard";
import { useSite } from "@/lib/site-context";

export default function InnerChildResultPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";
  const params = useParams();
  const key = decodeURIComponent(String(params.type));
  const t = innerChildTypes[key as keyof typeof innerChildTypes];
  if (!t) return <div className="text-center py-20 text-gray-400">{isZh ? "类型未找到" : "Type not found"}</div>;
  return (
    <ResultCard
      emoji={t.emoji} code={t.code} name={isZh ? t.name : t.nameEn} tagline={isZh ? `「${t.tagline}」` : `「${t.taglineEn}」`}
      description={isZh ? t.description : t.descriptionEn}
      details={[
        { label: isZh ? "疗愈方向" : "Healing", value: isZh ? t.healing : t.healingEn },
      ]}
    />
  );
}
