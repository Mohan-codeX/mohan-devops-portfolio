import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaNetworkWired,
  FaPython,
} from "react-icons/fa";
import {
  SiGithubactions,
  SiGrafana,
  SiKubernetes,
  SiPostgresql,
  SiPrometheus,
  SiTerraform,
} from "react-icons/si";

const skillGroups = [
  {
    title: "☁️ Cloud & Infrastructure",
    description:
      "Building secure, scalable and production-ready cloud infrastructure using modern Infrastructure as Code practices.",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Terraform", icon: SiTerraform },
      { name: "Infrastructure as Code", icon: SiTerraform },
    ],
  },
  {
    title: "🐳 Containers & Platform Engineering",
    description:
      "Packaging, deploying and orchestrating containerized applications across modern cloud platforms.",
    skills: [
      { name: "Docker", icon: FaDocker },
      { name: "Docker Compose", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Helm", icon: SiTerraform },
    ],
  },
  {
    title: "⚙️ CI/CD, GitOps & Automation",
    description:
      "Automating software delivery, infrastructure deployments and operational workflows.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Argo CD", icon: SiGithubactions },
      { name: "GitOps", icon: FaGitAlt },
      { name: "Python", icon: FaPython },
      { name: "Shell Scripting", icon: FaLinux },
      { name: "Cron Jobs", icon: FaLinux },
      { name: "Workflow Automation", icon: FaPython },
    ],
  },
  {
    title: "📊 Monitoring, Observability & Production Operations",
    description:
      "Maintaining reliable production systems through monitoring, logging, troubleshooting and incident response.",
    skills: [
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
      { name: "Loki", icon: SiGrafana },
      { name: "Production Monitoring", icon: SiGrafana },
      { name: "Log Analysis", icon: SiGrafana },
      { name: "Incident Handling", icon: SiGrafana },
      { name: "Root Cause Analysis", icon: SiGrafana },
    ],
  },
  {
    title: "🌐 Linux, Networking & Security",
    description:
      "Working with Linux systems, networking fundamentals and secure remote administration.",
    skills: [
      { name: "Linux", icon: FaLinux },
      { name: "TCP/IP", icon: FaNetworkWired },
      { name: "DNS", icon: FaNetworkWired },
      { name: "SSH", icon: FaNetworkWired },
      { name: "SFTP", icon: FaNetworkWired },
      { name: "SCP", icon: FaNetworkWired },
      { name: "RSA Authentication", icon: FaNetworkWired },
    ],
  },
  {
    title: "🗄️ Databases",
    description:
      "Experience working with relational databases for application and infrastructure services.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MS SQL Server", icon: SiPostgresql },
      { name: "SQLite", icon: SiPostgresql },
    ],
  },
];

export default function Skills() {
  return (
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

        <div className="mt-20 grid gap-10 lg:md:grid-cols-2xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
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
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
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
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}