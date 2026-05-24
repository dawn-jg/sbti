import { darkTriadTypes } from "@/data/dark-triad";
import ClientPage from "./client-page";

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return darkTriadTypes.map((t, i) => ({ type: String(t.code ?? t.id ?? i) }));
}