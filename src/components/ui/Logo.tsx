import { useState } from "react";
import { cn } from "../../lib/cn";

/**
 * Full logo lockup (mark + "Fly Unisex Salon" wordmark). Its linework is
 * black, so it only reads on a light backdrop — always sits on a fixed
 * light plate regardless of site theme. Falls back to text if the asset
 * is missing.
 */
export function Logo({ height = 72, className }: { height?: number; className?: string }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <span
        style={{ fontSize: height * 0.5 }}
        className={cn("font-display italic leading-none text-on-b", className)}
      >
        Fly
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex items-center justify-center rounded-2xl bg-paper-fixed p-3", className)}
    >
      <img
        src="/logo.png"
        alt="Fly Unisex Salon"
        onError={() => setBroken(true)}
        style={{ height }}
        className="w-auto object-contain"
      />
    </span>
  );
}
