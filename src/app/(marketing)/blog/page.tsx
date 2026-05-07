import type { Metadata } from "next";
import { EditorialRows, MarketingPageShell } from "@/components/sections/marketing-page-shell";
import { writingTopics } from "@/domain/site/content";

export const metadata: Metadata = {
  title: "기록",
  description:
    "제품 아키텍처, SaaS 개발, SEO 시스템, 모션, 구현 판단을 다루는 YJ CODE 기술 기록.",
};

export default function BlogPage() {
  return (
    <MarketingPageShell
      eyebrow="Blog / Searchable thinking"
      title="판단을 검색 가능한 증거로 남깁니다."
      description="블로그는 검색 유입만을 위한 공간이 아닙니다. 구현 기록, 설계 판단, 트러블슈팅 과정을 쌓아 기술 신뢰와 서비스 발견을 함께 만듭니다."
    >
      <EditorialRows>
        {writingTopics.map((post, index) => (
          <article
            key={post.title}
            className="grid gap-8 border-t border-[#f5f2ea]/12 py-10 first:border-t-0 md:grid-cols-[5rem_0.42fr_1fr] lg:py-14"
          >
            <span className="text-xs font-semibold text-[#f5f2ea]/28">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#d8e6ff]/70 uppercase">
              {post.category}
            </p>
            <div>
              <h2 className="max-w-3xl text-4xl leading-tight font-semibold md:text-5xl">
                {post.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#f5f2ea]/58">
                {post.summary}
              </p>
            </div>
          </article>
        ))}
      </EditorialRows>
    </MarketingPageShell>
  );
}
