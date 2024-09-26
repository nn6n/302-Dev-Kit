"use client";

import SignInForm from "@/components/forms/auth";
import { Lock } from "@/icons";

const AuthPage = () => {
  return (
    <div className="h-full w-full p-12">
      <div className="m-auto w-full max-w-screen-sm rounded-md border p-4 shadow-2xl">
        <div className="flex w-full justify-center">
          <Lock className="h-10 w-10" />
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default AuthPage;
