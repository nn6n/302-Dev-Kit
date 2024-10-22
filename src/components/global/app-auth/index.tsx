"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { env } from "@/env";
import useAuth from "@/hooks/auth";
import { useLocaleRouter } from "@/hooks/global";
import { useAppStore } from "@/stores";

const AppAuth = () => {
  // Use auth code
  const pathname = usePathname();
  const { replaceRouter } = useLocaleRouter();
  const { onAuth } = useAuth();
  const updateConfig = useAppStore((state) => state.updateConfig);
  const { isAuthRouter } = useLocaleRouter();

  useEffect(() => {
    // Use env api-key
    if (env.NEXT_PUBLIC_302_API_KEY) {
      // Update app configuration from the store with result
      updateConfig({ apiKey: env.NEXT_PUBLIC_302_API_KEY });
      if (pathname === env.NEXT_PUBLIC_AUTH_PATH) {
        replaceRouter("/");
      }
      return;
    }
    // Auto auth for match router
    if (isAuthRouter) {
      onAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return null;
};

export default AppAuth;
