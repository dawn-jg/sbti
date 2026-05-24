import { enneagramTypes } from "@/data/enneagram";
import ClientPage from "./client-page";

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(enneagramTypes).map((key) => ({ type: key }));
}