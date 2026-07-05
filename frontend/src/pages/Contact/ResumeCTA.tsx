import { motion } from "framer-motion";
import {
  ArrowDownTrayIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function ResumeCTA() {
  const handleDownloadResume = () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    window.open(`${apiUrl}/resume/download`, "_blank");
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-blue-500/10"
      >
        <div className="grid items-center gap-10 p-10 lg:grid-cols-[1fr_auto] lg:p-14">
          <div>
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
              Resume
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white">
              Download My Resume
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Thank you for visiting my portfolio. If you'd like to learn more
              about my professional experience, DevOps journey, cloud projects,
              automation expertise, and technical skills, download my latest
              resume directly from the portfolio backend.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "DevOps Engineer",
                "Cloud Engineer",
                "Platform Engineer",
                "Linux",
                "Docker",
                "Kubernetes",
                "AWS",
                "Terraform",
                "Python",
                "FastAPI",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10">
              <DocumentArrowDownIcon className="h-14 w-14 text-cyan-400" />
            </div>

            <button
              type="button"
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-900 transition duration-300 hover:bg-cyan-400"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download Resume
            </button>

            <p className="text-center text-sm text-gray-400">
              Always downloads the latest resume uploaded through the admin
              dashboard.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}