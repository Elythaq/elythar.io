'use client';
import { ProSidebarProvider } from "@/components/Sidebar/ProSidebarProvider";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from '@/components/Navbar/Navbar';
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import "@/styles/globals.css";

// Helper to detect dashboard routes (customize if needed)
function isDashboardRoute(pathname) {
  return pathname.startsWith("/dashboard");
}

// Only for dashboard/protected routes
function ProtectedLayout({ children }) {
  const pathname = usePathname();
  const { status } = useSession();
  // Don't call useProSidebar() here—see note below

  if (pathname === "/login") return <>{children}</>;
  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") {
    if (typeof window !== "undefined") window.location.href = "/login";
    return null;
  }
  // Provide the sidebar context here!
  return (
    <ProSidebarProvider>
      <Sidebar />
      <DashboardNavbar />
      {/* Margin logic for Sidebar and Navbar */}
      <div className="pt-16 transition-all duration-300 ml-[250px]"> {/* Default: sidebar open */}
        {children}
      </div>
    </ProSidebarProvider>
  );
}

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {isDashboardRoute(pathname) ? (
            <ProtectedLayout>{children}</ProtectedLayout>
          ) : (
            <>
              <Navbar />
              <main className="pt-16">{children}</main>
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
