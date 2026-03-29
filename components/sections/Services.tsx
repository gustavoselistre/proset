"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { BentoCard } from "@/components/ui/BentoCard";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.span
            className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossos Serviços
          </motion.span>

          <TextReveal
            text="Soluções completas para cada tipo de evento"
            as="h2"
            className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-5xl"
          />
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[minmax(180px,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <BentoCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              span={service.span}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
