'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa';

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
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModal, setAuthModal] = useState(false);

  return (
    <nav className="w-full bg-black/80 text-white shadow-lg fixed top-0 z-30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-orange-500">
          Elythar.io
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative px-3 py-2 rounded hover:bg-gray-900 ${
                pathname === item.href ? 'text-orange-500 font-bold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <SearchBar />
          <LanguageDropdown />
        </div>
        {/* Auth/Login Awareness */}
        <div className="hidden md:flex items-center gap-2">
          {!session ? (
            <>
              <button
                onClick={() => setAuthModal(true)}
                className="rounded-lg bg-orange-600 px-4 py-2 text-white font-semibold hover:bg-orange-500 transition"
              >
                Get Started
              </button>
              <button
                onClick={() => signIn()}
                className="text-sm text-gray-200 hover:text-white px-2"
              >
                Login
              </button>
              <Link
                href="/register"
                className="text-sm text-orange-400 hover:underline px-2"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="mr-2">Hello, {session.user?.name || 'User'}</span>
              <button
                onClick={() => signOut()}
                className="text-sm bg-gray-900 px-3 py-1 rounded hover:bg-gray-700"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <FiMenu />
        </button>
      </div>
      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg absolute top-16 left-0 w-full py-4 z-40 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative px-4 py-2 rounded hover:bg-gray-900 ${
                pathname === item.href ? 'text-orange-500 font-bold' : ''
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <SearchBar mobile />
          <LanguageDropdown mobile />
          <div className="flex flex-col gap-2 mt-4 px-4">
            {!session ? (
              <>
                <button
                  onClick={() => { setAuthModal(true); setMobileOpen(false); }}
                  className="rounded-lg bg-orange-600 px-4 py-2 text-white font-semibold hover:bg-orange-500 transition"
                >
                  Get Started
                </button>
                <button
                  onClick={() => { signIn(); setMobileOpen(false); }}
                  className="text-sm text-gray-200 hover:text-white px-2"
                >
                  Login
                </button>
                <Link
                  href="/register"
                  className="text-sm text-orange-400 hover:underline px-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <span className="mb-2">Hello, {session.user?.name || 'User'}</span>
                <button
                  onClick={() => { signOut(); setMobileOpen(false); }}
                  className="text-sm bg-gray-900 px-3 py-1 rounded hover:bg-gray-700"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {/* Modal for Auth (login/register) */}
      {authModal && (
        <AuthModal onClose={() => setAuthModal(false)} />
      )}
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
