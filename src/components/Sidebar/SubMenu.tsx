import React, { useContext, useRef, useState, useCallback, useEffect, forwardRef } from "react";
import classNames from "classnames";
import { SubMenuContent } from "@/components/Sidebar/SubMenuContent";
import { useMenu } from "@/hooks/useMenu";
import { MenuButton } from "@/components/Sidebar/MenuButton";
import { SidebarContext } from "@/components/Sidebar/sidebarContext";
import { LevelContext } from "@/components/Sidebar/Menu";

export interface SubMenuProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "prefix"> {
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  active?: boolean;
  disabled?: boolean;
  component?: string | React.ReactElement;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const baseItemClasses = "relative w-full";
const buttonClasses =
  "w-full flex items-center px-4 py-2 rounded transition-colors duration-200 focus:outline-none";
const labelClasses = "flex-1 text-sm font-medium";
const iconClasses = "mr-2 flex-shrink-0";
const prefixClasses = "mr-2";
const suffixClasses = "ml-2";
const expandIconClasses = "ml-auto transition-transform duration-200";
const openExpandIcon = "rotate-90";
const closedExpandIcon = "";

const SubMenuFR: React.ForwardRefRenderFunction<HTMLLIElement, SubMenuProps> = (
  {
    children,
    className,
    label,
    icon,
    prefix,
    suffix,
    open: openControlled,
    defaultOpen,
    active = false,
    disabled = false,
    component,
    onOpenChange,
    onClick,
    onKeyUp,
    ...rest
  },
  ref
) => {
  const level = useContext(LevelContext);
  const { collapsed } = useContext(SidebarContext);
  const { renderExpandIcon } = useMenu();

  const [open, setOpen] = useState(!!defaultOpen);

  const buttonRef = useRef<HTMLAnchorElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Toggle open state
  const handleSlideToggle = (): void => {
    if (!(level === 0 && collapsed)) {
      if (typeof openControlled === "undefined") {
        onOpenChange?.(!open);
        setOpen(!open);
      } else {
        onOpenChange?.(!openControlled);
      }
    }
  };

  const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    onClick?.(event);
    handleSlideToggle();
  };

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    onKeyUp?.(event);
    if (event.key === "Enter") {
      handleSlideToggle();
    }
  };

  const isOpen = openControlled ?? open;

  return (
    <li
      ref={ref}
      className={classNames(
        baseItemClasses,
        active && "bg-[#222] text-white",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      <MenuButton
        ref={buttonRef}
        className={classNames(buttonClasses, active && "bg-[#222] text-white")}
        onClick={handleOnClick}
        onKeyUp={handleOnKeyUp}
        component={component}
        tabIndex={0}
        {...rest}
      >
        {icon && <span className={iconClasses}>{icon}</span>}
        {prefix && <span className={prefixClasses}>{prefix}</span>}
        <span className={labelClasses}>{label}</span>
        {suffix && <span className={suffixClasses}>{suffix}</span>}
        {/* Expand Icon */}
        <span
          className={classNames(
            expandIconClasses,
            isOpen ? openExpandIcon : closedExpandIcon
          )}
        >
          {renderExpandIcon
            ? renderExpandIcon({ level, disabled, active, open: isOpen })
            : (
              <svg
                className="w-3 h-3"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 2l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
        </span>
      </MenuButton>
      {/* Collapsible Content */}
      <SubMenuContent
        ref={contentRef}
        open={isOpen}
        firstLevel={level === 0}
        collapsed={collapsed}
      >
        <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
      </SubMenuContent>
    </li>
  );
};

export const SubMenu = forwardRef<HTMLLIElement, SubMenuProps>(SubMenuFR);
