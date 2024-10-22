"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useClientTranslation, useIsLogin } from "@/hooks/global";
import { emitter } from "@/lib/mitt";
import { useAppSession } from "@/stores";

const LogOutButton = () => {
  const { t } = useClientTranslation();
  const router = useRouter();
  const updateConfig = useAppSession((state) => state.updateConfig);
  const handleLogout = () => {
    updateConfig({ apiKey: "", code: "" });
    localStorage.setItem("code", "");
    sessionStorage.setItem("code", "");
    router.push("/auth");
  };
  return <Button onClick={handleLogout}>{t("global:system.logout")}</Button>;
};

const Test = () => {
  const { t } = useClientTranslation();
  const isLogin = useIsLogin();

  useEffect(() => {
    if (isLogin) emitter.emit("ToastSuccess", t("land:hello"));
  }, [isLogin, t]);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 p-4 text-center">
      {isLogin && <LogOutButton />}
    </div>
  );
};

export default Test;
