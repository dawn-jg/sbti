import { mbtiTypes } from "@/data/mbti";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const t = mbtiTypes[type];
  if (!t) return { title: "MBTI十六型人格" };
  return {
    title: t.name + " - " + "MBTI十六型人格",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(mbtiTypes).map((key) => ({ type: key }));
}