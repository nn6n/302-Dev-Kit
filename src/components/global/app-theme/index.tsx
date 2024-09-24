"use client";

import { ReactNode } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function AppTheme({ children }: { children: ReactNode }) {
  return (
    <div className="flex size-full flex-col">
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </div>
  );
}
