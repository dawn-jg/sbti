import { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "MBTI人格测试 - 32题速测版",
  description: "免费MBTI人格测试32题速测版，约5分钟测出你的16型人格类型。基于荣格心理类型理论，无需注册，测完即出结果。",
  alternates: {
    canonical: "https://sbtibee.com/mbti/test",
  },
};

export default function Page() {
  return <ClientPage />;
}
