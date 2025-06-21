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
import { useDisplay } from "@/context/DisplayContext";
import { Service } from '@/icons/Service';
import { SidebarHeader } from '@/components/Sidebar/SidebarHeader';
import { SidebarFooter } from '@/components/Sidebar/SidebarFooter';
import { Typography } from '@/components/Sidebar/Typography';
import { Badge } from '@/components/Sidebar/Badge';
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

  // Use global state!
  const { theme, bgImage } = useDisplay();

  // Collapse toggle stays the same...

  // Menu styles
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

  // REMOVE THEME/RTL/BACKGROUND SETTINGS FROM SIDEBAR MENU

  return (
    <div className={`fixed inset-y-0 z-30 ${rtl ? 'right-0' : 'left-0'} flex flex-col h-screen`}>
      <aside
        dir={rtl ? "rtl" : "ltr"}
        className={`
          relative
          transition-all duration-300
          bg-white dark:bg-[#0b2948]
          ${collapsed ? "w-[80px]" : "w-[250px]"}
          h-full
          ${rtl ? "border-l" : "border-r"}
          flex flex-col
          overflow-y-auto
          scrollbar-thin scrollbar-thumb-blue-300 dark:scrollbar-thumb-blue-900
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
            <Menu menuItemStyles={menuItemStyles} renderExpandIcon={({ open }) => (
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${open ? (rtl ? '-rotate-90' : 'rotate-90') : ''} ${rtl ? 'ml-2' : 'mr-2'}`}
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: open ? (rtl ? 'rotate(-90deg)' : 'rotate(90deg)') : undefined }}
              >
                <path d={rtl ? "M6 2L2 6L6 10" : "M2 2L6 6L2 10"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}>
              {/* ... your submenu and menu items as before ... */}
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
              {/* REMOVE Theme/RTL/Background Controls Here */}
            </Menu>
          </div>
          <SidebarFooter collapsed={collapsed} />
        </div>
      </aside>
    </div>
  );
}
