import { Control, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface PropsType<T extends FieldValues>
  extends Omit<ComponentPropsWithoutRef<"input">, "name"> {
  name: keyof T;
  label: string;
  labelClassName?: string | undefined;
  control: Control<T>;
}

function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  labelClassName,
  ...props
}: PropsType<T>) {
  return (
    <FormField
      control={control as Control<FieldValues>}
      name={name.toString()}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className={cn(labelClassName, "capitalize text-base text-primary")}>
            {label}
          </FormLabel>
          <FormControl>
            <Input className="border-primary text-primary" dir="ltr" {...props} {...field} />
          </FormControl>
          <FormMessage className="capitalize font-normal" />
        </FormItem>
      )}
    />
  );
}

export default FormInput;
