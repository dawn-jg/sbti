import type { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "依恋风格测试 - 免费在线测你的依恋类型",
  description: "免费依恋风格在线测试，共12题约4分钟。测出安全型/焦虑型/回避型/混乱型，附关系模式解读与改善建议。无需注册，完全免费。",
  openGraph: {
    title: "依恋风格测试 - 免费在线测你的依恋类型",
    description: "免费依恋风格在线测试，共12题约4分钟。测出安全型/焦虑型/回避型/混乱型，附关系模式解读与改善建议。无需注册，完全免费。",
    url: "https://sbtibee.com/attachment",
  },
  alternates: {
    canonical: "https://sbtibee.com/attachment",
  },
};

export default function Page() {
  return <ClientPage />;
}
