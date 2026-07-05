import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const contactCards = [
  {
    title: "Email",
    value: "mohanbabuworkemail@gmail.com",
    icon: EnvelopeIcon,
  },
  {
    title: "Phone",
    value: "+91 9110755898",
    icon: PhoneIcon,
  },
  {
    title: "Location",
    value: "Bangalore, India",
    icon: MapPinIcon,
  },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
      {/* Background */}
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Let's Connect
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Let's Build Reliable
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cloud Solutions Together
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            I'm actively looking for opportunities as a DevOps Engineer, Cloud
            Engineer, Platform Engineer, or Site Reliability Engineer. If you
            have an exciting opportunity or would like to collaborate, I'd love
            to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <Icon className="h-6 w-6 text-cyan-400" />

                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      {card.title}
                    </p>

                    <p className="font-semibold text-white break-all">
                      {card.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
            <div className="flex items-start gap-4">
              <CheckBadgeIcon className="mt-1 h-8 w-8 text-emerald-400" />

              <div>
                <h3 className="text-xl font-bold text-white">
                  Available for Opportunities
                </h3>

                <p className="mt-3 leading-7 text-gray-300">
                  Open to full-time opportunities in DevOps Engineering, Cloud
                  Infrastructure, Platform Engineering, and Site Reliability
                  Engineering across India.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
            <h3 className="text-xl font-bold text-white">
              Preferred Contact
            </h3>

            <ul className="mt-5 space-y-3 text-gray-300">
              <li>• Email</li>
              <li>• Phone</li>
              <li>• LinkedIn</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}