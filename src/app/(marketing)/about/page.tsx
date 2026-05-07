import type { Metadata } from "next";
import { EditorialRows, MarketingPageShell } from "@/components/sections/marketing-page-shell";
import { operatingPrinciples } from "@/domain/site/content";

export const metadata: Metadata = {
  title: "소개",
  description:
    "YJ CODE는 SaaS 제품, 비즈니스 웹 플랫폼, UI/UX 중심 소프트웨어를 제품 관점으로 구축합니다.",
};

export default function AboutPage() {
  return (
    <MarketingPageShell
      eyebrow="About / Studio position"
      title="구조가 보이고, 감도가 남는 제품을 만듭니다."
      description="YJ CODE는 SaaS 제품, 비즈니스 웹 플랫폼, 브랜드 사이트, 서비스 랜딩을 제품 관점으로 다루는 소프트웨어 스튜디오입니다."
    >
      <EditorialRows>
        <div className="grid gap-10 py-12 lg:grid-cols-[0.68fr_1.32fr] lg:py-16">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#d8e6ff]/70 uppercase">
            Operating principles
          </p>
          <div className="grid gap-0 md:grid-cols-2">
            {operatingPrinciples.map((principle, index) => (
              <div
                key={principle}
                className="grid gap-5 border-t border-[#f5f2ea]/12 py-7 md:grid-cols-[3rem_1fr]"
              >
                <span className="text-xs font-semibold text-[#f5f2ea]/28">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-2xl leading-tight font-semibold text-[#f5f2ea]">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </EditorialRows>
    </MarketingPageShell>
  );
}
