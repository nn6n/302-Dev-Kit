"use client";

import SkeletonRenderer from '@/components/common/skeleton-renderer';
import { ReactNode, useEffect, useState } from "react";

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
      <SkeletonRenderer element='APP_CLIENT' />
    );
  }

  return <>{children}</>;
}
