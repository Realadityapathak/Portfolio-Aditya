"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Live Projects", value: 3, suffix: "+", unit: "", desc: "Built with Next.js, Stripe, Socket.io, AI." },
  { label: "Months Work", value: 3, suffix: "", unit: "months", desc: "Real internship at Celebal Technologies." },
  { label: "Techs Used", value: 12, suffix: "+", unit: "", desc: "React, Node, MongoDB, Tailwind, TypeScript." },
];

function CountUp({
  value,
  duration = 1400,
  delay = 100,
  startCounting,
}: {
  value: number;
  duration?: number;
  delay?: number;
  startCounting: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }
    const timer = setTimeout(() => {
      const start = performance.now();
      const tick = () => {
        const progress = Math.min((performance.now() - start) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, duration, delay, startCounting]);

  return <span>{count}</span>;
}

function StatRow({
  value,
  suffix,
  unit,
  label,
  desc,
  animateCount,
  idx,
}: {
  value: number;
  suffix: string;
  unit: string;
  label: string;
  desc: string;
  animateCount: boolean;
  idx: number;
}) {
  return (
    <div className="group">
      <div className="flex items-baseline gap-2 md:gap-3">
        <span className="font-display text-5xl font-black text-warm leading-none tracking-tighter">
          <CountUp value={value} startCounting={animateCount} delay={idx * 150} />
        </span>
        <span className="font-display text-5xl font-black text-lime leading-none">{suffix}</span>
        {unit && (
          <span className="font-display text-2xl font-semibold text-lime/90 leading-none ml-1">{unit}</span>
        )}
      </div>
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-steel mt-1.5">{label}</div>
      <div className="text-sm text-steel/80 leading-relaxed mt-1">{desc}</div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-36" ref={ref}>
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 -right-10 w-[300px] h-[300px] rounded-full bg-lime/10 blur-[80px] pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Text — editorial luxury with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-10"
        >
          <div>
            <h2 className="font-display font-bold tracking-[-0.05em] text-warm leading-[0.85]">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">How I got</span>
              <span className="block text-lime text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black">here.</span>
            </h2>
          </div>

          <div className="relative pl-6 border-l-2 border-lime/40">
            <div className="absolute -left-2 top-0 w-2 h-full bg-gradient-to-b from-lime/80 via-lime/40 to-transparent rounded-full" />
            <div className="space-y-6 text-lg md:text-xl leading-[1.7] text-steel">
              <p className="first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-warm first-letter:float-left first-letter:leading-[0.8] first-letter:mr-3 first-letter:mt-[-4px]">
                I&apos;m Aditya — a fresher with a real portfolio, not a tutorial-following checklist. I finished an MCA in 2026 after building three live products: an e-commerce store with Stripe payments, a real-time chat app with JWT and Socket.io, and an AI resume analyzer that compares resumes to job descriptions.
              </p>
              <p>
                During my summer internship at Celebal Technologies, I worked with Sanity CMS, Next.js, and Vercel deployments. I care about fast interfaces, clean APIs, and product details that users feel. I&apos;m open to relocation and looking for roles where I can ship, learn, and grow fast.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#contact" className="glass-btn px-7 py-3.5 rounded-2xl text-warm font-display font-semibold text-base flex items-center gap-2 hover:text-lime transition-colors" data-hover>Work with me <span aria-hidden="true">→</span></a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="glass-btn px-7 py-3.5 rounded-2xl text-warm font-medium text-base flex items-center gap-2 hover:text-lime transition-colors" data-hover>Resume</a>
          </div>
        </motion.div>

        {/* Premium stats — editorial strip with dynamic counter animations */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="glass p-8 md:p-10 space-y-8 relative overflow-hidden">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime/60 to-transparent" />
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse shadow-glow" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-steel">Metrics</span>
            </div>

            {/* Large editorial number + description row */}
            <div className="space-y-6">
              {stats.map((s, i) => (
                <div key={s.label} className={i < stats.length - 1 ? "border-b border-white/10 pb-6" : ""}>
                  <StatRow
                    value={s.value}
                    suffix={s.suffix}
                    unit={s.unit || ""}
                    label={s.label}
                    desc={s.desc}
                    animateCount={inView}
                    idx={i}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
