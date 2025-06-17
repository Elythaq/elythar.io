'use client';

import React, { useState } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BarChart } from '@/icons/BarChart';
import { Sun, Moon } from 'lucide-react';
import { Global } from '@/icons/Global';
import { InkBottle } from '@/icons/InkBottle';
import { Diamond } from '@/icons/Diamond';
import { ShoppingCart } from '@/icons/ShoppingCart';
import { Calendar } from '@/icons/Calendar';
import { Book } from '@/icons/Book';
import { Service } from '@/icons/Service';
import { SidebarHeader } from '@/components/SidebarHeader';
import { SidebarFooter } from '@/components/SidebarFooter';
import { Typography } from '@/components/Typography';
import { Switch } from '@/components/Switch';
import { Badge } from '@/components/Badge';
import { PackageBadges } from '@/components/PackageBadges';
import '@/app/globals.css';

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
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const [rtl, setRtl] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => setRtl(e.target.checked);
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => setTheme(e.target.checked ? 'dark' : 'light');
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => setHasImage(e.target.checked);

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
      backgroundColor: level === 0 ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1) : 'transparent',
    }),
    button: {
      '&:hover': {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }: any) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div className={`flex h-screen ${rtl ? 'flex-row-reverse' : ''}`}>
      <input type="checkbox" id="checkbox" onChange={() => setCollapsed(!collapsed)} style={{ display: 'none' }} />
		<label
		  htmlFor="checkbox"
			  className={`toggle absolute top-26 z-[999] transition-all duration-300 ${
                rtl
				  ? collapsed
					? 'right-[60px]'
					: 'right-[220px]'
				  : collapsed
					? 'left-[60px]'
					: 'left-[220px]'
						}`}
		>
		  <div className="bars" id="bar1"></div>
		  <div className="bars" id="bar2"></div>
		</label>
      <ProSidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        image={hasImage ? 'sidebar-bg.png' : undefined}
        rtl={rtl}
        breakPoint="md"
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
        rootStyles={{ color: themes[theme].sidebar.color }}
		className="!m-0 !p-0"
		  style={{
			margin: 0,
			padding: 0,
			height: '100vh',
			position: 'relative',
		  }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
          <SidebarHeader rtl={rtl} style={{ marginBottom: '24px', marginTop: '16px' }} />

          <div style={{ flex: 1, marginBottom: '32px' }}>
            <div style={{ padding: '0 24px', marginBottom: '8px' }}>
              <Typography variant="body2" fontWeight={600} style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}>General</Typography>
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

            <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
              <Typography variant="body2" fontWeight={600} style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}>Extra</Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<Calendar />} suffix={<Badge variant="success">New</Badge>}>Calendar</MenuItem>
              <MenuItem icon={<Book />}>Documentation</MenuItem>
              <MenuItem disabled icon={<Service />}>Examples</MenuItem>
				<MenuItem
				  icon={theme === 'dark' ? <Moon className="text-blue-400" /> : <Sun className="text-yellow-400" />}
				>
				  <button
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					className="w-full text-left flex items-center gap-2 text-sm hover:text-accent transition-colors"
				  >
					{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
				  </button>
				</MenuItem>

            </Menu>
          </div>

          <SidebarFooter collapsed={collapsed} />
        </div>
      </ProSidebar>

      <main>
        <div style={{ padding: '16px 24px', color: '#44596e' }}>
          <div style={{ marginBottom: '16px' }}>
            {broken && <button className="sb-button" onClick={() => setToggled(!toggled)}>Toggle</button>}
          </div>
          <div style={{ marginBottom: '48px' }}>
            <Typography variant="h4" fontWeight={600}>React Pro Sidebar</Typography>
            <Typography variant="body2">React Pro Sidebar provides a set of components for creating high level and customizable side navigation</Typography>
            <PackageBadges />
          </div>
          <div style={{ padding: '0 8px' }}>
            <div style={{ marginBottom: 16 }}>
              <Switch id="rtl" checked={rtl} onChange={handleRTLChange} label="RTL" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Switch id="image" checked={hasImage} onChange={handleImageChange} label="Image" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
