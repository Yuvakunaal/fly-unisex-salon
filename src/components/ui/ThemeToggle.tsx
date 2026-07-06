import { Sun, Moon } from "@phosphor-icons/react";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    toggle({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-on-b/10 text-on-b transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-90",
        className,
      )}
    >
      <Sun
        weight="light"
        className={cn(
          "absolute h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0",
        )}
      />
      <Moon
        weight="light"
        className={cn(
          "absolute h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0",
        )}
      />
    </button>
  );
}
