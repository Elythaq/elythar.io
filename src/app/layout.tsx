'use client';
import { ProSidebarProvider } from "@/components/Sidebar/ProSidebarProvider";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import "@/styles/globals.css";

function ProtectedLayout({ children }) {
  const pathname = usePathname();
  const { status } = useSession();

  if (pathname === "/login") return <>{children}</>;
  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") {
    if (typeof window !== "undefined") window.location.href = "/login";
    return null;
  }
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ProSidebarProvider>
            <ProtectedLayout>{children}</ProtectedLayout>
          </ProSidebarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
