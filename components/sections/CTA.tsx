"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { TextReveal } from "@/components/ui/TextReveal";

const CTA_ORBS = [
  { size: 200, x: "5%", y: "30%", delay: 0, duration: 10, parallaxSpeed: 0.2 },
  { size: 150, x: "85%", y: "20%", delay: 1, duration: 8, parallaxSpeed: 0.3 },
  { size: 180, x: "50%", y: "70%", delay: 2, duration: 12, parallaxSpeed: 0.15 },
];

export function CTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-gold/5 to-transparent" />
        <FloatingOrbs orbs={CTA_ORBS} />
      </div>

      {/* Decorative lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 lg:px-16 text-center">
        <motion.span
          className="mb-6 inline-block text-sm font-medium uppercase tracking-widest text-accent-gold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Vamos Conversar
        </motion.span>

        <TextReveal
          text="Vamos Criar Algo Extraordinário Juntos?"
          as="h2"
          className="mb-6 text-center font-display text-4xl font-bold leading-tight text-text-primary md:text-5xl lg:text-6xl"
        />

        <motion.p
          className="mx-auto mb-10 max-w-xl text-lg text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Conte-nos sobre o seu evento dos sonhos. Nossa equipe está pronta para
          transformar sua visão em uma experiência inesquecível.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <MagneticButton
            href="https://instagram.com/proseteventos"
            className="text-base"
          >
            Fale Conosco no Instagram
          </MagneticButton>
        </motion.div>

        {/* Contact details */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="https://instagram.com/proseteventos"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-gold"
          >
            @proseteventos
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-text-muted sm:block" />
          <span>contato@proseteventos.com.br</span>
        </motion.div>
      </div>
    </section>
  );
}
