import { Check, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function ServiceCards() {
  return (
    <section id="services" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <SectionHeading
          eyebrow="Services"
          title="제공 서비스"
          description="진단에서 실행, 점검까지 필요한 만큼만 선택하실 수 있습니다."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {site.services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                이 서비스 상담하기
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
