import { Home, Lock } from "@/icons";

export type MenuProps = {
  id: number;
  label: string;
  icon: JSX.Element;
  path: string;
  section?: boolean;
  integration?: boolean;
};

export const APP_ROUTE_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Land",
    icon: <Home />,
    path: "/",
    section: true,
  },
  {
    id: 1,
    label: "Auth",
    icon: <Lock />,
    path: "/auth",
    section: true,
  },
];
