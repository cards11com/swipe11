import CareersHero from "../components/careers/CareersHero";
import CorePerksSection from "../components/careers/CorePerksSection";
import OpenPositionsSection from "../components/careers/OpenPositionsSection";

export default function CareersPage() {
  return (
    <main className="mt-16 md:mt-20">
      <CareersHero />
      <CorePerksSection />
      <OpenPositionsSection />
    </main>
  );
}
