import { motion } from "framer-motion";
import {
  FaCloud,
  FaCode,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";

const stats = [
  {
    icon: FaProjectDiagram,
    value: "15+",
    title: "Projects",
    description: "Production-ready DevOps & Full Stack applications.",
  },
  {
    icon: FaServer,
    value: "25+",
    title: "Deployments",
    description: "Docker, Kubernetes & CI/CD pipelines.",
  },
  {
    icon: FaCloud,
    value: "8+",
    title: "Cloud Services",
    description: "AWS infrastructure & automation.",
  },
  {
    icon: FaCode,
    value: "5+",
    title: "Core Domains",
    description: "Frontend, Backend, DevOps & Cloud.",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon />
                </div>

                <h2 className="text-5xl font-extrabold text-white">
                  {stat.value}
                </h2>

                <h3 className="mt-3 text-xl font-semibold text-slate-200">
                  {stat.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}