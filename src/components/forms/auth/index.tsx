"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { FormGenerator } from "@/components/common/form-generator";
import { Loader } from "@/components/common/loader";
import { Button } from "@/components/ui/button";
import { APP_CONSTANTS } from "@/constants";
import useAuth from "@/hooks/auth";

type SignInFormProps = {};

const SignInForm = (props: SignInFormProps) => {
  const { isPending, setValue, onAuth, watch, register, errors } = useAuth();
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form submitted with input:");
    onAuth();
  };

  return (
    <>
      <h1 className="text-center">Auth</h1>
      <form className="mt-10 flex flex-col gap-3" onSubmit={handleSubmit}>
        {APP_CONSTANTS.signInForm.map((field) => (
          <FormGenerator
            {...field}
            key={field.id}
            watch={watch}
            register={register}
            setValue={setValue}
            errors={errors}
          />
        ))}
        <Button type="submit" className="rounded-2xl">
          <Loader loading={isPending}>Sign In with Code</Loader>
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
