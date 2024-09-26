import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const map = {
  zh: "cn",
  en: "en",
  ja: "jp",
};

export function langToCountry(lang: string) {
  return map[lang as keyof typeof map] || lang;
}
