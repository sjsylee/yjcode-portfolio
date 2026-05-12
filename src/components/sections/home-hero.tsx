"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const rotatingPhrases = [
  "대충 만들",
  "흐름 없이 만들",
  "감각 없이 만들",
  "검증 없이 만들",
  "수익 없이 만들",
] as const;

const proofSignals = [
  "SaaS product",
  "Business logic",
  "Interface taste",
  "SEO channel",
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setPhraseIndex((index) => (index + 1) % rotatingPhrases.length);
    }, 6200);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[#020202] text-[#f5f2ea]">
      <HeroVisualPlane shouldReduceMotion={shouldReduceMotion} />

      <div className="relative z-10 flex min-h-svh flex-col px-5 pb-6 pt-28 md:px-7 md:pb-7 md:pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            delayChildren: shouldReduceMotion ? 0 : 0.08,
            staggerChildren: shouldReduceMotion ? 0 : 0.12,
          }}
          className="mx-auto flex w-full max-w-[92rem] flex-1 flex-col justify-center md:justify-end"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="mb-5 max-w-md text-[0.72rem] leading-5 font-semibold tracking-[0.18em] text-[#d8e6ff]/74 uppercase"
          >
            Product-grade software studio / Seoul
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hero-wordmark max-w-none whitespace-nowrap text-[clamp(3.45rem,15.7vw,18.4rem)] leading-[0.76] text-[#f5f2ea]"
          >
            YJ CODE.
          </motion.h1>

          <div className="mt-8 grid gap-8 border-t border-[#f5f2ea]/16 pt-7 md:mt-10 md:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.38fr)] md:items-end">
            <motion.div
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.85 }}
            >
              <h2 className="max-w-6xl text-[clamp(2rem,5.3vw,6.2rem)] leading-[1.02] font-semibold text-balance">
                <span className="block">작게 시작해도,</span>
                <span className="relative block min-h-[1.08em] overflow-hidden pt-[0.04em] text-[#d8e6ff]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={rotatingPhrases[phraseIndex]}
                      initial={
                        shouldReduceMotion ? false : { y: "105%", opacity: 0 }
                      }
                      animate={{ y: 0, opacity: 1 }}
                      exit={
                        shouldReduceMotion
                          ? undefined
                          : { y: "-105%", opacity: 0 }
                      }
                      transition={{
                        duration: shouldReduceMotion ? 0 : 1.18,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="absolute inset-x-0 top-0 block whitespace-nowrap"
                    >
                      {rotatingPhrases[phraseIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="block">필요는 없습니다.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#f5f2ea]/66 md:text-lg md:leading-9">
                비즈니스 로직, 사용 흐름, 첫인상, 문의 전환을 제품 경험으로
                구현합니다.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.85 }}
              className="grid gap-7 md:justify-items-end md:text-right"
            >
              <p className="hidden max-w-sm text-sm leading-7 text-[#f5f2ea]/58 md:block">
                작은 출발에도 제품성, 사용성, 운영 기준을 낮추지 않습니다.
              </p>

              <div className="flex flex-wrap gap-4 md:justify-end">
                <Link
                  href="/contact"
                  className="group inline-flex h-11 items-center gap-2 border-b border-[#f5f2ea]/70 text-sm font-semibold text-[#f5f2ea] transition hover:border-[#d8e6ff] hover:text-[#d8e6ff]"
                >
                  프로젝트 문의
                  <ArrowUpRight
                    size={17}
                    aria-hidden
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/works"
                  className="group inline-flex h-11 items-center gap-2 border-b border-[#f5f2ea]/24 text-sm font-semibold text-[#f5f2ea]/62 transition hover:border-[#d8e6ff] hover:text-[#d8e6ff]"
                >
                  작업 보기
                  <ArrowUpRight
                    size={17}
                    aria-hidden
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            delayChildren: shouldReduceMotion ? 0 : 0.95,
            staggerChildren: shouldReduceMotion ? 0 : 0.08,
          }}
          className="mx-auto mt-10 grid w-full max-w-[92rem] gap-4 border-t border-[#f5f2ea]/12 pt-5 md:grid-cols-[auto_1fr_auto] md:items-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-x-5 gap-y-2 text-[0.68rem] font-semibold tracking-[0.16em] text-[#f5f2ea]/42 uppercase"
          >
            {proofSignals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            aria-hidden
            className="hidden h-px bg-[#f5f2ea]/10 md:block"
          />

          <motion.a
            variants={fadeUp}
            href="#service-logic"
            className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-[#f5f2ea]/48 uppercase transition hover:text-[#d8e6ff]"
          >
            Scroll
            <ArrowDown size={14} aria-hidden />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisualPlane({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src="/assets/hero-motion-v5-2x/base-plate-sunken.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className={[
          "hero-visual-fit object-cover opacity-[0.88]",
          "saturate-[0.86] contrast-[0.96] brightness-[0.82]",
        ].join(" ")}
      />
      <HeroImageLayer
        src="/assets/hero-motion-v5-2x/rear-browser.png"
        className={shouldReduceMotion ? "opacity-[0.78]" : "hero-layer-rear opacity-[0.78]"}
      />
      <HeroImageLayer
        src="/assets/hero-motion-v5-2x/left-glass.png"
        className={shouldReduceMotion ? "opacity-[0.36]" : "hero-layer-left opacity-[0.36]"}
      />
      <HeroImageLayer
        src="/assets/hero-motion-v5-2x/phone.png"
        className={shouldReduceMotion ? "opacity-[0.94]" : "hero-layer-phone opacity-[0.94]"}
      />
      <HeroImageLayer
        src="/assets/hero-motion-v5-2x/foreground-console.png"
        className={shouldReduceMotion ? "opacity-[0.84]" : "hero-layer-console opacity-[0.84]"}
      />
      <HeroImageLayer
        src="/assets/hero-motion-v5-2x/signal-lines.png"
        className={
          shouldReduceMotion
            ? "opacity-[0.3] mix-blend-screen"
            : "hero-layer-signals opacity-[0.3] mix-blend-screen"
        }
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#020202_0%,rgba(2,2,2,0.88)_26%,rgba(2,2,2,0.22)_56%,rgba(2,2,2,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,2,2,0.62)_0%,rgba(2,2,2,0.08)_42%,rgba(2,2,2,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_34%,rgba(216,230,255,0.16),transparent_30%)]" />
      <div className="absolute inset-0 studio-noise opacity-40" />
      {!shouldReduceMotion ? (
        <>
          <div className="hero-light-sweep absolute inset-0 opacity-60 mix-blend-screen" />
          <div className="hero-depth-rift absolute inset-0 opacity-45 mix-blend-screen" />
        </>
      ) : null}
    </div>
  );
}

function HeroImageLayer({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="100vw"
      className={["hero-visual-fit object-cover", className].join(" ")}
    />
  );
}
