"use client";
import { useParams, useRouter } from "next/navigation";
import { sbtiTypes } from "@/data/sbti";
import { useSite } from "@/lib/site-context";

export default function SBTIResultPage() {
  const { type } = useParams<{ type: string }>();
  const router = useRouter();
  const { lang } = useSite();
  const isZh = lang === "zh";
  const decoded = decodeURIComponent(type);
  const info = sbtiTypes.find(t => t.code === decoded);

  if (!info) {
    return (
      <div className="text-center py-32 text-gray-400">
        <div className="text-4xl mb-3">😅</div>
        <p>{isZh ? "未找到测试结果" : "Result not found"}: {decoded}</p>
        <button onClick={() => router.push("/sbti")} className="mt-4 px-5 py-2 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition">
          {isZh ? "重新测试" : "Retake test"}
        </button>
      </div>
    );
  }

  const shareTitle = `${isZh ? "我的 SBTI 人格测试结果是" : "My SBTI result is"} ${info.code} ${isZh ? info.name : info.nameEn}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-6">
      <div className="max-w-lg mx-auto px-4">
        {/* Result Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border dark:border-gray-800 shadow-sm overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-6 pb-8 text-center text-white">
            <div className="text-5xl mb-2">{info.emoji}</div>
            <div className="text-white/80 font-mono text-sm tracking-wider">{info.code}</div>
            <h2 className="text-2xl font-extrabold mt-1">{isZh ? info.name : info.nameEn}</h2>
            <p className="text-white/80 text-sm mt-1 font-medium">
              「{isZh ? info.tagline : info.taglineEn}」
            </p>
          </div>

          {/* Description */}
          <div className="p-5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {isZh ? info.description : info.descriptionEn}
          </div>

          {/* Dimensions */}
          {info.dimensions && (
            <div className="px-5 pb-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">{isZh ? "维度分析" : "Dimension Analysis"}</h4>
              <div className="grid grid-cols-2 gap-1.5">
                {info.dimensions.map((d, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 text-xs">
                    <div className="text-gray-400">{isZh ? d.model : d.modelEn}</div>
                    <div className="flex justify-between items-center mt-0.5">
                      <span className="text-gray-600 dark:text-gray-400">{isZh ? d.trait : d.traitEn}</span>
                      <span className={`font-mono font-bold text-xs ${
                        d.level === 'H' ? 'text-green-500' : d.level === 'M' ? 'text-amber-500' : 'text-red-400'
                      }`}>{d.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Traits */}
          {info.traits && (
            <div className="px-5 pb-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">{isZh ? "人格特质" : "Key Traits"}</h4>
              <div className="flex flex-wrap gap-1.5">
                {(isZh ? info.traits : info.traitsEn || info.traits).map((t, i) => (
                  <span key={i} className="px-2.5 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-xs font-medium">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Advice */}
          {info.advice && (
            <div className="px-5 pb-5">
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3 text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                💡 <strong>{isZh ? "少主建议" : "Advice"}</strong>: {isZh ? info.advice : info.adviceEn}
              </div>
            </div>
          )}

          {/* Share */}
          <div className="px-5 pb-5 flex gap-2">
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(`${shareTitle}\n${window.location.href}`);
                  alert(isZh ? "链接已复制！" : "Link copied!");
                } catch {
                  alert(isZh ? "复制失败" : "Copy failed");
                }
              }}
              className="flex-1 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              📋 {isZh ? "复制链接" : "Copy Link"}
            </button>
            <button
              onClick={() => {
                const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(window.location.href)}`;
                const w = window.open('', '_blank', 'width=420,height=420');
                if (w) {
                  w.document.write(`<!DOCTYPE html><html><head><title>${shareTitle}</title><style>body{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;margin:0;font-family:system-ui;background:#f5f5f5}.qr{border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.1)}p{margin-top:16px;color:#666;font-size:14px}</style></head><body><img class="qr" src="${qrUrl}" alt="QR"><p>${isZh ? '微信扫一扫即可分享' : 'Scan with WeChat to share'}</p></body></html>`);
                }
              }}
              className="flex-1 py-2.5 rounded-xl bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition text-center"
            >
              📱 {isZh ? "分享微信" : "Share WeChat"}
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4 text-center">
          <button
            onClick={() => router.push("/sbti")}
            className="flex-1 py-2.5 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition"
          >
            🔄 {isZh ? "再测一次" : "Retake"}
          </button>
          <a href="/types/sbti" className="flex-1 py-2.5 rounded-xl bg-white dark:bg-gray-900 border dark:border-gray-800 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            🎭 {isZh ? "所有人格" : "All Types"}
          </a>
        </div>
      </div>
    </div>
  );
}