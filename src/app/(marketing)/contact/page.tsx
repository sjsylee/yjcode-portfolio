import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { EditorialRows, MarketingPageShell } from "@/components/sections/marketing-page-shell";

export const metadata: Metadata = {
  title: "문의",
  description:
    "SaaS 개발, 비즈니스 웹 플랫폼, UI/UX 중심 소프트웨어, 웹사이트 제작 협업 문의.",
};

const contactNotes = [
  "프로젝트 목적과 현재 막힌 지점",
  "필요한 페이지, 기능, 운영 흐름",
  "참고 링크, 일정, 예산 범위",
] as const;

export default function ContactPage() {
  return (
    <MarketingPageShell
      eyebrow="Contact / Start with context"
      title="거친 아이디어도 제품의 기준으로 정리합니다."
      description="SaaS 개발, 비즈니스 웹 플랫폼, UI/UX 중심 소프트웨어, 웹사이트 제작과 랜딩페이지 개발을 문의할 수 있습니다."
    >
      <EditorialRows>
        <section className="grid gap-10 py-12 lg:grid-cols-[0.74fr_1.26fr] lg:py-16">
          <div>
            <Mail className="text-[#d8e6ff]" size={28} aria-hidden />
            <h2 className="mt-7 max-w-lg text-4xl leading-tight font-semibold md:text-5xl">
              맥락부터 보내주세요.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-[#f5f2ea]/62">
              작업 범위가 아직 흐릿해도 괜찮습니다. 목표, 제약, 현재 상태를
              먼저 공유하면 제품으로 만들 수 있는 형태부터 함께 정리합니다.
            </p>

            <div className="mt-10 grid gap-0">
              {contactNotes.map((note, index) => (
                <div
                  key={note}
                  className="grid gap-5 border-t border-[#f5f2ea]/12 py-5 md:grid-cols-[3rem_1fr]"
                >
                  <span className="text-xs font-semibold text-[#f5f2ea]/28">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg font-semibold text-[#f5f2ea]">
                    {note}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="mailto:hello@yjcode.kr"
              className="mt-10 inline-flex items-center gap-2 border-b border-[#f5f2ea]/54 pb-2 text-sm font-semibold text-[#f5f2ea] transition hover:border-[#d8e6ff] hover:text-[#d8e6ff]"
            >
              hello@yjcode.kr
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </section>
      </EditorialRows>
    </MarketingPageShell>
  );
}
