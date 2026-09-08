import { AlertCircle } from "lucide-react";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function ProblemSection() {
  return (
    <section id="problem" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <SectionHeading eyebrow="Problem" title={site.problem.title} description={site.problem.target} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.problem.pains.map((pain) => (
            <div
              key={pain}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
            >
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <p className="text-sm leading-relaxed text-foreground md:text-base">{pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
