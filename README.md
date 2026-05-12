# YJ CODE.

<div align="center">

**A portfolio website designed as a service channel.**<br />
**서비스 탐색, 작업 증거, 기술 기록을 하나의 제품 표면으로 묶은 스튜디오 웹사이트**

[![Build](https://img.shields.io/github/actions/workflow/status/sjsylee/yjcode-portfolio/ci.yml?style=flat-square&label=build)](.)
[![Deploy](https://img.shields.io/badge/deploy-vercel-black?style=flat-square&logo=vercel)](.)
[![Domain](https://img.shields.io/badge/domain-yjcode.org-f5f2ea?style=flat-square)](https://yjcode.org)

<br />

[![Stack](https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,vercel,notion,nodejs,github)](https://skillicons.dev)

</div>

## Why This Exists / 만든 이유

This repository treats a portfolio as a product surface, not a static profile page.<br />
The site is designed to support four jobs at once: explain what YJ CODE builds, guide service inquiries, publish technical writing, and keep the codebase reviewable for hiring or engineering evaluation.

이 레포지토리는 포트폴리오를 정적인 소개 페이지가 아니라 하나의 제품 표면으로 다룹니다.<br />
YJ CODE가 무엇을 만드는지 설명하고, 서비스 문의로 이어지게 하며, 기술 기록을 쌓고, 채용 또는 엔지니어링 리뷰 관점에서도 읽을 수 있게 만드는 것이 목적입니다.

The goal is not to look busy. The goal is to show judgment: what belongs on the public surface, what should stay private, what should be deferred, and what must be ready before connecting a real domain.

목표는 기능과 장식을 많이 보여주는 것이 아닙니다. 공개 표면에 무엇을 둘지, 실제 콘텐츠는 어디에 둘지, 어떤 모션은 보류할지, 도메인 연결 전에 무엇을 갖춰야 하는지 판단을 남기는 것입니다.

## Decisions / 주요 판단

| Decision | What changed | Why it matters |
| --- | --- | --- |
| Information architecture | The public navigation is reduced to Home, Services, Works, Blog, and Contact. | The site reads as a service and trust path, not a broad internal sitemap. |
| Content safety | Real posts, works, services, and site copy stay outside the public repository and flow through a generated CMS cache. | Public code can be reviewed without exposing private business or client content. |
| Motion restraint | The hero keeps a restrained layered key visual; section-level motion is deferred. | Weak motion lowers trust faster than no motion. The shipped surface should feel intentional. |
| SEO baseline | `yjcode.org`, canonical metadata, sitemap, robots, route metadata, and article structured data are handled before launch. | Search readiness is treated as architecture, not a final marketing pass. |

| 판단 | 변경 내용 | 의미 |
| --- | --- | --- |
| 정보 구조 | 공개 내비게이션을 Home, Services, Works, Blog, Contact로 좁혔습니다. | 내부 사이트맵이 아니라 서비스 탐색과 신뢰 형성 흐름으로 읽히게 합니다. |
| 콘텐츠 안전성 | 실제 글, 작업, 서비스, 사이트 카피는 공개 레포지토리 밖에 두고 generated CMS cache를 통해 불러옵니다. | 비공개 비즈니스/클라이언트 콘텐츠를 노출하지 않으면서 코드 구조는 검토 가능하게 둡니다. |
| 모션 절제 | 히어로는 제한된 레이어형 키비주얼만 유지하고, 섹션별 모션은 보류했습니다. | 완성도가 낮은 모션은 없는 것보다 신뢰를 더 빠르게 낮추기 때문입니다. |
| SEO 기준선 | `yjcode.org`, canonical metadata, sitemap, robots, route metadata, article structured data를 배포 전에 정리했습니다. | 검색 노출 준비를 후반 마케팅 작업이 아니라 구조의 일부로 다룹니다. |

## Product Surface / 제품 표면

| Route | Role |
| --- | --- |
| `/` | Brand-first landing page for YJ CODE as a product-minded software studio |
| `/services` | Service explanation for SaaS, business web platforms, landing pages, and UI/UX-driven software |
| `/works` | Public-safe work evidence, moving toward case-study structure |
| `/blog` | SEO writing and technical trust channel |
| `/contact` | Inquiry entry point |

| 라우트 | 역할 |
| --- | --- |
| `/` | YJ CODE를 제품 관점의 소프트웨어 스튜디오로 보여주는 브랜드 우선 랜딩페이지 |
| `/services` | SaaS, 비즈니스 웹 플랫폼, 랜딩페이지, UI/UX 중심 소프트웨어 서비스 설명 |
| `/works` | 공개 가능한 작업 증거와 케이스 스터디로 확장될 표면 |
| `/blog` | 검색 유입과 기술 신뢰를 위한 글 채널 |
| `/contact` | 프로젝트 문의 진입점 |

## Stack / 기술 스택

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 App Router |
| Language | TypeScript |
| UI | React 19, Tailwind CSS v4, Framer Motion |
| Content contract | Zod, generated CMS cache, sanitized fallback |
| SEO | Next metadata, sitemap, robots, Open Graph, JSON-LD |
| Deployment | Vercel, `yjcode.org` |

## Architecture / 아키텍처

```txt
src/
  app/
    (marketing)/
      page.tsx
      services/page.tsx
      works/page.tsx
      blog/page.tsx
      blog/[slug]/page.tsx
      contact/page.tsx
    api/contact/route.ts
    robots.ts
    sitemap.ts
  components/
    layout/
    sections/
  domain/site/
    content.ts
    content-fallback.ts
    content-repository.ts
    content-schema.ts
    seo.ts
content/
  README.md
  generated/       # ignored private CMS output
scripts/
  sync-notion-content.mjs
```

The most important seam is `src/domain/site/content-repository.ts`. Pages do not import real content directly. They ask for validated site content, and the repository decides whether to read generated CMS data or fall back to public-safe content.

가장 중요한 지점은 `src/domain/site/content-repository.ts`입니다. 페이지는 실제 콘텐츠를 직접 import하지 않고 검증된 site content를 요청합니다. repository가 generated CMS data를 읽을지, 공개 가능한 fallback을 사용할지 결정합니다.

## Content Safety / 콘텐츠 안전성

This repository is public. Real YJ CODE content should not be committed directly.

이 레포지토리는 공개 레포지토리입니다. 실제 YJ CODE 콘텐츠는 직접 커밋하지 않는 것을 기준으로 합니다.

| Mode | Behavior |
| --- | --- |
| Default local / Vercel launch | Uses generated CMS content when it exists; otherwise uses sanitized fallback content. |
| Strict content | Set `YJ_CONTENT_STRICT=true` to fail the build when generated CMS content is missing or invalid. |

| 모드 | 동작 |
| --- | --- |
| 기본 로컬 / Vercel 초기 배포 | generated CMS content가 있으면 사용하고, 없으면 공개 가능한 fallback content를 사용합니다. |
| Strict content | `YJ_CONTENT_STRICT=true`를 설정하면 generated CMS content가 없거나 유효하지 않을 때 빌드를 실패시킵니다. |

To sync real private content:

```bash
npm run content:sync
```

Required environment variables:

```bash
NOTION_TOKEN=
NOTION_POSTS_DATABASE_ID=
NOTION_WORKS_DATABASE_ID=
NOTION_SERVICES_DATABASE_ID=
NOTION_SITE_COPY_DATABASE_ID=
```

## SEO Baseline / SEO 기준선

- Canonical production origin: `https://yjcode.org`
- `www.yjcode.org` redirects to `https://yjcode.org`
- Route-level title, description, canonical URL, Open Graph, and Twitter metadata
- `robots.txt` and `sitemap.xml`
- Blog article routes with `BlogPosting` JSON-LD
- Search ownership tokens are injected through deploy environment variables, not committed to source
- Korean-first headings and copy

- canonical production origin은 `https://yjcode.org`로 고정합니다.
- `www.yjcode.org`는 `https://yjcode.org`로 redirect합니다.
- 라우트별 title, description, canonical URL, Open Graph, Twitter metadata를 둡니다.
- `robots.txt`와 `sitemap.xml`을 제공합니다.
- 블로그 글 route에는 `BlogPosting` JSON-LD를 포함합니다.
- 검색엔진 소유권 인증 토큰은 source에 커밋하지 않고 배포 환경변수로 주입합니다.
- heading과 본문은 한국어 우선으로 구성합니다.

Search console deployment variables:

```bash
GOOGLE_SITE_VERIFICATION=
NAVER_SITE_VERIFICATION=
```

Google should be registered as the domain property for `yjcode.org` when possible. Naver Search Advisor can use the rendered `naver-site-verification` meta tag, then submit `https://yjcode.org/sitemap.xml`.

Google은 가능하면 `yjcode.org` domain property로 등록합니다. 네이버 서치어드바이저는 렌더링된 `naver-site-verification` meta tag로 소유권을 확인한 뒤 `https://yjcode.org/sitemap.xml`을 제출합니다.

## Design Direction / 디자인 방향

The visual direction is black, Korean-first, editorial, and restrained. The hero uses the YJ CODE wordmark as the strongest first-viewport signal, supported by a cinematic product-system key visual and a short rotating Korean phrase.

시각 방향은 블랙 계열, 한국어 우선, editorial, 절제된 구성입니다. 히어로는 YJ CODE 워드마크를 첫 화면의 가장 강한 신호로 두고, 시네마틱 제품 시스템 키비주얼과 짧은 한국어 회전 문구로 분위기를 잡습니다.

Section-level motion is intentionally not shipped yet. It will return only when it clarifies the section and reaches the same quality bar as the hero visual.

섹션별 모션은 아직 배포하지 않습니다. 섹션의 의미를 더 명확하게 만들고 히어로 비주얼과 같은 품질 기준을 만족할 때 다시 적용합니다.

## Quality Gates / 품질 게이트

```bash
npm run lint
npm run typecheck
npm run build
```

Vercel can deploy the current public-safe fallback surface. Enable `YJ_CONTENT_STRICT=true` only after generated CMS content is available in the deployment pipeline.

현재 Vercel은 공개 가능한 fallback 표면으로 배포할 수 있습니다. `YJ_CONTENT_STRICT=true`는 배포 파이프라인에서 generated CMS content가 준비된 뒤 활성화합니다.

## Roadmap / 로드맵

- Add project detail routes with case-study structure.
- Expand service detail pages with clearer search intent and conversion copy.
- Add richer blog rendering: tags, table of contents, code blocks, and article sections.
- Revisit section-level motion with a stronger asset direction.
- Harden Notion field mapping and production content sync.

- 케이스 스터디 구조를 갖춘 프로젝트 상세 route를 추가합니다.
- 검색 의도와 전환 문구가 더 선명한 서비스 상세 페이지를 확장합니다.
- 태그, 목차, 코드 블록, article section을 포함한 블로그 렌더링을 추가합니다.
- 더 강한 asset 방향으로 섹션별 모션을 다시 검토합니다.
- Notion field mapping과 production content sync를 강화합니다.
