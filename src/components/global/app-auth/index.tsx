"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { APP_CONSTANTS } from "@/constants";
import { env } from "@/env";
import useAuth from "@/hooks/auth";
import { useAppStore } from "@/stores";

const AppAuth = () => {
  // Use auth code
  const router = useRouter();
  const pathname = usePathname();
  const { onAuth } = useAuth();
  const updateConfig = useAppStore((state) => state.updateConfig);

  useEffect(() => {
    // Use env api-key
    if (env.NEXT_PUBLIC_302_API_KEY) {
      // Update app configuration from the store with result
      updateConfig({ apiKey: env.NEXT_PUBLIC_302_API_KEY });
      if (pathname === env.NEXT_PUBLIC_AUTH_PATH) {
        router.replace("/");
      }
      return;
    }
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
