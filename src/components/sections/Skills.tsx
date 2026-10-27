"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Terminal,
  Boxes,
  Cpu,
  Binary,
  Box,
  Network,
} from "lucide-react";
import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiSanity,
  SiStripe,
  SiVercel,
  SiGit,
  SiPostman,
} from "react-icons/si";

interface LanguageItem {
  name: string;
  role: string;
  status: string;
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
}

interface FundamentalItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface SkillItem {
  name: string;
  note: string;
  icon: React.ElementType;
  iconColor: string;
}

interface SkillSection {
  title: string;
  skills: SkillItem[];
}

interface MatrixColumn {
  index: string;
  category: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  featured: boolean;
  languages?: LanguageItem[];
  subgroupTitle?: string;
  fundamentals?: FundamentalItem[];
  sections?: SkillSection[];
}

const matrix: MatrixColumn[] = [
  {
    index: "01",
    category: "Core Languages",
    badge: "Foundations",
    icon: Code2,
    description: "Type systems, modern asynchronous runtimes, and algorithmic efficiency.",
    featured: false,
    languages: [
      {
        name: "TypeScript",
        role: "Type-safe interfaces, generics, Next.js contract safety",
        status: "Primary",
        icon: SiTypescript,
        iconColor: "text-[#3178c6]",
        bgColor: "bg-[#3178c6]/10 border-[#3178c6]/25",
      },
      {
        name: "JavaScript (ES6+)",
        role: "Event loop, async/await, closures, modern DOM & node APIs",
        status: "Primary",
        icon: SiJavascript,
        iconColor: "text-[#f7df1e]",
        bgColor: "bg-[#f7df1e]/10 border-[#f7df1e]/25",
      },
      {
        name: "C++",
        role: "Competitive programming, STL, memory & algorithmic efficiency",
        status: "Proficient",
        icon: SiCplusplus,
        iconColor: "text-[#00599c]",
        bgColor: "bg-[#00599c]/10 border-[#00599c]/25",
      },
    ],
    subgroupTitle: "CS Fundamentals & Theory",
    fundamentals: [
      { name: "Data Structures & Algorithms", icon: Binary, color: "text-lime" },
      { name: "Object-Oriented Programming (OOP)", icon: Box, color: "text-cyan-400" },
      { name: "Database Systems (DBMS)", icon: Database, color: "text-amber-400" },
      { name: "Operating Systems", icon: Cpu, color: "text-purple-400" },
      { name: "Computer Networks", icon: Network, color: "text-blue-400" },
      { name: "Standard Template Library (STL)", icon: Layers, color: "text-emerald-400" },
    ],
  },
  {
    index: "02",
    category: "Full-Stack Frameworks",
    badge: "Core Stack",
    icon: Layers,
    description: "Component architectures, reactive client state, and real-time server services.",
    featured: true,
    sections: [
      {
        title: "Frontend Architecture",
        skills: [
          {
            name: "Next.js",
            note: "App Router, SSR, Server Actions",
            icon: SiNextdotjs,
            iconColor: "text-white",
          },
          {
            name: "React.js",
            note: "Custom Hooks, Component Lifecycle",
            icon: SiReact,
            iconColor: "text-[#61dafb]",
          },
          {
            name: "Tailwind CSS",
            note: "Design Tokens, Fluid Layouts",
            icon: SiTailwindcss,
            iconColor: "text-[#06b6d4]",
          },
          {
            name: "Zustand & Context",
            note: "Predictable Reactive State",
            icon: Boxes,
            iconColor: "text-lime",
          },
          {
            name: "HTML5 / CSS3",
            note: "Semantic Structure & Modern CSS",
            icon: SiHtml5,
            iconColor: "text-[#e34f26]",
          },
        ],
      },
      {
        title: "Backend & Realtime",
        skills: [
          {
            name: "Node.js",
            note: "Asynchronous I/O Server Runtime",
            icon: SiNodedotjs,
            iconColor: "text-[#5fa04e]",
          },
          {
            name: "Express.js",
            note: "Modular REST APIs & Middleware",
            icon: SiExpress,
            iconColor: "text-white/90",
          },
          {
            name: "Socket.io",
            note: "Full-Duplex WebSocket Chat",
            icon: SiSocketdotio,
            iconColor: "text-white",
          },
          {
            name: "JWT Auth",
            note: "Stateless Auth & Route Guards",
            icon: SiJsonwebtokens,
            iconColor: "text-[#d63aff]",
          },
        ],
      },
    ],
  },
  {
    index: "03",
    category: "Cloud, Data & Tooling",
    badge: "Infrastructure",
    icon: Database,
    description: "Data persistence, headless content modeling, payment gateways, and CI/CD.",
    featured: false,
    sections: [
      {
        title: "Databases & Headless CMS",
        skills: [
          {
            name: "MongoDB",
            note: "Document Store & Mongoose ORM",
            icon: SiMongodb,
            iconColor: "text-[#47a248]",
          },
          {
            name: "MySQL",
            note: "Relational Schemas & SQL Queries",
            icon: SiMysql,
            iconColor: "text-[#4479a1]",
          },
          {
            name: "Sanity CMS",
            note: "Headless Content & GROQ API",
            icon: SiSanity,
            iconColor: "text-[#f03e2f]",
          },
        ],
      },
      {
        title: "Cloud Services & Workflow",
        skills: [
          {
            name: "Stripe API",
            note: "Checkout Sessions & Webhooks",
            icon: SiStripe,
            iconColor: "text-[#635bff]",
          },
          {
            name: "Puter.js SDK",
            note: "Serverless Auth & Cloud Storage",
            icon: Cpu,
            iconColor: "text-cyan-400",
          },
          {
            name: "Vercel & Render",
            note: "Edge Deployment & Hosting",
            icon: SiVercel,
            iconColor: "text-white",
          },
          {
            name: "Git & GitHub",
            note: "Version Control & Branching",
            icon: SiGit,
            iconColor: "text-[#f05032]",
          },
          {
            name: "Postman",
            note: "API Contract Testing & Mocking",
            icon: SiPostman,
            iconColor: "text-[#ff6c37]",
          },
        ],
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="stack"
      className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36"
    >
      {/* Ambient background glow */}
      <div className="absolute top-20 -right-20 w-[450px] h-[450px] rounded-full bg-lime/10 blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-10 -left-20 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Editorial Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-lime font-mono text-xs uppercase tracking-[0.25em]">
            <Terminal size={14} className="text-lime" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.03em] text-warm leading-[0.95]">
            Stack <span className="text-lime">& systems</span>.
          </h2>
          <p className="font-body text-base md:text-lg text-steel leading-relaxed">
            Technologies, frameworks, and engineering foundations I&apos;ve used to build, test, and
            ship full-stack web products.
          </p>
        </div>

        {/* 3-Pillar Tech-Stack Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {matrix.map((col, idx) => {
            const IconComponent = col.icon;
            return (
              <motion.article
                key={col.category}
                initial={{
                  opacity: 0,
                  y: col.featured ? 32 : 22,
                  scale: col.featured ? 0.98 : 1,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: idx === 1 ? 0.15 : idx === 2 ? 0.28 : 0.05,
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group glass p-7 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                  col.featured
                    ? "border-lime/30 shadow-[0_12px_40px_rgba(208,255,0,0.08)] bg-white/[0.07]"
                    : "hover:border-lime/25 hover:shadow-glow"
                }`}
              >
                {/* Top accent highlight for core stack */}
                {col.featured && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent" />
                )}

                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                          col.featured
                            ? "bg-lime/10 border-lime/30 text-lime"
                            : "bg-white/[0.05] border-white/10 text-steel group-hover:text-lime transition-colors"
                        }`}
                      >
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] tracking-widest uppercase text-steel/70 block">
                          {col.index} {"//"}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-warm tracking-tight">
                          {col.category}
                        </h3>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold border ${
                        col.featured
                          ? "bg-lime/15 text-lime border-lime/30"
                          : "bg-white/[0.06] text-steel border-white/10"
                      }`}
                    >
                      {col.badge}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-steel leading-relaxed">
                    {col.description}
                  </p>

                  {/* Pillar 01: Core Languages & CS Fundamentals */}
                  {col.languages && (
                    <div className="space-y-5">
                      <div className="space-y-2.5">
                        {col.languages.map((lang) => {
                          const LangIcon = lang.icon;
                          return (
                            <div
                              key={lang.name}
                              className="group/lang p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-lime/30 hover:bg-white/[0.06] transition-all flex items-start gap-3.5"
                            >
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover/lang:scale-105 ${lang.bgColor}`}
                              >
                        <LangIcon className={`text-xl ${lang.iconColor}`} aria-hidden="true" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="font-display font-bold text-warm text-sm md:text-base">
                                    {lang.name}
                                  </span>
                                  <span className="text-[10px] font-mono uppercase tracking-wider text-lime/90 bg-lime/10 px-2 py-0.5 rounded border border-lime/20 shrink-0">
                                    {lang.status}
                                  </span>
                                </div>
                                <p className="text-xs text-steel mt-1 leading-snug">
                                  {lang.role}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-2">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-steel/80 block mb-2.5">
                          {col.subgroupTitle}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {col.fundamentals?.map((item) => {
                            const FundIcon = item.icon;
                            return (
                              <span
                                key={item.name}
                                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-steel bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-md hover:border-lime/30 hover:text-warm transition-colors"
                              >
                                <FundIcon className={`w-3 h-3 ${item.color} shrink-0`} aria-hidden="true" />
                                <span>{item.name}</span>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pillar 02 & 03: Sectioned Frameworks & Tooling */}
                  {col.sections && (
                    <div className="space-y-6">
                      {col.sections.map((sec) => (
                        <div key={sec.title} className="space-y-2.5">
                          <span className="text-[11px] font-mono uppercase tracking-widest text-steel/80 block">
                            {sec.title}
                          </span>
                          <div className="space-y-2">
                            {sec.skills.map((s) => {
                              const SkillIcon = s.icon;
                              return (
                                <div
                                  key={s.name}
                                  className="group/skill flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-lime/25 hover:bg-white/[0.05] transition-all gap-1 sm:gap-2"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <div className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover/skill:border-lime/30 group-hover/skill:bg-white/[0.07] transition-colors">
                                      <SkillIcon
                                        className={`text-sm ${s.iconColor} transition-transform duration-200 group-hover/skill:scale-110`}
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <span className="font-display font-semibold text-warm text-sm">
                                      {s.name}
                                    </span>
                                  </div>
                                  <span className="text-[11px] text-steel/80 pl-[38px] sm:pl-0 sm:text-right shrink-0">
                                    {s.note}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
