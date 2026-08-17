"use client";

import { THEME_COLORS, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";
import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function readServerTheme(): Theme {
  return "light";
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
  listeners.forEach((onChange) => onChange());
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Safari in private mode throws on setItem; the theme still applies for this session.
  }
}

export function useTheme() {
  return useSyncExternalStore(subscribe, readTheme, readServerTheme);
}
