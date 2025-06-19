import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  fontWeight?: number | string;
  color?: string;
  fontSize?: number | string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption";
}

const variantClasses: Record<string, string> = {
  h1: "text-[72px] leading-[90px]",
  h2: "text-[60px] leading-[72px]",
  h3: "text-[48px] leading-[60px]",
  h4: "text-[36px] leading-[44px]",
  h5: "text-[30px] leading-[38px]",
  h6: "text-[24px] leading-[32px]",
  subtitle1: "text-[20px] leading-[30px]",
  subtitle2: "text-[18px] leading-[28px]",
  body1: "text-base leading-6",
  body2: "text-xs leading-[18px]",
  caption: "text-[10px] leading-4",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  fontWeight,
  color,
  fontSize,
  style,
  children,
  ...rest
}) => {
  return (
    <p
      className={`m-0 overflow-hidden whitespace-nowrap text-ellipsis ${variantClasses[variant] ?? ""}`}
      style={{
        fontWeight,
        color,
        fontSize,
        ...style,
      }}
      {...rest}
    >
      {children}
    </p>
  );
};
