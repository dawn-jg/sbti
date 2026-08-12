import type { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "气场颜色测试 - 免费在线测你的气场颜色",
  description: "免费气场颜色在线测试，共10题约3分钟。测出你的7种气场颜色之一，附能量类型与脉轮解读。无需注册，完全免费。",
  openGraph: {
    title: "气场颜色测试 - 免费在线测你的气场颜色",
    description: "免费气场颜色在线测试，共10题约3分钟。测出你的7种气场颜色之一，附能量类型与脉轮解读。无需注册，完全免费。",
    url: "https://sbtibee.com/aura",
  },
  alternates: {
    canonical: "https://sbtibee.com/aura",
  },
};

export default function Page() {
  return <ClientPage />;
}
