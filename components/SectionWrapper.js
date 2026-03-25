"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
  id,
  title,
  subtitle,
  className = "",
  children,
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={`py-20 px-6 max-w-6xl mx-auto ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-10">
          {title && (
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 text-[var(--muted)] max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}
