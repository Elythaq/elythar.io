import React from "react";
import { Typography } from "@/components/Sidebar/Typography";
import Link from "next/link";

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
      <Link href="/" className="focus:outline-none">
        <div
          className={`w-[35px] min-w-[35px] h-[35px] min-h-[35px] flex items-center justify-center rounded-lg overflow-hidden bg-gradient-to-tr from-blue-800 to-cyan-300 cursor-pointer ${
            rtl ? "ml-2.5 mr-1" : "mr-2.5 ml-1"
          }`}
        >
          <img
            src="/logo.svg"
            alt="Elythar Logo"
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      </Link>
      {!collapsed && (
        <Typography variant="subtitle1" fontWeight={700} color="#0098e5">
          {/* Replace with your branding, or leave as-is */}
          Elythar.io
        </Typography>
      )}
    </div>
  </div>
);
