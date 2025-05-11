import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type themesName =   "rosso" | "blu" | "giallo" | "hacker"
const themes: Record<themesName, string | null> = {
  rosso: "red-theme",
  blu: "blue-theme",  
  giallo: "yellow-theme",  
  hacker: null
 }

export function cn(...inputs: ClassValue[]) {

  return twMerge(clsx(inputs));
}

export function selectTheme(theme: themesName){

  document.documentElement.classList.remove(...Object.values(themes).filter(Boolean) as string[])
  if(theme === "hacker") {
    localStorage.removeItem("theme")
    return
  }
  

 const selectedTheme = themes[theme] 
 if(selectedTheme){
  document.documentElement.classList.add(selectedTheme)
  localStorage.theme = selectedTheme
 }
}
