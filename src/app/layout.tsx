// src/app/layout.tsx

'use client';

import "@/styles/globals.css";
import { DarkModeProvider } from "@/components/Sidebar/DarkModeContext";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-[#181818] text-white dark:bg-[#f6f9fc] dark:text-gray-800 transition-colors duration-300">
        <DarkModeProvider>
          <Sidebar />
          <main className="flex-1 h-screen overflow-auto bg-[#181818] text-white dark:bg-[#f6f9fc] dark:text-gray-800 transition-colors duration-300">
            {children}
          </main>
        </DarkModeProvider>
      </body>
    </html>
  );
}