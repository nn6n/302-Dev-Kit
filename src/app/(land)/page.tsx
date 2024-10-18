"use client";

import { useEffect } from "react";

import useAuth from "@/hooks/auth";
import Locale from "@/locales";

import LandHeader from "./_components/header";
import Test from "./_components/test";

export default function HomePage() {
  const { onAuth } = useAuth();

  useEffect(() => {
    onAuth();
  }, []);

  return (
    <div className="flex w-full flex-col items-center p-8">
      <LandHeader title={Locale.Land.Title} />
      <Test />
    </div>
  );
}
