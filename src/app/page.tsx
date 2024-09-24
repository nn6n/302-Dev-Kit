"use client"
import { Button } from "@/components/ui/button";
import Locale from "@/locales";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = Locale.Home.Title
  })
  return (
    <div className="flex h-[2500px] flex-col items-center">
      <Button variant={"default"}>Button</Button>
      <div>{Locale.Title}</div>
    </div>
  );
}
