import { Container } from "@/src/components/shared/Container";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { learningPaths } from "@/src/data/learning-paths";

export function LearningPaths() {
  return (
    <section className="border-y border-border bg-muted/35 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Learning Paths"
          title="Learn by building products, not by collecting theory."
          description="The curriculum will grow around skills that help builders ship useful software."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {learningPaths.map((path, index) => (
            <article key={path.title} className="rounded-lg border border-border bg-background p-6">
              <p className="text-sm font-medium text-muted-foreground">Path {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{path.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{path.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
