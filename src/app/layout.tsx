import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import AppClient from "@/components/global/app-client";
import AppFooter from "@/components/global/app-footer";
import AppMessage from "@/components/global/app-message";
import AppNavbar from "@/components/global/app-navbar";
import AppQeury from "@/components/global/app-query";
import AppTheme from "@/components/global/app-theme";
import { cn } from "@/lib/utils";
import Locale from "@/locales";
import "@/styles/globals.css";

const AppChat = dynamic(() => import("@/components/global/app-chat"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: Locale.Home.Title,
  description: Locale.Home.Desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={cn(inter.className, "h-screen w-screen")}>
        <AppTheme>
          <AppClient>
            <AppQeury>
              <AppNavbar />
              <Suspense>
                <main className="flex grow">{children}</main>
              </Suspense>
              <AppFooter />
            </AppQeury>
          </AppClient>
        </AppTheme>

        <AppChat />
        <AppMessage />
      </body>
    </html>
  );
}
