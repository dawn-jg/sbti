import { attachmentTypes } from "@/data/attachment";
import ClientPage from "./client-page";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const t = attachmentTypes[params.type];
  if (!t) return { title: "依恋风格" };
  return {
    title: t.name + " - " + "依恋风格 | 蜂巢测试",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(attachmentTypes).map((key) => ({ type: key }));
}