import { useContext, useCallback } from "react";
import { SidebarContext } from "@/components/Sidebar/sidebarContext";

interface ProSidebarResult {
  collapseSidebar: (collapsed?: boolean) => void;
  toggleSidebar: (toggled?: boolean) => void;
  updateSidebarState: (values: Partial<any>) => void; // <--- added
  broken: boolean;
  collapsed: boolean;
  toggled: boolean;
  rtl: boolean;
}

export const useProSidebar = (): ProSidebarResult => {
  const sidebarContext = useContext(SidebarContext);

  if (!sidebarContext) {
    throw new Error(
      "useProSidebar must be used within a SidebarProvider. Please wrap your component with a SidebarProvider to use this hook."
    );
  }

  const collapseSidebar = useCallback(
    (value?: boolean) => {
      if (value === undefined) sidebarContext.updateCollapseState();
      else sidebarContext.updateSidebarState({ collapsed: value });
    },
    [sidebarContext]
  );

  const toggleSidebar = useCallback(
    (value?: boolean) => {
      if (value === undefined) sidebarContext.updateToggleState();
      else sidebarContext.updateSidebarState({ toggled: value });
    },
    [sidebarContext]
  );

  return {
    collapseSidebar,
    toggleSidebar,
    updateSidebarState: sidebarContext.updateSidebarState, // <--- added
    collapsed: !!sidebarContext.collapsed,
    broken: !!sidebarContext.broken,
    toggled: !!sidebarContext.toggled,
    rtl: !!sidebarContext.rtl,
  };
};
