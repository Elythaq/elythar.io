'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Timeline from '@/components/home/Timeline';
import Team from '@/components/home/Team';
import BlogPreview from '@/components/home/BlogPreview';

const Particles = dynamic(() => import('@/components/effects/Particles'), { ssr: false });

export default function HomePage() {
  return (
    <div className="relative bg-[#0a0a1a] text-white min-h-screen overflow-x-hidden">
      {/* Glowing SVG + Particle Background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none select-none overflow-hidden">
        {/* SVG Glow Circuit */}
        <svg className="absolute w-full h-full" viewBox="0 0 1440 900" fill="none">
          <defs>
            <radialGradient id="heroGlow" cx="60%" cy="40%" r="70%">
              <stop stopColor="#16f2b3" stopOpacity="0.12" />
              <stop offset="1" stopColor="#0e1124" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#heroGlow)" />
          <polyline points="200,150 400,250 600,190 900,400" stroke="#18d3eb" strokeWidth="2" opacity="0.08" />
          <polyline points="1200,800 900,700 1100,650 600,550" stroke="#b6a16e" strokeWidth="2" opacity="0.05" />
          <circle cx="1200" cy="180" r="120" fill="#865cf7" opacity="0.04" />
        </svg>

        {/* Floating particles */}
        <Particles />
      </div>

      {/* Homepage Sections */}
      <Hero />
      <Services />
      <Timeline />
      <Team />
      <BlogPreview />
    </div>
  );
}
