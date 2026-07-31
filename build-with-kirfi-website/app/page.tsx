import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";
import { About } from "@/src/components/sections/About";
import { CTA } from "@/src/components/sections/CTA";
import { FeaturedProducts } from "@/src/components/sections/FeaturedProducts";
import { Hero } from "@/src/components/sections/Hero";
import { LearningPaths } from "@/src/components/sections/LearningPaths";
import { Newsletter } from "@/src/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProducts />
        <LearningPaths />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
