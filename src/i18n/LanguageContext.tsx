import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { translations, type Lang, type Dict } from "./translations";
import { runWithReveal } from "../lib/viewTransition";

const STORAGE_KEY = "fly-lang";

function detectInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && stored in translations) return stored as Lang;
  const nav = navigator.language.slice(0, 2);
  if (nav === "hi" || nav === "te") return nav;
  return "en";
}

type LanguageContextValue = {
  lang: Lang;
  dict: Dict;
  setLang: (lang: Lang, origin?: { x: number; y: number }) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: Lang, origin?: { x: number; y: number }) => {
    runWithReveal(origin, () => setLangState(next));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, dict: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
