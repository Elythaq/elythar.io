import React from 'react';
import { IconProps } from '@/types';

export const Global: React.FC<IconProps> = ({ size = 18, className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...rest}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.02 2 17.522 6.477 22 12 22s10-4.478 10-9.98C22 6.484 17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8.02C20 16.421 16.418 20 12 20s-8-3.579-8-7.98C4 7.582 7.582 4 12 4zm0 2a6 6 0 0 0-6 6.02c0 3.31 2.69 6 6 6s6-2.69 6-6.02A6 6 0 0 0 12 6zm0 2a4 4 0 0 1 4 4.02c0 2.211-1.789 4-4 4s-4-1.789-4-4.02A4 4 0 0 1 12 8z"></path>
  </svg>
);
