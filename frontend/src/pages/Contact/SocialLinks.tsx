import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi2";

interface SocialLink {
  name: string;
  username: string;
  url: string;
  description: string;
  color: string;
  icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    username: "Mohan Babu",
    url: "https://www.linkedin.com/in/mohan-babu-3226b8328",
    description:
      "Let's connect professionally and discuss DevOps, Cloud Engineering, and Platform Engineering opportunities.",
    color: "hover:border-blue-500/40",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    username: "Mohan-codeX",
    url: "https://github.com/Mohan-codeX",
    description:
      "Explore my portfolio, backend services, DevOps projects, infrastructure automation, and cloud-native work.",
    color: "hover:border-gray-400/40",
    icon: FaGithub,
  },
  {
    name: "Naukri",
    username: "Mohan Babu",
    url: "https://www.naukri.com/mnjuser/profile?id=&altresid",
    description:
      "View my professional profile and current job preferences.",
    color: "hover:border-cyan-500/40",
    icon: HiBriefcase,
  },
];

export default function SocialLinks() {
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
          Social Profiles
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Connect Online
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          You can also reach me through my professional profiles and explore my
          latest work, projects, and career updates.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className={`group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 ${social.color}`}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Icon className="h-8 w-8 text-cyan-400" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {social.name}
              </h3>

              <p className="mt-2 font-medium text-cyan-400">
                {social.username}
              </p>

              <p className="mt-5 leading-7 text-gray-400">
                {social.description}
              </p>

              <div className="mt-8 inline-flex items-center font-semibold text-cyan-400 transition group-hover:translate-x-1">
                Visit Profile →
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}