"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  triggerStart?: string;
  scrub?: boolean;
}

export function TextReveal({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.02,
  triggerStart = "top 85%",
  scrub = false,
}: TextRevealProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const split = new SplitType(element, { types: "chars,words" });

    if (!split.chars) return;

    gsap.set(split.chars, { opacity: 0, y: 20 });

    const animation = gsap.to(split.chars, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        end: "bottom 20%",
        scrub: scrub ? 1 : false,
        toggleActions: scrub ? undefined : "play none none none",
      },
    });

    return () => {
      animation.kill();
      split.revert();
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === element)
        .forEach((st) => st.kill());
    };
  }, [text, delay, stagger, triggerStart, scrub]);

  return (
    <Tag ref={elementRef as React.Ref<never>} className={className}>
      {text}
    </Tag>
  );
}
