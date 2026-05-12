import { z } from "zod";

export const serviceSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  eyebrow: z.string().min(1),
  summary: z.string().min(1),
  audience: z.string().min(1),
  deliverables: z.array(z.string().min(1)).min(1),
});

export const workSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  type: z.string().min(1),
  summary: z.string().min(1),
  tags: z.array(z.string().min(1)).default([]),
  visibility: z.enum(["public", "private"]).default("public"),
});

export const postSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  category: z.string().min(1),
  channel: z.enum(["blog", "technical"]),
  intent: z.enum(["seo", "engineering-trust", "case-note"]).default("seo"),
  status: z.enum(["draft", "published", "archived"]),
  indexable: z.boolean().default(true),
  publishedAt: z.string().min(1),
  updatedAt: z.string().min(1).optional(),
  keywords: z.array(z.string().min(1)).default([]),
  body: z.array(z.string().min(1)).default([]),
});

const proofBlockSchema = z.object({
  label: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

const trustChannelSchema = z.object({
  href: z.string().min(1),
  label: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

export const siteCopySchema = z.object({
  businessProofs: z.array(proofBlockSchema).default([]),
  aiProductionSignals: z.array(
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
    }),
  ).default([]),
  homeTrustChannels: z.array(trustChannelSchema).default([]),
  contactNotes: z.array(z.string().min(1)).default([]),
});

export const siteContentSchema = z.object({
  services: z.array(serviceSchema).default([]),
  works: z.array(workSchema).default([]),
  posts: z.array(postSchema).default([]),
  siteCopy: siteCopySchema,
});

export type ServiceContent = z.infer<typeof serviceSchema>;
export type WorkContent = z.infer<typeof workSchema>;
export type PostContent = z.infer<typeof postSchema>;
export type SiteCopyContent = z.infer<typeof siteCopySchema>;
export type SiteContent = z.infer<typeof siteContentSchema>;
