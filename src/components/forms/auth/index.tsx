"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FormGenerator } from "@/components/common/form-generator";
import { Loader } from "@/components/common/loader";
import Loading from "@/components/common/loading";
import { Button } from "@/components/ui/button";
import { Form_CONSTANTS } from "@/constants";
import useAuth from "@/hooks/auth";
import { Lock } from "@/icons";
import { cn } from "@/lib/utils";

type SignInFormProps = {
  className?: string;
};

const SignInForm = ({ className }: SignInFormProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isPending, setValue, onAuth, watch, register, errors, errorMessage } =
    useAuth();
  const params = useSearchParams();

  useEffect(() => {
    const queryCode = params.get("pw");
    const storedCode = localStorage.getItem("code");

    if (queryCode) {
      setValue("code", queryCode);
    } else if (storedCode) {
      setValue("code", storedCode);
    }

    // init submit
    const initLoad = async () => {
      await onAuth();
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    initLoad();
  }, [params]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form submitted with input:");
    onAuth();
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div
      className={cn(
        "relative flex w-full transform flex-col items-center justify-center ease-in-out",
        className
      )}
    >
      <div className="flex w-full flex-col items-center justify-center space-y-2 text-center">
        <Lock className="h-14 w-14" />
        <h2 className="text-2xl font-bold">Share code required</h2>
        <p className="text-sm text-muted-foreground">
          The creator has enabled verification, please enter the share code
          below
        </p>
      </div>
      <form
        className="mt-4 flex w-full max-w-sm flex-col items-center gap-3"
        onSubmit={handleSubmit}
      >
        {Form_CONSTANTS.signInForm
          .filter((it) => it.id === 1)
          .map((field) => (
            <FormGenerator
              {...field}
              key={field.id}
              watch={watch}
              register={register}
              setValue={setValue}
              errors={errors}
              className="w-[200px] text-center"
            />
          ))}
        {errorMessage && (
          <p className="mt-[-2] text-center text-red-500 dark:text-red-400">
            {errorMessage}
          </p>
        )}
        <Button type="submit" className="w-[200px] cursor-pointer rounded-md">
          <Loader loading={isPending}>Sign In with Code</Loader>
        </Button>
        {Form_CONSTANTS.signInForm
          .filter((it) => it.id === 2)
          .map((field) => (
            <FormGenerator
              {...field}
              key={field.id}
              watch={watch}
              register={register}
              setValue={setValue}
              errors={errors}
              className="w-[200px]"
            />
          ))}
      </form>
    </div>
  );
};

export default SignInForm;
