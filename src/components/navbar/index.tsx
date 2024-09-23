"use client";


import { useEffect, useState } from "react";
import { LangSwitcher } from "./lang-switcher";
import { ThemeSwitcher } from "./theme-switcher";

export default function Navbar() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <nav className=" sticky top-0 flex w-full items-center justify-end space-x-2 bg-background/95 p-2 shadow-sm">
      <LangSwitcher />
      <ThemeSwitcher />
    </nav>
  );
}
