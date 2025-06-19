import React from 'react';

interface Props extends React.SVGAttributes<SVGAElement> {
  name: /* ... */;
  size?: number;
  className?: string;
}

export const Icon: React.FC<Props> = ({ size = 18, className = "", name, ...rest }) => {
  // ...getIconPath
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...rest}
    >
      <path d={getIconPath()} />
    </svg>
  );
};
