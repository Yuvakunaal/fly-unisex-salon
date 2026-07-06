import { useState } from "react";
import { Butterfly } from "@phosphor-icons/react";

/**
 * Icon-only crop of the real Fly butterfly mark (scissors + comb wings), for
 * compact placements like the nav. Falls back to a Phosphor glyph if the
 * asset is ever missing.
 */
export function LogoMark({ height, className }: { height?: number; className?: string }) {
  const [broken, setBroken] = useState(false);
  const style = height ? { height, width: height } : undefined;

  if (broken) {
    return <Butterfly weight="fill" style={style} className={className} />;
  }

  return (
    <img
      src="/logo-mark.png"
      alt=""
      aria-hidden="true"
      onError={() => setBroken(true)}
      style={style}
      className={className}
    />
  );
}
