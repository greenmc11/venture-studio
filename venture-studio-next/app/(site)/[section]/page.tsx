import Link from "next/link";
import { notFound } from "next/navigation";
import { NAV_IDS, isNavId } from "@/lib/nav";
import { SectionPageContent } from "@/components/section-views";

export function generateStaticParams() {
  return NAV_IDS.map((section) => ({ section }));
}

type Props = { params: Promise<{ section: string }> };

export default async function SectionRoutePage({ params }: Props) {
  const { section } = await params;
  if (!isNavId(section)) notFound();

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 pb-24 md:px-10 md:py-12">
      <nav className="mb-8" aria-label="breadcrumb">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-950 hover:decoration-neutral-500"
        >
          ← 홈
        </Link>
      </nav>
      <SectionPageContent section={section} />
    </main>
  );
}
