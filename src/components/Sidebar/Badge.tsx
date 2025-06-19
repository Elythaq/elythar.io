import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: "info" | "success" | "warning" | "danger";
  shape?: "circle" | "rounded";
}

const variantClasses = {
  info: "bg-[#048acd] text-white",
  success: "bg-[#0cbb34] text-white",
  warning: "bg-[#e25807] text-white",
  danger: "bg-[#fb3939] text-white",
};

const shapeClasses = {
  circle: "rounded-full min-w-[18px] min-h-[18px] p-0",
  rounded: "rounded-[16px] min-w-[18px] min-h-[18px] px-[6px] py-0",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "info",
  shape = "rounded",
  className = "",
  ...rest
}) => {
  return (
    <div
      className={`flex items-center justify-center font-semibold text-[11px] ${variantClasses[variant]} ${shapeClasses[shape]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
