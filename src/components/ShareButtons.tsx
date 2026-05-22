"use client";
import { useState } from "react";

interface ShareButtonsProps {
  title?: string;
  url?: string;
}

export default function ShareButtons({ title = "蜂巢测试", url: propUrl }: ShareButtonsProps) {
  const url = propUrl || (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title + " - 蜂巢测试人格测试");
  const [showWechatQR, setShowWechatQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200&data=${encodedUrl}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mt-4">
      {/* 主按钮行：复制链接 + 分享微信 */}
      <div className="flex gap-3">
        <button
          onClick={copyLink}
          className="flex-1 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition"
        >
          {copied ? "✅ 已复制" : "📋 复制链接"}
        </button>
        <button
          onClick={() => setShowWechatQR(!showWechatQR)}
          className={`flex-1 py-2.5 rounded-xl text-white text-sm font-semibold transition ${
            showWechatQR ? "bg-gray-500 hover:bg-gray-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {showWechatQR ? "✕ 关闭" : "💬 分享微信"}
        </button>
      </div>

      {/* 微信二维码 */}
      {showWechatQR && (
        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 text-center shadow-sm">
          <img src={qrUrl} alt="微信分享二维码" className="w-48 h-48 mx-auto rounded-lg" />
          <p className="text-xs text-gray-400 mt-3 leading-relaxed">
            截图保存二维码 → 打开微信扫一扫 → 分享给朋友
          </p>
        </div>
      )}

      {/* 国外社交平台分享 */}
      <div className="mt-4">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Share to</p>
        <div className="flex gap-2 flex-wrap">
          {/* Twitter / X */}
          <a
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-medium hover:opacity-80 transition inline-flex items-center gap-1"
          >
            𝕏 Twitter
          </a>
          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#1877F2] text-white text-xs font-medium hover:opacity-80 transition inline-flex items-center gap-1"
          >
            📘 Facebook
          </a>
          {/* LinkedIn */}
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#0A66C2] text-white text-xs font-medium hover:opacity-80 transition inline-flex items-center gap-1"
          >
            💼 LinkedIn
          </a>
          {/* Reddit */}
          <a
            href={`https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#FF4500] text-white text-xs font-medium hover:opacity-80 transition inline-flex items-center gap-1"
          >
            🤖 Reddit
          </a>
          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-medium hover:opacity-80 transition inline-flex items-center gap-1"
          >
            📱 WhatsApp
          </a>
          {/* Telegram */}
          <a
            href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#0088cc] text-white text-xs font-medium hover:opacity-80 transition inline-flex items-center gap-1"
          >
            ✈️ Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
