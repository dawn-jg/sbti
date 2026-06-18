"use client";

import { useParams } from "next/navigation";
import { petSbtiTypes } from "@/data/pet-sbti";
import ResultCard from "@/components/ResultCard";
import { useSite } from "@/lib/site-context";

export default function PetSBTIResultPage() {
  const { lang } = useSite();
  const isZh = lang === "zh";
  const params = useParams();
  const code = decodeURIComponent(String(params.type));
  const t = petSbtiTypes.find(p => p.code === code);
  if (!t) return <div className="text-center py-20 text-gray-400">{isZh ? "类型未找到" : "Type not found"}</div>;
  const desc = isZh
    ? "你家毛孩子的动物人格：" + t.description + "\n\n🦴 " + t.tagline
    : "Your pet's animal personality: " + t.descriptionEn + "\n\n🦴 " + t.taglineEn;
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": isZh ? t.name : (t.nameEn || t.name),
            "description": isZh ? t.description : (t.descriptionEn || t.description),
            "about": {
              "@type": "Thing",
              "name": "蜂巢测试"
            }
          })
        }}
      />
      <ResultCard
        emoji={t.emoji} code={t.code} name={isZh ? t.name : t.nameEn} tagline={isZh ? `「${t.tagline}」` : `「${t.taglineEn}」`}
        description={desc}
        details={[{ label: isZh ? "生活气场" : "Vibe", value: isZh ? t.vibe : t.vibeEn }]}
      />
    </div>
  );
}
