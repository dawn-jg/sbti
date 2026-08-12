import type { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "AI能力对比测试 - 免费测你的思维更接近AI还是人类",
  description: "免费AI能力对比在线测试，共10题约3分钟。测出你的人机思维指数（0-100分），附纯直觉/纯算法解读。无需注册，完全免费。",
  openGraph: {
    title: "AI能力对比测试 - 免费测你的思维更接近AI还是人类",
    description: "免费AI能力对比在线测试，共10题约3分钟。测出你的人机思维指数（0-100分），附纯直觉/纯算法解读。无需注册，完全免费。",
    url: "https://sbtibee.com/ai-vs",
  },
  alternates: {
    canonical: "https://sbtibee.com/ai-vs",
  },
};

export default function Page() {
  return <ClientPage />;
}
