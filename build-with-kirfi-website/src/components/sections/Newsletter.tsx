import { Container } from "@/src/components/shared/Container";

export function Newsletter() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-6 rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal text-foreground">Newsletter</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              Get practical notes on software, AI, product thinking, and the business of building.
            </p>
          </div>
          <form className="flex w-full flex-col gap-3 sm:flex-row lg:w-[28rem]">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              className="h-11 min-w-0 flex-1 rounded-lg border border-input bg-background px-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-3 focus:ring-ring/30"
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
            >
              Join Newsletter
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
