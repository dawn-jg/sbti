import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteProvider } from "@/lib/site-context";
import AnalyticsScripts from "@/components/AnalyticsScripts";

export const metadata: Metadata = {
  metadataBase: new URL("https://sbtibee.com"),
  title: { default: "蜂巢测试 - MBTI、SBTI、九型人格等10+免费人格测试", template: "%s | 蜂巢测试" },
  description: "蜂巢测试：免费人格测试平台，含MBTI、SBTI、九型人格等10+专业测试。无需注册，测完即出结果，附完整类型解读。来测一测你的性格类型吧！",
  keywords: ["人格测试", "MBTI", "SBTI", "九型人格", "免费测试", "性格分析"],
  openGraph: {
    siteName: "蜂巢测试",
    type: "website",
    locale: "zh_CN",
    url: "https://sbtibee.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "蜂巢测试 | 免费人格测试平台" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
  verification: { google: "google3f9140e7a22ef70d.html" },
  alternates: {
    canonical: "https://sbtibee.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebSite","name":"蜂巢测试","url":"https://sbtibee.com","description":"免费人格测试平台，包含MBTI、SBTI、九型人格等10+测试，完全免费无需注册。","inLanguage":["zh-CN","en"],"potentialAction":{"@type":"SearchAction","target":"https://sbtibee.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"蜂巢测试","url":"https://sbtibee.com","logo":"https://sbtibee.com/og-image.png","description":"免费人格测试平台"}) }} />
        {/* hreflang */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate" href="https://sbtibee.com" hrefLang="zh-CN" />
        <link rel="alternate" href="https://sbtibee.com/en" hrefLang="en" />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        <AnalyticsScripts />
        <SiteProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}


