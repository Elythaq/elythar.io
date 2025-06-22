'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Marketplace', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Login', href: '/login' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0e1a]/80 backdrop-blur border-b border-teal-600/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-300 tracking-wider">
          Elythar.io
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-teal-300 transition ${
                pathname === href ? 'text-teal-400 underline' : 'text-gray-300'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
