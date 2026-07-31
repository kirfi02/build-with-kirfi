import Link from "next/link";

import { Container } from "@/src/components/shared/Container";

const focusAreas = [
  "AI",
  "Software",
  "Machine Learning",
  "Web Development",
  "Data Analytics",
  "Entrepreneurship",
];

export function Hero() {
  return (
    <section className="overflow-hidden bg-background">
      <Container className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Build With Kirfi
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-foreground sm:text-5xl lg:text-6xl">
            Build Products People Will Pay For.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Learn software engineering, AI, product strategy, and entrepreneurship by building
            real-world projects that solve meaningful problems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/learn"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
            >
              Start Learning
            </Link>
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="w-full rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6">
          <div className="rounded-md border border-border bg-muted/40 p-5">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Build With Kirfi
            </p>
            <div className="mt-6 grid gap-3">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center justify-between rounded-md border border-border bg-background px-4 py-3 text-sm font-medium text-foreground"
                >
                  <span>{area}</span>
                  <span className="size-2 rounded-full bg-foreground/70" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
