'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// You can replace these with your real images
const heroImg = "/logo.svg";
const teamAvatars = [
  "/team1.png",
  "/team2.png",
  "/team3.png",
];
const serviceIcons = [
  "🧠", "⚙️", "🌐"
];

// Particle helper type
type Particle = { left: string; top: string; size: number };

function AnimatedParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }, (_, i) => ({
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 80}%`,
        size: 28 + (i % 3) * 10,
      }))
    );
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-green-400 blur-lg opacity-20"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, (i % 2 ? 60 : -40), 0],
            x: [0, (i % 2 ? -30 : 30), 0],
          }}
          transition={{
            duration: 8 + (i % 4),
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className="bg-[#15182a] dark:bg-[#101221] min-h-screen font-sans text-white relative overflow-x-hidden">
      {/* SVG Glow + Particle Animation Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        {/* SVG glowing circuit pattern */}
        <svg className="absolute left-0 top-0 w-full h-full" width="100%" height="100%" viewBox="0 0 1440 900">
          <defs>
            <radialGradient id="heroGlow" cx="60%" cy="40%" r="70%">
              <stop stopColor="#16f2b3" stopOpacity="0.12" />
              <stop offset="1" stopColor="#0e1124" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#heroGlow)" />
          <polyline points="200,150 400,250 600,190 900,400" stroke="#18d3eb" strokeWidth="3" fill="none" opacity="0.09"/>
          <polyline points="1200,800 900,700 1100,650 600,550" stroke="#b6a16e" strokeWidth="2" fill="none" opacity="0.06"/>
          <circle cx="1200" cy="180" r="120" fill="#865cf7" opacity="0.05"/>
        </svg>
        {/* Animated Particles */}
        <AnimatedParticles />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center px-4 pt-24 pb-12">
        <motion.img
          src={heroImg}
          alt="Elythar Ancient AI Fusion"
          className="mx-auto mb-6 drop-shadow-2xl rounded-2xl w-64 h-64 object-contain glass"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient bg-gradient-to-tr from-green-400 via-teal-300 to-purple-400 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ancient Wisdom, <span className="text-green-400">Futuristic AI</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Elythar.io brings together the power of Syriac heritage and next-generation AI to craft truly transformative software, automation, and SaaS tools.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/login"
            className="px-8 py-3 rounded-full bg-gradient-to-tr from-green-400 via-teal-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 rounded-full bg-transparent border border-green-400 text-green-300 font-bold text-lg hover:bg-green-900/60 hover:text-white transition"
          >
            Login
          </Link>
          {/* DASHBOARD BUTTON */}
          <Link
            href="/dashboard"
            className="px-8 py-3 rounded-full bg-gradient-to-tr from-purple-400 via-blue-500 to-green-400 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            Dashboard
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gradient bg-gradient-to-tr from-green-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {["AI Automation", "SaaS Tools", "3D/Software Solutions"].map((title, i) => (
            <motion.div
              key={title}
              className="rounded-2xl glass bg-white/10 dark:bg-[#232e3d]/70 shadow-xl p-8 flex flex-col items-center text-center border border-teal-500/30 hover:scale-105 hover:shadow-teal-500/30 transition-all group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 240 }}
            >
              <div className="text-5xl mb-3">{serviceIcons[i]}</div>
              <h3 className="font-bold text-xl mb-2 text-green-300">{title}</h3>
              <p className="text-gray-300">
                {title === "AI Automation" && "Custom AI integrations for your workflows, inspired by ancient algorithms and modern machine learning."}
                {title === "SaaS Tools" && "Powerful, scalable software-as-a-service platforms tailored for your business."}
                {title === "3D/Software Solutions" && "Immersive digital experiences, blending old world wisdom with the latest in code and 3D design."}
              </p>
              {/* Ancient motif in corner */}
              <svg className="absolute top-3 right-3 w-6 h-6 opacity-50" viewBox="0 0 24 24">
                <path fill="#B9FFD9" d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
              </svg>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline / Journey Section */}
      <section className="relative z-10 py-16 px-4 bg-gradient-to-b from-transparent via-[#181d2f]/40 to-transparent">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-teal-200">From Scrolls to Silicon</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          <motion.div
            className="flex-1 flex flex-col items-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <img src="/ancient-scroll.png" alt="Ancient Scroll" className="w-24 h-24 mb-2" />
            <span className="text-lg text-gray-300">Ancient Wisdom</span>
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <svg height="80" width="160">
              <rect x="20" y="35" width="120" height="10" rx="6" fill="#24e1c1" opacity={0.5} />
              <circle cx="80" cy="40" r="14" fill="#865cf7" opacity={0.7} />
            </svg>
            <span className="text-lg text-gray-300">Digital Revolution</span>
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col items-center"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img src="/ai-orb.png" alt="Futuristic AI" className="w-24 h-24 mb-2" />
            <span className="text-lg text-teal-300">AI Empowerment</span>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-16 px-4">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-purple-200">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {teamAvatars.map((src, i) => (
            <motion.div
              key={src}
              className="rounded-2xl bg-white/10 dark:bg-[#1d243a]/60 shadow-xl p-6 w-56 flex flex-col items-center border border-purple-500/20 glass hover:scale-105 hover:shadow-purple-500/20 transition"
              whileHover={{ scale: 1.05 }}
            >
              <img src={src} alt={`Team member ${i + 1}`} className="w-24 h-24 object-cover rounded-full mb-3 border-4 border-green-300 shadow-lg" />
              <h3 className="font-bold text-xl text-green-200">Member {i + 1}</h3>
              <p className="text-gray-300">AI Developer & Ancient Tech Enthusiast</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section className="relative z-10 py-16 px-4">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-green-200">Insights & Updates</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              className="rounded-2xl bg-[#21264b]/80 dark:bg-[#101221]/60 shadow-xl p-6 flex flex-col glass border border-green-300/20 hover:scale-105 transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="font-bold text-lg text-green-300 mb-2">Post Title {n}</h4>
              <p className="text-gray-300 mb-3">Ancient innovation meets modern code—read the latest on AI, automation, and Syriac-inspired breakthroughs.</p>
              <Link href="/blog" className="text-teal-300 hover:underline mt-auto">Read More →</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 pb-8 pt-12 border-t border-teal-500/40 relative z-10 bg-gradient-to-t from-[#181d2f]/60 to-transparent">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-6">
          <div className="text-lg font-bold text-green-200 mb-2 md:mb-0">Elythar.io</div>
          <div className="flex-1 h-8">
            {/* Ancient motif + code SVG example */}
            <svg height="32" viewBox="0 0 160 32" fill="none" className="w-full">
              <rect x="10" y="12" width="140" height="8" rx="4" fill="#24e1c1" opacity={0.3} />
              <circle cx="25" cy="16" r="6" fill="#b6a16e" />
              <circle cx="135" cy="16" r="6" fill="#b6a16e" />
              {/* Add more geometric shapes for "ancient/circuit" look */}
            </svg>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Elythar.io. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
