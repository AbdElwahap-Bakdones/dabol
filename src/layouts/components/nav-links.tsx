import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Links } from "@/constants/links";
import useDirection from "@/hooks/use-direction";
import { useTranslation } from "react-i18next";
const NavLinks = () => {
  const { t } = useTranslation();
  const dir = useDirection();
  return (
    <NavigationMenu>
      <NavigationMenuList
        className="w-full gap-4 sm:gap-8 max-md:flex-col max-lg:items-start"
        dir={dir}
      >
        {Links.map((link) => (
          <NavigationMenuItem key={link.id} className="!ms-0">
            <a
              className="hover:text-primary capitalize transition-all text-base max-sm:text-sm"
              href={link.path}
            >
              {t(link.lable)}
            </a>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
