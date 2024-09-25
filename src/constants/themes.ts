type ThemesProps = {
  id: string
  icon: string
  label: string
  value: string
}

export const ICON_LIST: ThemesProps[] = [
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
]
