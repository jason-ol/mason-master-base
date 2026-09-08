import { createFileRoute } from "@tanstack/react-router";

import { site } from "@/config/site";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ServiceCards } from "@/components/ServiceCards";
import { TrustSection } from "@/components/TrustSection";
import { ProcessSection } from "@/components/ProcessSection";
import { UseCaseSection } from "@/components/UseCaseSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.seo.title },
      { name: "description", content: site.seo.description },
      { property: "og:title", content: site.seo.title },
      { property: "og:description", content: site.seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.businessName,
          description: site.seo.description,
          telephone: site.phone,
          email: site.email,
          address: { "@type": "PostalAddress", streetAddress: site.address },
          openingHours: site.businessHours,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServiceCards />
        <TrustSection />
        <ProcessSection />
        <UseCaseSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
