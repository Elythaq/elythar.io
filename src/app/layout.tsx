'use client';
import { ProSidebarProvider } from "@/components/Sidebar/ProSidebarProvider";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from '@/components/Navbar/Navbar';
import DashboardNavbar from "@/components/Navbar/DashboardNavbar";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { DisplayProvider } from "@/context/DisplayContext";
import "@/styles/globals.css";

function isDashboardRoute(pathname) {
  return pathname.startsWith("/dashboard");
}

function ProtectedLayout({ children }) {
  const pathname = usePathname();
  const { status } = useSession();

  if (pathname === "/login") return <>{children}</>;
  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") {
    if (typeof window !== "undefined") window.location.href = "/login";
    return null;
  }
  // PROVIDER ADDED HERE!
  return (
    <DisplayProvider>
      <ProSidebarProvider>
        <Sidebar />
        <DashboardNavbar />
        <div className="pt-16 transition-all duration-300 ml-[250px]">
          {children}
        </div>
      </ProSidebarProvider>
    </DisplayProvider>
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
