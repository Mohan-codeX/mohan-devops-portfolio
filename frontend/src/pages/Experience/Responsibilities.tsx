import { motion } from "framer-motion";
import {
  CircleStackIcon,
  CloudIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  CpuChipIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

interface Responsibility {
  title: string;
  description: string;
  icon: React.ElementType;
}

const responsibilities: Responsibility[] = [
  {
    title: "Production Operations",
    description:
      "Maintaining business-critical production environments while ensuring operational stability, SLA compliance, and high system availability.",
    icon: ServerStackIcon,
  },
  {
    title: "Automation Engineering",
    description:
      "Building Python and Shell automation to eliminate repetitive work, improve efficiency, and streamline operational workflows.",
    icon: CommandLineIcon,
  },
  {
    title: "Monitoring & Reliability",
    description:
      "Monitoring applications, investigating failures, performing root cause analysis, and improving overall system reliability.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Workflow Automation",
    description:
      "Designing scheduled batch-processing pipelines with validation, logging, notifications, and secure data movement.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Expanding expertise in Docker, AWS, Terraform, Kubernetes, GitHub Actions, and Infrastructure as Code.",
    icon: CloudIcon,
  },
  {
    title: "Backend Development",
    description:
      "Developing REST APIs using FastAPI with layered architecture, authentication, database integration, and production-ready design.",
    icon: CircleStackIcon,
  },
  {
    title: "Platform Engineering",
    description:
      "Learning scalable platform engineering practices focused on automation, infrastructure, deployment, and operational excellence.",
    icon: CpuChipIcon,
  },
  {
    title: "Continuous Improvement",
    description:
      "Continuously improving development workflows, automation strategies, documentation, deployment pipelines, and operational processes.",
    icon: WrenchScrewdriverIcon,
  },
];

export default function Responsibilities() {
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
          Core Responsibilities
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          What I Do
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          My professional experience combines production operations,
          automation engineering, backend development, and modern DevOps
          practices to build reliable, scalable, and maintainable systems.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {responsibilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition-colors duration-300 group-hover:bg-cyan-500/20">
                <Icon className="h-8 w-8 text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {item.description}
              </p>            </motion.div>
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
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
              Professional Focus
            </span>

            <h3 className="mt-6 text-3xl font-bold text-white">
              Building Reliable Systems Through Automation
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              My experience spans production support, enterprise automation,
              backend engineering, and DevOps. I focus on improving operational
              efficiency through automation while adopting modern cloud-native
              technologies and platform engineering practices.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Linux Administration",
              "Production Support",
              "Automation Engineering",
              "Python Development",
              "REST API Development",
              "Infrastructure as Code",
              "CI/CD Pipelines",
              "Cloud Engineering",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-500/30"
              >
                <ShieldCheckIcon className="h-5 w-5 text-cyan-400" />

                <span className="font-medium text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}