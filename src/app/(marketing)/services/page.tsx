import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { EditorialRows, MarketingPageShell } from "@/components/sections/marketing-page-shell";
import { services } from "@/domain/site/content";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "YJ CODE의 SaaS 개발, 비즈니스 웹 플랫폼, UI/UX 중심 소프트웨어, SEO 기반 웹사이트 제작 서비스.",
};

export default function ServicesPage() {
  return (
    <MarketingPageShell
      eyebrow="Services / Business systems"
      title="검색되고, 작동하고, 기억되는 개발 서비스."
      description="SaaS 개발, 비즈니스 웹 플랫폼, UI/UX 중심 소프트웨어, 웹사이트 제작 수요를 명확한 작업 범위와 제품 품질로 연결합니다."
    >
      <EditorialRows>
        {services.map((service, index) => (
          <article
            key={service.slug}
            className="grid gap-8 border-t border-[#f5f2ea]/12 py-10 first:border-t-0 lg:grid-cols-[5rem_0.52fr_1fr] lg:py-14"
          >
            <span className="text-xs font-semibold text-[#f5f2ea]/28">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#d8e6ff]/70 uppercase">
                {service.eyebrow}
              </p>
              <h2 className="mt-5 max-w-md text-4xl leading-tight font-semibold md:text-5xl">
                {service.title}
              </h2>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 border-b border-[#f5f2ea]/42 pb-2 text-sm font-semibold text-[#f5f2ea] transition hover:border-[#d8e6ff] hover:text-[#d8e6ff]"
              >
                이 서비스 문의
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
            <div>
              <p className="max-w-2xl text-base leading-8 text-[#f5f2ea]/64">
                {service.summary}
              </p>
              <p className="mt-6 max-w-2xl border-l border-[#d8e6ff]/24 pl-5 text-sm leading-7 text-[#f5f2ea]/56">
                {service.audience}
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {service.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 border-t border-[#f5f2ea]/10 pt-4 text-sm leading-6 text-[#f5f2ea]/58"
                  >
                    <Check
                      className="mt-1 shrink-0 text-[#d8e6ff]/82"
                      size={15}
                      aria-hidden
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </EditorialRows>
    </MarketingPageShell>
  );
}
