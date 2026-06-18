import { innerChildTypes } from "@/data/inner-child";
import ClientPage from "./client-page";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const t = innerChildTypes[params.type as keyof typeof innerChildTypes];
  if (!t) return { title: "内在小孩" };
  return {
    title: t.name + " - " + "内在小孩 | 蜂巢测试",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(innerChildTypes).map((key) => ({ type: key }));
}