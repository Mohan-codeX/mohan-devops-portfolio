import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CloudIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

interface Highlight {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
}

const highlights: Highlight[] = [
  {
    title: "Professional Experience",
    value: "5+ Years",
    description:
      "Supporting enterprise production environments, automation workflows and mission-critical applications.",
    icon: BriefcaseIcon,
  },
  {
    title: "Production Systems",
    value: "Enterprise",
    description:
      "Experience maintaining large-scale production automation pipelines and operational workflows.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Backend Engineering",
    value: "FastAPI",
    description:
      "Production-ready REST APIs with layered architecture, authentication and database integration.",
    icon: CpuChipIcon,
  },
  {
    title: "DevOps Journey",
    value: "Cloud Native",
    description:
      "Building hands-on expertise across Docker, Kubernetes, AWS, Terraform and CI/CD.",
    icon: CloudIcon,
  },
  {
    title: "Automation",
    value: "Python",
    description:
      "Developing automation scripts that improve operational efficiency and reduce manual work.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Career Goal",
    value: "Platform Engineer",
    description:
      "Focused on building scalable cloud infrastructure and reliable DevOps platforms.",
    icon: RocketLaunchIcon,
  },
];

export default function Highlights() {
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
          Career Highlights
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Experience At A Glance
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          A snapshot of my professional journey, technical expertise,
          automation experience, and continuous transition toward DevOps,
          Platform Engineering, and Site Reliability Engineering.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Icon className="h-8 w-8 text-cyan-400" />
              </div>

              <h3 className="text-lg font-semibold text-gray-300">
                {item.title}
              </h3>

              <div className="mt-3 text-3xl font-bold text-white">
                {item.value}
              </div>

              <p className="mt-5 leading-7 text-gray-400">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900/80 to-blue-500/10 p-10"
      >
        <div className="text-center">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Looking Ahead
          </span>

          <h3 className="mt-6 text-3xl font-bold text-white">
            Building Toward Platform Engineering Excellence
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            My focus is to leverage real-world production experience together
            with modern DevOps tooling to design scalable cloud platforms,
            automate infrastructure, improve operational reliability, and
            contribute to high-performing engineering teams.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Linux",
              "Automation",
              "Cloud",
              "DevOps",
              "Site Reliability",
              "Platform Engineering",
              "Infrastructure as Code",
              "CI/CD",
              "Docker",
              "Kubernetes",
              "AWS",
              "Terraform",
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
    </section>
  );
}