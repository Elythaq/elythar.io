'use client';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaHome, FaRocket, FaTools } from 'react-icons/fa';
import Link from 'next/link';

export default function AppSidebar() {
  return (
    <Sidebar>
      <Menu>
        <MenuItem icon={<FaHome />} component={(props) => <Link href="/" {...props} />}>Home</MenuItem>
        <SubMenu label="Products" icon={<FaRocket />}>
          <MenuItem component={(props) => <Link href="/products" {...props} />}>Marketplace</MenuItem>
          <MenuItem component={(props) => <Link href="/products/tools" {...props} />}>Tools</MenuItem>
        </SubMenu>
        <MenuItem icon={<FaTools />} component={(props) => <Link href="/dashboard" {...props} />}>Dashboard</MenuItem>
      </Menu>
    </Sidebar>
  );
}
