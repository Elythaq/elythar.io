'use client';

import './globals.css';
import { ProSidebarProvider } from '@/components/ProSidebarProvider';
import { Sidebar } from '@/components/Sidebar';
import { Menu } from '@/components/Menu';
import { MenuItem } from '@/components/MenuItem';
import { useProSidebar } from '@/hooks/useProSidebar';
import { SubMenu } from '@/components/SubMenu';
import SidebarLayout from '@/components/SidebarLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProSidebarProvider>
          <SidebarLayout>{children}</SidebarLayout>
        </ProSidebarProvider>
      </body>
    </html>
  );
}