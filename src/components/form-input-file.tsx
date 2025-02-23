import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";
import { Control, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
interface PropsType<T extends FieldValues>
  extends Omit<ComponentPropsWithoutRef<"input">, "name"> {
  name: keyof T;
  label: string;
  control: Control<T>;
}
function FormInputFile<T extends FieldValues>({
  control,
  name,
  label,
  ...props
}: PropsType<T>) {
  return (
    <FormField
      control={control as Control<FieldValues>}
      name={name.toString()}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="capitalize w-full text-base text-primary">
            {label}
          </FormLabel>
          <FormControl>
            <div className="relative cursor-pointer">
              <Input
                className={cn("w-full bg-greeny opacity-0 cursor-pointer")}
                type="file"
                onChange={(e) =>
                  field.onChange(
                    e.target.files ? e.target.files?.[0] : undefined,
                    console.log(field)
                  )
                }
                {...props}
              />
              <div className="absolute bg-green-500 inset-0 w-full h-full bg-greeny rounded flex justify-center items-center -z-10">
                <Upload />
              </div>
            </div>
          </FormControl>

          {field.value.name ? (
            <div className="w-full flex justify-center items-center bg-foreground p-4">
              {/* {field.value.endsWith(".pdf") ? (
                <img
                  className="max-w-[200px]"
                  src={imgPdf}
                  alt="field.value.name"
                />
              ) : (
                <img
                  className="w-36 h-36 object-contain"
                  src={convertFileToURL(field.value)}
                  alt="field.value.name"
                />
              )} */}
              <p>{field.value.name}</p>
            </div>
          ) : null}
          <FormMessage className="capitalize font-normal" />
        </FormItem>
      )}
    />
  );
}
export default FormInputFile;
