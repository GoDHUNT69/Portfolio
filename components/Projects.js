"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Mock Interview Platform",
    description:
      "Voice-first mock interviews with dynamic question generation and real-time feedback.",
    stack: ["Next.js", "Firebase", "Tailwind", "Vapi AI", "Gemini"],
  },
  {
    title: "Colon Disease Classification (CNN)",
    description:
      "VGG16 transfer learning pipeline for multi-class disease prediction with Flask API.",
    stack: ["Python", "TensorFlow", "OpenCV", "Flask"],
  },
  {
    title: "Disaster Management System",
    description:
      "Real-time hazard detection using YOLOv8 with low-latency video inference.",
    stack: ["Python", "YOLOv8", "OpenCV"],
  },
  {
    title: "SimpleLang Compiler",
    description:
      "Full compiler pipeline with lexical analysis, parsing, AST, and assembly generation.",
    stack: ["C++", "Flex", "Bison", "Assembly", "Verilog"],
  },
  {
    title: "Secure Memo Management System",
    description:
      "Role-based REST APIs with JWT auth, ownership rules, and Swagger docs.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-display text-4xl font-extrabold">
            Recent Work
          </h2>
          <p className="text-sm text-[var(--muted)]">
            Solving user and business problems through AI systems, backend
            engineering, and production-grade tooling.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="h-[300px] rounded-md bg-[#d9d9d9] relative">
                <div className="absolute inset-0 flex items-center justify-center text-sm text-[#757575]">
                  Project Image
                </div>
              </div>
              <h3 className="font-display text-2xl font-extrabold">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--muted)]">
                {project.description}
              </p>
              <button className="inline-flex items-center gap-3 px-6 py-2 bg-[var(--accent)] border border-[var(--accent-border)] text-white text-sm font-semibold shadow-[0_8px_30px_rgba(63,142,0,0.3)]">
                Know more
                <span className="h-2 w-2 border-r-2 border-b-2 border-white rotate-[-45deg]" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
