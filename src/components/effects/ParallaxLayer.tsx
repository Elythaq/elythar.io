'use client';

import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
}

export default function ParallaxLayer({ children, speed = 30 }: ParallaxLayerProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed]);

  return <motion.div style={{ y }} className="will-change-transform">{children}</motion.div>;
}
