'use client';

import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement('div');
    glow.className = 'elythar-cursor-glow';
    document.body.appendChild(glow);

    const move = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', move);
    return () => {
      document.removeEventListener('mousemove', move);
      glow.remove();
    };
  }, []);

  return null;
}
