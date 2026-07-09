import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaNetworkWired,
  FaPython,
  FaTools,
} from "react-icons/fa";
import {
  SiGithubactions,
  SiGrafana,
  SiKubernetes,
  SiPostgresql,
  SiPrometheus,
  SiTerraform,
} from "react-icons/si";

import {
  getSkills,
  type Skill,
} from "../../services/skillService";

const sectionConfig = [
  {
    title: "☁️ Cloud & Infrastructure",
    category: "Cloud & Infrastructure",
    description:
      "Building secure, scalable and production-ready cloud infrastructure using modern Infrastructure as Code practices.",
  },
  {
    title: "🐳 Containers & Platform Engineering",
    category: "Containers & Platform Engineering",
    description:
      "Packaging, deploying and orchestrating containerized applications across modern cloud platforms.",
  },
  {
    title: "⚙️ CI/CD, GitOps & Automation",
    category: "CI/CD, GitOps & Automation",
    description:
      "Automating software delivery, infrastructure deployments and operational workflows.",
  },
  {
    title:
      "📊 Monitoring, Observability & Production Operations",
    category:
      "Monitoring, Observability & Production Operations",
    description:
      "Maintaining reliable production systems through monitoring, logging, troubleshooting and incident response.",
  },
  {
    title: "🌐 Linux, Networking & Security",
    category: "Linux, Networking & Security",
    description:
      "Working with Linux systems, networking fundamentals and secure remote administration.",
  },
  {
    title: "🗄️ Databases",
    category: "Databases",
    description:
      "Experience working with relational databases for application and infrastructure services.",
  },
];

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  AWS: FaAws,
  Docker: FaDocker,
  "Docker Compose": FaDocker,
  Terraform: SiTerraform,
  "Infrastructure as Code": SiTerraform,

  Kubernetes: SiKubernetes,
  Helm: SiTerraform,

  Git: FaGitAlt,
  GitHub: FaGithub,
  "GitHub Actions": SiGithubactions,
  "Argo CD": SiGithubactions,
  GitOps: FaGitAlt,

  Python: FaPython,
  "Shell Scripting": FaLinux,
  "Cron Jobs": FaLinux,
  "Workflow Automation": FaPython,

  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  Loki: SiGrafana,
  "Production Monitoring": SiGrafana,
  "Log Analysis": SiGrafana,
  "Incident Handling": SiGrafana,
  "Root Cause Analysis": SiGrafana,

  Linux: FaLinux,
  "TCP/IP": FaNetworkWired,
  DNS: FaNetworkWired,
  SSH: FaNetworkWired,
  SCP: FaNetworkWired,
  SFTP: FaNetworkWired,
  "RSA Authentication": FaNetworkWired,

  PostgreSQL: SiPostgresql,
  "MS SQL Server": SiPostgresql,
  SQLite: SiPostgresql,
};

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (error) {
        console.error("Failed to load skills:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  const groupedSkills = useMemo(() => {
    return sectionConfig.map((section) => ({
      ...section,
      skills: skills
        .filter(
          (skill) => skill.category === section.category
        )
        .sort((a, b) => b.level - a.level),
    }));
  }, [skills]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-slate-400">
          Loading skills...
        </p>
      </section>
    );
  }  return (
    <section className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Technical Expertise
          </span>

          <h1 className="mt-8 text-5xl font-bold text-white">
            DevOps Technology Stack
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Focused on building scalable cloud infrastructure, automating
            software delivery, improving system reliability and operating
            production environments using modern DevOps practices.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {groupedSkills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
            >
              <h2 className="text-3xl font-bold text-white">
                {group.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                {group.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {group.skills.length === 0 ? (
                  <span className="text-slate-500">
                    No skills added yet.
                  </span>
                ) : (
                  group.skills.map((skill) => {
                    const Icon =
                      iconMap[skill.name] ?? FaTools;

                    return (
                      <motion.div
                        key={skill.id}
                        whileHover={{
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/60 px-5 py-3 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
                      >
                        <Icon className="text-xl text-cyan-400" />

                        <span className="font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
