import React from 'react';
import { IconProps } from './types';

export const Book: React.FC<IconProps> = ({ size = 18, className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...rest}
  >
    <path d="M21 4v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h13zm-1 2H8v12h12V6zm-3 14H5a1 1 0 0 1-1-1V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3z"></path>
  </svg>
);
