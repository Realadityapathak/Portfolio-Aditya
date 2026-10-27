"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Github,
  CheckCircle2,
  ArrowUpRight,
  Lock,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiSanity,
  SiStripe,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const experienceData = {
  role: "Full-Stack Development Intern",
  company: "Celebal Technologies",
  location: "Jaipur, India · Hybrid",
  period: "May 2025 – Jul 2025",
  term: "Summer Engineering Term",
  summary:
    "Completed a 3-month summer engineering internship building and deploying a modern e-commerce storefront with Next.js, Sanity CMS, and Stripe. Collaborated with senior mentors to model headless schemas, wire transactional checkout, and optimize client performance.",
  deliverables: [
    {
      title: "Headless Content Modeling (Sanity.io)",
      description:
        "Structured custom schemas and GROQ queries so team members could update product catalogs and promotional banners directly in Sanity Studio without pushing code.",
    },
    {
      title: "Stripe Checkout & Transaction Flow",
      description:
        "Integrated Stripe Checkout API, session creation, and secure redirect handling to ensure reliable customer transactions and cart state clearing.",
    },
    {
      title: "Modular Next.js & Cart State",
      description:
        "Built reusable UI components with Tailwind CSS and wired React Context to keep the shopping cart synchronized and reactive across page navigation.",
    },
    {
      title: "Vercel Deployment & Image Delivery",
      description:
        "Deployed the application to Vercel with automated preview branches and optimized responsive images for fast mobile browsing.",
    },
  ],
  stack: [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React.js", icon: SiReact, color: "text-[#61dafb]" },
    { name: "Sanity CMS", icon: SiSanity, color: "text-[#f03e2f]" },
    { name: "Stripe API", icon: SiStripe, color: "text-[#635bff]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06b6d4]" },
    { name: "Vercel", icon: SiVercel, color: "text-white" },
  ],
  shippedProduct: {
    title: "Sanity Storefront Platform",
    subtitle: "Shipped Deliverable at Celebal",
    domain: "aditya-store.vercel.app",
    image: "/projects/ecommerce.png",
    demoUrl: "https://aditya-store.vercel.app/",
    codeUrl: "https://github.com/Realadityapathak/E-Commerce-Website",
    highlights: [
      "Zero-Redeploy Content Updates",
      "Production Stripe Certified",
      "100% Mobile Responsive",
    ],
  },
};

export default function Experience() {
  const { role, company, location, period, term, summary, deliverables, stack, shippedProduct } =
    experienceData;

  return (
    <section
      id="experience"
      className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36"
    >
      {/* Ambient background glows */}
      <div className="absolute top-20 -right-20 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[110px] pointer-events-none z-0" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-lime/10 blur-[110px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Editorial Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-lime font-mono text-xs uppercase tracking-[0.25em]">
            <Briefcase size={14} className="text-lime" />
            <span>Professional Track Record</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.03em] text-warm leading-[0.95]">
            Experience <span className="text-lime">spotlight</span>.
          </h2>
          <p className="font-body text-base md:text-lg text-slate-300 leading-relaxed">
            Hands-on engineering internship delivering a production e-commerce platform with
            headless content modeling and Stripe checkout.
          </p>
        </div>

        {/* Experience Spotlight Card */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group glass p-6 sm:p-8 md:p-10 rounded-2xl relative overflow-hidden border border-white/10 hover:border-lime/30 hover:shadow-[0_16px_50px_rgba(208,255,0,0.06)] transition-all duration-300 space-y-8"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime/60 to-transparent" />

          {/* Role Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="font-mono text-[11px] tracking-widest uppercase text-lime/90 bg-lime/10 px-2.5 py-0.5 rounded border border-lime/20 font-semibold">
                  Featured Role
                </span>
                <span className="text-white/30">·</span>
                <span className="font-mono text-xs text-slate-400">Celebal Technologies</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-warm tracking-tight">
                {role}
              </h3>
              <div className="flex items-center gap-4 text-sm text-slate-300 flex-wrap">
                <span className="text-lime font-medium flex items-center gap-1.5">
                  <Briefcase size={14} className="text-lime" />
                  {company}
                </span>
                <span className="text-white/20">·</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin size={13} className="text-lime/80" />
                  {location}
                </span>
              </div>
            </div>

            {/* Dates & Badge */}
            <div className="flex flex-wrap md:flex-col md:items-end gap-2 shrink-0">
              <span className="font-mono text-xs text-lime bg-lime/10 border border-lime/25 px-3 py-1.5 rounded-lg uppercase tracking-wider font-semibold inline-flex items-center gap-1.5">
                <Calendar size={13} />
                {period}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                {term}
              </span>
            </div>
          </div>

          {/* Two-Column Grid: Left = Deliverables & Stack, Right = Shipped Product Proof */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (7 cols): Narrative & Deliverable Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm md:text-base text-slate-200 leading-relaxed font-body">
                {summary}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                  Core Engineering Contributions
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {deliverables.map((d) => (
                    <div
                      key={d.title}
                      className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-lime/25 hover:bg-white/[0.05] transition-colors space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-lime shrink-0" />
                        <h4 className="font-display text-sm sm:text-base font-bold text-warm">
                          {d.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 pl-6 leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Leveraged */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                  Technologies Leveraged
                </span>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => {
                    const TechIcon = tech.icon;
                    return (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-slate-200 hover:border-lime/30 hover:text-warm transition-colors"
                      >
                        <TechIcon className={`text-sm ${tech.color}`} aria-hidden="true" />
                        <span>{tech.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Shipped Deliverable Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="group/preview glass rounded-xl overflow-hidden border border-white/10 hover:border-lime/30 transition-all duration-300">
                {/* Browser Top Chrome */}
                <div className="px-3 py-2.5 bg-black/40 border-b border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 max-w-[220px] bg-white/[0.06] rounded px-2.5 py-0.5 text-[10px] font-mono text-slate-400 flex items-center justify-center gap-1.5 truncate border border-white/[0.05]">
                    <Lock size={10} className="text-lime shrink-0" />
                    <span className="truncate">{shippedProduct.domain}</span>
                  </div>
                  <div className="w-8" />
                </div>

                {/* Screenshot Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0e17]">
                  <Image
                    src={shippedProduct.image}
                    alt={shippedProduct.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs z-10">
                    <span className="font-display font-semibold text-warm drop-shadow">
                      {shippedProduct.title}
                    </span>
                    <span className="text-[10px] font-mono text-lime bg-black/60 px-2 py-0.5 rounded border border-lime/30 backdrop-blur-sm">
                      Live App
                    </span>
                  </div>
                </div>

                {/* Product Meta & Actions */}
                <div className="p-4 sm:p-5 space-y-4 bg-white/[0.02]">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-lime block font-semibold">
                      Deliverable Outcome
                    </span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Production e-commerce storefront deployed to Vercel, integrating Sanity.io CMS for dynamic catalogue management and Stripe for checkout.
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-1.5">
                    {shippedProduct.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={13} className="text-lime shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={shippedProduct.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-lime text-black font-semibold text-xs hover:bg-lime/90 transition-colors shadow-glow"
                    >
                      <span>View Live Demo</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={shippedProduct.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-200 text-xs font-medium hover:border-lime/30 hover:text-warm transition-colors"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
