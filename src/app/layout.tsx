// src/app/layout.tsx

'use client';

import '@/styles/globals.css';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex min-h-screen">
        <Sidebar />
        <main className="flex-1 h-screen overflow-auto bg-[#181818] p-0">
          {children}
        </main>
      </body>
    </html>
  );
}
