import CreatorsHero from "../components/creators/CreatorsHero";
import NumbersSection from "../components/NumbersSection";
import WhyJoinSection from "../components/creators/WhyJoinSection";
import NavigateSection from "../components/creators/NavigateSection";
import MissionVisionSection from "../components/creators/MissionVisionSection";
import TalkToUsSection from "../components/TalkToUsSection";

export default function CreatorsPage() {
  return (
    <main className="mt-16 md:mt-20">
      <CreatorsHero />
      <NumbersSection />
      <WhyJoinSection />
      <MissionVisionSection />
      <NavigateSection />
      <TalkToUsSection />
    </main>
  );
}
