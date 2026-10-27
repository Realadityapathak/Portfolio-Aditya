"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Building2, MapPin, Calendar } from "lucide-react";

interface EducationItem {
  degree: string;
  degreeFull: string;
  level: string;
  school: string;
  city: string;
  year: string;
  status: string;
  isCurrent: boolean;
  logo: string;
  desc: string;
  coursework: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "MCA",
    degreeFull: "Master of Computer Applications",
    level: "Postgraduate Degree",
    school: "Lovely Professional University (LPU)",
    city: "Jalandhar, Punjab",
    year: "2024 – 2026",
    status: "Current Focus · In Progress",
    isCurrent: true,
    logo: "/education/lpu.png",
    desc: "Currently completing my Master's at LPU, focusing on full-stack architecture, distributed systems, and core data structures. Connecting theoretical computer science with live production projects and scalable web applications.",
    coursework: [
      "Advanced Data Structures & Algorithms",
      "Object-Oriented Architecture",
      "Database Systems (DBMS)",
      "Full-Stack Web Development",
      "Cloud Infrastructure",
    ],
  },
  {
    degree: "BCA",
    degreeFull: "Bachelor of Computer Applications",
    level: "Undergraduate Degree",
    school: "Guru Nanak College",
    city: "Dhanbad, Jharkhand",
    year: "2021 – 2024",
    status: "Graduated · 2024",
    isCurrent: false,
    logo: "/education/gnc.png",
    desc: "Completed my undergraduate foundation in computer science at Guru Nanak College. Built solid problem-solving fundamentals in C++, Java, relational SQL schema design, and operating systems before specializing in modern web stacks.",
    coursework: [
      "Data Structures & C++",
      "Computer Networks",
      "Operating Systems",
      "Relational Database Design",
      "Software Engineering",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36"
    >
      {/* Ambient background glow */}
      <div className="absolute top-10 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-10 -right-20 w-[350px] h-[350px] rounded-full bg-lime/10 blur-[110px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Editorial Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-lime font-mono text-xs uppercase tracking-[0.25em]">
            <GraduationCap size={14} className="text-lime" />
            <span>Academic Credentials</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.03em] text-warm leading-[0.95]">
            Academic <span className="text-lime">foundation</span>.
          </h2>
          <p className="font-body text-base md:text-lg text-slate-300 leading-relaxed">
            Formal education in computer science, bridging core algorithmic theory and software
            engineering foundations with modern web application development.
          </p>
        </div>

        {/* Education Cards Grid with Asymmetric Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {educationData.map((item) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, x: item.isCurrent ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: item.isCurrent ? 0 : 0.15,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group glass p-7 sm:p-8 md:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                item.isCurrent
                  ? "border-lime/30 shadow-[0_12px_40px_rgba(208,255,0,0.06)] bg-white/[0.07]"
                  : "hover:border-lime/25 hover:shadow-glow"
              }`}
            >
              {/* Top accent highlight for current degree */}
              {item.isCurrent && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent" />
              )}

              <div className="space-y-6">
                {/* Header Row: Degree emblem + details */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 aspect-square border p-1.5 bg-white shadow-md transition-all duration-200 group-hover:scale-105 ${
                        item.isCurrent
                          ? "border-lime/40 ring-2 ring-lime/20"
                          : "border-white/20 group-hover:border-lime/30"
                      }`}
                    >
                      <Image
                        src={item.logo}
                        alt={`${item.school} official emblem`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain aspect-square"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-display text-2xl sm:text-3xl font-bold text-warm tracking-tight">
                          {item.degree}
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400">
                          / {item.level}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-lime font-medium mt-0.5 truncate">
                        {item.degreeFull}
                      </p>
                    </div>
                  </div>

                  {/* Status Pill */}
                  <div className="self-start sm:self-auto shrink-0 pl-[68px] sm:pl-0">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold inline-block border ${
                        item.isCurrent
                          ? "bg-lime/15 text-lime border-lime/30"
                          : "bg-white/[0.06] text-slate-300 border-white/10"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="space-y-1.5">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-warm flex items-center gap-2">
                    <Building2 size={16} className="text-lime/90 shrink-0" />
                    <span>{item.school}</span>
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 flex-wrap">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-lime/80" />
                      {item.city}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar size={12} className="text-lime/80" />
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-body">
                  {item.desc}
                </p>

                {/* Key Coursework Tags */}
                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                    Core Coursework & Specialization
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-[11px] font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-md hover:border-lime/30 hover:text-warm transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
