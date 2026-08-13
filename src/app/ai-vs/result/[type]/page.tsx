import { aiVsResultRanges } from "@/data/ai-vs";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const t = aiVsResultRanges.find((x: any) => x.label === type);
  if (!t) return { title: "AI对决" };
  return {
    title: t.label + " - " + "AI对决",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return aiVsResultRanges.map((t, i) => ({ type: String(t.label ?? i) }));
}