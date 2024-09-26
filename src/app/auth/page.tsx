// pages/auth.js
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import SignInForm from "@/components/forms/auth";
import useAuth from "@/hooks/auth";

// pages/auth.js

const Auth = () => {
  const { isPending, setValue, onAuth, register, errors } = useAuth();
  const params = useSearchParams();

  useEffect(() => {
    const queryCode = params.get("pw");
    const storedCode = localStorage.getItem("code");

    if (queryCode) {
      setValue("code", queryCode);
    } else if (storedCode) {
      setValue("code", storedCode);
    }
  }, [params]);

  return (
    <div className="m-auto max-w-screen-sm">
      <SignInForm />
    </div>
  );
};

export default Auth;
