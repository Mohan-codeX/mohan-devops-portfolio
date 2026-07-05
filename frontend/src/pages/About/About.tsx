import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaLinux,
  FaPython,
} from "react-icons/fa";
import {
  SiFastapi,
  SiGithubactions,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";

const highlights = [
  {
    icon: FaLinux,
    title: "Linux & Production Systems",
    description:
      "Experienced in maintaining reliable production environments and operational workflows.",
  },
  {
    icon: FaPython,
    title: "Automation",
    description:
      "Building automation scripts and backend solutions to simplify repetitive operational tasks.",
  },
  {
    icon: FaDocker,
    title: "Containerization",
    description:
      "Deploying and managing containerized applications using modern DevOps practices.",
  },
  {
    icon: FaAws,
    title: "Cloud",
    description:
      "Building scalable cloud infrastructure using AWS services and Infrastructure as Code.",
  },
  {
    icon: SiTerraform,
    title: "Infrastructure as Code",
    description:
      "Automating infrastructure provisioning for repeatable and scalable deployments.",
  },
  {
    icon: SiGithubactions,
    title: "CI/CD",
    description:
      "Automating software delivery pipelines with GitHub Actions and deployment workflows.",
  },
  {
    icon: SiKubernetes,
    title: "Orchestration",
    description:
      "Learning and implementing Kubernetes-based container orchestration for production workloads.",
  },
  {
    icon: SiFastapi,
    title: "Backend Engineering",
    description:
      "Developing secure and scalable backend APIs using FastAPI and PostgreSQL.",
  },
];

export default function About() {
  return (
    <section className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            About Me
          </span>

          <h1 className="mt-8 text-5xl font-bold text-white">
            Passionate About Building Reliable Infrastructure
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            I enjoy solving infrastructure challenges through automation,
            cloud technologies, backend engineering, and DevOps best practices.
            My focus is building scalable, reliable, and maintainable systems
            that improve software delivery and operational excellence.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            My interests span cloud infrastructure, Linux systems,
            Infrastructure as Code, CI/CD pipelines, container orchestration,
            backend development, observability, and platform engineering.
            I'm constantly learning modern technologies while building
            production-ready projects that strengthen my engineering skills.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-500/40"
              >
                <Icon className="mb-6 text-4xl text-cyan-400" />

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}