import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteProvider } from "@/lib/site-context";

export const metadata: Metadata = {
  metadataBase: new URL("https://sbtibee.com"),
  title: { default: "蜂巢测试 | 免费人格测试平台", template: "%s | 蜂巢测试" },
  description: "免费人格测试平台，包含MBTI、SBTI、九型人格等10+测试，完全免费无需注册。",
  keywords: ["人格测试", "MBTI", "SBTI", "九型人格", "免费测试", "性格分析"],
  openGraph: { siteName: "蜂巢测试", type: "website", locale: "zh_CN" },
  twitter: { card: "summary_large_image" },
  other: {
    "google-adsense-account": "ca-pub-7487473818971469",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7487473818971469"
          crossOrigin="anonymous"
        />
      <script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
<script>LA.init({id:"LCNALnTMSNRBVZry",ck:"LCNALnTMSNRZry"});</script>

    </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        <SiteProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
