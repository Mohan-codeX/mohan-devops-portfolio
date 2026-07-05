import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BookOpenIcon,
  CloudIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

interface Highlight {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
}

const highlights: Highlight[] = [
  {
    title: "Degree",
    value: "B.Tech",
    description:
      "Bachelor of Technology in Mechanical Engineering providing a solid engineering foundation.",
    icon: AcademicCapIcon,
  },
  {
    title: "Academic Duration",
    value: "2014–2018",
    description:
      "Four years of engineering education focused on analytical thinking and problem solving.",
    icon: BookOpenIcon,
  },
  {
    title: "Professional Learning",
    value: "5+ Years",
    description:
      "Continuous learning through enterprise production experience and real-world engineering.",
    icon: SparklesIcon,
  },
  {
    title: "DevOps",
    value: "Cloud Native",
    description:
      "Building expertise in CI/CD, Infrastructure as Code, containerization and automation.",
    icon: CloudIcon,
  },
  {
    title: "Current Goal",
    value: "Platform Engineer",
    description:
      "Focused on designing scalable, reliable cloud infrastructure and automation platforms.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Technology",
    value: "Modern Stack",
    description:
      "Hands-on learning across Docker, Kubernetes, AWS, Terraform and observability.",
    icon: CpuChipIcon,
  },
];

export default function EducationHighlights() {
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
          Education Highlights
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Learning Snapshot
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Combining engineering fundamentals with continuous professional
          learning to build a strong foundation for DevOps, Cloud Engineering,
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
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10">
            <AcademicCapIcon className="h-8 w-8 text-cyan-400" />
          </div>

          <h3 className="mt-6 text-3xl font-bold text-white">
            Lifelong Learning Mindset
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            My learning extends beyond formal education. I continuously improve
            my technical expertise through hands-on projects, production
            experience, cloud-native technologies, infrastructure automation,
            and modern DevOps practices to stay aligned with industry standards.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Linux",
              "Python",
              "Git",
              "FastAPI",
              "React",
              "TypeScript",
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
              "CI/CD",
              "Infrastructure as Code",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}