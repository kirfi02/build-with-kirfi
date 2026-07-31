import { Container } from "@/src/components/shared/Container";
import { SectionHeading } from "@/src/components/shared/SectionHeading";
import { products } from "@/src/data/products";

export function FeaturedProducts() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Featured Resources"
          title="Tools and resources with a clear job."
          description="Each asset is designed to move a builder from idea to shipped product with less noise."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{product.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
