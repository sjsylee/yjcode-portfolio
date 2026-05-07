"use client";

import Image from "next/image";
import Link from "next/link";
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
  const shouldReduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setPhraseIndex((index) => (index + 1) % rotatingPhrases.length);
    }, 4200);

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
                        duration: shouldReduceMotion ? 0 : 0.86,
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
                작은 출발을 핑계로 제품성, 사용성, 운영 흐름의 기준을
                낮추지 않습니다.
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
  shouldReduceMotion: boolean | null;
}) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.66 }
            : {
                opacity: 0.76,
                x: ["0%", "-1.4%", "0%"],
                y: ["0%", "-0.8%", "0%"],
                scale: [1.02, 1.06, 1.02],
              }
        }
        transition={{
          opacity: { duration: shouldReduceMotion ? 0 : 1.2 },
          x: {
            duration: shouldReduceMotion ? 0 : 20,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: shouldReduceMotion ? 0 : 22,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: shouldReduceMotion ? 0 : 20,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute inset-y-0 right-[-22vw] w-[126vw] md:right-[-12vw] md:w-[96vw] lg:right-[-6vw] lg:w-[82vw]"
      >
        <Image
          src="/assets/yjcode-cinematic-studio-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_50%]"
        />
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.16 }
            : {
                opacity: 0.16,
                x: [0, 18, 0],
                y: [0, -14, 0],
                rotate: [-3, -2, -3],
              }
        }
        transition={{
          opacity: { duration: shouldReduceMotion ? 0 : 1.1, delay: 0.4 },
          x: {
            duration: shouldReduceMotion ? 0 : 16,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: shouldReduceMotion ? 0 : 14,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: shouldReduceMotion ? 0 : 16,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute right-[-10rem] top-[18%] hidden w-[48rem] mix-blend-screen blur-[0.2px] md:block"
      >
        <Image
          src="/assets/yjcode-hero-dashboard-cutout.png"
          width={1635}
          height={962}
          alt=""
          priority
          sizes="48rem"
          className="h-auto w-full object-contain"
        />
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.12 }
            : {
                opacity: 0.12,
                x: [0, -12, 0],
                y: [0, 18, 0],
                rotate: [5, 6.5, 5],
              }
        }
        transition={{
          opacity: { duration: shouldReduceMotion ? 0 : 1.1, delay: 0.55 },
          x: {
            duration: shouldReduceMotion ? 0 : 18,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: shouldReduceMotion ? 0 : 15,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: shouldReduceMotion ? 0 : 18,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute right-[3vw] bottom-[10%] hidden w-[34rem] mix-blend-screen md:block"
      >
        <Image
          src="/assets/yjcode-hero-build-cutout.png"
          width={1536}
          height={1024}
          alt=""
          priority
          sizes="34rem"
          className="h-auto w-full object-contain"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#020202_0%,rgba(2,2,2,0.92)_26%,rgba(2,2,2,0.58)_60%,rgba(2,2,2,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,2,2,0.12)_0%,rgba(2,2,2,0.05)_48%,#020202_100%)]" />
      <div className="studio-noise absolute inset-0 opacity-70" />
      <div className="absolute left-[56vw] top-0 h-full w-px rotate-[9deg] bg-[#d8e6ff]/16" />
      <div className="absolute bottom-[18%] left-0 h-px w-full bg-[#f5f2ea]/10" />
    </div>
  );
}
