'use client';

import { useProSidebar } from "@/hooks/useSidebar";
import { useSession, signOut } from 'next-auth/react';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';

export default function DashboardNavbar() {
  const { collapsed, collapseSidebar } = useProSidebar();
  const { data: session } = useSession();

  // Match these widths to your actual sidebar!
  const sidebarWidth = collapsed ? 80 : 250; // px

  return (
    <nav
      className="fixed top-0 right-0 z-20 h-16 bg-black/90 text-white flex items-center px-6 transition-all duration-200"
      style={{
        marginLeft: sidebarWidth,
        width: `calc(100% - ${sidebarWidth}px)`
      }}
    >
      {/* Sidebar Collapse/Expand Button */}
		<button
		  className="mr-4 text-2xl hover:text-orange-500"
		  onClick={() => collapseSidebar(!collapsed)}
		  title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
		>
		  <FiMenu />
		</button>

      {/* Dashboard Navigation Items */}
      <div className="flex items-center gap-6 flex-1">
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

      {/* Authenticated User Info & Actions */}
      <div className="flex items-center gap-3">
        <span className="font-medium text-orange-400">
          {session?.user?.name}
        </span>
        <button
          onClick={() => signOut()}
          className="ml-2 px-3 py-1 bg-orange-600 hover:bg-orange-500 rounded text-sm font-semibold"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
