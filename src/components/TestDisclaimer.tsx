import { useSite } from "@/lib/site-context";

interface TestDisclaimerProps {
  theory?: string;      // zh theory source
  theoryEn?: string;    // en theory source
  intro?: string;       // zh intro (2-3 sentences)
  introEn?: string;     // en intro
}

export default function TestDisclaimer({
  theory,
  theoryEn,
  intro,
  introEn,
}: TestDisclaimerProps) {
  const { t } = useSite();

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 border-t border-gray-100 dark:border-gray-800 mt-10">
      <div className="grid gap-6 sm:grid-cols-2">
        {intro && (
          <div>
            <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
              {t("关于本测试", "About This Test")}
            </h2>
            <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              {t(intro, introEn || intro)}
            </p>
          </div>
        )}
        {theory && (
          <div>
            <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
              {t("理论基础", "Theoretical Basis")}
            </h2>
            <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              {t(theory, theoryEn || theory)}
            </p>
          </div>
        )}
      </div>
      <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-6 leading-relaxed">
        {t(
          "免责声明：本测试结果仅供自我参考与娱乐，不构成临床诊断，也不能替代专业心理咨询或医学评估。",
          "Disclaimer: Results are for self-reflection and entertainment only. They do not constitute clinical diagnosis and cannot replace professional counseling or medical evaluation."
        )}
      </p>
    </section>
  );
}
