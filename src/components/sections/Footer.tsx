"use client";
import { ArrowUp, Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      {/* Ambient glow at base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-lime/5 blur-[120px] pointer-events-none" />

      {/* Top decor line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-lime/40 to-transparent" />

      <div className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-ink to-navy relative z-10">
        <div className="max-w-7xl mx-auto space-y-14">

          {/* === SIGNATURE BLOCK === */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="space-y-4">
              <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] text-warm leading-[0.9]">
                Built with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-cyan-300">
                  intention.
                </span>
              </h3>
              <p className="text-steel text-lg md:text-xl max-w-lg leading-relaxed">
                Shipping products that are fast, accessible, and worth caring about — from first commit to production.
              </p>
            </div>

            {/* Availability badge — replaces duplicate CTA */}
            <div className="flex items-center gap-3 glass px-5 py-3 rounded-2xl self-start md:self-end shrink-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime" />
              </span>
              <span className="text-sm font-medium text-warm">Available for opportunities</span>
            </div>
          </div>

          {/* === LINKS GRID === */}
          <div className="grid md:grid-cols-12 gap-10 border-t border-white/10 pt-12">

            {/* Identity */}
            <div className="md:col-span-4 space-y-5">
              <p className="font-display text-2xl font-bold text-warm">Aditya Pathak</p>
              <p className="text-sm text-steel leading-relaxed">
                Full-stack engineer based in India. Open to relocation &amp; remote.
                Building with Next.js, React, Node.js, and TypeScript.
              </p>
              <div className="flex gap-3 pt-1">
                <a
                  href="mailto:real2adityapathak@gmail.com"
                  className="glass-btn p-3 rounded-full text-warm hover:text-lime transition-colors"
                  aria-label="Email Aditya"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/realadityapathak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn p-3 rounded-full text-warm hover:text-lime transition-colors"
                  aria-label="Aditya on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/Realadityapathak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn p-3 rounded-full text-warm hover:text-lime transition-colors"
                  aria-label="Aditya on GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            {/* Navigation — fixed mobile touch targets */}
            <div className="md:col-span-3 md:col-start-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-steel">Navigation</h4>
              <nav className="flex flex-col gap-0" aria-label="Footer navigation">
                {[
                  { label: "About", href: "#about" },
                  { label: "Stack", href: "#stack" },
                  { label: "Experience", href: "#experience" },
                  { label: "Projects", href: "#projects" },
                  { label: "Education", href: "#education" },
                  { label: "Contact", href: "#contact" },
                ].map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm text-warm hover:text-lime transition-colors py-2 pr-4 w-fit"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Resources — fixed mobile touch targets */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-steel">Resources</h4>
              <nav className="flex flex-col gap-0" aria-label="Footer resources">
                {[
                  { label: "Resume PDF", href: "/resume.pdf", external: true },
                  { label: "LinkedIn", href: "https://linkedin.com/in/realadityapathak", external: true },
                  { label: "GitHub", href: "https://github.com/Realadityapathak", external: true },
                ].map(({ label, href, external }) => (
                  <a
                    key={href}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-sm text-warm hover:text-lime hover:shadow-[0_0_12px_rgba(208,255,0,0.2)] transition-all duration-300 py-2 pr-4 w-fit"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* === BOTTOM BAR === */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-white/10 text-xs text-slate-300">
            <p>
              Designed &amp; built by{" "}
              <span className="text-warm font-medium">Aditya Pathak</span>{" "}
              · 2026
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="glass-btn px-4 py-2 rounded-full text-warm hover:text-lime transition-colors flex items-center gap-2"
              aria-label="Back to top"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
