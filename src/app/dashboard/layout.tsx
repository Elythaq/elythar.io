import './globals.css';
import AppSidebar from '@/components/Sidebar';
import { ProSidebarProvider } from '@/components/ProSidebarProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <AppSidebar />
          <main className="flex-1 p-6 bg-white text-black dark:bg-black dark:text-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
