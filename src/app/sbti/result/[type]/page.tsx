import { sbtiTypes } from "@/data/sbti";
import ClientPage from "./client-page";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const t = sbtiTypes.find((x: any) => x.code === params.type);
  if (!t) return { title: "SBTI人格" };
  return {
    title: t.name + " - " + "SBTI人格 | 蜂巢测试",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return sbtiTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}