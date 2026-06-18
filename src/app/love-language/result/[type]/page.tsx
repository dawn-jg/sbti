import { loveLanguageTypes } from "@/data/love-language";
import ClientPage from "./client-page";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const t = loveLanguageTypes[params.type as keyof typeof loveLanguageTypes];
  if (!t) return { title: "爱的五种语言" };
  return {
    title: t.name + " - " + "爱的五种语言 | 蜂巢测试",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(loveLanguageTypes).map((key) => ({ type: key }));
}