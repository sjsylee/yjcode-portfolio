# YJ CODE Portfolio

<div align="center">

```txt
YJ CODE.
```

**Brand portfolio platform · Service channel · Technical archive**

**브랜드 포트폴리오 플랫폼 · 서비스 채널 · 기술 아카이브**

[![Build](https://img.shields.io/github/actions/workflow/status/sjsylee/yjcode-portfolio/ci.yml?style=flat-square&label=build)](.)
[![Deploy](https://img.shields.io/badge/deploy-vercel-black?style=flat-square&logo=vercel)](.)
[![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?style=flat-square&logo=next.js)](.)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square&logo=typescript)](.)

</div>

An interactive portfolio and service platform for **YJ CODE**, a software studio building SaaS products, business web platforms, and UI/UX-driven digital products with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

**YJ CODE**의 포트폴리오, 서비스 탐색, 기술 기록을 하나의 제품 표면으로 연결한 인터랙티브 웹 플랫폼입니다. YJ CODE는 단순 프론트엔드 구현을 넘어 SaaS, 비즈니스 웹 플랫폼, UI/UX 중심 소프트웨어를 개발하는 스튜디오입니다.

This repository is designed to be evaluated in two ways:

- as a public-facing website for portfolio work, service discovery, and technical writing
- as an engineering artifact that demonstrates product architecture, UX judgment, SEO awareness, and maintainable implementation

이 레포지토리는 두 가지 관점에서 평가될 수 있도록 설계되었습니다.

- 포트폴리오, 서비스 안내, 기술 글을 제공하는 공개 웹사이트
- 제품 아키텍처, UX 판단, SEO 이해도, 유지보수 가능한 구현을 보여주는 엔지니어링 산출물

## What This Project Demonstrates / 프로젝트가 보여주는 것

| Area              | Evidence                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Product thinking  | Portfolio storytelling, service conversion, and technical credibility are combined in one route system.                 |
| Software delivery | SaaS, service platforms, and business-facing web products are framed as complete software rather than isolated screens. |
| UI/UX craft       | Structured layouts, responsive composition, and motion are used as part of the product experience.                      |
| SEO architecture  | Service, work, and writing sections are separated by search intent and supported by page-level metadata.                |
| Maintainability   | Content constants, layout components, route ownership, and quality scripts keep the foundation readable.                |
| Documentation     | The README, engineering constraints, and PR checklist make product direction and quality expectations explicit.         |

| 영역                 | 근거                                                                                           |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| 제품 사고            | 포트폴리오 스토리텔링, 서비스 전환, 기술 신뢰를 하나의 라우트 구조 안에서 연결합니다.          |
| 소프트웨어 개발 역량 | SaaS, 서비스 플랫폼, 비즈니스 웹 제품을 단순 화면이 아닌 완성형 소프트웨어로 다룹니다.         |
| UI/UX 완성도         | 구조화된 레이아웃, 반응형 구성, 모션을 제품 경험의 일부로 사용합니다.                          |
| SEO 아키텍처         | 서비스, 작업, 글 영역을 검색 의도에 따라 분리하고 페이지별 메타데이터를 적용합니다.            |
| 유지보수성           | 콘텐츠 상수, 레이아웃 컴포넌트, 라우트 책임, 품질 스크립트로 기반 구조를 읽기 쉽게 유지합니다. |
| 문서화               | README, 엔지니어링 제약, PR 체크리스트로 제품 방향과 품질 기준을 명확히 합니다.                |

## Product Surface / 제품 표면

YJ CODE Portfolio is organized around three user journeys.

YJ CODE Portfolio는 세 가지 사용자 흐름을 중심으로 구성됩니다.

| Journey           | Routes                           | Purpose                                                                                                                                |
| ----------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Service discovery | `/`, `/services`, `/contact`     | Present the home route as a conversion-focused studio landing page for SaaS, business web platforms, and landing page production.      |
| Portfolio review  | `/works`                         | Present selected work as case-study material instead of a visual gallery only.                                                         |
| Technical trust   | `/blog`, `/lab`, repository docs | Separate SEO-oriented writing from technical experiments so search users and engineering reviewers can enter through the right surface. |

| 흐름            | 라우트                           | 목적                                                                                                         |
| --------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 서비스 탐색     | `/`, `/services`, `/contact`     | 홈을 SaaS, 비즈니스 웹 플랫폼, 랜딩페이지 제작 문의로 이어지는 전환 중심 스튜디오 랜딩페이지로 구성합니다.   |
| 포트폴리오 검토 | `/works`                         | 작업 결과를 단순 갤러리가 아니라 케이스 스터디로 보여줍니다.                                                 |
| 기술 신뢰       | `/blog`, `/lab`, repository docs | SEO 지향 글과 기술 실험을 분리해 검색 사용자와 엔지니어링 리뷰어가 서로 다른 표면으로 진입할 수 있게 합니다. |

## Current Features / 현재 기능

- Marketing route group with home, about, works, services, blog, lab, and contact pages
- Korean-first public UI copy and navigation for domestic hiring and client audiences
- Brand-first home landing page with cinematic studio imagery, Agrandir wordmark typography, large rotating Korean refusal copy, and reduced-motion support
- Shared studio subpage system for About, Services, Works, Blog, Lab, and Contact
- AI-aware production messaging that frames AI as a way to keep requirements, business logic, UI flow, and quality standards more verifiable
- Shared site content model in `src/domain/site/content.ts`
- Page-level metadata for major public routes
- Reusable layout shell with global header and footer
- Contact API route foundation
- CI workflow for lint, typecheck, and production build
- Engineering constraints and PR checklist for preserving product direction

- 홈, 소개, 작업, 서비스, 블로그, 실험실, 문의 페이지를 포함한 마케팅 라우트 그룹
- 국내 채용 및 고객 맥락을 우선한 한국어 중심 공개 UI와 내비게이션
- 시네마틱 스튜디오 이미지, Agrandir 워드마크, 큰 회전형 한국어 거부 문구, reduced-motion을 포함한 브랜드 우선 홈 랜딩페이지
- About, Services, Works, Blog, Lab, Contact에 적용되는 공유 studio subpage system
- 요구사항, 비즈니스 로직, UI 흐름, 품질 기준을 더 검증 가능하게 관리하는 AI-aware 제작 방식 메시지
- `src/domain/site/content.ts`의 공유 사이트 콘텐츠 모델
- 주요 공개 라우트의 페이지별 metadata
- 전역 Header/Footer를 포함한 재사용 레이아웃 구조
- Contact API route 기반
- lint, typecheck, production build를 검증하는 CI workflow
- 제품 방향을 유지하기 위한 엔지니어링 제약과 PR 체크리스트

## Architecture / 아키텍처

```txt
src/
  app/
    (marketing)/
      page.tsx
      about/page.tsx
      works/page.tsx
      services/page.tsx
      blog/page.tsx
      lab/page.tsx
      contact/page.tsx
    api/
      contact/route.ts
  components/
    layout/
    sections/
  domain/
    site/
      content.ts
  lib/
    utils/
  types/
```

Content currently lives in typed domain constants. This keeps page structure, messaging, and component boundaries explicit while leaving room for a CMS-backed content pipeline later.

현재 콘텐츠는 타입이 있는 도메인 상수로 관리합니다. 이를 통해 페이지 구조, 메시지, 컴포넌트 경계를 명확히 유지하면서 이후 CMS 기반 콘텐츠 파이프라인으로 확장할 수 있습니다.

## Design Direction / 디자인 방향

The visual system is intentionally black, editorial, Korean-first, and more avant-garde than a conventional developer portfolio. The home route now opens as a brand-first hero poster: the `YJ CODE.` wordmark is the primary first-viewport signal, a cinematic product-studio visual plane supports the mood, and the rotating refusal phrase is large enough to carry the service attitude. Subpages share a studio page system with oversized Korean titles, cool silver-blue accents, faint brand atmosphere, and line-based editorial rows instead of generic card grids. Motion creates brand memory, tension, and attention, while the page structure remains scannable for Korean clients, recruiters, and engineers.

시각 시스템은 블랙 계열, editorial, 한국어 우선이며 일반적인 개발자 포트폴리오보다 더 전위적인 인터페이스를 지향합니다. 홈은 이제 브랜드 우선 히어로 포스터로 시작합니다. 첫 화면에서 `YJ CODE.` 워드마크가 가장 강한 신호가 되고, 시네마틱 제품-스튜디오 비주얼이 분위기를 받치며, 회전하는 거부 문구가 서비스 태도를 충분히 크게 전달합니다. 서브페이지는 큰 한국어 제목, 쿨 실버-블루 액센트, 희미한 브랜드 분위기, 카드가 아닌 선 기반 editorial row를 공유하는 studio page system을 사용합니다. 모션은 브랜드 인상, 긴장감, 시선 흐름을 만들기 위해 사용하고, 동시에 국내 클라이언트, 채용담당자, 엔지니어가 빠르게 훑을 수 있는 정보 구조를 유지합니다.

Design constraints:

- first viewport must immediately communicate YJ CODE as the dominant brand signal
- the hero visual should feel like a cinematic product production studio, not a generic SaaS dashboard collage
- subpages should use the shared studio page system before adding page-specific visual modules
- navigation must remain predictable
- Korean should carry the primary public website journey
- public UI copy should read as external-facing studio/product copy, never internal agent or implementation notes
- the `YJ CODE.` wordmark uses a bundled Agrandir Grand Light OTF asset; commercial production use still requires a verified commercial license because the referenced download page lists personal-use-only terms
- service CTAs must be easy to find
- portfolio sections must explain decisions, not only outcomes
- software positioning must include functionality, product thinking, and UI/UX quality together
- animation should feel experimental through text rhythm and scroll transitions, not through distracting always-on background movement
- AI-related positioning should describe verifiable production quality rather than raw trend labels or internal engineering vocabulary

디자인 제약:

- 첫 화면에서 YJ CODE가 가장 강한 브랜드 신호로 즉시 인식되어야 합니다.
- 히어로 비주얼은 일반적인 SaaS 대시보드 콜라주가 아니라 시네마틱 제품 제작실처럼 느껴져야 합니다.
- 서브페이지는 페이지별 시각 모듈을 추가하기 전에 공유 studio page system을 먼저 사용해야 합니다.
- 내비게이션은 예측 가능해야 합니다.
- 공개 웹사이트의 주요 사용자 흐름은 한국어가 담당해야 합니다.
- 공개 UI 문구는 내부 에이전트 메모나 구현 설명이 아니라 외부 방문자를 위한 스튜디오/제품 카피여야 합니다.
- `YJ CODE.` 워드마크는 번들된 Agrandir Grand Light OTF asset을 사용합니다. 단, 참조 다운로드 페이지가 개인 사용 전용 조건을 명시하므로 상업 운영 배포 전에는 별도 상업 라이선스 확인이 필요합니다.
- 서비스 CTA는 쉽게 발견되어야 합니다.
- 포트폴리오 섹션은 결과뿐 아니라 의사결정을 설명해야 합니다.
- 소프트웨어 포지셔닝은 기능, 제품 사고, UI/UX 품질을 함께 포함해야 합니다.
- 애니메이션은 산만한 상시 배경 움직임보다 텍스트 리듬과 스크롤 전환으로 전위성을 만듭니다.
- AI 관련 포지셔닝은 트렌드 용어나 내부 엔지니어링 용어보다 검증 가능한 제작 품질로 설명합니다.

## SEO Direction / SEO 방향

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

## Engineering Standards / 엔지니어링 기준

The project includes written engineering constraints for product direction, SEO intent, UI/UX behavior, repository credibility, and README maintenance:

제품 방향, SEO 의도, UI/UX 동작, 레포지토리 신뢰도, README 유지보수를 위한 엔지니어링 제약 문서를 포함합니다.

- [Project Harness](docs/project-harness.md)

The pull request template mirrors these standards so review criteria remain visible during development.

PR 템플릿에도 동일한 기준을 반영해 개발 과정에서 리뷰 기준이 계속 드러나도록 구성했습니다.

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

CI runs the same checks on pull requests and pushes to the configured branches.

CI는 pull request와 설정된 브랜치 push에서 동일한 검사를 실행합니다.

## Local Development / 로컬 개발

```bash
npm install
npm run dev
```

Additional checks / 추가 검사:

```bash
npm run lint
npm run typecheck
npm run build
```

## Roadmap / 로드맵

Near-term engineering milestones:

- project detail routes with case-study structure
- service detail routes with stronger SEO metadata and conversion copy
- SaaS and business platform service narratives
- sitemap, robots, canonical metadata, and Open Graph image support
- blog content model with tags, table of contents, and code rendering
- refined motion presets with accessibility and reduced-motion variants
- CMS evaluation for projects, posts, and service content

단기 엔지니어링 마일스톤:

- 케이스 스터디 구조를 갖춘 프로젝트 상세 라우트
- 강화된 SEO metadata와 전환 카피를 갖춘 서비스 상세 라우트
- SaaS 및 비즈니스 플랫폼 서비스 서사
- sitemap, robots, canonical metadata, Open Graph 이미지 지원
- 태그, 목차, 코드 렌더링을 포함한 블로그 콘텐츠 모델
- 접근성과 reduced-motion을 고려한 모션 preset
- 프로젝트, 글, 서비스 콘텐츠를 위한 CMS 검토

## Author / 작성자

**YJ CODE**

SaaS development, business web platforms, polished product interfaces, and UI/UX-driven software.

SaaS 개발, 비즈니스 웹 플랫폼, 완성도 높은 제품 인터페이스, UI/UX 중심 소프트웨어를 다룹니다.
