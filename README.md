# MASON_BASE_01 — 상담·문의형 홈페이지 MASTER

메이슨랩의 재사용 가능한 1페이지 상담·문의형 홈페이지 **DEMO 템플릿**입니다.
병원 / 학원 / B2B 제조 / 전문서비스 / 로컬서비스로 파생할 수 있도록 만들어졌습니다.

## 구조

Header → Hero → Problem/Target → Services → Trust/Proof → Process → Use Cases → FAQ → Final CTA → Contact → Footer

| 컴포넌트 | 경로 |
| --- | --- |
| Header | `src/components/Header.tsx` |
| HeroSection | `src/components/HeroSection.tsx` |
| ProblemSection | `src/components/ProblemSection.tsx` |
| ServiceCards | `src/components/ServiceCards.tsx` |
| TrustSection | `src/components/TrustSection.tsx` |
| ProcessSection | `src/components/ProcessSection.tsx` |
| UseCaseSection | `src/components/UseCaseSection.tsx` |
| FAQSection | `src/components/FAQSection.tsx` |
| CTASection | `src/components/CTASection.tsx` |
| ContactSection | `src/components/ContactSection.tsx` |
| Footer | `src/components/Footer.tsx` |

## 설정 파일

거의 모든 고객사 정보는 **`src/config/site.ts` 한 곳**에서 수정합니다:
`businessName`, `tagline`, `primaryColor`, `accentColor`, `phone`, `email`,
`secondaryContactUrl`, `address`, `businessHours`, `primaryCTA`, `secondaryCTA`,
`services[]`, `faq[]`, `process[]`, `useCases[]`, `seo.title`, `seo.description`.

컬러는 `src/config/site.ts`의 `primaryColor` / `accentColor`에 기록하고,
실제 적용은 `src/styles.css`의 `--primary` / `--accent` 토큰 값을 같은 값으로 바꿉니다.
컴포넌트에는 색상 클래스를 직접 쓰지 않습니다.

## DEMO 정책

- 문의폼은 **UI만 제공**하며 전송/저장하지 않습니다. 폼 상단에 “데모 폼이며 실제 접수되지 않습니다”를 표시합니다.
- 통계·인증·후기는 모두 예시이며 Trust 섹션과 Footer에 예시 고지가 있습니다.
- 백엔드 / DB / 로그인 / 결제는 포함하지 않습니다.

## 고객사 복제 체크리스트

- [ ] **상호**: `businessName`, `tagline`, `description` 교체 — 사업자등록증 상 정식 명칭 확인
- [ ] **로고**: Header/Footer 이니셜 마크를 실제 로고 이미지로 교체, favicon(`public/favicon.ico`) 교체
- [ ] **컬러**: `primaryColor` / `accentColor` 결정 후 `src/styles.css` 토큰 반영, 본문 대비(WCAG AA) 확인
- [ ] **Hero**: 첫 화면에서 “무슨 업체인지 + CTA”가 즉시 보이는지, 헤드라인·보조 문구 교체
- [ ] **서비스**: `services[]` 항목 수·명칭·불릿을 실제 제공 범위로 교체 (없는 서비스 삭제)
- [ ] **후기/인증 검증**: `trust.stats`, `trust.credentials`, `trust.testimonials` 를 **증빙 가능한 자료로만** 교체. 검증 불가 항목은 삭제하고 예시 고지(`trust.disclaimer`)도 함께 제거
- [ ] **연락처**: `phone`, `email`, `address`, `businessHours`, `secondaryContactUrl`(카카오/네이버톡톡 등) 실제 값 확인, 전화 링크 동작 확인
- [ ] **CTA**: `primaryCTA` / `secondaryCTA` 문구와 이동 대상 확정 (폼 이동 / 전화 / 예약 링크)
- [ ] **SEO**: `seo.title`(60자 이내) / `seo.description`(160자 이내), JSON-LD 업종 타입 확인, OG 이미지 준비 후 게시
- [ ] **개인정보 문구**: `privacyNotice`를 고객사 처리방침 기준으로 교체, 동의 체크박스·처리방침 링크 필요 여부 확인
- [ ] **폼 연동 여부**: 데모 유지 시 안내 문구 유지, 실제 접수로 전환 시 안내 문구 제거 후 전송 로직 구현
- [ ] **모바일 QA**: 390 / 768 / 1440 폭에서 레이아웃, 모바일 메뉴 열기·닫기, 앵커 이동, 터치 영역(44px), 폼 입력 확인

## 개발

```bash
bun install
bun run dev
```
