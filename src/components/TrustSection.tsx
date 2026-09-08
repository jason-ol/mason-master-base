import { BadgeCheck, Quote } from "lucide-react";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function TrustSection() {
  return (
    <section id="trust" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <SectionHeading
          eyebrow="Trust"
          title={site.trust.title}
          description="근거와 기록으로 설명드립니다."
        />

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
          {site.trust.stats.map((s) => (
            <div key={s.label} className="bg-card px-5 py-7 text-center">
              <p className="text-2xl font-bold text-primary md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground">인증·자격</h3>
            <ul className="mt-4 space-y-3">
              {site.trust.credentials.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5">
            {site.trust.testimonials.map((t) => (
              <blockquote key={t.author} className="rounded-xl border border-border bg-card p-6">
                <Quote className="h-5 w-5 text-accent" aria-hidden />
                <p className="mt-3 text-sm leading-relaxed text-foreground">“{t.quote}”</p>
                <footer className="mt-3 text-xs text-muted-foreground">{t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>

        <p className="mt-6 rounded-lg border border-dashed border-border bg-surface px-4 py-3 text-xs text-muted-foreground">
          {site.trust.disclaimer}
        </p>
      </div>
    </section>
  );
}
