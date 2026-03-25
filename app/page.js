"use client";

import { useMemo, useState, useRef, useEffect } from "react";

const filterOptions = ["all", "ai/ml", "backend", "full stack", "systems"];

const projects = [
  {
    title: "WCE Curated Colon Disease Classification",
    category: "ai/ml",
    details: "VGG16 CNN with Flask deployment for real-time predictions.",
  },
  {
    title: "AI-Powered Mock Interview Platform",
    category: "full stack",
    details: "Voice-first AI interviews with Firebase auth and Gemini feedback.",
  },
  {
    title: "Disaster Management System",
    category: "ai/ml",
    details: "YOLOv8-based hazard detection with low-latency video inference.",
  },
  {
    title: "SimpleLang Compiler",
    category: "systems",
    details: "Full compiler pipeline with AST, semantic checks, and codegen.",
  },
  {
    title: "Secure Memo Management System",
    category: "backend",
    details: "JWT-secured REST APIs with role-based access control.",
  },
];

const highlights = [
  {
    name: "Smart India Hackathon 2023",
    avatarLabel: "SIH",
    text: "Finalist in national-level hackathon for real-world problem solving.",
  },
  {
    name: "OpenText Hacknosis 2024",
    avatarLabel: "OT",
    text: "Finalist in the 2024 OpenText Hacknosis Challenge.",
  },
  {
    name: "Zimplistic Inventions",
    avatarLabel: "ZI",
    text: "Built agentic RAG workflows and calendar scheduling automation.",
  },
  {
    name: "SmartBridge",
    avatarLabel: "SB",
    text: "Completed applied ML training with TensorFlow and Keras.",
  },
];

const experiences = [
  {
    badge: "ZI",
    role: "Software Engineering Intern",
    company: "Zimplistic Inventions",
    period: "Jan 2026 – Present",
    desc: "Built agentic RAG workflows with Genkit AI, reducing LLM token cost by 25%. Integrated Google Calendar scheduling automation for customer support pipelines. Worked with multi-agent systems and optimized retrieval strategies for enterprise knowledge bases.",
    tags: ["Genkit AI", "RAG", "LLM Optimization", "Google Calendar API", "Node.js"],
  },
  {
    badge: "SB",
    role: "Data Science Trainee",
    company: "SmartBridge · Google AI Collaboration",
    period: "Jun 2024 – Jul 2024",
    desc: "Built end-to-end ML pipelines with TensorFlow and Keras. Performed exploratory data analysis, feature engineering, and developed VGG16-based CNN models for image classification tasks.",
    tags: ["TensorFlow", "Keras", "Python", "EDA", "CNN", "VGG16"],
  },
];

const education = [
  {
    title: "Vellore Institute of Technology, Chennai",
    time: "Sept 2022 – Jul 2026",
    text: "B.Tech in Computer Science and Engineering · CGPA: 8.29 / 10",
  },
  {
    title: "JCB Public School, Shimla",
    time: "2020",
    text: "Class XII · CBSE · 80%",
  },
  {
    title: "DAV Public School, Palampur",
    time: "2022",
    text: "Class X · CBSE · 92%",
  },
];

const skills = [
  { name: "Python", value: 90 },
  { name: "C++", value: 85 },
  { name: "TensorFlow", value: 85 },
  { name: "JavaScript", value: 80 },
  { name: "Node.js", value: 80 },
  { name: "RAG / LLM Optimization", value: 78 },
];

const pages = [
  { key: "about", label: "About" },
  { key: "resume", label: "Resume" },
  { key: "portfolio", label: "Portfolio" },
  { key: "experience", label: "Experience" },
  { key: "contact", label: "Contact" },
];

export default function Home() {
  const [activePage, setActivePage] = useState("about");
  const [contactsOpen, setContactsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Chat widget state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I am an AI-powered chatbot — ask me anything about Prashant!",
    },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (chatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatOpen]);

  async function sendChat() {
    const text = chatInput.trim();
    if (!text || chatLoading) return;
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setChatInput("");
    setChatLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Try again!" },
      ]);
    } finally {
      setChatLoading(false);
    }
  }

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const filterLabel =
    activeFilter === "all"
      ? "All categories"
      : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1);

  return (
    <main className="vcard">
      {/* ── Sidebar ── */}
      <aside className="sidebar">
        <div className="sidebar-info">
          <div className="avatar-ring">
            <div className="avatar">PC</div>
          </div>

          <div>
            <h1 className="sidebar-name">Prashant Choudhary</h1>
            <p className="sidebar-role">AI · Backend · System Design</p>
          </div>

          <button
            className="show-contacts-btn"
            onClick={() => setContactsOpen((p) => !p)}
            aria-expanded={contactsOpen}
          >
            <span>{contactsOpen ? "Hide contacts" : "Show contacts"}</span>
            <span className="chevron" />
          </button>
        </div>

        <div className={`contacts-panel ${contactsOpen ? "open" : ""}`}>
          <div className="divider" />

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="contact-icon">
                <ion-icon name="location-outline" />
              </div>
              <div>
                <p className="contact-label">Location</p>
                <address className="contact-value">Bangalore, India</address>
              </div>
            </li>

            <li className="contact-item">
              <div className="contact-icon">
                <ion-icon name="logo-github" />
              </div>
              <div>
                <p className="contact-label">GitHub</p>
                <a
                  href="https://github.com/GoDHUNT69"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-value"
                >
                  github.com/prashantpc
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="contact-icon">
                <ion-icon name="logo-linkedin" />
              </div>
              <div>
                <p className="contact-label">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/prashant-choudhary-b05a15265/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-value"
                >
                  linkedin.com/in/prashant-choudhary
                </a>
              </div>
            </li>
          </ul>

          <div className="divider" />

          <ul className="social-list">
            <li>
              <a
                href="https://www.linkedin.com/in/prashant-choudhary-b05a15265/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GoDHUNT69"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <ion-icon name="logo-github" />
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="main-content">
        <nav className="navbar">
          {pages.map((p) => (
            <button
              key={p.key}
              className={`nav-btn ${activePage === p.key ? "active" : ""}`}
              onClick={() => setActivePage(p.key)}
            >
              {p.label}
            </button>
          ))}
        </nav>

        {/* ── About ── */}
        <article
          className={`about ${activePage === "about" ? "active" : ""}`}
          data-page="about"
        >
          <header>
            <h2 className="article-title">Professional Summary</h2>
          </header>

          <section className="about-text">
            <p>
              Final-year Computer Science student at VIT Chennai specialising in
              AI systems, LLM engineering, backend architecture, and compiler
              design. Experience building multi-agent workflows, RAG-powered
              systems, scalable REST APIs, and full compiler pipelines.
            </p>
            <p>
              Built real-world machine learning and computer vision systems using
              TensorFlow, OpenCV, Flask, and Node.js. Strong foundation in Data
              Structures, Operating Systems, DBMS, and distributed system design.
              Seeking Software Engineering / AI roles from January 2026.
            </p>
          </section>

          <section className="focus-areas">
            <p className="section-label">Focus areas</p>
            <div className="focus-grid">
              {[
                { icon: "AI", title: "AI Systems & RAG", desc: "Multi-agent workflows, retrieval pipelines, and LLM optimisation." },
                { icon: "BE", title: "Backend Engineering", desc: "Secure REST APIs, auth systems, and scalable service design." },
                { icon: "FS", title: "Full-Stack Delivery", desc: "Next.js, Firebase, and production-grade UI/UX." },
                { icon: "CD", title: "Compiler Design", desc: "Lexing, parsing, ASTs, and code generation pipelines." },
              ].map((f) => (
                <div key={f.title} className="focus-card">
                  <div className="focus-icon">{f.icon}</div>
                  <div className="focus-title">{f.title}</div>
                  <div className="focus-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="highlights">
            <p className="section-label">Highlights</p>
            <div className="highlights-scroll">
              {highlights.map((h) => (
                <div key={h.name} className="highlight-card">
                  <div className="highlight-badge">{h.avatarLabel}</div>
                  <div className="highlight-name">{h.name}</div>
                  <div className="highlight-desc">{h.text}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="stack-section">
            <p className="section-label">Core stack</p>
            <div className="stack-chips">
              {["TensorFlow", "OpenCV", "Node.js", "Firebase", "Flask", "MongoDB", "Python", "C++"].map((s) => (
                <span key={s} className="stack-chip">{s}</span>
              ))}
            </div>
          </section>
        </article>

        {/* ── Resume ── */}
        <article
          className={`resume ${activePage === "resume" ? "active" : ""}`}
          data-page="resume"
        >
          <h2 className="article-title">Resume</h2>

          <section className="timeline-section">
            <div className="section-header">
              <div className="section-header-icon">
                <ion-icon name="school-outline" />
              </div>
              <h3 className="section-header-title">Education</h3>
            </div>

            <div className="timeline-items">
              {education.map((e) => (
                <div key={e.title} className="timeline-item">
                  <h4 className="timeline-item-title">{e.title}</h4>
                  <span className="timeline-item-time">{e.time}</span>
                  <p className="timeline-item-text">{e.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="timeline-section">
            <div className="section-header">
              <div className="section-header-icon">
                <ion-icon name="briefcase-outline" />
              </div>
              <h3 className="section-header-title">Experience</h3>
            </div>

            <div className="timeline-items">
              {experiences.map((exp) => (
                <div key={exp.role} className="timeline-item">
                  <h4 className="timeline-item-title">{exp.role} · {exp.company}</h4>
                  <span className="timeline-item-time">{exp.period}</span>
                  <p className="timeline-item-text">{exp.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="timeline-section">
            <div className="section-header">
              <div className="section-header-icon">
                <ion-icon name="stats-chart-outline" />
              </div>
              <h3 className="section-header-title">Technical Skills</h3>
            </div>

            <div className="skills-grid">
              {skills.map((s) => (
                <div key={s.name} className="skill-row">
                  <div className="skill-header">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.value}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* ── Portfolio ── */}
        <article
          className={`portfolio ${activePage === "portfolio" ? "active" : ""}`}
          data-page="portfolio"
        >
          <h2 className="article-title">Projects</h2>

          {/* Desktop filter pills */}
          <div className="filter-bar">
            {filterOptions.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile select */}
          <div className="filter-select-wrap">
            <button
              className="filter-select-btn"
              onClick={() => setDropdownOpen((p) => !p)}
              aria-expanded={dropdownOpen}
            >
              <span>{filterLabel}</span>
              <span className="chevron" />
            </button>
            <div className={`filter-dropdown ${dropdownOpen ? "open" : ""}`}>
              {filterOptions.map((f) => (
                <button
                  key={f}
                  className="filter-dropdown-item"
                  onClick={() => {
                    setActiveFilter(f);
                    setDropdownOpen(false);
                  }}
                >
                  {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {filteredProjects.map((p) => (
              <div key={p.title} className="project-card">
                <div className="project-thumb">
                  <div className="project-eye">
                    <ion-icon name="eye-outline" />
                  </div>
                  <span className="project-thumb-label">{p.title}</span>
                </div>
                <div className="project-info">
                  <div className="project-cat">{p.category}</div>
                  <h3 className="project-name">{p.title}</h3>
                  <p className="project-desc">{p.details}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* ── Experience ── */}
        <article
          className={`experience ${activePage === "experience" ? "active" : ""}`}
          data-page="experience"
        >
          <h2 className="article-title">Experience</h2>

          {experiences.map((exp) => (
            <div key={exp.role} className="exp-card">
              <div className="exp-header">
                <div className="exp-badge">{exp.badge}</div>
                <div className="exp-meta">
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-tags">
                {exp.tags.map((t) => (
                  <span key={t} className="exp-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </article>

        {/* ── Contact ── */}
        <article
          className={`contact ${activePage === "contact" ? "active" : ""}`}
          data-page="contact"
        >
          <h2 className="article-title">Get in Touch</h2>

          <div className="contact-grid">
            <a
              href="https://www.linkedin.com/in/prashant-choudhary-b05a15265/"
              target="_blank"
              rel="noreferrer"
              className="contact-tile"
            >
              <div className="contact-tile-icon">
                <ion-icon name="logo-linkedin" />
              </div>
              <div>
                <div className="contact-tile-label">LinkedIn</div>
                <div className="contact-tile-value">linkedin.com/in/prashantpc</div>
              </div>
            </a>

            <a
              href="https://github.com/GoDHUNT69"
              target="_blank"
              rel="noreferrer"
              className="contact-tile"
            >
              <div className="contact-tile-icon">
                <ion-icon name="logo-github" />
              </div>
              <div>
                <div className="contact-tile-label">GitHub</div>
                <div className="contact-tile-value">github.com/prashantpc</div>
              </div>
            </a>

            <div className="contact-tile" style={{ pointerEvents: "none" }}>
              <div className="contact-tile-icon">
                <ion-icon name="location-outline" />
              </div>
              <div>
                <div className="contact-tile-label">Location</div>
                <div className="contact-tile-value">Bangalore, India</div>
              </div>
            </div>
          </div>

          <section className="contact-form">
            <h3 className="form-title">Send a message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Full name"
                  required
                />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email address"
                  required
                />
              </div>
              <textarea
                className="form-input"
                placeholder="Your message"
                required
              />
              <button className="form-btn" type="submit">
                <ion-icon name="paper-plane-outline" />
                Send Message
              </button>
            </form>
          </section>
        </article>
      </div>

      {/* ── Chat Widget ── */}
      <div className="chat-widget">
        {chatOpen && (
          <div className="chat-bubble">
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar">AI</div>
                <div>
                  <div className="chat-title">Ask about Prashant</div>
                  <div className="chat-status">
                    <span className="chat-status-dot" />
                    Online
                  </div>
                </div>
              </div>
              <button className="chat-close-btn" onClick={() => setChatOpen(false)} aria-label="Close chat">
                <ion-icon name="close-outline" />
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={"chat-msg " + (msg.role === "user" ? "chat-msg--user" : "chat-msg--bot")}>
                  {msg.role === "assistant" && (
                    <div className="chat-msg-avatar">AI</div>
                  )}
                  <div className="chat-msg-bubble">{msg.content}</div>
                </div>
              ))}
              {chatLoading && (
                <div className="chat-msg chat-msg--bot">
                  <div className="chat-msg-avatar">AI</div>
                  <div className="chat-msg-bubble chat-typing">
                    <span /><span /><span />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-row">
              <input
                className="chat-input"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendChat()}
                placeholder="Ask me anything..."
                disabled={chatLoading}
              />
              <button
                className="chat-send-btn"
                onClick={sendChat}
                disabled={chatLoading || !chatInput.trim()}
                aria-label="Send"
              >
                <ion-icon name="send-outline" />
              </button>
            </div>
          </div>
        )}

        <button
          className={"chat-fab " + (chatOpen ? "chat-fab--open" : "")}
          onClick={() => setChatOpen((p) => !p)}
          aria-label="Toggle chat"
        >
          {chatOpen
            ? <ion-icon name="close-outline" />
            : <ion-icon name="chatbubble-ellipses-outline" />}
        </button>
      </div>
    </main>
  );
}