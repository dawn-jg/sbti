"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "zh" | "en";
type Theme = "light" | "dark";

interface SiteContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: (zh: string, en: string) => string;
}

const SiteContext = createContext<SiteContextType | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedLang = localStorage.getItem("sbtibee-lang") as Lang;
    const savedTheme = localStorage.getItem("sbtibee-theme") as Theme;
    if (savedLang) setLang(savedLang);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("sbtibee-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("sbtibee-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <SiteContext.Provider value={{ lang, setLang, theme, setTheme, t }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
