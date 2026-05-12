# YJ CODE Portfolio Context

This context defines the product language for YJ CODE Portfolio as a public studio website, service channel, and hiring-facing engineering artifact.

## Language

**Service Conversion Studio Landing Page**:
The home page role that leads with YJ CODE's software studio offer and inquiry path, then supports trust through portfolio and technical evidence.
_Avoid_: Generic portfolio home, internal showcase page

**Landing Page**:
A public page designed to turn a visitor with a service, hiring, or review intent into the next concrete action.
_Avoid_: 렌딩페이지, splash page

**Motion Reference**:
An external site used to study interaction principles without copying its visual identity, layout, or brand tone.
_Avoid_: Clone target, theme source

**YJ CODE Motion Language**:
A dark, Korean-first motion system where short service statements, large typography, line tension, and work evidence create the primary landing rhythm.
_Avoid_: Decorative background animation, generic grid motion, portfolio clone

**Motion Quality Reset**:
The decision to remove the current custom Lottie/geometric background experiment from the public surface because it looked layered, noisy, and CSS-like instead of designed. Future motion must start from a stronger product mockup or visual asset direction rather than stacking abstract lines over existing layouts.
_Avoid_: Shipping weak Lottie for the sake of using Lottie, geometric background clutter, YJ CODE wordmark repetition as atmosphere

**Hero Motion Quality Bar**:
Hero motion must be authored as one coherent quality system. A high-quality raster or generated asset cannot be "activated" by placing generic CSS/SVG dashboard lines, bars, or AI markers on top of it; that reads as disconnected overlay work. Either the complete scene is rendered with native UI detail already integrated, the source has real separable layers, or the whole scene is rebuilt natively at matching material, lighting, and UI quality.
If the internal UI itself must animate, it cannot be baked into a static panel image; frame, screen, graph, row, glow, mask, and status elements must exist as a layer family.
When the approved visual is one generated still, layerization means mask/alpha extraction of the actual phone, browser, console, and window objects from that still, plus a base plate that does not visibly duplicate those objects. It does not mean regenerating unrelated objects or stacking unmasked full-frame scenes.
_Avoid_: High-quality asset plus low-quality code UI, sticker-like vectors, baked-in animated UI, unmasked full-frame image stacks, double exposure composites, more decorative lines as a fix, screenshot-only motion approval

**Product Mockup Visual System**:
The next desired visual direction for motion and imagery: carefully art-directed browser, mobile, and product interface mockups that feel designed rather than generic, while preserving black editorial hierarchy and Korean readability.
_Avoid_: Straight-line geometry, generic dashboard collage, stock SaaS panels, noisy page backgrounds

**Brand-First Hero Poster**:
The home first viewport pattern where the **YJ CODE Wordmark** is the dominant visual signal, supported by one short Korean promise, one strong full-bleed visual plane, and a direct inquiry path.
_Avoid_: Header-only brand, slogan-first hero, floating dashboard collage

**Studio Subpage System**:
The shared visual and information pattern for Services, Works, Blog, and Contact: black editorial surfaces, oversized Korean page titles, cool silver-blue accents, quiet atmosphere, and line-based rows instead of decorative card grids.
_Avoid_: Lime accent leftovers, generic boxed cards, unrelated page-by-page styling

**Primary Navigation Set**:
The public menu structure for YJ CODE, limited to Services, Works, Blog, and Contact so the navigation reads as a conversion and trust path rather than a full internal sitemap.
_Avoid_: About page as a thin standalone route, premature Lab route, menu items that do not carry a clear visitor action

**Hero Evidence**:
Compact work, service, technology, or outcome signals that support the hero message without becoming the main visual subject.
_Avoid_: Explanation cards, dashboard panels, decorative badges

**Small Start, Product Standard**:
The YJ CODE promise that small teams, individual operators, and early-stage businesses can start with product-grade software without accepting weak UI/UX or shallow business logic.
_Avoid_: Cheap development, anyone can code, guaranteed best UI/UX

**YJ CODE Wordmark**:
The exact brand mark text "YJ CODE." rendered with the commercial-use-safe Unbounded Light family, chosen for its low, wide, geometric display proportion.
_Avoid_: YJ CODE without the period in logo contexts, substitute logo typography

**Wordmark Font Policy**:
The rule that Unbounded Light is reserved for **YJ CODE Wordmark** usage while Korean body, navigation, and interface copy keep Korean-readable sans-serif fonts.
_Avoid_: Applying Unbounded to Korean UI copy, replacing body typography with the logo font

**SEO Writing Channel**:
The blog role focused on search-discoverable articles that bring service, implementation, and business-web intent into YJ CODE.
_Avoid_: Personal diary, empty thought leadership, generic news

**Private CMS Content Pipeline**:
The content architecture where real posts, works, services, and site copy live in Notion, are synchronized into a git-ignored generated cache, and are validated before rendering so the public repository exposes structure but not private content.
_Avoid_: Committing real client or business content, relying on public mock arrays, production builds with missing CMS content

**Canonical Domain**:
The public production origin for YJ CODE, fixed as `https://yjcode.org` for canonical URLs, Open Graph URLs, sitemap entries, and search console registration.
_Avoid_: Splitting signals across `www`, `http`, preview deployments, or alternate domains

**Search Engine Baseline**:
The minimum Google and Naver search-readiness layer: unique page titles and descriptions, canonical URLs, sitemap, robots rules, Open Graph metadata, article metadata, and structured data where meaningful.
_Avoid_: Keyword stuffing, duplicate metadata, relying only on visual design for discoverability

**Technical Trust Channel**:
The public section that proves YJ CODE's engineering capability through architecture notes, implementation decisions, experiments, and quality standards.
_Avoid_: Decorative lab, vague experiments, internal agent notes

**AI-Aware Production System**:
The YJ CODE production approach that uses AI-era practices to keep requirements, business logic, UI flow, and quality standards visible and verifiable.
_Avoid_: Latest AI trends, agentic buzzwords, harness engineering copy

## Relationships

- A **Service Conversion Studio Landing Page** is a specialized **Landing Page** for YJ CODE's home route.
- A **Service Conversion Studio Landing Page** supports the portfolio platform, SEO service channel, and hiring signal at the same time.
- A **Motion Reference** can inform **YJ CODE Motion Language**, but must not override YJ CODE's black visual direction or software studio positioning.
- **YJ CODE Motion Language** gives primary weight to large Korean typography and secondary weight to **Hero Evidence**.
- **Motion Quality Reset** supersedes the previous custom Lottie experiment until a stronger **Product Mockup Visual System** is designed.
- A **Product Mockup Visual System** should make YJ CODE's design sensitivity visible through believable product surfaces, not through abstract background geometry.
- A **Brand-First Hero Poster** is now the preferred first viewport for the **Service Conversion Studio Landing Page**.
- In a **Brand-First Hero Poster**, **YJ CODE Wordmark** must be louder than the slogan, navigation, or proof labels.
- A **Brand-First Hero Poster** should stay clean while the **Product Mockup Visual System** is unresolved, avoiding stock hero imagery, straight-line geometry, and stacks of decorative mockup cards.
- A **Studio Subpage System** extends **YJ CODE Motion Language** beyond the home page so every route feels like the same brand platform.
- A **Studio Subpage System** should keep page-specific content clear while sharing a common atmosphere, typography scale, and row-based information rhythm.
- The **Primary Navigation Set** should stay focused on Services, Works, Blog, and Contact; studio positioning belongs on the home page, and technical experiments belong inside writing until they justify a separate route.
- A **Service Conversion Studio Landing Page** should express **Small Start, Product Standard** without implying bargain outsourcing or unverifiable guarantees.
- **Wordmark Font Policy** applies to **YJ CODE Wordmark** only; Unbounded Light is bundled as a commercial-use-safe replacement for the previous Agrandir candidate.
- A **Service Conversion Studio Landing Page** should lead into the **SEO Writing Channel** and **Technical Trust Channel** as supporting discovery and credibility paths.
- The home route should expose the **SEO Writing Channel** and **Technical Trust Channel** as compact trust paths, not as primary landing sections.
- A **Private CMS Content Pipeline** is required because the repository is public; production content should come from Notion and generated cache, not committed mock arrays.
- The **Canonical Domain** for public SEO is `https://yjcode.org`; `www.yjcode.org` should redirect to the canonical origin.
- A **Search Engine Baseline** applies to all public routes before domain launch and to every future blog article route.
- **AI-Aware Production System** should appear as a production credibility layer, not as hero buzzword copy.

## Example dialogue

> **Dev:** "Should the home page first explain YJ CODE's biography or lead with the service offer?"
> **Domain expert:** "Lead with the **Service Conversion Studio Landing Page** role, then use work and technical writing as evidence."

> **Dev:** "Should we copy the animation style from the reference portfolio?"
> **Domain expert:** "No — treat it as a **Motion Reference** and translate the rhythm into **YJ CODE Motion Language**."

> **Dev:** "Should the hero open with a service card panel or large Korean type?"
> **Domain expert:** "Use large Korean type as the main scene and keep **Hero Evidence** compact around the edges."

> **Dev:** "Should the slogan or the logo be the biggest first-screen signal?"
> **Domain expert:** "Use a **Brand-First Hero Poster**. The **YJ CODE Wordmark** should dominate, and the Korean promise should support it."

> **Dev:** "Can we promise the best UI/UX?"
> **Domain expert:** "No — say YJ CODE treats UI/UX as a product quality standard and combines it with business logic experience."

> **Dev:** "Should Unbounded Light become the whole site's display font?"
> **Domain expert:** "No — use it for the **YJ CODE Wordmark** and keep Korean text optimized for readability."

> **Dev:** "Should blog posts and technical proof live in the same tab?"
> **Domain expert:** "No — keep the **SEO Writing Channel** focused on discoverable articles and use the **Technical Trust Channel** to prove engineering depth."

> **Dev:** "Should Blog dominate the home page?"
> **Domain expert:** "No — show writing as a compact credibility path after the service conversion story is clear."

> **Dev:** "Should SEO wait until the design is perfect?"
> **Domain expert:** "No — establish the **Canonical Domain** and **Search Engine Baseline** before connecting the domain, then improve content depth over time."

> **Dev:** "Should every subpage get a totally different design treatment?"
> **Domain expert:** "No — use the **Studio Subpage System** first, then deepen Services or Works with page-specific modules later."

> **Dev:** "Should we advertise that YJ CODE follows the latest AI trends?"
> **Domain expert:** "No — show an **AI-Aware Production System** as a verifiable way to protect requirements, business logic, UI flow, and quality."

## Flagged ambiguities

- "렌딩페이지" was used to mean **Landing Page** — resolved: use **Landing Page** in context docs and "랜딩페이지" in Korean public/planning copy.
- The supplied Agrandir Grand Light download page describes personal-use-only licensing and prohibits commercial use — resolved: remove the bundled Agrandir asset and use Unbounded Light for the **YJ CODE Wordmark**.
- "Latest AI trends", "harness engineering", and raw agentic AI labels were considered too buzzword-heavy for public UI copy — resolved: translate them into **AI-Aware Production System** language.
