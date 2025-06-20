'use client';
console.log("Sidebar component is rendering");
import React, { useState } from 'react';
import { useProSidebar } from "@/hooks/useSidebar";
import { Menu } from '@/components/Sidebar/Menu';
import { MenuItem } from '@/components/Sidebar/MenuItem';
import { SubMenu } from '@/components/Sidebar/SubMenu';
import { BarChart } from '@/icons/BarChart';
import { Sun, Moon } from 'lucide-react';
import { Global } from '@/icons/Global';
import { InkBottle } from '@/icons/InkBottle';
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

// Theme logic as before
const themes = {
  light: {
    sidebar: {
      backgroundColor: '#ffffff',
      color: '#607489',
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#0098e5',
      hover: {
        backgroundColor: '#c5e4ff',
        color: '#44596e',
      },
      disabled: {
        color: '#9fb6cf',
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: '#0b2948',
      color: '#8ba1b7',
    },
    menu: {
      menuContent: '#082440',
      icon: '#59d0ff',
      hover: {
        backgroundColor: '#00458b',
        color: '#b6c8d9',
      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  },
};

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function Sidebar() {
  // Use your own context/hook
  const {
    collapsed,
    toggled,
    broken,
    rtl,
    collapseSidebar,
    toggleSidebar,
  } = useProSidebar();

  // These are UI-only, not part of the sidebar context
  const [hasImage, setHasImage] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // MenuItemStyles logic is currently not dynamic via Tailwind, but kept for compatibility
  const menuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }: any) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
          : 'transparent',
    }),
    button: {
      '&:hover': {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }: any) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  // --- Collapse Toggle Button ---
  const CollapseToggle = (
    <button
      onClick={() => collapseSidebar()}
      aria-label="Toggle sidebar"
      className={`
        fixed top-6 z-[999] transition-all duration-300 bg-blue-600 text-white rounded-full shadow
        w-8 h-8 flex items-center justify-center
        ${rtl
          ? collapsed
            ? 'right-2'
            : 'right-[230px]'
          : collapsed
            ? 'left-2'
            : 'left-[230px]'
        }
      `}
      style={{ border: 0 }}
    >
      <span className="sr-only">Toggle sidebar</span>
      {collapsed ? (
        <>
          <div className="w-4 h-0.5 bg-white mb-1"></div>
          <div className="w-4 h-0.5 bg-white"></div>
        </>
      ) : (
        rtl ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )
      )}
    </button>
  );

  return (
    <div className={`flex h-screen ${rtl ? 'flex-row-reverse' : ''}`}>
      {CollapseToggle}

      {/* SIDEBAR */}
      <aside
        className={`
          relative
          transition-all duration-300
          bg-white dark:bg-[#0b2948]
          ${collapsed ? 'w-[80px]' : 'w-[250px]'}
          h-full
          border-r
          z-30
        `}
        style={{
          backgroundColor: hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1),
          color: themes[theme].sidebar.color,
        }}
      >
        {hasImage && (
          <img
            src="/sidebar-bg.png"
            alt="sidebar background"
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0"
            draggable={false}
          />
        )}

        <div className="flex flex-col h-full relative z-10">
          <SidebarHeader rtl={rtl} collapsed={collapsed} style={{ marginBottom: '24px', marginTop: '16px' }} />

          <div className="flex-1 mb-8">
            <div className="px-6 mb-2">
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                General
              </Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
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
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                Extra
              </Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<Calendar />} suffix={<Badge variant="success">New</Badge>}>Calendar</MenuItem>
              <MenuItem icon={<Book />}>Documentation</MenuItem>
              <MenuItem disabled icon={<Service />}>Examples</MenuItem>
              <MenuItem
                icon={theme === 'dark' ? <Moon className="text-blue-400" /> : <Sun className="text-yellow-400" />}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                  <Switch
                    checked={theme === 'dark'}
                    onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    aria-label="Toggle dark mode"
                    className="ml-2"
                  />
                </div>
              </MenuItem>
            </Menu>
          </div>

          <SidebarFooter collapsed={collapsed} />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-gray-50 dark:bg-[#121a2e] overflow-y-auto">
        <div className="p-6" style={{ color: '#44596e' }}>
          <div className="mb-4">
            {broken && (
              <button className="sb-button" onClick={toggleSidebar}>
                Toggle
              </button>
            )}
          </div>
          <div className="mb-12">
            <Typography variant="h4" fontWeight={600}>Custom Sidebar</Typography>
            <Typography variant="body2">
              This sidebar uses your own components, hooks, and context—fully custom, fully extendable.
            </Typography>
            <PackageBadges />
          </div>
          <div className="px-2">
            <div className="mb-4">
              <Switch id="rtl" checked={rtl} onChange={() => collapseSidebar()} label="RTL" />
            </div>
            <div className="mb-4">
              <Switch id="image" checked={hasImage} onChange={() => setHasImage(!hasImage)} label="Image" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
