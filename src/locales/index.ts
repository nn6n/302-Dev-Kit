import { useAppStore } from "@/stores"; // 应用状态管理
import DataManager from "@/utils/data"; // 数据管理工具
import en from "./en"; // 英文语言包
import ja from "./ja"; // 日文语言包
import type { LocaleType } from "./zh"; // 类型定义
import zh from "./zh"; // 中文语言包

const { updateConfig } = useAppStore.getState();      // 从全局状态获取更新配置的函数

export type { LocaleType, PartialLocaleType } from "./zh";

const ALL_LANGS = { zh, en, ja };                     // 所有语言包集合
export type Lang = keyof typeof ALL_LANGS;            // 语言类型
export const AllLangs = Object.keys(ALL_LANGS) as Lang[];  // 获取所有语言类型数组

export const ALL_LANG_OPTIONS = [
  { label: "中文", value: "zh" },
  { label: "English", value: "en" },
  { label: "日本語", value: "ja" },
];

const LANG_KEY = "tool-lang";                         // 本地存储中的语言键名
const DEFAULT_LANG = "en";                            // 默认语言

const fallbackLang = en;                              // 默认回退语言
const langSymbol: Lang = getLang();                   // 获取当前语言符号
const targetLang = ALL_LANGS[langSymbol] as LocaleType;

DataManager.mergeData(fallbackLang, targetLang);      // 合并语言数据
updateConfig({ language: langSymbol });               // 更新全局状态中的语言配置

export default targetLang;                            // 导出当前语言

/**
 * 尝试从本地存储获取指定键的值
 * @param key - 本地存储键
 * @returns 存储的值，或 null 如果不存在
 */
function getItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * 尝试将指定键值存储到本地存储，并更新配置
 * @param key - 本地存储键
 * @param value - 要存储的值
 */
function setItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
    updateConfig({ language: value });
  } catch { }
}

/**
 * 获取浏览器语言
 * @returns 浏览器语言，或默认语言
 */
function getLanguage(): string {
  try {
    return navigator.language.toLowerCase();
  } catch {
    return DEFAULT_LANG;
  }
}

/**
 * 获取当前语言，顺序为：URL参数 -> 本地存储 -> 浏览器首选语言 -> 默认语言
 * @returns 当前语言
 */
export function getLang(): Lang {
  if (typeof window !== "undefined") {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    const standardizedLang = urlLang ? urlLang.split('-')[0] : null;
    if (standardizedLang && AllLangs.includes(standardizedLang as Lang)) {
      return standardizedLang as Lang;
    }
  }

  const savedLang = getItem(LANG_KEY);
  if (savedLang && AllLangs.includes(savedLang as Lang)) {
    return savedLang as Lang;
  }

  const browserLang = getLanguage().split('-')[0];
  if (AllLangs.includes(browserLang as Lang)) {
    return browserLang as Lang;
  }

  return DEFAULT_LANG;
}

/**
 * 改变应用语言并刷新页面
 * @param lang - 新语言
 */
export function changeLang(lang: Lang | string): void {
  setItem(LANG_KEY, lang);
  location.reload();
}

/**
 * 设置应用语言，不刷新页面
 * @param lang - 新语言
 */
export function setLang(lang: Lang): void {
  setItem(LANG_KEY, lang);
}
