import type { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "SBTI测试 - 免费在线性格测试",
  description: "免费SBTI在线测试，共15题约5分钟。测出你的27种互联网抽象人格之一（吗喽、卷王、Dior-s…），附完整解读。无需注册，完全免费，测完即出结果。",
  openGraph: {
    title: "SBTI测试 - 免费在线性格测试",
    description: "免费SBTI在线测试，共15题约5分钟。测出你的27种互联网抽象人格之一（吗喽、卷王、Dior-s…），附完整解读。无需注册，完全免费，测完即出结果。",
    url: "https://sbtibee.com/sbti",
  },
  alternates: {
    canonical: "https://sbtibee.com/sbti",
  },
};

export default function Page() {
  return <ClientPage />;
}
