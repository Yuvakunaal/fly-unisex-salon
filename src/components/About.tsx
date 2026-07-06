import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="bg-surface-b px-6 py-24 text-on-b md:px-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        <span
          data-reveal
          className="inline-block rounded-full bg-on-b/[0.06] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-on-b/70 ring-1 ring-on-b/10"
        >
          {dict.about.eyebrow}
        </span>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {dict.about.letters.map(({ letter, word, meaning }) => (
            <div key={letter} data-reveal>
              <span className="font-display text-7xl italic text-gold">{letter}</span>
              <p className="mt-4 font-display text-2xl">{word}</p>
              <p className="mt-2 text-sm leading-relaxed text-on-b/75">{meaning}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-16 rounded-[2.5rem] bg-on-b/5 p-2 ring-1 ring-on-b/10">
          <div className="rounded-[2.125rem] bg-surface-b-soft p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] md:p-12">
            <p className="quote-text font-display text-2xl leading-snug text-on-b/95 md:text-3xl">
              "{dict.about.quote}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
