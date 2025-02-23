import { cn } from "@/lib/utils";
import {
  ComponentPropsWithoutRef,
  createElement,
  ElementType,
  FC,
  ReactNode,
} from "react";

interface PropsType extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  elementType?: ElementType;
}
const SectionWrapper: FC<PropsType> = ({
  className,
  children,
  elementType = "section",
  ...props
}) => {
  return createElement(
    elementType,
    {
      ...props,
      className: cn(
        "size-full px-4 md:px-10 lg:px-16 my-10 max-w-screen-3xl",
        className
      ),
    },
    children
  );
};

export default SectionWrapper;
