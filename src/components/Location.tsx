import { Phone, WhatsappLogo, NavigationArrow, ArrowUpRight, Clock } from "@phosphor-icons/react";
import { business } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { MagneticButton } from "./ui/MagneticButton";

export function Location() {
  const { dict } = useLanguage();

  return (
    <section id="visit" className="bg-surface-b px-6 py-24 text-on-b md:px-12 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div data-reveal className="rounded-[2rem] bg-on-b/5 p-1.5 ring-1 ring-on-b/10">
          <div className="aspect-[4/3] overflow-hidden rounded-[1.625rem] grayscale-[0.3] contrast-[1.05]">
            <iframe
              title="Fly Unisex Salon location"
              src={business.mapsEmbed}
              loading="lazy"
              className="h-full w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div data-reveal>
          <span className="inline-block rounded-full bg-on-b/[0.06] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-on-b/70 ring-1 ring-on-b/10">
            {dict.location.eyebrow}
          </span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">{dict.location.heading}</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-b/70">{business.addressLine}</p>

          <div className="mt-6 space-y-2">
            {dict.location.hours.map((h) => (
              <div key={h.day} className="flex items-center gap-3 text-sm text-on-b/80">
                <Clock weight="light" className="h-4 w-4 shrink-0 text-gold" />
                <span className="w-40">{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href={business.phoneTel} variant="primary" icon={<Phone weight="fill" className="h-4 w-4" />}>
              {dict.location.callNow}
            </MagneticButton>
            <MagneticButton href={business.whatsapp} variant="ghost-dark" icon={<WhatsappLogo weight="light" className="h-4 w-4" />}>
              {dict.location.whatsapp}
            </MagneticButton>
            <MagneticButton href={business.mapsDirections} variant="ghost-dark" icon={<NavigationArrow weight="light" className="h-4 w-4" />}>
              {dict.location.directions}
            </MagneticButton>
            <MagneticButton href={business.justdial} variant="ghost-dark" icon={<ArrowUpRight weight="light" className="h-4 w-4" />}>
              {dict.location.justdial}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
