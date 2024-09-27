"use client";

import SignInForm from "@/components/forms/auth";
import AppLogo from "@/components/global/app-logo";
import { useDomain } from "@/hooks/global/use-domain";


const AuthPage = () => {
  const domain = useDomain()

  return (
    <div className="h-full w-full sm:p-12 flex items-center justify-center transition-all ease-in-out">
      <div className="relative m-auto w-full h-full flex items-center max-w-screen-md sm:rounded-md sm:border p-4 sm:shadow-2xl">
        <AppLogo className="absolute top-4 left-[50%] translate-x-[-50%] sm:translate-x-0 sm:top-4 sm:left-4 " />
        <SignInForm />
      </div>
    </div>
  );
};

export default AuthPage;
