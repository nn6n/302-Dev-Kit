"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { login } from "@/services/auth";
import { useAppStore } from "@/stores";

// Define the schema using Zod for form validation
const schema = z.object({
  code: z.string().optional(),
  remember: z.boolean().optional(),
});

// Define the type for authentication data
type AuthData = {
  code: string;
  remember: boolean;
};

const useAuth = () => {
  const [isPending, setIsPending] = useState(false);
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Initialize form handling with react-hook-form and Zod resolver
  const {
    watch,
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<AuthData>({
    defaultValues: {
      code: "", // Default code to empty string
      remember: true, // Default remember to true
    },
    resolver: zodResolver(schema),
  });

  // Retrieve values from query param or local storage only when params change
  useEffect(() => {
    const queryCode = params.get("pw") || "";
    const storedCode = localStorage.getItem("code") || "";

    if (queryCode || storedCode) {
      setValue("code", queryCode || storedCode);
    }
  }, [params, setValue]);

  // Function to handle authentication
  const performAuth = useCallback(
    async ({ code, remember }: AuthData) => {
      try {
        setIsPending(true);

        // Call login function to validate the code
        const result = await login(code);

        // Update app configuration from the store with result
        const { updateConfig } = useAppStore.getState();
        updateConfig({ ...result.data });

        // Store or remove auth code based on remember flag
        if (remember) {
          localStorage.setItem("code", code);
        } else {
          localStorage.removeItem("code");
        }

        // Redirect to the home page if on auth page
        if (pathname === "/auth") {
          router.replace("/");
        }
      } catch (error: any) {
        // Handle error by navigating to auth and setting error state
        router.replace("/auth");
        setError("code", {
          type: "server",
          message: error.message,
        });
      } finally {
        setIsPending(false);
      }
    },
    [pathname, router, setError]
  );

  // Callback for form submission
  const onSubmit = useCallback(
    async (data: AuthData) => {
      await performAuth(data);
    },
    [performAuth]
  );

  return {
    isPending,
    setValue,
    onAuth: handleSubmit(onSubmit), // Assign form submit handler
    watch,
    register,
    errors,
  };
};

export default useAuth;
