"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { sbtiTypes } from "@/data/sbti";
import { useSite } from "@/lib/site-context";

export default function SBTIResultPage() {
  const { type } = useParams<{ type: string }>();
  const { lang } = useSite();
  const isZh = lang === "zh";
  const decoded = decodeURIComponent(String(type));
  const info = sbtiTypes.find((t) => t.code === decoded);
  const [qrHref, setQrHref] = useState("");
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    setQrHref(typeof window !== "undefined" ? window.location.href : "");
  }, []);

  if (!info) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 p-6">
        <div className="text-center">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">
            {isZh ? "未找到测试结果" : "Result Not Found"}: {decoded}
          </p>
          <a
            href="/sbti/test"
            className="mt-4 inline-block px-6 py-3 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition"
          >
            {isZh ? "重新测试" : "Retake Test"}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-4">
      <div className="max-w-2xl mx-auto space-y-4">

        {/* Hero */}
        <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl p-6 text-white text-center">
          <div className="text-5xl mb-2">{info.emoji}</div>
          <div className="text-3xl font-black tracking-widest mb-1">{info.code}</div>
          <div className="text-lg font-bold opacity-90">{isZh ? info.name : info.nameEn}</div>
          <div className="text-sm opacity-75 mt-1">{info.taglineEn}</div>
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {isZh ? info.description : info.descriptionEn}
        </div>

        {/* Traits */}
        {(info.traits?.length ?? 0) > 0 && (
          <div className="flex flex-wrap gap-2">
            {(isZh ? info.traits : info.traitsEn ?? info.traits).map((t, i) => (
              <span key={i} className="px-2 py-1 bg-amber-50 dark:bg-amber-900 text-amber-600 dark:text-amber-300 text-xs rounded-full">{t}</span>
            ))}
          </div>
        )}

        {/* Advice */}
        {info.advice && (
          <div className="bg-amber-50 dark:bg-amber-900 rounded-xl p-3 text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
            <strong>💡 {isZh ? "建议" : "Advice"}: </strong>
            {isZh ? info.advice : info.adviceEn}
          </div>
        )}

        {/* Share WeChat */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-4">
          <div className="text-xs font-bold text-gray-400 uppercase mb-3">{isZh ? "分享结果" : "Share Result"}</div>
          <button
            onClick={() => setShowQR(!showQR)}
            className="w-full py-3 rounded-xl bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition"
          >
            微信分享 {isZh ? "发微信" : "Share to WeChat"}
          </button>
          {showQR && qrHref && (
            <div className="mt-3 text-center">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180&data=${encodeURIComponent(qrHref)}`}
                alt="qr"
                className="mx-auto rounded-lg"
              />
              <p className="text-xs text-gray-400 mt-2">{isZh ? "截图保存后打开微信扫一扫" : "Save screenshot, open WeChat scan"}</p>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <a
            href="/sbti/test"
            className="flex-1 py-3 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition text-center"
          >
            🔄 {isZh ? "再测一次" : "Retake"}
          </a>
          <a
            href="/"
            className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center"
          >
            🏠 {isZh ? "首页" : "Home"}
          </a>
        </div>

      </div>
    </div>
  );
}
