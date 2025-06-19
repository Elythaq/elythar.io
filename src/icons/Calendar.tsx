import React from 'react';
import { IconProps } from './types';

export const Calendar: React.FC<IconProps> = ({ size = 18, className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...rest}
  >
    <path d="M7 2v2H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2V2h-2v2H9V2H7zm12 6H5v12h14V8z"></path>
  </svg>
);
