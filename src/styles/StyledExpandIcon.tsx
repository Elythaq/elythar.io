import React from "react";

// Collapsed Icon: small filled circle
export const StyledExpandIconCollapsed: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className = "", ...rest }) => (
  <span
    className={`inline-block w-[5px] h-[5px] rounded-full bg-current ${className}`}
    {...rest}
  />
);

// Arrow Icon: rotated caret (simulate with borders)
export const StyledExpandIcon: React.FC<{ open?: boolean; rtl?: boolean; className?: string }> = ({
  open,
  rtl,
  className = "",
  ...rest
}) => {
  // Use borders and rotation to mimic the caret/arrow
  const rotate = open ? (rtl ? "-135deg" : "45deg") : "-45deg";
  return (
    <span
      className={`
        inline-block w-[5px] h-[5px] border-solid
        ${rtl
          ? "border-l-2 border-t-2 border-current"
          : "border-r-2 border-b-2 border-current"}
        transition-transform duration-300
        ${className}
      `}
      style={{ transform: `rotate(${rotate})` }}
      {...rest}
    />
  );
};

// Wrapper: absolute position only when top-level & collapsed
export const StyledExpandIconWrapper: React.FC<{
  collapsed?: boolean;
  level?: number;
  rtl?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}> = ({ collapsed, level, rtl, className = "", style = {}, children, ...rest }) => {
  const abs = collapsed && level === 0;
  return (
    <span
      className={`
        ${abs ? "absolute top-1/2 -translate-y-1/2" : ""}
        ${abs && rtl ? "left-[10px]" : abs ? "right-[10px]" : ""}
        ${className}
      `}
      style={style}
      {...rest}
    >
      {children}
    </span>
  );
};
