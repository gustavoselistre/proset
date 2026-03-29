"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500
          ${scrolled ? "glass py-3" : "bg-transparent py-5"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#inicio" className="group relative z-10">
            <span className="font-display text-2xl font-bold tracking-wider text-text-primary">
              PRO{" "}
              <span className="text-gradient-gold">SET</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium uppercase tracking-wider text-text-secondary
                    transition-colors duration-300 hover:text-text-primary"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 bg-accent-gold
                      transition-all duration-300 group-hover:w-full"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contato"
            className="hidden rounded-full border border-accent-gold/50 px-6 py-2.5
              text-xs font-semibold uppercase tracking-wider text-accent-gold
              transition-all duration-300 hover:bg-accent-gold hover:text-bg-primary md:inline-flex"
          >
            Fale Conosco
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <motion.span
              className="block h-px w-6 bg-text-primary"
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-px w-6 bg-text-primary"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-px w-6 bg-text-primary"
              animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg-primary/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl font-light text-text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full border border-accent-gold px-8 py-3 text-sm
                font-semibold uppercase tracking-wider text-accent-gold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              Fale Conosco
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
