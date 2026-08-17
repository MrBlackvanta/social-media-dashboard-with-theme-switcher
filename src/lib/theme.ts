export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

export const THEME_COLORS: Record<Theme, string> = {
  light: "#ffffff",
  dark: "#1d1f29",
};

export const applyStoredTheme = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t;var m=document.createElement("meta");m.name="theme-color";m.content=t==="dark"?"${THEME_COLORS.dark}":"${THEME_COLORS.light}";document.head.appendChild(m)}catch(e){}`;
