'use client';
import React from 'react';
import { SidebarContext } from "@/components/Sidebar/sidebarContext";

interface ProSidebarProviderProps {
  children?: React.ReactNode;
}

export const ProSidebarProvider: React.FC<ProSidebarProviderProps> = ({ children }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
