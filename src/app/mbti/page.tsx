import type { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "MBTI人格测试 - 免费在线测16型人格",
  description: "免费MBTI人格测试在线测试，提供32/93/144/200四档题库。测出你的16型人格类型，附完整类型解读与职业/人际建议。无需注册，完全免费，测完即出结果。",
  openGraph: {
    title: "MBTI人格测试 - 免费在线测16型人格",
    description: "免费MBTI人格测试在线测试，提供32/93/144/200四档题库。测出你的16型人格类型，附完整类型解读与职业/人际建议。无需注册，完全免费，测完即出结果。",
    url: "https://sbtibee.com/mbti",
  },
  alternates: {
    canonical: "https://sbtibee.com/mbti",
  },
};

export default function Page() {
  return <ClientPage />;
}
