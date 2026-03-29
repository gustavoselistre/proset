"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-border py-20 md:py-28">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-gold/5 via-transparent to-accent-gold/5" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-4xl font-bold text-accent-gold md:text-5xl lg:text-6xl"
              />
              <p className="mt-2 text-sm uppercase tracking-wider text-text-secondary md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
