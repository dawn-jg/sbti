export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function shareToWeChat(url: string, title: string) {
  if (typeof navigator !== "undefined" && navigator.share) {
    navigator.share({ title, url }).catch(() => {});
  }
}

export function copyToClipboard(text: string) {
  if (typeof navigator !== "undefined") {
    navigator.clipboard.writeText(text).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    });
  }
}

export const BASE_URL = "https://sbtibee.com";

export const siteInfo = {
  title: "SBTIBEE | 人格测试 — MBTI · SBTI · 九型人格",
  description: "免费在线人格测试平台，提供MBTI、SBTI、九型人格等专业测试。了解你的性格类型，发现真实的自己。蜜蜂来测，SBTI吧！",
  keywords: "人格测试,MBTI,16型人格,SBTI,九型人格,性格测试,免费测试",
};