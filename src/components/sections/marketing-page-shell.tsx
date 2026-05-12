import type { ReactNode } from "react";
import { MarketingPageIntro } from "@/components/sections/marketing-page-intro";
import { ScrollReveal } from "@/components/sections/scroll-reveal";

type MarketingPageShellProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
};

export function MarketingPageShell({
  eyebrow,
  title,
  description,
  children,
}: MarketingPageShellProps) {
  return (
    <div className="relative isolate overflow-hidden bg-[#020202] text-[#f5f2ea]">
      <MarketingPageIntro
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="relative mx-auto w-full max-w-[92rem] px-5 pb-28 md:px-7 lg:pb-36">
        {children}
      </div>
    </div>
  );
}

export function EditorialRows({ children }: { children: ReactNode }) {
  return (
    <ScrollReveal>
      <section className="border-y border-[#f5f2ea]/12">{children}</section>
    </ScrollReveal>
  );
}
