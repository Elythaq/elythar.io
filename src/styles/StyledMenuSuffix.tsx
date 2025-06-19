import React from "react";

export const StyledMenuSuffix: React.FC<{
  firstLevel?: boolean;
  collapsed?: boolean;
  transitionDuration?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}> = ({
  firstLevel,
  collapsed,
  transitionDuration = 300,
  className = "",
  style = {},
  children,
  ...rest
}) => (
  <span
    className={`
      mr-[5px] ml-[5px] transition-opacity
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
