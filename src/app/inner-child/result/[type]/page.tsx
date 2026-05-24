import { innerChildTypes } from "@/data/inner-child";
import ClientPage from "./client-page";

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(innerChildTypes).map((key) => ({ type: key }));
}