import HeroSection from "../../components/common/HeroSection";
import StatsSection from "../../components/common/StatsSection";
import TechStackSection from "../../components/common/TechStackSection";
import FeaturedProjectsSection from "../../components/common/FeaturedProjectsSection";
import ExperiencePreviewSection from "../../components/common/ExperiencePreviewSection";
import CallToActionSection from "../../components/common/CallToActionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TechStackSection />
      <FeaturedProjectsSection />
      <ExperiencePreviewSection />
      <CallToActionSection />
    </>
  );
}