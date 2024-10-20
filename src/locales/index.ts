// Import required methods and dependencies
import { mergeData } from "@/lib/utils";
import { useAppStore } from "@/stores";

// Import language packs
import en from "./en";
import ja from "./ja";
import zh from "./zh";

// Type definitions for locale types
type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;
export type LocaleType = typeof zh;
export type PartialLocaleType = DeepPartial<typeof zh>;

// Initialize global state update function
const { updateConfig } = useAppStore.getState();

// Define language pack and options
const ALL_LANGS = { zh, en, ja };
export type Lang = keyof typeof ALL_LANGS;
export const AllLangs = Object.keys(ALL_LANGS) as Lang[];

// Constants for language settings
const LANG_KEY = "ai-tool-lang";
const DEFAULT_LANG = "en";

// Define fallback and current language
const langSymbol: Lang = getLang();
const targetLang = ALL_LANGS[langSymbol];

// Merge language data and update global config
mergeData(en, targetLang);
updateConfig({ language: langSymbol });

// Export the selected language pack
export default targetLang;

/**
 * Determine if the environment is server or client
 */
function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * Retrieve stored item from localStorage
 * @param key - The key of the item to retrieve
 * @returns The stored item or null if not found
 */
function getItem(key: string): string | null {
  if (isClient()) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Store an item in localStorage and update configuration
 * @param key - The key under which to store the item
 * @param value - The value to store
 */
function setItem(key: string, value: string): void {
  if (isClient()) {
    try {
      localStorage.setItem(key, value);

      updateConfig({ language: value });
    } catch {
      // Todo: add log
    }
  }
}

/**
 * Get user's preferred language
 * @returns Preferred language or default language if unavailable
 */
function getLanguage(): string {
  if (isClient()) {
    try {
      return navigator.language.toLowerCase();
    } catch {
      return DEFAULT_LANG;
    }
  }
  return DEFAULT_LANG;
}

/**
 * Determine the current language based on priority order
 * URL parameter > Local Storage > Browser setting > Default
 * @returns Language code
 */
export function getLang(): Lang {
  if (isClient()) {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    const standardizedLang = urlLang?.split("-")[0];
    if (standardizedLang && AllLangs.includes(standardizedLang as Lang)) {
      return standardizedLang as Lang;
    }
  }

  const savedLang = getItem(LANG_KEY);
  if (savedLang && AllLangs.includes(savedLang as Lang)) {
    return savedLang as Lang;
  }

  const browserLang = getLanguage().split("-")[0];
  if (AllLangs.includes(browserLang as Lang)) {
    return browserLang as Lang;
  }

  return DEFAULT_LANG;
}

/**
 * Change application language and refresh page
 * @param lang - The new language code
 */
export function changeLang(lang: Lang): void {
  setItem(LANG_KEY, lang);
  if (isClient()) {
    location.reload();
  }
}

/**
 * Set application language without refreshing the page
 * @param lang - The new language code
 */
export function setLang(lang: Lang): void {
  setItem(LANG_KEY, lang);
}
