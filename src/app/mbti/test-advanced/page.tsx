import { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "MBTI进阶测评 - 144题深度版",
  description: "免费MBTI进阶测评144题版，约25分钟，深度测量你的认知功能偏好。测出16型人格类型，附详细解读。无需注册。",
  alternates: {
    canonical: "https://sbtibee.com/mbti/test-advanced",
  },
};

export default function Page() {
  return <ClientPage />;
}
