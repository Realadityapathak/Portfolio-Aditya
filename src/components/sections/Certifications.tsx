"use client";
import { motion } from "framer-motion";

// Official brand marks for certifying bodies
const HackerRankLogo = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    className="shrink-0 rounded-[4px] overflow-hidden"
    aria-hidden="true"
  >
    <path
      fill="#00EA64"
      d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 01-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 01-.11.112h-5.78a.11.11 0 01-.11-.11V8.111c0-.06.05-.11.11-.11z"
    />
  </svg>
);

const GoogleLogo = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    className="shrink-0"
    aria-hidden="true"
  >
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

const IBMLogo = () => (
  <svg
    width="28"
    height="18"
    viewBox="0 0 24 24"
    fill="#0F62FE"
    className="shrink-0"
    aria-hidden="true"
  >
    <path d="M0 16.144h4.667v.668H0zm0-1.282h4.667v.67H0zM1.33 13.583h2.003v.671H1.33zm0-1.278h2.003v.67H1.33zm0-1.28h2.003v.671H1.33zm0-1.281h2.003v.671H1.33zM0 8.42h4.667v.671H0zm0-1.281h4.667v.67H0zM0 5.86h4.667v.671H0zm6.667 10.952h17.333v-.668H6.667zm0-1.282h17.333v.67H6.667zm1.333-1.287h14.667v.671H8zm0-1.278h14.667v.67H8zm0-1.28h14.667v.671H8zm0-1.281h14.667v.67H8zM6.667 8.42h17.333v.671H6.667zm0-1.281h17.333v.67H6.667zm0-2.559v.671h17.333V5.86Z" />
  </svg>
);

const certs = [
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    year: "2025",
    desc: "Validated software engineering fundamentals through HackerRank's technical assessment program.",
    url: "https://www.hackerrank.com/certificates/iframe/bbc6652080bc",
    icon: HackerRankLogo,
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    year: "2025",
    desc: "Completed Google's generative AI curriculum covering model fundamentals, prompting, and responsible AI.",
    url: "https://www.cloudskillsboost.google/public_profiles/c204c7aa-ec3b-4c33-97a2-ca3dce6f53c7/badges/15754117",
    icon: GoogleLogo,
  },
  {
    title: "Build Your Own Chatbot",
    issuer: "IBM (Cognitive Class)",
    year: "2024",
    desc: "Built a conversational AI agent using IBM Watson and cognitive computing frameworks.",
    url: "https://courses.cognitiveclass.ai/certificates/b987302e8f4a430faba6c0e1e14be5b4",
    icon: IBMLogo,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6 md:px-12 lg:px-20 overflow-hidden scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36">
      <div className="absolute top-0 -right-24 w-[500px] h-[500px] rounded-full bg-lime/10 blur-[120px] pointer-events-none z-0" />
      <div className="max-w-6xl mx-auto relative z-10 space-y-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-white/10 pb-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-300 mb-3">Credentials · 2024–2025</p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] text-warm leading-[0.9]">Certifications</h2>
          </div>
          <p className="text-sm md:text-base text-steel font-medium max-w-xs md:text-right">Verified credentials & certifying bodies.</p>
        </div>

        <div className="space-y-6">
          {certs.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block"
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-lime/30 to-transparent" />

              <div className="glass flex flex-col md:flex-row md:items-center gap-6 md:gap-10 px-6 md:px-10 py-8 md:py-10 relative overflow-hidden hover:border-lime/30 transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-lime/20 via-lime/10 to-transparent" />

                {/* Issuer — official logo + name */}
                <div className="md:w-56 shrink-0 flex items-center gap-3.5">
                  <span className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center shrink-0 shadow-sm bg-white/[0.04] group-hover:border-lime/40 group-hover:shadow-[0_0_15px_rgba(208,255,0,0.15)] transition-all duration-300">
                    <c.icon />
                  </span>
                  <span className="font-display text-xl md:text-2xl font-bold text-steel tracking-tight leading-none group-hover:text-warm transition-colors duration-300">
                    {c.issuer}
                  </span>
                </div>

                {/* Title + description */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-warm leading-snug tracking-[-0.02em] group-hover:text-lime transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm md:text-base text-steel leading-relaxed mt-2 max-w-2xl">{c.desc}</p>
                </div>

                {/* Year + refined link */}
                <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-1 md:w-28 shrink-0 md:text-right">
                  <span className="text-xs font-mono font-medium text-lime/80">{c.year}</span>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-lime/90 group-hover:text-lime transition-colors">
                    View <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
