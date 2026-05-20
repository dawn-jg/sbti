import type { Metadata } from "next";
import Script from "next/script";
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
  verification: { google: "google-site-verification: google3f9140e7a22ef70d.html" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        <head>
          <meta charSet="utf-8" />
        </head>
        <SiteProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SiteProvider>
        <Script
          src="//sdk.51.la/js-sdk-pro.min.js"
          strategy="lazyOnload"
          charSet="UTF-8"
          id="LA_COLLECT"
        />
        <Script id="LA_INIT" strategy="lazyOnload" charSet="UTF-8">
          {`window.LA=window.LA||[];window.LA.push(['init',{id:'LCNALnTMSNRBVZry',ck:'LCNALnTMSNRBVZry'}]);`}
        </Script>
      </body>
    </html>
  );
}
