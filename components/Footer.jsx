"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useLang } from "./LanguageContext";

const navLinks = [
  { en: "Home",     es: "Inicio",     path: "/" },
  { en: "About",    es: "Sobre mí",   path: "/about" },
  { en: "Work",     es: "Proyectos",  path: "/work" },
  { en: "Services", es: "Servicios",  path: "/services" },
  { en: "Resume",   es: "Currículum", path: "/resume" },
  { en: "Contact",  es: "Contacto",   path: "/contact" },
];

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer style={{ background: "#7f77dd" }}>
      <div className="px-8 xl:px-[10vw] 2xl:px-[12vw] py-16">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/">
              <span className="font-mono text-xl font-bold text-white tracking-tight">
                SC<span style={{ color: "rgba(255,255,255,0.5)" }}>.</span>
              </span>
            </Link>
            <p className="text-[14px] text-white/70 leading-relaxed max-w-[220px]">
              {lang === "en"
                ? "Frontend Developer with a deep focus on UX/UI — based in Argentina."
                : "Desarrolladora Frontend con foco en UX/UI — desde Argentina."}
            </p>
            {/* Available badge */}
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/60">
                {lang === "en" ? "Available for work" : "Disponible para trabajar"}
              </span>
            </div>
          </div>

          {/* Col 2 — Nav */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">
              {lang === "en" ? "Pages" : "Páginas"}
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-200"
              >
                {lang === "en" ? link.en : link.es}
              </Link>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">
              {lang === "en" ? "Contact" : "Contacto"}
            </p>
            <a
              href="mailto:sofiacostamagna45@gmail.com"
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <FiMail size={12} />
              sofiacostamagna45@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/sofia-costamagna/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <FiLinkedin size={12} />
              LinkedIn
            </a>
            <a
              href="https://github.com/sofiacostamagna"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <FiGithub size={12} />
              GitHub
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/35">
            © {new Date().getFullYear()} Sofía Costamagna
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/35">
            {lang === "en" ? "Designed & built by me" : "Diseñado y desarrollado por mí"}
          </span>
        </div>

      </div>
    </footer>
  );
}
