import { sbtiTypes } from "@/data/sbti";
import ClientPage from "./client-page";

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return sbtiTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}