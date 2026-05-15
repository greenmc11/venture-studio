"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Building,
  Building2,
  ChartLine,
  CircleDollarSign,
  ClipboardList,
  Cpu,
  Crown,
  ExternalLink,
  Factory,
  FlaskConical,
  Handshake,
  Heart,
  Landmark,
  Leaf,
  Lightbulb,
  Maximize2,
  Megaphone,
  Rocket,
  Salad,
  Scale,
  Search,
  Share2,
  Shield,
  Shuffle,
  TrendingUp,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";
import {
  type ComponentType,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import type { NavId } from "@/lib/nav";

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

const iamProgramPhases: {
  titleEn: string;
  titleKo: string;
  icon: ComponentType<{ className?: string }>;
  summary: string;
  bullets: string[];
}[] = [
  {
    titleEn: "Find",
    titleKo: "발굴하기",
    icon: Search,
    summary:
      "의미 있는 채널에서 팀을 발굴하고, 사회적가치에 대한 합의를 전제로 사전 액셀러레이팅·실사·투자심의를 거쳐 시드 투자로 이어집니다.",
    bullets: [
      "정기·수시 모집과 서류평가",
      "사전 액셀러레이팅(최소 2회)에서 다음 미팅까지 목표·과제 부여",
      "실사 및 투자심의, 합의된 소셜미션·핵심 KPI 반영",
      "시드머니 투자",
    ],
  },
  {
    titleEn: "Validate",
    titleKo: "검증하기",
    icon: FlaskConical,
    summary:
      "12주 동안 임팩트 MVP와 성장 가설에 집중합니다. 팀 상황에 맞춘 맞춤형 액셀러레이팅을 담당 심사역 중심으로 운영합니다.",
    bullets: [
      "주 1회 오피스아워와 통합관리장표 기반 가설–실험–피드백",
      "프리뷰, 임팩트 생태계 네트워킹",
      "데모데이로 단계를 마무리",
    ],
  },
  {
    titleEn: "Expand",
    titleKo: "확장하기",
    icon: Maximize2,
    summary:
      "프로그램 이후에도 장기 관계를 유지하며 성장·재무·임팩트 측정을 함께 다룹니다.",
    bullets: [
      "임팩트 투자자·VC·정부지원을 아우르는 재무전략 컨설팅",
      "후속 오피스아워(월 1회, 6개월)로 사업 현황·성장 방향 점검",
      "합의한 임팩트 KPI 추적·연간 임팩트 리포트",
    ],
  },
];

const softPrinciples: {
  letter: string;
  titleEn: string;
  titleKo: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    letter: "S",
    titleEn: "Sensitivity",
    titleKo: "감수성",
    body:
      "사회적 배제와 차별에 유의하며, 젠더렌즈·관찰자 제도·조직 가이드라인 등으로 투자·액셀러레이팅 과정을 설계합니다.",
    icon: Heart,
  },
  {
    letter: "O",
    titleEn: "Operations",
    titleKo: "실행성",
    body:
      "린스타트업 원리에 따라 실행에서 나온 데이터로 논의합니다. 오피스아워와 통합관리장표로 가설 검증을 가시화합니다.",
    icon: Activity,
  },
  {
    letter: "F",
    titleEn: "Flexibility",
    titleKo: "유연성",
    body:
      "창업가와의 대화·합의에 기반해 운영합니다. 잠정적 합의와 실험, 데이터에 따른 재합의로 방향을 조정합니다.",
    icon: Shuffle,
  },
  {
    letter: "T",
    titleEn: "Teamship",
    titleKo: "팀십",
    body:
      "심사역이 팀에 밀착해 함께합니다. 일 단위 소통과 책임감 있는 동행으로 신뢰 관계를 쌓는 것을 중요하게 봅니다.",
    icon: UsersRound,
  },
];

const ventureStudioIntroParas: string[] = [
  "소풍(Sopoong)이 가진 ‘임팩트/기후 투자’의 전문성과 브랜드 파워를 활용해 ‘프랜차이즈형 벤처스튜디오’ 모델을 실행합니다. 소풍은 가맹본사로서 각 스튜디오 대표가 오직 컴퍼니 빌딩에만 집중할 수 있는 환경을 최대한 조성·제공합니다.",
  "각 스튜디오를 이끄는 대표는 ‘감독’이 되고, 소풍벤처스는 ‘리그 운영국’으로서 각 스튜디오 대표들이 자신만의 색깔로 팀을 꾸리되, 소풍이 정한 ‘임팩트’라는 최소한의 룰 안에서 마음껏 경기할 수 있도록 자본과 규격화된 시스템을 제공하기 위해 노력하겠습니다.",
  "가맹본사(소풍)가 제공 할 핵심 솔루션을 5가지 영역으로 정리해 보았습니다.",
];

const ventureStudioPillars: {
  title: string;
  titleEn: string;
  icon: ComponentType<{ className?: string }>;
  bullets: string[];
}[] = [
  {
    title: "홍보 및 선정 지원",
    titleEn: "Promotion & Selection",
    icon: Megaphone,
    bullets: [
      "스튜디오 지원자를 모집-선정하기 위한 홍보를 지원합니다.",
      "선정 프로세스 설계: 스튜디오의 목적에 따라 창업가를 모집하기 위한 프로세스를 설계하고 실행을 지원합니다.",
      "보도자료 및 SNS 홍보: 소풍이 보유한 기자 네트워크를 통해 보도자료를 배포하고 SNS 채널을 통해 홍보를 지원합니다. 1~2백만 원 이내의 유료 광고도 지원합니다.",
      "오프라인 홍보: 스튜디오 지원팀 모집을 위한 오프라인 행사를 진행할 경우, 공간 대관 및 현장 운영을 지원합니다.",
      "선정 참여: 스튜디오에서 선발할 창업가를 선정하는 과정에 참여합니다. 평가, 평판 조사, 사전 액셀러레이팅 등을 함께 합니다.",
    ],
  },
  {
    title: "오피스 제공(Shared Office)",
    titleEn: "Shared Office",
    icon: Building,
    bullets: [
      "업무를 위한 사무실과 회의 공간을 제공합니다.",
      "Office: 소풍 사무실 한 켠에 마련된 공유 데스크를 무상으로 제공합니다. 스튜디오에서 발굴한 팀이 별도 오피스가 필요한 경우 조건·상황에 따라 유·무료로 오피스를 제공합니다.",
      "회의공간: 소풍 사무실의 회의실을 제공합니다.",
    ],
  },
  {
    title: "인프라 및 백오피스 솔루션",
    titleEn: "Shared Service",
    icon: ClipboardList,
    bullets: [
      "창업가들이 가장 번거로워하는 ‘관리’ 업무를 제공합니다. 스튜디오 대표의 리소스도 절약합니다.",
      "Standard Operating Procedure (SOP): 창업가들의 법인 설립 지원, 주주간 계약서 작성, 등기 업무 등 반복적인 행정 절차를 6개월 간 지원합니다.",
      "백오피스 지원: 인사(HR), 재무/회계 등 소풍의 백오피스에서 가능한 지원을 제공합니다.",
    ],
  },
  {
    title: "자본 조달 및 펀드 매니지먼트",
    titleEn: "Capital & Fund-raising",
    icon: CircleDollarSign,
    bullets: [
      "각 스튜디오가 독자적으로 진행하기 어려운 펀레이징을 수행합니다.",
      "스튜디오 전용 펀드 조성과 운영: 소풍이 GP(무한책임조합원)로서 각 스튜디오가 투자할 수 있는 하위 개인투자조합을 결성·매칭하거나 시드 자금을 공급합니다. 펀드 운영도 서포트합니다. 소풍 역시 해당 펀드 및 직접 투자에 참여해 지분을 최대한 많이 확보하는 접근을 펼치고, 후속 투자도 연계합니다.",
      "팁스(TIPS): 소풍이 가진 TIPS 티켓을 각 스튜디오 프로젝트에 우선 배정할 수 있도록 합니다.",
      "후속투자 집행 및 유치: 소풍이 보유한 투자조합에서 직접 후속투자를 적극적으로 검토합니다. 또한 타 투자사-네트워크를 활용하여 후속투자를 돕습니다.",
    ],
  },
  {
    title: "브랜드 자산 및 대외 협력",
    titleEn: "Brand & Network",
    icon: Share2,
    bullets: [
      "‘소풍’ 브랜드를 활용하여 인재를 채용하거나 파트너십·제휴 등 신뢰도를 높이도록 합니다.",
      "통합 브랜드 가이드라인: ‘Sopoong Impact’, ‘Sopoong AI’ 등 서브 브랜딩을 지원합니다.",
      "글로벌/로컬 파트너십: 소풍이 맺어놓은 대기업(Open Innovation), 정부 기관, 글로벌 투자사와의 협력 네트워크를 공유합니다.",
      "PR 및 마케팅 지원: 각 스튜디오에서 배출한 팀들의 언론 홍보 및 데모데이 등 홍보를 지원합니다.",
    ],
  },
  {
    title: "거버넌스 및 인센티브 설계",
    titleEn: "Governance & Upside",
    icon: Scale,
    bullets: [
      "가맹점주로서 각 스튜디오 대표가 오너십을 갖고 뛸 수 있도록 만드는 구조를 설계합니다.",
      "수익 배분 모델: 소풍 투자 지분에서 엑시트(Exit) 발생 시 소풍과 스튜디오 대표 간의 순이익을 배분합니다.",
      "교차 참여 기회: 개별 스튜디오의 기술을 다른 스튜디오의 포트폴리오에 이식하는 등 스튜디오 간 시너지(Cross-pollination)를 극대화합니다.",
    ],
  },
];

const ventureStudioPlaybookBullets: string[] = [
  "소풍이 보유하고 있는 액셀러레이팅 매뉴얼을 제공합니다. 기업가를 길러내기 위해서는 심사역 또한 기업가의 마인드를 갖춰야 합니다. 기업가의 수준에서 함께하기 위한 매뉴얼과 툴을 제공합니다.",
  "만다라트 액셀러레이팅: 개별 창업가의 상황을 진단하고 그 다음 단계로 진입시키기 위해 함께 문제를 정의하고, MVP(최소 기능 제품) 테스트, 시장 적합성(PMF) 등을 정의하고 과업으로 설정하기 위한 체크리스트를 제공합니다.",
  "임팩트 리포트 제공: 임팩트를 추구하는 비즈니스의 경우, 자체 보유한 임팩트 리포트 포맷을 제공합니다.",
];

type FounderIntroPara = string | readonly [string, string];

const founderPillars: {
  title: string;
  icon: ComponentType<{ className?: string }>;
  paragraphs: FounderIntroPara[];
  bullets: string[];
}[] = [
  {
    title: "Market View",
    icon: TrendingUp,
    paragraphs: [
      "시장을 바라보는 자신만의 관점과 문제의식.",
      [
        "단순히 기존 시장을 따라가는 것이 아니라,",
        "새로운 시장과 변화를 만들어낼 수 있는 사고를 중요하게 생각합니다.",
      ],
    ],
    bullets: [
      "시장 창출 능력",
      "역발상적 사고",
      "문제 정의 능력",
      "산업에 대한 통찰",
    ],
  },
  {
    title: "Execution",
    icon: Zap,
    paragraphs: [
      "아이디어보다 중요한 것은 결국 실행이라고 믿습니다.",
      "빠르게 움직이고, 문제를 해결하며, 끝까지 밀어붙일 수 있는 집요함을 중요하게 생각합니다.",
    ],
    bullets: ["실행 속도", "문제 해결 능력", "회복 탄력성", "집요함과 추진력"],
  },
  {
    title: "Learning Agility",
    icon: BookOpen,
    paragraphs: [
      [
        "빠르게 변화하는 시대에는",
        "얼마나 많이 알고 있는가보다 얼마나 빠르게 배우고 적응할 수 있는지가 중요합니다.",
      ],
    ],
    bullets: ["빠른 학습 능력", "적응력", "호기심", "성장 마인드셋"],
  },
  {
    title: "Leadership",
    icon: Crown,
    paragraphs: [
      [
        "좋은 창업가는 단순한 관리자가 아니라",
        "사람과 조직을 성장시키는 리더라고 생각합니다.",
      ],
    ],
    bullets: [
      "서번트 리더십",
      "비전 제시 능력",
      "팀 빌딩 역량",
      "강한 오너십",
    ],
  },
  {
    title: "AI Literacy",
    icon: Cpu,
    paragraphs: [
      [
        "AI는 이제 특정 산업의 기술이 아니라",
        "모든 산업의 기본 인프라가 되어가고 있습니다.",
      ],
      "우리는 AI를 이해하고 실제 실행에 활용할 수 있는 창업가를 중요하게 생각합니다.",
    ],
    bullets: [
      "AI 기반 사고",
      "자동화 활용 역량",
      "AI 도구 활용 능력",
      "인간과 AI의 협업 역량",
    ],
  },
  {
    title: "Resilience",
    icon: Shield,
    paragraphs: [
      [
        "혁신은 대부분 불확실성과 실패를 동반합니다.",
        "우리는 어려운 상황에서도 다시 배우고, 회복하고, 앞으로 나아갈 수 있는 힘을 중요하게 생각합니다.",
      ],
    ],
    bullets: [
      "끈기와 지속성",
      "감정적 안정감",
      "장기적 사고",
      "스트레스 관리 능력",
    ],
  },
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

function SectionPageHeading({
  title,
  icon: Icon,
}: {
  title: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <Icon className="h-6 w-6 shrink-0 text-[#1e6c4f]" />
      <h1 id="page-title" className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
        {title}
      </h1>
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

function FounderIntroParagraphs({ paragraphs }: { paragraphs: FounderIntroPara[] }) {
  const pClass = "text-[#39453e] text-base leading-relaxed md:text-lg";
  return (
    <div className="space-y-3">
      {paragraphs.map((para, i) =>
        typeof para === "string" ? (
          <p key={i} className={pClass}>
            {para}
          </p>
        ) : (
          <p key={i} className={pClass}>
            {para[0]}
            <br />
            {para[1]}
          </p>
        ),
      )}
    </div>
  );
}

function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-[#cdd7cf] px-4 py-3 text-sm outline-none focus:border-[#2f745d]"
    />
  );
}

function WhyVentureStudioVision() {
  const p = "text-[#39453e] text-base leading-[1.75] md:text-lg md:leading-[1.8]";

  return (
    <>
      <SectionPageHeading title="왜 Venture Studio인가" icon={Lightbulb} />
      <div className="max-w-3xl space-y-6 md:space-y-7">
        <p className={`${p} font-medium text-neutral-900`}>
          세계에서 가장 빠른 수준의 노령화와 인구 감소,
          <br />
          높은 에너지 및 자원 해외 의존도, 저성장과 생산성 둔화.
        </p>
        <p className={p}>지금 한국이 마주하고 있는 구조적 한계는 분명합니다.</p>
        <p className={p}>
          우리는 과거 이러한 한계를
          <br />
          도전정신과 성실함을 바탕으로 한 Fast Follower 전략을 통해 극복해왔습니다.
        </p>
        <p className={p}>
          하지만 기존의 성공 방식만으로는
          <br />
          현재의 한계를 돌파하기가 점점 버거워 보입니다.
        </p>
        <p className={p}>
          AI는 산업의 질서를 빠르게 바꾸고 있고,
          <br />
          기후·에너지·인구 구조의 변화 역시 기존의 산업과 시장을 재편하고 있습니다.
        </p>
        <p className={p}>
          우리는 이러한 변화가 한국 사회와 산업에 큰 위기이면서 동시에
          <br />
          새로운 기회가 될 수 있다고 생각합니다.
        </p>
        <p className={p}>
          과거에는 더 많은 자본과 정보를 가진 기업이 유리했다면,
          <br />
          이제는 누가 더 빠르게 배우고 실행하며 진화할 수 있는지가
          <br />
          훨씬 중요해지고 있습니다.
        </p>
        <p className={p}>
          하지만 기존 VC 모델은
          <br />
          빠른 성장과 빠른 Exit 중심의 구조를 가지고 있습니다.
        </p>
        <p className={p}>
          우리가 만들고 싶은 것은
          <br />
          단순히 빠르게 성장하는 스타트업이 아닙니다.
        </p>
        <p className={p}>
          산업의 방향을 바꾸고, 오랫동안 살아남으며,
          <br />
          임팩트와 지속가능한 성장이 함께 갈 수 있다는 것을 증명하는 회사입니다.
        </p>
        <p className={p}>우리는 결국 한국의 답은 다시 한 번 ‘도전’에 있다고 믿습니다.</p>
        <p className={p}>
          그리고 그 도전의 중심에는
          <br />
          기존의 공식을 반복하는 기업이 아니라,
          <br />
          새로운 산업과 시장을 만들어가는 스타트업이 있다고 생각합니다.
        </p>
        <p className={p}>
          우리는 완벽한 예측보다
          <br />
          유연한 실행과 집단지성의 힘을 믿습니다.
        </p>
        <p className={p}>
          그래서 우리는 단순히 투자하지 않습니다.
          <br />
          창업가들과 함께 미래의 회사를 직접 빌드합니다.
        </p>
        <p className={p}>
          우리는 단순한 자금 지원을 넘어,
          <br />
          창업가들이 더 빠르게 배우고 실행하며 성장할 수 있도록
          <br />
          다양한 운영적·전략적 지원을 함께 만들어갑니다.
        </p>
        <p className={p}>
          또한 다양한 창업가·운영자·산업 전문가들과의 연결과 협업을 통해
          <br />
          팀들이 더 빠르게 진화하고 성장할 수 있는 환경을 함께 구축하고자 합니다.
        </p>
      </div>
    </>
  );
}

/** 소풍 ABOUT 상단 타이포 + 페이지 제목(랜드마크 아이콘 + 소풍벤처스) */
function SopoongVenturesAboutHero() {
  const blue = "text-[#2038c8]";
  const navy = "text-[#0f172a]";

  return (
    <>
      <div className="mb-6 flex items-center gap-3">
        <Landmark className="h-6 w-6 shrink-0 text-[#2038c8]" aria-hidden />
        <h1 id="page-title" className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
          소풍벤처스
        </h1>
      </div>
      <section
        className="max-w-4xl py-2 md:py-4"
        aria-labelledby="about-hero-heading"
      >
        <h2
          id="about-hero-heading"
          className={`text-[clamp(1.35rem,4.2vw,2.75rem)] font-bold leading-[1.18] tracking-[-0.02em] ${navy}`}
        >
          <span className="block max-w-[min(100%,42rem)]">
            <span className={blue}>Solving big </span>
            <span className={blue}>problems </span>
            <span className={navy}>through </span>
          </span>
          <span className="mt-1 block max-w-[min(100%,42rem)] overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className={`inline-block whitespace-nowrap ${navy}`}>
              <span className={navy}>impact investing and accelerating</span>
              <span className={blue}>.</span>
            </span>
          </span>
        </h2>
        <div className={`mt-8 max-w-[min(100%,36rem)] text-lg font-medium leading-[1.65] md:mt-10 md:text-xl md:leading-[1.7] ${navy}`}>
          <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-visible">
            <p className={`inline-block min-w-0 whitespace-nowrap ${navy}`}>
              <span className={navy}>소풍벤처스는 </span>
              <span className={blue}>
                사회 문제를 더 빠르고, 더 지속가능하고, 더 근본적으로 해결하고{"\u00A0"}혁신하기 위해
              </span>
            </p>
          </div>
          <p className="mt-2 md:mt-3">
            <span className={navy}>2008년 국내 최초로 설립된 임팩트 투자사로 시작했습니다.</span>
          </p>
        </div>
      </section>

      <section
        className="mt-12 max-w-4xl border-t border-neutral-300/60 pt-10 md:mt-16 md:pt-12"
        aria-labelledby="investment-philosophy-heading"
      >
        <h2
          id="investment-philosophy-heading"
          className="text-[clamp(1.75rem,3.8vw,2.65rem)] font-bold leading-snug tracking-tight text-[#0f172a]"
        >
          Investment Philosophy<span className={blue}>.</span>
        </h2>
        <p className="mt-6 max-w-4xl text-lg font-bold leading-relaxed text-[#0f172a] md:mt-7 md:text-xl md:leading-relaxed">
          소풍벤처스는 국내 최초의 임팩트 액셀러레이터이자 투자사로서 사회적 가치가 큰 분야에 투자해왔습니다.
        </p>
        <p className="mt-4 max-w-4xl text-base font-normal leading-relaxed text-neutral-600 md:text-lg md:leading-relaxed">
          우리는 환경적, 사회적, 경제적으로 큰 임팩트를 창출하는 비즈니스에 투자하고 성장을 지원함으로써 더욱 지속 가능하고
          <br className="max-md:hidden" />
          재생 가능한 경제를 구축하는 데 기여한다고 믿습니다.
        </p>
        <p className="mt-8 md:mt-10">
          <a
            href="https://sopoong.net/?lang=ko-KR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#0f6a4b] underline decoration-[#0f6a4b]/35 underline-offset-[5px] transition hover:decoration-[#0f6a4b] md:text-[17px]"
          >
            소풍벤처스 공식 홈페이지
            <ExternalLink className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
          </a>
        </p>
      </section>

      <section
        className="mt-12 max-w-4xl border-t border-neutral-300/60 pt-10 md:mt-16 md:pt-12"
        aria-labelledby="toma-investment-heading"
      >
        <div className="mb-6 flex items-center gap-3">
          <Landmark className="h-6 w-6 shrink-0 text-[#1e6c4f]" aria-hidden />
          <h2
            id="toma-investment-heading"
            className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl"
          >
            토마 인베스트먼트
          </h2>
        </div>
        <p
          className={`max-w-4xl text-lg font-medium leading-snug break-keep md:text-xl md:leading-snug ${navy}`}
        >
          토마 인베스트먼트는 대한민국의 임팩트 창업 생태계를 지원하고
          <br />
          <span className="font-semibold text-[#1e6c4f]">창의력 있는 인재들의 발굴과 혁신에 일조</span>
          하기 위해 2021년 시작된{" "}
          <span className="whitespace-nowrap">패밀리 오피스입니다.</span>
        </p>
      </section>
    </>
  );
}

const studioBody = "text-[#39453e] text-base leading-relaxed md:text-lg";

function VentureStudioServiceSection() {
  return (
    <section
      className="mt-10 max-w-4xl border-t border-neutral-300/60 pt-10 md:mt-12 md:pt-12"
      aria-labelledby="venture-studio-service-heading"
    >
      <h2
        id="venture-studio-service-heading"
        className="text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl"
      >
        소풍의 벤처스튜디오 서비스/역할
      </h2>
      <div className="mt-6 max-w-3xl space-y-5">
        {ventureStudioIntroParas.map((para, i) => (
          <p key={i} className={studioBody}>
            {para}
          </p>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {ventureStudioPillars.map(({ title, titleEn, icon: Icon, bullets }, idx) => (
          <FadeCard key={title} delay={idx * 0.04} instant>
            <div className="flex gap-3">
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-[#1f6d50]" aria-hidden />
              <div className="min-w-0">
                <h3 className="text-base font-semibold leading-snug text-neutral-950 md:text-lg">{title}</h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-neutral-500">{titleEn}</p>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#39453e] md:text-[15px]">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#2f745d]"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeCard>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-[#c8d2c9] bg-[#f9faf9] p-6 md:p-7">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-lg font-semibold text-[#1f6d50]" aria-hidden>
            *
          </span>
          <BookOpen className="h-6 w-6 shrink-0 text-[#1f6d50]" aria-hidden />
          <h3 className="text-lg font-semibold text-neutral-950">컴퍼니 빌딩 플레이북</h3>
          <span className="text-sm text-neutral-600">(The Studio Playbook)</span>
        </div>
        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#39453e] md:text-[15px]">
          {ventureStudioPlaybookBullets.map((b) => (
            <li key={b} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#2f745d]" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StudioIamSoftSection() {
  return (
    <>
      <section
        className="mt-12 max-w-4xl border-t border-neutral-300/60 pt-10 md:mt-14 md:pt-12"
        aria-labelledby="studio-iam-heading"
      >
        <h2
          id="studio-iam-heading"
          className="text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl"
        >
          IAM · 임팩트 액셀러레이팅
        </h2>
        <p className={`mt-4 max-w-3xl ${studioBody}`}>
          소풍이 쌓아 온{" "}
          <strong className="font-semibold text-neutral-900">임팩트 액셀러레이팅 방법론(IAM)</strong>은
          발굴(Find), 검증(Validate), 확장(Expand)의 세 단계로 프로그램을 설계합니다. 액셀러레이팅 기간 동안
          우리는 아래 질문에 함께 답을 찾습니다.
        </p>
        <blockquote className="mt-5 max-w-3xl border-l-[3px] border-[#1f6d50] pl-4 text-[15px] font-medium leading-snug text-neutral-800 md:pl-5 md:text-base md:leading-snug">
          사회적가치의 추구와 비즈니스의 성장이 단단히 결합한 임팩트 MVP를 어떻게 찾고 검증할 수 있을까?
        </blockquote>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#d4ddd4] bg-[#f9faf9] p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f6d50]">SPA</p>
            <p className="mt-1 text-lg font-semibold text-neutral-950">사회적가치와 이윤의 결합</p>
            <p className={`mt-3 text-sm leading-relaxed md:text-base ${studioBody}`}>
              이윤을 창출하는 과정에서 자연스럽게 사회적가치가 만들어지는 비즈니스 모델을 지향합니다.{" "}
              <span className="font-medium text-neutral-800">Business Growth = Impact Growth</span>
            </p>
          </div>
          <div className="rounded-2xl border border-[#d4ddd4] bg-[#f9faf9] p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1f6d50]">IBM</p>
            <p className="mt-1 text-lg font-semibold text-neutral-950">임팩트–비즈니스 모델</p>
            <p className={`mt-3 text-sm leading-relaxed md:text-base ${studioBody}`}>
              임팩트 MVP를 통해 고객 피드백 기반의 최소 기능 제품과 서비스를 확보하고, 비즈니스 모델과 임팩트
              모델을 동시에 갖추는 지점을 목표로 합니다.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {iamProgramPhases.map(({ titleEn, titleKo, icon: Icon, summary }, idx) => (
            <FadeCard key={titleEn} delay={idx * 0.05} instant>
              <Icon className="mb-3 h-6 w-6 text-[#1f6d50]" aria-hidden />
              <p className="font-semibold text-neutral-950">
                {titleEn}
                <span className="font-normal text-neutral-500"> · {titleKo}</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#39453e] md:text-[15px]">{summary}</p>
            </FadeCard>
          ))}
        </div>
      </section>

      <section
        className="mt-12 max-w-4xl border-t border-neutral-300/60 pt-10 md:mt-14 md:pt-12"
        aria-labelledby="studio-soft-heading"
      >
        <h2
          id="studio-soft-heading"
          className="text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl"
        >
          SOFT · 운영 원칙
        </h2>
        <p className={`mt-4 max-w-3xl ${studioBody}`}>
          액셀러레이팅을 설계·운영할 때 소풍이 지키는 네 가지 원칙입니다.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {softPrinciples.map(({ letter, titleEn, titleKo, body, icon: Icon }, idx) => (
            <FadeCard key={titleEn} delay={idx * 0.05} instant>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e8f0eb] text-sm font-bold text-[#145239]">
                  {letter}
                </span>
                <div className="min-w-0">
                  <Icon className="mb-1.5 h-5 w-5 text-[#2a7057]" aria-hidden />
                  <p className="font-semibold leading-snug text-neutral-950">
                    {titleEn}
                    <span className="block text-sm font-normal text-neutral-600">{titleKo}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#39453e]">{body}</p>
                </div>
              </div>
            </FadeCard>
          ))}
        </div>
      </section>
    </>
  );
}

function ScheduleIamSection() {
  return (
    <section className="mb-10 max-w-4xl" aria-labelledby="schedule-iam-heading">
      <h2
        id="schedule-iam-heading"
        className="text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl"
      >
        프로그램 3단계 · IAM
      </h2>
      <p className={`mt-4 max-w-3xl ${studioBody}`}>
        선발 이후 전체 여정은 <strong className="font-semibold text-neutral-900">발굴(Find)</strong>에서 시작해{" "}
        <strong className="font-semibold text-neutral-900">검증(Validate)</strong>,{" "}
        <strong className="font-semibold text-neutral-900">확장(Expand)</strong>으로 이어집니다. 아래는 각 단계에서
        다루는 핵심 활동입니다.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {iamProgramPhases.map(({ titleEn, titleKo, icon: Icon, summary, bullets }, idx) => (
          <FadeCard key={titleEn} delay={idx * 0.06} instant>
            <Icon className="mb-3 h-6 w-6 text-[#1f6d50]" aria-hidden />
            <p className="font-semibold text-neutral-950">
              {titleEn}
              <span className="font-normal text-neutral-500"> · {titleKo}</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#39453e]">{summary}</p>
            <ul className="mt-4 space-y-2 border-t border-neutral-200/80 pt-4 text-sm text-[#30403a]">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2 leading-snug">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#2f745d]" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </FadeCard>
        ))}
      </div>
    </section>
  );
}

export function SectionPageContent({ section }: { section: NavId }) {
  switch (section) {
    case "about":
      return <SopoongVenturesAboutHero />;
    case "why":
      return <WhyVentureStudioVision />;
    case "studio":
      return (
        <>
          <SectionPageHeading title="Benefits · 지원사항" icon={Building2} />
          <div className="mb-8 space-y-3 text-[#39453e]">
            <p>기후테크만 고집하지 않음</p>
            <p>우리가 깊이 이해하고 함께 키울 수 있는 팀을 선발</p>
          </div>

          <VentureStudioServiceSection />

          <StudioIamSoftSection />

          <div className="mt-12 max-w-4xl border-t border-neutral-300/60 pt-10 md:mt-14 md:pt-12">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl">관심 분야</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {buildCards.map(({ title, icon: Icon }, idx) => (
                <FadeCard key={title} delay={idx * 0.05} instant>
                  <Icon className="mb-4 h-8 w-8 text-[#1f6d50]" />
                  <p className="font-semibold">{title}</p>
                </FadeCard>
              ))}
            </div>
          </div>

          <div className="mt-8 max-w-4xl">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl">실무 지원</h2>
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
          </div>
        </>
      );
    case "founders":
      return (
        <>
          <SectionPageHeading title="Founders · 창업자" icon={Users} />
          <div className="max-w-3xl space-y-8 md:space-y-10">
            {founderPillars.map(({ title, icon: Icon, paragraphs, bullets }, idx) => (
              <FadeCard key={title} delay={idx * 0.05} instant>
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-[#1f6d50]" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold tracking-tight text-neutral-950 md:text-xl">
                      {title}
                    </h2>
                    <div className="mt-4">
                      <FounderIntroParagraphs paragraphs={paragraphs} />
                    </div>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {bullets.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-dashed border-[#c8d2c9] bg-[#f9faf9] px-3 py-2.5 text-sm font-medium text-[#30403a]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeCard>
            ))}
          </div>
        </>
      );
    case "scaleexit":
      return (
        <>
          <SectionPageHeading title="Schedule · 일정" icon={ChartLine} />
          <ScheduleIamSection />
          <h2 className="text-xl font-semibold tracking-tight text-neutral-950 md:text-2xl">성장 로드맵</h2>
          <p className="mt-3 max-w-3xl text-[#39453e]">
            팀별 단계에 맞춰 검증·트랙션·스케일까지의 목표를 함께 잡고, 후속 투자와 엑시트 가능성까지 염두에 둡니다.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-5">
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
          <SectionPageHeading title="Apply" icon={Rocket} />
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-xl font-semibold">지원 일정</h2>
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
              <h2 className="text-xl font-semibold">2026 프로그램 지원하기</h2>
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
