"use client";

// import MenuSheet from "./menu-sheet";
import { useIsLogin } from "@/hooks/global";

import { InfoModal } from "./info-modal";
import LangSwitcher from "./lang-switcher";
import ThemeSwitcher from "./theme-switcher";

type AppNavbarProps = {
  locale: string;
};
export default function AppNavbar({ locale }: AppNavbarProps) {
  // console.log('locale;::::', locale)
  const isLogin = useIsLogin();

  return (
    <nav className="sticky top-0 flex w-full items-center justify-between space-x-2 bg-background/95 p-2 shadow-sm">
      <div className="flex justify-start"></div>
      <div className="flex justify-end">
        {isLogin && <InfoModal />}
        <LangSwitcher locale={locale} />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
