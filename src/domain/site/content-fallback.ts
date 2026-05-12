import type { SiteContent } from "./content-schema";

export const fallbackSiteContent = {
  services: [
    {
      slug: "product-web-systems",
      title: "제품형 웹 시스템 설계와 구현",
      eyebrow: "Product Systems",
      summary:
        "서비스 구조, 운영 흐름, 관리자 경험, 전환 동선을 제품 흐름으로 설계합니다.",
      audience:
        "아이디어는 있지만 제품 구조와 첫 출시 범위를 함께 잡아줄 개발 파트너가 필요한 팀에 맞습니다.",
      deliverables: ["서비스 구조 설계", "프론트엔드와 백오피스 구현", "출시 전 품질 점검"],
    },
  ],
  works: [
    {
      slug: "private-product-work",
      title: "비공개 제품 구축 경험",
      type: "Product Build",
      summary:
        "운영자와 사용자가 함께 쓰는 웹 서비스에서 정보 구조, 화면 흐름, 구현 안정성을 함께 다뤄왔습니다.",
      tags: ["Product UX", "Business Logic"],
      visibility: "public",
    },
  ],
  posts: [
    {
      slug: "small-start-product-grade",
      title: "작게 시작해도 제품처럼 만들어야 하는 이유",
      summary:
        "규모가 작을수록 화면, 데이터, 운영 흐름의 기준이 먼저 잡혀야 이후의 비용을 줄일 수 있습니다.",
      category: "Product",
      channel: "technical",
      intent: "engineering-trust",
      status: "published",
      indexable: false,
      publishedAt: "2026-05-11",
      updatedAt: "2026-05-11",
      keywords: ["제품형 웹 개발", "비즈니스 웹 시스템", "YJ CODE"],
      body: [
        "작은 서비스라도 고객이 보는 화면, 운영자가 처리하는 데이터, 문의와 결제 이후의 흐름은 서로 연결되어 있습니다.",
        "YJ CODE는 첫 출시 범위를 작게 잡더라도 이후 확장과 운영을 견딜 수 있는 구조를 우선합니다.",
      ],
    },
  ],
  siteCopy: {
    businessProofs: [
      {
        label: "01",
        title: "작게 시작해도 제품의 기준은 낮추지 않습니다",
        description:
          "첫 버전부터 화면, 데이터, 운영 흐름이 서로 맞물리도록 설계해 이후의 수정 비용을 줄입니다.",
      },
    ],
    aiProductionSignals: [
      {
        title: "속도는 도구로, 기준은 사람으로",
        description:
          "에이전트가 반복을 줄이는 만큼, 제품의 우선순위와 완성도는 더 날카롭게 검토합니다.",
      },
      {
        title: "더 많은 가능성을 빠르게 검토",
        description:
          "초기 방향을 하나로 고정하지 않고, 화면과 구조의 선택지를 빠르게 비교합니다.",
      },
      {
        title: "출시 기준까지 함께 설계",
        description:
          "화면이 완성되는 순간이 아니라, 운영자가 실제로 쓸 수 있는 지점까지 확인합니다.",
      },
    ],
    homeTrustChannels: [
      {
        href: "/blog",
        label: "Blog",
        title: "기록",
        description: "제품 구현, UI 판단, 운영 구조에 대한 생각을 축적합니다.",
      },
      {
        href: "/contact",
        label: "Contact",
        title: "문의",
        description: "프로젝트 맥락을 공유하는 시작점입니다.",
      },
    ],
    contactNotes: [
      "프로젝트 목적",
      "필요한 기능과 페이지",
      "일정과 예산 범위",
    ],
  },
} satisfies SiteContent;
