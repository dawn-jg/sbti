import { auraTypes } from "@/data/aura";
import ClientPage from "./client-page";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const t = auraTypes.find((x: any) => x.code === params.type);
  if (!t) return { title: "气场颜色" };
  return {
    title: t.name + " - " + "气场颜色 | 蜂巢测试",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return auraTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}