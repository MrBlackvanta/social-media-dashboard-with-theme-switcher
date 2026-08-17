"use client";

import { setTheme, useTheme } from "@/hooks/use-theme";
import { withThemeSweep } from "@/lib/view-transition";

export default function ThemeToggle() {
  const isDark = useTheme() === "dark";

  function toggle(event: React.MouseEvent<HTMLButtonElement>) {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const origin = { x: left + width / 2, y: top + height / 2 };

    withThemeSweep(() => setTheme(isDark ? "light" : "dark"), origin, !isDark);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={toggle}
      className="group -my-3 flex w-full items-center justify-between py-3 sm:w-auto sm:gap-3.25"
    >
      <span className="text-label font-bold text-muted dark:group-hover:text-ink">
        Dark Mode
      </span>
      <span className="flex w-12 rounded-full bg-track p-0.75 group-hover:v-toggle-gradient dark:v-toggle-gradient">
        <span className="size-4.5 translate-x-6 rounded-full bg-knob motion-safe:transition-transform dark:translate-x-0 dark:group-hover:bg-card-hover" />
      </span>
    </button>
  );
}
