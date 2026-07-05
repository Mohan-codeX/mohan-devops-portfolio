import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDocker,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { SiFastapi, SiKubernetes, SiTerraform } from "react-icons/si";

const projects = [
  {
    title: "DevOps Portfolio Platform",
    description:
      "Production-ready portfolio with FastAPI, React, Docker, CI/CD, PostgreSQL and AWS deployment.",
    stack: ["React", "FastAPI", "Docker"],
    icon: FaReact,
  },
  {
    title: "Kubernetes Deployment Pipeline",
    description:
      "Automated container deployment using Kubernetes, GitHub Actions and Terraform.",
    stack: ["Kubernetes", "Terraform", "GitHub Actions"],
    icon: SiKubernetes,
  },
  {
    title: "Cloud Infrastructure Automation",
    description:
      "Infrastructure provisioning using Terraform with Dockerized workloads and AWS services.",
    stack: ["Terraform", "Docker", "AWS"],
    icon: SiTerraform,
  },
];

const iconMap: Record<string, React.ElementType> = {
  React: FaReact,
  FastAPI: SiFastapi,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  "GitHub Actions": FaGithub,
  AWS: FaGithub,
};

export default function FeaturedProjectsSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Featured Projects
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Projects That Showcase My Skills
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            End-to-end DevOps, Cloud and Full Stack projects built with modern
            engineering practices.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => {
            const MainIcon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40"
              >
                <MainIcon className="mb-6 text-5xl text-cyan-400" />

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.stack.map((tech) => {
                    const Icon = iconMap[tech];

                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2"
                      >
                        <Icon className="text-cyan-400" />
                        <span className="text-sm text-slate-200">{tech}</span>
                      </div>
                    );
                  })}
                </div>

                <button className="mt-8 flex items-center gap-2 font-semibold text-cyan-400 transition hover:gap-3">
                  Learn More
                  <FaArrowRight />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}