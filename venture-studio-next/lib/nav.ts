export type NavId = "about" | "why" | "studio" | "founders" | "scaleexit" | "apply";

export const mainNavItems: {
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

export const NAV_IDS: NavId[] = ["about", "why", "studio", "founders", "scaleexit", "apply"];

export function navPath(id: NavId): string {
  return `/${id}`;
}

export function navIdFromHash(hash: string): NavId | null {
  try {
    const key = decodeURIComponent(hash.replace(/^#/, "").trim()).toLowerCase();
    return NAV_IDS.includes(key as NavId) ? (key as NavId) : null;
  } catch {
    return null;
  }
}

export function isNavId(s: string): s is NavId {
  return NAV_IDS.includes(s as NavId);
}
