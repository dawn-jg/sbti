import { darkTriadTypes } from "@/data/dark-triad";
import ClientPage from "./client-page";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const t = darkTriadTypes.find((x: any) => x.code === params.type);
  if (!t) return { title: "暗黑三角·光明三角" };
  return {
    title: t.name + " - " + "暗黑三角·光明三角 | 蜂巢测试",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return darkTriadTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}