"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/ui/TextReveal";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !trackRef.current || !sectionRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === sectionRef.current)
        .forEach((st) => st.kill());
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative overflow-hidden bg-bg-surface py-24 md:py-0"
    >
      {/* Desktop: Horizontal scroll */}
      {!isMobile && (
        <div className="flex h-screen items-center">
          {/* Section header (fixed left) */}
          <div className="absolute left-6 top-1/2 z-10 -translate-y-1/2 md:left-12">
            <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-accent-gold">
              Portfólio
            </span>
            <h2 className="font-display text-3xl font-bold text-text-primary md:text-5xl">
              Nossos
              <br />
              <span className="text-gradient-gold">Trabalhos</span>
            </h2>
          </div>

          {/* Horizontal track */}
          <div ref={trackRef} className="flex gap-6 pl-[40vw]">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <PortfolioCard key={item.title} item={item} index={i} />
            ))}
            {/* Extra space at end */}
            <div className="w-[20vw] shrink-0" />
          </div>
        </div>
      )}

      {/* Mobile: Vertical stack */}
      {isMobile && (
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent-gold">
              Portfólio
            </span>
            <TextReveal
              text="Nossos Trabalhos"
              as="h2"
              className="font-display text-3xl font-bold text-text-primary"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <PortfolioCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof PORTFOLIO_ITEMS)[number];
  index: number;
}) {
  return (
    <motion.div
      className="group relative h-[60vh] w-[70vw] shrink-0 overflow-hidden rounded-2xl
        border border-border bg-bg-primary md:h-[70vh] md:w-[35vw]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image placeholder with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 via-bg-surface to-accent-champagne/5 transition-transform duration-700 group-hover:scale-105">
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-display text-8xl font-bold text-text-muted/10">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <span className="mb-2 inline-block rounded-full border border-accent-gold/30 bg-bg-primary/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent-gold backdrop-blur-sm">
          {item.category}
        </span>
        <h3 className="font-display text-xl font-bold text-text-primary md:text-2xl">
          {item.title}
        </h3>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 rounded-2xl border border-accent-gold/0 transition-all duration-500 group-hover:border-accent-gold/30" />
    </motion.div>
  );
}
