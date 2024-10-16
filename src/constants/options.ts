
export type OptionProps = {
  id: number;
  label: string;
  value: string;
};

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
