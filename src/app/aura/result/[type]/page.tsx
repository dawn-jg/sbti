import { auraTypes } from "@/data/aura";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const t = auraTypes.find((x: any) => x.code === type);
  if (!t) return { title: "气场颜色" };
  return {
    title: t.name + " - " + "气场颜色",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return auraTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}