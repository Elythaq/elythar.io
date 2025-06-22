'use client';

import { motion } from 'framer-motion';
import { LucideCpu, LucideLayers, LucideCloudCog, LucideShieldCheck, LucideTerminal } from 'lucide-react';

const services = [
  {
    title: "AI & Automation",
    icon: <LucideCpu className="w-8 h-8 text-green-400" />,
    description: "Intelligent pipelines, RPA workflows, and automation tooling that think faster than your dev team.",
  },
  {
    title: "SaaS Engineering",
    icon: <LucideCloudCog className="w-8 h-8 text-purple-400" />,
    description: "Modular, API-driven SaaS solutions built for extensibility, performance, and real-world scale.",
  },
  {
    title: "3D & Game Assets",
    icon: <LucideLayers className="w-8 h-8 text-blue-400" />,
    description: "Export-ready 3D models, materials, and rigged systems optimized for Unreal, Unity, and Godot.",
  },
  {
    title: "CLI / Dev Tools",
    icon: <LucideTerminal className="w-8 h-8 text-orange-400" />,
    description: "Productivity-focused CLI utilities and developer automation tools, from deployment to testing.",
  },
  {
    title: "Add-ons & Plugins",
    icon: <LucideLayers className="w-8 h-8 text-pink-400" />,
    description: "Tailor-made integrations for Blender, VSCode, browser extensions, and production stacks.",
  },
  {
    title: "Security & QA",
    icon: <LucideShieldCheck className="w-8 h-8 text-teal-400" />,
    description: "Penetration testing, automation test harnesses, and zero-trust focused QA systems.",
  },
];

export default function Services() {
  return (
    <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-[#15182a] via-[#101221] to-[#0a0a15]">
      <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mb-16">
        What We Build
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="group bg-[#1a1f35] border border-teal-600/10 rounded-2xl p-6 backdrop-blur-md hover:shadow-lg hover:border-teal-400 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-green-300 group-hover:text-white transition">{service.title}</h3>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
