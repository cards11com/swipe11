import AboutUsHero from "../components/about/AboutUsHero";
import OurStorySection from "../components/about/OurStorySection";
import NumbersSection from "../components/NumbersSection";

export default function AboutPage() {
  return (
    <main className="mt-16 md:mt-20">
      <AboutUsHero />
      <OurStorySection />
      <NumbersSection />
    </main>
  );
}
