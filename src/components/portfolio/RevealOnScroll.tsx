import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

export function RevealOnScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.18,
    margin: "0px 0px -10% 0px",
  });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 36, filter: "blur(2px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: 36, filter: "blur(2px)" }
      }
      transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
