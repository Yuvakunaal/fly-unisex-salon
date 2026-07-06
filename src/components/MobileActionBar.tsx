import { Phone, WhatsappLogo, NavigationArrow } from "@phosphor-icons/react";
import { business } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

export function MobileActionBar() {
  const { dict } = useLanguage();
  const actions = [
    { label: dict.nav.call, href: business.phoneTel, icon: Phone },
    { label: dict.location.whatsapp, href: business.whatsapp, icon: WhatsappLogo },
    { label: dict.location.directions, href: business.mapsDirections, icon: NavigationArrow },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-px bg-on-b/10 pb-[env(safe-area-inset-bottom)] md:hidden">
      {actions.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex flex-col items-center gap-1 bg-surface-b py-3 text-on-b active:bg-surface-b-soft"
        >
          <Icon weight="light" className="h-4 w-4" />
          <span className="text-[10px] font-medium uppercase tracking-[0.15em]">{label}</span>
        </a>
      ))}
    </div>
  );
}
