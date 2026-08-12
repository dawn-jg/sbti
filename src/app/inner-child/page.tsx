import type { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "内在小孩测试 - 免费在线测你的内在小孩",
  description: "免费内在小孩在线测试，共10题约3分钟。测出受伤/顺从/叛逆/魔法/孤儿小孩类型，附疗愈指南。无需注册，完全免费。",
  openGraph: {
    title: "内在小孩测试 - 免费在线测你的内在小孩",
    description: "免费内在小孩在线测试，共10题约3分钟。测出受伤/顺从/叛逆/魔法/孤儿小孩类型，附疗愈指南。无需注册，完全免费。",
    url: "https://sbtibee.com/inner-child",
  },
  alternates: {
    canonical: "https://sbtibee.com/inner-child",
  },
};

export default function Page() {
  return <ClientPage />;
}
