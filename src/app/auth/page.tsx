"use client";

import SignInForm from "@/components/forms/auth";
import AppLogo from "@/components/global/app-logo";
import { Lock } from "@/icons";
import Locale from "@/locales";

const AuthPage = () => {
  return (
    <div className="fixed left-0 top-0 size-full items-center justify-center transition-all ease-in-out sm:relative sm:p-12">
      <div className="relative m-auto flex size-full max-w-screen-lg items-center bg-white p-4 dark:bg-black sm:rounded-2xl sm:border sm:shadow-2xl">
        <div className="absolute left-[50%] top-8 translate-x-[-50%] sm:left-4 sm:top-4 sm:translate-x-0" >
          <AppLogo className="w-36" />
        </div>
        <div className="relative flex w-full transform flex-col items-center justify-center ease-in-out">
          <div className="flex w-full flex-col items-center justify-center space-y-2 text-center">
            <Lock className="size-14" />
            <h2 className="text-2xl font-bold">{Locale.Auth.NeedCode}</h2>
            <p className="text-sm text-muted-foreground">
              {Locale.Auth.InputTip}
            </p>
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
