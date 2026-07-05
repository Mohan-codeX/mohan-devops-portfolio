import ExperienceHero from "./ExperienceHero";
import Timeline from "./Timeline";
import Journey from "./Journey";
import Responsibilities from "./Responsibilities";
import TechStack from "./TechStack";
import Highlights from "./Highlights";

export default function Experience() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[140px]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-28 px-6 py-16 lg:px-8">
        <ExperienceHero />

        <Timeline />

        <Journey />

        <Responsibilities />

        <TechStack />

        <Highlights />
      </div>
    </main>
  );
}