import { mbtiTypes } from "@/data/mbti";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params;
  const t = mbtiTypes[code];
  if (!t) return { title: "MBTI十六型人格" };
  return {
    title: `${t.name}性格特点 - MBTI 16型人格解读`,
    description: t.description ? `${t.name}（${code}）性格特点解读：${t.description}` : `${code}型人格的完整性格解读与特点分析，来自蜂巢测试MBTI十六型人格测试。`,
    alternates: {
      canonical: `https://sbtibee.com/mbti/types/${code}`,
    },
  };
}

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(mbtiTypes).map((key) => ({ code: key }));
}