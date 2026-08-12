import type { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "暗黑三角测试 - 免费在线测暗黑人格特质",
  description: "免费暗黑三角在线测试，共15题约5分钟。测出你的暗黑/光明人格特质（自恋、马基雅维利、精神病态），附专业解读。无需注册，完全免费。",
  openGraph: {
    title: "暗黑三角测试 - 免费在线测暗黑人格特质",
    description: "免费暗黑三角在线测试，共15题约5分钟。测出你的暗黑/光明人格特质（自恋、马基雅维利、精神病态），附专业解读。无需注册，完全免费。",
    url: "https://sbtibee.com/dark-triad",
  },
  alternates: {
    canonical: "https://sbtibee.com/dark-triad",
  },
};

export default function Page() {
  return <ClientPage />;
}
