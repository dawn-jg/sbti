import { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "MBTI深度测评 - 200题完整版",
  description: "免费MBTI深度测评200题完整版，约35分钟，全面测量你的心理类型。测出16型人格类型，附完整报告。无需注册。",
  alternates: {
    canonical: "https://sbtibee.com/mbti/test-deep",
  },
};

export default function Page() {
  return <ClientPage />;
}
