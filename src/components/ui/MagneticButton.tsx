import { useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { cn } from "../../lib/cn";

type Variant = "primary" | "ghost-dark" | "ghost-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-linear-to-br from-gold to-coral text-deep shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]",
  "ghost-dark": "border border-on-b/25 text-on-b bg-on-b/5",
  "ghost-light": "border border-on-a/15 text-on-a bg-on-a/[0.03]",
};

const nubClasses: Record<Variant, string> = {
  primary: "bg-deep/10",
  "ghost-dark": "bg-on-b/10",
  "ghost-light": "bg-on-a/8",
};

export function MagneticButton({
  href,
  children,
  icon,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);

  function ensureQuick() {
    if (!ref.current) return;
    quickX.current ??= gsap.quickTo(ref.current, "x", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
    quickY.current ??= gsap.quickTo(ref.current, "y", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
  }

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!ref.current) return;
    ensureQuick();
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    quickX.current?.(relX * 0.35);
    quickY.current?.(relY * 0.5);
  }

  function onMouseLeave() {
    ensureQuick();
    quickX.current?.(0);
    quickY.current?.(0);
  }

  return (
    <a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full py-2.5 pl-6 pr-2.5 text-sm font-medium tracking-wide",
        "transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]",
        variantClasses[variant],
        className,
      )}
    >
      <span>{children}</span>
      {icon && (
        <span
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
            "group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105",
            nubClasses[variant],
          )}
        >
          {icon}
        </span>
      )}
    </a>
  );
}
