'use client';

import './globals.css';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex">
        <Sidebar />
        <main className="flex-grow p-4">{children}</main>
      </body>
    </html>
  );
}
