import { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "SBTI测试 - 30题测出你的互联网人格",
  description: "免费SBTI在线测试，共30题约5分钟。测出你的27种互联网抽象人格之一（吗喽、卷王、Dior-s…），附完整解读。无需注册。",
  alternates: {
    canonical: "https://sbtibee.com/sbti/test",
  },
};

export default function Page() {
  return <ClientPage />;
}
