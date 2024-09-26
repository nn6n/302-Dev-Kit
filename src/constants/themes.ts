export type ThemeProps = {
  id: string;
  icon: string;
  label: string;
  value: string;
};

export const APP_THEME: ThemeProps[] = [
  {
    id: "0",
    icon: "light",
    label: "Light",
    value: "light",
  },
  {
    id: "1",
    icon: "dark",
    label: "Dark",
    value: "dark",
  },
  {
    id: "2",
    icon: "system",
    label: "System",
    value: "system",
  },
];
