import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialRows, MarketingPageShell } from "@/components/sections/marketing-page-shell";
import { getPosts } from "@/domain/site/content-repository";
import { createPageMetadata } from "@/domain/site/seo";

export const metadata: Metadata = createPageMetadata({
  title: "기록",
  description:
    "제품 아키텍처, SaaS 개발, UI/UX, 구현 판단을 다루는 YJ CODE 기술 기록.",
  path: "/blog",
  keywords: ["YJ CODE 블로그", "Next.js SEO", "SaaS 개발", "UI UX", "기술 기록"],
});

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <MarketingPageShell
      eyebrow="Blog / Product notes"
      title={
        <>
          <span className="block">만든 뒤에 남는</span>
          <span className="block">판단을 기록합니다.</span>
        </>
      }
      description="화면, 구조, 오류, 출시 과정에서 얻은 판단을 남깁니다. 결과보다 왜 그렇게 만들었는지가 다음 제품의 기준이 됩니다."
    >
      <EditorialRows>
        {posts.map((post, index) => (
          <Link
            key={post.title}
            href={`/blog/${post.slug}`}
            className="grid gap-8 border-t border-[#f5f2ea]/12 py-10 first:border-t-0 md:grid-cols-[5rem_minmax(0,0.42fr)_minmax(0,1fr)] lg:py-14"
          >
            <span className="text-xs font-semibold text-[#f5f2ea]/28">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#d8e6ff]/70 uppercase">
              {post.channel} / {post.category}
            </p>
            <div className="min-w-0">
              <h2 className="kr-heading max-w-3xl text-4xl leading-tight font-semibold transition hover:text-[#d8e6ff] md:text-5xl">
                {post.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#f5f2ea]/58">
                {post.summary}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#f5f2ea]/68 transition hover:text-[#d8e6ff]">
                글 읽기
                <ArrowUpRight size={16} aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </EditorialRows>
    </MarketingPageShell>
  );
}
