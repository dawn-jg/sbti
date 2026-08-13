import { attachmentTypes } from "@/data/attachment";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const t = attachmentTypes[type];
  if (!t) return { title: "依恋风格" };
  return {
    title: t.name + " - " + "依恋风格",
    description: t.description || "",
    alternates: {
      canonical: `https://sbtibee.com/attachment/result/${type}`,
    },
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(attachmentTypes).map((key) => ({ type: key }));
}