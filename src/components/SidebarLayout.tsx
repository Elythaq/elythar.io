'use client';

import { useProSidebar } from '@/hooks/useProSidebar';
import Sidebar from '@/components/Sidebar';
import { Menu } from '@/components/Menu';
import { MenuItem } from '@/components/MenuItem';


export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="flex min-h-screen">
      <Sidebar backgroundColor="#0a0a0a">
        <div className="p-4 text-white font-bold text-xl">ELYTHAR</div>
        <Menu>
          <MenuItem>🏠 Home</MenuItem>
          <MenuItem>📦 Products</MenuItem>
          <MenuItem>👤 Dashboard</MenuItem>
		  <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>

      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
}
