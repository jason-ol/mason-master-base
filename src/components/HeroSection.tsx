import { Check, Phone } from "lucide-react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="top" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-24">
        <div>
          <p className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            DEMO 템플릿 · 상담·문의형 홈페이지
          </p>
          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {site.businessName}
            <span className="mt-2 block text-primary">{site.tagline}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {site.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {["첫 상담 40분 무료", "영업일 48시간 내 회신", "서면 견적 제공"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 text-accent" aria-hidden />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={site.primaryCTA.href}>{site.primaryCTA.label}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.secondaryCTA.href}>
                <Phone className="h-4 w-4" aria-hidden />
                {site.secondaryCTA.label}
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">{site.businessHours}</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
          <h2 className="text-sm font-semibold text-muted-foreground">상담 안내</h2>
          <dl className="mt-4 divide-y divide-border">
            {[
              ["대상", site.problem.target],
              ["소요 시간", "40분 (화상 또는 방문)"],
              ["비용", "첫 상담 무료"],
              ["회신", "영업일 기준 48시간 이내"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-4 py-3">
                <dt className="w-20 shrink-0 text-sm text-muted-foreground">{k}</dt>
                <dd className="text-sm font-medium text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
          <Button asChild className="mt-5 w-full" variant="secondary">
            <a href={site.secondaryContactUrl} target="_blank" rel="noreferrer">
              {site.secondaryContactLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
