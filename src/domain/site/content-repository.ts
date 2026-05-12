import "server-only";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cache } from "react";
import { fallbackSiteContent } from "./content-fallback";
import {
  siteContentSchema,
  type PostContent,
  type SiteContent,
  type WorkContent,
} from "./content-schema";

const generatedContentPath = join(
  process.cwd(),
  "content",
  "generated",
  "site-content.json",
);

const isStrictContentMode = process.env.YJ_CONTENT_STRICT === "true";

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  try {
    const source = await readFile(generatedContentPath, "utf8");
    return siteContentSchema.parse(JSON.parse(source));
  } catch (error) {
    if (isStrictContentMode) {
      throw new Error(
        "Validated CMS content is required for production builds. Run `npm run content:sync` with Notion environment variables before building.",
        {
          cause: error,
        },
      );
    }

    return fallbackSiteContent;
  }
});

export async function getServices() {
  const content = await getSiteContent();
  return content.services;
}

export async function getWorks(): Promise<WorkContent[]> {
  const content = await getSiteContent();
  return content.works.filter((work) => work.visibility === "public");
}

export async function getPosts(): Promise<PostContent[]> {
  const content = await getSiteContent();
  return content.posts
    .filter((post) => post.status === "published")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getIndexablePosts(): Promise<PostContent[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.indexable);
}

export async function getPostBySlug(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
