import { site } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function UseCaseSection() {
  return (
    <section id="usecases" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <SectionHeading
          eyebrow="Use Cases"
          title="이런 문제를 해결했습니다"
          description="업종별 상담 예시입니다. 실제 사례로 교체해 사용하세요."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {site.useCases.map((u) => (
            <article key={u.industry} className="rounded-xl border border-border bg-card p-6">
              <span className="inline-flex rounded bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                {u.industry}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">문제 · </span>
                {u.problem}
              </p>
              <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">결과 · </span>
                {u.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
