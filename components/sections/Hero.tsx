"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { MagneticButton } from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // GSAP entrance timeline
  useGSAP(
    () => {
      if (!titleRef.current) return;

      const split = new SplitType(titleRef.current, {
        types: "chars,words",
      });

      const tl = gsap.timeline({ delay: 0.5 });

      // Title chars reveal
      if (split.chars) {
        gsap.set(split.chars, { opacity: 0, y: 60, rotateX: -90 });
        tl.to(split.chars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "power3.out",
        });
      }

      // Subtitle fade in
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // CTA slide up
      tl.from(
        ctaRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // Stats stagger
      if (statsRef.current) {
        tl.from(
          statsRef.current.children,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }

      return () => {
        split.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <GradientMesh />
      <FloatingOrbs />

      {/* Vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--color-bg-primary)_100%)]" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        {/* Badge */}
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border
            bg-bg-surface/50 px-4 py-2 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="h-2 w-2 rounded-full bg-accent-gold animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-wider text-text-secondary">
            Criando experiências desde 2012
          </span>
        </motion.div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight
            text-text-primary sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ perspective: "1000px" }}
        >
          Transformamos Momentos em{" "}
          <span className="text-gradient-gold">Memórias</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl"
        >
          Especialistas em criar eventos únicos e inesquecíveis. Do sonho à
          realidade, cada detalhe é pensado para surpreender.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <MagneticButton href="#contato">
            Solicite um Orçamento
          </MagneticButton>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase
              tracking-wider text-text-secondary transition-colors hover:text-text-primary"
          >
            Ver Portfólio
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </div>

        {/* Mini stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {[
            { number: "12+", label: "Anos" },
            { number: "500+", label: "Eventos" },
            { number: "100%", label: "Dedicação" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block font-display text-2xl font-bold text-accent-gold md:text-3xl">
                {stat.number}
              </span>
              <span className="text-xs uppercase tracking-wider text-text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex h-10 w-6 items-start justify-center rounded-full border border-text-muted/30 p-1.5"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="h-2 w-1 rounded-full bg-accent-gold"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
