"use client";

import { motion } from "motion/react";

const circles = Array.from({ length: 4 });

export function WaveCircles() {
  return (
    <div className="relative flex h-64 w-64 items-center justify-center">
      {circles.map((_, i) => {
        const size = 89 + i * 40; // 👈 each circle bigger

        return (
          <motion.div
            key={i}
            style={{
              width: size,
              height: size,
            }}
            className="absolute rounded-full bg-white/15"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
              delay: i * 0.25,
              repeat: Infinity,
              repeatDelay: 1.2,
            }}
          />
        );
      })}
    </div>
  );
}
