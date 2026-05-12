import type { Metadata } from "next";

export const siteUrl = "https://yjcode.org";

export const siteConfig = {
  name: "YJ CODE.",
  url: siteUrl,
  locale: "ko_KR",
  description:
    "YJ CODE는 SaaS 제품, 비즈니스 웹 플랫폼, 브랜드 웹사이트를 제품 관점으로 설계하고 구현하는 소프트웨어 스튜디오입니다.",
  ogImage: "/assets/yjcode-cinematic-studio-hero.png",
} as const;

type PageMetadataInput = {
  title: string | { absolute: string };
  description: string;
  path: string;
  type?: "website" | "article";
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  keywords,
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const displayTitle = typeof title === "string" ? title : title.absolute;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: displayTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1792,
          height: 1024,
          alt: "YJ CODE cinematic product studio visual",
        },
      ],
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
