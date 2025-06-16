import AppSidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen text-white">
      <AppSidebar />
      <main className="flex-1 p-6 bg-gray-900">{children}</main>
    </div>
  );
}
