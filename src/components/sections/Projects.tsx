"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Radio, Check } from "lucide-react";

const featuredProject = {
  title: "Chatify",
  subtitle: "Real-Time WebSocket Messaging Platform",
  domain: "chatify-live.vercel.app",
  stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
  desc: "Engineered from the ground up to master real-time duplex communication. Implements bi-directional Socket.io events, persistent conversation histories in MongoDB, and protected routes backed by JWT authentication.",
  highlights: [
    "Bi-directional WebSockets with instant room broadcast & typing indicators",
    "Secure JWT authentication lifecycle with HTTP-only cookies",
    "Dual-cloud deployment: Next.js on Vercel + Node/Socket service on Render",
  ],
  image: "/projects/chatify.png",
  links: {
    demo: "https://chatify-live.vercel.app/",
    code: "https://github.com/Realadityapathak/Chat-App",
  },
};

const secondaryProjects = [
  {
    title: "Sanity E-Commerce Platform",
    subtitle: "Headless CMS + Stripe Checkout",
    domain: "aditya-store.vercel.app",
    stack: ["Next.js", "Sanity CMS", "Stripe API", "Tailwind CSS"],
    desc: "A production storefront built during my internship at Celebal Technologies. Features live Sanity Studio content synchronization, dynamic cart state via React Context, and secure Stripe checkout flows.",
    highlights: [
      "Dynamic catalog updates without code redeployments",
      "Production-ready Stripe webhook & payment verification",
    ],
    image: "/projects/ecommerce.png",
    links: {
      demo: "https://aditya-store.vercel.app/",
      code: "https://github.com/Realadityapathak/E-Commerce-Website",
    },
  },
  {
    title: "AI Resume Intelligence",
    subtitle: "Cloud SDK + Puter.js Integration",
    domain: "resume-analyzer-intelligence.vercel.app",
    stack: ["React", "TypeScript", "Puter.js", "Zustand", "Tailwind CSS"],
    desc: "An intelligent career tool that compares resumes against job descriptions to extract missing keywords and skill alignment scores, leveraging serverless AI and cloud storage via Puter.js.",
    highlights: [
      "AI parsing & contextual keyword match scoring",
      "Serverless cloud auth, storage, and database via Puter SDK",
    ],
    image: "/projects/resume-analyzer.png",
    links: {
      demo: "https://resume-analyzer-intelligence.vercel.app/",
      code: "https://github.com/Realadityapathak/AI-Resume-Analyzer",
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36"
    >
      <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-lime/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-10 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Editorial Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-lime font-mono text-xs uppercase tracking-[0.25em]">
            <Sparkles size={14} className="text-lime" />
            <span>Selected Works</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.03em] text-warm leading-[0.95]">
            Featured <span className="text-lime">projects</span>.
          </h2>
          <p className="font-body text-base md:text-lg text-steel leading-relaxed">
            Real products I&apos;ve architected, coded, and deployed — ranging from real-time WebSocket
            communication to headless commerce and AI workflow tooling.
          </p>
        </div>

        {/* 1. FEATURED HERO PROJECT (Asymmetric Layout) */}
        <motion.article
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group glass p-7 sm:p-9 lg:p-12 relative overflow-hidden rounded-3xl border border-lime/30 shadow-[0_16px_50px_rgba(208,255,0,0.08)] bg-white/[0.04]"
        >
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Interactive Browser Chrome Frame */}
            <div className="lg:col-span-7 space-y-3">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#080c14] shadow-2xl transition-all duration-500 group-hover:border-lime/40">
                {/* Browser top bar */}
                <div className="bg-[#0f1422] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-[11px] font-mono text-slate-400">
                    <span className="text-lime/80">https://</span>
                    <span>{featuredProject.domain}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-lime">
                    <Radio size={12} className="animate-pulse" />
                    <span className="hidden sm:inline">LIVE</span>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0e17]">
                  <Image
                    src={featuredProject.image}
                    alt={`${featuredProject.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right: Project Deep-Dive */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 border border-lime/30 text-[11px] font-mono font-semibold text-lime uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime animate-ping" />
                  Primary Showcase
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-warm tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-sm font-medium text-lime">{featuredProject.subtitle}</p>
              </div>

              <p className="text-steel text-sm sm:text-base leading-relaxed">
                {featuredProject.desc}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-1">
                {featuredProject.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-lime/15 border border-lime/30 flex items-center justify-center shrink-0 mt-0.5 text-lime">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featuredProject.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono font-medium text-slate-300 bg-white/[0.05] px-2.5 py-1 rounded-md border border-white/10 group-hover:border-lime/20 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap gap-3 pt-3">
                <a
                  href={featuredProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn flex-1 px-5 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 text-warm hover:text-lime transition-all min-h-[46px] shadow-sm hover:border-lime/40"
                  data-hover
                  aria-label={`View live demo of ${featuredProject.title}`}
                >
                  <span>Launch Application</span>
                  <ExternalLink size={15} />
                </a>
                <a
                  href={featuredProject.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn flex-1 px-5 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 text-warm hover:text-lime transition-all min-h-[46px]"
                  data-hover
                  aria-label={`View source code of ${featuredProject.title}`}
                >
                  <span>Source Code</span>
                  <Github size={15} />
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        {/* 2. SECONDARY PROJECTS GRID (2 Distinct Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {secondaryProjects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15 + idx * 0.15,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group glass p-7 sm:p-8 flex flex-col justify-between rounded-2xl border border-white/10 hover:border-lime/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="space-y-5">
                {/* Screenshot in sleek frame */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#0a0e17] group-hover:border-lime/25 transition-colors">
                  <Image
                    src={p.image}
                    alt={`${p.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#0a0e17]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 z-10">
                    {p.domain}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-warm tracking-tight group-hover:text-lime transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-medium text-lime/90 mt-1">{p.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-steel text-sm leading-relaxed">{p.desc}</p>

                {/* Feature highlights */}
                <div className="space-y-1.5 pt-1">
                  {p.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-lime mt-0.5 font-bold">›</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Badges */}
                <div className="flex gap-1.5 flex-wrap pt-1">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase tracking-wider text-steel bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 pt-4 border-t border-white/10 flex gap-3">
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 text-warm hover:text-lime transition-colors min-h-[42px]"
                  data-hover
                  aria-label={`View live demo of ${p.title}`}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  href={p.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 text-warm hover:text-lime transition-colors min-h-[42px]"
                  data-hover
                  aria-label={`View source code of ${p.title}`}
                >
                  <span>GitHub</span>
                  <Github size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
