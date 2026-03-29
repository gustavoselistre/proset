"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useCallback } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      // Disable on touch devices
      if ("ontouchstart" in window) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      x.set((e.clientX - centerX) * strength);
      y.set((e.clientY - centerY) * strength);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const Component = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`relative inline-flex items-center justify-center overflow-hidden rounded-full
          bg-accent-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider
          text-bg-primary transition-all duration-300
          hover:shadow-[0_0_30px_var(--color-accent-glow)]
          hover:scale-105 active:scale-95 ${className}`}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-accent-gold-light"
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </Component>
    </motion.div>
  );
}
