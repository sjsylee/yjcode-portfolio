import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { EditorialRows, MarketingPageShell } from "@/components/sections/marketing-page-shell";
import { featuredWorks } from "@/domain/site/content";

export const metadata: Metadata = {
  title: "작업",
  description:
    "문제, 기술 선택, UX 판단, 결과를 함께 설명하는 YJ CODE의 케이스 스터디형 작업.",
};

export default function WorksPage() {
  return (
    <MarketingPageShell
      eyebrow="Works / Case-study signal"
      title="결과물보다 판단이 먼저 보이는 작업."
      description="작업은 갤러리로 끝나지 않습니다. 문제, 제약, 기술 선택, UX 판단이 함께 검토되는 케이스 스터디 시스템으로 확장합니다."
    >
      <EditorialRows>
        {featuredWorks.map((work, index) => (
          <article
            key={work.slug}
            className="group grid gap-8 border-t border-[#f5f2ea]/12 py-10 first:border-t-0 md:grid-cols-[5rem_0.5fr_1fr_auto] md:items-start lg:py-14"
          >
            <span className="text-xs font-semibold text-[#f5f2ea]/28">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-sm font-medium text-[#d8e6ff]/72">
              {work.type}
            </p>
            <div>
              <h2 className="text-4xl leading-tight font-semibold transition group-hover:text-[#d8e6ff] md:text-5xl">
                {work.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#f5f2ea]/58">
                {work.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#f5f2ea]/34 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ArrowUpRight
              className="text-[#f5f2ea]/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d8e6ff]"
              size={26}
              aria-hidden
            />
          </article>
        ))}
      </EditorialRows>
    </MarketingPageShell>
  );
}
