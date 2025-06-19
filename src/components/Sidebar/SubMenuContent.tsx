import React, { useEffect, useRef, useState, ForwardRefRenderFunction, forwardRef } from "react";
import { menuClasses } from "@/utils/utilityClasses";
import { useMenu } from "@/hooks/useMenu";

interface SubMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  transitionDuration?: number;
  open?: boolean;
  openWhenCollapsed?: boolean;
  firstLevel?: boolean;
  collapsed?: boolean;
  defaultOpen?: boolean;
  children?: React.ReactNode;
}

// Utility for inline style transition
const getStyles = ({
  open,
  collapsed,
  firstLevel,
  openWhenCollapsed,
  transitionDuration,
}: {
  open?: boolean;
  collapsed?: boolean;
  firstLevel?: boolean;
  openWhenCollapsed?: boolean;
  transitionDuration?: number;
}) => {
  // For collapsed sidebar in first level
  if (collapsed && firstLevel) {
    return {
      backgroundColor: "white",
      boxShadow:
        "0 3px 6px -4px #0001, 0 6px 16px #0002, 0 9px 28px 8px #0001",
      paddingLeft: 0,
      width: 200,
      borderRadius: 4,
      height: "auto",
      display: openWhenCollapsed ? "block" : "none",
      transition: "none",
      visibility: openWhenCollapsed ? "visible" : "hidden",
    };
  }

  return {
    position: "static",
    transform: "none",
    overflow: open ? "auto" : "hidden",
    transition: `height ${transitionDuration ?? 300}ms`,
    height: open ? "auto" : 0,
    backgroundColor: "white",
    display: open ? "block" : "none",
    boxSizing: "border-box" as const,
  };
};

const SubMenuContentFR: ForwardRefRenderFunction<HTMLDivElement, SubMenuContentProps> = (
  { children, open, openWhenCollapsed, firstLevel, collapsed, ...rest },
  ref
) => {
  const { transitionDuration = 300 } = useMenu();
  const divRef = useRef<HTMLDivElement>(null);
  // Allow ref forwarding
  const mergedRef = (ref as React.MutableRefObject<HTMLDivElement>) || divRef;

  // Mount effect (to replicate the original logic)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      data-testid={`${menuClasses.subMenuContent}-test-id`}
      ref={mergedRef}
      style={getStyles({
        open,
        collapsed,
        firstLevel,
        openWhenCollapsed,
        transitionDuration,
      })}
      className="z-[999]"
      {...rest}
    >
      <ul className="list-none m-0 p-0">{children}</ul>
    </div>
  );
};

export const SubMenuContent = forwardRef<HTMLDivElement, SubMenuContentProps>(SubMenuContentFR);
