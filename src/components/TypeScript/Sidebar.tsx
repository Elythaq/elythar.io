// src/components/Sidebar.tsx
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import 'remixicon/fonts/remixicon.css';

export default function Sidebar() {
  return (
    <ProSidebar breakPoint="md">
      <Menu iconShape="round">
        <MenuItem icon={<i className="ri-home-2-fill"></i>}>Dashboard</MenuItem>

        <SubMenu title="Components" icon={<i className="ri-vip-diamond-fill"></i>}>
          <MenuItem> Grid </MenuItem>
          <MenuItem> Layout </MenuItem>
          <SubMenu title="Forms">
            <MenuItem> Input </MenuItem>
            <MenuItem> Select </MenuItem>
          </SubMenu>
        </SubMenu>

        <SubMenu title="Charts" icon={<i className="ri-bar-chart-2-fill"></i>}>
          <MenuItem>Pie</MenuItem>
          <MenuItem>Line</MenuItem>
          <MenuItem>Bar</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}
