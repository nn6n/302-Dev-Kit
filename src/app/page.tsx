"use client";

import { useEffect } from "react";

import { Test } from "@/components/common/test";
import Locale from "@/locales";

export default function HomePage() {
  useEffect(() => {
    document.title = Locale.Home.Title;
  });
  return (
    <div className="flex h-[2500px] flex-col items-center">
      <Test />
    </div>
  );
}
