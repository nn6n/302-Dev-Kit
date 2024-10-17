"use client";

import { useEffect } from "react";

import useAuth from "@/hooks/auth";
import Locale from "@/locales";

import LandHeader from "./_components/header";
import Test from "./_components/test";

export default function HomePage() {
  useAuth();

  useEffect(() => {
    document.title = `${Locale.Land.Title} - ${Locale.Domain}`;
  });

  return (
    <div className="flex w-full flex-col items-center p-8">
      <LandHeader title={Locale.Land.Title} />
      <Test />
    </div>
  );
}
