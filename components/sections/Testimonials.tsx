"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 md:py-32">
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
            Depoimentos
          </motion.span>

          <TextReveal
            text="O que nossos clientes dizem"
            as="h2"
            className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-5xl"
          />
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="group relative rounded-2xl border border-border bg-bg-surface p-8
                hover:border-accent-gold/20 md:p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Quote mark */}
              <span className="mb-6 block font-display text-6xl leading-none text-accent-gold/20">
                &ldquo;
              </span>

              {/* Text */}
              <p className="mb-8 text-base leading-relaxed text-text-secondary md:text-lg">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10">
                  <span className="text-sm font-bold text-accent-gold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-muted">{testimonial.event}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle at 50% 0%, var(--color-accent-glow) 0%, transparent 60%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
