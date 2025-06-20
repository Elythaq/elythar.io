'use client';
import React, { useRef } from 'react';
import RtlToggle from "@/components/Sidebar/RtlToggle";
import { Switch } from "@/components/Sidebar/Switch";
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
import { Badge } from '@/components/Sidebar/Badge';
import { PackageBadges } from '@/components/Sidebar/PackageBadges';
import '@/styles/globals.css';

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
	const {
	  collapsed,
	  rtl,
	  collapseSidebar,
	  updateSidebarState, 
	} = useProSidebar();


  // Theme & Background state
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [bgImage, setBgImage] = React.useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Move collapse toggle to edge, centered vertically
  const CollapseToggle = (
    <button
      onClick={() => collapseSidebar()}
      aria-label="Toggle sidebar"
      className={`
        fixed z-[999] transition-all duration-300 bg-blue-600 text-white rounded-full shadow
        w-8 h-8 flex items-center justify-center
        top-1/2 -translate-y-1/2
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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <polyline points={rtl ? "9 18 15 12 9 6" : "15 18 9 12 15 6"} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <polyline points={rtl ? "9 18 15 12 9 6" : "15 18 9 12 15 6"} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );

  // Menu styles for compatibility (can be cleaned up if all Tailwind)
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
          ? hexToRgba(themes[theme].menu.menuContent, bgImage && !collapsed ? 0.4 : 1)
          : 'transparent',
    }),
    button: {
      '&:hover': {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          bgImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }: any) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  // Theme switcher: icon is a clickable area (not a Switch!)
  const ThemeToggle = (
    <MenuItem
      icon={theme === 'dark' ? <Moon className="text-blue-400" /> : <Sun className="text-yellow-400" />}
      className="cursor-pointer"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className="w-full flex items-center gap-2 text-sm">
        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </MenuItem>
  );

  // Sidebar background: upload and clear
  const handleBgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setBgImage(url);
    }
  };

  const SidebarBgToggle = (
    <MenuItem
      icon={<img src={bgImage || '/sidebar-bg.png'} alt="bg" className="w-5 h-5 rounded object-cover" />}
      className="cursor-pointer flex items-center"
    >
      <div className="flex items-center gap-2 w-full">
        <span>Sidebar Background</span>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-2 py-1 text-xs bg-blue-500 rounded text-white hover:bg-blue-700 transition"
          type="button"
        >{bgImage ? "Change" : "Upload"}</button>
        {bgImage && (
          <button
            onClick={() => setBgImage(null)}
            className="px-2 py-1 text-xs bg-gray-300 rounded text-gray-700 hover:bg-gray-400 transition"
            type="button"
          >Remove</button>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleBgUpload}
        />
      </div>
    </MenuItem>
  );

  return (
    <div className={`flex h-screen ${rtl ? 'flex-row-reverse' : ''}`}>
      {CollapseToggle}

      {/* SIDEBAR */}
      <aside
        className={`
          relative transition-all duration-300
          bg-white dark:bg-[#0b2948]
          ${collapsed ? 'w-[80px]' : 'w-[250px]'}
          h-full border-r z-30
        `}
        style={{
          backgroundColor: hexToRgba(themes[theme].sidebar.backgroundColor, bgImage ? 0.9 : 1),
          color: themes[theme].sidebar.color,
        }}
      >
        {bgImage && (
          <img
            src={bgImage}
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
              {ThemeToggle}
              {SidebarBgToggle}
				<MenuItem>
				  <RtlToggle
					checked={rtl}
					onChange={() => updateSidebarState({ rtl: !rtl })}
				  />
				</MenuItem>
            </Menu>
          </div>

          <SidebarFooter collapsed={collapsed} />
        </div>
      </aside>
    </div>
  );
}
