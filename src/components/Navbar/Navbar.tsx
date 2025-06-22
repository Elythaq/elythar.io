'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import useHideOnScroll from '@/hooks/useHideOnScroll';
import { FaGlobe } from "react-icons/fa";

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/#contact' },
  { label: 'About Us', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Marketplace', href: '/products' }
];

export default function Navbar() {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true); // start in dark mode
  const show = useHideOnScroll();

  // Dark mode effect (simple Tailwind 'dark' class toggling)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <nav
      className={`
        w-full fixed top-0 z-40 transition-transform duration-300
        bg-[#232e3d]/95 text-white
        shadow-lg backdrop-blur-lg
        ${show ? 'translate-y-0' : '-translate-y-full'}
        shadow-xl transition-shadow duration-500
      `}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-green-400">Elythar.io</span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 flex-1 ml-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative px-3 py-2 rounded hover:bg-gray-900/70 text-base`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* Right side: search, language, theme, auth */}
        <div className="hidden md:flex items-center gap-2">
          <SearchBar />
          <LanguageDropdown />
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition"
            aria-label="Toggle Dark/Light"
          >
            {dark ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-gray-300" />}
          </button>
          {/* Auth/Login Awareness */}
          <div className="flex items-center gap-2 ml-4">
            {!session && (
              <>
                <Link
                  href="/login"
                  className="px-4 py-1 bg-green-600 rounded font-bold text-white shadow hover:bg-green-700 transition"
                >
                  Get Started
                </Link>
                <Link
                  href="/login"
                  className="px-4 py-1 border border-green-400 rounded font-bold text-green-400 bg-transparent hover:bg-green-500 hover:text-white transition"
                >
                  Login
                </Link>
              </>
            )}
            {session && (
              <>
                <span className="text-green-300 font-semibold mr-2">
                  {session.user?.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-1 bg-orange-600 rounded font-bold text-white shadow hover:bg-orange-700 transition"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden p-2 text-xl" onClick={() => setMobileOpen(!mobileOpen)}>
          <FiMenu />
        </button>
      </div>
      {/* TODO: Implement Mobile Drawer if needed */}
    </nav>
  );
}

// --- Dummy SearchBar (customize for real search) ---
function SearchBar({ mobile = false }) {
  return (
    <div className={`relative ${mobile ? 'px-4 py-2' : ''}`}>
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-800 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}

// --- Dummy LanguageDropdown ---
function LanguageDropdown({ mobile = false }) {
  return (
    <div className={`relative ${mobile ? 'px-4 py-2' : ''}`}>
      <button className="flex items-center gap-1 text-gray-300 hover:text-white">
        <FaGlobe className="text-lg" /> EN ▼
      </button>
      {/* TODO: Implement dropdown for language selection */}
    </div>
  );
}

// --- Auth Modal Skeleton ---
function AuthModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-sm w-full relative">
        <button onClick={onClose} className="absolute right-3 top-3 text-gray-400 hover:text-white text-2xl">&times;</button>
        <h2 className="text-xl font-bold mb-4 text-white">Login to Elythar.io</h2>
        {/* Put your LoginForm here or import as a component */}
        <div className="text-gray-400">[Login/Register Form Goes Here]</div>
      </div>
    </div>
  );
}
