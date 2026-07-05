import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const contactInfo = [
  {
    title: "Email",
    value: "mohanbabuworkemail@gmail.com",
    subtitle: "Preferred communication channel",
    href: "mailto:mohanbabuworkemail@gmail.com",
    icon: EnvelopeIcon,
  },
  {
    title: "Phone",
    value: "+91 9110755898",
    subtitle: "Available during business hours",
    href: "tel:+919110755898",
    icon: PhoneIcon,
  },
  {
    title: "Location",
    value: "Bangalore, Karnataka",
    subtitle: "Open to relocation & remote opportunities",
    href: "#",
    icon: MapPinIcon,
  },
  {
    title: "Availability",
    value: "Open to Work",
    subtitle: "DevOps • Cloud • Platform Engineering",
    href: "#",
    icon: ClockIcon,
  },
];

export default function ContactInfo() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
          Contact Information
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Reach Out Anytime
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Whether you have an opportunity, a collaboration proposal, or simply
          want to connect, feel free to reach out through any of the following
          channels.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-start gap-5">
                <div className="rounded-2xl bg-cyan-500/10 p-4 transition-colors duration-300 group-hover:bg-cyan-500/20">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <div className="flex-1">
                  <p className="text-sm uppercase tracking-wider text-cyan-400">
                    {item.title}
                  </p>

                  <h3 className="mt-2 break-all text-2xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}