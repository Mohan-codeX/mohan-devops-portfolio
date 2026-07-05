import EducationHero from "./EducationHero";
import EducationTimeline from "./EducationTimeline";
import Certifications from "./Certifications";
import LearningJourney from "./LearningJourney";
import EducationHighlights from "./EducationHighlights";

export default function Education() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-[140px]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-28 px-6 py-16 lg:px-8">
        <EducationHero />

        <EducationTimeline />

        <Certifications />

        <LearningJourney />

        <EducationHighlights />
      </div>
    </main>
  );
}