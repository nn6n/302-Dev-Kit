"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useIsLogin } from "@/hooks/global";
import { emitter } from "@/lib/mitt";
import Locale from "@/locales";
import { useAppStore } from "@/stores";
import { useEffect } from "react";

const Test = () => {
  const router = useRouter();
  const { updateConfig } = useAppStore.getState();
  const isLogin = useIsLogin();

  const handleTestLogout = () => {
    updateConfig({ apiKey: "", code: "" });
    localStorage.setItem("code", "");
    router.push("/auth");
  };

  useEffect(() => {
    isLogin && emitter.emit("ToastSuccess", Locale.Land.Test.Hello);
  }, [isLogin]);

  return (
    <div className="flex max-w-[200px] flex-col space-y-4 p-4 text-center">
      <Button onClick={handleTestLogout}>{Locale.Land.Test.LogOut}</Button>
    </div>
  );
};

export default Test;
