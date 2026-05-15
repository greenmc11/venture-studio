"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { mainNavItems, navPath, type NavId } from "@/lib/nav";

function ScribbleCircle() {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-9 w-[7.25rem] -translate-x-1/2 -translate-y-1/2 scale-95 text-emerald-700 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
      viewBox="0 0 240 88"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M170 74C148 84 121 86 96 84C62 81 32 70 24 52C17 35 30 22 55 16C88 9 131 6 170 8C206 10 225 18 228 31C231 46 214 58 184 65C166 69 148 72 129 73C112 75 97 75 85 74"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  const navButtonClass =
    "group relative overflow-visible px-3 py-3 text-[11px] font-normal transition-colors hover:text-neutral-950 md:px-4 md:text-[11px]";

  const isActive = (id: NavId) => pathname === navPath(id);

  return (
    <header className="sticky top-0 z-40 flex flex-col overflow-visible border-b border-black/[0.06] bg-[#f3f5f7]/88 backdrop-blur-md">
      <div className="mx-auto flex h-[5.25rem] w-full max-w-7xl items-center justify-between gap-6 overflow-visible px-5 md:px-10">
        <Link href="/" className="inline-flex shrink-0 flex-col items-center leading-none">
          <div className="flex items-center gap-x-1 whitespace-nowrap md:gap-x-1.5">
            <span className="inline-flex shrink-0 self-center">
              <Image
                src="/sopoong-wordmark-transparent.png"
                alt="소풍"
                width={808}
                height={211}
                className="h-7 w-auto md:h-8"
                priority
              />
            </span>
            <span className="inline-flex w-[1.1em] shrink-0 justify-center text-center text-3xl font-light leading-none text-neutral-400 md:w-[1.05em] md:text-4xl">
              ×
            </span>
            <span className="inline-block -translate-x-px -translate-y-px text-[calc(1.875rem-0.5pt-0.125rem)] font-bold tracking-tight text-emerald-800 md:-translate-x-0.5 md:-translate-y-0.5 md:text-[calc(2.25rem-0.5pt-0.125rem)]">
              ToMA
            </span>
          </div>
          <div className="-mt-0.5 text-center text-xs font-medium tracking-[0.22em] text-neutral-500 md:text-sm">
            Venture Studio
          </div>
        </Link>

        <div className="flex flex-1 items-center justify-end gap-1 overflow-visible lg:gap-0">
          <nav className="hidden items-center overflow-visible lg:flex lg:pr-1" aria-label="메인">
            {mainNavItems.map((item) => (
              <Link
                key={item.id}
                href={navPath(item.id)}
                className={`${navButtonClass} ${
                  isActive(item.id) ? "text-neutral-950" : "text-neutral-800"
                }`}
                aria-current={isActive(item.id) ? "page" : undefined}
                aria-label={`${item.labelEn}, ${item.labelKo}`}
              >
                <span
                  className={`relative z-10 inline-flex items-center justify-center ${item.navMinWidthClass}`}
                >
                  <span className="whitespace-nowrap uppercase tracking-[0.2em] transition-opacity duration-200 group-hover:pointer-events-none group-hover:opacity-0">
                    {item.labelEn}
                  </span>
                  <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap normal-case tracking-normal transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                    {item.labelKo}
                  </span>
                </span>
                <ScribbleCircle />
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="shrink-0 rounded-md p-2.5 text-neutral-600 transition-colors hover:bg-black/[0.03] hover:text-neutral-900"
            aria-label="검색"
          >
            <Search className="h-[17px] w-[17px]" strokeWidth={1.35} />
          </button>
        </div>
      </div>

      <nav
        className="flex gap-1 overflow-x-auto border-t border-black/[0.05] px-4 py-2 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="메인 모바일"
      >
        {mainNavItems.map((item) => (
          <Link
            key={item.id}
            href={navPath(item.id)}
            className={`shrink-0 rounded-md px-3 py-2 text-[10px] font-normal uppercase tracking-[0.18em] active:bg-black/[0.04] ${
              isActive(item.id)
                ? "bg-black/[0.06] text-neutral-950"
                : "text-neutral-800"
            }`}
            aria-current={isActive(item.id) ? "page" : undefined}
            aria-label={`${item.labelEn}, ${item.labelKo}`}
          >
            {item.labelEn}
          </Link>
        ))}
      </nav>
    </header>
  );
}
