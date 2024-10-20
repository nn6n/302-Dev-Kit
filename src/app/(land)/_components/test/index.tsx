"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { useIsLogin } from "@/hooks/global";
import { emitter } from "@/lib/mitt";
import Locale from "@/locales";
import { useAppStore } from "@/stores";

const LogOutButton = () => {
  const router = useRouter();
  const { updateConfig } = useAppStore.getState();
  const handleLogout = () => {
    updateConfig({ apiKey: "", code: "" });
    localStorage.setItem("code", "");
    router.push("/auth");
  };
  return <Button onClick={handleLogout}>{Locale.Land.Test.LogOut}</Button>;
};

const Test = () => {
  const isLogin = useIsLogin();

  useEffect(() => {
    if (isLogin) emitter.emit("ToastSuccess", Locale.Land.Test.Hello);
  }, [isLogin]);

  return (
    <div className="flex flex-col space-y-4 p-4 text-center">
      {env.NEXT_PUBLIC_302_API_KEY ? (
        <p className="text-center">
          YOUR_API_KEY: {env.NEXT_PUBLIC_302_API_KEY}
        </p>
      ) : (
        <LogOutButton />
      )}
    </div>
  );
};

export default Test;
