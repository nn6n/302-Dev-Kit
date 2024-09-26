"use client";

import { useDomain } from "@/hooks/global/use-domain";
import Locale from "@/locales";
import Image from "next/image";

export default function AppFooter() {
  const domain = useDomain()

  return (
    <footer className="sticky flex w-full bottom-0 right-0 p-1">
      <div className="flex flex-col items-center justify-center p-0 w-full">
        <a href={domain} target="_blank" className="flex p-1 space-x-1 no-underline " >
          <div className="title text-xs text-[#666]">
            Powered By
          </div>
          <div className="banner flex items-center">
            <Image className="dark:block hidden" width={50} height={14} src="/images/global/logo-dark.png" alt="" />
            <Image className="dark:hidden" width={50} height={14} src="/images/global/logo-light.png" alt="" />
          </div>
        </a>
        <div className="flex justify-center text-center text-xs text-gray-400 ">
          {Locale.Footer.Title}
        </div>
      </div>
    </footer>
  );
}
