import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import AppClient from "@/components/global/app-client";
import AppError from "@/components/global/app-error";
import AppFooter from "@/components/global/app-footer";
import AppNavbar from "@/components/global/app-navbar";
import AppTheme from "@/components/global/app-theme";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "302AI",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-cover dark:bg-black">
      <head>
        {/* <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        /> */}
      </head>
      <body className={cn(inter.className, "h-screen w-screen")}>
        <AppClient>
          <AppTheme>
            <AppNavbar />
            <main className="grow">
              <Suspense>{children}</Suspense>
            </main>
            <AppFooter />
          </AppTheme>
        </AppClient>
        <AppError />
        <Toaster />
      </body>
    </html>
  );
}
