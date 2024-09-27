"use client";

import { useEffect, useState } from "react";

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
    <nav className="sticky top-0 flex w-full items-center justify-between space-x-2 bg-background/95 p-2 shadow-sm">
      <div className="flex justify-start">
        <MenuSheet />
      </div>
      <div className="flex justify-end">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
