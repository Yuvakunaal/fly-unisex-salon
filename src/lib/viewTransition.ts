/** Runs `apply` inside a circular-reveal view transition centered on `origin`, with a plain fallback. */
export function runWithReveal(origin: { x: number; y: number } | undefined, apply: () => void) {
  const root = document.documentElement;

  if (origin) {
    root.style.setProperty("--theme-toggle-x", `${origin.x}px`);
    root.style.setProperty("--theme-toggle-y", `${origin.y}px`);
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (document.startViewTransition && !reduceMotion) {
    document.startViewTransition(apply);
  } else {
    apply();
  }
}
