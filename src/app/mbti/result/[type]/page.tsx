"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { mbtiTypes } from "@/data/mbti";

export default function MBTIResultPage() {
  const { type } = useParams<{ type: string }>();
  const decoded = decodeURIComponent(String(type));
  const [qrHref, setQrHref] = useState("");
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    setQrHref(window.location.href);
  }, []);

  const info = mbtiTypes[decoded];
  if (!info) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 p-6">
        <div className="text-4xl mb-3">🔍</div>
        <p className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">
          未找到测试结果：{decoded}
        </p>
        <a href="/mbti" className="mt-4 inline-block px-6 py-3 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition">
          重新测试
        </a>
      </div>
    );
  }

  const pct = (v: number) => `${v}%`;
  const ei = decoded[0] === "E" ? 78 : 22;
  const sn = decoded[1] === "S" ? 65 : 35;
  const tf = decoded[2] === "T" ? 71 : 29;
  const jp = decoded[3] === "J" ? 63 : 37;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-4">
      <div className="max-w-md mx-auto space-y-4">

        {/* Hero */}
        <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl p-6 text-white text-center">
          <div className="text-5xl mb-2">{info.emoji}</div>
          <div className="text-3xl font-black tracking-widest mb-1">{info.code}</div>
          <div className="text-lg font-bold opacity-90">{info.name}</div>
          <div className="text-sm opacity-75 mt-1">{info.nickname}</div>
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {info.description}
        </div>

        {/* Dimensions */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Dimension Analysis</div>
          <div className="space-y-2 text-sm">
            {[
              { label: "外向/内向 E/I", val: ei },
              { label: "实感/直觉 S/N", val: sn },
              { label: "理性/情感 T/F", val: tf },
              { label: "计划/灵活 J/P", val: jp },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-2">
                <span className="w-28 shrink-0 text-xs text-gray-500">{d.label}</span>
                <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-400 rounded-full" style={{ width: d.val }} />
                </div>
                <span className="text-xs text-gray-400 w-8 text-right">{d.val}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        {info.strengths?.length > 0 && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-5">
            <div className="text-xs font-bold text-green-600 dark:text-green-400 mb-2">核心优势</div>
            <div className="flex flex-wrap gap-2">
              {info.strengths.map((s, i) => (
                <span key={i} className="px-2 py-1 bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs rounded-full">{s}</span>
              ))}
            </div>
          </div>
        )}

        {/* Weaknesses */}
        {info.weaknesses?.length > 0 && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-5">
            <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-2">需要注意</div>
            <div className="flex flex-wrap gap-2">
              {info.weaknesses.map((w, i) => (
                <span key={i} className="px-2 py-1 bg-amber-50 dark:bg-amber-900 text-amber-600 dark:text-amber-300 text-xs rounded-full">{w}</span>
              ))}
            </div>
          </div>
        )}

        {/* Careers */}
        {info.careers?.length > 0 && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 text-sm">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2">适合职业</div>
            <div className="flex flex-wrap gap-2">
              {info.careers.map((c, i) => (
                <span key={i} className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs rounded-full">{c}</span>
              ))}
            </div>
          </div>
        )}

        {/* Share WeChat QR */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-4">
          <div className="text-xs font-bold text-gray-400 uppercase mb-3">分享结果</div>
          <button
            onClick={() => setShowQR(!showQR)}
            className="w-full py-3 rounded-xl bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition">
            分享到微信
          </button>
          {showQR && qrHref && (
            <div className="mt-3 text-center">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180&data=${encodeURIComponent(qrHref)}`}
                alt="qr"
                className="mx-auto rounded-lg"
              />
              <p className="text-xs text-gray-400 mt-2">截图保存后用微信扫一扫</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex gap-2">
          <a href="/mbti" className="flex-1 py-3 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition text-center">
            🔄 再测一次
          </a>
          <a href="/" className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition text-center">
            🏠 首页
          </a>
        </div>

      </div>
    </div>
  );
}
