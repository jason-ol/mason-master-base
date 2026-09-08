import { site } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <SectionHeading
          eyebrow="Process"
          title="진행 절차"
          description="문의부터 실행까지 5단계로 진행됩니다."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {site.process.map((p) => (
            <li key={p.step} className="rounded-xl border border-border bg-card p-5">
              <span className="text-xs font-semibold tracking-widest text-accent">{p.step}</span>
              <h3 className="mt-2 text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
