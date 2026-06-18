import { enneagramTypes } from "@/data/enneagram";
import ClientPage from "./client-page";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const t = enneagramTypes[params.type];
  if (!t) return { title: "九型人格" };
  return {
    title: t.name + " - " + "九型人格 | 蜂巢测试",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(enneagramTypes).map((key) => ({ type: key }));
}