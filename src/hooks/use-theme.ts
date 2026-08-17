"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
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
  listeners.forEach((onChange) => onChange());
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Safari in private mode throws on setItem; the theme still applies for this session.
  }
}

export function useTheme() {
  return useSyncExternalStore(subscribe, readTheme, readServerTheme);
}
