'use client';

import React from 'react';
import { SidebarProvider } from "@/components/Sidebar/sidebarContext";
export const ProSidebarProvider = ({ children }) => (
  <SidebarProvider>{children}</SidebarProvider>
);
