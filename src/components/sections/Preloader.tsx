"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-ink flex items-center justify-center noise"
        >
          <div className="text-center">
            <div role="status" aria-label="Aditya Pathak" className="font-display text-5xl md:text-7xl font-bold tracking-tight text-warm mb-4 overflow-hidden">
              <span className="inline-block animate-[fadeIn_0.8s_ease-out_forwards]">Aditya</span>{" "}
              <span className="inline-block text-lime animate-[fadeIn_1s_ease-out_0.2s_forwards] opacity-0">Pathak</span>
            </div>
            <p className="font-body text-sm text-steel tracking-[0.3em] uppercase animate-[fadeIn_1.2s_ease-out_0.6s_forwards] opacity-0">Building interfaces that matter</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
