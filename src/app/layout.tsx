import type { Metadata } from "next";
import { Suspense } from "react";

import Navbar from "@/components/global/app-navbar";
import ClientOnly from "@/components/global/client-only";
import Providers from "@/components/global/providers";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "302AI",
  description: "",
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
      <body className="h-screen w-screen ">
        <ClientOnly>
          <Providers>
            <Navbar />
            <main className="grow">
              <Suspense>{children}</Suspense>
            </main>
          </Providers>
        </ClientOnly>
      </body>
    </html>
  );
}
