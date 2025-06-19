import React from "react";

export const StyledMenuPrefix: React.FC<{
  firstLevel?: boolean;
  collapsed?: boolean;
  transitionDuration?: number;
  rtl?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}> = ({
  firstLevel,
  collapsed,
  transitionDuration = 300,
  rtl,
  className = "",
  style = {},
  children,
  ...rest
}) => (
  <span
    className={`
      ${rtl ? "ml-[5px]" : "mr-[5px]"}
      transition-opacity
      ${className}
    `}
    style={{
      opacity: firstLevel && collapsed ? 0 : 1,
      transitionDuration: `${transitionDuration}ms`,
      ...style,
    }}
    {...rest}
  >
    {children}
  </span>
);
