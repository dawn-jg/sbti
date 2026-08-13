import { enneagramTypes } from "@/data/enneagram";
import ClientPage from "./client-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const t = enneagramTypes[type];
  if (!t) return { title: "九型人格" };
  return {
    title: t.name + " - " + "九型人格",
    description: t.description || "",
  };
}



export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(enneagramTypes).map((key) => ({ type: key }));
}