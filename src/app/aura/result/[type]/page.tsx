import { auraTypes } from "@/data/aura";
import ClientPage from "./client-page";

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return auraTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}