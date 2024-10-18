"use client";

import AppLogo from "@/components/global/app-logo";
import Locale from "@/locales";

export default function AppFooter() {
  return (
    <footer className="flex w-full">
      <div className="flex w-full flex-col items-center justify-center space-y-1 p-1">
        <div className="flex items-center justify-center">
          <div className="text-xs text-[#666]">{Locale.Footer.Title}</div>
          <AppLogo className="w-12" />
        </div>
        <div className="flex justify-center text-center text-xs text-gray-400">
          {Locale.Footer.Desc}
        </div>
      </div>
    </footer>
  );
}
