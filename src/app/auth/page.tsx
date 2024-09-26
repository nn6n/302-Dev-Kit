"use client";

import SignInForm from "@/components/forms/auth";


const AuthPage = () => {

  return (
    <div className="h-full w-full p-12 flex items-center justify-center">
      <div className="m-auto w-full h-full flex items-center max-w-screen-lg sm:rounded-md sm:border p-4 sm:shadow-2xl">
        <SignInForm />
      </div>
    </div>
  );
};

export default AuthPage;
