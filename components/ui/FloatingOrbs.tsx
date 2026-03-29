"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Orb {
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  parallaxSpeed: number;
}

const DEFAULT_ORBS: Orb[] = [
  { size: 300, x: "10%", y: "20%", delay: 0, duration: 8, parallaxSpeed: 0.3 },
  { size: 200, x: "70%", y: "10%", delay: 1, duration: 10, parallaxSpeed: 0.5 },
  { size: 150, x: "80%", y: "60%", delay: 2, duration: 7, parallaxSpeed: 0.2 },
  { size: 250, x: "20%", y: "70%", delay: 0.5, duration: 9, parallaxSpeed: 0.4 },
  { size: 180, x: "50%", y: "40%", delay: 1.5, duration: 11, parallaxSpeed: 0.35 },
];

export function FloatingOrbs({
  orbs = DEFAULT_ORBS,
  className = "",
}: {
  orbs?: Orb[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {orbs.map((orb, i) => (
        <OrbElement key={i} orb={orb} scrollProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function OrbElement({
  orb,
  scrollProgress,
}: {
  orb: Orb;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(
    scrollProgress,
    [0, 1],
    [0, -200 * orb.parallaxSpeed]
  );

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: orb.size,
        height: orb.size,
        left: orb.x,
        top: orb.y,
        y,
        background: `radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)`,
        filter: "blur(40px)",
      }}
      animate={{
        y: [0, -30, 0, 20, 0],
        x: [0, 15, -10, 5, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration: orb.duration,
        repeat: Infinity,
        delay: orb.delay,
        ease: "easeInOut",
      }}
    />
  );
}
