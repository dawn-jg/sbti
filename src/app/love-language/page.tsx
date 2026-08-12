import type { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "爱的五种语言测试 - 免费在线测你的爱语",
  description: "免费爱的五种语言在线测试，共10题约3分钟。测出你的主要爱语（肯定/陪伴/礼物/服务/肢体），附解读与关系建议。无需注册，完全免费。",
  openGraph: {
    title: "爱的五种语言测试 - 免费在线测你的爱语",
    description: "免费爱的五种语言在线测试，共10题约3分钟。测出你的主要爱语（肯定/陪伴/礼物/服务/肢体），附解读与关系建议。无需注册，完全免费。",
    url: "https://sbtibee.com/love-language",
  },
  alternates: {
    canonical: "https://sbtibee.com/love-language",
  },
};

export default function Page() {
  return <ClientPage />;
}
