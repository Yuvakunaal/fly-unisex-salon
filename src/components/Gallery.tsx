import { useLanguage } from "../i18n/LanguageContext";
import { PlaceholderImage } from "./ui/PlaceholderImage";

const variants: ("gold" | "teal" | "coral")[] = ["gold", "teal", "coral", "gold", "teal", "coral", "gold", "teal"];

export function Gallery() {
  const { dict } = useLanguage();

  return (
    <section id="gallery" className="overflow-hidden bg-surface-b py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div data-reveal className="max-w-xl">
          <span className="inline-block rounded-full bg-on-b/[0.06] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-on-b/70 ring-1 ring-on-b/10">
            {dict.gallery.eyebrow}
          </span>
          <h2 className="mt-6 font-display text-4xl text-on-b md:text-5xl">
            {dict.gallery.heading}
          </h2>
        </div>
      </div>

      <div data-reveal className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:px-12">
        {dict.gallery.tiles.map((label, i) => (
          <PlaceholderImage
            key={label}
            label={label}
            variant={variants[i]}
            rotate={i % 2 === 0 ? "-rotate-1" : "rotate-1"}
            className="aspect-[3/4] w-56 shrink-0 snap-start md:w-64"
          />
        ))}
      </div>
    </section>
  );
}
