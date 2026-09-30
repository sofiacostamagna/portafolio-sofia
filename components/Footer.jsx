"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiCopy, FiCheck, FiArrowUp, FiArrowUpRight } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { useLang } from "./LanguageContext";
import Logo from "./Logo";
import { UPWORK_PROFILE_URL } from "../lib/testimonials";
import { RevealTitle } from "./motion";

const EMAIL = "sofiacostamagna45@gmail.com";

const navLinks = [
  { en: "Home",     es: "Inicio",     path: "/" },
  { en: "About",    es: "Sobre mí",   path: "/about" },
  { en: "Work",     es: "Proyectos",  path: "/work" },
  { en: "Services", es: "Servicios",  path: "/services" },
  { en: "Resume",   es: "Currículum", path: "/resume" },
  { en: "Contact",  es: "Contacto",   path: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sofia-costamagna/", icon: FiLinkedin },
  { label: "GitHub",   href: "https://github.com/sofiacostamagna",            icon: FiGithub },
  { label: "Upwork",   href: UPWORK_PROFILE_URL,                              icon: SiUpwork },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Footer() {
  const { lang } = useLang();
  const en = lang === "en";
  const onContact = usePathname() === "/contact";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <footer className="px-3 sm:px-5 pb-3 sm:pb-5 pt-10">
      <div
        className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] text-white"
        style={{ background: "#141221" }}
      >
        {/* Glow violeta */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-32 w-[560px] h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(127,119,221,0.45) 0%, rgba(127,119,221,0) 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-48 -left-40 w-[480px] h-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, rgba(167,139,250,0) 70%)" }}
        />

        <div className={`relative px-7 sm:px-12 xl:px-[8vw] ${onContact ? "pt-12" : "pt-16 xl:pt-24"} pb-8`}>

          {/* ── CTA (en /contact sobra: la página entera ya es el CTA) ── */}
          {!onContact && (
            <>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                {en ? "Available for new projects" : "Disponible para nuevos proyectos"}
              </span>
            </motion.div>

            <RevealTitle as="h2"
              className="font-serif font-bold max-w-4xl"
              style={{ fontSize: "clamp(40px, 6.4vw, 92px)", lineHeight: 1.02 }}
            >
              {en ? (
                <>Have an idea?<br />Let&apos;s make it <em className="italic" style={{ color: "#a9a3f0" }}>real.</em></>
              ) : (
                <>¿Tenés una idea?<br />Hagámosla <em className="italic" style={{ color: "#a9a3f0" }}>realidad.</em></>
              )}
            </RevealTitle>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-white hover:text-font-secondary text-white font-mono text-[11px] uppercase tracking-[0.14em] px-7 py-4 rounded-full transition-colors duration-300"
              >
                {en ? "Start a project" : "Empezar un proyecto"}
                <FiArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2.5 border border-white/20 hover:border-white/60 text-white/85 hover:text-white text-[14px] px-6 py-3.5 rounded-full transition-colors duration-300"
                aria-label={en ? "Copy email" : "Copiar email"}
              >
                <FiMail size={14} />
                <span className="hidden sm:inline">{EMAIL}</span>
                <span className="sm:hidden">{en ? "Copy email" : "Copiar email"}</span>
                <span className="w-px h-4 bg-white/20" />
                {copied ? <FiCheck size={14} className="text-emerald-400" /> : <FiCopy size={14} className="opacity-60" />}
              </button>
              <span
                aria-live="polite"
                className={`font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400 transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}
              >
                {en ? "Copied!" : "¡Copiado!"}
              </span>
            </motion.div>
          </motion.div>

            </>
          )}

          {/* ── Links ── */}
          <div className={`${onContact ? "" : "mt-16 xl:mt-24 pt-10 border-t border-white/10"} grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr] gap-10`}>
            {/* Marca */}
            <div className="flex flex-col gap-4">
              <Logo size={34} className="text-white" />
              <p className="text-[14px] text-white/60 leading-relaxed max-w-[300px]">
                {en
                  ? "Frontend Developer & UX/UI Designer. I design and build websites that look good, feel good and work well."
                  : "Desarrolladora Frontend & Diseñadora UX/UI. Diseño y construyo sitios que se ven bien, se sienten bien y funcionan bien."}
              </p>
            </div>

            {/* Páginas */}
            <nav className="flex flex-col gap-4" aria-label={en ? "Footer" : "Pie de página"}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                {en ? "Pages" : "Páginas"}
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 w-fit">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-[14px] text-white/75 hover:text-white transition-colors duration-200"
                    >
                      {en ? link.en : link.es}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Redes */}
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                {en ? "Find me on" : "Encontrame en"}
              </p>
              <div className="flex gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/65 text-center sm:text-left">
              © {new Date().getFullYear()} Sofía Costamagna · {en ? "Designed & built by me" : "Diseñado y desarrollado por mí"}
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60 hover:text-white transition-colors"
            >
              {en ? "Back to top" : "Volver arriba"}
              <span className="w-8 h-8 rounded-full border border-white/15 group-hover:border-white/50 flex items-center justify-center transition-colors">
                <FiArrowUp size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
