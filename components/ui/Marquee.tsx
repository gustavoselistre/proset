"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  separator?: string;
}

export function Marquee({
  items,
  speed = 20,
  className = "",
  separator = "•",
}: MarqueeProps) {
  const content = items.join(` ${separator} `) + ` ${separator} `;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <span className="mr-4 text-2xl font-light uppercase tracking-[0.2em] text-text-muted md:text-4xl">
          {content}
        </span>
        <span className="mr-4 text-2xl font-light uppercase tracking-[0.2em] text-text-muted md:text-4xl">
          {content}
        </span>
      </motion.div>
    </div>
  );
}
