"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { useLang } from "../../components/LanguageContext";

/* ─────────────────────────────────────────────────────────
   MacBook mockup — iframe live preview
   placeholder: true → muestra fondo degradado (para sitios que bloquean iframes)
───────────────────────────────────────────────────────── */
function MacBook({ screenHeight = 240, siteUrl, viewW = 420, placeholder = false }) {
  const renderW = 1200;
  const scale = viewW / renderW;
  const iframeH = 5000;
  const maxScroll = iframeH * scale - screenHeight;
  const [scrollY, setScrollY] = useState(0);
  const screenRef = useRef(null);
  const touchY = useRef(0);

  useEffect(() => {
    if (placeholder) return;
    const el = screenRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      setScrollY((prev) => Math.max(0, Math.min(maxScroll, prev + e.deltaY)));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [maxScroll, placeholder]);

  return (
    <div>
      {/* Lid */}
      <div style={{ background: "linear-gradient(180deg,#e8e8e8 0%,#d8d8d8 100%)", borderRadius: "14px 14px 4px 4px", padding: "7px 7px 0", border: "1px solid #bbb", boxShadow: "0 2px 0 #b0b0b0, 0 20px 60px rgba(0,0,0,0.18)" }}>
        <div style={{ background: "#0d0d0d", borderRadius: "10px 10px 2px 2px", padding: "5px 5px 0" }}>
          {/* Camera */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#2c2c2c" }} />
          </div>
          {/* Browser bar */}
          <div style={{ background: "#f0f0f0", borderRadius: "4px 4px 0 0", padding: "5px 8px", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e", flexShrink: 0 }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
            <div style={{ flex: 1, background: "#e0e0e0", borderRadius: 4, padding: "2px 8px", fontFamily: "monospace", fontSize: 9, color: "#888", marginLeft: 6, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
              {siteUrl?.replace("https://", "").replace("http://", "")}
            </div>
          </div>
          {/* Screen */}
          <div
            ref={screenRef}
            style={{ height: screenHeight, overflow: "hidden", position: "relative", background: "#f5f5f5", cursor: placeholder ? "default" : "ns-resize" }}
            onTouchStart={(e) => { if (!placeholder) touchY.current = e.touches[0].clientY; }}
            onTouchMove={(e) => {
              if (placeholder) return;
              const dy = touchY.current - e.touches[0].clientY;
              touchY.current = e.touches[0].clientY;
              setScrollY((prev) => Math.max(0, Math.min(maxScroll, prev + dy)));
            }}
          >
            {placeholder ? (
              <div style={{ width: "100%", height: "100%", background: "#f9f7ff", display: "flex", flexDirection: "column" }}>
                {/* Fake nav bar */}
                <div style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "serif", fontSize: 13, color: "#333", fontWeight: 600 }}>Dr. Javier Ruiz Romero</span>
                  <div style={{ display: "flex", gap: 10 }}>
                    {["Inicio","Sobre mí","Servicios","Contacto"].map(l => (
                      <span key={l} style={{ fontFamily: "sans-serif", fontSize: 9, color: "#888" }}>{l}</span>
                    ))}
                  </div>
                </div>
                {/* Hero area */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: "0 24px" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#eeedfe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7f77dd" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <p style={{ fontFamily: "serif", fontSize: 15, color: "#333", fontWeight: 600, textAlign: "center", margin: 0 }}>Médico Especialista</p>
                  <p style={{ fontFamily: "sans-serif", fontSize: 10, color: "#999", textAlign: "center", margin: 0, lineHeight: 1.5 }}>WordPress · PHP · Diseño a medida</p>
                  <a href={siteUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: 6, fontFamily: "sans-serif", fontSize: 10, color: "#7f77dd", border: "1px solid #c5c2f5", padding: "6px 16px", borderRadius: 20, textDecoration: "none", pointerEvents: "all" }}>
                    Ver sitio →
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={siteUrl}
                title="preview"
                style={{
                  position: "absolute",
                  top: -scrollY,
                  left: 0,
                  width: renderW,
                  height: iframeH,
                  border: "none",
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  pointerEvents: "none",
                }}
              />
            )}
          </div>
        </div>
      </div>
      {/* Base */}
      <div style={{ height: 2, background: "#b0b0b0", margin: "0 2px" }} />
      <div style={{ background: "linear-gradient(180deg,#d8d8d8 0%,#c8c8c8 100%)", borderRadius: "0 0 10px 10px", height: 22, border: "1px solid #bbb", borderTop: "none", position: "relative", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}>
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 60, height: 3, background: "#b8b8b8", borderRadius: "4px 4px 0 0" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 52, height: 11, background: "#c0c0c0", borderRadius: 4, border: "1px solid #b0b0b0" }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Projects data
───────────────────────────────────────────────────────── */
const projects = [
  {
    num: "01",
    title: "WiPlex Studios",
    category: { en: "Design & Frontend", es: "Diseño y Frontend" },
    description: {
      en: "I handled UI design and frontend development — building pages with HTML, PHP, and CSS for this creative agency's platform focused on AI-powered video and storytelling content.",
      es: "Me encargué del diseño de UI y el desarrollo frontend — páginas con HTML, PHP y CSS para la plataforma de esta agencia creativa enfocada en contenido audiovisual con IA.",
    },
    tags: ["HTML/CSS", "PHP", "Design"],
    url: "https://www.wiplex.net/",
    blocked: false,
    type: "frontend",
  },
  {
    num: "02",
    title: "OffiDocs",
    category: { en: "Design & Frontend", es: "Diseño y Frontend" },
    description: {
      en: "Design and frontend development for a large-scale open-source office suite used by millions worldwide. I worked across multiple pages and features using HTML, PHP, and CSS.",
      es: "Diseño y desarrollo frontend para una plataforma de herramientas online gratuitas — editores de documentos, hojas de cálculo y más, usada por millones de usuarios.",
    },
    tags: ["HTML/CSS", "PHP", "Design"],
    url: "https://www.offidocs.com/",
    blocked: false,
    type: "frontend",
  },
  {
    num: "03",
    title: "UpToPlay",
    category: { en: "Design & Frontend", es: "Diseño y Frontend" },
    description: {
      en: "Design and frontend development for a large-scale online gaming platform. I built and styled pages across a site hosting thousands of browser-based games using HTML, PHP, and CSS.",
      es: "Diseño y desarrollo frontend para una plataforma de juegos online a gran escala. Construí y estilé páginas en un sitio con miles de juegos usando HTML, PHP y CSS.",
    },
    tags: ["HTML/CSS", "PHP", "Design"],
    url: "https://www.uptoplay.net/",
    blocked: false,
    type: "frontend",
  },
  {
    num: "04",
    title: "Anywhere",
    category: { en: "Design & Frontend", es: "Diseño y Frontend" },
    description: {
      en: "Contributed to UX/UI design in Figma and frontend development with Next.js and Tailwind for a next-gen travel platform, collaborating with a senior designer. I also worked on the HTML email templates for their communications.",
      es: "Contribuí al diseño UX/UI en Figma y al desarrollo frontend con Next.js y Tailwind para una plataforma de viajes, colaborando junto a un diseñador senior. También trabajé en los templates HTML de emails.",
    },
    tags: ["Figma", "Next.js", "Tailwind", "Email HTML"],
    url: "https://www.anywhere.com/",
    blocked: false,
    type: "design",
    note: { en: "Design contribution", es: "Contribución de diseño" },
  },
  {
    num: "05",
    title: "Ambassadoria",
    category: { en: "Design & Frontend", es: "Diseño y Frontend" },
    description: {
      en: "Contributed to UX/UI design in Figma and frontend development with Next.js for a SaaS platform that helps NGOs manage donors, volunteers, and fundraising campaigns from one dashboard.",
      es: "Contribuí al diseño UX/UI en Figma y al desarrollo frontend con Next.js para una plataforma SaaS que ayuda a ONGs a gestionar donantes, voluntarios y campañas desde un panel.",
    },
    tags: ["Figma", "Next.js", "TypeScript"],
    url: "https://www.ambassadoria.com/",
    blocked: false,
    type: "frontend",
  },
  {
    num: "06",
    title: "Buildeezy",
    category: { en: "Design & Frontend", es: "Diseño y Frontend" },
    description: {
      en: "Contributed to UX/UI design and frontend development using React and Vite for a modern web platform focused on clean interface and smooth user experience.",
      es: "Contribuí al diseño UX/UI y al desarrollo frontend con React y Vite para una plataforma web moderna, con foco en interfaz limpia y experiencia de usuario fluida.",
    },
    tags: ["React", "Vite", "Design"],
    url: "https://www.buildeezy.com/",
    blocked: false,
    type: "frontend",
  },
  {
    num: "07",
    title: "Dr. Javier Ruiz Romero",
    category: { en: "WordPress & PHP", es: "WordPress & PHP" },
    description: {
      en: "Full website development for a medical specialist — custom WordPress theme, PHP customization, responsive design, and SEO optimization. Built to be clear, trustworthy, and patient-focused.",
      es: "Desarrollo completo del sitio para un médico especialista — tema WordPress personalizado, PHP, diseño responsivo y SEO. Construido para ser claro, confiable y orientado al paciente.",
    },
    tags: ["WordPress", "PHP", "CSS"],
    url: "https://drjavierruizromero.com/",
    blocked: true,
    type: "wordpress",
  },
  {
    num: "08",
    title: "Aruma Clinic",
    category: { en: "WordPress & PHP", es: "WordPress & PHP" },
    description: {
      en: "Full website development for an aesthetic clinic — custom WordPress theme, PHP customization, and mobile-first design focused on generating trust and driving conversions.",
      es: "Desarrollo completo para una clínica estética — tema WordPress personalizado, PHP y diseño mobile-first orientado a generar confianza y conversiones.",
    },
    tags: ["WordPress", "PHP", "CSS"],
    url: "https://arumaclinic.com/",
    blocked: false,
    type: "wordpress",
  },
];

const filters = [
  { key: "all",       en: "All",        es: "Todos"      },
  { key: "frontend",  en: "Frontend",   es: "Frontend"   },
  { key: "design",    en: "Design",     es: "Diseño"     },
  { key: "wordpress", en: "WordPress",  es: "WordPress"  },
];

/* ─────────────────────────────────────────────────────────
   Project card
───────────────────────────────────────────────────────── */
function ProjectCard({ project, lang }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });

  // viewW dinámico: mide el contenedor real del mockup para escalar correctamente en cualquier viewport
  const mockupRef = useRef(null);
  const [viewW, setViewW] = useState(420);

  useEffect(() => {
    if (!mockupRef.current) return;
    const update = () => {
      const w = mockupRef.current?.offsetWidth ?? 460;
      setViewW(Math.max(220, Math.min(480, w - 24)));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(mockupRef.current);
    return () => ro.disconnect();
  }, []);

  const infoBlock = (
    <>
      <span className="label">{project.category[lang]}</span>
      <p className="text-font-primary text-[15px] leading-relaxed">{project.description[lang]}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-[10px] text-accent border border-accent/25 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-font-secondary hover:text-accent transition-colors w-fit border-b border-divider hover:border-accent pb-0.5"
      >
        {lang === "en" ? "Visit site" : "Ver sitio"} <BsArrowUpRight size={11} />
      </a>
    </>
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="py-10 xl:py-14 border-t border-divider"
    >

      {/* ── MOBILE: número + título compacto arriba del mockup ── */}
      <div className="lg:hidden mb-5">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="font-mono text-[10px] text-font-primary opacity-40">{project.num}</span>
          {project.note && (
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent border border-accent/30 px-2 py-0.5 rounded-full">
              {project.note[lang]}
            </span>
          )}
        </div>
        <h3 className="font-serif font-bold text-font-secondary" style={{ fontSize: "clamp(22px, 6vw, 30px)", lineHeight: 1.1 }}>
          {project.title}
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start gap-8 xl:gap-14">

        {/* ── DESKTOP: info completa izquierda ── */}
        <div className="hidden lg:flex lg:basis-[42%] lg:flex-shrink-0 flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-font-primary opacity-40">{project.num}</span>
            {project.note && (
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent border border-accent/30 px-2 py-0.5 rounded-full">
                {project.note[lang]}
              </span>
            )}
          </div>
          <h3 className="font-serif font-bold text-font-secondary" style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.1 }}>
            {project.title}
          </h3>
          {infoBlock}
        </div>

        {/* ── Mockup (capped a 500px para no estirarse en pantallas grandes) ── */}
        <div className="lg:basis-[54%] lg:flex-shrink-0 lg:flex lg:justify-end">
          <div ref={mockupRef} style={{ width: "100%", maxWidth: 500 }}>
            <MacBook
              siteUrl={project.url}
              viewW={viewW}
              screenHeight={Math.round(viewW / 1.62)}
              placeholder={project.blocked}
            />
          </div>
        </div>

        {/* ── MOBILE: info debajo del mockup ── */}
        <div className="lg:hidden flex flex-col gap-4">
          {infoBlock}
        </div>

      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────── */
export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { lang } = useLang();

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-8 xl:px-[10vw] 2xl:px-[12vw]"
    >
      {/* ── Header ── */}
      <div className="mb-12 xl:mb-16">
        <span className="label block mb-3">
          {lang === "en" ? "Portfolio" : "Portafolio"}
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h1
            className="font-serif font-bold text-font-secondary"
            style={{ fontSize: "clamp(38px, 5vw, 68px)", lineHeight: 1.05 }}
          >
            {lang === "en" ? "All Projects" : "Todos los proyectos"}
          </h1>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className="font-mono text-[10px] uppercase tracking-[0.14em] px-4 py-2 rounded-full border transition-all duration-200"
                style={{
                  background: activeFilter === f.key ? "#7f77dd" : "transparent",
                  color: activeFilter === f.key ? "#fff" : "#666",
                  borderColor: activeFilter === f.key ? "#7f77dd" : "#e8e8e8",
                }}
              >
                {f[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Project list ── */}
      <div>
        {filtered.map((project) => (
          <ProjectCard key={project.num} project={project} lang={lang} />
        ))}
      </div>

      {/* ── Private projects card ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 border-t border-divider pt-10"
      >
        <div
          className="rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ background: "#f5f4ff", border: "1px solid #eeedfe" }}
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent mb-2">
              {lang === "en" ? "And more..." : "Y hay más..."}
            </p>
            <h3 className="font-serif font-bold text-font-secondary text-[22px]">
              {lang === "en" ? "Private projects available on request" : "Proyectos privados disponibles bajo pedido"}
            </h3>
            <p className="text-font-primary text-[14px] mt-2 leading-relaxed">
              {lang === "en"
                ? "Some of my work is under NDA or internal — happy to share details in a conversation."
                : "Algunos proyectos son confidenciales o internos — puedo compartir detalles en una conversación."}
            </p>
          </div>
          <Link href="/contact">
            <button className="bg-accent text-white font-mono text-[11px] uppercase tracking-[0.14em] px-6 py-3 rounded-sm hover:bg-accent-hover transition-all duration-300 flex-shrink-0 whitespace-nowrap">
              {lang === "en" ? "Get in touch" : "Hablemos"}
            </button>
          </Link>
        </div>
      </motion.div>

    </motion.section>
  );
}
