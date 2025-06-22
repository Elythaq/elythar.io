'use client';

import { motion } from 'framer-motion';

const phases = [
  {
    title: "Ancient Scrolls",
    subtitle: "Where it all begins",
    image: "/ancient-scroll.png",
    text: "Rooted in centuries of Syriac logic, Elythar’s core is inspired by historic computation methods and abstract language forms.",
  },
  {
    title: "Digital Awakening",
    subtitle: "Systems emerge",
    image: "/digital-circuit.png",
    text: "We merged algorithmic storytelling with digital systems—building bridges between tradition and technology.",
  },
  {
    title: "AI Empowerment",
    subtitle: "Future in motion",
    image: "/ai-orb.png",
    text: "Modern AI, robotics, and RPA tools form the core of Elythar's automation and SaaS offerings—ready for the future.",
  },
];

export default function Timeline() {
  return (
    <section className="relative z-10 py-24 px-6 bg-[#101221]">
      <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500 mb-16">
        From Scrolls to Silicon
      </h2>
      <div className="relative max-w-4xl mx-auto flex flex-col gap-16">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.title}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 shrink-0 rounded-full border-4 border-purple-500/30 shadow-lg overflow-hidden bg-white/5">
              <img src={phase.image} alt={phase.title} className="w-full h-full object-contain p-2" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-teal-300">{phase.title}</h3>
              <p className="text-sm text-purple-400 mb-1">{phase.subtitle}</p>
              <p className="text-gray-300 leading-relaxed">{phase.text}</p>
            </div>
          </motion.div>
        ))}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-teal-400/20 to-transparent transform -translate-x-1/2" />
      </div>
    </section>
  );
}
