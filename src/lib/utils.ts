import { redirect } from "next/navigation";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { useAppStore } from "@/stores";

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

export async function requireAuth() {
  const { apiKey } = useAppStore.getState();
  if (!apiKey) {
    redirect("/auth");
  }
}
