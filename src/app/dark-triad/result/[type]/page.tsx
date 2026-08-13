import { darkTriadTypes } from "@/data/dark-triad";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const t = darkTriadTypes.find((x: any) => x.code === type);
  if (!t) return { title: "暗黑三角·光明三角" };
  return {
    title: t.name + " - " + "暗黑三角·光明三角",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return darkTriadTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}