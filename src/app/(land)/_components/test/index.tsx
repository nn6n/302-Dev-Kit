"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsLogin } from "@/hooks/global";
import { useCopyToClipboard } from "@/hooks/global/use-copy";
import { emitter } from "@/lib/mitt";
import Locale from "@/locales";
import { useAppStore } from "@/stores";

const LogOutButton = () => {
  const router = useRouter();
  const updateConfig = useAppStore(state => state.updateConfig);
  const handleLogout = () => {
    updateConfig({ apiKey: "", code: "" });
    localStorage.setItem("code", "");
    router.push("/auth");
  };
  return <Button onClick={handleLogout}>{Locale.Land.Test.LogOut}</Button>;
};

const RenderKey = () => {
  const apiKey = useAppStore(state => state.apiKey);
  const { copyToClipboard } = useCopyToClipboard({
    onCopy: () => {
      emitter.emit("ToastSuccess", "Copy API-KEY Success!");
    },
  });
  if (!apiKey) return null

  return (
    <div className="w-full flex space-x-2 max-w-[580px]">
      <Input className="flex-1" value={apiKey} readOnly />
      <Button variant="secondary" onClick={() => copyToClipboard(apiKey)}>
        Copy
      </Button>
    </div>
  )

}

const Test = () => {
  const isLogin = useIsLogin();

  useEffect(() => {
    if (isLogin) emitter.emit("ToastSuccess", Locale.Land.Test.Hello);
  }, [isLogin]);

  return (
    <div className="flex flex-col space-y-4 p-4 text-center justify-center items-center w-full">
      <RenderKey />
      <LogOutButton />
    </div>
  );
};

export default Test;
