"use client";


import { InfoModal } from "./info-modal";
import LangSwitcher from "./lang-switcher";
// import MenuSheet from "./menu-sheet";
import { useAppStore } from "@/stores";
import ThemeSwitcher from "./theme-switcher";

export default function AppNavbar() {
  const apiKey = useAppStore((state) => state.apiKey)

  return (
    <nav className="sticky top-0 flex w-full items-center justify-between space-x-2 bg-background/95 p-2 shadow-sm">
      <div className="flex justify-start">{/* <MenuSheet /> */}</div>
      <div className="flex justify-end">
        {
          apiKey &&
          <InfoModal />
        }
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
