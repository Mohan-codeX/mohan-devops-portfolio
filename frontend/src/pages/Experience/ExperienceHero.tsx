import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  CalendarDays,
  MapPin,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: Building2,
    value: "3",
    label: "Professional Roles",
  },
  {
    icon: TrendingUp,
    value: "DevOps",
    label: "Career Transition",
  },
];

const ExperienceHero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            Professional Experience
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Building Reliable Systems Through
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Automation & DevOps
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Software engineer with 5+ years of experience supporting
            Linux-based production environments, automation workflows, and
            enterprise applications. Currently transitioning into DevOps,
            Platform Engineering, and Site Reliability Engineering by combining
            real-world production experience with modern cloud-native tools and
            infrastructure practices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Building2 className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Current Role
                </p>
                <p className="font-semibold text-white">
                  Senior Software Development Engineer
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <CalendarDays className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Experience
                </p>
                <p className="font-semibold text-white">5+ Years</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <MapPin className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Location
                </p>
                <p className="font-semibold text-white">Bangalore, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="grid gap-5"
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.value}
                    </h3>
                    <p className="text-sm text-gray-400">{item.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceHero;