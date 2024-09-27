"use client";

import SignInForm from "@/components/forms/auth";
import AppLogo from "@/components/global/app-logo";
import { useDomain } from "@/hooks/global/use-domain";

const AuthPage = () => {
  const domain = useDomain();

  return (
    <div className="flex h-full w-full items-center justify-center transition-all ease-in-out sm:p-12">
      <div className="relative m-auto flex h-full w-full max-w-screen-md items-center p-4 sm:rounded-md sm:border sm:shadow-2xl">
        <AppLogo className="absolute left-[50%] top-4 translate-x-[-50%] sm:left-4 sm:top-4 sm:translate-x-0" />
        <SignInForm />
      </div>
    </div>
  );
};

export default AuthPage;
