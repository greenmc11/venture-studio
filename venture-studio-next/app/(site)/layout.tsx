import { HashRedirect } from "@/components/hash-redirect";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className="relative flex min-h-screen flex-col text-[#171b18] selection:bg-emerald-200/60">
      <HashRedirect />
      <div className="relative z-10 flex flex-1 flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
