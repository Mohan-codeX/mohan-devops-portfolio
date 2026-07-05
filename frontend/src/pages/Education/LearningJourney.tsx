import { motion } from "framer-motion";
import {
  CloudIcon,
  CommandLineIcon,
  CpuChipIcon,
  ServerStackIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

interface LearningStep {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  current?: boolean;
}

const journey: LearningStep[] = [
  {
    title: "Engineering Foundation",
    subtitle: "2014 – 2018",
    description:
      "Developed analytical thinking, structured problem-solving, engineering fundamentals, and technical discipline during undergraduate studies.",
    icon: ServerStackIcon,
  },
  {
    title: "Production Support",
    subtitle: "Professional Experience",
    description:
      "Worked extensively with Linux systems, enterprise automation, monitoring, troubleshooting, production workflows, and operational reliability.",
    icon: CommandLineIcon,
  },
  {
    title: "Software Engineering",
    subtitle: "Backend Development",
    description:
      "Expanded expertise through Python development, FastAPI, REST APIs, authentication, databases, and scalable application architecture.",
    icon: Cog6ToothIcon,
  },
  {
    title: "DevOps & Cloud",
    subtitle: "Current Journey",
    description:
      "Building practical expertise in Docker, AWS, Kubernetes, Terraform, CI/CD, monitoring, observability, and platform engineering.",
    icon: CloudIcon,
    current: true,
  },
];

export default function LearningJourney() {
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
          Learning Journey
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Continuous Growth
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Every stage of my career has contributed to building the skills
          required for modern DevOps, Platform Engineering, and Cloud
          Infrastructure roles.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-slate-700 to-transparent lg:block" />

        <div className="space-y-12">
          {journey.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="absolute left-1/2 top-12 z-20 hidden -translate-x-1/2 lg:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-900">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>

                <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05] lg:w-[46%]">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {step.subtitle}
                    </span>

                    {step.current && (
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Current Focus
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="rounded-2xl bg-cyan-500/10 p-4">
                      <Icon className="h-8 w-8 text-cyan-400" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 leading-7 text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900/80 to-blue-500/10 p-10"
        >
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10">
              <CpuChipIcon className="h-8 w-8 text-cyan-400" />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-white">
              Current Learning Focus
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              I continuously strengthen my practical skills by building
              production-ready applications and infrastructure while deepening
              my expertise in cloud platforms, DevOps automation, Kubernetes,
              Infrastructure as Code, CI/CD pipelines, observability, and
              platform engineering.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                "Linux",
                "Python",
                "Git",
                "Docker",
                "Docker Compose",
                "GitHub Actions",
                "Terraform",
                "AWS",
                "Kubernetes",
                "Helm",
                "Prometheus",
                "Grafana",
                "Loki",
                "FastAPI",
                "React",
                "TypeScript",
                "CI/CD",
                "Infrastructure as Code",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}