"use client";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSite } from "@/lib/site-context";

interface BilingualQuestion {
  id: number;
  text: string;
  textEn?: string;
  options: { text: string; textEn?: string }[];
}

interface QuestionFlowProps {
  title: string;
  emoji: string;
  questions: BilingualQuestion[];
  resultPath: string;
  onCalculate: (answers: Record<number, number>) => string | number;
}

export default function QuestionFlow({ title, emoji, questions, resultPath, onCalculate }: QuestionFlowProps) {
  const router = useRouter();
  const { lang } = useSite();
  const isZh = lang === "zh";
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);
  const [progressKey] = useState(() =>
    typeof window !== "undefined" ? `qflow_${resultPath.replace(/\//g, "_")}` : ""
  );
  const [resultKey, setResultKey] = useState<string>("");
  const total = questions.length;

  // Restore saved progress on mount
  useEffect(() => {
    if (!progressKey) return;
    try {
      const saved = localStorage.getItem(progressKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.answers === "object" && typeof parsed.current === "number" && parsed.current > 0 && parsed.current < total) {
          setAnswers(parsed.answers);
          setCurrent(parsed.current);
        }
      }
    } catch { /* ignore */ }
  }, [progressKey, total]);

  // Persist progress on change
  useEffect(() => {
    if (!progressKey || done || current === 0) return;
    try {
      localStorage.setItem(progressKey, JSON.stringify({ answers, current }));
    } catch { /* ignore */ }
  }, [answers, current, done, progressKey]);
  const q = questions[current];

  const handleAnswer = useCallback((optIdx: number) => {
    const next = { ...answers, [q.id]: optIdx };
    setAnswers(next);
    if (current < total - 1) {
      setTimeout(() => setCurrent(c => c + 1), 300);
    } else {
      setDone(true);
      try { localStorage.removeItem(progressKey); } catch { /* ignore */ }
      const raw = onCalculate(next);
      const keyStr = String(raw);
      setResultKey(keyStr);
      setTimeout(() => {
        router.push(`${resultPath}/${encodeURIComponent(keyStr)}`);
      }, 1200);
    }
  }, [current, answers, q, total, onCalculate, resultPath, router]);

  const pct = (Object.keys(answers).length / total) * 100;

  if (done) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center animate-scale-in">
        <div className="text-5xl mb-4">{emoji}</div>
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">{title}</h2>
        <p className="text-gray-400 dark:text-gray-500 text-sm animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 pb-20">
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mb-1.5 font-medium">
          <span>{current + 1} / {total}</span>
          <span>{Math.round(pct)}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill bg-gradient-to-r from-amber-400 to-amber-500" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 animate-fade-up" key={q.id}>
        <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 leading-relaxed mb-5">
          {isZh ? q.text : (q.textEn || q.text)}
        </h2>
        <div className="flex flex-col gap-2.5">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="w-full text-left px-4 py-3.5 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-amber-400 dark:hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 text-sm text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all font-medium"
            >
              {isZh ? opt.text : (opt.textEn || opt.text)}
            </button>
          ))}
        </div>
      </div>
      {current > 0 && (
        <button onClick={() => setCurrent(c => c - 1)} className="mt-4 text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          ← Back
        </button>
      )}
    </div>
  );
}