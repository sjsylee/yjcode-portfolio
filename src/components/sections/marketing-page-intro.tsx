"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MarketingPageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function MarketingPageIntro({
  eyebrow,
  title,
  description,
}: MarketingPageIntroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: shouldReduceMotion ? 0 : 0.08,
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      }}
      className="relative mx-auto grid min-h-[72svh] w-full max-w-[92rem] content-end gap-10 px-5 pb-16 pt-32 md:px-7 md:pb-20 md:pt-40 lg:grid-cols-[minmax(0,0.94fr)_minmax(20rem,0.42fr)] lg:items-end"
    >
      <div>
        <motion.p
          variants={reveal}
          transition={{ duration: shouldReduceMotion ? 0 : 0.72 }}
          className="text-[0.72rem] leading-5 font-semibold tracking-[0.18em] text-[#d8e6ff]/72 uppercase"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={reveal}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.92,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="kr-heading mt-7 max-w-6xl text-[clamp(3rem,8.5vw,9.6rem)] leading-[0.98] font-semibold"
        >
          {title}
        </motion.h1>
      </div>

      <motion.div
        variants={reveal}
        transition={{ duration: shouldReduceMotion ? 0 : 0.82 }}
        className="border-t border-[#f5f2ea]/14 pt-6 lg:mb-3"
      >
        <p className="text-sm leading-7 text-[#f5f2ea]/62 md:text-base md:leading-8">
          {description}
        </p>
      </motion.div>
    </motion.section>
  );
}
