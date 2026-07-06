import { useEffect, useRef, useState } from "react";
import { Translate } from "@phosphor-icons/react";
import { languages, type Lang } from "../../i18n/translations";
import { useLanguage } from "../../i18n/LanguageContext";
import { cn } from "../../lib/cn";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function select(code: Lang, e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setLang(code, { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setOpen(false);
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="flex h-11 w-11 items-center justify-center gap-2 rounded-full bg-on-b/10 text-sm font-medium uppercase tracking-wide text-on-b sm:w-auto sm:px-4"
      >
        <Translate weight="light" className="h-5 w-5 shrink-0" />
        <span className="hidden sm:inline">{lang}</span>
      </button>

      <div
        className={cn(
          "absolute right-0 top-13 min-w-40 origin-top-right rounded-2xl bg-surface-b p-1.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-on-b/10 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
      >
        {languages.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={(e) => select(l.code, e)}
            className={cn(
              "flex w-full items-center rounded-xl px-4 py-2.5 text-left text-sm transition-colors",
              l.code === lang ? "bg-on-b/10 text-on-b" : "text-on-b/70 hover:bg-on-b/10 hover:text-on-b",
            )}
          >
            {l.nativeLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
