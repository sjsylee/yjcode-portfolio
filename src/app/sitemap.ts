import type { MetadataRoute } from "next";
import { getIndexablePosts } from "@/domain/site/content-repository";
import { absoluteUrl } from "@/domain/site/seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.92 },
  { path: "/contact", priority: 0.88 },
  { path: "/works", priority: 0.82 },
  { path: "/blog", priority: 0.78 },
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const posts = await getIndexablePosts();

  return [
    ...routes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.74,
    })),
  ];
}
