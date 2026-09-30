"use client";

import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useLang } from "../components/LanguageContext";
import Testimonials from "../components/Testimonials";
import ScrollableScreenshot from "../components/ScrollableScreenshot";
import { previewSrc, previewSrcSet, previewPoster } from "../lib/previews";
import { RevealTitle, Parallax } from "../components/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const photoCard = (rotate, delay) => ({
  hidden: { opacity: 0, y: 40, rotate: 0 },
  show:   { opacity: 1, y: 0, rotate, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

/* ─────────────────────────────────────
   MacBook mockup — captura de página completa scrolleable
───────────────────────────────────── */
function MacBook({ siteUrl, label, tags, large, badge }) {
  return (
    <div>
      {/* Lid */}
      <div style={{ background: "linear-gradient(180deg, #e8e8e8 0%, #d8d8d8 100%)", borderRadius: "14px 14px 4px 4px", padding: "7px 7px 0", border: "1px solid #bbb", boxShadow: "0 2px 0 #b0b0b0, 0 20px 60px rgba(0,0,0,0.18)" }}>
        {/* Bezel */}
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
            <div style={{ flex: 1, background: "#e0e0e0", borderRadius: 4, padding: "2px 8px", fontFamily: "monospace", fontSize: 9, color: "#555", marginLeft: 6, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
              {siteUrl?.replace("https://", "").replace("http://", "")}
            </div>
          </div>
          {/* Screen — captura scrolleable */}
          <ScrollableScreenshot src={previewSrc(siteUrl)} poster={previewPoster(siteUrl)} srcSet={previewSrcSet(siteUrl)} sizes="(max-width: 1023px) 86vw, 38vw" alt={label} aspect="16 / 10" />
        </div>
      </div>
      {/* Hinge */}
      <div style={{ height: 2, background: "#b0b0b0", margin: "0 2px" }} />
      {/* Base */}
      <div style={{ background: "linear-gradient(180deg, #d8d8d8 0%, #c8c8c8 100%)", borderRadius: "0 0 10px 10px", height: 22, border: "1px solid #bbb", borderTop: "none", position: "relative", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}>
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 60, height: 3, background: "#b8b8b8", borderRadius: "4px 4px 0 0" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 52, height: 11, background: "#c0c0c0", borderRadius: 4, border: "1px solid #b0b0b0" }} />
      </div>
      {/* Caption */}
      <div className="mt-4 text-center">
        <p className="font-serif font-bold text-font-secondary group-hover:text-accent transition-colors mb-1.5" style={{ fontSize: large ? 21 : 17 }}>{label}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-[9px] uppercase tracking-widest text-font-muted">{tag}</span>
          ))}
        </div>
        {badge && (
          <span className="inline-flex items-center gap-1 mt-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent border border-accent/30 group-hover:bg-accent group-hover:text-white group-hover:border-accent px-2.5 py-1 rounded-full transition-colors">
            {badge} →
          </span>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   iPhone mockup — captura mobile scrolleable
───────────────────────────────────── */
function Phone({ siteUrl, label, tags, badge }) {

  return (
    <div>
      <div style={{ background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)", borderRadius: 32, padding: "10px 8px", border: "1px solid #3a3a3a", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0 20px 50px rgba(0,0,0,0.35)" }}>
        {/* Dynamic island */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
          <div style={{ width: 56, height: 16, background: "#000", borderRadius: 10 }} />
        </div>
        {/* Screen — captura mobile scrolleable */}
        <ScrollableScreenshot src={previewSrc(siteUrl, "mobile")} poster={previewPoster(siteUrl, "mobile")} alt={label} aspect="9 / 16" radius={22} />
        {/* Home indicator */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
          <div style={{ width: 48, height: 4, background: "rgba(255,255,255,0.25)", borderRadius: 2 }} />
        </div>
      </div>
      {/* Caption */}
      <div className="mt-4 text-center">
        <p className="font-serif font-bold text-font-secondary group-hover:text-accent transition-colors mb-1.5" style={{ fontSize: 14 }}>{label}</p>
        <div className="flex flex-wrap gap-1.5 justify-center">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-[8px] uppercase tracking-widest text-font-muted">{tag}</span>
          ))}
        </div>
        {badge && (
          <span className="inline-flex items-center gap-1 mt-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent border border-accent/30 group-hover:bg-accent group-hover:text-white group-hover:border-accent px-2.5 py-1 rounded-full transition-colors">
            {badge} →
          </span>
        )}
      </div>
    </div>
  );
}

/* Abre el caso de estudio si existe; si no, el sitio en una pestaña nueva */
function ProjectLink({ project, children }) {
  if (project.caseStudy) {
    return <Link href={`/work/${project.caseStudy}`} className="block">{children}</Link>;
  }
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
      {children}
    </a>
  );
}

export default function Home() {
  const { t, lang } = useLang();
  const worksRef = useRef(null);
  const worksInView = useInView(worksRef, { once: true, margin: "-80px" });
  const carouselRef = useRef(null);
  const [slide, setSlide] = useState(0);

  const onCarouselScroll = () => {
    const el = carouselRef.current;
    if (el) setSlide(Math.round(el.scrollLeft / el.clientWidth));
  };

  const goToSlide = (i) => {
    const el = carouselRef.current;
    if (el) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <>
      {/* ═══════════════════════════
          HERO
      ═══════════════════════════ */}
      <section className="flex items-center pt-28 pb-12 xl:pt-36 xl:pb-16">
        <div className="w-full px-8 xl:px-[10vw] 2xl:px-[12vw]">
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">

            {/* Left: text — ~65% */}
            <div className="flex flex-col gap-6 xl:basis-[65%]">
              <RevealTitle as="h1"
                className="font-serif font-bold text-font-secondary"
                style={{ fontSize: "clamp(42px, 5.8vw, 86px)", lineHeight: 1.05 }}
              >
                {t.hero.greeting} <span className="text-accent">{t.hero.name}</span>
              </RevealTitle>

              <p
                className="animate-in text-[17px] xl:text-[19px] text-font-primary leading-relaxed"
                style={{ "--d": "150ms" }}
              >
                {t.hero.bio}
              </p>

              <div className="animate-in flex flex-wrap gap-3" style={{ "--d": "250ms" }}>
                <Link
                  href="/contact"
                  className="bg-accent text-white font-mono text-[11px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-full hover:bg-accent-hover transition-all duration-300"
                >
                  {t.hero.cta}
                </Link>
                <a
                  href={lang === "en" ? "/Sofia Costamagna-eng.pdf" : "/Sofia Costamagna-esp.pdf"}
                  download
                  className="border border-divider text-font-primary font-mono text-[11px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-2"
                >
                  {t.hero.cv} <FiDownload size={11} />
                </a>
              </div>
            </div>

            {/* Right: arch photo */}
            <div
              className="animate-in flex justify-center xl:justify-end xl:basis-[35%] flex-shrink-0"
              style={{ "--d": "300ms" }}
            >
              {/* Card + photo overflow — float loop */}
              <motion.div
                className="relative flex-shrink-0"
                style={{ width: "clamp(280px, 30vw, 420px)", paddingTop: "72px" }}
              >
                {/* Card background - full width, bottom portion */}
                <div
                  style={{
                    backgroundColor: "#eeedfe",
                    borderRadius: "48px",
                    height: "clamp(280px, 30vw, 400px)",
                  }}
                />

                {/* Photo — overflows above the card */}
                <Parallax
                  speed={28}
                  className="absolute overflow-hidden"
                  style={{
                    top: 0,
                    left: "50%",
                    x: "-50%",
                    width: "72%",
                    height: "calc(100% - 24px)",
                    borderRadius: "36px",
                  }}
                >
                  <Image
                    src="/photo1.png"
                    fill
                    priority
                    quality={100}
                    alt="Sofía Costamagna"
                    className="object-cover object-top"
                  />
                </Parallax>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          SELECTED WORK — browser mockups
      ═══════════════════════════ */}
      <section
        ref={worksRef}
        className="pt-12 pb-20 xl:pt-16 xl:pb-28"
      >
        {/* Section header */}
        <div className="px-8 xl:px-[10vw] 2xl:px-[12vw]">
          <motion.div
            initial="hidden"
            animate={worksInView ? "show" : "hidden"}
            variants={stagger}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <motion.span variants={fadeUp} className="label block mb-3">
                {t.work.label}
              </motion.span>
              <RevealTitle as="h2"
                className="font-serif font-bold text-font-secondary"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05 }}
              >
                {t.work.heading}
              </RevealTitle>
            </div>
            <motion.div variants={fadeUp} className="hidden lg:block">
              <Link href="/work">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover transition-colors">
                  {t.work.viewAll} →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── MOBILE/TABLET: carrusel 1 item a la vez ── */}
        <div
          ref={carouselRef}
          onScroll={onCarouselScroll}
          className="lg:hidden flex overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {/* WiPlex — laptop slide */}
          <div
            className="snap-start flex-shrink-0 flex justify-center pb-6 pt-2"
            style={{ width: "100vw" }}
          >
            <div className="group cursor-pointer" style={{ width: "min(360px, 86vw)" }}>
              <ProjectLink project={t.work.projects[0]}>
                <MacBook siteUrl={t.work.projects[0].url} label={t.work.projects[0].title} tags={t.work.projects[0].tags} badge={t.work.projects[0].caseStudy && t.work.caseStudy} />
              </ProjectLink>
            </div>
          </div>

          {/* Aruma Clinic — laptop slide */}
          <div
            className="snap-start flex-shrink-0 flex justify-center pb-6 pt-2"
            style={{ width: "100vw" }}
          >
            <div className="group cursor-pointer" style={{ width: "min(360px, 86vw)" }}>
              <ProjectLink project={t.work.projects[1]}>
                <MacBook siteUrl={t.work.projects[1].url} label={t.work.projects[1].title} tags={t.work.projects[1].tags} badge={t.work.projects[1].caseStudy && t.work.caseStudy} />
              </ProjectLink>
            </div>
          </div>

          {/* UpToPlay — phone slide */}
          <div
            className="snap-start flex-shrink-0 flex justify-center items-end pb-6 pt-2"
            style={{ width: "100vw" }}
          >
            <div className="group cursor-pointer" style={{ width: "min(240px, 62vw)" }}>
              <ProjectLink project={t.work.projects[2]}>
                <Phone siteUrl={t.work.projects[2].url} label={t.work.projects[2].title} tags={t.work.projects[2].tags} badge={t.work.projects[2].caseStudy && t.work.caseStudy} />
              </ProjectLink>
            </div>
          </div>
        </div>

        {/* ── Dots navegación carrusel (solo mobile) ── */}
        <div className="lg:hidden flex justify-center gap-2 pb-6">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`${i + 1} / 3`}
              aria-current={i === slide}
              className="h-6 min-w-6 flex items-center justify-center"
            >
              <span
                className="block h-1.5 rounded-full transition-all duration-300"
                style={{ width: i === slide ? 20 : 6, background: i === slide ? "#6a5fd0" : "#d0d0d0" }}
              />
            </button>
          ))}
        </div>

        {/* ── DESKTOP (1024px+): dispositivos escalonados ── */}
        <div className="hidden lg:flex items-end justify-center gap-6 xl:gap-10 px-8 xl:px-[6vw]">

          {/* LEFT LAPTOP */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={worksInView ? { opacity: 1, y: 24 } : {}}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: 16, transition: { duration: 0.25 } }}
            className="group cursor-pointer flex-shrink-0"
            style={{ width: "clamp(260px, 25vw, 420px)" }}
          >
            <Parallax speed={40}>
            <motion.div
            >
              <ProjectLink project={t.work.projects[0]}>
                <MacBook siteUrl={t.work.projects[0].url} label={t.work.projects[0].title} tags={t.work.projects[0].tags} badge={t.work.projects[0].caseStudy && t.work.caseStudy} />
              </ProjectLink>
            </motion.div>
            </Parallax>
          </motion.div>

          {/* CENTER LAPTOP */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={worksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group cursor-pointer flex-shrink-0"
            style={{ width: "clamp(400px, 38vw, 640px)" }}
          >
            <motion.div
            >
              <ProjectLink project={t.work.projects[1]}>
                <MacBook siteUrl={t.work.projects[1].url} label={t.work.projects[1].title} tags={t.work.projects[1].tags} large badge={t.work.projects[1].caseStudy && t.work.caseStudy} />
              </ProjectLink>
            </motion.div>
          </motion.div>

          {/* RIGHT PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={worksInView ? { opacity: 1, y: 24 } : {}}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: 16, transition: { duration: 0.25 } }}
            className="group cursor-pointer flex-shrink-0"
            style={{ width: "clamp(190px, 15vw, 260px)" }}
          >
            <Parallax speed={70}>
            <motion.div
            >
              <ProjectLink project={t.work.projects[2]}>
                <Phone siteUrl={t.work.projects[2].url} label={t.work.projects[2].title} tags={t.work.projects[2].tags} badge={t.work.projects[2].caseStudy && t.work.caseStudy} />
              </ProjectLink>
            </motion.div>
            </Parallax>
          </motion.div>

        </div>

        {/* Mobile/tablet: ver todos */}
        <div className="lg:hidden mt-8 text-center">
          <Link href="/work">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border-b border-accent pb-0.5">
              {t.work.viewAll} →
            </span>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════
          TESTIMONIALS — reseñas de Upwork
      ═══════════════════════════ */}
      <Testimonials />
    </>
  );
}
