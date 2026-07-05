import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BookOpenIcon,
  RocketLaunchIcon,
  TrophyIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    icon: AcademicCapIcon,
    value: "B.Tech",
    label: "Mechanical Engineering",
  },
  {
    icon: BookOpenIcon,
    value: "2014-2018",
    label: "Academic Journey",
  },
  {
    icon: RocketLaunchIcon,
    value: "DevOps",
    label: "Continuous Learning",
  },
];

export default function EducationHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Education
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Academic Foundation &
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Continuous Learning
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            My engineering education provided a strong analytical foundation,
            while continuous hands-on learning in Linux, Cloud, Automation,
            DevOps, and Platform Engineering enables me to build modern,
            production-ready infrastructure and software solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <AcademicCapIcon className="h-6 w-6 text-cyan-400" />

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Degree
                </p>

                <p className="font-semibold text-white">
                  B.Tech Mechanical Engineering
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <CalendarDaysIcon className="h-6 w-6 text-cyan-400" />

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Duration
                </p>

                <p className="font-semibold text-white">
                  2014 – 2018
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <MapPinIcon className="h-6 w-6 text-cyan-400" />

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Institute
                </p>

                <p className="font-semibold text-white">
                  MTIET
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
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

                    <p className="text-sm text-gray-400">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
            <div className="flex items-center gap-4">
              <TrophyIcon className="h-8 w-8 text-emerald-400" />

              <div>
                <h3 className="font-semibold text-white">
                  Current Focus
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-300">
                  Building practical expertise in AWS, Docker, Kubernetes,
                  Terraform, GitHub Actions, Linux, Monitoring and Cloud Native
                  technologies through real-world projects.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}