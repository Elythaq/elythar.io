'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LucideLinkedin, LucideGithub } from 'lucide-react';

const team = [
  {
    name: "Fadi Helal",
    title: "Software Engineer",
    img: "/assets/author.png", 
    links: {
      github: "https://github.com/Elythaq",
      linkedin: "https://www.linkedin.com/in/fadi-helal/",
    },
  },
  // Add more team members here as needed
];

export default function Team() {
  return (
    <section className="relative z-10 py-24 px-6 bg-[#0a0c1b]">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-green-400 to-blue-400 mb-14">
        Our Time-Defying Team
      </h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            className="group relative w-64 bg-gradient-to-tr from-[#1d1f3f]/50 to-[#131627]/50 border border-purple-500/10 rounded-2xl p-6 backdrop-blur-md hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Image
              src={member.img}
              alt={member.name}
              width={96}
              height={96}
              className="rounded-full border-4 border-teal-300 shadow-md mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center text-green-300">{member.name}</h3>
            <p className="text-sm text-center text-gray-400 mb-4">{member.title}</p>
            <div className="flex justify-center gap-4 mt-auto">
              <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                <LucideLinkedin className="w-5 h-5 text-blue-400 hover:text-white transition" />
              </a>
              <a href={member.links.github} target="_blank" rel="noopener noreferrer">
                <LucideGithub className="w-5 h-5 text-gray-400 hover:text-white transition" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
