"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { emitter } from "@/lib/mitt";
import { useAppStore } from "@/stores";

export function Test() {
  const router = useRouter();
  const { updateConfig } = useAppStore.getState();

  const handleGoAuth = () => {
    router.push("/auth");
  };


  const handleTestLogout = () => {
    updateConfig({ apiKey: "", code: "" });
    localStorage.setItem("code", "");
    emitter.emit("ToastSuccess", "Logout success!");
  };

  const handleTestSuccess = () => {
    emitter.emit("ToastSuccess", "Everythin is on the control!");
  };

  const handleTestError = () => {
    emitter.emit(
      "ToastError",
      "Oh! Something was wrong, please view http://302ai.com for more infomation"
    );
  };

  return (
    <div className="flex max-w-[200px] flex-col space-y-4 p-4 text-center">
      <Button onClick={handleGoAuth}>Go Auth</Button>
      <Button onClick={handleTestLogout}>Test Logout</Button>
      <Button onClick={handleTestSuccess}>Test Success</Button>
      <Button onClick={handleTestError}>Test Error</Button>
    </div>
  );
}
