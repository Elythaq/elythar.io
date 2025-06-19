'use client';

import React, { useContext } from 'react';
import { SidebarProvider, SidebarContext } from '@/components/Sidebar/sidebarContext';
import { Menu, MenuItem, SubMenu } from '@/components/Sidebar/';
import { BarChart } from '@/icons/BarChart';
import { useDarkMode } from "@/hooks/useDarkMode";
import { Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Global } from '@/icons/Global';
import { Diamond } from '@/icons/Diamond';
import { ShoppingCart } from '@/icons/ShoppingCart';
import { Calendar } from '@/icons/Calendar';
import { Book } from '@/icons/Book';
import { Service } from '@/icons/Service';
import { SidebarHeader } from '@/components/Sidebar/SidebarHeader';
import { SidebarFooter } from '@/components/Sidebar/SidebarFooter';
import { Typography } from '@/components/Sidebar/Typography';
import { Switch } from '@/components/Sidebar/Switch';
import { Badge } from '@/components/Sidebar/Badge';
import { PackageBadges } from '@/components/Sidebar/PackageBadges';
import '@/styles/globals.css';

function SidebarContent() {
  const sidebar = useContext(SidebarContext);
  const [dark, setDark] = useDarkMode();
  // Safeguard: if context is not ready, don't render
  if (!sidebar) return null;

  const { collapsed = false, rtl = false, updateCollapseState } = sidebar;

  // Theme and other state can still be managed locally if not yet in context
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [hasImage, setHasImage] = React.useState(false);

  return (
    <aside className={`relative flex flex-col h-screen w-64 transition-all duration-300 bg-gradient-to-b from-blue-900 to-cyan-400 text-white shadow-lg ${collapsed ? 'w-20' : 'w-64'} ${rtl ? 'flex-row-reverse' : ''}`}>
      {/* Sidebar Header */}
      <SidebarHeader rtl={rtl} style={{ marginBottom: 24, marginTop: 16 }} />

      {/* Menu Sections */}
      <nav className="flex-1 flex flex-col justify-between">
        <div>
          <div className="px-6 mb-2">
            <Typography variant="body2" fontWeight={600} style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}>
              General
            </Typography>
          </div>
          <Menu>
            <SubMenu label="Charts" icon={<BarChart />} suffix={<Badge variant="danger" shape="circle">6</Badge>}>
              <MenuItem>Pie charts</MenuItem>
              <MenuItem>Line charts</MenuItem>
              <MenuItem>Bar charts</MenuItem>
            </SubMenu>
            <SubMenu label="Maps" icon={<Global />}>
              <MenuItem>Google maps</MenuItem>
              <MenuItem>Open street maps</MenuItem>
            </SubMenu>
            <SubMenu label="Components" icon={<Diamond />}>
              <MenuItem>Grid</MenuItem>
              <MenuItem>Layout</MenuItem>
              <SubMenu label="Forms">
                <MenuItem>Input</MenuItem>
                <MenuItem>Select</MenuItem>
                <SubMenu label="More">
                  <MenuItem>CheckBox</MenuItem>
                  <MenuItem>Radio</MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
            <SubMenu label="E-commerce" icon={<ShoppingCart />}>
              <MenuItem>Product</MenuItem>
              <MenuItem>Orders</MenuItem>
              <MenuItem>Credit card</MenuItem>
            </SubMenu>
          </Menu>
          <div className="px-6 mb-2 mt-8">
            <Typography variant="body2" fontWeight={600} style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}>
              Extra
            </Typography>
          </div>
          <Menu>
            <MenuItem icon={<Calendar />} suffix={<Badge variant="success">New</Badge>}>Calendar</MenuItem>
            <MenuItem icon={<Book />}>Documentation</MenuItem>
            <MenuItem disabled icon={<Service />}>Examples</MenuItem>
			<MenuItem
				  icon={dark ? <Moon className="text-blue-400" /> : <Sun className="text-yellow-400" />}
				>
				  <button
					onClick={() => setDark(!dark)}
					className="w-full text-left flex items-center gap-2 text-sm hover:text-accent transition-colors"
				  >
					{dark ? "Dark Mode" : "Light Mode"}
				  </button>
				</MenuItem>
          </Menu>
        </div>
        {/* Sidebar Footer */}
        <SidebarFooter collapsed={collapsed} />
      </nav>

      {/* Collapsed Toggle */}
		  <button
			onClick={updateCollapseState}
			className={`absolute top-1/2 -right-3 z-20 w-7 h-7 rounded-full bg-blue-600 text-white shadow flex items-center justify-center border border-blue-900 transition-all
			  ${collapsed ? 'transform -translate-y-1/2 right-[-14px]' : 'transform -translate-y-1/2 right-[-14px]'}
			  `}
			style={{
			  // ensures it's always vertically centered
			  transform: "translateY(-50%)"
			}}
			title="Toggle sidebar"
		  >
			{collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
		  </button>
    </aside>
  );
}

export default function Sidebar() {
  return (
    <SidebarProvider>
      <SidebarContent />
    </SidebarProvider>
  );
}
