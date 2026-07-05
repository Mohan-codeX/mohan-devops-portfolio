import { motion } from "framer-motion";
import {
  CheckBadgeIcon,
  CloudIcon,
  CommandLineIcon,
  CpuChipIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

interface Certification {
  title: string;
  provider: string;
  status: string;
  description: string;
  icon: React.ElementType;
}

const certifications: Certification[] = [
  {
    title: "DevOps Engineering",
    provider: "Self Learning & Hands-on Projects",
    status: "In Progress",
    description:
      "Building production-ready DevOps projects covering CI/CD, Infrastructure as Code, containerization, cloud deployment and monitoring.",
    icon: CloudIcon,
  },
  {
    title: "AWS Cloud",
    provider: "Hands-on Learning",
    status: "Learning",
    description:
      "Working with core AWS services, networking, compute, storage, IAM and deployment of cloud-native applications.",
    icon: CpuChipIcon,
  },
  {
    title: "Docker & Kubernetes",
    provider: "Project Based Learning",
    status: "Learning",
    description:
      "Containerizing applications, orchestrating workloads, and deploying scalable cloud-native environments.",
    icon: CommandLineIcon,
  },
  {
    title: "Linux & Automation",
    provider: "Professional Experience",
    status: "Experienced",
    description:
      "Strong production experience with Linux administration, automation, monitoring, troubleshooting and operational reliability.",
    icon: ShieldCheckIcon,
  },
];

export default function Certifications() {
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
          Professional Learning
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Certifications & Upskilling
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Continuous learning through practical implementation, production
          experience and real-world DevOps projects.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {certifications.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-500/10 p-4">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {item.provider}
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  {item.status}
                </span>
              </div>

              <p className="mt-6 leading-7 text-gray-400">
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
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 rounded-full bg-cyan-500/10 p-4">
            <CheckBadgeIcon className="h-10 w-10 text-cyan-400" />
          </div>

          <h3 className="text-3xl font-bold text-white">
            Learning Through Real Projects
          </h3>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            My primary focus is practical learning. Rather than relying solely
            on certifications, I strengthen my skills by building production-ready
            applications, deploying cloud infrastructure, implementing CI/CD
            pipelines, and solving real-world engineering challenges.
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
    </section>
  );
}