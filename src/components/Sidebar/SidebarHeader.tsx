import React from "react";
import { Typography } from "@/components/Sidebar/Typography";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rtl: boolean;
  collapsed?: boolean;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children, rtl, collapsed, ...rest }) => (
  <div
    {...rest}
    className="h-16 min-h-16 flex items-center px-5"
  >
    <div className="flex items-center w-full overflow-hidden">
      <div
        className={`w-[35px] min-w-[35px] h-[35px] min-h-[35px] flex items-center justify-center rounded-lg text-white text-2xl font-bold bg-gradient-to-tr from-blue-800 to-cyan-300 ${
          rtl ? "ml-2.5 mr-1" : "mr-2.5 ml-1"
        }`}
      >
        P
      </div>
      {!collapsed && (
        <Typography variant="subtitle1" fontWeight={700} color="#0098e5">
          Pro Sidebar
        </Typography>
      )}
    </div>
  </div>
);
