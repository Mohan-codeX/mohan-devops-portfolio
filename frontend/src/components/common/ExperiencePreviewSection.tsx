import { motion } from "framer-motion";
import { FaArrowRight, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "DIATOZ Solutions",
    role: " Senior Software Development Engineer",
    description:
      "Building automation workflows, production pipelines, Linux-based operations, monitoring and cloud-focused engineering solutions.",
  },
  {
    company: "Intelizign Lifecycle Services",
    role: "Software Engineer",
    description:
      "Developed Python and Shell automation, production support tooling, workflow scheduling and operational reliability improvements.",
  },
];

export default function ExperiencePreviewSection() {
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
            Professional Experience
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Building Reliable Systems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Experience working with enterprise production systems, automation,
            Linux infrastructure and operational excellence.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-500/40 transition"
            >
              <div className="flex items-start gap-5">
                <div className="rounded-2xl bg-cyan-500/10 p-4">
                  <FaBriefcase className="text-2xl text-cyan-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">
                    {item.role}
                  </h3>

                  <p className="mt-1 font-medium text-cyan-400">
                    {item.company}
                  </p>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 rounded-xl border border-cyan-500/30 px-6 py-3 text-cyan-400 transition hover:bg-cyan-500/10">
            View Complete Experience
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}