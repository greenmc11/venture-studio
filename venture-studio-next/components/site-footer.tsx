import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative mt-auto w-full bg-[#0f6a4b] text-white">
      <div className="relative mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-14 lg:py-16">
        <a
          href="https://www.facebook.com/sopoongholdings"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-5 top-10 text-white/90 transition hover:text-white md:right-10 md:top-12"
          aria-label="소풍 Facebook"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>

        <div className="grid gap-10 pr-10 sm:pr-12 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1.25fr)] lg:gap-16 lg:pr-14">
          <div>
            <Link href="/" className="inline-block leading-none">
              <Image
                src="/sopoong-wordmark.png"
                alt="sopoong"
                width={220}
                height={48}
                className="h-8 w-auto brightness-0 invert contrast-[1.06] md:h-10"
              />
            </Link>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-white/95 md:text-[15px]">
            <p className="font-bold uppercase tracking-[0.12em] text-white">Contact us</p>
            <p>강원도 춘천시 한림대학길 1, 1층 (본점)</p>
            <p>서울시 성동구 왕십리로2길 20, 카우앤독 3층 (지점)</p>
            <p>
              <a
                href="mailto:james@sopoong.net"
                className="underline decoration-white/40 underline-offset-2 transition hover:decoration-white"
              >
                james@sopoong.net
              </a>
            </p>
          </div>

          <div className="space-y-6 text-sm md:text-[15px]">
            <div>
              <a
                href="https://www.sopoong.net"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block font-bold tracking-tight text-white"
              >
                IMPACT CLIMATE <span className="inline transition group-hover:translate-x-0.5">&gt;</span>
              </a>
              <p className="mt-1.5 font-normal leading-snug text-white/90">기후테크 액셀러레이팅 프로그램</p>
            </div>
            <div>
              <a
                href="https://www.sopoong.net"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block font-bold tracking-tight text-white"
              >
                IMPACT EARTH <span className="inline transition group-hover:translate-x-0.5">&gt;</span>
              </a>
              <p className="mt-1.5 font-normal leading-snug text-white/90">농식품 액셀러레이팅 프로그램</p>
            </div>
            <div>
              <a
                href="https://www.sopoong.net"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block font-bold tracking-tight text-white"
              >
                N.Harvest X <span className="inline transition group-hover:translate-x-0.5">&gt;</span>
              </a>
              <p className="mt-1.5 font-normal leading-snug text-white/90">예비 농식품 스타트업 액셀러레이팅 프로그램</p>
            </div>
            <div>
              <a
                href="https://www.sopoong.net"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block font-bold tracking-tight text-white"
              >
                SOPOONG TYPHOON <span className="inline transition group-hover:translate-x-0.5">&gt;</span>
              </a>
              <p className="mt-1.5 font-normal leading-snug text-white/90">시작하는 창업가를 위한 시드팁스 프로그램</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
