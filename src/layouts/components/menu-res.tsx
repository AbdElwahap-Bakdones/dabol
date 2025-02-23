import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./nav-links";
import LangToggle from "./toggle-lang";

const MenuRes = () => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="!z-[100000] cursor-pointer hover:text-primary transition-all"
      >
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-3/4 gap-4 bg-gray-400 pt-10">
        <NavLinks />
        <LangToggle />
      </SheetContent>
    </Sheet>
  );
};

export default MenuRes;
