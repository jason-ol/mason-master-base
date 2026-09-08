import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-base font-semibold text-foreground">{site.businessName}</p>
            <p className="mt-2 text-sm text-muted-foreground">{site.tagline}</p>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{site.address}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">바로가기</p>
            <ul className="mt-3 space-y-2">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">연락</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>{site.phone}</li>
              <li>{site.email}</li>
              <li>{site.businessHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.businessName}. MASON_BASE_01 DEMO 템플릿 — 표기된 상호·수치·후기는
            예시이며 실제 정보가 아닙니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
