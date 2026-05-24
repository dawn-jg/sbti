import { attachmentTypes } from "@/data/attachment";
import ClientPage from "./client-page";

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(attachmentTypes).map((key) => ({ type: key }));
}