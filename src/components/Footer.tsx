import { InstagramLogo, ArrowUpRight } from "@phosphor-icons/react";
import { business, navAnchors } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { Logo } from "./ui/Logo";

export function Footer() {
  const { dict } = useLanguage();
  const nav = [
    { label: dict.nav.services, href: navAnchors[0] },
    { label: dict.nav.gallery, href: navAnchors[1] },
    { label: dict.nav.reviews, href: navAnchors[2] },
    { label: dict.nav.visit, href: navAnchors[3] },
  ];

  return (
    <footer className="bg-surface-b-soft px-6 pt-16 text-on-b md:px-12 md:pb-16 pb-[calc(7rem+env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 border-b border-on-b/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo height={96} />
            <p className="mt-3 max-w-xs text-sm text-on-b/70">{dict.footer.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-on-b/70">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-on-b">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 text-sm text-on-b/70 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <a href={business.phoneTel} className="transition-colors hover:text-on-b">
              {business.phoneDisplay}
            </a>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-on-b"
            >
              <InstagramLogo weight="light" className="h-4 w-4" /> {dict.footer.instagram}
            </a>
            <a
              href={business.justdial}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-on-b"
            >
              {dict.footer.justdial} <ArrowUpRight weight="light" className="h-3.5 w-3.5" />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Fly Unisex Salon.</p>
        </div>
      </div>
    </footer>
  );
}
