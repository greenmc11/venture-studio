"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-24 pt-3 md:px-10 md:pt-5 lg:pt-4">
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.55 }}
        className="relative flex min-h-[calc(100vh-6rem)] flex-col justify-start max-lg:overflow-x-clip overflow-x-visible pb-20 pt-2 md:min-h-[calc(100vh-5.5rem)] md:pb-24 md:pt-6 lg:pb-28 lg:pt-4"
      >
        <div className="relative w-full">
          <div
            className="pointer-events-none absolute bottom-0 top-0 z-0 block w-[100vw] max-w-none -translate-x-1/2 overflow-hidden rounded-[clamp(2.5rem,8vw,4rem)] border-0 shadow-none ring-0 outline-none left-1/2 lg:left-[calc((100%-min(100%,72rem))/2+min(11ch,10.25rem)+0.08em)] lg:right-[calc((100vw_-_100%)_/_-2)] lg:w-auto lg:translate-x-0"
            aria-hidden
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 172% 124% at 56% 50%, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.3) 7%, rgba(0,0,0,0.14) 18%, rgba(0,0,0,0.06) 30%, rgba(0,0,0,0.02) 42%, rgba(0,0,0,0.006) 54%, transparent 68%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 172% 124% at 56% 50%, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.3) 7%, rgba(0,0,0,0.14) 18%, rgba(0,0,0,0.06) 30%, rgba(0,0,0,0.02) 42%, rgba(0,0,0,0.006) 54%, transparent 68%, transparent 100%)",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          >
            <div className="relative h-full min-h-full w-full transform-gpu">
              <Image
                src="/demoday-2019-hero.png"
                alt=""
                fill
                sizes="100vw"
                priority
                className="border-0 object-cover object-[58%_center] opacity-[0.92] [filter:grayscale(1)_saturate(0)_brightness(0.92)_contrast(1.06)] [transform:translateZ(0)_scale(1.09)]"
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_172%_124%_at_56%_50%,transparent_40%,rgba(243,245,247,0.012)_54%,rgba(243,245,247,0.04)_66%,rgba(243,245,247,0.08)_76%,rgba(243,245,247,0.14)_85%,rgba(243,245,247,0.22)_92%,rgba(243,245,247,0.34)_97%,rgba(243,245,247,0.48)_100%)]"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(243,245,247,0.82)_0%,rgba(243,245,247,0.58)_4%,rgba(243,245,247,0.34)_10%,rgba(243,245,247,0.16)_17%,rgba(243,245,247,0.06)_24%,rgba(243,245,247,0.015)_32%,transparent_42%,transparent_82%,rgba(243,245,247,0.03)_88%,rgba(243,245,247,0.12)_94%,rgba(243,245,247,0.34)_100%)]"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(243,245,247,0.82)_0%,rgba(243,245,247,0.48)_8%,rgba(243,245,247,0.24)_14%,rgba(243,245,247,0.08)_22%,transparent_34%,transparent_58%,rgba(243,245,247,0.08)_68%,rgba(243,245,247,0.24)_78%,rgba(243,245,247,0.48)_88%,rgba(243,245,247,0.82)_100%)]"
                aria-hidden
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-2">
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

              <div className="mt-12 flex w-full max-w-5xl flex-col items-start gap-5 sm:mt-14 sm:flex-row sm:items-start sm:gap-8 md:mt-16 md:gap-10">
                <p className="max-w-3xl text-left text-[1.35rem] font-bold leading-snug tracking-tight text-[#1f3f8a] sm:text-[1.45rem] md:text-2xl md:leading-tight lg:text-[1.7rem]">
                  소풍 벤처스와 함께 미래를 만들어갈 초기 창업자를 모십니다
                </p>
                <Link
                  href="/apply"
                  className="-mt-2 inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#0f6a4b] px-8 py-2.5 text-base font-semibold tracking-wide text-white shadow-md shadow-emerald-950/20 transition hover:bg-[#0c5a40] active:bg-[#095239] sm:-mt-2.5 sm:px-11 sm:py-2.5 sm:text-lg md:px-12"
                >
                  Apply Now
                </Link>
              </div>

              <div className="mt-14 max-w-2xl rounded-2xl border border-emerald-800/15 bg-white/75 p-6 shadow-sm backdrop-blur-[2px] sm:mt-16 md:p-7">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
                  Venture Studio
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug text-neutral-950 md:text-xl">
                  프랜차이즈형 벤처스튜디오
                </p>
                <p className="mt-3 text-base leading-relaxed text-neutral-700 md:text-[17px] md:leading-relaxed">
                  소풍은 ‘임팩트/기후 투자’ 역량과 브랜드를 바탕으로 가맹본사처럼 홍보·선정, 오피스, 백오피스, 자본,
                  브랜드·네트워크, 거버넌스와 컴퍼니 빌딩 플레이북을 제공합니다. 스튜디오 대표는 팀의 감독으로, 소풍은
                  리그 운영국으로 함께합니다.
                </p>
                <Link
                  href="/studio"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f6a4b] underline decoration-[#0f6a4b]/35 underline-offset-4 transition hover:decoration-[#0f6a4b] md:text-base"
                >
                  지원 체계·IAM 전체 보기
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
