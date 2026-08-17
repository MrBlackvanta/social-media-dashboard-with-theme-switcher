"use client";

import { setTheme, useTheme } from "@/hooks/use-theme";

export default function ThemeToggle() {
  const isDark = useTheme() === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex w-full items-center justify-between sm:w-auto sm:gap-3.25"
    >
      <span className="text-label font-bold text-muted dark:group-hover:text-ink">
        Dark Mode
      </span>
      <span className="flex w-12 rounded-full bg-track p-0.75 group-hover:v-toggle-gradient dark:v-toggle-gradient">
        <span className="size-4.5 translate-x-6 rounded-full bg-knob transition-transform motion-reduce:transition-none dark:translate-x-0 group-hover:dark:bg-card-hover" />
      </span>
    </button>
  );
}
