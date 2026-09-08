import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Info } from "lucide-react";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // DEMO: 전송하지 않습니다. 실제 접수 연동은 고객사 요건에 따라 별도 구현하세요.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="상담 문의"
          description="아래 내용을 남겨주시면 담당자가 확인 후 연락드립니다."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div
              role="note"
              className="mb-6 flex items-start gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3"
            >
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <p className="text-sm font-medium text-foreground">
                데모 폼이며 실제 접수되지 않습니다.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" name="name" placeholder="홍길동" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact">연락처</Label>
                <Input id="contact" name="contact" placeholder="010-0000-0000" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">문의내용</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="현재 상황과 궁금한 점을 자유롭게 적어주세요."
                  required
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full">
              상담 신청 (데모)
            </Button>

            {submitted && (
              <p role="status" className="mt-4 rounded-lg bg-secondary px-4 py-3 text-sm text-secondary-foreground">
                데모 폼입니다. 입력하신 내용은 전송되지 않았습니다.
              </p>
            )}

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {site.privacyNotice}
            </p>
          </form>

          <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
            <h3 className="text-sm font-semibold text-foreground">연락처 정보</h3>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-xs text-muted-foreground">전화</p>
                  <a
                    href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-sm font-medium text-foreground hover:underline"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-xs text-muted-foreground">이메일</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm font-medium text-foreground hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-xs text-muted-foreground">주소</p>
                  <p className="text-sm font-medium text-foreground">{site.address}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-xs text-muted-foreground">운영 시간</p>
                  <p className="text-sm font-medium text-foreground">{site.businessHours}</p>
                </div>
              </li>
            </ul>

            <Button asChild variant="outline" className="mt-7 w-full">
              <a href={site.secondaryContactUrl} target="_blank" rel="noreferrer">
                {site.secondaryContactLabel}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
