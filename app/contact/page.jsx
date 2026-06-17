"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sofiacostamagna45@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      className="min-h-[80vh] py-12 xl:py-20 flex flex-col justify-center"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left: info */}
          <div>
            <span className="label mb-4 block">Get in touch</span>
            <h2 className="mb-6">
              Let's work
              <br />
              <span className="italic text-accent">together</span>
            </h2>
            <p className="text-font-primary text-[16px] leading-relaxed mb-10 max-w-[400px]">
              Open to frontend and UX/UI roles, freelance projects, and
              creative collaborations. I'd love to hear about what you're
              building.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:sofiacostamagna45@gmail.com"
                className="font-mono text-[13px] text-font-secondary hover:text-accent transition-colors flex items-center gap-2 group"
              >
                <span className="w-5 h-px bg-divider group-hover:bg-accent transition-colors"></span>
                sofiacostamagna45@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/sofia-costamagna"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] text-font-secondary hover:text-accent transition-colors flex items-center gap-2 group"
              >
                <span className="w-5 h-px bg-divider group-hover:bg-accent transition-colors"></span>
                LinkedIn
              </a>
              <a
                href="https://github.com/sofiacostamagna"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] text-font-secondary hover:text-accent transition-colors flex items-center gap-2 group"
              >
                <span className="w-5 h-px bg-divider group-hover:bg-accent transition-colors"></span>
                GitHub
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-font-primary mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border-b border-divider bg-transparent py-3 font-primary text-[15px] text-font-secondary placeholder:text-font-primary/40 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-font-primary mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border-b border-divider bg-transparent py-3 font-primary text-[15px] text-font-secondary placeholder:text-font-primary/40 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-font-primary mb-2 block">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full border-b border-divider bg-transparent py-3 font-primary text-[15px] text-font-secondary placeholder:text-font-primary/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-font-primary mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full border-b border-divider bg-transparent py-3 font-primary text-[15px] text-font-secondary placeholder:text-font-primary/40 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="font-mono text-[11px] uppercase tracking-[0.15em] border border-accent text-accent px-8 py-3.5 hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              {sent ? "Message sent ✓" : <>Send message <FiSend size={13} /></>}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
