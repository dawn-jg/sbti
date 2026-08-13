import { innerChildTypes } from "@/data/inner-child";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const t = innerChildTypes[type as keyof typeof innerChildTypes];
  if (!t) return { title: "内在小孩" };
  return {
    title: t.name + " - " + "内在小孩",
    description: t.description || "",
    alternates: {
      canonical: `https://sbtibee.com/inner-child/result/${type}`,
    },
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(innerChildTypes).map((key) => ({ type: key }));
}