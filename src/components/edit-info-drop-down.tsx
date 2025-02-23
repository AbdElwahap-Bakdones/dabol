import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useDirection from "@/hooks/use-direction";
import { Pencil } from "lucide-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface EditInfoDropDownProps {
  EditProfile: () => void;
  EditPassword: () => void;
  setEditType: React.Dispatch<React.SetStateAction<string>>;
}

const EditInfoDropDown: FC<EditInfoDropDownProps> = ({
  EditProfile,
  setEditType,
  EditPassword,
}) => {
  const dir=useDirection();
  const { t } = useTranslation("translation");
  return (
    <DropdownMenu dir={dir}>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="border-blue-700" variant="outline">
          <Pencil className="h-[1.2rem] w-[1.2rem] transition-all text-blue-700" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          onClick={() => {
            EditProfile();
            setEditType("1");
          }}
        >
          {t("global.edit-profile")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            EditPassword();
            setEditType("2");
          }}
        >
          {t("global.edit-password")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EditInfoDropDown;
