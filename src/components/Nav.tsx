import { useState } from "react";
import { List, X, Phone, WhatsappLogo, NavigationArrow } from "@phosphor-icons/react";
import { business, navAnchors } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { cn } from "../lib/cn";
import { ThemeToggle } from "./ui/ThemeToggle";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";
import { LogoMark } from "./ui/LogoMark";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { dict } = useLanguage();
  const nav = [
    { label: dict.nav.services, href: navAnchors[0] },
    { label: dict.nav.gallery, href: navAnchors[1] },
    { label: dict.nav.reviews, href: navAnchors[2] },
    { label: dict.nav.visit, href: navAnchors[3] },
  ];

  return (
    <>
      <div className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 sm:top-8">
        <nav className="flex w-full max-w-3xl items-center justify-between gap-2 rounded-full bg-surface-b/90 py-2.5 pl-4 pr-2 text-on-b shadow-[0_25px_70px_-20px_rgba(0,0,0,0.65)] ring-1 ring-on-b/15 backdrop-blur-xl sm:gap-8 sm:py-3.5 sm:pl-8 sm:pr-3">
          <a href="#top" className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LogoMark className="h-8 w-8 sm:h-11 sm:w-11" />
            <span className="font-display text-lg italic tracking-wide sm:text-2xl">Fly</span>
          </a>

          <div className="hidden items-center gap-9 text-base lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-on-b/75 transition-colors duration-500 hover:text-on-b"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href={business.phoneTel}
              className="hidden items-center gap-2.5 rounded-full bg-linear-to-br from-gold to-coral px-6 py-3.5 text-sm font-medium text-deep sm:flex"
            >
              <Phone weight="fill" className="h-4 w-4" />
              {dict.nav.call}
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-on-b/10 lg:hidden"
            >
              <List
                weight="light"
                className={cn(
                  "absolute h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  open ? "rotate-45 opacity-0" : "rotate-0 opacity-100",
                )}
              />
              <X
                weight="light"
                className={cn(
                  "absolute h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0",
                )}
              />
            </button>
          </div>
        </nav>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-55 flex flex-col items-center justify-center bg-surface-b/95 backdrop-blur-3xl transition-opacity duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={cn(
            "absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-on-b/10 text-on-b ring-1 ring-on-b/15 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:right-8 sm:top-8",
            open ? "scale-100 opacity-100" : "scale-90 opacity-0",
          )}
        >
          <X weight="light" className="h-6 w-6" />
        </button>

        <div className="flex flex-col items-center gap-7">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 70}ms` : "0ms" }}
              className={cn(
                "font-display text-4xl italic text-on-b transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div
          style={{ transitionDelay: open ? "380ms" : "0ms" }}
          className={cn(
            "mt-14 flex items-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
          )}
        >
          <a href={business.phoneTel} aria-label={dict.location.callNow} className="flex h-14 w-14 items-center justify-center rounded-full bg-on-b/10 text-on-b">
            <Phone weight="light" className="h-6 w-6" />
          </a>
          <a href={business.whatsapp} aria-label={dict.location.whatsapp} className="flex h-14 w-14 items-center justify-center rounded-full bg-on-b/10 text-on-b">
            <WhatsappLogo weight="light" className="h-6 w-6" />
          </a>
          <a href={business.mapsDirections} aria-label={dict.location.directions} className="flex h-14 w-14 items-center justify-center rounded-full bg-on-b/10 text-on-b">
            <NavigationArrow weight="light" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </>
  );
}
