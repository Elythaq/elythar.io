'use client';
import Sidebar from "@/components/Sidebar/Sidebar";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import { useProSidebar } from "@/hooks/useSidebar";

export default function DashboardLayout({ children }) {
  const { collapsed } = useProSidebar();
  const sidebarWidth = collapsed ? 60 : 260;

  return (
    <div>
      <Sidebar className="fixed left-0 top-0 h-screen z-10" />
      <DashboardNavbar
        style={{
          marginLeft: sidebarWidth,
          width: `calc(100% - ${sidebarWidth}px)`,
        }}
      />
      <main
        className="pt-16 transition-all"
        style={{
          marginLeft: sidebarWidth,
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {children}
      </main>
    </div>
  );
}
