# YJ CODE Agent Harness

This repository is not only a website. It is a hiring-facing portfolio artifact, an SEO service channel, and a brand platform for YJ CODE.

All coding agents working in this repo must follow the local harness in `docs/project-harness.md` when it exists before making product, UI, SEO, content, or architecture changes. The `docs/` directory is local-only and intentionally excluded from the public repository.

## Non-Negotiables

- Preserve the three-part purpose: portfolio platform, SEO service channel, hiring signal.
- Treat README and local docs as part of the product, not as afterthoughts.
- Keep README external-facing: it should read for hiring managers and developers, not like an internal plan or a message to the project owner.
- Keep the public website Korean-first because the primary hiring and client audience is in Korea.
- Keep README bilingual in Korean and English for broader recruiter and developer accessibility.
- Update README in the same change when adding or materially changing features, routes, services, architecture, integrations, or quality gates.
- Position YJ CODE as a SaaS/product software studio with strong UI/UX standards, not only as a frontend engineering vendor.
- Prefer clear information architecture over decorative UI.
- Hold the UI style bar high: experimental, avant-garde, product-minded, and technically credible rather than generic, template-like, or ornamental.
- Make visual decisions feel intentional through Korean-first hierarchy, spacing, typography, interaction states, and content density.
- Use motion to create attention, tension, rhythm, and brand memory, not to hide weak content.
- Do not ship pan-and-zoom animation of a static image as a "video" or premium motion asset. Hero motion must have separately animated objects, layered depth, or a clearly intentional production method.
- When true premium layered motion is not feasible, explicitly reduce the scope to a web-feasible key visual: high-quality art direction, responsive cropping, restrained camera/light movement, and strong copy hierarchy. Do not pretend this is native product UI animation.
- Do not ship hero media that only works at one viewport ratio. Hero visuals must be art-directed for mobile portrait, tablet, desktop, and wide desktop before being considered acceptable.
- Do not ship homemade/generated hero motion after checking only still screenshots or isolated frames. Motion must be reviewed as motion, including at least one real playback capture or recording. If the movement feels awkward, jittery, ghosted, or amateur, remove it rather than tuning around it.
- Do not fake native product motion by placing generic SVG, DOM, or CSS vectors on top of a raster hero image. Overlay lines may be used only as subtle connection cues; animated UI must either be authored inside the same quality system as the asset or intentionally rebuilt as a full native scene.
- Do not mix a high-quality generated/3D hero asset with low-quality code-drawn dashboard filler. If the internal UI cannot match the material, lighting, density, and polish of the surrounding asset, discard that direction instead of patching it with more lines, bars, glow, or motion.
- Do not bake internal UI into a static panel asset if that UI is expected to animate. Animated product UI requires separable frame, screen, graph, row, glow, mask, and status layers.
- Do not call a blended stack of full-frame generated images "layered motion" when the windows/devices are not actually isolated. Real hero layers must be extracted or authored as masked/alpha/matte-separated objects, with a base plate that does not leave the same object behind as a ghost.
- Treat premium hero motion as a production asset, not a component exercise. Start with art direction, quality reference, layer strategy, and rejection criteria before implementation; do not iterate by stacking more decorative elements onto a weak result.
- Never expose internal agent-facing language, implementation commentary, feature explanations, harness labels, or "how this UI works" copy in the public interface.
- Public UI copy must read like a real product/studio website for external visitors, not like notes between the owner and the coding agent.
- Default placeholder, fallback, empty, loading, error, draft, and CMS-disconnected states must also be publication-grade public copy. Never show internal source names, schema/build status, repository policy, agent workflow, or implementation scaffolding in the UI.
- Use the commercial-use-safe Unbounded Light family for the YJ CODE brand wordmark wherever the logo appears.
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
- Motion assets must respect the copy hierarchy: no cropped subject, no accidental overlap with the wordmark or Korean headline, and no "decorative object dump" in the hero.
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

If it does, read local `docs/project-harness.md` when available and make the change fit the constraints there.

## Quality Gates

When relevant, run:

```bash
npm run lint
npm run typecheck
npm run build
```

For hero visual or motion changes, additionally verify representative screenshots at minimum: 390x844, 768x1024, 1440x900, and a wide desktop viewport. For motion, screenshots are not enough: inspect real playback or a recording before shipping. If any viewport crops the subject awkwardly, competes with the brand/copy, or the motion itself feels unstable, do not ship the asset.

Document skipped checks in the final response or PR notes.
