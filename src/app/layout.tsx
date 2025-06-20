// src/app/layout.tsx

'use client';

import { ProSidebarProvider } from "@/components/Sidebar/ProSidebarProvider";
import Sidebar from "@/components/Sidebar/Sidebar";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProSidebarProvider>
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </ProSidebarProvider>
      </body>
    </html>
  );
}
