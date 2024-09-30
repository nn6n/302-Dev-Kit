import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 合并和转换类名
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // 使用clsx转换类名并使用twMerge合并相同的Tailwind类
}

// 合并数据，递归合并source对象到target对象
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeData = (target: any, source: any): void => {
  Object.keys(source).forEach((key) => {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      if (
        !target[key] ||
        typeof target[key] !== "object" ||
        Array.isArray(target[key])
      ) {
        target[key] = {}; // 初始化对象
      }
      mergeData(target[key], source[key]); // 递归合并
    } else {
      target[key] = source[key]; // 直接赋值
    }
  });
};

// 语言代码转换为国家代码
export function langToCountry(lang: string) {
  const map: { [key: string]: string } = {
    zh: "cn",
    en: "en",
    ja: "jp",
  };
  return map[lang] ?? lang; // 使用可选链运算符简化默认返回
}

// 检测字符串中是否包含中文字符
export const containsChinese = (str: string): boolean =>
  /[\u4E00-\u9FA5]/.test(str);

// 复制文本数据到剪贴板
export const copyToClipboard = (text: string): void => {
  if (!text) return;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Failed to copy to clipboard: ", err);
    });
  } else {
    const textarea = document.createElement("textarea");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.value = text;
    textarea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Failed to copy using execCommand: ", err);
    }
    document.body.removeChild(textarea);
  }
};
