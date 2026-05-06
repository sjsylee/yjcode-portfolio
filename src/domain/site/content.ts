export const siteNavItems = [
  { href: "/about", label: "소개", labelEn: "About" },
  { href: "/works", label: "작업", labelEn: "Works" },
  { href: "/services", label: "서비스", labelEn: "Services" },
  { href: "/blog", label: "기록", labelEn: "Blog" },
  { href: "/lab", label: "실험", labelEn: "Lab" },
  { href: "/contact", label: "문의", labelEn: "Contact" },
] as const;

export const coreSignals = [
  {
    label: "제품 설계",
    title: "화면보다 먼저 흐름을 잡습니다",
    description:
      "서비스 구조, 사용자의 이동, 기능 우선순위를 함께 정리해 실제로 운영 가능한 제품 경험을 만듭니다.",
  },
  {
    label: "비즈니스 웹",
    title: "검색과 문의가 이어지는 웹",
    description:
      "SaaS 개발, 비즈니스 플랫폼, 브랜드 웹사이트가 검색 유입과 문의 전환까지 자연스럽게 이어지도록 설계합니다.",
  },
  {
    label: "인터페이스 감도",
    title: "기억에 남지만 사용성을 잃지 않습니다",
    description:
      "전위적인 레이아웃과 모션을 쓰되, 읽기, 탐색, 접근성, 모바일 완성도를 제품 기준 안에서 유지합니다.",
  },
] as const;

export const services = [
  {
    slug: "saas-product-development",
    title: "SaaS 제품 개발",
    eyebrow: "기능형 제품 구축",
    summary:
      "SaaS 제품과 업무 흐름을 명확한 정보 구조, 유지보수 가능한 코드, 감도 높은 UI/UX를 갖춘 소프트웨어로 구축합니다.",
    audience:
      "단순 화면 구현을 넘어 기능 흐름, 제품 구조, 안정적인 웹 애플리케이션 기반이 필요한 팀과 창업자를 위한 서비스입니다.",
    deliverables: [
      "기능 흐름과 제품 구조 설계",
      "반응형 애플리케이션 UI",
      "유지보수 가능한 Next.js 아키텍처",
    ],
  },
  {
    slug: "business-web-platform",
    title: "비즈니스 웹 플랫폼",
    eyebrow: "운영 흐름의 웹 전환",
    summary:
      "내부 도구, 서비스 대시보드, 고객-facing 플랫폼을 실제 영업, 운영, 전달 흐름에 맞춰 설계합니다.",
    audience:
      "판매, 운영, 고객 커뮤니케이션, 서비스 제공 과정을 웹 소프트웨어로 정리해야 하는 팀에 적합합니다.",
    deliverables: [
      "역할과 업무 흐름을 반영한 페이지 구조",
      "입력, 상태, 데이터 확인을 고려한 UI",
      "기능 확장에 견디는 인터페이스 패턴",
    ],
  },
  {
    slug: "website-and-landing",
    title: "웹사이트 및 랜딩페이지 제작",
    eyebrow: "검색과 전환의 표면",
    summary:
      "브랜드 사이트, 랜딩페이지, 포트폴리오 시스템에서 검색 의도, 문의 전환, 전위적 인터랙션 품질을 함께 설계합니다.",
    audience:
      "문의, 런칭, 외부 서비스 채널, 채용 신뢰까지 연결되는 공개 웹 표면이 필요한 비즈니스에 맞습니다.",
    deliverables: [
      "SEO를 고려한 라우트와 메타데이터 구조",
      "문의 전환을 위한 페이지 섹션",
      "접근성을 지키는 실험적 모션과 UI 완성도",
    ],
  },
] as const;

export const featuredWorks = [
  {
    slug: "yjcode-portfolio",
    title: "YJ CODE 포트폴리오 시스템",
    type: "브랜드 플랫폼",
    summary:
      "작업 소개, 서비스 탐색, 기술 기록을 하나의 브랜드 경험으로 연결한 포트폴리오와 SEO 채널입니다.",
    tags: ["Next.js", "SEO", "Framer Motion"],
  },
  {
    slug: "service-seo-architecture",
    title: "서비스 SEO 아키텍처",
    type: "콘텐츠 시스템",
    summary:
      "서비스 검색 의도를 발견 가능한 라우트, 메타데이터, 문의 전환 구조로 바꾸는 전략입니다.",
    tags: ["Metadata", "Sitemap", "Content Strategy"],
  },
  {
    slug: "interaction-lab",
    title: "인터랙션 랩",
    type: "제품 인터랙션 실험",
    summary:
      "전위적인 제품 인터페이스가 탐색성과 이해도를 잃지 않도록 다듬는 작은 모션/UX 실험입니다.",
    tags: ["Motion", "UX", "React"],
  },
] as const;

export const businessProofs = [
  {
    label: "UI/UX 기준",
    title: "예쁜 화면보다 먼저 믿을 수 있는 사용 흐름",
    description:
      "첫 인상, 탐색, 입력, 문의, 재방문까지 이어지는 사용자의 판단 지점을 제품 품질 기준으로 다룹니다.",
  },
  {
    label: "비즈니스 로직",
    title: "수익과 운영으로 이어지는 구조",
    description:
      "판매, 예약, 상담, 콘텐츠, 내부 운영처럼 실제 비즈니스가 움직이는 흐름을 웹 소프트웨어로 정리합니다.",
  },
  {
    label: "작은 시작",
    title: "규모가 작아도 제품처럼 시작",
    description:
      "1인 사업자, 작은 팀, 초기 창업자도 필요한 만큼 시작하고 확장 가능한 기준으로 개발할 수 있게 설계합니다.",
  },
] as const;

export const aiProductionSignals = [
  {
    title: "요구사항을 잃지 않는 제작 컨텍스트",
    description:
      "비즈니스 규칙, 화면 흐름, 콘텐츠 의도, 품질 기준을 한 번의 미팅 메모로 흩어지지 않게 관리합니다.",
  },
  {
    title: "빠른 검증과 사람의 최종 판단",
    description:
      "AI 도구는 조사, 초안, 점검 속도를 높이는 데 쓰고, 제품 판단과 사용자 경험의 책임은 사람이 집니다.",
  },
  {
    title: "보이는 품질 게이트",
    description:
      "디자인 감도만 말하지 않고 접근성, 반응형, 타입 안정성, 빌드 검증까지 공개 가능한 제작 기준으로 남깁니다.",
  },
] as const;

export const homeTrustChannels = [
  {
    href: "/blog",
    label: "Blog",
    title: "검색되는 글",
    description:
      "서비스 검색 의도, 구현 기록, SaaS와 랜딩페이지 제작 판단을 글로 축적합니다.",
  },
  {
    href: "/lab",
    label: "Lab",
    title: "기술 실험",
    description:
      "인터랙션, 아키텍처, UI/UX 실험으로 YJ CODE의 기술적 감각을 검토 가능하게 만듭니다.",
  },
] as const;

export const writingTopics = [
  {
    title: "포트폴리오를 제품처럼 설계하기",
    summary:
      "회사 포트폴리오가 영업, 채용, 기술 문서 역할을 동시에 수행하려면 어떤 구조가 필요한지 정리합니다.",
    category: "아키텍처",
  },
  {
    title: "SEO 카피보다 먼저 라우트 설계",
    summary:
      "검색 전략이 문장보다 라우트, 메타데이터, 내부 링크 구조에서 먼저 시작되는 이유를 기록합니다.",
    category: "SEO",
  },
  {
    title: "UX 부채 없는 제품 모션",
    summary:
      "Framer Motion을 쓰면서도 성능, 접근성, 가독성을 지키기 위한 실무 체크리스트입니다.",
    category: "제품 UI",
  },
] as const;

export const operatingPrinciples = [
  "장식보다 구조",
  "결과보다 판단의 깊이",
  "키워드보다 검색 의도",
  "기능과 제품 흐름의 동시 완성",
  "기억에 남는 전위적 모션",
  "문서까지 제품 완성도로 설계",
] as const;

export const labExperiments = [
  {
    title: "스크롤 반응형 케이스 스터디",
    status: "기획 중",
    description:
      "포트폴리오를 슬라이드쇼로 만들지 않으면서 프로젝트 판단을 점진적으로 드러내는 패턴입니다.",
  },
  {
    title: "서비스 검색 의도 맵",
    status: "기획 중",
    description:
      "서비스 키워드, 랜딩페이지, 블로그 글, 문의 전환 경로를 연결하는 시각 모델입니다.",
  },
  {
    title: "전위적 모션의 접근성 preset",
    status: "기획 중",
    description:
      "브랜드 에너지를 유지하면서 reduced-motion, 접근성, 성능 제약을 함께 통과하는 모션 변형입니다.",
  },
] as const;
