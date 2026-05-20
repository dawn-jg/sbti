"use client";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const text = encodeURIComponent(title + " - SBTIBEE 人格测试");
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="flex gap-2 flex-wrap justify-center mt-4">
      <a href={`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`} target="_blank" rel="noreferrer"
         className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-medium hover:opacity-80 transition">
        𝕏 Twitter
      </a>
      <a href={`https://service.wechat.com/share?url=${encodedUrl}&title=${text}`} target="_blank" rel="noreferrer"
         className="px-3 py-1.5 rounded-lg bg-green-500 text-white text-xs font-medium hover:opacity-80 transition">
        💬 微信
      </a>
      <a href={`https://connect.qq.com/widget/shareqq/index.html?url=${encodedUrl}&title=${text}`} target="_blank" rel="noreferrer"
         className="px-3 py-1.5 rounded-lg bg-blue-500 text-white text-xs font-medium hover:opacity-80 transition">
        🐧 QQ
      </a>
      <a href={`https://www.douban.com/share/service?url=${encodedUrl}&title=${text}`} target="_blank" rel="noreferrer"
         className="px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs font-medium hover:opacity-80 transition">
        📗 豆瓣
      </a>
      <button onClick={() => navigator.clipboard?.writeText(shareUrl).then(() => alert("链接已复制"))}
              className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-xs font-medium hover:bg-gray-200 transition">
        📋 复制链接
      </button>
    </div>
  );
}
