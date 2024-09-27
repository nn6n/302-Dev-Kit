"use client";

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { login } from "@/lib/auth";
import { useAppStore } from "@/stores";

const schema = z.object({
  code: z.string().optional(),
  remember: z.boolean().optional(),
});

const useAuth = () => {
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: "", // 默认值为空
      remember: true, // 设置勾选
    },
    resolver: zodResolver(schema),
  });

  const performAuth = async (code: string, remember: boolean) => {
    try {
      setErrorMessage("");
      setIsPending(true);
      // 调用验证接口
      const result = await login(code);
      const { updateConfig } = useAppStore.getState();
      updateConfig({ ...result.data });

      // 成功跳转主页 并且 去除链接参数
      if (remember) {
        localStorage.setItem("code", code);
      } else {
        localStorage.setItem("code", "");
      }
      router.replace("/"); // 跳转并且清除query
    } catch (err) {
      console.error(err);
      setErrorMessage(err as string);
    } finally {
      setIsPending(false);
    }
  };

  const onSubmit = async (data: any) => {
    const { code, remember } = data;
    await performAuth(code, remember);
  };

  const checkAuth = () => {
    const { apiKey } = useAppStore.getState();
    if (!apiKey) {
      redirect("/auth");
    }
  };

  return {
    isPending,
    setValue,
    checkAuth,
    onAuth: handleSubmit(onSubmit),
    watch,
    register,
    errors,
    errorMessage,
  };
};

export default useAuth;
