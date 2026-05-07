# YJ CODE Agent Harness

This repository is not only a website. It is a hiring-facing portfolio artifact, an SEO service channel, and a brand platform for YJ CODE.

All coding agents working in this repo must follow the harness in `docs/project-harness.md` before making product, UI, SEO, content, or architecture changes.

## Non-Negotiables

- Preserve the three-part purpose: portfolio platform, SEO service channel, hiring signal.
- Treat README and docs as part of the product, not as afterthoughts.
- Keep README external-facing: it should read for hiring managers and developers, not like an internal plan or a message to the project owner.
- Keep the public website Korean-first because the primary hiring and client audience is in Korea.
- Keep README bilingual in Korean and English for broader recruiter and developer accessibility.
- Update README in the same change when adding or materially changing features, routes, services, architecture, integrations, or quality gates.
- Position YJ CODE as a SaaS/product software studio with strong UI/UX standards, not only as a frontend engineering vendor.
- Prefer clear information architecture over decorative UI.
- Hold the UI style bar high: experimental, avant-garde, product-minded, and technically credible rather than generic, template-like, or ornamental.
- Make visual decisions feel intentional through Korean-first hierarchy, spacing, typography, interaction states, and content density.
- Use motion to create attention, tension, rhythm, and brand memory, not to hide weak content.
- Never expose internal agent-facing language, implementation commentary, feature explanations, harness labels, or "how this UI works" copy in the public interface.
- Public UI copy must read like a real product/studio website for external visitors, not like notes between the owner and the coding agent.
- Use Agrandir Grand Light for the YJ CODE brand wordmark wherever the logo appears.
- Keep service pages SEO-oriented and conversion-aware.
- Keep portfolio pages case-study-oriented.
- Keep code readable to a hiring manager or senior engineer reviewing the repo.

## UI Style Bar

YJ CODE's interface should feel like a Korean-first experimental product studio, not a generic developer portfolio template.

- Lead with information architecture first, then visual expression.
- Make Korean the primary UI language. English can work as a secondary signal, technical label, or README-level bridge.
- Use an avant-garde editorial/product tone: sharp, tense, memorable, precise, and conversion-aware.
- Prefer asymmetric composition, strong rhythm, sharp hierarchy, purposeful spacing, and deliberate contrast over safe template layouts.
- Every section should have a clear job: prove capability, explain a service, guide inquiry, or deepen technical trust.
- Avoid filler cards, vague badges, empty gradients, polite template headers, ornamental motion, and generic SaaS-template copy.
- Avoid internal labels such as harness, proof system, active signals, constraints checked, agent notes, or implementation-status language in public UI.
- Motion should feel more experimental than conventional SaaS polish while preserving readability, speed, and reduced-motion accessibility.
- Mobile layouts must feel deliberately composed in Korean, not merely compressed from desktop.

## Before Editing

Check whether the change affects:

- brand positioning
- services and SEO
- project/case-study storytelling
- navigation or user flow
- accessibility, mobile layout, or performance
- repository credibility
- README accuracy

If it does, read `docs/project-harness.md` and make the change fit the constraints there.

## Quality Gates

When relevant, run:

```bash
npm run lint
npm run typecheck
npm run build
```

Document skipped checks in the final response or PR notes.
