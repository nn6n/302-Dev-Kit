import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function langToCountry(lang: string) {
  const map = {
    zh: "cn",
    en: "en",
    ja: "jp",
  };
  return map[lang as keyof typeof map] || lang;
}
