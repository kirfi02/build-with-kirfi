import Link from "next/link";

import { Container } from "@/src/components/shared/Container";
import { Logo } from "@/src/components/shared/Logo";
import { siteConfig } from "@/src/constants/site";
import { navigation } from "@/src/data/navigation";

const socialLinks = [
  { label: "X", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/35">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Quick Links</h2>
            <div className="mt-4 grid gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Products</h2>
            <div className="mt-4 grid gap-3">
              <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                Templates
              </Link>
              <Link href="/academy" className="text-sm text-muted-foreground hover:text-foreground">
                Academy
              </Link>
              <Link href="/tools" className="text-sm text-muted-foreground hover:text-foreground">
                AI Tools
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Social Links</h2>
            <div className="mt-4 grid gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © 2026 {siteConfig.name}
        </div>
      </Container>
    </footer>
  );
}
