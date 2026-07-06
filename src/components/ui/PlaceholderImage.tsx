import type { HTMLAttributes } from "react";
import { Image } from "@phosphor-icons/react";
import { cn } from "../../lib/cn";

const gradients = {
  gold: "from-gold via-[#e08a4f] to-coral",
  teal: "from-teal via-[#284a46] to-deep",
  coral: "from-coral via-[#b5563f] to-gold",
} as const;

export function PlaceholderImage({
  label,
  variant = "gold",
  rotate,
  className,
  ...rest
}: {
  label: string;
  variant?: keyof typeof gradients;
  rotate?: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={cn(
        "relative flex flex-col justify-end overflow-hidden rounded-[2rem] bg-linear-to-br p-5",
        gradients[variant],
        rotate,
        className,
      )}
    >
      <Image weight="thin" className="absolute right-5 top-5 h-8 w-8 text-on-b/50" />
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-on-b/80">
        {label}
      </span>
    </div>
  );
}
