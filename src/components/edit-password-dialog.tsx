// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { ChangePasswordSchema } from "@/schema";
// import { ChangePassword } from "@/types";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useTranslation } from "react-i18next";
// import PasswordInput from "./ui/password-input";
// import { Form } from "@/components/ui/form";
// import useCustomToast from "@/hooks/use-custom-toast";
// import { FC } from "react";
// interface EditPasswordDialogProps {
//   onSubmit: ({ id, data }:{id: string, data: any}) => void;
//   setOpen: ;
//   open: boolean;
//   info: any;
//   id: string;
// }
// const EditPasswordDialog: FC<EditPasswordDialogProps> = ({
//   setOpen,
//   open,
//   onSubmit,
//   info,
//   id,
// }) => {
//   const { t } = useTranslation("translation");
//   const { promiseToast } = useCustomToast();

//   const form = useForm<ChangePassword>({
//     resolver: zodResolver(ChangePasswordSchema),
//     defaultValues: {
//       password: "",
//       password_confirmation: "",
//     },
//   });

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>{t("global.change-password")}</DialogTitle>
//           <DialogDescription>
//             {t("global.change-password-title")}
//           </DialogDescription>
//         </DialogHeader>
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit((data) => {
//               const updatedInfo = {
//                 ...info,
//                 password: data.password,
//                 password_confirmation: data.password_confirmation,
//               };
//               promiseToast(
//                 onSubmit(id, ...updatedInfo),
//                 t("api.success.login")
//               );
//             })}
//             className="flex flex-col justify-start items-center gap-5 mt-7 w-full"
//           >
//             <div className="grid gap-4 py-4">
//               <PasswordInput
//                 name={"password"}
//                 label={t("global.password")}
//                 control={form.control}
//               />
//               <PasswordInput
//                 name={"password_confirmation"}
//                 label={t("global.password_confirmation")}
//                 control={form.control}
//               />
//             </div>
//           </form>
//         </Form>
//         <DialogFooter>
//           <Button type="submit">Save changes</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EditPasswordDialog;
