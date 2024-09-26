import { Home } from "@/icons";

export type MenuProps = {
  id: number;
  label: string;
  icon: JSX.Element;
  path: string;
  section?: boolean;
  integration?: boolean;
};

export const APP_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Home",
    icon: <Home />,
    path: "/",
    section: true,
  },
  {
    id: 1,
    label: "Image",
    icon: <Home />,
    path: "/image",
    section: true,
  },
  {
    id: 1,
    label: "Video",
    icon: <Home />,
    path: "/vidoe",
  },
];
