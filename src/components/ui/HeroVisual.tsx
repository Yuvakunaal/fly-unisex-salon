import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkle } from "@phosphor-icons/react";
import { LogoMark } from "./LogoMark";
import { cn } from "../../lib/cn";

export function HeroVisual({ className }: { className?: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("[data-ring]", { rotate: 360, duration: 90, repeat: -1, ease: "none" });
      gsap.to("[data-mark]", {
        rotate: -6,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-sparkle]", {
        opacity: 0.3,
        scale: 0.8,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: "sine.inOut",
      });
      gsap.fromTo(
        "[data-strand]",
        { strokeDashoffset: 420 },
        { strokeDashoffset: 0, duration: 1.8, delay: 0.4, ease: "power3.out" },
      );
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope} className={cn("relative aspect-square", className)}>
      <div
        className="absolute -inset-10 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-coral), transparent 65%)" }}
      />
      <div
        className="absolute -inset-6 rounded-full opacity-30 blur-2xl"
        style={{ background: "radial-gradient(circle, var(--color-gold), transparent 60%)" }}
      />

      <div data-ring className="absolute inset-[8%] rounded-full border border-dashed border-on-a/15" />
      <div className="absolute inset-[15%] rounded-full ring-1 ring-on-a/10" />

      <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          data-strand
          d="M60 220 C 120 260, 90 140, 150 150 S 220 60, 250 90"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="420"
        />
      </svg>

      <div
        data-mark
        className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper-fixed p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-deep/5"
      >
        <LogoMark height={80} className="w-auto" />
      </div>

      <Sparkle data-sparkle weight="fill" className="absolute right-[12%] top-[18%] h-5 w-5 text-gold" />
      <Sparkle data-sparkle weight="fill" className="absolute bottom-[22%] left-[14%] h-3.5 w-3.5 text-coral" />
    </div>
  );
}
