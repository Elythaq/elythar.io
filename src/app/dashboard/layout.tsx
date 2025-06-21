'use client';
import Sidebar from "@/components/Sidebar/Sidebar";
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import { useProSidebar } from "@/hooks/useSidebar";

export default function DashboardLayout({ children }) {
  const { collapsed, rtl } = useProSidebar();
  const sidebarWidth = collapsed ? 80 : 250;

  return (
    <div>
      <Sidebar className={`fixed ${rtl ? "right-0" : "left-0"} top-0 h-screen z-10`} />
      <DashboardNavbar />
      <main
        className="pt-16 transition-all min-h-screen"
        style={
          rtl
            ? { marginRight: sidebarWidth, marginLeft: 0 }
            : { marginLeft: sidebarWidth, marginRight: 0 }
        }
      >
        {children}
      </main>
    </div>
  );
}
