"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      // Near top of page (Hero section)
      if (scrollY < 150) {
        setActive("");
        return;
      }

      // Near bottom of page (Contact section)
      if (
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActive("#contact");
        return;
      }

      const ids = links.map((l) => l.href.replace("#", ""));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setActive("#" + ids[i]);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on outside click or Escape, with focus trapping
  useEffect(() => {
    if (!mobileOpen) return;
    const handle = (e: MouseEvent | KeyboardEvent) => {
      if (e.type === "keydown") {
        const keyEvent = e as KeyboardEvent;
        if (keyEvent.key === "Escape") {
          setMobileOpen(false);
          toggleBtnRef.current?.focus();
          return;
        }
        if (keyEvent.key === "Tab" && drawerRef.current) {
          const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length > 0) {
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (keyEvent.shiftKey && document.activeElement === first) {
              keyEvent.preventDefault();
              last.focus();
            } else if (!keyEvent.shiftKey && document.activeElement === last) {
              keyEvent.preventDefault();
              first.focus();
            }
          }
        }
      }
      if (
        e.type === "mousedown" &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    document.addEventListener("keydown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("keydown", handle);
    };
  }, [mobileOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between md:justify-start md:gap-8 rounded-full border transition-all duration-300 max-w-[94vw] md:max-w-none md:w-auto ${
          scrolled
            ? "bg-[#0a0e17]/85 backdrop-blur-xl border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(208,255,0,0.08)]"
            : "bg-white/[0.06] backdrop-blur-lg border-white/10 shadow-glass"
        }`}
        aria-label="Primary"
      >
        <a
          href="#"
          onClick={scrollToTop}
          className="font-display font-bold text-xl tracking-tight text-warm hover:text-lime transition-colors flex items-center gap-2.5 truncate max-w-[140px] sm:max-w-none cursor-pointer"
        >
          <span className="relative w-8 h-8 rounded-full glass flex items-center justify-center shadow-glow overflow-hidden shrink-0" aria-hidden="true">
            <span className="text-sm font-bold text-warm">A</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-lime shadow-glow ring-2 ring-ink" />
          </span>
          <span>Aditya</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-steel">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative py-1 transition-colors hover:text-warm ${
                active === l.href ? "text-warm font-semibold" : ""
              }`}
            >
              {active === l.href && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-lime rounded-full shadow-[0_0_8px_rgba(208,255,0,0.6)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="glass-btn px-4 py-1.5 rounded-full text-xs font-semibold text-warm hover:text-lime whitespace-nowrap transition-colors"
            data-hover
          >
            Hire me
          </a>
        </div>
        <button
          ref={toggleBtnRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-warm min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl hover:bg-white/10 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={drawerRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[76px] left-3 right-3 md:hidden z-40 bg-[#0a0e17]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 flex flex-col gap-3 max-h-[85dvh] overflow-y-auto shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`text-lg font-display py-2.5 px-3 rounded-xl transition-colors ${
                  active === l.href
                    ? "text-lime bg-white/[0.06] font-semibold"
                    : "text-warm hover:bg-white/[0.05]"
                }`}
                aria-label={l.label}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="glass-btn px-4 py-3 rounded-xl text-warm font-semibold text-center mt-2 hover:text-lime transition-colors"
              data-hover
            >
              Hire me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
