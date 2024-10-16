"use client";

import { useEffect, useState } from "react";

import { InfoModal } from "./info-modal";
import LangSwitcher from "./lang-switcher";
import MenuSheet from "./menu-sheet";
import ThemeSwitcher from "./theme-switcher";

export default function AppNavbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <nav className="sticky top-0 flex w-full items-center justify-between space-x-2 bg-background/95 p-2">
      <div className="flex justify-start">
        <MenuSheet />
      </div>
      <div className="flex justify-end">
        <InfoModal />
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
