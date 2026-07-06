import { serviceLayout } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { cn } from "../lib/cn";

export function Services() {
  const { dict } = useLanguage();

  return (
    <section id="services" className="bg-surface-a-soft px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="max-w-xl">
          <span className="inline-block rounded-full bg-on-a/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-on-a/70 ring-1 ring-on-a/10">
            {dict.services.eyebrow}
          </span>
          <h2 className="mt-6 font-display text-4xl text-on-a md:text-5xl">
            {dict.services.heading}
          </h2>
          <p className="mt-4 text-sm text-on-a/65">{dict.services.disclaimer}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-3 lg:auto-rows-[minmax(0,1fr)]">
          {dict.services.items.map((service, i) => {
            const isDark = serviceLayout[i] === "lg";
            return (
              <div
                key={service.category}
                data-reveal
                className={cn(
                  "rounded-[2rem] p-1.5 ring-1",
                  isDark ? "bg-surface-b/90 ring-on-a/10 lg:col-span-2 lg:row-span-2" : "bg-on-a/5 ring-on-a/10",
                )}
              >
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[1.625rem] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]",
                    isDark ? "bg-surface-b-soft text-on-b shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]" : "bg-surface-a text-on-a",
                  )}
                >
                  <h3 className="font-display text-2xl">{service.category}</h3>
                  <p className={cn("mt-2 text-sm leading-relaxed", isDark ? "text-on-b/70" : "text-on-a/70")}>
                    {service.blurb}
                  </p>

                  <div className={cn("mt-6 flex-1 space-y-3 border-t pt-6", isDark ? "border-on-b/10" : "border-on-a/10")}>
                    {service.items.map((item) => (
                      <div key={item.name} className="flex items-baseline justify-between gap-4 text-sm">
                        <span className={isDark ? "text-on-b/90" : "text-on-a/85"}>{item.name}</span>
                        <span className={cn("font-medium", isDark ? "text-gold-soft" : "text-coral")}>
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
