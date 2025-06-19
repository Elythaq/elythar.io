import React from "react";

export const StyledMenuIcon: React.FC<{ rtl?: boolean; className?: string; style?: React.CSSProperties; children?: React.ReactNode }> = ({
  rtl,
  className = "",
  style = {},
  children,
  ...rest
}) => (
  <span
    className={`
      flex items-center justify-center w-[35px] min-w-[35px] h-[35px] rounded-[2px] text-center
      ${rtl ? "ml-[10px]" : "mr-[10px]"}
      ${className}
    `}
    style={style}
    {...rest}
  >
    {children}
  </span>
);
