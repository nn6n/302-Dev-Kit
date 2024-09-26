"use client";

import SignInForm from "@/components/forms/auth";
import { useDomain } from "@/hooks/global/use-domain";
import Image from "next/image";


const AuthPage = () => {
  const domain = useDomain()

  return (
    <div className="h-full w-full p-12 flex items-center justify-center">
      <div className="relative m-auto w-full h-full flex items-center max-w-screen-lg sm:rounded-md sm:border p-4 sm:shadow-2xl">
        <div className="absolute top-4 left-4">
          <a href={domain} target="_blank" className="flex p-1 space-x-1 no-underline " >
            <Image className="dark:block hidden" width={150} height={42} src="/images/global/logo-dark.png" alt="" />
            <Image className="dark:hidden" width={150} height={42} src="/images/global/logo-light.png" alt="" />
          </a>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default AuthPage;
