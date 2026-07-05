import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  highlights: string[];
}

const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    institution: "Mother Theresa Institute of Engineering and Technology",
    duration: "2014 – 2018",
    location: "Andhra Pradesh, India",
    highlights: [
      "Mechanical Engineering",
      "Strong analytical and problem-solving foundation",
      "Engineering mathematics and fundamentals",
      "Project-based learning",
      "Team collaboration and technical presentations",
    ],
  },
];

export default function EducationTimeline() {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
          Academic Journey
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Educational Background
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          My engineering education established the technical thinking,
          analytical mindset, and disciplined problem-solving approach that now
          supports my work in DevOps, Cloud Infrastructure and Platform
          Engineering.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500 via-slate-700 to-transparent lg:block" />

        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="relative lg:pl-16"
          >
            <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-900 lg:flex">
              <AcademicCapIcon className="h-5 w-5 text-cyan-400" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]">
              <div className="flex flex-col justify-between gap-6 lg:flex-row">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <div className="mt-6 flex flex-col gap-3 text-gray-300 md:flex-row md:flex-wrap md:gap-6">
                    <div className="flex items-center gap-2">
                      <BuildingLibraryIcon className="h-5 w-5 text-cyan-400" />
                      <span>{item.institution}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="h-5 w-5 text-cyan-400" />
                      <span>{item.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5 text-cyan-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="mb-5 text-lg font-semibold text-white">
                      Academic Highlights
                    </h4>

                    <div className="grid gap-4 md:grid-cols-2">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                        >
                          <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />

                          <p className="text-sm leading-7 text-gray-300">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>                </div>

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex h-32 w-full flex-col items-center justify-center rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-slate-900 lg:w-48"
                >
                  <AcademicCapIcon className="mb-3 h-10 w-10 text-cyan-400" />

                  <p className="text-center text-lg font-semibold text-white">
                    Mechanical
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Engineering
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900/80 to-blue-500/10 p-10"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white">
            Engineering Foundation
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Although my degree is in Mechanical Engineering, my professional
            career and continuous learning have been centered around software
            engineering, Linux production systems, automation, DevOps, cloud
            infrastructure, and platform engineering.
          </p>
        </div>
      </motion.div>
    </section>
  );
}