import { cn } from "@/lib/utils";
import React from "react";

type TitleProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ level = 1, children, className }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseStyles = "font-bold tracking-tight";

  const levelStyles: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
    1: "text-2xl sm:text-3xl md:text-[32px] tracking-wider font-montserratBold",
    2: "text-2xl md:text-3xl tracking-wider",
    3: "text-base lg:text-lg",
    4: "text-sm sm:text-base",
    5: "text-sm",
    6: "text-xs",
  };

  return (
    <HeadingTag className={cn(baseStyles, levelStyles[level], className)}>
      {children}
    </HeadingTag>
  );
};

export default Title;

// Usage example
// <Title level={1}>This is an H1 Title</Title>
// <Title level={3} className="text-blue-500">This is an H3 Title with additional styles</Title>
