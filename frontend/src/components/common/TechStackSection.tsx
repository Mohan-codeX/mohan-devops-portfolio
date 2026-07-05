import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJenkins,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiFastapi,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    title: "Cloud & DevOps",
    technologies: [
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "AWS", icon: FaAws },
      { name: "Jenkins", icon: FaJenkins },
      { name: "GitHub", icon: FaGithub },
      { name: "Git", icon: FaGitAlt },
      { name: "Linux", icon: FaLinux },
    ],
  },
  {
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
];

export default function TechStackSection() {
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
            Technology Stack
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Tools I Build With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Modern technologies used to build scalable cloud infrastructure,
            backend APIs, CI/CD pipelines and production-ready applications.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40"
            >
              <h3 className="mb-8 text-2xl font-bold text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/50 px-5 py-3 transition-all hover:border-cyan-400 hover:bg-cyan-500/10"
                    >
                      <Icon className="text-2xl text-cyan-400" />
                      <span className="font-medium text-slate-200">
                        {tech.name}
                      </span>
                    </div>
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