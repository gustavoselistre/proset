"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";

interface BentoCardProps {
  title: string;
  description: string;
  image?: string;
  span?: string;
  index?: number;
}

export function BentoCard({
  title,
  description,
  image,
  span = "",
  index = 0,
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current || "ontouchstart" in window) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-border
        bg-bg-surface ${span}`}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      {/* Background gradient placeholder for image */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent
          opacity-50 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Image placeholder */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity
            duration-500 group-hover:opacity-30"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[200px] flex-col justify-end p-6 md:p-8">
        <div
          className="translate-y-2 transition-transform duration-500
            group-hover:translate-y-0"
        >
          <h3 className="mb-2 font-display text-xl font-bold text-text-primary md:text-2xl">
            {title}
          </h3>
          <p
            className="text-sm leading-relaxed text-text-secondary opacity-0
              transition-opacity duration-500 group-hover:opacity-100 md:text-base"
          >
            {description}
          </p>
        </div>

        {/* Hover border glow */}
        <div
          className="absolute inset-0 rounded-2xl border border-accent-gold/0
            transition-all duration-500 group-hover:border-accent-gold/30
            group-hover:shadow-[inset_0_0_30px_var(--color-accent-glow)]"
        />
      </div>
    </motion.div>
  );
}
