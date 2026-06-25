"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLang } from "../../components/LanguageContext";

const EJS_SERVICE  = "service_wlqgku1";
const EJS_TEMPLATE = "template_woz24nl";
const EJS_PUBLIC   = "kPoq2BHTwtPztpNV_";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const LINKS = [
  { label: "sofiacostamagna45@gmail.com", href: "mailto:sofiacostamagna45@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sofia-costamagna", target: "_blank" },
  { label: "GitHub",   href: "https://github.com/sofiacostamagna",       target: "_blank" },
];

const inputClass = `
  w-full rounded-xl border border-divider bg-transparent px-4 py-3.5
  text-[15px] text-font-secondary placeholder:text-font-primary/40
  focus:outline-none focus:border-accent transition-colors
`;
const labelClass = "font-mono text-[10px] uppercase tracking-[0.15em] text-font-primary opacity-60 mb-2 block";

export default function Contact() {
  const { lang } = useLang();
  const en = lang === "en";
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(EJS_SERVICE, EJS_TEMPLATE, {
        name:    form.name,
        email:   form.email,
        subject: form.subject,
        message: form.message,
      }, { publicKey: EJS_PUBLIC });
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error status:", err?.status, "text:", err?.text, "msg:", err?.message);
      setStatus("error");
    }
  };

  return (
    <main className="pt-24 pb-28 min-h-screen">
      <div className="px-8 xl:px-[10vw] 2xl:px-[12vw] pt-16 xl:pt-24">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ── Left ── */}
          <div>
            <motion.span {...fadeUp(0)} className="label block mb-5">
              {en ? "Get in touch" : "Contacto"}
            </motion.span>
            <motion.h1
              {...fadeUp(0.08)}
              className="font-serif font-bold text-font-secondary mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05 }}
            >
              {en
                ? <>Let's work<br /><em className="text-accent italic">together</em></>
                : <>Trabajemos<br /><em className="text-accent italic">juntos</em></>
              }
            </motion.h1>
            <motion.p
              {...fadeUp(0.16)}
              className="text-[15px] xl:text-[16px] text-font-primary leading-relaxed mb-10 opacity-70 max-w-sm"
            >
              {en
                ? "Open to frontend and UX/UI roles, freelance projects, and creative collaborations."
                : "Abierta a roles frontend y UX/UI, proyectos freelance y colaboraciones creativas."
              }
            </motion.p>

            <motion.div {...fadeUp(0.22)} className="flex flex-col gap-4">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.target}
                  rel={l.target ? "noopener noreferrer" : undefined}
                  className="font-mono text-[12px] text-font-secondary hover:text-accent transition-colors flex items-center gap-3 group w-fit"
                >
                  <span className="w-5 h-px bg-divider group-hover:bg-accent transition-colors" />
                  {l.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: card form ── */}
          <motion.div {...fadeUp(0.12)}>
            <AnimatePresence mode="wait">

              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl p-8 xl:p-10 flex flex-col gap-5"
                  style={{ background: "#f8f7ff", border: "1px solid var(--color-divider)" }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                    style={{ background: "#7f77dd", color: "#fff" }}>✓</div>
                  <h3 className="font-serif text-[26px] font-medium text-font-secondary">
                    {en ? "Message sent!" : "¡Mensaje enviado!"}
                  </h3>
                  <p className="text-[15px] text-font-primary opacity-60 leading-relaxed">
                    {en ? "Thanks for reaching out — I'll get back to you soon." : "Gracias por escribir — te respondo a la brevedad."}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent w-fit border-b border-accent/40 pb-0.5 hover:border-accent transition-colors mt-2"
                  >
                    {en ? "Send another →" : "Enviar otro →"}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl p-8 xl:p-10 flex flex-col gap-6"
                  style={{ background: "#f8f7ff", border: "1px solid var(--color-divider)" }}
                >
                  {/* Nombre + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>{en ? "Name" : "Nombre"}</label>
                      <input type="text" name="name" required
                        value={form.name} onChange={handleChange}
                        placeholder={en ? "Your name" : "Tu nombre"}
                        className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <input type="email" name="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass} />
                    </div>
                  </div>

                  {/* Asunto */}
                  <div>
                    <label className={labelClass}>{en ? "Subject" : "Asunto"}</label>
                    <input type="text" name="subject"
                      value={form.subject} onChange={handleChange}
                      placeholder={en ? "What's this about?" : "¿De qué se trata?"}
                      className={inputClass} />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className={labelClass}>{en ? "Message" : "Mensaje"}</label>
                    <textarea name="message" required rows={5}
                      value={form.message} onChange={handleChange}
                      placeholder={en ? "Tell me about your project..." : "Contame sobre tu proyecto..."}
                      className={`${inputClass} resize-none`} />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <p className="font-mono text-[11px] text-red-500 uppercase tracking-wide -mt-2">
                      {en ? "Something went wrong. Try again." : "Algo salió mal. Intentá de nuevo."}
                    </p>
                  )}

                  {/* Submit button — full width, bien visible */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 rounded-xl font-mono text-[12px] uppercase tracking-[0.16em] transition-all duration-300 mt-2"
                    style={{
                      background: status === "sending" ? "transparent" : "#7f77dd",
                      color: status === "sending" ? "#7f77dd" : "#fff",
                      border: "1px solid #7f77dd",
                      opacity: status === "sending" ? 0.6 : 1,
                    }}
                  >
                    {status === "sending"
                      ? (en ? "Sending..." : "Enviando...")
                      : (en ? "Send message →" : "Enviar mensaje →")
                    }
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
