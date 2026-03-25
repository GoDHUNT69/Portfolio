"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="bg-[var(--dark)] text-white pt-28">
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="space-y-3"
          >
            <h1 className="font-display text-4xl md:text-5xl font-extrabold">
              Prashant Choudhary
            </h1>
            <p className="text-sm text-[var(--muted)] max-w-md leading-6">
              Final-year CSE student at VIT Chennai with strong experience in
              AI, backend systems, and full-stack development. Interested in
              systems programming, compiler design, and scalable software.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] border border-[var(--accent-border)] shadow-[0_8px_30px_rgba(63,142,0,0.5)] text-sm font-semibold active:scale-[0.98]"
          >
            Let&apos;s get started
            <span className="h-2 w-2 border-r-2 border-b-2 border-white rotate-[-45deg]" />
          </motion.button>

          <div className="text-sm text-white">Worked with</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["ClickUp", "Dropbox", "Microsoft", "Elastic"].map((item) => (
              <div
                key={item}
                className="border border-[#1b1b1b] text-white/60 px-4 py-3 text-xs uppercase tracking-[0.2em] text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <div className="h-[320px] w-[320px] rounded-full bg-[#d9d9d9] relative">
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-display text-[var(--dark)]">
              Photo
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
