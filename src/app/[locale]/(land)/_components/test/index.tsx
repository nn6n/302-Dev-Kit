"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useClientTranslation, useIsLogin } from "@/hooks/global";
import { emitter } from "@/lib/mitt";
import { useAppStore } from "@/stores";

const LogOutButton = () => {
  const { t } = useClientTranslation();
  const router = useRouter();
  const updateConfig = useAppStore((state) => state.updateConfig);
  const handleLogout = () => {
    updateConfig({ apiKey: "", code: "" });
    localStorage.setItem("code", "");
    router.push("/auth");
  };
  return <Button onClick={handleLogout}>{t("global:system.logout")}</Button>;
};

const Test = () => {
  const isLogin = useIsLogin();

  useEffect(() => {
    if (isLogin) emitter.emit("ToastSuccess", "ddd");
  }, [isLogin]);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 p-4 text-center">
      <LogOutButton />
    </div>
  );
};

export default Test;
