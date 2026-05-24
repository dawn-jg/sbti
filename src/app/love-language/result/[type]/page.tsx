import { loveLanguageTypes } from "@/data/love-language";
import ClientPage from "./client-page";

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(loveLanguageTypes).map((key) => ({ type: key }));
}