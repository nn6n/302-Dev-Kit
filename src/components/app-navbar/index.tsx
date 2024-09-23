"use client";


import { ThemeSwitcher } from "./theme-switcher";

export default function AppNavbar() {
  return (
    <nav className=" sticky top-0 w-full flex-1 bg-background/95">
      <ThemeSwitcher />
    </nav>
  );
}
