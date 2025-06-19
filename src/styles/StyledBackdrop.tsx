import React from "react";

export const StyledBackdrop: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...rest }) => (
  <div
    className={`fixed inset-0 z-[1] bg-black bg-opacity-30 ${className}`}
    {...rest}
  />
);
