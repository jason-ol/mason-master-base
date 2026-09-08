/**
 * MASON_BASE_01 — 단일 설정 파일
 * 고객사 파생 시 원칙적으로 이 파일만 수정합니다.
 */

export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type FaqItem = { question: string; answer: string };
export type ProcessStep = { step: string; title: string; description: string };
export type UseCase = { industry: string; problem: string; result: string };

export const site = {
  businessName: "메이슨 컨설팅",
  tagline: "상담 한 번으로 정리되는 실행 계획",
  description:
    "복잡한 문제를 진단하고, 우선순위와 일정까지 담은 실행안을 드립니다. 첫 상담은 무료입니다.",

  // 브랜드 컬러 (oklch 권장 — src/styles.css 토큰과 연결)
  primaryColor: "oklch(0.38 0.07 250)",
  accentColor: "oklch(0.62 0.13 205)",

  phone: "02-0000-0000",
  email: "contact@example.com",
  secondaryContactUrl: "https://open.kakao.com/",
  secondaryContactLabel: "카카오톡 상담",
  address: "서울특별시 중구 예시로 00, 3층",
  businessHours: "평일 09:00 – 18:00 (점심 12:00 – 13:00 / 주말·공휴일 휴무)",

  primaryCTA: { label: "무료 상담 신청", href: "#contact" },
  secondaryCTA: { label: "전화 문의", href: "tel:0200000000" },

  problem: {
    title: "이런 상황이라면 상담이 필요합니다",
    target: "성장 단계에서 의사결정이 막힌 중소기업·전문서비스 조직",
    pains: [
      "무엇부터 손대야 할지 우선순위가 정리되지 않는다",
      "담당자마다 말이 달라 내부 합의가 지연된다",
      "견적과 범위가 불투명해 시작을 미루게 된다",
      "실행은 했는데 성과를 숫자로 확인하기 어렵다",
    ],
  },

  services: [
    {
      title: "진단 컨설팅",
      description: "현재 상태를 데이터와 인터뷰로 점검해 병목을 찾아냅니다.",
      bullets: ["현황 인터뷰", "지표 기반 진단", "우선순위 리포트"],
    },
    {
      title: "실행 설계",
      description: "실행 가능한 단위로 과제를 쪼개고 일정과 담당을 정합니다.",
      bullets: ["로드맵 수립", "역할·일정 정의", "예산 시나리오"],
    },
    {
      title: "운영 지원",
      description: "실행 기간 동안 정기 점검으로 계획이 흐트러지지 않게 합니다.",
      bullets: ["월간 점검 미팅", "성과 리포트", "이슈 대응"],
    },
  ] as Service[],

  trust: {
    title: "선택하시는 이유",
    stats: [
      { value: "12년", label: "업력" },
      { value: "240+", label: "누적 프로젝트" },
      { value: "96%", label: "상담 후 만족 응답" },
      { value: "48시간", label: "평균 회신 시간" },
    ],
    credentials: [
      "기업부설연구소 인증 (예시)",
      "ISO 9001 품질경영 인증 (예시)",
      "중소벤처기업부 지원사업 수행 (예시)",
    ],
    testimonials: [
      {
        quote: "무엇을 먼저 해야 하는지 한 페이지로 정리됐습니다.",
        author: "제조업 A사 · 대표",
      },
      {
        quote: "내부에서 두 달 끌던 논의가 상담 두 번에 끝났습니다.",
        author: "전문서비스 B사 · 실장",
      },
    ],
    // 후기·인증은 반드시 고객사 실제 자료로 교체하고 근거를 검증하세요.
    disclaimer: "위 수치와 후기는 템플릿 예시이며 실제 실적이 아닙니다.",
  },

  process: [
    { step: "01", title: "문의 접수", description: "폼 또는 전화로 상황을 알려주세요." },
    { step: "02", title: "사전 진단", description: "필요한 자료를 정리해 사전 검토합니다." },
    { step: "03", title: "상담 미팅", description: "40분 상담으로 과제와 범위를 확정합니다." },
    { step: "04", title: "제안·견적", description: "일정과 비용을 문서로 제공합니다." },
    { step: "05", title: "실행·점검", description: "정기 리포트로 진행 상황을 공유합니다." },
  ] as ProcessStep[],

  useCases: [
    {
      industry: "제조",
      problem: "신규 라인 투자 판단 근거가 부족했습니다.",
      result: "3개 시나리오 비교로 투자 시점을 6개월 조정했습니다.",
    },
    {
      industry: "전문서비스",
      problem: "문의는 오는데 계약 전환이 낮았습니다.",
      result: "상담 스크립트 재설계로 전환 흐름을 정리했습니다.",
    },
    {
      industry: "로컬서비스",
      problem: "예약 문의가 여러 채널로 흩어져 누락됐습니다.",
      result: "접수 경로를 통합해 응대 누락을 줄였습니다.",
    },
  ] as UseCase[],

  faq: [
    {
      question: "첫 상담 비용이 있나요?",
      answer: "첫 상담 40분은 무료이며, 이후 진행 여부는 자유롭게 결정하시면 됩니다.",
    },
    {
      question: "상담까지 얼마나 걸리나요?",
      answer: "문의 접수 후 영업일 기준 48시간 내에 담당자가 연락드립니다.",
    },
    {
      question: "어떤 자료를 준비해야 하나요?",
      answer: "현재 상황을 정리한 간단한 메모면 충분합니다. 필요한 자료는 상담 시 안내드립니다.",
    },
    {
      question: "비용은 어떻게 산정되나요?",
      answer: "과제 범위와 기간에 따라 산정하며, 착수 전 서면 견적을 드립니다.",
    },
    {
      question: "원격으로도 가능한가요?",
      answer: "화상 상담과 방문 상담 모두 가능합니다.",
    },
  ] as FaqItem[],

  finalCTA: {
    title: "지금 상황만 알려주세요",
    description: "무엇을 먼저 해야 할지, 첫 상담에서 정리해 드립니다.",
  },

  privacyNotice:
    "수집 항목: 이름, 연락처, 문의내용 / 목적: 상담 회신 / 보유기간: 상담 종료 후 1년. 고객사 개인정보 처리방침에 맞게 반드시 수정하세요.",

  seo: {
    title: "메이슨 컨설팅 — 상담 한 번으로 정리되는 실행 계획",
    description:
      "현황 진단부터 실행 설계, 운영 점검까지. 영업일 48시간 내 회신, 첫 상담 40분 무료. 지금 상담을 신청하세요.",
  },

  nav: [
    { label: "서비스", href: "#services" },
    { label: "신뢰", href: "#trust" },
    { label: "진행 절차", href: "#process" },
    { label: "사례", href: "#usecases" },
    { label: "자주 묻는 질문", href: "#faq" },
    { label: "문의", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof site;
