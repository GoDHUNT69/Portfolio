"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-6 rounded-b-lg bg-[var(--dark-2)] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          <div className="text-sm text-[var(--muted)]">Prashant Choudhary</div>
          <div className="flex flex-wrap items-center gap-8 text-sm text-[var(--muted)]">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#projects" className="hover:text-white transition">
              Case Studies
            </a>
            <a href="#testimonials" className="hover:text-white transition">
              Testimonials
            </a>
            <a href="#projects" className="hover:text-white transition">
              Recent Work
            </a>
            <a href="#contact" className="hover:text-white transition">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
