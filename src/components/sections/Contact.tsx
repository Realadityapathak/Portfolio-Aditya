"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { toast } from "sonner";
import { sendContactEmail } from "@/app/actions/contact";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const [honeypot, setHoneypot] = useState("");
  const [serverFeedback, setServerFeedback] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setServerFeedback(null);

    try {
      const res = await sendContactEmail({
        ...data,
        honeypot,
      });

      if (res.success) {
        setServerFeedback({
          success: true,
          message: res.message || "Message sent successfully! I'll reply within 24 hours.",
        });
        toast.success("Message sent! I'll reply within 24 hours.");
        reset();
        setHoneypot("");
      } else {
        const errorMsg = res.error || "Failed to send message. Please try again.";
        setServerFeedback({
          success: false,
          message: errorMsg,
        });
        toast.error(errorMsg);
      }
    } catch (err: any) {
      const fallbackMsg = "An unexpected error occurred. Please try again or email real2adityapathak@gmail.com directly.";
      setServerFeedback({
        success: false,
        message: fallbackMsg,
      });
      toast.error(fallbackMsg);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36"
    >
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none z-0" />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
        <div className="space-y-8">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] text-warm leading-[0.9]">
            Let&apos;s build <span className="text-lime">something</span>.
          </h2>
          <p className="text-xl text-steel leading-relaxed">
            I&apos;m actively looking for internships and entry-level full-stack roles. Whether you need
            a frontend, backend, or end-to-end build — let&apos;s talk.
          </p>
          {/* ── Brand contact cards ── */}
          <div className="grid grid-cols-2 gap-3 pt-2">

            {/* Gmail */}
            <motion.a
              href="mailto:real2adityapathak@gmail.com"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative flex items-center gap-3 glass rounded-2xl px-4 py-3.5 overflow-hidden border border-white/10 hover:border-[#EA4335]/40 transition-all duration-300"
              style={{ "--glow": "234,67,53" } as React.CSSProperties}
            >
              {/* Glow blob */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_left_top,rgba(234,67,53,0.18),transparent_70%)] pointer-events-none" />
              {/* Icon */}
              <div className="shrink-0 w-9 h-9 rounded-xl bg-[#EA4335]/15 flex items-center justify-center group-hover:bg-[#EA4335]/25 transition-colors duration-300">
                <SiGmail size={18} className="text-[#EA4335]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-warm font-semibold text-sm leading-tight">Gmail</p>
                <p className="text-steel text-xs leading-tight mt-0.5 truncate">real2adityapathak</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+917903748311"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative flex items-center gap-3 glass rounded-2xl px-4 py-3.5 overflow-hidden border border-white/10 hover:border-lime/40 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_left_top,rgba(208,255,0,0.12),transparent_70%)] pointer-events-none" />
              {/* Custom phone SVG */}
              <div className="shrink-0 w-9 h-9 rounded-xl bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lime" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2.75h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-warm font-semibold text-sm leading-tight">Phone</p>
                <p className="text-steel text-xs leading-tight mt-0.5">+91 79037 48311</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/realadityapathak"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative flex items-center gap-3 glass rounded-2xl px-4 py-3.5 overflow-hidden border border-white/10 hover:border-[#0A66C2]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_left_top,rgba(10,102,194,0.22),transparent_70%)] pointer-events-none" />
              <div className="shrink-0 w-9 h-9 rounded-xl bg-[#0A66C2]/15 flex items-center justify-center group-hover:bg-[#0A66C2]/30 transition-colors duration-300">
                <FaLinkedinIn size={18} className="text-[#0A66C2]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-warm font-semibold text-sm leading-tight">LinkedIn</p>
                <p className="text-steel text-xs leading-tight mt-0.5">realadityapathak</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Realadityapathak"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative flex items-center gap-3 glass rounded-2xl px-4 py-3.5 overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_left_top,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />
              <div className="shrink-0 w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <SiGithub size={18} className="text-white" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-warm font-semibold text-sm leading-tight">GitHub</p>
                <p className="text-steel text-xs leading-tight mt-0.5">Realadityapathak</p>
              </div>
            </motion.a>

          </div>
        </div>

        <div className="relative">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass p-6 md:p-8 lg:p-10 space-y-6"
            noValidate
          >
            {/* Honeypot Spam Protection (Invisible to real users) */}
            <div
              className="absolute opacity-0 pointer-events-none -left-[9999px]"
              aria-hidden="true"
              tabIndex={-1}
            >
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* Server Feedback Banner */}
            <AnimatePresence mode="wait">
              {serverFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    serverFeedback.success
                      ? "bg-lime/10 border-lime/30 text-warm"
                      : "bg-red-500/10 border-red-500/30 text-warm"
                  }`}
                  role="status"
                >
                  {serverFeedback.success ? (
                    <CheckCircle2 size={20} className="text-lime shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold">
                      {serverFeedback.success ? "Message Dispatched" : "Submission Notice"}
                    </p>
                    <p className="text-steel leading-relaxed">{serverFeedback.message}</p>
                    {!serverFeedback.success && (
                      <p className="pt-1">
                        <a
                          href="mailto:real2adityapathak@gmail.com"
                          className="text-lime underline hover:text-lime/80 text-xs font-mono"
                        >
                          Send directly via your email client &rarr;
                        </a>
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-bold uppercase tracking-wider text-steel block"
                >
                  Name <span className="text-lime" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  disabled={isSubmitting}
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                  })}
                  placeholder="Aditya"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-base md:text-lg text-warm placeholder:text-white/30 focus:outline-none focus:border-lime focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink transition-colors disabled:opacity-50"
                />
                {errors.name && (
                  <span id="name-error" role="alert" className="text-xs text-red-400 block">{errors.name.message}</span>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-wider text-steel block"
                >
                  Email <span className="text-lime" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  disabled={isSubmitting}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  placeholder="hello@me.com"
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-base md:text-lg text-warm placeholder:text-white/30 focus:outline-none focus:border-lime focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink transition-colors disabled:opacity-50"
                />
                {errors.email && (
                  <span id="email-error" role="alert" className="text-xs text-red-400 block">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-bold uppercase tracking-wider text-steel block"
              >
                Message <span className="text-lime" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                required
                aria-required="true"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                disabled={isSubmitting}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                placeholder="What's the project?"
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-base md:text-lg text-warm placeholder:text-white/30 focus:outline-none focus:border-lime focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink transition-colors resize-none disabled:opacity-50"
              />
              {errors.message && (
                <span id="message-error" role="alert" className="text-xs text-red-400 block">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="glass-btn w-full py-4 rounded-xl text-warm font-display font-bold text-lg flex items-center justify-center gap-3 hover:text-lime transition-colors disabled:opacity-50 min-h-[52px]"
              aria-label="Send message"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin text-lime" />
                  <span>Sending message...</span>
                </>
              ) : (
                <>
                  <span>Send message</span>
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
