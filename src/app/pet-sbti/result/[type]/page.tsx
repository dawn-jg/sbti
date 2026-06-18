import { petSbtiTypes } from "@/data/pet-sbti";
import ClientPage from "./client-page";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const t = petSbtiTypes.find((x: any) => x.code === params.type);
  if (!t) return { title: "宠物SBTI" };
  return {
    title: t.name + " - " + "宠物SBTI | 蜂巢测试",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return petSbtiTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}