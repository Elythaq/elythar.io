import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ProSidebarProvider } from '@/components/ProSidebarProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elythar.io",
  description: "Next.js E-Commerce Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ProSidebarProvider>
          <div className="flex min-h-screen">
            <Sidebar backgroundColor="#0a0a0a">
			  <div className="p-4 text-white font-bold text-xl">ELYTHAR</div>
			  <ul className="flex flex-col space-y-2 p-4 text-white">
				<li>
				  <a href="/" className="hover:text-orange-500 transition-colors">
					🏠 Home
				  </a>
				</li>
				<li>
				  <a href="/products" className="hover:text-orange-500 transition-colors">
					📦 Products
				  </a>
				</li>
				<li>
				  <a href="/dashboard" className="hover:text-orange-500 transition-colors">
					👤 Dashboard
				  </a>
				</li>
			  </ul>
			</Sidebar>
            <main className="flex-1 bg-black text-white p-6">
              {children}
            </main>
          </div>
        </ProSidebarProvider>
      </body>
    </html>
  );
}
