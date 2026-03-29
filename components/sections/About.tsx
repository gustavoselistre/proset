"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { Marquee } from "@/components/ui/Marquee";
import { MARQUEE_WORDS } from "@/lib/constants";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 md:py-32">
      {/* Marquee background */}
      <div className="mb-16 md:mb-24">
        <Marquee items={MARQUEE_WORDS} speed={25} />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Text content */}
          <div>
            <motion.span
              className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent-gold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Sobre Nós
            </motion.span>

            <TextReveal
              text="Há mais de uma década criando momentos extraordinários"
              as="h2"
              className="mb-6 font-display text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-5xl"
            />

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-base leading-relaxed text-text-secondary md:text-lg">
                A <strong className="text-text-primary">Pro Set</strong> nasceu
                da paixão por transformar sonhos em realidade. Cada evento que
                produzimos carrega nossa dedicação em criar experiências que
                tocam o coração das pessoas.
              </p>
              <p className="text-base leading-relaxed text-text-secondary md:text-lg">
                Com uma equipe de profissionais experientes e criativos,
                oferecemos soluções completas — da concepção à execução — para
                que você viva cada momento com intensidade e sem preocupações.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                "Planejamento Completo",
                "Equipe Dedicada",
                "Fornecedores Premium",
                "Atendimento Exclusivo",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-bg-surface"
            >
              {/* Gradient placeholder for image */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-gold/10 via-bg-surface to-accent-champagne/5">
                <span className="font-display text-6xl font-bold text-text-muted/20">
                  PS
                </span>
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-accent-gold/20" />
          </motion.div>
        </div>
      </div>

      {/* Second marquee (reverse) */}
      <div className="mt-16 md:mt-24">
        <Marquee
          items={[...MARQUEE_WORDS].reverse()}
          speed={30}
          separator="✦"
        />
      </div>
    </section>
  );
}
