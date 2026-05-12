import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const notionVersion = "2022-06-28";
const outputPath = join(process.cwd(), "content", "generated", "site-content.json");

const requiredEnv = [
  "NOTION_TOKEN",
  "NOTION_POSTS_DATABASE_ID",
  "NOTION_WORKS_DATABASE_ID",
  "NOTION_SERVICES_DATABASE_ID",
  "NOTION_SITE_COPY_DATABASE_ID",
];

const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  throw new Error(`Missing Notion CMS environment variables: ${missingEnv.join(", ")}`);
}

async function notionRequest(path, init = {}) {
  const response = await fetch(`https://api.notion.com/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      "Notion-Version": notionVersion,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Notion request failed: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

async function queryDatabase(databaseId) {
  const results = [];
  let cursor;

  do {
    const payload = await notionRequest(`/databases/${databaseId}/query`, {
      method: "POST",
      body: JSON.stringify({
        start_cursor: cursor,
        page_size: 100,
      }),
    });

    results.push(...payload.results);
    cursor = payload.has_more ? payload.next_cursor : undefined;
  } while (cursor);

  return results;
}

async function pageBlocks(pageId) {
  const blocks = [];
  let cursor;

  do {
    const payload = await notionRequest(`/blocks/${pageId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ""}`);
    blocks.push(...payload.results);
    cursor = payload.has_more ? payload.next_cursor : undefined;
  } while (cursor);

  return blocks;
}

function richText(value) {
  return value?.map((item) => item.plain_text).join("").trim() ?? "";
}

function title(properties, key = "Title") {
  return richText(properties[key]?.title ?? []);
}

function text(properties, key) {
  return richText(properties[key]?.rich_text ?? []);
}

function select(properties, key) {
  return properties[key]?.select?.name ?? "";
}

function multiSelect(properties, key) {
  return properties[key]?.multi_select?.map((item) => item.name) ?? [];
}

function checkbox(properties, key, fallback = false) {
  return properties[key]?.checkbox ?? fallback;
}

function date(properties, key) {
  return properties[key]?.date?.start ?? "";
}

function number(properties, key, fallback = 0) {
  return properties[key]?.number ?? fallback;
}

function csv(properties, key) {
  return text(properties, key)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function blockParagraph(block) {
  if (block.type === "paragraph") return richText(block.paragraph.rich_text);
  if (block.type === "heading_2") return richText(block.heading_2.rich_text);
  if (block.type === "heading_3") return richText(block.heading_3.rich_text);
  if (block.type === "bulleted_list_item") return richText(block.bulleted_list_item.rich_text);
  if (block.type === "numbered_list_item") return richText(block.numbered_list_item.rich_text);
  if (block.type === "quote") return richText(block.quote.rich_text);
  return "";
}

async function mapPost(page) {
  const properties = page.properties;
  const blocks = await pageBlocks(page.id);

  return {
    slug: text(properties, "Slug"),
    title: title(properties),
    summary: text(properties, "Summary"),
    category: select(properties, "Category"),
    channel: select(properties, "Channel"),
    intent: select(properties, "Intent") || "seo",
    status: select(properties, "Status"),
    indexable: checkbox(properties, "Indexable", true),
    publishedAt: date(properties, "Published At"),
    updatedAt: date(properties, "Updated At") || date(properties, "Published At"),
    keywords: multiSelect(properties, "Keywords"),
    body: blocks.map(blockParagraph).filter(Boolean),
  };
}

function mapWork(page) {
  const properties = page.properties;

  return {
    slug: text(properties, "Slug"),
    title: title(properties),
    type: select(properties, "Type"),
    summary: text(properties, "Summary"),
    tags: multiSelect(properties, "Tags"),
    visibility: select(properties, "Visibility") || "public",
  };
}

function mapService(page) {
  const properties = page.properties;

  return {
    slug: text(properties, "Slug"),
    title: title(properties),
    eyebrow: text(properties, "Eyebrow"),
    summary: text(properties, "Summary"),
    audience: text(properties, "Audience"),
    deliverables: csv(properties, "Deliverables"),
  };
}

function mapSiteCopy(pages) {
  const groups = new Map();

  for (const page of pages) {
    const properties = page.properties;
    const group = select(properties, "Group");
    const item = {
      order: number(properties, "Order"),
      key: text(properties, "Key"),
      href: text(properties, "Href"),
      label: text(properties, "Label"),
      title: title(properties),
      description: text(properties, "Description"),
    };

    groups.set(group, [...(groups.get(group) ?? []), item]);
  }

  const ordered = (group) =>
    (groups.get(group) ?? []).sort((a, b) => a.order - b.order);

  return {
    businessProofs: ordered("businessProofs").map(({ label, title, description }) => ({
      label,
      title,
      description,
    })),
    aiProductionSignals: ordered("aiProductionSignals").map(({ title, description }) => ({
      title,
      description,
    })),
    homeTrustChannels: ordered("homeTrustChannels").map(
      ({ href, label, title, description }) => ({
        href,
        label,
        title,
        description,
      }),
    ),
    contactNotes: ordered("contactNotes").map(({ title }) => title),
  };
}

const [postPages, workPages, servicePages, siteCopyPages] = await Promise.all([
  queryDatabase(process.env.NOTION_POSTS_DATABASE_ID),
  queryDatabase(process.env.NOTION_WORKS_DATABASE_ID),
  queryDatabase(process.env.NOTION_SERVICES_DATABASE_ID),
  queryDatabase(process.env.NOTION_SITE_COPY_DATABASE_ID),
]);

const siteContent = {
  services: servicePages.map(mapService),
  works: workPages.map(mapWork),
  posts: await Promise.all(postPages.map(mapPost)),
  siteCopy: mapSiteCopy(siteCopyPages),
};

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(siteContent, null, 2)}\n`, "utf8");

console.log(`Synced Notion CMS content to ${outputPath}`);
