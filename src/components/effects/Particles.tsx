'use client';

import { motion } from 'framer-motion';

type Particle = { left: string; top: string; size: number };

export default function Particles() {
  const particles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 80}%`,
    size: 28 + (i % 3) * 10,
  }));

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
