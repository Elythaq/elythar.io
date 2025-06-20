import '@/styles/globals.css';
import Sidebar from "@/components/Sidebar/Sidebar";
import { ProSidebarProvider } from "@/components/Sidebar/ProSidebarProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* ... */}
      {children}
    </div>
  );
}
