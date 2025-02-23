// import { cn } from "@/lib/utils";
// import { ComponentPropsWithoutRef } from "react";
// import { Control, FieldValues } from "react-hook-form";
// import PhoneNumberCommand from "../phone-number-command";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "./form";
// import { Input } from "./input";

// interface PropsType<T extends FieldValues>
//   extends Omit<ComponentPropsWithoutRef<"input">, "name"> {
//   name: keyof T;
//   label: string;
//   countryCode: string;
//   setCountryCode: (value: string) => void;
//   labelClassName?: string | undefined;
//   control: Control<T>;
// }

// function FormInputPhone<T extends FieldValues>({
//   control,
//   name,
//   countryCode,
//   setCountryCode,
//   label,
//   labelClassName,
//   ...props
// }: PropsType<T>) {

//   return (
//     <FormField
//       control={control as Control<FieldValues>}
//       name={name.toString()}
//       render={({ field }) => (
//         <FormItem className="w-full">
//           <FormLabel
//             className={cn(labelClassName, "capitalize text-base text-primary")}
//           >
//             {label}
//           </FormLabel>

//           <FormControl dir="ltr">
//             <div className="flex justify-start border border-primary text-primary rounded-md items-center">
//               <PhoneNumberCommand
//                 value={countryCode}
//                 setValue={setCountryCode}
//               />
//               <Input className="border-none" dir="ltr" {...props} {...field} />
//             </div>
//           </FormControl>
//           <FormMessage className="capitalize font-normal" />
//         </FormItem>
//       )}
//     />
//   );
// }

// export default FormInputPhone;
