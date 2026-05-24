import { mbtiTypes } from "@/data/mbti";
import ClientPage from "./client-page";

export default function Page() {
  return <ClientPage />;
}

export function generateStaticParams() {
  return Object.keys(mbtiTypes).map((key) => ({ type: key }));
}