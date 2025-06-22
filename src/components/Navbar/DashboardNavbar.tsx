'use client';

import { useProSidebar } from "@/hooks/useSidebar";
import { useSession, signOut } from 'next-auth/react';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';

export default function DashboardNavbar() {
  const { collapsed, collapseSidebar, rtl } = useProSidebar();
  const { data: session } = useSession();
  const sidebarWidth = collapsed ? 80 : 250;

  return (
    <nav
      className={`fixed top-0 z-20 h-16 bg-black/90 text-white flex items-center transition-all duration-200 w-full`}
      style={
        rtl
          ? {
              marginRight: sidebarWidth,
              marginLeft: 0,
              right: 0,
              left: 'auto',
              flexDirection: 'row-reverse' as any,
              width: `calc(100% - ${sidebarWidth}px)`,
            }
          : {
              marginLeft: sidebarWidth,
              marginRight: 0,
              left: 0,
              right: 'auto',
              flexDirection: 'row' as any,
              width: `calc(100% - ${sidebarWidth}px)`,
            }
      }
      dir={rtl ? "rtl" : "ltr"}
    >
      {/* 1. Sidebar Hamburger Button */}
		<button
		  className={`
			text-2xl hover:text-orange-500
			${rtl ? "pl-6" : "pr-6"}
		  `}
		  onClick={() => collapseSidebar(!collapsed)}
		  title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
		  style={{ order: rtl ? 3 : 1 }}
		>
		  <FiMenu />
		</button>


      {/* 2. Nav Items */}
      <div
        className={`
          flex flex-1 items-center gap-6 justify-center
          ${rtl ? "flex-row-reverse" : "flex-row"}
        `}
        style={{ order: 2 }}
      >
        <Link href="/dashboard" className="hover:text-orange-400 font-semibold">
          Dashboard
        </Link>
        <Link href="/dashboard/orders" className="hover:text-orange-400">
          My Orders
        </Link>
        <Link href="/dashboard/downloads" className="hover:text-orange-400">
          Downloads
        </Link>
        <Link href="/dashboard/settings" className="hover:text-orange-400">
          Settings
        </Link>
      </div>

      {/* 3. User Info/Sign Out */}
      <div
        className={`
          flex items-center gap-3
          ${rtl ? "flex-row pl-6" : "flex-row-reverse pr-6"}
        `}
        style={{ order: rtl ? 1 : 3, minWidth: 0 }}
      >
        <span className="font-medium text-orange-400 truncate max-w-[120px]">
          {session?.user?.name}
        </span>
        <button
          onClick={() => signOut()}
          className={`px-3 py-1 bg-orange-600 hover:bg-orange-500 rounded text-sm font-semibold`}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
