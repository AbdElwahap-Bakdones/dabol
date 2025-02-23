import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";
import useDirection from "@/hooks/use-direction";
const LangToggle = () => {
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const { t } = useTranslation("translation");
  const dir = useDirection();
  return (
    <DropdownMenu dir={dir}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-none">
          <Languages className="h-[1.2rem] w-[1.2rem] transition-all text-black max-md:mt-4 md:text-white" />
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white rounded-[10px]">
        <DropdownMenuItem
          onClick={() => changeLang("ar")}
          className="hover:!text-primary cursor-pointer"
        >
          {t("arabic")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLang("en")}
          className="hover:!text-primary cursor-pointer"
        >
          {t("english")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangToggle;
