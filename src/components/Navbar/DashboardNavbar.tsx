'use client';

import { useProSidebar } from "@/hooks/useSidebar";
import { useSession, signOut } from "next-auth/react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function DashboardNavbar() {
  const { collapsed, collapseSidebar, rtl } = useProSidebar();
  const { data: session } = useSession();
  const sidebarWidth = collapsed ? 80 : 250;

  return (
    <nav
      className={`
        fixed top-0 z-30 h-16 flex items-center justify-between px-4
        bg-gradient-to-r from-[#0a0c1c]/90 via-[#0b1024]/90 to-[#101828]/90
        backdrop-blur-md text-white transition-all duration-200 shadow-md
      `}
      style={{
        [rtl ? "marginRight" : "marginLeft"]: sidebarWidth,
        [rtl ? "right" : "left"]: 0,
        [rtl ? "left" : "right"]: "auto",
        width: `calc(100% - ${sidebarWidth}px)`,
        flexDirection: rtl ? "row-reverse" : "row",
      }}
      dir={rtl ? "rtl" : "ltr"}
    >
      {/* Sidebar Toggle */}
      <button
        onClick={() => collapseSidebar(!collapsed)}
        className="text-2xl hover:text-orange-400 transition-colors"
        title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        style={{ order: rtl ? 3 : 1 }}
      >
        <FiMenu />
      </button>

      {/* Navigation Links */}
      <div
        className={`flex-1 flex gap-6 items-center justify-center ${rtl ? "flex-row-reverse" : "flex-row"}`}
        style={{ order: 2 }}
      >
        <NavLink href="/" label="Home" />
        <NavLink href="/dashboard" label="Dashboard" />
        <NavLink href="/dashboard/orders" label="My Orders" />
        <NavLink href="/dashboard/downloads" label="Downloads" />
        <NavLink href="/dashboard/analytics" label="Visualizations" />
        <NavLink href="/dashboard/settings" label="Settings" />
      </div>

      {/* User Info + Sign Out */}
      <div
        className={`flex items-center gap-3 truncate ${rtl ? "pl-6" : "pr-6"} ${rtl ? "flex-row" : "flex-row-reverse"}`}
        style={{ order: rtl ? 1 : 3, minWidth: 0 }}
      >
        {session?.user?.name && (
          <span className="font-medium text-orange-400 truncate max-w-[120px]">
            {session.user.name}
          </span>
        )}
        <button
          onClick={() => signOut()}
          className="px-3 py-1 rounded bg-orange-600 hover:bg-orange-500 transition text-sm font-semibold"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative text-sm font-semibold text-gray-300 hover:text-orange-400 transition"
    >
      {label}
    </Link>
  );
}
