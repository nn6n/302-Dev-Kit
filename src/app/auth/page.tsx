"use client";

import SignInForm from "@/components/forms/auth";
import AppLogo from "@/components/global/app-logo";
import { useDomain } from "@/hooks/global/use-domain";

const AuthPage = () => {
  const domain = useDomain();

  return (
    <div className="fixed left-0 top-0 h-full w-full items-center justify-center transition-all ease-in-out sm:relative sm:p-12">
      <div className="relative m-auto flex h-full w-full max-w-screen-lg items-center bg-white p-4 dark:bg-black sm:rounded-2xl sm:border sm:shadow-2xl">
        <AppLogo className="absolute left-[50%] top-8 translate-x-[-50%] sm:left-4 sm:top-4 sm:translate-x-0" />
        <SignInForm />
      </div>
    </div>
  );
};

export default AuthPage;
