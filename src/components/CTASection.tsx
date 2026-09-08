import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="border-b border-border bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 md:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
            {site.finalCTA.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
            {site.finalCTA.description}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <Button asChild size="lg" variant="onPrimary">
            <a href={site.primaryCTA.href}>{site.primaryCTA.label}</a>
          </Button>
          <Button asChild size="lg" variant="onPrimaryOutline">
            <a href={site.secondaryCTA.href}>{site.secondaryCTA.label}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
