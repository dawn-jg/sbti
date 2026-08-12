import type { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "宠物SBTI测试 - 免费测你家宠物的动物人格",
  description: "免费宠物SBTI在线测试，共8题约3分钟。测出你家毛孩子的12种动物人格类型，附完整解读与饲养建议。无需注册，完全免费。",
  openGraph: {
    title: "宠物SBTI测试 - 免费测你家宠物的动物人格",
    description: "免费宠物SBTI在线测试，共8题约3分钟。测出你家毛孩子的12种动物人格类型，附完整解读与饲养建议。无需注册，完全免费。",
    url: "https://sbtibee.com/pet-sbti",
  },
  alternates: {
    canonical: "https://sbtibee.com/pet-sbti",
  },
};

export default function Page() {
  return <ClientPage />;
}
