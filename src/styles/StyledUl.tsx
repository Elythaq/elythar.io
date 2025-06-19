import React from "react";

export const StyledUl: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className = "",
  ...rest
}) => (
  <ul className={`list-none p-0 m-0 ${className}`} {...rest} />
);
