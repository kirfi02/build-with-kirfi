"use client";

import { Menu, Moon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/src/components/shared/Container";
import { Logo } from "@/src/components/shared/Logo";
import { navigation } from "@/src/data/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Dark mode placeholder"
            >
              <Moon className="size-4" aria-hidden="true" />
            </button>
            <Link
              href="/start"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex items-center gap-2 px-3">
              <button
                type="button"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground"
                aria-label="Dark mode placeholder"
              >
                <Moon className="size-4" aria-hidden="true" />
              </button>
              <Link
                href="/start"
                className="inline-flex h-9 flex-1 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
