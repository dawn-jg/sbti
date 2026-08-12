import type { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "九型人格测试 - 免费在线测试你的性格类型",
  description: "免费九型人格在线测试，共18题约5-8分钟。测出你的9型性格类型，附完整类型解读与核心动机分析。无需注册，完全免费，测完即出结果。",
  openGraph: {
    title: "九型人格测试 - 免费在线测试你的性格类型",
    description: "免费九型人格在线测试，共18题约5-8分钟。测出你的9型性格类型，附完整类型解读与核心动机分析。无需注册，完全免费，测完即出结果。",
    url: "https://sbtibee.com/enneagram",
  },
  alternates: {
    canonical: "https://sbtibee.com/enneagram",
  },
};

export default function Page() {
  return <ClientPage />;
}
