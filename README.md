# YJ CODE Portfolio

<div align="center">

```txt
YJ CODE.
```

**Software studio website · Service channel · Technical trust surface**

**소프트웨어 스튜디오 웹사이트 · 서비스 채널 · 기술 신뢰 표면**

[![Build](https://img.shields.io/github/actions/workflow/status/sjsylee/yjcode-portfolio/ci.yml?style=flat-square&label=build)](.)
[![Deploy](https://img.shields.io/badge/deploy-vercel-black?style=flat-square&logo=vercel)](.)
[![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?style=flat-square&logo=next.js)](.)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square&logo=typescript)](.)

</div>

An interactive website and repository artifact for **YJ CODE**, a software studio that builds SaaS products, business web platforms, landing pages, and UI/UX-driven digital products with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

**YJ CODE**의 서비스 안내, 작업 증거, 기술 기록을 하나의 제품 표면으로 연결한 웹사이트이자 레포지토리 산출물입니다. YJ CODE는 단순 프론트엔드 구현을 넘어 SaaS, 비즈니스 웹 플랫폼, 랜딩페이지, UI/UX 중심 소프트웨어를 개발하는 스튜디오입니다.

This repository is designed to be evaluated in two ways:

- as a public-facing studio website for service discovery, selected work, and technical writing
- as an engineering artifact that demonstrates product architecture, UX judgment, SEO awareness, content safety, and maintainable implementation

이 레포지토리는 두 가지 관점에서 평가될 수 있도록 설계되었습니다.

- 서비스 안내, 작업 증거, 기술 글을 제공하는 공개 스튜디오 웹사이트
- 제품 아키텍처, UX 판단, SEO 이해도, 콘텐츠 안전성, 유지보수 가능한 구현을 보여주는 엔지니어링 산출물

## What This Project Demonstrates / 프로젝트가 보여주는 것

| Area              | Evidence                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Product thinking  | Portfolio storytelling, service conversion, and technical credibility are combined in one route system.                 |
| Software delivery | SaaS, service platforms, and business-facing web products are framed as complete software rather than isolated screens. |
| UI/UX craft       | Structured layouts, responsive composition, and motion are used as part of the product experience.                      |
| SEO architecture  | Commercial routes, writing routes, canonical metadata, sitemap, robots, and structured data are designed together.      |
| Content safety    | Real content is kept outside the public repository and loaded through a validated private CMS pipeline.                 |
| Maintainability   | Route ownership, typed content contracts, shared page modules, and quality scripts keep the foundation readable.        |
| Documentation     | README and local operating docs keep public positioning and implementation standards explicit.                          |

| 영역                 | 근거                                                                                           |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| 제품 사고            | 포트폴리오 스토리텔링, 서비스 전환, 기술 신뢰를 하나의 라우트 구조 안에서 연결합니다.          |
| 소프트웨어 개발 역량 | SaaS, 서비스 플랫폼, 비즈니스 웹 제품을 단순 화면이 아닌 완성형 소프트웨어로 다룹니다.         |
| UI/UX 완성도         | 구조화된 레이아웃, 반응형 구성, 모션을 제품 경험의 일부로 사용합니다.                          |
| SEO 아키텍처         | 상업 라우트, 글 라우트, canonical metadata, sitemap, robots, 구조화 데이터를 함께 설계합니다.  |
| 콘텐츠 안전성        | 실제 콘텐츠는 공개 레포지토리 밖에 두고 검증된 private CMS pipeline을 통해 불러옵니다.         |
| 유지보수성           | 라우트 책임, 타입 기반 콘텐츠 계약, 공유 페이지 모듈, 품질 스크립트로 기반 구조를 읽기 쉽게 유지합니다. |
| 문서화               | README와 로컬 운영 문서로 공개 포지셔닝과 구현 기준을 명확히 합니다.                          |

## Product Surface / 제품 표면

YJ CODE Portfolio is organized around three user journeys.

YJ CODE Portfolio는 세 가지 사용자 흐름을 중심으로 구성됩니다.

| Journey           | Routes                           | Purpose                                                                                                                                |
| ----------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Service discovery | `/`, `/services`, `/contact`     | Present the home route as a conversion-focused studio landing page for SaaS, business web platforms, and landing page production.      |
| Portfolio review  | `/works`                         | Present selected work as case-study material instead of a visual gallery only.                                                         |
| Technical trust   | `/blog`, repository docs         | Use SEO-oriented writing and repository documentation as the technical trust surface for search users and engineering reviewers.          |

| 흐름            | 라우트                           | 목적                                                                                                         |
| --------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 서비스 탐색     | `/`, `/services`, `/contact`     | 홈을 SaaS, 비즈니스 웹 플랫폼, 랜딩페이지 제작 문의로 이어지는 전환 중심 스튜디오 랜딩페이지로 구성합니다.   |
| 포트폴리오 검토 | `/works`                         | 작업 결과를 단순 갤러리가 아니라 케이스 스터디로 보여줍니다.                                                 |
| 기술 신뢰       | `/blog`, repository docs         | SEO 지향 글과 레포지토리 문서를 통해 검색 사용자와 엔지니어링 리뷰어가 기술 판단을 확인할 수 있게 합니다.     |

## Release Posture / 출시 기준

This branch is prepared as a domain-launch baseline for `https://yjcode.org`.
The first production release should prioritize reliable service discovery, search readiness, safe content delivery, and a polished first impression over additional decorative motion.

이 브랜치는 `https://yjcode.org` 도메인 연결을 위한 출시 기준선으로 준비됩니다.
첫 프로덕션 배포에서는 추가 장식 모션보다 안정적인 서비스 탐색, 검색 노출 준비, 안전한 콘텐츠 전달, 첫 화면 완성도를 우선합니다.

Release principles:

- keep the hero visual and wordmark as the primary brand signal
- ship only motion that supports readability and does not weaken mobile composition
- keep real business, client, and article content outside the public repository
- allow pull request CI to run against public-safe fallback content
- require validated CMS content for production deployment

출시 원칙:

- 히어로 비주얼과 워드마크를 가장 강한 브랜드 신호로 유지합니다.
- 가독성과 모바일 구성을 해치지 않는 모션만 배포합니다.
- 실제 비즈니스, 클라이언트, 글 콘텐츠는 공개 레포지토리 밖에 둡니다.
- pull request CI는 공개 가능한 fallback 콘텐츠로 검증할 수 있게 합니다.
- production 배포에서는 검증된 CMS 콘텐츠를 요구합니다.

## Current Features / 현재 기능

- Marketing route group with home, services, works, blog, and contact pages
- Korean-first public UI copy and navigation for domestic hiring and client audiences
- Brand-first home landing page with Unbounded Light wordmark typography, a cinematic product-system key visual, large rotating Korean refusal copy, restrained motion, and reduced-motion support
- Shared studio subpage system for Services, Works, Blog, and Contact
- AI-aware production messaging that frames AI as a way to keep requirements, business logic, UI flow, and quality standards more verifiable
- Notion-backed content pipeline design with generated private cache, Zod validation, and local sanitized fallback
- Canonical `https://yjcode.org` metadata, sitemap, robots rules, Open Graph/Twitter previews, and blog article routes with structured data
- Page-level metadata for major public routes and blog posts
- Reusable layout shell with global header and footer
- Contact API route foundation
- CI workflow for lint, typecheck, and production build against public-safe fallback content
- Engineering constraints and PR checklist for preserving product direction

- 홈, 서비스, 작업, 블로그, 문의 페이지를 포함한 마케팅 라우트 그룹
- 국내 채용 및 고객 맥락을 우선한 한국어 중심 공개 UI와 내비게이션
- Unbounded Light 워드마크, 시네마틱 제품 시스템 키비주얼, 큰 회전형 한국어 거부 문구, 절제된 모션, reduced-motion을 포함한 브랜드 우선 홈 랜딩페이지
- Services, Works, Blog, Contact에 적용되는 공유 studio subpage system
- 요구사항, 비즈니스 로직, UI 흐름, 품질 기준을 더 검증 가능하게 관리하는 AI-aware 제작 방식 메시지
- generated private cache, Zod validation, local sanitized fallback을 포함한 Notion 기반 콘텐츠 파이프라인 설계
- canonical `https://yjcode.org` metadata, sitemap, robots 규칙, Open Graph/Twitter preview, 구조화 데이터를 포함한 블로그 글 route
- 주요 공개 라우트와 블로그 글의 페이지별 metadata
- 전역 Header/Footer를 포함한 재사용 레이아웃 구조
- Contact API route 기반
- 공개 가능한 fallback 콘텐츠로 lint, typecheck, production build를 검증하는 CI workflow
- 제품 방향을 유지하기 위한 엔지니어링 제약과 PR 체크리스트

## Architecture / 아키텍처

```txt
src/
  app/
    (marketing)/
      page.tsx
      works/page.tsx
      services/page.tsx
      blog/page.tsx
      blog/[slug]/page.tsx
      contact/page.tsx
    api/
      contact/route.ts
  components/
    layout/
    sections/
  domain/
    site/
      content.ts
      content-fallback.ts
      content-repository.ts
      content-schema.ts
      seo.ts
scripts/
  sync-notion-content.mjs
content/
  README.md
  generated/              # git-ignored CMS output
  lib/
    utils/
  types/
```

Public navigation stays in typed constants, but page content is read through a repository layer. Real posts, works, services, and site copy are managed in Notion, synchronized into a git-ignored generated cache, and validated with Zod before rendering. Local development can use sanitized fallback content; production builds should fail when CMS content is missing or invalid.

공개 내비게이션은 타입 상수로 유지하지만, 페이지 콘텐츠는 repository layer를 통해 읽습니다. 실제 글, 작업, 서비스, 사이트 카피는 Notion에서 관리하고, gitignore 처리된 generated cache로 동기화한 뒤 Zod로 검증해 렌더링합니다. 로컬 개발에서는 안전한 fallback 콘텐츠를 사용할 수 있고, 프로덕션 빌드는 CMS 콘텐츠가 없거나 유효하지 않으면 실패해야 합니다.

Content modes:

| Mode | Behavior | Intended use |
| --- | --- | --- |
| Default local / PR CI | Uses `content/generated/site-content.json` when available; otherwise renders sanitized fallback content. | Development, pull requests, repository review |
| Strict content | Fails the build when generated CMS content is missing or invalid. Enabled by `YJ_CONTENT_STRICT=true` or `VERCEL_ENV=production`. | Production deployment |

콘텐츠 모드:

| 모드 | 동작 | 사용 목적 |
| --- | --- | --- |
| 기본 로컬 / PR CI | `content/generated/site-content.json`이 있으면 사용하고, 없으면 공개 가능한 fallback 콘텐츠를 렌더링합니다. | 개발, pull request, 레포지토리 리뷰 |
| Strict content | generated CMS 콘텐츠가 없거나 유효하지 않으면 빌드를 실패시킵니다. `YJ_CONTENT_STRICT=true` 또는 `VERCEL_ENV=production`에서 활성화됩니다. | 프로덕션 배포 |

## Design Direction / 디자인 방향

The visual system is intentionally black, editorial, Korean-first, and more avant-garde than a conventional developer portfolio. The home route opens as a brand-first hero poster: the `YJ CODE.` wordmark is the primary first-viewport signal, the cinematic product-system key visual establishes the software studio atmosphere, and the rotating refusal phrase carries the service attitude. The current public surface uses a web-feasible motion target: restrained camera drift, light sweep, entrance timing, and scroll reveal instead of fake animated dashboard internals.

시각 시스템은 블랙 계열, editorial, 한국어 우선이며 일반적인 개발자 포트폴리오보다 더 전위적인 인터페이스를 지향합니다. 홈은 브랜드 우선 히어로 포스터로 시작합니다. 첫 화면에서 `YJ CODE.` 워드마크가 가장 강한 신호가 되고, 시네마틱 제품 시스템 키비주얼이 소프트웨어 스튜디오의 분위기를 만들며, 회전하는 거부 문구가 서비스 태도를 전달합니다. 현재 공개 표면은 웹에서 완성도 있게 감당 가능한 모션 목표를 사용합니다. 가짜 대시보드 내부 애니메이션 대신 절제된 카메라 움직임, 빛의 흐름, 진입 타이밍, 스크롤 리빌로 브랜드 감도를 만듭니다.

Home sections below the hero currently stay editorial and content-led. Section-specific visual motion is intentionally deferred until the direction can meet the same quality bar as the hero key visual.

히어로 아래 홈 섹션은 현재 editorial 구성과 콘텐츠 흐름을 우선합니다. 섹션별 비주얼 모션은 히어로 키비주얼과 같은 품질 기준을 만족할 때까지 의도적으로 보류합니다.

Design constraints:

- first viewport must immediately communicate YJ CODE as the dominant brand signal
- the hero visual should feel like a cinematic product production studio, not a generic SaaS dashboard collage
- hero motion should be scoped honestly: if native layered product motion is not production-grade, use a high-quality responsive key visual with restrained atmospheric motion
- subpages should use the shared studio page system before adding page-specific visual modules
- navigation must remain predictable
- Korean should carry the primary public website journey
- public UI copy should read as external-facing studio/product copy, never internal agent or implementation notes
- the `YJ CODE.` wordmark uses bundled Unbounded Light font files from Google Fonts under a commercial-use-safe open font license
- service CTAs must be easy to find
- portfolio sections must explain decisions, not only outcomes
- software positioning must include functionality, product thinking, and UI/UX quality together
- custom motion should not ship unless it clearly improves design craft, page meaning, and readability
- page backgrounds should stay quiet until a high-quality product mockup visual system is designed
- AI-related positioning should describe verifiable production quality rather than raw trend labels or internal engineering vocabulary

디자인 제약:

- 첫 화면에서 YJ CODE가 가장 강한 브랜드 신호로 즉시 인식되어야 합니다.
- 히어로 비주얼은 일반적인 SaaS 대시보드 콜라주가 아니라 시네마틱 제품 제작실처럼 느껴져야 합니다.
- 히어로 모션은 가능한 수준을 정직하게 설정해야 합니다. 네이티브 레이어형 제품 모션이 production-grade가 아니라면 고품질 반응형 키비주얼과 절제된 분위기 모션으로 구성합니다.
- 서브페이지는 페이지별 시각 모듈을 추가하기 전에 공유 studio page system을 먼저 사용해야 합니다.
- 내비게이션은 예측 가능해야 합니다.
- 공개 웹사이트의 주요 사용자 흐름은 한국어가 담당해야 합니다.
- 공개 UI 문구는 내부 에이전트 메모나 구현 설명이 아니라 외부 방문자를 위한 스튜디오/제품 카피여야 합니다.
- `YJ CODE.` 워드마크는 Google Fonts의 상업 사용 가능한 오픈 폰트 라이선스 기반 Unbounded Light 번들 파일을 사용합니다.
- 서비스 CTA는 쉽게 발견되어야 합니다.
- 포트폴리오 섹션은 결과뿐 아니라 의사결정을 설명해야 합니다.
- 소프트웨어 포지셔닝은 기능, 제품 사고, UI/UX 품질을 함께 포함해야 합니다.
- 커스텀 모션은 디자인 감도, 페이지 의미, 가독성을 명확히 개선할 때만 공개 표면에 적용합니다.
- 고품질 제품 목업 비주얼 시스템을 다시 설계하기 전까지 페이지 배경은 조용하게 유지합니다.
- AI 관련 포지셔닝은 트렌드 용어나 내부 엔지니어링 용어보다 검증 가능한 제작 품질로 설명합니다.

## SEO Direction / SEO 방향

The canonical production domain is `https://yjcode.org`. The SEO baseline fixes this origin across canonical metadata, Open Graph URLs, robots rules, sitemap entries, and future Search Console / Naver Search Advisor registration. `www.yjcode.org` should permanently redirect to `yjcode.org` so search signals are not split across hosts.

프로덕션 canonical 도메인은 `https://yjcode.org`입니다. SEO 기본 설계는 canonical metadata, Open Graph URL, robots 규칙, sitemap 항목, 향후 Google Search Console / Naver Search Advisor 등록 기준을 이 origin으로 고정합니다. 검색 신호가 여러 host로 분산되지 않도록 `www.yjcode.org`는 `yjcode.org`로 영구 redirect되어야 합니다.

The service layer is structured around search intent, not generic page labels.

서비스 영역은 일반적인 페이지 이름이 아니라 검색 의도를 기준으로 구조화합니다.

Primary service intents:

- Next.js website production
- SaaS product development
- business web platform development
- landing page development
- portfolio website development
- UI/UX-focused software development
- React and Next.js implementation

주요 서비스 검색 의도:

- Next.js 웹사이트 제작
- SaaS 제품 개발
- 비즈니스 웹 플랫폼 개발
- 랜딩페이지 개발
- 포트폴리오 웹사이트 제작
- UI/UX 중심 소프트웨어 개발
- React 및 Next.js 구현

The route structure separates commercial service pages from technical writing so that search users, clients, and technical reviewers can enter through different paths without losing context.

라우트 구조는 상업적 서비스 페이지와 기술 글을 분리합니다. 이를 통해 검색 사용자, 클라이언트, 기술 리뷰어가 서로 다른 경로로 진입해도 맥락을 잃지 않도록 합니다.

Search-engine baseline:

- unique title and description for each public route
- canonical URLs under `https://yjcode.org`
- `robots.txt` allowing Google and Naver/Yeti crawling
- `sitemap.xml` covering public routes and blog article URLs
- Open Graph and Twitter preview metadata
- Organization, WebSite, and BlogPosting structured data
- one clear H1 per page, Korean-first copy, and readable mobile layouts
- blog posts written for people-first usefulness, not keyword stuffing

검색엔진 기본 기준:

- 공개 라우트별 고유 title과 description
- `https://yjcode.org` 기준 canonical URL
- Google과 Naver/Yeti 크롤링을 허용하는 `robots.txt`
- 공개 라우트와 블로그 글 URL을 포함하는 `sitemap.xml`
- Open Graph 및 Twitter preview metadata
- Organization, WebSite, BlogPosting 구조화 데이터
- 페이지별 명확한 H1, 한국어 우선 카피, 모바일 가독성
- 키워드 반복이 아니라 사람에게 유용한 블로그 글

## Engineering Standards / 엔지니어링 기준

The project keeps public-facing standards visible through code structure, typed content contracts, SEO metadata, and quality gates. Internal planning notes and operating documents stay local so the public repository remains focused on the product artifact itself.

이 프로젝트는 코드 구조, 타입 기반 콘텐츠 계약, SEO 메타데이터, 품질 게이트를 통해 공개 가능한 기준을 드러냅니다. 내부 기획 노트와 운영 문서는 로컬에만 보관해 공개 레포지토리가 제품 산출물 중심으로 읽히도록 유지합니다.

## Tech Stack / 기술 스택

| Layer             | Technology            |
| ----------------- | --------------------- |
| Framework         | Next.js 16 App Router |
| Language          | TypeScript            |
| UI                | React 19              |
| Styling           | Tailwind CSS v4       |
| Motion            | Framer Motion         |
| Icons             | lucide-react          |
| Validation        | Zod                   |
| Deployment target | Vercel                |
| Package manager   | npm                   |

## Quality Gates / 품질 게이트

```bash
npm run lint
npm run typecheck
npm run build
```

CI runs the same checks on pull requests and pushes to the configured branches. Pull request CI is allowed to use sanitized fallback content so reviewers can verify the public codebase without private Notion access.

CI는 pull request와 설정된 브랜치 push에서 동일한 검사를 실행합니다. Pull request CI는 비공개 Notion 접근 없이도 공개 코드베이스를 검증할 수 있도록 sanitized fallback 콘텐츠 사용을 허용합니다.

## Local Development / 로컬 개발

```bash
npm install
npm run dev
```

To use real private content, configure `.env.local` from `.env.example` and run:

실제 비공개 콘텐츠를 사용하려면 `.env.example`을 기준으로 `.env.local`을 설정한 뒤 실행합니다.

```bash
npm run content:sync
```

The generated CMS output is written to `content/generated/` and is intentionally ignored by git.

CMS generated output은 `content/generated/`에 생성되며 의도적으로 git에서 제외됩니다.

Production deployment must have one of the strict content flags enabled:

프로덕션 배포에서는 strict content 플래그 중 하나가 활성화되어야 합니다.

```bash
YJ_CONTENT_STRICT=true npm run build
# or VERCEL_ENV=production on Vercel
```

Additional checks / 추가 검사:

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment Checklist / 배포 체크리스트

- `yjcode.org` is configured as the canonical production domain.
- `www.yjcode.org` permanently redirects to `https://yjcode.org`.
- Production environment variables for the Notion content sync are configured.
- `content/generated/site-content.json` is generated before strict production build.
- `YJ_CONTENT_STRICT=true` or `VERCEL_ENV=production` is active for production builds.
- `npm run lint`, `npm run typecheck`, and `npm run build` pass before merging.
- Google Search Console and Naver Search Advisor can be connected after DNS propagation.

- `yjcode.org`를 canonical production domain으로 설정합니다.
- `www.yjcode.org`는 `https://yjcode.org`로 permanent redirect합니다.
- Notion content sync를 위한 production 환경 변수를 설정합니다.
- strict production build 전에 `content/generated/site-content.json`을 생성합니다.
- production build에서는 `YJ_CONTENT_STRICT=true` 또는 `VERCEL_ENV=production`이 활성화되어야 합니다.
- merge 전에 `npm run lint`, `npm run typecheck`, `npm run build`가 통과해야 합니다.
- DNS 전파 이후 Google Search Console과 Naver Search Advisor를 연결할 수 있습니다.

## Roadmap / 로드맵

Near-term engineering milestones:

- project detail routes with case-study structure
- service detail routes with stronger SEO metadata and conversion copy
- SaaS and business platform service narratives
- Open Graph image support
- blog content model with tags, table of contents, and code rendering
- refined motion presets with accessibility and reduced-motion variants
- Notion field mapping hardening for projects, posts, services, and site copy

단기 엔지니어링 마일스톤:

- 케이스 스터디 구조를 갖춘 프로젝트 상세 라우트
- 강화된 SEO metadata와 전환 카피를 갖춘 서비스 상세 라우트
- SaaS 및 비즈니스 플랫폼 서비스 서사
- Open Graph 이미지 지원
- 태그, 목차, 코드 렌더링을 포함한 블로그 콘텐츠 모델
- 접근성과 reduced-motion을 고려한 모션 preset
- 프로젝트, 글, 서비스, 사이트 카피를 위한 Notion 필드 매핑 강화

## Author / 작성자

**YJ CODE**

SaaS development, business web platforms, polished product interfaces, and UI/UX-driven software.

SaaS 개발, 비즈니스 웹 플랫폼, 완성도 높은 제품 인터페이스, UI/UX 중심 소프트웨어를 다룹니다.
