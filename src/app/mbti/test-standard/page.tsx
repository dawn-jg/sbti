import { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "MBTI标准测评 - 93题专业版",
  description: "免费MBTI标准测评93题版，约15分钟，更精准地测出你的16型人格类型。附完整类型解读。无需注册，完全免费。",
  alternates: {
    canonical: "https://sbtibee.com/mbti/test-standard",
  },
};

export default function Page() {
  return <ClientPage />;
}
