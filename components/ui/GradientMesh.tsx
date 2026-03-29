"use client";

import { motion } from "framer-motion";

export function GradientMesh({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Top-left warm glow */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-gold) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom-right champagne glow */}
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-champagne) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center subtle accent */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-gold) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
