<div align="center">

```
██╗   ██╗     ██╗     ██████╗ ██████╗ ██████╗ ███████╗
╚██╗ ██╔╝     ██║    ██╔════╝██╔═══██╗██╔══██╗██╔════╝
 ╚████╔╝      ██║    ██║     ██║   ██║██║  ██║█████╗
  ╚██╔╝  ██   ██║    ██║     ██║   ██║██║  ██║██╔══╝
   ██║   ╚█████╔╝    ╚██████╗╚██████╔╝██████╔╝███████╗
   ╚═╝    ╚════╝      ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
```

**브랜드 포트폴리오 플랫폼** · **기술 아카이브** · **프로젝트 쇼케이스**

*Brand Portfolio Platform · Technical Archive · Project Showcase*

---

[![Build](https://img.shields.io/github/actions/workflow/status/yjcode/portfolio/ci.yml?style=flat-square&label=build)](.)
[![Deploy](https://img.shields.io/badge/deploy-vercel-black?style=flat-square&logo=vercel)](.)
[![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?style=flat-square&logo=next.js)](.)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square&logo=typescript)](.)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](.)

</div>

---

## Overview · 개요

이 프로젝트는 단순한 개인 웹사이트가 아닙니다.
*This project is designed as more than a simple personal website.*

**YJ CODE**는 개발자 브랜드로서, 기술적 깊이와 섬세한 디자인 감각을 하나의 웹 경험으로 통합합니다.
*YJ CODE presents developer brand with both technical depth and refined design sense.*

| 역할 / Role | 설명 / Description |
|---|---|
| 🏷 **브랜드 사이트** · *Brand Site* | YJ CODE 브랜드 정체성 확립 · *Establishing brand identity* |
| 🗂 **포트폴리오 플랫폼** · *Portfolio Platform* | 선별된 프로젝트 쇼케이스 · *Curated project showcase* |
| 📚 **기술 아카이브** · *Technical Archive* | 엔지니어링 노트 및 케이스 스터디 · *Engineering notes & case studies* |

---

## Core Goals · 핵심 목표

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ◆  폴리싱된 포트폴리오 플랫폼 구축                        │
│      Build a polished portfolio platform for YJ CODE    │
│                                                         │
│   ◆  강력한 기술 맥락으로 선별 작품 쇼케이스                  │
│      Showcase selected works with strong technical      │
│      context                                            │
│                                                         │
│   ◆  유지 가능한 콘텐츠 기반 아키텍처 구현                    │
│      Create a maintainable content-driven architecture  │
│                                                         │
│   ◆  GitHub Actions + Vercel CI/CD 파이프라인 구성          │
│      Establish a clean CI/CD workflow                   │
│                                                         │
│   ◆  웹사이트 자체를 포트폴리오 worthy 프로젝트으로            │
│      Turn the website itself into a portfolio project   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Audience · 대상

```
Primary  ┌──────────────────────┐
주요 대상  │  🎯 Hiring Managers   │  채용 담당자
         │     채용 매니저        │
         └──────────────────────┘

Secondary ┌─────────────────────────────────────────────────┐
부가 대상  │  💼 Freelance Clients   프리랜서 클라이언트         │
         │  🤝 Collaborators       협업 파트너               │
         │  👩‍💻 Fellow Developers   개발자 커뮤니티            │
         └─────────────────────────────────────────────────┘
```

---

## Tech Stack · 기술 스택

```
┌─────────────────────────────────────────────────────────────────┐
│  FRONTEND                                                       │
│  ─────────────────────────────────────────────────────────────  │
│  Next.js (App Router)    ·  서버 사이드 렌더링 · 최신 라우팅 구조    │
│  TypeScript              ·  타입 안전성 · 유지보수 용이성            │
│  Tailwind CSS            ·  유틸리티 퍼스트 스타일링               │
│  shadcn/ui               ·  재사용 가능한 UI 컴포넌트 라이브러리     │
│  Framer Motion           ·  선언적 애니메이션 · 인터랙션            │
│                                                                 │
│  CONTENT                                                        │
│  ─────────────────────────────────────────────────────────────  │
│  MDX                     ·  마크다운 + JSX 혼합 콘텐츠 시스템       │
│                                                                 │
│  INFRA                                                          │
│  ─────────────────────────────────────────────────────────────  │
│  GitHub Actions          ·  CI 자동화 · 코드 품질 게이트           │
│  Vercel                  ·  CD · 프리뷰 · 프로덕션 배포            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Project Structure · 프로젝트 구조

```
src/
├── app/
│   ├── (marketing)/              # 마케팅 라우트 그룹
│   │   ├── page.tsx              # / — 홈
│   │   ├── about/page.tsx        # /about — 브랜드 소개
│   │   ├── works/page.tsx        # /works — 프로젝트 쇼케이스
│   │   ├── services/page.tsx     # /services — 개발 역량
│   │   ├── blog/page.tsx         # /blog — 기술 블로그
│   │   ├── lab/page.tsx          # /lab — 실험 공간
│   │   ├── contact/page.tsx      # /contact — 문의
│   │   └── layout.tsx
│   ├── api/
│   │   └── contact/route.ts      # 문의 API 엔드포인트
│   ├── layout.tsx                # 루트 레이아웃
│   └── globals.css
│
├── components/
│   ├── layout/                   # 레이아웃 컴포넌트
│   ├── sections/                 # 페이지 섹션
│   └── ui/                       # 공통 UI 컴포넌트
│
├── domain/
│   ├── project/                  # 프로젝트 도메인 로직
│   └── post/                     # 포스트 도메인 로직
│
└── lib/
    ├── content/                  # 콘텐츠 유틸리티
    ├── seo/                      # SEO 헬퍼
    └── utils/                    # 공통 유틸리티

content/
├── projects/                     # 프로젝트 MDX 파일
└── posts/                        # 블로그 포스트 MDX 파일
```

---

## Planned Pages · 페이지 구성

| 경로 / Route | 목적 / Purpose |
|---|---|
| `/` | 홈 · *Home — First impression* |
| `/about` | 브랜드 및 개인 소개 · *Brand and personal introduction* |
| `/works` | 선별 프로젝트 쇼케이스 · *Selected project showcase* |
| `/services` | 개발 역량 및 협업 범위 · *Development capabilities & collaboration scope* |
| `/blog` | 기술 글쓰기 및 엔지니어링 노트 · *Technical writing & engineering notes* |
| `/lab` | 실험 및 소규모 빌드 탐구 · *Experiments & small explorations* |
| `/contact` | 연락 및 문의 · *Contact and inquiry* |

---

## Development Principles · 개발 원칙

```
  clarity over clutter          명확함 > 잡음
  ─────────────────────────────────────────────────

  structure over decoration     구조 > 장식
  ─────────────────────────────────────────────────

  maintainability over shortcuts  유지보수성 > 지름길
  ─────────────────────────────────────────────────

  brand consistency across pages  일관된 브랜드
  ─────────────────────────────────────────────────

  portfolio storytelling          시각 그 이상의 스토리텔링
  ─────────────────────────────────────────────────
```

---

## CI/CD Pipeline · 배포 파이프라인

### CI — GitHub Actions

```
  Push / PR
      │
      ▼
  ┌─────────────────────────────────────┐
  │  GitHub Actions                     │
  │                                     │
  │  ① lint check     코드 스타일 검사    │
  │  ② type check     타입 오류 검사      │
  │  ③ build verify   프로덕션 빌드 확인  │
  └─────────────────────────────────────┘
```

### CD — Vercel

```
  ┌───────────────────────────────────────────┐
  │  브랜치 / PR  ──→  Preview Deployment     │
  │                    프리뷰 배포             │
  │                                           │
  │  main 브랜치  ──→  Production Deployment  │
  │                    프로덕션 배포           │
  └───────────────────────────────────────────┘
```

---

## Getting Started · 시작하기

```bash
# 의존성 설치 · Install dependencies
npm install

# 개발 서버 실행 · Run the development server
npm run dev

# 린트 실행 · Run lint
npm run lint

# 타입 검사 · Run type check
npm run typecheck

# 프로덕션 빌드 · Create a production build
npm run build
```

---

## Current Status · 현재 상태

> **Foundation Phase · 파운데이션 단계** 🔧

현재 초기 기반 구축에 집중하고 있습니다.
*The project is currently in the foundation phase.*

- [x] 프로젝트 구조 · Project structure
- [x] 디자인 방향 설정 · Design direction
- [x] 라우트 아키텍처 · Route architecture
- [x] 콘텐츠 모델 · Content model
- [x] CI/CD 설정 · CI/CD setup
- [ ] 포트폴리오 시스템 구현 · Portfolio system implementation

---

## Why This Project Matters · 이 프로젝트가 중요한 이유

```
  1. YJ CODE의 공개 포트폴리오 플랫폼
     A public-facing portfolio platform for YJ CODE

     현재 작업과 역량을 세상에 보여주는 창구
     The window that shows current work and capabilities to the world


  2. 현대 포트폴리오 제품의 실증 사례
     A documented example of a modern portfolio product

     기획 → 구조화 → 구현 → 배포 전 과정을 담은 살아있는 문서
     A living document of the full lifecycle: plan → structure → build → deploy


  단순한 쇼케이스 페이지가 아닌 장기적 브랜드 자산으로 개발됩니다.
  Being developed as a long-term brand asset, not a one-time showcase page.
```

---

## Author · 저자

<div align="center">

**YJ CODE**

*Polished digital products. Strong engineering structure. Thoughtful visual execution.*

*탄탄한 엔지니어링 구조와 섬세한 시각적 실행으로 정제된 디지털 제품을 만드는 개발자 브랜드.*

---

*Built with intention. Documented with care.*
*의도를 가지고 구축하고, 정성으로 기록합니다.*

</div>
