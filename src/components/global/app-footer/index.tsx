"use client";

import Image from "next/image";

import { useDomain } from "@/hooks/global/use-domain";
import Locale from "@/locales";

export default function AppFooter() {
  const domain = useDomain();

  return (
    <footer className="sticky bottom-0 right-0 flex w-full">
      <div className="flex w-full flex-col items-center justify-center p-1">
        <a
          href={domain}
          target="_blank"
          className="flex space-x-1 p-1 no-underline"
        >
          <div className="title text-xs text-[#666]">Powered By</div>
          <div className="banner flex items-center">
            <Image
              className="hidden dark:block"
              width={50}
              height={14}
              src="/images/global/logo-dark.png"
              alt=""
            />
            <Image
              className="dark:hidden"
              width={50}
              height={14}
              src="/images/global/logo-light.png"
              alt=""
            />
          </div>
        </a>
        <div className="flex justify-center text-center text-xs text-gray-400">
          {Locale.Footer.Title}
        </div>
      </div>
    </footer>
  );
}
