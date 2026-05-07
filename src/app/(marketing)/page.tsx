import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import {
  aiProductionSignals,
  businessProofs,
  featuredWorks,
  homeTrustChannels,
  services,
} from "@/domain/site/content";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#020202] text-[#f5f2ea]">
      <HomeHero />

      <section id="service-logic" className="relative">
        <div className="mx-auto grid w-full max-w-[92rem] gap-10 px-5 py-24 md:px-7 lg:grid-cols-[0.72fr_1.28fr] lg:py-32">
          <ScrollReveal>
            <p className="text-xs font-semibold text-[#d8e6ff]/72 uppercase">
              Service structure
            </p>
            <h2 className="mt-5 max-w-xl text-4xl leading-tight font-semibold md:text-6xl">
              만들 수 있음보다, 굴러갈 구조가 먼저입니다.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#f5f2ea]/54">
              문의, 예약, 결제, 운영, 콘텐츠, 내부 도구까지 실제 비즈니스가
              움직이는 순서로 웹 시스템을 설계합니다.
            </p>
          </ScrollReveal>

          <div className="grid">
            {services.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 0.06}>
                <Link
                  href="/services"
                  className="group grid gap-5 border-t border-[#f5f2ea]/12 py-8 transition hover:border-[#d8e6ff]/58 md:grid-cols-[7rem_15rem_1fr]"
                >
                  <span className="text-[0.72rem] font-semibold text-[#f5f2ea]/26 transition group-hover:text-[#d8e6ff]/72">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#f5f2ea]/35 uppercase transition group-hover:text-[#d8e6ff]/72">
                      {service.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold transition group-hover:text-[#d8e6ff]">
                      {service.title}
                    </h3>
                  </div>
                  <div>
                    <p className="max-w-2xl text-sm leading-7 text-[#f5f2ea]/58">
                      {service.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f5f2ea]/72 transition group-hover:text-[#d8e6ff]">
                      서비스 보기
                      <ArrowUpRight
                        size={16}
                        aria-hidden
                        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505]">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-[#f5f2ea]/12"
        />
        <div
          aria-hidden
          className="absolute right-[12vw] top-0 h-full w-px rotate-[13deg] bg-[#d8e6ff]/12"
        />
        <div className="mx-auto w-full max-w-[92rem] px-5 py-24 md:px-7 lg:py-36">
          <ScrollReveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold text-[#d8e6ff]/72 uppercase">
                Business sense
              </p>
              <h2 className="mt-5 max-w-4xl text-[clamp(2.4rem,6.4vw,7.6rem)] leading-[0.96] font-semibold">
                감도는 첫 인상이고, 로직은 수익의 구조입니다.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#f5f2ea]/58">
              좋은 화면은 감각으로 끝나지 않습니다. 사용자가 이해하고,
              믿고, 문의하고, 다시 돌아오는 비즈니스 흐름까지 함께 설계해야
              실제 서비스가 됩니다.
            </p>
          </ScrollReveal>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {businessProofs.map((proof, index) => (
              <ScrollReveal key={proof.label} delay={index * 0.08}>
                <article className="min-h-full border-t border-[#f5f2ea]/12 pt-7">
                  <p className="text-xs font-semibold text-[#d8e6ff]/62 uppercase">
                    {proof.label}
                  </p>
                  <h3 className="mt-10 text-2xl leading-tight font-semibold">
                    {proof.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#f5f2ea]/56">
                    {proof.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto grid w-full max-w-[92rem] gap-12 px-5 py-24 md:px-7 lg:grid-cols-[0.82fr_1.18fr] lg:py-36">
          <ScrollReveal>
            <p className="text-xs font-semibold text-[#d8e6ff]/72 uppercase">
              Production system
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl leading-tight font-semibold md:text-6xl">
              AI를 말하기보다, 더 빠르게 검증되는 제작 방식을 만듭니다.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#f5f2ea]/58">
              AI 도구는 속도를 높입니다. 하지만 요구사항, 비즈니스 로직,
              UI 흐름, 품질 기준을 놓치지 않는 제작 컨텍스트가 있어야
              결과물이 서비스가 됩니다.
            </p>
          </ScrollReveal>

          <div className="grid gap-4">
            {aiProductionSignals.map((signal, index) => (
              <ScrollReveal key={signal.title} delay={index * 0.07}>
                <article className="grid gap-4 border-t border-[#f5f2ea]/12 py-7 md:grid-cols-[2.5rem_1fr]">
                  <span className="flex h-10 w-10 items-center justify-center text-[#d8e6ff]">
                    <Check size={17} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {signal.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#f5f2ea]/56">
                      {signal.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#050505]">
        <div className="mx-auto grid w-full max-w-[92rem] gap-12 px-5 py-24 md:px-7 lg:grid-cols-[0.76fr_1.24fr] lg:py-32">
          <ScrollReveal>
            <p className="text-xs font-semibold text-[#d8e6ff]/72 uppercase">
              Work evidence
            </p>
            <h2 className="mt-5 text-4xl leading-tight font-semibold md:text-6xl">
              결과보다, 판단이 검토되는 작업.
            </h2>
            <Link
              href="/works"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f5f2ea]/72 transition hover:text-[#d8e6ff]"
            >
              작업 보기
              <ArrowUpRight
                size={16}
                aria-hidden
                className="transition hover:-translate-y-0.5 hover:translate-x-0.5"
              />
            </Link>
          </ScrollReveal>

          <div className="grid">
            {featuredWorks.map((work, index) => (
              <ScrollReveal key={work.slug} delay={index * 0.06}>
                <article className="grid gap-5 border-t border-[#f5f2ea]/12 py-7 md:grid-cols-[10rem_1fr]">
                  <p className="text-sm text-[#f5f2ea]/38">{work.type}</p>
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {work.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#f5f2ea]/56">
                      {work.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-[#f5f2ea]/36 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto w-full max-w-[92rem] px-5 py-24 md:px-7 lg:py-32">
          <ScrollReveal className="grid gap-10 md:grid-cols-2">
            {homeTrustChannels.map((channel) => (
              <Link
                key={channel.href}
                href={channel.href}
                className="group min-h-64 border-t border-[#f5f2ea]/12 pt-6 transition hover:border-[#d8e6ff]/58"
              >
                <p className="text-xs font-semibold text-[#d8e6ff]/72 uppercase">
                  {channel.label}
                </p>
                <h2 className="mt-8 text-4xl font-semibold transition group-hover:text-[#d8e6ff] md:text-5xl">
                  {channel.title}
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#f5f2ea]/56">
                  {channel.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f5f2ea]/72 transition group-hover:text-[#d8e6ff]">
                  확인하기
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="px-5 py-24 md:px-7 lg:py-36">
        <ScrollReveal className="mx-auto grid w-full max-w-[92rem] gap-10 border-t border-[#f5f2ea]/16 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase text-[#d8e6ff]/72">
              Start small. Build real.
            </p>
            <h2 className="hero-wordmark mt-8 text-[clamp(4rem,13vw,14rem)] leading-[0.78] font-light">
              YJ CODE.
            </h2>
            <h3 className="mt-8 max-w-4xl text-4xl leading-tight font-semibold md:text-6xl">
              작은 팀도 제품처럼 시작할 수 있습니다.
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#f5f2ea]/58">
              필요한 기능부터 만들고, 운영과 수익으로 이어질 구조를 함께
              정리합니다. 첫 문의에서 이미 제품의 기준을 세웁니다.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-start gap-2 text-sm font-semibold text-[#f5f2ea] transition hover:text-[#d8e6ff]"
          >
            문의 시작
            <ArrowUpRight
              size={16}
              aria-hidden
              className="transition hover:-translate-y-0.5 hover:translate-x-0.5"
            />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
