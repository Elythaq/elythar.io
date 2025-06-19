import React from "react";
import { Github } from "@/icons/Github";
import { Typography } from "@/components/Sidebar/Typography";

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed?: boolean;
  version?: string; // Pass app version via prop or env var
}

const codeUrl =
  "https://github.com/azouaoui-med/react-pro-sidebar/blob/master/storybook/Playground.tsx";

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  children,
  collapsed,
  version = process.env.NEXT_PUBLIC_APP_VERSION,
  ...rest
}) => (
  <div className="flex justify-center pb-5">
    {collapsed ? (
      <a
        href={codeUrl}
        target="_blank"
        rel="noopener"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-800 to-cyan-300 text-white"
      >
        <Github size={28} />
      </a>
    ) : (
      <div
        {...rest}
        className="w-1/2 flex flex-col items-center justify-center p-5 rounded-lg text-white bg-gradient-to-tr from-blue-800 to-cyan-300"
      >
        <div className="mb-3">
          <Github size={30} />
        </div>
        <Typography fontWeight={600}>Pro Sidebar</Typography>
        <Typography
          variant="caption"
          style={{ letterSpacing: 1, opacity: 0.7 }}
        >
          V {version}
        </Typography>
        <div className="mt-4">
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener"
            className="inline-block px-4 py-1.5 rounded bg-white text-gray-700 font-semibold text-xs"
          >
            <Typography variant="caption" color="#607489" fontWeight={600}>
              View code
            </Typography>
          </a>
        </div>
      </div>
    )}
  </div>
);
