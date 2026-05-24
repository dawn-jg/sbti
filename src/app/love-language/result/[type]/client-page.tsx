"use client";

import { useParams } from "next/navigation";
import { loveLanguageTypes } from "@/data/love-language";
import ResultCard from "@/components/ResultCard";



export default function LoveLangResultPage() {
  const params = useParams();
  const key = decodeURIComponent(String(params.type));
  const t = loveLanguageTypes[key as keyof typeof loveLanguageTypes];
  if (!t) return <div className="text-center py-20 text-gray-400">类型未找到</div>;
  return <ResultCard emoji={t.emoji} code={t.code} name={t.name} tagline={`「${t.tagline}」`} description={t.description} />;
}