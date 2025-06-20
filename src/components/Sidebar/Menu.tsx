'use client';
import React, { createContext, useMemo, ForwardRefRenderFunction, forwardRef } from "react";
import classNames from "classnames";

export interface MenuContextProps {
  transitionDuration?: number;
  closeOnClick?: boolean;
  menuItemStyles?: any; // For now, style injection is omitted (no Emotion/Tailwind dynamic injection)
  renderExpandIcon?: (params: any) => React.ReactNode;
}
export interface MenuProps extends MenuContextProps, React.MenuHTMLAttributes<HTMLMenuElement> {
  children?: React.ReactNode;
  rootStyles?: string; // Accept Tailwind classes as a string
}

// Contexts
export const MenuContext = createContext<MenuContextProps | undefined>(undefined);
export const LevelContext = createContext<number>(0);

const MenuFR: ForwardRefRenderFunction<HTMLMenuElement, MenuProps> = (
  {
    children,
    className,
    transitionDuration = 300,
    closeOnClick = false,
    rootStyles = "",
    menuItemStyles,
    renderExpandIcon,
    ...rest
  },
  ref,
) => {
  const providerValue = useMemo(
    () => ({ transitionDuration, closeOnClick, menuItemStyles, renderExpandIcon }),
    [transitionDuration, closeOnClick, menuItemStyles, renderExpandIcon],
  );

  return (
    <MenuContext.Provider value={providerValue}>
      <LevelContext.Provider value={0}>
        <nav
          ref={ref}
          className={classNames("w-full", rootStyles, className)}
          {...rest}
        >
          <ul className="list-none m-0 p-0">{children}</ul>
        </nav>
      </LevelContext.Provider>
    </MenuContext.Provider>
  );
};

export const Menu = forwardRef<HTMLMenuElement, MenuProps>(MenuFR);
