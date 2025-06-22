'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    title: "How RPA Meets Ancient Logic",
    description: "A look at how Syriac algorithmic thinking laid the foundation for modern robotic process automation.",
    tag: "Automation",
  },
  {
    title: "Building Add-ons That Matter",
    description: "From Blender to VSCode — a breakdown of plugin UX patterns that feel like magic to power users.",
    tag: "Plugins",
  },
  {
    title: "SaaS Needs Ritual",
    description: "Why meaningful automation needs human-centered thinking — not just pipelines.",
    tag: "SaaS",
  },
];

export default function BlogPreview() {
  return (
    <section className="relative z-10 py-24 px-6 bg-[#0e111f]">
      <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-purple-400 to-pink-500 mb-16">
        Insights from the Arcane Core
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {posts.map((post, i) => (
          <motion.div
            key={post.title}
            className="flex flex-col bg-[#14182f] border border-teal-500/10 rounded-2xl p-6 hover:shadow-lg transition duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <span className="text-xs font-medium text-teal-300 uppercase tracking-wide mb-2">
              {post.tag}
            </span>
            <h4 className="text-lg font-bold text-green-200 group-hover:text-white transition">
              {post.title}
            </h4>
            <p className="text-sm text-gray-400 mt-2 flex-grow">{post.description}</p>
            <Link
              href="/blog"
              className="mt-4 text-sm text-teal-300 hover:underline hover:text-white transition font-medium"
            >
              Read more →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
