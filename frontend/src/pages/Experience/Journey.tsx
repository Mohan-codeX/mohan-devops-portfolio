import { motion } from "framer-motion";
import {
  CloudIcon,
  CircleStackIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  CpuChipIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

interface JourneyStep {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  current?: boolean;
}

const journey: JourneyStep[] = [
  {
    title: "Linux & Production Operations",
    subtitle: "Foundation",
    description:
      "Built a strong foundation supporting Linux-based production environments, workflow monitoring, troubleshooting, and operational reliability.",
    icon: ServerStackIcon,
  },
  {
    title: "Automation Engineering",
    subtitle: "Python • Shell • Cron",
    description:
      "Developed automation pipelines using Python and Shell scripting for metadata validation, batch processing, scheduling, monitoring, and secure file delivery.",
    icon: CommandLineIcon,
  },
  {
    title: "Production Reliability",
    subtitle: "Monitoring • RCA • SLA",
    description:
      "Handled production incidents, log analysis, root cause analysis, workflow recovery, release coordination, and continuous operational improvements.",
    icon: Cog6ToothIcon,
  },
  {
    title: "DevOps Upskilling",
    subtitle: "Cloud Native Journey",
    description:
      "Expanded expertise into containerization, CI/CD, Infrastructure as Code, cloud platforms, and modern DevOps engineering practices.",
    icon: CpuChipIcon,
  },
  {
    title: "Cloud & Platform Engineering",
    subtitle: "Current Focus",
    description:
      "Actively building production-ready cloud infrastructure using Docker, Terraform, AWS, Kubernetes, Helm, GitHub Actions, and observability tools.",
    icon: CloudIcon,
    current: true,
  },
];

export default function Journey() {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
          DevOps Journey
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Transition Towards
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Platform Engineering
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          My career has evolved from production support and automation
          engineering to modern DevOps practices, cloud infrastructure,
          platform engineering, and site reliability.
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
                  delay: index * 0.15,
                }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div className="hidden lg:block absolute left-1/2 top-12 -translate-x-1/2 z-20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-900">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05] lg:w-[46%]"
                >
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

                      <p className="mt-2 text-gray-400 leading-7">
                        {step.description}
                      </p>
                    </div>
                  </div>
                                  </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900/80 to-blue-500/10 p-10"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-cyan-500/10 p-4">
              <CircleStackIcon className="h-10 w-10 text-cyan-400" />
            </div>

            <h3 className="text-3xl font-bold text-white">
              Current Learning Focus
            </h3>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
              Continuously strengthening practical DevOps skills by building
              production-ready infrastructure, implementing CI/CD pipelines,
              container orchestration, Infrastructure as Code, cloud
              deployments, monitoring, logging, and scalable platform
              engineering solutions.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
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
                "Linux",
                "Python",
                "Automation",
                "CI/CD",
                "Infrastructure as Code",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}