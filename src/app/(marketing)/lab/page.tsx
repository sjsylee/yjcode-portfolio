import type { Metadata } from "next";
import { EditorialRows, MarketingPageShell } from "@/components/sections/marketing-page-shell";
import { labExperiments } from "@/domain/site/content";

export const metadata: Metadata = {
  title: "실험",
  description:
    "제품 모션, SEO 맵, UI/UX 소프트웨어 실험을 다루는 YJ CODE 인터랙션 랩.",
};

export default function LabPage() {
  return (
    <MarketingPageShell
      eyebrow="Lab / Technical taste"
      title="제약을 통과하는 실험만 남깁니다."
      description="Lab은 인터랙션, 정보 구조, SEO 경로, 제품 UI의 작은 실험을 검토 가능한 형태로 축적하는 기술 신뢰 채널입니다."
    >
      <EditorialRows>
        {labExperiments.map((experiment, index) => (
          <article
            key={experiment.title}
            className="grid gap-8 border-t border-[#f5f2ea]/12 py-10 first:border-t-0 md:grid-cols-[5rem_0.42fr_1fr] lg:py-14"
          >
            <span className="text-xs font-semibold text-[#f5f2ea]/28">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#d8e6ff]/70 uppercase">
              {experiment.status}
            </p>
            <div>
              <h2 className="max-w-3xl text-4xl leading-tight font-semibold md:text-5xl">
                {experiment.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#f5f2ea]/58">
                {experiment.description}
              </p>
            </div>
          </article>
        ))}
      </EditorialRows>
    </MarketingPageShell>
  );
}
