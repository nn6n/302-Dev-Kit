import { Checkbox } from "@/components/ui/checkbox"; // 假设ShadcnUI的Checkbox路径为此
import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

type FormGeneratorProps = {
  inputType: "select" | "input" | "textarea" | "checkbox";
  name: string;
  errors: FieldErrors<FieldValues>;
  type?: "text" | "email" | "password" | "number" | "checkbox";
  options?: { value: string; label: string; id: string }[];
  placeholder?: string; // Checkbox不需要placeholder
  label?: string;
  lines?: number;
  register: UseFormRegister<any>;
  watch?: (name: string) => any; // added watch for checkbox default value
};

export const FormGenerator = ({
  inputType,
  options,
  label,
  placeholder,
  register,
  name,
  errors,
  type,
  lines,
  watch,
}: FormGeneratorProps) => {
  switch (inputType) {
    case "input":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <Input
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            className="bg-themeBlack border-themeGray text-themeTextGray"
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "select":
      return (
        <Label htmlFor={`select-${label}`} className="flex flex-col gap-2">
          {label && label}
          <select
            id={`select-${label}`}
            className="w-full bg-transparent border-[1px] p-3 rounded-lg"
            {...register(name)}
          >
            {options?.length &&
              options.map((option) => (
                <option
                  value={option.value}
                  key={option.id}
                  className="dark:bg-muted"
                >
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "textarea":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <Textarea
            className="bg-themeBlack border-themeGray text-themeTextGray"
            id={`input-${label}`}
            placeholder={placeholder}
            {...register(name)}
            rows={lines}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "checkbox":
      // const checkboxValue = watch ? watch(name) : false;
      // console.log('cheV:::', checkboxValue)
      return (
        <Label className="flex gap-2 items-center" htmlFor={`checkbox-${label}`}>
          <Checkbox
            id={`checkbox-${label}`}
            {...register(name)}
            onCheckedChange={(value) => register(name).onChange({ target: value })}
          />
          {label && label}
        </Label>
      );
    default:
      return <></>;
  }
};