"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { siteNavItems } from "@/domain/site/content";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 md:px-7 md:pt-7">
      <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between">
        <Link
          href="/"
          className="brand-wordmark text-[1.7rem] leading-none text-[#f5f2ea] mix-blend-difference md:text-[2.2rem]"
          onClick={() => setIsMenuOpen(false)}
        >
          YJ CODE.
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden text-sm font-medium text-[#f5f2ea]/76 transition hover:text-[#d8e6ff] md:inline-flex"
          >
            문의
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            className="text-sm font-medium text-[#f5f2ea]/76 transition hover:text-[#d8e6ff]"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="site-menu"
          className="fixed inset-0 z-40 bg-[#050505]/96 px-5 py-5 text-[#f5f2ea] backdrop-blur-xl md:px-7 md:py-7"
        >
          <div className="mx-auto flex h-full w-full max-w-[92rem] flex-col">
            <div className="flex items-start justify-between">
              <Link
                href="/"
                className="brand-wordmark text-[1.7rem] leading-none md:text-[2.2rem]"
                onClick={() => setIsMenuOpen(false)}
              >
                YJ CODE.
              </Link>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#f5f2ea]/76 transition hover:text-[#d8e6ff]"
              >
                닫기
                <X size={16} aria-hidden />
              </button>
            </div>

            <nav
              aria-label="Primary navigation"
              className="mt-auto grid gap-2 pb-8 md:grid-cols-2 md:gap-x-12 md:gap-y-0"
            >
              {siteNavItems.map((item) => {
                const isActive = pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-end justify-between border-t border-[#f5f2ea]/12 py-5 transition hover:border-[#d8e6ff]/55"
                  >
                    <span>
                      <span
                        className={[
                          "block text-[clamp(2.7rem,8vw,7rem)] leading-[0.88] font-semibold",
                          isActive ? "text-[#d8e6ff]" : "text-[#f5f2ea]",
                        ].join(" ")}
                      >
                        {item.label}
                      </span>
                      <span className="mt-3 block text-xs font-medium text-[#f5f2ea]/38 uppercase">
                        {item.labelEn}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={28}
                      aria-hidden
                      className="mb-2 text-[#f5f2ea]/28 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d8e6ff]"
                    />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
