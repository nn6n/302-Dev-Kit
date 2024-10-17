export type OptionProps = {
  id: number;
  label: string;
  value: string;
};

export const APP_LANG_OPTION: OptionProps[] = [
  {
    id: 1,
    label: "中文",
    value: "zh",
  },
  {
    id: 2,
    label: "English",
    value: "en",
  },
  {
    id: 3,
    label: "日本語",
    value: "ja",
  },
];

export const APP_THEME_OPTION: OptionProps[] = [
  {
    id: 1,
    label: "Light",
    value: "light",
  },
  {
    id: 2,
    label: "Dark",
    value: "dark",
  },
  {
    id: 3,
    label: "System",
    value: "system",
  },
];
