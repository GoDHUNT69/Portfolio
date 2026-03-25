"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ChatWidget() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! Want to talk about a project or collaboration?",
    },
  ]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Request failed. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-[320px] h-[420px] bg-white border border-[#d8d8d8] rounded-md p-4 flex flex-col shadow-[0_16px_40px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Studio Chat
                </p>
                <p className="text-sm">Let&apos;s build something great.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-xs text-[var(--muted)] hover:text-black transition"
              >
                Close
              </button>
            </div>

            <div className="mt-4 flex-1 overflow-y-auto space-y-3 pr-1">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm rounded-md px-3 py-2 max-w-[80%] ${
                    msg.role === "user"
                      ? "ml-auto bg-[#f8f8f8] border border-[#d8d8d8]"
                      : "bg-white border border-[#d8d8d8]"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label className="relative block">
                <input
                  className="w-full rounded-md border border-[#d8d8d8] bg-[#f8f8f8] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Share your idea..."
                />
              </label>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-[var(--muted)]">
                  Typically responds in under 24 hours
                </span>
                <button
                  disabled={loading}
                  onClick={sendMessage}
                  className="px-4 py-2 bg-[var(--accent)] border border-[var(--accent-border)] text-white text-xs font-semibold disabled:opacity-50 active:scale-[0.98]"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="mt-4 bg-[var(--accent)] border border-[var(--accent-border)] px-5 py-3 text-white text-sm shadow-[0_8px_30px_rgba(63,142,0,0.3)]"
      >
        {open ? "Hide Chat" : "Chat"}
      </button>
    </div>
  );
}
