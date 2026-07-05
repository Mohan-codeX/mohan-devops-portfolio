import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);

    // Backend integration will be added later
    // POST /contact

    reset();
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Send Message
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Let's Talk
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Have an opportunity, project, or question? Fill out the form below.
            Once backend integration is complete, messages will be delivered
            directly to the admin dashboard.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Subject
            </label>

            <input
              type="text"
              placeholder="Job Opportunity"
              {...register("subject", {
                required: "Subject is required",
              })}
              className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
            />

            {errors.subject && (
              <p className="mt-2 text-sm text-red-400">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Write your message..."
              {...register("message", {
                required: "Message is required",
              })}
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
            />

            {errors.message && (
              <p className="mt-2 text-sm text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <PaperAirplaneIcon className="h-5 w-5" />

            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}