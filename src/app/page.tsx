"use client";

import { useEffect } from "react";

import { Test } from "@/components/common/test";
// import { Button } from "@/components/ui/button";
import Locale from "@/locales";

export default function HomePage() {
  useEffect(() => {
    document.title = Locale.Home.Title;
  });
  return (
    <div className="flex h-[2500px] flex-col items-center">
      <div className="test bg-white">dddd</div>
      <Test />
      {/* <Button variant={"default"}>Button</Button> */}
      {/* <div>{Locale.Title}</div> */}
    </div>
  );
}
