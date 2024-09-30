import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";

import { env } from "@/env";

const authPath = env.NEXT_PUBLIC_AUTH_PATH!;

export const useIsAuthPath = () => {
  const { locale } = useParams();
  const pathname = usePathname();

  const isAuthPage = useMemo(
    () => pathname === `/${locale}${authPath}`,
    [pathname, locale]
  );

  return { isAuthPage };
}

// export default useIsAuthPath;
