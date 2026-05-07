import type { ReactNode } from "react";

type MarketingPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  meta?: string;
};

export function MarketingPageShell({
  eyebrow,
  title,
  description,
  children,
  meta = "YJ CODE.",
}: MarketingPageShellProps) {
  return (
    <main className="relative isolate overflow-hidden bg-[#020202] text-[#f5f2ea]">
      <SubpageAtmosphere />
      <section className="relative mx-auto grid min-h-[72svh] w-full max-w-[92rem] content-end gap-10 px-5 pb-16 pt-32 md:px-7 md:pb-20 md:pt-40 lg:grid-cols-[minmax(0,0.94fr)_minmax(20rem,0.42fr)] lg:items-end">
        <div>
          <p className="text-[0.72rem] leading-5 font-semibold tracking-[0.18em] text-[#d8e6ff]/72 uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-7 max-w-6xl text-[clamp(3rem,8.5vw,9.6rem)] leading-[0.94] font-semibold text-balance">
            {title}
          </h1>
        </div>

        <div className="border-t border-[#f5f2ea]/14 pt-6 lg:mb-3">
          <p className="text-sm leading-7 text-[#f5f2ea]/62 md:text-base md:leading-8">
            {description}
          </p>
          <p className="hero-wordmark mt-8 text-[clamp(2.8rem,6vw,6.5rem)] leading-none text-[#f5f2ea]/12">
            {meta}
          </p>
        </div>
      </section>

      <div className="relative mx-auto w-full max-w-[92rem] px-5 pb-28 md:px-7 lg:pb-36">
        {children}
      </div>
    </main>
  );
}

export function EditorialRows({ children }: { children: ReactNode }) {
  return <section className="border-y border-[#f5f2ea]/12">{children}</section>;
}

export function SubpageAtmosphere() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(216,230,255,0.12),transparent_34%),linear-gradient(180deg,rgba(2,2,2,0)_0%,#020202_88%)]" />
      <div className="studio-noise absolute inset-0 opacity-55" />
      <div className="absolute right-[-20vw] top-[-8rem] h-[42rem] w-[58rem] rotate-[-10deg] border border-[#d8e6ff]/10 bg-[#d8e6ff]/[0.025] blur-[0.2px]" />
      <div className="absolute left-[58vw] top-0 h-full w-px rotate-[8deg] bg-[#d8e6ff]/14" />
      <div className="absolute top-[17rem] left-0 h-px w-full bg-[#f5f2ea]/8" />
    </div>
  );
}
