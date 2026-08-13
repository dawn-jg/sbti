import { sbtiTypes } from "@/data/sbti";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const t = sbtiTypes.find((x: any) => x.code === type);
  if (!t) return { title: "SBTI人格" };
  return {
    title: t.name + " - " + "SBTI人格",
    description: t.description || "",
    alternates: {
      canonical: `https://sbtibee.com/sbti/result/${type}`,
    },
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return sbtiTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}