import { petSbtiTypes } from "@/data/pet-sbti";
import ClientPage from "./client-page";

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return petSbtiTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}