import { petSbtiTypes } from "@/data/pet-sbti";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const t = petSbtiTypes.find((x: any) => x.code === type);
  if (!t) return { title: "宠物SBTI" };
  return {
    title: t.name + " - " + "宠物SBTI",
    description: t.description || "",
    alternates: {
      canonical: `https://sbtibee.com/pet-sbti/result/${type}`,
    },
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return petSbtiTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}