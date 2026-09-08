import { site } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />
        <Accordion type="single" collapsible className="mt-8">
          {site.faq.map((f) => (
            <AccordionItem key={f.question} value={f.question}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
