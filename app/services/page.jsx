"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../components/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  {
    num: "01",
    title: { en: "Web Development", es: "Desarrollo Web" },
    description: {
      en: "Responsive, accessible websites with React, Next.js and Tailwind CSS. I specialize in translating Figma designs into clean, production-ready code — pixel-perfect and performant.",
      es: "Sitios web responsivos y accesibles con React, Next.js y Tailwind CSS. Me especializo en traducir diseños de Figma a código limpio y listo para producción — pixel-perfect y optimizado.",
    },
    tags: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    num: "02",
    title: { en: "UX/UI Design", es: "Diseño UX/UI" },
    description: {
      en: "Intuitive, visually cohesive interfaces in Figma. From wireframes to interactive prototypes — focused on user flows, hierarchy, and the details that make experiences feel right.",
      es: "Interfaces intuitivas y visualmente cohesivas en Figma. Desde wireframes hasta prototipos interactivos — con foco en flujos de usuario, jerarquía y los detalles que hacen que la experiencia se sienta bien.",
    },
    tags: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    num: "03",
    title: { en: "Design to Code", es: "Diseño a Código" },
    description: {
      en: "I bridge the gap between design and engineering — taking Figma files and building them faithfully in code, preserving design tokens, spacing, and visual consistency throughout.",
      es: "Conecto diseño y desarrollo — tomando archivos de Figma y construyéndolos fielmente en código, preservando tokens de diseño, espaciado y consistencia visual.",
    },
    tags: ["Figma", "React", "CSS", "Design Tokens"],
  },
  {
    num: "04",
    title: { en: "WordPress & CMS", es: "WordPress y CMS" },
    description: {
      en: "Custom WordPress sites with tailored themes and PHP. Clean, maintainable, and easy for clients to manage — without sacrificing design quality.",
      es: "Sitios WordPress a medida con temas propios y PHP. Limpios, mantenibles y fáciles de gestionar para el cliente — sin sacrificar calidad de diseño.",
    },
    tags: ["WordPress", "PHP", "CSS", "Custom Themes"],
  },
];

export default function Services() {
  const { lang } = useLang();
  const en = lang === "en";
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <main className="pt-24 pb-28 min-h-screen">
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] pt-16 pb-20 xl:pt-24 xl:pb-28">

        {/* Header */}
        <div className="max-w-xl mb-16 xl:mb-20">
          <motion.span {...fadeUp(0)} className="label block mb-5">
            {en ? "What I do" : "Lo que hago"}
          </motion.span>
          <motion.h1
            {...fadeUp(0.08)}
            className="font-serif font-bold text-font-secondary"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05 }}
          >
            {en
              ? <><em className="text-accent italic">Services</em></>
              : <><em className="text-accent italic">Servicios</em></>
            }
          </motion.h1>
          <motion.p
            {...fadeUp(0.16)}
            className="text-[16px] xl:text-[17px] text-font-primary leading-relaxed mt-6 opacity-70"
          >
            {en
              ? "A focused set of things I'm good at and genuinely enjoy doing."
              : "Un conjunto de cosas que hago bien y que genuinamente disfruto."
            }
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="border-t border-divider">
          {SERVICES.map((s, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={s.num}
                {...fadeUp(0.08 + i * 0.06)}
                className="border-b border-divider"
              >
                <button
                  className="w-full text-left py-8 xl:py-10 cursor-pointer group"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <div className="flex justify-between items-start gap-6">
                    <div className="flex-1">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent mb-3 block">
                        {s.num}
                      </span>
                      <h3
                        className="font-serif font-medium transition-colors duration-300"
                        style={{
                          fontSize: "clamp(22px, 2.8vw, 36px)",
                          color: isOpen ? "var(--color-accent)" : "var(--color-font-secondary)",
                        }}
                      >
                        {s.title[en ? "en" : "es"]}
                      </h3>
                    </div>

                    {/* Toggle icon */}
                    <div
                      className="flex-shrink-0 mt-1 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300"
                      style={{
                        borderColor: isOpen ? "var(--color-accent)" : "var(--color-divider)",
                        background: isOpen ? "var(--color-accent)" : "transparent",
                        color: isOpen ? "#fff" : "var(--color-font-primary)",
                      }}
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, lineHeight: 1 }}
                      >
                        +
                      </motion.span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="text-[15px] xl:text-[16px] text-font-primary leading-relaxed mt-5 max-w-[600px]">
                          {s.description[en ? "en" : "es"]}
                        </p>
                        <div className="flex gap-2 flex-wrap mt-5">
                          {s.tags.map(tag => (
                            <span key={tag} className="font-mono text-[11px]" style={{
                              border: "1px solid var(--color-divider)",
                              borderRadius: 100,
                              padding: "4px 13px",
                              color: "var(--color-font-primary)",
                              opacity: 0.6,
                            }}>{tag}</span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>

      </section>
    </main>
  );
}
