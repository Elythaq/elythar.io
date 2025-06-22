'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiSun, FiMoon, FiX } from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import useHideOnScroll from '@/hooks/useHideOnScroll';

const PRODUCT_CATEGORIES = [
  { name: '3D Assets', img: '/assets/3d.png', href: '/products/3d' },
  { name: 'CLI Tools', img: '/assets/cli.png', href: '/products/cli' },
  { name: 'Add-Ons', img: '/assets/addons.png', href: '/products/addons' },
  { name: 'Automation', img: '/assets/automation.png', href: '/products/automation' },
];

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const show = useHideOnScroll();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const navItemClass = (href: string) =>
    `${pathname === href ? 'text-teal-400 underline' : 'text-gray-300'} hover:text-teal-300 transition`;

  return (
    <nav className={`w-full fixed top-0 z-50 transition-transform duration-300 bg-[#0b0e1a]/80 text-white backdrop-blur shadow-lg ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-green-400">Elythar.io</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 ml-8">
          <Link href="/" className={navItemClass('/')}>Home</Link>
          <Link href="/services" className={navItemClass('/services')}>Services</Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="hover:text-teal-300 transition">Products ▾</button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-8 left-0 bg-[#151b2c] border border-teal-800 rounded-lg shadow-lg p-4 min-w-[300px] z-50"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <Link key={cat.name} href={cat.href} className="flex items-center gap-3 hover:bg-teal-800/20 p-2 rounded">
                        <img src={cat.img} alt={cat.name} className="w-10 h-10 rounded" />
                        <span className="text-sm text-gray-200">{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="hover:text-teal-300 transition">Resources ▾</button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-8 left-0 bg-[#151b2c] border border-teal-800 rounded-lg shadow-lg py-2 px-4 z-50"
                >
                  <Link href="/blog" className="block hover:text-teal-300 py-1">Blog</Link>
                  <Link href="/videos" className="block hover:text-teal-300 py-1">Videos</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageDropdown />
          <button onClick={() => setDark(!dark)} className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700">
            {dark ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-white" />}
          </button>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 via-teal-500 to-green-400 text-sm font-bold text-white shadow-lg hover:scale-105 transition"
          >
            Contact Us
          </Link>
          {!session ? (
            <>
              <Link href="/login" className="px-4 py-1 bg-green-600 rounded font-bold text-white hover:bg-green-700">Get Started</Link>
              <Link href="/login" className="px-4 py-1 border border-green-400 text-green-400 rounded hover:bg-green-600 hover:text-white">Login</Link>
            </>
          ) : (
            <>
              <span className="text-green-300 font-semibold">{session.user?.name}</span>
              <button onClick={() => signOut()} className="px-4 py-1 bg-orange-600 rounded font-bold hover:bg-orange-700">Sign Out</button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-xl" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b0e1a] px-4 py-4 space-y-4 text-sm"
          >
            <Link href="/" onClick={() => setMobileOpen(false)} className={navItemClass('/')}>Home</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className={navItemClass('/services')}>Services</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block hover:text-teal-300">Blog</Link>
            <Link href="/videos" onClick={() => setMobileOpen(false)} className="block hover:text-teal-300">Videos</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block hover:text-teal-300">Contact Us</Link>
            <Link href="/login" onClick={() => setMobileOpen(false)} className="block text-green-300 font-bold">Login</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function LanguageDropdown() {
  return (
    <div>
      <button className="flex items-center gap-1 text-gray-300 hover:text-white">
        <FaGlobe /> EN ▼
      </button>
    </div>
  );
}
