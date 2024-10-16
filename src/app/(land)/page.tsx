"use client";

import { useEffect } from "react";

import Locale from "@/locales";
import LandHeader from "./_components/header";
import Test from "./_components/test";

export default function HomePage() {
  useEffect(() => {
    document.title = Locale.Home.Title;
  });
  return (
    <div className="flex w-full flex-col items-center  p-8">
      <LandHeader title="Welcome To 302.AI" />
      <Test />
    </div>
  );
}
