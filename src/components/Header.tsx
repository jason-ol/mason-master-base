import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-primary text-sm font-bold text-primary-foreground">
            {site.businessName.slice(0, 1)}
          </span>
          <span className="text-base font-semibold tracking-tight text-foreground">
            {site.businessName}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            {site.phone}
          </a>
          <Button asChild>
            <a href={site.primaryCTA.href}>{site.primaryCTA.label}</a>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="my-3">
              <a href={site.primaryCTA.href} onClick={() => setOpen(false)}>
                {site.primaryCTA.label}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
