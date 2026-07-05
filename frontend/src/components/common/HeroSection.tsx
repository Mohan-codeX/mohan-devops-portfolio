import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400"
          >
            🚀 DevOps • Cloud • Full Stack
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-5xl font-black md:text-7xl"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              Mohan
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl"
          >
            DevOps Engineer • Cloud Enthusiast • Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-400"
          >
            I build scalable cloud infrastructure, automate CI/CD pipelines,
            deploy containerized applications, and develop production-ready
            software using modern DevOps practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex gap-5"
          >
            <button className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 hover:bg-cyan-400">
              View Projects
            </button>

            <button className="rounded-xl border border-slate-700 px-7 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-400">
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className="mb-6 text-center text-xl font-bold text-cyan-400">
            Tech Focus
          </h3>

          <div className="space-y-3">
            {[
              "FastAPI",
              "React",
              "Docker",
              "Kubernetes",
              "Terraform",
              "AWS",
              "GitHub Actions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;