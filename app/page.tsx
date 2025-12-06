import Hero from "./components/Hero";
import NumbersSection from "./components/NumbersSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import GlobalFootprintSection from "./components/GlobalFootprintSection";
import ReadyToElevateSection from "./components/ReadyToElevateSection";

export default function Home() {
  return (
    <main className="mt-16 md:mt-20">
      <Hero />
      <NumbersSection />
      <ServicesSection />
      <WhyChooseSection />
      <GlobalFootprintSection />
      <ReadyToElevateSection />
    </main>
  );
}
