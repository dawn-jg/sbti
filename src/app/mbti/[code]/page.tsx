import { mbtiTypes } from "@/data/mbti";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params;
  const upper = code.toUpperCase();
  const t = mbtiTypes[upper];
  if (!t) return { title: "MBTI十六型人格" };
  return {
    title: `${t.name}性格特点 - MBTI 16型人格解读`,
    description: t.description || "",
    alternates: {
      canonical: `https://sbtibee.com/mbti/types/${upper}`,
    },
    robots: { index: false, follow: true },
  };
}

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(mbtiTypes).map((key) => ({ code: key.toLowerCase() }));
}
