import { aiVsResultRanges } from "@/data/ai-vs";
import ClientPage from "./client-page";

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return aiVsResultRanges.map((t, i) => ({ type: String(t.label ?? i) }));
}