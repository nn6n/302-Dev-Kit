"use client";

import { ReactNode, useEffect, useState } from "react";

import Loading from "@/components/common/loading";

interface ClientOnlyProps {
  children: ReactNode;
}

export default function AppClient({
  children,
}: ClientOnlyProps): JSX.Element | null {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="flex w-full flex-col justify-start space-y-4 p-4">
        <Loading></Loading>
      </div>
    );
  }

  return <>{children}</>;
}
