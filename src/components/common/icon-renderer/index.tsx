import { Home, HomeDuoToneWhite } from "@/icons";

type IconRendererProps = {
  mode: "LIGHT" | "DARK";
  icon: string;
};

export const IconRenderer = ({ mode, icon }: IconRendererProps) => {
  switch (icon) {
    case "general":
      return mode === "DARK" ? <Home /> : <HomeDuoToneWhite />;
    default:
      return <></>;
  }
};
