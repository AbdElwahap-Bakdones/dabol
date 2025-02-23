import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Trash2 } from "lucide-react";
import { ElementRef, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import ButtonLoader from "./button-loader";
import useDirection from "@/hooks/use-direction";

type PropsTypes = {
  title: string;
  deletable: string;
  confirmClick: () => void;
  loadingBtn?: boolean;
};
const DeleteDialog = forwardRef<ElementRef<typeof DialogTrigger>, PropsTypes>(
  ({ title, deletable, confirmClick, loadingBtn }: PropsTypes, ref) => {
    const { t } = useTranslation("translation");
    const dir =useDirection();
    return (
      <Dialog>
        <DialogTrigger>
          <Button variant="outline" size="icon" className="border-destructive">
            <Trash2 className="h-[1.2rem] w-[1.2rem] transition-all text-destructive " />
          </Button>
        </DialogTrigger>
        <DialogContent dir={dir}>
          <DialogHeader className="gap-4 mb-4" >
            <DialogTitle className="text-primary text-2xl">
              {t(`global.${title}`)}
            </DialogTitle>
            <DialogDescription>
              <p className="text-base">
                {t("global.confirm-deletion", { item: deletable })}
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                ref={ref}
                type="button"
                className="capitalize text-primary"
                variant="link"
              >
                {t("global.close")}
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="capitalize"
              variant={"destructive"}
              disabled={loadingBtn}
              onClick={confirmClick}
            >
              {loadingBtn ? <ButtonLoader /> : t("global.delete")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
);
export default DeleteDialog;
