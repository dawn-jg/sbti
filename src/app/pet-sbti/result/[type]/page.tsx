"use client";
import { useParams } from "next/navigation";
import { petSbtiTypes } from "@/data/pet-sbti";
import ResultCard from "@/components/ResultCard";

export default function PetSBTIResultPage() {
  const params = useParams();
  const idx = parseInt(decodeURIComponent(String(params.type)));
  const t = petSbtiTypes[idx];
  if (!t) return <div className="text-center py-20 text-gray-400">类型未找到</div>;
  return (
    <ResultCard
      emoji={t.emoji} code={t.code} name={t.name} tagline={`「${t.tagline}」`}
      description={"你的宠物人格：" + t.description + "\\n\\n🦴 " + t.tagline}
      details={[{ label: "生活气场", value: t.vibe }]}
    />
  );
}