'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ParallaxLayer from '@/components/effects/ParallaxLayer';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden z-10">
      {/* Glow Halo Background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden select-none">
        <motion.div
          className="absolute top-[-30%] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/20 via-teal-400/10 to-transparent rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        />
        <ParallaxLayer speed={50}>
          <img
            src="/ai-orb.png"
            alt="AI Orb"
            className="absolute top-[-100px] right-10 w-48 opacity-10"
          />
        </ParallaxLayer>
      </div>
      {/* Elythar Orb / Glyph */}
      <motion.img
        src="/logo.svg"
        alt="Elythar Logo"
        className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full mb-6 z-10 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Main Headline */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-purple-400 to-pink-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Where <span className="text-green-400">Ancient Intelligence</span> meets <span className="text-purple-400">Modern AI</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Elythar.io is your portal to a new class of digital evolution—combining software, automation, 3D assets, and AI-powered tools rooted in the logic of centuries past.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-10 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Link
          href="/login"
          className="px-8 py-3 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 shadow-md hover:scale-105 transition"
        >
          Explore the Platform
        </Link>
        <Link
          href="/dashboard"
          className="px-8 py-3 rounded-full text-lg font-semibold border border-teal-300 text-teal-200 hover:bg-teal-700/30 transition"
        >
          Enter Elythar Core
        </Link>
      </motion.div>
    </section>
  );
}
