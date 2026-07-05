import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import { projects } from "./projects";

export default function Projects() {
  const project = projects[0];

  return (
    <section className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Featured Project
          </span>

          <h1 className="mt-8 text-5xl font-bold text-white">
            DevOps Portfolio Platform
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A production-ready portfolio platform built to demonstrate
            full-stack development, cloud engineering and modern DevOps
            practices through a real-world application.
          </p>
        </motion.div>

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-20 overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left */}

            <div className="p-10 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
                  Completed
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-bold text-white">
                {project.title}
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                {project.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  <FaGithub />
                  GitHub Repository
                </a>

                <button className="flex cursor-default items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-slate-300">
                  <FaExternalLinkAlt />
                  Live Demo
                </button>
              </div>
            </div>

            {/* Right */}

            <div className="border-t border-white/10 bg-slate-900/30 p-10 lg:border-l lg:border-t-0 lg:p-14">
              <h3 className="text-2xl font-bold text-white">
                Project Summary
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                This project was designed to serve as a complete DevOps
                showcase, combining frontend development, backend engineering,
                secure authentication, cloud infrastructure and deployment
                automation into a single production-ready application.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Secure JWT Authentication",
                  "Responsive React Frontend",
                  "FastAPI REST APIs",
                  "Production Ready Architecture",
                  "Admin Dashboard",
                  "Visitor Analytics",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/50 p-4"
                  >
                    <FaCheckCircle className="text-cyan-400" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Architecture */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold text-white">
            Architecture Overview
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center">
              <FaLaptopCode className="mx-auto text-4xl text-cyan-400" />

              <h3 className="mt-5 text-xl font-semibold text-white">
                Frontend
              </h3>

              <p className="mt-3 text-slate-400">
                React
                <br />
                TypeScript
                <br />
                Tailwind CSS
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center">
              <FaServer className="mx-auto text-4xl text-cyan-400" />

              <h3 className="mt-5 text-xl font-semibold text-white">
                Backend
              </h3>

              <p className="mt-3 text-slate-400">
                FastAPI
                <br />
                Service Layer
                <br />
                Repository Layer
              </p>
            </div>
                        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center">
              <FaDatabase className="mx-auto text-4xl text-cyan-400" />

              <h3 className="mt-5 text-xl font-semibold text-white">
                Database
              </h3>

              <p className="mt-3 text-slate-400">
                PostgreSQL
                <br />
                SQLAlchemy
                <br />
                Alembic
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center">
              <FaCloud className="mx-auto text-4xl text-cyan-400" />

              <h3 className="mt-5 text-xl font-semibold text-white">
                DevOps
              </h3>

              <p className="mt-3 text-slate-400">
                Docker
                <br />
                Kubernetes
                <br />
                AWS
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white">
              Application Stack
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "React 19",
                "TypeScript",
                "Tailwind CSS",
                "FastAPI",
                "PostgreSQL",
                "SQLAlchemy",
                "JWT",
                "REST API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white">
              DevOps Stack
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Docker",
                "Docker Compose",
                "Nginx",
                "GitHub Actions",
                "Terraform",
                "AWS",
                "Kubernetes",
                "Helm",
                "Prometheus",
                "Grafana",
                "Loki",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Features */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10"
        >
          <h2 className="text-3xl font-bold text-white">
            Core Features
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Portfolio Content Management",
              "Projects Management",
              "Skills Management",
              "Experience Management",
              "Education Management",
              "Profile Management",
              "Resume Upload",
              "Contact Management",
              "Visitor Analytics Dashboard",
              "Dockerized Deployment",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl bg-slate-900/50 p-4"
              >
                <FaCheckCircle className="text-cyan-400" />
                <span className="text-slate-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}