import { useCallback, useEffect, useState } from "react";
import { runWithReveal } from "../lib/viewTransition";

export type Theme = "light" | "dark";
const STORAGE_KEY = "fly-theme";

function getInitialTheme(): Theme {
  return (document.documentElement.dataset.theme as Theme) || "light";
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = useCallback(
    (origin?: { x: number; y: number }) => {
      const next: Theme = theme === "dark" ? "light" : "dark";
      runWithReveal(origin, () => setThemeState(next));
    },
    [theme],
  );

  return { theme, toggle };
}
