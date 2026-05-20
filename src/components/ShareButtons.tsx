"use client";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const text = encodeURIComponent(title + " - 蜂巢测试");
  const encodedUrl = encodeURIComponent(shareUrl);
  const [showQR, setShowQR] = useState(false);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedUrl}`;

  return (
    <div className="flex gap-2 flex-wrap justify-center mt-4">
      <a href={`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`} target="_blank" rel="noreferrer"
         className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-medium hover:opacity-80 transition">
        𝕏 Twitter
      </a>
      <button onClick={() => setShowQR(!showQR)}
         className="px-3 py-1.5 rounded-lg bg-green-500 text-white text-xs font-medium hover:opacity-80 transition">
        💰 微信
      </button>
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setShowQR(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-6 text-center" onClick={e => e.stopPropagation()}>
            <img src={qrUrl} alt="微信扫码分享" className="w-52 h-52 rounded-xl shadow-md" />
            <p className="text-sm text-gray-500 mt-3">微信扫一扫即可分享</p>
            <button onClick={() => setShowQR(false)} className="mt-3 px-4 py-1.5 rounded-lg bg-gray-100 text-xs font-medium hover:bg-gray-200">关闭</button>
          </div>
        </div>
      )}
      <button onClick={() => navigator.clipboard?.writeText(shareUrl).then(() => alert("链接已复制"))}
              className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium hover:bg-gray-200 transition">
        📋 复制链接
      </button>
    </div>
  );
}
