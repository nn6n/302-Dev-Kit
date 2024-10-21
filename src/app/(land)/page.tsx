// "use client";
import Locale from "@/locales";

import LandHeader from "./_components/header";

import { useAppStore } from "@/stores";
import Test from "./_components/test";

const HomePage = async () => {
  await new Promise((resolve) => { setTimeout(() => { resolve("done") }, 2 * 1000) })
  const { apiKey } = useAppStore.getState();

  return (
    <div className="flex w-full flex-col items-center p-8">
      <LandHeader title={Locale.Land.Title} />
      <Test />
    </div>
  );
}

export default HomePage
