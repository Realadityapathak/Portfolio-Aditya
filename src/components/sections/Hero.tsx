"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-end overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 lg:px-20">
      {/* Animated background blobs behind content */}
      <div className="bg-blob w-[500px] h-[500px] bg-lime/20 -top-40 -left-20" />
      <div className="bg-blob w-[600px] h-[600px] bg-cyan-500/10 top-20 -right-40" style={{ animationDelay: "-10s" }} />

      <HeroScene />

      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
        {/* Left text */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-[-0.04em] text-warm">
              Aditya{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-lime to-emerald-300">Pathak</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-body text-xl md:text-2xl text-steel max-w-xl leading-relaxed"
          >
            Software Engineer building full-stack products that people actually use.
            Former Celebal intern. MCA 2026. Open to relocating.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a href="#contact" className="glass-btn px-6 py-3.5 rounded-2xl text-warm font-display font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:text-lime transition-colors w-full sm:w-auto" data-hover>
              Let&apos;s build <span className="text-lime">→</span>
            </a>
            <a href="#projects" className="glass-btn px-6 py-3.5 rounded-2xl text-warm font-medium flex items-center justify-center gap-2 hover:text-lime transition-colors w-full sm:w-auto" data-hover>
              See work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn px-6 py-3.5 rounded-2xl text-warm font-medium flex items-center justify-center gap-2 hover:text-lime transition-colors w-full sm:w-auto"
              data-hover
            >
              <Download size={18} /> Resume
            </a>
          </motion.div>
        </div>

        {/* Right meta glass card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="lg:col-span-5 glass p-6 md:p-8 space-y-6 overflow-hidden min-w-0"
        >
          <div className="flex items-center gap-2 text-lime font-display font-medium text-sm tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" /> Available now
          </div>
          <h2 className="font-display text-3xl font-bold text-warm">Open to relocation · Internships & full-time</h2>
          <div className="text-steel leading-relaxed space-y-2 text-sm md:text-base">
            <p>MCA graduate (Lovely Professional University, 2024–2026).</p>
            <p>Built 3 live apps: e-commerce (Stripe + Sanity), real-time chat (Socket.io), AI resume analyzer (Puter.js).</p>
          </div>
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium tracking-wide text-steel">
            <span className="glass px-3 py-1 rounded-full">JavaScript</span>
            <span className="glass px-3 py-1 rounded-full">TypeScript</span>
            <span className="glass px-3 py-1 rounded-full">Next.js</span>
            <span className="glass px-3 py-1 rounded-full">Node</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-steel flex flex-col items-center gap-2 hover:text-warm transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <span className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-1 h-1.5 rounded-full bg-lime" />
        </span>
      </motion.a>
    </section>
  );
}
