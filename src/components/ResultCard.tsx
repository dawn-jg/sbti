"use client";
import { useState } from "react";
import { BASE_URL } from "@/lib/utils";
import ShareButtons from "./ShareButtons";

interface ResultCardProps {
  emoji: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  details?: { label: string; value: string }[];
  extra?: React.ReactNode;
  color?: string;
  colorHex?: string;
}

export default function ResultCard({ emoji, code, name, tagline, description, details, extra, color = "from-amber-400 to-orange-500", colorHex }: ResultCardProps) {
  const url = typeof window !== "undefined" ? window.location.href : BASE_URL;
  const title = `我的${code} ${name}人格测试结果 - 蜂巢测试`;

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <div className="text-6xl mb-2">{emoji}</div>
        <h2 className={`text-2xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{code}</h2>
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-1">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">「{tagline}」</p>
      </div>

      {colorHex && (
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="text-xs text-gray-400">代表色</div>
          <div className="w-5 h-5 rounded-full border" style={{ backgroundColor: colorHex }} />
          <div className="text-xs text-gray-500 font-mono">{colorHex}</div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 mb-4 shadow-sm text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </div>

      {details && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 mb-4 shadow-sm">
          <h4 className="font-bold text-xs text-gray-400 dark:text-gray-500 mb-3 uppercase tracking-wider">详细分析</h4>
          <div className="flex flex-col gap-2.5 text-sm">
            {details.map((d, i) => (
              <div key={i} className="flex justify-between items-start gap-4">
                <span className="text-gray-400 dark:text-gray-500 shrink-0">{d.label}</span>
                <span className="font-medium text-gray-700 dark:text-gray-200 text-right">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {extra && <div className="mb-4">{extra}</div>}

      {/* 统一分享：复制链接 + 微信二维码 + 国外平台 */}
      <ShareButtons title={title} url={url} />

      <p className="text-xs text-center text-gray-300 dark:text-gray-600 mt-6">
        🐝 蜂巢测试 · 帮你找到最真实的自己
      </p>
    </div>
  );
}
