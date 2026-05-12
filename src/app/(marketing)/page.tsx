import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { getSiteContent } from "@/domain/site/content-repository";
import { createPageMetadata } from "@/domain/site/seo";

export const metadata: Metadata = createPageMetadata({
  title: {
    absolute: "YJ CODE.",
  },
  description:
    "YJ CODE는 SaaS 제품, 비즈니스 웹 플랫폼, 랜딩페이지를 제품 기준의 UI/UX와 비즈니스 로직으로 설계하고 구현합니다.",
  path: "/",
  keywords: [
    "YJ CODE",
    "SaaS 개발",
    "비즈니스 웹 플랫폼 개발",
    "랜딩페이지 제작",
    "Next.js 웹사이트 제작",
  ],
});

export default async function HomePage() {
  const { services, works, siteCopy } = await getSiteContent();
  const featuredWorks = works.filter((work) => work.visibility === "public");

  return (
    <div className="relative overflow-hidden bg-[#020202] text-[#f5f2ea]">
      <HomeHero />

      <section id="service-logic" className="relative">
        <div className="mx-auto grid w-full max-w-[92rem] gap-10 px-5 py-24 md:px-7 lg:grid-cols-[0.72fr_1.28fr] lg:py-32">
          <ScrollReveal>
            <p className="text-xs font-semibold text-[#d8e6ff]/72 uppercase">
              Service structure
            </p>
            <h2 className="kr-heading mt-5 max-w-xl text-4xl leading-tight font-semibold md:text-6xl">
              <span className="block">기능보다 먼저,</span>
              <span className="block">흐름을 설계합니다.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#f5f2ea]/54">
              문의, 예약, 결제, 운영, 콘텐츠, 내부 도구가 한 방향으로
              움직이도록 제품 구조를 먼저 잡습니다.
            </p>
          </ScrollReveal>

          <div className="grid">
            {services.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 0.06}>
                <Link
                  href="/services"
                  className="group grid gap-5 border-t border-[#f5f2ea]/12 py-8 transition hover:border-[#d8e6ff]/58 md:grid-cols-[5rem_minmax(0,13rem)_minmax(0,1fr)]"
                >
                  <span className="text-[0.72rem] font-semibold text-[#f5f2ea]/26 transition group-hover:text-[#d8e6ff]/72">
                    0{index + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#f5f2ea]/35 uppercase transition group-hover:text-[#d8e6ff]/72">
                      {service.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold transition group-hover:text-[#d8e6ff]">
                      {service.title}
                    </h3>
                  </div>
                  <div className="min-w-0">
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
        <div className="mx-auto w-full max-w-[92rem] px-5 py-24 md:px-7 lg:py-36">
          <ScrollReveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold text-[#d8e6ff]/72 uppercase">
                Business sense
              </p>
              <h2 className="kr-heading mt-5 max-w-4xl text-[clamp(2.4rem,6.4vw,7.6rem)] leading-[1] font-semibold">
                <span className="block">좋은 화면은</span>
                <span className="block">행동을 바꿉니다.</span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#f5f2ea]/58">
              좋은 화면은 감각으로 끝나지 않습니다. 사용자가 이해하고,
              믿고, 문의하고, 다시 돌아오는 비즈니스 흐름까지 함께 설계해야
              실제 서비스가 됩니다.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {siteCopy.businessProofs.map((proof, index) => (
              <ScrollReveal key={proof.label} delay={index * 0.08}>
                <article className="min-h-full border-t border-[#f5f2ea]/12 pt-7">
                  <p className="text-xs font-semibold text-[#d8e6ff]/62 uppercase">
                    {proof.label}
                  </p>
                  <h3 className="kr-heading mt-10 text-2xl leading-tight font-semibold">
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
              Agentic production
            </p>
            <h2 className="kr-heading mt-5 max-w-2xl text-4xl leading-tight font-semibold md:text-6xl">
              <span className="block">더 빠르게 검토하고,</span>
              <span className="block">더 정확하게 결정합니다.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#f5f2ea]/58">
              최신 에이전트형 제작 흐름을 활용해 탐색, 구현, 검토의 반복을
              빠르게 가져갑니다. 우선순위, 비즈니스 로직, 사용자 흐름, 출시
              기준은 개발자가 끝까지 책임지고 선명하게 결정합니다.
            </p>
          </ScrollReveal>

          <div className="grid gap-8">
            <div className="grid gap-4">
              {siteCopy.aiProductionSignals.map((signal, index) => (
                <ScrollReveal key={signal.title} delay={index * 0.07}>
                  <article className="grid gap-4 border-t border-[#f5f2ea]/12 py-7 md:grid-cols-[2.5rem_minmax(0,1fr)]">
                    <span className="flex h-10 w-10 items-center justify-center text-[#d8e6ff]">
                      <Check size={17} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="kr-heading text-xl font-semibold">
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
        </div>
      </section>

      <section className="relative bg-[#050505]">
        <div className="mx-auto grid w-full max-w-[92rem] gap-12 px-5 py-24 md:px-7 lg:grid-cols-[0.76fr_1.24fr] lg:py-32">
          <ScrollReveal>
            <p className="text-xs font-semibold text-[#d8e6ff]/72 uppercase">
              Work evidence
            </p>
            <h2 className="kr-heading mt-5 text-4xl leading-tight font-semibold md:text-6xl">
              <span className="block">결과보다,</span>
              <span className="block">판단이 검토되는 작업.</span>
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
                <article className="grid gap-5 border-t border-[#f5f2ea]/12 py-7 md:grid-cols-[10rem_minmax(0,1fr)]">
                  <p className="text-sm text-[#f5f2ea]/38">{work.type}</p>
                  <div className="min-w-0">
                    <h3 className="kr-heading text-2xl font-semibold">
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
            {siteCopy.homeTrustChannels.map((channel) => (
              <Link
                key={channel.href}
                href={channel.href}
                className="group min-h-64 border-t border-[#f5f2ea]/12 pt-6 transition hover:border-[#d8e6ff]/58"
              >
                <p className="text-xs font-semibold text-[#d8e6ff]/72 uppercase">
                  {channel.label}
                </p>
                <h2 className="kr-heading mt-8 text-4xl font-semibold transition group-hover:text-[#d8e6ff] md:text-5xl">
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
              Bring the context.
            </p>
            <h2 className="hero-wordmark mt-8 text-[clamp(4rem,13vw,14rem)] leading-[0.78] font-light">
              YJ CODE.
            </h2>
            <h3 className="kr-heading mt-8 max-w-4xl text-4xl leading-tight font-semibold md:text-6xl">
              <span className="block">아직 선명하지 않아도,</span>
              <span className="block">완성도는 흐려지지 않게.</span>
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#f5f2ea]/58">
              낯선 기술은 쉬운 결정으로 풀고, 필요한 기능과 화면, 운영 흐름은
              하나의 제품 기준으로 정리합니다.
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
