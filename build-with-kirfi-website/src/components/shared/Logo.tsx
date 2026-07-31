import Link from "next/link";

import { siteConfig } from "@/src/constants/site";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-base font-semibold tracking-normal text-foreground transition-colors hover:text-foreground/80"
      aria-label={`${siteConfig.name} homepage`}
    >
      {siteConfig.name}
    </Link>
  );
}
