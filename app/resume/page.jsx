"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaWordpress, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMysql } from "react-icons/si";
import { useLang } from "../../components/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const EXPERIENCE = [
  {
    company: "Grupo Penna",
    position: { en: "Frontend Web Developer", es: "Desarrolladora Web Frontend" },
    duration: { en: "2025 — Jun 2025 · Full-time · Remote", es: "2025 — Jun 2025 · Full-time · Remoto" },
    description: {
      en: "Developed user interfaces and new features using React, Next.js and TypeScript. Collaborated on UX/UI design in Figma and supported backend development with Node.js and database management. Focused on scalability, performance optimization, and continuous product improvement.",
      es: "Desarrollo de interfaces y nuevas funcionalidades con React, Next.js y TypeScript. Colaboración en diseño UX/UI en Figma y soporte al desarrollo backend con Node.js y bases de datos. Foco en escalabilidad, optimización de rendimiento y mejora continua del producto.",
    },
  },
  {
    company: "OffiDocs",
    position: { en: "Frontend Web Developer", es: "Desarrolladora Web Frontend" },
    duration: { en: "2025 — Present · Part-time · Remote", es: "2025 — Presente · Part-time · Remoto" },
    description: {
      en: "Design and develop responsive web interfaces using HTML5, CSS3 (Tailwind CSS) and JavaScript. Maintain and optimize websites following UX/UI best practices.",
      es: "Diseño y desarrollo de interfaces web responsivas con HTML5, CSS3 (Tailwind CSS) y JavaScript. Mantenimiento y optimización de sitios web siguiendo buenas prácticas de UX/UI.",
    },
  },
  {
    company: "Freelance",
    position: { en: "Frontend Developer & UX/UI Designer", es: "Desarrolladora Frontend y Diseñadora UX/UI" },
    duration: { en: "2024 — Present · Remote", es: "2024 — Presente · Remoto" },
    description: {
      en: "Design user interfaces in Figma ensuring usability and visual consistency. Develop frontend applications with React, Next.js and TypeScript. Build complete WordPress landing pages end to end — including Dr. Javier Ruiz Romero and Aruma Clinic.",
      es: "Diseño de interfaces en Figma asegurando usabilidad y consistencia visual. Desarrollo frontend con React, Next.js y TypeScript. Construcción de landing pages completas en WordPress — incluyendo Dr. Javier Ruiz Romero y Aruma Clinic.",
    },
  },
  {
    company: "Ambassadoria",
    position: { en: "Junior UX/UI Designer & Frontend Developer", es: "Diseñadora UX/UI Jr. y Desarrolladora Frontend" },
    duration: { en: "2024 — 2025 · Remote", es: "2024 — 2025 · Remoto" },
    description: {
      en: "Designed UX/UI solutions in Figma and implemented frontend features with TypeScript and Next.js. Collaborated on continuous platform improvements.",
      es: "Diseño de soluciones UX/UI en Figma e implementación de funcionalidades frontend con TypeScript y Next.js. Colaboración en mejoras continuas de la plataforma.",
    },
  },
];

const EDUCATION = [
  {
    institution: "Codo a Codo",
    degree: { en: "Frontend Development (PHP & Frontend)", es: "Desarrollo Frontend (PHP y Frontend)" },
    duration: "2024",
    certificate: "certificate.png",
  },
  {
    institution: "Henry Bootcamp",
    degree: { en: "Full Stack Developer · 800 hours", es: "Full Stack Developer · 800 horas" },
    duration: "2023",
    certificate: "certificate1.png",
  },
  {
    institution: "Udemy",
    degree: { en: "UX/UI Design & Figma", es: "Diseño UX/UI y Figma" },
    duration: "2024 · 22 hs",
  },
  {
    institution: "Universidad de Buenos Aires (UBA)",
    degree: { en: "Advanced Excel · 198 hours", es: "Excel Avanzado · 198 horas" },
    duration: "20 sem.",
  },
];

const SKILLS = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3 />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaWordpress />, name: "WordPress" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMysql />, name: "MySQL" },
];

export default function Resume() {
  const { lang } = useLang();
  const en = lang === "en";
  const [tab, setTab] = useState("experience");
  const [modal, setModal] = useState(null);

  const TABS = [
    { key: "experience", label: { en: "Experience", es: "Experiencia" } },
    { key: "education",  label: { en: "Education",  es: "Educación"  } },
    { key: "skills",     label: { en: "Skills",     es: "Habilidades" } },
  ];

  return (
    <main className="pt-24 pb-28 min-h-screen">
      <div className="px-8 xl:px-[10vw] 2xl:px-[12vw] pt-16 xl:pt-24">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 xl:mb-20">
          <div>
            <motion.span {...fadeUp(0)} className="label block mb-5">
              {en ? "My background" : "Mi trayectoria"}
            </motion.span>
            <motion.h1
              {...fadeUp(0.08)}
              className="font-serif font-bold text-font-secondary"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05 }}
            >
              {en ? "Résumé" : "Currículum"}
            </motion.h1>
          </div>
          <motion.a
            {...fadeUp(0.12)}
            href="/CV-Sofia-Costamagna.pdf"
            download
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] px-5 py-3 rounded-full border border-divider hover:border-accent hover:text-accent transition-colors self-start sm:self-auto"
          >
            {en ? "Download CV" : "Descargar CV"} ↓
          </motion.a>
        </div>

        {/* Tabs + Content */}
        <motion.div {...fadeUp(0.16)} className="flex flex-col xl:flex-row gap-12 xl:gap-20">

          {/* Tab nav */}
          <div className="flex flex-row xl:flex-col gap-1 xl:gap-0 flex-shrink-0 border-b xl:border-b-0 xl:border-l border-divider pb-4 xl:pb-0 xl:w-44">
            {TABS.map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-left px-4 py-2.5 xl:py-3 transition-colors relative"
                style={{ color: tab === t.key ? "var(--color-accent)" : "var(--color-font-primary)", opacity: tab === t.key ? 1 : 0.5 }}
              >
                {tab === t.key && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute bottom-0 xl:bottom-auto xl:left-0 left-0 right-0 xl:right-auto h-[2px] xl:h-full xl:w-[2px] bg-accent"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                {t.label[en ? "en" : "es"]}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">

              {/* Experience */}
              {tab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-0 border-t border-divider"
                >
                  {EXPERIENCE.map((item, i) => (
                    <div key={i} className="grid grid-cols-1 xl:grid-cols-[160px_1fr] gap-3 xl:gap-10 border-b border-divider py-8 xl:py-10">
                      <div>
                        <span className="font-mono text-[10px] text-accent tracking-wide block leading-relaxed">{typeof item.duration === "object" ? item.duration[en ? "en" : "es"] : item.duration}</span>
                        <span className="font-mono text-[12px] text-font-secondary font-medium mt-1 block">{item.company}</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-[20px] xl:text-[22px] font-medium text-font-secondary mb-3">
                          {item.position[en ? "en" : "es"]}
                        </h3>
                        <p className="text-font-primary text-[14px] xl:text-[15px] leading-relaxed opacity-70">
                          {item.description[en ? "en" : "es"]}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Education */}
              {tab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-divider"
                >
                  {EDUCATION.map((item, i) => (
                    <div key={i} className="grid grid-cols-1 xl:grid-cols-[160px_1fr] gap-3 xl:gap-10 border-b border-divider py-8 xl:py-10">
                      <div>
                        <span className="font-mono text-[10px] text-accent tracking-wide block">{item.duration}</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-[20px] xl:text-[22px] font-medium text-font-secondary mb-1">
                          {item.degree[en ? "en" : "es"]}
                        </h3>
                        <span className="font-mono text-[12px] text-font-primary opacity-60">{item.institution}</span>
                        {item.certificate && (
                          <div className="mt-4">
                            <button
                              onClick={() => setModal(item.certificate)}
                              className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent border-b border-accent/40 pb-0.5 hover:border-accent transition-colors"
                            >
                              {en ? "View Certificate →" : "Ver Certificado →"}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Skills */}
              {tab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                    {SKILLS.map((skill, i) => (
                      <li key={i}>
                        <div className="border border-divider hover:border-accent rounded-xl h-[100px] flex flex-col gap-2 justify-center items-center group transition-all duration-300 cursor-default">
                          <div className="text-3xl text-font-primary group-hover:text-accent transition-colors duration-300">
                            {skill.icon}
                          </div>
                          <span className="font-mono text-[10px] uppercase tracking-wide text-font-primary opacity-50 group-hover:opacity-80 transition-opacity">
                            {skill.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Certificate modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-6 w-full max-w-lg relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 font-mono text-[11px] uppercase tracking-wide text-font-primary hover:text-accent transition-colors"
              >
                ✕
              </button>
              <img src={`/${modal}`} alt="Certificate" className="w-full h-auto rounded-lg mt-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
