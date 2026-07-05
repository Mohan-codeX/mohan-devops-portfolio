import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CallToActionSection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl rounded-[36px] border border-cyan-500/20 bg-white/5 px-10 py-20 text-center backdrop-blur-xl"
      >
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
          Let's Build Something Great
        </span>

        <h2 className="mt-8 text-5xl font-bold text-white">
          Ready to Build Reliable Cloud Infrastructure?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Whether it's DevOps automation, cloud infrastructure, backend
          engineering or production reliability, I'm always excited to work on
          meaningful engineering challenges.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link
            to="/contact"
            className="flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105"
          >
            <FaEnvelope />
            Contact Me
          </Link>

          <Link
            to="/projects"
            className="flex items-center gap-3 rounded-xl border border-cyan-500/30 px-8 py-4 font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
          >
            View Projects
            <FaArrowRight />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}