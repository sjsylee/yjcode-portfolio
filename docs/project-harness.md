# YJ CODE Project Harness

This harness is the project-level guardrail for YJ CODE Portfolio. It exists so that future implementation work stays aligned with the product, SEO, UX, and hiring goals instead of drifting into a generic portfolio site.

## 1. North Star

YJ CODE Portfolio must function as three things at once:

- **Portfolio platform**: proves execution quality through selected work and case studies.
- **SEO service channel**: attracts search traffic for YJ CODE's software development services, including SaaS, business web platforms, UI/UX-driven products, and external service channels such as Kmong.
- **Hiring signal**: shows product thinking, software architecture sense, UI/UX craft, and documentation quality to recruiters and engineering reviewers.

If a change only makes the site prettier but does not strengthen at least one of these purposes, reconsider the change.

## 2. Audience Contract

Every public page should speak to at least one primary audience.

| Audience                 | What the page must prove                                                                |
| ------------------------ | --------------------------------------------------------------------------------------- |
| Korean hiring managers   | Clear thinking, maintainable code, product architecture, UI/UX taste, delivery maturity |
| Korean potential clients | Trust, service clarity, SaaS or product delivery confidence, easy contact path          |
| Developers               | Technical reasoning, implementation detail, useful lessons                              |

When creating a page or section, identify the audience before writing the UI.

The public website should default to Korean-first communication. English may appear as a secondary system label, technical marker, metadata bridge, or README-facing explanation, but the primary reading path should serve Korean companies, Korean recruiters, and Korean clients.

## 3. Content Rules

### Public UI Copy

Public UI copy must be written for external visitors, not for the project owner or coding agents. The interface is a real product/studio website that Korean hiring teams and Korean clients may evaluate directly.

Do not expose:

- agent-facing instructions or harness language
- implementation commentary such as "this section proves..." or "constraints checked..."
- feature explanations that describe how the UI works instead of what YJ CODE offers
- internal planning/status labels unless they are framed as real public roadmap or lab content
- phrases that sound like a conversation between the owner and an assistant
- meta labels such as proof system, active signals, harness, agent, prompt, checklist, or internal review

Public UI copy should:

- speak directly to clients, recruiters, and technical reviewers
- describe services, outcomes, work quality, collaboration value, or design point of view
- feel like brand copy from a design/product studio
- keep technical credibility without exposing implementation scaffolding
- be Korean-first on the website, with English used only as a secondary design or technical layer

Before shipping a page, ask: "Would this text still make sense if a Korean recruiter or client saw it without knowing this repository exists?" If not, rewrite it as public-facing product copy.

### Portfolio Work

Project pages must avoid shallow gallery behavior. They should move toward case-study structure:

- context
- problem
- role
- constraints
- technical decisions
- UX decisions
- implementation highlights
- result
- reflection or next iteration

### Services

Service pages must be SEO-aware and conversion-aware:

- name the service clearly
- include search-friendly phrases naturally
- explain who the service is for
- describe deliverables
- show process and expected collaboration style
- include a contact or external-channel CTA
- avoid positioning YJ CODE as only a frontend implementation vendor
- connect complete functionality with UI/UX quality and product usability

### Blog

Blog content should increase technical trust:

- architecture notes
- implementation records
- debugging stories
- product interaction studies
- SEO and delivery retrospectives

Avoid empty thought-leadership posts that do not show concrete technical judgment.

## 4. SEO Rules

SEO belongs in architecture, not only metadata.

Any new public route should consider:

- title and description
- canonical intent
- heading hierarchy
- internal links
- search intent
- sitemap visibility
- Open Graph preview
- whether the page should be indexed

Target search intent examples:

- website production
- SaaS product development
- business web platform development
- landing page development
- portfolio website development
- Next.js website development
- UI/UX-focused software development
- React and Next.js implementation

Do not keyword-stuff. Use search phrases only where they help the human reader.

## 5. Product UI/UX Rules

The visual direction is avant-garde motion over disciplined information architecture. The style bar should feel experimental enough to be memorable, polished enough for hiring review, clear enough for client conversion, and specific enough to avoid looking like a generic portfolio or SaaS template.

### Visual Taste Standard

YJ CODE's UI should communicate product maturity through a more daring visual language. A strong screen should feel composed, legible, tense, and intentional even before animation runs.

Design toward:

- clear hierarchy that tells the reader what to inspect first, second, and next
- Korean-first editorial/product composition rather than template-like section stacking
- asymmetry, tension, sharp transitions, split grids, layered type, and controlled visual friction when they strengthen brand memory
- a design studio feeling: art direction, restraint, typographic confidence, memorable layout, and high sensitivity to negative space
- spacing that feels deliberate, with enough air for premium tone and enough density for technical credibility
- typography that respects Korean readability while still carrying an experimental editorial rhythm
- Agrandir Grand Light for the YJ CODE brand wordmark, with a real font asset shipped when production quality matters
- contrast, color, and surface treatment that make the interface sharper and more memorable instead of merely louder
- interaction states that feel engineered, including hover, focus, active, loading, and reduced-motion behavior
- mobile layouts that are redesigned for the viewport instead of squeezed from desktop

Avoid:

- decorative gradients, badges, cards, or effects that do not clarify the message
- safe default headers, polite nav bars, and generic SaaS section formulas when a stronger YJ CODE-specific pattern is possible
- dated "developer portfolio" aesthetics such as hacker panels, dashboard cosplay, overused neon grids, or meta proof/checklist widgets
- vague portfolio phrases such as "beautiful experiences" without product or technical proof
- one-note visual systems where every section uses the same card rhythm, glow, or color treatment
- motion that makes weak content feel exciting without making the page easier to understand
- empty whitespace that looks premium at first glance but lowers information value
- dense UI that hides the core service, case-study, or contact path

Every major section should answer at least one of these questions:

- What does YJ CODE build?
- Why should a hiring manager trust the engineering judgment?
- Why should a client trust the product and UI/UX quality?
- What decision, constraint, or outcome is being proven?

Use motion when it:

- directs attention
- makes the brand memorable
- clarifies state changes
- improves perceived continuity
- rewards exploration without blocking comprehension

Avoid motion when it:

- delays access to important content
- causes layout shift
- makes mobile reading harder
- distracts from service or case-study information
- cannot respect reduced-motion expectations

UX constraints:

- first viewport must communicate YJ CODE immediately
- navigation must stay predictable
- CTAs must be visible and concrete
- Korean copy must carry the main user journey; English should support rather than lead the public UI
- public UI copy must never reveal internal harness, agent, checklist, or implementation-planning language
- visual hierarchy must make the primary message and next action obvious without explanation text
- mobile text and buttons must not overflow
- cards must contain comparable information
- pages must work without relying on animation to explain content
- software positioning must present YJ CODE as a product and SaaS development studio, not only a frontend shop
- service copy must pair functional completeness with UI/UX quality
- sections should avoid repeated visual formulas unless repetition improves scanning or comparison
- visual polish must not reduce SEO clarity, accessibility, or repository readability

## 6. Repository Credibility Rules

This repo should be reviewable by a hiring manager or senior engineer.

Code and docs should show:

- clear route ownership
- domain-aware component boundaries
- typed data models where practical
- restrained abstractions
- meaningful names
- quality checks
- honest roadmap notes

Do not add decorative complexity that makes the codebase harder to explain.

## 7. README Audience Contract

The README is a public-facing portfolio document. It is not an internal planning memo and not a conversation with the project owner.

README content must:

- address hiring managers and developers who open the repository cold
- provide Korean and English together so both domestic and international reviewers can evaluate the project
- explain what the project demonstrates through architecture and implementation
- describe current capabilities accurately
- separate current features from future roadmap items
- use a confident project-summary tone instead of instructional or self-referential language
- avoid phrases that sound like agent notes, internal coaching, or implementation promises
- position YJ CODE as a software/product development studio with strong UI/UX standards, not only as a frontend engineering provider

README bilingual rules:

- Use English first, then Korean for major summaries, tables, and section explanations.
- Keep technical terms stable across both languages.
- Do not duplicate every tiny command explanation if it creates noise; prioritize bilingual treatment for positioning, architecture, UX, SEO, and roadmap.
- Korean copy should read naturally, not like a literal translation.

Internal constraints, agent instructions, and mistake-correction rules belong in `docs/project-harness.md`, `AGENTS.md`, or PR templates, not in the README unless they are framed as engineering standards useful to outside reviewers.

## 8. README Maintenance Contract

README must stay synchronized with the product.

When a change adds, removes, or materially changes a feature, route, service category, architecture pattern, quality gate, integration, or major user-facing behavior, update README in the same change.

README updates are required for:

- new public routes or route groups
- new user-facing features
- new service categories or positioning changes
- new architecture directories or domain models
- new external integrations, APIs, CMS, analytics, or deployment behavior
- new quality scripts, CI steps, or verification requirements
- changed tech stack or package manager

README updates are not required for:

- typo fixes
- purely internal refactors that do not change architecture or reviewer understanding
- visual tweaks that do not change product behavior or positioning

If unsure, update README or explicitly explain why it does not need to change.

## 9. Implementation Checklist

Before finishing a change, check:

- Does this strengthen portfolio, SEO, or hiring signal?
- Is the page's audience clear?
- Is the copy specific enough to be credible?
- If README changed, does it read like an external repository overview?
- If README changed, are Korean and English both represented for reviewer accessibility?
- If features, routes, services, architecture, integrations, or quality gates changed, was README updated in the same change?
- Does YJ CODE positioning include SaaS/product development and UI/UX quality, not only frontend implementation?
- Is the route discoverable through navigation or internal links?
- Are metadata and headings considered?
- Does the UI still work on mobile?
- Does motion support UX rather than compete with it?
- Are lint, typecheck, and build passing or intentionally deferred?

## 10. Mistake Correction Loop

When a change violates the harness:

1. Name the violated rule.
2. Explain the risk briefly.
3. Adjust the implementation or document the trade-off.
4. Re-run the relevant quality check.
5. Update docs if the rule itself needs refinement.

This loop is part of the project. The harness should become more useful as the product grows.
