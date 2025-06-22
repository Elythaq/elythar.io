import React from 'react';
import { IconProps } from '@/types';

export const Diamond: React.FC<IconProps> = ({ size = 18, className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...rest}
  >
    <path d="M12 2l10 10-10 10-10-10 10-10zm0 2.828L4.828 12 12 19.172 19.172 12 12 4.828z"></path>
  </svg>
);
