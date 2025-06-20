'use client';
import { ProSidebarProvider } from "@/components/Sidebar/ProSidebarProvider";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useProSidebar } from "@/hooks/useSidebar";
import "@/styles/globals.css";

function ProtectedLayout({ children }) {
  const pathname = usePathname();
  const { status } = useSession();
  const { rtl, collapsed } = useProSidebar();

  if (pathname === "/login") return <>{children}</>;
  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") {
    if (typeof window !== "undefined") window.location.href = "/login";
    return null;
  }
  return (
			<div>
			  <Sidebar />
			  <main
				className={`
				  transition-all duration-300
				  ${rtl
					? collapsed ? "mr-[80px]" : "mr-[250px]"
					: collapsed ? "ml-[80px]" : "ml-[250px]"
				  }
				`}
			  >
				{children}
			  </main>
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
