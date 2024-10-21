"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useIsLogin } from "@/hooks/global";
import { useTranslation } from "@/i18n/client";
import { emitter } from "@/lib/mitt";
import { useAppStore } from "@/stores";

type TestProps = {
  locale?: string;
};

const LogOutButton = ({ locale }: TestProps) => {
  const { t } = useTranslation(locale as string);
  const router = useRouter();
  const updateConfig = useAppStore((state) => state.updateConfig);
  const handleLogout = () => {
    updateConfig({ apiKey: "", code: "" });
    localStorage.setItem("code", "");
    router.push("/auth");
  };
  return <Button onClick={handleLogout}>{t("logout")}</Button>;
};

const Test = ({ locale }: TestProps) => {
  const isLogin = useIsLogin();

  useEffect(() => {
    if (isLogin) emitter.emit("ToastSuccess", "ddd");
  }, [isLogin]);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 p-4 text-center">
      <LogOutButton locale={locale} />
    </div>
  );
};

export default Test;
