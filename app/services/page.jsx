"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiCode, FiPenTool, FiLayers, FiCheck, FiArrowUpRight, FiStar } from "react-icons/fi";
import { SiWordpress } from "react-icons/si";
import { useLang } from "../../components/LanguageContext";
import { testimonials, UPWORK_PROFILE_URL } from "../../lib/testimonials";
import { RevealTitle } from "../../components/motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  {
    num: "01",
    icon: FiCode,
    title: { en: "Web Development", es: "Desarrollo Web" },
    description: {
      en: "Responsive, accessible websites with React, Next.js and Tailwind CSS — fast, clean and ready for production.",
      es: "Sitios web responsivos y accesibles con React, Next.js y Tailwind CSS — rápidos, prolijos y listos para producción.",
    },
    includes: {
      en: ["Looks great on every device", "Performance & SEO best practices", "Clean, maintainable code"],
      es: ["Se ve bien en cualquier dispositivo", "Buenas prácticas de rendimiento y SEO", "Código limpio y fácil de mantener"],
    },
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    num: "02",
    icon: FiPenTool,
    title: { en: "UX/UI Design", es: "Diseño UX/UI" },
    description: {
      en: "Intuitive, visually cohesive interfaces in Figma — focused on user flows, hierarchy and the details that make an experience feel right.",
      es: "Interfaces intuitivas y cohesivas en Figma — con foco en flujos de usuario, jerarquía y los detalles que hacen que la experiencia se sienta bien.",
    },
    includes: {
      en: ["Wireframes & user flows", "Interactive prototypes", "Consistent visual system"],
      es: ["Wireframes y flujos de usuario", "Prototipos interactivos", "Sistema visual consistente"],
    },
    tags: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    num: "03",
    icon: FiLayers,
    title: { en: "Design to Code", es: "Diseño a Código" },
    description: {
      en: "Already have a design? I build Figma files faithfully in code, preserving spacing, tokens and visual consistency.",
      es: "¿Ya tenés el diseño? Construyo tus archivos de Figma fielmente en código, respetando espaciados, tokens y consistencia visual.",
    },
    includes: {
      en: ["Faithful to the original design", "Reusable components", "Design tokens preserved"],
      es: ["Fiel al diseño original", "Componentes reutilizables", "Tokens de diseño respetados"],
    },
    tags: ["Figma", "React", "CSS", "Design Tokens"],
  },
  {
    num: "04",
    icon: SiWordpress,
    title: { en: "WordPress & CMS", es: "WordPress y CMS" },
    description: {
      en: "Custom WordPress sites with tailored themes and PHP — easy for you to manage, without sacrificing design quality.",
      es: "Sitios WordPress a medida con temas propios y PHP — fáciles de gestionar para vos, sin sacrificar calidad de diseño.",
    },
    includes: {
      en: ["Custom theme, no generic templates", "Easy content editing", "Mobile-first design"],
      es: ["Tema a medida, sin plantillas genéricas", "Edición de contenido simple", "Diseño mobile-first"],
    },
    tags: ["WordPress", "PHP", "CSS", "Custom Themes"],
  },
];

const PROCESS = [
  {
    title: { en: "Discovery", es: "Descubrimiento" },
    text: {
      en: "We talk about your goals, your audience and what you need. I come back with a clear scope and timeline.",
      es: "Hablamos de tus objetivos, tu público y lo que necesitás. Te devuelvo un alcance y tiempos claros.",
    },
  },
  {
    title: { en: "Design", es: "Diseño" },
    text: {
      en: "I shape the experience in Figma — or work from your existing design — and we refine it together with your feedback.",
      es: "Diseño la experiencia en Figma — o parto de tu diseño — y lo ajustamos juntos con tu feedback.",
    },
  },
  {
    title: { en: "Build", es: "Desarrollo" },
    text: {
      en: "I turn it into fast, responsive code and share progress along the way, so there are no surprises.",
      es: "Lo convierto en código rápido y responsivo, y te muestro avances en el camino para que no haya sorpresas.",
    },
  },
  {
    title: { en: "Launch & support", es: "Lanzamiento y soporte" },
    text: {
      en: "We test on real devices, go live, and I stay around for adjustments after launch.",
      es: "Probamos en dispositivos reales, publicamos, y sigo disponible para ajustes después del lanzamiento.",
    },
  },
];

// Reseña destacada (completa, sin truncar)
const featured = testimonials[0];

export default function Services() {
  const { lang } = useLang();
  const en = lang === "en";
  const l = en ? "en" : "es";

  return (
    <main className="pt-24 pb-16 min-h-screen">

      {/* ── Header ── */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] pt-16 xl:pt-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <motion.span className="animate-in label block mb-5" style={{ "--d": "0ms" }}>
              {en ? "Services" : "Servicios"}
            </motion.span>
            <RevealTitle as="h1"
              className="font-serif font-bold text-font-secondary"
              style={{ fontSize: "clamp(38px, 5.4vw, 72px)", lineHeight: 1.04 }}
            >
              {en
                ? <>How I can <em className="text-accent italic">help</em></>
                : <>Cómo puedo <em className="text-accent italic">ayudarte</em></>}
            </RevealTitle>
            <motion.p
              className="animate-in text-[16px] xl:text-[18px] text-font-primary leading-relaxed mt-6"
              style={{ "--d": "160ms" }}
            >
              {en
                ? "From the first sketch to the live site — design, development, or both. You work directly with me the whole way."
                : "Desde el primer boceto hasta el sitio publicado — diseño, desarrollo o ambos. Trabajás directamente conmigo en todo el proceso."}
            </motion.p>
          </div>
          <motion.div className="animate-in" style={{ "--d": "200ms" }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white font-mono text-[11px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-full hover:bg-accent-hover transition-colors duration-300"
            >
              {en ? "Tell me about your project" : "Contame tu proyecto"} <FiArrowUpRight size={13} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Service cards ── */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] pt-14 xl:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.num}
                style={{ "--d": `${120 + (i % 2) * 80}ms` }}
                className="animate-in group bg-white border border-divider rounded-3xl p-8 xl:p-10 flex flex-col gap-6 hover:border-accent/50 hover:shadow-[0_20px_50px_-20px_rgba(127,119,221,0.35)] transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-accent-light text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.15em] text-font-muted">{s.num}</span>
                </div>

                <div>
                  <h2 className="font-serif font-bold text-font-secondary" style={{ fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: 1.1 }}>
                    {s.title[l]}
                  </h2>
                  <p className="text-[15px] xl:text-[16px] text-font-primary leading-relaxed mt-3">
                    {s.description[l]}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {s.includes[l].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] text-font-secondary">
                      <span className="w-5 h-5 rounded-full bg-accent-light text-accent flex items-center justify-center flex-shrink-0">
                        <FiCheck size={12} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 flex-wrap mt-auto pt-5 border-t border-divider">
                  {s.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] text-accent border border-accent/25 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] pt-24 xl:pt-32">
        <motion.span {...fadeUp(0)} className="label block mb-4">
          {en ? "How I work" : "Cómo trabajo"}
        </motion.span>
        <RevealTitle as="h2"
          className="font-serif font-bold text-font-secondary mb-12 xl:mb-16"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05 }}
        >
          {en
            ? <>A simple, <em className="text-accent italic">transparent</em> process</>
            : <>Un proceso simple y <em className="text-accent italic">transparente</em></>}
        </RevealTitle>

        <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8">
          {PROCESS.map((step, i) => (
            <motion.li key={i} {...fadeUp(0.08 + i * 0.08)} className="relative flex flex-col gap-3">
              <div className="flex items-center gap-4 mb-2">
                <span className="w-11 h-11 rounded-full border border-accent/40 text-accent font-serif italic text-[20px] flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {i < PROCESS.length - 1 && (
                  <span className="hidden xl:block h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
                )}
              </div>
              <h3 className="font-serif font-bold text-font-secondary text-[22px]">{step.title[l]}</h3>
              <p className="text-[15px] text-font-primary leading-relaxed">{step.text[l]}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* ── Featured review ── */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] pt-24 xl:pt-32">
        <motion.figure
          {...fadeUp(0)}
          className="rounded-3xl bg-accent-light px-8 py-12 xl:px-16 xl:py-16 flex flex-col items-center text-center gap-6"
        >
          <div className="flex gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <FiStar key={i} size={16} style={{ fill: "currentColor" }} />
            ))}
          </div>
          <blockquote
            className="font-serif italic text-font-secondary max-w-3xl"
            style={{ fontSize: "clamp(22px, 2.6vw, 34px)", lineHeight: 1.3 }}
          >
            “{featured.quote}”
          </blockquote>
          <figcaption className="flex flex-col items-center gap-2">
            <span className="text-[14px] text-font-primary">{featured.project}</span>
            <a
              href={UPWORK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent border-b border-accent/40 hover:border-accent pb-0.5 inline-flex items-center gap-1"
            >
              {en ? "Verified client on Upwork" : "Cliente verificado en Upwork"} <FiArrowUpRight size={11} />
            </a>
          </figcaption>
        </motion.figure>
      </section>
    </main>
  );
}
