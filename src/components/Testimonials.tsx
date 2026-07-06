import { Star, ArrowUpRight } from "@phosphor-icons/react";
import { business } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { MagneticButton } from "./ui/MagneticButton";

export function Testimonials() {
  const { dict } = useLanguage();

  return (
    <section id="reviews" className="bg-surface-a px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-on-a/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-on-a/70 ring-1 ring-on-a/10">
              {dict.testimonials.eyebrow}
            </span>
            <h2 className="mt-6 font-display text-4xl text-on-a md:text-5xl">
              {dict.testimonials.heading}
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <MagneticButton href={business.justdial} variant="ghost-light" icon={<ArrowUpRight weight="light" className="h-4 w-4" />}>
              {dict.testimonials.justdial}
            </MagneticButton>
            <MagneticButton href={business.mapsDirections} variant="ghost-light" icon={<ArrowUpRight weight="light" className="h-4 w-4" />}>
              {dict.testimonials.googleMaps}
            </MagneticButton>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {dict.testimonials.items.map((t) => (
            <div key={t.name} data-reveal className="rounded-[2rem] bg-on-a/5 p-1.5 ring-1 ring-on-a/10">
              <div className="flex h-full flex-col rounded-[1.625rem] bg-surface-a p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} weight="fill" className="h-3.5 w-3.5" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-on-a/85">"{t.quote}"</p>
                <div className="mt-6 border-t border-on-a/10 pt-4 text-xs">
                  <p className="font-medium text-on-a">{t.name}</p>
                  <p className="text-on-a/60">{t.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
