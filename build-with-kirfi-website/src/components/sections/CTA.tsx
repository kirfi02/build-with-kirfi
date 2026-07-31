import Link from "next/link";

import { Container } from "@/src/components/shared/Container";

export function CTA() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="rounded-lg bg-foreground px-6 py-10 text-background sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-normal sm:text-3xl">
                Start building with a sharper product lens.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-background/75">
                Follow the roadmap as Build With Kirfi grows into a practical ecosystem for developers.
              </p>
            </div>
            <Link
              href="/learn"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
