import AboutUsHero from "../components/about/AboutUsHero";
import OurStorySection from "../components/about/OurStorySection";
import NumbersSection from "../components/NumbersSection";
import MissionVisionSection from "../components/creators/MissionVisionSection";
import UnlockGrowthSection from "../components/about/UnlockGrowthSection";
import FounderSection from "../components/about/FounderSection";
import AboutTeamSection from "../components/about/AboutTeamSection";
import ReadyToElevateSection from "../components/ReadyToElevateSection";

export default function AboutPage() {
  return (
    <main className="mt-16 md:mt-20">
      <AboutUsHero />
      <OurStorySection />
      <NumbersSection />
      <MissionVisionSection />
      <UnlockGrowthSection />
      <FounderSection />
      <AboutTeamSection />
      <ReadyToElevateSection />
    </main>
  );
}
