import React, { useContext, forwardRef } from "react";
import classNames from "classnames";
import { useMenu } from "@/hooks/useMenu";
import { MenuButton } from "@/components/Sidebar/MenuButton";
import { LevelContext } from "@/components/Sidebar/Menu";
import { SidebarContext } from "@/components/Sidebar/sidebarContext";

// Utility class names for states (replace with your preferred names)
const menuClasses = {
  menuItemRoot: "menu-item-root",
  active: "menu-item-active",
  disabled: "menu-item-disabled",
  button: "menu-item-button",
  label: "menu-item-label",
  icon: "menu-item-icon",
  prefix: "menu-item-prefix",
  suffix: "menu-item-suffix",
};

export interface MenuItemProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "prefix"> {
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  component?: string | React.ReactElement;
  children?: React.ReactNode;
}

const baseItemClasses = "w-full relative";
const activeClasses = "bg-[#222] text-white";
const disabledClasses = "opacity-50 pointer-events-none";
const buttonClasses =
  "w-full flex items-center px-4 py-2 rounded transition-colors duration-200 focus:outline-none";
const labelClasses = "flex-1 text-sm font-medium";
const iconClasses = "mr-2 flex-shrink-0";
const prefixClasses = "mr-2";
const suffixClasses = "ml-2";

const MenuItemFR: React.ForwardRefRenderFunction<HTMLLIElement, MenuItemProps> = (
  {
    children,
    icon,
    className,
    prefix,
    suffix,
    active = false,
    disabled = false,
    component,
    ...rest
  },
  ref
) => {
  const level = useContext(LevelContext);
  const { collapsed, rtl, transitionDuration } = useContext(SidebarContext);
  const { menuItemStyles } = useMenu();

  const sharedClasses = classNames({
    [menuClasses.active]: active,
    [menuClasses.disabled]: disabled,
    [activeClasses]: active,
    [disabledClasses]: disabled,
  });

  return (
    <li
      ref={ref}
      className={classNames(
        baseItemClasses,
        menuClasses.menuItemRoot,
        sharedClasses,
        className
      )}
    >
      <MenuButton
        className={classNames(buttonClasses, menuClasses.button, sharedClasses)}
        component={component}
        tabIndex={0}
        {...rest}
      >
        {icon && (
          <span className={classNames(iconClasses, menuClasses.icon, sharedClasses)}>
            {icon}
          </span>
        )}

        {prefix && (
          <span className={classNames(prefixClasses, menuClasses.prefix, sharedClasses)}>
            {prefix}
          </span>
        )}

		<span className={classNames(labelClasses, menuClasses.label, sharedClasses)}>
		  {!collapsed && children}
		</span>

        {suffix && (
          <span className={classNames(suffixClasses, menuClasses.suffix, sharedClasses)}>
            {suffix}
          </span>
        )}
      </MenuButton>
    </li>
  );
};

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(MenuItemFR);
