"use client";


import AppLogo from "@/components/global/app-logo";
import { useDomain } from "@/hooks/global/use-domain";
import Locale from "@/locales";

export default function AppFooter() {
  const domain = useDomain();

  return (
    <footer className="flex w-full">
      <div className="flex w-full flex-col items-center justify-center p-1">
        <a
          href={domain}
          target="_blank"
          className="flex items-center p-1 no-underline"
        >
          <div className="text-xs text-[#666]">Powered By</div>
          <AppLogo width={50} height={14} />
        </a>
        <div className="flex justify-center text-center text-xs text-gray-400">
          {Locale.Footer.Title}
        </div>
      </div>
    </footer>
  );
}
