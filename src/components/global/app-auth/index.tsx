"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { APP_CONSTANTS } from "@/constants";
import useAuth from "@/hooks/auth";

const AppAuth = () => {
  const pathname = usePathname();
  const { onAuth } = useAuth();

  useEffect(() => {
    // Auto auth for match router
    const neeAuthPages = APP_CONSTANTS.appRouteMenu
      .filter((it) => it.auth)
      .map((router) => router.path);
    if (neeAuthPages.includes(pathname)) {
      onAuth();
    }
  }, [pathname]);
  return null;
};

export default AppAuth;
