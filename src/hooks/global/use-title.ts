'use client'
import { usePathname } from "next/navigation";
import { useEffect } from 'react';

import { APP_CONSTANTS } from '@/constants';
import Locale from "@/locales";

export const useTitle = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Auto set page title for current router
    const currentRouter = APP_CONSTANTS.appRouteMenu.find(it => it.path === pathname)
    if (currentRouter) {
      document.title = `${currentRouter.label} - ${Locale.Navigator.Domain}`
    }
  }, [pathname]);
}

