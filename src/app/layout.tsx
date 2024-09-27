import type { Metadata } from "next";
import dynamic from "next/dynamic";
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

const AppChat = dynamic(() => import("@/components/global/app-chat"), {
  ssr: false,
});

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
      <head></head>
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
        <AppChat />
        <AppError />
        <Toaster />
      </body>
    </html>
  );
}
