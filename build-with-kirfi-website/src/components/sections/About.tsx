import { Container } from "@/src/components/shared/Container";
import { SectionHeading } from "@/src/components/shared/SectionHeading";

export function About() {
  return (
    <section className="border-y border-border bg-muted/35 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title="A practical ecosystem for serious builders."
          description="Build With Kirfi connects lessons, resources, templates, tools, and products around one outcome: helping developers create software that solves real problems."
        />
      </Container>
    </section>
  );
}
