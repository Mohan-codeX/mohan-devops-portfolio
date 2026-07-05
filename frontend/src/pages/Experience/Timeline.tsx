import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarDaysIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  current: boolean;
  technologies: string[];
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "DIATOZ Solutions Pvt. Ltd.",
    role: "Senior Software Development Engineer",
    duration: "May 2024 – Present",
    location: "Bangalore, India",
    current: true,
    technologies: [
      "Python",
      "Linux",
      "Shell",
      "Git",
      "SQL",
      "SFTP",
      "SSH",
      "Cron",
      "Production Support",
      "Automation",
      "Monitoring",
    ],
    responsibilities: [
      "Operate and maintain enterprise automation pipelines processing large-scale metadata workloads.",
      "Monitor scheduled production workflows and proactively troubleshoot operational failures.",
      "Perform root cause analysis (RCA) and implement long-term reliability improvements.",
      "Develop Python automation for metadata validation and business-rule processing.",
      "Implement delta comparison workflows for NEW, MODIFIED and DELETED records.",
      "Manage secure vendor integrations using RSA key-based SFTP.",
      "Coordinate production releases and operational support activities.",
      "Maintain monitoring, archival, audit logging and retention processes.",
    ],
  },
  {
    company: "Intelizign Lifecycle Services Pvt. Ltd.",
    role: "Software Engineer",
    duration: "Jun 2021 – Nov 2023",
    location: "Bangalore, India",
    current: false,
    technologies: [
      "Python",
      "Linux",
      "Shell",
      "Cron",
      "XML",
      "SQL",
      "Git",
      "Automation",
    ],
    responsibilities: [
      "Supported Linux-based publishing systems handling enterprise content workflows.",
      "Developed Python and Shell automation scripts.",
      "Implemented cron-based scheduling and monitoring.",
      "Investigated failures and restored production workflows.",
      "Performed XML validation and DTD verification.",
      "Generated operational reports and workflow monitoring.",
      "Supported metadata transformation pipelines.",
    ],
  },
  {
    company: "Unite Design Solutions",
    role: "Design Engineer",
    duration: "Aug 2020 – Feb 2021",
    location: "Bangalore, India",
    current: false,
    technologies: [
      "Engineering Design",
      "Documentation",
      "Technical Coordination",
    ],
    responsibilities: [
      "Developed engineering designs and documentation.",
      "Collaborated with cross-functional engineering teams.",
      "Supported technical problem solving and project execution.",
    ],
  },
];

export default function Timeline() {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
          Career Timeline
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Professional Journey
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">
          Over five years of professional experience spanning production
          support, enterprise automation, Linux systems, workflow reliability,
          and a continuous transition toward modern DevOps, Platform
          Engineering, and Cloud Infrastructure.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500 via-slate-600 to-transparent lg:block" />

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative lg:pl-16"
            >
              <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-900 lg:flex">
                <BriefcaseIcon className="h-5 w-5 text-cyan-400" />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-white">
                        {experience.role}
                      </h3>

                      {experience.current && (
                        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex flex-col gap-3 text-gray-300 md:flex-row md:flex-wrap md:gap-6">
                      <div className="flex items-center gap-2">
                        <BuildingOffice2Icon className="h-5 w-5 text-cyan-400" />
                        <span>{experience.company}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="h-5 w-5 text-cyan-400" />
                        <span>{experience.duration}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPinIcon className="h-5 w-5 text-cyan-400" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                                        <div className="mt-8">
                      <h4 className="mb-5 text-lg font-semibold text-white">
                        Key Responsibilities
                      </h4>

                      <div className="grid gap-4 md:grid-cols-2">
                        {experience.responsibilities.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                          >
                            <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />

                            <p className="text-sm leading-7 text-gray-300">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="mb-5 text-lg font-semibold text-white">
                        Technologies
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-28 w-full flex-col items-center justify-center rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-slate-900 lg:w-40"
                  >
                    <BriefcaseIcon className="mb-3 h-8 w-8 text-cyan-400" />

                    <p className="text-center text-sm font-semibold text-white">
                      {experience.current
                        ? "Current Position"
                        : "Professional Experience"}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
              </div>
    </section>
  );
}