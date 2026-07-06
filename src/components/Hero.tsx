import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Phone, WhatsappLogo, ArrowUpRight } from "@phosphor-icons/react";
import { business } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { MagneticButton } from "./ui/MagneticButton";
import { HeroVisual } from "./ui/HeroVisual";

export function Hero() {
  const scope = useRef<HTMLDivElement>(null);
  const { dict } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out", duration: 1.1 } })
        .from("[data-hero-eyebrow]", { opacity: 0, y: 24, filter: "blur(8px)" })
        .from("[data-hero-line]", { opacity: 0, y: 32, filter: "blur(10px)", stagger: 0.12 }, "-=0.7")
        .from("[data-hero-sub]", { opacity: 0, y: 24, filter: "blur(8px)" }, "-=0.6")
        .from("[data-hero-cta]", { opacity: 0, y: 20, filter: "blur(6px)", stagger: 0.08 }, "-=0.6")
        .from("[data-hero-card]", { opacity: 0, y: 40, scale: 0.96, stagger: 0.12 }, "-=0.8");
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={scope}
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-surface-a px-6 pt-32 pb-24 md:px-12"
    >
      <div
        className="pointer-events-none absolute -top-1/3 right-[-10%] h-[70vmax] w-[70vmax] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold), transparent 65%)" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <span
            data-hero-eyebrow
            className="inline-block rounded-full bg-on-a/[0.06] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-on-a/70 ring-1 ring-on-a/10"
          >
            {dict.hero.eyebrow}
          </span>

          <h1 className="mt-8 font-display text-[13vw] leading-[0.95] tracking-tight text-on-a sm:text-6xl md:text-7xl">
            <span data-hero-line className="block">
              {dict.hero.line1}
            </span>
            <span
              data-hero-line
              className="block bg-linear-to-r from-gold via-coral to-coral bg-clip-text text-transparent"
            >
              {dict.hero.line2}
            </span>
          </h1>

          <p data-hero-sub className="mt-8 max-w-md text-base leading-relaxed text-on-a/80">
            <span className="font-medium text-on-a">{dict.hero.subheadPrefix}</span>
            {dict.hero.subheadSuffix}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div data-hero-cta>
              <MagneticButton href={business.phoneTel} variant="primary" icon={<Phone weight="fill" className="h-4 w-4" />}>
                {dict.hero.callNow}
              </MagneticButton>
            </div>
            <div data-hero-cta>
              <MagneticButton
                href={business.whatsapp}
                variant="ghost-light"
                icon={<WhatsappLogo weight="light" className="h-4 w-4" />}
              >
                {dict.hero.whatsapp}
              </MagneticButton>
            </div>
          </div>

          <a
            data-hero-cta
            href={business.mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-on-a/70 underline decoration-on-a/30 underline-offset-4 transition-colors hover:text-on-a"
          >
            {dict.hero.directions} <ArrowUpRight weight="light" className="h-3.5 w-3.5" />
          </a>
        </div>

        <div data-hero-card className="hidden md:block">
          <HeroVisual className="w-full" />
        </div>

        <div data-hero-card className="mx-auto w-full max-w-70 md:hidden">
          <HeroVisual className="w-full" />
        </div>
      </div>
    </section>
  );
}
