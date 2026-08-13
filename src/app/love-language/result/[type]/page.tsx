import { loveLanguageTypes } from "@/data/love-language";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const t = loveLanguageTypes[type as keyof typeof loveLanguageTypes];
  if (!t) return { title: "爱的五种语言" };
  return {
    title: t.name + " - " + "爱的五种语言",
    description: t.description || "",
    alternates: {
      canonical: `https://sbtibee.com/love-language/result/${type}`,
    },
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(loveLanguageTypes).map((key) => ({ type: key }));
}