"use client";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(shareUrl);
  const [showWechatQR, setShowWechatQR] = useState(false);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180&data=${encodedUrl}`;

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <div className="flex gap-2 flex-wrap justify-center">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title + " - 蜂巢测试人格测试")}&url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-medium hover:opacity-80 transition"
        >
          𝕏 Twitter
        </a>
        <button
          onClick={() => setShowWechatQR(!showWechatQR)}
          className="px-3 py-1.5 rounded-lg bg-green-500 text-white text-xs font-medium hover:opacity-80 transition"
        >
          微信 {showWechatQR ? "收起" : "分享"}
        </button>
        <button
          onClick={() => navigator.clipboard?.writeText(shareUrl).then(() => alert("链接已复制"))}
          className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium hover:bg-gray-200 transition"
        >
          复制链接
        </button>
      </div>
      {showWechatQR && (
        <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-lg">
          <img src={qrUrl} alt="微信分享" className="w-44 h-44 rounded-xl" />
          <p className="text-xs text-gray-500">微信扫一扫即可分享</p>
        </div>
      )}
    </div>
  );
}
