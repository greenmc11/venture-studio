"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navIdFromHash, navPath } from "@/lib/nav";

export function HashRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const id = navIdFromHash(window.location.hash);
    if (id) {
      router.replace(navPath(id));
    }
  }, [pathname, router]);

  return null;
}
