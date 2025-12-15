import CareersHero from "../components/careers/CareersHero";
import CorePerksSection from "../components/careers/CorePerksSection";
import OpenPositionsSection from "../components/careers/OpenPositionsSection";
import MissionVisionSection from "../components/creators/MissionVisionSection";
import TeamSection from "../components/careers/TeamSection";
import ReadyToElevateSection from "../components/ReadyToElevateSection";

export default function CareersPage() {
  return (
    <main className="mt-16 md:mt-20">
      <CareersHero />
      <CorePerksSection />
      <OpenPositionsSection />
      <MissionVisionSection />
      <TeamSection />
      <ReadyToElevateSection />
    </main>
  );
}
