"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  type ComponentType,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  Building2,
  ChartLine,
  Compass,
  Cpu,
  Factory,
  Handshake,
  Landmark,
  Leaf,
  Lightbulb,
  Rocket,
  Salad,
  Search,
  Users,
  X,
} from "lucide-react";

type NavId = "about" | "why" | "studio" | "founders" | "scaleexit" | "apply";

const mainNavItems: {
  id: NavId;
  labelEn: string;
  labelKo: string;
  navMinWidthClass: string;
}[] = [
  { id: "about", labelEn: "About", labelKo: "소개", navMinWidthClass: "min-w-[3.5rem]" },
  { id: "why", labelEn: "Purpose", labelKo: "목적", navMinWidthClass: "min-w-[4rem]" },
  { id: "studio", labelEn: "Benefits", labelKo: "지원사항", navMinWidthClass: "min-w-[4.75rem]" },
  { id: "founders", labelEn: "Founders", labelKo: "창업자", navMinWidthClass: "min-w-[4.5rem]" },
  { id: "scaleexit", labelEn: "Schedule", labelKo: "일정", navMinWidthClass: "min-w-[4.75rem]" },
];

const NAV_IDS: NavId[] = ["about", "why", "studio", "founders", "scaleexit", "apply"];

function navIdFromHash(hash: string): NavId | null {
  try {
    const key = decodeURIComponent(hash.replace(/^#/, "").trim()).toLowerCase();
    return NAV_IDS.includes(key as NavId) ? (key as NavId) : null;
  } catch {
    return null;
  }
}

const whyItems = [
  "AI 시대 기존 VC 플레이북의 한계",
  "예측의 한계",
  "빠른 실행",
  "미래를 만드는 방식",
];

const buildCards = [
  { title: "Climate & Sustainability", icon: Leaf },
  { title: "Industrial & Manufacturing", icon: Factory },
  { title: "Food & Consumer", icon: Salad },
  { title: "AI-enabled Business", icon: Cpu },
];

const benefits = [
  "사무실 공간 지원",
  "초기 투자 연계",
  "정부지원 연계: LIPS / TIPS / Scale-up TIPS",
  "IR · 운영 지원",
  "밀착 멘토링",
  "네트워크 연결",
];

const founderTraits = [
  "Market View",
  "Execution",
  "Learning Agility",
  "Resilience",
  "Leadership",
  "AI Literacy",
];

const scaleSteps = [
  "Validation",
  "Early Traction",
  "Proof",
  "Scale Ready",
  "Strategic Growth / Exit",
];

const applySchedule = [
  "6월 신청 마감",
  "7월 인터뷰·선발",
  "8월 프로그램 시작",
  "약 3년의 빌딩 여정",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function ModalSectionHeader({
  title,
  icon: Icon,
}: {
  title: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 pr-10">
      <Icon className="h-6 w-6 shrink-0 text-[#1e6c4f]" />
      <h2
        id="modal-title"
        className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl"
      >
        {title}
      </h2>
    </div>
  );
}

function FadeCard({
  children,
  delay = 0,
  instant = false,
}: {
  children: ReactNode;
  delay?: number;
  instant?: boolean;
}) {
  const cardClass = "rounded-2xl border border-[#d4ddd4] bg-white p-5 shadow-sm";
  if (instant) {
    return <article className={cardClass}>{children}</article>;
  }
  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay }}
      className={cardClass}
    >
      {children}
    </motion.article>
  );
}

function SectionModalContent({ section }: { section: NavId }) {
  switch (section) {
    case "about":
      return (
        <>
          <ModalSectionHeader title="About · 소개" icon={Landmark} />
          <div className="max-w-3xl space-y-5 text-[#39453e] md:text-lg md:leading-relaxed">
            <p>
              소풍벤처스의 역사, 투자 철학, 운용 규모, 주요 성과 등 소개할 내용을
              이 영역에 넣어 주세요.
            </p>
            <p className="text-base text-neutral-600 md:text-[17px]">
              필요하면 이미지, 타임라인, 필름 카드 등을 추가할 수 있습니다.
            </p>
          </div>
        </>
      );
    case "why":
      return (
        <>
          <ModalSectionHeader title="Purpose · 목적" icon={Lightbulb} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyItems.map((item, idx) => (
              <FadeCard key={item} delay={idx * 0.06} instant>
                <p className="text-lg font-semibold leading-7">{item}</p>
              </FadeCard>
            ))}
          </div>
        </>
      );
    case "studio":
      return (
        <>
          <ModalSectionHeader title="Benefits · 지원사항" icon={Building2} />
          <div className="mb-8 space-y-3 text-[#39453e]">
            <p>기후테크만 고집하지 않음</p>
            <p>우리가 깊이 이해하고 함께 키울 수 있는 팀을 선발</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {buildCards.map(({ title, icon: Icon }, idx) => (
              <FadeCard key={title} delay={idx * 0.05} instant>
                <Icon className="mb-4 h-8 w-8 text-[#1f6d50]" />
                <p className="font-semibold">{title}</p>
              </FadeCard>
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-dashed border-[#c8d2c9] bg-[#f9faf9] px-4 py-3 text-sm font-medium text-[#30403a]"
              >
                {benefit}
              </div>
            ))}
          </div>
        </>
      );
    case "founders":
      return (
        <>
          <ModalSectionHeader title="Founders · 창업자" icon={Users} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {founderTraits.map((trait, idx) => (
              <FadeCard key={trait} delay={idx * 0.05} instant>
                <div className="flex items-center gap-3">
                  <Compass className="h-5 w-5 text-[#2a7057]" />
                  <p className="font-semibold">{trait}</p>
                </div>
              </FadeCard>
            ))}
          </div>
        </>
      );
    case "scaleexit":
      return (
        <>
          <ModalSectionHeader title="Schedule · 일정" icon={ChartLine} />
          <div className="grid gap-3 md:grid-cols-5">
            {scaleSteps.map((step, idx) => (
              <FadeCard key={step} delay={idx * 0.05} instant>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold">{step}</p>
                  {idx < scaleSteps.length - 1 && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#2f745d]" />
                  )}
                </div>
              </FadeCard>
            ))}
          </div>
          <p className="mt-6 text-[#39453e]">
            프로그램은 처음부터 성장과 후속 투자, 그리고 엑시트 가능성까지
            설계되어 있습니다.
          </p>
        </>
      );
    case "apply":
      return (
        <>
          <ModalSectionHeader title="Apply" icon={Rocket} />
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h3 className="text-xl font-semibold">지원 일정</h3>
              <ul className="mt-4 space-y-3">
                {applySchedule.map((schedule) => (
                  <li
                    key={schedule}
                    className="rounded-xl border border-[#d4ddd4] bg-white px-4 py-3 text-[#2d3932]"
                  >
                    {schedule}
                  </li>
                ))}
              </ul>
            </div>

            <form className="rounded-2xl border border-[#d4ddd4] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">2026 프로그램 지원하기</h3>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <Input placeholder="이름" />
                <Input type="email" placeholder="이메일" />
                <Input placeholder="회사/팀명" />
                <Input placeholder="웹사이트 또는 소개 링크" />
              </div>
              <select className="mt-3 w-full rounded-xl border border-[#cdd7cf] bg-white px-4 py-3 text-sm outline-none focus:border-[#2f745d]">
                <option>분야 선택</option>
                <option>Climate & Sustainability</option>
                <option>Industrial & Manufacturing</option>
                <option>Food & Consumer</option>
                <option>AI-enabled Business</option>
              </select>
              <textarea
                placeholder="간단한 소개"
                rows={5}
                className="mt-3 w-full rounded-xl border border-[#cdd7cf] px-4 py-3 text-sm outline-none focus:border-[#2f745d]"
              />
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0f6a4b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0c5a40]"
              >
                지금 신청하기
                <Handshake className="h-4 w-4" />
              </button>
            </form>
          </div>
        </>
      );
    default:
      return null;
  }
}

function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-[#cdd7cf] px-4 py-3 text-sm outline-none focus:border-[#2f745d]"
    />
  );
}

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

export default function Home() {
  const [openSection, setOpenSection] = useState<NavId | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const closeSectionModal = useCallback(() => {
    setOpenSection(null);
    if (typeof window === "undefined") return;
    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }, []);

  const openSectionModal = useCallback((id: NavId) => {
    setOpenSection(id);
    if (typeof window === "undefined") return;
    const base = `${window.location.pathname}${window.location.search}`;
    const next = `#${id}`;
    if (window.location.hash !== next) {
      window.history.replaceState(window.history.state, "", `${base}${next}`);
    }
  }, []);

  useLayoutEffect(() => {
    const syncFromHash = () => {
      setOpenSection(navIdFromHash(window.location.hash));
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("popstate", syncFromHash);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("popstate", syncFromHash);
    };
  }, []);

  useEffect(() => {
    if (!openSection) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSectionModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openSection, closeSectionModal]);

  useEffect(() => {
    if (!openSection) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openSection]);

  const navButtonClass =
    "group relative overflow-visible px-3 py-3 text-[11px] font-normal text-neutral-800 transition-colors hover:text-neutral-950 md:px-4 md:text-[11px]";

  return (
    <div id="top" className="relative min-h-screen text-[#171b18] selection:bg-emerald-200/60">
      <div className="relative z-10">
        <header className="sticky top-0 z-40 overflow-visible border-b border-black/[0.06] bg-[#f3f5f7]/88 backdrop-blur-md">
          <div className="mx-auto flex h-[5.25rem] w-full max-w-7xl items-center justify-between gap-6 overflow-visible px-5 md:px-10">
            <a href="#top" className="inline-flex shrink-0 flex-col items-center leading-none">
              <div className="flex items-center whitespace-nowrap">
                <span className="inline-flex shrink-0 mix-blend-multiply dark:mix-blend-normal">
                  <Image
                    src="/sopoong-logo.png"
                    alt="소풍"
                    width={208}
                    height={60}
                    className="h-11 w-auto brightness-[1.02] contrast-[1.06] md:h-14"
                    priority
                  />
                </span>
                <span className="-ml-1 shrink-0 text-3xl font-light leading-none text-neutral-400 md:-ml-2 md:text-4xl">
                  ×
                </span>
                <span className="ml-3 text-3xl font-bold tracking-tight text-emerald-800 md:ml-4 md:text-4xl">
                  ToMA
                </span>
              </div>
              <div className="-mt-0.5 text-center text-xs font-medium tracking-[0.22em] text-neutral-500 md:text-sm">
                Venture Studio
              </div>
            </a>

            <div className="flex flex-1 items-center justify-end gap-1 overflow-visible lg:gap-0">
              <nav className="hidden items-center overflow-visible lg:flex lg:pr-1" aria-label="메인">
                {mainNavItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => openSectionModal(item.id)}
                    className={navButtonClass}
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
                  </button>
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
              <button
                key={item.id}
                type="button"
                onClick={() => openSectionModal(item.id)}
                className="shrink-0 rounded-md px-3 py-2 text-[10px] font-normal uppercase tracking-[0.18em] text-neutral-800 active:bg-black/[0.04]"
                aria-label={`${item.labelEn}, ${item.labelKo}`}
              >
                {item.labelEn}
              </button>
            ))}
          </nav>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-24 pt-3 md:px-10 md:pt-5">
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55 }}
            className="flex min-h-[calc(100vh-6rem)] flex-col justify-start pb-20 pt-2 md:min-h-[calc(100vh-5.5rem)] md:pb-24 md:pt-6 lg:pb-28 lg:pt-8"
          >
            <div className="mx-auto w-full max-w-6xl px-2">
              <div className="flex w-full flex-col items-start">
                <p className="mb-3 pl-[calc(0.5em-1em/3)] text-left font-sans text-xl font-semibold tracking-normal text-emerald-700 md:mb-4 md:text-2xl">
                  From Forecasting to Building
                </p>
                <h1 className="w-full font-hero-display text-left text-[clamp(2rem,4.75vw,3.75rem)] font-bold leading-[1.15] tracking-normal text-neutral-950">
                  미래를 예측하는 대신,{" "}
                  <span className="relative inline-block pb-[0.2em]">
                    <span className="relative z-20 whitespace-nowrap">
                      미래를{" "}
                      <span className="relative inline-block overflow-visible font-bold">
                        <span className="relative z-30">만듭니다</span>
                        <motion.svg
                          className="pointer-events-none absolute left-[48%] top-1/2 z-[1] h-[2.15em] w-[calc(100%+1.35em)] min-w-[3.95em] -translate-x-1/2 -translate-y-1/2 overflow-visible text-emerald-700"
                          viewBox="-6 0 258 52"
                          fill="none"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                        >
                          <motion.path
                            d="M212 43C152 46 88 44 50 40C40 38 32 34 28 30C26 24 30 16 42 12C55 10 85 9 118 11C156 12 184 13 208 14C226 15 246 21 251 27C255 33 252 40 212 43L152 47"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="butt"
                            strokeLinejoin="round"
                            fill="none"
                            initial={{
                              pathLength: prefersReducedMotion ? 1 : 0,
                              opacity: prefersReducedMotion ? 1 : 0,
                            }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={
                              prefersReducedMotion
                                ? { duration: 0, delay: 0 }
                                : {
                                    opacity: { delay: 1.14, duration: 0 },
                                    pathLength: {
                                      duration: 0.95,
                                      delay: 1.14,
                                      ease: [0.45, 0, 0.55, 1],
                                    },
                                  }
                            }
                          />
                        </motion.svg>
                      </span>
                    </span>
                    <motion.svg
                      className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[0.22em] w-full text-emerald-700"
                      viewBox="0 0 400 40"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M5 25C82 12 152 18 230 22C298 25 345 19 395 13"
                        stroke="currentColor"
                        strokeWidth={16}
                        strokeLinecap="butt"
                        fill="none"
                        initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
                        animate={{ pathLength: 1 }}
                        transition={
                          prefersReducedMotion
                            ? { duration: 0, delay: 0 }
                            : {
                                duration: 1.08,
                                ease: [0.22, 1, 0.36, 1],
                              }
                        }
                      />
                    </motion.svg>
                  </span>
                  .
                </h1>
                <div className="mt-5 w-full max-w-2xl space-y-5 text-left text-lg leading-[1.65] text-neutral-700 md:mt-7 md:space-y-5 md:text-xl md:leading-[1.6]">
                  <p>
                    급변하는 AI 시대,
                    <br />
                    미래의 승자를 예측하는 기존 VC의 방식은 점차 한계에 다다르고 있습니다.
                  </p>
                  <p>
                    우리는 유연한 사고와 강한 실행력을 가진 창업자들과 함께
                    <br />
                    미래를 이끌어갈 회사를 직접 만듭니다.
                  </p>
                </div>

                <div className="mt-8 flex w-full max-w-5xl flex-col items-start gap-5 sm:mt-9 sm:flex-row sm:items-start sm:gap-8 md:mt-10 md:gap-10">
                  <p className="max-w-3xl text-left text-[1.35rem] font-bold leading-snug tracking-tight text-[#1565c0] sm:text-[1.45rem] md:text-2xl md:leading-tight lg:text-[1.7rem]">
                    소풍 벤처스와 함께 미래를 만들어갈 초기 창업자를 모십니다
                  </p>
                  <button
                    type="button"
                    onClick={() => openSectionModal("apply")}
                    className="-mt-2 shrink-0 rounded-2xl bg-[#0f6a4b] px-8 py-2.5 text-base font-semibold tracking-wide text-white shadow-md shadow-emerald-950/20 transition hover:bg-[#0c5a40] active:bg-[#095239] sm:-mt-2.5 sm:px-11 sm:py-2.5 sm:text-lg md:px-12"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>

      {openSection &&
        createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center bg-slate-950/45 p-3 backdrop-blur-[2px] md:p-5"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2147483647,
              isolation: "isolate",
            }}
            role="presentation"
          >
            <button
              type="button"
              className="absolute inset-0 cursor-default bg-transparent"
              aria-label="배경 닫기"
              onClick={closeSectionModal}
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="relative z-10 max-h-[min(90vh,920px)] w-[min(100vw-1.5rem,56rem)] overflow-hidden rounded-2xl shadow-2xl outline-none"
            >
              <div className="relative max-h-[min(85vh,880px)] overflow-y-auto overscroll-contain rounded-2xl border border-neutral-300 bg-neutral-50 p-6 pt-14 md:p-10 md:pt-14">
                <button
                  type="button"
                  onClick={closeSectionModal}
                  className="absolute right-3 top-3 rounded-lg p-2 text-neutral-700 transition hover:bg-neutral-200 hover:text-neutral-950 md:right-4 md:top-4"
                  aria-label="닫기"
                >
                  <X className="h-5 w-5" strokeWidth={1.75} />
                </button>
                <SectionModalContent section={openSection} />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
