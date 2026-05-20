import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 部署配置
  output: "standalone",

  // 优化图片加载
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },

  // 性能优化
  poweredByHeader: false,
  reactStrictMode: true,

  // SPA 友好：微信内嵌浏览器支持
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-DNS-Prefetch-Control", value: "on" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ],
};

export default nextConfig;