"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiLinkedin, FiGithub, FiCopy, FiCheck, FiArrowUpRight, FiSend } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { useLang } from "../../components/LanguageContext";
import { UPWORK_PROFILE_URL } from "../../lib/testimonials";
import { RevealTitle } from "../../components/motion";

const EJS_SERVICE  = "service_wlqgku1";
const EJS_TEMPLATE = "template_woz24nl";
const EJS_PUBLIC   = "kPoq2BHTwtPztpNV_";

const EMAIL = "sofiacostamagna45@gmail.com";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const PROFILES = [
  { label: "LinkedIn", href: "https://linkedin.com/in/sofia-costamagna", icon: FiLinkedin },
  { label: "GitHub",   href: "https://github.com/sofiacostamagna",       icon: FiGithub },
  { label: "Upwork",   href: UPWORK_PROFILE_URL,                          icon: SiUpwork },
];

// Opciones rápidas: se envían como "subject" en el mail
const TOPICS = [
  { en: "Website",        es: "Sitio web" },
  { en: "UX/UI Design",   es: "Diseño UX/UI" },
  { en: "WordPress",      es: "WordPress" },
  { en: "Job opportunity", es: "Oportunidad laboral" },
  { en: "Other",          es: "Otro" },
];

const STEPS = [
  { en: "You tell me about your idea or project.",       es: "Me contás tu idea o proyecto." },
  { en: "I read it and reply personally by email.",      es: "Lo leo y te respondo personalmente por email." },
  { en: "We talk about scope, timing and next steps.",   es: "Hablamos de alcance, tiempos y próximos pasos." },
];

const inputClass = `
  w-full rounded-2xl border border-divider bg-[#fafafa] px-4 py-3.5
  text-[15px] text-font-secondary placeholder:text-font-primary/45
  focus:outline-none focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all
`;
const labelClass = "text-[13px] font-medium text-font-secondary mb-2 block";

export default function Contact() {
  const { lang } = useLang();
  const en = lang === "en";
  const l = en ? "en" : "es";
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

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
    <main className="pt-24 pb-20 min-h-screen">
      <div className="px-8 xl:px-[10vw] 2xl:px-[12vw] pt-12 xl:pt-20">

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-14 xl:gap-20 items-start">

          {/* ── Left ── */}
          <div className="flex flex-col">
            <motion.div {...fadeUp(0)} className="flex items-center gap-2.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-primary">
                {en ? "Available for new projects" : "Disponible para nuevos proyectos"}
              </span>
            </motion.div>

            <RevealTitle
              as="h1"
              className="font-serif font-bold text-font-secondary mb-6"
              style={{ fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 1.02 }}
            >
              {en
                ? <>Let&apos;s work <em className="text-accent italic">together</em></>
                : <>Trabajemos <em className="text-accent italic">juntos</em></>}
            </RevealTitle>

            <motion.p {...fadeUp(0.16)} className="text-[17px] xl:text-[18px] text-font-primary leading-relaxed max-w-md">
              {en
                ? "Open to frontend and UX/UI roles, freelance projects and creative collaborations. Tell me what you have in mind."
                : "Abierta a roles frontend y UX/UI, proyectos freelance y colaboraciones creativas. Contame qué tenés en mente."}
            </motion.p>

            {/* Email destacado */}
            <motion.div {...fadeUp(0.22)} className="mt-10">
              <button
                onClick={copyEmail}
                className="group w-full sm:w-auto flex items-center gap-4 bg-white border border-divider hover:border-accent rounded-2xl pl-4 pr-5 py-4 transition-colors text-left"
              >
                <span className="w-11 h-11 rounded-xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  <FiMail size={18} />
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="text-[12px] text-font-primary">
                    {copied ? (en ? "Copied to clipboard!" : "¡Copiado!") : (en ? "Email me directly" : "Escribime directo")}
                  </span>
                  <span className="text-[14px] sm:text-[15px] font-medium text-font-secondary break-all">{EMAIL}</span>
                </span>
                <span className="ml-auto text-font-primary group-hover:text-accent transition-colors">
                  {copied ? <FiCheck size={17} className="text-emerald-500" /> : <FiCopy size={16} />}
                </span>
              </button>
            </motion.div>

            {/* Perfiles */}
            <motion.div {...fadeUp(0.28)} className="grid grid-cols-3 gap-3 mt-3 sm:max-w-[420px]">
              {PROFILES.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 bg-white border border-divider hover:border-accent rounded-2xl p-4 transition-colors"
                >
                  <span className="flex items-center justify-between text-font-secondary group-hover:text-accent transition-colors">
                    <Icon size={18} />
                    <FiArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-[13px] font-medium text-font-secondary">{label}</span>
                </a>
              ))}
            </motion.div>

            {/* Qué pasa después */}
            <motion.div {...fadeUp(0.34)} className="mt-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent mb-5">
                {en ? "What happens next" : "Qué pasa después"}
              </p>
              <ol className="flex flex-col gap-4">
                {STEPS.map((s, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-7 h-7 rounded-full border border-accent/40 text-accent font-serif italic text-[14px] flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-[15px] text-font-primary leading-relaxed pt-0.5">{s[l]}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>

          {/* ── Right: form ── */}
          <motion.div {...fadeUp(0.12)}>
            <div className="relative">
              {/* glow suave detrás de la tarjeta */}
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[48px] opacity-70 blur-2xl"
                style={{ background: "radial-gradient(60% 60% at 70% 20%, rgba(127,119,221,0.25), transparent 70%)" }}
              />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white rounded-[32px] border border-divider shadow-[0_30px_80px_-30px_rgba(17,17,17,0.25)] p-8 xl:p-12 flex flex-col items-start gap-5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center">
                      <FiCheck size={26} />
                    </div>
                    <h2 className="font-serif font-bold text-[30px] text-font-secondary">
                      {en ? "Message sent!" : "¡Mensaje enviado!"}
                    </h2>
                    <p className="text-[16px] text-font-primary leading-relaxed">
                      {en ? "Thanks for reaching out — I'll get back to you soon." : "Gracias por escribir — te respondo a la brevedad."}
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border-b border-accent/40 pb-0.5 hover:border-accent transition-colors mt-2"
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
                    className="bg-white rounded-[32px] border border-divider shadow-[0_30px_80px_-30px_rgba(17,17,17,0.25)] p-7 sm:p-10 flex flex-col gap-6"
                  >
                    <div>
                      <h2 className="font-serif font-bold text-font-secondary text-[26px] leading-tight">
                        {en ? "Send me a message" : "Mandame un mensaje"}
                      </h2>
                      <p className="text-[14px] text-font-primary mt-1.5">
                        {en ? "All fields except the topic are required." : "Todos los campos son obligatorios, menos el tema."}
                      </p>
                    </div>

                    {/* Tema */}
                    <div>
                      <span className={labelClass}>{en ? "What do you need?" : "¿Qué necesitás?"}</span>
                      <div className="flex flex-wrap gap-2">
                        {TOPICS.map((t) => {
                          const value = t[l];
                          const active = form.subject === value;
                          return (
                            <button
                              key={t.en}
                              type="button"
                              onClick={() => setForm({ ...form, subject: active ? "" : value })}
                              aria-pressed={active}
                              className={`text-[13px] px-4 py-2 rounded-full border transition-all duration-200 ${
                                active
                                  ? "bg-accent border-accent text-white"
                                  : "bg-white border-divider text-font-secondary hover:border-accent hover:text-accent"
                              }`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Nombre + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelClass}>{en ? "Name" : "Nombre"}</label>
                        <input id="name" type="text" name="name" required
                          value={form.name} onChange={handleChange}
                          placeholder={en ? "Your name" : "Tu nombre"}
                          className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>Email</label>
                        <input id="email" type="email" name="email" required
                          value={form.email} onChange={handleChange}
                          placeholder={en ? "you@email.com" : "vos@email.com"}
                          className={inputClass} />
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label htmlFor="message" className={labelClass}>{en ? "Message" : "Mensaje"}</label>
                      <textarea id="message" name="message" required rows={6}
                        value={form.message} onChange={handleChange}
                        placeholder={en ? "Tell me about your project, timeline and any links that help…" : "Contame sobre tu proyecto, tiempos y cualquier link que ayude…"}
                        className={`${inputClass} resize-none`} />
                    </div>

                    {status === "error" && (
                      <p className="text-[14px] text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 -mt-2">
                        {en
                          ? <>Something went wrong. Try again or email me at {EMAIL}.</>
                          : <>Algo salió mal. Probá de nuevo o escribime a {EMAIL}.</>}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group w-full py-4 rounded-full bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-mono text-[12px] uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2.5"
                    >
                      {status === "sending"
                        ? (en ? "Sending…" : "Enviando…")
                        : <>{en ? "Send message" : "Enviar mensaje"} <FiSend size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
