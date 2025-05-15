import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export type ThemeName = "red-theme" | "blue-theme" | "yellow-theme" | "hacker";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function selectTheme(theme: ThemeName) {
  const themes = new Set<string>([
    "red-theme",
    "blue-theme",
    "yellow-theme",
    "hacker",
    "violet-theme",
  ]);

  document.documentElement.classList.remove(...themes);
  if (theme === "hacker") {
    localStorage.removeItem("theme");
    return;
  }

  const selectedTheme = themes.has(theme);
  if (selectedTheme) {
    document.documentElement.classList.add(theme);
    localStorage.theme = theme;
  }
}
