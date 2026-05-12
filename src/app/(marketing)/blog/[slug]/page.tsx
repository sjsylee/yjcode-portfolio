import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingPageIntro } from "@/components/sections/marketing-page-intro";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import {
  getPostBySlug,
  getPosts,
} from "@/domain/site/content-repository";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/domain/site/seo";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: [...post.keywords],
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "YJ CODE",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "YJ CODE",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    inLanguage: "ko-KR",
  };

  return (
    <article className="relative isolate overflow-hidden bg-[#020202] text-[#f5f2ea]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#020202]" />
      </div>

      <MarketingPageIntro
        eyebrow={`${post.category} / ${post.publishedAt}`}
        title={post.title}
        description={post.summary}
      />

      <ScrollReveal className="mx-auto grid w-full max-w-[92rem] gap-12 px-5 pb-28 md:px-7 lg:grid-cols-[0.28fr_0.72fr] lg:pb-36">
        <aside className="border-t border-[#f5f2ea]/12 pt-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#d8e6ff]/70 uppercase">
            Keywords
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3 lg:block lg:space-y-3">
            {post.keywords.map((keyword) => (
              <span
                key={keyword}
                className="block text-sm leading-6 text-[#f5f2ea]/46"
              >
                {keyword}
              </span>
            ))}
          </div>
        </aside>

        <div className="border-t border-[#f5f2ea]/12 pt-8">
          {post.body.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-8 max-w-3xl text-lg leading-9 text-[#f5f2ea]/72"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollReveal>
    </article>
  );
}
