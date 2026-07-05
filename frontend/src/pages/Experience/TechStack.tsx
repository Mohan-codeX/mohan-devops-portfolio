import { motion } from "framer-motion";
import {
  CloudIcon,
  CircleStackIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

interface TechCategory {
  title: string;
  icon: React.ElementType;
  technologies: string[];
}

const categories: TechCategory[] = [
  {
    title: "Programming",
    icon: CodeBracketIcon,
    technologies: [
      "Python",
      "Bash",
      "Shell Script",
      "TypeScript",
    ],
  },
  {
    title: "Frontend",
    icon: CpuChipIcon,
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "TanStack Query",
      "React Hook Form",
    ],
  },
  {
    title: "Backend",
    icon: ServerStackIcon,
    technologies: [
      "FastAPI",
      "REST APIs",
      "JWT",
      "SQLAlchemy",
      "Alembic",
      "Repository Pattern",
    ],
  },
  {
    title: "Databases",
    icon: CircleStackIcon,
    technologies: [
      "PostgreSQL",
      "MS SQL Server",
      "SQLite",
      "MS Access",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: CloudIcon,
    technologies: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Terraform",
      "AWS",
      "Kubernetes",
      "Helm",
    ],
  },
  {
    title: "Infrastructure",
    icon: CommandLineIcon,
    technologies: [
      "Linux",
      "Git",
      "GitHub",
      "Cron",
      "SSH",
      "SFTP",
      "Monitoring",
      "Automation",
    ],
  },
];

export default function TechStack() {
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
          Technology Stack
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Technologies I Work With
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          A combination of production experience, backend engineering,
          automation, cloud infrastructure, and modern DevOps tooling.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-500/10 p-3">
                  <Icon className="h-7 w-7 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
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
            Continuous Learning
          </span>

          <h3 className="mt-6 text-3xl font-bold text-white">
            Always Exploring Modern DevOps Technologies
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Technology evolves rapidly, and so does my learning journey. Alongside
            my production experience, I continuously build real-world projects to
            strengthen expertise in cloud infrastructure, automation, platform
            engineering, container orchestration, observability, and scalable
            deployment practices.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "AWS",
              "Docker",
              "Terraform",
              "GitHub Actions",
              "Kubernetes",
              "Helm",
              "Prometheus",
              "Grafana",
              "Loki",
              "Linux",
              "FastAPI",
              "React",
              "TypeScript",
              "Python",
              "Automation",
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