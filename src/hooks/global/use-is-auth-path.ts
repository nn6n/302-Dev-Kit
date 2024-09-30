import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { env } from "@/env";

const authPath = env.NEXT_PUBLIC_AUTH_PATH!;

export const useIsAuthPath = () => {
  const pathname = usePathname();

  const isAuthPage = useMemo(() => pathname === `/${authPath}`, [pathname]);

  return { isAuthPage };
};
